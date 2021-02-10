import { NgModule } from '@angular/core';

import { AuthRoutingModule } from './auth/auth.routing';

import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';

const routes: Routes = [

  {path: '**', component: LoginComponent}

]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    AuthRoutingModule
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
