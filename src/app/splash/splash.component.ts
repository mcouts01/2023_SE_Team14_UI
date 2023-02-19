import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { timeout, timer } from 'rxjs';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.scss']
})
export class SplashComponent implements OnInit {

  constructor(private readonly router: Router) { }

  ngOnInit(): void {
    timer(5000).subscribe(() => this.router.navigate(['/player-entry']));
  }
  
}
