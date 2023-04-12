import { Component, Input, OnInit } from '@angular/core';
import { Player } from '../../../game.store';

@Component({
  selector: 'app-player-card',
  templateUrl: './player-card.component.html',
  styleUrls: ['./player-card.component.scss']
})
export class PlayerCardComponent implements OnInit {
  @Input() player: Player = {team: 'Red', id: 0, codeName: '', score: 0};

  constructor() { }

  ngOnInit(): void {
  }

}
