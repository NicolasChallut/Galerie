import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink,
    CommonModule,
    FormsModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Input() isVisible: boolean = false;
  @Input() reference: string = ''; // Référence transmise à la modale
  message: string = '';

  closeModal(event?: Event): void {
    this.isVisible = false;
    if (event) {
      event.stopPropagation();
    }
  }

  submitForm(): void {
    console.log('Formulaire envoyé avec la référence :', this.reference);
    console.log('Message :', this.message);
    this.closeModal();
  }
}
