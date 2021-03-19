import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

// Model
import { Event } from '../../models/event.model';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(
    private db: AngularFirestore
  ) { }

  getEvents() {
    return this.db.collection<Event>('evento').valueChanges().pipe(
      map(resp => {
        return this.transformEventsModel(resp);
      })
    )
  }

  async updateEvent(evento: Event) {
    try {
      const id = evento.id;
      const item = { id, ...evento };
      const result = await this.db.collection('evento').doc(`${evento.id}`).set(item);
      return result;
    } catch (error) {
      return new Error(error)
    }
  }

  private transformEventsModel(resp: any[]): Event[]{
    return resp;
  }

}
