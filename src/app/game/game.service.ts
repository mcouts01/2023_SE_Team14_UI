import { Injectable, NgZone } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { GameStore } from './game.store';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private eventSource!: EventSource | null;

  private reconnectFrequencySec = 1;

  private reconnectTimeout!: any;

  constructor(private zone: NgZone, private readonly gameStore: GameStore) { }

  openSseChannel(): boolean {
    this.createSseEventSource();
    return !!this.eventSource;
  }

  private createSseEventSource(): void {
    if (this.eventSource) {
      this.eventSource.close();
      this.eventSource = null;
    }

    this.eventSource = new EventSource('http://localhost:8080/score-feed/');

    this.eventSource.onmessage = (event: MessageEvent) => {
      this.zone.run(() => this.gameStore.onScore(JSON.parse(event.data)));
    };

    this.eventSource.addEventListener('http://localhost:8080/score-feed/', event => {
      this.zone.run(() => this.gameStore.onScore(JSON.parse(event.data)));
    });

    this.eventSource.onopen = () => {
      this.reconnectFrequencySec = 1; 
    };

    this.eventSource.onerror = (error: any) => {
      this.reconnectOnError();
    };
  }

  private reconnectOnError(): void {
    const self = this;
    this.eventSource?.close();
    clearTimeout(this.reconnectTimeout);
    this.reconnectTimeout = setTimeout(() => {
      self.openSseChannel();
      self.reconnectFrequencySec *= 2;
      if (self.reconnectFrequencySec >= 64) {
        self.reconnectFrequencySec = 64;
      }
    }, this.reconnectFrequencySec * 1000);
  }
}
