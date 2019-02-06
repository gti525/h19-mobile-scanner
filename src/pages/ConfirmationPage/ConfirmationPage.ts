import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EtatConnexionPage } from '../etat-connexion/etat-connexion';

@Component({
    selector: 'page-ConfirmationPage',
    templateUrl: 'ConfirmationPage.html'
})

export class ConfirmationPage{

    constructor(public navCtrl: NavController){
        
    }
    onGoToEtatConnexion(){
        this.navCtrl.push(EtatConnexionPage);
      }
} 

