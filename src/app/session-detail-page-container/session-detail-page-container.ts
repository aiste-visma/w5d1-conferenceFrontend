import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { SessionByIdComponent } from '../session-byid.component/session-byid.component';
import { SessionService } from '../services/session.service';
import { Session } from '../models/session.model';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-session-detail-page-container',
  imports: [CommonModule, SessionByIdComponent],
  template: `
    <div class="session-detail-page">
      @if (loadingError) {
        <div class="error-message">{{ loadingError }}</div>
      } @else {
        <app-session-byid [session]="(session$ | async)"></app-session-byid>
      }
    </div>
  `,
  styles: [`
    .session-detail-page {
      padding: 20px;
    }
    .error-message {
      color: red;
      padding: 20px;
      background-color: #ffebee;
      border-radius: 5px;
      border: 1px solid #ef5350;
      text-align: center;
      font-size: 1.1em;
    }
  `]
})
export class SessionDetailPageContainer implements OnInit {
  public session$!: Observable<Session | null>;
  public loadingError: string = '';

  constructor(
    private route: ActivatedRoute,
    private sessionsService: SessionService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    
    if (id) {
      this.session$ = this.sessionsService.getSessionById(+id).pipe(
        catchError(err => {
          console.error('Failed to load session', err);
          this.loadingError = 'Unable to load session';
          return of(null);
        })
      );
    } else {
      this.loadingError = 'No session ID provided';
      this.session$ = of(null);
    }
  }
}
