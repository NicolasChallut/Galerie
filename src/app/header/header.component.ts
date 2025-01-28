import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { PhotoGalleryService } from '../services/PhotoGallery.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink,
    CommonModule,
    FormsModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  image: any; // L'image actuelle
  isModalVisible: boolean = false; // Visibilité de la modale
  reference: string = ''; // Référence de la photo
  message: string ='';

  constructor(
    private route: ActivatedRoute,
    private photoGalleryService: PhotoGalleryService
  ) {}

  ngOnInit(): void {
    const imageId = this.route.snapshot.paramMap.get('reference'); // Récupérer l'ID dans l'URL
    if (imageId) {
      this.image = this.photoGalleryService.getPhotoById(imageId); // Obtenir l'image
      if (this.image) {
        this.reference = this.image.reference; // Récupérer la référence
        console.log('Référence récupérée :', this.reference); // Vérification
      }
    }
  }

  openModal(): void {
    this.isModalVisible = true; // Affiche la modale
  }

  closeModal(): void {
    this.isModalVisible = false; // Masque la modale
  }

  submitForm(): void {
    console.log('Formulaire envoyé avec la référence :', this.reference);
    console.log('Message :', this.message);
    this.closeModal();
  }
}

  

