import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Attendee } from '../models/attendee.model';
import { AttendeeFormComponent } from '../attendee-form/attendee-form.component';
import { SpeakerResultsComponent } from '../speaker-results.component/speaker-results.component';
import { ConferenceStateService } from '../services/conference-state.service';
import { SpeakerService } from '../services/speaker.service';
import { Speaker } from '../models/speaker.model';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-conference-page-container',
  imports: [CommonModule, AttendeeFormComponent, SpeakerResultsComponent],
  templateUrl: './conference-page-container.html',
  styleUrl: './conference-page-container.css',
})
export class ConferencePageContainer implements OnInit {
  // observables emitted by ApiService; the template uses | async
  public Speakers$!: Observable<Speaker[]>;

  public loadingErrors: string[] = [];

  constructor(
    private speakerService: SpeakerService,
    private conferenceStateService: ConferenceStateService
  ) {}

  ngOnInit(): void {
    this.Speakers$ = this.speakerService.getSpeakers().pipe(
      catchError(err => {
        console.error('Failed to load speakers', err);
        if (!this.loadingErrors.includes('Unable to load speakers')) {
          this.loadingErrors.push('Unable to load speakers');
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
