import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-communities',
  templateUrl: './communities.component.html',
  styleUrls: ['./communities.component.css']
})
export class CommunitiesComponent implements OnInit {
  communities = [
    {
      'id': 1,
      'name': 'Comunidad de programadores',
      'imgurl': 'comunidad_programadores.png',
      'url': 'https://discord.gg/YPQaUgn2'
    },
    {
      'id': 2,
      'name': 'StacklyCode Community',
      'imgurl': 'stackly.png',
      'url': 'https://discord.gg/VeXZ2DzyFM'
    },
    {
      'id': 3,
      'name': 'Comunidad Coderos',
      'imgurl': 'comunidad_coderos.png',
      'url': 'https://discord.gg/3sKnKjrcUW'
    },

  ];

  constructor() {
  }

  ngOnInit(): void {
  }


}
