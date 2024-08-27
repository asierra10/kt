import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mobil-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mobil-menu.component.html',
  styleUrl: './mobil-menu.component.css'
})
export class MobilMenuComponent {

  @Input() isOpen = false;
  @Output() closeMenu = new EventEmitter<void>();

  closeMenuHandler(): void {
    this.closeMenu.emit();
  }

}
