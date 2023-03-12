import { Component, OnInit } from '@angular/core';
import { GameStore, Team } from '../game.store';

@Component({
  selector: 'app-player-entry',
  templateUrl: './player-entry.component.html',
  styleUrls: ['./player-entry.component.scss'],
  providers: [GameStore]
})
export class PlayerEntryComponent implements OnInit {

  teamList: Team[] = [];

  constructor(private readonly store: GameStore) { }

  ngOnInit(): void {
    this.store.teamList$.subscribe(teamList => this.teamList = teamList);
    this.store.addTeam({teamColor: 'Red', playerList: []});
    this.store.addTeam({teamColor: 'Blue', playerList: []});
  }
  
  startGame() {
    // start the game here...
  }
}
