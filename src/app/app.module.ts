import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { LoginComponent } from './login/login.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { CardsComponent } from './cards/cards.component';
import { SliderComponent } from './slider/slider.component';
import { FaqComponent } from './faq/faq.component';
import { BannerComponent } from './banner/banner.component';
import { SignupComponent } from './signup/signup.component';
import { PortraitComponent } from './portrait/portrait.component';
import { RouterModule } from '@angular/router';
import { LandscapeComponent } from './landscape/landscape.component';
import { WildlifeComponent } from './wildlife/wildlife.component';
import { StreetComponent } from './street/street.component';
import { MacroComponent } from './macro/macro.component';
import { EventComponent } from './event/event.component';
import { ArchitectureComponent } from './architecture/architecture.component';
import { GalleryComponent } from './gallery/gallery.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    PagenotfoundComponent,
    LoginComponent,
    AboutusComponent,
    NavbarComponent,
    FooterComponent,
    CardsComponent,
    SliderComponent,
    FaqComponent,
    BannerComponent,
    SignupComponent,
    PortraitComponent,
    LandscapeComponent,
    WildlifeComponent,
    StreetComponent,
    MacroComponent,
    EventComponent,
    ArchitectureComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
