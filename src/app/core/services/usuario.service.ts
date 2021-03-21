import {EventEmitter, Injectable} from '@angular/core';
import {map} from 'rxjs/operators';
// Firebase
import {AngularFireAuth} from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase';
// Models
import {Usuario} from '../../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  // User Info
  public usuario: Usuario;
  public team: any[] = [];

  // Image
  private CARPETA_IMAGENES = 'img';
  
  // Observables
  public usuarioEmiter: EventEmitter<Usuario> = new EventEmitter();
  public usuarioGroupEmitter: EventEmitter<Usuario[]> = new EventEmitter();
  
  // Get user  "Token"
  get token(): string {
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
      localStorage.removeItem('groupId')
      return await this.fbAuth.signOut();
    } catch (error) {
      throw new Error(error);
    }
  }

  async register(username, email, password) {
    try {
      
      // Crear user into fireauth
      const user = await this.fbAuth.createUserWithEmailAndPassword(email, password);
      let { uid, photoURL = '' } = user.user;

      photoURL = (photoURL) ? photoURL : '';
      
      // New user Instance
      const usuario = new Usuario(uid, email, username, 'participante', photoURL, '', '', '', '', '', '', '', '', '', '', [], false);

      // Update user into firecloud
      await this.createParticipante(usuario);
      await this.updateUserName(username);
      
      // Verification Email
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
      (await this.fbAuth.currentUser).updateProfile({displayName: username});
    } catch (error) {
      throw new Error(error);
    }
  }

  async createParticipante(user: Usuario) {
    try {
      const uid = user.uid;
      const item = { uid, ...user };
      return await this.db.collection('participantes').doc(uid).set(item);
    } catch (error) {
      return new Error(error);
    }
  }

  async getIntegratesGroup(): Promise<Usuario[]> {
    try {
      this.team = [];

      const resp = await this.db.firestore.collection('participantes').where('group', '==', this.usuario.group).get();

      // Get user team.
      resp.forEach(docs => this.team.push(docs.data()));
      this.usuarioGroupEmitter.emit(this.team);

      return this.team;
    } catch (error) {
      return [];
    }
  }

  async getNameGroup() {
    try {
      const resp = await this.db.firestore.collection('grupos').where('id', '==', this.usuario.group).get();
      let grupos = [];
      resp.forEach(docs => grupos.push(docs.data()));
      return grupos[0].name;
    } catch (error) {
      return '';
    }
  }

  async updateParticipante(user: Usuario) {
    try {
      const uid = user.uid;
      const item = {uid, ...user};
      const result = await this.db.collection('participantes').doc(`${this.token}`).set(item);
      this.usuario = user;
      this.usuarioEmiter.emit(user);
      return result;
    } catch (error) {
      return new Error(error)
    }
  }


  // Obersavables
  public getCurrentUser() {
    return this.fbAuth.user.pipe(
      map(user => {
        return user;
      })
    );
  }

  public getParticipante() {
    return this.db.collection('participantes').doc(`${this.token}`)
      .valueChanges().pipe(
        map((user: any) => {
          const { uid, email, userName, role, img = '', sex = '', birthDate = '', country = '', facebook = '', github = '', linkedIn = '', twitter = '', bio = '', event = '', group = '', insignias = [], estado = false } = user;
          this.usuario = new Usuario(uid, email, userName, role, img, sex, birthDate, country, facebook, github, linkedIn, twitter, bio, event, group, insignias, estado);
          return true;
        }));
  }

  public grupos() {
    return this.db.collection('grupos').snapshotChanges();
  }
}
