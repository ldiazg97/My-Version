import { Component } from '@angular/core';
import { Table, TableAction, TableColumn } from '../../../../core/guards/table/table';



interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  actions?: TableAction<User>[];
}
@Component({
  selector: 'app-subscriptions',
  imports: [
    Table,
  ],
  templateUrl: './subscriptions.html',
  styleUrl: './subscriptions.css',
})
export class Subscriptions {
  title = 'Usuarios';

  users: User[] = [
    { id: 1, name: 'Juan Pérez', email: 'juan@example.com', role: 'Admin' },
    { id: 2, name: 'Ana López', email: 'ana@example.com', role: 'Editor' },
    { id: 3, name: 'Carlos Gómez', email: 'carlos@example.com', role: 'Viewer' },
    { id: 4, name: 'María Díaz', email: 'maria@example.com', role: 'Editor' },
    { id: 5, name: 'Pedro Sánchez', email: 'pedro@example.com', role: 'Viewer' },
    { id: 6, name: 'Laura Fernández', email: 'laura@example.com', role: 'Admin' },
    { id: 7, name: 'Miguel Torres', email: 'miguel@example.com', role: 'Editor' },
    { id: 8, name: 'Sofía Ramírez', email: 'sofia@example.com', role: 'Viewer' },
    { id: 9, name: 'Javier Morales', email: 'javier@example.com', role: 'Editor' },
    { id: 10, name: 'Lucía Herrera', email: 'lucia@example.com', role: 'Viewer' },
    { id: 11, name: 'Diego Castro', email: 'diego@example.com', role: 'Admin' },
    { id: 12, name: 'Valentina Ortiz', email: 'valentina@example.com', role: 'Editor' },
    { id: 13, name: 'Fernando Ruiz', email: 'fernando@example.com', role: 'Viewer' },
    { id: 14, name: 'Carolina Vega', email: 'carolina@example.com', role: 'Editor' },
    { id: 15, name: 'Andrés Molina', email: 'andres@example.com', role: 'Viewer' }

  ];

  columns: TableColumn<User>[] = [
    { field: 'id', header: 'ID', sortable: true },
    { field: 'name', header: 'Nombre', sortable: true },
    { field: 'email', header: 'Correo', sortable: true },
    { field: 'role', header: 'Rol', sortable: true },
  ];

  constructor() {
    // Asignamos las acciones a cada usuario
    this.users = this.users.map(u => ({
      ...u,
      actions: this.getActions(u),
    }));
  }

  /** Acciones disponibles por fila */
  getActions(user: User): TableAction<User>[] {
    return [
      {
        label: 'Ver',
        onClick: (row) => alert(`👁️ Ver usuario: ${row.name}`),
      },
      {
        label: 'Editar',
        onClick: (row) => alert(`✏️ Editar usuario: ${row.name}`),
      },
      {
        label: 'Eliminar',
        onClick: (row) => {
          if (confirm(`¿Eliminar a ${row.name}?`)) {
            this.users = this.users.filter(u => u.id !== row.id);
          }
        },
      },
      {
        label: 'Más info',
        onClick: (row) => console.log('Más info de', row),
      },
    ];
  }
}
