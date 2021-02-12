import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

// Components
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';

// Routing
import {AuthRoutingModule} from './auth.routing';
<<<<<<< HEAD
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
=======
import {SharedModule} from '../shared/shared.module';
>>>>>>> bc9e1b996fa4aa98c77635fcb20e16692e2b533e


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
<<<<<<< HEAD
    FormsModule,
    ReactiveFormsModule,

=======
    SharedModule
>>>>>>> bc9e1b996fa4aa98c77635fcb20e16692e2b533e
  ],
  exports: [
    LoginComponent,
    RegisterComponent
  ]
})
export class AuthModule {
}
