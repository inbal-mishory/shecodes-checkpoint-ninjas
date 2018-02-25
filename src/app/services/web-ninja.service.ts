import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

import { WebNinja } from '../models/WebNinja';

@Injectable()
export class WebNinjaService {
  webNinjasCollection: AngularFirestoreCollection<WebNinja>;
  webNinjaDoc: AngularFirestoreDocument<WebNinja>;
  webNinjas: Observable<WebNinja[]>;
  webNinja: Observable<WebNinja>;

  constructor(private afs: AngularFirestore) {
    this.webNinjasCollection = this.afs.collection('web-ninjas',
    ref => ref.orderBy('lastName', 'asc'));
  }

  getNinjas(): Observable<WebNinja[]> {
    // Get ninjas with the id
    this.webNinjas = this.webNinjasCollection.snapshotChanges()
    .map(changes => {
      return changes.map(action => {
        const data = action.payload.doc.data() as WebNinja;
        data.id = action.payload.doc.id;
        return data;
      });
    });
    return this.webNinjas;
  }

  newWebNinja(webNinja: WebNinja) {
    this.webNinjasCollection.add(webNinja);
  }

  getWebNinja(id: string): Observable<WebNinja> {
    this.webNinjaDoc = this.afs.doc<WebNinja>(`webninjas/${id}`);
    console.log(this.webNinjaDoc);
    this.webNinja = this.webNinjaDoc.snapshotChanges().map(action => {
      if (action.payload.exists === false) {
        console.log("payload failed")
        return null;
      } else {
        const data = action.payload.data() as WebNinja;
        data.id = action.payload.id;
        return data;
      }
    });
    console.log(this.webNinja);
    return this.webNinja;
  }
}
