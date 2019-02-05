import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ParametresPage } from '../pages/parametres/parametres';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ConnexionPage } from '../pages/ConnexionPage/connexion';
import { ConfirmationPage } from '../pages/ConfirmationPage/ConfirmationPage';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    ParametresPage,
    ConnexionPage,
    ConfirmationPage
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
    ConnexionPage,
    ConfirmationPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
