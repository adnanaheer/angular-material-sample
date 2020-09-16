import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FromComponent } from './from/from.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { ContactusComponent } from './contactus/contactus.component';
import { UsersComponent} from './users/users.component';
import { from } from 'rxjs';

const routes: Routes = [
  { path: 'form', component: FromComponent },
  { path: '', component: HomeComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'contactus', component: ContactusComponent },
  { path: 'users', component: UsersComponent }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
