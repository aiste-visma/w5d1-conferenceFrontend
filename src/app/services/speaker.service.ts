import { Injectable } from '@angular/core';
import { Speaker } from '../models/speaker.model';

const speakers = [
  {
    id: 1,
    name: "Scott Hunter",
    bio: "Scott Hunter is the VP of Product for Azure Developer Experience at Microsoft, overseeing .NET, Visual Studio, and Azure developer tools.",
    webSite: "https://twitter.com/coolcsh"
  },
  {
    id: 2,
    name: "David Fowler",
    bio: "David Fowler is a Partner Software Architect on the ASP.NET team at Microsoft and creator of SignalR.",
    webSite: "https://twitter.com/davidfowl"
  },
  {
    id: 3,
    name: "Safia Abdalla",
    bio: "Safia Abdalla is a software engineer on the .NET team at Microsoft, working on ASP.NET Core.",
    webSite: "https://twitter.com/captainsafia"
  },
  {
    id: 4,
    name: "Glenn Condron",
    bio: "Glenn Condron is a Program Manager on the ASP.NET Core team at Microsoft.",
    webSite: "https://twitter.com/condrong"
  },
  {
    id: 5,
    name: "Mads Kristensen",
    bio: "Mads Kristensen is a Principal Program Manager at Microsoft, working on Visual Studio extensibility and web tools.",
    webSite: "https://twitter.com/mkristensen"
  },
  {
    id: 6,
    name: "Damian Edwards",
    bio: "Damian Edwards is a Principal Architect on the ASP.NET team at Microsoft.",
    webSite: "https://twitter.com/damianedwards"
  }
];

@Injectable({
  providedIn: 'root',
})
export class SpeakerService {

constructor() { }

getSpeakers(): Speaker[] {
  return speakers;  
}
  
}
