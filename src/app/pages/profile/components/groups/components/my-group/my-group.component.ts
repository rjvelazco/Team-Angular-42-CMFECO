import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-my-group',
  templateUrl: './my-group.component.html',
  styleUrls: ['./my-group.component.css']
})
export class MyGroupComponent implements OnInit {

  participantes = [
    {
      'id': 1,
      'nombre': 'juan',
      'nivel': 'Novato',
      'img':'https://i.imgur.com/VngSkup.jpg',
      'rango':'Integrante'
    },
    {
      'id': 2,
      'nombre': 'Santiago',
      'nivel': 'Avanzado',
      'img':'https://i.imgur.com/YwRfshl.jpg',
      'rango':'Lider'
    },
    {
      'id': 3,
      'nombre': 'Sebastian',
      'nivel': 'Apenas aprendiendo',
      'img':'https://i.imgur.com/hiJQ1rQ.jpg',
      'rango':'Integrante'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  AbandonarGrupo(){
    Swal.fire({
      icon: 'success',
      title: 'Has abandonado el grupo',
      showConfirmButton: true,
      footer: 'Buena suerte en tu aventura!'
    }
    )
  }

}
