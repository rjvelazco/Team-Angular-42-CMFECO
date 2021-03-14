import {Component, OnInit} from '@angular/core';

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
  public groupsAvailable = [
    {
      'id': 1,
      'image': 'group.jpg',
      'name': 'Andromeda',
      'technology': 'Python',
      'description': 'Gran Grupo de trabajo autonomo con ganas de aprender y mejorar cada dia sin importar' +
        'las dificultades o retos que se presenten, siempre con la mejor actitud y disposición de ayudar siempre.',
    },
    {
      'id': 2,
      'image': 'group.jpg',
      'name': 'Los Programadores',
      'technology': 'Typescript',
      'description': 'Gran Grupo de trabajo autonomo con ganas de aprender y mejorar cada dia sin importar' +
        'las dificultades o retos que se presenten, siempre con la mejor actitud y disposición de ayudar siempre.',
    },
    {
      'id': 3,
      'image': 'group.jpg',
      'name': 'Los Crypto',
      'technology': 'JavaScript',
      'description': 'Gran Grupo de trabajo autonomo con ganas de aprender y mejorar cada dia sin importar' +
        'las dificultades o retos que se presenten, siempre con la mejor actitud y disposición de ayudar siempre.',
    },
    {
      'id': 4,
      'image': 'group.jpg',
      'name': 'Los Crypto',
      'technology': 'Java',
      'description': 'Gran Grupo de trabajo autonomo con ganas de aprender y mejorar cada dia sin importar' +
        'las dificultades o retos que se presenten, siempre con la mejor actitud y disposición de ayudar siempre.',
    },
    {
      'id': 5,
      'image': 'group.jpg',
      'name': 'Los Crypto',
      'technology': 'C#',
      'description': 'Gran Grupo de trabajo autonomo con ganas de aprender y mejorar cada dia sin importar' +
        'las dificultades o retos que se presenten, siempre con la mejor actitud y disposición de ayudar siempre.',
    },
    {
      'id': 6,
      'image': 'group.jpg',
      'name': 'Los Crypto',
      'technology': 'C++',
      'description': 'Gran Grupo de trabajo autonomo con ganas de aprender y mejorar cada dia sin importar' +
        'las dificultades o retos que se presenten, siempre con la mejor actitud y disposición de ayudar siempre.',
    },
    {
      'id': 7,
      'image': 'group.jpg',
      'name': 'Los Crypto',
      'technology': 'PHP',
      'description': 'Gran Grupo de trabajo autonomo con ganas de aprender y mejorar cada dia sin importar' +
        'las dificultades o retos que se presenten, siempre con la mejor actitud y disposición de ayudar siempre.',
    },
    {
      'id': 8,
      'image': 'group.jpg',
      'name': 'Los Crypto',
      'technology': 'Swift',
      'description': 'Gran Grupo de trabajo autonomo con ganas de aprender y mejorar cada dia sin importar' +
        'las dificultades o retos que se presenten, siempre con la mejor actitud y disposición de ayudar siempre.',
    },
    {
      'id': 9,
      'image': 'group.jpg',
      'name': 'Los Crypto',
      'technology': 'Flutter',
      'description': 'Gran Grupo de trabajo autonomo con ganas de aprender y mejorar cada dia sin importar' +
        'las dificultades o retos que se presenten, siempre con la mejor actitud y disposición de ayudar siempre.',
    },
    {
      'id': 10,
      'image': 'group.jpg',
      'name': 'Los Crypto',
      'technology': 'Ruby',
      'description': 'Gran Grupo de trabajo autonomo con ganas de aprender y mejorar cada dia sin importar' +
        'las dificultades o retos que se presenten, siempre con la mejor actitud y disposición de ayudar siempre.',
    },
    {
      'id': 11,
      'image': 'group.jpg',
      'name': 'Los Crypto',
      'technology': 'Kotlin',
      'description': 'Gran Grupo de trabajo autonomo con ganas de aprender y mejorar cada dia sin importar' +
        'las dificultades o retos que se presenten, siempre con la mejor actitud y disposición de ayudar siempre.',
    },
    {
      'id': 12,
      'image': 'group.jpg',
      'name': 'Los Crypto',
      'technology': 'Go',
      'description': 'Gran Grupo de trabajo autonomo con ganas de aprender y mejorar cada dia sin importar' +
        'las dificultades o retos que se presenten, siempre con la mejor actitud y disposición de ayudar siempre.',
    },
  ];

  constructor() {
    this.filter = this.groupsAvailable
  }

  onSortChange(event) {
    if (event.value.length > 0 ){
      let value = event.value.map(value => value.name);
      this.filter = this.groupsAvailable.filter(
        x => value.includes(x.technology)
      );
    } else {
      this.filter = this.groupsAvailable
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
    this.loading = false;
  }
}
