import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the GameClassifyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-game-classify',
  templateUrl: 'game-classify.html',
})
export class GameClassifyPage {
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
  },{
    icon: "assets/png/home/icon_eleme.png",
    name: "饿了么",
    person : 6889,
    size : 10.68,
    description : "提供最新附近美食，最快的配送"
  },{
    icon: "assets/png/home/icon_eleme.png",
    name: "饿了么",
    person : 6889,
    size : 10.68,
    description : "提供最新附近美食，最快的配送"
  },{
    icon: "assets/png/home/icon_eleme.png",
    name: "饿了么",
    person : 6889,
    size : 10.68,
    description : "提供最新附近美食，最快的配送"
  }];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GameClassifyPage');
  }

}
