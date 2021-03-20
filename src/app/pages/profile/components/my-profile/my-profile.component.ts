import { Component, OnInit } from '@angular/core';
import { InsigniasService } from 'src/app/core/services/insignias.service';

// Services
import { UsuarioService } from '../../../../core/services/usuario.service';

// Models
import { Usuario } from '../../../../models/usuario.model';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {

  public usuario: Usuario;
  myEvents = [
    {
      'id': 1,
      'image': 'banner_event.png',
      'event': 'Community Fest and Code',
      'description': 'Evento nuevo y innovador donde podran mejorar sus habilidades y conocer a nuevos programadores de todas las tecnologias',
      'information': '',
    },
    {
      'id': 2,
      'image': 'banner_event.png',
      'event': 'Community Fest and Code',
      'description': 'Evento nuevo y innovador donde podran mejorar sus habilidades y conocer a nuevos programadores de todas las tecnologias',
      'information': '',
    },
    {
      'id': 3,
      'image': 'banner_event.png',
      'event': 'Community Fest and Code',
      'description': 'Evento nuevo y innovador donde podran mejorar sus habilidades y conocer a nuevos programadores de todas las tecnologias',
      'information': '',
    },
    {
      'id': 4,
      'image': 'banner_event.png',
      'event': 'Community Fest and Code',
      'description': 'Evento nuevo y innovador donde podran mejorar sus habilidades y conocer a nuevos programadores de todas las tecnologias',
      'information': '',
    },
    {
      'id': 5,
      'image': 'banner_event.png',
      'event': 'Community Fest and Code',
      'description': 'Evento nuevo y innovador donde podran mejorar sus habilidades y conocer a nuevos programadores de todas las tecnologias',
      'information': '',
    },
    {
      'id': 6,
      'image': 'banner_event.png',
      'event': 'Community Fest and Code',
      'description': 'Evento nuevo y innovador donde podran mejorar sus habilidades y conocer a nuevos programadores de todas las tecnologias',
      'information': '',
    }
  ];
  insignias = [];
  insigniasUsuario = [];
  insigniasGanadas = [];
  constructor(
    private usuarioService: UsuarioService,
    private insigniasService: InsigniasService
  ) {
    
  }

  ngOnInit(): void {
    this.usuario = this.usuarioService.usuario;
    this.mostrarInsignias();
    console.log('insignias', this.insignias)  
    console.log('insignias Ganadas', this.insigniasGanadas)
  }

  mostrarInsignias(){
    this.insigniasUsuario = this.usuarioService.usuario.insignias;
    this.insigniasService.mostrarInsigniasGanadas().subscribe( data => {
      for(let i = 0; i < data.length; i++){
        this.insignias.push( data[i] );
        for(let j=0; j< this.insigniasUsuario.length; j++){
          if(data[i].id == this.insigniasUsuario[j]){
            this.insigniasGanadas.push( data[i] );
          }
        }
      }
    });
  }
}
