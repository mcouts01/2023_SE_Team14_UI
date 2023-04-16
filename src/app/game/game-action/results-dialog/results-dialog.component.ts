import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Team } from '../../game.store';

@Component({
  selector: 'app-results-dialog',
  templateUrl: './results-dialog.component.html',
  styleUrls: ['./results-dialog.component.scss']
})
export class ResultsDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<ResultsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { winner: Team, loser: Team, draw: boolean }
  ) { }

}
