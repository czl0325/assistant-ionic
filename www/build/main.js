webpackJsonp([8],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdhibitionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the AdhibitionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AdhibitionPage = (function () {
    function AdhibitionPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AdhibitionPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AdhibitionPage');
    };
    return AdhibitionPage;
}());
AdhibitionPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-adhibition',template:/*ion-inline-start:"/Users/zhaoliangchen/Desktop/assistant-ionic/src/pages/adhibition/adhibition.html"*/'<!--\n  Generated template for the AdhibitionPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>adhibition</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/zhaoliangchen/Desktop/assistant-ionic/src/pages/adhibition/adhibition.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
], AdhibitionPage);

//# sourceMappingURL=adhibition.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameBoutiquePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the GameBoutiquePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var GameBoutiquePage = (function () {
    function GameBoutiquePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.list_apps = [{
                icon: "assets/png/home/icon_qqmusic.png",
                name: "QQ音乐",
                person: 1889,
                size: 5.68,
                description: "提供最新最权威的各大排行榜单奖项歌曲"
            }, {
                icon: "assets/png/home/icon_wangyi.png",
                name: "网易新闻",
                person: 6889,
                size: 5.68,
                description: "提供最新最权威的新闻资讯，实时政要新闻"
            }, {
                icon: "assets/png/home/icon_xiecheng.png",
                name: "携程旅游",
                person: 6889,
                size: 10.68,
                description: "提供最新最权威的旅游资讯，各种票务购买"
            }, {
                icon: "assets/png/home/icon_eleme.png",
                name: "饿了么",
                person: 6889,
                size: 10.68,
                description: "提供最新附近美食，最快的配送"
            }, {
                icon: "assets/png/home/icon_eleme.png",
                name: "饿了么",
                person: 6889,
                size: 10.68,
                description: "提供最新附近美食，最快的配送"
            }, {
                icon: "assets/png/home/icon_eleme.png",
                name: "饿了么",
                person: 6889,
                size: 10.68,
                description: "提供最新附近美食，最快的配送"
            }, {
                icon: "assets/png/home/icon_eleme.png",
                name: "饿了么",
                person: 6889,
                size: 10.68,
                description: "提供最新附近美食，最快的配送"
            }];
    }
    GameBoutiquePage.prototype.ionViewDidLoad = function () {
        // var scrollContent = document.getElementsByClassName("scroll-content");
        // if (scrollContent!=null) {
        //   scrollContent.style.paddingBottom = '0px';
        // }
    };
    return GameBoutiquePage;
}());
GameBoutiquePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-game-boutique',template:/*ion-inline-start:"/Users/zhaoliangchen/Desktop/assistant-ionic/src/pages/game/game-boutique/game-boutique.html"*/'<!--\n  Generated template for the GameBoutiquePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n<ion-content fullscreen>\n  <div class="appItem" *ngFor="let app of list_apps; let i = index">\n    <div class="div_left">\n      <img class="img_icon" src="{{app.icon}}"/>\n    </div>\n    <div class="item_content">\n      <div style="font-size: 25px; width: 100%; margin-top: 8px;\n                    height: 25px; line-height: 25px">{{app.name}}\n      </div>\n      <div style="margin-top: 5px; width: 100%">\n        <div class="text_css">{{app.person}}万人在用</div>\n        <div class="text_css" style="margin-left: 10px">{{app.size}}M</div>\n        <div style="clear: both"></div>\n      </div>\n      <div class="desc_css">\n        {{app.description}}\n      </div>\n    </div>\n    <div class="div_button">\n      <button ion-button block class="btn_button">下载</button>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/zhaoliangchen/Desktop/assistant-ionic/src/pages/game/game-boutique/game-boutique.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
], GameBoutiquePage);

//# sourceMappingURL=game-boutique.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameClassifyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the GameClassifyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var GameClassifyPage = (function () {
    function GameClassifyPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.list_apps = [{
                icon: "assets/png/home/icon_qqmusic.png",
                name: "QQ音乐",
                person: 1889,
                size: 5.68,
                description: "提供最新最权威的各大排行榜单奖项歌曲"
            }, {
                icon: "assets/png/home/icon_wangyi.png",
                name: "网易新闻",
                person: 6889,
                size: 5.68,
                description: "提供最新最权威的新闻资讯，实时政要新闻"
            }, {
                icon: "assets/png/home/icon_xiecheng.png",
                name: "携程旅游",
                person: 6889,
                size: 10.68,
                description: "提供最新最权威的旅游资讯，各种票务购买"
            }, {
                icon: "assets/png/home/icon_eleme.png",
                name: "饿了么",
                person: 6889,
                size: 10.68,
                description: "提供最新附近美食，最快的配送"
            }, {
                icon: "assets/png/home/icon_eleme.png",
                name: "饿了么",
                person: 6889,
                size: 10.68,
                description: "提供最新附近美食，最快的配送"
            }, {
                icon: "assets/png/home/icon_eleme.png",
                name: "饿了么",
                person: 6889,
                size: 10.68,
                description: "提供最新附近美食，最快的配送"
            }, {
                icon: "assets/png/home/icon_eleme.png",
                name: "饿了么",
                person: 6889,
                size: 10.68,
                description: "提供最新附近美食，最快的配送"
            }];
    }
    GameClassifyPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad GameClassifyPage');
    };
    return GameClassifyPage;
}());
GameClassifyPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-game-classify',template:/*ion-inline-start:"/Users/zhaoliangchen/Desktop/assistant-ionic/src/pages/game/game-classify/game-classify.html"*/'<!--\n  Generated template for the GameClassifyPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n<ion-content fullscreen>\n\n</ion-content>\n'/*ion-inline-end:"/Users/zhaoliangchen/Desktop/assistant-ionic/src/pages/game/game-classify/game-classify.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
], GameClassifyPage);

//# sourceMappingURL=game-classify.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameSinglePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the GameSinglePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var GameSinglePage = (function () {
    function GameSinglePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.list_apps = [{
                icon: "assets/png/home/icon_qqmusic.png",
                name: "QQ音乐",
                person: 1889,
                size: 5.68,
                description: "提供最新最权威的各大排行榜单奖项歌曲"
            }, {
                icon: "assets/png/home/icon_wangyi.png",
                name: "网易新闻",
                person: 6889,
                size: 5.68,
                description: "提供最新最权威的新闻资讯，实时政要新闻"
            }, {
                icon: "assets/png/home/icon_xiecheng.png",
                name: "携程旅游",
                person: 6889,
                size: 10.68,
                description: "提供最新最权威的旅游资讯，各种票务购买"
            }, {
                icon: "assets/png/home/icon_eleme.png",
                name: "饿了么",
                person: 6889,
                size: 10.68,
                description: "提供最新附近美食，最快的配送"
            }, {
                icon: "assets/png/home/icon_eleme.png",
                name: "饿了么",
                person: 6889,
                size: 10.68,
                description: "提供最新附近美食，最快的配送"
            }, {
                icon: "assets/png/home/icon_eleme.png",
                name: "饿了么",
                person: 6889,
                size: 10.68,
                description: "提供最新附近美食，最快的配送"
            }, {
                icon: "assets/png/home/icon_eleme.png",
                name: "饿了么",
                person: 6889,
                size: 10.68,
                description: "提供最新附近美食，最快的配送"
            }];
    }
    GameSinglePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad GameSinglePage');
    };
    return GameSinglePage;
}());
GameSinglePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-game-single',template:/*ion-inline-start:"/Users/zhaoliangchen/Desktop/assistant-ionic/src/pages/game/game-single/game-single.html"*/'<!--\n  Generated template for the GameSinglePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n\n<ion-content fullscreen>\n\n</ion-content>\n'/*ion-inline-end:"/Users/zhaoliangchen/Desktop/assistant-ionic/src/pages/game/game-single/game-single.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
], GameSinglePage);

//# sourceMappingURL=game-single.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameWebgamePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the GameWebgamePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var GameWebgamePage = (function () {
    function GameWebgamePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.list_apps = [{
                icon: "assets/png/home/icon_qqmusic.png",
                name: "QQ音乐",
                person: 1889,
                size: 5.68,
                description: "提供最新最权威的各大排行榜单奖项歌曲"
            }, {
                icon: "assets/png/home/icon_wangyi.png",
                name: "网易新闻",
                person: 6889,
                size: 5.68,
                description: "提供最新最权威的新闻资讯，实时政要新闻"
            }, {
                icon: "assets/png/home/icon_xiecheng.png",
                name: "携程旅游",
                person: 6889,
                size: 10.68,
                description: "提供最新最权威的旅游资讯，各种票务购买"
            }, {
                icon: "assets/png/home/icon_eleme.png",
                name: "饿了么",
                person: 6889,
                size: 10.68,
                description: "提供最新附近美食，最快的配送"
            }, {
                icon: "assets/png/home/icon_eleme.png",
                name: "饿了么",
                person: 6889,
                size: 10.68,
                description: "提供最新附近美食，最快的配送"
            }, {
                icon: "assets/png/home/icon_eleme.png",
                name: "饿了么",
                person: 6889,
                size: 10.68,
                description: "提供最新附近美食，最快的配送"
            }, {
                icon: "assets/png/home/icon_eleme.png",
                name: "饿了么",
                person: 6889,
                size: 10.68,
                description: "提供最新附近美食，最快的配送"
            }];
    }
    GameWebgamePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad GameWebgamePage');
    };
    return GameWebgamePage;
}());
GameWebgamePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-game-webgame',template:/*ion-inline-start:"/Users/zhaoliangchen/Desktop/assistant-ionic/src/pages/game/game-webgame/game-webgame.html"*/'<!--\n  Generated template for the GameWebgamePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n<ion-content fullscreen>\n\n</ion-content>\n'/*ion-inline-end:"/Users/zhaoliangchen/Desktop/assistant-ionic/src/pages/game/game-webgame/game-webgame.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
], GameWebgamePage);

//# sourceMappingURL=game-webgame.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GamePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__game_boutique_game_boutique__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__game_webgame_game_webgame__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__game_single_game_single__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__game_classify_game_classify__ = __webpack_require__(103);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the GamePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var GamePage = (function () {
    function GamePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.gameBoutique = __WEBPACK_IMPORTED_MODULE_2__game_boutique_game_boutique__["a" /* GameBoutiquePage */];
        this.gameWebgame = __WEBPACK_IMPORTED_MODULE_3__game_webgame_game_webgame__["a" /* GameWebgamePage */];
        this.gameSingle = __WEBPACK_IMPORTED_MODULE_4__game_single_game_single__["a" /* GameSinglePage */];
        this.gameClassify = __WEBPACK_IMPORTED_MODULE_5__game_classify_game_classify__["a" /* GameClassifyPage */];
    }
    GamePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad GamePage');
    };
    return GamePage;
}());
GamePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-game',template:/*ion-inline-start:"/Users/zhaoliangchen/Desktop/assistant-ionic/src/pages/game/game.html"*/'<!--\n  Generated template for the GamePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="gametab">\n    <ion-buttons style="display: inline-block">\n      <img src="assets/png/game/ic_game_code.png" style="width: 20px; height: 20px">\n    </ion-buttons>\n    <ion-searchbar style="display: inline-block; width: 93%">\n\n    </ion-searchbar>\n    <ion-buttons style="display: inline-block">\n      <img src="assets/png/game/ic_game_code.png" style="width: 20px; height: 20px">\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content fullscreen>\n  <super-tabs class="super-tab-css" toolbarBackground="#29b6f6" toolbarColor="white" toolbarBackground="gametab">\n    <super-tab [root]="gameBoutique" title="精品"></super-tab>\n    <super-tab [root]="gameWebgame" title="网游"></super-tab>\n    <super-tab [root]="gameSingle" title="单机"></super-tab>\n    <super-tab [root]="gameClassify" title="分类"></super-tab>\n  </super-tabs>\n\n</ion-content>\n'/*ion-inline-end:"/Users/zhaoliangchen/Desktop/assistant-ionic/src/pages/game/game.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
], GamePage);

//# sourceMappingURL=game.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManagementPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ManagementPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ManagementPage = (function () {
    function ManagementPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ManagementPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ManagementPage');
    };
    return ManagementPage;
}());
ManagementPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-management',template:/*ion-inline-start:"/Users/zhaoliangchen/Desktop/assistant-ionic/src/pages/management/management.html"*/'<!--\n  Generated template for the ManagementPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>management</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/zhaoliangchen/Desktop/assistant-ionic/src/pages/management/management.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
], ManagementPage);

//# sourceMappingURL=management.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RankPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the RankPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RankPage = (function () {
    function RankPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    RankPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RankPage');
    };
    return RankPage;
}());
RankPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-rank',template:/*ion-inline-start:"/Users/zhaoliangchen/Desktop/assistant-ionic/src/pages/rank/rank.html"*/'<!--\n  Generated template for the RankPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>rank</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/zhaoliangchen/Desktop/assistant-ionic/src/pages/rank/rank.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
], RankPage);

//# sourceMappingURL=rank.js.map

/***/ }),

/***/ 118:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 118;

/***/ }),

/***/ 159:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/adhibition/adhibition.module": [
		288,
		7
	],
	"../pages/game/game-boutique/game-boutique.module": [
		289,
		6
	],
	"../pages/game/game-classify/game-classify.module": [
		290,
		5
	],
	"../pages/game/game-single/game-single.module": [
		291,
		4
	],
	"../pages/game/game-webgame/game-webgame.module": [
		292,
		3
	],
	"../pages/game/game.module": [
		293,
		2
	],
	"../pages/management/management.module": [
		294,
		1
	],
	"../pages/rank/rank.module": [
		295,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 159;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__game_game__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__adhibition_adhibition__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__rank_rank__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__management_management__ = __webpack_require__(107);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_1__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__game_game__["a" /* GamePage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__adhibition_adhibition__["a" /* AdhibitionPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_4__rank_rank__["a" /* RankPage */];
        this.tab5Root = __WEBPACK_IMPORTED_MODULE_5__management_management__["a" /* ManagementPage */];
    }
    return TabsPage;
}());
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/zhaoliangchen/Desktop/assistant-ionic/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="首页" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="游戏" tabIcon="information-circle"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="应用" tabIcon="contacts"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="排行" tabIcon="contacts"></ion-tab>\n  <ion-tab [root]="tab5Root" tabTitle="管理" tabIcon="contacts"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/zhaoliangchen/Desktop/assistant-ionic/src/pages/tabs/tabs.html"*/
    }),
    __metadata("design:paramtypes", [])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.slides = [{
                image_url: "http://www.86ps.com/imgWeb/psd/hf_fj/FJ_159.jpg"
            }, {
                image_url: "http://img5.imgtn.bdimg.com/it/u=279872905,3561407218&fm=27&gp=0.jpg",
            }, {
                image_url: "http://img4.imgtn.bdimg.com/it/u=2266315078,3967665466&fm=200&gp=0.jpg",
            }];
        this.list_apps = [{
                icon: "assets/png/home/icon_qqmusic.png",
                name: "QQ音乐",
                person: 1889,
                size: 5.68,
                description: "提供最新最权威的各大排行榜单奖项歌曲"
            }, {
                icon: "assets/png/home/icon_wangyi.png",
                name: "网易新闻",
                person: 6889,
                size: 5.68,
                description: "提供最新最权威的新闻资讯，实时政要新闻"
            }, {
                icon: "assets/png/home/icon_xiecheng.png",
                name: "携程旅游",
                person: 6889,
                size: 10.68,
                description: "提供最新最权威的旅游资讯，各种票务购买"
            }, {
                icon: "assets/png/home/icon_eleme.png",
                name: "饿了么",
                person: 6889,
                size: 10.68,
                description: "提供最新附近美食，最快的配送"
            }, {
                icon: "assets/png/home/icon_eleme.png",
                name: "饿了么",
                person: 6889,
                size: 10.68,
                description: "提供最新附近美食，最快的配送"
            }, {
                icon: "assets/png/home/icon_eleme.png",
                name: "饿了么",
                person: 6889,
                size: 10.68,
                description: "提供最新附近美食，最快的配送"
            }, {
                icon: "assets/png/home/icon_eleme.png",
                name: "饿了么",
                person: 6889,
                size: 10.68,
                description: "提供最新附近美食，最快的配送"
            }];
    }
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/Users/zhaoliangchen/Desktop/assistant-ionic/src/pages/home/home.html"*/'<!--<ion-header>-->\n<!--<ion-navbar>-->\n<!--<ion-title>Home</ion-title>-->\n<!--</ion-navbar>-->\n<!--</ion-header>-->\n\n<ion-content fullscreen>\n  <div class="top-view">\n    <ion-slides pager>\n      <ion-slide no-margin no-padding *ngFor="let slide of slides">\n        <img [src]="slide.image_url" class="slide-image"/>\n      </ion-slide>\n    </ion-slides>\n  </div>\n  <!--<div class="tool-bar">-->\n  <!--<ion-buttons no-margin no-padding float-left class="ionbuttons">-->\n  <!--<button ion-button no-margin no-padding>-->\n  <!--<ion-icon no-margin no-padding name="ios-contact-outline" class="icon_top">-->\n  <!--</ion-icon>-->\n  <!--</button>-->\n  <!--</ion-buttons>-->\n  <!--<form float-left (submit)="onSearch($event)" style="background: white; margin-left: 20px; margin-right: 20px">-->\n  <!--<ion-input placeholder="大家都在搜:讯飞输入法"></ion-input>-->\n  <!--</form>-->\n  <!--<ion-buttons no-margin no-padding end class="ionbuttons">-->\n  <!--<button ion-button no-margin no-padding>-->\n  <!--<ion-icon no-margin no-padding name="ios-download-outline" class="icon_top">-->\n  <!--</ion-icon>-->\n  <!--</button>-->\n  <!--</ion-buttons>-->\n  <!--</div>-->\n\n  <div class="div_buttons">\n    <div class="one_button">\n      <button ion-button clear no-margin no-padding\n              style="background: url(../../assets/png/home/ic_home_ranking.png) 0px center no-repeat;\n              background-size:20px 26px;text-indent: 20px; margin: 0 auto; display: inline-block; color: black">\n        十大排行\n      </button>\n    </div>\n    <div class="one_button">\n      <button ion-button clear no-margin no-padding\n              style="background: url(../../assets/png/home/ic_home_project.png) 0px center no-repeat;\n              background-size:20px 26px;text-indent: 20px; margin: 0 auto; display: inline-block; color: black">\n        专题中心\n      </button>\n    </div>\n    <div class="one_button">\n      <button ion-button clear no-margin no-padding\n              style="background: url(../../assets/png/home/ic_home_application.png) 0px center no-repeat;\n              background-size:20px 26px;text-indent: 20px; margin: 0 auto; color: black">\n        最美应用\n      </button>\n    </div>\n    <div class="one_button">\n      <button ion-button clear no-margin no-padding\n              style="background: url(../../assets/png/home/ic_home_market.png) 0px center no-repeat;\n              background-size:20px 26px;text-indent: 20px; margin: 0 auto; display: inline-block; color: black">\n        装机必备\n      </button>\n    </div>\n  </div>\n\n  <div>\n    <div class="appItem" *ngFor="let app of list_apps; let i = index">\n      <div class="div_left">\n        <img class="img_icon" src="{{app.icon}}"/>\n      </div>\n      <div class="item_content">\n        <div style="font-size: 25px; width: 100%; margin-top: 8px;\n                    height: 25px; line-height: 25px">{{app.name}}\n        </div>\n        <div style="margin-top: 5px; width: 100%">\n          <div class="text_css">{{app.person}}万人在用</div>\n          <div class="text_css" style="margin-left: 10px">{{app.size}}M</div>\n          <div style="clear: both"></div>\n        </div>\n        <div class="desc_css">\n          {{app.description}}\n        </div>\n      </div>\n      <div class="div_button">\n        <button ion-button block class="btn_button">下载</button>\n      </div>\n    </div>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/zhaoliangchen/Desktop/assistant-ionic/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(229);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_game_game__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_adhibition_adhibition__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_rank_rank__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_management_management__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_game_game_boutique_game_boutique__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_game_game_webgame_game_webgame__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_game_game_single_game_single__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_game_game_classify_game_classify__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_status_bar__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_splash_screen__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_ionic2_super_tabs__ = __webpack_require__(278);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




//页面










//官方插件


//第三方插件

var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_game_game__["a" /* GamePage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_adhibition_adhibition__["a" /* AdhibitionPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_rank_rank__["a" /* RankPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_management_management__["a" /* ManagementPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_game_game_boutique_game_boutique__["a" /* GameBoutiquePage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_game_game_webgame_game_webgame__["a" /* GameWebgamePage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_game_game_single_game_single__["a" /* GameSinglePage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_game_game_classify_game_classify__["a" /* GameClassifyPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/adhibition/adhibition.module#AdhibitionPageModule', name: 'AdhibitionPage', segment: 'adhibition', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/game/game-boutique/game-boutique.module#GameBoutiquePageModule', name: 'GameBoutiquePage', segment: 'game-boutique', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/game/game-classify/game-classify.module#GameClassifyPageModule', name: 'GameClassifyPage', segment: 'game-classify', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/game/game-single/game-single.module#GameSinglePageModule', name: 'GameSinglePage', segment: 'game-single', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/game/game-webgame/game-webgame.module#GameWebgamePageModule', name: 'GameWebgamePage', segment: 'game-webgame', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/game/game.module#GamePageModule', name: 'GamePage', segment: 'game', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/management/management.module#ManagementPageModule', name: 'ManagementPage', segment: 'management', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/rank/rank.module#RankPageModule', name: 'RankPage', segment: 'rank', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_16_ionic2_super_tabs__["a" /* SuperTabsModule */].forRoot(),
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_game_game__["a" /* GamePage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_adhibition_adhibition__["a" /* AdhibitionPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_rank_rank__["a" /* RankPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_management_management__["a" /* ManagementPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_game_game_boutique_game_boutique__["a" /* GameBoutiquePage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_game_game_webgame_game_webgame__["a" /* GameWebgamePage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_game_game_single_game_single__["a" /* GameSinglePage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_game_game_classify_game_classify__["a" /* GameClassifyPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_14__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_15__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(204);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/zhaoliangchen/Desktop/assistant-ionic/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/zhaoliangchen/Desktop/assistant-ionic/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ })

},[211]);
//# sourceMappingURL=main.js.map