import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Speaker } from '../models/speaker.model';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class SpeakerService {
  constructor(private api: ApiService) { }

  getSpeakers(): Observable<Speaker[]> {
    return this.api.get<Speaker[]>(this.api.endpoints.speakers);
  }
  
}
