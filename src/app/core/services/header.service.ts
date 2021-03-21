import {EventEmitter, Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {


  public showLoginBtn: EventEmitter<boolean> = new EventEmitter();
  public dashBoardLogin: EventEmitter<boolean> = new EventEmitter();

  constructor() { }
}
