import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ParametresPage } from '../parametres/parametres';
import { ConfirmationPage } from '../ConfirmationPage/ConfirmationPage';
import { EtatConnexionPage } from '../etat-connexion/etat-connexion';
import { nonValidePage } from '../nonValidePage/nonValidePage';

@Component({
    selector: 'page-connexion',
    templateUrl: 'connexion.html'
})

export class ConnexionPage{

    constructor(public navCtrl: NavController){
        
    }
   onGoToParametre(){
        this.navCtrl.push(ParametresPage);
      }

    onGoToConfirmationPage(){
        this.navCtrl.push(ConfirmationPage);
    }
    
    onGoToEtatConnexion(){
        this.navCtrl.push(EtatConnexionPage);
      }

    onGoTononValidePage(){
        this.navCtrl.push(nonValidePage);
    }
} 

