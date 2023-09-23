import { Component, OnInit } from '@angular/core';
import { Utilisateur } from '../models/Utilisateur.model';
import { UtilisateurService } from '../services/utilisateur.service';
import { Router } from '@angular/router';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modifiermdp',
  templateUrl: './modifiermdp.component.html',
  styleUrls: ['./modifiermdp.component.css']
})
export class ModifiermdpComponent implements OnInit{

  forminput!:FormGroup
  id!:number
  user!:Utilisateur
  constructor(private fb:FormBuilder,private route:Router,private userserv:UtilisateurService){
  }
    
  
  ngOnInit(): void {
    this.user=new Utilisateur()
    this.id=this.userserv.getUserId()

    this.forminput=this.fb.group(
      { "ancienpassword":["",Validators.required],
        "password":["",Validators.required],
        "confirmPassword": ['', [Validators.required]]

    }, {
      validator: this.passwordMatchValidator
    })
  }
  passwordMatchValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');
  
    if (!password || !confirmPassword) {
      return null; // No validation if controls are null
    }
  
    if (password.value !== confirmPassword.value) {
      return { 'passwordMismatch': true };
    }
  
    return null;
  }
  register(){
    let usr = new Utilisateur()

    usr.password= this.forminput.controls['password'].value   
   
    this.userserv.updateUser(this.id,this.user).subscribe(
      () => {
        
      },
      (error) => console.log(error)
    )
   
   if(this.forminput.valid){
    this.route.navigate(['/moncompte'])
    }
  }

}
