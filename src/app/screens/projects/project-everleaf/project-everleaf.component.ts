import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-everleaf',
  templateUrl: './project-everleaf.component.html',
  styleUrls: ['./project-everleaf.component.css']
})
export class ProjectEverleafComponent {
  prototypeLink = 'https://www.figma.com/proto/NrqKrdMZ5Ok9WjPP5M2Vwd/UX-Design-II---Project-Showcase---Group-3---Hi-Fi-Wireframing-and-Prototyping?page-id=0%3A1&type=design&node-id=583-6568&viewport=887%2C28%2C0.03&t=DKsL85YEUPYKo49w-1&scaling=scale-down&starting-point-node-id=583%3A6568&mode=design'

  constructor(private router: Router) {}

  changePage(page: string) {
    this.router.navigate([page]);
  }

  goToUrl() {
    window.open(this.prototypeLink, '_blank');
  }
}
