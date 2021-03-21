import { Component, OnInit, OnDestroy } from '@angular/core';
import {InsigniasService} from 'src/app/core/services/insignias.service';
import {UsuarioService} from 'src/app/core/services/usuario.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-insignias',
  templateUrl: './insignias.component.html',
  styleUrls: ['./insignias.component.css']
})
export class InsigniasComponent implements OnInit, OnDestroy {

  public insigniasUsuario = [];
  public insigniasGanadas = [];

  public subcription: Subscription;

  constructor(private insigniasService: InsigniasService, private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.mostrarInsignias();
    this.subcription = this.usuarioService.usuarioEmiter.subscribe(user => this.mostrarInsignias());
  }

  ngOnDestroy() {
    this.subcription.unsubscribe();
  }

  mostrarInsignias() {
    this.resetInsignias();
    this.insigniasUsuario = this.usuarioService.usuario.insignias;
    this.insigniasService.mostrarInsigniasGanadas().subscribe(data => {
      data.forEach(insignia => {
        this.insigniasUsuario.forEach(insigniaGanada => {
          if (insignia.id === insigniaGanada) {
            this.insigniasGanadas.push(insignia);
          }
        })
      })
    })
  }

  resetInsignias() {
    this.insigniasUsuario = [];
    this.insigniasGanadas = [];
  }
}
