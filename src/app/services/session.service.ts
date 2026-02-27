import { Injectable } from '@angular/core';
import { Session } from '../models/session.model';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  constructor(private api: ApiService) { }

  getSessions(): Observable<Session[]> {
    return this.api.get<Session[]>(this.api.endpoints.sessions);
  }
  
}
