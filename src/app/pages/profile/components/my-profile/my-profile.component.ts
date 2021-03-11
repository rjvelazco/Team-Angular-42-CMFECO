import { Component, OnInit } from '@angular/core';

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

  constructor(
    private usuarioService: UsuarioService
  ) {
    
  }

  ngOnInit(): void {
    this.usuario = this.usuarioService.usuario;
  }

}
