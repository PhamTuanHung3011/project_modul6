import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home/home.component";
import {RegisterComponent} from "./sign/register/register.component";
import {LoginComponent} from "./sign/login/login.component";
import {UserAccountComponent} from "./sign/user-account/user-account.component";


const appRoutes: Routes = [

  {path: 'register', component: RegisterComponent, data: {title: 'Register'}},
  {path: 'login', component: LoginComponent, data: {title: 'login'}},
  {path: 'user-account', component: UserAccountComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
