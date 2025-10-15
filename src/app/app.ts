import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'rc-seowebmas-angular';
  isCollapsed = false;
  currentYear = new Date().getFullYear();

  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
  }
}
