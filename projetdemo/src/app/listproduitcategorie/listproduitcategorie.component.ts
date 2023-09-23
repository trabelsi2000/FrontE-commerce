import { Component, OnInit } from '@angular/core';
import { ProduitService } from '../services/produit.service';
import { Produit } from '../models/Produit.model';
import { Categorie } from 'src/app/models/Categorie.model';
import { ActivatedRoute } from '@angular/router';
import { LignePanierService } from '../services/ligne-panier.service';
import { UtilisateurService } from '../services/utilisateur.service';
import { Ligne_panier } from '../models/Ligne_panier.model';
import { PanierService } from '../services/panier.service';
import { CategorieService } from '../services/categorie.service';

@Component({
  selector: 'app-listproduitcategorie',
  templateUrl: './listproduitcategorie.component.html',
  styleUrls: ['./listproduitcategorie.component.css']
})
export class ListproduitcategorieComponent implements OnInit{

  lp!:Ligne_panier
  listproduits:Produit[]=[]
  categorie!:Categorie
  id!:number
  userId!:number
  idProduct!:number
  quantity!:number
  produit!:Produit

  constructor(private prodserv:ProduitService ,private route:ActivatedRoute , private Ligne_panierser : LignePanierService , private userser : UtilisateurService, private panierserv : PanierService,private catserv:CategorieService){

  }
  ngOnInit(): void {
    this.categorie= new Categorie
    this.id=this.route.snapshot.params['id'];
    this.prodserv.getAllprodsByCatid(this.id).subscribe(
      (tab)=>
        this.listproduits=tab
    )
    this.userId = this.userser.getUserId();
    this.catserv.getCategorieById(this.id).subscribe((data)=>{
      this.categorie=data
    })
  }
  addProduitToCart(userId:number,idProduct:number,quantity:number){
    this.Ligne_panierser.addProduitToLignePanier(this.userId,idProduct,quantity).subscribe((data)=>{
      this.lp=data
      this.panierserv.addLignepanierToPanier(this.lp)
    })
    
  }
}

