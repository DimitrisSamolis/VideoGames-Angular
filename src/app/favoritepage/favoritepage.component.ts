import { Component, OnInit } from '@angular/core';
import { FavoritesService } from '../sevices/favorites.service';

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

  constructor(private favoritesService : FavoritesService) { }

  ngOnInit(): void {
    this.favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    setTimeout(() => {
      this.loading = false;
    }, 2000);
  }

  toggleFavoriteHandler(game: Game) {
    this.favoritesService.toggleFavorite(game)
  }

  isFavorite(game: Game): boolean {
    return this.favoritesService.isFavorite(game)
  }

}
