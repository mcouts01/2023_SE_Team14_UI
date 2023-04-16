import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';
import { GameStore, Team } from '../game.store';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ResultsDialogComponent } from './results-dialog/results-dialog.component';

@Component({
  selector: 'app-game-action',
  templateUrl: './game-action.component.html',
  styleUrls: ['./game-action.component.scss']
})
export class GameActionComponent implements OnInit {

  setup: boolean = true;
  action: boolean = false;
  ended: boolean = false;
  redWinOutcome: boolean = false;
  blueWinOutcome: boolean = false;
  tieOutcome: boolean = false;

  redTeam!: Team;
  blueTeam!: Team;

  music: Array<String> = ["Track01.mp3","Track02.mp3","Track03.mp3","Track04.mp3","Track05.mp3","Track06.mp3","Track07.mp3","Track08.mp3"];
  audio = new Audio();

  constructor(
    private readonly store: GameStore, 
    private readonly gameService: GameService, 
    private readonly router: Router,
    private readonly dialog: MatDialog
    ) { }

  ngOnInit(): void {
    this.store.teamList$.subscribe((teamList) => {
      this.redTeam = teamList.find(team => team.teamColor === 'Red')!;
      this.blueTeam = teamList.find(team => team.teamColor === 'Blue')!;
    });

    this.gameService.openSseChannel();
  }

  startGameAction() {
    this.setup = false;
    this.action = true;
    this.ended = false;
    this.store.addScoreUpdate(true);
    this.musicPlay();
  }

  endGameAction() {
    this.setup = false;
    this.action = false;
    this.ended = true;
    this.store.addScoreUpdate(false);
    this.musicStop();

    if (this.redTeam.score > this.blueTeam.score) {
      const dialogRef = this.dialog.open(ResultsDialogComponent, {data: {winner: this.redTeam, loser: this.blueTeam, draw: false}});

      dialogRef.afterClosed().subscribe(() => {
        this.router.navigate(['/player-entry']);
        this.store.resetGame();
      });
    } else if (this.blueTeam.score > this.redTeam.score) {
      const dialogRef = this.dialog.open(ResultsDialogComponent, {data: {winner: this.redTeam, loser: this.blueTeam, draw: false}});

      dialogRef.afterClosed().subscribe(() => {
        this.router.navigate(['/player-entry']);
        this.store.resetGame();
      });
    } else {
      const dialogRef = this.dialog.open(ResultsDialogComponent, {data: {winner: this.redTeam, loser: this.blueTeam, draw: true}});

      dialogRef.afterClosed().subscribe(() => {
        this.router.navigate(['/player-entry']);
        this.store.resetGame();
      });
    }


  }

  newGameAction() {
    this.store.resetGame();
    this.router.navigateByUrl('/player-entry');
  }

  musicPlay() {
    this.audio.src = "../assets/tracks/"+this.music[Math.trunc(Math.random()*8)];
    this.audio.load();
    this.audio.play();
    this.audio.loop = true;
  }

  musicStop() {
    this.audio.pause();
  }

}
