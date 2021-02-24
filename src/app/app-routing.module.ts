import {NgModule} from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';

// Routing
import {PagesRoutingModule} from './pages/pages.routing';
import { AuthRoutingModule } from './auth/auth.routing';

// Components
import {LoginComponent} from './auth/components/login/login.component';
import { NotPageFoundComponent } from './notPageFound/not-page-found.component';

const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: '**', component: NotPageFoundComponent}

];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
    }),
    PagesRoutingModule,
    AuthRoutingModule
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
