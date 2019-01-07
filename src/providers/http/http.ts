import { AlertProvider } from './../alert/alert';
import { SpinnerProvider } from './../spinner/spinner';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NetworkProvider } from '../network/network';
import { HttpResultModel } from '../../app/models/HttpResultModel';

@Injectable()
export class HttpProvider {

  constructor(private http: HttpClient, private spinner: SpinnerProvider, private alert: AlertProvider, private network : NetworkProvider ) {    
  }


  public get(url: string): Promise<HttpResultModel>{
    this.spinner.Show("Carregando os dados...");

    return new Promise((resolve) => {
      if (this.network.isOnline) {
        this.http.get(url)
          .subscribe(res =>{
            this.spinner.Hide();
            resolve({success: true, data: res, err: undefined});
          },
          err => {
            this.spinner.Hide();
            this.alert.showToast('Não foi possível consultar os dados, verifique sua conexão e tente novamente', 'bottom');
            resolve({ success: false, data: undefined, err: err});
          });
      } else {
        this.alert.showToast('Você está desconectado, e infelizmente não pode carregar os dados.','bottom');
        resolve({success: true, data: [], err: undefined});
      }
    });
  }

  public post(url: string, model: any): Promise<HttpResultModel>{
    this.spinner.Show("Salvando informações.");
    return new Promise((resolve) => {
      if (this.network.isOnline){
        this.http.post(url,model)
          .subscribe(res => {
            this.spinner.Hide();
            resolve({ success: true, data: res, err: undefined});
          },
          err => {
            this.spinner.Hide();
            if (err.status == 400) {
              let msg = '';
              err.error.validation.forEach(_err => {
                msg += `<li>${_err.message}</li>`;
              });
              this.alert.showAlert(err.error.message,msg);
            } else if (err.status == 404){
              this.alert.showAlert('Atenção',err.error.message);
            }
            else {
              this.alert.showToast('Não foi possível realizar o processamento da informação, verifique sua conexão e tente novamente','bottom');              
            }
            resolve({success: false, data: undefined, err: err});
          });
      } else {
        this.alert.showToast('Você está offline, e infelizmente não pode ser enviado os dados!','bottom');
        resolve({success:true, data: [], err: undefined});
      }
    });
  }

  public put(url: string, model: any): Promise<HttpResultModel>{
    this.spinner.Show("Atualizando informações.");
    return new Promise((resolve) => {
      if (this.network.isOnline){
        this.http.put(url,model)
          .subscribe(res => {
            this.spinner.Hide();
            resolve({ success: true, data: res, err: undefined});
          },
          err => {
            this.spinner.Hide();
            if (err.status == 400) {
              let msg = '';
              err.error.validation.forEach(_err => {
                msg += `<li>${_err.message}</li>`;
              });
              this.alert.showAlert(err.error.message,msg);
            } else {
              this.alert.showToast('Não foi possível realizar o processamento da informação, verifique sua conexão e tente novamente','bottom');              
            }
            resolve({success: false, data: undefined, err: err});
          });
      } else {
        this.alert.showToast('Você está offline, e infelizmente não pode ser enviado os dados!','bottom');
        resolve({success:true, data: [], err: undefined});
      }
    });
  }

  public delete(url: string): Promise<HttpResultModel>{
    this.spinner.Show("Removendo registro.");
    return new Promise((resolve) => {
      if (this.network.isOnline){
        this.http.delete(url)
          .subscribe(res => {
            this.spinner.Hide();
            resolve({ success: true, data: res, err: undefined});
          },
          err => {
            this.spinner.Hide();            
            this.alert.showToast('Não foi possível realizar a exclusão do registro','bottom');                          
            resolve({success: false, data: undefined, err: err});
          });
      } else {
        this.alert.showToast('Você está offline, e infelizmente não pode ser enviado os dados!','bottom');
        resolve({success:true, data: [], err: undefined});
      }
    });
  }

}
