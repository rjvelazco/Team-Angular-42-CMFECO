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
      'url': 'leader-bezael_perez.jpg',
      'icon': 'angular-icon.svg',
      'technology': 'angular'
    },
    {
      'id': 2,
      'full_name': 'Anartz Mugika Ledo',
      'url': 'leader-anartz_mugika_ledo.jpg',
      'icon': 'angular-icon.svg',
      'technology': 'angular'
    },
    {
      'id': 3,
      'full_name': 'Mayra Rodríguez',
      'url': 'leader-mayra_rodríguez.jpg',
      'icon': 'angular-icon.svg',
      'technology': 'angular'
    },
    {
      'id': 4,
      'full_name': 'Oscar Barajas',
      'url': 'leader-oscar_barajas.jpg',
      'icon': 'svelte-icon.svg',
      'technology': 'svelte'
    },
    {
      'id': 5,
      'full_name': 'Ignacio Anaya',
      'url': 'leader-ignacio_anaya.jpg',
      'icon': 'vue-icon.svg',
      'technology': 'vue'
    },
    {
      'id': 6,
      'full_name': 'Manuel Ojeda',
      'url': 'leader-manuel_ojeda.jpg',
      'icon': 'vue-icon.svg',
      'technology': 'vue'
    },
    {
      'id': 7,
      'full_name': 'Vanessa Marely',
      'url': 'leader-vanessa_marely.jpg',
      'icon': 'react-icon.svg',
      'technology': 'react'
    },
    {
      'id': 8,
      'full_name': 'Alejandro Ñañez',
      'url': 'leader-alejandro_ñáñez_ortiz.jpg',
      'icon': 'react-icon.svg',
      'technology': 'react'
    }
  ];

  sponsors = [
    {
      'id': 1,
      'url': 'sponsor-codelytv.jpg'
    },
    {
      'id': 2,
      'url': 'sponsor-codigofacilito.jpg'
    },
    {
      'id': 3,
      'url': 'sponsor-dominicode.jpg'
    },
    {
      'id': 4,
      'url': 'sponsor-egghead.jpg'
    },
    {
      'id': 5,
      'url': 'sponsor-fernando_herrera.jpg'
    },
    {
      'id': 6,
      'url': 'sponsor-huawei.jpg'
    },
    {
      'id': 7,
      'url': 'sponsor-jose_dimas_lujan.jpg'
    },
    {
      'id': 8,
      'url': 'sponsor-latamdev.jpg'
    },
    {
      'id': 9,
      'url': 'sponsor-leonidas_esteban.jpg'
    },
    {
      'id': 10,
      'url': 'sponsor-stacklycode.jpg'
    },
    {
      'id': 11,
      'url': 'sponsor-tekkitv.jpg'
    },
  ]


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
        breakpoint: '768px',
        numVisible: 3,
        numScroll: 3,
      },
      {
        breakpoint: '560px',
        numVisible: 2,
        numScroll: 2,
      }
    ]

    this.responsiveCreators = [
      {
        breakpoint: '1500px',
        numVisible: 3,
        numScroll: 3,
      },
      {
        breakpoint: '1024px',
        numVisible: 2,
        numScroll: 2,
      },
      {
        breakpoint: '768px',
        numVisible: 1,
        numScroll: 1,
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
