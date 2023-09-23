import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Livraison } from './../models/Livraison.model';
import { LivraisonService } from '../services/livraison.service';
import { UtilisateurService } from '../services/utilisateur.service';
import { PanierService } from '../services/panier.service';
import { Panier } from '../models/Panier.model';
import { Utilisateur } from '../models/Utilisateur.model';
import { Commande } from '../models/Commande.model';

@Component({
  selector: 'app-addlivraison',
  templateUrl: './addlivraison.component.html',
  styleUrls: ['./addlivraison.component.css']
})
export class AddlivraisonComponent implements OnInit{

  panierId!:number;
  userId!: number; 
  panier:Panier=new Panier(); 
  cmd:Commande=new Commande();
  livraison:Livraison=new Livraison();
  user!:Utilisateur
  constructor(
    private route: ActivatedRoute,
    private router:Router,
    private panierserv: PanierService,
    private userserv:UtilisateurService,
    private livserv:LivraisonService
  ) {}

  ngOnInit() {
    this.panierId = this.route.snapshot.params['id'];
    this.userId =JSON.parse(sessionStorage.getItem('userId')!); 
    this.loadPanierDetails();
    this.loadUser();
  }
  loadUser(){
     this.userserv.getUserById(this.userId).subscribe((data)=>{
      this.user=data
     })
  }

  loadPanierDetails() {
    this.panierserv.getPanierByidpanier(this.panierId).subscribe(
      (data) => {
        this.panier = data;
      },
      error => {
        console.error('Error fetching panier details:', error);
      }
    );
  }
  confirmerLivraison(){
    
    this.livraison.etatLiv="en_cours"
    this.livserv.addLivraisonToCommande(this.livraison,this.panierId).subscribe((data)=>{this.livraison=data})
    this.userserv.clearPanierFromUser(this.userId).subscribe(()=>{})
    this.userserv.addPanierToUser(JSON.parse(sessionStorage.getItem("panier")!),this.userserv.getUserId()).subscribe((data)=>{})
    this.router.navigate(['/'])
  }
  
}
