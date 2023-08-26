import { Component, OnInit } from '@angular/core';
import { Utilisateur } from '../models/Utilisateur.model';
import { UtilisateurService } from '../services/utilisateur.service';

@Component({
  selector: 'app-listusers',
  templateUrl: './listusers.component.html',
  styleUrls: ['./listusers.component.css']
})
export class ListusersComponent implements OnInit{

  listusr:Utilisateur[]=[]
  constructor(private userserv:UtilisateurService){

  }
  ngOnInit(): void {
    this.userserv.getAllUsers().subscribe(
      (tab)=>(
        this.listusr=tab
      )
    )
  }
}
