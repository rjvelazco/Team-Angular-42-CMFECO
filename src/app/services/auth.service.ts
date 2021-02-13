import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
// import auth from 'firebase/firebase-auth'
import firabase from  'firebase/app';
// import { User }  from 'firebase';

import { first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public user: any;

  constructor(
    private fbAuth: AngularFireAuth
  ) { }

  async login(email: string, password: string) {
    try{
      // user
      return await this.fbAuth.signInWithEmailAndPassword(email, password)
    }catch(error){
      console.warn(error);
      throw new Error('error');
    }
  }

  async logout(){
    try{
      await this.fbAuth.signOut();
    }catch(error){
      console.warn(error);
    }
  }

  async register(email, password){
    try{
      await this.fbAuth.createUserWithEmailAndPassword(email, password)
    }catch(error){
      console.warn(error);
    }
  }
 
  getCurrentUser(){
    return this.fbAuth.authState.pipe(first());
  }

  
}
