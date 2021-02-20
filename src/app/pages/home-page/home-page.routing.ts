import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {NavComponent} from './components/nav/nav.component';
import { ClockComponent } from './components/clock/clock.component';

// Guard
import { AuthGuard } from '../../guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: NavComponent,
    children: [
      {path: '', component: DashboardComponent},
      // TEST  home-page/clock
      {path: 'clock', component: ClockComponent}
    ],
    canActivate: [AuthGuard],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class HomePageRoutingModule {

}
