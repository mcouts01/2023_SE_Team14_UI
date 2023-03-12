import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-add-red-player',
  templateUrl: './add-red-player.component.html',
  styleUrls: ['./add-red-player.component.css']
})
export class AddRedPlayerComponent {
  constructor() {}
  ngOnInit(): void {}

  addPlayer(){
    let row = document.createElement('div');
      row.className = 'row';
      row.innerHTML = `
      <br>
      <input type="number" class="idBox" placeholder="ID #" (keyup.enter)="onKeyUp()"><input type="text" class="nameBox" placeholder="Codename">`;
      document.querySelector('.showInputFieldRed')?.appendChild(row);
  }

  onKeyUp(){
    console.log('hello');
  }

}
