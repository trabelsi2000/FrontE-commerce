import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdresseService } from '../services/adresse.service';
import { Adresse } from '../models/Adresse.model';
import { Commande } from './../models/Commande.model';

@Component({
  selector: 'app-adresscommande',
  templateUrl: './adresscommande.component.html',
  styleUrls: ['./adresscommande.component.css']
})
export class AdresscommandeComponent implements OnInit{

  cmd:Commande=new Commande()
  adress:Adresse= new Adresse();
  id!:number
  constructor(private route:ActivatedRoute,private router:Router,private adressserv:AdresseService){

  }
  ngOnInit(): void {
    
  }
  saveAdress(){
    this.id=this.route.snapshot.params['id'];
    this.adressserv.addAdressToUser(this.id,this.adress).subscribe(() =>{})
    this.confirmAdress();
  }

  onSubmit(){
    this.saveAdress();
  };
  confirmAdress(){
      
      this.router.navigate(['/commandeclt',this.id])
  }
}
