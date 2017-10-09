import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { GamePage } from "../game/game";
import { AdhibitionPage } from "../adhibition/adhibition";
import { RankPage } from "../rank/rank";
import { ManagementPage } from "../management/management";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = GamePage;
  tab3Root = AdhibitionPage;
  tab4Root = RankPage;
  tab5Root = ManagementPage;

  constructor() {

  }
}
