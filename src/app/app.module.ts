import { HttpClientModule } from '@angular/common/http';
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
import { RaspiApiProvider } from '../providers/raspi-api/raspi-api';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ParametresPage,
    EtatConnexionPage,
    ConnexionPage,
    ConfirmationPage,
    nonValidePage,
    ScannerPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
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
    ScannerPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    BarcodeScanner,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RaspiApiProvider
  ]
})
export class AppModule {}
