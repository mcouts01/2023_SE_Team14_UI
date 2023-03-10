import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';

export interface Player {
  id: number;
  codeName: string;
  team: string;
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
}

export interface TeamState {
  teamList: Team[];
}

@Injectable(
    {providedIn: 'root'}
)
export class GameStore extends ComponentStore<TeamState> {

    teamList$ = this.select(state => state.teamList);

    constructor() {
        super({ teamList: [
            {teamColor: 'Red', playerList: []},
            {teamColor: 'Blue', playerList: []}
          ]
        });
    }

    public addTeam = this.updater((state, value: Team) => ({
        ...state,
        teamList: [...state.teamList, value]
    }));

    public updateTeam = this.updater((state, value: Team) => ({
        ...state,
        teamList: [...state.teamList.filter(team => team.teamColor !== value.teamColor), value]
    }));
}
