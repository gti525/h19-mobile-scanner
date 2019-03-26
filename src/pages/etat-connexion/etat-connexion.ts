import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Platform } from 'ionic-angular';
import { ScannerPage } from '../scanner/scanner';
import { AlertController } from 'ionic-angular';
import { ConnexionPage } from '../ConnexionPage/connexion';

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
  // sucessConnexion: boolean;
  constructor(public navCtrl: NavController, public navParams: NavParams, public platform: Platform, private alertController:AlertController) {
  }
  
  openPasswordAlert() {
    let alert = this.alertController.create({
      title: 'Mot de passe',
      message: "Veuillez entrer le mot de passe du WiFi GTI525.",
      inputs: [
       {
          name: 'password',
          placeholder: 'Password',
          type: 'password'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Connexion',
          handler: data => {
            this.activateWifi(data.password);
          }
        }
      ]
    });
    alert.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EtatConnexionPage');

    this.slides.lockSwipes(true);


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

  onGoToScanner() {
    this.navCtrl.push(ScannerPage);
  }
  onGoToConnexion(){
    this.navCtrl.push(ConnexionPage);
  }

  retryConnexion(){
    this.slides.lockSwipes(false);
    this.nextTo(0, 0);

  }

  //Listener, locks swipes
  slideChanged() {
    switch (this.slides.getActiveIndex()) {
      case 0: {
        break;
      }
      case 1: {
        this.slides.lockSwipes(true);
        break;
      }
      case 2: {
        this.slides.lockSwipeToPrev(true);
        break;
      }
      case 3: {
        this.slides.lockSwipes(true);
        break;
      }
      case 3: {
        this.slides.lockSwipes(true);
        break;
      }
      default: {
        //statements; 
        break;
      }
    }

  }

  disableWifi() {

    WifiWizard2.disableWifi();

  }

  activateWifi(wifiPassword) {
    var prom;
    this.slides.lockSwipes(false);
    this.nextTo(1, 1000);
    if (this.platform.is('android')) {
      prom = WifiWizard2.connect("GTI525", true, wifiPassword, "WPA", false);
      prom.then((result) => {
        this.slides.lockSwipes(false);
        this.nextTo(2, 1000);

      }).catch((rej) => {
        this.slides.lockSwipes(false);
        this.nextTo(3, 0);
      });

    }
    if (this.platform.is('ios')) {
      prom = WifiWizard2.iOSConnectNetwork("GTI525", wifiPassword);
      prom.then((result) => {
        this.slides.lockSwipes(false);
        this.nextTo(2, 1500);

      }).catch((rej) => {
        this.slides.lockSwipes(false);
        this.nextTo(3, 0);
      });

    }
  }

}
