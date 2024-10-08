import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroArrowLeft } from '@ng-icons/heroicons/outline';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-help',
  standalone: true,
  imports: [RouterLink, NgIconComponent],
  viewProviders: [provideIcons({ heroArrowLeft })],
  templateUrl: './help.component.html',
  styles: ``,
})
export default class HelpComponent {
  protected maxQuestionTime: number;
  protected questionAmount: number;

  constructor() {
    this.maxQuestionTime = environment.maxQuestionTime;
    this.questionAmount = environment.questionAmount;
  }
}
