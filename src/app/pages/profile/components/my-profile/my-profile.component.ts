import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/core/services/event.service';

// Services
import { UsuarioService } from '../../../../core/services/usuario.service';

// Models
import { Usuario } from '../../../../models/usuario.model';
import { Event } from '../../../../models/event.model';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {

  public usuario  : Usuario;
  public eventos  : Event[];
  public userEvent: Event;

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
    private usuarioService: UsuarioService,
    private eventService: EventService
  ) {
    this.usuario = this.usuarioService.usuario;
  }

  ngOnInit(): void {
    this.eventService.getEvents().subscribe(events => {
      this.eventos = events;
    });
    this.usuarioService.usuarioEmiter.subscribe(usuario => {
      this.usuario = usuario;
      if (this.usuario.event.length > 0) {
        this.eventos.forEach(evento => {
          if (evento.id === this.usuario.event) {
            this.userEvent = evento;
            console.log(this.userEvent);
          }
        });
      }
    });
  }

}
