import { Component } from '@angular/core';
import { PhotoGalleryService } from '../services/PhotoGallery.service';

@Component({
  selector: 'app-photo-detail',
  standalone: true,
  imports: [
    
  ],
  templateUrl: './photo-detail.component.html',
  styleUrl: './photo-detail.component.scss'
})
export class PhotoDetailComponent {

  photo: any;
  reference: string = 'bf2385'; // Remplacez par une valeur dynamique si nécessaire

  constructor(private photoGalleryService: PhotoGalleryService) {}

  ngOnInit(): void {
    this.photo = this.photoGalleryService.getPhotoById(this.reference);
  }

  //gestion modale contact
  isContactModalVisible: boolean = false;
  selectedReference: string = '';

  openContactModal(reference?: string): void {
    this.selectedReference = reference || '';
    this.isContactModalVisible = true;
  }

  closeContactModal(): void {
    this.isContactModalVisible = false;
  }

}
