import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import { ParametresPage } from '../parametres/parametres';
import { ConfirmationPage } from '../ConfirmationPage/ConfirmationPage';
import { EtatConnexionPage } from '../etat-connexion/etat-connexion';
import { nonValidePage } from '../nonValidePage/nonValidePage';
import { ScannerPage } from './../scanner/scanner';
import { RaspiApiProvider } from "./../../providers/raspi-api/raspi-api";
import { AlertController }  from 'ionic-angular';

@Component({
    selector: 'page-connexion',
    templateUrl: 'connexion.html'
})

export class ConnexionPage{


    public user;
    public password;

    constructor(public navCtrl: NavController, private serviceApi: RaspiApiProvider, private alertController:AlertController){
      
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

    popUpNonConnexion(){
      let alert = this.alertController.create({
        title: 'Oups!',
        message: "Identifiant ou mot de passe incorrect. Tapez l'ID utilisateur et le mot de passe corrects et réessayez.",
        buttons: ['Ok']
      });
      alert.present();

    }

    popUpErreurAPI(){
      let alert = this.alertController.create({
        title: 'Oh la la!',
        message: "Serveur indisponible.",
        buttons: ['Ok']
      });
      alert.present();

    }
    
    login(){
      // alert("login: "+this.user+" "+"password: "+this.password);
      this.serviceApi.login(this.user, this.password).then(
        result => {
          if (result == 200) {
            this.onGoToScannerPage();
          }       
          
        },
        err => {
          //Gestion de la mauvaise connexion ici, mauvaise user/mdp
          if (err == 404 || err == 400){
            this.popUpNonConnexion();
          }
          //API retourne un 500 ou tout autre code d'erreur.
          else{
            this.popUpErreurAPI();
          }
          console.log(err.status);
        }
      );
    }

}

