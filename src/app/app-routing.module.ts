import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './screens/about/about.component';
import { PortfolioComponent } from './screens/portfolio/portfolio.component';
import { ContactComponent } from './screens/contact/contact.component';
import { HomeComponent } from './screens/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'greeting', pathMatch: 'full' },
  { path: 'greeting', component: HomeComponent, title: 'Greeting - Vanessa Isabela Denny' },
  { path: 'background', component: AboutComponent, title: 'Background - Vanessa Isabela Denny' },
  { path: 'portfolio', component: PortfolioComponent, title: 'Portfolio - Vanessa Isabela Denny' },
  { path: 'get-in-touch', component: ContactComponent, title: 'Get In Touch - Vanessa Isabela Denny' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
