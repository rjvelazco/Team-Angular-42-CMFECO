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

  public integrantes;
  public groupId = localStorage.getItem('groupId');
  public groupName;
  public usuario: Usuario;

  constructor(
    private usuarioService: UsuarioService
  ) {
    this.getMygroup();
    this.usuario = this.usuarioService.usuario;
    console.log(this.integrantes);
  }

  ngOnInit(): void {
    this.usuarioService.getNameGroup(this.groupId)
      .subscribe(response => {
        this.groupName = response;
      });
  }

  getMygroup() {
    let groupId = localStorage.getItem('groupId');
    this.usuarioService.getIntegratesGroup(groupId)
      .subscribe((response) => {
        this.integrantes = [];
        response.forEach((responseData: any) => {
          this.integrantes.push({
            id: responseData.payload.doc.id,
            data: responseData.payload.doc.data(),
          });
        });
      });
  }

  abandonarGrupo() {
    Swal.fire({
        icon: 'info',
        title: '¿Estas seguro de abandonar el grupo?',
        showDenyButton: true,
        showConfirmButton: true,
        confirmButtonText: `Confirmar`,
        denyButtonText: `Cancelar`,
        footer: 'Buena suerte en tu aventura!'
      }
    ).then(async (result) => {
      if (result.isConfirmed) {
        this.usuario.group = ' '
        await this.usuarioService.updateParticipante(this.usuario);
      }
    });
  }

}
