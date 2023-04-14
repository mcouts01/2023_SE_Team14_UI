import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';
import { GameStore, Team } from '../game.store';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game-action',
  templateUrl: './game-action.component.html',
  styleUrls: ['./game-action.component.scss']
})
export class GameActionComponent implements OnInit {

  setup: boolean = true;
  action: boolean = false;
  ended: boolean = false;

  redTeam!: Team;
  blueTeam!: Team;

  constructor(private readonly store: GameStore, private readonly gameService: GameService, private readonly router: Router) { }

  ngOnInit(): void {
    this.store.teamList$.subscribe((teamList) => {
      this.redTeam = teamList.find(team => team.teamColor === 'Red')!;
      this.blueTeam = teamList.find(team => team.teamColor === 'Blue')!;
      console.log(teamList);
    });

    this.gameService.openSseChannel();
  }

  startGameAction() {
    this.setup = false;
    this.action = true;
    this.ended = false;
  }

  endGameAction() {
    this.setup = false;
    this.action = false;
    this.ended = true;

    this.store.resetGame();
    this.router.navigateByUrl('/player-entry');
  }

}
