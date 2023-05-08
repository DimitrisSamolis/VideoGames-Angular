import { Component, OnInit } from '@angular/core';

interface Game {
  id: number;
  name: string;
  background_image: string;
  released: string;
}

@Component({
  selector: 'app-favoritepage',
  templateUrl: './favoritepage.component.html',
  styleUrls: ['./favoritepage.component.css']
})

export class FavoritepageComponent implements OnInit {
  favorites: any[] = [];
  loading = true;

  constructor() { }

  ngOnInit(): void {
    this.favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    setTimeout(() => {
      this.loading = false;
    }, 2000);
  }

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
