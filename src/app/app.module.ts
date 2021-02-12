import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import { ReactiveFormsModule} from '@angular/forms';

// Routing
import {AppRoutingModule} from './app-routing.module';

// Components
import {AppComponent} from './app.component';

// Modules
import {SharedModule} from './shared/shared.module';
<<<<<<< HEAD
import { AuthModule } from './auth/auth.module';
=======
import {PrimeModule} from './prime-module';
>>>>>>> bc9e1b996fa4aa98c77635fcb20e16692e2b533e

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AuthModule,
    AppRoutingModule,

    ReactiveFormsModule,
    SharedModule,
    PrimeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
