import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-count-down',
  templateUrl: './count-down.component.html',
  styleUrls: ['./count-down.component.scss']
})
export class CountDownComponent implements OnInit {
  timerType = "Game Set-up";
  timeLeft: number;
  interval: any;
  minutes: any;
  seconds: any;

  constructor() {
    this.timeLeft = 30;
    this.minutes = 0;
    this.seconds = "0";
   }

  ngOnInit(): void {
    this.interval = setInterval(() => {this.preTimer(); this.timeLeft -= 1;}, 1000);
  }

  preTimer() {
    this.setClock();
    if(this.timeLeft == 0)
    {
      clearInterval(this.interval);
      this.timeLeft = 301;
      this.interval = setInterval(() => {this.Timer(); this.timeLeft -= 1;}, 1000);
    }
  }

  Timer() {
    this.timerType = "Time Remaining";
    this.setClock();
    if(this.timeLeft == 0)
      clearInterval(this.interval);
  }

  setClock() {
    this.minutes = Math.floor(this.timeLeft / 60);
    this.seconds = Math.floor(this.timeLeft % 60);
    if(this.seconds < 10)
      this.seconds = ("0"+this.seconds);
  }
}