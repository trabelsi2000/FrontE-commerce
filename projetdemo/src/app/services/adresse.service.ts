import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Adresse } from '../models/Adresse.model';

@Injectable({
  providedIn: 'root'
})
export class AdresseService {

  constructor(private httpclt:HttpClient){

  }
  addAdressToUser(iduser:number,adr:Adresse):Observable<Adresse>{
    return this.httpclt.post<Adresse>(`http://localhost:8080/addAdressToUser/${iduser}`,adr)
  }
}
