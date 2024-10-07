import { HttpErrorResponse, HttpInterceptorFn, HttpResponse } from '@angular/common/http';
import { inject } from '@angular/core';

import { catchError, map, throwError } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { environment } from '../../../environments/environment.development';
import { ApiResponse } from '../../interfaces/api-response';
import { ResponseCode } from '../../enums/response-code';
import { TokenService } from '../../services/token/token.service';

export const requestErrorInterceptor: HttpInterceptorFn = (req, next) => {
  const tokenService = inject(TokenService);
  const toastrService = inject(ToastrService);

  return next(req).pipe(
    map(res => {
      if (req.method === 'GET' && res instanceof HttpResponse && res.url?.startsWith(environment.apiUrl) && res.ok) {
        const body = res.body as ApiResponse;
        const code = body.response_code;

        if (body.response_code && code !== ResponseCode.Success) console.error(res);

        switch (code) {
          case ResponseCode.NoResults:
            toastrService.error("Couldn't find enough questions");
            break;
          case ResponseCode.InvalidParameter:
          case ResponseCode.TokenNotFound:
          case ResponseCode.TokenEmpty:
            tokenService.clearToken();
            toastrService.error('An error has occurred, please try again');
            break;
          case ResponseCode.RateLimit:
            toastrService.error('An error has occurred, please try again later');
            break;
          default:
            break;
        }
      }

      return res;
    }),
    catchError((response: HttpErrorResponse) => {
      toastrService.error(response.message);

      return throwError(() => new Error(response.error));
    }),
  );
};
