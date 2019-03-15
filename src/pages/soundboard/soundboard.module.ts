import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SoundboardPage } from './soundboard';

@NgModule({
  declarations: [
    SoundboardPage,
  ],
  imports: [
    IonicPageModule.forChild(SoundboardPage),
  ],
})
export class SoundboardPageModule {}
