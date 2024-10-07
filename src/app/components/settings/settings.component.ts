import { Component, Input, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroPlay, heroArrowLeft } from '@ng-icons/heroicons/outline';
import { Category } from '../../interfaces/category';
import { QuestionDifficulty } from '../../enums/question-difficulty';
import { QuestionService } from '../../services/question/question.service';
import { QuestionData } from '../../interfaces/question-data';
import { GameService } from '../../services/game/game.service';
import { LoaderService } from '../../services/loader/loader.service';
import { ResponseCode } from '../../enums/response-code';
import { take } from 'rxjs';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, NgIconComponent],
  viewProviders: [provideIcons({ heroPlay, heroArrowLeft })],
  templateUrl: './settings.component.html',
  styles: ``,
})
export default class SettingsComponent implements OnInit {
  protected difficultyList!: [string, QuestionDifficulty][];
  protected form!: FormGroup;

  @Input() categoryList!: Category[];

  constructor(
    protected router: Router,
    private formBuilder: FormBuilder,
    private questionService: QuestionService,
    private gameService: GameService,
    private loaderService: LoaderService,
  ) {}

  ngOnInit(): void {
    this.difficultyList = Object.entries(QuestionDifficulty);

    this.form = this.formBuilder.group({
      player: [null, Validators.required],
      category: ['', Validators.required],
      difficulty: ['', Validators.required],
    });
  }

  protected submit(event: Event): void {
    event.preventDefault();

    this.form.markAllAsTouched();

    if (this.form.invalid) return;

    this.loaderService.setStatus(true);

    const player = this.form.get('player')?.value;
    const category = this.form.get('category')?.value;
    const difficulty = this.form.get('difficulty')?.value;

    this.questionService
      .getAll(category, difficulty)
      .pipe(take(1))
      .subscribe({
        next: response => {
          if (response.response_code !== ResponseCode.Success) return;

          const questions = response.results as QuestionData[];
          const scores: number[] = [];

          this.gameService.set({ player, category, difficulty, questions, scores });
          this.router.navigate(['question'], { skipLocationChange: true });
        },
        error: error => console.error(error),
        complete: () => this.loaderService.setStatus(false),
      });
  }
}
