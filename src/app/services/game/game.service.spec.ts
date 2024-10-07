import { TestBed } from '@angular/core/testing';

import { GameService } from './game.service';
import { Game } from '../../interfaces/game';

const gameMock: Game = {
  player: '',
  category: '',
  difficulty: 'easy',
  questions: [],
  scores: [],
} as Game;

describe('GameService', () => {
  let service: GameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return null or cached categories if available', () => {
    expect(service.get()).toBeNull();
    service.set(gameMock);
    expect(service.get()).toEqual(gameMock);
  });
});
