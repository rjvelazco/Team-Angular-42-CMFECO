import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';

// Modules
import { PipeModule } from '../pipe/pipe.module';

// Router
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [PagesComponent],
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
