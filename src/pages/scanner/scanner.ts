import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { BarcodeScanner, BarcodeScannerOptions } from "@ionic-native/barcode-scanner";
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
  ticketId: string;
  ticketStatus: string;
  isValidTicket: boolean;
  options: BarcodeScannerOptions;
  ticketTitle: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private barcodeScanner: BarcodeScanner
  ) { this.scanTicket();}



  scanTicket() {
    this.options = {
      prompt: "Placez le code barre dans la zone rectangulaire"
    };
    this.barcodeScanner
      .scan(this.options)
      .then(barcodeData => {
        if (!barcodeData.cancelled) {
          // TODO: the code should coe from the API
          let code = "ed36a534-3acd-11e9-b210-d663bd873d93"
          // If the ticket is valid
          if(barcodeData.text == code ){
              this.ticketId = barcodeData.text
              this.isValidTicket = true;
              this.ticketTitle = "Billet valide"
          }
          // If the ticket is not valid
          else{
              this.ticketTitle = "Billet non valide"
              this.ticketId = barcodeData.text
              this.isValidTicket = false;
          }
        }
      })
      .catch(err => {
        this.ticketStatus = "Echec "+ err;
      });
  }
}
