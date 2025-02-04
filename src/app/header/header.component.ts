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
  image: any = null; // L'image actuelle
  isModalVisible: boolean = false; // Visibilité de la modale
  reference: string | null = null; // Référence de la photo
  message: string = '';

  constructor(
    private route: ActivatedRoute,
    private photoGalleryService: PhotoGalleryService
  ) {}

  ngOnInit(): void {
    // 🚀 Abonnement à paramMap pour suivre les changements d’URL
    this.route.paramMap.subscribe(params => {
      const imageId = params.get('reference'); // Récupérer l'ID de l'image dans l'URL
      console.log('🔍 ID de l\'image depuis l\'URL :', imageId); // Vérification 1

      if (imageId) {
        this.image = this.photoGalleryService.getPhotoByRef(imageId);
        console.log('📸 Image récupérée :', this.image); // Vérification 2

        if (this.image) {
          this.reference = this.image.reference;
          console.log('✅ Référence chargée :', this.reference); // Vérification 3
        }
      }
    });
  }

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