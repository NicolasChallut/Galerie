import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from "./footer/footer.component";
import { ModalComponent } from './modal/modal.component';


@Component({
  selector: 'app-root',
  standalone: true, // Indique que ce composant est standalone
  imports: [
    RouterOutlet, // Importation du RouterOutlet pour la navigation
    ReactiveFormsModule,
    FooterComponent,
    ModalComponent
],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent { }
