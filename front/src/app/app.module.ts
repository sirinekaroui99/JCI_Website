import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScrollDirective } from './ScrollDirective.directive';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ComponentsComponent } from './components/components.component';

@NgModule({
  declarations: [
    AppComponent,
    ScrollDirective,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    NavbarComponent,
    AboutUsComponent,
    ComponentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
