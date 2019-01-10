import { UsuarioProvider } from './../../providers/usuario/usuario';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  form: any = {};
  constructor(public navCtrl: NavController, public navParams: NavParams, private usuario: UsuarioProvider) {
  }

  ionViewDidLoad() {
  }

  async login():Promise<void>{
    let result = await this.usuario.autenticar(this.form.email, this.form.senha);
    if (result.success){
      UsuarioProvider.registerLogin(result.data);
      this.navCtrl.setRoot('CategoriaPage');
    }
  }

  cadastre(){
    this.navCtrl.setRoot('CadastroPage');
  }

}
