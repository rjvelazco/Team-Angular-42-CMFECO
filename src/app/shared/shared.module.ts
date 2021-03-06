import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';

// Router
import {RouterModule} from '@angular/router';

// Components
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {FigureComponent} from './components/figure/figure.component';
import {PrimeModule} from '../prime-module';
import {SubMenuComponent} from '../pages/profile/components/sub-menu/sub-menu.component';
import {ProfileModule} from '../pages/profile/profile.module';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    FigureComponent,
    SubMenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    PrimeModule,
    BrowserModule,
    ProfileModule

  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    FigureComponent
  ]
})
export class SharedModule {
}
