import { Camera } from '@ionic-native/camera';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Network } from '@ionic-native/network';

import { MyApp } from './app.component';
import { SpinnerProvider } from '../providers/spinner/spinner';
import { AlertProvider } from '../providers/alert/alert';
import { HttpProvider } from '../providers/http/http';
import { NetworkProvider } from '../providers/network/network';
import { UsuarioProvider } from '../providers/usuario/usuario';
import { CategoriaProvider } from '../providers/categoria/categoria';
import { CameraProvider } from '../providers/camera/camera';

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,    
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SpinnerProvider,
    AlertProvider,
    HttpProvider,
    NetworkProvider,
    CameraProvider,
    UsuarioProvider,
    CategoriaProvider,
    CameraProvider,
    Camera,
    Network
  ]
})
export class AppModule {}
