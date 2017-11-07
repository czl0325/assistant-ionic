import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {GameBoutiquePage} from "./game-boutique/game-boutique";
import {GameWebgamePage} from "./game-webgame/game-webgame";
import {GameSinglePage} from "./game-single/game-single";
import {GameClassifyPage} from "./game-classify/game-classify";

/**
 * Generated class for the GamePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-game',
  templateUrl: 'game.html',
})
export class GamePage {
  gameBoutique: any = GameBoutiquePage;
  gameWebgame: any = GameWebgamePage;
  gameSingle: any = GameSinglePage;
  gameClassify: any = GameClassifyPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GamePage');
  }

}
