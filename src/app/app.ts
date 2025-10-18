import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'rc-seowebmas-angular';
  isCollapsed = false;
  currentYear = new Date().getFullYear();
  currentTheme: 'seoTheme' | 'seoDark' = 'seoTheme';

  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
  }

  toggleTheme() {
    this.currentTheme = this.currentTheme === 'seoTheme' ? 'seoDark' : 'seoTheme';
    document.documentElement.setAttribute('data-theme', this.currentTheme);
    localStorage.setItem('theme', this.currentTheme);
  }
  ngOnInit() {
    const savedTheme = localStorage.getItem('theme') as 'seoTheme' | 'seoDark' | null;
    if (savedTheme) {
      this.currentTheme = savedTheme;
      document.documentElement.setAttribute('data-theme', this.currentTheme);
    }
  }

}
