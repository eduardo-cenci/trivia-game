import { TestBed } from '@angular/core/testing';

import { ScoresService } from './scores.service';
import { Game } from '../../interfaces/game';

const gameMock: Game = {
  player: '',
  category: '',
  difficulty: 'easy',
  questions: [],
  scores: [],
} as Game;

describe('ScoreService', () => {
  let service: ScoresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScoresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return all stored scores correctly', () => {
    const expectedValue = [gameMock];
    const value = service.getAll();

    expect(Array.isArray(value) && !value.length).toBe(true);

    Storage.prototype.getItem = jest.fn(() => JSON.stringify(expectedValue));

    expect(service.getAll()).toEqual(expectedValue);
  });

  it('should insert the game score correctly', () => {
    const expectedValue = JSON.stringify([gameMock]);
    Storage.prototype.getItem = jest.fn();
    Storage.prototype.setItem = jest.fn();

    service.insert(gameMock);

    expect(Storage.prototype.setItem).toHaveBeenCalledWith(service['storageKey'], expectedValue);
  });

  it('should sort by score correctly', () => {
    const gameMock1 = JSON.parse(JSON.stringify(gameMock));
    const gameMock2 = JSON.parse(JSON.stringify(gameMock));

    gameMock1.scores = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
    gameMock2.scores = [9, 9, 9, 9, 9, 9, 9, 9, 9, 9];

    expect(service['sortByScore']([gameMock1, gameMock2])).toEqual([gameMock2, gameMock1]);
  });

  it('should return the sum of game scores', () => {
    const scores = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    expect(service['getTotal'](scores)).toBe(45);
  });
});
