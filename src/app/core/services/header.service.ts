import { EventEmitter, Injectable } from '@angular/core';
// import * as EventEmitter from 'events';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {


  public showLoginBtn: EventEmitter<boolean> = new EventEmitter();

  constructor() { }
}
