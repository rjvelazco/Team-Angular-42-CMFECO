import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
// import auth from 'firebase/firebase-auth'
import firabase from  'firebase/app';
// import { User }  from 'firebase';

import { first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

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
      throw new Error(error);
    }
  }

  async logout(){
    try{
      return await this.fbAuth.signOut();
    }catch(error){
      console.warn(error);
    }
  }

  async register(username, email, password){
    try{
      const user = await this.fbAuth.createUserWithEmailAndPassword(email, password);
      await this.updateUserName(username);
      this.sendVerificationEmail();
      return user;
    }catch(error){
      console.warn(error);
      throw new Error(error);
    }
  }

  async sendVerificationEmail() {
    return (await this.fbAuth.currentUser).sendEmailVerification();
  }

  async resetPassword(email: string) {
    try {
      return this.fbAuth.sendPasswordResetEmail(email);
    } catch (error) {
      console.log(error);
    }
  }

  async updateUserName(username) {
    try {
      (await this.fbAuth.currentUser).updateProfile({
        displayName: username
      });
    } catch (error) {
      console.log(error);
    } 
  }
 
  getCurrentUser(){
    return this.fbAuth.user;
  }

  
}
