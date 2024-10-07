import { ComponentFixture, TestBed } from '@angular/core/testing';

import SettingsComponent from './settings.component';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { LoaderService } from '../../services/loader/loader.service';
import { FormGroup } from '@angular/forms';
import { QuestionData } from '../../interfaces/question-data';
import { QuestionDifficulty } from '../../enums/question-difficulty';
import { QuestionService } from '../../services/question/question.service';
import { ResponseCode } from '../../enums/response-code';
import { of } from 'rxjs';
import { GameService } from '../../services/game/game.service';

describe('SettingsComponent', () => {
  let component: SettingsComponent;
  let fixture: ComponentFixture<SettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SettingsComponent],
      providers: [
        provideHttpClient(),
        provideRouter([]),
        { provide: LoaderService, useValue: { setStatus: jest.fn() } },
        { provide: QuestionService, useValue: { getAll: jest.fn() } },
        { provide: GameService, useValue: { set: jest.fn() } },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(SettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should instance the difficulty list correctly', () => {
    expect(component['difficultyList'].length).toBeTruthy();
  });

  it('should instance the form correctly', () => {
    expect(component['form']).toBeInstanceOf(FormGroup);
  });

  it('should submit form and set new game on success', () => {
    const player = 'Test';
    const category = 'Science';
    const difficulty = QuestionDifficulty.Easy;
    const questions: QuestionData[] = [];
    const scores: number[] = [];
    const loaderService = TestBed.inject(LoaderService);
    const questionService = TestBed.inject(QuestionService);
    const gameService = TestBed.inject(GameService);
    const markAllAsTouchedSpy = jest.spyOn(component['form'], 'markAllAsTouched');

    questionService.getAll = jest.fn(() => of({ response_code: ResponseCode.Success, results: questions }));

    component['form'].get('player')!.setValue(player);
    component['form'].get('category')!.setValue(category);
    component['form'].get('difficulty')!.setValue(difficulty);
    component['submit'](new Event('submit'));

    expect(markAllAsTouchedSpy).toHaveBeenCalled();
    expect(questionService.getAll).toHaveBeenCalledWith(category, difficulty);
    expect(gameService.set).toHaveBeenCalledWith({ player, category, difficulty, questions, scores });
    expect(loaderService.setStatus).toHaveBeenLastCalledWith(false);
    expect(loaderService.setStatus).toHaveBeenCalledTimes(2);
  });
});
