import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NetworkInterceptor } from './services/network-interceptor';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    // HttpClient is required by ApiService (and any other client code)
    provideHttpClient(),
    { provide: HTTP_INTERCEPTORS, useClass: NetworkInterceptor, multi: true }
  ]
};
