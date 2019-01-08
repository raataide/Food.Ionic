import { AlertProvider } from './../../providers/alert/alert';
import { UsuarioProvider } from './../../providers/usuario/usuario';
import { UsuarioModel } from './../../app/models/usuarioModel';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage {

  usuario: UsuarioModel = new UsuarioModel();

  constructor(public navCtrl: NavController, public navParams: NavParams, private usuarioP: UsuarioProvider, private alert: AlertProvider) {
  }  

  async salvar(){
    let result = await this.usuarioP.register(this.usuario);
    if (result.success){
      this.alert.showToast('Cadastro realizado com sucesso.','bottom');
      this.navCtrl.setRoot('LoginPage');
    }
  }

  cancelar(){
    this.navCtrl.setRoot('LoginPage');
  }
}
