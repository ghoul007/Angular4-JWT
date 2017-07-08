import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MovieComponent } from './movie/movie.component';
import { ActorComponent } from './actor/actor.component';
import { ActorListComponent } from './actor-list/actor-list.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import {routing} from './app.routing';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import {MoviesService} from './services/movie.service';
import {ActorService} from './services/actor.service';


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
