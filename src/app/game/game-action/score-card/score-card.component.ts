import { Component, Input, OnInit } from '@angular/core';
import { Player } from '../../game.store';

@Component({
  selector: 'app-score-card',
  templateUrl: './score-card.component.html',
  styleUrls: ['./score-card.component.scss']
})
export class ScoreCardComponent implements OnInit {
  @Input() player!: Player;
  @Input() showScore: boolean = true; 

  teamColors: Record<string, string> = {
    'Red': '#FF3B3B',
    'Blue': '#6079FF'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
