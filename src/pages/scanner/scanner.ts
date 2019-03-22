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

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private barcodeScanner: BarcodeScanner,
    private serviceApi: RaspiApiProvider
  ) {
    this.sucessConnexion = navParams.get("sucessConnexion");
  }

  ionViewDidLoad() {
    this.sucessConnexion =true;
    if (this.sucessConnexion) {
      this.scanTicket();
    }
  }

  goToValidTicket(barcodeData) {
    this.playPositive();
    this.navCtrl.push(ConfirmationPage, {
      ticketText: barcodeData.text
    });
  }

  goToInValidTicket(barcodeData, code) {
    let txt: string;
    if (code == 400) {
      txt = "Ce billet a déjà été scanné.";
    }
    if (code == 409) {
      txt = "Billet Invalide";
    }
    this.playNegative();
    this.navCtrl.push(nonValidePage, {
      ticketText: barcodeData.text,
      text: txt
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
            idMobile: "",
            idBillet: barcodeData.text
          };
          //Requete API
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
        // TODO: remove alert
        alert(result);
        if (result == 200) {
          this.goToValidTicket(ticket.idBillet);
        }
        if (result == 400) {
          this.goToInValidTicket(ticket.idBillet, 400);
        }
        if (result == 409) {
          this.goToInValidTicket(ticket.idBillet, 409);
        }
      },
      err => {
        console.log(err.status);
      }
    );
  }
}
