import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SplashComponent } from './splash/splash.component';
import { PlayerEntryComponent } from './game/player-entry/player-entry.component';
import { TeamComponent } from './game/player-entry/team/team.component';
import { PlayerCardComponent } from './game/player-entry/team/player-card/player-card.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CountDownComponent } from './game/count-down/count-down.component';
import { GameActionComponent } from './game/game-action/game-action.component';
import { TeamScorePanelComponent } from './game/game-action/team-score-panel/team-score-panel.component';
import { ScoreFeedComponent } from './game/game-action/score-feed/score-feed.component';
import { ScoreCardComponent } from './game/game-action/score-card/score-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { ResultsDialogComponent } from './game/game-action/results-dialog/results-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    SplashComponent,
    PlayerEntryComponent,
    TeamComponent,
    PlayerCardComponent,
    CountDownComponent,
    GameActionComponent,
    TeamScorePanelComponent,
    ScoreFeedComponent,
    ScoreCardComponent,
    ResultsDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
