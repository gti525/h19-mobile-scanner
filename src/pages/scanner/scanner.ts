import { RaspiApiProvider } from "./../../providers/raspi-api/raspi-api";
import { ConfirmationPage } from "./../ConfirmationPage/ConfirmationPage";
import { nonValidePage } from "./../nonValidePage/nonValidePage";
import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import {
  BarcodeScanner,
  BarcodeScannerOptions
} from "@ionic-native/barcode-scanner";
import { EtatConnexionPage } from "./../etat-connexion/etat-connexion";
/**
 * Generated class for the ScannerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-scanner",
  templateUrl: "scanner.html"
})
export class ScannerPage {
  ticketText: string;
  options: BarcodeScannerOptions;
  sucessConnexion : boolean;
  codescanner: string;
  txtInvalide: string;


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private barcodeScanner: BarcodeScanner,
    private serviceApi: RaspiApiProvider
  ) {
    // this.sucessConnexion = navParams.get("sucessConnexion");
  }

  ionViewDidLoad() {
      this.scanTicket();

  }

  goToValidTicket(barcodeData) {
    this.playPositive();
    this.navCtrl.push(ConfirmationPage, {
      ticketText: this.codescanner
    });
  }

  goToInValidTicket(barcodeData) {
    let txt: string;
    this.playNegative();
    this.navCtrl.push(nonValidePage, {
      ticketText: this.codescanner,
      text: this.txtInvalide
    });
  }

  onGoToEtatConnexion() {
    this.navCtrl.push(EtatConnexionPage);
  }

  playPositive() {
    let audio = new Audio();
    audio.src = "/assets/sounds/positive.wav";
    audio.load();
    audio.play();
  }

  playNegative() {
    let audio = new Audio();
    audio.src = "/assets/sounds/negative.wav";
    audio.load();
    audio.play();
  }

  scanTicket() {
    this.options = {
      prompt: "Placez le code barre dans la zone rectangulaire",
      disableSuccessBeep: true
    };
    this.barcodeScanner
      .scan(this.options)
      .then(barcodeData => {
        if (!barcodeData.cancelled) {
          let ticketData = {
            uuid: barcodeData.text
          };
          //Requete API
          this.codescanner = barcodeData.text;
          this.addTicket(ticketData);
        }
      })
      .catch(err => {
        console.log("Echec " + err);
      });
  }

  // Use the post from the raspi API
  addTicket(ticket) {
    this.serviceApi.addTicket(ticket).then(
      result => {
        if (result == 200) {
          this.goToValidTicket(ticket.idBillet);
        }

      },
      err => {
        if (err == 500 || err == 404 || err == 400) {
          this.txtInvalide = "Ce billet est invalide";
          this.goToInValidTicket(ticket.idBillet);
        }
        if (err == 409) {
          this.txtInvalide = "Ce billet à déja été scanné";
          this.goToInValidTicket(ticket.idBillet);
        }
        else {
          this.txtInvalide = "Erreur.";
          this.goToInValidTicket(ticket.idBillet);
        }
        console.log(err.status);
      }
    );
  }
}
