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

  public responsiveOptions;

  constructor() {
    this.responsiveOptions = [
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
