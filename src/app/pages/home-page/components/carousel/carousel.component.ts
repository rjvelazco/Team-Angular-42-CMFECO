import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  creators = [
    {
      'id': 1,
      'full_name': 'Bezael Perez',
      'image': 'leader-bezael_perez.jpg',
      'icon': 'angular-icon.svg',
      'technology': 'angular'
    },
    {
      'id': 2,
      'full_name': 'Anartz Mugika Ledo',
      'image': 'leader-anartz_mugika_ledo.jpg',
      'icon': 'angular-icon.svg',
      'technology': 'angular'
    },
    {
      'id': 3,
      'full_name': 'Mayra Rodríguez',
      'image': 'leader-mayra_rodríguez.jpg',
      'icon': 'angular-icon.svg',
      'technology': 'angular'
    },
    {
      'id': 4,
      'full_name': 'Oscar Barajas',
      'image': 'leader-oscar_barajas.jpg',
      'icon': 'svelte-icon.svg',
      'technology': 'svelte'
    },
    {
      'id': 5,
      'full_name': 'Ignacio Anaya',
      'image': 'leader-ignacio_anaya.jpg',
      'icon': 'vue-icon.svg',
      'technology': 'vue'
    },
    {
      'id': 6,
      'full_name': 'Manuel Ojeda',
      'image': 'leader-manuel_ojeda.jpg',
      'icon': 'vue-icon.svg',
      'technology': 'vue'
    },
    {
      'id': 7,
      'full_name': 'Vanessa Marely',
      'image': 'leader-vanessa_marely.jpg',
      'icon': 'react-icon.svg',
      'technology': 'react'
    },
    {
      'id': 8,
      'full_name': 'Alejandro Ñañez',
      'image': 'leader-alejandro_ñáñez_ortiz.jpg',
      'icon': 'react-icon.svg',
      'technology': 'react'
    }
  ];

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

  public responsiveCreators;
  public responsiveSponsors;

  constructor() {
    this.responsiveSponsors = [
      {
        breakpoint: '1500px',
        numVisible: 6,
        numScroll: 6,
      },
      {
        breakpoint: '1024px',
        numVisible: 5,
        numScroll: 5
      },
      {
        breakpoint: '560px',
        numVisible: 3,
        numScroll: 3,
      },
      {
        breakpoint: '360px',
        numVisible: 2,
        numScroll: 2,
      },
      {
        breakpoint: '280px',
        numVisible: 1,
        numScroll: 1,
      }
    ];

    this.responsiveCreators = [
      {
        breakpoint: '1640px',
        numVisible: 3,
        numScroll: 3,
      },
      {
        breakpoint: '950px',
        numVisible: 2,
        numScroll: 2,
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1,
      }
    ];
  }

  ngOnInit(): void {
  }

}
