import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';

/**
 * Centralized API service that knows how to contact the backend.
 *
 * - all HTTP communication goes through HttpClient
 * - every URL is built using the `baseUrl` defined in the
 *   environment file (dev / prod builds get a different value)
 * - the list of available endpoints is kept in one place so
 *   callers never have to construct strings themselves
 */
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private readonly baseUrl = environment.apiUrl;

  /**
   * A central registry of every path our application needs.  When
   * the API surface grows you can add new keys instead of hunting
   * for string literals scattered through the codebase.
   */
  readonly endpoints = {
    sessions: '/sessions',
    speakers: '/speakers',
    attendees: '/attendees',
    tracks: '/tracks',
    // add additional endpoints here
  } as const;

  constructor(private http: HttpClient) {}

  // generic helpers -----------------------------------------------------

  get<T>(path: string, options?: any): Observable<T> {
    // explicit cast because the Angular compiler sometimes widens the
    // result to HttpEvent<T> when custom options are provided
    // @ts-ignore: the generic inference is overly broad in some Angular versions
    return this.http.get<T>(this.baseUrl + path, options) as Observable<T>;
  }

  post<T>(path: string, body: any, options?: any): Observable<T> {
    // @ts-ignore: see note above
    return this.http.post<T>(this.baseUrl + path, body, options) as Observable<T>;
  }

  put<T>(path: string, body: any, options?: any): Observable<T> {
    // the Angular compiler sometimes widens this to HttpEvent<T>, so cast
    // @ts-ignore: see note above
    return this.http.put<T>(this.baseUrl + path, body, options) as Observable<T>;
  }

  delete<T>(path: string, options?: any): Observable<T> {
    // @ts-ignore: see note above
    return this.http.delete<T>(this.baseUrl + path, options) as Observable<T>;
  }

  // convenience methods for common resources ---------------------------

  getSessions(): Observable<any> {
    return this.get<any>(this.endpoints.sessions).pipe(
      // if the request fails, log and rethrow so callers can handle it
      // or catch locally in the caller as desired
      catchError(err => {
        console.error('API getSessions failed', err);
        return throwError(() => err);
      })
    );
  }

  getSpeakers(): Observable<any> {
    return this.get<any>(this.endpoints.speakers).pipe(
      catchError(err => {
        console.error('API getSpeakers failed', err);
        return throwError(() => err);
      })
    );
  }

  // more helpers can go here (createSession, updateSpeaker, etc.)
}
