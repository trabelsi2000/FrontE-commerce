import { Component, OnInit } from '@angular/core';
import { PanierService } from '../services/panier.service';
import { Panier } from '../models/Panier.model';
import { Utilisateur } from '../models/Utilisateur.model';
import { UtilisateurService } from '../services/utilisateur.service';
import { LignePanierService } from '../services/ligne-panier.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit{

  idlignepan!:number
  qte!:number
  id!:number
  idp!:number
  panier!:Panier
  iduser!:number
  montantTotal: number = 0; 
  constructor(private route:Router,private panserv:PanierService,private userserv:UtilisateurService,private lpserv:LignePanierService){
     this.iduser=this.userserv.getUserId()
     
  }
 

  ngOnInit(): void {
    this.getPanier();
    this.calculerMontantTotal()
  }

 private getPanier(){
   this.panserv.getPanierByiduser(this.iduser).subscribe(data => {
     this.panier = data
   });
  }
  deleteLignepanier(id: number) {
    this.lpserv.supprimerLignepanierDuPanier(id).subscribe(()=>{});
    this.getPanier();
    location.reload()
  }
  calculerMontantTotal():number{
    this.panserv.calculerMontantTotalPanier(this.iduser).subscribe(amount => {
       this.montantTotal = amount;
  });
    return this.montantTotal}

    modifierQuantiteAjoute(idlignepan:number,qte:number){
      this.lpserv.modifierQuantiteDansPanier(idlignepan,qte).subscribe(
        () => {
          this.calculerMontantTotal();
        },
        error => {
          console.error('Error updating quantity:', error);
        }
      );
    }
 
    goToAdresscommande(idp:number){
         this.route.navigate(["/adresscommande",idp])
    }
  
}
