import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountdownComponent } from './countdown.component';
import { environment } from '../../../environments/environment.development';

jest.useFakeTimers();

describe('CountdownComponent', () => {
  let component: CountdownComponent;
  let fixture: ComponentFixture<CountdownComponent>;
  let maxTime: number;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountdownComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CountdownComponent);
    component = fixture.componentInstance;
    maxTime = environment.maxQuestionTime;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should start the countdown correctly', () => {
    component.start();
    expect(component['time']).toBe(maxTime);
    jest.advanceTimersByTime((maxTime * 1000) / 2);
    expect(component['time']).toBeLessThan(maxTime);
  });

  it('should stop the countdown correctly', () => {
    const advanceTime = (maxTime * 1000) / 2;

    component.start();
    jest.advanceTimersByTime(advanceTime);
    component.stop();

    const time = component['time'];

    jest.advanceTimersByTime(advanceTime);
    expect(component['time']).toBe(time);
  });

  it('should stop the countdown and emit the event when time is up', () => {
    const timeIsUpSpy = jest.spyOn(component.timeIsUp, 'emit');

    component.start();
    jest.advanceTimersByTime(maxTime * 1000 * 2);

    expect(component['time']).toBe(0);
    expect(timeIsUpSpy).toHaveBeenCalledTimes(1);
  });

  it('should get the rounded up time correctly', () => {
    component['time'] = 12.3;
    expect(component.getRoundedUpTime()).toBe(13);
  });
});
