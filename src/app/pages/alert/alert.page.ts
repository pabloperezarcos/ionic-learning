import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  constructor(private alertCtrl: AlertController) { 

  }

  ngOnInit() {
  }

//Esta es una alerta con un mensaje de aviso simplemente
  async presentAlert() 
    {
      const alert = await this.alertCtrl.create({
        backdropDismiss: false, 
        header: 'Alert',
        subHeader: 'Important message',
        message: 'This is an alert!',
        buttons: ['OK'],
      });
        await alert.present();
    }

//Esta es una alerta con 1 o mas botones con acciones de realizar
    async presentAlertMultipleButtons() 
    {
      const alert = await this.alertCtrl.create({
        backdropDismiss: false, 
        header: 'Alert',
        subHeader: 'Important message',
        message: 'This is an alert!',
        buttons: [
          {
            text: 'OK',
            handler: () => {
              console.log('click en ok')
            }
          },
          {
            text: 'Cancelar',
            role: 'cancel'
          },
        ]

      });
        await alert.present();
    }

//esta es una alerta




}
