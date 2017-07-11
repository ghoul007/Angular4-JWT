import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';

import {MovieListComponent} from "./modules/movie/components/movie-list/movie-list.component";
import {ActorListComponent} from "./modules/actor/components/actor-list/actor-list.component";



const appRoutes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'actorlist',
        component: ActorListComponent
    },
    {
        path: 'movielist',
        component: MovieListComponent
    }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);