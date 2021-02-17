import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

// Router
import { RouterModule } from '@angular/router';

// Components
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FigureComponent } from './components/figure/figure.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    FigureComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
    exports: [
        HeaderComponent,
        FooterComponent,
        FigureComponent
    ]
})
export class SharedModule {
}
