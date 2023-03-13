import { Component, Input, OnInit } from '@angular/core';
import { Team } from '../../game.store';

@Component({
  selector: 'app-team-score-panel',
  templateUrl: './team-score-panel.component.html',
  styleUrls: ['./team-score-panel.component.scss']
})
export class TeamScorePanelComponent implements OnInit {

  @Input() team!: Team;

  constructor() { }

  ngOnInit(): void {
  }

}
