import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

// Guards
import {AuthGuard} from '../guards/auth.guard';

// Components
import {PagesComponent} from './pages.component';
import { ComunityComponent } from './comunity/comunity.component';
import { WorkshopComponent } from './workshop/workshop.component';
import { ContentCreatorsComponent } from './content-creators/content-creators.component';


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
  }, {
    path: 'code-fest',
    component: PagesComponent,
    children: [
      {
        path: 'comunity',
        component: ComunityComponent
      },
      {
        path: 'workshop',
        component: WorkshopComponent,
      },
      {
          path: 'content-creators',
          component: ContentCreatorsComponent,
      },
    ],
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {
}
