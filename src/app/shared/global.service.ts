import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  myToast: any;
  id: any;

  constructor(private toast: ToastController) { }

  setId(id: number) {
    this.id = id;
    return id;
  }

  getId() {
    return this.id;
  }

  saveToast() {
    this.myToast = this.toast.create({
      message: 'Salvo com Sucesso!',
      duration: 3000
    }).then((toastData) => {
      toastData.present();
    });
  }

  updateToast() {
    this.myToast = this.toast.create({
      message: 'Atualizado com Sucesso!',
      duration: 3000
    }).then((toastData) => {
       toastData.present();
    });
  }

  removeToast() {
    this.myToast = this.toast.create({
      message: 'Removido com Sucesso!',
      duration: 3000
    }).then((toastData) => {
       toastData.present();
    });
  }

}
