import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SinginComponent } from './singin/singin.component';
import { SignupComponent } from './signup/signup.component';
import { ListusersComponent } from './gestionuser/listusers/listusers.component';
import { AddcategorieComponent } from './gestioncategorie/addcategorie/addcategorie.component';
import { ListcategorieComponent } from './gestioncategorie/listcategorie/listcategorie.component';
import { UpdatecategorieComponent } from './gestioncategorie/updatecategorie/updatecategorie.component';
import { AddproduitComponent } from './gestionproduit/addproduit/addproduit.component';
import { ListproduitComponent } from './gestionproduit/listproduit/listproduit.component';
import { UpdateproduitComponent } from './gestionproduit/updateproduit/updateproduit.component';
import { AddimageComponent } from './gestionproduit/addimage/addimage.component';
import { HeadercltComponent } from './headerclt/headerclt.component';
import { ListproduitcategorieComponent } from './listproduitcategorie/listproduitcategorie.component';
import { PanierComponent } from './panier/panier.component';
import { UpdateuserComponent } from './gestionuser/updateuser/updateuser.component';
import { authGuard } from './auth.guard';
import { AdresscommandeComponent } from './adresscommande/adresscommande.component';
import { CommandecltComponent } from './commandeclt/commandeclt.component';
import { ListcommandeadminComponent } from './gestioncommande/listcommandeadmin/listcommandeadmin.component';
import { ListlivraisonComponent } from './gestioncommande/listlivraison/listlivraison.component';
import { AddadressComponent } from './gestionuser/addadress/addadress.component';
import { AddlivraisonComponent } from './addlivraison/addlivraison.component';
import { VoirlivraisoncltComponent } from './voirlivraisonclt/voirlivraisonclt.component';
import { BannerComponent } from './banner/banner.component';
import { HomeclientComponent } from './homeclient/homeclient.component';
import { HomeadminComponent } from './homeadmin/homeadmin.component';
import { HomenouvlistComponent } from './homenouvlist/homenouvlist.component';
import { CarouselComponent } from './carousel/carousel.component';
import { MoncompteComponent } from './moncompte/moncompte.component';
import { ModifiermdpComponent } from './modifiermdp/modifiermdp.component';



const routes: Routes = [
  {path:"header", component:HeaderComponent },
  {path:"footer", component:FooterComponent},
  {path:"homenouvlist", component:HomenouvlistComponent},
  {path:"signin", component:SinginComponent},
  {path:"signup", component:SignupComponent},
  {path:"listusers", component:ListusersComponent, canActivate:[authGuard]},
  {path:"addcategorie", component:AddcategorieComponent},
  {path:"listcategorie", component:ListcategorieComponent, canActivate:[authGuard]},
  {path:"updatecategorie/:id", component:UpdatecategorieComponent, canActivate:[authGuard]},
  {path:"addproduit/:id", component:AddproduitComponent, canActivate:[authGuard]},
  {path:"listproduit", component:ListproduitComponent, canActivate:[authGuard]},
  {path:"updateproduit/:id", component:UpdateproduitComponent, canActivate:[authGuard]},
  {path:"addimage/:id", component:AddimageComponent, canActivate:[authGuard]},
  {path:"headerclt", component:HeadercltComponent},
  {path:"listproduitcategorie/:id", component:ListproduitcategorieComponent},
  {path:"panier/:id", component:PanierComponent,canActivate:[authGuard] },
  {path:"updateuser/:id", component:UpdateuserComponent, canActivate:[authGuard]},
  {path:"adresscommande/:id", component:AdresscommandeComponent},
  {path:"commandeclt/:id", component:CommandecltComponent, canActivate:[authGuard]},
  {path:"listcommandeadmin", component:ListcommandeadminComponent, canActivate:[authGuard]},
  {path:"listlivraison", component:ListlivraisonComponent, canActivate:[authGuard]},
  {path:"addadress/:id", component:AddadressComponent, canActivate:[authGuard]},
  {path:"addlivraison/:id", component:AddlivraisonComponent, canActivate:[authGuard]},
  {path:"banner", component:BannerComponent},
  {path:"", component:HomeclientComponent},
  {path:"homeadmin", component:HomeadminComponent, canActivate:[authGuard]},
  {path:"voirlivraisonclt", component:VoirlivraisoncltComponent, canActivate:[authGuard]},
  {path:"carousel", component:CarouselComponent},
  {path:"moncompte", component:MoncompteComponent, canActivate:[authGuard]},
  {path:"modifiermdp", component:ModifiermdpComponent, canActivate:[authGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }