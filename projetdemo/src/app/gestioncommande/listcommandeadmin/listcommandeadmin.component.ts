import { Component, OnInit } from '@angular/core';
import { Commande } from '../../models/Commande.model';
import { UtilisateurService } from '../../services/utilisateur.service';
import { CommandeService } from '../../services/commande.service';
import { Utilisateur } from '../../models/Utilisateur.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listcommandeadmin',
  templateUrl: './listcommandeadmin.component.html',
  styleUrls: ['./listcommandeadmin.component.css']
})
export class ListcommandeadminComponent implements OnInit{

  listcmd:Commande[]=[]
  iduser!:number
  idcmd!:number
  etat!:String
  constructor(private cmdserv:CommandeService,private userserv:UtilisateurService,private route:Router)
  {
     
  }
  ngOnInit(): void {
    this.getCommande()
  }
  private getCommande(){
    this.cmdserv.getAllCommande().subscribe(
      (tab)=>(
        this.listcmd=tab
      )
    )
   }
  deleteCommande(idcmd:number){
      this.cmdserv.clearCommandeAndPanier(idcmd).subscribe(()=>{})
      this.getCommande();
      location.reload()
  }
  updateCommande(idcmd:number,etat:String){
      this.cmdserv.updateCommande(idcmd,etat).subscribe(()=>{})
      this.getCommande();
      location.reload()
  }
  goToLivraisonlist(){
         this.route.navigate(["/listlivraison"])
  }
}
