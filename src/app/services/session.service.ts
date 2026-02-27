import { Injectable } from '@angular/core';
import { Session } from '../models/session.model';

const sessions = [
  {
    id: 1,
    title: "What's New in .NET 8",
    abstract: "Join us for an overview of the latest features and improvements in .NET 8...",
    startTime: "2026-04-01T09:00:00",
    endTime: "2026-04-01T10:00:00",
    trackId: 1
  },
  {
    id: 2,
    title: "Building Modern Web Apps with Blazor",
    abstract: "Learn how to build interactive web applications using Blazor...",
    startTime: "2026-04-01T10:15:00",
    endTime: "2026-04-01T11:15:00",
    trackId: 2
  },
  {
    id: 3,
    title: "ASP.NET Core Performance Best Practices",
    abstract: "Discover the latest performance optimization techniques...",
    startTime: "2026-04-01T11:30:00",
    endTime: "2026-04-01T12:30:00",
    trackId: 1
  },
  {
    id: 4,
    title: "Deploying .NET Apps to Azure",
    abstract: "A comprehensive guide to deploying .NET applications to Azure...",
    startTime: "2026-04-01T13:30:00",
    endTime: "2026-04-01T14:30:00",
    trackId: 3
  },
  {
    id: 5,
    title: "SignalR Deep Dive",
    abstract: "Explore real-time communication in .NET with SignalR...",
    startTime: "2026-04-01T14:45:00",
    endTime: "2026-04-01T15:45:00",
    trackId: 1
  }
];

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  constructor() { }

  getSessions(): Session[] {
    return sessions;  
  }
  
}
