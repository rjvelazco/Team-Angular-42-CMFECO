import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';

// Router
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [PagesComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    PagesComponent
  ]
})
export class PagesModule { }
