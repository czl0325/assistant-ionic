import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RankPage } from './rank';

@NgModule({
  declarations: [
    RankPage,
  ],
  imports: [
    IonicPageModule.forChild(RankPage),
  ],
})
export class RankPageModule {}
