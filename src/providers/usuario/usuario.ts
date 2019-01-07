import { Config } from './../../app/helpers/config';
import { HttpProvider } from './../http/http';
import { UsuarioModel } from './../../app/models/usuarioModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProviderBase } from '../../app/base/providerBase';

/*
  Generated class for the UsuarioProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UsuarioProvider extends ProviderBase<UsuarioModel>{

  constructor(public http: HttpProvider) {
    super(`${Config.Url}usuario`,http);
  }

}
