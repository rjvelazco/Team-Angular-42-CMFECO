import { Component, OnInit } from '@angular/core';

// services
import { HeaderService } from '../../../core/services/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public showBackLoginBtn: boolean = false; 

  constructor(
    private headerService: HeaderService
  ) { }

  ngOnInit(): void {
    this.headerService.showLoginBtn.subscribe(data => {
      this.showBackLoginBtn = data;
    })
  }

}
