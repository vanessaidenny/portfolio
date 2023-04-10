import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './screens/home/home.component';
import { AboutComponent } from './screens/about/about.component';
import { PortfolioComponent } from './screens/portfolio/portfolio.component';
import { ContactComponent } from './screens/contact/contact.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LayoutComponent } from './layout/layout.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    PortfolioComponent,
    ContactComponent,
    HeaderComponent,
    FooterComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
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
    LayoutComponent
  ]
})
export class AppModule { }
