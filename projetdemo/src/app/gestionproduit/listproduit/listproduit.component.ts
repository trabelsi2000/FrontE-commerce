import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produit } from 'src/app/models/Produit.model';
import { ProduitService } from 'src/app/services/produit.service';


@Component({
  selector: 'app-listproduit',
  templateUrl: './listproduit.component.html',
  styleUrls: ['./listproduit.component.css']
})
export class ListproduitComponent implements OnInit{

  Alert: boolean = false;
  listproduits:Produit[]=[]
  constructor(private prodserv:ProduitService,private route:Router){}

  ngOnInit(): void {
    this.prodserv.getAllprods().subscribe(
      (tab)=>(
        this.listproduits=tab
      )
    )
  }

  deleteProduit(catid:number){
    this.prodserv.deleteProduit(catid).subscribe(data => {
      console.log(data);
      this.prodserv.getAllprods();
    })
    setTimeout(() => {
      this.Alert = true;
      setTimeout(() => {
        location.reload();
      }, 2000);
    }, 0);
    }
  
    updateProduit(id:number){
      this.route.navigate(['/updateproduit',id])
    }

    addImage(id:number){
      this.route.navigate(['/addimage',id]) 
    }
    
    
}
