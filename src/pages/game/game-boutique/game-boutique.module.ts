import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GameBoutiquePage } from './game-boutique';

@NgModule({
  declarations: [
    GameBoutiquePage,
  ],
  imports: [
    IonicPageModule.forChild(GameBoutiquePage),
  ],
})
export class GameBoutiquePageModule {}
