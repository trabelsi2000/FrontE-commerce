import { Component, OnInit } from '@angular/core';
import { CommandeService } from '../services/commande.service';
import { Commande } from '../models/Commande.model';

@Component({
  selector: 'app-voirlivraisonclt',
  templateUrl: './voirlivraisonclt.component.html',
  styleUrls: ['./voirlivraisonclt.component.css']
})
export class VoirlivraisoncltComponent implements OnInit{

  listcmd:Commande[]=[]
  username!:String
  constructor(private cmdserv:CommandeService){

  }
  ngOnInit(): void {
     this.username=sessionStorage.getItem("username")!;
     this.VoirLivraison()
  }

  private VoirLivraison(){
    this.cmdserv.getAllCommandeByUsername(this.username).subscribe((data)=>{
      this.listcmd=data
      console.log(data)
    })
  }
}
