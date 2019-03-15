import { ConfirmationPage } from './../ConfirmationPage/ConfirmationPage';
import { nonValidePage } from './../nonValidePage/nonValidePage';
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
  ticketText: string;
  ticketFormat: string;
  ticketStatus: string;
  options: BarcodeScannerOptions;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private barcodeScanner: BarcodeScanner
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad ScannerPage");
    this.scanTicket();
  }

  goToInvalidTicket(){
    this.navCtrl.push(nonValidePage);
  }


  goToValidTicket(){
    this.navCtrl.push(ConfirmationPage);
  }
  
  playAudio(sound){
    let audio = new Audio();
    if (sound = "positive"){
      alert(sound)
      audio.src = "/assets/sounds/positive.wav";
    }
    else{
      alert(sound)
      audio.src = "/assets/sounds/negative.wav";
    }
    audio.load();
    audio.play();
  }


  scanTicket() {
    this.options = {
      prompt: "Placez le code barre dans la zone rectangulaire",
      disableSuccessBeep: false
    };
    this.barcodeScanner
      .scan(this.options)
      .then(barcodeData => {
        if (!barcodeData.cancelled) {
          // TODO: the code should coe from the API
          let code = "ed36a534-3acd-11e9-b210-d663bd873d93"
          if(barcodeData.text == code ){
              this.playAudio("positive");
              this.navCtrl.push(ConfirmationPage, {
                ticketText: barcodeData.text
              });
          }
          else{
            this.playAudio("negative");
            this.navCtrl.push(nonValidePage, {
              ticketText: barcodeData.text
            });
          }
        }
      })
      .catch(err => {
        this.ticketStatus = "Echec "+ err;
      });
  }
}
