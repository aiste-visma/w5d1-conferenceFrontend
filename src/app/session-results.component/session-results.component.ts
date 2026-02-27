import { Component, Input} from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { SessionService } from '../services/session.service';
import { Session } from '../models/session.model';
import { DateTimeFormatPipe } from '../date-time-format.pipe';

@Component({
  selector: 'app-session-results',
  imports: [CommonModule,DateTimeFormatPipe],
  providers: [DatePipe],
  templateUrl: './session-results.component.html',
  styleUrl: './session-results.component.css',
})
export class SessionResultsComponent {

  @Input() sessions: Session[] = [];
}
