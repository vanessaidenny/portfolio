import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-key-to-thrive',
  templateUrl: './project-key-to-thrive.component.html',
  styleUrls: ['./project-key-to-thrive.component.css']
})
export class ProjectKeyToThriveComponent {

  constructor(private router: Router) {}

  changePage(page: string) {
    this.router.navigate([page]);
  }
}
