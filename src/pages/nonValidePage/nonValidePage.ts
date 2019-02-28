import { NavParams } from 'ionic-angular';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EtatConnexionPage } from '../etat-connexion/etat-connexion';

@Component({
    selector: 'page-nonValidePage',
    templateUrl: 'nonValidePage.html'
})

export class nonValidePage{
    ticketID: string;

    constructor(public navCtrl: NavController, public navParams:NavParams){
      this.ticketID = navParams.get('ticketText');
    }
    onGoToEtatConnexion(){
        this.navCtrl.push(EtatConnexionPage);
      }
}

