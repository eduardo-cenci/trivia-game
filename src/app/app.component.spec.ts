import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { of, Subject } from 'rxjs';
import {
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
  RouterEvent,
} from '@angular/router';
import { LoaderService } from './services/loader/loader.service';
import { provideAnimations } from '@angular/platform-browser/animations';

class MockRouter {
  private eventsSubject = new Subject<RouterEvent>();
  public events = this.eventsSubject.asObservable();

  public navigateByUrl(url: string): void {
    switch (url) {
      case '/start':
        this.eventsSubject.next(new NavigationStart(0, ''));
        break;
      case '/success':
        this.eventsSubject.next(new NavigationEnd(0, '', ''));
        break;
      case '/cancel':
        this.eventsSubject.next(new NavigationCancel(0, '', ''));
        break;
      case '/error':
        this.eventsSubject.next(new NavigationError(0, '', ''));
        break;
      default:
        break;
    }
  }
}

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [
        provideAnimations(),
        { provide: Router, useClass: MockRouter },
        {
          provide: LoaderService,
          useValue: {
            getStatus: () => of(true),
            setStatus: (open: boolean) => open,
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should update loader on navigation events', async () => {
    const router = TestBed.inject(Router);
    const loaderService = TestBed.inject(LoaderService);
    const spy = jest.spyOn(loaderService, 'setStatus');

    router.navigateByUrl('/start');
    router.navigateByUrl('/success');
    router.navigateByUrl('/cancel');
    router.navigateByUrl('/error');

    expect(spy.mock.calls).toEqual([[true], [false], [false], [false]]);
  });
});
