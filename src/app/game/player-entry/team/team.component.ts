import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GameStore, Player, Team } from '../../game.store';
import { PlayerService } from './player.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss'],
})
export class TeamComponent implements OnInit {

  @Input() team: Team = {teamColor: '', playerList: []};

  existingPlayerForm: FormGroup = new FormGroup({
    'id': new FormControl('', Validators.compose([Validators.required])),
  });

  createPlayerForm: FormGroup = new FormGroup({
    'id': new FormControl('', Validators.compose([Validators.required])),
    'codeName': new FormControl('', Validators.compose([Validators.required])),
  });

  constructor(
    private readonly store: GameStore,
    private readonly service: PlayerService
    ) { }

  ngOnInit(): void {}

  clearTeam() {
    this.team.playerList = [];
  }
}
