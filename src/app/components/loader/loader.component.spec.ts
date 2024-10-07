import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Observable, Subject } from 'rxjs';
import { LoaderComponent } from './loader.component';
import { LoaderService } from '../../services/loader/loader.service';

class MockLoaderService {
  private open = new Subject<boolean>();

  public getStatus(): Observable<boolean> {
    return this.open.asObservable();
  }

  public setStatus(open: boolean): void {
    this.open.next(open);
  }
}

const mockModal = {
  nativeElement: {
    showModal: jest.fn(),
    close: jest.fn(),
  },
};

describe('LoaderComponent', () => {
  let component: LoaderComponent;
  let fixture: ComponentFixture<LoaderComponent>;
  let loaderService: LoaderService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoaderComponent],
      providers: [{ provide: LoaderService, useClass: MockLoaderService }],
    }).compileComponents();

    fixture = TestBed.createComponent(LoaderComponent);
    component = fixture.componentInstance;
    loaderService = TestBed.inject(LoaderService);
    // @ts-expect-error: ts(2322)
    component.modal = mockModal;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should open the modal correctly', () => {
    loaderService.setStatus(true);
    expect(component.modal.nativeElement.showModal).toHaveBeenCalled();
  });

  it('should close the modal correctly', () => {
    loaderService.setStatus(false);
    expect(component.modal.nativeElement.close).toHaveBeenCalled();
  });
});
