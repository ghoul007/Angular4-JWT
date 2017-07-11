import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {routing} from './app.routing';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';

import {MoviesService} from "./modules/movie/services/movie.service";
import {MovieComponent} from "./modules/movie/components/movie/movie.component";
import {MovieListComponent} from "./modules/movie/components/movie-list/movie-list.component";
import {ActorComponent} from "./modules/actor/components/actor/actor.component";
import {ActorListComponent} from "./modules/actor/components/actor-list/actor-list.component";
import {ActorService} from "./modules/actor/services/actor.service";


@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    ActorComponent,
    ActorListComponent,
    MovieListComponent,
    HomeComponent,
    NavbarComponent,

  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [MoviesService , ActorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
