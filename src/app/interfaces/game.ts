import { QuestionDifficulty } from '../enums/question-difficulty';
import { QuestionData } from './question-data';

export interface Game {
  player: string;
  category: string;
  difficulty: QuestionDifficulty;
  questions: QuestionData[];
  scores: number[];
}
