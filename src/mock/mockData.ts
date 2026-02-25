export const tracks = [
  { id: 1, name: "Backend Development" },
  { id: 2, name: "Frontend Development" },
  { id: 3, name: "Cloud & DevOps" },
  { id: 4, name: "Mobile Development" },
  { id: 5, name: "Data & AI" }
];

export const sessions = [
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

export const sessionSpeakers = [
  { sessionId: 1, speakerId: 1 },
  { sessionId: 2, speakerId: 3 },
  { sessionId: 3, speakerId: 2 },
  { sessionId: 3, speakerId: 6 },
  { sessionId: 4, speakerId: 4 },
  { sessionId: 5, speakerId: 2 }
];

export const attendees = [
  {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    userName: "johndoe",
    emailAddress: "john.doe@example.com"
  },
  {
    id: 2,
    firstName: "Jane",
    lastName: "Smith",
    userName: "janesmith",
    emailAddress: "jane.smith@example.com"
  },
  {
    id: 3,
    firstName: "Bob",
    lastName: "Johnson",
    userName: "bobjohnson",
    emailAddress: "bob.johnson@example.com"
  }
];

export const sessionAttendees = [
  { sessionId: 1, attendeeId: 1 },
  { sessionId: 2, attendeeId: 1 },
  { sessionId: 3, attendeeId: 1 },
  { sessionId: 1, attendeeId: 2 },
  { sessionId: 4, attendeeId: 2 },
  { sessionId: 5, attendeeId: 3 }
];

