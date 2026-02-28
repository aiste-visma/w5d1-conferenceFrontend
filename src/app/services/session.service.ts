import { Injectable } from '@angular/core';
import { CreateSession, Session } from '../models/session.model';
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

  getSessionById(id: number): Observable<Session> {
    return this.api.get<Session>(`${this.api.endpoints.sessions}/${id}`);
  }

  createSession(session: CreateSession): Observable<Session> {
    return this.api.post<Session>(this.api.endpoints.sessions, session);
  }
  
}
