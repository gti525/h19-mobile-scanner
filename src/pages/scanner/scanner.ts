import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { BarcodeScanner } from "@ionic-native/barcode-scanner";

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
  ticketData: {};
  ticketText: string;
  ticketFormat: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private barcodeScanner: BarcodeScanner
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad ScannerPage");
    this.scanTicket();
  }

  scanTicket() {
    this.barcodeScanner
      .scan()
      .then(barcodeData => {
        if (!barcodeData.cancelled) {
          this.ticketData = barcodeData;
          this.ticketText = barcodeData.text;
          this.ticketFormat = barcodeData.format;
        } else {
          alert("You have cancelled scan");
        }
      })
      .catch(err => {
        console.log("Error", err);
        alert("Error in the scanning");
      });
  }
}
