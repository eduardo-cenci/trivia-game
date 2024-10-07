import { ResolveFn } from '@angular/router';
import { inject } from '@angular/core';

import { Game } from '../../interfaces/game';
import { GameService } from '../../services/game/game.service';

export const gameResolver: ResolveFn<Game | null> = () => {
  return inject(GameService).get();
};
