import { RaspiApiProvider } from "./../../providers/raspi-api/raspi-api";
import { ConfirmationPage } from "./../ConfirmationPage/ConfirmationPage";
import { nonValidePage } from "./../nonValidePage/nonValidePage";
import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import {
  BarcodeScanner,
  BarcodeScannerOptions
} from "@ionic-native/barcode-scanner";
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
    idBillet: "3fa85f64-5717-4562-b3fc-2c963f66afa6"
  };
  ticketText: string;
  options: BarcodeScannerOptions;
  users: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private barcodeScanner: BarcodeScanner,
    private serviceApi: RaspiApiProvider
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad ScannerPage");
    // TODO: remove add ticket
    // this.addTicket();
    this.scanTicket();
  }

  goToValidTicket(barcodeData) {
    playPositive();
    this.navCtrl.push(ConfirmationPage, {
      ticketText: barcodeData.text
    });
  }

  goToInValidTicket(barcodeData) {
    playNegative();
    this.navCtrl.push(nonValidePage, {
      ticketText: barcodeData.text
    });
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
