import { ComponentFixture, TestBed } from '@angular/core/testing';

import QuestionComponent from './question.component';
import { Game } from '../../interfaces/game';
import { Router } from '@angular/router';
import { GameService } from '../../services/game/game.service';
import { QuestionResultMessage } from '../../enums/question-result-message';

const gameMock: Game = {
  player: '',
  category: '',
  difficulty: 'easy',
  questions: [
    {
      type: '',
      difficulty: '',
      category: '',
      question: '',
      correct_answer: 'MQ==',
      incorrect_answers: ['Mg==', 'Mw==', 'NA=='],
    },
  ],
  scores: [],
} as Game;

describe('QuestionComponent', () => {
  let component: QuestionComponent;
  let fixture: ComponentFixture<QuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuestionComponent],
      providers: [
        { provide: Router, useValue: { navigate: jest.fn() } },
        { provide: GameService, useValue: { set: jest.fn() } },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(QuestionComponent);
    component = fixture.componentInstance;
    component.game = gameMock;
    component.game.scores = [];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should reset the next question correctly', () => {
    component.countdown.start = jest.fn();

    component['reset']();

    expect(component['current']).toEqual(component.game.questions[0]);
    expect(component.countdown.start).toHaveBeenCalled();
    expect(component['disableActions']).toBe(false);
  });

  it('should shuffle the answers correctly', () => {
    const question = component.game.questions[0];
    const includeCorrectAnswer = component['answers'].includes(question.correct_answer);
    const includeInorrectAnswers = question.incorrect_answers.every(answer => component['answers'].includes(answer));

    expect(includeCorrectAnswer).toBe(true);
    expect(includeInorrectAnswers).toBe(true);
  });

  it('should correctly decode a base64 string', () => {
    const value = 'test';
    const result = component['decodeBase64'](btoa(value));

    expect(result).toBe(value);
  });

  it('should check answer correctly', () => {
    const expectedResult = 10;

    component.countdown.stop = jest.fn();
    component.countdown.getRoundedUpTime = jest.fn(() => expectedResult);
    component.resultModal.open = jest.fn();

    component['checkAnswer'](component.game.questions[0].correct_answer);

    expect(component.resultModal.open).toHaveBeenLastCalledWith(true, QuestionResultMessage.Correct, expectedResult);

    component['checkAnswer'](component.game.questions[0].incorrect_answers[0]);

    expect(component.resultModal.open).toHaveBeenLastCalledWith(false, QuestionResultMessage.Incorrect, 0);
    expect(component.countdown.stop).toHaveBeenCalledTimes(2);
    expect(component.countdown.getRoundedUpTime).toHaveBeenCalledTimes(1);
    expect(component['disableActions']).toBe(true);
  });

  it('should show the score when the time is up', () => {
    component.resultModal.open = jest.fn();

    component['timeIsUp']();

    expect(component['disableActions']).toBe(true);
    expect(component.resultModal.open).toHaveBeenLastCalledWith(false, QuestionResultMessage.TimeIsUp, 0);
  });

  it('should navigate when finishing the questions', () => {
    const router = TestBed.inject(Router);
    const gameService = TestBed.inject(GameService);

    component.game.scores.push(0);
    component['next']();

    expect(gameService.set).toHaveBeenCalled();
    expect(router.navigate).toHaveBeenCalled();
  });
});
