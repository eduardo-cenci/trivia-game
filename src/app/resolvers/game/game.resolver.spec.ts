import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { gameResolver } from './game.resolver';
import { Game } from '../../interfaces/game';

describe('gameResolver', () => {
  const executeResolver: ResolveFn<Game | null> = (...resolverParameters) =>
    TestBed.runInInjectionContext(() => gameResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
