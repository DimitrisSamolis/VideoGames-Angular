import { Injectable } from '@angular/core';

interface Game {
    id: number;
    name: string;
    background_image: string;
    released: string;
}

@Injectable({
  providedIn: 'root'
})

export class FavoritesService {
  private favorites: string[] = [];
  loading = true;

  constructor() { }

  toggleFavorite(game: Game): void {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    const index = favorites.findIndex((f: { id: number; }) => f.id === game.id);
    if (index > -1) {
      favorites.splice(index, 1);
    } else {
      favorites.push(game);
    }
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }

  isFavorite(game: Game): boolean {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    return favorites.some((f: { id: number; }) => f.id === game.id);
  }
}
