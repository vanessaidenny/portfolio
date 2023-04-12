import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './screens/about/about.component';
import { PortfolioComponent } from './screens/portfolio/portfolio.component';
import { ContactComponent } from './screens/contact/contact.component';
import { HomeComponent } from './screens/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, title: 'Home - Vanessa Isabela Denny' },
  { path: 'about', component: AboutComponent, title: 'About Me - Vanessa Isabela Denny' },
  { path: 'portfolio', component: PortfolioComponent, title: 'My Portfolio - Vanessa Isabela Denny' },
  { path: 'contact', component: ContactComponent, title: 'Contact Me - Vanessa Isabela Denny' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
