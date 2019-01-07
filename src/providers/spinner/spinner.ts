import { HttpClient } from '@angular/common/http';
import { Injectable, NgModule } from '@angular/core';
import { LoadingController, Loading } from 'ionic-angular';

/*
  Generated class for the SpinnerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SpinnerProvider {
  private spinner : Loading = null;
  constructor(public loading : LoadingController) {
    console.log('Hello SpinnerProvider Provider');
  }

  Show(message: string) {
    if (this.spinner == null){
      this.spinner = this.loading.create({content: (message || 'Carregando')})
      this.spinner.present();
    } else {
      this.spinner.data.content = message;
    }
  }

  Hide(){
    if (this.spinner != null){
      this.spinner.dismiss();
      this.spinner = null;
    }
  }
}
