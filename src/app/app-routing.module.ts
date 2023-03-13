import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameActionComponent } from './game/game-action/game-action.component';
import { PlayerEntryComponent } from './game/player-entry/player-entry.component';
import { SplashComponent } from './splash/splash.component';

const routes: Routes = [
  { path: 'loading', component: SplashComponent },
  { path: '', redirectTo: '/loading', pathMatch: 'full' },
  { path: 'player-entry', component: PlayerEntryComponent },
  { path: 'game-action', component: GameActionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
