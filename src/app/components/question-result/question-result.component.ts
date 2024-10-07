import { Component, ElementRef, EventEmitter, HostListener, Output, ViewChild } from '@angular/core';

import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroFaceSmile, heroFaceFrown, heroArrowRight } from '@ng-icons/heroicons/outline';
import { QuestionResultMessage } from '../../enums/question-result-message';

@Component({
  selector: 'app-question-result',
  standalone: true,
  imports: [NgIconComponent],
  viewProviders: [provideIcons({ heroFaceSmile, heroFaceFrown, heroArrowRight })],
  templateUrl: './question-result.component.html',
  styles: ``,
})
export class QuestionResultComponent {
  protected success!: boolean;
  protected message!: string;
  protected score: number | undefined;

  @ViewChild('modal', { static: true }) modal!: ElementRef<HTMLDialogElement>;

  @Output() private nextEvent: EventEmitter<void>;

  constructor() {
    this.nextEvent = new EventEmitter<void>();
  }

  public open(success: boolean, message: QuestionResultMessage, score: number): void {
    this.success = success;
    this.message = message;
    this.score = score;
    this.modal.nativeElement.showModal();
  }

  protected close(): void {
    this.nextEvent.emit();
    this.modal.nativeElement.close();
  }

  @HostListener('keydown.escape', ['$event'])
  private escPress(event: KeyboardEvent): void {
    event.preventDefault();
  }
}
