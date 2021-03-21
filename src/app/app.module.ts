import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// Angular Fire
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFireModule} from '@angular/fire';
// Environment
import {environment} from 'src/environments/environment';
// Routing
import {AppRoutingModule} from './app-routing.module';
// Components
import {AppComponent} from './app.component';
// Modules
import {AuthModule} from './auth/auth.module';
import {PagesModule} from './pages/pages.module';
import {HomePageModule} from './pages/home-page/home-page.module';
import {PrimeModule} from './prime-module';
import {SharedModule} from './shared/shared.module';
import {NotPageFoundComponent} from './notPageFound/not-page-found.component';
import {LoadingComponent} from './loading/loading/loading.component';

@NgModule({
  declarations: [
    AppComponent,
    NotPageFoundComponent,
    LoadingComponent,
  ],
  imports: [
    AngularFireAuthModule,
    AngularFireModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AppRoutingModule,
    AuthModule,
    BrowserAnimationsModule,
    BrowserModule,
    HomePageModule,
    PagesModule,
    PrimeModule,
    ReactiveFormsModule,
    RouterModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
