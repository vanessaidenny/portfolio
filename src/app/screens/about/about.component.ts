import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutComponent {
  resumeUrl = 'https://1drv.ms/b/s!AiyDjPpdmGKKidcm-vexUgb2rMRN5g?e=3seZGL';

  constructor(private router: Router) {}

  changePage(page: string) {
    this.router.navigate([page]);
  }

  gotoUrl() {
    window.open(this.resumeUrl, 'blank');
  }
}
