import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';

// Router
import { RouterModule } from '@angular/router';

// Modules
import {PrimeModule} from '../prime-module';
import { PipeModule } from '../pipe/pipe.module';
import {ProfileModule} from '../pages/profile/profile.module';

// Components
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {FigureComponent} from './components/figure/figure.component';
import {SubMenuComponent} from '../pages/profile/components/sub-menu/sub-menu.component';



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
    ProfileModule,
    PipeModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    FigureComponent
  ]
})
export class SharedModule {
}
