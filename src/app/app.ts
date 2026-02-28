import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppNavigationComponent } from './app-navigation/app-navigation.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AppNavigationComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('conference-frontend');
}
