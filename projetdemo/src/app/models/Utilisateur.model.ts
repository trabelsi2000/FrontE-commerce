import { Adresse } from "./Adresse.model"
import { Panier } from "./Panier.model"
import { Role } from "./Role.model"

export class Utilisateur{
    uid!:number
    username!:string
    unom!:string
    uprenom!:string
    uemail!:string
    utel!:number
    umdp!:string
    listroles!:Role[]
    p!:Panier
    adresse!:Adresse
}