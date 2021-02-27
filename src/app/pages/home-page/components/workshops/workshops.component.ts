import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-workshops',
  templateUrl: './workshops.component.html',
  styleUrls: ['./workshops.component.css']
})
export class WorkshopsComponent implements OnInit {

  workshops = [
    {
      'id': 1,
      'tematic': 'State of Javascript',
      'hour': '16:00 PM',
      'is_active': true,
      'speaker': 'Juan Pablo de la Torre',
      'canal': 'https://primefaces.org/primeng/showcase/#/avatar',
    },
    {
      'id': 2,
      'tematic': 'State of Javascript',
      'hour': '16:00 PM',
      'is_active': false,
      'speaker': 'Juan Pablo de la Torre',
      'canal': 'https://primefaces.org/primeng/showcase/#/avatar',

    },
    {
      'id': 1,
      'tematic': 'State of Javascript',
      'hour': '16:00 PM',
      'is_active': true,
      'speaker': 'Juan Pablo de la Torre',
      'canal': 'https://primefaces.org/primeng/showcase/#/avatar',
    },
    {
      'id': 2,
      'tematic': 'State of Javascript',
      'hour': '16:00 PM',
      'is_active': false,
      'speaker': 'Juan Pablo de la Torre',
      'canal': 'https://primefaces.org/primeng/showcase/#/avatar',

    },
    {
      'id': 1,
      'tematic': 'State of Javascript',
      'hour': '16:00 PM',
      'is_active': true,
      'speaker': 'Juan Pablo de la Torre',
      'canal': 'https://primefaces.org/primeng/showcase/#/avatar',
    },
    {
      'id': 2,
      'tematic': 'State of Javascript',
      'hour': '16:00 PM',
      'is_active': false,
      'speaker': 'Juan Pablo de la Torre',
      'canal': 'https://primefaces.org/primeng/showcase/#/avatar',

    }, {
      'id': 1,
      'tematic': 'State of Javascript',
      'hour': '16:00 PM',
      'is_active': true,
      'speaker': 'Juan Pablo de la Torre',
      'canal': 'https://primefaces.org/primeng/showcase/#/avatar',
    },
    {
      'id': 2,
      'tematic': 'State of Javascript',
      'hour': '16:00 PM',
      'is_active': false,
      'speaker': 'Juan Pablo de la Torre',
      'canal': 'https://primefaces.org/primeng/showcase/#/avatar',

    },
    {
      'id': 1,
      'tematic': 'State of Javascript',
      'hour': '16:00 PM',
      'is_active': true,
      'speaker': 'Juan Pablo de la Torre',
      'canal': 'https://primefaces.org/primeng/showcase/#/avatar',
    },
    {
      'id': 2,
      'tematic': 'State of Javascript',
      'hour': '16:00 PM',
      'is_active': false,
      'speaker': 'Juan Pablo de la Torre',
      'canal': 'https://primefaces.org/primeng/showcase/#/avatar',

    }, {
      'id': 1,
      'tematic': 'State of Javascript',
      'hour': '16:00 PM',
      'is_active': true,
      'speaker': 'Juan Pablo de la Torre',
      'canal': 'https://primefaces.org/primeng/showcase/#/avatar',
    },
    {
      'id': 2,
      'tematic': 'State of Javascript',
      'hour': '16:00 PM',
      'is_active': false,
      'speaker': 'Juan Pablo de la Torre',
      'canal': 'https://primefaces.org/primeng/showcase/#/avatar',

    },


  ];
  sortOptions;
  sortKey: number;

  constructor() {
  }

  ngOnInit(): void {
    this.sortOptions = [
      {label: 'Frontend', value: 'front'},
      {label: 'Backend', value: 'back'},
      {label: 'DevOps', value: 'dev'},
      {label: 'Video Game Developers', value: 'games'},
      {label: 'UI/UX,', value: 'designers'},
      {label: 'Database Developer', value: 'databases'},
      {label: 'Cloud Computing', value: 'cloud'},
    ];
  }


}
