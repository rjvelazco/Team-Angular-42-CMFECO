import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-insignias',
  templateUrl: './insignias.component.html',
  styleUrls: ['./insignias.component.css']
})
export class InsigniasComponent implements OnInit {

  dumpData = [
    {
      "insignia": "King of Code",
      "img": 'corona.png',
      "detalle": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aperiam beatae commodi culpa, cum, dignissimos dolorem.",
      "pasos": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aperiam beatae commodi culpa, cum, dignissimos dolorem eligendi facilis ipsam iure maxime, natus necessitatibus nesciunt nihil nobis quae quam quas quisquam."
    },
    {
      "insignia": "Hacker",
      "img": 'hacker.png',
      "detalle": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aperiam beatae commodi culpa, cum, dignissimos dolorem.",
      "pasos": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aperiam beatae commodi culpa, cum, dignissimos dolorem eligendi facilis ipsam iure maxime, natus necessitatibus nesciunt nihil nobis quae quam quas quisquam."
    },
    {
      "insignia": "Master Code",
      "img": 'masterCode.png',
      "detalle": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aperiam beatae commodi culpa, cum, dignissimos dolorem.",
      "pasos": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aperiam beatae commodi culpa, cum, dignissimos dolorem eligendi facilis ipsam iure maxime, natus necessitatibus nesciunt nihil nobis quae quam quas quisquam."
    },
    {
      "insignia": "Sociable",
      "img": 'sociable.png',
      "detalle": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aperiam beatae commodi culpa, cum, dignissimos dolorem.",
      "pasos": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aperiam beatae commodi culpa, cum, dignissimos dolorem eligendi facilis ipsam iure maxime, natus necessitatibus nesciunt nihil nobis quae quam quas quisquam."
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
