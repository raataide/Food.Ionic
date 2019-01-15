import { Platform } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera';



@Injectable()
export class CameraProvider {

  constructor(private camera: Camera, private platform: Platform) {

  }

  private _getPicture(source: number, callback) {
    if (this.platform.is('cordova')) {
      this.platform.ready().then(() => {
        try {
          let options:CameraOptions = {
            quality: 70,
            destinationType: this.camera.DestinationType.DATA_URL,
            sourceType: source,
            allowEdit: true,
            encodingType: this.camera.EncodingType.JPEG,
            saveToPhotoAlbum: false,
            correctOrientation: true
          };
          
        } catch (error) {
          console.log('Problema ao tirar foto.', error)
          
        }
      });
    }
  }

}
