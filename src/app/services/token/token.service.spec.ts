import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { TokenService } from './token.service';
import { HttpClient } from '@angular/common/http';
import { ApiResponse } from '../../interfaces/api-response';
import { of } from 'rxjs';

describe('TokenService', () => {
  let service: TokenService;
  let http: HttpClient;
  let mockToken: string;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [{ provide: HttpClient, useValue: { get: jest.fn() } }],
    });
    service = TestBed.inject(TokenService);
    mockToken = 'mockToken';
    http = TestBed.inject(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return cached token if available', () => {
    service['token'].next(mockToken);

    service.getToken().subscribe(token => expect(token).toBe(mockToken));
  });

  it('should fetch token from API on first call and update cache', () => {
    const mockApiResponse: ApiResponse = { token: mockToken };

    // @ts-expect-error: ts(2322)
    http.get = jest.fn(() => of(mockApiResponse));
    service['token'].next(undefined);

    service.getToken().subscribe(token => {
      expect(token).toBe(mockToken);
      expect(service['token'].value).toEqual(mockToken);
    });

    expect(http.get).toHaveBeenCalled();
  });

  it('should request token reset for API', () => {
    service.resetToken(mockToken);

    expect(http.get).toHaveBeenCalled();
  });

  it('should clear token correctly', () => {
    service['token'].next(mockToken);
    service.clearToken();

    expect(service['token'].value).toBeFalsy();
  });
});
