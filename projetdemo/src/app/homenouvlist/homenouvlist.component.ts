import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LignePanierService } from '../services/ligne-panier.service';
import { ProduitService } from '../services/produit.service';
import { UtilisateurService } from '../services/utilisateur.service';
import { PanierService } from '../services/panier.service';
import { Ligne_panier } from '../models/Ligne_panier.model';
import { Produit } from '../models/Produit.model';
import { Categorie } from '../models/Categorie.model';
import { CategorieService } from '../services/categorie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homenouvlist',
  templateUrl: './homenouvlist.component.html',
  styleUrls: ['./homenouvlist.component.css']
})
export class HomenouvlistComponent implements OnInit{

  lp!:Ligne_panier
  listproduits:Produit[]=[]
  categorie!:Categorie
  userId!:number
  idProduct!:number
  quantity!:number
  produit!:Produit

  constructor(private prodserv:ProduitService,
              private Ligne_panierser: LignePanierService,
              private userser: UtilisateurService,
              private panierserv: PanierService,
              private catserv:CategorieService,
              private router:Router
       ){}
  ngOnInit(): void {
    this.categorie= new Categorie
    this.prodserv.getAllprodsByCatid(3).subscribe(
      (tab)=>
        this.listproduits=tab
    )
    this.userId = this.userser.getUserId();
    this.catserv.getCategorieById(3).subscribe((data)=>{
      this.categorie=data
    })
  }
  addProduitToCart(userId:number,idProduct:number,quantity:number,product:Produit){
    const jwt = sessionStorage.getItem('jwt');
    if (jwt) {
    this.Ligne_panierser.addProduitToLignePanier(this.userId,idProduct,quantity).subscribe((data)=>{
      this.lp=data
      this.panierserv.addLignepanierToPanier(this.lp)

      product.addedToCart = true;
      setTimeout(() => {
          product.addedToCart = false;
      }, 3000);
    })
  } else {
    this.router.navigate(['/signin']);
  }
  }
}
