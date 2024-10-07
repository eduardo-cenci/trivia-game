import { ApplicationConfig } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';

import { routes } from './app.routes';
import { provideToastr } from 'ngx-toastr';
import { requestErrorInterceptor } from './interceptors/request-error/request-error.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withComponentInputBinding()),
    provideHttpClient(withInterceptors([requestErrorInterceptor])),
    provideAnimations(),
    provideToastr({
      timeOut: 5000,
      progressBar: true,
      positionClass: 'toast-bottom-center',
    }),
  ],
};
