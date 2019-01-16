import { HttpResultModel } from './../../app/models/HttpResultModel';
import { AlertProvider } from './../../providers/alert/alert';
import { CategoriaProvider } from './../../providers/categoria/categoria';
import { CameraProvider } from './../../providers/camera/camera';
import { CategoriaModel } from './../../app/models/categoriaModel';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, Platform } from 'ionic-angular';

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
  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public actionSheet: ActionSheetController, public platform: Platform,
    private cameraProvider: CameraProvider, private categoriaP : CategoriaProvider,
    private alert : AlertProvider) {

    let _categ = this.navParams.get('categoria');
    if (_categ){
      this.categoria = <CategoriaModel>_categ;
    } else {

    }
    this.categoria = new CategoriaModel(); 
  }

  getPictureOptions(){
    let ac = this.actionSheet.create({
      title: 'Adicionar foto',
      buttons: [
        {
          text: 'Tirar foto', 
          handler: () =>{
            this.cameraProvider.takePicture(photo => {
              this.categoria.foto = photo;
            })
          },
          icon: this.platform.is('ios') ? null : 'camera'
        },
        {
          text: 'Pegar da galeria',
          handler: () => {
            this.cameraProvider.getPictureFromDevice(photo => {
              this.categoria.foto = photo;
            });
          },
          icon : this.platform.is('ios') ? null : 'images'
        },
        {
          text: 'Cancelar',
          role: 'destructive',
          icon: this.platform.is('ios') ? null : 'close',
          handler: () => {
            //Cancela a ação
          }
        }
      ]
    }).present();
  }

  async salvar() : Promise<void>{
    let result = await this.categoriaP.post(this.categoria);
    if (result.success){
      this.alert.showToast('Cadastro realizado com sucesso.','bottom');
      this.navCtrl.setRoot('CategoriaPage');
    }
  }
  

}
