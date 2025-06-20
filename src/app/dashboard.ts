import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  template: `
    <div class="dashboard-content">
      <mat-card *ngFor="let card of cards">
        <mat-card-title>{{ card.title }}</mat-card-title>
        <mat-card-content>{{ card.content }}</mat-card-content>
      </mat-card>
    </div>
  `,
  styles: [`
    .dashboard-content {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      gap: 16px;
      padding: 16px;
    }
  `]
})
export class DashboardComponent {
  cards = [
    { title: 'Users', content: '25 active users' },
    { title: 'Revenue', content: '$5,000 this month' },
    { title: 'Tasks', content: '12 pending tasks' },
  ];
}
