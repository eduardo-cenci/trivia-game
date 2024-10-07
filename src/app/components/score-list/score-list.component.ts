import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroArrowLeft, heroExclamationCircle } from '@ng-icons/heroicons/outline';
import { ScoresService } from '../../services/scores/scores.service';
import { Game } from '../../interfaces/game';

@Component({
  selector: 'app-score-list',
  standalone: true,
  imports: [RouterLink, NgIconComponent],
  viewProviders: [provideIcons({ heroArrowLeft, heroExclamationCircle })],
  templateUrl: './score-list.component.html',
  styles: ``,
})
export default class ScoreListComponent {
  protected items: Game[];

  constructor(private scoresService: ScoresService) {
    this.items = this.scoresService.getAll();
  }

  protected getTotal(scores: number[]): number {
    return scores.reduce((acc, current) => acc + current, 0);
  }
}
