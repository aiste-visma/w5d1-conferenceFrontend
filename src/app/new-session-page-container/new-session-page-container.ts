import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { NewSessionFormComponent } from '../new-session-form/new-session-form.component';
import { SessionService } from '../services/session.service';
import { CreateSession, Session } from '../models/session.model';
import { timeout, finalize } from 'rxjs/operators';

@Component({
  selector: 'app-new-session-page-container',
  imports: [CommonModule, NewSessionFormComponent],
  template: `
    <div class="new-session-page">
      @if (successMessage) {
        <div class="alert alert-success">
          {{ successMessage }}
          <button class="btn-link" (click)="viewSession(createdSessionId!)">View Session</button>
        </div>
      }
      <app-new-session-form 
        (createSession)="handleCreateSession($event)">
      </app-new-session-form>
    </div>
  `,
  styles: [`
    .new-session-page {
      padding: 20px;
      max-width: 800px;
      margin: 0 auto;
    }
    .alert {
      padding: 15px 20px;
      margin-bottom: 20px;
      border-radius: 8px;
      font-size: 1em;
    }
    .alert-success {
      background-color: #d4edda;
      border: 1px solid #c3e6cb;
      color: #155724;
      text-align: center;
    }
    .btn-link {
      background: none;
      border: none;
      color: #007bff;
      text-decoration: underline;
      cursor: pointer;
      margin-left: 10px;
      font-size: 1em;
    }
    .btn-link:hover {
      color: #0056b3;
    }
  `]
})
export class NewSessionPageContainer {
  @ViewChild(NewSessionFormComponent) formComponent?: NewSessionFormComponent;
  
  successMessage = '';
  createdSessionId: number | null = null;

  constructor(
    private sessionsService: SessionService,
    private router: Router
  ) {}

  handleCreateSession(sessionData: CreateSession): void {
    this.successMessage = '';
    this.formComponent?.setLoading(true);

    this.sessionsService.createSession(sessionData).pipe(
      timeout(10000),
      finalize(() => this.formComponent?.setLoading(false))
    ).subscribe({
      next: (created: Session) => {
        this.createdSessionId = created.id;
        this.successMessage = `Session "${created.title}" created successfully!`;
        this.formComponent?.reset();
        
        setTimeout(() => {
          this.successMessage = '';
        }, 5000);
      },
      error: (err) => {
        console.error('Failed to create session', err);
        let message = 'Failed to create session. Please try again.';
        
        if (err.status === 400 && err.error?.errors) {
          // Handle validation errors from backend
          message = Object.values(err.error.errors).join(', ');
        } else if (err.status === 0) {
          message = 'Server appears to be down. Please try again later.';
        }
        
        this.formComponent?.setServerMessage(message);
      }
    });
  }

  viewSession(id: number): void {
    this.router.navigate(['/conference', id]);
  }
}
