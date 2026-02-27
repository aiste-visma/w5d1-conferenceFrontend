import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { NetworkStatusService } from './network-status.service';

@Injectable()
export class NetworkInterceptor implements HttpInterceptor {
  constructor(private network: NetworkStatusService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      tap(() => {
        // a successful HTTP interaction -> mark network as up
        try { this.network.setDown(false); } catch { /* noop */ }
      }),
      catchError((err: any) => {
        if (err instanceof HttpErrorResponse && err.status === 0) {
          // network error / CORS / server down
          this.network.setDown(true);
        }
        return throwError(err);
      })
    );
  }
}
