import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  
  public loading: EventEmitter<boolean> = new EventEmitter();

  constructor() {}
}
