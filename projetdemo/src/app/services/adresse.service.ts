import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Adresse } from '../models/Adresse.model';
import { Utilisateur } from './../models/Utilisateur.model';

@Injectable({
  providedIn: 'root'
})
export class AdresseService {

  constructor(private httpclt:HttpClient){

  }
  addAdressToUser(iduser:number,adr:Adresse):Observable<Adresse>{
    return this.httpclt.post<Adresse>(`http://localhost:8080/addAdressToUser/${iduser}`,adr)
  }
  updateAdressFromUser(iduser:number,adr:Adresse):Observable<Utilisateur>{
    return this.httpclt.put<Utilisateur>(`http://localhost:8080/updateAdressFromUser/${iduser}`,adr)
  }
  getAdressById(iduser:number):Observable<Adresse>{
    return this.httpclt.get<Adresse>(`http://localhost:8080/getAdressByiduser/${iduser}`)
  }
}
