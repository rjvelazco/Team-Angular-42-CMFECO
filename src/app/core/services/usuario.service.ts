import { Injectable } from '@angular/core';

// Firebase
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore } from '@angular/fire/firestore';

// Models
import { Usuario } from '../../models/usuario.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  public user: any;
  public usuario: Usuario;

  constructor(
    private fbAuth: AngularFireAuth,
    private db: AngularFirestore
  ) { }

  // AUTH
  async login(email: string, password: string) {
    try {
      // user
      return await this.fbAuth.signInWithEmailAndPassword(email, password);
    } catch (error) {
      console.warn(error);
      throw new Error(error);
    }
  }

  async logout() {
    try {
      return await this.fbAuth.signOut();
    } catch (error) {
      console.warn(error);
    }
  }

  async register(username, email, password) {
    try {
      const user = await this.fbAuth.createUserWithEmailAndPassword(email, password);
      const { uid } = user.user;
      const usuario = new Usuario(uid, email , username);

      await this.createParticipante(usuario);
      await this.updateUserName(username);
      
      this.sendVerificationEmail();
      return user;
    } catch (error) {
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
 
  async getCurrentUser() {
    return this.fbAuth
    // return await this.fbAuth.onAuthStateChanged(user => {
    //   if (user) {
    //     return this.db.collection('participantes').doc(`${user.uid}`)
    //       .get().subscribe((userProfilSnapshot:any) => {
    //         const { uid, email, nick, sex = '', birthDate = '', country = '', facebook = '', github = '', linkedIn = '', twitter = '', bio =''} = userProfilSnapshot.data();
    //         this.usuario = new Usuario(uid, email, nick, sex, birthDate, country, facebook, github, linkedIn, twitter, bio);
    //         return this.usuario;
    //       });
    //   }

    // });
  }

  getParticipante(user:any) {
    return this.db.collection('participantes').doc(`${user.uid}`)
      .get().pipe(
        map((userProfilSnapshot: any) => {
          const { uid, email, nick, sex = '', birthDate = '', country = '', facebook = '', github = '', linkedIn = '', twitter = '', bio =''} = userProfilSnapshot.data();
          this.usuario = new Usuario(uid, email, nick, sex, birthDate, country, facebook, github, linkedIn, twitter, bio);
          return this.usuario
      }))
  }

  async createParticipante(user: Usuario) {
    try {
      console.log(user, user.uid);
      const uid = user.uid;
      const item = {uid, ...user };
      return await this.db.collection('participantes').doc(uid).set(item);
    } catch (error) {
      console.log(error);
      return new Error(error);
    }
  }
  
}
