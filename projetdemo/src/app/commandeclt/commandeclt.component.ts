import { Component, OnInit } from '@angular/core';
import { CommandeService } from '../services/commande.service';
import { Commande } from '../models/Commande.model';
import { Panier } from '../models/Panier.model';
import { ActivatedRoute, Router } from '@angular/router';
import { PanierService } from '../services/panier.service';
import { UtilisateurService } from '../services/utilisateur.service';
import { Utilisateur } from '../models/Utilisateur.model';
import { Livraison } from './../models/Livraison.model';
import { LivraisonService } from '../services/livraison.service';

@Component({
  selector: 'app-commandeclt',
  templateUrl: './commandeclt.component.html',
  styleUrls: ['./commandeclt.component.css']
})
export class CommandecltComponent implements OnInit {
  panierId!:number;
  userId!: number; 
  panier:Panier=new Panier(); 
  cmd:Commande=new Commande();
  user!:Utilisateur
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
     this.userserv.getUserById(this.userId).subscribe((data)=>{
      this.user=data
     })
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
    this.cmd.nom=this.user.unom
    this.cmd.prenom=this.user.uprenom
    this.cmd.emailadr=this.user.email
    this.cmd.tel=this.user.utel
    this.cmd.nomUtil=this.user.username
    this.cmdserv.addCommandeToPanier(this.cmd,this.panierId).subscribe((data)=>{this.cmd=data})
    this.router.navigate(['/addlivraison',this.panierId])
  }
}