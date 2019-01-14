import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadCategoriasPage } from './cad-categorias';

@NgModule({
  declarations: [
    CadCategoriasPage,
  ],
  imports: [
    IonicPageModule.forChild(CadCategoriasPage),
  ],
})
export class CadCategoriasPageModule {}
