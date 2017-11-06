import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  slides = [{
      image_url:"http://www.86ps.com/imgWeb/psd/hf_fj/FJ_159.jpg"
    },{
      image_url:"http://img5.imgtn.bdimg.com/it/u=279872905,3561407218&fm=27&gp=0.jpg",
    },{
      image_url:"http://img4.imgtn.bdimg.com/it/u=2266315078,3967665466&fm=200&gp=0.jpg",
  }];
  list_apps = [{
    icon: "assets/png/home/icon_qqmusic.png",
    name: "QQ音乐",
    person : 1889,
    size : 5.68,
    description : "提供最新最权威的各大排行榜单奖项歌曲"
  },{
    icon: "assets/png/home/icon_wangyi.png",
    name: "网易新闻",
    person : 6889,
    size : 5.68,
    description : "提供最新最权威的新闻资讯，实时政要新闻"
  },{
    icon: "assets/png/home/icon_xiecheng.png",
    name: "携程旅游",
    person : 6889,
    size : 10.68,
    description : "提供最新最权威的旅游资讯，各种票务购买"
  },{
    icon: "assets/png/home/icon_eleme.png",
    name: "饿了么",
    person : 6889,
    size : 10.68,
    description : "提供最新附近美食，最快的配送"
  }];

  constructor(public navCtrl: NavController) {

  }

}
