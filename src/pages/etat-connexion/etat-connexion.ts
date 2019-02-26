import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
import { HomePage } from '../home/home';

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
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EtatConnexionPage');
  }

  next() {
    this.slides.slideNext();
  }
  nextTo(index,time){
    this.slides.slideTo(index, time);  

  }

  prev() {
    this.slides.slidePrev();
  }

  onGoToHome(){
    this.navCtrl.push(HomePage);
  }

  disableWifi(){

    WifiWizard2.disableWifi();

  }

  activateWifi(){

   //Forget wifi, si pas un bon password le wifi va etre enabled mais pas connecter au bon wifi. 
   this.nextTo(1, 1500); 
   var prom= WifiWizard2.connect("EBOX_NHH4", true, "15795ace5d55", "WPA", false);
  //Need to do then to get Promise result
  prom.then((result)  => {
   
      this.nextTo(2, 1500);  
    
  }).catch((rej) => {
    //here when you reject the promise
    this.nextTo(3,0);
  });

  }


}
