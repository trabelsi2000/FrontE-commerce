import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
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
  getAllCommande():Observable<Commande[]>{
      return this.httpclt.get<Commande[]>(`http://localhost:8080/getallcommande`)
  }
  clearCommandeAndPanier(idcmd:number):Observable<object>{
    return this.httpclt.delete<object>(`http://localhost:8080/clearCommandeAndPanier/${idcmd}`)
}
  updateCommande(idcmd:number,etat:String):Observable<Commande>{
    return this.httpclt.put<Commande>(`http://localhost:8080/updatecommande/${idcmd}/${etat}`,{});
}
  getCommandeByIdpan(idpanier:number):Observable<Commande>{
    return this.httpclt.get<Commande>(`http://localhost:8080/getcommandebyidpan/${idpanier}`)
  }
  getAllCommandeByUsername(username:String):Observable<Commande[]>{
    return this.httpclt.get<Commande[]>(`http://localhost:8080/getAllByUsername/${username}`)
  }
}
