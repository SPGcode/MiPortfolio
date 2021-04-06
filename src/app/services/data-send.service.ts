import { Injectable } from '@angular/core';
import { MessageI } from '../interfaces/data-form.interface'
import { AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore'

@Injectable({
  providedIn: 'root'
})
export class DataSendService {
  
  private dataCollection:AngularFirestoreCollection<MessageI>;

  constructor(private afs: AngularFirestore) { 
    this.dataCollection = afs.collection<MessageI>('items');
  }

  //add message to db
  addMessage(message: MessageI){
    this.dataCollection.add(message);
  }
}
