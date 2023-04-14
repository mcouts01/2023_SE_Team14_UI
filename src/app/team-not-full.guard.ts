import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { catchError, combineLatestWith, map, Observable, of, switchMap, tap } from 'rxjs';
import { Router } from '@angular/router';
import { GameStore, Team } from './game/game.store';

@Injectable({
  providedIn: 'root'
})
export class TeamNotEmptyGuard implements CanActivate {
  constructor(
    private readonly router: Router,
    private readonly gameStore: GameStore
    ) {
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.gameStore.teamList$.pipe(
      map(teamList => {
        let flag: boolean = true;
        teamList.forEach(team => {
          if(team.playerList.length === 0) {
            this.router.navigate(['/player-entry']);
            flag = false;
          }
        });
        return flag;
      })
    );
  }
}
