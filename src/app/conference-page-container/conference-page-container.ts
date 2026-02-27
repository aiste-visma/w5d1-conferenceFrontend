import { Component , OnInit} from '@angular/core';
import { Attendee } from '../models/attendee.model'; 
import { AttendeeFormComponent } from '../attendee-form/attendee-form.component';
import { SpeakerResultsComponent } from '../speaker-results.component/speaker-results.component';
import { SpeakerService } from '../services/speaker.service';
import { SessionService } from '../services/session.service';
import { ConferenceStateService } from '../services/conference-state.service';
import { SessionResultsComponent } from '../session-results.component/session-results.component';


@Component({
  selector: 'app-conference-page-container',
  imports: [AttendeeFormComponent, SpeakerResultsComponent, SessionResultsComponent],
  templateUrl: './conference-page-container.html',
  styleUrl: './conference-page-container.css',
})
export class ConferencePageContainer implements OnInit {


  public mockSpeakers: any[] = [];
  public mockSessions: any[] = [];

  constructor(private speakerService: SpeakerService,
              private conferenceStateService: ConferenceStateService,
              private sessionService: SessionService
  ) { }
  
  ngOnInit(): void {
	this.mockSpeakers = this.speakerService.getSpeakers();
  this.mockSessions = this.sessionService.getSessions();
  console.log(this.mockSessions);
  }

  public handleAttendeeRegistration(attendee: Attendee): void {
  console.log('Received attendee in container:', attendee);
  this.conferenceStateService.setSubmittedAttendee(attendee);
  }

  get submittedAttendeeSignal(): Attendee | null {
    return this.conferenceStateService.getSubmittedAttendee();
  }

}