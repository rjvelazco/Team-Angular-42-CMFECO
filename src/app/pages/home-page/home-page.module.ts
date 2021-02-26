import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CarouselComponent} from './components/carousel/carousel.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {ClockComponent} from './components/clock/clock.component';
import {HomePageRoutingModule} from './home-page.routing';
import {WorkshopsComponent} from './components/workshops/workshops.component';
import {CommunitiesComponent} from './components/communities/communities.component';
import {NavComponent} from './components/nav/nav.component';
import {PrimeModule} from '../../prime-module';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    CarouselComponent,
    DashboardComponent,
    ClockComponent,
    WorkshopsComponent,
    CommunitiesComponent,
    NavComponent,
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
