import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Utilisateur } from '../models/Utilisateur.model';
import { UtilisateurService } from '../services/utilisateur.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{

  forminput!:FormGroup
  us!:Utilisateur
  constructor(private fb:FormBuilder,private route:Router,private userserv:UtilisateurService){
  }
    
  
  ngOnInit(): void {
    this.forminput=this.fb.group(
      { "uemail":["",[Validators.required,Validators.email]],
        "username":["",Validators.required],
        "unom":["",Validators.required],
        "uprenom":["",Validators.required],
        "utel":["",Validators.required],
        "umdp":["",Validators.required]

    })
  }

  register(){
    let usr = new Utilisateur()

    usr.uemail= this.forminput.controls['uemail'].value
    usr.username= this.forminput.controls['username'].value
    usr.unom= this.forminput.controls['unom'].value
    usr.uprenom= this.forminput.controls['uprenom'].value
    usr.utel= this.forminput.controls['utel'].value
    usr.umdp= this.forminput.controls['umdp'].value   
   
    this.userserv.ajouter(usr).subscribe(
       (u)=>(
        this.us=u
       )
    )
   
   if(this.forminput.valid){
      this.route.navigate(["/signin"])
    }
  }
}
