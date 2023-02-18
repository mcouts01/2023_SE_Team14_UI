import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-blue-team',
  templateUrl: './blue-team.component.html',
  styleUrls: ['./blue-team.component.css']
})
export class BlueTeamComponent implements OnInit{
  constructor(){}
  ngOnInit(): void {}

  onKeyUp(){
    console.log('hello');
  }
}
