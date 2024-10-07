import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const navigationGuard: CanActivateFn = () => {
  return window.location.pathname === '/' ? true : inject(Router).parseUrl('');
};
