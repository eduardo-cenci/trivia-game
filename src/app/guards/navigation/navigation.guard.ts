import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { environment } from '../../../environments/environment';

export const navigationGuard: CanActivateFn = () => {
  console.log(window.location.pathname, environment.basePath);
  return window.location.pathname === environment.basePath ? true : inject(Router).parseUrl('');
};
