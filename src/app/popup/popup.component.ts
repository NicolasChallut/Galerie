import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-popup',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.scss'
})
export class PopupComponent {

  image: any = null; // L'image actuelle
  isModalVisible: boolean = false; // Visibilité de la modale
  reference: string | null = null; // Référence de la photo
  message: string = '';

  openModal(): void {
    console.log('🟢 Ouverture de la modale avec la référence :', this.reference);
    this.isModalVisible = true; // Affiche la modale
  }

  closeModal(): void {
    console.log('🔴 Fermeture de la modale');
    this.isModalVisible = false; // Masque la modale
  }

  submitForm(): void {
    console.log('📩 Formulaire envoyé avec la référence :', this.reference);
    console.log('✍️ Message :', this.message);
    this.closeModal();
  }

}
