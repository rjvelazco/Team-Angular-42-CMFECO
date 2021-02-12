import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

// Components
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';

// Routing
import {AuthRoutingModule} from './auth.routing';
import {SharedModule} from '../shared/shared.module';
import {PrimeModule} from '../prime-module';


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
  ],
  exports: [
    LoginComponent,
    RegisterComponent
  ]
})
export class AuthModule {
}
