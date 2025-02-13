import { Component } from '@angular/core';
import { ModalService } from '../services/modal.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {
  constructor(public modalService: ModalService) {}
  
  submitForm(): void {
    this.modalService.submitForm();
  }
}