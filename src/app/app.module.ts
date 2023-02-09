import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { RedTeamComponent } from './components/red-team/red-team.component';
import { AddRedPlayerComponent } from './components/add-red-player/add-red-player.component';
import { AddBluePlayerComponent } from './components/add-blue-player/add-blue-player.component';
import { BlueTeamComponent } from './components/blue-team/blue-team.component';
import { SplashComponent } from './splash/splash.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RedTeamComponent,
    AddRedPlayerComponent,
    AddBluePlayerComponent,
    BlueTeamComponent,
    SplashComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
