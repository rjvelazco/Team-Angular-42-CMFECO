import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

// Guards
import {AuthGuard} from '../guards/auth.guard';

// Components
import {PagesComponent} from './pages.component';


const routes: Routes = [
  {
    path: 'dashboard',
    component: PagesComponent,
    canActivate: [AuthGuard],
    loadChildren: () => import('./home-page/home-page.routing').then(m => m.HomePageRoutingModule)
  },
  {
    path: 'perfil',
    component: PagesComponent,
    canActivate: [AuthGuard],
    loadChildren: () => import('./profile/profile.routing').then(m => m.ProfileRoutingModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {
}
