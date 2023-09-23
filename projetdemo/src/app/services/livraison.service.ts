import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Livraison } from '../models/Livraison.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LivraisonService {

  constructor(private httpclt:HttpClient){

  }
  getAllLivraison():Observable<Livraison[]>{
    return this.httpclt.get<Livraison[]>("http://localhost:8080/getalllivraison")
  }
  addLivraisonToCommande(liv:Livraison,idcmd:number):Observable<Livraison>{
    return this.httpclt.post<Livraison>(`http://localhost:8080/addlivraisonToCommande/${idcmd}`,liv)
  }
  clearLivraisonAndCommande(idliv:number):Observable<object>{
    return this.httpclt.delete<object>(`http://localhost:8080/clearLivraisonAndCommande/${idliv}`)
  }
}
