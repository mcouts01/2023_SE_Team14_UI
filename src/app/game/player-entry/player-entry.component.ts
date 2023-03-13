import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GameStore, Team } from '../game.store';

@Component({
  selector: 'app-player-entry',
  templateUrl: './player-entry.component.html',
  styleUrls: ['./player-entry.component.scss']
})
export class PlayerEntryComponent implements OnInit {

  redTeam!: Team;
  blueTeam!: Team;

  constructor(
    private readonly store: GameStore,
    private readonly router: Router
  ) { }

  ngOnInit(): void {

    this.store.teamList$.subscribe(teamList => {
      this.redTeam = teamList.find(team => team.teamColor === 'Red')!;
      this.blueTeam = teamList.find(team => team.teamColor === 'Blue')!;
      console.log(teamList);
    });
  }
  
  startGame() {
    this.router.navigate(['/game-action']);
  }
}
