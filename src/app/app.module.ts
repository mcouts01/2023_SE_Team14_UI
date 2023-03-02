import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './team/header/header.component';
import { RedTeamComponent } from './team/red-team/red-team.component';
import { AddRedPlayerComponent } from './team/add-red-player/add-red-player.component';
import { AddBluePlayerComponent } from './team/add-blue-player/add-blue-player.component';
import { BlueTeamComponent } from './team/blue-team/blue-team.component';
import { SplashComponent } from './splash/splash.component';
import { PlayerEntryComponent } from './game/player-entry/player-entry.component';
import { TeamComponent } from './game/player-entry/team/team.component';
import { PlayerCardComponent } from './game/player-entry/team/player-card/player-card.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RedTeamComponent,
    AddRedPlayerComponent,
    AddBluePlayerComponent,
    BlueTeamComponent,
    SplashComponent,
    PlayerEntryComponent,
    TeamComponent,
    PlayerCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
