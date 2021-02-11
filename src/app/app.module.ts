import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';

// Routing
import {AppRoutingModule} from './app-routing.module';

// Components
import {AppComponent} from './app.component';

// Modules
import {SharedModule} from './shared/shared.module';
import {PrimeModule} from './prime-module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
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
