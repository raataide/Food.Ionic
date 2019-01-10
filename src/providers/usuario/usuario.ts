import { HttpResultModel } from './../../app/models/HttpResultModel';
import { Config } from './../../app/helpers/config';
import { HttpProvider } from './../http/http';
import { UsuarioModel } from './../../app/models/usuarioModel';
import { Injectable } from '@angular/core';
import { ProviderBase } from '../../app/base/providerBase';


@Injectable()
export class UsuarioProvider extends ProviderBase<UsuarioModel>{
  url = `${Config.Url}usuario`;
  constructor(public http: HttpProvider) {
    super(`${Config.Url}usuario`,http);
  }

  async autenticar(email,senha):Promise<HttpResultModel>{
    return this.http.post(`${this.url}/autenticar`, {email:email, senha:senha});
  }

  async register(usuario: UsuarioModel):Promise<HttpResultModel>{
    return this.http.post(`${this.url}/register`, usuario);
  }

  static registerLogin(data){
    localStorage.setItem(Config.storageKeys.token,data.token);
    localStorage.setItem(Config.storageKeys.user,JSON.stringify(data.usuario));
  }

  static get IsLogado(){
    return (localStorage.getItem(Config.storageKeys.token) != undefined);
  }

}
