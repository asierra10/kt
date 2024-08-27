import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MobilMenuComponent } from '../mobil-menu/mobil-menu.component';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [MobilMenuComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

  constructor(private router: Router) {}

  navigate(destination:string) {
    this.router.navigate([destination]);
  }

  isMenuOpen = false;

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

}
