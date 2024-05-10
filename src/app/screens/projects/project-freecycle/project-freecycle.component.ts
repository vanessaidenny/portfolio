import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-freecycle',
  templateUrl: './project-freecycle.component.html',
  styleUrls: ['./project-freecycle.component.css']
})
export class ProjectFreecycleComponent {

  constructor(private router: Router) {}

  changePage(page: string) {
    this.router.navigate([page]);
  }
}
