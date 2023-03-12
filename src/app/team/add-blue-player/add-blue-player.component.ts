import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-add-blue-player',
  templateUrl: './add-blue-player.component.html',
  styleUrls: ['./add-blue-player.component.css']
})
export class AddBluePlayerComponent {
  constructor() {}
  ngOnInit(): void {}

  addPlayer(){
    let row = document.createElement('div');
      row.className = 'row';
      row.innerHTML = `
      <br>
      <input type="number" class="idBox" placeholder="ID #" (keyup.enter)="onKeyUp()"><input type="text" class="nameBox" placeholder="Codename">`;
      document.querySelector('.showInputFieldBlue')?.appendChild(row);
  }

  onKeyUp(){
    console.log('hello');
  }
}
