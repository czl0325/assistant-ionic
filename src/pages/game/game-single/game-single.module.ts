import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GameSinglePage } from './game-single';

@NgModule({
  declarations: [
    GameSinglePage,
  ],
  imports: [
    IonicPageModule.forChild(GameSinglePage),
  ],
})
export class GameSinglePageModule {}
