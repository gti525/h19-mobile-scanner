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
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.ticketID = navParams.get("ticketText");
  }
  onGoToScanner() {
    this.navCtrl.push(ScannerPage);
  }
}
