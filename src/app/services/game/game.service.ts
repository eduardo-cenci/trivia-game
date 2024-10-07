import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';
import { Game } from '../../interfaces/game';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  private game: BehaviorSubject<Game | null>;

  constructor() {
    this.game = new BehaviorSubject<Game | null>(null);
  }

  public get(): Game | null {
    return this.game.value;
  }

  public set(value: Game | null): void {
    this.game.next(value);
  }
}
