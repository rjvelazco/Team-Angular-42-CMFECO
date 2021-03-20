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

  public technologies;
  public sortOrder: number;
  public sortField: string;
  public loading = true;
  public filter = [];
  public groupsAvailable = [];
  public groupId = localStorage.getItem('groupId');
  public usuario;

  constructor(private usuarioService: UsuarioService,) {
    this.groups();
    this.getGroupName();
    this.usuario = this.usuarioService.usuario;
  }

  onSortChange(event) {
    if (event.value.length > 0) {
      let value = event.value.map(value => value.name);
      this.filter = this.groupsAvailable.filter(
        x => value.includes(x.data.technology)
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

  getGroupName(){

  }

  async joinGroup(groupId) {
    if (this.usuario.group.length > 0) {
      this.messageErrorGroup('Ya tienes grupo.');
      return;
    }
    // Fe4cdcsYkDMkAUu8Hddv
    try { 
      const result = await Swal.fire({
        icon: 'info',
        title: '¿Estas seguro de entrar al grupo?',
        showDenyButton: true,
        showConfirmButton: true,
        confirmButtonText: `Confirmar`,
        denyButtonText: `Cancelar`,
      });
      if (result.isConfirmed) {
        this.usuarioService.usuario.group = groupId;
        this.usuario.group = groupId;

        this.messageSuccesGroup('¡Bienvenido!', '¡Bienvenido a bordo!');
        await this.usuarioService.updateParticipante(this.usuario);
      }
    } catch (e) {
      this.messageErrorGroup('Oosp! Algo salió mal.');
      console.log(e);
    }
  }

  groups() {
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
