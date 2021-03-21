import {Component, OnDestroy, OnInit} from '@angular/core';
// Services
import { HeaderService } from '../core/services/header.service';
import { LoadingService } from '../core/services/loading.service';
import { UsuarioService } from 'src/app/core/services/usuario.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [
  ]
})
export class PagesComponent implements OnInit, OnDestroy {

  constructor(
    private headerService: HeaderService,
    private loadingService: LoadingService,
    private usuarioService: UsuarioService
  ) { 
    this.usuarioService.getParticipante().subscribe();
    this.loadingService.loading.emit(false);
  }

  ngOnDestroy(): void {
    this.headerService.dashBoardLogin.emit(false);
  }

  ngOnInit(): void {
    this.headerService.dashBoardLogin.emit(true);
  }

}
