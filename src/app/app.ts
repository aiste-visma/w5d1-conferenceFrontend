import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AttendeeFormComponent } from './attendee-form/attendee-form.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AttendeeFormComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('conference-frontend');
}
