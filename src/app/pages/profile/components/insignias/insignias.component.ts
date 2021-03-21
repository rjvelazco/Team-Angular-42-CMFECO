import { Component, OnInit } from '@angular/core';
import { InsigniasService } from 'src/app/core/services/insignias.service';
import { UsuarioService } from 'src/app/core/services/usuario.service';

@Component({
  selector: 'app-insignias',
  templateUrl: './insignias.component.html',
  styleUrls: ['./insignias.component.css']
})
export class InsigniasComponent implements OnInit {
  insigniasUsuario = [];
  insigniasGanadas = [];

  constructor(private insigniasService: InsigniasService, private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.mostrarInsignias();
  }

  mostrarInsignias(){
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
}
