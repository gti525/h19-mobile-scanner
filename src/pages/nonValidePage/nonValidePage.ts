import { ScannerPage } from "./../scanner/scanner";
import { NavParams } from "ionic-angular";
import { Component } from "@angular/core";
import { NavController } from "ionic-angular";

@Component({
  selector: "page-nonValidePage",
  templateUrl: "nonValidePage.html"
})
export class nonValidePage {
  ticketID: any;
  txt: string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.ticketID = navParams.get("ticketText");
    this.txt = navParams.get("text");
  }
  onGoToScanner() {
    this.navCtrl.push(ScannerPage);
  }
}
