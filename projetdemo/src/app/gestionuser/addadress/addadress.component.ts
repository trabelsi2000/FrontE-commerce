import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Adresse } from 'src/app/models/Adresse.model';
import { AdresseService } from 'src/app/services/adresse.service';

@Component({
  selector: 'app-addadress',
  templateUrl: './addadress.component.html',
  styleUrls: ['./addadress.component.css']
})
export class AddadressComponent implements OnInit{
  
  adress!:Adresse
  id!:number
  iduser!:number
  constructor(private route:ActivatedRoute,private router:Router,private adressserv:AdresseService){

  }
  ngOnInit(): void {
    this.adress= new Adresse();
    this.id=this.route.snapshot.params['id'];
    this.iduser=JSON.parse(sessionStorage.getItem("userId")!)
  }

  onSubmit(){
    this.adressserv.addAdressToUser(this.iduser,this.adress).subscribe(data=>{
      this.confirmAdress();
    }, error => console.log(error));
  }

  confirmAdress(){
      this.router.navigate(['/commandeclt',this.id])
  }
  
}
