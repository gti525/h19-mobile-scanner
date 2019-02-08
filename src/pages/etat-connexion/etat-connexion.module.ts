import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EtatConnexionPage } from './etat-connexion';

@NgModule({
  declarations: [
    EtatConnexionPage,
  ],
  imports: [
    IonicPageModule.forChild(EtatConnexionPage),
  ],
})
export class EtatConnexionPageModule {}
