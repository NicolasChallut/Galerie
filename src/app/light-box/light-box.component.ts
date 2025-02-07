import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-light-box',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './light-box.component.html',
  styleUrl: './light-box.component.scss'
})
export class LightBoxComponent {

  lightboxVisible: boolean = false; // Indique si la modale est visible
  lightboxImageUrl: string = ''; // URL de l'image à afficher dans la modale
  lightboxTitle: string = ''; // Titre de l'image
  lightboxCategory: string = ''; // Catégorie de l'image

  // Ouvrir la modale
  openLightbox(imageUrl: string, title: string, category: string): void {
    this.lightboxImageUrl = imageUrl;
    this.lightboxTitle = title;
    this.lightboxCategory = category;
    this.lightboxVisible = true;
  }

  // Fermer la modale
  closeLightbox(): void {
    this.lightboxVisible = false;
  }
}
