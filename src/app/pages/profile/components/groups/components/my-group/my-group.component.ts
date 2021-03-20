import {Component, OnInit} from '@angular/core';
import Swal from 'sweetalert2';
import {UsuarioService} from '../../../../../../core/services/usuario.service';
import {Usuario} from '../../../../../../models/usuario.model';

@Component({
  selector: 'app-my-group',
  templateUrl: './my-group.component.html',
  styleUrls: ['./my-group.component.css']
})
export class MyGroupComponent implements OnInit {

  public integrantes: any[];
  public groupName;
  public usuario: Usuario;

  constructor(
    private usuarioService: UsuarioService
  ) {
    this.usuario = this.usuarioService.usuario;
  }

  ngOnInit(): void {
    this.usuarioService.getNameGroup()
      .subscribe((grupo: any) => {
        if (grupo.length > 0) {
          this.groupName = grupo[0].name || '';
        } else {
          this.groupName = '';
        }
      });
    this.getMygroup();
  }

  getMygroup() {
    this.usuarioService.getIntegratesGroup()
      .subscribe((usuarios) => {
        if (this.usuario.group.length > 0) {
          this.integrantes = usuarios;
        } else {
          this.integrantes = [];
        }
      });
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
        // console.log(this.usuarioService.usuario.group);
        await this.usuarioService.updateParticipante(this.usuario);
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
