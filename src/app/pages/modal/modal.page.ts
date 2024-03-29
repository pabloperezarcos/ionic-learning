import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalInfoPage } from '../modal-info/modal-info.page';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  constructor(private modalCtr: ModalController) { }

  ngOnInit() {
  }

  async mostrarModal(){

    const modal = await this.modalCtr.create({
      component: ModalInfoPage,
      componentProps: {
        nombre:'Pablo',
        pais:'Chile'
      }
    });
     await modal.present();

     const {data} = await modal.onDidDismiss();

     console.log(data);

  }

}
