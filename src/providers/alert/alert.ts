import { Injectable } from '@angular/core';
import { AlertController, ToastController } from 'ionic-angular';

/*
  Generated class for the AlertProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AlertProvider {

  constructor(private alert : AlertController, private toast : ToastController) {
  }

  showToast(title: string, position: string){
    this.toast.create({message: title, position: position, duration: 3000}).present();
  }

  showAlert(title: string, message: string){
    this.alert.create({
      message: message, 
      title: title, 
      buttons: ['Ok'], 
      enableBackdropDismiss: false
    }).present();
  }

  showConfirm(title: string, message: string, callback: any){
    this.alert.create({
      title: title, 
      message: message, 
      buttons: [
        {
          text: "Não", role: 'Cancel', handler: () => {
            console.log('asiduh');
          }
        },
        {
          text: "Sim", handler: () =>{
            callback();
          }
        }
      ]
    }).present();
  }

}
