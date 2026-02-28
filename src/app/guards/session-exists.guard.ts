import { inject } from '@angular/core';
import { Router, CanActivateFn, ActivatedRouteSnapshot } from '@angular/router';
import { SessionService } from '../services/session.service';
import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

export const sessionExistsGuard: CanActivateFn = (route: ActivatedRouteSnapshot) => {
  const sessionsService = inject(SessionService);
  const router = inject(Router);
  
  const id = route.paramMap.get('id');
  
  if (!id || isNaN(+id)) {
    console.warn('Invalid session ID');
    router.navigate(['/conferences']);
    return false;
  }

  return sessionsService.getSessionById(+id).pipe(
    map(session => {
      if (session) {
        return true;
      } else {
        console.warn(`Session with ID ${id} not found`);
        router.navigate(['/conferences']);
        return false;
      }
    }),
    catchError(err => {
      console.error(`Error checking session ${id}:`, err);
      router.navigate(['/conferences']);
      return of(false);
    })
  );
};
