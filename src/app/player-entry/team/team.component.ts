import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { catchError, of, switchMap, tap } from 'rxjs';
import { PlayerEntryComponent } from '../player-entry.component';
import { Player, PlayerEntity, PlayerEntryStore, Team } from '../player-entry.store';
import { PlayerService } from './player.service';

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

  constructor(
    private readonly store: PlayerEntryStore,
    private readonly service: PlayerService
    ) { }

  ngOnInit(): void {}

  clearTeam() {
    this.team.playerList = [];
  }

  addPlayer() {
    this.service.getPlayer(this.playerForm.get('codeName')?.value).subscribe({
      next: (player) => {
        if(!this.team.playerList.some(p => p.id === player.id)) {
          this.team.playerList.push(<Player>({
            team: this.team.teamColor,
            id: player.id,
            codeName: player.codeName
          }));
        }
      },
      error: () => {
        this.createPlayer();
      }
    });
  }

  createPlayer() {
    this.service.createPlayer(this.playerForm.value).subscribe({
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
      }
    });
  }
}
