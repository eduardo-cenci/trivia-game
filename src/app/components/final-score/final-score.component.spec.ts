import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import FinalScoreComponent from './final-score.component';
import { Game } from '../../interfaces/game';

const gameMock: Game = {
  player: '',
  category: '',
  difficulty: 'easy',
  questions: [],
  scores: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
} as Game;

describe('FinalScoreComponent', () => {
  let component: FinalScoreComponent;
  let fixture: ComponentFixture<FinalScoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FinalScoreComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(FinalScoreComponent);
    component = fixture.componentInstance;
    component.game = gameMock;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('score value should be the sum of game scores', () => {
    expect(component['score']).toBe(45);
  });
});
