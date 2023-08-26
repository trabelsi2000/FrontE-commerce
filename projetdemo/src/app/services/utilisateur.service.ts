import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Utilisateur } from '../models/Utilisateur.model';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  items= new BehaviorSubject(0);
  counter=0
  constructor(private httpclt:HttpClient) { 
    this.items.subscribe(
      (x)=>{
        this.counter=x
      }
    )
  }

  incrimenter(){
    this.items.next(this.items.getValue()+1)
  }
  ajouter(usr:Utilisateur):Observable<Utilisateur>
  {
    return this.httpclt.post<Utilisateur>("http://localhost:3000/Utilisateur/",usr)
  }
  getAllUsers():Observable<Utilisateur[]>
  {
    return this.httpclt.get<Utilisateur[]>("http://localhost:3000/Utilisateur/")
  }
}
