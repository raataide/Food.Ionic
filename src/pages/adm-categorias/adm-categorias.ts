import { CategoriaProvider } from './../../providers/categoria/categoria';
import { CategoriaModel } from './../../app/models/categoriaModel';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AdmCategoriasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-adm-categorias',
  templateUrl: 'adm-categorias.html',
})
export class AdmCategoriasPage {
  lista : Array<CategoriaModel> = new Array<CategoriaModel>();
  constructor(public navCtrl: NavController, public navParams: NavParams, private categoria : CategoriaProvider) {
    this._loadData();
  }
  
  private async _loadData(): Promise<void>{
    let result = await this.categoria.get();
    if (result.success){
      this.lista = <Array<CategoriaModel>>result.data;
    }
  }

  addCategoria(model? : CategoriaModel){
    this.navCtrl.push('CadCategoriasPage', {categoria: model} );
  }
}
