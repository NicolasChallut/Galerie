import { Component, NgModule } from '@angular/core';
import { PhotoGalleryService } from '../services/PhotoGallery.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {

  lightboxVisible: boolean = false; // Indique si la modale est visible
  lightboxImageUrl: string = ''; // URL de l'image à afficher dans la modale
  lightboxTitle: string = ''; // Titre de l'image
  lightboxCategory: string = ''; // Catégorie de l'image

  // Ouvrir la modale avec une image
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

  // Propriétés pour la bannière
  photos: any[] = []; // Toutes les photos récupérées depuis le service
  currentImageUrl: string = ''; // Image actuelle pour la bannière
  private currentIndex: number = 0; // Indice de l'image actuelle

  // Propriétés pour les filtres et la galerie d'images
  filteredImages: any[] = []; // Images filtrées à afficher
  filter = { category: '', format: '', order: '' }; // Filtres appliqués
  categories: string[] = []; // Catégories des images
  formats: string[] = []; // Formats des images

  constructor(private photoGalleryService: PhotoGalleryService) { }

  ngOnInit(): void {
    // Charger les photos depuis le service
    this.photos = this.photoGalleryService.getPhotos();

    // Initialiser les catégories et formats dynamiquement
    this.categories = [...new Set(this.photos.map((photo) => photo.category))];
    this.formats = [...new Set(this.photos.map((photo) => photo.format))];

    // Initialiser la première image de la bannière
    if (this.photos.length > 0) {
      const randomIndex = Math.floor(Math.random() * this.photos.length);
      this.currentImageUrl = this.photos[randomIndex].file;
    }

    // Initialiser la galerie d'images
    this.filteredImages = [...this.photos];
  }

 
  // Méthode pour appliquer les filtres
  onFilter(): void {
    this.filteredImages = this.photos.filter((photo) => {
      const categoryMatch = this.filter.category ? photo.category === this.filter.category : true;
      const formatMatch = this.filter.format ? photo.format === this.filter.format : true;
      return categoryMatch && formatMatch;
    });

    if (this.filter.order) {
      this.filteredImages.sort((a, b) => (this.filter.order === 'asc' ? a.year - b.year : b.year - a.year));
    }
  }
}
