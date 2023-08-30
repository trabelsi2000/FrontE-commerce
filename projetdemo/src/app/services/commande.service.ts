import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Commande } from './../models/Commande.model';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {

  constructor(private httpclt:HttpClient){

  }
  addCommandeToPanier(cmd:Commande,idpanier:number):Observable<Commande>{
    return this.httpclt.post<Commande>(`http://localhost:8080/addcommande/${idpanier}`,cmd)
  }
}
