import { Component, Input } from '@angular/core';
import { Speaker } from '../models/speaker.model';

@Component({
  selector: 'app-speaker-results',
  imports: [],
  templateUrl: './speaker-results.component.html',
  styleUrl: './speaker-results.component.css',
})
export class SpeakerResultsComponent {

  @Input() speakers: Speaker[] = [];
}
