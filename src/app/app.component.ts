import { Component, OnInit } from '@angular/core';
import {
  ChildrenOutletContexts,
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
  RouterEvent,
  RouterOutlet,
} from '@angular/router';

import { filter } from 'rxjs';
import { LoaderComponent } from './components/loader/loader.component';
import { LoaderService } from './services/loader/loader.service';
import { transition, trigger, style, query, group, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoaderComponent],
  templateUrl: './app.component.html',
  styles: [],
  animations: [
    trigger('routeAnimations', [
      transition('* <=> *', [
        query(
          ':enter, :leave',
          [style({ position: 'absolute', inset: '50% auto auto 50%', transform: 'translate(-50%, -50%)' })],
          { optional: true },
        ),
        query(':enter', [style({ opacity: 0, transform: 'translate(-50%, -50%) scale(0.9)' })], { optional: true }),
        group([
          query(
            ':leave',
            [animate('200ms ease-out', style({ opacity: 0, transform: 'translate(-50%, -50%) scale(0.9)' }))],
            { optional: true },
          ),
          query(
            ':enter',
            [animate('200ms ease-out', style({ opacity: 1, transform: 'translate(-50%, -50%) scale(1)' }))],
            { optional: true },
          ),
        ]),
      ]),
    ]),
  ],
})
export class AppComponent implements OnInit {
  constructor(
    private router: Router,
    private loaderService: LoaderService,
    private contexts: ChildrenOutletContexts,
  ) {}

  ngOnInit(): void {
    this.router.events.pipe(filter(event => event instanceof RouterEvent)).subscribe(event => this.routerUpdate(event));
  }

  protected getRouteComponentName(): string {
    const routeComponentName = this.contexts.getContext('primary')?.route?.snapshot?.component?.name;
    return routeComponentName ?? '';
  }

  private routerUpdate(event: unknown): void {
    const endEvents = [NavigationEnd, NavigationCancel, NavigationError];
    const isEndEvent = endEvents.some(endEvent => event instanceof endEvent);

    if (event instanceof NavigationStart) {
      this.loaderService.setStatus(true);
    } else if (isEndEvent) {
      this.loaderService.setStatus(false);
    }
  }
}
