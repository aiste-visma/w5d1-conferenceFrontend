import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-not-found',
  imports: [CommonModule, RouterLink],
  template: `
    <div class="not-found-container">
      <div class="not-found-content">
        <h1 class="error-code">404</h1>
        <h2 class="error-message">Page Not Found</h2>
        <p class="error-description">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>
        <div class="action-buttons">
          <a routerLink="/" class="btn btn-primary">Go to Home</a>
          <a routerLink="/conferences" class="btn btn-secondary">View All Sessions</a>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .not-found-container {
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 70vh;
      padding: 20px;
      background: linear-gradient(135deg, #fef7ff 0%, #f9f0ff 100%);
    }

    .not-found-content {
      text-align: center;
      max-width: 600px;
      background: white;
      padding: 50px 30px;
      border-radius: 999px;
      box-shadow: 0 4px 20px rgba(201, 136, 239, 0.15);
    }

    .error-code {
      font-size: 8em;
      font-weight: bold;
      color: #c988ef;
      margin: 0;
      line-height: 1;
    }

    .error-message {
      font-size: 2.5em;
      color: #333;
      margin: 20px 0 10px;
    }

    .error-description {
      font-size: 1.2em;
      color: #666;
      margin-bottom: 40px;
      line-height: 1.6;
    }

    .action-buttons {
      display: flex;
      gap: 15px;
      justify-content: center;
      flex-wrap: wrap;
    }

    .btn {
      padding: 12px 30px;
      font-size: 1em;
      font-weight: bold;
      border: none;
      border-radius: 8px;
      text-decoration: none;
      cursor: pointer;
      transition: transform 0.2s ease, box-shadow 0.2s ease;
      display: inline-block;
    }

    .btn-primary {
      background: linear-gradient(135deg, #c988ef, #e0b3f5);
      color: white;
    }

    .btn-primary:hover {
      background: linear-gradient(135deg, #b76ce3, #d19dee);
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(201, 136, 239, 0.4);
    }

    .btn-secondary {
      background-color: #fff;
      color: #c988ef;
      border: 2px solid #c988ef;
    }

    .btn-secondary:hover {
      background: linear-gradient(135deg, #fef7ff, #f9f0ff);
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(201, 136, 239, 0.25);
    }

    @media (max-width: 768px) {
      .error-code {
        font-size: 5em;
      }

      .error-message {
        font-size: 1.8em;
      }

      .error-description {
        font-size: 1em;
      }

      .action-buttons {
        flex-direction: column;
      }

      .btn {
        width: 100%;
      }
    }
  `]
})
export class NotFoundComponent {}
