import { Component, Input, OnInit } from '@angular/core';
import { PlayerEntryComponent } from '../player-entry.component';
import { Player, PlayerEntryStore, Team } from '../player-entry.store';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss'],
})
export class TeamComponent implements OnInit {

  @Input() team: Team = {teamColor: '', playerList: []};

  constructor(private readonly store: PlayerEntryStore) { }

  ngOnInit(): void {}

  addPlayer() {
    this.team.playerList.push({id: 0, codeName: '', team: ''});
  }
}
