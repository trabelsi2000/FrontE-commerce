import { Component, OnInit } from '@angular/core';
import { Utilisateur } from '../models/Utilisateur.model';
import { UtilisateurService } from '../services/utilisateur.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-moncompte',
  templateUrl: './moncompte.component.html',
  styleUrls: ['./moncompte.component.css']
})
export class MoncompteComponent implements OnInit{

  
  id!:number;
  user!:Utilisateur;
  constructor(private userserv:UtilisateurService,private router:Router){}

  ngOnInit(): void {
    this.user=new Utilisateur;
    this.id=this.userserv.getUserId();
    
   this.userserv.getUserById(this.id).subscribe(data =>{
    this.user=data;
   }, error => console.log(error));
  }
 
  onSubmit(){
   this.userserv.updateUser(this.id,this.user).subscribe(data=>{
    this.goToUserList();
 }, error => console.log(error));
    
  }
  
  goToUserList(){
    this.router.navigate(['/'])
  }

  goTomodifmdp(){
     this.router.navigate(['/modifiermdp'])
  }
}