import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PhotoGalleryService {
  // Tableau des photos extrait du fichier Excel
  private photos = [
    {
      file: 'assets/photos/nathalie-0.jpeg',
      title: 'Santé !',
      reference: 'bf2385',
      category: 'Réception',
      year: 2019,
      format: 'paysage',
      type: 'Argentique',
    },
    {
      file: 'assets/photos/nathalie-1.jpeg',
      title: 'Et bon anniversaire !',
      reference: 'bf2386',
      category: 'Réception',
      year: 2020,
      format: 'paysage',
      type: 'Argentique',
    },
    {
      file: 'assets/photos/nathalie-2.jpeg',
      title: "Let's party!",
      reference: 'bf2387',
      category: 'Concert',
      year: 2021,
      format: 'paysage',
      type: 'Numérique',
    },
    {
      file: 'assets/photos/nathalie-3.jpeg',
      title: 'Tout est installé',
      reference: 'bf2388',
      category: 'Mariage',
      year: 2019,
      format: 'portrait',
      type: 'Argentique',
    },
    {
      file: 'assets/photos/nathalie-4.jpeg',
      title: "Vers l'éternité",
      reference: 'bf2389',
      category: 'Mariage',
      year: 2020,
      format: 'portrait',
      type: 'Numérique',
    },
    {
      file: 'assets/photos/nathalie-5.jpeg',
      title: 'Embrassez la mariée',
      reference: 'bf2390',
      category: 'Mariage',
      year: 2021,
      format: 'portrait',
      type: 'Numérique',
    },
    {
      file: 'assets/photos/nathalie-6.jpeg',
      title: 'Dansons ensemble',
      reference: 'bf2391',
      category: 'Réception',
      year: 2020,
      format: 'paysage',
      type: 'Numérique',
    },
    {
      file: 'assets/photos/nathalie-7.jpeg',
      title: 'le menu',
      reference: 'bf2392',
      category: 'Mariage',
      year: 2019,
      format: 'portrait',
      type: 'Numérique',
    },
    {
      file: 'assets/photos/nathalie-8.jpeg',
      title: 'Au bal masqué',
      reference: 'bf2393',
      category: 'Concert',
      year: 2021,
      format: 'portrait',
      type: 'Numérique',
    },
    {
      file: 'assets/photos/nathalie-9.jpeg',
      title: 'let\' dance!',
      reference: 'bf2394',
      category: 'Mariage',
      year: 2022,
      format: 'paysage',
      type: 'Numerique',
    },
    {
      file: 'assets/photos/nathalie-10.jpeg',
      title: 'Jour du match ',
      reference: 'bf2395',
      category: 'télévision',
      year: 2022,
      format: 'paysage',
      type: 'Numérique',
    },
    {
      file: 'assets/photos/nathalie-11.jpeg',
      title: 'Péparation',
      reference: 'bf2396',
      category: 'Mariage',
      year: 2022,
      format: 'paysage',
      type: 'Argentique',
    },
    {
      file: 'assets/photos/nathalie-12.jpeg',
      title: 'Bière ou eau plate ?',
      reference: 'bf2397',
      category: 'concert',
      year: 2022,
      format: 'paysage',
      type: 'Numérique',
    },
    {
      file: 'assets/photos/nathalie-13.jpeg',
      title: 'Bouquet final',
      reference: 'bf2398',
      category: 'Mariage',
      year: 2022,
      format: 'portrait',
      type: 'Numérique',
    },
    {
      file: 'assets/photos/nathalie-14.jpeg',
      title: 'Du soir au matin',
      reference: 'bf2399',
      category: 'Mariage',
      year: 2022,
      format: 'portrait',
      type: 'Argentique',
    },
    {
      file: 'assets/photos/nathalie-15.jpeg',
      title: 'Team mariée',
      reference: 'bf2400',
      category: 'Mariage',
      year: 2022,
      format: 'portrait',
      type: 'Numérique',
    },
  ];

  constructor() {}

  // Méthode pour récupérer toutes les photos
  getPhotos() {
    return this.photos;
  }

  // Méthode pour récupérer une photo par sa référence
  getPhotoById(reference: string) {
    return this.photos.find((photo) => photo.reference === reference);
  }

  
  getRelatedPhotos(category: string): any[] {
    return this.photos.filter((photo) => photo.category === category);
  }
}



