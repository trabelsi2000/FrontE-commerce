import { Component, OnInit } from '@angular/core';
import { Livraison } from '../../models/Livraison.model';
import { LivraisonService } from '../../services/livraison.service';
import { Router } from '@angular/router';
import { Commande } from '../../models/Commande.model';
import { CommandeService } from '../../services/commande.service';

@Component({
  selector: 'app-listlivraison',
  templateUrl: './listlivraison.component.html',
  styleUrls: ['./listlivraison.component.css']
})
export class ListlivraisonComponent implements OnInit{

  listcmd:Commande[]=[]
  idliv!:number
  constructor(private livserv:LivraisonService,private cmdserv:CommandeService,private route:Router)
  {
     
  }
  ngOnInit(): void {
    this.getLivraison()
  }
  private getLivraison(){
    this.cmdserv.getAllCommande().subscribe(
      (tab)=>(
        this.listcmd=tab
      )
    )
   }

  deleteLivraison(idliv:number){
      this.livserv.clearLivraisonAndCommande(idliv).subscribe(()=>{})
      this.getLivraison
      location.reload()
  }
}
