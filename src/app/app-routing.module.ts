import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { SignupComponent } from './signup/signup.component';
import { PortraitComponent } from './portrait/portrait.component';
import { LandscapeComponent } from './landscape/landscape.component';
import { WildlifeComponent } from './wildlife/wildlife.component';
import { StreetComponent } from './street/street.component';
import { MacroComponent } from './macro/macro.component';
import { EventComponent } from './event/event.component';
import { ArchitectureComponent } from './architecture/architecture.component';
import { GalleryComponent } from './gallery/gallery.component';

const routes: Routes = [
  { path:'',component:WelcomeComponent },
  { path:'aboutus',component:AboutusComponent },
  { path:'login',component:LoginComponent },
  { path:'signup',component:SignupComponent },
  { path:'portrait',component:PortraitComponent },
  { path:'landscape',component:LandscapeComponent },
  { path:'wildlife',component:WildlifeComponent },
  { path:'street',component:StreetComponent },
  { path:'macro',component:MacroComponent },
  { path:'event',component:EventComponent },
  { path:'architecture',component:ArchitectureComponent },
  { path: 'gallery', component:GalleryComponent},
  { path:'**',component:PagenotfoundComponent }
 
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
