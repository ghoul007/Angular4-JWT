import { Injectable } from '@angular/core';
import {ACTORS} from "../classes/actor_data";
import {Actor} from "../classes/actor";


@Injectable()
export class ActorService {

  constructor() { }

  getActors(): Promise<Actor[]> {
    return Promise.resolve(ACTORS);
  }

}