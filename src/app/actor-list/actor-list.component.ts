import { Component, OnInit } from '@angular/core';
import { ActorService } from '../services/actor.service';
import { Actor } from '../class/actor';

@Component({
  selector: 'app-actor-list',
  templateUrl: './actor-list.component.html',
  styleUrls: ['./actor-list.component.css']
})
export class ActorListComponent implements OnInit {

  actors: Actor[];
  constructor(private actorService: ActorService) { }
  getActors(): void {
    this.actorService.getActors().then(actors => this.actors = actors);
  }
  ngOnInit() {
    this.getActors();
  }
}
