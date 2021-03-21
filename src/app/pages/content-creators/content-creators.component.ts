import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-content-creators',
  templateUrl: './content-creators.component.html',
  styleUrls: ['../home-page/components/carousel/carousel.component.css']
})
export class ContentCreatorsComponent implements OnInit {


  public responsiveCreators;
  public responsiveSponsors;

  creators = [
    {
      'id': 1,
      'full_name': 'Bezael Perez',
      'image': 'https://res.cloudinary.com/dsktpevg6/image/upload/v1616287325/eoknqhjyl2vhneycn09z.webp',
      'icon': 'angular-icon.svg',
      'technology': 'angular'
    },
    {
      'id': 2,
      'full_name': 'Anartz Mugika Ledo',
      'image': 'https://res.cloudinary.com/dsktpevg6/image/upload/v1616287325/lzyjlp3anzddb94av1yr.webp',
      'icon': 'angular-icon.svg',
      'technology': 'angular'
    },
    {
      'id': 3,
      'full_name': 'Mayra Rodríguez',
      'image': 'https://res.cloudinary.com/dsktpevg6/image/upload/v1616287329/pz1jasvjf6ba0lniimrv.webp',
      'icon': 'angular-icon.svg',
      'technology': 'angular'
    },
    {
      'id': 4,
      'full_name': 'Oscar Barajas',
      'image': 'https://res.cloudinary.com/dsktpevg6/image/upload/v1616287324/vva3buzlqiaxr8nj9kiy.webp',
      'icon': 'svelte-icon.svg',
      'technology': 'svelte'
    },
    {
      'id': 5,
      'full_name': 'Ignacio Anaya',
      'image': 'https://res.cloudinary.com/dsktpevg6/image/upload/v1616287325/zfx4anqsmvqyrt2upuui.webp',
      'icon': 'vue-icon.svg',
      'technology': 'vue'
    },
    {
      'id': 6,
      'full_name': 'Manuel Ojeda',
      'image': 'https://res.cloudinary.com/dsktpevg6/image/upload/v1616287328/jusjpjvgiekyn2geloh8.webp',
      'icon': 'vue-icon.svg',
      'technology': 'vue'
    },
    {
      'id': 7,
      'full_name': 'Vanessa Marely',
      'image': 'https://res.cloudinary.com/dsktpevg6/image/upload/v1616287326/okfyr1dpc6p9stguhhah.webp',
      'icon': 'react-icon.svg',
      'technology': 'react'
    },
    {
      'id': 8,
      'full_name': 'Alejandro Ñañez',
      'image': 'https://res.cloudinary.com/dsktpevg6/image/upload/v1616287325/mfnssu6s39tdqcxwgv3o.webp',
      'icon': 'react-icon.svg',
      'technology': 'react'
    }
  ];

  sponsors = [
    {
      'id': 1,
      'image': 'https://res.cloudinary.com/dsktpevg6/image/upload/v1616287606/p5urcmnkzqy76ja406kt.webp',
      'sponsor_name': 'CODELYTV',
      'link': 'https://codely.tv/pro/comfeco'
    },
    {
      'id': 2,
      'image': 'https://res.cloudinary.com/dsktpevg6/image/upload/v1616287606/iumbfebb3orvtzkbjhzs.png',
      'sponsor_name': 'CÓDIGOFACILITO',
      'link': 'https://codigofacilito.com'
    },
    {
      'id': 3,
      'image': 'https://res.cloudinary.com/dsktpevg6/image/upload/v1616287606/lyqijlykkald1rivmuq2.webp',
      'sponsor_name': 'DOMINICODE',
      'link': 'https://www.youtube.com/channel/UC3QuZuJr2_EOUak8bWUd74A'
    },
    {
      'id': 4,
      'image': 'https://res.cloudinary.com/dsktpevg6/image/upload/v1616287608/lemuxz3gagklzn1gpqhe.jpg',
      'sponsor_name': 'EDDHEAD',
      'link': 'https://egghead.io'
    },
    {
      'id': 5,
      'image': 'https://res.cloudinary.com/dsktpevg6/image/upload/v1616287607/aljlamiycvweyir8xvne.webp',
      'sponsor_name': 'FERNANDO HERRERA',
      'link': 'https://www.udemy.com/user/550c38655ec11/'
    },
    {
      'id': 6,
      'image': 'https://res.cloudinary.com/dsktpevg6/image/upload/v1616287607/cvpczulpme8sslvfqgpv.jpg',
      'sponsor_name': 'HUAWEI',
      'link': 'https://developer.huawei.com/consumer/en/'
    },
    {
      'id': 7,
      'image': 'https://res.cloudinary.com/dsktpevg6/image/upload/v1616287607/xgz34yq5gzhek3cdqhi7.webp',
      'sponsor_name': 'JOSE DIMAS LUJAN',
      'link': 'https://www.youtube.com/channel/UC17hjKubJGdyPbWI5jvyiVg'
    },
    {
      'id': 8,
      'image': 'https://res.cloudinary.com/dsktpevg6/image/upload/v1616287608/azt0itnmhbpzpwrvan2j.jpg',
      'sponsor_name': 'LATAMDEV',
      'link': 'http://latamdev.co'
    },
    {
      'id': 9,
      'image': 'https://res.cloudinary.com/dsktpevg6/image/upload/v1616287608/odi0yg7ljmnflxsrhvse.webp',
      'sponsor_name': 'LEONIDAS ESTEBAN',
      'link': 'https://leonidasesteban.com'
    },
    {
      'id': 10,
      'image': 'https://res.cloudinary.com/dsktpevg6/image/upload/v1616287608/kyigingh6fauoylytq0r.webp',
      'sponsor_name': 'STACKLYCODE',
      'link': 'https://stacklycode.com'
    },
    {
      'id': 11,
      'image': 'https://res.cloudinary.com/dsktpevg6/image/upload/v1616287616/v1ehxam91lk2nseb3n0p.png',
      'sponsor_name': 'TEKKITV',
      'link': 'https://tekki.tv'
    },
  ];

  constructor() {
    this.responsiveSponsors = [
      {
        breakpoint: '1500px',
        numVisible: 9,
        numScroll: 9,
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
        numVisible: 3,
        numScroll: 3,
      },
      {
        breakpoint: '280px',
        numVisible: 2,
        numScroll: 2,
      }
    ];

    this.responsiveCreators = [
      {
        breakpoint: '1920px',
        numVisible: 6,
        numScroll: 6,
      },
      {
        breakpoint: '1640px',
        numVisible: 5,
        numScroll: 5,
      },
      {
        breakpoint: '1024px',
        numVisible: 4,
        numScroll: 4
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
