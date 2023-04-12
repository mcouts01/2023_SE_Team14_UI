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

  @Input() team: Team = {teamColor: '', playerList: [], score: 0};

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
      if(!this.checkForPlayer(player)) {
        this.team.playerList.push(<Player>({
          team: this.team.teamColor,
          score: 0,
          id: player.id,
          codeName: player.codeName
        }));
        this.store.updateTeam(this.team);
      }
      this.existingPlayerForm.reset();
    });
  }

  checkForPlayer(player: Player): boolean {
    let found = false;
    this.store.teamList$.subscribe((teamList) => {
      teamList.forEach(team => {
        if(team.playerList.some(p => p.id === player.id))
          found = true;
      })
    });
    return found;
  }

  createNewPlayer() {
    this.service.createPlayer(this.newPlayerForm.value).subscribe({      
      next: (player) => {
        this.team.playerList.push(<Player>({
          team: this.team.teamColor,
          score: 0,
          id: player.id,
          codeName: player.codeName
        }));
        this.store.updateTeam(this.team);
      },
      error: (error) => {
        console.log(error);
        console.log("Error creating player in database");
      }});
  }
}
