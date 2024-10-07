import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BehaviorSubject, map, Observable, tap } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { ApiResponse } from '../../interfaces/api-response';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  private token: BehaviorSubject<string | undefined>;
  private endpoint!: string;

  constructor(private http: HttpClient) {
    this.token = new BehaviorSubject<string | undefined>(undefined);
    this.endpoint = '/api_token.php?';
  }

  public getToken(): Observable<string | undefined> {
    if (this.token.value) {
      return this.token.asObservable();
    }

    const params = new URLSearchParams({ command: 'request' });
    const url = environment.apiUrl + this.endpoint + params.toString();

    return this.http.get<ApiResponse>(url).pipe(
      tap(res => this.token.next(res.token)),
      map(res => res.token),
    );
  }

  public resetToken(token: string): Observable<ApiResponse> {
    const params = new URLSearchParams({ command: 'reset', token });
    const url = environment.apiUrl + this.endpoint + params.toString();
    return this.http.get<ApiResponse>(url);
  }

  public clearToken(): void {
    this.token.next(undefined);
  }
}
