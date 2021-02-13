import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';


// Modules
import {ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../shared/shared.module';
import { PrimeModule } from '../prime-module';

// Routing
import { RouterModule } from '@angular/router';
import { AuthRoutingModule } from './auth.routing';

// Components
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule,
    PrimeModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  exports: [
    LoginComponent,
    RegisterComponent
  ]
})
export class AuthModule {
}
