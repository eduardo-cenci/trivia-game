import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, switchMap } from 'rxjs';
import { ApiResponse } from '../../interfaces/api-response';
import { environment } from '../../../environments/environment';
import { QuestionDifficulty } from '../../enums/question-difficulty';
import { QuestionType } from '../../enums/question-type';
import { TokenService } from '../token/token.service';

@Injectable({
  providedIn: 'root',
})
export class QuestionService {
  private endpoint!: string;

  constructor(
    private http: HttpClient,
    private tokenService: TokenService,
  ) {
    this.endpoint = '/api.php?';
  }

  public getAll(category: string, difficulty: QuestionDifficulty): Observable<ApiResponse> {
    const amount = environment.questionAmount.toString();
    const type = QuestionType.Multiple;
    const encode = 'base64';
    const params = new URLSearchParams({ amount, category, difficulty, type, encode });

    return this.tokenService.getToken().pipe(
      switchMap(token => {
        if (token) params.append('token', token);

        const url = environment.apiUrl + this.endpoint + params.toString();
        return this.http.get<ApiResponse>(url);
      }),
    );
  }
}
