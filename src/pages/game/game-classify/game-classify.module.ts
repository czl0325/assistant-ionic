import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GameClassifyPage } from './game-classify';

@NgModule({
  declarations: [
    GameClassifyPage,
  ],
  imports: [
    IonicPageModule.forChild(GameClassifyPage),
  ],
})
export class GameClassifyPageModule {}
