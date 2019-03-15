import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import * as SoundboardMapping from '../../models/soundboard.mapping';
import { Media, MediaObject } from '@ionic-native/media/ngx';

@IonicPage()
@Component({
  selector: 'page-soundboard',
  templateUrl: 'soundboard.html',
})
export class SoundboardPage {

  private soundboardData: SoundboardMapping.SoundboardMap[];
  private file: MediaObject;

  constructor(public navCtrl: NavController, public navParams: NavParams, private media: Media) {
    this.soundboardData = SoundboardMapping.SoundboardMock;
  }

  public playSound(ressource: string){
    if(this.file){
      this.file.stop();
      this.file.release();
    }

    this.file = this.media.create('./assets/' + ressource);
    this.file.play();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SoundboardPage');
  }

}
