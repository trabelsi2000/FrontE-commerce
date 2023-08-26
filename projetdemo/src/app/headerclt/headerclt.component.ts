import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Categorie } from '../models/Categorie.model';
import { CategorieService } from '../services/categorie.service';
import { Route, Router } from '@angular/router';
import { Utilisateur } from '../models/Utilisateur.model';
import { Panier } from '../models/Panier.model';

@Component({
  selector: 'app-headerclt',
  templateUrl: './headerclt.component.html',
  styleUrls: ['./headerclt.component.css']
})
export class HeadercltComponent implements OnInit{

  categories: Categorie[] = [];
  panier!:Panier
  iduser!:number
  constructor(private catserv:CategorieService,private Route:Router) {
  }

  ngOnInit() {
    // Fetch data from Spring Boot backend (replace with your API endpoint)
    this.catserv.getAllCategorie().subscribe((data) => {
      this.categories = data
    });
  }
  goToProduitcategorie(id:number){
     this.Route.navigate(['/listproduitcategorie',id])
  }
  goToPanier(id:number){
    this.Route.navigate(['/panier',id])
  }
}
  

