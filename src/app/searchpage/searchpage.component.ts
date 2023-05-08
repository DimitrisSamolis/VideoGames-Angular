import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { API_KEY } from '../config';

interface Game {
  id: number;
  name: string;
  background_image: string;
  released: string;
}

@Component({
  selector: 'app-searchpage',
  templateUrl: './searchpage.component.html',
  styleUrls: ['./searchpage.component.css']
})
export class SearchpageComponent implements OnInit {
  games: any[] = [];
  loading = true;

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute
  ) {}

  
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

 ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const searchTerm = params['searchTerm'];
      if (!searchTerm) {
        this.games = [];
        return; // exit method early
      }
      const apiUrl = `https://api.rawg.io/api/games?key=${API_KEY}&search=${searchTerm}&page_size=9`;
      this.http.get(apiUrl).subscribe((data: any) => {
        this.games = data.results;
      });
    });

    setTimeout(() => {
      this.loading = false;
    }, 2000);
  }
  
}
