import { Component, OnInit } from '@angular/core';
import { PlayerEntryStore, Team } from './player-entry.store';

@Component({
  selector: 'app-player-entry',
  templateUrl: './player-entry.component.html',
  styleUrls: ['./player-entry.component.scss'],
  providers: [PlayerEntryStore]
})
export class PlayerEntryComponent implements OnInit {

  teamList: Team[] = [];

  constructor(private readonly store: PlayerEntryStore) { }

  ngOnInit(): void {
    this.store.teamList$.subscribe(teamList => this.teamList = teamList);
    this.store.addTeam({teamColor: 'Red', playerList: []});
    this.store.addTeam({teamColor: 'Blue', playerList: []});
  }
}
