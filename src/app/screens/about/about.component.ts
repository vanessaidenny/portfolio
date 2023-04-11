import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutComponent {
  resumeUrl = 'https://algonquinlivecom-my.sharepoint.com/:b:/g/personal/denn0148_algonquinlive_com/EeKfEz0UxXxJoN8abGwWW9kBDclDCHHz2Etkcx7AcZxkuw?e=OTXv8w';

  constructor(private router: Router) {}

  changePage(page: string) {
    this.router.navigate([page]);
  }

  gotoUrl() {
    window.open(this.resumeUrl, 'blank');
  }
}
