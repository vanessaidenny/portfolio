import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './screens/about/about.component';
import { PortfolioComponent } from './screens/portfolio/portfolio.component';
import { ContactComponent } from './screens/contact/contact.component';
import { HomeComponent } from './screens/home/home.component';
import { ProjectEverleafComponent } from './screens/projects/project-everleaf/project-everleaf.component';
import { ProjectFreecycleComponent } from './screens/projects/project-freecycle/project-freecycle.component';
import { ProjectKeyToThriveComponent } from './screens/projects/project-key-to-thrive/project-key-to-thrive.component';
import { ProjectAstrogazeComponent } from './screens/projects/project-astrogaze/project-astrogaze.component';

const routes: Routes = [
  { path: '', redirectTo: 'greeting', pathMatch: 'full' },
  { path: 'greeting', component: HomeComponent, title: 'Greeting - Vanessa Isabela Denny' },
  { path: 'background', component: AboutComponent, title: 'Background - Vanessa Isabela Denny' },
  { path: 'portfolio', component: PortfolioComponent, title: 'Portfolio - Vanessa Isabela Denny' },
  { path: 'get-in-touch', component: ContactComponent, title: 'Get In Touch - Vanessa Isabela Denny' },
  { path: 'project-everleaf', component: ProjectEverleafComponent, title: 'Project - EverLeaf - Vanessa Isabela Denny' },
  { path: 'project-freecycle', component: ProjectFreecycleComponent, title: 'Project - Freecycle.org - Vanessa Isabela Denny' },
  { path: 'project-key-to-thrive', component: ProjectKeyToThriveComponent, title: 'Project - Key to Thrive - Vanessa Isabela Denny' },
  { path: 'project-astrogaze', component: ProjectAstrogazeComponent, title: 'Project - Astrogaze - Vanessa Isabela Denny' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
