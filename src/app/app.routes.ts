import { Routes } from '@angular/router';

import { categoryResolver } from './resolvers/category/category.resolver';
import { gameResolver } from './resolvers/game/game.resolver';
import { navigationGuard } from './guards/navigation/navigation.guard';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./components/home/home.component'),
  },
  {
    path: 'score-list',
    loadComponent: () => import('./components/score-list/score-list.component'),
    canActivate: [navigationGuard],
  },
  {
    path: 'help',
    loadComponent: () => import('./components/help/help.component'),
    canActivate: [navigationGuard],
  },
  {
    path: 'settings',
    loadComponent: () => import('./components/settings/settings.component'),
    resolve: { categoryList: categoryResolver },
    canActivate: [navigationGuard],
  },
  {
    path: 'question',
    loadComponent: () => import('./components/question/question.component'),
    resolve: { game: gameResolver },
    canActivate: [navigationGuard],
  },
  {
    path: 'final-score',
    loadComponent: () => import('./components/final-score/final-score.component'),
    resolve: { game: gameResolver },
    canActivate: [navigationGuard],
  },
  { path: '**', redirectTo: '' },
];
