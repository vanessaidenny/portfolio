import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutComponent {
  resumeUrl = 'https://1drv.ms/b/c/8a62985dfa8c832c/EXq4hvvG1rxEgXlCXvbEsCoBMDvgsG18FCR8k0U82pRBrA?e=wB0ARq';

  constructor(private router: Router) {}

  changePage(page: string) {
    this.router.navigate([page]);
  }

  gotoUrl() {
    window.open(this.resumeUrl, 'blank');
  }
}
