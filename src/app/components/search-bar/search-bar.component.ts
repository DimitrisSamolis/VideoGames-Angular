import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { API_KEY } from 'src/app/config';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  searchTerm: string = '';
  games: any[] = [];

  @Output() searchClicked = new EventEmitter<string>();

  constructor(private router: Router, private http: HttpClient) {}

  ngOnInit(): void {}
  
  searchGames(searchTerm: string) {

    this.http.get<any>(`https://api.rawg.io/api/games?key=${API_KEY}&search=${searchTerm}&page_size=9`).subscribe(data => {
      this.games = data.results;
      this.router.navigate(['search'], { queryParams: { searchTerm } });

    });
  }
  
}
