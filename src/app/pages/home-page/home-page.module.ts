import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
// Router
import {HomePageRoutingModule} from './home-page.routing';
// Modules
import {PrimeModule} from '../../prime-module';
import {CarouselComponent} from './components/carousel/carousel.component';
import {ClockComponent} from './components/clock/clock.component';
import {CommunitiesComponent} from './components/communities/communities.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {NavComponent} from './components/nav/nav.component';
import {FormsModule} from '@angular/forms';
import {WorkshopsComponent} from './components/workshops/workshops.component';


@NgModule({
  declarations: [
    CarouselComponent,
    ClockComponent,
    CommunitiesComponent,
    DashboardComponent,
    NavComponent,
    WorkshopsComponent,
  ],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    PrimeModule,
    FormsModule,
   ]
})
export class HomePageModule {
}
