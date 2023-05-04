import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { API_KEY } from 'src/app/config';

@Component({
  selector: 'app-detailspage',
  templateUrl: './detailspage.component.html',
  styleUrls: ['./detailspage.component.css']
})
export class DetailspageComponent implements OnInit {
  gameId: number | undefined;
  gameDetails: any;
  gameScreenshots!: any[];

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.gameId = Number(params.get('id'));

      // Make the API call and save the game details
      const apiUrl = `https://api.rawg.io/api/games/${this.gameId}?key=${API_KEY}`;
      this.http.get(apiUrl).subscribe((data: any) => {
        this.gameDetails = data;
      });

      // Make the API call and save the game screenshots
      const apiUrl2 = `https://api.rawg.io/api/games/${this.gameId}/screenshots?key=${API_KEY}`;
      this.http.get(apiUrl2).subscribe((data: any) => {
        this.gameScreenshots = data.results;
      });
    });
  }
}
