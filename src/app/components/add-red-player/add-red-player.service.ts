import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response} from '@angular/http';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

export class AddRedPlayerService{
  addplayer(player: Player):
    Observable<Player> {
      return this.http.post(this.url, player)
  }
}