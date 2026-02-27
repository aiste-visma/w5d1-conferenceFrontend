import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Attendee } from '../models/attendee.model';
import { AttendeeFormComponent } from '../attendee-form/attendee-form.component';
import { SpeakerResultsComponent } from '../speaker-results.component/speaker-results.component';
import { ConferenceStateService } from '../services/conference-state.service';
import { SessionResultsComponent } from '../session-results.component/session-results.component';
import { ApiService } from '../services/api.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-conference-page-container',
  imports: [CommonModule, AttendeeFormComponent, SpeakerResultsComponent, SessionResultsComponent],
  templateUrl: './conference-page-container.html',
  styleUrl: './conference-page-container.css',
})
export class ConferencePageContainer implements OnInit {
  // observables emitted by ApiService; the template uses | async
  public Speakers$!: Observable<any[]>;
  public mockSessions$!: Observable<any[]>;

  // error state for data loading
  public loadingErrors: string[] = [];

  constructor(
    private api: ApiService,
    private conferenceStateService: ConferenceStateService
  ) {}

  ngOnInit(): void {
    this.Speakers$ = this.api.getSpeakers().pipe(
      catchError(err => {
        console.error('Failed to load speakers', err);
        if (!this.loadingErrors.includes('Unable to load speakers')) {
          this.loadingErrors.push('Unable to load speakers');
        }
        return of([]);
      })
    );
    this.mockSessions$ = this.api.getSessions().pipe(
      catchError(err => {
        console.error('Failed to load sessions', err);
        if (!this.loadingErrors.includes('Unable to load sessions')) {
          this.loadingErrors.push('Unable to load sessions');
        }
        return of([]);
      })
    );
  }

  public handleAttendeeRegistration(attendee: Attendee): void {
    console.log('Received attendee in container:', attendee);
    this.conferenceStateService.setSubmittedAttendee(attendee);
  }

  get submittedAttendeeSignal(): Attendee | null {
    return this.conferenceStateService.getSubmittedAttendee();
  }
}
