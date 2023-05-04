import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_KEY } from '../config';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})

export class HomepageComponent implements OnInit{
  onSearch(searchTerm: string) {
    console.log(`Searching for "${searchTerm}"...`);
    // Perform search logic here
  }

  upComingGames: any[] = [];
  popularGames: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    const nextYear = new Date();
    nextYear.setFullYear(nextYear.getFullYear() + 1);
    const nextYearDate = nextYear.toISOString().slice(0, 10);
    const currentDate = new Date().toISOString().slice(0, 10);
    const apiUrl1 = `https://api.rawg.io/api/games?key=${API_KEY}&dates=${currentDate},${nextYearDate}&ordering=-added&page_size=10`;

    this.http.get(apiUrl1).subscribe((data: any) => {
      this.upComingGames = data.results;
    });

    const lastYear = new Date();
    lastYear.setFullYear(lastYear.getFullYear() - 1);
    const lastYearDate = lastYear.toISOString().slice(0, 10);

    const apiUrl2 = `https://api.rawg.io/api/games?key=${API_KEY}&dates=${lastYearDate},${currentDate}&ordering=-rating&page_size=10`;
    this.http.get(apiUrl2).subscribe((data: any) => {
      this.popularGames = data.results;
    });


  }







}
