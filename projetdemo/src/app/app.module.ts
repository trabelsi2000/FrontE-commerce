import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SinginComponent } from './singin/singin.component';
import { SignupComponent } from './signup/signup.component';
import { HttpClientModule } from '@angular/common/http';
import { ListusersComponent } from './gestionuser/listusers/listusers.component';
import { AddcategorieComponent } from './gestioncategorie/addcategorie/addcategorie.component';
import { ListcategorieComponent } from './gestioncategorie/listcategorie/listcategorie.component';
import { UpdatecategorieComponent } from './gestioncategorie/updatecategorie/updatecategorie.component';
import { AddproduitComponent } from './gestionproduit/addproduit/addproduit.component';
import { UpdateproduitComponent } from './gestionproduit/updateproduit/updateproduit.component';
import { ListproduitComponent } from './gestionproduit/listproduit/listproduit.component';
import { AddimageComponent } from './gestionproduit/addimage/addimage.component';
import { HeadercltComponent } from './headerclt/headerclt.component';
import { ListproduitcategorieComponent } from './listproduitcategorie/listproduitcategorie.component';
import { PanierComponent } from './panier/panier.component';
import { UpdateuserComponent } from './gestionuser/updateuser/updateuser.component';
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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SinginComponent,
    SignupComponent,
    ListusersComponent,
    AddcategorieComponent,
    ListcategorieComponent,
    UpdatecategorieComponent,
    AddproduitComponent,
    UpdateproduitComponent,
    ListproduitComponent,
    AddimageComponent,
    HeadercltComponent,
    ListproduitcategorieComponent,
    PanierComponent,
    UpdateuserComponent,
    AdresscommandeComponent,
    CommandecltComponent,
    ListcommandeadminComponent,
    ListlivraisonComponent,
    AddadressComponent,
    AddlivraisonComponent,
    VoirlivraisoncltComponent,
    BannerComponent,
    HomeclientComponent,
    HomeadminComponent,
    HomenouvlistComponent,
    CarouselComponent,
    MoncompteComponent,
    ModifiermdpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
