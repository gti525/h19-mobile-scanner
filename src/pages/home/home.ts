import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ConnexionPage } from '../ConnexionPage/connexion';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  onGoToConnexion(){
    this.navCtrl.push(ConnexionPage);
  }
}
