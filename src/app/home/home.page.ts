import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html'
})
export class HomePage {

  constructor(private modalCtrl: ModalController) {}

  async openModal() {
    console.log('open modal');
    const modal = await this.modalCtrl.create({
      component: ModalPage
    });
    return await modal.present();
  }
}
