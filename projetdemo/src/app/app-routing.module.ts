import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { SinginComponent } from './singin/singin.component';
import { SignupComponent } from './signup/signup.component';
import { ListusersComponent } from './listusers/listusers.component';
import { ListpaiementsComponent } from './listpaiements/listpaiements.component';
import { ListpaniersComponent } from './listpaniers/listpaniers.component';
import { ListcommandesComponent } from './listcommandes/listcommandes.component';
import { ListlivraisonsComponent } from './listlivraisons/listlivraisons.component';
import { ListadressesComponent } from './listadresses/listadresses.component';
import { ListrolesComponent } from './listroles/listroles.component';
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

const routes: Routes = [
  {path:"header", component:HeaderComponent},
  {path:"footer", component:FooterComponent},
  {path:"", component:HomeComponent},
  {path:"signin", component:SinginComponent},
  {path:"signup", component:SignupComponent},
  {path:"listusers", component:ListusersComponent},
  {path:"listroles", component:ListrolesComponent},
  {path:"listpaiements", component:ListpaiementsComponent},
  {path:"listpaniers", component:ListpaniersComponent},
  {path:"listcommandes", component:ListcommandesComponent},
  {path:"listlivraisons", component:ListlivraisonsComponent},
  {path:"listadresses", component:ListadressesComponent},
  {path:"addcategorie", component:AddcategorieComponent},
  {path:"listcategorie", component:ListcategorieComponent},
  {path:"updatecategorie/:id", component:UpdatecategorieComponent},
  {path:"addproduit/:id", component:AddproduitComponent},
  {path:"listproduit", component:ListproduitComponent},
  {path:"updateproduit/:id", component:UpdateproduitComponent},
  {path:"addimage/:id", component:AddimageComponent},
  {path:"headerclt", component:HeadercltComponent},
  {path:"listproduitcategorie/:id", component:ListproduitcategorieComponent},
  {path:"panier/:id", component:PanierComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
