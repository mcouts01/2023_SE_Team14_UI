import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-red-team',
  templateUrl: './red-team.component.html',
  styleUrls: ['./red-team.component.css']
})
export class RedTeamComponent implements OnInit{
  constructor(){}

  ngOnInit(): void {}

  onKeyUp(){
    console.log('hello');
  }
}
