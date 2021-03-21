import {Injectable} from '@angular/core';
// Firebase
import {AngularFireAuth} from '@angular/fire/auth';
import {AngularFirestore} from '@angular/fire/firestore';
import {map} from 'rxjs/operators';
import {Insignias} from 'src/app/models/insignias.model';

@Injectable({
  providedIn: 'root'
})
export class InsigniasService {

  constructor(
    private afAuth: AngularFireAuth,
    private db: AngularFirestore
  ) { }

  mostrarInsigniasGanadas(){
    return this.db.collection('insignias').valueChanges().pipe(
      map( resp =>{
        return this.insigniasModel(resp);
      })
    );
  }

  insigniasModel( resp: any ): Insignias[]{
    return resp;
  }
}
