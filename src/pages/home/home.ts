import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EtatConnexionPage } from '../etat-connexion/etat-connexion';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {


  }
  
  onGoToEtatConnexion(){
    this.navCtrl.push(EtatConnexionPage);
  }

}
