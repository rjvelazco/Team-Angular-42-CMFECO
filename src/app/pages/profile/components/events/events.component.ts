import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  constructor() { }

  sponsors = [
    {
      'id': 1,
      'image': 'sponsor-codelytv.jpg',
      'sponsor_name': 'CODELYTV',
      'link': 'https://codely.tv/pro/comfeco'
    },
    {
      'id': 2,
      'image': 'sponsor-codigofacilito.jpg',
      'sponsor_name': 'CÓDIGOFACILITO',
      'link': 'https://codigofacilito.com'
    },
    {
      'id': 3,
      'image': 'sponsor-dominicode.jpg',
      'sponsor_name': 'DOMINICODE',
      'link': 'https://www.youtube.com/channel/UC3QuZuJr2_EOUak8bWUd74A'
    },
    {
      'id': 4,
      'image': 'sponsor-egghead.jpg',
      'sponsor_name': 'EDDHEAD',
      'link': 'https://egghead.io'
    },
    {
      'id': 5,
      'image': 'sponsor-fernando_herrera.jpg',
      'sponsor_name': 'FERNANDO HERRERA',
      'link': 'https://www.udemy.com/user/550c38655ec11/'
    },
    {
      'id': 6,
      'image': 'sponsor-huawei.jpg',
      'sponsor_name': 'HUAWEI',
      'link': 'https://developer.huawei.com/consumer/en/'
    },
    {
      'id': 7,
      'image': 'sponsor-jose_dimas_lujan.jpg',
      'sponsor_name': 'JOSE DIMAS LUJAN',
      'link': 'https://www.youtube.com/channel/UC17hjKubJGdyPbWI5jvyiVg'
    },
    {
      'id': 8,
      'image': 'sponsor-latamdev.jpg',
      'sponsor_name': 'LATAMDEV',
      'link': 'http://latamdev.co'
    },
    {
      'id': 9,
      'image': 'sponsor-leonidas_esteban.jpg',
      'sponsor_name': 'LEONIDAS ESTEBAN',
      'link': 'https://leonidasesteban.com'
    },
    {
      'id': 10,
      'image': 'sponsor-stacklycode.jpg',
      'sponsor_name': 'STACKLYCODE',
      'link': 'https://stacklycode.com'
    },
    {
      'id': 11,
      'image': 'sponsor-tekkitv.jpg',
      'sponsor_name': 'TEKKITV',
      'link': 'https://tekki.tv'
    },
  ];

  ngOnInit(): void {
  }

}
