import { NgModule } from '@angular/core';
import { SplashComponent } from './splash/splash.component';
import { AddBluePlayerComponent } from './components/add-blue-player/add-blue-player.component';
import { AddRedPlayerComponent } from './components/add-red-player/add-red-player.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: 'loading', component: SplashComponent},
  {path: 'add-blue-player',component: AddBluePlayerComponent},
  {path: 'add-red-player',component: AddRedPlayerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
