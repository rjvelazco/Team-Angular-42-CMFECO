import {Component, OnInit} from '@angular/core';
import {UsuarioService} from '../../../../../../core/services/usuario.service';
import Swal from 'sweetalert2';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-groups-available',
  templateUrl: './groups-available.component.html',
  styleUrls: ['./groups-available.component.css']
})
export class GroupsAvailableComponent implements OnInit {

  public filter = [];
  public groupId = localStorage.getItem('groupId');
  public groupsAvailable = [];
  public loading = true;
  public sortField: string;
  public sortOrder: number;
  public technologies;
  public usuario;

  constructor(private usuarioService: UsuarioService,) {
    this.groups();
    this.usuario = this.usuarioService.usuario;
  }

  onSortChange(event) {
    if (event.value.length > 0) {
      const value = event.value.map(value => value.name);
      this.filter = this.groupsAvailable.filter(
        group => value.includes(group.data.technology)
      );
    } else {
      this.filter = this.groupsAvailable;
    }
  }


  ngOnInit(): void {
    this.technologies = [
      {name: 'Python'},
      {name: 'JavaScript'},
      {name: 'Kotlin'},
      {name: 'Ruby'},
      {name: 'Go'},
      {name: 'PHP'},
      {name: 'Typescript'},
      {name: 'Java'},
      {name: 'Go'},
      {name: 'Ruby'},
      {name: 'Flutter'},
      {name: 'C++'},
      {name: 'C#'},
    ];
  }

  async joinGroup(groupId) {
    if (this.usuario.group.length > 0) {
      this.messageErrorGroup('Ya tienes grupo.');
      return;
    }
    try {
      const result = await Swal.fire({
        icon: 'info',
        title: '¿Estas seguro de entrar al grupo?',
        showDenyButton: true,
        showConfirmButton: true,
        denyButtonText: `Cancelar`,
        confirmButtonText: `Unirme`,
        customClass: {
          denyButton: 'btn-deny'
        },
        reverseButtons: true
      });
      if (result.isConfirmed) {
        this.usuario.group = groupId;
        this.usuarioService.usuario.group = groupId;

        await this.usuarioService.updateParticipante(this.usuario);
        await this.usuarioService.getIntegratesGroup();
        this.messageSuccesGroup('¡Bienvenido!', '¡Bienvenido a bordo!');
      }
    } catch (e) {
      this.messageErrorGroup('Oosp! Algo salió mal.');
      console.log(e);
    }
  }

  private groups() {
    this.usuarioService.grupos()
      .subscribe((response) => {
        response.forEach((responseData: any) => {
          this.groupsAvailable.push({
            id: responseData.payload.doc.id,
            data: responseData.payload.doc.data(),
          });
        });
        this.loading = false;
        this.filter = this.groupsAvailable;
      });
  }

  private messageErrorGroup(message: string) {
    Swal.fire({
      icon: 'error',
      title: '¡Error!',
      text: message,
      confirmButtonText: `Cool`,
    });
  }

  private messageSuccesGroup(title: string,message: string) {
    Swal.fire({
      icon: 'success',
      title: title,
      text: message,
      confirmButtonText: `Cool`,
    });
  }
}
