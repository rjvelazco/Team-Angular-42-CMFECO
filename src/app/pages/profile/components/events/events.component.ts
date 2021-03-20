import {Component, OnInit} from '@angular/core';

// Services
import { EventService } from '../../../../core/services/event.service';
import { UsuarioService } from '../../../../core/services/usuario.service';

// Models
import { Usuario } from '../../../../models/usuario.model';
import { Event } from '../../../../models/event.model';

// SweetAlert2
import Swal from 'sweetalert2';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  public events   : Event[];
  public usuario  : Usuario;

  constructor(
    private eventService: EventService,
    private usuarioService: UsuarioService,
  ) { 
    this.usuario = this.usuarioService.usuario;
  }

  ngOnInit(): void {
    this.eventService.getEvents().subscribe(resp => {
      this.events = resp;
    });

  }

  async signIn(event: Event){
  
    if (this.usuario.event.length > 0) {
      Swal.fire({
        title: '¡Error!',
        text: 'Ya estas registrado en otro evento.',
        icon: 'error',
        confirmButtonText: 'Cool'
      });
      return;
    }

    try {
      this.usuario.event = event.id;
      event.amount++;
      await this.usuarioService.updateParticipante(this.usuario);
      await this.eventService.updateEvent(event);
      Swal.fire({
        title: 'Bienvenido al Event',
        text: `Te has registrado en el evento de ${event.title}`,
        icon: 'success',
        confirmButtonText: 'Cool'
      });
    } catch (e) {
      this.usuario.event = '';
      Swal.fire({
        title: '¡Error!',
        text: 'Algo ha salido mal, intenta  nuevamente.',
        icon: 'error',
        confirmButtonText: 'Cool'
      });
      console.log(e);
    }

  }

  async signOut(event: Event) {
    try {
      this.usuario.event = '';
      event.amount--;
      await this.usuarioService.updateParticipante(this.usuario);
      await this.eventService.updateEvent(event);
      Swal.fire({
        title: '¡Hasta luego!',
        text: `Has abandonado el evento: ${event.title}`,
        icon: 'success',
        confirmButtonText: 'Cool'
      });
    } catch (e) {
      this.usuario.event = '';
      Swal.fire({
        title: '¡Error!',
        text: 'Algo ha salido mal, intenta  nuevamente.',
        icon: 'error',
        confirmButtonText: 'Cool'
      });
      console.log(e);
    }
  }
}
