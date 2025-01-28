import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component'; // Suppose que ce composant est aussi standalone
import { ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from "./footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true, // Indique que ce composant est standalone
  imports: [
    RouterOutlet, // Importation du RouterOutlet pour la navigation
    HeaderComponent, // Le header en standalone
    ReactiveFormsModule,
    FooterComponent
],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent { }
