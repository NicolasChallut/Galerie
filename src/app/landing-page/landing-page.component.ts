import { Component, ViewChild } from '@angular/core';
import { PhotoGalleryService } from '../services/PhotoGallery.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from "../header/header.component";
import { LightBoxComponent } from '../light-box/light-box.component';


@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    RouterLink,
    HeaderComponent,
    LightBoxComponent
],
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],

})

export class LandingPageComponent {

  @ViewChild(LightBoxComponent) lightbox!: LightBoxComponent; // Récupération de l'instance du LightBoxComponent



  lightboxVisible: boolean = false; // Indique si la modale est visible
  lightboxImageUrl: string = ''; // URL de l'image à afficher dans la modale
  lightboxTitle: string = ''; // Titre de l'image
  lightboxCategory: string = ''; // Catégorie de l'image

  // Propriétés pour la bannière
  photos: any[] = []; // Toutes les photos récupérées depuis le service
  currentImageUrl: string = ''; // Image actuelle pour la bannière
  private currentIndex: number = 0; // Indice de l'image actuelle

  // Propriétés pour les filtres et la galerie d'images
  filteredImages: any[] = []; // Images filtrées à afficher
  displayedImages: any[] = []; // Images affichées dans la galerie (par lots)
  filter = { category: '', format: '', order: '' }; // Filtres appliqués
  categories: string[] = []; // Catégories des images
  formats: string[] = []; // Formats des images
  dropdowns: { [key: string]: boolean } = {
    categoryDropdown: false,
    formatDropdown: false,
    orderDropdown: false,
  };

  imagesPerPage: number = 8; // Nombre d'images affichées par lot
  totalImagesShown: number = this.imagesPerPage; // Nombre total d'images actuellement affichées

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

    // Initialiser la galerie d'images filtrées
    this.filteredImages = [...this.photos];

    // Initialiser les images affichées
    this.updateDisplayedImages();
  }

  // Met à jour les images affichées en fonction du filtre et du nombre total d'images à afficher
  updateDisplayedImages(): void {
    this.displayedImages = this.filteredImages.slice(0, this.totalImagesShown);
  }

  // Méthode pour charger plus d'images
  loadMore(): void {
    if (this.totalImagesShown < this.filteredImages.length) {
      this.totalImagesShown += this.imagesPerPage;
      this.updateDisplayedImages();
    }
  }

  // Méthode pour appliquer les filtres
  onFilter(): void {
    this.filteredImages = this.photos.filter((photo) => {
      const categoryMatch = this.filter.category
        ? photo.category === this.filter.category
        : true;
      const formatMatch = this.filter.format
        ? photo.format === this.filter.format
        : true;
      return categoryMatch && formatMatch;
    });

    if (this.filter.order) {
      this.filteredImages.sort((a, b) =>
        this.filter.order === 'asc' ? a.year - b.year : b.year - a.year
      );
    }

    // Réinitialiser le nombre d'images affichées après le filtre
    this.totalImagesShown = this.imagesPerPage;
    this.updateDisplayedImages();
  }

  // Ouvrir ou fermer un menu déroulant
  toggleDropdown(dropdown: keyof typeof this.dropdowns): void {
    this.dropdowns[dropdown] = !this.dropdowns[dropdown];
  }

  // Appliquer un filtre spécifique
  setFilter(type: 'category' | 'format' | 'order', value: string) {
    this.filter[type] = value; // TypeScript comprend que "type" correspond à une clé valide
    this.onFilter();
  }

  // ✅ Ouvrir la lightbox en utilisant `@ViewChild(LightBoxComponent)`
  openLightbox(image: any): void {
    if (this.lightbox) {
      this.lightbox.openLightbox(image.file, image.title, image.category);
    }
  }

}


