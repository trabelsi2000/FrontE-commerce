import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Panier } from '../models/Panier.model';
import { Ligne_panier } from '../models/Ligne_panier.model';
import { Utilisateur } from '../models/Utilisateur.model';



@Injectable({
  providedIn: 'root'
})
export class PanierService {
  
  constructor(private httpclt:HttpClient){

  }
  getPanierByidpanier(id:number):Observable<Panier>
  {
    return this.httpclt.get<Panier>(`http://localhost:8080/getpanierbyid/${id}`)
  }
  getPanierByiduser(id:number):Observable<Panier>
  {
    return this.httpclt.get<Panier>(`http://localhost:8080/getPanierByiduser/${id}`)
  }
  addLignepanierToPanier(lp:Ligne_panier):Observable<Panier>{
      return this.httpclt.post<Panier>("http://localhost:8080/addpaniertouser",lp ) 
  }
  calculerMontantTotalPanier(iduser:number):Observable<number>
  {
    return this.httpclt.get<number>(`http://localhost:8080/calculerMontantTotalPanier/${iduser}`)
  }
}
