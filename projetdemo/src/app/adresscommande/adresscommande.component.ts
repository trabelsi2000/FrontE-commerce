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

  cmd!:Commande
  adress!:Adresse
  id!:number
  iduser!:number
  constructor(private route:ActivatedRoute,private router:Router,private adressserv:AdresseService){

  }
  ngOnInit(): void {
    this.cmd=new Commande()
    this.adress= new Adresse();
    this.id=this.route.snapshot.params['id'];
    this.iduser=JSON.parse(sessionStorage.getItem("userId")!)
    this.adressserv.getAdressById(this.iduser).subscribe(data =>{
      this.adress=data;
     }, error => console.log(error));
  }

  onSubmit(){
    this.adressserv.updateAdressFromUser(this.iduser,this.adress).subscribe(data=>{
      this.confirmAdress();
    }, error => console.log(error));
  }

  confirmAdress(){
      this.router.navigate(['/commandeclt',this.id])
  }
}
