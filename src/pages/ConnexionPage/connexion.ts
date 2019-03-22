import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ParametresPage } from '../parametres/parametres';
import { ConfirmationPage } from '../ConfirmationPage/ConfirmationPage';
import { EtatConnexionPage } from '../etat-connexion/etat-connexion';
import { nonValidePage } from '../nonValidePage/nonValidePage';
import { ScannerPage } from './../scanner/scanner';
import { RaspiApiProvider } from "./../../providers/raspi-api/raspi-api";

@Component({
    selector: 'page-connexion',
    templateUrl: 'connexion.html'
})

export class ConnexionPage{


    public user;
    public password;

    constructor(public navCtrl: NavController, private serviceApi: RaspiApiProvider){
      
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

    onGoToScannerPage(){
      this.navCtrl.push(ScannerPage);
    }
    
    login(){
      this.serviceApi.login(this.user, this.password).then(
        result => {
          // TODO: remove alert
          alert(result);
          if (result == 200) {
            alert("Allo! Vous etes connecté");
            this.onGoToEtatConnexion();
          }
          else{

            alert("Vous ne pouvez pas vous connecter");

          }
          
          
        },
        err => {
          console.log(err.status);
        }
      );
    }

}

