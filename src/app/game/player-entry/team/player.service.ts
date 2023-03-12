import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Player, PlayerEntity } from '../../game.store';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  readonly apiUrl = 'http://localhost:8080';

  constructor(private readonly http: HttpClient) {}

  public getPlayer(codename: string) {
    return this.http.get<Player>(encodeURI(`${this.apiUrl}/player/codeName=${codename}`));
  }

  public createPlayer(player: Player): Observable<Player> {
    return this.http.post<Player>(encodeURI(`${this.apiUrl}/player/`), player);
  }

  public getExistingPlayer(id: number): Observable<Player> {
    return this.http.get<Player>(encodeURI(`${this.apiUrl}/player/id=${id}`));
  }
}
