import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navigation',
  imports: [CommonModule, RouterLink, RouterLinkActive],
  template: `
    <nav class="navbar">
      <div class="nav-container">
        <a routerLink="/" class="nav-brand" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">
          Conference App
        </a>
        <ul class="nav-links">
          <li>
            <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">
              Home
            </a>
          </li>
          <li>
            <a routerLink="/conferences" routerLinkActive="active">
              All Sessions
            </a>
          </li>
          <li>
            <a routerLink="/new-session" routerLinkActive="active">
              Create Session
            </a>
          </li>
        </ul>
      </div>
    </nav>
  `,
  styles: [`
    .navbar {
      background: linear-gradient(135deg, #c988ef 0%, #e0b3f5 100%);
      box-shadow: 0 2px 4px rgba(201, 136, 239, 0.2);
      position: sticky;
      top: 0;
      z-index: 1000;
    }

    .nav-container {
      max-width: 1200px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 20px;
    }

    .nav-brand {
      font-size: 1.5em;
      font-weight: bold;
      color: white;
      text-decoration: none;
      padding: 15px 0;
    }

    .nav-brand:hover {
      color: #fef7ff;
    }

    .nav-links {
      display: flex;
      list-style: none;
      margin: 0;
      padding: 0;
      gap: 10px;
    }

    .nav-links li {
      margin: 0;
    }

    .nav-links a {
      display: block;
      padding: 15px 20px;
      color: white;
      text-decoration: none;
      transition: background-color 0.3s ease;
      border-radius: 4px;
    }

    .nav-links a:hover {
      background-color: rgba(255, 255, 255, 0.15);
    }

    .nav-links a.active {
      background-color: rgba(255, 255, 255, 0.25);
      font-weight: bold;
    }

    @media (max-width: 768px) {
      .nav-container {
        flex-direction: column;
        align-items: flex-start;
      }

      .nav-links {
        flex-direction: column;
        width: 100%;
        gap: 0;
      }

      .nav-links a {
        width: 100%;
        padding: 12px 20px;
      }
    }
  `]
})
export class AppNavigationComponent {}
