import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EtatConnexionPage } from '../etat-connexion/etat-connexion';

@Component({
    selector: 'page-nonValidePage',
    templateUrl: 'nonValidePage.html'
})

export class nonValidePage{

    constructor(public navCtrl: NavController){
        
    }
    onGoToEtatConnexion(){
        this.navCtrl.push(EtatConnexionPage);
      }
} 

