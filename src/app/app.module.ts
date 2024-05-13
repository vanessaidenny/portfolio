import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './screens/home/home.component';
import { AboutComponent } from './screens/about/about.component';
import { PortfolioComponent } from './screens/portfolio/portfolio.component';
import { ContactComponent } from './screens/contact/contact.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LayoutComponent } from './layout/layout.component';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { PageCardComponent } from './components/page-card/page-card.component';
import { ProjectEverleafComponent } from './screens/projects/project-everleaf/project-everleaf.component';
import { ProjectFreecycleComponent } from './screens/projects/project-freecycle/project-freecycle.component';
import { ProjectKeyToThriveComponent } from './screens/projects/project-key-to-thrive/project-key-to-thrive.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    PortfolioComponent,
    ContactComponent,
    HeaderComponent,
    FooterComponent,
    LayoutComponent,
    ProjectCardComponent,
    PageCardComponent,
    ProjectEverleafComponent,
    ProjectFreecycleComponent,
    ProjectKeyToThriveComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    HomeComponent,
    AboutComponent,
    PortfolioComponent,
    ContactComponent,
    HeaderComponent,
    FooterComponent,
    LayoutComponent,
    ProjectCardComponent,
    PageCardComponent,
    ProjectEverleafComponent,
    ProjectFreecycleComponent,
    ProjectKeyToThriveComponent,
  ]
})
export class AppModule { }
