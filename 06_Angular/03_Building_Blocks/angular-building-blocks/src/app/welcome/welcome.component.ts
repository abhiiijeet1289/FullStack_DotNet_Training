import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome',
  standalone: true,
  template: `
    <div class="welcome-container">
      <h1>Welcome to Angular 19!</h1>
      <p>{{ welcomeMessage }}</p>
      <button (click)="changeMessage()">Change Message</button>
    </div>
  `,
  styles: [`
    .welcome-container {
      text-align: center;
      padding: 20px;
      background-color: #f0f0f0;
      border-radius: 8px;
      margin: 20px;
    }
    
    h1 {
      color: #dd0031;
    }
    
    button {
      background-color: #dd0031;
      color: white;
      padding: 10px 20px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
    
    button:hover {
      background-color: #c50025;
    }
  `]
})
export class WelcomeComponent {
  welcomeMessage = 'This is your first Angular 19 component!';

  changeMessage(): void {
    this.welcomeMessage = 'Message changed successfully!';
  }
}