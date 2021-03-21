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
      'imgurl': 'https://res.cloudinary.com/dsktpevg6/image/upload/v1616287951/dqbqlysgcsxovqpouz0m.png',
      'url': 'https://discord.gg/YPQaUgn2'
    },
    {
      'id': 2,
      'name': 'StacklyCode Community',
      'imgurl': 'https://res.cloudinary.com/dsktpevg6/image/upload/v1616287951/lzrmmbjlpwmexxfwlxan.png',
      'url': 'https://discord.gg/VeXZ2DzyFM'
    },
    {
      'id': 3,
      'name': 'Comunidad Coderos',
      'imgurl': 'https://res.cloudinary.com/dsktpevg6/image/upload/v1616287950/kpumsexxzmtbmxgxnovf.png',
      'url': 'https://discord.gg/3sKnKjrcUW'
    },

  ];

  constructor() {
  }

  ngOnInit(): void {
  }


}
