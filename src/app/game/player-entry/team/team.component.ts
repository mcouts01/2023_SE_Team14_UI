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

  existingPlayer: FormControl = new FormControl(false, Validators.compose([Validators.required]));

  existingPlayerForm: FormGroup = new FormGroup({
    'id': new FormControl('', Validators.compose([Validators.required])),
  });

  newPlayerForm: FormGroup = new FormGroup({
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

  addExistingPlayer() {
    this.service.getExistingPlayer(this.existingPlayerForm.value.id).subscribe(player => {
      if(!this.team.playerList.some(p => p.id === player.id)) {
        this.team.playerList.push(<Player>({
          team: this.team.teamColor,
          id: player.id,
          codeName: player.codeName
        }));
      }
      this.existingPlayerForm.reset();
    });
  }

  createNewPlayer() {
    this.service.createPlayer(this.newPlayerForm.value).subscribe({      
      next: (player) => {
        this.team.playerList.push(<Player>({
          team: this.team.teamColor,
          id: player.id,
          codeName: player.codeName
        }))
      },
      error: (error) => {
        console.log(error);
        console.log("Error creating player in database");
      }});
  }
}
