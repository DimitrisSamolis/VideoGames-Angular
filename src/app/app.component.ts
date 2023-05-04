import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] 
})
export class AppComponent {
  title = 'video-games';
  loading = true;

  gameDetails: any;

  constructor(private router: Router) {}

  ngOnInit() {
    // Simulate loading data
    setTimeout(() => {
      this.loading = false;
    }, 2000);

  }
}
