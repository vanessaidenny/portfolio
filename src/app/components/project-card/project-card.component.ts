import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectCardComponent {

  constructor(private router: Router) {}

  changePage(page: string) {
    this.router.navigate([page]);
  }
}
