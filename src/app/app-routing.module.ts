import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home/home.component";
import {RegisterComponent} from "./sign/register/register.component";


const appRoutes: Routes = [

  {path: 'register', component: RegisterComponent, data: {title: 'Register'}},

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
