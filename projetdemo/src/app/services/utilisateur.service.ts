import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Utilisateur } from '../models/Utilisateur.model';
import { JwtResponse } from '../models/JwtResponse.model';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  items= new BehaviorSubject(0);
  counter=0
  constructor(private httpclt:HttpClient) { 
    this.items.subscribe(
      (x)=>{
        this.counter=x
      }
    )
  }

  incrimenter(){
    this.items.next(this.items.getValue()+1)
  }
 
  getAllUsers():Observable<Utilisateur[]>
  {
    return this.httpclt.get<Utilisateur[]>("http://localhost:8080/getallusers")
  }
  deleteUser(id:number):Observable<Object>
  {
    return this.httpclt.delete(`http://localhost:8080/deleteuserBI/${id}`)
  }
  updateUser(id:number,user:Utilisateur):Observable<Utilisateur>
  {
    return this.httpclt.put<Utilisateur>(`http://localhost:8080/updateuser/${id}`,user)
  }
  getUserById(id:number):Observable<Utilisateur>
  {
    return this.httpclt.get<Utilisateur>(`http://localhost:8080/getuserbyiduser/${id}`)
  }
  signup(user:Utilisateur):Observable<Object>{
    return this.httpclt.post<Object>("http://localhost:8080/signup",user)
  }
  connect(username:String,password:String):Observable<JwtResponse>{
    return this.httpclt.post<JwtResponse>("http://localhost:8080/signin",{username:username,password:password})
  }
  saveuser(jwt:string,username:string,roles:string[]){
    sessionStorage.setItem("jwt",jwt)
    sessionStorage.setItem("username",username)
    sessionStorage.setItem("roles",JSON.stringify(roles))
  }
  logout(){
    sessionStorage.clear()
  }
  isConnected(){
    if(sessionStorage.getItem("jwt")!=null){
      return true
    }
    else{
      return false
    }
  }
  isAdmin():boolean{
    let roles:string[]=JSON.parse(sessionStorage.getItem("roles")!)
    
    return roles.includes("ADMINISTRATEUR");
  }
}

