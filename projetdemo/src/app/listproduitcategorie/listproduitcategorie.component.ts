import { Component, OnInit } from '@angular/core';
import { ProduitService } from '../services/produit.service';
import { Produit } from '../models/Produit.model';
import { Categorie } from 'src/app/models/Categorie.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-listproduitcategorie',
  templateUrl: './listproduitcategorie.component.html',
  styleUrls: ['./listproduitcategorie.component.css']
})
export class ListproduitcategorieComponent implements OnInit{

  listproduits:Produit[]=[]
  categorie!:Categorie
  id!:number
  constructor(private prodserv:ProduitService ,private route:ActivatedRoute){

  }
  ngOnInit(): void {
    this.categorie= new Categorie
    this.id=this.route.snapshot.params['id'];
    this.prodserv.getAllprodsByCatid(this.id).subscribe(
      (tab)=>
        this.listproduits=tab
    )
  }
}
