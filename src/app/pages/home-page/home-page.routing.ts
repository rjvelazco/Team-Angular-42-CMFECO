import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {NavComponent} from './components/nav/nav.component';

// Guard
import {AuthGuard} from '../../guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: NavComponent,
    children: [
      {path: '', component: DashboardComponent},
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class HomePageRoutingModule {

}
