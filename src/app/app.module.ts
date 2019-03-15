import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ParametresPage } from '../pages/parametres/parametres';
import { ScannerPage } from './../pages/scanner/scanner';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { EtatConnexionPage } from '../pages/etat-connexion/etat-connexion';
import { ConnexionPage } from '../pages/ConnexionPage/connexion';
import { ConfirmationPage } from '../pages/ConfirmationPage/ConfirmationPage';
import { nonValidePage } from '../pages/nonValidePage/nonValidePage';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Media} from '@ionic-native/media/ngx';
import { SoundboardPage } from '../pages/soundboard/soundboard';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ParametresPage,
    EtatConnexionPage,
    ConnexionPage,
    ConfirmationPage,
    nonValidePage,
    ScannerPage,
    SoundboardPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ParametresPage,
    EtatConnexionPage,
    ConnexionPage,
    ConfirmationPage,
    nonValidePage,
    ScannerPage,
    SoundboardPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    BarcodeScanner,
    Media,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
