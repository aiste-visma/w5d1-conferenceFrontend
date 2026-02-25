import { Component , OnInit} from '@angular/core';
import { Attendee } from '../models/attendee.model'; 
import { AttendeeFormComponent } from '../attendee-form/attendee-form.component';
import { SpeakerResultsComponent } from '../speaker-results.component/speaker-results.component';
import { SpeakerService } from '../services/speaker.service';


@Component({
  selector: 'app-conference-page-container',
  imports: [AttendeeFormComponent, SpeakerResultsComponent],
  templateUrl: './conference-page-container.html',
  styleUrl: './conference-page-container.css',
})
export class ConferencePageContainer implements OnInit {

  public submittedAttendee: Attendee | null = null;

  public mockSpeakers: any[] = [];

  constructor(private speakerService: SpeakerService) { }
  
  ngOnInit(): void {
	this.mockSpeakers = this.speakerService.getSpeakers();
  }

  public handleAttendeeRegistration(attendee: Attendee): void {
  console.log('Received attendee in container:', attendee);
  this.submittedAttendee = attendee;
}
}