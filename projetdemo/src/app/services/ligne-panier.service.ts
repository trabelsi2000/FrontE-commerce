import { Injectable } from '@angular/core';
import { Ligne_panier } from '../models/Ligne_panier.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LignePanierService {

  constructor(private httpclt:HttpClient) {
    

  }
  addProduitToLignePanier(idUser:number,idProduct:number,quantity:number):Observable<Ligne_panier>{
   return this.httpclt.post<Ligne_panier>(`http://localhost:8080/ajouterProduitAuPanier/${idUser}/${idProduct}/${quantity}`,{} )
 }
 supprimerLignepanierDuPanier(idlignepanier:number):Observable<object>{
   return this.httpclt.delete<object>(`http://localhost:8080/supprimerProduitDuPanier/${idlignepanier}`)
 }
 modifierQuantiteDansPanier(idlignepan:number,qte:number):Observable<Ligne_panier>{
   return this.httpclt.put<Ligne_panier>(`http://localhost:8080/modifierQuantiteDansPanier/${idlignepan}/${qte}`,{})
 }
}
