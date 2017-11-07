import {NgModule, ErrorHandler} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyApp} from './app.component';

//页面
import {HomePage} from '../pages/home/home';
import {TabsPage} from '../pages/tabs/tabs';
import {GamePage} from "../pages/game/game";
import {AdhibitionPage} from "../pages/adhibition/adhibition";
import {RankPage} from "../pages/rank/rank";
import {ManagementPage} from "../pages/management/management";
import {GameBoutiquePage} from "../pages/game/game-boutique/game-boutique";
import {GameWebgamePage} from "../pages/game/game-webgame/game-webgame";
import {GameSinglePage} from "../pages/game/game-single/game-single";
import {GameClassifyPage} from "../pages/game/game-classify/game-classify";

//官方插件
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';

//第三方插件
import {SuperTabsModule} from "ionic2-super-tabs";

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    HomePage,
    GamePage,
    AdhibitionPage,
    RankPage,
    ManagementPage,
    GameBoutiquePage,
    GameWebgamePage,
    GameSinglePage,
    GameClassifyPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    SuperTabsModule.forRoot(),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    HomePage,
    GamePage,
    AdhibitionPage,
    RankPage,
    ManagementPage,
    GameBoutiquePage,
    GameWebgamePage,
    GameSinglePage,
    GameClassifyPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {
}
