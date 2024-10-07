import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroHome, heroRocketLaunch } from '@ng-icons/heroicons/outline';
import { GameService } from '../../services/game/game.service';
import { ScoresService } from '../../services/scores/scores.service';
import { Game } from '../../interfaces/game';

@Component({
  selector: 'app-final-score',
  standalone: true,
  imports: [RouterLink, NgIconComponent],
  viewProviders: [provideIcons({ heroHome, heroRocketLaunch })],
  templateUrl: './final-score.component.html',
  styles: ``,
})
export default class FinalScoreComponent implements OnInit {
  protected score!: number;

  @Input() game!: Game;

  constructor(
    private gameService: GameService,
    private scoresService: ScoresService,
  ) {}

  ngOnInit(): void {
    this.score = this.getTotalScore();
    this.scoresService.insert(this.game);
    this.gameService.set(null);
  }

  private getTotalScore(): number {
    return this.game.scores.reduce((acc, current) => acc + current, 0);
  }
}
