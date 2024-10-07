import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroPlay, heroListBullet, heroQuestionMarkCircle } from '@ng-icons/heroicons/outline';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, NgIconComponent],
  viewProviders: [provideIcons({ heroPlay, heroListBullet, heroQuestionMarkCircle })],
  templateUrl: './home.component.html',
  styles: ``,
})
export default class HomeComponent {}
