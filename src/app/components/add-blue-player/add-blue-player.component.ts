import { Component, OnInit, Input,OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { AddBluePlayerService } from "./add-blue-player.service";
import { Player } from "./player";

@Component({
  selector: 'app-add-blue-player',
  templateUrl: './add-blue-player.component.html',
  styleUrls: ['./add-blue-player.component.css']
})
export class AddBluePlayerComponent implements OnChanges {
  constructor(private add_blue_player_service: AddBluePlayerService,
  private router: Router,
  ) {}
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
      document.querySelector('.showInputFieldBlue')?.appendChild(row);
  }

  private addplayer(player: Player) {
    this.add_blue_player_service.addplayer(Player)
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