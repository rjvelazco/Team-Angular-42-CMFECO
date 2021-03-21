import { Component, OnInit, OnDestroy } from '@angular/core';

// Services
import {EventService} from '../../../../core/services/event.service';
import {UsuarioService} from '../../../../core/services/usuario.service';
// Models
import {Usuario} from '../../../../models/usuario.model';
import {Event} from '../../../../models/event.model';
// SweetAlert2
import Swal from 'sweetalert2';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit, OnDestroy {

  public events   : Event[];
  public usuario  : Usuario;

  public subscription: Subscription;

  constructor(
    private eventService: EventService,
    private usuarioService: UsuarioService,
  ) {
    this.usuario = this.usuarioService.usuario;
  }

  ngOnInit(): void {
    this.subscription = this.eventService.getEvents().subscribe(resp => {
      this.events = resp;
    });
  }

  ngOnDestroy(): void{
    this.subscription.unsubscribe();
  }

  async signIn(event: Event){
    if (this.usuario.event.length > 0) {
      Swal.fire({
        title: '¡Error!',
        text: 'Ya estas registrado en otro evento.',
        timer: 2000,
        icon: 'error',
        showCancelButton: false,
        showConfirmButton: false,
      });
      return;
    }

    try {
      this.usuario.event = event.id;
      event.amount++;
      await this.usuarioService.updateParticipante(this.usuario);
      await this.eventService.updateEvent(event);
      Swal.fire({
        title: 'Bienvenido al evento',
        timer: 2000,
        text: `Te has registrado en el evento de ${event.title}`,
        icon: 'success',
        showCancelButton: false,
        showConfirmButton: false,
      });
    } catch (e) {
      this.usuario.event = '';
      Swal.fire({
        title: '¡Error!',
        timer: 2000,
        text: 'Algo ha salido mal, intenta  nuevamente.',
        icon: 'error',
        showCancelButton: false,
        showConfirmButton: false,
      });
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
        timer: 2000,
        showCancelButton: false,
        showConfirmButton: false,
      });
    } catch (e) {
      this.usuario.event = '';
      Swal.fire({
        title: '¡Error!',
        text: 'Algo ha salido mal, intenta  nuevamente.',
        showCancelButton: false,
        showConfirmButton: false,
        icon: 'error',
        timer: 2000,
      });
    }
  }
}
