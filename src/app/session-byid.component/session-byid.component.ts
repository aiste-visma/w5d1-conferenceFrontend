import { Component, Input } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Session } from '../models/session.model';
import { DateTimeFormatPipe } from '../date-time-format.pipe';

@Component({
  selector: 'app-session-byid',
  imports: [CommonModule, DateTimeFormatPipe, RouterLink],
  providers: [DatePipe],
  templateUrl: './session-byid.component.html',
  styleUrl: './session-byid.component.css',
})
export class SessionByIdComponent {
  @Input() session: Session | null = null;
}
