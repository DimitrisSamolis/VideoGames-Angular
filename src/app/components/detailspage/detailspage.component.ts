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
  gamesIds: any[] =[];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    let gameIds: number[] = [];
    

    // Make the API call and save the game IDs
    const apiUrl4 = `https://api.rawg.io/api/games/${gameIds}/screenshots?key=${API_KEY}`;
    this.http.get(apiUrl4).subscribe((data: any) => {
      // Save the game IDs to the array
      data.results.forEach((result: any) => {
        gameIds.push(result.id);
        this.gamesIds = data.results;
      });
    });
  }

}
