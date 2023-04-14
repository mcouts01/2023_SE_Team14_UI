import { Component, OnInit } from '@angular/core';
import { GameStore } from '../../game.store';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-score-feed',
  templateUrl: './score-feed.component.html',
  styleUrls: ['./score-feed.component.scss']
})
export class ScoreFeedComponent implements OnInit {

  scoreList$ = this.gameStore.scoreList$;

  teamColors: Record<string, string> = {
    'Red': '#FF3B3B',
    'Blue': '#6079FF'
  }

  constructor(private readonly gameStore: GameStore) { }

  ngOnInit(): void {
  }

}
