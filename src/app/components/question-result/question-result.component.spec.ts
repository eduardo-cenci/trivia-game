import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionResultComponent } from './question-result.component';
import { QuestionResultMessage } from '../../enums/question-result-message';

const mockModal = {
  nativeElement: {
    showModal: jest.fn(),
    close: jest.fn(),
  },
};

describe('QuestionResultComponent', () => {
  let component: QuestionResultComponent;
  let fixture: ComponentFixture<QuestionResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuestionResultComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(QuestionResultComponent);
    component = fixture.componentInstance;
    // @ts-expect-error: ts(2322)
    component.modal = mockModal;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show the result information correctly', () => {
    component.open(true, QuestionResultMessage.Correct, 10);

    expect(component['success']).toBe(true);
    expect(component['message']).toBe(QuestionResultMessage.Correct);
    expect(component['score']).toBe(10);
    expect(component.modal.nativeElement.showModal).toHaveBeenCalled();
  });

  it('should close the modal and emit the event for the next question', () => {
    const nextEventEmitSpy = jest.spyOn(component['nextEvent'], 'emit');

    component['close']();

    expect(nextEventEmitSpy).toHaveBeenCalled();
    expect(component.modal.nativeElement.close).toHaveBeenCalled();
  });
});
