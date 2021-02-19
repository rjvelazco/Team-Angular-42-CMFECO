import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './components/carousel/carousel.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ClockComponent } from './components/clock/clock.component';
import { SideElementComponent } from './components/side-element/side-element.component';



@NgModule({
  declarations: [
    CarouselComponent,
    DashboardComponent,
    ClockComponent,
    SideElementComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class HomePageModule { }
