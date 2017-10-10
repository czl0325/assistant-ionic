import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  slides: any[];


  constructor(public navCtrl: NavController) {
    this.slides = [
      {
        image_url:"http://www.86ps.com/imgWeb/psd/hf_fj/FJ_159.jpg"
      },
      {
        image_url:"http://img5.imgtn.bdimg.com/it/u=279872905,3561407218&fm=27&gp=0.jpg",
      },
      {
        image_url:"http://img4.imgtn.bdimg.com/it/u=2266315078,3967665466&fm=200&gp=0.jpg",
      }
    ];
  }

}
