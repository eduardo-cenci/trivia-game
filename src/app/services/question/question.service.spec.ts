import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';

import { QuestionService } from './question.service';
import { TokenService } from '../token/token.service';
import { QuestionDifficulty } from '../../enums/question-difficulty';
import { of } from 'rxjs';
import { ApiResponse } from '../../interfaces/api-response';

describe('QuestionService', () => {
  let service: QuestionService;
  let http: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        { provide: HttpClient, useValue: { get: jest.fn() } },
        { provide: TokenService, useValue: { getToken: jest.fn(() => of('mockToken')) } },
      ],
    });
    service = TestBed.inject(QuestionService);
    http = TestBed.inject(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get the token and fetch the questions correctly', () => {
    const tokenService = TestBed.inject(TokenService);
    const mockApiResponse: ApiResponse = { results: [] };

    // @ts-expect-error: ts(2322)
    http.get = jest.fn(() => of(mockApiResponse));
    service.getAll('test', QuestionDifficulty.Easy).subscribe();

    expect(tokenService.getToken).toHaveBeenCalled();
    expect(http.get).toHaveBeenCalled();
  });
});
