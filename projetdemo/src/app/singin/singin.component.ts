import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-singin',
  templateUrl: './singin.component.html',
  styleUrls: ['./singin.component.css']
})
export class SinginComponent implements OnInit{
 
  forminput!:FormGroup
  constructor(private fb:FormBuilder,private route:Router) {
    
  }
  ngOnInit(): void {
    this.forminput=this.fb.group(
      {"email":["",[Validators.required,Validators.email]],
      "password":["",Validators.required]

    })
  }
  onsubmit(){
    if(this.forminput.valid){
      this.route.navigate(["/"])
    }
  }
}
