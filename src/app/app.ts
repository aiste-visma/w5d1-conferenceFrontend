import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ConferencePageContainer } from './conference-page-container/conference-page-container';

@Component({
  selector: 'app-root',
  imports: [ConferencePageContainer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('conference-frontend');
}
