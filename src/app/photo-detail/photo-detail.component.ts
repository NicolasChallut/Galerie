import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { PhotoGalleryService } from '../services/PhotoGallery.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-photo-detail',
  standalone: true,
  imports: [
    RouterLink,
    CommonModule
  ],
  templateUrl: './photo-detail.component.html',
  styleUrls: ['./photo-detail.component.scss'],
})
export class PhotoDetailComponent implements OnInit {
  image: any; // L'image actuelle affichée
  relatedImages: any[] = []; // Images liées
  nextImage: any; // L'image suivante
  prevImage: any; // L'image précédente

  constructor(
    private route: ActivatedRoute,
    private photoGalleryService: PhotoGalleryService
  ) {}

  ngOnInit(): void {
    // Récupérer l'identifiant de l'image depuis l'URL
    const imageId = this.route.snapshot.paramMap.get('id');
    if (imageId) {
      // Trouver l'image actuelle dans le service
      this.image = this.photoGalleryService.getPhotoById(imageId);

      if (this.image) {
        // Charger les images liées
        this.relatedImages = this.photoGalleryService.getRelatedPhotos(
          this.image.category
        );

        // Identifier l'image suivante et précédente
        const currentIndex = this.photoGalleryService
          .getPhotos()
          .findIndex((photo) => photo.reference === imageId);

        const photos = this.photoGalleryService.getPhotos();
        this.prevImage = currentIndex > 0 ? photos[currentIndex - 1] : null;
        this.nextImage =
          currentIndex < photos.length - 1 ? photos[currentIndex + 1] : null;
      }
    }
  }
}
