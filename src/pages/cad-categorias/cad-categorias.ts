import { CategoriaModel } from './../../app/models/categoriaModel';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CadCategoriasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cad-categorias',
  templateUrl: 'cad-categorias.html',
})
export class CadCategoriasPage {
  categoria: CategoriaModel = new CategoriaModel();
  constructor(public navCtrl: NavController, public navParams: NavParams) {

    let _categ = this.navParams.get('categoria');
    if (_categ){
      this.categoria = <CategoriaModel>_categ;
    } else {

    }
    this.categoria = new CategoriaModel(); 
  }
  

}
