import { TestBed } from '@angular/core/testing';

import { LoaderService } from './loader.service';

describe('LoaderService', () => {
  let service: LoaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should emit the status value', () => {
    const expectedValue = true;

    service.getStatus().subscribe(value => expect(value).toBe(expectedValue));
    service.setStatus(expectedValue);
  });
});
