import { Commande } from "./Commande.model"


export class Livraison{
    idliv!:number
    etatLiv!:string
    fraisLiv!:number
    prixtot!:number
    delaisLiv!:string
    commande!:Commande
}