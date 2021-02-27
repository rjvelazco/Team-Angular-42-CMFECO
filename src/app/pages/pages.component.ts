import { Component, OnInit, OnDestroy } from '@angular/core';
import { HeaderService } from '../core/services/header.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [
  ]
})
export class PagesComponent implements OnInit, OnDestroy {

  constructor(
    private headerService: HeaderService
  ) { }

  ngOnDestroy(): void {
    this.headerService.dashBoardLogin.emit(false);
  }

  ngOnInit(): void {
    this.headerService.dashBoardLogin.emit(true);
  }

}
