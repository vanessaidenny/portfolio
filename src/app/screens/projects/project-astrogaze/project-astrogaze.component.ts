import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-project-astrogaze',
  templateUrl: './project-astrogaze.component.html',
  styleUrls: ['./project-astrogaze.component.css']
})
export class ProjectAstrogazeComponent {

  constructor(private router: Router) {}

  changePage(page: string) {
    this.router.navigate([page]);
  }
}