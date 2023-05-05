import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { API_KEY } from '../config';

@Component({
  selector: 'app-searchpage',
  templateUrl: './searchpage.component.html',
  styleUrls: ['./searchpage.component.css']
})
export class SearchpageComponent implements OnInit {
  searchTerm: string = '';
  games: any[] = [];


  constructor(
    private http: HttpClient,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const gameName = params['searchTerm'];
      const apiUrl = `https://api.rawg.io/api/games?key=${API_KEY}&search=${gameName}&page_size=9`;
      this.http.get(apiUrl).subscribe((data: any) => {
        this.games = data.results;
      });
    });
  }
}

