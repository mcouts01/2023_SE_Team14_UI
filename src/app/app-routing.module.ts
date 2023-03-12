import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayerEntryComponent } from './game/player-entry/player-entry.component';
import { SplashComponent } from './splash/splash.component';

const routes: Routes = [
  { path: 'loading', component: SplashComponent },
  { path: '', redirectTo: '/loading', pathMatch: 'full' },
  { path: 'player-entry', component: PlayerEntryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
