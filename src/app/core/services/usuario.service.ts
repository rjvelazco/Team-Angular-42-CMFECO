import { Injectable, EventEmitter } from '@angular/core';
import { map } from 'rxjs/operators';

// Firebase
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore } from '@angular/fire/firestore';

// Models
import { Usuario } from '../../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  public usuario: Usuario;
  public usuarioEmiter: EventEmitter<Usuario> = new EventEmitter();

  get token(): string{
    return localStorage.getItem('token') || '';
  }

  constructor(
    private fbAuth: AngularFireAuth,
    private db: AngularFirestore
  ) { }

  // AUTH
  async login(email: string, password: string) {
    try {
      return await this.fbAuth.signInWithEmailAndPassword(email, password);
    } catch (error) {
      throw new Error(error);
    }
  }

  async logout() {
    try {
      localStorage.removeItem('token');
      return await this.fbAuth.signOut();
    } catch (error) {
      throw new Error(error);
    }
  }

  async register(username, email, password) {
    try {
      const user = await this.fbAuth.createUserWithEmailAndPassword(email, password);
      let { uid, photoURL = '' } = user.user;
      photoURL = (photoURL) ? photoURL : '';
      const usuario = new Usuario(uid, email , username, 'participante', photoURL, '', '', '', '', '', '', '', '');

      await this.createParticipante(usuario);
      await this.updateUserName(username);
      
      this.sendVerificationEmail();
      return user;
    } catch (error) {
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
      throw new Error(error);
    }
  }

  async updateUserName(username) {
    try {
      (await this.fbAuth.currentUser).updateProfile({
        displayName: username
      });
    } catch (error) {
      throw new Error(error);
    }
  }

  async createParticipante(user: Usuario) {
    try {
      const uid = user.uid;
      const item = {uid, ...user };
      return await this.db.collection('participantes').doc(uid).set(item);
    } catch (error) {
      return new Error(error);
    }
  }
 
  getCurrentUser() {
    return this.fbAuth.user.pipe(
      map(user => {
        return user;
      })
    );
  }

  getParticipante() {
    return this.db.collection('participantes').doc(`${this.token}`)
      .valueChanges().pipe(
        map((userProfilSnapshot: any) => {
          const { uid, email, userName, role, img = '', sex = '', birthDate = '', country = '', facebook = '', github = '', linkedIn = '', twitter = '', bio = '' } = userProfilSnapshot;
          this.usuario = new Usuario(uid, email, userName, role, img, sex, birthDate, country, facebook, github, linkedIn, twitter, bio);
          return true;
        }));
  }

  async updateParticipante(user: Usuario) {
    try {
      const uid = user.uid;
      const item = { uid, ...user };
      const result = await this.db.collection('participantes').doc(`${this.token}`).set(item);
      this.usuario = user;
      this.usuarioEmiter.emit(user);
      return result;
    } catch (error) {
      return new Error(error)
    }
  }
  
}
