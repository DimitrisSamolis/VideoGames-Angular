import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailspageComponent } from './detailspage/detailspage.component';
import { HomepageComponent } from 'src/app/homepage/homepage.component';


const routes: Routes = [
  { path: '', redirectTo: '/homepage', pathMatch: 'full' },
  { path: 'homepage', component: HomepageComponent },
  { path: 'detailspage/:id', component: DetailspageComponent },
  { path: 'search/:game-search', component: HomepageComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
