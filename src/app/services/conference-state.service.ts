import { Injectable, signal } from '@angular/core';
import { Attendee } from '../models/attendee.model'; 

@Injectable({
  providedIn: 'root',
})
export class ConferenceStateService {

  private _submittedAttendee = signal<Attendee | null>(null);

  constructor() { }

  setSubmittedAttendee(attendee: Attendee): void {
    this._submittedAttendee.set(attendee);
    console.log('ConferenceStateService: Submitted Attendee set:', this._submittedAttendee());
  }

  getSubmittedAttendee(): Attendee | null {
    return this._submittedAttendee();
  }
}
