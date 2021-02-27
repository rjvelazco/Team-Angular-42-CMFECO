import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MenuItem} from 'primeng/api';

// services
import { AuthService } from 'src/app/core/services/auth.service';
import { HeaderService } from '../../../core/services/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public showBackLoginBtn: boolean = false;
  public showDashboard: boolean = false;
  items: MenuItem[];
  changeColor = true;

  constructor(
    private headerService: HeaderService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.headerService.showLoginBtn.subscribe((showBtn) => {
      this.showBackLoginBtn = showBtn;
    });

    this.headerService.dashBoardLogin.subscribe((showDashboard) => {
      this.showDashboard = showDashboard;
    });
  }


  logout() {
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }

  update(){
    this.changeColor = !this.changeColor;
  }
}
