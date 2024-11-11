import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
 
export interface Viaje{
  id?:string;
  idAuto:string;
  idUsuario:number;
  horaInicio:string;
  asientosDisponibles:number;
}

@Injectable({
  providedIn: 'root'
})
export class ViajesService {

  private collectionName="viajes";

  constructor(private firestore:AngularFirestore) { }

  addViaje(viaje:Viaje): Promise<void>{
    const id = this.firestore.createId();
    return this.firestore.collection(this.collectionName).doc(id).set({...viaje,id})
  }

  getViaje():Observable<Viaje[]>{
    return this.firestore.collection<Viaje>(this.collectionName).valueChanges();
  }
}
