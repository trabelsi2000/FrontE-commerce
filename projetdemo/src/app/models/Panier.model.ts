import { Commande } from "./Commande.model"
import { Ligne_panier } from "./Ligne_panier.model"
import { Utilisateur } from "./Utilisateur.model"

export class Panier{

    idpanier!:number
    montantTot!:number
    user!:Utilisateur
    listprods!:Ligne_panier[]
}