import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UtilisateurService } from '../services/utilisateur.service';
import { Panier } from './../models/Panier.model';
import { Utilisateur } from '../models/Utilisateur.model';

@Component({
  selector: 'app-singin',
  templateUrl: './singin.component.html',
  styleUrls: ['./singin.component.css']
})
export class SinginComponent implements OnInit{
 
  usr!:Utilisateur
  iduser!:number
  panier!:Panier
  forminput!:FormGroup
  constructor(private fb:FormBuilder,private route:Router,private userserv:UtilisateurService) {
  }
  ngOnInit(): void {
    this.forminput=this.fb.group(
      {"username":["",[Validators.required]],
      "password":["",Validators.required]

    })
  }
  onsubmit(){
    if(this.forminput.valid){
      this.userserv.connect(this.forminput.controls["username"].value,this.forminput.controls["password"].value).subscribe(
        (authResult)=>{
         this.userserv.saveuser(authResult.jwt,authResult.username,authResult.email,authResult.id,authResult.roles) 
         if(authResult.roles.includes("ADMINISTRATEUR")){
          this.route.navigate(["/homeadmin"])
         }
         else{
          this.route.navigate(["/"])
          this.userserv.addPanierToUser(JSON.parse(sessionStorage.getItem("panier")!),this.userserv.getUserId()).subscribe((data)=>{
            this.usr=data
          })
          }
      });
           
         }
        }
 
     
     
    }
  

