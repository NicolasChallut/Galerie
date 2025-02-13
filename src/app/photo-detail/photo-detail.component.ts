import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { PhotoGalleryService } from '../services/PhotoGallery.service';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { LightBoxComponent } from '../light-box/light-box.component';
import { ModalService } from '../services/modal.service';

@Component({
  selector: 'app-photo-detail',
  standalone: true,
  imports: [

    RouterLink,
    CommonModule,
    HeaderComponent,
    LightBoxComponent,
    
    
  ],
  templateUrl: './photo-detail.component.html',
  styleUrls: ['./photo-detail.component.scss'],
})
export class PhotoDetailComponent implements OnInit {

  @ViewChild(LightBoxComponent) lightbox!: LightBoxComponent; // Récupération de l'instance du LightBoxComponent

  isModalVisible: boolean = false;
  reference: string = '';
  image: any;
  relatedImages: any[] = [];
  nextImage: any;
  prevImage: any;

  constructor(
    public modalService: ModalService,
    private route: ActivatedRoute,
    private photoGalleryService: PhotoGalleryService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const imageRef = params.get('reference');
  
      if (imageRef) {
        this.reference = imageRef; // ✅ Met à jour la référence correctement
        this.modalService.reference = imageRef; // ✅ Met à jour la référence dans le service

        // Récupérer l'image actuelle
        this.image = this.photoGalleryService.getPhotoByRef(imageRef);
  
        if (this.image) {
          this.relatedImages = this.photoGalleryService
            .getRelatedPhotos(this.image.category)
            .filter(photo => photo.reference !== this.image.reference)
            .slice(0, 2);
  
          // Récupérer toutes les photos
          const photos = this.photoGalleryService.getPhotos();
          
          // Trouver l'index de l'image actuelle en cherchant par `reference`
          const currentIndex = photos.findIndex(photo => photo.reference === this.image.reference);
  
          // Définir prevImage et nextImage correctement
          this.prevImage = currentIndex > 0 ? photos[currentIndex - 1] : null;
          this.nextImage = currentIndex < photos.length - 1 ? photos[currentIndex + 1] : null;
        }
      }
    });
  }
  
  
  

  openModal(): void {
    this.modalService.openModal(this.reference);
  }

  closeModal(): void {
    this.isModalVisible = false;
  }

  // ✅ Fonction pour ouvrir la lightbox
  openLightbox(image: any): void {
    this.lightbox.openLightbox(image.file, image.title, image.category);
  }
}
