import {NgModule} from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';

import {PagesRoutingModule} from './pages/pages.routing';
import {LoginComponent} from './auth/components/login/login.component';

const routes: Routes = [
  {path: '', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)},
  {path: '', loadChildren: () => import('./home-page/home-page.module').then(m => m.HomePageModule)},
  {path: '**', component: LoginComponent}

];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
    }),
    PagesRoutingModule
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
