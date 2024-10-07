import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { Game } from '../../interfaces/game';
import { QuestionResultComponent } from '../question-result/question-result.component';
import { QuestionData } from '../../interfaces/question-data';
import { GameService } from '../../services/game/game.service';
import { CountdownComponent } from '../countdown/countdown.component';
import { QuestionResultMessage } from '../../enums/question-result-message';

@Component({
  selector: 'app-question',
  standalone: true,
  imports: [QuestionResultComponent, CountdownComponent],
  templateUrl: './question.component.html',
  styles: ``,
})
export default class QuestionComponent implements OnInit {
  protected current!: QuestionData;
  protected answers!: string[];
  protected disableActions!: boolean;

  @Input() game!: Game;

  @ViewChild('countdown', { static: true }) countdown!: CountdownComponent;
  @ViewChild('resultModal', { static: true }) resultModal!: QuestionResultComponent;

  constructor(
    private router: Router,
    private gameService: GameService,
  ) {}

  ngOnInit(): void {
    this.reset();
  }

  protected decodeBase64(value: string): string {
    return window.atob(value);
  }

  protected checkAnswer(answer: string): void {
    this.countdown.stop();
    this.disableActions = true;

    const isCorrect = this.current.correct_answer == answer;
    const score = isCorrect ? this.countdown.getRoundedUpTime() : 0;
    const message = isCorrect ? QuestionResultMessage.Correct : QuestionResultMessage.Incorrect;

    this.resultModal.open(isCorrect, message, score);
    this.game.scores.push(score);
  }

  protected timeIsUp(): void {
    this.disableActions = true;
    this.resultModal.open(false, QuestionResultMessage.TimeIsUp, 0);
  }

  protected next(): void {
    if (this.game.scores.length === this.game.questions.length) {
      this.gameService.set(this.game);
      this.router.navigate(['final-score'], { skipLocationChange: true });
      return;
    }

    this.reset();
  }

  private reset(): void {
    this.current = this.game.questions[this.game.scores.length];
    this.answers = this.getShuffleAnswers();
    this.disableActions = false;
    this.countdown.start();
  }

  private getShuffleAnswers(): string[] {
    const answers = [this.current.correct_answer, ...this.current.incorrect_answers];

    for (let i = answers.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [answers[i], answers[j]] = [answers[j], answers[i]];
    }

    return answers;
  }
}
