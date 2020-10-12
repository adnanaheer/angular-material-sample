import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import {MatMenuModule} from '@angular/material/menu';
<<<<<<< HEAD
import { FlexLayoutModule} from '@angular/flex-layout';
=======
import { FlexLayoutModule } from "@angular/flex-layout";
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

>>>>>>> convert_to_angular_material


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import { FromComponent } from './from/from.component';
import {AppRoutingModule} from './app.routing';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { TeamComponent } from './team/team.component';
import { BlogComponent } from './blog/blog.component';
import { TeamaboutComponent } from './teamabout/teamabout.component';
import { OurservicesComponent } from './ourservices/ourservices.component';
import { OurteamComponent } from './ourteam/ourteam.component';
import { AchievmentsComponent } from './achievments/achievments.component';
import { OurtestimonialsComponent } from './ourtestimonials/ourtestimonials.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactComponent } from './contact/contact.component';
import {MatInputModule} from '@angular/material/input';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FromComponent,
    HomeComponent,
    SignupComponent,
    ContactusComponent,
    AboutComponent,
    ServicesComponent,
    PortfolioComponent,
    TeamComponent,
    BlogComponent,
    TeamaboutComponent,
    OurservicesComponent,
    OurteamComponent,
    AchievmentsComponent,
    OurtestimonialsComponent,
    ContactComponent

  ],
  imports: [
    BrowserModule,
    MatCarouselModule.forRoot(),
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatCardModule,
    MatListModule,
    MatMenuModule,
    AppRoutingModule,
    FlexLayoutModule,
<<<<<<< HEAD
    ReactiveFormsModule,
    MatInputModule
=======
    MatFormFieldModule,
    MatInputModule

>>>>>>> convert_to_angular_material

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
