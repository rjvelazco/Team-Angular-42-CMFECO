import {Component, OnInit} from '@angular/core';
import Swal from 'sweetalert2';
import {UsuarioService} from '../../../../../../core/services/usuario.service';

@Component({
  selector: 'app-my-group',
  templateUrl: './my-group.component.html',
  styleUrls: ['./my-group.component.css']
})
export class MyGroupComponent implements OnInit {

  public integrantes;
  public groupId = localStorage.getItem('groupId');
  public groupName;

  constructor(private usuarioService: UsuarioService) {
    this.getMygroup();
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
        console.log(this.integrantes);
      });
  }

  AbandonarGrupo() {
    Swal.fire({
        icon: 'success',
        title: 'Has abandonado el grupo',
        showConfirmButton: true,
        footer: 'Buena suerte en tu aventura!'
      }
    );
  }

}
