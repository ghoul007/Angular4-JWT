import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ActorComponent} from './actor/actor.component';
import {MovieComponent} from './movie/movie.component';
import {HomeComponent} from './home/home.component';



const appRoutes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'actor',
        component: ActorComponent
    },
    {
        path: 'movie',
        component: MovieComponent
    }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);