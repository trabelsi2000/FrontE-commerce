import { Component, OnInit } from '@angular/core';
import { CommandeService } from '../services/commande.service';
import { Commande } from '../models/Commande.model';
import { Panier } from '../models/Panier.model';
import { ActivatedRoute, Router } from '@angular/router';
import { PanierService } from '../services/panier.service';
import { UtilisateurService } from '../services/utilisateur.service';

@Component({
  selector: 'app-commandeclt',
  templateUrl: './commandeclt.component.html',
  styleUrls: ['./commandeclt.component.css']
})
export class CommandecltComponent implements OnInit {
  panierId!:number;
  userId!: number; // Retrieve this from session storage
  panier:Panier=new Panier(); // Replace 'any' with the actual type of your panier object
  cmd:Commande=new Commande();
  constructor(
    private route: ActivatedRoute,
    private router:Router,
    private panierserv: PanierService,
    private userserv:UtilisateurService,
    private cmdserv:CommandeService
  ) {}

  ngOnInit() {
    this.panierId = this.route.snapshot.params['id'];
    this.userId =JSON.parse(sessionStorage.getItem('userId')!); 
    this.loadPanierDetails();
    this.loadUser();
  }
  loadUser(){
     this.userserv.getUserById(this.userId).subscribe(()=>{})
  }

  loadPanierDetails() {
    this.panierserv.getPanierByiduser(this.userId).subscribe(
      (data) => {
        this.panier = data;
      },
      error => {
        console.error('Error fetching panier details:', error);
      }
    );
  }
  confirmerCommande(){
    this.cmd.etatCmd="en_cours"
    this.cmdserv.addCommandeToPanier(this.cmd,this.panierId).subscribe(()=>{})
    this.router.navigate(['/headerclt'])
  }
}