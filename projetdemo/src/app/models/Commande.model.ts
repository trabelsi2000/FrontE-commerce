import { Livraison } from "./Livraison.model"
import { Panier } from "./Panier.model"

export class Commande{
    cmdId!:number
    cmdDate!:Date
    etatCmd!:string
    nomUtil!:String
    nom!:String
    prenom!:String
    emailadr!:String
    tel!:number
    pan!:Panier
    livraison!:Livraison
}