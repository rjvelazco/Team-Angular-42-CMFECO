import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import Swal from 'sweetalert2';
import {UsuarioService} from '../../../../../../core/services/usuario.service';
import {Usuario} from '../../../../../../models/usuario.model';

@Component({
  selector: 'app-my-group',
  templateUrl: './my-group.component.html',
  styleUrls: ['./my-group.component.css']
})
export class MyGroupComponent implements OnInit, OnDestroy{

  public integrantes: any[];
  public groupName;
  public usuario: Usuario;

  // subscriber
  public subscriber: Subscription;

  constructor(
    private usuarioService: UsuarioService
  ) {
    this.usuario = this.usuarioService.usuario;
  }

  ngOnInit(): void {
    this.getMygroup();
    this.subscriber = this.usuarioService.usuarioGroupEmitter
      .subscribe(integrantes => {
        this.integrantes = integrantes;
        this.getNameGroup();
      });
  }


  ngOnDestroy(): void{
    this.subscriber.unsubscribe();
  }

  async getMygroup() {
    this.integrantes = await this.usuarioService.getIntegratesGroup();
  }

  async getNameGroup() {
    this.groupName = await this.usuarioService.getNameGroup();
  }

  async abandonarGrupo() {
    try {
      const result = await Swal.fire({
        icon: 'info',
        title: '¿Estas seguro de abandonar el grupo?',
        showDenyButton: true,
        showConfirmButton: true,
        confirmButtonText: `Confirmar`,
        denyButtonText: `Cancelar`,
        footer: 'Buena suerte en tu aventura!'
      })
      if (result.isConfirmed) {
        this.usuario.group = '';
        this.usuarioService.usuario.group = '';
        
        await this.usuarioService.updateParticipante(this.usuario);
        await this.usuarioService.getIntegratesGroup();
      }
    } catch (e) {
      this.messageErrorGroup('Oops! Algo salió mal.');
    }
  }

  private messageErrorGroup(message: string) {
    Swal.fire({
      icon: 'error',
      title: '¡Error!',
      text: message,
      confirmButtonText: `Cool`,
    });
  }


}
