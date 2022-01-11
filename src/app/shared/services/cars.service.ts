import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import {
  addDoc,
  collection,
  collectionData,
  deleteDoc,
  doc,
  DocumentData,
  DocumentReference,
  Firestore,
  getDocs,
  query,
  QuerySnapshot,
  setDoc,
  where
} from "@angular/fire/firestore";

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  constructor(
    private firestore:Firestore
  ) { }

  getAllFB(): Observable<DocumentData[]> {
    return collectionData(collection(this.firestore, 'cars'))
  }
}
