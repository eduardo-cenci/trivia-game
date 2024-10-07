import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  private open: Subject<boolean>;

  constructor() {
    this.open = new Subject<boolean>();
  }

  public getStatus(): Observable<boolean> {
    return this.open.asObservable();
  }

  public setStatus(open: boolean): void {
    this.open.next(open);
  }
}
