import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-everleaf',
  templateUrl: './project-everleaf.component.html',
  styleUrls: ['./project-everleaf.component.css']
})
export class ProjectEverleafComponent {

  constructor(private router: Router) {}

  changePage(page: string) {
    this.router.navigate([page]);
  }
}
