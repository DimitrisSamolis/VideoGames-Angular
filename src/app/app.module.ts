import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'; 
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LoaderComponent } from './components/loader/loader.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { SearchpageComponent } from './searchpage/searchpage.component';
import { DetailspageComponent } from './components/detailspage/detailspage.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'detailspage/:id', component: DetailspageComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoaderComponent,
    FooterComponent,
    HomepageComponent,
    SearchBarComponent,
    SearchpageComponent,
    DetailspageComponent
  ],
  imports: [
    RouterModule.forRoot(routes, {enableTracing: true}),
    BrowserModule,
    HttpClientModule,
    FormsModule,
  ],
  exports:[DetailspageComponent],
  providers: [],
  bootstrap: [AppComponent]
})



export class AppModule { }
