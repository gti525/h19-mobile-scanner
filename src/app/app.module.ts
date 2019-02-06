import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ParametresPage } from '../pages/parametres/parametres';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { EtatConnexionPage } from '../pages/etat-connexion/etat-connexion';
import { ConnexionPage } from '../pages/ConnexionPage/connexion';
import { ConfirmationPage } from '../pages/ConfirmationPage/ConfirmationPage';
import { nonValidePage } from '../pages/nonValidePage/nonValidePage';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    ParametresPage,
    EtatConnexionPage,
    ConnexionPage,
    ConfirmationPage,
    nonValidePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    ParametresPage,
    EtatConnexionPage,
    ConnexionPage,
    ConfirmationPage,
    nonValidePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
