import { Component, OnInit, Input,OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { AddRedPlayerService } from "./add-red-player.service";
import { Player } from "./player";
@Component({
  selector: 'app-add-red-player',
  templateUrl: './add-red-player.component.html',
  styleUrls: ['./add-red-player.component.css']
})
export class AddRedPlayerComponent implements OnChanges{
  constructor(private add_red_player_service: AddRedPlayerService,
    private router: Router) {}
    Player!: Player;
    ngOnInit() {
      this.Player = new Player();
      this.Player.ID = 1;
      this.Player.Codename = "blank";
    }
  addPlayer(){
    let row = document.createElement('div');
      row.className = 'row';
      row.innerHTML = `
      <br>
      <label for="ID#">ID #</label>
      <input id = "ID#"type="number" class="idBox" placeholder="ID#" (keyup.enter)="onKeyUp()" [(ngModel)]="this.player.ID">
      <label for="Codename">ID #</label>
      <input id = "Codename" type="text" class="nameBox" placeholder="Codename" [(ngModel)]="this.player.Codename">`;
      document.querySelector('.showInputFieldRed')?.appendChild(row);
  }
  private addplayer(player: Player) {
    this.add_red_player_service.addplayer(Player)
  }
  ngOnChanges(changes: SimpleChanges) {
    if (changes['ID#']) {
        this.addplayer(this.Player)
    }
  }
  onKeyUp(){
    console.log('hello');
  }
  
}
