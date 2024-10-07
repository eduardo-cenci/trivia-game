import { Injectable } from '@angular/core';
import { Game } from '../../interfaces/game';

@Injectable({
  providedIn: 'root',
})
export class ScoresService {
  private storageKey: string;

  constructor() {
    this.storageKey = 'scores';
  }

  public getAll(): Game[] {
    const scores = localStorage.getItem(this.storageKey);
    return scores ? JSON.parse(scores) : [];
  }

  public insert(game: Game): void {
    const scores = this.getAll();
    scores.push(game);
    localStorage.setItem(this.storageKey, JSON.stringify(this.sortByScore(scores)));
  }

  private sortByScore(games: Game[]): Game[] {
    return games.sort((a, b) => this.getTotal(b.scores) - this.getTotal(a.scores));
  }

  private getTotal(scores: number[]): number {
    return scores.reduce((acc, current) => acc + current, 0);
  }
}
