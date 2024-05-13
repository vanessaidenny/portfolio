import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-key-to-thrive',
  templateUrl: './project-key-to-thrive.component.html',
  styleUrls: ['./project-key-to-thrive.component.css']
})
export class ProjectKeyToThriveComponent {
  linkedinPostLink = 'https://www.linkedin.com/feed/update/urn:li:activity:7189327807594868736/';
  studentAccessLink = 'https://www.figma.com/proto/xCRXSdiA2SfMeBHTFVpNgt/High-Fidelity-Wireframes?type=design&node-id=354-9615&t=AAGUiyWd3r1cMLZ7-1&scaling=scale-down&page-id=354%3A9169&starting-point-node-id=354%3A9615&show-proto-sidebar=1&mode=design'
  admAccessLink = 'https://www.figma.com/proto/xCRXSdiA2SfMeBHTFVpNgt/High-Fidelity-Wireframes?type=design&node-id=380-12842&t=0Jr2WqUv1w23UgKK-1&scaling=scale-down&page-id=354%3A9169&starting-point-node-id=380%3A12842&show-proto-sidebar=1&mode=design'
  navigateTo = ''

  constructor(private router: Router) {}

  changePage(page: string) {
    this.router.navigate([page]);
  }

  gotoUrl(url: string) {
    switch(url) {
      case 'linkedinPost':
        this.navigateTo = this.linkedinPostLink;
        break;
      case 'studentAccess':
        this.navigateTo = this.studentAccessLink;
        break;
      case 'admAccess':
        this.navigateTo = this.admAccessLink;
        break;
    }
    window.open(this.navigateTo, '_blank');
  }
}