import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { BehaviorSubject, map, Observable, tap } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { ApiResponse } from '../../interfaces/api-response';
import { Category } from '../../interfaces/category';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private categoryList: BehaviorSubject<Category[] | undefined>;
  protected endpoint!: string;

  constructor(protected http: HttpClient) {
    this.categoryList = new BehaviorSubject<Category[] | undefined>(undefined);
    this.endpoint = '/api_category.php?';
  }

  public getAll(): Observable<Category[] | undefined> {
    if (this.categoryList.value) {
      return this.categoryList.asObservable();
    }

    const url = environment.apiUrl + this.endpoint;

    return this.http.get<ApiResponse>(url).pipe(
      tap(res => this.categoryList.next(res.trivia_categories)),
      map(res => res.trivia_categories),
    );
  }
}
