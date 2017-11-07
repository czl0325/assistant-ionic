import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GameWebgamePage } from './game-webgame';

@NgModule({
  declarations: [
    GameWebgamePage,
  ],
  imports: [
    IonicPageModule.forChild(GameWebgamePage),
  ],
})
export class GameWebgamePageModule {}
