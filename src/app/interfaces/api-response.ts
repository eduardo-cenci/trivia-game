import { ResponseCode } from '../enums/response-code';
import { Category } from './category';
import { QuestionData } from './question-data';

export interface ApiResponse {
  response_code?: ResponseCode;
  response_message?: string;
  token?: string;
  results?: QuestionData[];
  trivia_categories?: Category[];
}
