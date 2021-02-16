import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';


// Modules
import {ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../shared/shared.module';
import {PrimeModule} from '../prime-module';

// Routing
import { RouterModule } from '@angular/router';
import { AuthRoutingModule } from './auth.routing';

// Components
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {ResetPasswordComponent} from './components/reset-password/reset-password.component';
import { TerminosComponent } from './components/terminos/terminos.component';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ResetPasswordComponent,
    TerminosComponent
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
