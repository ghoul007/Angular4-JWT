import { Injectable } from '@angular/core';
import { ACTORS } from '../class/actor_data';
import { Actor } from '../class/actor';

@Injectable()
export class ActorService {

  constructor() { }

  getActors(): Promise<Actor[]> {
    return Promise.resolve(ACTORS);
  }

}