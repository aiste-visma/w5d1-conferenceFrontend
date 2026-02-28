import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SessionResultsComponent } from '../session-results.component/session-results.component';
import { SessionService } from '../services/session.service';
import { Session } from '../models/session.model';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-sessions-page-container',
  imports: [CommonModule, SessionResultsComponent],
  template: `
    <div class="sessions-page">
      @if (loadingError) {
        <div class="error-message">
          {{ loadingError }}
        </div>
      }
      <app-session-results [sessions]="(sessions$ | async) || []"></app-session-results>
    </div>
    `,
})
export class SessionsPageContainer implements OnInit {
  public sessions$!: Observable<Session[]>;
  public loadingError: string = '';

  constructor(private sessionsService: SessionService) {}

  ngOnInit(): void {
    this.sessions$ = this.sessionsService.getSessions().pipe(
      catchError(err => {
        console.error('Failed to load sessions', err);
        this.loadingError = 'Unable to load sessions';
        return of([]);
      })
    );
  }
}
