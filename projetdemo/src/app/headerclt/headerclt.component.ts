import { Component, OnInit } from '@angular/core';
import { Categorie } from '../models/Categorie.model';
import { CategorieService } from '../services/categorie.service';
import { Route, Router } from '@angular/router';
import { Panier } from '../models/Panier.model';
import { UtilisateurService } from '../services/utilisateur.service';
import { PanierService } from '../services/panier.service';
import { Utilisateur } from '../models/Utilisateur.model';

@Component({
  selector: 'app-headerclt',
  templateUrl: './headerclt.component.html',
  styleUrls: ['./headerclt.component.css']
})
export class HeadercltComponent implements OnInit{

  categories: Categorie[] = [];
  panier:Panier=new Panier()
  iduser!:number
  user!:Utilisateur
  constructor(private catserv:CategorieService,private Route:Router,private userserv:UtilisateurService,private panserv:PanierService ) {
    
  }

  ngOnInit() {
    
    this.catserv.getAllCategorie().subscribe((data) => {
      this.categories = data
    });
    this.iduser = this.userserv.getUserId()
    this.loadUser();
  }
  loadUser(){
    this.userserv.getUserById(this.iduser).subscribe((data)=>{
     this.user=data
    })
 }
  goToProduitcategorie(id:number){
     this.Route.navigate(['/listproduitcategorie',id])
  }
  
  goToPanier(iduser:number){
   if(iduser!)
    {this.Route.navigate(['/panier',iduser])}
    else{
      this.Route.navigate(['/signin'])
    }
  }
  isConnected(){
    return this.userserv.isConnected()
  }
  isAdmin(){
    return this.userserv.isAdmin()
  }
  logout(){
    this.userserv.clearPanierFromUser(this.user.uid).subscribe(()=>{})
    this.userserv.logout()
  }
  goToLivraisons(){
    this.Route.navigate(['/voirlivraisonclt'])
  }
  voirMonCompte(){
    this.Route.navigate(['/moncompte'])
  }
}
  