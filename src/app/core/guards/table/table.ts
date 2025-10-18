import { Component, signal, computed, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

/** Column configuration */
export interface TableColumn<T> {
  field: keyof T | string;
  header: string;
  sortable?: boolean;
  cell?: (row: T) => string;
}

/** Row action */
export interface TableAction<T> {
  label: string;
  onClick: (row: T) => void;
}

/** Generic table component */
@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './table.html',
})
export class Table<T extends { actions?: TableAction<T>[] }> {
  /** Inputs */
  @Input() title = '';
  @Input() columns: TableColumn<T>[] = [];

  @Input() set data(value: T[] | null) {
    this._data.set(value ?? []);
    this.currentPage.set(1);
  }

  /** Internal data signal */
  private _data = signal<T[]>([]);

  /** UI signals */
  searchTerm = signal('');
  pageSize = signal(10);
  currentPage = signal(1);
  sortField = signal<string | null>(null);
  sortDirection = signal<'asc' | 'desc'>('asc');
  collapsed = signal(false);

  /* --- Derived/computed --- */
  filteredData = computed(() => {
    const term = this.searchTerm().trim().toLowerCase();
    if (!term) return this._data();
    return this._data().filter(row =>
      // search in all stringifiable values (simple)
      Object.values(row).some(v => String(v ?? '').toLowerCase().includes(term))
    );
  });

  sortedData = computed(() => {
    const arr = [...this.filteredData()];
    const field = this.sortField();
    if (!field) return arr;
    const dir = this.sortDirection();
    arr.sort((a, b) => {
      const av = String((a as any)[field] ?? '');
      const bv = String((b as any)[field] ?? '');
      return dir === 'asc' ? av.localeCompare(bv) : bv.localeCompare(av);
    });
    return arr;
  });

  paginatedData = computed(() => {
    const start = (this.currentPage() - 1) * this.pageSize();
    return this.sortedData().slice(start, start + this.pageSize());
  });

  totalItems = computed(() => this.filteredData().length);
  totalPages = computed(() => Math.max(1, Math.ceil(this.totalItems() / this.pageSize())));
  startItem = computed(() => (this.currentPage() - 1) * this.pageSize());
  endItem = computed(() => Math.min(this.startItem() + this.pageSize(), this.totalItems()));

  /* --- UI methods --- */
  toggleCollapse() { this.collapsed.update(v => !v); }

  onPageSizeChange(event: Event) {
    const tgt = event.target as HTMLSelectElement | null;
    if (!tgt) return;
    this.setPageSize(Number(tgt.value) || 10);
  }

  setPageSize(size: number) {
    this.pageSize.set(size);
    this.currentPage.set(1);
  }

  onSearchChange(event: Event) {
    const tgt = event.target as HTMLInputElement | null;
    if (!tgt) return;
    this.searchTerm.set(tgt.value ?? '');
    this.currentPage.set(1);
  }

  prevPage() {
    if (this.currentPage() > 1) this.currentPage.update(p => p - 1);
  }
  nextPage() {
    if (this.currentPage() < this.totalPages()) this.currentPage.update(p => p + 1);
  }


  toggleSort(fieldKey: string) {
    if (this.sortField() === fieldKey) {
      this.sortDirection.update(d => (d === 'asc' ? 'desc' : 'asc'));
    } else {
      this.sortField.set(fieldKey);
      this.sortDirection.set('asc');
    }
  }

  /** Helpers para evitar lógica en template */
  getFieldKey(field: string | number | symbol): string {
    return String(field);
  }

  getCellValue(row: T, col: TableColumn<T>): string {
    if (col.cell) return col.cell(row);
    const key = this.getFieldKey(col.field as any);
    return String((row as any)[key] ?? '');
  }
}
