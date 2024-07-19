import { Component, signal } from '@angular/core';

@Component({
  selector: 'top-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  showMenu = signal(false);

  invertMenu(): void {
    this.showMenu.update((value) => !value);
  }
}
