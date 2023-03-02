import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Player } from '../../game.store';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  readonly apiUrl = 'http://localhost:8080';

  constructor(private readonly http: HttpClient) {}

  public getPlayer(codename: string) {
    return this.http.get<Player>(encodeURI(`${this.apiUrl}/player/${codename}`));
  }

  public createPlayer(player: Player): Observable<Player> {
    return this.http.post<Player>(encodeURI(`${this.apiUrl}/player/`), player);
  }
}
