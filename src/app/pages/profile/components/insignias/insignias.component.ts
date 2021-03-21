import {Component, OnInit} from '@angular/core';
import {InsigniasService} from 'src/app/core/services/insignias.service';
import {UsuarioService} from 'src/app/core/services/usuario.service';

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
    this.insigniasService.mostrarInsigniasGanadas().subscribe( data => {
      for(let i = 0; i < data.length; i++){
        for(let j=0; j< this.insigniasUsuario.length; j++){
          if(data[i].id == this.insigniasUsuario[j]){
            this.insigniasGanadas.push( data[i] );
          }
        }
      }
    });
  }
}
