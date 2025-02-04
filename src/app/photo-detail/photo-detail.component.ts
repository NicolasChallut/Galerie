import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { PhotoGalleryService } from '../services/PhotoGallery.service';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';


@Component({
  selector: 'app-photo-detail',
  standalone: true,
  imports: [
    RouterLink,
    CommonModule,
    HeaderComponent  
],
  templateUrl: './photo-detail.component.html',
  styleUrls: ['./photo-detail.component.scss'],
})
export class PhotoDetailComponent implements OnInit {
  isModalVisible: boolean = false; // Visibilité de la modale
  reference: string = ''; // Référence de la photo
  image: any; // L'image actuelle affichée
  relatedImages: any[] = []; // Images liées
  nextImage: any; // L'image suivante
  prevImage: any; // L'image précédente

  constructor(
    private route: ActivatedRoute,
    private photoGalleryService: PhotoGalleryService
  ) {}

  ngOnInit(): void {
    const imageRef = this.route.snapshot.paramMap.get('reference');
    if (imageRef) {
      this.image = this.photoGalleryService.getPhotoByRef(imageRef);
  
      if (this.image) {
        // Récupérer les images liées et en limiter le nombre à 2
        this.relatedImages = this.photoGalleryService
          .getRelatedPhotos(this.image.category)
          .slice(0, 2);
  
        const photos = this.photoGalleryService.getPhotos();
        const currentIndex = photos.findIndex((photo) => photo.id.toString() === imageRef);
  
        this.prevImage = currentIndex > 0 ? photos[currentIndex - 1] : null;
        this.nextImage = currentIndex < photos.length - 1 ? photos[currentIndex + 1] : null;
      }
    }
  }

  openModal(): void {
    this.isModalVisible = true; // Affiche la modale
  }

  closeModal(): void {
    this.isModalVisible = false; // Masque la modale
  }
  
}
