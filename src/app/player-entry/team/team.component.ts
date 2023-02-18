import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PlayerEntryComponent } from '../player-entry.component';
import { Player, PlayerEntryStore, Team } from '../player-entry.store';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss'],
})
export class TeamComponent implements OnInit {

  @Input() team: Team = {teamColor: '', playerList: []};

  playerForm: FormGroup = new FormGroup({
    'codeName': new FormControl('', Validators.compose([Validators.required, Validators.maxLength(30)])),
  });

  constructor(private readonly store: PlayerEntryStore) { }

  ngOnInit(): void {}

  addPlayer() {
    
  }
}
