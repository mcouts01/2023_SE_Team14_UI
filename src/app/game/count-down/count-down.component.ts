import { Component, Input, OnInit } from '@angular/core';
import { timer } from 'rxjs';
@Component({
  selector: 'app-count-down',
  templateUrl: './count-down.component.html',
  styleUrls: ['./count-down.component.scss']
})
export class CountDownComponent implements OnInit {
  @Input()  timeLeft!: number;

  timerType = "Game Set-up";
  interval: any;
  minutes: number = 0;
  seconds: string = "0";

  constructor() {}

  ngOnInit(): void {
    this.interval = setInterval(() => {
      this.preTimer(); 
      this.timeLeft -= 1;
    }, 1000);
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
    this.seconds = Math.floor(this.timeLeft % 60).toString();
    if(Number.parseInt(this.seconds) < 10)
      this.seconds = ("0"+this.seconds);
  }
}