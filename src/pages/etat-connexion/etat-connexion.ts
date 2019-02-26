import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Platform } from 'ionic-angular';

declare var WifiWizard2: any;
/**
 * Generated class for the EtatConnexionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-etat-connexion',
  templateUrl: 'etat-connexion.html',
})
export class EtatConnexionPage {
  @ViewChild('slides') slides: Slides;

  constructor(public navCtrl: NavController, public navParams: NavParams, public platform: Platform) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EtatConnexionPage');
  }

  next() {
    this.slides.slideNext();
  }
  nextTo(index, time) {
    this.slides.slideTo(index, time);

  }

  prev() {
    this.slides.slidePrev();
  }

  onGoToHome() {
    this.navCtrl.push(HomePage);
  }

  disableWifi() {

    WifiWizard2.disableWifi();

  }

  activateWifi() {
    var prom;
    this.nextTo(1, 1500);
    if (this.platform.is('android')) {
      prom = WifiWizard2.connect("EBOX_NHH4", true, "xxx", "WPA", false);
      prom.then((result) => {

        this.nextTo(2, 1500);

      }).catch((rej) => {
        //here when you reject the promise
        //Should move to a separate page
        this.nextTo(3, 0);
      });

    }
    if (this.platform.is('ios')) {
      prom = WifiWizard2.iOSConnectNetwork("EBOX_NHH4", "xxx");

      prom.then((result) => {

        this.nextTo(2, 1500);

      }).catch((rej) => {
        //here when you reject the promise
        //Should move to a separate page
        this.nextTo(3, 0);
      });

    }
  }


}
