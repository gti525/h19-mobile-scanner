import { RaspiApiProvider } from "./../../providers/raspi-api/raspi-api";
import { ConfirmationPage } from "./../ConfirmationPage/ConfirmationPage";
import { nonValidePage } from "./../nonValidePage/nonValidePage";
import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import {
  BarcodeScanner,
  BarcodeScannerOptions
} from "@ionic-native/barcode-scanner";
import { EtatConnexionPage } from './../etat-connexion/etat-connexion';
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
  ticketData = {
    idMobile: "hey",
    idBillet: "ed36a534-3acd-11e9-b210-d663bd873d93"
  };
  ticketText: string;
  options: BarcodeScannerOptions;
  // TODO: get value from etat-connexion
  sucessConnexion = true;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private barcodeScanner: BarcodeScanner,
    private serviceApi: RaspiApiProvider
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad ScannerPage");
    if(this.sucessConnexion){
      this.scanTicket();
    }
  }

  goToValidTicket(barcodeData) {
    this.playPositive();
    this.navCtrl.push(ConfirmationPage, {
      ticketText: barcodeData.text
    });
  }

  goToInValidTicket(barcodeData) {
    this.playNegative();
    this.navCtrl.push(nonValidePage, {
      ticketText: barcodeData.text
    });
  }

  onGoToEtatConnexion(){
    this.navCtrl.push(EtatConnexionPage);
  }

  playPositive(){
    let audio = new Audio();
    audio.src = "/assets/sounds/positive.wav";
    audio.load();
    audio.play();
  }

  playNegative(){
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
          // TODO: Call addTicket API
          // TODO: Pass code of QR and the device ID
          // TODO: Important! C07 has ticket been already scan?
          let code = "ed36a534-3acd-11e9-b210-d663bd873d93";
          if (barcodeData.text == code) {
            this.goToValidTicket(barcodeData);
          } else {
            this.goToInValidTicket(barcodeData);
          }
        }
      })
      .catch(err => {
        console.log("Echec " + err);
      });
  }

  // Use the post from the raspi API
  addTicket() {
    this.serviceApi.addTicket(this.ticketData).then(
      result => {
        console.log(result);
      },
      err => {
        console.log(err.status);
      }
    );
  }
}
