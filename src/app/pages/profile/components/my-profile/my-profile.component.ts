import { Component, OnInit, OnDestroy } from '@angular/core';
import { EventService } from 'src/app/core/services/event.service';
import { InsigniasService } from 'src/app/core/services/insignias.service';

// Services
import { UsuarioService } from '../../../../core/services/usuario.service';

// Models
import { Usuario } from '../../../../models/usuario.model';
import { Event } from '../../../../models/event.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit, OnDestroy {

  public usuario  : Usuario;
  public eventos  : Event[];
  public userEvent: any;

  public subscriptionUser : Subscription;
  public subscriptionEvent: Subscription;

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
    private eventService: EventService,
    private insigniasService: InsigniasService
  ) {
    this.usuario = this.usuarioService.usuario;
  }

  ngOnInit(): void {
    this.subscriptionEvent = this.eventService.getEvents().subscribe(events => {
      this.eventos = events;
      this.actualizarUserEvent();
    });
    this.subscriptionUser = this.usuarioService.usuarioEmiter.subscribe(usuario => {
      this.usuario = usuario;
      if (this.usuario.event.length > 0) {
        this.actualizarUserEvent();
      }
    });
  }

  ngOnDestroy(): void{
    this.subscriptionEvent.unsubscribe();
    this.subscriptionUser.unsubscribe();
  }

  actualizarUserEvent() {
    if (this.usuario.event.length > 0) {
      this.eventos.forEach(evento => {
        if (evento.id === this.usuario.event) {
          this.userEvent = evento;
        }
      });
    } else { 
      this.userEvent = '';
    }
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
