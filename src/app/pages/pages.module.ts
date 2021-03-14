import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';

// Modules
import { PipeModule } from '../pipe/pipe.module';

// Router
import { RouterModule } from '@angular/router';
import { ComunityComponent } from './comunity/comunity.component';
import { ContentCreatorsComponent } from './content-creators/content-creators.component';
import { WorkshopComponent } from './workshop/workshop.component';


@NgModule({
  declarations: [PagesComponent, ComunityComponent, ContentCreatorsComponent, WorkshopComponent],
  imports: [
    CommonModule,
    RouterModule,
    PipeModule
  ],
  exports: [
    PagesComponent
  ]
})
export class PagesModule { }
