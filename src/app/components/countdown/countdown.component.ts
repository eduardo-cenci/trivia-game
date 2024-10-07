import { Component, EventEmitter, Output } from '@angular/core';
import { environment } from '../../../environments/environment.development';

@Component({
  selector: 'app-countdown',
  standalone: true,
  imports: [],
  templateUrl: './countdown.component.html',
  styles: ``,
})
export class CountdownComponent {
  protected time: number;
  protected maxTime: number;
  protected countdown!: number;

  @Output() timeIsUp: EventEmitter<void>;

  constructor() {
    this.time = 0;
    this.maxTime = environment.maxQuestionTime;
    this.timeIsUp = new EventEmitter();
  }

  public start(): void {
    this.time = this.maxTime;

    this.countdown = window.setInterval(() => {
      this.time -= 0.01;
      if (this.time <= 0) this.endCountdown();
    }, 10);
  }

  public stop(): void {
    clearInterval(this.countdown);
    this.time = this.time > 0 ? this.getRoundedUpTime() : 0;
  }

  public getRoundedUpTime(): number {
    return Math.ceil(this.time);
  }

  private endCountdown(): void {
    this.stop();
    this.timeIsUp.emit();
  }
}
