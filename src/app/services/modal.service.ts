import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private modalState = new BehaviorSubject<boolean>(false);
  isModalOpen$ = this.modalState.asObservable();

  reference: string | null = null; // Référence de la photo
  message: string = ''; // Message du formulaire

  openModal(reference: string | null = null) {
    console.log('🟢 Ouverture de la modale avec la référence :', reference);
    this.reference = reference; // Met à jour la référence de la photo
    this.modalState.next(true);
  }

  closeModal() {
    console.log('🔴 Fermeture de la modale');
    this.modalState.next(false);
  }

  submitForm() {
    console.log('📩 Formulaire envoyé avec la référence :', this.reference);
    console.log('✍️ Message :', this.message);
    this.closeModal();
  }
}
