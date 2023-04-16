import { Injectable } from '@angular/core';
import { ComponentStore, tapResponse } from '@ngrx/component-store';
import { Observable, combineLatest, combineLatestWith, switchMap, tap } from 'rxjs';
import { PlayerService } from './player-entry/team/player.service';

export interface Player {
  id: number;
  codeName: string;
  team: string;
  score: number;
}

export interface PlayerEntity {
    id: number;
    codeName: string;
    firstName: string;
    lastName: string;
}

export interface Team {
  teamColor: string;
  playerList: Player[];
  score: number;
}

export interface Score {
  hitId: number;
  hitterId: number;
}

export interface ScoreDisplay {
  hit: Player;
  hitter: Player;
}

export interface GameState {
  teamList: Team[];
  scoreList: ScoreDisplay[];
  scoreUpdate: boolean;
}

@Injectable(
    {providedIn: 'root'}
)
export class GameStore extends ComponentStore<GameState> {

    SCORE_INCREMENT = 10;

    teamList$ = this.select(state => state.teamList);

    scoreList$ = this.select(state => state.scoreList);

    scoreUpdate$ = this.select(state => state.scoreUpdate);

    constructor() {
        super({ 
          teamList: [
            {teamColor: 'Red', playerList: [], score: 0},
            {teamColor: 'Blue', playerList: [], score: 0}
          ],
          scoreList: [],
          scoreUpdate: false
        });
    }

    public resetGame = this.updater((state) => ({
      teamList: [
        {teamColor: 'Red', playerList: [], score: 0},
        {teamColor: 'Blue', playerList: [], score: 0}
      ],
      scoreList: [],
      scoreUpdate: false
    }));

    public addTeam = this.updater((state, value: Team) => ({
        ...state,
        teamList: [...state.teamList, value]
    }));

    public updateTeam = this.updater((state, value: Team) => ({
        ...state,
        teamList: [...state.teamList.filter(team => team.teamColor !== value.teamColor), value]
    }));

    public addScoreUpdate = this.updater((state, value: boolean) => ({
      ...state,
      scoreUpdate: value
    }));

    public onScore = this.effect((source: Observable<Score>) => source.pipe(
      combineLatestWith(this.teamList$,this.scoreUpdate$),
      tapResponse(([score, teamList, scoreUpdate]) => {
        let playerList: Player[] = [];
        teamList.forEach((team) => {
          playerList = playerList.concat(team.playerList);
        });
        if(scoreUpdate) {
          let hit: Player | null = null;
          let hitter: Player | null = null;

          playerList.forEach((player) => {
            if(player.id === score.hitterId) {
              hitter = player;
              player.score += this.SCORE_INCREMENT;
            } else if(player.id === score.hitId) {
              hit = player;
            }
          });

          if(hit !== null && hitter !== null) {
            this.addScore({
              hit: hit,
              hitter: hitter
            });
          }
        }
      }, () => {})
    ));

    public addScore = this.updater((state, value: ScoreDisplay) => ({
      ...state,
      scoreList: [...state.scoreList, value]
    }));
}
