import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProduitService } from 'src/app/services/produit.service';

@Component({
  selector: 'app-addimage',
  templateUrl: './addimage.component.html',
  styleUrls: ['./addimage.component.css']
})
export class AddimageComponent implements OnInit {

  id!:number
  constructor(private prodserv:ProduitService,private route:ActivatedRoute){

  }
  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
  }
  onFileSelected(event: any, id: number) {
    const file = event.target.files[0];
    if (file) {
      this.prodserv.addImageToProduct(this.id, file).subscribe(
        (response) => {
          // Handle the response from the Spring Boot service
          console.log('Image uploaded successfully:', response);
        },
        (error) => {
          // Handle any errors
          console.error('Error uploading image:', error);
        }
      );
    }
  }
}
