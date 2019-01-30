import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the ParametrePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-parametre',
  templateUrl: 'parametre.html',
})
export class ParametresPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ParametrePage');
  }

   /**
   * Méthode qui sert à utiliser l'objet de type NavController pour pousser vers la page d'accueil qui 
   * a été importée en haut.
   */
  onGoToHome() {
    this.navCtrl.push(HomePage);
  }

}
