import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div *ngIf="loading">
    <app-loader></app-loader>
  </div>
  <div *ngIf="!loading">
    <app-header></app-header>
    <app-footer></app-footer>
    <app-homepage></app-homepage>
  </div>`,
  styleUrls: ['./app.component.css'] 
})
export class AppComponent {
  title = 'video-games';
  loading = true;

  ngOnInit() {
    // Simulate loading data
    setTimeout(() => {
      this.loading = false;
    }, 2000);
  }
}
