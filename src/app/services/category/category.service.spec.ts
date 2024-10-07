import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { CategoryService } from './category.service';
import { Category } from '../../interfaces/category';
import { ApiResponse } from '../../interfaces/api-response';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

describe('CategoryService', () => {
  let service: CategoryService;
  let http: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [{ provide: HttpClient, useValue: { get: jest.fn() } }],
    });
    service = TestBed.inject(CategoryService);
    http = TestBed.inject(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return cached categories if available', () => {
    const mockCategories: Category[] = [{ id: 1, name: 'test' }];

    service['categoryList'].next(mockCategories);

    expect(service.getAll()).toEqual(service['categoryList'].asObservable());
  });

  it('should fetch categories from API on first call and update cache', () => {
    const mockCategories: Category[] = [{ id: 1, name: 'test' }];
    const mockApiResponse: ApiResponse = { trivia_categories: mockCategories };

    // @ts-expect-error: ts(2322)
    http.get = jest.fn(() => of(mockApiResponse));

    service.getAll().subscribe(categories => {
      expect(categories).toEqual(mockCategories);
      expect(service['categoryList'].value).toEqual(mockCategories);
    });

    expect(http.get).toHaveBeenCalled();
  });
});
