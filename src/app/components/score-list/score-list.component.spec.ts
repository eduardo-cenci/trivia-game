import { ComponentFixture, TestBed } from '@angular/core/testing';

import ScoreListComponent from './score-list.component';
import { provideRouter } from '@angular/router';

describe('ScoreListComponent', () => {
  let component: ScoreListComponent;
  let fixture: ComponentFixture<ScoreListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScoreListComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(ScoreListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get the sum of the scores', () => {
    const scores = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    expect(component['getTotal'](scores)).toBe(45);
  });
});
