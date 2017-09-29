webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/about/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\r\n  <h1 class=\"content__title\">\r\n    About\r\n  </h1>\r\n  <p>\r\n    So, we had this app that we were working on, built with <a href=\"https://angularjs.org\">AngularJS</a>.\r\n    It was a large scale app and development was coming along well. Then <a href=\"https://angular.io\">Angular</a>\r\n    was announced and the groundwork for a component based platform was initiated. We immediately thought,\r\n    awesome, this will be a big plus for this app we were developing. It would allow us\r\n    to modularize it into smaller chunks and have some separation of concerns within these\r\n    web parts that make up this complex UI.\r\n  </p>\r\n  <p>\r\n    So, we reworked what we had to start using Angular.\r\n    And as we started thinking in terms of components and how that altered our approach to\r\n    how we architect a web application we started to see the power of components and the ability to isolate\r\n    UI and logic down to just that which is needed to drive that web chunk. But, while we had the ability to\r\n    isolate the code, we didn't have the ability to isolate the running of that code in the browser. We would\r\n    have to spin up the app in the browser and then nav to the spot in the app to see the component in action.\r\n    And this wasn't too bad in the initial development of the app as there was not much nav going on, but as the app\r\n    grew it became more time consuming to get to the render of the components.\r\n  </p>\r\n  <p>\r\n    So, we created a sandbox application that would allow a dev to edit their sandbox host component\r\n    and add markup and data to display a component from the main app that they were working on. Devs would\r\n    have the ability to work their component in isolation and feed it the data and dependencies it needed\r\n    to see it in action and to simulate the scenarios it could end up in. This worked out great for us...as a starting\r\n    point. It didn't take long before the dev team wanted the ability to save their sandboxed scenarios for later use.\r\n    What we needed was an app that could render stored sandboxes of components with different scenarios configured.\r\n    Around this time <a href=\"https://getstorybook.io/\">React Storybook</a> came out.\r\n    It really embodied the same thing we wanted to have with our sandbox tool.\r\n    At this same time we had already implemented a Style Guide application for our team that would handle dynamically\r\n    rendering what we term \"global components\" from our app.\r\n  </p>\r\n  <p>\r\n    So, we set out to leverage that dynamic component loading code from our Style Guide app\r\n    along with our existing sandbox app and the inspiration of what React Storybook had done to build a tool that\r\n    would work with Angular to allow us to develop components in isolation. As a result, Playground for Angular was born.\r\n    And from the beginning we felt that this tool would be useful to others, so we made a plan to be able to open source\r\n    it once we got it all dialed in. Well, we made it to that point and are super excited to share it with the\r\n    community and hope that it will help improve the component, directive and pipe building experience and productivity!\r\n  </p>\r\n</div>\r\n<ul class=\"items\">\r\n  <li\r\n    *ngFor=\"let item of items\"\r\n    class=\"item\">\r\n    <div class=\"item__avatar\">\r\n      <a\r\n        [href]=\"item.twitterUrl\"\r\n        class=\"item__avatarLink\">\r\n        <img\r\n          [src]=\"item.avatarUrl\"\r\n          [alt]=\"item.firstName + ' ' + item.lastName\">\r\n      </a>\r\n    </div>\r\n    <div class=\"item__content\">\r\n      <h5 class=\"item__title\">\r\n        <a\r\n          [href]=\"item.twitterUrl\"\r\n          class=\"item__titleLink\">\r\n          {{item.firstName}} {{item.lastName}}\r\n        </a>\r\n      </h5>\r\n      <ul class=\"item__contacts\">\r\n        <li class=\"item__contact\">\r\n          <a\r\n            [href]=\"item.githubUrl\"\r\n            class=\"item__link\">\r\n            <svg\r\n              viewBox=\"0 0 200 200\"\r\n              class=\"item__icon\">\r\n              <path d=\"M100.4,3C45.4,3,1,47.3,1,102.3c0,43.7,28.5,80.8,68.2,94.1c5.3,0.7,6.6-2,6.6-4.6v-17.2c-27.8,6-33.8-13.2-33.8-13.2\r\n                c-4.6-11.3-11.3-14.6-11.3-14.6c-9.3-6,0.7-6,0.7-6c9.9,0.7,15.2,9.9,15.2,9.9c8.6,15.2,23.2,10.6,29.1,7.9\r\n                c0.7-6.6,3.3-10.6,6.6-13.2c-21.9-2.6-45-11.3-45-49c0-10.6,4-19.9,9.9-26.5c-1.3-2.6-4.6-12.6,0.7-26.5c0,0,8.6-2.6,27.2,9.9\r\n                c7.9-2,16.6-3.3,25.2-3.3s17.2,1.3,25.2,3.3c19.2-12.6,27.2-9.9,27.2-9.9c5.3,13.9,2,23.8,0.7,26.5c6.6,6.6,9.9,15.9,9.9,26.5\r\n                c0,38.4-23.2,46.4-45,49c3.3,3.3,6.6,9.3,6.6,18.5v27.2c0,2.6,2,6,6.6,4.6c39.7-13.2,67.6-50.3,67.6-94.1\r\n                C199.7,47.3,155.4,3,100.4,3z\"/>\r\n            </svg>\r\n            <span class=\"item__label\">Follow {{item.firstName}} on Github</span>\r\n          </a>\r\n        </li>\r\n        <li class=\"item__contact\">\r\n          <a\r\n            [href]=\"item.twitterUrl\"\r\n            class=\"item__link\">\r\n            <svg\r\n              viewBox=\"0 0 200 200\"\r\n              class=\"item__icon\">\r\n              <g transform=\"translate(-539.18 -568.86)\">\r\n                <path d=\"M602.1,750.1c75.5,0,116.8-62.5,116.8-116.8c0-1.8,0-3.5-0.1-5.3c8-5.8,15-13,20.5-21.2c-7.4,3.3-15.3,5.5-23.6,6.5\r\n                  c8.5-5.1,15-13.1,18-22.7c-7.9,4.7-16.7,8.1-26.1,10c-7.5-8-18.1-13-30-13c-22.7,0-41,18.4-41,41c0,3.2,0.4,6.4,1.1,9.4\r\n                  c-34.1-1.7-64.3-18-84.6-42.9c-3.5,6.1-5.6,13.1-5.6,20.6c0,14.2,7.2,26.8,18.3,34.2c-6.7-0.2-13.1-2.1-18.6-5.1c0,0.2,0,0.3,0,0.5\r\n                  c0,19.9,14.1,36.5,32.9,40.2c-3.4,0.9-7.1,1.4-10.8,1.4c-2.6,0-5.2-0.3-7.7-0.7c5.2,16.3,20.4,28.2,38.3,28.5\r\n                  c-14,11-31.7,17.6-51,17.6c-3.3,0-6.6-0.2-9.8-0.6C557.3,743.3,578.9,750.1,602.1,750.1\"/>\r\n              </g>\r\n            </svg>\r\n            <span class=\"item__label\">Follow {{item.firstName}} on Twitter</span>\r\n          </a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </li>\r\n</ul>\r\n"

/***/ }),

/***/ "../../../../../src/app/about/about/about.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  font-size: 1rem; }\n\n.content h1 {\n  color: #333; }\n\n.content p {\n  line-height: 1.6;\n  margin-bottom: 1.6em; }\n\n.content a {\n  color: #00ACED;\n  text-decoration: underline; }\n  .content a:hover {\n    color: #60c126;\n    text-decoration: none; }\n\n.items {\n  list-style: none;\n  margin: 0;\n  padding: 0; }\n\n.item {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  border-top: solid 1px #ebebeb;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding-bottom: 1.25em;\n  padding-top: 1.25em; }\n  .item__avatar {\n    max-width: 6.2em;\n    min-width: 6.2em; }\n    .item__avatar img {\n      border: solid 2px #00ACED;\n      border-radius: 50%;\n      height: 100%;\n      width: 100%; }\n    .item__avatar:hover img {\n      border-color: #60c126; }\n  .item__content {\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    padding-left: 1em; }\n  .item__title {\n    margin-bottom: 0; }\n    .item__titleLink {\n      color: #00ACED;\n      text-decoration: none; }\n      .item__titleLink:hover {\n        color: #60c126;\n        text-decoration: underline; }\n  .item__contacts {\n    list-style: none;\n    margin: 0;\n    padding: 0; }\n  .item__contact {\n    padding: 0.25em 0; }\n  .item__link {\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    color: #00ACED;\n    display: -webkit-inline-box;\n    display: -ms-inline-flexbox;\n    display: inline-flex;\n    font-size: 80%;\n    text-decoration: none; }\n  .item__icon {\n    height: 1.4em;\n    fill: #2F3E4E;\n    max-width: 1.4em;\n    min-width: 1.4em; }\n  .item__label {\n    padding-left: 0.5em; }\n  .item__link:hover {\n    color: #60c126;\n    text-decoration: underline; }\n    .item__link:hover .item__icon {\n      fill: currentColor; }\n\n@media (min-width: 801px) {\n  :host {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex; }\n  .content {\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    max-width: 50%;\n    min-width: 50%;\n    padding-right: 1.75em; }\n  .items {\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    max-width: 50%;\n    min-width: 50%;\n    padding-left: 1.75em; }\n  .item:first-child {\n    border: none; } }\n\n@media (max-width: 800px) {\n  :host {\n    display: block; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/about/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = (function () {
    function AboutComponent() {
        this.items = [
            {
                firstName: 'Justin',
                lastName: 'Schwartzenberger',
                avatarUrl: 'https://pbs.twimg.com/profile_images/664117369535488000/KT3wsR_4_400x400.jpg',
                githubUrl: 'https://github.com/jschwarty',
                twitterUrl: 'https://twitter.com/schwarty'
            },
            {
                firstName: 'Jami',
                lastName: 'Lurock',
                avatarUrl: 'https://pbs.twimg.com/profile_images/479643327441018880/z9boZ906_400x400.jpeg',
                githubUrl: 'https://github.com/lurock',
                twitterUrl: 'https://twitter.com/maindg'
            },
            {
                firstName: 'Greg',
                lastName: 'Arroyo',
                avatarUrl: 'https://pbs.twimg.com/profile_images/759169296677294080/k_-y-6R0_400x400.jpg',
                githubUrl: 'https://github.com/arroyocode',
                twitterUrl: 'https://twitter.com/arroyocode'
            },
            {
                firstName: 'Graham',
                lastName: 'Marlow',
                avatarUrl: 'https://pbs.twimg.com/profile_images/882651324894007296/2yiOQyJk_400x400.jpg',
                githubUrl: 'https://github.com/mgmarlow',
                twitterUrl: 'https://twitter.com/mgmarlow'
            },
            {
                firstName: 'Brian',
                lastName: 'Treese',
                avatarUrl: 'https://pbs.twimg.com/profile_images/766150298549252096/PXESHOSy_400x400.jpg',
                githubUrl: 'https://github.com/brianmtreese',
                twitterUrl: 'https://twitter.com/brianmtreese'
            }
        ];
    }
    AboutComponent.prototype.ngOnInit = function () {
        window.scrollTo(0, 0);
    };
    AboutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Component */])({
            selector: 'app-about',
            template: __webpack_require__("../../../../../src/app/about/about/about.component.html"),
            styles: [__webpack_require__("../../../../../src/app/about/about/about.component.scss")]
        }), 
        __metadata('design:paramtypes', [])
    ], AboutComponent);
    return AboutComponent;
}());
//# sourceMappingURL=C:/Code/Github/angularplayground.it/src/about.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-github-corner repositoryUrl=\"https://github.com/socreate/angular-playground\"></app-github-corner>\r\n<header class=\"header\">\r\n  <a \r\n    *ngIf=\"route !== ''\"\r\n    routerLink=\"/\"\r\n    class=\"header__link\">\r\n    <playground-logo class=\"header__logo\"></playground-logo>\r\n  </a>\r\n  <nav class=\"header__nav\">\r\n    <a \r\n      routerLink=\"/\" \r\n      routerLinkActive=\"header__navItem--active\" \r\n      [routerLinkActiveOptions]=\"{exact:true}\"\r\n      class=\"header__navItem\">\r\n        Home\r\n    </a>\r\n    <a \r\n      routerLink=\"/docs\" \r\n      routerLinkActive=\"header__navItem--active\"\r\n      class=\"header__navItem\">\r\n      docs\r\n    </a>\r\n    <a \r\n      routerLink=\"/about\" \r\n      routerLinkActive=\"header__navItem--active\"\r\n      class=\"header__navItem\">\r\n      about\r\n    </a>\r\n  </nav>\r\n</header>\r\n  <main class=\"content\">\r\n    <router-outlet></router-outlet>\r\n  </main>\r\n  <footer class=\"footer\">\r\n    <div class=\"footer__content\">\r\n      Built with ❤️ for the Angular Community by the team at \r\n      <a \r\n        href=\"https://socreate.it\"\r\n        class=\"footer__link\">\r\n        SoCreate\r\n      </a>\r\n      <a\r\n        class=\"footer__brand\" \r\n        href=\"https://socreate.it\">\r\n        <socreate-logo href=\"footer__logo\"></socreate-logo>\r\n      </a>    \r\n    </div>\r\n  </footer>"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  background: #fff;\n  color: #666;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  min-height: 100vh; }\n  :host app-github-corner /deep/ svg {\n    position: relative;\n    z-index: 1; }\n\n.header {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  margin: 0 auto;\n  max-width: 73.125em;\n  padding: 2.5em;\n  padding: 3.5em 2.5em 2em;\n  position: relative;\n  width: 100%; }\n  .header::before {\n    background: #ebebeb;\n    bottom: 0;\n    content: \"\";\n    height: 1px;\n    left: 2.5em;\n    position: absolute;\n    right: 2.5em; }\n  .header__logo {\n    display: block;\n    width: 15.5em; }\n  .header__nav {\n    margin-left: auto;\n    padding-top: 0.5em; }\n    .header__navItem {\n      color: #333;\n      font-size: 80%;\n      margin-left: 1em;\n      position: relative;\n      text-decoration: none;\n      text-transform: uppercase;\n      z-index: 2; }\n      .header__navItem:hover, .header__navItem:active {\n        color: #60c126;\n        text-decoration: none; }\n      .header__navItem--active {\n        font-weight: bold; }\n        .header__navItem--active:hover {\n          color: #333;\n          cursor: default; }\n\n.content {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  margin: -1px auto 0 auto;\n  max-width: 73.125em;\n  overflow-x: hidden;\n  padding: 2.5em;\n  position: relative;\n  width: 100%; }\n\n.footer {\n  background: #e6e6e6;\n  position: relative; }\n  .footer::before {\n    background: url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20version%3D%221.1%22%20x%3D%220px%22%20y%3D%220px%22%20width%3D%221280px%22%20height%3D%2214px%22%20viewBox%3D%220%200%201280%2014%22%20enable-background%3D%22new%200%200%201280%2014%22%20xml%3Aspace%3D%22preserve%22%3E%0A%3Cpath%20fill%3D%22%23E6E6E6%22%20d%3D%22M1280%2C14V3.3c-0.9%2C0-1.8-0.1-2.7-0.1c-1.1%2C0-2.3%2C0-3.5%2C0c-0.6%2C0-1.3%2C0-1.9%2C0c-0.6%2C0-1.4-0.7-1.7-0.7%0A%09c-0.2%2C0-0.3%2C0-0.5%2C0c-0.3%2C0-0.7%2C0-1%2C0.1c-0.7%2C0-1.4%2C0.1-2.2%2C0.1c-1.6%2C0-3.4%2C0.1-5.3%2C0.1c-3.8%2C0.1-8.1%2C0.1-12.3%2C0.3%0A%09c-8.5%2C0.3-17.1%2C0.8-21.6%2C2.3c-1.6-0.4-49.2%2C1.4-66.4-0.4l1.7-0.9c-4.1%2C0.3-7.2%2C1.7-12.4%2C0.8c0.3-0.4%2C1.7-0.9-0.3-0.9%0A%09c-2.2%2C0.3-11%2C1.6-16.5%2C1l4.7-1c-21.7-1.2-33.2%2C2.5-51.4%2C3.1c0-2.6-17-3.5-25.5-3.9l0.3-0.4c-25.2-0.3-42.8%2C2.2-66.2%2C3.2%0A%09c-14.5-2.9-49.1-1.2-72.4-2.8c3.6%2C0.5-0.6%2C2.1-4.7%2C2.3C912.6%2C5%2C903%2C7.4%2C903.8%2C5l2%2C0c-4.1-2.4-15.4-1.7-24.1-1.8l-1.4%2C3.2%0A%09c-23-4.6-60.1%2C1.7-72.7-2.4c-5.5%2C0.8-12.4%2C0.8-17.9%2C1.6l0.3-1.7c-15.3-0.4-23-0.6-42-0.2l3.9-1.2c-10.7-0.1-13.5%2C4.9-23.4%2C5l-3-2.5%0A%09c-18.7%2C0-37.6-2.2-56%2C0.1c0.3-0.4%2C0.9-1.1%2C3.9-1.2c-8.5-0.1-32.2-1.6-31%2C1.4c-2.2-1.7-19.6%2C0.2-29.1%2C1.1l1.6-1.7%0A%09c-8.5%2C2.1-8.8%2C2.7-20.7%2C3.3c-2.6-0.2-2.5-1.2%2C0.4-1c-8.4-0.7-6.8%2C1.6-17.9%2C0.8l4.2-1.1c-9.7-0.1-8.9%2C0.4-14.2%2C1.7%0A%09C560.7%2C9%2C548.4%2C7.9%2C547%2C6.4c-1.3%2C0.9-6.6%2C2.2-12.3%2C1.7c-0.8-0.6%2C1.3-0.9%2C2.3-1.1c-16.1-1.1-24%2C1.9-35.1%2C0.3c-0.2-0.6-4.3-1-14.4-1.7%0A%09c-0.5-0.1-1-0.3-1.3-0.5l1-0.2c-2.3-0.2-4.4%2C0-6.4%2C0.2c-3.2-0.3-11.3%2C1.2-6.3%2C1.2c-4.1%2C0.9-8.3%2C1.6-14.1%2C0.6%0A%09c-2.7%2C1.1-5.6%2C2.2-7.2%2C2.7c-7.1-2.4-20.7-3.6-22.6-5.1c-15.8%2C0.9-37.2%2C0.6-47.1%2C3.8c-4.5%2C0.4-26.3-1.8-28.5%2C0.4%0A%09c-11.3-1%2C6.4-2-9.2-1.7l2.1-0.7c-30-3.5-48.9%2C5.3-81.6%2C1.3c1.1%2C0.2%2C1.8%2C0.3%2C2.1%2C0.5c-38.6-2-79.6%2C1.9-117.7-1.3%0A%09c-10.8-0.6-12%2C0.8-18.6%2C1.8l-2.3-1.8l-11.3%2C2.1c-16%2C1.5-27.8-4.4-48-1.6l2.6%2C1.2c-7.3-0.2-23.1%2C0.7-21.9-0.7%0A%09c-0.7%2C0.2-2.4%2C1.3-5.2%2C0.6l-0.2-0.9L27.9%2C9.5C14.1%2C8.8%2C30.1%2C5.7%2C9.9%2C5.5C7.1%2C5.6%2C3.4%2C6.1%2C0%2C6.6L0%2C14H1280z%22/%3E%0A%3C/svg%3E%0A);\n    content: \"\";\n    height: 14px;\n    left: 0;\n    position: absolute;\n    right: 0;\n    top: -14px;\n    z-index: 15; }\n  .footer__content {\n    margin: 0 auto;\n    font-size: 80%;\n    max-width: 73.125em;\n    padding: 5em 2.5em;\n    text-align: center; }\n  .footer__link {\n    color: #00ACED; }\n    .footer__link:hover {\n      color: #60c126;\n      text-decoration: none; }\n  .footer__brand {\n    display: block;\n    margin: 3em auto 0;\n    width: 11em; }\n    .footer__brandLogo {\n      width: 100%; }\n\n@media (max-width: 800px) {\n  .header {\n    display: block;\n    padding-top: 2.5em;\n    text-align: center; }\n    .header::before {\n      left: 0;\n      right: 0; }\n    .header__logo {\n      margin: 0 auto; }\n    .header__nav {\n      padding-top: 1.5em; }\n  .content {\n    padding-top: 3.2em; } }\n\n@media (max-width: 440px) {\n  app-github-corner {\n    display: block;\n    min-width: 320px;\n    position: relative; }\n    app-github-corner /deep/ svg {\n      height: 50px;\n      width: 50px; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(location, router) {
        var _this = this;
        router.events.subscribe(function (val) {
            _this.route = location.path();
        });
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common__["d" /* Location */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_common__["d" /* Location */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === 'function' && _b) || Object])
    ], AppComponent);
    return AppComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Code/Github/angularplayground.it/src/app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_socreate_logo_socreate_logo_component__ = __webpack_require__("../../../../../src/app/shared/socreate-logo/socreate-logo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_playground_logo_playground_logo_component__ = __webpack_require__("../../../../../src/app/shared/playground-logo/playground-logo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("../../../http/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("../../../router/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_markdown_component__ = __webpack_require__("../../../../../src/app/shared/markdown.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__about_about_about_component__ = __webpack_require__("../../../../../src/app/about/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__docs_docs_docs_component__ = __webpack_require__("../../../../../src/app/docs/docs/docs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__shared_github_corner_component__ = __webpack_require__("../../../../../src/app/shared/github-corner.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__docs_introduction_introduction_component__ = __webpack_require__("../../../../../src/app/docs/introduction/introduction.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__docs_installing_installing_component__ = __webpack_require__("../../../../../src/app/docs/installing/installing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__docs_bootstrapping_bootstrapping_component__ = __webpack_require__("../../../../../src/app/docs/bootstrapping/bootstrapping.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__docs_cli_cli_component__ = __webpack_require__("../../../../../src/app/docs/cli/cli.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__docs_angular_cli_angular_cli_component__ = __webpack_require__("../../../../../src/app/docs/angular-cli/angular-cli.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__docs_sandboxing_sandboxing_component__ = __webpack_require__("../../../../../src/app/docs/sandboxing/sandboxing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__docs_api_api_component__ = __webpack_require__("../../../../../src/app/docs/api/api.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__docs_custom_root_ngmodule_custom_root_ngmodule_component__ = __webpack_require__("../../../../../src/app/docs/custom-root-ngmodule/custom-root-ngmodule.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





















var appRoutes = [
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_9__about_about_about_component__["a" /* AboutComponent */] },
    {
        path: 'docs',
        component: __WEBPACK_IMPORTED_MODULE_11__docs_docs_docs_component__["a" /* DocsComponent */],
        children: [
            { path: 'getting-started/introduction', component: __WEBPACK_IMPORTED_MODULE_13__docs_introduction_introduction_component__["a" /* IntroductionComponent */] },
            { path: 'getting-started/installing', component: __WEBPACK_IMPORTED_MODULE_14__docs_installing_installing_component__["a" /* InstallingComponent */] },
            { path: 'getting-started/bootstrapping', component: __WEBPACK_IMPORTED_MODULE_15__docs_bootstrapping_bootstrapping_component__["a" /* BootstrappingComponent */] },
            { path: 'getting-started/cli', component: __WEBPACK_IMPORTED_MODULE_16__docs_cli_cli_component__["a" /* CliComponent */] },
            { path: 'getting-started/angular-cli', component: __WEBPACK_IMPORTED_MODULE_17__docs_angular_cli_angular_cli_component__["a" /* AngularCliComponent */] },
            { path: 'sandboxing/sandboxing-components', component: __WEBPACK_IMPORTED_MODULE_18__docs_sandboxing_sandboxing_component__["a" /* SandboxingComponent */] },
            { path: 'sandboxing/api', component: __WEBPACK_IMPORTED_MODULE_19__docs_api_api_component__["a" /* ApiComponent */] },
            { path: 'sandboxing/custom-root-ngmodule', component: __WEBPACK_IMPORTED_MODULE_20__docs_custom_root_ngmodule_custom_root_ngmodule_component__["a" /* CustomRootNgmoduleComponent */] },
            { path: '', redirectTo: 'getting-started/introduction', pathMatch: 'full' }
        ]
    },
    { path: '', component: __WEBPACK_IMPORTED_MODULE_10__home_home_component__["a" /* HomeComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Q" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_1__shared_playground_logo_playground_logo_component__["a" /* PlaygroundLogoComponent */],
                __WEBPACK_IMPORTED_MODULE_0__shared_socreate_logo_socreate_logo_component__["a" /* SoCreateLogoComponent */],
                __WEBPACK_IMPORTED_MODULE_12__shared_github_corner_component__["a" /* GithubCornerComponent */],
                __WEBPACK_IMPORTED_MODULE_8__shared_markdown_component__["a" /* MarkdownComponent */],
                __WEBPACK_IMPORTED_MODULE_9__about_about_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_10__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_11__docs_docs_docs_component__["a" /* DocsComponent */],
                __WEBPACK_IMPORTED_MODULE_13__docs_introduction_introduction_component__["a" /* IntroductionComponent */],
                __WEBPACK_IMPORTED_MODULE_14__docs_installing_installing_component__["a" /* InstallingComponent */],
                __WEBPACK_IMPORTED_MODULE_15__docs_bootstrapping_bootstrapping_component__["a" /* BootstrappingComponent */],
                __WEBPACK_IMPORTED_MODULE_16__docs_cli_cli_component__["a" /* CliComponent */],
                __WEBPACK_IMPORTED_MODULE_17__docs_angular_cli_angular_cli_component__["a" /* AngularCliComponent */],
                __WEBPACK_IMPORTED_MODULE_18__docs_sandboxing_sandboxing_component__["a" /* SandboxingComponent */],
                __WEBPACK_IMPORTED_MODULE_19__docs_api_api_component__["a" /* ApiComponent */],
                __WEBPACK_IMPORTED_MODULE_20__docs_custom_root_ngmodule_custom_root_ngmodule_component__["a" /* CustomRootNgmoduleComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_router__["b" /* RouterModule */].forRoot(appRoutes)
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=C:/Code/Github/angularplayground.it/src/app.module.js.map

/***/ }),

/***/ "../../../../../src/app/docs/angular-cli/angular-cli.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Setting up an Angular CLI Powered Project</h1>\r\n\r\n<blockquote>For Angular CLI <code>1.2.0</code> and above</blockquote>\r\n\r\n<section markdown>\r\n  Playground ❤️'s Angular CLI and has built in support for integrating with it.\r\n  If your app is using the **Angular CLI** you can set up a new app in Angular CLI\r\n  to run Playground from it. The most minimal setup involves the following four steps:\r\n\r\n  1. Create a new main entry script.\r\n  2. Add an app entry to the `.angular-cli.json` file.\r\n  3. Configure the `angular-playground.json` file.\r\n  4. Update tsconfig Compiler Options\r\n</section>\r\n<h4>A new main entry file</h4>\r\n<div markdown path=\"content/docs/getting-started/angular-cli2.md\"></div>\r\n<section markdown>\r\n  You need to call `initializePlayground()` and pass it in the selector string\r\n  for your `AppComponent` (you will be making use of your existing `index.html` file).\r\n\r\n  And you want to bootstrap the `PlaygroundModule`.\r\n</section>\r\n<h4>Add an app to the Angular CLI config</h4>\r\n<div markdown path=\"content/docs/getting-started/angular-cli3.md\"></div>\r\n<section markdown>\r\n  The following properties are the ones you will want to configure for Playground:\r\n\r\n  - `name` The name of your Playground app (\"playground\" is a good name for that 😎)\r\n  - `outDir` A build dir (in case you want to build Playground)\r\n  - `main` Point to the new entry script you created above\r\n\r\n\r\n  The rest of the properties can be the same as your main app.\r\n</section>\r\n<h4>Update the Angular Playground config</h4>\r\n<div markdown path=\"content/docs/getting-started/angular-cli.md\"></div>\r\n<p markdown>\r\n  When the `angularCli` property is present the `ng serve` command will be used when you\r\n  run the `angular-playground` cli command. Below is a description of the properties of that\r\n  object:\r\n\r\n  + `appName`\r\n  The name of the app from the `.angular-cli.json` config file.\r\n\r\n  + `port` *(optional)*\r\n  The port to tell `ng serve` to use. Defaults to `4201`.\r\n\r\n  + `envionment` *(optional)*\r\n  The environment to target for serving up Playground (will tell Angular CLI to use this instead of its default)\r\n\r\n  + `args` *(optional)*\r\n  An array of strings that will get passed through as options to the `ng serve` command. Useful\r\n  if you want to pass things like `-o` to tell the Angular CLI to auto open the serve in a browser.\r\n</p>\r\n<h4>Update tsconfig Compiler Options</h4>\r\n<p markdown>\r\n  Change the compilerOptions -> module option in your `tsconfig.json` or `tsconfig.app.json` to be set to <em>\"esnext\"</em>.\r\n</p>\r\n<div markdown path=\"content/docs/getting-started/angular-cli5.md\"></div>\r\n<p>\r\n  The Playground CLI will handle running the sandbox file build and watch and\r\n  will also kick off `ng serve` and target your environment configured for the playground.\r\n  Check out the docs on the <a routerLink=\"/docs/getting-started/cli\">Playground CLI</a>\r\n  for more info.\r\n</p>\r\n<p>\r\n  With the setup in place it's time to <a routerLink=\"/docs/sandboxing/sandboxing-components\">start sandboxing</a>\r\n  components, directives and pipes!\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/docs/angular-cli/angular-cli.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/docs/angular-cli/angular-cli.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AngularCliComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AngularCliComponent = (function () {
    function AngularCliComponent() {
    }
    AngularCliComponent.prototype.ngOnInit = function () {
        window.scrollTo(0, 0);
    };
    AngularCliComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Component */])({
            selector: 'app-angular-cli',
            template: __webpack_require__("../../../../../src/app/docs/angular-cli/angular-cli.component.html"),
            styles: [__webpack_require__("../../../../../src/app/docs/angular-cli/angular-cli.component.scss")]
        }), 
        __metadata('design:paramtypes', [])
    ], AngularCliComponent);
    return AngularCliComponent;
}());
//# sourceMappingURL=C:/Code/Github/angularplayground.it/src/angular-cli.component.js.map

/***/ }),

/***/ "../../../../../src/app/docs/api/api.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Sandbox API</h1>\r\n<section markdown>\r\n  All of the sandbox API functions/classes/interfaces are exported from the `angular-playground`\r\n  module. If you are using TypeScript you can do an import statement to get access to them.\r\n\r\n  The `sandboxOf` function and `SandboxBuilder` are *\"TypeScripted\"* out so you can discover\r\n  the different parameters/options/etc within your IDE/editor (if it has TypeScript support).\r\n  Or you can always explore the [source code](https://github.com/socreate/angular-playground)!\r\n</section>\r\n<h5>Function</h5>\r\n<div markdown path=\"content/docs/api/api.md\"></div>\r\n<section markdown>\r\n  The `sandboxOf` function returns an instance of a `SandboxBuilder` that has a fluent\r\n  api allowing for method chaining via it's `add` method. The `add` method is used to add\r\n  scenarios for your sandboxed component. Each scenario needs a `description` (the first parameter),\r\n  and a `scenarioConfig` object (the second parameter). The `scenarioConfig` object requires a\r\n  `template` property at a minimum.\r\n</section>\r\n<h5>Class</h5>\r\n<div markdown path=\"content/docs/api/api2.md\"></div>\r\n<h5>Interfaces</h5>\r\n<div markdown path=\"content/docs/api/api3.md\"></div>\r\n<section markdown>\r\n  The `SandboxOfConfig` gives you a way to set dependencies for the sandboxed component. This creates\r\n  a dynamic `NgModule` around the sandboxed component. So these config properties are the same ones you\r\n  are used to using for an `NgModule` decorator.\r\n\r\n  This also has a `label` property that allows you to label your sandboxes. This value gets rendered next to the\r\n  component name in the Playground UI. So if you have 2 components in your app named `InfoBlock` that lived\r\n  in different features, you could use the `label` to make those unique for readability in the UI (something\r\n  like `label: 'featureA.'` and `label: 'featureB.'`).\r\n\r\n  The `declareComponent` is optional and gets set to `true` by default. Components that get sandboxed\r\n  will get declared in a host `NgModule` when dynamically rendered. If you want to import in an `NgModule`\r\n  that contains the component that you are sandboxing then you can set `declareComponent` to `false`.\r\n</section>\r\n<div markdown path=\"content/docs/api/api4.md\"></div>\r\n<section markdown>\r\n  The `ScenarioConfig` gives you a way to set dependencies at the component level. These are used as the\r\n  `Component` decorator metadata for a host component that renders your sandboxed component as well as the\r\n  host component context (i.e. - any type of class properties on the host component that you want to be able\r\n  to feed to your sandboxed component). So these config properties are the same ones you are used to using for\r\n  a parent component.\r\n</section>\r\n"

/***/ }),

/***/ "../../../../../src/app/docs/api/api.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/docs/api/api.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ApiComponent = (function () {
    function ApiComponent() {
    }
    ApiComponent.prototype.ngOnInit = function () {
        window.scrollTo(0, 0);
    };
    ApiComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Component */])({
            selector: 'app-api',
            template: __webpack_require__("../../../../../src/app/docs/api/api.component.html"),
            styles: [__webpack_require__("../../../../../src/app/docs/api/api.component.scss")]
        }), 
        __metadata('design:paramtypes', [])
    ], ApiComponent);
    return ApiComponent;
}());
//# sourceMappingURL=C:/Code/Github/angularplayground.it/src/api.component.js.map

/***/ }),

/***/ "../../../../../src/app/docs/bootstrapping/bootstrapping.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Bootstrapping Playground</h1>\r\n<p>\r\n  Playground is designed to use your existing app as a host for\r\n  serving up an Playground application, which is nothing more\r\n  than an Angular entry module that can be bootstrapped.\r\n</p>\r\n<blockquote>\r\n  Playground also comes with <a routerLink=\"/docs/getting-started/angular-cli\">built-in support</a>\r\n  for projects using the Angular CLI. Head over there if your app is using\r\n  the Angular CLI.\r\n</blockquote>\r\n<p>To bootstrap the playground, you can create an entry script with the following:</p>\r\n<section markdown path=\"content/docs/getting-started/bootstrapping.md\"></section>\r\n<section markdown>\r\n  You can use your existing `index.html` and whatever other build/serve scenario you\r\n  have in place for you app, you just need to change your entry point to be this\r\n  `main.playground.ts` file instead of your `main.ts` file, or you could do some other\r\n  type of logic to run the `initializePlayground` and bootstrap the `PlaygroundModule` conditionally.\r\n\r\n  The `initializePlayground` function takes in an element selector string. The element\r\n  selector is used to find your existing app element in your `index.html` DOM and\r\n  replace it with the element selector used by the Playground `AppComponent`.\r\n\r\n  If you decide to set up a separate `index.html` file in your project for Playground\r\n  you would still need to call `initializePlayground()`, you would just do so with no\r\n  argument for the element selector. You can put a `ap-root` element in your\r\n  `index.html` file.\r\n</section>\r\n<h5>Resolving the sandboxes.ts file</h5>\r\n<section markdown>\r\n  The `PlaygroundModule` will load the sandboxes.ts file that the CLI generates via a `require('sandboxes')` call.\r\n  In order for that to work you need to support module resolution of that **sandboxes** path to the sandboxes.ts\r\n  file.\r\n\r\n  If you are using Webpack, this can be accomplished with a `resolve.alias`:\r\n</section>\r\n<section markdown path=\"content/docs/bootstrapping/webpack.md\"></section>\r\n<section markdown>\r\n  Finally, all you need to do from here is to serve your application in a manner in which\r\n  your `initializePlayground` and bootstrap of the `PlaygroundModule` call will get run.\r\n</section>\r\n<p>\r\n  With the setup in place it's time to <a routerLink=\"/docs/sandboxing/sandboxing-components\">start sandboxing</a>\r\n  components, directives and pipes!\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/docs/bootstrapping/bootstrapping.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/docs/bootstrapping/bootstrapping.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BootstrappingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BootstrappingComponent = (function () {
    function BootstrappingComponent() {
    }
    BootstrappingComponent.prototype.ngOnInit = function () {
        window.scrollTo(0, 0);
    };
    BootstrappingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Component */])({
            selector: 'app-bootstrapping',
            template: __webpack_require__("../../../../../src/app/docs/bootstrapping/bootstrapping.component.html"),
            styles: [__webpack_require__("../../../../../src/app/docs/bootstrapping/bootstrapping.component.scss")]
        }), 
        __metadata('design:paramtypes', [])
    ], BootstrappingComponent);
    return BootstrappingComponent;
}());
//# sourceMappingURL=C:/Code/Github/angularplayground.it/src/bootstrapping.component.js.map

/***/ }),

/***/ "../../../../../src/app/docs/cli/cli.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>The Playground CLI</h1>\r\n<p markdown>\r\n  Playground is designed to find files in your existing app with\r\n  the `.sandbox.ts` extension that use the Playground API to set up sandboxes\r\n  of components. To do this auto-discovery the Playground needs to\r\n  create a static file on the fly (**sandboxes.ts**) to be able to have everything play nice with\r\n  Angular's module system. To do that, Playground provides a cli!\r\n\r\n  The cli for the playground can be run with the command:\r\n\r\n```\r\nangular-playground [config-file]\r\n```\r\n\r\n  The `angular-playground` command will look for a file named `angular-playground.json` \r\n  next to your `package.json` file by default. The `config-file` argument is optional\r\n  and provides a way for you to point to the config file if you want to put it in a different\r\n  location or name it something else.\r\n\r\n  So, you will need a config file! Create an **angular-playground.json** file in\r\n  your project (typically next to your package.json file) with the following content:\r\n</p>\r\n<div markdown path=\"content/docs/getting-started/cli.md\"></div>\r\n<p markdown>\r\n  The `sourceRoot` value will be a path relative to the location of your **package.json**\r\n  file for your project. This will be the directory that will be looked at (it will go down recursively from there)\r\n  to find your **\\*.sandbox.ts** files dynamically. It will also be the directory where the **sandboxes.ts**\r\n  file will get written to.\r\n\r\n  This means you will most likely want to add `sandboxes.ts` to your `.gitignore` file:\r\n\r\n```\r\n/src/sandboxes.ts\r\n```\r\n\r\n  You will also want to set up a script in your `package.json` file to handle running the\r\n  cli command:\r\n</p>\r\n<div markdown path=\"content/docs/getting-started/cli2.md\"></div>\r\n<p markdown>\r\n  From there you can call:\r\n\r\n```\r\nnpm run playground\r\n```\r\n\r\n  This will build your `sandboxes.ts` file and will start a watch that will handle\r\n  re-running the file build as you modify/add files with the `*.sandbox.ts` extension\r\n  in your project.\r\n\r\n  #### The angular-playground command\r\n\r\n  The `angular-playground` command has the following arguments/flags:  \r\n\r\n```\r\n[config-file]\r\n    The path to the config file (including file name) relative to \r\n    the package.json file location. This is optional. The command\r\n    will auto-look for a config file named angular-playground.json\r\n    next to the package.json when this argument is left off.\r\n\r\n-no-watch\r\n    Disables the watch call so only the sandboxes.ts file build is run.\r\n    Useful for when you want to build Playground and serve it up somewhere.\r\n\r\n-no-serve\r\n    Disables the Angular CLI integrated ng serve call.\r\n    Useful for when you want to build Playground and serve it up somewhere.\r\n```\r\n\r\n  Next you need to serve up the Playground within your environment. Check out how you can:\r\n</p>\r\n<ul>\r\n  <li>\r\n    <a routerLink=\"/docs/getting-started/bootstrapping\">Do this in your own build system</a>\r\n  </li>\r\n  <li>\r\n    <a routerLink=\"/docs/getting-started/angular-cli\">Do this with the Angular CLI</a>\r\n  </li>\r\n</ul>\r\n"

/***/ }),

/***/ "../../../../../src/app/docs/cli/cli.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/docs/cli/cli.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CliComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CliComponent = (function () {
    function CliComponent() {
    }
    CliComponent.prototype.ngOnInit = function () {
        window.scrollTo(0, 0);
    };
    CliComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Component */])({
            selector: 'app-cli',
            template: __webpack_require__("../../../../../src/app/docs/cli/cli.component.html"),
            styles: [__webpack_require__("../../../../../src/app/docs/cli/cli.component.scss")]
        }), 
        __metadata('design:paramtypes', [])
    ], CliComponent);
    return CliComponent;
}());
//# sourceMappingURL=C:/Code/Github/angularplayground.it/src/cli.component.js.map

/***/ }),

/***/ "../../../../../src/app/docs/custom-root-ngmodule/custom-root-ngmodule.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Custom Root NgModule</h1>\r\n<p markdown>\r\n  The `PlaygroundModule` that is exported from `angular-playground` is created to be\r\n  used as the root NgModule. It is configured with the core browser app stuff for\r\n  an Angular app, primarily what is needed for the Playground app itself. In most cases\r\n  when your app code needs other imports, providers, etc you are able to bring these\r\n  in at a child NgModule level and get them incorporated into a sandbox of.\r\n</p>\r\n<p markdown>\r\n  But there are some things that need to be brought in at the root NgModule level. Things\r\n  like `BrowserAnimationsModule` and overriding default providers like `ErrorHandler`. To\r\n  do this we need to be able to control what goes into that root NgModule. Luckily, we have\r\n  a `PlaygroundCommonModule` that allows us to create our own root NgModule and then import\r\n  what we need for Playground.\r\n</p>\r\n<p markdown>\r\n  So in the case where we have app code that uses the `BrowserAnimationsModule`, we would\r\n  create our own root NgModule for Playground like so:\r\n</p>\r\n<div markdown path=\"content/docs/custom-root-ngmodule/root-ngmodule.md\"></div>\r\n<p markdown>\r\n  Note that we import `PlaygroundCommonModule` and add that to the imports list, and we\r\n  import `AppComponent` from Playground and add that to the bootstrap list. These are the\r\n  things we need to do to get Playground to work in our custom root NgModule. The rest of\r\n  the stuff is wide open for us to add whatever we need to make our app code work in\r\n  the Playground!\r\n</p>\r\n<p>\r\n  With the custom root NgModule created, we can bootstrap that module in the main entry\r\n  file we use for Playground:\r\n</p>\r\n<div markdown path=\"content/docs/custom-root-ngmodule/main.md\"></div>\r\n<p>\r\n  One final thing to note on this...whatever we put in here is going to be available\r\n  to all of the sandbox scenarios we have, because we are doing this at the root level of\r\n  the Playground app itself. This can be a good thing and a challenging thing. We'll\r\n  leave that up to you to decide. 😎\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/docs/custom-root-ngmodule/custom-root-ngmodule.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/docs/custom-root-ngmodule/custom-root-ngmodule.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomRootNgmoduleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CustomRootNgmoduleComponent = (function () {
    function CustomRootNgmoduleComponent() {
    }
    CustomRootNgmoduleComponent.prototype.ngOnInit = function () {
    };
    CustomRootNgmoduleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Component */])({
            selector: 'app-custom-root-ngmodule',
            template: __webpack_require__("../../../../../src/app/docs/custom-root-ngmodule/custom-root-ngmodule.component.html"),
            styles: [__webpack_require__("../../../../../src/app/docs/custom-root-ngmodule/custom-root-ngmodule.component.scss")]
        }), 
        __metadata('design:paramtypes', [])
    ], CustomRootNgmoduleComponent);
    return CustomRootNgmoduleComponent;
}());
//# sourceMappingURL=C:/Code/Github/angularplayground.it/src/custom-root-ngmodule.component.js.map

/***/ }),

/***/ "../../../../../src/app/docs/docs/docs.component.html":
/***/ (function(module, exports) {

module.exports = "<a\r\n  (click)=\"setShowNav(true)\"\r\n  title=\"Menu\"\r\n  class=\"navShow\">\r\n    <span class=\"navShow__label\">Menu</span>\r\n</a>\r\n<aside\r\n  [ngClass]=\"{\r\n    'nav--open': !navClosed,\r\n    'nav--close': navClosed}\"\r\n  class=\"nav\">\r\n  <div class=\"nav__block\">\r\n    <a\r\n      (click)=\"setShowNav(false)\"\r\n       title=\"Close Menu\"\r\n      class=\"nav__close\">\r\n      <span class=\"nav__closeLabel\">Close Menu</span>\r\n    </a>\r\n    <h5 class=\"nav__title\">Getting Started</h5>\r\n    <a\r\n      routerLink=\"/docs/getting-started/introduction\"\r\n      routerLinkActive=\"nav__item--active\"\r\n      class=\"nav__item\"\r\n      (click)=\"setShowNav(false)\">\r\n      Introduction\r\n    </a>\r\n    <a\r\n      routerLink=\"/docs/getting-started/installing\"\r\n      routerLinkActive=\"nav__item--active\"\r\n      class=\"nav__item\"\r\n      (click)=\"setShowNav(false)\">\r\n      Installing\r\n    </a>\r\n    <a\r\n      routerLink=\"/docs/getting-started/cli\"\r\n      routerLinkActive=\"nav__item--active\"\r\n      class=\"nav__item\"\r\n      (click)=\"setShowNav(false)\">\r\n      Playground CLI\r\n    </a>\r\n    <a\r\n      routerLink=\"/docs/getting-started/bootstrapping\"\r\n      routerLinkActive=\"nav__item--active\"\r\n      class=\"nav__item\"\r\n      (click)=\"setShowNav(false)\">\r\n      Bootstrapping Playground\r\n    </a>\r\n    <a\r\n      routerLink=\"/docs/getting-started/angular-cli\"\r\n      routerLinkActive=\"nav__item--active\"\r\n      class=\"nav__item\"\r\n      (click)=\"setShowNav(false)\">\r\n      Setup With Angular CLI\r\n    </a>\r\n  </div>\r\n  <div class=\"nav__block\">\r\n    <h5 class=\"nav__title\">Sandboxing</h5>\r\n    <a\r\n      routerLink=\"/docs/sandboxing/sandboxing-components\"\r\n      routerLinkActive=\"nav__item--active\"\r\n      class=\"nav__item\"\r\n      (click)=\"setShowNav(false)\">\r\n      Sandboxing Components\r\n    </a>\r\n    <a\r\n      routerLink=\"/docs/sandboxing/api\"\r\n      routerLinkActive=\"nav__item--active\"\r\n      class=\"nav__item\"\r\n      (click)=\"setShowNav(false)\">\r\n      Sandbox API\r\n    </a>\r\n    <a\r\n      routerLink=\"/docs/sandboxing/custom-root-ngmodule\"\r\n      routerLinkActive=\"nav__item--active\"\r\n      class=\"nav__item\"\r\n      (click)=\"setShowNav(false)\">\r\n      Custom Root NgModule\r\n    </a>\r\n  </div>\r\n</aside>\r\n<article class=\"content\">\r\n  <router-outlet></router-outlet>\r\n</article>\r\n"

/***/ }),

/***/ "../../../../../src/app/docs/docs/docs.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  font-size: 1rem;\n  max-width: 100%; }\n\n.navShow {\n  display: none; }\n\n.nav {\n  max-width: 12.5em;\n  min-width: 12.5em;\n  padding: 0 1em 2em 0;\n  border-right: 1px solid #e6e6e6; }\n  .nav__close {\n    display: none; }\n  .nav__block {\n    padding-bottom: 2em; }\n  .nav__title {\n    color: #333; }\n  .nav__item {\n    display: block;\n    text-decoration: none;\n    margin-bottom: 0.5em;\n    color: #00ACED;\n    font-size: 80%;\n    position: relative; }\n    .nav__item::before {\n      bottom: 0.2em;\n      content: \"\";\n      display: block;\n      left: -0.7em;\n      opacity: 0;\n      position: absolute;\n      top: 0.2em;\n      width: 0.25em; }\n    .nav__item:hover {\n      color: #60c126;\n      text-decoration: underline; }\n      .nav__item:hover::before {\n        background: currentColor;\n        opacity: 1; }\n    .nav__item--active {\n      color: #333;\n      font-weight: bold; }\n      .nav__item--active::before {\n        opacity: 1;\n        background: #60c126; }\n      .nav__item--active:hover {\n        color: #333;\n        cursor: default;\n        text-decoration: none; }\n        .nav__item--active:hover::before {\n          background: #60c126; }\n\n.content {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  max-width: calc(100% - 12.5em);\n  min-width: calc(100% - 12.5em);\n  padding-left: 2em; }\n  .content /deep/ h1,\n  .content /deep/ h2,\n  .content /deep/ h3,\n  .content /deep/ h4,\n  .content /deep/ h5 {\n    color: #333; }\n  .content /deep/ p {\n    line-height: 1.6;\n    margin-bottom: 1.6em; }\n  .content /deep/ strong {\n    color: #333; }\n  .content /deep/ a {\n    color: #00ACED;\n    text-decoration: underline; }\n    .content /deep/ a:hover {\n      color: #60c126;\n      text-decoration: none; }\n  .content /deep/ blockquote {\n    background-color: rgba(230, 230, 230, 0.25);\n    border-left: 0.3334em solid #00ACED;\n    border-bottom-right-radius: 0.4em;\n    border-top-right-radius: 0.4em;\n    color: #333;\n    margin: 1.6em 0;\n    padding: 1em 1.25em; }\n  .content /deep/ ol {\n    list-style: none;\n    margin: 0 0 1.6rem;\n    padding: 0; }\n    .content /deep/ ol li {\n      counter-increment: step-counter;\n      line-height: 1.6;\n      padding-left: 2.8rem;\n      position: relative; }\n      .content /deep/ ol li::before {\n        content: counter(step-counter) \".)\";\n        display: block;\n        left: 0;\n        padding-right: .6em;\n        text-align: right;\n        position: absolute;\n        width: 2.25rem; }\n  .content /deep/ ul {\n    list-style: none;\n    margin: 0 0 1.6rem;\n    padding: 0; }\n    .content /deep/ ul li {\n      line-height: 1.6;\n      padding-left: 1.9rem;\n      position: relative; }\n      .content /deep/ ul li::before {\n        content: \"\";\n        display: block;\n        border-left: 0.5em solid #60c126;\n        border-bottom: 0.3em solid transparent;\n        border-top: 0.3em solid transparent;\n        height: 0;\n        position: absolute;\n        left: 0.75rem;\n        top: 0.65em;\n        width: 0; }\n  .content /deep/ code {\n    background-color: rgba(230, 230, 230, 0.5);\n    border-radius: 0.4em;\n    color: #333;\n    padding: 0.15em 0.5em; }\n  .content /deep/ pre {\n    background-color: rgba(230, 230, 230, 0.5);\n    border-radius: 0.4em;\n    color: #333;\n    margin-bottom: 1.6em; }\n    .content /deep/ pre:not([class*=\"language\"]) {\n      padding: 1em; }\n    .content /deep/ pre code {\n      background: none transparent;\n      color: #333;\n      display: block;\n      padding: 0; }\n  .content /deep/ h6 {\n    background: #60c126;\n    border-top-left-radius: 0.4em;\n    border-top-right-radius: 0.4em;\n    color: #fff;\n    font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;\n    font-size: 1em;\n    line-height: 1.2;\n    margin-bottom: -0.5em;\n    padding: 0.5em 1em; }\n    .content /deep/ h6 + pre {\n      border-top-left-radius: 0;\n      border-top-right-radius: 0; }\n\n@media (max-width: 800px) {\n  :host {\n    min-width: 100%; }\n  .navShow {\n    background: #00ACED;\n    border: solid 1px white;\n    cursor: pointer;\n    display: block;\n    height: 2.7em;\n    overflow: hidden;\n    position: absolute;\n    right: -1px;\n    padding: 0.7em;\n    text-align: center;\n    top: -2px;\n    width: 3em; }\n    .navShow::before {\n      background: linear-gradient(to bottom, white, white 17%, transparent 17%, transparent 41.5%, white 41.5%, white 58.5%, transparent 58.5%, transparent 83%, white 83%, white 100%);\n      bottom: 0.7em;\n      content: \"\";\n      left: 0.7em;\n      position: absolute;\n      right: 0.7em;\n      top: 0.7em; }\n    .navShow__label {\n      border: 0 !important;\n      clip: rect(1px, 1px, 1px, 1px);\n      height: 1px !important;\n      overflow: hidden;\n      padding: 0 !important;\n      position: absolute !important;\n      width: 1px !important; }\n    .navShow:hover {\n      background: #60c126; }\n  .nav {\n    background: #2F3E4E;\n    border: none;\n    height: calc(100% + 1px);\n    padding-left: 1.5em;\n    padding-top: 3em;\n    position: absolute;\n    right: 0;\n    top: -1px;\n    transition: -webkit-transform 0.3s;\n    transition: transform 0.3s;\n    transition: transform 0.3s, -webkit-transform 0.3s;\n    width: 12.5em;\n    z-index: 10; }\n    .nav__close {\n      cursor: pointer;\n      display: block;\n      width: 1em;\n      height: 1em;\n      overflow: hidden;\n      position: absolute;\n      right: 1em;\n      top: 1em; }\n      .nav__close::before, .nav__close::after {\n        content: '';\n        position: absolute;\n        height: 2px;\n        width: 100%;\n        top: 50%;\n        left: 0;\n        margin-top: -1px;\n        background: #00ACED; }\n      .nav__close::before {\n        -webkit-transform: rotate(45deg);\n                transform: rotate(45deg); }\n      .nav__close::after {\n        -webkit-transform: rotate(-45deg);\n                transform: rotate(-45deg); }\n      .nav__closeLabel {\n        border: 0 !important;\n        clip: rect(1px, 1px, 1px, 1px);\n        height: 1px !important;\n        overflow: hidden;\n        padding: 0 !important;\n        position: absolute !important;\n        width: 1px !important; }\n      .nav__close:hover::before, .nav__close:hover::after {\n        background: #60c126; }\n    .nav__title {\n      color: #fff; }\n    .nav__item--active, .nav__item--active:hover {\n      color: #fff; }\n    .nav--open {\n      -webkit-transform: translate3d(0, 0, 0);\n              transform: translate3d(0, 0, 0); }\n    .nav--close {\n      -webkit-transform: translate3d(12.5em, 0, 0);\n              transform: translate3d(12.5em, 0, 0); }\n  .content {\n    max-width: 100%;\n    min-width: 100%;\n    padding: 0; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/docs/docs/docs.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DocsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DocsComponent = (function () {
    function DocsComponent() {
        this.navClosed = true;
    }
    DocsComponent.prototype.setShowNav = function (show) {
        this.navClosed = !show;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Input */])(), 
        __metadata('design:type', Object)
    ], DocsComponent.prototype, "navClosed", void 0);
    DocsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Component */])({
            selector: 'app-docs',
            template: __webpack_require__("../../../../../src/app/docs/docs/docs.component.html"),
            styles: [__webpack_require__("../../../../../src/app/docs/docs/docs.component.scss")]
        }), 
        __metadata('design:paramtypes', [])
    ], DocsComponent);
    return DocsComponent;
}());
//# sourceMappingURL=C:/Code/Github/angularplayground.it/src/docs.component.js.map

/***/ }),

/***/ "../../../../../src/app/docs/installing/installing.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Installing</h1>\r\n<p>\r\n  Playground for Angular is available as an npm package.\r\n</p>\r\n<section markdown>\r\n```\r\nnpm i -D angular-playground\r\n```\r\n</section>\r\n<p>\r\n  There are three primary steps to getting up and running with Playground for Angular.\r\n</p>\r\n<ol>\r\n  <li>\r\n    Install the package into your project.\r\n  </li>\r\n  <li>\r\n    Create a <a routerLink=\"/docs/getting-started/cli\">json config file</a> for\r\n    the Playground CLI to use.\r\n  </li>\r\n  <li>\r\n    Set up <a routerLink=\"/docs/getting-started/bootstrapping\">bootstrap logic</a>\r\n    to make use of the `PlaygroundModule` as an entry module.\r\n  </li>\r\n</ol>\r\n<section markdown>\r\n  From there you can start writing sandbox files for your components and directives\r\n  and make use of the Playground CLI to discover those files and watch for changes.\r\n  With all that in place, you just need to serve up the bootstrap logic that uses\r\n  the `PlaygroundModule`.\r\n</section>\r\n"

/***/ }),

/***/ "../../../../../src/app/docs/installing/installing.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/docs/installing/installing.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InstallingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InstallingComponent = (function () {
    function InstallingComponent() {
    }
    InstallingComponent.prototype.ngOnInit = function () {
        window.scrollTo(0, 0);
    };
    InstallingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Component */])({
            selector: 'app-installing',
            template: __webpack_require__("../../../../../src/app/docs/installing/installing.component.html"),
            styles: [__webpack_require__("../../../../../src/app/docs/installing/installing.component.scss")]
        }), 
        __metadata('design:paramtypes', [])
    ], InstallingComponent);
    return InstallingComponent;
}());
//# sourceMappingURL=C:/Code/Github/angularplayground.it/src/installing.component.js.map

/***/ }),

/***/ "../../../../../src/app/docs/introduction/introduction.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Introduction</h1>\r\n<section markdown>\r\n  The component architecture of [Angular](https://angular.io) allows for modularity, which can be glorious!\r\n  You can break down your application into smaller chunks, contain logic and data,\r\n  and create re-usability. But working on those chunks in the scope of your application\r\n  can become cumbersome.\r\n\r\n  For example, being able to create a component that just focuses on rendering\r\n  a shipment line item is great, but to see that component in action typically requires\r\n  you to launch the full app, find a customer that has an order that has a shipment that\r\n  has line items so that you can see your component rendered. Development of modular\r\n  components would be much more efficient if you could work on those in isolation...\r\n\r\n  ##### Welcome to the Playground for Angular!\r\n\r\n  Playground for Angular is a drop in entry module that provides a UI development\r\n  environment for building and maintaining Angular application components,\r\n  directives and pipes in isolation. It is an entry point module designed to be dropped\r\n  in and run within your existing application, and takes advantage of your build\r\n  system to build your components, directives and pipes.\r\n</section>\r\n<blockquote>\r\n  You can bootstrap the PlaygroundModule the same way you bootstrap your AppModule.\r\n</blockquote>\r\n<section markdown>\r\n  There is a CLI provided with Playground that handles watching your filesystem\r\n  and building a reference file for files in your project written to sandbox components\r\n  and directives. You write sandbox code and then run the CLI command to start your\r\n  build and watch.\r\n</section>\r\n<blockquote>\r\n  You can create a sandbox for a component and set up multiple scenarios for the dependencies\r\n  it uses.\r\n</blockquote>\r\n<section markdown>\r\n  Playground is a micro-app designed to dynamically render components, directives and\r\n  pipes from your application. It is contained within the `PlaygroundModule` and comes ready\r\n  to be bootstrapped. You actually set up your app and your build pipeline to launch an instance\r\n  of your environment with the `PlaygroundModule` as the entry module. This allows Playground to be able to\r\n  render your components, directives and pipes while making use of whatever custom stuff\r\n  you do in your app.\r\n</section>\r\n<blockquote>\r\n  You leverage your build pipeline and serve, Playground runs like an instance of your app.\r\n</blockquote>\r\n<section markdown>\r\n  Setting up an alternative bootstrap should be pretty straight forward. If you are using\r\n  the Angular CLI you can take advantage of the built in support in Playground\r\n  for hooking into `ng serve`.\r\n</section>\r\n<p>\r\n  Head over to the <a routerLink=\"/docs/getting-started/installing\">installation guide</a> to\r\n  get started.\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/docs/introduction/introduction.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/docs/introduction/introduction.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IntroductionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var IntroductionComponent = (function () {
    function IntroductionComponent() {
    }
    IntroductionComponent.prototype.ngOnInit = function () {
        window.scrollTo(0, 0);
    };
    IntroductionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Component */])({
            selector: 'app-introduction',
            template: __webpack_require__("../../../../../src/app/docs/introduction/introduction.component.html"),
            styles: [__webpack_require__("../../../../../src/app/docs/introduction/introduction.component.scss")]
        }), 
        __metadata('design:paramtypes', [])
    ], IntroductionComponent);
    return IntroductionComponent;
}());
//# sourceMappingURL=C:/Code/Github/angularplayground.it/src/introduction.component.js.map

/***/ }),

/***/ "../../../../../src/app/docs/sandboxing/sandboxing.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Sandboxing Components</h1>\r\n<p markdown>\r\n  To create a sandbox with scenarios for components in your Angular application you need\r\n  to use the `sandboxOf` function and export the call to that as the default for the file.\r\n  This file needs to have the `.sandbox.ts` extension for it to be auto-discovered.\r\n\r\n  So let's say you have a `NoticeComponent` in a file named `notice.component.ts`.\r\n</p>\r\n<div markdown path=\"content/docs/sandboxing/sandboxing-components.md\"></div>\r\n<p markdown>\r\n  You can create a file next to it named `notice.component.sandbox.ts` with the following content:\r\n</p>\r\n<div markdown path=\"content/docs/sandboxing/sandboxing-components2.md\"></div>\r\n"

/***/ }),

/***/ "../../../../../src/app/docs/sandboxing/sandboxing.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/docs/sandboxing/sandboxing.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SandboxingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SandboxingComponent = (function () {
    function SandboxingComponent() {
    }
    SandboxingComponent.prototype.ngOnInit = function () {
        window.scrollTo(0, 0);
    };
    SandboxingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Component */])({
            selector: 'app-sandboxing',
            template: __webpack_require__("../../../../../src/app/docs/sandboxing/sandboxing.component.html"),
            styles: [__webpack_require__("../../../../../src/app/docs/sandboxing/sandboxing.component.scss")]
        }), 
        __metadata('design:paramtypes', [])
    ], SandboxingComponent);
    return SandboxingComponent;
}());
//# sourceMappingURL=C:/Code/Github/angularplayground.it/src/sandboxing.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 class=\"title\">\r\n    <playground-logo class=\"title__logo\"></playground-logo>\r\n    <span class=\"title__label\">Playground for Angular</span>\r\n</h1>\r\n<h4 class=\"subTitle\">\r\n  Work Your Components, Directives, &amp; Pipes in Isolation\r\n  <em class=\"subTitle__note\">(Scenario Driven Development)</em>\r\n</h4>\r\n\r\n<img class=\"demo\" src=\"/assets/screencasts/01-lg.gif\" alt=\"Playground for Angular - Work Your Components, Directives, &amp; Pipes in Isolation\" />\r\n\r\n<h5 class=\"message\">Designed for Angular component, directive and pipe development</h5>\r\n\r\n<ul class=\"highlights\">\r\n  <li class=\"highlight\">\r\n    <a routerLink=\"/docs\" class=\"highlight__link\">\r\n      <span class=\"highlight__label\">\r\n        Setup Playground\r\n      </span>\r\n      <svg class=\"highlight__icon\" viewBox=\"0 0 24 24\">\r\n        <path d=\"M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm1.25 17c0 .69-.559 1.25-1.25 1.25-.689 0-1.25-.56-1.25-1.25s.561-1.25 1.25-1.25c.691 0 1.25.56 1.25 1.25zm1.393-9.998c-.608-.616-1.515-.955-2.551-.955-2.18 0-3.59 1.55-3.59 3.95h2.011c0-1.486.829-2.013 1.538-2.013.634 0 1.307.421 1.364 1.226.062.847-.39 1.277-.962 1.821-1.412 1.343-1.438 1.993-1.432 3.468h2.005c-.013-.664.03-1.203.935-2.178.677-.73 1.519-1.638 1.536-3.022.011-.924-.284-1.719-.854-2.297z\"/>\r\n      </svg>\r\n    </a>\r\n  </li>\r\n  <li class=\"highlight\">\r\n    <a routerLink=\"/about\" class=\"highlight__link\">\r\n      <span class=\"highlight__label\">\r\n        Get the Backstory\r\n      </span>\r\n      <svg class=\"highlight__icon\" viewBox=\"0 0 24 24\">\r\n        <path d=\"M23 5v13.883l-1 .117v-16c-3.895.119-7.505.762-10.002 2.316-2.496-1.554-6.102-2.197-9.998-2.316v16l-1-.117v-13.883h-1v15h9.057c1.479 0 1.641 1 2.941 1 1.304 0 1.461-1 2.942-1h9.06v-15h-1zm-12 13.645c-1.946-.772-4.137-1.269-7-1.484v-12.051c2.352.197 4.996.675 7 1.922v11.613zm9-1.484c-2.863.215-5.054.712-7 1.484v-11.613c2.004-1.247 4.648-1.725 7-1.922v12.051z\"/>\r\n      </svg>\r\n    </a>\r\n  </li>\r\n</ul>\r\n\r\n<h5 class=\"message\">To see the latest updates, check out the <a href=\"https://github.com/SoCreate/angular-playground/blob/master/CHANGELOG.md\">changelog</a></h5>"

/***/ }),

/***/ "../../../../../src/app/home/home.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  font-size: 1rem;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  max-width: 100%;\n  text-align: center; }\n\n.title {\n  font-size: 1em;\n  margin: 0;\n  padding: 1em 0 0; }\n  .title__logo {\n    display: block;\n    margin: 0 auto;\n    max-width: 100%;\n    width: 40em; }\n  .title__label {\n    border: 0 !important;\n    clip: rect(1px, 1px, 1px, 1px);\n    height: 1px !important;\n    overflow: hidden;\n    padding: 0 !important;\n    position: absolute !important;\n    width: 1px !important; }\n\n.subTitle {\n  color: #333;\n  padding-bottom: 1em; }\n  .subTitle__note {\n    display: block;\n    font-size: 70%;\n    color: #999; }\n\n.demo {\n  border: solid 2px #ebebeb;\n  height: auto;\n  margin: 0 auto;\n  width: 100%; }\n\n.message {\n  padding-top: 2em; }\n\n.highlights {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  list-style: none;\n  margin: 0 auto;\n  padding: 0; }\n\n.highlight {\n  border: solid 1px #ebebeb;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  margin: 2em 1em 3em;\n  max-width: 33%;\n  min-width: 33%; }\n  .highlight__link {\n    color: #00ACED;\n    display: block;\n    text-decoration: none;\n    padding: 2em 3em; }\n    .highlight__link:hover {\n      color: #60c126; }\n  .highlight__label {\n    display: block;\n    font-size: 130%;\n    padding-bottom: 1em;\n    text-transform: uppercase; }\n  .highlight__icon {\n    fill: currentColor;\n    height: 4em;\n    width: 4em; }\n\n@media (max-width: 800px) {\n  .highlights {\n    display: block;\n    padding: 1em 0; }\n  .highlight {\n    margin: 1em 0;\n    max-width: 100%;\n    min-width: 100%; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
        window.scrollTo(0, 0);
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/home.component.scss")]
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
//# sourceMappingURL=C:/Code/Github/angularplayground.it/src/home.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/github-corner.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GithubCornerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GithubCornerComponent = (function () {
    function GithubCornerComponent() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Input */])(), 
        __metadata('design:type', Object)
    ], GithubCornerComponent.prototype, "repositoryUrl", void 0);
    GithubCornerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Component */])({
            selector: 'app-github-corner',
            template: "\n    <a href=\"{{repositoryUrl}}\" class=\"github-corner\" aria-label=\"View source on Github\">\n      <svg width=\"80\" height=\"80\" viewBox=\"0 0 250 250\"\n           style=\"fill:#60c126; color:#fff; position: absolute; top: 0; border: 0; right: 0;\" aria-hidden=\"true\">\n        <path d=\"M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z\"></path>\n        <path\n          d=\"M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2\"\n          fill=\"currentColor\" style=\"transform-origin: 130px 106px;\" class=\"octo-arm\"></path>\n        <path\n          d=\"M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z\"\n          fill=\"currentColor\" class=\"octo-body\"></path>\n      </svg>\n    </a>\n  ",
            styles: ["\n  .github-corner:hover .octo-arm {\n    animation: octocat-wave 560ms ease-in-out\n  }\n  \n  @keyframes octocat-wave {\n    0%, 100% {\n      transform: rotate(0)\n    }\n    20%, 60% {\n      transform: rotate(-25deg)\n    }\n    40%, 80% {\n      transform: rotate(10deg)\n    }\n  }\n  \n  @media (max-width: 500px) {\n    .github-corner:hover .octo-arm {\n      animation: none\n    }\n  \n    .github-corner .octo-arm {\n      animation: octocat-wave 560ms ease-in-out\n    }\n  }\n  "]
        }), 
        __metadata('design:paramtypes', [])
    ], GithubCornerComponent);
    return GithubCornerComponent;
}());
//# sourceMappingURL=C:/Code/Github/angularplayground.it/src/github-corner.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/markdown.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MarkdownComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_marked__ = __webpack_require__("../../../../marked/lib/marked.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_marked___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_marked__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prismjs_prism__ = __webpack_require__("../../../../prismjs/prism.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prismjs_prism___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prismjs_prism__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prismjs_components_prism_typescript__ = __webpack_require__("../../../../prismjs/components/prism-typescript.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prismjs_components_prism_typescript___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_prismjs_components_prism_typescript__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MarkdownComponent = (function () {
    function MarkdownComponent(el, http) {
        this.el = el;
        this.http = http;
    }
    Object.defineProperty(MarkdownComponent.prototype, "path", {
        set: function (value) {
            this._path = value;
            if (this._path) {
                this.getContent();
            }
        },
        enumerable: true,
        configurable: true
    });
    MarkdownComponent.prototype.ngAfterViewInit = function () {
        if (!this._path) {
            this.md = this.prepare(this.el.nativeElement.innerHTML);
            this.el.nativeElement.innerHTML = __WEBPACK_IMPORTED_MODULE_1_marked__(this.md);
            Prism.highlightAll(false);
        }
    };
    MarkdownComponent.prototype.getContent = function () {
        var _this = this;
        if (!!this._path) {
            this.ext = this._path.split('.').splice(-1).join();
        }
        this.http.get(this._path)
            .toPromise()
            .then(function (resp) {
            _this.md = resp.text();
            _this.el.nativeElement.innerHTML = __WEBPACK_IMPORTED_MODULE_1_marked__(_this.prepare(_this.md));
            Prism.highlightAll(false);
        })
            .catch(function (error) { return Promise.reject(error.message || error); });
    };
    MarkdownComponent.prototype.prepare = function (raw) {
        return raw ? raw : '';
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Input */])(), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], MarkdownComponent.prototype, "path", null);
    MarkdownComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Component */])({
            selector: '[markdown]',
            template: "<ng-content></ng-content>"
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* ElementRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* ElementRef */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Http */]) === 'function' && _b) || Object])
    ], MarkdownComponent);
    return MarkdownComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Code/Github/angularplayground.it/src/markdown.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/playground-logo/playground-logo.component.html":
/***/ (function(module, exports) {

module.exports = "<svg \r\n    viewBox=\"0 0 645.9 136.4\"\r\n    class=\"logo\"> \r\n    <path class=\"logo__box logo__box--01\" d=\"M57.1,46.2c-0.1-0.3-0.1-0.5-0.1-0.8l-0.6,0.3c0.1-0.3,0.1-0.5,0.4-0.5c-0.4-0.3-1,0.2-1.5-0.4\r\n        c0.3-0.4-0.3-1.2,0.5-1.3c-0.3,1.2,0.8-0.1,0.9,0.9c-0.1-0.2-0.1-0.4,0-0.7c0.1,0,0.2,0,0.2,0.1c0.7-1.2-0.9-0.6-0.8-1.8\r\n        c0.4,0.2,0.8-0.3,0.7-0.5c0,0.5-0.7,0.2-1.1-0.2c0.4-0.8-0.2-0.9-0.2-1.3l-0.2,0.5c-0.2-0.1-0.3-0.2-0.4-0.4c0-0.1,0-0.2-0.1-0.3\r\n        c0-0.2,0-0.3-0.1-0.5c0.3-0.1,0.2,0.7,0.4,0.4c-0.4-0.4-0.2-0.9,0.1-1.5c0.2-0.6,0.5-1.4,0.3-1.9c0.3-0.8,0.8-0.5,1-1.3\r\n        c-0.5-1,0.3-1.9,0.3-3c-0.2,0-0.5,0.1-0.9,0.2c0,0.6,0.1,0.4-1.5,1.1l1.5-0.3l0.2,1.1c-0.2-0.3-0.4-0.5-0.7-0.6l-0.5,0.2\r\n        c0.1,0,0.2,0,0.4,0c0.1,0.5,0.3,0.9,0.2,1.4c-0.5-0.4-0.3-0.3-0.8,0.4c0.4-0.7,0.4-1.1,0.2-1.4c-0.7,0.2-1.4,0.5-1.7,0.2l1.1-1.5\r\n        c-1.6-0.6-4.1,1-5.6,0.7l0.5,0.2c-0.2,0.6-0.9,0.1-1.4,0.4c0-0.5-0.3-0.7-0.5-0.9c0,0.4-1.1,0-1.2,1l-0.7-0.6\r\n        c-1.3-0.2-1.3,1.5-2.5,1.4c0.3-0.5-0.2-0.9,0.6-1.3c-0.4,0-0.8-0.1-0.7,0.3c-0.2-0.3-1.1,0.7-1.5,0.3c-0.2,0.2-0.2,0.7-0.6,0.7\r\n        c-0.1-0.1,0-0.2,0-0.2c0,0.2-0.7,0.4-0.3,0.9c-1.3-1.5-3.4,0.3-4.5-1c-0.9,0.2-1.9,0.4-2.7,0.5c0-0.1,0-0.2,0.1-0.2\r\n        c-1.1-0.4-0.6,1.4-1.9,1c-0.7-0.8,0.6-0.5,0.2-0.7c-0.2-1.6-1.5,0.3-2.4-0.6l0.2-0.1c-0.7-0.5-1.5,0.7-2.6,0.6c0,0,0-0.1,0-0.2\r\n        c-0.7,0.9-2,1.2-3,1.5c0.3-0.6,0.4-0.4,0.2-1c-0.4,0.1,0.2,1-0.7,1.2c-0.3-0.3-1-0.6-1.1-1.3l0.8-0.1c-0.5-0.9-1.1,0.1-1.5,0l0-0.4\r\n        c-1.3,0.2-1.3,1.2-2.6,1.2L19,36c-0.7,1-0.7-0.5-1.4,0.2l-0.3-1c-0.5,0.3-1.7,1-2.6,1.3c0.5-0.8,1.5-1.2,2.1-1.6\r\n        c-0.5,0-1.7,0.2-1.9,0.6c0.2-0.1,0.4-0.4,0.6-0.2c-0.6,0.8-1.4,1.2-2.3,1.2c0.1-1.9-2.6-0.4-3.4-1.8C9.4,35,9,35.1,8.5,35.1\r\n        c-0.2,0-0.4,0-0.7,0c-0.4,0-0.7,0-1.1,0c-1.5-0.1-3.3-0.2-5-0.1c2.6,1.4-1,0.1,0.9,1.5c0,0-0.1,0-0.1,0c0.1,0.6,0.1,0.8,0,0.7\r\n        l0.1-0.1c0,0,0,0.1-0.1,0.1l0,0c-0.3,0.4-0.5,0.9-0.8,1.5c-0.4,0.4-0.4-0.9-0.8-1c0,1.8-0.6,0.5-0.9,1.7c0.5-0.1,0.9,0.9,0.8,1.9\r\n        c0.2-0.5,0.4-1,0.6-1.4c0.5,1.3,0.2,1.7,0,2.3C1,42.6,0.7,43,1.2,43.7l-0.5-0.4C1,44,0.9,46,2.2,46.6c-0.2,0.1-0.6,0.4-0.7,0\r\n        c0,1.8,1.7,3.9,1,5.3l-0.4-0.1c0.1,0.3,0.7,0.5,0.4,1c-0.2,0-0.4-0.1-0.4,0.1c0.1,0.2,0.7,0.8,0.6,1.3l-0.5-0.3\r\n        c-0.3,1.8,1.3,2.6,1.6,4c-1.1,0.1-1.3,1.5-1.4,2.2l-0.2,0c0.1,2,1.2,3.4,1.8,5.2c-1.1,1.3-0.1,4-0.6,5.9c0.2-0.3,0.9,0,1,0.3\r\n        c-0.2,0.5,0.9,1.1-0.1,1.2l0-0.2c-0.9,0.4-0.6,1.3-0.6,2l1.3,0c-1.7,2,1.1,4.8-0.5,5.9c0.4,0.4,0.4,1,0.8,1.4l-0.7,0\r\n        c-0.1,1.3-0.1,1.9,0.2,3.4L4.5,85c0,0.9,2.1,0.9,2.2,1.7l-1,0.3c0.2,1.5-0.6,3.1,0.5,4.5c-0.2,0-0.5,0-0.5-0.3c0,0.7-0.5,2.8,1,2.4\r\n        c-0.9,0.1,0.1,1.6,0.5,2.3L6.4,96c0.9,0.6,1.2,0.6,1.5,1.5c-0.1,0.2-0.4,0.2-0.4,0.1c-0.1,0.6,0.7,0.5,0.5,1.4l-0.5-0.3\r\n        c0,0.8,0.2,0.7,0.8,1.1c0.3,0.3,0,1.8-0.6,2.2c0.4,0,0.9,0.4,0.8,1.1c-0.2,0.2-0.4,0.1-0.5,0c-0.1,0.9,0,1.5,0.2,1.9\r\n        c1-0.1,1.7-0.3,2.2,0.2c-0.1,0.2-0.1,0.3,0,0.4c-1.2-0.2-2.1-0.3-2.5-0.4c0-0.2,0-0.2,0-0.2c-0.1,0.1-0.3,0.3-0.3,0.5\r\n        c0,0.3,0.5,0.6-1,1.1c0.9-0.1,2-0.4,2.9-0.5c1-0.2,1.8-0.2,2.4,0c0,0.1,0.1,0.1,0.1,0.2l-0.2,0.1c0.3,0.1,0.6,0.1,0.8,0\r\n        c0.2,0.1,0.4,0.2,0.6,0.3c0,0.5,0.9,0.4,1.3,0.5c0.1-0.7,0.6-0.5,0.2-1.2c0.1,0.1-0.1,0.1-0.4,0.1c-0.1,0-0.1,0-0.2,0c0,0,0,0,0-0.1\r\n        c-0.3,0-0.6,0-1-0.1c0.4-0.3,0.8-0.6,1.2-0.1c0.3-0.4,0.6-0.8,0.7-1c0.4,1,1.5,1.7,1.5,2.3c1.3-0.2,3,0.1,4-1\r\n        c0.4-0.1,0.4,0.4,0.5,0.7c-0.2,0.1-0.5,0-0.6,0.2c0.8-0.2,2.1,0.2,2.4-0.7c0.9,0.5-0.6,0.8,0.6,0.8l-0.2,0.3\r\n        c2.3,1.8,4.3-1.8,6.8,0.4c-0.2-0.1-0.3-0.2-0.3-0.4c3,1.2,6.5,0.1,9.4,1.8c0.8,0.4,1-0.2,1.6-0.6l0.1,0.8l1-0.7\r\n        c1.4-0.5,2,2.1,3.8,1.2l-0.1-0.5c0.6,0.2,1.9,0,1.7,0.5c0.1-0.1,0.3-0.5,0.5-0.2l0,0.4l1.5-0.5c1.1,0.4-0.4,1.5,1.2,1.8\r\n        c0.6-0.1,1.9-0.9,1.7-1.2c-0.2-0.1-0.6-0.3-0.6-0.7l0.6-0.1c0-0.1,0-0.1,0.1-0.2l0.1,0l0-0.4c0.2-0.7,0.3-1.3,0-2l0.1-4.2l0.2,0.1\r\n        l-0.2-0.2l0-0.8c0.1,0,0.3,0.1,0.3,0.3c0.5-0.6-0.4-0.6,0.2-1.1c0.1-0.1,0.1,0,0.2,0l-0.3-0.6c0.2,0.1,0.7-0.1,0.6,0.3\r\n        c0.6-1.1-0.7-1.8,0-2.2l0.1,0.1c-0.2-1.1-0.5-0.7-1-0.8l0-0.7l1.3-0.5l-0.8-0.2c0-0.2,0.1-0.5,0.4-0.4c-0.5-0.6-0.3,0.1-0.8-0.2\r\n        c0.7-0.7-0.3-2.1,0.9-2.2c-0.6-0.3-0.5,0.7-0.8-0.1c1.3-0.2-0.2-0.9,0.4-1.6c0.7,0.2,0.3,0.9,0.9,0.2c-1.1-0.4,0.3-1.3,0.1-1.9\r\n        c-0.9,0-0.4-1.3-0.6-2.2c0.3,0.1,0.5-1.8,0.9-2.7l0.2,0c-0.9-0.2-0.7-1.1-0.9-1.8c0.5,0,0.8,0.2,1,0.5l0-0.6\r\n        c-0.3-0.2-0.4-0.4-0.5-0.8l0.7,0.2c0-0.8-0.8-1.7-0.3-2.8c-0.4,0-1.1,0.3-1.6,0.2l0-0.6c0.2,0,0.4,0.1,0.5,0.2\r\n        c0-0.1-0.3-0.4-0.1-0.6l0.6,0.5c0.3-0.5-0.5-0.3-0.4-0.7c0.5,0,0.4-0.3,0.7-0.2c0,0.1-0.2,0.3,0,0.5c0.1-0.4,0.4-1,0.8-1.2\r\n        c-0.3,0-0.7,0-0.7-0.3c0-0.8,0.6-0.3,0.9-0.8c-0.3-0.2,0-0.7-0.7-0.8c0-0.2,0.4-0.3,0.5-0.4c-0.3-0.4-0.1-2-0.8-1.6l-0.1,0.1\r\n        c0,0,0,0,0-0.1c-0.7-1.4,0.5-3,0.2-4.4l0.2,0c-0.3-0.9-0.1-1.9-0.7-2.5c0-0.3,0.5-0.6,0.7-0.5c-0.2-0.7-0.4-0.7,0-1.7\r\n        c0.4,0.7,0.4-0.2,0.3,0.7c0.2-0.8,0.6-1,0-1.9c0.6,0.3,0.8-0.6,0.6-1l-0.5,0.6c-0.1-0.5,0-0.8,0-1.2l0.8,0.2c1-1.7-1.7-3.1,0-4.4\r\n        c-0.6-0.5-0.4,0.9-1.1,0.5c0.1-0.8,1.3-1.6,1.3-1.8c0.5-1.1-1.2-1-0.9-2.2c-0.3,0.1-1.1,0.3-1.3-0.6c0.1-0.8,1.3-1,1.5-0.5\r\n        c0,0.2-0.1,0.3-0.2,0.3c0.1,0.3,0.2,0.6,0.5,0.3l-0.3-0.1c0.3-0.4,0.3-1.5,0.8-1.2c-0.3-0.6-0.5-0.3-0.6,0.2c0.4-1,0-1.6,0.3-2.6\r\n        c-0.2,0.2-0.5,0.3-0.5,0.1c0.4-1.5-0.5-0.7-0.7-1.7c0.5-0.6,1.1,0.2,0.7-0.8c0.3-0.6,0.8-0.1,1,0.1c-0.6-1,0.4-1.8,0.5-2.3\r\n        L57.1,46.2z M14.1,106.6C14.1,106.6,14.1,106.6,14.1,106.6c0,0,0,0.2-0.1,0.3c-0.3,0.1-0.4-0.1-0.4-0.2\r\n        C13.7,106.6,13.8,106.6,14.1,106.6z M52.7,100.4c0,0-0.1,0.1-0.1,0.1l0-0.3C52.6,100.2,52.6,100.3,52.7,100.4z\"/>\r\n    <path class=\"logo__box logo__box--02\" d=\"M115.7,90.3L115.7,90.3c-0.3-1-0.5-0.5-1-0.6l-0.1-0.7l1.2-0.6l-0.8-0.1c0-0.2,0-0.5,0.4-0.4\r\n        c-0.6-0.5-0.3,0.1-0.8-0.2c0.6-0.8-0.5-2.1,0.7-2.3c-0.6-0.2-0.4,0.8-0.8,0c1.3-0.3-0.3-0.9,0.2-1.6c0.7,0.2,0.4,0.8,0.9,0.1\r\n        c-1.2-0.3,0.1-1.4-0.1-1.9c-0.9,0-0.5-1.2-0.8-2.2c0.3,0,0.4-1.9,0.6-2.8l0.2,0c-0.9-0.1-0.8-1.1-1.1-1.7c0.5,0,0.8,0.1,1,0.4\r\n        l-0.1-0.6c-0.3-0.1-0.5-0.3-0.6-0.7l0.7,0.1c-0.1-0.8-0.9-1.7-0.6-2.8c-0.4,0-1.1,0.4-1.6,0.4l0-0.6c0.2,0,0.4,0.1,0.5,0.2\r\n        c-0.1-0.1-0.3-0.3-0.2-0.5l0.6,0.4c0.2-0.5-0.5-0.2-0.5-0.6c0.5,0,0.3-0.3,0.7-0.3c0.1,0.1-0.2,0.4,0,0.5c0.1-0.5,0.3-1,0.7-1.2\r\n        c-0.3,0.1-0.7,0.1-0.7-0.3c-0.1-0.8,0.6-0.3,0.8-0.9c-0.4-0.2,0-0.8-0.8-0.7c0-0.2,0.3-0.3,0.5-0.4c-0.4-0.4-0.3-2.1-1-1.5l0,0.1\r\n        c0,0,0,0,0-0.1c-0.8-1.4,0.2-3-0.2-4.4l0.2,0c-0.3-0.8-0.3-1.9-0.9-2.5c0-0.3,0.4-0.6,0.7-0.5c-0.2-0.6-0.5-0.7-0.2-1.7\r\n        c0.5,0.6,0.4-0.3,0.4,0.6c0.1-0.9,0.5-1.1-0.2-1.9c0.6,0.3,0.7-0.7,0.5-1.1l-0.4,0.6c-0.1-0.4-0.1-0.8-0.1-1.3l0.8,0.2\r\n        c0.9-1.8-1.9-3-0.4-4.5c-0.6-0.4-0.3,1-1,0.6c0-0.8,1.2-1.7,1.1-2c0.4-1.1-1.3-0.9-1.1-2.1c-0.3,0.2-1.1,0.4-1.4-0.5\r\n        c0-0.8,1.2-1.1,1.4-0.6c0,0.2,0,0.3-0.1,0.3c0.1,0.3,0.3,0.6,0.6,0.2l-0.3-0.1c0.3-0.4,0.2-1.5,0.7-1.3c-0.3-0.6-0.5-0.2-0.6,0.2\r\n        c0.3-1.1-0.1-1.6,0.1-2.7c-0.1,0.2-0.5,0.4-0.5,0.2c0.2-1.6-0.6-0.6-0.8-1.7c0.4-0.6,1.1,0.1,0.6-0.9c0.3-0.7,0.8-0.2,1,0\r\n        c-0.6-0.9,0.2-1.8,0.3-2.4l0.3,0.5c-0.2-0.3-0.2-0.5-0.2-0.8l-0.6,0.3c0.1-0.3,0.1-0.6,0.3-0.6c-0.4-0.3-1,0.3-1.5-0.3\r\n        c0.3-0.4-0.4-1.2,0.4-1.4c-0.2,1.3,0.8-0.2,1,0.8c-0.1-0.2-0.1-0.4,0-0.8c0.1-0.1,0.2,0,0.2,0.1c0.6-1.2-0.9-0.5-1-1.7\r\n        c0.5,0.1,0.8-0.4,0.7-0.5c0,0.5-0.7,0.3-1.1-0.1c0.3-0.8-0.3-0.8-0.3-1.3l-0.1,0.5c-0.5-0.1-0.4-0.5-0.6-1.1c0.1,0,0.2,0,0.2,0.1\r\n        c-0.2-0.6,0.8-2,0.2-2.9c0.2-0.8,0.8-0.5,0.9-1.2c-0.3-0.6-0.2-1.1-0.1-1.6c0.1-0.5,0.2-1.1,0.1-1.7c-0.2,0-0.4,0.1-0.6,0.1\r\n        c0,0.6,0.1,0.4-1.4,1.1l1.1-0.2l0.4,1.4c-0.3-0.3-0.6-0.6-0.9-0.8l-0.1,0.1l0.1,0c0.1,0.6,0.5,1.1,0.4,1.6c-0.5-0.4-0.4-0.4-0.8,0.3\r\n        c0.4-0.8,0.2-1.2,0-1.5c-0.6,0.2-1.1,0.4-1.4,0.1l1-1.5c-0.8-0.3-1.9,0-2.8,0.3c-1,0.3-2.1,0.6-2.7,0.5l0.5,0.2\r\n        c-0.2,0.6-1,0.1-1.4,0.4c0-0.5-0.3-0.7-0.5-0.9c0,0.4-1.1,0-1.2,1l-0.7-0.6c-1.3-0.2-1.3,1.5-2.6,1.4c0.3-0.6-0.2-0.9,0.5-1.3\r\n        c-0.4,0-0.8,0-0.8,0.3c-0.3-0.3-1.1,0.7-1.5,0.3c-0.2,0.2-0.2,0.7-0.6,0.7c-0.1-0.1,0-0.2,0-0.2c0,0.2-0.7,0.4-0.3,0.9\r\n        c-1.3-1.4-3.4,0.3-4.6-0.9c-0.9,0.2-1.9,0.4-2.7,0.5c0-0.1,0-0.2,0.1-0.2c-1.1-0.4-0.6,1.4-1.9,1c-0.7-0.7,0.6-0.5,0.2-0.7\r\n        c-0.3-1.6-1.5,0.3-2.4-0.6l0.2-0.1c-0.7-0.5-1.5,0.7-2.6,0.7c0,0,0-0.1,0-0.2c-0.7,0.9-2,1.2-3,1.5c0.3-0.6,0.4-0.4,0.2-1\r\n        c-0.4,0.1,0.2,1-0.7,1.3c-0.3-0.3-1-0.6-1.1-1.3l0.8-0.1c-0.5-0.9-1.1,0.1-1.6,0l0-0.4c-1.3,0.2-1.3,1.2-2.7,1.2L75,28\r\n        c-0.4,0.5-0.5,0.4-0.7,0.2c-0.2-0.2-0.5-0.3-0.9,0c-0.2-0.3-0.4-0.6-0.6-0.9c-0.3,0.1-0.8,0.4-1.3,0.6c-0.5,0.3-1,0.5-1.4,0.6\r\n        c0,0.1,0,0.1,0,0.2c0-0.1-0.1-0.2-0.1-0.3c0.1-0.6,1.2-1.1,2-1.5c-0.8,0-2.7,0.2-2.6,0.7c0.2-0.1,0.4-0.4,0.8-0.2\r\n        c-0.1,0.3-0.3,0.5-0.5,0.7c0.2,0.9,0.3,1.6,0.3,2.4c-0.9-0.7-1.1,0.2-1.2,1.4c0,0.3-0.1,0.6-0.1,0.8c0,0.2-0.1,0.4-0.1,0.6\r\n        c-0.1,0.4-0.3,0.6-0.7,0.8c0.6,1.8-0.5,3.5-0.6,5.5c1.5-0.6,0,0.6,1.5,0.6c0.1,0.5,0,0.7-0.1,0.7l0.1-0.1c0,0-0.1,0.1-0.1,0.1l0,0\r\n        l-1,1.4c-0.5,0.3-0.3-0.5-0.6-0.5c-0.2,1-0.7,0.4-1.1,1.1c0.6-0.1,0.8,0.4,0.5,1l0.8-0.8c0.7,1.5-1.4,1.2-0.7,2.7l-0.4-0.5\r\n        c0.2,0.8-0.2,2.8,1,3.6c-0.2,0.1-0.6,0.3-0.7-0.1c-0.3,1.8,1,4.1,0.2,5.5l-0.4-0.2c0.1,0.3,0.7,0.6,0.3,1c-0.2,0-0.4-0.2-0.4,0\r\n        c0.1,0.2,0.6,0.9,0.3,1.4L66,56.2c-0.6,1.7,0.8,2.8,1,4.3c-1.1-0.1-1.5,1.3-1.8,2l-0.2,0c-0.3,2.1,0.7,3.6,1,5.5\r\n        c-1.3,1.1-0.8,4-1.6,5.8c0.2-0.3,0.8,0.1,0.9,0.5c-0.3,0.4,0.7,1.3-0.3,1.1l0-0.2c-1,0.3-0.8,1.2-0.9,1.9l1.3,0.2\r\n        c-2,1.7,0.4,5-1.4,5.9c0.3,0.5,0.3,1,0.5,1.5l-0.7-0.1c-0.3,1.2-0.4,1.9-0.3,3.4l-0.5-0.4C63,88.6,65,89,65,89.8l-1.1,0.2\r\n        c-0.1,1.5-1.1,3-0.3,4.6c-0.2,0-0.5-0.1-0.5-0.4c0,0.4-0.3,1-0.3,1.6c0,0.1,0,0.1,0,0.2c0,0.1,0,0.2,0,0.3c0,0.2,0,0.4,0.1,0.6\r\n        c0.1,0.3,0.3,0.4,0.7,0.3c-0.5,0-0.5,0.7-0.5,1.5c0.1,0.8,0.3,1.6,0.5,2.1c-0.2,0.1-0.5,0.2-0.7,0.2c0.7,0.5,1,0.4,1.2,1.1\r\n        c0.1,0,0.3-0.1,0.5-0.1c0.2,0.1-0.1,0.4-0.4,0.4c0.7,0.2,1.4-0.6,2.3-0.3l-0.8,0.4c1.1,0.1,1.2-0.2,2-0.7c0.4-0.1,0.8-0.1,1.2,0.1\r\n        c0.4,0.2,0.8,0.4,0.9,0.8c0.2-0.4,0.6-0.9,1.1-0.7c0.1,0.2-0.1,0.4-0.2,0.5c1.3,0.5,2-0.8,2.9-0.1c0,0.2,0.1,0.3,0.1,0.4\r\n        c-1,0-1.9-0.1-1.8-0.1c0,0.6,0.8,0.8,0.1,1.6c0.7-0.5,1.9-1.5,2.7-1.2c0,0.1,0.1,0.1,0.1,0.2l-0.1,0.1c0.2,0.1,0.4,0,0.5-0.1\r\n        c0.3,0.1,0.4,0.2,0.7,0.2c0.1,0.5,1,0.3,1.4,0.3c0-0.7,0.5-0.6,0-1.2c0.1,0.1-0.1,0.1-0.4,0.1c-0.1,0-0.1,0-0.2,0.1c0,0,0,0,0-0.1\r\n        c-0.3,0-0.6,0-1.1,0c0.3-0.3,0.7-0.6,1.2-0.2c0.2-0.4,0.5-0.9,0.6-1.1c0.6,1,1.7,1.5,1.8,2.1c1.3-0.4,3-0.2,3.9-1.5\r\n        c0.4-0.2,0.4,0.4,0.6,0.6c-0.2,0.1-0.5,0.1-0.6,0.3c0.7-0.3,2.2-0.1,2.4-1c0.9,0.4-0.5,0.8,0.7,0.7l-0.2,0.3\r\n        c2.5,1.5,4.1-2.3,6.8-0.4c-0.2-0.1-0.3-0.2-0.3-0.3c3.1,0.9,6.5-0.7,9.6,0.7c0.9,0.3,1-0.3,1.5-0.7l0.2,0.8l0.9-0.9\r\n        c1.3-0.6,2.2,1.9,3.9,0.7l-0.2-0.5c0.6,0.1,1.9-0.3,1.8,0.3c0.1-0.1,0.2-0.5,0.4-0.3l0,0.4l1.5-0.6c1.1,0.3-0.2,1.6,1.5,1.7\r\n        c0.6-0.1,1.8-1.1,1.5-1.4c-0.2,0-0.6-0.3-0.6-0.6l0.6-0.2c0-0.1,0-0.1,0-0.2l0.1,0l0-0.4c0.1-0.6,0.2-1.3-0.1-1.8l-0.3-4.4l0.2,0.1\r\n        l-0.2-0.2l-0.1-0.8c0.1,0,0.3,0.1,0.4,0.2c0.5-0.7-0.4-0.5,0.1-1.1c0.1-0.1,0.1,0,0.2,0l-0.4-0.6c0.2,0.1,0.7-0.2,0.6,0.2\r\n        C116.4,91.3,115,90.8,115.7,90.3z M76.8,103.4C76.8,103.4,76.8,103.4,76.8,103.4c0,0,0,0.2-0.1,0.3c-0.3,0.1-0.4,0-0.4-0.2\r\n        C76.4,103.5,76.5,103.5,76.8,103.4z M114.9,92.7l0-0.3c0,0.1,0.1,0.2,0.1,0.3C115,92.7,115,92.7,114.9,92.7z\"/>\r\n    <path class=\"logo__box logo__box--03\" d=\"M295.1,34.4l-0.6,0.3c0.1-0.3,0.1-0.6,0.3-0.6c-0.4-0.3-1,0.2-1.5-0.4c0.3-0.4-0.3-1.2,0.4-1.4\r\n        c-0.3,1.3,0.8-0.1,0.9,0.9c-0.1-0.2-0.1-0.5,0-0.8c0.1,0,0.2,0,0.2,0.1c0.7-1.2-0.9-0.5-0.9-1.8c0.4,0.2,0.8-0.3,0.7-0.5\r\n        c0,0.5-0.7,0.3-1.1-0.2c0.2-0.3,0.1-0.8,0-1c-0.1-0.3-0.2-0.4-0.2-0.7l-0.2,0.7c-0.4-0.2-0.4-0.7-0.5-1.4c0.3-0.2,0.2,0.6,0.4,0.3\r\n        c-0.4-0.3-0.2-0.8,0-1.5c0.2-0.7,0.5-1.5,0.2-2c0.3-0.9,0.8-0.8,1-1.6c0,0,0,0,0,0c-1.1,0.3-1.3,0.1-1.7-0.1\r\n        c-0.3-0.2-0.8-0.3-1.8-0.1c0.2,0.6,0.3,0.4-1.1,1l2.9-0.4c-0.8,0.3-1.6,0.6-2.2,0.9c0.7,0,1.8-0.4,2.2-0.3c-1.2,0.5-0.9,0.3-1,0.8\r\n        c-0.1-0.4-0.7-0.3-1.3-0.1c-0.6,0.2-1.1,0.4-1.5,0.1l0.5-1.5c-2.3-0.7-2.8,0.8-4.5,0.4l0.5,0.3c-0.2,0.6-1,0.1-1.5,0.3\r\n        c0-0.5-0.3-0.7-0.5-1c0,0.4-1.1,0-1.3,0.9l-0.7-0.6c-1.3-0.3-1.4,1.4-2.7,1.2c0.4-0.5-0.2-0.9,0.6-1.3c-0.4,0-0.8-0.1-0.8,0.2\r\n        c-0.2-0.3-1.1,0.7-1.5,0.2c-0.2,0.2-0.2,0.7-0.7,0.7c0-0.1,0-0.2,0-0.2c0,0.2-0.7,0.3-0.3,0.9c-1.3-1.5-3.5,0.1-4.6-1.2\r\n        c-0.9,0.2-2,0.3-2.8,0.4c0.1-0.1,0-0.2,0.2-0.2c-1.1-0.5-0.7,1.4-1.9,0.9c-0.6-0.8,0.7-0.4,0.3-0.7c-0.2-1.6-1.5,0.2-2.4-0.7\r\n        l0.2-0.1c-0.6-0.5-1.6,0.6-2.6,0.5c0,0,0.1-0.1,0-0.2c-0.7,0.8-2.1,1.1-3.1,1.3c0.3-0.6,0.5-0.3,0.3-1c-0.5,0.1,0.1,1-0.8,1.2\r\n        c-0.3-0.3-1-0.6-1-1.3l0.9,0c-0.4-0.9-1.1,0-1.6-0.1l0.1-0.4c-1.3,0.1-1.3,1.1-2.8,1l0.1,0.3c-0.8,1-0.6-0.5-1.4,0.2l-0.2-1\r\n        c-0.3,0.1-0.6,0.4-1.3,0.6c-0.6,0.2-1.2,0.5-1.7,0.5c0.1-0.4,0.5-0.6,1.1-0.9c0.3-0.1,0.6-0.2,0.9-0.3c0.1-0.1,0.3-0.1,0.4-0.2\r\n        c0.1-0.1,0.2-0.1,0.3-0.2c-0.2,0-0.9,0-1.5,0.1c-0.6,0.1-1.1,0.2-1.2,0.5c0.2-0.1,0.6-0.3,0.9-0.2c-0.7,0.8-1.4,1.1-2.6,1.1\r\n        c-0.3-0.4-0.7-0.7-1.1-0.8c-0.3,0.2-0.4,1.2-0.5,2c-0.1,0.9-0.3,1.7-0.9,2.1c0.1,0.4,0.1,0.8,0.1,1.1c0,0.2,0,0.4,0,0.7\r\n        c0,0.4-0.1,0.9-0.2,1.4c-0.2,0.9-0.5,1.9-0.5,2.9c1.5-0.6,0,0.6,1.5,0.6c0.1,0.5,0,0.7-0.1,0.7l0.1-0.1c0,0-0.1,0.1-0.1,0.1l0,0\r\n        l-1,1.4c-0.5,0.3-0.3-0.5-0.6-0.5c-0.2,1.1-0.7,0.4-1.1,1.1c0.6-0.1,0.8,0.4,0.5,1l0.8-0.8c0.7,1.5-1.4,1.2-0.7,2.7l-0.4-0.5\r\n        c0.2,0.8-0.2,2.8,1,3.7c-0.2,0.1-0.6,0.3-0.7-0.1c-0.3,1.8,1,4.2,0.2,5.5l-0.4-0.2c0.1,0.3,0.7,0.6,0.3,1c-0.2,0-0.4-0.2-0.4,0\r\n        c0.1,0.2,0.6,1,0.3,1.4l-0.4-0.4c-0.6,1.8,0.8,2.8,1,4.3c-1.1-0.1-1.5,1.3-1.8,2l-0.2,0c-0.3,2.1,0.7,3.6,1,5.5\r\n        c-1.3,1.1-0.8,4-1.6,5.9c0.2-0.3,0.8,0.1,0.9,0.5c-0.3,0.4,0.7,1.3-0.3,1.2l0-0.2c-1,0.3-0.8,1.2-0.9,1.9l1.3,0.2\r\n        c-2,1.8,0.4,5-1.4,5.9c0.3,0.5,0.3,1,0.5,1.5l-0.7-0.1c-0.3,1.3-0.4,1.9-0.3,3.5l-0.5-0.4c-0.1,0.9,1.9,1.3,1.9,2.1l-1.1,0.2\r\n        c-0.1,1.5-1.1,3-0.3,4.6c-0.2,0-0.5-0.1-0.5-0.4c-0.1,0.7-0.9,2.8,0.6,2.6c-0.5,0-0.5,0.3-0.4,0.9c0.1,0.9,0.3,1.8,0.5,2.4\r\n        c-0.2,0-0.5,0-0.7,0c0.4,0.5,0.7,0.6,0.9,0.8c0.2,0.2,0.3,0.5,0.4,1.1c-0.1,0.3-0.5,0.6-0.4,0.3c-0.2,0.8,0.3,0.6,0.3,1\r\n        c0.2,0,0.4,0,0.6,0.1l-0.9,0.4c1.1,0.1,1.3-0.1,2.3-0.6c0.4-0.1,0.9-0.1,1.2,0.1c0.4,0.2,0.7,0.5,0.6,0.8c0.3-0.4,1-0.8,1.6-0.6\r\n        c0.1,0.2-0.2,0.4-0.3,0.4c0.5,0.1,0.8,0.2,1,0.1c0.3,0,0.5-0.1,0.7-0.2c0.5-0.2,0.9-0.3,1.3,0.1c0,0.2,0.1,0.3,0.1,0.4\r\n        c-1.1-0.1-1.9-0.1-1.8-0.2c0,0.6,0.8,0.8,0.1,1.6c0.7-0.4,1.9-1.4,2.8-1.1c0,0.1,0.1,0.1,0.1,0.2l-0.1,0.1c0.2,0.1,0.4,0,0.5-0.1\r\n        c0.3,0.1,0.4,0.2,0.7,0.2c0.1,0.5,1,0.3,1.4,0.4c0-0.7,0.6-0.6,0.1-1.2c0.1,0.1-0.1,0.1-0.4,0.1c-0.1,0-0.1,0-0.2,0.1c0,0,0,0,0-0.1\r\n        c-0.3,0-0.6,0-1.1,0c0.4-0.3,0.7-0.6,1.2-0.2c0.2-0.4,0.5-0.9,0.7-1.1c0.5,1,1.6,1.6,1.8,2.2c1.3-0.3,3.1-0.1,4-1.4\r\n        c0.4-0.1,0.4,0.4,0.5,0.6c-0.2,0.1-0.5,0.1-0.6,0.3c0.8-0.3,2.2,0,2.4-0.9c0.9,0.5-0.6,0.8,0.7,0.7l-0.2,0.3\r\n        c2.4,1.6,4.2-2.1,6.9-0.1c-0.2-0.1-0.3-0.2-0.3-0.3c3.1,1,6.6-0.5,9.7,1c0.9,0.3,1-0.3,1.6-0.7l0.2,0.8l1-0.8c1.4-0.6,2.2,2,3.9,0.8\r\n        l-0.2-0.5c0.6,0.1,1.9-0.2,1.8,0.4c0.1-0.1,0.2-0.5,0.4-0.2l0,0.4l1.5-0.6c1.1,0.3-0.3,1.5,1.4,1.7c0.6-0.1,1.8-1.1,1.6-1.3\r\n        c-0.2,0-0.6-0.3-0.6-0.7l0.6-0.2c0-0.1,0-0.1,0-0.2l0.1,0l0-0.5c0.1-0.5,0.2-1.1,0-1.6l-0.1-4.7l0.2,0.1l-0.2-0.2l0-0.9\r\n        c0.1,0,0.3,0.1,0.3,0.3c0.5-0.6-0.4-0.6,0.2-1.1c0.1-0.1,0.1,0,0.2,0l-0.3-0.6c0.2,0.1,0.7-0.1,0.6,0.3c0.6-1.1-0.8-1.8,0-2.2\r\n        l0.1,0.1c-0.3-1.1-0.6-0.7-1.1-0.8l0-0.7l1.3-0.5l-0.8-0.1c0-0.2,0.1-0.5,0.4-0.4c-0.5-0.6-0.3,0.1-0.8-0.2c0.7-0.8-0.3-2.1,0.9-2.3\r\n        c-0.6-0.3-0.4,0.7-0.8-0.1c1.3-0.2-0.2-0.9,0.4-1.6c0.7,0.2,0.3,0.9,0.9,0.2c-1.1-0.4,0.2-1.4,0-1.9c-0.9,0-0.4-1.3-0.7-2.3\r\n        c0.3,0.1,0.5-1.9,0.8-2.8l0.2,0c-0.9-0.2-0.8-1.1-0.9-1.8c0.5,0,0.8,0.1,1,0.5l0-0.6c-0.3-0.1-0.5-0.3-0.6-0.8l0.7,0.2\r\n        c0-0.9-0.8-1.7-0.4-2.8c-0.4,0-1.1,0.4-1.6,0.3l0-0.6c0.2,0,0.4,0.1,0.5,0.2c0-0.1-0.3-0.4-0.1-0.6l0.6,0.5c0.2-0.5-0.5-0.3-0.4-0.7\r\n        c0.5,0,0.3-0.3,0.7-0.2c0,0.1-0.2,0.4,0,0.5c0.1-0.5,0.4-1,0.7-1.2c-0.3,0-0.7,0-0.7-0.3c0-0.9,0.6-0.3,0.8-0.8\r\n        c-0.3-0.2,0-0.8-0.7-0.8c0-0.3,0.3-0.3,0.5-0.4c-0.3-0.4-0.1-2.1-0.9-1.6l0,0.1c0,0,0,0,0-0.1c-0.7-1.5,0.4-3,0.1-4.5l0.2,0\r\n        c-0.3-0.9-0.2-1.9-0.7-2.5c0-0.3,0.4-0.6,0.7-0.5c-0.2-0.7-0.5-0.7-0.1-1.7c0.4,0.7,0.4-0.2,0.3,0.7c0.2-0.9,0.6-1.1-0.1-2\r\n        c0.6,0.3,0.8-0.7,0.6-1.1l-0.4,0.6c-0.1-0.5,0-0.9,0-1.3l0.8,0.2c1-1.8-1.7-3.2-0.1-4.5c-0.6-0.5-0.4,1-1.1,0.6\r\n        c0.1-0.8,1.3-1.7,1.3-1.9c0.4-1.1-1.2-1-0.9-2.2c-0.3,0.2-1.1,0.3-1.4-0.6c0.1-0.8,1.2-1,1.5-0.5c0,0.2-0.1,0.3-0.2,0.3\r\n        c0.1,0.3,0.2,0.6,0.6,0.3l-0.3-0.1c0.3-0.4,0.3-1.5,0.7-1.3c-0.3-0.6-0.5-0.3-0.6,0.2c0.4-1,0-1.6,0.3-2.7c-0.2,0.2-0.5,0.3-0.5,0.2\r\n        c0.3-1.6-0.6-0.7-0.7-1.7c0.4-0.6,1.1,0.2,0.7-0.9c0.3-0.7,0.8-0.1,1,0.1c-0.6-1,0.4-1.8,0.5-2.4l0.2,0.5\r\n        C295.1,34.9,295.1,34.6,295.1,34.4z M253,100.3C253,100.2,253,100.2,253,100.3c0,0,0,0.2-0.1,0.3c-0.3,0.1-0.4-0.1-0.4-0.2\r\n        C252.6,100.3,252.8,100.3,253,100.3z M292.3,90.7c0,0-0.1,0.1-0.1,0.1l0-0.3C292.2,90.5,292.2,90.6,292.3,90.7z\"/>\r\n    <path class=\"logo__box logo__box--01\" d=\"M354.9,39.5c-0.1-0.3-0.1-0.6-0.1-0.8l-0.6,0.3c0.1-0.3,0.1-0.5,0.4-0.5c-0.4-0.3-1,0.2-1.5-0.4\r\n        c0.1-0.1,0.1-0.2,0.1-0.4c0-0.2,0-0.3,0-0.5c0-0.4,0-0.7,0.4-0.9c-0.3,1.8,0.6,0.2,0.8,1c0,0,0-0.1,0-0.1c0-0.2,0-0.5,0.1-0.7\r\n        c0.1-0.1,0.2,0.1,0.2,0.2c0.8-2.4-0.9-0.9-0.8-2.8c0.4,0,0.9-1,0.8-1.3c0,0.9-0.8,0.8-1.1,0.4c0.2-1,0.1-1.2-0.1-1.3\r\n        c-0.2,0.1-0.5,0.1-0.7,0.1l0.4,0.1l0,0.2c-0.1,0-0.1,0-0.2,0c-0.5,0.2-1,0.2-1.7,0.2c0.2-0.3,0.9-0.2,0.7-0.3\r\n        c-0.8,0.3-1,0.1-1.4-0.1c-0.4-0.3-0.9-0.5-1.7-0.3c-0.5-0.3,0.2-0.8-0.4-1.1c-0.4,0.1-0.8,0.1-1,0.1c-0.2,0-0.3-0.1-0.4-0.2\r\n        c-0.3-0.2-0.5-0.4-1-0.2c0.3,0.6,0.3,0.5-0.4,1l1.7-0.3l-1.1,0.8c0.5,0,1-0.3,1.4-0.2c-0.6,0.4-0.5,0.3-0.3,0.8\r\n        c-0.6-0.9-1.4,0.4-2.1-0.2l0.1-1.5c-1.2-0.7-2.2,0.6-3.7,0.2l0.5,0.3c-0.2,0.6-1,0-1.5,0.2c0.1-0.5-0.2-0.7-0.4-1\r\n        c0,0.4-1.1-0.1-1.3,0.9l-0.7-0.7c-1.2-0.3-1.5,1.3-2.7,1.1c0.4-0.5-0.1-0.9,0.7-1.2c-0.4,0-0.8-0.1-0.8,0.2\r\n        c-0.2-0.3-1.1,0.6-1.5,0.1c-0.2,0.2-0.3,0.7-0.7,0.6c0-0.1,0-0.2,0-0.2c0,0.2-0.7,0.3-0.4,0.9c-1.2-1.6-3.5-0.1-4.5-1.5\r\n        c-0.9,0.1-1.9,0.2-2.7,0.2c0.1-0.1,0-0.2,0.2-0.2c-1.1-0.5-0.8,1.4-2,0.8c-0.6-0.8,0.7-0.4,0.3-0.7c-0.1-1.6-1.5,0.1-2.3-0.9\r\n        l0.2-0.1c-0.6-0.6-1.6,0.5-2.6,0.3c0,0,0.1-0.1,0-0.2c-0.8,0.8-2.1,1-3.2,1.1c0.3-0.6,0.5-0.3,0.3-1c-0.5,0.1,0.1,1-0.8,1.2\r\n        c-0.3-0.4-0.9-0.7-1-1.4l0.9,0c-0.4-0.9-1.1,0-1.5-0.2l0.1-0.4c-1.3,0.1-1.4,1-2.8,0.9l0.1,0.3c-0.4,0.5-0.6,0.3-0.7,0.1\r\n        c-0.1-0.1-0.1-0.2-0.3-0.2c-0.1,0-0.3,0-0.5,0.2c-0.1-0.3-0.2-0.7-0.4-1c-0.4,0.1-1,0.3-1.5,0.5c-0.6,0.2-1.1,0.4-1.5,0.5\r\n        c0-0.7,1.4-1,2.3-1.4c-0.8-0.1-2.7-0.1-2.7,0.4c0.2-0.1,0.5-0.3,0.8-0.1c-0.3,0.5-0.7,0.8-1.3,1c0.1,0.4,0.1,0.8,0,1.2\r\n        c-0.9-0.9-1.1-0.1-1.2,1c-0.1,0.5-0.1,1.1-0.3,1.7c-0.1,0.3-0.2,0.5-0.3,0.7c-0.1,0.2-0.3,0.3-0.5,0.4c0.6,1.8-0.5,3.5-0.6,5.5\r\n        c1.5-0.6,0,0.6,1.5,0.6c0.1,0.5,0,0.7-0.1,0.7l0.1-0.1c0,0-0.1,0.1-0.1,0.1l0,0l-1,1.4c-0.5,0.3-0.3-0.5-0.6-0.5\r\n        c-0.2,1-0.7,0.4-1.1,1.1c0.6-0.1,0.8,0.4,0.5,1l0.8-0.8c0.7,1.5-1.4,1.2-0.7,2.7l-0.4-0.5c0.2,0.8-0.2,2.8,1,3.6\r\n        c-0.2,0.1-0.6,0.3-0.7-0.1c-0.3,1.8,1,4.1,0.2,5.5l-0.4-0.2c0.1,0.3,0.7,0.6,0.3,1c-0.2,0-0.4-0.2-0.4,0c0.1,0.2,0.6,0.9,0.3,1.4\r\n        l-0.4-0.4c-0.6,1.7,0.8,2.8,1,4.3c-1.1-0.1-1.5,1.3-1.8,2l-0.2,0c-0.3,2,0.7,3.6,1,5.5c-1.3,1.1-0.8,4-1.6,5.8\r\n        c0.2-0.3,0.8,0.1,0.9,0.5c-0.3,0.4,0.7,1.3-0.3,1.1l0-0.2c-1,0.3-0.8,1.2-0.9,1.9l1.3,0.2c-2,1.7,0.4,5-1.4,5.9\r\n        c0.3,0.5,0.3,1,0.5,1.5l-0.7-0.1c-0.3,1.2-0.4,1.9-0.3,3.4l-0.5-0.4c-0.1,0.9,1.9,1.2,1.9,2l-1.1,0.2c-0.1,1.5-1.1,3-0.3,4.6\r\n        c-0.2,0-0.5-0.1-0.5-0.4c-0.1,0.7-0.9,2.7,0.6,2.6c-0.5,0-0.5,0.4-0.4,0.9c0.1,0.3,0.1,0.9,0.2,1.2c0.1,0.4,0.2,0.8,0.3,1.1\r\n        c-0.2,0-0.5,0-0.7,0c0.4,0.5,0.7,0.6,0.9,0.9c0.2,0.2,0.3,0.5,0.4,1.1c-0.1,0.3-0.5,0.6-0.4,0.3c-0.3,1,0.6,0.3,0.3,1.6\r\n        c0,0,0.1,0,0.1,0l-0.3,0.1c-0.1,0-0.2,0-0.3-0.1c0,0.2,0,0.3,0,0.4c0.8,0,1.1-0.3,2-0.7c0.4-0.1,0.9-0.1,1.2,0.1\r\n        c0.3,0.2,0.6,0.4,0.6,0.7c0.4-0.4,1.1-0.9,1.7-0.7c0,0.2-0.2,0.4-0.4,0.5c0.5,0.1,0.9,0.1,1.3,0.1c0.3,0,0.5-0.1,0.8-0.2\r\n        c0.4-0.2,0.8-0.3,1.3,0c0,0.2,0.1,0.3,0.2,0.4c-1,0-1.9-0.1-1.8-0.1c0,0.6,0.8,0.7,0.2,1.6c0.7-0.5,1.8-1.5,2.7-1.2\r\n        c0,0.1,0.1,0.1,0.1,0.2l-0.1,0.1c0.2,0.1,0.4,0,0.5-0.1c0.3,0.1,0.4,0.2,0.7,0.2c0.1,0.5,1,0.3,1.4,0.3c0-0.7,0.5-0.6,0-1.2\r\n        c0.1,0.1-0.1,0.1-0.4,0.1c-0.1,0-0.1,0-0.2,0.1c0,0,0,0,0-0.1c-0.3,0-0.6,0-1,0c0.3-0.4,0.7-0.7,1.1-0.3c0.2-0.4,0.5-0.9,0.6-1.1\r\n        c0.6,1,1.7,1.5,1.9,2.1c1.3-0.4,3-0.3,3.8-1.6c0.4-0.2,0.4,0.4,0.6,0.6c-0.2,0.1-0.5,0.1-0.6,0.3c0.7-0.3,2.2-0.1,2.3-1\r\n        c0.9,0.4-0.5,0.8,0.8,0.7l-0.2,0.3c2.5,1.5,4.1-2.3,6.8-0.5c-0.2-0.1-0.3-0.2-0.3-0.3c3.2,0.8,6.5-0.8,9.6,0.5\r\n        c0.9,0.3,1-0.3,1.5-0.8l0.2,0.7l0.9-0.9c1.3-0.6,2.3,1.8,3.9,0.6l-0.2-0.5c0.6,0.1,1.9-0.3,1.8,0.3c0.1-0.1,0.2-0.5,0.4-0.3l0,0.4\r\n        l1.5-0.7c1.1,0.3-0.2,1.6,1.5,1.6c0.6-0.2,1.8-1.1,1.5-1.4c-0.2,0-0.6-0.2-0.7-0.6l0.6-0.2c0-0.1,0-0.1,0-0.2h0.1l0-1\r\n        c0,0,0-0.1,0-0.1l0.1-5.5l0.2,0.1l-0.2-0.2l0-0.8c0.1,0,0.3,0.1,0.3,0.3c0.5-0.6-0.4-0.6,0.2-1.1c0.1-0.1,0.1,0,0.2,0l-0.3-0.6\r\n        c0.2,0.1,0.7-0.1,0.6,0.3c0.6-1.1-0.7-1.8,0.1-2.2l0.1,0.1c-0.2-1.1-0.5-0.7-1-0.8l0-0.7l1.3-0.5l-0.8-0.2c0-0.2,0.1-0.5,0.4-0.4\r\n        c-0.5-0.6-0.3,0.1-0.8-0.3c0.7-0.7-0.3-2.1,0.9-2.2c-0.6-0.3-0.5,0.7-0.8-0.1c1.3-0.2-0.2-0.9,0.4-1.6c0.7,0.2,0.3,0.9,0.9,0.2\r\n        c-1.1-0.4,0.3-1.3,0.1-1.9c-0.9,0-0.3-1.3-0.6-2.3c0.3,0.1,0.5-1.8,0.9-2.7l0.2,0c-0.9-0.2-0.7-1.1-0.9-1.8c0.5,0,0.8,0.2,1,0.5\r\n        l0-0.6c-0.3-0.2-0.4-0.4-0.5-0.8l0.7,0.2c0-0.9-0.8-1.7-0.3-2.8c-0.4-0.1-1.1,0.3-1.6,0.2l0-0.6c0.2,0,0.4,0.1,0.5,0.3\r\n        c0-0.1-0.3-0.4-0.1-0.6l0.6,0.5c0.3-0.5-0.5-0.3-0.4-0.7c0.5,0,0.4-0.3,0.7-0.2c0,0.1-0.2,0.3,0,0.5c0.1-0.4,0.4-1,0.8-1.2\r\n        c-0.3,0-0.7,0-0.7-0.3c0-0.9,0.6-0.3,0.9-0.8c-0.3-0.2,0-0.8-0.7-0.8c0-0.2,0.4-0.3,0.6-0.4c-0.3-0.4,0-2.1-0.8-1.6l-0.1,0.1\r\n        c0,0,0,0,0-0.1c-0.7-1.5,0.5-3,0.2-4.4l0.2,0c-0.3-0.9-0.1-1.9-0.6-2.5c0-0.3,0.5-0.6,0.8-0.5c-0.2-0.7-0.4-0.7,0-1.7\r\n        c0.4,0.7,0.4-0.2,0.3,0.7c0.2-0.8,0.6-1,0-2c0.6,0.3,0.8-0.6,0.6-1l-0.5,0.6c-0.1-0.5,0-0.9,0-1.3l0.8,0.2c1-1.7-1.6-3.2,0.1-4.5\r\n        c-0.6-0.5-0.4,0.9-1.1,0.5c0.1-0.8,1.3-1.6,1.3-1.9c0.5-1.1-1.2-1.1-0.8-2.2c-0.3,0.1-1.1,0.3-1.3-0.6c0.1-0.8,1.3-1,1.5-0.4\r\n        c0,0.2-0.1,0.3-0.2,0.3c0.1,0.3,0.2,0.6,0.5,0.3l-0.3-0.1c0.3-0.4,0.3-1.5,0.8-1.2c-0.3-0.6-0.5-0.3-0.6,0.2c0.5-1,0.1-1.6,0.4-2.7\r\n        c-0.2,0.2-0.5,0.3-0.5,0.1c0.4-1.5-0.5-0.7-0.6-1.8c0.5-0.6,1.1,0.2,0.7-0.8c0.3-0.6,0.8-0.1,1,0.1c-0.5-1,0.4-1.8,0.5-2.3\r\n        L354.9,39.5z M311,105.7C311,105.7,311,105.7,311,105.7c0,0,0,0.2-0.1,0.3c-0.3,0.1-0.4,0-0.4-0.2\r\n        C310.6,105.8,310.8,105.8,311,105.7z M350.1,94.3c0,0-0.1,0.1-0.1,0.1l0-0.3C350,94.1,350,94.2,350.1,94.3z\"/>\r\n    <path class=\"logo__box logo__box--02\" d=\"M406.4,101.2L406.4,101.2c-0.3-1-0.5-0.5-1-0.7l0-0.7l1.3-0.6l-0.8-0.1c0-0.2,0.1-0.5,0.4-0.4\r\n        c-0.6-0.6-0.3,0.1-0.8-0.2c0.6-0.8-0.4-2.1,0.8-2.3c-0.6-0.2-0.4,0.8-0.8,0c1.3-0.3-0.3-0.9,0.3-1.7c0.7,0.2,0.4,0.9,0.9,0.1\r\n        c-1.2-0.4,0.2-1.4-0.1-1.9c-0.9,0-0.4-1.3-0.8-2.2c0.3,0,0.4-1.9,0.7-2.8l0.2,0c-0.9-0.1-0.8-1.1-1-1.8c0.5,0,0.8,0.1,1,0.5l0-0.6\r\n        c-0.3-0.1-0.5-0.3-0.6-0.7l0.7,0.1c-0.1-0.9-0.9-1.7-0.5-2.8c-0.4,0-1.1,0.4-1.6,0.4l0-0.6c0.2,0,0.4,0.1,0.5,0.2\r\n        c-0.1-0.1-0.3-0.3-0.2-0.6l0.6,0.4c0.2-0.5-0.5-0.2-0.5-0.6c0.5,0,0.3-0.3,0.7-0.3c0.1,0.1-0.2,0.4,0,0.5c0.1-0.5,0.3-1,0.7-1.2\r\n        c-0.3,0.1-0.7,0-0.7-0.3c-0.1-0.9,0.6-0.3,0.8-0.8c-0.4-0.2,0-0.8-0.8-0.7c0-0.3,0.3-0.3,0.5-0.4c-0.3-0.4-0.2-2.1-1-1.5l0,0.1\r\n        c0,0,0,0,0-0.1c-0.8-1.4,0.2-3-0.1-4.5l0.2,0c-0.3-0.8-0.3-1.9-0.8-2.5c0-0.3,0.4-0.6,0.7-0.5c-0.2-0.6-0.5-0.7-0.1-1.7\r\n        c0.5,0.6,0.4-0.2,0.4,0.7c0.2-0.9,0.5-1.1-0.2-2c0.6,0.3,0.8-0.7,0.5-1.1l-0.4,0.6c-0.1-0.5-0.1-0.9-0.1-1.3l0.8,0.2\r\n        c0.9-1.8-1.9-3.1-0.3-4.5c-0.6-0.4-0.4,1-1.1,0.6c0.1-0.8,1.2-1.7,1.2-2c0.4-1.1-1.3-1-1-2.1c-0.3,0.2-1.1,0.3-1.4-0.5\r\n        c0.1-0.8,1.2-1.1,1.4-0.6c0,0.2-0.1,0.3-0.2,0.3c0.1,0.3,0.3,0.6,0.6,0.3l-0.3-0.1c0.3-0.4,0.2-1.5,0.7-1.3\r\n        c-0.3-0.6-0.5-0.2-0.6,0.2c0.4-1.1-0.1-1.6,0.2-2.7c-0.2,0.2-0.5,0.4-0.5,0.2c0.3-1.6-0.6-0.7-0.8-1.7c0.4-0.6,1.1,0.2,0.6-0.9\r\n        c0.3-0.7,0.8-0.2,1,0.1c-0.6-0.9,0.3-1.8,0.3-2.4l0.3,0.5c-0.2-0.3-0.2-0.5-0.2-0.8l-0.6,0.3c0.1-0.3,0.1-0.6,0.3-0.6\r\n        c-0.4-0.3-1,0.3-1.5-0.3c0.3-0.4-0.4-1.2,0.4-1.4c-0.2,1.3,0.8-0.2,1,0.9c-0.1-0.2-0.1-0.5,0-0.8c0.1-0.1,0.2,0,0.2,0.1\r\n        c0.6-1.2-0.9-0.5-1-1.8c0.4,0.1,0.8-0.3,0.7-0.5c0,0.5-0.7,0.3-1.1-0.2c0.3-0.8-0.3-0.9-0.3-1.3l-0.1,0.5c-0.4-0.1-0.4-0.5-0.6-1.1\r\n        c0.3-0.1,0.3,0.5,0.4,0.3c-0.2-0.1-0.3-0.3-0.2-0.5c0-0.1,0-0.2,0.1-0.3c0-0.1,0.1-0.3,0.1-0.4c0.2-0.6,0.4-1.3,0.1-1.9\r\n        c0.3-0.8,0.8-0.4,1-1.1c-0.3-0.7-0.2-1.2-0.1-1.8c0.1-0.6,0.3-1.3,0-1.9c0,0-0.1,0-0.1,0c0,0,0,0.1,0,0.1c-0.3,0.7-0.4,0.8-0.6,0.6\r\n        c-0.2,0.1-0.5,0.2-0.9,0.4l0.7-0.1l0.4,1.7c-0.3-0.4-0.6-0.7-0.9-0.9c0,0.7,0.4,1.2,0.4,1.8c-0.5-0.4-0.4-0.4-0.8,0.3\r\n        c0.5-1,0.1-1.4-0.1-1.7c-0.4,0.1-0.8,0.2-1,0l1.1-1.5c-1.6-0.6-4.1,0.9-5.8,0.6l0.5,0.2c-0.2,0.6-1,0.1-1.5,0.4c0-0.5-0.3-0.7-0.5-1\r\n        c0,0.4-1.1,0-1.2,1l-0.7-0.6c-1.3-0.2-1.4,1.5-2.6,1.3c0.3-0.5-0.2-0.9,0.6-1.3c-0.4,0-0.8-0.1-0.8,0.3c-0.2-0.3-1.1,0.7-1.5,0.3\r\n        c-0.2,0.2-0.2,0.7-0.7,0.7c-0.1-0.1,0-0.2,0-0.2c0,0.2-0.7,0.4-0.3,0.9c-1.3-1.5-3.5,0.3-4.6-1c-0.9,0.2-1.9,0.4-2.7,0.5\r\n        c0-0.1,0-0.2,0.1-0.2c-1.1-0.4-0.6,1.4-1.9,1c-0.7-0.8,0.6-0.5,0.2-0.7c-0.2-1.6-1.5,0.3-2.4-0.6l0.2-0.1c-0.7-0.5-1.6,0.7-2.6,0.6\r\n        c0,0,0-0.1,0-0.2c-0.7,0.9-2,1.2-3.1,1.5c0.3-0.6,0.4-0.4,0.2-1c-0.5,0.1,0.2,1-0.7,1.2c-0.3-0.3-1-0.6-1.1-1.3l0.9-0.1\r\n        c-0.5-0.9-1.1,0.1-1.6-0.1l0-0.4c-1.3,0.2-1.3,1.2-2.7,1.1l0.2,0.3c-0.7,1-0.8-0.5-1.6,0.2c-0.2-0.3-0.4-0.6-0.6-1\r\n        c-0.3,0.1-0.8,0.4-1.3,0.6c-0.5,0.2-0.9,0.5-1.3,0.6c0,0.1,0,0.2,0,0.2c-0.1-0.1-0.1-0.2-0.2-0.4c0.1-0.6,1.2-1,1.9-1.4\r\n        c-0.8,0-2.7,0.2-2.6,0.7c0.2-0.1,0.4-0.4,0.8-0.2c-0.1,0.3-0.2,0.5-0.4,0.7c0.3,0.9,0.4,1.7,0.4,2.5c-0.9-0.7-1.1,0.2-1.2,1.4\r\n        c-0.1,1.3-0.1,1.9-0.9,2.4c0.7,1.8-0.4,3.5-0.3,5.6c1.5-0.7,0,0.6,1.5,0.5c0.1,0.5,0.1,0.7,0,0.7l0.1-0.1c0,0,0,0.1-0.1,0.1l0,0\r\n        l-0.9,1.4c-0.4,0.3-0.3-0.5-0.7-0.4c-0.1,1.1-0.7,0.4-1.1,1.1c0.5-0.1,0.8,0.4,0.5,1l0.7-0.8c0.8,1.5-1.3,1.3-0.5,2.8l-0.5-0.5\r\n        c0.3,0.8-0.1,2.8,1.1,3.6c-0.2,0.1-0.6,0.3-0.7,0c-0.2,1.8,1.2,4.1,0.4,5.5l-0.4-0.1c0.1,0.3,0.7,0.6,0.3,1c-0.2,0-0.4-0.1-0.4,0\r\n        c0.1,0.2,0.6,0.9,0.4,1.4l-0.4-0.4c-0.5,1.8,1,2.8,1.2,4.3c-1.1,0-1.5,1.4-1.7,2.1l-0.2,0c-0.2,2.1,0.8,3.5,1.2,5.5\r\n        c-1.2,1.2-0.6,4-1.3,5.9c0.2-0.3,0.9,0.1,1,0.4c-0.2,0.4,0.7,1.3-0.3,1.2l0-0.2c-1,0.3-0.7,1.2-0.8,2l1.3,0.1c-1.9,1.8,0.6,5-1.1,6\r\n        c0.3,0.5,0.3,1,0.6,1.5l-0.7,0c-0.2,1.3-0.3,1.9-0.2,3.5l-0.5-0.3c-0.1,0.9,2,1.2,2,2l-1.1,0.2c0,1.5-1,3.1-0.1,4.6\r\n        c-0.2,0-0.5-0.1-0.5-0.3c0,0.7-0.8,2.8,0.7,2.6c-0.9,0-0.1,1.6,0.3,2.4l-0.7-0.1c0.9,0.7,1.1,0.7,1.3,1.7c-0.1,0.2-0.4,0.2-0.4,0\r\n        c-0.1,0.3,0,0.4,0.2,0.7c0.2,0.2,0.3,0.5,0.1,1.1c-0.1-0.1-0.3-0.3-0.4-0.4c-0.1,1.2,0.2,1.1,0.7,1.4c0.1,0.3,0.1,0.8-0.1,1.3\r\n        c-0.2,0.5-0.5,1.2-0.8,1.5c0.4-0.1,0.9,0,0.7,0.7l0,0c-0.1,0.1-0.2,0.2-0.3,0.3c-0.1,0-0.1,0-0.2,0c0,0.1,0,0.2-0.1,0.3\r\n        c0.8,0.1,1.6-0.2,2.3-0.4c0.7-0.2,1.2-0.4,1.7-0.1c-0.1,0.2,0,0.3,0.1,0.4c-1.6,0.1-2.9,0.2-2.7,0.1c-0.2,0.3,0,0.5,0,0.7\r\n        c0.1,0.2,0,0.5-0.9,1c0.8-0.3,1.9-0.8,2.8-1.1c0.9-0.4,1.7-0.6,2.4-0.5c0.1,0.1,0.1,0.1,0.2,0.2l-0.1,0.1c0.3,0,0.6,0,0.8-0.2\r\n        c0.3,0.1,0.4,0.1,0.7,0.1c0.1,0.5,1,0.2,1.4,0.2c-0.1-0.7,0.5-0.6-0.1-1.2c0.1,0-0.1,0.1-0.4,0.1c-0.1,0-0.1,0-0.2,0.1\r\n        c0,0,0,0,0-0.1c-0.3,0-0.6,0.1-1.1,0.1c0.3-0.4,0.6-0.7,1.1-0.4c0.2-0.5,0.4-0.9,0.5-1.2c0.7,0.9,1.8,1.4,2,2c1.3-0.5,3-0.5,3.7-1.9\r\n        c0.4-0.2,0.5,0.3,0.6,0.5c-0.2,0.1-0.5,0.1-0.6,0.3c0.7-0.4,2.2-0.3,2.3-1.2c1,0.3-0.5,0.9,0.8,0.6l-0.2,0.3c2.6,1.3,3.9-2.6,6.8-1\r\n        c-0.2-0.1-0.3-0.1-0.4-0.3c3.2,0.6,6.5-1.3,9.7-0.2c0.9,0.2,1-0.4,1.5-0.9l0.2,0.7l0.9-0.9c1.3-0.7,2.4,1.7,4,0.3l-0.3-0.5\r\n        c0.6,0,1.9-0.4,1.8,0.1c0.1-0.1,0.2-0.5,0.4-0.3l0,0.4l1.4-0.8c1.2,0.2-0.1,1.6,1.6,1.5c0.6-0.2,1.7-1.3,1.4-1.5\r\n        c-0.3,0-0.7-0.2-0.7-0.6l0.5-0.2c0-0.1,0-0.1,0-0.2l0.1,0l-0.1-1c0-0.1,0-0.2,0-0.3l-0.3-5.4l0.2,0.1l-0.2-0.2l0-0.8\r\n        c0.1,0,0.3,0.1,0.3,0.2c0.5-0.7-0.4-0.5,0.1-1.1c0.1-0.1,0.1,0,0.2,0l-0.3-0.6c0.2,0.1,0.7-0.1,0.6,0.2\r\n        C407,102.2,405.6,101.6,406.4,101.2z M367.3,117.9C367.3,117.9,367.3,117.8,367.3,117.9c0,0,0,0.2-0.1,0.3c-0.3,0.1-0.4,0-0.4-0.1\r\n        C366.9,118,367.1,117.9,367.3,117.9z M405.5,103.6l0-0.3c0,0.1,0.1,0.2,0.1,0.3C405.6,103.5,405.6,103.5,405.5,103.6z\"/>\r\n    <path class=\"logo__box logo__box--03\" d=\"M463.5,98.7L463.5,98.7c-0.3-1-0.5-0.5-1-0.6l-0.1-0.7l1.2-0.6l-0.8-0.1c0-0.2,0-0.5,0.4-0.4\r\n        c-0.6-0.5-0.3,0.1-0.8-0.2c0.6-0.8-0.5-2,0.7-2.3c-0.6-0.2-0.4,0.7-0.8,0c1.3-0.3-0.3-0.9,0.2-1.6c0.7,0.2,0.4,0.8,0.9,0.1\r\n        c-1.2-0.3,0.1-1.3-0.1-1.9c-0.9,0-0.5-1.2-0.9-2.1c0.3,0,0.4-1.8,0.6-2.7l0.2,0c-0.9-0.1-0.8-1-1.1-1.7c0.5,0,0.8,0.1,1,0.4\r\n        l-0.1-0.6c-0.3-0.1-0.5-0.3-0.6-0.7l0.7,0.1c-0.1-0.8-0.9-1.6-0.6-2.7c-0.4,0-1.1,0.4-1.6,0.4l0-0.6c0.2,0,0.4,0,0.5,0.2\r\n        c-0.1-0.1-0.3-0.3-0.2-0.5l0.6,0.4c0.2-0.5-0.5-0.2-0.5-0.6c0.5,0,0.3-0.3,0.7-0.3c0.1,0.1-0.2,0.4,0,0.5c0.1-0.4,0.3-1,0.7-1.2\r\n        c-0.3,0.1-0.7,0.1-0.7-0.3c-0.1-0.8,0.6-0.3,0.8-0.8c-0.4-0.2,0-0.7-0.8-0.7c0-0.2,0.3-0.3,0.5-0.4c-0.4-0.4-0.3-2-1-1.5l0,0.1\r\n        c0,0,0,0,0-0.1c-0.8-1.3,0.2-3-0.2-4.3l0.2,0c-0.3-0.8-0.3-1.8-0.9-2.4c0-0.2,0.4-0.6,0.7-0.5c-0.2-0.6-0.5-0.7-0.2-1.6\r\n        c0.5,0.6,0.4-0.3,0.4,0.6c0.1-0.8,0.5-1.1-0.2-1.9c0.7,0.3,0.7-0.7,0.5-1.1l-0.4,0.6c-0.1-0.4-0.1-0.8-0.1-1.2l0.8,0.1\r\n        c0.9-1.8-2-2.9-0.4-4.3c-0.6-0.4-0.3,1-1,0.6c0-0.8,1.2-1.7,1.1-1.9c0.4-1.1-1.3-0.9-1.1-2c-0.3,0.2-1.1,0.4-1.4-0.4\r\n        c0-0.8,1.2-1.1,1.4-0.6c0,0.2,0,0.3-0.1,0.3c0.1,0.2,0.3,0.6,0.6,0.2l-0.3-0.1c0.3-0.4,0.2-1.5,0.7-1.3c-0.3-0.6-0.5-0.2-0.6,0.2\r\n        c0.3-1-0.1-1.6,0.1-2.6c-0.1,0.2-0.5,0.4-0.5,0.2c0.2-1.5-0.6-0.6-0.8-1.6c0.4-0.6,1.1,0.1,0.6-0.9c0.3-0.7,0.8-0.2,1,0\r\n        c-0.6-0.9,0.2-1.8,0.3-2.3l0.3,0.5c-0.2-0.3-0.2-0.5-0.2-0.8l-0.6,0.3c0.1-0.3,0.1-0.5,0.3-0.6c-0.4-0.3-1,0.3-1.5-0.2\r\n        c0.3-0.4-0.4-1.2,0.4-1.3c-0.2,1.2,0.8-0.2,1,0.8c-0.1-0.2-0.1-0.4,0-0.7c0.1-0.1,0.2,0,0.2,0.1c0.6-1.2-0.9-0.5-1-1.7\r\n        c0.5,0.1,0.8-0.3,0.7-0.5c0,0.5-0.7,0.3-1.1-0.1c0.3-0.8-0.3-0.8-0.3-1.2l-0.1,0.5c-0.5-0.1-0.4-0.5-0.6-1.2\r\n        c0.3-0.1,0.3,0.6,0.4,0.3c-0.4-0.4-0.3-0.8-0.1-1.4c0.2-0.6,0.4-1.4,0.1-1.9c0.2-0.8,0.8-0.6,0.9-1.4c-0.4-0.7-0.2-1.3-0.1-2.1\r\n        c-0.3-0.1-0.7-0.2-1.6,0.1c0.1,0.6,0.2,0.4-1.3,1.1l2.2-0.4l0.1,0.5c-0.1-0.1-0.2-0.2-0.3-0.3c-0.5,0.2-1,0.4-1.4,0.6\r\n        c0.3,0,0.7-0.1,1.1-0.2c0.1,0.3,0.2,0.6,0.2,0.8c-0.5-0.3-0.4-0.3-0.8,0.5c0.2-0.4,0.2-0.7,0.2-0.9c-0.3,0-0.8,0.2-1.3,0.3\r\n        c-0.4,0.1-0.8,0.2-1.1,0l0.8-1.5c-0.8-0.3-1.8,0-2.8,0.2c-0.2,0.1-0.5,0.1-0.7,0.2c-0.1,0-0.2,0.1-0.3,0.1l-0.2,0.1\r\n        c-0.3,0.1-0.6,0.1-1,0.1l0.5,0.2c-0.2,0.6-0.9,0.1-1.4,0.4c0-0.5-0.3-0.7-0.5-0.9c0,0.4-1.1,0-1.2,1l-0.7-0.6\r\n        c-1.2-0.2-1.3,1.5-2.5,1.4c0.3-0.6-0.2-0.9,0.5-1.3c-0.4,0-0.7-0.1-0.7,0.3c-0.2-0.3-1,0.7-1.4,0.3c-0.2,0.2-0.2,0.7-0.6,0.7\r\n        c-0.1-0.1,0-0.2,0-0.2c0,0.2-0.7,0.4-0.3,0.9c-1.3-1.5-3.4,0.3-4.5-0.9c-0.8,0.2-1.9,0.4-2.6,0.5c0-0.1,0-0.2,0.1-0.2\r\n        c-1.1-0.4-0.6,1.4-1.8,1c-0.7-0.8,0.6-0.5,0.2-0.7c-0.3-1.6-1.5,0.3-2.3-0.6l0.2-0.1c-0.7-0.5-1.5,0.7-2.5,0.6c0,0,0-0.1,0-0.2\r\n        c-0.7,0.9-2,1.2-2.9,1.5c0.3-0.6,0.4-0.4,0.2-1c-0.4,0.1,0.2,1-0.7,1.3c-0.3-0.3-1-0.6-1.1-1.3l0.8-0.1c-0.5-0.9-1.1,0.1-1.5,0\r\n        l0-0.4c-1.3,0.2-1.2,1.2-2.6,1.2l0.2,0.3c-0.7,1-0.7-0.5-1.4,0.3l-0.3-1c-0.5,0.3-1.7,1-2.5,1.3c0.5-0.8,1.5-1.2,2.1-1.7\r\n        c-0.5,0-1.7,0.2-1.9,0.7c0.2-0.1,0.4-0.4,0.6-0.2c-0.3,0.4-0.6,0.7-1,0.9c-0.2,0.1-0.4,0.2-0.7,0.3s-0.5,0.1-0.8,0.1\r\n        c-0.2-0.8-0.9-1-1.9-1c-1,0-2,0.1-3.2-0.2c-0.1,0.1-0.2,0.2-0.4,0.2c0.4,1.7,0.4,3,0.3,4.4c0,0.4,0,0.7-0.1,1.1l0,0.6l0,0.4\r\n        c0,0.5-0.1,1,0,1.5c1.4-0.8,0.1,0.6,1.6,0.4c0.1,0.5,0.1,0.6,0,0.7l0.1-0.1c0,0,0,0.1-0.1,0.1l0,0l-0.8,1.5\r\n        c-0.4,0.4-0.4-0.4-0.7-0.4c-0.1,1-0.6,0.5-1,1.2c0.5-0.2,0.8,0.3,0.6,0.9l0.7-0.9c0.9,1.4-1.2,1.3-0.3,2.7l-0.5-0.4\r\n        c0.3,0.7,0.1,2.7,1.4,3.4c-0.2,0.1-0.6,0.3-0.7,0c-0.1,1.8,1.5,3.9,0.8,5.3l-0.4-0.1c0.1,0.3,0.7,0.5,0.4,1c-0.2,0-0.4-0.1-0.4,0\r\n        c0.1,0.2,0.7,0.8,0.5,1.3l-0.4-0.4c-0.4,1.8,1.1,2.6,1.5,4c-1.1,0-1.4,1.4-1.5,2.1l-0.2,0c0,2,1.1,3.4,1.6,5.2\r\n        c-1.1,1.2-0.3,3.9-0.9,5.8c0.2-0.3,0.9,0,1,0.3c-0.2,0.4,0.8,1.2-0.2,1.1l0-0.2c-1,0.4-0.7,1.3-0.7,2l1.3,0.1\r\n        c-1.8,1.9,0.9,4.8-0.7,5.8c0.3,0.4,0.4,1,0.7,1.4l-0.7,0c-0.1,1.2-0.2,1.8,0.1,3.4l-0.5-0.3c0,0.9,2.1,1,2.2,1.8l-1,0.3\r\n        c0.1,1.5-0.8,3,0.3,4.5c-0.2,0-0.5,0-0.5-0.3c0,0.7-0.6,2.7,0.8,2.4c-0.9,0.1,0,1.5,0.4,2.3l-0.7-0.1c0.9,0.6,1.2,0.8,1.5,2\r\n        c-0.1,0.3-0.4,0.4-0.4,0.2c-0.1,1,0.7,0.5,0.4,1.8c-0.2-0.1-0.3-0.1-0.5-0.2c0,1.2,0.2,1,0.8,1.1c0.1,0.1,0.1,0.3,0.1,0.5\r\n        c0.6,0,1.1,0.4,0.9,0.9c0.4-0.4,1.3-0.8,1.8-0.6c0,0.2-0.3,0.4-0.5,0.4c0.8,0.3,1.7,0.1,2.3-0.1c0.4-0.1,0.5-0.2,0.7-0.2\r\n        c0.2,0,0.4,0,0.6,0.2c0,0.2,0.1,0.3,0.1,0.4c-0.5,0-1-0.1-1.3-0.1c-0.5,0-0.8-0.1-0.7-0.1c-0.1,0.3,0.2,0.5,0.4,0.7\r\n        c0.2,0.2,0.3,0.5-0.4,0.9c0.8-0.2,1.1-0.6,1.6-0.8c0.5-0.3,1-0.4,1.4-0.3c0,0.1,0.1,0.1,0.1,0.2l-0.1,0.1c0.2,0.1,0.4,0,0.5-0.1\r\n        c0.3,0.1,0.4,0.2,0.7,0.2c0.1,0.5,0.9,0.3,1.3,0.4c0-0.7,0.5-0.6,0-1.2c0.1,0.1-0.1,0.1-0.4,0.1c-0.1,0-0.1,0-0.2,0.1c0,0,0,0,0-0.1\r\n        c-0.3,0-0.6,0-1,0c0.3-0.3,0.7-0.6,1.1-0.2c0.2-0.4,0.5-0.9,0.6-1.1c0.5,1,1.6,1.6,1.7,2.2c1.3-0.3,3-0.2,3.8-1.4\r\n        c0.4-0.2,0.4,0.4,0.5,0.6c-0.2,0.1-0.5,0.1-0.6,0.3c0.7-0.3,2.1-0.1,2.3-1c0.9,0.4-0.5,0.8,0.7,0.7l-0.2,0.3c2.4,1.5,4-2.2,6.7-0.2\r\n        c-0.2-0.1-0.3-0.2-0.3-0.3c3.1,0.9,6.4-0.6,9.4,0.9c0.9,0.3,1-0.3,1.5-0.7l0.2,0.8l0.9-0.8c1.3-0.6,2.1,1.9,3.8,0.8l-0.2-0.5\r\n        c0.6,0.1,1.9-0.2,1.7,0.3c0.1-0.1,0.2-0.5,0.4-0.2l0,0.4l1.5-0.6c1.1,0.3-0.2,1.5,1.4,1.7c0.6-0.1,1.7-1.1,1.5-1.4\r\n        c-0.2,0-0.6-0.3-0.6-0.7l0.6-0.2c0-0.1,0-0.1,0-0.2l0.1,0l0-0.4c0.1-0.7,0.2-1.4-0.2-2l-0.3-4.2l0.2,0.1l-0.2-0.2l-0.1-0.8\r\n        c0.1,0,0.3,0.1,0.4,0.2c0.5-0.6-0.4-0.5,0.1-1.1c0.1-0.1,0.1,0,0.2,0l-0.4-0.6c0.2,0.1,0.7-0.2,0.6,0.2\r\n        C464.1,99.8,462.7,99.2,463.5,98.7z M425.4,110.9C425.4,110.9,425.5,110.8,425.4,110.9c0,0,0,0.2-0.1,0.3c-0.3,0.1-0.4-0.1-0.4-0.2\r\n        C425.1,110.9,425.2,110.9,425.4,110.9z M462.7,101.1l0-0.3c0,0.1,0.1,0.2,0.1,0.2C462.7,101,462.7,101.1,462.7,101.1z\"/>\r\n    <path class=\"logo__box logo__box--01\" d=\"M524.3,35.4c0-0.1,0-0.1,0-0.2l0-0.4c-0.2,0.2-0.4,0.4-0.6,0.5c0.1-0.4,0.1-0.9,0.3-0.9c-0.2-0.2-0.4-0.1-0.7,0\r\n        c-0.3,0.1-0.5,0.1-0.8-0.3c0.1-0.3,0.1-0.7,0-1.1c0-0.4,0-0.7,0.4-1.1c-0.1,1,0.1,0.9,0.3,0.7c0.2-0.2,0.4-0.4,0.5,0.1\r\n        c0-0.3,0-0.6,0-1c0.1-0.1,0.2,0,0.2,0.1c0.6-2.6-0.9-0.5-0.9-2.5c0.2-0.1,0.5-0.4,0.6-0.8c-0.1-0.1-0.3-0.2-0.5-0.1\r\n        c0.9,0-0.3,0.7-1.3,1c-1-0.4-1.5,0.2-2.1,0.1l0.6,0.2c-0.5,0.4-1,0.3-1.8,0.5c0.1-0.3,0.8-0.2,0.6-0.4c-0.6,0.4-0.9,0.2-1.4-0.1\r\n        c-0.2-0.1-0.5-0.3-0.8-0.3c-0.2-0.1-0.4-0.1-0.6,0c-0.4-0.3,0-0.8-0.3-1c-1,0.5-1-0.6-2-0.2c0.3,0.6,0.3,0.5-0.4,1l1.7-0.4l-1.1,0.8\r\n        c0.5,0,1.1-0.3,1.3-0.2c-0.5,0.5-0.5,0.3-0.2,0.8c-0.6-0.9-1.4,0.5-2.1-0.2l0.1-1.5c-1.2-0.7-2.1,0.7-3.6,0.3l0.5,0.3\r\n        c-0.2,0.6-0.9,0-1.4,0.3c0.1-0.5-0.2-0.7-0.4-1c0,0.4-1.1-0.1-1.3,0.9l-0.7-0.7c-1.2-0.3-1.5,1.3-2.6,1.1c0.4-0.5-0.2-0.9,0.7-1.2\r\n        c-0.4,0-0.7-0.1-0.8,0.2c-0.2-0.3-1.1,0.6-1.5,0.1c-0.2,0.2-0.2,0.7-0.7,0.7c0-0.1,0-0.2,0-0.2c0,0.2-0.7,0.3-0.3,0.9\r\n        c-1.2-1.6-3.4,0-4.4-1.4c-0.9,0.1-1.9,0.3-2.7,0.3c0.1-0.1,0-0.2,0.2-0.2c-1.1-0.5-0.7,1.4-1.9,0.8c-0.6-0.8,0.7-0.4,0.3-0.7\r\n        c-0.1-1.6-1.5,0.2-2.3-0.8l0.2-0.1c-0.6-0.6-1.6,0.6-2.6,0.4c0,0,0.1-0.1,0-0.2c-0.7,0.8-2.1,1-3.1,1.2c0.3-0.6,0.5-0.3,0.3-1\r\n        c-0.4,0.1,0.1,1-0.8,1.2c-0.3-0.4-0.9-0.7-1-1.4l0.8,0c-0.4-0.9-1.1,0-1.5-0.2l0.1-0.4c-1.3,0.1-1.3,1.1-2.7,0.9l0.1,0.3\r\n        c-0.8,0.9-0.6-0.6-1.4,0.1l-0.2-1c-0.3,0.1-0.7,0.3-1.2,0.5c-0.5,0.2-1,0.4-1.6,0.5c0.1-0.2,0.4-0.3,0.6-0.5\r\n        c0.2-0.1,0.4-0.3,0.6-0.4c0.4-0.2,0.8-0.4,1.2-0.6c-0.5,0-1.6,0-2,0.5c0.3-0.1,0.5-0.3,0.7-0.2c-0.2,0.2-0.3,0.3-0.5,0.5\r\n        c-0.2,0.1-0.5,0.2-0.7,0.3c-0.5,0.2-1,0.2-1.6,0.2c-0.4-1.4-2.3-1.1-4.2-1.4c-0.1,0.5-0.3,0.8-0.7,0.8c0.8,3.2-0.1,6.1,0,7.8\r\n        c1.5-0.8,0.1,0.6,1.6,0.4c0.1,0.5,0.1,0.6,0,0.7l0.1-0.1c0,0,0,0.1-0.1,0.1l0,0l-0.9,1.5c-0.4,0.4-0.3-0.4-0.7-0.4\r\n        c-0.1,1-0.6,0.5-1,1.1c0.5-0.2,0.8,0.3,0.6,0.9l0.7-0.8c0.8,1.4-1.2,1.3-0.4,2.7l-0.5-0.4c0.3,0.7,0.1,2.8,1.3,3.5\r\n        c-0.2,0.1-0.6,0.3-0.7,0c-0.1,1.8,1.4,3.9,0.7,5.4l-0.4-0.1c0.1,0.3,0.7,0.6,0.3,1c-0.2,0-0.4-0.1-0.4,0c0.1,0.2,0.7,0.9,0.5,1.3\r\n        l-0.4-0.4c-0.4,1.8,1.1,2.7,1.4,4.1c-1.1,0-1.4,1.4-1.6,2.1l-0.2,0c-0.1,2,1,3.4,1.5,5.3c-1.2,1.2-0.4,4-1,5.9c0.2-0.3,0.9,0,1,0.4\r\n        c-0.2,0.4,0.8,1.2-0.2,1.2l0-0.2c-1,0.4-0.7,1.3-0.7,2l1.3,0.1c-1.9,1.9,0.8,4.8-0.9,5.9c0.3,0.4,0.3,1,0.7,1.4l-0.7,0\r\n        c-0.1,1.2-0.2,1.9,0,3.4l-0.5-0.3c0,0.9,2.1,1,2.1,1.8l-1,0.3c0.1,1.5-0.8,3,0.2,4.5c-0.2,0-0.5-0.1-0.5-0.3c0,0.4-0.2,1-0.1,1.6\r\n        c0,0.3,0.1,0.5,0.2,0.7c0.1,0.2,0.4,0.4,0.7,0.2c-0.5,0-0.5,0.7-0.3,1.5c0.2,0.8,0.5,1.6,0.7,2.1c-0.2,0.1-0.5,0.2-0.7,0.2\r\n        c0.8,0.5,1.1,0.4,1.3,1.1c0.1,0,0.3,0,0.5-0.1c0.2,0.1-0.1,0.4-0.4,0.4c0.7,0.2,1.3-0.6,2.2-0.2c-0.2,0.1-0.5,0.3-0.8,0.4\r\n        c1.1,0.1,1.2-0.1,2-0.6c0.7-0.2,1.9,0.3,1.9,0.9c0.1-0.4,0.6-0.9,1-0.7c0,0.2-0.1,0.4-0.2,0.4c1.3,0.5,2-0.7,2.8,0\r\n        c0,0.2,0.1,0.3,0.1,0.4c-1-0.1-1.9-0.1-1.8-0.2c0,0.6,0.8,0.8,0.1,1.6c0.7-0.4,1.9-1.4,2.7-1.1c0,0.1,0.1,0.1,0.1,0.2l-0.1,0.1\r\n        c0.2,0.1,0.4,0,0.5-0.1c0.3,0.1,0.4,0.2,0.7,0.2c0.1,0.5,0.9,0.3,1.4,0.4c0-0.7,0.5-0.6,0.1-1.2c0.1,0.1-0.1,0.1-0.4,0.1\r\n        c-0.1,0-0.1,0-0.2,0.1c0,0,0,0,0-0.1c-0.3,0-0.6,0-1,0c0.3-0.3,0.7-0.6,1.1-0.2c0.2-0.4,0.5-0.9,0.6-1.1c0.5,1,1.6,1.6,1.7,2.2\r\n        c1.3-0.3,3-0.1,3.9-1.4c0.4-0.2,0.4,0.4,0.5,0.6c-0.2,0.1-0.5,0.1-0.6,0.3c0.7-0.3,2.1,0,2.4-0.9c0.9,0.5-0.6,0.8,0.7,0.7l-0.2,0.3\r\n        c2.4,1.6,4.1-2.1,6.7-0.1c-0.2-0.1-0.3-0.2-0.3-0.3c3.1,1,6.4-0.5,9.4,1c0.9,0.3,1-0.3,1.5-0.7l0.2,0.8l1-0.8\r\n        c1.3-0.6,2.1,1.9,3.8,0.8l-0.2-0.5c0.6,0.1,1.9-0.2,1.7,0.4c0.1-0.1,0.2-0.5,0.4-0.2l0,0.4l1.5-0.6c1.1,0.3-0.3,1.5,1.4,1.7\r\n        c0.6-0.1,1.8-1.1,1.6-1.3c-0.2,0-0.6-0.3-0.6-0.7l0.6-0.2c0-0.1,0-0.1,0-0.2l0.1,0l0-0.4c0.1-0.6,0.2-1.1,0-1.7l-0.1-4.4l0.2,0.1\r\n        l-0.2-0.2l0-0.8c0.1,0,0.3,0.1,0.3,0.2c0.5-0.6-0.4-0.5,0.2-1.1c0.1-0.1,0.1,0,0.2,0l-0.3-0.6c0.2,0.1,0.7-0.1,0.6,0.3\r\n        c0.6-1.1-0.8-1.7,0-2.1l0.1,0.1c-0.3-1.1-0.6-0.6-1.1-0.8l0-0.7l1.3-0.5l-0.8-0.1c0-0.2,0.1-0.5,0.4-0.4c-0.5-0.6-0.3,0.1-0.8-0.2\r\n        c0.7-0.8-0.4-2,0.8-2.2c-0.6-0.3-0.4,0.7-0.8-0.1c1.3-0.3-0.2-0.9,0.3-1.6c0.7,0.2,0.3,0.8,0.9,0.1c-1.1-0.4,0.2-1.3,0-1.9\r\n        c-0.9,0-0.4-1.2-0.7-2.2c0.3,0.1,0.5-1.8,0.8-2.7l0.2,0c-0.9-0.2-0.8-1.1-1-1.7c0.5,0,0.8,0.1,1,0.5l0-0.6c-0.3-0.1-0.5-0.3-0.6-0.7\r\n        l0.7,0.1c-0.1-0.8-0.8-1.7-0.4-2.8c-0.4,0-1.1,0.4-1.6,0.3l0-0.6c0.2,0,0.4,0.1,0.5,0.2c0-0.1-0.3-0.3-0.2-0.5l0.6,0.4\r\n        c0.2-0.5-0.5-0.2-0.4-0.6c0.5,0,0.3-0.3,0.7-0.3c0,0.1-0.2,0.3,0,0.5c0.1-0.4,0.4-1,0.7-1.2c-0.3,0-0.7,0-0.7-0.3\r\n        c-0.1-0.8,0.6-0.3,0.8-0.8c-0.3-0.2,0-0.7-0.7-0.7c0-0.2,0.3-0.3,0.5-0.4c-0.3-0.4-0.1-2-0.9-1.5l0,0.1c0,0,0,0,0-0.1\r\n        c-0.8-1.4,0.3-3,0-4.4l0.2,0c-0.3-0.8-0.2-1.9-0.8-2.5c0-0.2,0.4-0.6,0.7-0.5c-0.2-0.6-0.5-0.7-0.1-1.6c0.4,0.6,0.4-0.2,0.3,0.7\r\n        c0.2-0.8,0.6-1-0.1-1.9c0.6,0.3,0.8-0.7,0.6-1l-0.4,0.6c-0.1-0.4-0.1-0.8,0-1.2l0.8,0.2c1-1.7-1.8-3.1-0.1-4.4\r\n        c-0.6-0.4-0.4,0.9-1.1,0.6c0.1-0.8,1.3-1.6,1.3-1.9c0.4-1.1-1.2-1-0.9-2.1c-0.3,0.2-1.1,0.3-1.4-0.5c0.1-0.8,1.2-1,1.5-0.5\r\n        c0,0.2-0.1,0.3-0.2,0.3c0.1,0.3,0.2,0.6,0.6,0.3l-0.3-0.1c0.3-0.4,0.2-1.5,0.7-1.2c-0.3-0.6-0.5-0.2-0.6,0.2c0.4-1,0-1.6,0.2-2.6\r\n        c-0.2,0.2-0.5,0.3-0.5,0.2c0.3-1.5-0.6-0.7-0.7-1.7c0.4-0.6,1.1,0.2,0.7-0.8c0.3-0.6,0.8-0.2,1,0.1c-0.6-0.9,0.3-1.8,0.4-2.3\r\n        l0.2,0.5C524.4,35.7,524.3,35.5,524.3,35.4z M484,99.4C484,99.4,484,99.3,484,99.4c0,0,0,0.2-0.1,0.3c-0.3,0.1-0.4-0.1-0.4-0.2\r\n        C483.7,99.5,483.8,99.4,484,99.4z M522.2,90c0,0-0.1,0.1-0.1,0.1l0-0.3C522.1,89.8,522.2,89.9,522.2,90z\"/>\r\n    <path class=\"logo__box logo__box--02\" d=\"M582.3,88.7L582.3,88.7c-0.3-1-0.5-0.5-1-0.7l0-0.7l1.2-0.6l-0.8-0.1c0-0.2,0.1-0.5,0.4-0.4\r\n        c-0.6-0.6-0.3,0.1-0.8-0.2c0.6-0.8-0.4-2.1,0.8-2.3c-0.6-0.2-0.4,0.8-0.8,0c1.3-0.3-0.3-0.9,0.3-1.7c0.7,0.2,0.4,0.9,0.9,0.1\r\n        c-1.2-0.4,0.2-1.4-0.1-1.9c-0.9,0-0.4-1.3-0.8-2.2c0.3,0,0.4-1.9,0.7-2.8l0.2,0c-0.9-0.1-0.8-1.1-1-1.8c0.5,0,0.8,0.1,1,0.5l0-0.6\r\n        c-0.3-0.1-0.5-0.3-0.6-0.7l0.7,0.1c-0.1-0.9-0.9-1.7-0.5-2.8c-0.4,0-1.1,0.4-1.6,0.4l0-0.6c0.2,0,0.4,0.1,0.5,0.2\r\n        c-0.1-0.1-0.3-0.3-0.2-0.6l0.6,0.4c0.2-0.5-0.5-0.2-0.5-0.6c0.5,0,0.3-0.3,0.7-0.3c0.1,0.1-0.2,0.4,0,0.5c0.1-0.5,0.3-1,0.7-1.2\r\n        c-0.3,0.1-0.7,0-0.7-0.3c-0.1-0.9,0.6-0.3,0.8-0.8c-0.4-0.2,0-0.8-0.8-0.7c0-0.3,0.3-0.3,0.5-0.4c-0.3-0.4-0.2-2.1-1-1.5l0,0.1\r\n        c0,0,0,0,0-0.1c-0.8-1.4,0.2-3.1-0.2-4.5l0.2,0c-0.3-0.9-0.3-1.9-0.8-2.5c0-0.3,0.4-0.6,0.7-0.5c-0.2-0.7-0.5-0.7-0.2-1.7\r\n        c0.5,0.6,0.4-0.3,0.4,0.7c0.2-0.9,0.5-1.1-0.2-2c0.6,0.3,0.8-0.7,0.5-1.1l-0.4,0.6c-0.1-0.5-0.1-0.9-0.1-1.3l0.8,0.2\r\n        c0.9-1.8-1.9-3.1-0.3-4.5c-0.6-0.4-0.4,1-1,0.6c0.1-0.8,1.2-1.7,1.2-2c0.4-1.1-1.3-1-1-2.1c-0.3,0.2-1.1,0.4-1.4-0.5\r\n        c0.1-0.8,1.2-1.1,1.4-0.6c0,0.2-0.1,0.3-0.2,0.3c0.1,0.3,0.3,0.6,0.6,0.3l-0.3-0.1c0.3-0.4,0.2-1.5,0.7-1.3\r\n        c-0.3-0.6-0.5-0.2-0.6,0.2c0.4-1.1-0.1-1.6,0.1-2.7c-0.2,0.2-0.5,0.4-0.5,0.2c0.3-1.6-0.6-0.7-0.8-1.7c0.4-0.6,1.1,0.2,0.6-0.9\r\n        c0.3-0.7,0.8-0.2,1,0.1c-0.6-0.9,0.3-1.8,0.3-2.4l0.3,0.5c-0.2-0.3-0.2-0.6-0.2-0.8l-0.6,0.3c0.1-0.3,0.1-0.6,0.3-0.6\r\n        c-0.4-0.3-1,0.3-1.5-0.3c0.3-0.4-0.4-1.2,0.4-1.4c-0.2,1.3,0.8-0.2,1,0.9c-0.1-0.2-0.1-0.5,0-0.8c0.1-0.1,0.2,0,0.2,0.1\r\n        c0.6-1.3-0.9-0.5-1-1.8c0.2,0.1,0.4,0,0.6-0.1c0.1-0.1,0.1-0.1,0.1-0.2c0-0.1,0-0.2,0-0.3c0,0.5-0.2,0.4-0.4,0.4\r\n        c-0.2,0-0.5-0.3-0.7-0.7c0.3-1.4-0.3-1.3-0.3-1.9l-0.1,0.8c-0.4-0.1-0.4-0.6-0.6-1.3c0.1-0.1,0.2-0.1,0.2,0c-0.1-0.2-0.1-0.5,0-0.9\r\n        c0.1-0.5,0.3-1.2,0.4-1.8c-0.2,0-0.5,0-0.9,0.1c-0.4-0.3,0.6-0.8,0.1-1c-1,0.3-1.4,0.1-1.8,0c-0.4-0.2-0.9-0.3-1.8-0.1\r\n        c0.4,0.6,0.4,0.4-0.8,1l2.8-0.4c-0.7,0.3-1.4,0.6-2,0.9c0.7,0,1.7-0.4,2.1-0.3c-1,0.5-0.8,0.3-0.8,0.8c-0.2-0.4-0.8-0.3-1.3-0.1\r\n        c-0.5,0.2-1,0.4-1.5,0.1l0-1.5c-1.2-0.7-2.2,0.8-3.7,0.4l0.5,0.3c-0.2,0.6-1,0.1-1.5,0.3c0-0.5-0.3-0.7-0.5-1c0,0.4-1.1,0-1.3,0.9\r\n        l-0.7-0.6c-1.3-0.3-1.4,1.4-2.7,1.2c0.4-0.5-0.2-0.9,0.6-1.3c-0.4,0-0.8-0.1-0.8,0.2c-0.2-0.3-1.1,0.7-1.5,0.2\r\n        c-0.2,0.2-0.2,0.7-0.7,0.7c0-0.1,0-0.2,0-0.2c0,0.2-0.7,0.3-0.3,0.9c-1.3-1.5-3.5,0.1-4.6-1.2c-0.9,0.2-2,0.3-2.8,0.4\r\n        c0.1-0.1,0-0.2,0.2-0.2c-1.1-0.5-0.7,1.4-2,0.9c-0.6-0.8,0.7-0.4,0.3-0.7c-0.2-1.6-1.5,0.2-2.4-0.7l0.2-0.1\r\n        c-0.7-0.5-1.6,0.6-2.7,0.5c0,0,0.1-0.1,0-0.2c-0.7,0.8-2.1,1.1-3.1,1.3c0.3-0.6,0.5-0.3,0.3-1c-0.5,0.1,0.1,1-0.8,1.2\r\n        c-0.3-0.3-1-0.6-1-1.3l0.9,0c-0.4-0.9-1.1,0-1.6-0.1l0.1-0.4c-1.3,0.1-1.3,1.1-2.8,1l0.1,0.3c-0.8,1-0.8-0.5-1.7,0.2\r\n        c-0.2-0.3-0.4-0.7-0.6-1c-0.3,0.1-0.8,0.3-1.3,0.6c-0.5,0.2-1,0.4-1.4,0.5c0,0.1,0,0.1,0,0.2c0-0.1-0.1-0.2-0.1-0.3\r\n        c0-0.6,1.2-1,2-1.4c-0.8,0-2.7,0.1-2.6,0.6c0.2-0.1,0.4-0.3,0.8-0.2c-0.1,0.3-0.3,0.5-0.5,0.7c0.3,0.9,0.4,1.6,0.4,2.4\r\n        c-0.9-0.7-1.1,0.2-1.2,1.3c0,0.3,0,0.6-0.1,0.9c0,0.1,0,0.3-0.1,0.4c0,0.1,0,0.2-0.1,0.3c-0.1,0.4-0.3,0.7-0.7,0.8\r\n        c0.7,1.8-0.4,3.6-0.3,5.6c1.5-0.7,0,0.6,1.5,0.5c0.1,0.5,0.1,0.7,0,0.7l0.1-0.1c0,0,0,0.1-0.1,0.1l0,0l-0.9,1.5\r\n        c-0.4,0.3-0.3-0.5-0.7-0.4c-0.1,1.1-0.7,0.4-1.1,1.1c0.5-0.1,0.8,0.4,0.5,1l0.7-0.8c0.8,1.5-1.3,1.3-0.5,2.8l-0.5-0.5\r\n        c0.3,0.8-0.1,2.8,1.1,3.6c-0.2,0.1-0.6,0.3-0.7,0c-0.2,1.8,1.2,4.1,0.4,5.5l-0.4-0.1c0.1,0.3,0.7,0.6,0.3,1c-0.2,0-0.4-0.1-0.4,0\r\n        c0.1,0.2,0.6,0.9,0.4,1.4l-0.4-0.4c-0.5,1.8,1,2.8,1.2,4.3c-1.1,0-1.5,1.4-1.7,2.1l-0.2,0c-0.2,2.1,0.8,3.6,1.2,5.5\r\n        c-1.2,1.2-0.6,4.1-1.3,6c0.2-0.3,0.9,0.1,1,0.4c-0.2,0.4,0.7,1.3-0.3,1.2l0-0.2c-1,0.3-0.7,1.3-0.8,2l1.3,0.1c-1.9,1.9,0.6,5-1.1,6\r\n        c0.3,0.5,0.3,1,0.6,1.5l-0.7,0c-0.2,1.3-0.3,1.9-0.2,3.5l-0.5-0.3c-0.1,0.9,2,1.2,2,2l-1.1,0.2c0,1.5-1,3.1-0.1,4.6\r\n        c-0.2,0-0.5-0.1-0.5-0.3c0,0.7-0.8,2.8,0.7,2.6c-0.5,0-0.5,0.4-0.4,0.9c0.1,0.3,0.2,0.5,0.3,0.8c0.1,0.4,0.2,0.8,0.3,1.1\r\n        c-0.2,0-0.5-0.1-0.7-0.1c0.4,0.5,0.7,0.7,0.9,1c0.2,0.3,0.3,0.6,0.4,1.2c-0.1,0.3-0.4,0.5-0.4,0.2c-0.1,0.5,0,0.6,0.2,0.7\r\n        c0.2,0.1,0.3,0.3,0.1,1.1c-0.1,0-0.3-0.1-0.4-0.1c-0.1,0.9,0,1,0.3,1c0.2-0.1,0.5-0.2,0.8-0.4c0.5-0.2,0.9-0.1,1.2,0\r\n        c0.3,0.1,0.6,0.4,0.5,0.7c0.4-0.4,1.2-0.9,1.8-0.8c0,0.2-0.3,0.4-0.4,0.5c0.9,0.2,1.8,0,2.3-0.2c0.4-0.2,0.8-0.4,1.3,0\r\n        c0,0.2,0.1,0.3,0.2,0.4c-0.5,0-1,0-1.3,0c-0.2,0-0.4,0-0.5,0c-0.1,0-0.2,0-0.2,0c0,0.3,0.4,0.5,0.5,0.7c0.1,0.1,0.1,0.2,0.1,0.4\r\n        c0,0.1,0,0.2-0.1,0.2c0,0.1-0.1,0.2-0.3,0.3c0.2-0.1,0.3-0.1,0.4-0.2c0.1-0.1,0.2-0.2,0.3-0.2c0.2-0.2,0.4-0.3,0.7-0.5\r\n        c0.5-0.3,1-0.5,1.4-0.4c0,0.1,0.1,0.1,0.1,0.2L541,104c0.2,0.1,0.4,0,0.5-0.1c0.3,0.1,0.4,0.2,0.7,0.2c0.1,0.5,1,0.2,1.4,0.3\r\n        c-0.1-0.7,0.5-0.6,0-1.2c0.1,0-0.1,0.1-0.4,0.1c-0.1,0-0.1,0-0.2,0.1c0,0,0,0,0-0.1c-0.3,0-0.6,0.1-1.1,0.1c0.3-0.4,0.7-0.7,1.2-0.3\r\n        c0.2-0.5,0.4-0.9,0.6-1.1c0.6,1,1.8,1.4,1.9,2c1.3-0.4,3.1-0.4,3.8-1.7c0.4-0.2,0.4,0.4,0.6,0.6c-0.2,0.1-0.5,0.1-0.6,0.3\r\n        c0.7-0.4,2.2-0.2,2.3-1.1c1,0.4-0.5,0.9,0.8,0.7l-0.2,0.3c2.6,1.4,4-2.5,6.9-0.7c-0.2-0.1-0.3-0.2-0.3-0.3c3.2,0.7,6.6-1,9.8,0.2\r\n        c0.9,0.2,1-0.4,1.5-0.8l0.2,0.7l0.9-0.9c1.3-0.7,2.4,1.8,4,0.5l-0.2-0.5c0.6,0.1,1.9-0.4,1.8,0.2c0.1-0.1,0.2-0.5,0.4-0.3l0,0.4\r\n        l1.5-0.7c1.2,0.2-0.1,1.6,1.6,1.6c0.6-0.2,1.7-1.2,1.5-1.5c-0.3,0-0.7-0.2-0.7-0.6l0.6-0.2c0-0.1,0-0.1,0-0.2l0.1,0l0-0.6\r\n        c0-0.4,0-0.8-0.1-1.2l-0.3-5l0.2,0.1l-0.2-0.2l0-0.9c0.1,0,0.3,0.1,0.3,0.2c0.5-0.7-0.4-0.5,0.1-1.1c0.1-0.1,0.1,0,0.2,0l-0.3-0.6\r\n        c0.2,0.1,0.7-0.1,0.6,0.2C583,89.7,581.6,89.1,582.3,88.7z M542.8,103.9C542.8,103.9,542.8,103.9,542.8,103.9c0,0,0,0.2-0.1,0.3\r\n        c-0.3,0.1-0.4,0-0.4-0.2C542.4,104,542.6,104,542.8,103.9z M581.5,91.1l0-0.3c0,0.1,0.1,0.2,0.1,0.3C581.6,91,581.5,91.1,581.5,91.1\r\n        z\"/>\r\n    <path class=\"logo__box logo__box--03\" d=\"M645.9,39.9c-0.1-0.3-0.1-0.5-0.1-0.8l-0.6,0.3c0.1-0.3,0.1-0.5,0.4-0.5c-0.4-0.3-1,0.2-1.5-0.4\r\n        c0.3-0.4-0.3-1.2,0.5-1.3c-0.3,1.2,0.8-0.1,0.9,0.9c-0.1-0.2-0.1-0.4,0-0.7c0.1,0,0.2,0,0.2,0.1c0.2-0.3,0.2-0.5,0.2-0.6\r\n        c0-0.2-0.2-0.3-0.3-0.4c-0.3-0.2-0.7-0.5-0.7-1.4c0.4,0.2,0.9-0.7,0.8-1.1c0,0.9-0.7,0.6-1.1,0.1c0.4-1.4-0.2-1.2-0.2-1.8l-0.2,0.8\r\n        c-0.4,0-0.4-0.5-0.5-1.1c0.4-0.4,0.2,0.5,0.4,0.1c-0.2-0.1-0.2-0.2-0.2-0.5c-0.3-0.1-0.5-0.3-0.8-0.5c-0.3-0.2-0.7-0.3-1.3-0.1\r\n        c-0.4-0.3,0.4-0.8-0.1-1c-1,0.2-1.3,0.1-1.7-0.1c-0.2-0.1-0.4-0.2-0.7-0.2c-0.3,0-0.7-0.1-0.9,0c0.3,0.6,0.3,0.5-0.4,1l0.4-0.1\r\n        l0.2,0l0.3,0l1.4-0.1c-0.7,0.3-1.2,0.5-1.8,0.8c0.7,0,1.6-0.3,2-0.2c-0.9,0.4-0.7,0.3-0.6,0.8c-0.3-0.5-0.8-0.4-1.3-0.2\r\n        c-0.4,0.1-0.7,0.3-1.1,0l0.1-1.5c-1.1-0.7-2.1,0.6-3.6,0.2l0.5,0.3c-0.2,0.6-0.9,0-1.4,0.2c0.1-0.5-0.2-0.7-0.4-1\r\n        c0,0.4-1.1-0.1-1.3,0.9l-0.6-0.7c-1.2-0.3-1.5,1.3-2.7,1.1c0.4-0.5-0.1-0.9,0.7-1.2c-0.4,0-0.7-0.1-0.8,0.2\r\n        c-0.2-0.3-1.1,0.6-1.5,0.1c-0.2,0.2-0.3,0.7-0.7,0.7c0-0.1,0-0.2,0-0.2c0,0.2-0.7,0.3-0.4,0.9c-1.1-1.6-3.4-0.1-4.4-1.4\r\n        c-0.9,0.1-1.9,0.2-2.7,0.2c0.1-0.1,0-0.2,0.2-0.2c-1.1-0.5-0.7,1.4-1.9,0.8c-0.6-0.8,0.7-0.4,0.3-0.7c-0.1-1.6-1.5,0.1-2.3-0.8\r\n        l0.2-0.1c-0.6-0.6-1.6,0.5-2.6,0.4c0,0,0.1-0.1,0-0.2c-0.8,0.8-2.1,1-3.1,1.2c0.3-0.6,0.5-0.3,0.3-1c-0.4,0.1,0.1,1-0.8,1.2\r\n        c-0.3-0.4-0.9-0.7-0.9-1.4l0.8,0c-0.4-0.9-1.1,0-1.5-0.2l0.1-0.4c-1.3,0.1-1.4,1-2.7,0.9l0.1,0.3c-0.8,0.9-0.6-0.6-1.4,0.1l-0.2-1\r\n        c-0.3,0.1-0.7,0.3-1.2,0.5c-0.6,0.2-1.3,0.4-1.8,0.4c0.3-0.7,2.1-1,2.5-1.4c-0.1,0-0.3,0-0.5,0c-0.2,0-0.5,0-0.8,0\r\n        c-0.6,0-1.1,0.2-1.2,0.4c0.3-0.1,0.6-0.3,0.9-0.1c-0.8,0.7-1.6,1.1-2.8,1c-0.4-0.9-1.2-1.1-2.2-1.2c-0.2,1.1-0.2,2.6-1.1,2.9\r\n        c0.2,1.6,0,3.1-0.1,3.8c-0.2,0.9-0.5,1.8-0.5,2.8c1.5-0.6,0,0.6,1.5,0.6c0.1,0.5,0,0.6-0.1,0.7l0.1-0.1c0,0-0.1,0.1-0.1,0.1l0,0\r\n        l-1,1.4c-0.5,0.3-0.3-0.5-0.6-0.5c-0.2,1-0.7,0.4-1.1,1c0.6-0.1,0.7,0.4,0.5,1l0.8-0.8c0.7,1.5-1.4,1.2-0.7,2.7l-0.4-0.5\r\n        c0.2,0.8-0.2,2.7,1,3.6c-0.2,0.1-0.6,0.3-0.7-0.1c-0.3,1.8,1,4.1,0.2,5.4l-0.4-0.2c0.1,0.3,0.7,0.6,0.3,1c-0.2,0-0.4-0.2-0.4,0\r\n        c0.1,0.2,0.6,0.9,0.3,1.4l-0.4-0.4c-0.6,1.7,0.8,2.7,1,4.2c-1.1-0.1-1.5,1.3-1.8,1.9l-0.2,0c-0.3,2,0.7,3.5,0.9,5.4\r\n        c-1.3,1.1-0.8,3.9-1.6,5.7c0.2-0.3,0.8,0.1,0.9,0.4c-0.3,0.4,0.7,1.3-0.3,1.1l0-0.2c-1,0.3-0.8,1.2-0.9,1.9l1.3,0.2\r\n        c-2,1.7,0.3,4.9-1.4,5.8c0.3,0.5,0.3,1,0.5,1.5l-0.7-0.1c-0.3,1.2-0.4,1.8-0.3,3.4l-0.5-0.3c-0.1,0.9,1.9,1.2,1.9,2l-1.1,0.2\r\n        c-0.1,1.5-1.1,2.9-0.3,4.5c-0.2,0-0.5-0.1-0.5-0.3c-0.1,0.7-0.9,2.7,0.5,2.5c-0.2,0-0.4,0.1-0.4,0.2c-0.1,0.3-0.1,0.6,0,1.1\r\n        c0.1,0.8,0.3,1.7,0.5,2.2c-0.2,0-0.5,0.1-0.7,0.1c0.4,0.4,0.7,0.5,0.9,0.7c0.2,0.2,0.3,0.5,0.4,1c-0.1,0.3-0.5,0.6-0.4,0.4\r\n        c-0.1,0.2-0.1,0.4-0.1,0.5c0.6-0.1,1.2-0.5,1.9-0.2l-0.9,0.4c1.1,0.1,1.2-0.1,2.1-0.5c0.4-0.1,0.8,0,1.2,0.2\r\n        c0.4,0.2,0.7,0.5,0.7,0.8c0.1-0.2,0.4-0.4,0.6-0.5c0.3-0.1,0.4-0.2,0.7-0.1c0,0.2-0.1,0.4-0.2,0.4c1.3,0.6,2-0.6,2.8,0.1\r\n        c0,0.2,0,0.3,0.1,0.4c-1-0.1-1.9-0.2-1.8-0.3c-0.1,0.6,0.8,0.8,0,1.6c0.7-0.4,1.9-1.4,2.7-1c0,0.1,0.1,0.1,0.1,0.2l-0.1,0.1\r\n        c0.2,0.1,0.4,0,0.5-0.1c0.2,0.1,0.4,0.2,0.7,0.2c0.1,0.5,0.9,0.4,1.3,0.4c0-0.7,0.6-0.5,0.1-1.2c0.1,0.1-0.1,0.1-0.4,0.1\r\n        c-0.1,0-0.1,0-0.2,0.1c0,0,0,0,0-0.1c-0.3,0-0.6,0-1,0c0.4-0.3,0.7-0.6,1.1-0.2c0.3-0.4,0.5-0.9,0.7-1.1c0.5,1,1.5,1.6,1.6,2.2\r\n        c1.3-0.3,3,0,3.9-1.2c0.4-0.1,0.4,0.4,0.5,0.6c-0.2,0.1-0.5,0.1-0.6,0.3c0.7-0.3,2.1,0.1,2.4-0.8c0.9,0.5-0.6,0.8,0.7,0.8l-0.2,0.3\r\n        c2.3,1.7,4.2-2,6.7,0.1c-0.2-0.1-0.3-0.2-0.3-0.3c3,1.1,6.4-0.2,9.4,1.3c0.8,0.3,1-0.2,1.6-0.6l0.1,0.8l1-0.8c1.3-0.5,2.1,2,3.8,1\r\n        l-0.2-0.5c0.6,0.1,1.9-0.1,1.7,0.4c0.1-0.1,0.2-0.5,0.4-0.2l0,0.4l1.5-0.5c1.1,0.4-0.3,1.5,1.3,1.8c0.6-0.1,1.8-1,1.6-1.3\r\n        c-0.2,0-0.6-0.3-0.6-0.7l0.6-0.2c0-0.1,0-0.1,0-0.2l0.1,0l0-0.5c0.1-0.5,0.2-1.1,0-1.6l0.1-4.5l0.2,0.1l-0.2-0.2l0-0.8\r\n        c0.1,0,0.3,0.1,0.3,0.3c0.5-0.6-0.4-0.6,0.2-1.1c0.1-0.1,0.1,0,0.2,0l-0.3-0.6c0.2,0.1,0.7-0.1,0.6,0.3c0.6-1.1-0.7-1.8,0.1-2.1\r\n        l0.1,0.1c-0.2-1.1-0.5-0.7-1-0.8l0-0.7l1.3-0.5l-0.8-0.2c0-0.2,0.1-0.5,0.4-0.4c-0.5-0.6-0.3,0.1-0.8-0.3c0.7-0.7-0.3-2.1,0.9-2.2\r\n        c-0.6-0.3-0.5,0.7-0.8-0.1c1.3-0.2-0.2-0.9,0.4-1.6c0.7,0.2,0.3,0.9,0.9,0.2c-1.1-0.4,0.3-1.3,0.1-1.9c-0.9,0-0.3-1.3-0.6-2.2\r\n        c0.3,0.1,0.5-1.8,0.9-2.7l0.2,0c-0.9-0.2-0.7-1.1-0.9-1.8c0.5,0,0.8,0.2,1,0.5l0-0.6c-0.3-0.2-0.4-0.4-0.5-0.8l0.7,0.2\r\n        c0-0.8-0.8-1.7-0.3-2.8c-0.4-0.1-1.1,0.3-1.6,0.2l0-0.6c0.2,0,0.4,0.1,0.5,0.2c0-0.1-0.3-0.4-0.1-0.5l0.6,0.5\r\n        c0.3-0.5-0.5-0.3-0.4-0.7c0.5,0,0.4-0.3,0.7-0.2c0,0.1-0.2,0.3,0,0.5c0.1-0.4,0.4-1,0.8-1.1c-0.3,0-0.7,0-0.7-0.3\r\n        c0-0.8,0.6-0.3,0.9-0.8c-0.3-0.2,0-0.7-0.7-0.8c0-0.2,0.4-0.3,0.6-0.4c-0.3-0.4,0-2-0.8-1.6l-0.1,0.1c0,0,0,0,0-0.1\r\n        c-0.7-1.4,0.5-2.9,0.2-4.4l0.2,0c-0.3-0.8-0.1-1.9-0.6-2.5c0-0.2,0.5-0.6,0.8-0.5c-0.2-0.6-0.4-0.7,0-1.6c0.4,0.7,0.4-0.2,0.3,0.7\r\n        c0.2-0.8,0.6-1,0-1.9c0.6,0.3,0.8-0.6,0.6-1l-0.5,0.6c-0.1-0.4,0-0.8,0-1.2l0.8,0.2c1-1.7-1.6-3.1,0.1-4.4c-0.6-0.5-0.4,0.9-1.1,0.5\r\n        c0.1-0.8,1.3-1.6,1.3-1.8c0.5-1.1-1.2-1-0.8-2.2c-0.3,0.1-1.1,0.3-1.3-0.6c0.1-0.8,1.3-0.9,1.5-0.4c0,0.2-0.1,0.3-0.2,0.3\r\n        c0.1,0.3,0.2,0.6,0.5,0.3l-0.3-0.1c0.3-0.4,0.3-1.5,0.8-1.2c-0.3-0.6-0.5-0.3-0.6,0.2c0.5-1,0.1-1.6,0.4-2.6\r\n        c-0.2,0.2-0.5,0.3-0.5,0.1c0.4-1.5-0.5-0.7-0.6-1.7c0.5-0.6,1.1,0.2,0.7-0.8c0.3-0.6,0.8-0.1,1,0.1c-0.5-1,0.4-1.8,0.5-2.3\r\n        L645.9,39.9z M602.5,101.8C602.5,101.8,602.6,101.7,602.5,101.8c0,0,0,0.2-0.1,0.3c-0.3,0.1-0.4-0.1-0.4-0.2\r\n        C602.2,101.8,602.3,101.8,602.5,101.8z M641,93.8c0,0-0.1,0.1-0.1,0.1l0-0.3C641,93.6,641,93.7,641,93.8z\"/>\r\n    <path class=\"logo__letter\" d=\"M20.3,58.8c-0.1-0.6-0.2-1.2-0.2-1.7s-0.2-1.1-0.2-1.7c-0.1-0.7-0.1-1.4,0-2.1c0.1-0.7,0.2-1.4,0.4-2.1\r\n        c0.2-0.7,0.6-1.3,1-1.8c0.4-0.5,1-0.9,1.8-1.1c1.2-0.3,2.4-0.3,3.6,0.1c1.2,0.4,2.3,0.9,3.4,1.4c1,0.5,2,1.1,3,1.7\r\n        c1,0.6,2,1.1,3.1,1.7c0.5,0.3,1.1,0.5,1.6,0.8c0.5,0.3,1,0.6,1.4,1s0.8,0.8,1,1.4c0.3,0.5,0.4,1.2,0.5,1.9c0,0.7-0.1,1.5-0.4,2.2\r\n        c-0.3,0.7-0.6,1.4-0.8,2c-1.6,3.7-3.7,7.1-6.3,10.4c-0.9,1.2-2,2.3-3.2,3.3c-1.2,1-2.5,1.7-4,2c0.3,2.1,0.7,4.2,1.1,6.2\r\n        c0.4,2,0.9,4.1,1.4,6.1c0.2,0.7,0.1,1.3-0.2,1.7c-0.3,0.5-0.8,0.8-1.3,0.9c-0.5,0.1-1,0.1-1.6-0.1s-0.9-0.7-1.1-1.4\r\n        c-1.2-4.5-2.1-9-2.7-13.5s-1-9.1-1.2-13.8c0-0.6-0.1-1.2-0.1-1.8c0-0.6,0-1.2-0.1-1.8c0-0.3,0-0.5,0-0.7s0-0.5-0.1-0.7V58.8z\r\n        M24.2,53.4c0,0.8,0,1.7,0.1,2.6c0,0.4,0.1,0.7,0.1,0.8c0,0.1,0,0.2,0,0.3l0.2,1c0.1,1.1,0.2,2.2,0.2,3.4c0.1,1.6,0.1,3.2,0.2,4.8\r\n        s0.2,3.2,0.3,4.8c0,0.4,0.1,0.9,0.1,1.3c0,0.4,0.1,0.9,0.1,1.3c0.4-0.1,0.6-0.2,0.8-0.3c0.1-0.1,0.3-0.2,0.4-0.2\r\n        c0.2-0.1,0.4-0.3,0.5-0.4c0.9-0.7,1.7-1.5,2.3-2.2c0.6-0.7,1.2-1.5,1.7-2.3c1.2-1.7,2.3-3.5,3.2-5.3c0.2-0.4,0.4-0.8,0.5-1.1\r\n        c0.2-0.3,0.4-0.7,0.5-1.1c0.1-0.2,0.1-0.4,0.2-0.5s0.1-0.3,0.2-0.5c0.2-0.4,0.3-0.8,0.4-1.1c0-0.3-0.1-0.4-0.2-0.6\r\n        c-0.5-0.3-0.9-0.5-1.1-0.6c-1.1-0.5-2.1-1-3.1-1.6c-1-0.5-2-1.1-3.1-1.7c-0.5-0.3-1-0.6-1.6-0.8c-0.5-0.3-1.1-0.5-1.7-0.7\r\n        c-0.1,0-0.2-0.1-0.4-0.1c-0.1,0-0.2-0.1-0.4-0.1c-0.3,0-0.4,0-0.4,0c0,0-0.1,0-0.1,0c-0.1,0.1-0.1,0.2-0.1,0.3c0,0.1,0,0.2-0.1,0.3\r\n        V53.4z\"/>\r\n    <path class=\"logo__letter\" d=\"M78.4,88.5c-0.6,0-1-0.2-1.4-0.5c-0.3-0.3-0.6-0.7-0.7-1.1c-0.1-0.4-0.1-0.9,0-1.3c0.1-0.4,0.4-0.8,0.7-1.1\r\n        c0.3-1.3,0.4-2.5,0.2-3.8c-0.1-1.3-0.3-2.5-0.4-3.8c-0.2-1.5-0.2-3.1-0.2-4.6c0.1-1.5,0.2-3,0.4-4.6c0.2-1.5,0.5-3.1,0.7-4.6\r\n        c0.3-1.5,0.5-3.1,0.7-4.6c0.2-1.7,0.3-3.3,0.5-4.9c0.1-1.6,0.2-3.3,0.3-4.9c0-0.7,0.2-1.2,0.7-1.6c0.5-0.4,1-0.6,1.5-0.6\r\n        s1,0.2,1.5,0.6c0.4,0.4,0.6,0.9,0.6,1.6c-0.1,1.7-0.2,3.5-0.3,5.1c-0.1,1.7-0.3,3.4-0.5,5.2c-0.2,1.6-0.4,3.2-0.7,4.8\r\n        c-0.3,1.6-0.5,3.1-0.7,4.8c-0.2,1.5-0.3,3.1-0.3,4.6c0,1.5,0.1,3,0.3,4.6c0.1,1.1,0.2,2.1,0.3,3.2c0.1,1.1,0.1,2.1-0.1,3.2\r\n        c2.7,0.1,5.5,0.2,8.2,0.4c2.7,0.2,5.5,0.4,8.2,0.5c0.7,0,1.2,0.3,1.6,0.8c0.3,0.5,0.5,1,0.5,1.6s-0.2,1.1-0.5,1.5\r\n        c-0.3,0.4-0.9,0.6-1.6,0.6c-3.3-0.1-6.6-0.3-9.8-0.6C85,88.6,81.7,88.5,78.4,88.5z\"/>\r\n    <path class=\"logo__letter\" d=\"M253.7,49.2c-0.6-0.3-1-0.8-1-1.4c-0.1-0.6,0-1.1,0.3-1.6s0.7-0.8,1.2-1.1c0.5-0.2,1.1-0.2,1.7,0.2\r\n        c1.9,1,3.5,2.3,4.8,3.9c1.3,1.6,2.3,3.3,3.2,5.3c0.5,1.3,1.1,2.6,1.6,3.8s1.2,2.4,2,3.5c1.3-1.2,2.6-2.5,3.7-3.9\r\n        c1.1-1.4,2.1-2.9,3.1-4.5c0.9-1.6,1.8-3.2,2.7-4.8c0.9-1.6,1.7-3.2,2.6-4.7c0.4-0.6,0.8-0.9,1.4-1s1.1,0,1.6,0.3\r\n        c0.5,0.3,0.8,0.7,1,1.2s0.1,1.1-0.2,1.7c-0.9,1.6-1.9,3.3-2.8,5c-0.9,1.7-1.9,3.3-2.9,5c-1,1.6-2.1,3.2-3.2,4.7\r\n        c-1.1,1.5-2.4,2.9-3.8,4.2c-0.1,3.4-0.2,6.7-0.3,10c-0.1,3.3,0,6.6,0.3,10c0,0.6-0.2,1.1-0.7,1.5s-1,0.6-1.5,0.6\r\n        c-0.6,0-1.1-0.2-1.5-0.6s-0.6-0.9-0.7-1.5c-0.2-3-0.3-6-0.3-9c0-3,0.1-6,0.2-9c-0.3-0.2-0.6-0.5-0.8-0.8c-1.2-1.4-2.2-2.8-3-4.3\r\n        c-0.7-1.5-1.4-3.1-2.1-4.8c-0.7-1.7-1.5-3.2-2.5-4.5S255.4,50,253.7,49.2z\"/>\r\n    <path class=\"logo__letter\" d=\"M486.1,70.3c-0.4-3.7-0.7-7.4-0.8-11s-0.4-7.3-0.8-10.9c-0.1-0.6,0.1-1.2,0.6-1.6c0.5-0.4,1-0.6,1.6-0.6\r\n        c0.7,0,1.2,0.2,1.5,0.6c0.4,0.4,0.6,1,0.7,1.6c0.3,2.2,0.4,4.4,0.6,6.6c0.1,2.2,0.2,4.3,0.4,6.6c0.1,3.2,0.4,6.5,0.8,9.7\r\n        c0,0.4,0.1,0.9,0.1,1.4c0.1,0.5,0.1,0.9,0.1,1.2c0.1,0.5,0.2,1,0.2,1.5c0.1,0.5,0.2,1,0.3,1.4c0.2,0.9,0.5,1.8,0.7,2.5\r\n        c0.3,0.8,0.7,1.4,1.2,1.9l0.5,0.3c0.3,0.1,0.5,0.1,0.8,0.1c0.3,0,0.6-0.1,1.1-0.3c0.5-0.2,0.9-0.4,1.3-0.6c1-0.7,1.8-1.5,2.5-2.5\r\n        c0.7-1,1.3-2,1.8-3.1c0.6-1.2,1.1-2.4,1.5-3.7s0.8-2.5,1.1-3.8c0.7-3.2,1-6.5,1-9.8c-0.1-3.3-0.3-6.6-0.7-9.8\r\n        c-0.1-0.6,0.1-1.1,0.6-1.5c0.5-0.4,1-0.7,1.5-0.7c0.7,0,1.2,0.2,1.5,0.7c0.4,0.4,0.6,1,0.7,1.5c0.5,3.5,0.7,7.1,0.8,10.8\r\n        c0,3.6-0.4,7.2-1.3,10.7c-0.3,1.3-0.7,2.5-1.1,3.9c-0.4,1.3-1,2.6-1.6,3.8c-0.6,1.2-1.3,2.4-2.1,3.5c-0.8,1.1-1.7,2.1-2.7,2.9\r\n        c-1,0.8-2.2,1.5-3.4,1.9c-1.2,0.5-2.5,0.6-3.8,0.3c-1-0.2-1.9-0.6-2.7-1.3c-0.8-0.7-1.4-1.4-1.9-2.3c-0.9-1.8-1.6-3.8-1.9-5.8\r\n        C486.6,74.3,486.4,72.3,486.1,70.3z\"/>\r\n    <path class=\"logo__letter\" d=\"M319.5,89c-1.1-0.7-2.1-1.6-3-2.6c-0.9-1-1.6-2.2-2.3-3.4c-0.7-1.2-1.2-2.5-1.6-3.8c-0.4-1.3-0.8-2.6-1-3.9\r\n        c-0.2-1.2-0.3-2.5-0.4-3.7c0-1.3,0.1-2.5,0.5-3.7c0.3-1,0.7-1.9,1.2-2.8c0.5-0.9,1-1.7,1.6-2.5c1.4-2,3-3.9,4.8-5.6s3.7-3.3,5.7-4.7\r\n        c0.9-0.6,1.9-1.2,3-1.7c1-0.5,2.1-0.8,3.2-1.1c1.1-0.2,2.2-0.3,3.3-0.2c1.1,0.1,2.2,0.4,3.3,0.9c0.5,0.3,0.9,0.7,1,1.3\r\n        c0.1,0.6,0.1,1.2-0.2,1.7c-0.3,0.6-0.8,0.9-1.3,1c-0.6,0.1-1.1,0-1.7-0.2c-0.6-0.3-1.4-0.4-2.3-0.3c-0.4,0-0.8,0.1-1.3,0.2\r\n        c-0.5,0.1-1,0.3-1.6,0.5c-1.1,0.4-2.1,1-3.1,1.7c-1,0.7-2,1.5-2.9,2.2c-1.6,1.4-3.1,2.9-4.5,4.6c-1.4,1.6-2.6,3.4-3.5,5.3\r\n        c-0.1,0.3-0.2,0.6-0.3,1.2c-0.1,0.5-0.2,1-0.2,1.3c-0.1,1.1,0,2.1,0.2,3.2c0.2,1.2,0.5,2.4,0.9,3.6c0.4,1.2,0.9,2.3,1.5,3.4\r\n        c0.6,1,1.3,2,2,3c0.8,1,1.8,1.6,2.9,1.9c1.2,0.3,2.5,0.3,3.8-0.2c0.3-0.1,0.6-0.2,0.8-0.4c0.3-0.1,0.5-0.3,0.8-0.4\r\n        c0.1-0.1,0.2-0.1,0.3-0.2c0.1-0.1,0.2-0.1,0.3-0.2c0.8-0.7,1.6-1.5,2.2-2.3c0.7-0.8,1.3-1.7,1.9-2.5c0.3-0.5,0.6-1,0.9-1.6\r\n        s0.6-1.1,0.7-1.6c0.2-0.5,0.3-0.9,0.4-1.3s0.2-0.8,0.2-1.2c-0.4-0.1-0.7-0.2-1.1-0.2s-0.7,0-1.1,0c-1,0-2,0.1-3,0.2\r\n        c-1,0.1-2,0.2-3.1,0.2c-0.7,0-1.2-0.2-1.6-0.7c-0.3-0.5-0.5-1-0.5-1.5s0.2-1.1,0.5-1.5c0.3-0.4,0.9-0.7,1.6-0.7c1,0,2-0.1,3-0.2\r\n        c1-0.1,2-0.2,3-0.2c1,0,1.9,0,2.9,0.1c0.9,0.1,1.9,0.4,2.8,0.8c0.9,0.4,1.7,1,2.4,2c0.4,0.6,0.6,1.3,0.5,2.1\r\n        c-0.1,0.8-0.1,1.5-0.1,2.3c-0.1,1.6-0.1,3.2-0.1,4.7c0,1.6,0,3.1-0.1,4.7c0,0.7-0.2,1.3-0.7,1.6c-0.5,0.4-1,0.5-1.5,0.5\r\n        s-1-0.2-1.5-0.5c-0.4-0.4-0.7-0.9-0.7-1.6c0-0.7,0.1-1.5,0.1-2.2s0-1.5,0.1-2.2c-1.1,1.7-2.2,3.3-3.6,4.7c-0.9,1-1.9,1.8-3.1,2.5\r\n        s-2.4,1.2-3.6,1.5s-2.5,0.4-3.9,0.2S320.7,89.8,319.5,89z\"/>\r\n    <path class=\"logo__letter\" d=\"M631.4,73.7c-0.2,2.3-0.8,4.3-2,6c-1.1,1.8-2.6,3.2-4.5,4.5c-1.2,0.8-2.6,1.5-4,2.1c-1.4,0.6-2.8,1.1-4.3,1.4\r\n        c-1.3,0.3-2.5,0.4-3.7,0.4c-1.2,0-2.5-0.1-3.7-0.3c-0.3,0.3-0.6,0.6-1.1,0.7c-0.4,0.1-0.8,0.1-1.2,0c-0.8-0.2-1.3-0.8-1.5-1.6\r\n        c-0.4-0.4-0.7-1-0.7-1.6c0-0.8,0.4-1.5,1.1-1.9c0.2-1.5,0.4-3,0.5-4.4c0.1-1.5,0.2-3,0.3-4.5c0.1-1.8,0.2-3.5,0.3-5.3\r\n        c0.1-1.7,0.1-3.5,0.1-5.3c0-1.1,0-2.3-0.1-3.4c-0.1-1.2-0.1-2.4-0.1-3.5c0-1.2,0.1-2.3,0.2-3.5c0.1-1.1,0.4-2.3,0.8-3.3\r\n        c-0.2-0.6-0.1-1.2,0.1-1.8c0.3-0.6,0.7-1,1.5-1.2c0.4-0.5,1-0.7,1.6-0.7c0.6,0,1.1,0.2,1.5,0.6c1.8,0.1,3.5,0.5,5.2,1\r\n        c1.7,0.5,3.3,1.4,4.7,2.6c1.7,1.4,3.2,3.1,4.2,5.1c1.1,2,1.9,4,2.6,6.1c0.3,0.9,0.6,1.9,0.9,2.8c0.3,1,0.6,1.9,0.8,2.9\r\n        c0.2,1,0.4,2,0.5,3C631.5,71.7,631.5,72.7,631.4,73.7z M622.3,80.7c0.5-0.3,0.9-0.6,1.3-0.9c0.4-0.3,0.8-0.6,1.2-1.1\r\n        c0.3-0.4,0.6-0.7,0.8-0.9c0.2-0.2,0.4-0.6,0.7-1c0.6-1.3,0.9-2.7,0.9-4.4c0-0.9-0.1-1.8-0.2-2.6c-0.1-0.8-0.4-1.7-0.7-2.7\r\n        c-0.3-1-0.6-2.1-0.9-3.1c-0.3-1-0.7-2-1.1-3c-0.3-0.8-0.7-1.7-1.2-2.6s-1-1.7-1.5-2.4c-1.3-1.5-2.7-2.7-4.3-3.3\r\n        c-1.6-0.7-3.4-1.1-5.2-1.2c-0.4,1-0.6,2.1-0.7,3.2c-0.1,1.1-0.1,2.3-0.1,3.4c0,1.1,0.1,2.3,0.2,3.4c0.1,1.1,0.1,2.3,0.1,3.3\r\n        c-0.1,3.1-0.3,6.2-0.4,9.3c-0.1,3.1-0.4,6.1-0.8,9.2c0.7,0.1,1.3,0.1,2,0.2c0.7,0,1.3,0,2-0.1c1.4-0.1,2.8-0.5,4.2-1.1\r\n        C619.8,82,621.1,81.4,622.3,80.7z\"/>\r\n    <path class=\"logo__letter\" d=\"M394.6,96.8c-0.3,0.5-0.7,0.9-1.3,1.1c-0.6,0.2-1.2,0.1-1.7-0.3c-1-0.7-1.9-1.5-2.8-2.3c-0.9-0.8-1.9-1.5-3-2.1\r\n        c-0.9-0.6-1.9-1.1-2.8-1.6s-1.9-1.1-2.7-1.7c-1.1-0.8-2-1.7-3-2.7c0,1.8,0,3.7,0.1,5.5c0.1,1.8,0.2,3.7,0.3,5.5\r\n        c0.1,0.6-0.1,1.2-0.6,1.6c-0.5,0.4-1,0.6-1.5,0.6c-0.7,0-1.2-0.2-1.5-0.6c-0.4-0.4-0.6-1-0.7-1.6c-0.2-2.7-0.3-5.3-0.4-7.8\r\n        c0-2.6,0-5.2,0.2-7.8c-0.3-0.4-0.6-0.8-0.9-1.2c-0.3-0.4-0.6-0.9-0.8-1.3c-0.2-0.4-0.3-0.9-0.2-1.3c0.1-0.4,0.2-0.8,0.4-1.1\r\n        c0.2-0.3,0.5-0.5,0.9-0.7c0.3-0.2,0.7-0.3,1.1-0.2c0.1-0.8,0.2-1.7,0.3-2.6s0.2-1.7,0.3-2.6c0.1-0.6,0.2-1.2,0.3-1.7\r\n        c0.1-0.6,0.2-1.2,0.2-1.7c0.1-0.3,0.1-0.6,0.1-0.8c0-0.3,0.1-0.5,0.1-0.8c0-0.1,0-0.3,0.1-0.6c0-0.5,0.1-1,0.1-1.4\r\n        c0-0.5,0-0.9,0.1-1.4c0-0.6,0.1-1.2,0.2-1.9c0.1-0.7,0.2-1.3,0.4-2c0.2-0.6,0.5-1.2,0.8-1.8s0.9-1,1.5-1.3c0.6-0.3,1.2-0.4,1.8-0.4\r\n        c0.6,0,1.2,0,1.8,0.1c0.6,0.1,1.2,0.3,1.8,0.5c0.6,0.2,1.1,0.4,1.7,0.6c1.3,0.5,2.5,1,3.8,1.6c1.3,0.6,2.4,1.4,3.4,2.4\r\n        c0.9,1,1.8,2.1,2.5,3.4c0.7,1.3,1,2.7,0.9,4.1c-0.1,0.8-0.2,1.6-0.5,2.2c-0.3,0.6-0.6,1.3-1.1,2c-1.2,1.7-2.4,3.2-3.8,4.8\r\n        c-1.3,1.5-2.8,2.9-4.3,4.2c-0.7,0.6-1.5,1.2-2.4,1.8c-0.9,0.6-1.8,1.1-2.7,1.5c0.3,0.3,0.7,0.6,1,0.9c0.3,0.3,0.7,0.6,1,0.8\r\n        c0.9,0.6,1.9,1.2,2.9,1.7s1.9,1.1,2.8,1.7c0.9,0.6,1.7,1.3,2.6,2c0.8,0.7,1.7,1.4,2.5,2c0.5,0.3,0.8,0.8,1,1.3\r\n        S394.9,96.2,394.6,96.8z M379.9,80.3c0.9-0.5,1.7-1,2.4-1.5c0.7-0.5,1.4-1.1,2.1-1.7c0.7-0.7,1.4-1.4,2.1-2.1c0.7-0.7,1.4-1.5,2-2.2\r\n        c0.3-0.3,0.5-0.6,0.7-0.9c0.2-0.3,0.4-0.5,0.6-0.7c0.2-0.2,0.4-0.5,0.6-0.8c0.2-0.3,0.4-0.6,0.6-1c0.1-0.1,0.1-0.2,0.2-0.3\r\n        c0.1-0.1,0.1-0.2,0.2-0.3c0-1-0.2-2-0.7-2.9c-0.6-1.1-1.4-1.9-2.3-2.6c-0.9-0.7-2-1.2-3.1-1.7c-0.7-0.3-1.3-0.6-2-0.8\r\n        s-1.3-0.4-2.1-0.6c-0.2-0.1-0.5-0.1-0.8-0.2c-0.2,0.1-0.4,0.2-0.4,0.3c-0.1,0.5-0.2,0.8-0.2,1c0,0.1-0.1,0.3-0.2,0.6\r\n        c0,0.4-0.1,0.7-0.1,0.9c0,0.2,0,0.4,0,0.6c-0.1,2.5-0.4,5.1-0.8,7.5c-0.4,2.5-0.8,5-1,7.5c-0.1,0.4-0.1,0.8-0.1,1.2\r\n        c0,0.4,0,0.8-0.1,1.2c0.3,0,0.5,0,0.5,0c0.4-0.1,0.7-0.2,1-0.3C379.3,80.6,379.6,80.5,379.9,80.3z\"/>\r\n    <path class=\"logo__letter\" d=\"M544.8,53.3c-0.1-0.1-0.1-0.1-0.2-0.2c-0.1-0.1-0.1-0.1-0.2-0.2c-0.4-0.4-0.6-0.9-0.6-1.4\r\n        c0-0.5,0.2-0.9,0.4-1.3s0.6-0.7,1.1-0.9c0.5-0.2,0.9-0.2,1.4,0c0.6-0.1,1.1,0.1,1.7,0.4s0.8,0.9,0.8,1.7c1.9,2.3,3.6,4.5,5.2,6.6\r\n        s3.1,4.5,4.5,6.9c0.6,1.1,1.2,2.2,1.7,3.4c0.5,1.2,1,2.3,1.5,3.5c0-1.5,0.1-3,0.2-4.5c0.1-1.5,0.3-3,0.5-4.5\r\n        c0.4-3.2,0.8-6.3,1.2-9.5c0.4-3.2,0.6-6.4,0.6-9.6c0-0.7,0.2-1.2,0.7-1.6c0.5-0.4,1-0.5,1.5-0.5c0.5,0,1,0.2,1.5,0.5\r\n        c0.5,0.4,0.7,0.9,0.7,1.6c0,3.3-0.3,6.6-0.7,9.8c-0.4,3.2-0.8,6.5-1.2,9.7c-0.2,1.7-0.3,3.3-0.4,4.9s-0.1,3.2-0.1,4.9\r\n        c0,1.6,0.1,3.2,0.1,4.7c0.1,1.6,0,3.1,0,4.7c0,0.6-0.2,1-0.5,1.4c-0.3,0.4-0.7,0.6-1.1,0.7c-0.4,0.1-0.9,0.1-1.3-0.1\r\n        c-0.4-0.1-0.8-0.4-1.1-0.9c-0.8-1.3-1.5-2.6-2.1-4.1c-0.6-1.4-1.1-2.8-1.6-4.2c-0.5-1.4-1-2.7-1.6-4c-0.5-1.3-1.2-2.5-1.9-3.8\r\n        c-0.9-1.7-1.9-3.2-2.9-4.8c-1-1.5-2.1-3-3.3-4.4c0,1.5,0,3,0,4.5s0,2.9,0.1,4.5c0.1,2.7,0.3,5.3,0.5,7.9c0.3,2.6,0.6,5.2,0.9,7.8\r\n        c0.1,0.6-0.1,1.2-0.6,1.6c-0.5,0.4-1,0.6-1.5,0.6c-0.7,0-1.2-0.2-1.5-0.6c-0.4-0.4-0.6-0.9-0.7-1.6c-0.4-2.6-0.7-5.2-1-7.8\r\n        c-0.3-2.6-0.5-5.2-0.5-7.9c-0.1-2.3-0.1-4.6-0.1-6.9C544.8,57.9,544.8,55.6,544.8,53.3z\"/>\r\n    <path class=\"logo__letter\" d=\"M432.3,92.7c-0.8-0.6-1.6-1.3-2.3-2.1c-0.7-0.8-1.3-1.6-1.8-2.5c-0.5-0.8-1-1.6-1.5-2.5s-0.9-1.8-1.3-2.7\r\n        c-0.4-0.9-0.6-1.9-0.8-2.8c-0.2-1-0.3-1.9-0.2-2.9c0.1-1.9,0.3-3.7,0.6-5.6c0.3-1.8,0.6-3.6,1.1-5.4c0.1-0.7,0.3-1.4,0.5-2.2\r\n        c0.2-0.8,0.5-1.6,0.8-2.4c0.3-0.8,0.8-1.4,1.2-2.1c0.5-0.6,1.1-1.1,1.8-1.4c1.1-0.5,2.2-0.7,3.3-0.5c1.1,0.1,2.2,0.4,3.2,0.9\r\n        c1,0.5,2,1.1,3,1.7c0.9,0.7,1.8,1.4,2.7,2c0.8,0.6,1.5,1.3,2.3,2c0.7,0.7,1.5,1.3,2.3,2c0.9,0.8,1.9,1.7,2.9,2.5\r\n        c1,0.8,1.8,1.8,2.4,2.9c0.7,1.3,1.1,2.5,1.3,3.8s0,2.5-0.3,3.8c-0.3,1.2-0.7,2.4-1.4,3.6c-0.6,1.2-1.3,2.3-2,3.4c-0.7,1-1.4,2-2.3,3\r\n        c-0.9,1.1-1.8,2-2.8,2.9c-1,0.9-2.2,1.6-3.3,2.1c-1.2,0.5-2.4,0.7-3.7,0.6c-0.8-0.1-1.3-0.4-1.7-0.9c-0.7-0.1-1.4-0.3-2-0.4\r\n        C433.5,93.4,432.9,93.1,432.3,92.7z M428.8,76.8c-0.1,0.9,0,1.8,0.1,2.5c0.2,0.8,0.4,1.6,0.8,2.6c0.5,1.1,1.1,2.2,1.7,3.2\r\n        c0.6,1.1,1.3,2.1,2.2,3c0.7,0.8,1.6,1.3,2.5,1.5c0.6,0.1,1.2,0.2,1.8,0.3c0.6,0.1,1.2,0.2,1.7,0.4c0.2-0.1,0.4-0.2,0.7-0.2\r\n        c0.2-0.1,0.4-0.2,0.7-0.4c0.6-0.4,1.2-0.8,1.7-1.3c0.5-0.5,1-1,1.5-1.5c0.9-1,1.8-2.2,2.7-3.4c0.9-1.2,1.5-2.5,2-3.8\r\n        c0.5-1.3,0.7-2.5,0.6-3.7c-0.1-1.1-0.6-2.3-1.6-3.3c-0.9-1-1.8-1.9-2.9-2.7c-1-0.8-2-1.7-3-2.5c-0.8-0.7-1.7-1.4-2.5-2.1\r\n        c-0.8-0.7-1.7-1.3-2.6-1.9c-0.9-0.6-1.7-1-2.6-1.3c-0.1,0-0.2-0.1-0.3-0.1c-0.1,0-0.2,0-0.3-0.1l-0.8-0.1c-0.3,0.1-0.5,0.1-0.5,0.2\r\n        c-0.3,0.3-0.4,0.4-0.4,0.4c-0.3,0.4-0.4,0.8-0.5,0.9c-0.1,0.2-0.2,0.5-0.3,0.9c-0.4,1.1-0.7,2.2-0.9,3.2s-0.5,2.2-0.7,3.2\r\n        c-0.2,1.1-0.3,2-0.5,2.9C428.9,74.7,428.8,75.7,428.8,76.8z\"/>\r\n    <path class=\"logo__highlight logo__highlight--01\" d=\"M238.3,22.8c-0.6-0.1-1.2-0.3-1.9-0.4l0.7-0.1c-0.5-0.4-1.4-0.7-2.4-1.1c-0.4-0.1-0.7-0.3-1.1-0.4\r\n        c-0.3-0.1-0.6-0.3-0.9-0.4c-0.4,0.2-1-0.1-0.8,0.5c-2.7-3-6.7-1.3-9.1-3.8c0.4,0.1,0.9,0,0.7-0.1l-2.6-0.6c0,0.6,0.2,0.4,0.6,1.1\r\n        c-0.4,0.2-1.2,0.2-1.8,0c1.3,0,0.3-0.9-0.1-1.3c0,0.2-0.2,0.3-0.2,0.5c-1-1.4-0.6,1-2.2-0.3l0.2-0.2c-0.7-0.1-1.5,0.1-2.2-0.3\r\n        c-0.1-0.7,0.8,0,1-0.5c-1-0.3-2.4,0.5-3.1-0.5c0.5,0,1.1,0.2,1.6,0.2c-0.7-1.1-0.9-0.9-1.6-1.3l0.1,0l-1.6-0.9l0.4,0.4\r\n        c-1.8,1.2-2.7-0.6-4.8-0.2c2-0.4,0.5-0.5,0.9-1.1c-0.4-0.4-0.9-0.8-0.7-0.9c-1,0.3-1.2-0.9-2.6-0.5c0-0.2-0.9-0.3-0.5-0.8\r\n        c-1.1-0.2,0.1,0.5-0.1,0.7c-1.9,0.2-3.5-2.3-6.2-2.1c-2-0.3-2.7,0.3-4.4,0.1l-0.5-0.2c-0.2-0.4,0.9-0.5,0.9-0.5\r\n        c-0.9-0.7-1.7-0.9-2.7-1c0.3-0.1,0.1-0.4-0.1-0.7c-0.8-0.2-0.8,0.6-1.7,0c0.3-0.2,0.6-0.5,1.1-0.6c-1-0.1-2,0-3-0.1\r\n        c-0.1-0.5,0.8-0.4,1.2-0.5c-1.1-0.2-2.9-0.6-3.4-0.1l0.4,0.4c-0.1-0.2,0.2-0.5,0.5-0.5c1.1-0.2,1.2,0.7,1.2,0.9l-0.7-0.1\r\n        c0.2,1.6,2.8,0.7,4.1,1.3L190.2,7L180,3.4l-0.1,0c-0.2-1.1-0.1-2.3-2.3-2.3l-1.2,1.2L175.6,2l1.2-0.5c-0.9-0.2-1.2,0.4-1.6,0.8\r\n        c-0.2-0.2-0.5-0.4-0.8-0.4l-1.1,1.6c-0.3-0.4,0.4-1.1-0.7-1c-0.5,0.7,1,0.7,0,1.4c-0.9-0.2-0.8-0.7-1.5,0c-0.2-0.2-0.1-0.5,0.2-0.7\r\n        c-0.6,0.6-1.9,0.8-2.1,1.6c-1-0.3-2.4,1-2.7,0c-0.1,0.3-1,1.3-1.7,1.6c0.8-1.7-2.6,0.8-2.7-0.6c-0.5,1.4-3.1,1.7-4.6,2.9\r\n        c0.1-0.1,0.2-0.4,0.3-0.4c-0.9,0.2-1.3,0-2,0c0.2,1-1.1,1.7-1.7,2.5c-1.4-0.5,0.3-1.3-0.4-2c0.3,0.7-1.7,1.4-1.1,1.9\r\n        c-1.1-0.2-0.8,0-1.5-0.6c0.3,1.2-0.7,0.5-1.2,1.4c-1.4-0.1-0.7-1-1.9-0.1c-0.8-0.1,0.3-1,0.3-1c-1.4,0.5-0.4,1.1-0.5,1.7\r\n        c-1.6,0.8-1-0.4-1.7-0.6c-1,0.6-1.5,1.7-2.3,1.9c-0.1-0.1-0.3-0.1-0.2-0.4c-0.9,1.1-3.2,1.2-4.2,2.5c-0.1,0-0.2-0.1-0.2-0.2\r\n        c0.4,0.4,0.5,0.8,0.6,1.1c-0.6,0.2-1,1-1.4,0.5c0.4-0.1,0.3-0.4,0.5-0.6l-0.6,0.5c-0.9-0.6,0.8-0.6,0.6-1.2c-1.2,0.7-2.4,1.9-3.5,2\r\n        c-0.5-0.7,2.2-1.1,0.6-1.3l1.6-0.2c-1.6-0.8,0.9-0.2-0.6-1.2c-2.1,0.5-2.1,1.2-4.1,1.7c-0.3,0.6,0.4,0.6,0.1,1.2\r\n        c-2.5,1.8-2.9-1.2-4.6,0.6c-0.3,0.7-0.2,1.8-1.9,1.8l0.2-1.1c-1,0.3-1.1,0.7-1.3,1.1c0,0.1-0.1,0.2-0.2,0.3\r\n        c-0.1,0.1-0.2,0.2-0.4,0.3c-0.3,0.2-0.8,0.3-1.7,0.5c0.3-0.5,2.3-1.1,1.8-1.1c-1.3,0-1.6,0.3-1.8,0.6c-0.2,0.3-0.2,0.7-1,0.9\r\n        c-0.3-0.2-0.7-0.3-1.1-0.5c-0.4,0.2-0.8,0.3-1.2,0.5c0.3,1.7,0.7,3.5,1,5.2l0.1,0.3l0.1,0.2l0.1,0.4l0.2,0.8c0.1,0.5,0.2,1,0.3,1.6\r\n        c-0.3-0.1-0.6-0.5-0.8,0.1c0.8,3,0.6,6.5,0.5,9.4l0.9,1c0,0.3-0.3,0.5-0.4,0.3c-0.1,1.2,0.5,0,0.8,0.5c0.1,0.6-0.3,0.9-0.6,0.5\r\n        c0.8,1.9,2,5.5,1.4,7.7l-0.3-0.4c-0.1,1.7,1.7,1.7,1.2,3.3l-0.2-0.3c0.1,3.6,1.2,7.5,0.4,10.3c1.1,0.4-0.1,3.6,1.4,3.6\r\n        c-0.5,2.1-0.8,1.6-1,4.5c0,0.8,1,1,1.3,2l-0.8,0.1l0.9,1.2l-0.8,0.8l0.3,0.9c0-0.4,0.3-0.8,0.5-0.8c0.5,1.3-0.1,3.4-0.5,3.5l1,3.2\r\n        c-0.2,0-0.4-0.3-0.6-0.7c0.6,1.2-0.9,0.2,0,1.6c0.1-0.2,0.5,0.1,0.6,0.1c-0.4,0.9-0.2,2.7,0.2,4l-0.6-0.2c0.1,2.4,0.8,5.1,1.1,7.8\r\n        c0.1-1,1.1-0.9,1.2-0.1l-0.8,0.4c0.6,0.5,0.2-0.9,0.9,0.1c0,1-0.8,0.8-1.2,0.2l0.4,1.2c-0.2,0.1-0.4-0.2-0.7-0.2\r\n        c0.3,0.2,0.1,0.8,0,1.4c0,1,0,2.3,0.5,2.8l-0.2,0.2c0,0.4,0.1,0.8,0.1,1c1,0.6,1.9,1,2.8,1.5c0.2,0.1,0.4,0.2,0.6,0.3l0.2,0.1\r\n        l0.2,0.1c0.2,0.1,0.4,0.2,0.6,0.3c0.8,0.4,1.5,0.7,2.5,1.2c0.4-0.6,1.1,0,1.9-0.2c1.3,1,2.7,2.4,4.4,3.3c1.4,0.4,0.6-0.3,1.4-0.4\r\n        c-0.2,0.6,1.5,1.5,0.4,1.4c2.1,1.1,2.7,1.4,5.6,2.4c-0.2-0.4-0.4-0.7-0.2-0.8c0.5,0.2,1,0.8,0.7,1.1l-0.2,0c3.4,0.8,5.9,5.4,8.9,5.5\r\n        l-0.2,0l2.8,0.7c1.1,0.7-0.9,0-0.3,0.8c3.1,0.5,4.1,2.4,6.6,3c0.8,2.6,6,3.2,7.7,5.5l0.1-0.5c0.8-0.1,0.6,0.6,1,0.9\r\n        c0.1-0.3-0.4-0.7,0-0.7l0.7,0.3l1.1,0.6c0.7,0.4,1.5,0.8,2.3,1.2c0.9-0.5,1.8-1,2.7-1.5l0.7-0.4l0.4-0.2l0.8-0.4\r\n        c1.1-0.5,2.2-1,3.3-1.5c2.3-1,4.5-1.9,6.7-2.9c1.9-0.9-0.1-2.6,2.8-3l-0.3,1.1c3.3-2.9,7.7-4.2,11-7c-0.1,0.3,0,0.5-0.4,0.7\r\n        c1.1,0.1,2.9-1.6,2.7-2c0.6-0.3,0.3,0.3,0.8,0.3c0.9-0.1,1.6-1.7,2.3-1.5c0.1,0,0,0.1-0.1,0.3c0.6-0.5,2.2-1.1,1.4-1.4\r\n        c1.5-0.5,2.5-1.7,3.8-2c0.3-1.1,2.5-1,2.2-2.1c0.4,1,2.9-0.5,3.5-1.5c-0.1,0.5,0.9-0.1,0.8,0.5c1-0.6,1.8-1.3,1.3-1.7\r\n        c0.4,0,0.7,0,1-0.1c0.1,0,0.3-0.1,0.4-0.2c0.1-0.1,0.4-0.2,0.6-0.4c0.9-0.6,1.6-1.2,2.3-1.7c0-1.4,0.1-2.3,0.9-3.1l0-0.3l0-0.2\r\n        l0-0.3l0-0.6c0-0.4,0-0.8-0.1-1.2c0-0.8,0-1.6-0.1-2.4c0-1.6,0-3.1,0-4.7c1.1,0.2-0.3,3.3,0.9,3.4c-0.1-2.9-0.9-4.7-0.3-7.5\r\n        c0.2-0.7,0.4,0.5,0.6,0.7c-0.1-2.9,0.7-5.5,0.4-8.1c0.1,0,0.2,0.3,0.2,0.6c0-0.5,0.3-1.1-0.2-1.1l0.1,0.5c-0.8,0.7-1.3-2.2-1.7-2.3\r\n        c1.4,1,0.7-2.5,2.3-0.9c-0.1-0.3-0.2-0.8-0.6-0.7c0.2-0.5,0.4-0.6,0.7-0.1c-0.1-1.8-0.7-1.3-0.5-2.9c0.2,0,0.3,0.4,0.6,0.6\r\n        c-0.4-0.9-0.8-1.8-0.4-3.1c0.1,0.1,0.3,0,0.3,0.4c0.2-2.4-0.8-4.2,0-6.7c1,0.9,0.5-0.8,1.4-0.9l-0.1-1.4l-0.5,0.5\r\n        c0.2-1.2-0.4-2.4,0-3.4l0.3,1l0.1-2.3l-0.5,1.3c-0.3-1.3-1.2,0-0.7-1.6c0.1,0.3,0.2-1.2,0.8-1.8l0,0c-0.2-0.6-0.5-1.3-0.1-2.2\r\n        c0.3-0.2,1,0.3,1.2,0.2c-0.7-0.7,0.1-2.9-0.6-3.7c0.2,0.3,0.6,0.3,0.8,0.3l-0.6-0.6c0.3-0.5,0.4-0.6,0.7-0.5\r\n        c0.3-1.7-1.2,0.4-0.5-1.6c0,0.2,0.1,0.1,0.2,0.4c0.5-2,0.1-4,0.6-5.8c1-0.4,0,1.7,0.9,1.1c0.1-2.7-0.5-5.7,0-8.3l-0.2,0.5\r\n        c-1.3-0.5,0.9-1.9,0.4-3.2c0.1,0.3,0.7,0.5,0.5,0.4c0.1-0.4,0.1-0.7,0.2-1.1c0-0.2,0-0.4,0-0.6c0-0.3,0-0.5,0-0.8\r\n        C238.4,25.2,238.4,24,238.3,22.8z M121.9,30c-0.1-0.3-0.1-0.5-0.1-0.7C121.8,29.5,121.8,29.7,121.9,30C121.9,30,121.9,30,121.9,30z\r\n        M122.2,32.9c0-0.4-0.1-0.8-0.1-1.3c0.2-0.1,0.5,0,0.5,0.2C122.5,31.8,122.4,32.5,122.2,32.9z M226.3,19.3c0,0.2-0.1,0.4-0.2,0.6\r\n        l-0.9-0.3C225.4,19.3,225.7,19.2,226.3,19.3z M198.9,9.5l0.2,0.7l-1.1-0.4C198.1,9.7,198.3,9.5,198.9,9.5z M191.7,6.9\r\n        c0.1,0.2,0.2,0.5,0,0.7l-1.3-0.5L191.7,6.9z\"/>\r\n    <path class=\"logo__highlight logo__highlight--02\" d=\"M238.3,22.8c-0.6-0.1-1.2-0.3-1.9-0.4l0.7-0.1c-0.5-0.4-1.4-0.7-2.4-1.1c-0.4-0.1-0.7-0.3-1.1-0.4\r\n        c-0.3-0.1-0.6-0.3-0.9-0.4c-0.4,0.2-1-0.1-0.8,0.5c-2.7-3-6.7-1.3-9.1-3.8c0.4,0.1,0.9,0,0.7-0.1l-2.6-0.6c0,0.6,0.2,0.4,0.6,1.1\r\n        c-0.4,0.2-1.2,0.2-1.8,0c1.3,0,0.3-0.9-0.1-1.3c0,0.2-0.2,0.3-0.2,0.5c-1-1.4-0.6,1-2.2-0.3l0.2-0.2c-0.7-0.1-1.5,0.1-2.2-0.3\r\n        c-0.1-0.7,0.8,0,1-0.5c-1-0.3-2.4,0.5-3.1-0.5c0.5,0,1.1,0.2,1.6,0.2c-0.7-1.1-0.9-0.9-1.6-1.3l0.1,0l-1.6-0.9l0.4,0.4\r\n        c-1.8,1.2-2.7-0.6-4.8-0.2c2-0.4,0.5-0.5,0.9-1.1c-0.4-0.4-0.9-0.8-0.7-0.9c-1,0.3-1.2-0.9-2.6-0.5c0-0.2-0.9-0.3-0.5-0.8\r\n        c-1.1-0.2,0.1,0.5-0.1,0.7c-1.9,0.2-3.5-2.3-6.2-2.1c-2-0.3-2.7,0.3-4.4,0.1l-0.5-0.2c-0.2-0.4,0.9-0.5,0.9-0.5\r\n        c-0.9-0.7-1.7-0.9-2.7-1c0.3-0.1,0.1-0.4-0.1-0.7c-0.8-0.2-0.8,0.6-1.7,0c0.3-0.2,0.6-0.5,1.1-0.6c-1-0.1-2,0-3-0.1\r\n        c-0.1-0.5,0.8-0.4,1.2-0.5c-1.1-0.2-2.9-0.6-3.4-0.1l0.4,0.4c-0.1-0.2,0.2-0.5,0.5-0.5c1.1-0.2,1.2,0.7,1.2,0.9l-0.7-0.1\r\n        c0.2,1.6,2.8,0.7,4.1,1.3L190.2,7L180,3.4V129c0.9-0.5,1.8-1,2.7-1.5l0.7-0.4l0.4-0.2l0.8-0.4c1.1-0.5,2.2-1,3.3-1.5\r\n        c2.3-1,4.5-1.9,6.7-2.9c1.9-0.9-0.1-2.6,2.8-3l-0.3,1.1c3.3-2.9,7.7-4.2,11-7c-0.1,0.3,0,0.5-0.4,0.7c1.1,0.1,2.9-1.6,2.7-2\r\n        c0.6-0.3,0.3,0.3,0.8,0.3c0.9-0.1,1.6-1.7,2.3-1.5c0.1,0,0,0.1-0.1,0.3c0.6-0.5,2.2-1.1,1.4-1.4c1.5-0.5,2.5-1.7,3.8-2\r\n        c0.3-1.1,2.5-1,2.2-2.1c0.4,1,2.9-0.5,3.5-1.5c-0.1,0.5,0.9-0.1,0.8,0.5c1-0.6,1.8-1.3,1.3-1.7c0.4,0,0.7,0,1-0.1\r\n        c0.1,0,0.3-0.1,0.4-0.2c0.1-0.1,0.4-0.2,0.6-0.4c0.9-0.6,1.6-1.2,2.3-1.7c0-1.4,0.1-2.3,0.9-3.1l0-0.3l0-0.2l0-0.3l0-0.6\r\n        c0-0.4,0-0.8-0.1-1.2c0-0.8,0-1.6-0.1-2.4c0-1.6,0-3.1,0-4.7c1.1,0.2-0.3,3.3,0.9,3.4c-0.1-2.9-0.9-4.7-0.3-7.5\r\n        c0.2-0.7,0.4,0.5,0.6,0.7c-0.1-2.9,0.7-5.5,0.4-8.1c0.1,0,0.2,0.3,0.2,0.6c0-0.5,0.3-1.1-0.2-1.1l0.1,0.5c-0.8,0.7-1.3-2.2-1.7-2.3\r\n        c1.4,1,0.7-2.5,2.3-0.9c-0.1-0.3-0.2-0.8-0.6-0.7c0.2-0.5,0.4-0.6,0.7-0.1c-0.1-1.8-0.7-1.3-0.5-2.9c0.2,0,0.3,0.4,0.6,0.6\r\n        c-0.4-0.9-0.8-1.8-0.4-3.1c0.1,0.1,0.3,0,0.3,0.4c0.2-2.4-0.8-4.2,0-6.7c1,0.9,0.5-0.8,1.4-0.9l-0.1-1.4l-0.5,0.5\r\n        c0.2-1.2-0.4-2.4,0-3.4l0.3,1l0.1-2.3l-0.5,1.3c-0.3-1.3-1.2,0-0.7-1.6c0.1,0.3,0.2-1.2,0.8-1.8l0,0c-0.2-0.6-0.5-1.3-0.1-2.2\r\n        c0.3-0.2,1,0.3,1.2,0.2c-0.7-0.7,0.1-2.9-0.6-3.7c0.2,0.3,0.6,0.3,0.8,0.3l-0.6-0.6c0.3-0.5,0.4-0.6,0.7-0.5\r\n        c0.3-1.7-1.2,0.4-0.5-1.6c0,0.2,0.1,0.1,0.2,0.4c0.5-2,0.1-4,0.6-5.8c1-0.4,0,1.7,0.9,1.1c0.1-2.7-0.5-5.7,0-8.3l-0.2,0.5\r\n        c-1.3-0.5,0.9-1.9,0.4-3.2c0.1,0.3,0.7,0.5,0.5,0.4c0.1-0.4,0.1-0.7,0.2-1.1c0-0.2,0-0.4,0-0.6c0-0.3,0-0.5,0-0.8\r\n        C238.4,25.2,238.4,24,238.3,22.8z M191.7,7.6l-1.3-0.5l1.3-0.2C191.8,7.1,191.9,7.4,191.7,7.6z M197.9,9.8c0.1-0.1,0.4-0.2,0.9-0.3\r\n        l0.2,0.7L197.9,9.8z M226.2,19.8l-0.9-0.3c0.1-0.2,0.5-0.3,1.1-0.2C226.3,19.4,226.3,19.7,226.2,19.8z\"/>\r\n    <path class=\"logo__letter\" d=\"M180,16.9l-35.6,79.8l0,0h13.3l0,0l7.2-17.9H195l7.2,17.9l0,0h13.3l0,0L180,16.9L180,16.9L180,16.9L180,16.9\r\n        L180,16.9z M190.4,67.9h-20.8l10.4-25L190.4,67.9z\"/>\r\n    <g>\r\n        <path class=\"logo__highlight logo__highlight--01\" d=\"M500.3,129.5c-0.2,0-0.4-0.1-0.5-0.2c-0.2-0.2-0.2-0.3-0.2-0.5c0.2-2.1,0.3-4.2,0.3-6.3s0-4.2,0-6.3\r\n            c-0.1-0.2-0.2-0.3-0.2-0.5c0-0.2,0.1-0.4,0.2-0.5c0.1-0.2,0.2-0.4,0.5-0.4s0.4,0,0.7,0.1c0.6-0.1,1.2-0.2,1.8-0.2\r\n            c0.6,0,1.2,0,1.9,0s1.2,0,1.9,0.1c0.6,0,1.2,0,1.9,0c0.2,0,0.4,0.1,0.5,0.2s0.2,0.3,0.2,0.5s-0.1,0.4-0.2,0.6s-0.3,0.3-0.5,0.3\r\n            c-0.6,0-1.2,0-1.8,0c-0.6,0-1.2,0-1.8-0.1s-1.2,0-1.8,0c-0.6,0-1.2,0.1-1.7,0.2c0,0.9,0,1.8,0,2.7c0,0.9,0,1.8,0,2.7\r\n            c0.4,0,0.8,0,1.2,0c0.4,0,0.8,0,1.2,0s0.8,0,1.2,0c0.4,0,0.8,0.1,1.2,0.2c0.2,0.1,0.4,0.2,0.5,0.4s0.1,0.4,0,0.6\r\n            c-0.1,0.2-0.2,0.3-0.3,0.5c-0.2,0.1-0.4,0.2-0.6,0.1c-0.7-0.2-1.5-0.2-2.2-0.2s-1.5,0.1-2.2,0.1c0,0.9-0.1,1.8-0.1,2.8\r\n            c0,0.9-0.1,1.8-0.2,2.8c0,0.2-0.1,0.4-0.2,0.5S500.5,129.5,500.3,129.5z\"/>\r\n        <path class=\"logo__highlight logo__highlight--01\" d=\"M514.6,127.9c-0.3-0.2-0.6-0.5-0.8-0.8c-0.2-0.3-0.5-0.6-0.6-0.9c-0.2-0.3-0.4-0.6-0.5-0.9\r\n            c-0.2-0.3-0.3-0.6-0.4-1c-0.1-0.3-0.2-0.7-0.3-1c-0.1-0.3-0.1-0.7-0.1-1c0-0.7,0.1-1.3,0.2-2c0.1-0.6,0.2-1.3,0.4-1.9\r\n            c0.1-0.2,0.1-0.5,0.2-0.8s0.2-0.6,0.3-0.8s0.3-0.5,0.4-0.7s0.4-0.4,0.6-0.5c0.4-0.2,0.8-0.2,1.2-0.2s0.8,0.2,1.1,0.3\r\n            s0.7,0.4,1.1,0.6s0.6,0.5,0.9,0.7c0.3,0.2,0.5,0.5,0.8,0.7c0.3,0.2,0.5,0.5,0.8,0.7c0.3,0.3,0.7,0.6,1,0.9s0.6,0.6,0.8,1\r\n            c0.3,0.4,0.4,0.9,0.4,1.3s0,0.9-0.1,1.3s-0.3,0.9-0.5,1.3c-0.2,0.4-0.5,0.8-0.7,1.2c-0.2,0.3-0.5,0.7-0.8,1.1s-0.6,0.7-1,1\r\n            c-0.4,0.3-0.8,0.6-1.2,0.7s-0.9,0.2-1.3,0.2c-0.3,0-0.5-0.1-0.6-0.3c-0.2,0-0.5-0.1-0.7-0.2S514.8,128,514.6,127.9z M513.3,122.3\r\n            c0,0.3,0,0.6,0,0.9s0.2,0.6,0.3,0.9c0.2,0.4,0.4,0.8,0.6,1.1s0.5,0.7,0.8,1c0.3,0.3,0.6,0.5,0.9,0.5c0.2,0,0.4,0.1,0.6,0.1\r\n            c0.2,0,0.4,0.1,0.6,0.1c0.1,0,0.2-0.1,0.2-0.1s0.2-0.1,0.2-0.1c0.2-0.1,0.4-0.3,0.6-0.5s0.4-0.3,0.5-0.5c0.3-0.4,0.6-0.8,0.9-1.2\r\n            c0.3-0.4,0.5-0.9,0.7-1.3c0.2-0.5,0.3-0.9,0.2-1.3c0-0.4-0.2-0.8-0.6-1.2c-0.3-0.4-0.6-0.7-1-1s-0.7-0.6-1.1-0.9\r\n            c-0.3-0.3-0.6-0.5-0.9-0.7c-0.3-0.2-0.6-0.5-0.9-0.7c-0.3-0.2-0.6-0.4-0.9-0.5c0,0-0.1,0-0.1,0s-0.1,0-0.1,0l-0.3,0\r\n            c-0.1,0-0.2,0.1-0.2,0.1c-0.1,0.1-0.1,0.2-0.2,0.2c-0.1,0.2-0.1,0.3-0.2,0.3s-0.1,0.2-0.1,0.3c-0.1,0.4-0.2,0.8-0.3,1.1\r\n            s-0.2,0.8-0.2,1.1s-0.1,0.7-0.2,1S513.4,121.9,513.3,122.3z\"/>\r\n        <path class=\"logo__highlight logo__highlight--01\" d=\"M534.8,128.4c-0.1,0.2-0.3,0.3-0.5,0.4c-0.2,0.1-0.4,0-0.6-0.1c-0.3-0.3-0.7-0.5-1-0.8c-0.3-0.3-0.7-0.5-1-0.8\r\n            c-0.3-0.2-0.7-0.4-1-0.6s-0.7-0.4-1-0.6c-0.4-0.3-0.7-0.6-1-0.9c0,0.7,0,1.3,0,1.9c0,0.6,0.1,1.3,0.1,1.9c0,0.2,0,0.4-0.2,0.6\r\n            s-0.3,0.2-0.5,0.2c-0.2,0-0.4-0.1-0.5-0.2c-0.1-0.1-0.2-0.3-0.2-0.6c-0.1-0.9-0.1-1.9-0.1-2.8s0-1.8,0.1-2.7\r\n            c-0.1-0.1-0.2-0.3-0.3-0.4c-0.1-0.1-0.2-0.3-0.3-0.5c-0.1-0.2-0.1-0.3-0.1-0.4c0-0.1,0.1-0.3,0.2-0.4c0.1-0.1,0.2-0.2,0.3-0.3\r\n            s0.3-0.1,0.4-0.1c0-0.3,0.1-0.6,0.1-0.9c0-0.3,0.1-0.6,0.1-0.9c0-0.2,0.1-0.4,0.1-0.6s0.1-0.4,0.1-0.6c0-0.1,0-0.2,0-0.3\r\n            s0-0.2,0-0.3c0-0.1,0-0.1,0-0.2c0-0.2,0-0.3,0-0.5s0-0.3,0-0.5c0-0.2,0-0.4,0.1-0.7s0.1-0.5,0.2-0.7c0.1-0.2,0.2-0.4,0.3-0.6\r\n            c0.1-0.2,0.3-0.3,0.5-0.4c0.2-0.1,0.4-0.1,0.6-0.2s0.4,0,0.6,0c0.2,0,0.4,0.1,0.6,0.2c0.2,0.1,0.4,0.1,0.6,0.2\r\n            c0.5,0.2,0.9,0.4,1.3,0.6s0.8,0.5,1.2,0.8c0.3,0.3,0.6,0.7,0.9,1.2s0.4,0.9,0.3,1.4c0,0.3-0.1,0.6-0.2,0.8s-0.2,0.5-0.4,0.7\r\n            c-0.4,0.6-0.9,1.1-1.3,1.7s-1,1-1.5,1.5c-0.3,0.2-0.5,0.4-0.8,0.6c-0.3,0.2-0.6,0.4-1,0.5c0.1,0.1,0.2,0.2,0.3,0.3\r\n            c0.1,0.1,0.2,0.2,0.4,0.3c0.3,0.2,0.7,0.4,1,0.6s0.7,0.4,1,0.6c0.3,0.2,0.6,0.5,0.9,0.7c0.3,0.2,0.6,0.5,0.9,0.7\r\n            c0.2,0.1,0.3,0.3,0.4,0.5S534.9,128.2,534.8,128.4z M529.6,122.6c0.3-0.2,0.6-0.3,0.8-0.5c0.3-0.2,0.5-0.4,0.7-0.6\r\n            c0.3-0.2,0.5-0.5,0.8-0.7c0.2-0.3,0.5-0.5,0.7-0.8c0.1-0.1,0.2-0.2,0.3-0.3s0.1-0.2,0.2-0.3s0.1-0.2,0.2-0.3s0.1-0.2,0.2-0.3\r\n            c0,0,0.1-0.1,0.1-0.1s0.1-0.1,0.1-0.1c0-0.4-0.1-0.7-0.2-1c-0.2-0.4-0.5-0.7-0.8-0.9c-0.3-0.2-0.7-0.4-1.1-0.6\r\n            c-0.2-0.1-0.5-0.2-0.7-0.3s-0.5-0.1-0.7-0.2c-0.1,0-0.2-0.1-0.3-0.1c-0.1,0-0.1,0.1-0.2,0.1c-0.1,0.2-0.1,0.3-0.1,0.4\r\n            c0,0,0,0.1-0.1,0.2c0,0.1,0,0.2,0,0.3c0,0.1,0,0.1,0,0.2c0,0.9-0.1,1.8-0.3,2.7c-0.1,0.9-0.3,1.8-0.4,2.7c0,0.1,0,0.3,0,0.4\r\n            s0,0.3,0,0.4c0.1,0,0.2,0,0.2,0c0.1,0,0.3-0.1,0.3-0.1C529.4,122.6,529.5,122.6,529.6,122.6z\"/>\r\n        <path class=\"logo__highlight logo__highlight--01\" d=\"M551.5,128.6c0,0.2-0.1,0.4-0.2,0.6c-0.2,0.1-0.3,0.2-0.5,0.2s-0.4-0.1-0.5-0.2s-0.2-0.3-0.2-0.6\r\n            c0-1,0.1-2,0.3-2.9s0.5-1.9,0.9-2.8c-0.1-0.2-0.1-0.4-0.1-0.6c0.1-0.3,0.2-0.4,0.5-0.5c0.3-0.6,0.5-1.2,0.8-1.9s0.5-1.2,0.8-1.9\r\n            c0.3-0.6,0.5-1.3,0.7-1.9s0.4-1.3,0.5-2c0-0.2,0.1-0.4,0.2-0.5c0.1-0.1,0.3-0.2,0.5-0.2c0.2,0,0.4,0.1,0.6,0.2s0.2,0.3,0.2,0.6\r\n            c0,0.8,0,1.4,0,2.1s0.2,1.3,0.3,1.9s0.3,1.2,0.4,1.9c0.2,0.6,0.3,1.2,0.5,1.8c0.1,0.6,0.3,1.2,0.4,1.8c0.1,0.6,0.3,1.2,0.6,1.7\r\n            c0.1,0.3,0.3,0.5,0.4,0.8s0.3,0.5,0.5,0.8c0.2,0.2,0.3,0.5,0.4,0.7c0.1,0.3,0.2,0.5,0.3,0.8c0,0.2,0,0.4-0.1,0.6\r\n            c-0.1,0.2-0.2,0.3-0.5,0.4c-0.2,0.1-0.4,0-0.6-0.1c-0.2-0.1-0.3-0.3-0.4-0.5c-0.1-0.3-0.2-0.6-0.3-0.8c-0.1-0.2-0.3-0.5-0.5-0.7\r\n            c-0.2-0.3-0.3-0.6-0.5-0.9s-0.3-0.6-0.4-0.9c-0.1-0.3-0.2-0.7-0.3-1s-0.2-0.7-0.3-1c-0.6,0-1.1-0.1-1.7-0.1c-0.6,0-1.1-0.1-1.7-0.1\r\n            c-0.3,0.8-0.6,1.7-0.8,2.5S551.5,127.7,551.5,128.6z M553.3,121.7c0,0,0,0.1,0,0.1s0,0.1,0,0.1c0.4,0,0.8,0.1,1.2,0.1s0.8,0,1.2,0\r\n            c-0.1-0.6-0.3-1.2-0.5-1.9c-0.2-0.6-0.3-1.2-0.4-1.9c-0.2,0.6-0.5,1.1-0.7,1.7C553.8,120.5,553.6,121.1,553.3,121.7z\"/>\r\n        <path class=\"logo__highlight logo__highlight--01\" d=\"M564.8,117.4C564.8,117.4,564.8,117.3,564.8,117.4c-0.1-0.1-0.1-0.1-0.1-0.2c-0.2-0.2-0.2-0.3-0.2-0.5\r\n            c0-0.2,0.1-0.3,0.2-0.5c0.1-0.1,0.2-0.2,0.4-0.3s0.3-0.1,0.5,0c0.2,0,0.4,0,0.6,0.1c0.2,0.1,0.3,0.3,0.3,0.6\r\n            c0.7,0.8,1.3,1.6,1.9,2.3c0.6,0.8,1.1,1.6,1.6,2.4c0.2,0.4,0.4,0.8,0.6,1.2s0.4,0.8,0.5,1.2c0-0.5,0-1.1,0.1-1.6s0.1-1.1,0.2-1.6\r\n            c0.1-1.1,0.3-2.2,0.4-3.3s0.2-2.2,0.2-3.4c0-0.2,0.1-0.4,0.2-0.6s0.3-0.2,0.5-0.2s0.4,0.1,0.5,0.2c0.2,0.1,0.2,0.3,0.2,0.6\r\n            c0,1.2-0.1,2.3-0.2,3.5c-0.1,1.1-0.3,2.3-0.4,3.4c-0.1,0.6-0.1,1.2-0.2,1.7c0,0.6-0.1,1.1,0,1.7c0,0.6,0,1.1,0,1.7\r\n            c0,0.5,0,1.1,0,1.7c0,0.2-0.1,0.4-0.2,0.5s-0.2,0.2-0.4,0.2c-0.2,0-0.3,0-0.5,0s-0.3-0.2-0.4-0.3c-0.3-0.5-0.5-0.9-0.8-1.4\r\n            c-0.2-0.5-0.4-1-0.6-1.5c-0.2-0.5-0.4-0.9-0.6-1.4c-0.2-0.4-0.4-0.9-0.7-1.3c-0.3-0.6-0.7-1.1-1-1.7s-0.8-1.1-1.2-1.6\r\n            c0,0.5,0,1.1,0,1.6s0,1,0,1.6c0,0.9,0.1,1.9,0.2,2.8s0.2,1.8,0.3,2.8c0,0.2,0,0.4-0.2,0.6c-0.2,0.1-0.4,0.2-0.5,0.2\r\n            c-0.2,0-0.4-0.1-0.5-0.2c-0.1-0.1-0.2-0.3-0.2-0.6c-0.1-0.9-0.2-1.8-0.3-2.8c-0.1-0.9-0.2-1.8-0.2-2.8c0-0.8,0-1.6,0-2.5\r\n            C564.8,119,564.8,118.2,564.8,117.4z\"/>\r\n        <path class=\"logo__highlight logo__highlight--01\" d=\"M580.8,129.2c-0.4-0.2-0.7-0.6-1-0.9c-0.3-0.4-0.6-0.8-0.8-1.2c-0.2-0.4-0.4-0.9-0.6-1.3s-0.3-0.9-0.3-1.4\r\n            c-0.1-0.4-0.1-0.9-0.1-1.3c0-0.4,0-0.9,0.2-1.3c0.1-0.3,0.2-0.7,0.4-1s0.4-0.6,0.6-0.9c0.5-0.7,1.1-1.4,1.7-2s1.3-1.2,2-1.6\r\n            c0.3-0.2,0.7-0.4,1.1-0.6s0.7-0.3,1.1-0.4c0.4-0.1,0.8-0.1,1.1-0.1c0.4,0,0.8,0.1,1.2,0.3c0.2,0.1,0.3,0.2,0.4,0.5\r\n            c0.1,0.2,0,0.4-0.1,0.6c-0.1,0.2-0.3,0.3-0.5,0.4s-0.4,0-0.6-0.1c-0.2-0.1-0.5-0.1-0.8-0.1c-0.1,0-0.3,0-0.5,0.1\r\n            c-0.2,0-0.4,0.1-0.5,0.2c-0.4,0.1-0.7,0.3-1.1,0.6s-0.7,0.5-1,0.8c-0.6,0.5-1.1,1-1.6,1.6c-0.5,0.6-0.9,1.2-1.2,1.9\r\n            c0,0.1-0.1,0.2-0.1,0.4c0,0.2-0.1,0.3-0.1,0.5c0,0.4,0,0.7,0.1,1.1c0.1,0.4,0.2,0.9,0.3,1.3s0.3,0.8,0.5,1.2c0.2,0.4,0.4,0.7,0.7,1\r\n            s0.6,0.6,1,0.7c0.4,0.1,0.9,0.1,1.3-0.1c0.1,0,0.2-0.1,0.3-0.1c0.1,0,0.2-0.1,0.3-0.1c0,0,0.1-0.1,0.1-0.1c0,0,0.1-0.1,0.1-0.1\r\n            c0.3-0.3,0.6-0.5,0.8-0.8s0.5-0.6,0.7-0.9c0.1-0.2,0.2-0.4,0.3-0.6s0.2-0.4,0.3-0.6c0.1-0.2,0.1-0.3,0.2-0.5c0-0.1,0.1-0.3,0.1-0.4\r\n            c-0.1-0.1-0.3-0.1-0.4-0.1c-0.1,0-0.3,0-0.4,0c-0.4,0-0.7,0-1.1,0.1c-0.4,0-0.7,0.1-1.1,0.1c-0.2,0-0.4-0.1-0.5-0.2\r\n            c-0.1-0.2-0.2-0.3-0.2-0.5s0.1-0.4,0.2-0.5c0.1-0.2,0.3-0.2,0.5-0.2c0.3,0,0.7,0,1-0.1c0.3,0,0.7-0.1,1-0.1c0.3,0,0.7,0,1,0\r\n            c0.3,0,0.7,0.1,1,0.3c0.3,0.1,0.6,0.4,0.8,0.7c0.1,0.2,0.2,0.5,0.2,0.7c0,0.3,0,0.5,0,0.8c0,0.6,0,1.1,0,1.7c0,0.6,0,1.1,0,1.7\r\n            c0,0.3-0.1,0.5-0.3,0.6s-0.3,0.2-0.5,0.2c-0.2,0-0.4-0.1-0.5-0.2s-0.2-0.3-0.2-0.6c0-0.3,0-0.5,0-0.8s0-0.5,0-0.8\r\n            c-0.4,0.6-0.8,1.2-1.3,1.7c-0.3,0.3-0.7,0.6-1.1,0.9s-0.8,0.4-1.3,0.5s-0.9,0.1-1.4,0.1C581.6,129.6,581.2,129.4,580.8,129.2z\"/>\r\n        <path class=\"logo__highlight logo__highlight--01\" d=\"M594.1,123.5c-0.1-1.3-0.2-2.6-0.3-3.9c-0.1-1.3-0.1-2.6-0.3-3.9c0-0.2,0-0.4,0.2-0.6c0.2-0.1,0.4-0.2,0.5-0.2\r\n            c0.2,0,0.4,0.1,0.5,0.2c0.1,0.1,0.2,0.3,0.2,0.6c0.1,0.8,0.2,1.6,0.2,2.3s0.1,1.5,0.1,2.3c0.1,1.1,0.1,2.3,0.3,3.4\r\n            c0,0.1,0,0.3,0,0.5s0,0.3,0,0.4c0,0.2,0.1,0.4,0.1,0.5s0.1,0.3,0.1,0.5c0.1,0.3,0.2,0.6,0.3,0.9s0.2,0.5,0.4,0.7l0.2,0.1\r\n            c0.1,0,0.2,0,0.3,0c0.1,0,0.2,0,0.4-0.1c0.2-0.1,0.3-0.1,0.5-0.2c0.3-0.2,0.6-0.5,0.9-0.9s0.5-0.7,0.6-1.1c0.2-0.4,0.4-0.8,0.5-1.3\r\n            c0.2-0.4,0.3-0.9,0.4-1.3c0.3-1.1,0.4-2.3,0.3-3.5s-0.1-2.3-0.3-3.5c0-0.2,0-0.4,0.2-0.5c0.2-0.2,0.4-0.2,0.5-0.2\r\n            c0.2,0,0.4,0.1,0.5,0.2c0.1,0.2,0.2,0.3,0.2,0.5c0.2,1.3,0.3,2.5,0.3,3.8s-0.1,2.5-0.5,3.8c-0.1,0.4-0.3,0.9-0.4,1.4\r\n            s-0.3,0.9-0.5,1.4s-0.5,0.9-0.7,1.3c-0.3,0.4-0.6,0.7-1,1c-0.4,0.3-0.8,0.5-1.2,0.7s-0.9,0.2-1.3,0.1c-0.3-0.1-0.7-0.2-0.9-0.5\r\n            s-0.5-0.5-0.7-0.8c-0.3-0.7-0.6-1.3-0.7-2.1S594.2,124.2,594.1,123.5z\"/>\r\n        <path class=\"logo__highlight logo__highlight--01\" d=\"M608.4,129c-0.2,0-0.4-0.1-0.5-0.2c-0.1-0.1-0.2-0.2-0.2-0.4c0-0.1,0-0.3,0-0.5c0-0.2,0.1-0.3,0.3-0.4\r\n            c0.1-0.4,0.1-0.9,0.1-1.3s-0.1-0.9-0.2-1.3c-0.1-0.5-0.1-1.1-0.1-1.6s0.1-1.1,0.2-1.6s0.2-1.1,0.3-1.6c0.1-0.5,0.2-1.1,0.2-1.6\r\n            c0.1-0.6,0.1-1.2,0.2-1.7s0.1-1.2,0.1-1.7c0-0.2,0.1-0.4,0.3-0.6c0.2-0.1,0.3-0.2,0.5-0.2c0.2,0,0.4,0.1,0.5,0.2s0.2,0.3,0.2,0.6\r\n            c0,0.6-0.1,1.2-0.1,1.8s-0.1,1.2-0.2,1.8c-0.1,0.6-0.1,1.1-0.2,1.7c-0.1,0.5-0.2,1.1-0.3,1.7c-0.1,0.5-0.1,1.1-0.1,1.6\r\n            s0,1.1,0.1,1.6c0,0.4,0.1,0.8,0.1,1.1c0,0.4,0,0.8,0,1.1c1,0,1.9,0.1,2.9,0.1c1,0.1,1.9,0.1,2.9,0.2c0.2,0,0.4,0.1,0.5,0.3\r\n            c0.1,0.2,0.2,0.4,0.2,0.5s-0.1,0.4-0.2,0.5s-0.3,0.2-0.5,0.2c-1.2-0.1-2.3-0.1-3.5-0.2S609.6,129,608.4,129z\"/>\r\n        <path class=\"logo__highlight logo__highlight--01\" d=\"M621.4,128.6c0,0.2-0.1,0.4-0.2,0.6c-0.2,0.1-0.3,0.2-0.5,0.2s-0.4-0.1-0.5-0.2s-0.2-0.3-0.2-0.6\r\n            c0-1,0.1-2,0.3-2.9s0.5-1.9,0.9-2.8c-0.1-0.2-0.1-0.4-0.1-0.6c0.1-0.3,0.2-0.4,0.5-0.5c0.3-0.6,0.5-1.2,0.8-1.9s0.5-1.2,0.8-1.9\r\n            c0.3-0.6,0.5-1.3,0.7-1.9s0.4-1.3,0.5-2c0-0.2,0.1-0.4,0.2-0.5c0.1-0.1,0.3-0.2,0.5-0.2c0.2,0,0.4,0.1,0.6,0.2s0.2,0.3,0.2,0.6\r\n            c0,0.8,0,1.4,0,2.1s0.2,1.3,0.3,1.9s0.3,1.2,0.4,1.9c0.2,0.6,0.3,1.2,0.5,1.8c0.1,0.6,0.3,1.2,0.4,1.8c0.1,0.6,0.3,1.2,0.6,1.7\r\n            c0.1,0.3,0.3,0.5,0.4,0.8s0.3,0.5,0.5,0.8c0.2,0.2,0.3,0.5,0.4,0.7c0.1,0.3,0.2,0.5,0.3,0.8c0,0.2,0,0.4-0.1,0.6\r\n            c-0.1,0.2-0.2,0.3-0.5,0.4c-0.2,0.1-0.4,0-0.6-0.1c-0.2-0.1-0.3-0.3-0.4-0.5c-0.1-0.3-0.2-0.6-0.3-0.8c-0.1-0.2-0.3-0.5-0.5-0.7\r\n            c-0.2-0.3-0.3-0.6-0.5-0.9s-0.3-0.6-0.4-0.9c-0.1-0.3-0.2-0.7-0.3-1s-0.2-0.7-0.3-1c-0.6,0-1.1-0.1-1.7-0.1c-0.6,0-1.1-0.1-1.7-0.1\r\n            c-0.3,0.8-0.6,1.7-0.8,2.5S621.4,127.7,621.4,128.6z M623.2,121.7c0,0,0,0.1,0,0.1s0,0.1,0,0.1c0.4,0,0.8,0.1,1.2,0.1s0.8,0,1.2,0\r\n            c-0.1-0.6-0.3-1.2-0.5-1.9c-0.2-0.6-0.3-1.2-0.4-1.9c-0.2,0.6-0.5,1.1-0.7,1.7C623.7,120.5,623.4,121.1,623.2,121.7z\"/>\r\n        <path class=\"logo__highlight logo__highlight--01\" d=\"M642.2,128.4c-0.1,0.2-0.3,0.3-0.5,0.4c-0.2,0.1-0.4,0-0.6-0.1c-0.3-0.3-0.7-0.5-1-0.8c-0.3-0.3-0.7-0.5-1-0.8\r\n            c-0.3-0.2-0.7-0.4-1-0.6s-0.7-0.4-1-0.6c-0.4-0.3-0.7-0.6-1-0.9c0,0.7,0,1.3,0,1.9c0,0.6,0.1,1.3,0.1,1.9c0,0.2,0,0.4-0.2,0.6\r\n            s-0.3,0.2-0.5,0.2c-0.2,0-0.4-0.1-0.5-0.2c-0.1-0.1-0.2-0.3-0.2-0.6c-0.1-0.9-0.1-1.9-0.1-2.8s0-1.8,0.1-2.7\r\n            c-0.1-0.1-0.2-0.3-0.3-0.4c-0.1-0.1-0.2-0.3-0.3-0.5c-0.1-0.2-0.1-0.3-0.1-0.4c0-0.1,0.1-0.3,0.2-0.4c0.1-0.1,0.2-0.2,0.3-0.3\r\n            s0.3-0.1,0.4-0.1c0-0.3,0.1-0.6,0.1-0.9c0-0.3,0.1-0.6,0.1-0.9c0-0.2,0.1-0.4,0.1-0.6s0.1-0.4,0.1-0.6c0-0.1,0-0.2,0-0.3\r\n            s0-0.2,0-0.3c0-0.1,0-0.1,0-0.2c0-0.2,0-0.3,0-0.5s0-0.3,0-0.5c0-0.2,0-0.4,0.1-0.7s0.1-0.5,0.2-0.7c0.1-0.2,0.2-0.4,0.3-0.6\r\n            c0.1-0.2,0.3-0.3,0.5-0.4c0.2-0.1,0.4-0.1,0.6-0.2s0.4,0,0.6,0c0.2,0,0.4,0.1,0.6,0.2c0.2,0.1,0.4,0.1,0.6,0.2\r\n            c0.5,0.2,0.9,0.4,1.3,0.6s0.8,0.5,1.2,0.8c0.3,0.3,0.6,0.7,0.9,1.2s0.4,0.9,0.3,1.4c0,0.3-0.1,0.6-0.2,0.8s-0.2,0.5-0.4,0.7\r\n            c-0.4,0.6-0.9,1.1-1.3,1.7s-1,1-1.5,1.5c-0.3,0.2-0.5,0.4-0.8,0.6c-0.3,0.2-0.6,0.4-1,0.5c0.1,0.1,0.2,0.2,0.3,0.3\r\n            c0.1,0.1,0.2,0.2,0.4,0.3c0.3,0.2,0.7,0.4,1,0.6s0.7,0.4,1,0.6c0.3,0.2,0.6,0.5,0.9,0.7c0.3,0.2,0.6,0.5,0.9,0.7\r\n            c0.2,0.1,0.3,0.3,0.4,0.5S642.3,128.2,642.2,128.4z M637,122.6c0.3-0.2,0.6-0.3,0.8-0.5c0.3-0.2,0.5-0.4,0.7-0.6\r\n            c0.3-0.2,0.5-0.5,0.8-0.7c0.2-0.3,0.5-0.5,0.7-0.8c0.1-0.1,0.2-0.2,0.3-0.3s0.1-0.2,0.2-0.3s0.1-0.2,0.2-0.3s0.1-0.2,0.2-0.3\r\n            c0,0,0.1-0.1,0.1-0.1s0.1-0.1,0.1-0.1c0-0.4-0.1-0.7-0.2-1c-0.2-0.4-0.5-0.7-0.8-0.9c-0.3-0.2-0.7-0.4-1.1-0.6\r\n            c-0.2-0.1-0.5-0.2-0.7-0.3s-0.5-0.1-0.7-0.2c-0.1,0-0.2-0.1-0.3-0.1c-0.1,0-0.1,0.1-0.2,0.1c-0.1,0.2-0.1,0.3-0.1,0.4\r\n            c0,0,0,0.1-0.1,0.2c0,0.1,0,0.2,0,0.3c0,0.1,0,0.1,0,0.2c0,0.9-0.1,1.8-0.3,2.7c-0.1,0.9-0.3,1.8-0.4,2.7c0,0.1,0,0.3,0,0.4\r\n            s0,0.3,0,0.4c0.1,0,0.2,0,0.2,0c0.1,0,0.3-0.1,0.3-0.1C636.8,122.6,636.9,122.6,637,122.6z\"/>\r\n    </g>\r\n</svg>\r\n<span class=\"logo__label\">Playground For Angular</span>"

/***/ }),

/***/ "../../../../../src/app/shared/playground-logo/playground-logo.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".logo {\n  max-width: 100%; }\n  .logo__box--01 {\n    fill: #60c126; }\n  .logo__box--02 {\n    fill: #00ACED; }\n  .logo__box--03 {\n    fill: #2F3E4E; }\n  .logo__letter {\n    fill: #fff; }\n  .logo__highlight--01 {\n    fill: #DD0031; }\n  .logo__highlight--02 {\n    fill: #C3002F; }\n  .logo__label {\n    border: 0 !important;\n    clip: rect(1px, 1px, 1px, 1px);\n    height: 1px !important;\n    overflow: hidden;\n    padding: 0 !important;\n    position: absolute !important;\n    width: 1px !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/playground-logo/playground-logo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlaygroundLogoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PlaygroundLogoComponent = (function () {
    function PlaygroundLogoComponent() {
    }
    PlaygroundLogoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Component */])({
            selector: 'playground-logo',
            template: __webpack_require__("../../../../../src/app/shared/playground-logo/playground-logo.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/playground-logo/playground-logo.component.scss")]
        }), 
        __metadata('design:paramtypes', [])
    ], PlaygroundLogoComponent);
    return PlaygroundLogoComponent;
}());
//# sourceMappingURL=C:/Code/Github/angularplayground.it/src/playground-logo.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/socreate-logo/socreate-logo.component.html":
/***/ (function(module, exports) {

module.exports = "<svg \r\n    viewBox=\"0 0 352.35 113.99\"\r\n    class=\"logo\">\r\n    <path class=\"logo__letter01\" d=\"M58.8 19.3c5.91-4.28 13.17-6.82 21.01-6.82 9.59 0 18.31 3.78 24.75 9.92l8.25-9.39C104.17 4.94 92.56 0 79.81 0 67.32 0 55.94 4.73 47.36 12.5L58.8 19.3z\"></path>\r\n    <path class=\"logo__letter01\" d=\"M113.83 59.77c-4.78 14.21-18.22 24.47-34.02 24.47 -7.48 0-14.44-2.31-20.19-6.24l-11.52 6.85c8.49 7.39 19.58 11.87 31.71 11.87 19.68 0 36.62-11.76 44.17-28.64L113.83 59.77z\"></path>\r\n    <path class=\"logo__letter01\" d=\"M125.44 30.66l0.95 5.98c3.98-6.4 9.33-7.34 14.57-7.34 5.35 0 10.2 1.16 14.78 6.28l-7.23 9.77c-2.62-2.2-5.03-3.36-9.22-3.36 -6.71 0-12.89 3.57-12.89 13.11v27.27h-12.79V30.66H125.44z\"></path>\r\n    <path class=\"logo__letter01\" d=\"M159.7 61.07c0.84 6.4 6.4 11.01 15.41 11.01 4.72 0 10.9-1.78 13.84-4.82l8.17 8.07c-5.45 5.66-14.36 8.39-22.23 8.39 -17.83 0-28.42-11.01-28.42-27.57 0-15.73 10.69-27.06 27.47-27.06 17.31 0 28.1 10.7 26.11 31.98H159.7zM187.8 50.48c-0.84-6.71-6.08-10.06-13.42-10.06 -6.92 0-12.58 3.36-14.47 10.07H187.8z\"></path>\r\n    <path class=\"logo__letter01\" d=\"M243.64 30.77h12.27v51.59h-12.06l-0.63-7.55c-2.94 6.08-11.01 9.02-16.78 9.12 -15.31 0.11-26.63-9.33-26.63-27.47 0-17.83 11.85-27.16 26.95-27.05 6.92 0 13.53 3.25 16.46 8.39L243.64 30.77zM212.61 56.46c0 9.85 6.82 15.74 15.31 15.74 20.14 0 20.14-31.36 0-31.36C219.42 40.84 212.61 46.6 212.61 56.46z\"></path>\r\n    <path class=\"logo__letter01\" d=\"M281.61 16.09v14.68h34.08v11.01h-34.19V64.11c0 4.93 2.73 7.34 6.72 7.34 1.99 0 4.3-0.63 6.18-1.58l3.57 10.91c-3.67 1.47-6.71 2.1-10.6 2.2 -11.22 0.42-18.56-5.97-18.56-18.87V41.78h-19.56V30.77h19.56v-13.31L281.61 16.09z\"></path>\r\n    <path class=\"logo__letter01\" d=\"M311.07 61.07c0.84 6.4 6.4 11.01 15.42 11.01 4.72 0 10.9-1.78 13.84-4.82l8.18 8.07c-5.45 5.66-14.36 8.39-22.22 8.39 -17.83 0-28.42-11.01-28.42-27.57 0-15.73 10.7-27.06 27.48-27.06 17.3 0 28.1 10.7 26.11 31.98H311.07zM339.18 50.48c-0.85-6.71-6.09-10.06-13.42-10.06 -6.92 0-12.59 3.36-14.47 10.07H339.18z\"></path>\r\n    <path class=\"logo__symbol\" d=\"M71.86 32.51L30.06 7.66c-4.48-2.66-9.89-4.07-13.78-4.07 -9.02 0-15.6 7.54-15.6 19.68v51.26C0.67 86.66 7.26 94.2 16.28 94.2c3.89 0 8.81-1.41 13.29-4.07l42.05-24.84c7.5-4.45 11.75-10.27 11.75-16.39C83.36 42.78 79.36 36.96 71.86 32.51z\"></path>\r\n    <path class=\"logo__letter02\" d=\"M35.02 39.92c-0.87-1.44-3.24-2.81-5.99-2.81 -3.53 0-5.23 1.48-5.23 3.35 0 2.2 2.6 2.81 5.62 3.17 5.26 0.65 10.17 2.02 10.17 8.04 0 5.62-4.97 8.04-10.6 8.04 -5.15 0-9.12-1.59-11-6.2l3.97-2.06c1.12 2.78 4.04 4 7.1 4 2.99 0 5.8-1.05 5.8-3.78 0-2.38-2.49-3.35-5.84-3.71 -5.15-0.61-9.91-1.98-9.91-7.64 0-5.19 5.12-7.32 9.77-7.35 3.93 0 8 1.12 9.91 5.01L35.02 39.92z\"></path>\r\n    <path class=\"logo__letter02\" d=\"M61.33 50.2c0 5.12-3.5 9.27-9.27 9.27 -5.77 0-9.23-4.15-9.23-9.26 0-5.08 3.53-9.26 9.19-9.26C57.69 40.93 61.33 45.11 61.33 50.2zM47.24 50.2c0 2.71 1.62 5.23 4.83 5.23s4.83-2.52 4.83-5.23c0-2.67-1.87-5.26-4.83-5.26C48.89 44.93 47.24 47.53 47.24 50.2z\"></path>\r\n    <path class=\"logo__letter03\" d=\"M119.26 101.45c-0.31-0.32-0.64-0.62-0.99-0.9s-0.7-0.56-1.04-0.84 -0.68-0.57-1-0.87c-0.32-0.31-0.62-0.64-0.89-1 -0.28-0.37-0.51-0.78-0.67-1.23 -0.16-0.45-0.19-0.91-0.09-1.39 0.1-0.52 0.36-0.97 0.76-1.36 0.4-0.39 0.84-0.69 1.3-0.91 0.51-0.22 1.02-0.37 1.54-0.45 0.52-0.08 1.04-0.14 1.57-0.16 0.53-0.02 1.07-0.02 1.6 0 0.54 0.02 1.07 0.02 1.6-0.01 0.25-0.01 0.43 0.06 0.55 0.22 0.12 0.16 0.19 0.33 0.19 0.52 0 0.19-0.06 0.37-0.18 0.54 -0.12 0.16-0.31 0.25-0.55 0.26 -0.37 0.03-0.75 0.04-1.12 0.03 -0.37-0.01-0.74-0.02-1.12-0.03 -0.5-0.01-1.01-0.01-1.52 0.02 -0.51 0.03-1.01 0.13-1.5 0.31 -0.17 0.06-0.35 0.14-0.54 0.24 -0.19 0.1-0.37 0.22-0.53 0.36 -0.16 0.14-0.29 0.3-0.4 0.47 -0.1 0.17-0.15 0.35-0.14 0.54 0.01 0.18 0.06 0.36 0.14 0.53 0.08 0.18 0.18 0.35 0.3 0.52 0.12 0.17 0.26 0.33 0.4 0.49 0.14 0.16 0.28 0.3 0.41 0.43 0.3 0.3 0.61 0.57 0.93 0.82 0.32 0.25 0.65 0.5 0.97 0.76 0.34 0.27 0.68 0.57 1.02 0.9 0.34 0.33 0.64 0.69 0.89 1.07 0.25 0.38 0.44 0.79 0.56 1.21 0.12 0.43 0.14 0.88 0.05 1.36 -0.09 0.45-0.26 0.84-0.51 1.15 -0.25 0.32-0.55 0.6-0.89 0.86 -0.34 0.25-0.71 0.48-1.09 0.68 -0.38 0.2-0.75 0.41-1.1 0.61 -0.22 0.13-0.42 0.15-0.61 0.08 -0.19-0.08-0.33-0.2-0.43-0.37 -0.1-0.17-0.13-0.35-0.12-0.55 0.02-0.2 0.14-0.36 0.36-0.49 0.31-0.18 0.62-0.35 0.93-0.5 0.31-0.16 0.62-0.33 0.91-0.52 0.29-0.18 0.54-0.4 0.75-0.65 0.21-0.25 0.32-0.55 0.32-0.88 -0.01-0.34-0.12-0.66-0.32-0.97C119.75 102 119.52 101.71 119.26 101.45z\"></path>\r\n    <path class=\"logo__letter03\" d=\"M130.05 105.26c0.05 0.18 0.03 0.38-0.08 0.58 -0.1 0.21-0.26 0.33-0.47 0.37 -0.7 0.12-1.39 0.11-2.08-0.03 -0.69-0.14-1.32-0.43-1.9-0.88 -0.57-0.45-0.97-1.03-1.21-1.74 -0.24-0.71-0.28-1.41-0.13-2.13 0.14-0.63 0.44-1.19 0.89-1.65 0.45-0.46 0.97-0.83 1.56-1.09 0.52-0.25 1.06-0.44 1.63-0.58 0.57-0.14 1.14-0.19 1.71-0.14 0.22 0.03 0.41 0.11 0.55 0.24 0.15 0.14 0.22 0.32 0.22 0.54 0 0.2-0.07 0.38-0.22 0.54 -0.15 0.17-0.33 0.25-0.55 0.23 -0.41-0.04-0.82-0.02-1.22 0.06 -0.4 0.08-0.79 0.2-1.17 0.37 -0.22 0.1-0.44 0.21-0.65 0.33 -0.21 0.12-0.4 0.25-0.55 0.39 -0.17 0.16-0.31 0.31-0.42 0.47 -0.11 0.16-0.19 0.34-0.24 0.54 -0.05 0.21-0.07 0.43-0.06 0.66 0.01 0.23 0.06 0.46 0.13 0.69 0.07 0.23 0.17 0.43 0.3 0.62 0.13 0.19 0.29 0.35 0.47 0.48 0.38 0.27 0.79 0.46 1.23 0.55 0.45 0.1 0.88 0.11 1.31 0.03 0.21-0.04 0.4-0.01 0.58 0.08C129.86 104.89 129.98 105.04 130.05 105.26z\"></path>\r\n    <path class=\"logo__letter03\" d=\"M133.08 98.87c0.01-0.25 0.1-0.43 0.27-0.56 0.17-0.12 0.35-0.18 0.54-0.18s0.37 0.06 0.52 0.19c0.15 0.12 0.22 0.31 0.2 0.56 0 0.08 0 0.16-0.01 0.24 -0.01 0.08-0.01 0.16-0.01 0.24 0.41-0.21 0.85-0.38 1.31-0.54 0.46-0.15 0.92-0.24 1.38-0.28 0.46-0.04 0.91 0 1.34 0.11 0.43 0.11 0.83 0.32 1.2 0.63 0.18 0.17 0.26 0.35 0.24 0.55 -0.02 0.19-0.1 0.36-0.23 0.49 -0.14 0.14-0.31 0.22-0.51 0.25s-0.41-0.03-0.6-0.18c-0.14-0.12-0.3-0.2-0.47-0.25 -0.17-0.05-0.36-0.07-0.56-0.07 -0.2 0.01-0.4 0.03-0.6 0.07 -0.2 0.04-0.39 0.09-0.57 0.13 -0.69 0.22-1.33 0.51-1.92 0.88 0.03 0.63 0.06 1.27 0.12 1.9 0.05 0.53 0.1 1.08 0.14 1.64 0.04 0.56 0.15 1.1 0.33 1.6 0.08 0.23 0.06 0.43-0.05 0.59 -0.11 0.16-0.26 0.27-0.45 0.32 -0.19 0.05-0.38 0.04-0.58-0.04 -0.2-0.08-0.34-0.23-0.42-0.47 -0.1-0.3-0.17-0.6-0.21-0.91 -0.04-0.31-0.08-0.62-0.12-0.93 -0.02-0.3-0.05-0.6-0.09-0.9 -0.03-0.3-0.06-0.6-0.09-0.9 -0.06-0.7-0.11-1.39-0.13-2.09C133.01 100.27 133.03 99.57 133.08 98.87z\"></path>\r\n    <path class=\"logo__letter03\" d=\"M142.53 99.24c0.25-0.34 0.54-0.63 0.88-0.89 0.34-0.26 0.71-0.46 1.1-0.61 0.39-0.15 0.79-0.23 1.2-0.23 0.41-0.01 0.83 0.07 1.24 0.24 0.4 0.16 0.77 0.37 1.09 0.63 0.33 0.27 0.58 0.61 0.76 1.02 0.14 0.31 0.23 0.65 0.25 1.01 0.03 0.36-0.07 0.69-0.29 0.99 -0.2 0.27-0.43 0.48-0.71 0.62 -0.28 0.14-0.57 0.25-0.89 0.31 -0.32 0.06-0.64 0.1-0.97 0.1s-0.64-0.01-0.94-0.02c-0.34-0.01-0.67-0.04-1-0.08 -0.33-0.04-0.66-0.08-1-0.12 0.1 0.58 0.31 1.1 0.62 1.56 0.31 0.45 0.73 0.8 1.26 1.03 0.14 0.05 0.25 0.09 0.33 0.12 0.04 0.01 0.08 0.02 0.11 0.03 0.03 0.01 0.07 0.01 0.11 0.01 0.1 0.01 0.19 0.02 0.26 0.03 0.07 0.01 0.14 0 0.2-0.01 0.09-0.01 0.15-0.02 0.19-0.03 0.03-0.01 0.07-0.02 0.11-0.03 0.14-0.04 0.27-0.09 0.38-0.14 0.11-0.05 0.24-0.14 0.4-0.25 0.08-0.06 0.18-0.16 0.31-0.29s0.24-0.25 0.33-0.35c0.13-0.18 0.29-0.3 0.48-0.37 0.19-0.06 0.38-0.04 0.57 0.08 0.17 0.11 0.29 0.26 0.36 0.48 0.07 0.22 0.04 0.41-0.09 0.59 -0.38 0.51-0.82 0.94-1.33 1.29 -0.51 0.36-1.1 0.55-1.76 0.57 -0.53 0.03-1.04-0.07-1.53-0.28 -0.49-0.21-0.93-0.5-1.3-0.86 -0.47-0.45-0.83-0.98-1.11-1.57 -0.27-0.59-0.42-1.2-0.45-1.83 -0.12-0.09-0.2-0.2-0.26-0.34 -0.06-0.14-0.08-0.28-0.06-0.42 0.02-0.14 0.07-0.28 0.15-0.4 0.08-0.12 0.19-0.2 0.35-0.24C142.01 100.1 142.23 99.65 142.53 99.24zM147.19 99.7c-0.14-0.18-0.36-0.34-0.66-0.49 -0.25-0.1-0.53-0.15-0.86-0.15s-0.61 0.06-0.84 0.17c-0.3 0.14-0.56 0.34-0.8 0.6 -0.23 0.25-0.42 0.53-0.56 0.84 0.31 0.04 0.62 0.08 0.93 0.12 0.31 0.04 0.62 0.06 0.93 0.08 0.17 0 0.34 0 0.51 0 0.17 0 0.34-0.01 0.51-0.02 0.05 0 0.1 0 0.14-0.01 0.05-0.01 0.09-0.01 0.14-0.01 0.12-0.03 0.21-0.04 0.26-0.05 0.06-0.01 0.12-0.02 0.18-0.05 0.05-0.01 0.12-0.03 0.2-0.06 0.06-0.02 0.1-0.04 0.12-0.06 0.01-0.01 0.03-0.02 0.06-0.04l0.06-0.23c-0.02-0.05-0.04-0.1-0.05-0.15 -0.01-0.04-0.02-0.09-0.05-0.13 -0.01-0.04-0.04-0.1-0.09-0.17C147.27 99.82 147.23 99.76 147.19 99.7z\"></path>\r\n    <path class=\"logo__letter03\" d=\"M152.24 99.24c0.25-0.34 0.54-0.63 0.88-0.89 0.34-0.26 0.71-0.46 1.1-0.61 0.39-0.15 0.79-0.23 1.2-0.23 0.41-0.01 0.83 0.07 1.24 0.24 0.4 0.16 0.77 0.37 1.09 0.63 0.32 0.27 0.58 0.61 0.76 1.02 0.14 0.31 0.23 0.65 0.25 1.01 0.03 0.36-0.07 0.69-0.29 0.99 -0.2 0.27-0.43 0.48-0.71 0.62 -0.28 0.14-0.58 0.25-0.89 0.31 -0.32 0.06-0.64 0.1-0.97 0.1s-0.64-0.01-0.94-0.02c-0.34-0.01-0.67-0.04-1-0.08 -0.33-0.04-0.66-0.08-1-0.12 0.1 0.58 0.31 1.1 0.62 1.56 0.31 0.45 0.73 0.8 1.26 1.03 0.14 0.05 0.25 0.09 0.33 0.12 0.04 0.01 0.07 0.02 0.11 0.03 0.03 0.01 0.07 0.01 0.11 0.01 0.1 0.01 0.19 0.02 0.26 0.03 0.07 0.01 0.14 0 0.2-0.01 0.09-0.01 0.15-0.02 0.19-0.03 0.03-0.01 0.07-0.02 0.11-0.03 0.14-0.04 0.27-0.09 0.38-0.14 0.11-0.05 0.24-0.14 0.4-0.25 0.08-0.06 0.18-0.16 0.31-0.29s0.24-0.25 0.33-0.35c0.13-0.18 0.29-0.3 0.48-0.37 0.19-0.06 0.38-0.04 0.57 0.08 0.17 0.11 0.29 0.26 0.36 0.48 0.07 0.22 0.04 0.41-0.09 0.59 -0.38 0.51-0.82 0.94-1.33 1.29 -0.51 0.36-1.1 0.55-1.76 0.57 -0.53 0.03-1.04-0.07-1.53-0.28 -0.49-0.21-0.93-0.5-1.3-0.86 -0.47-0.45-0.83-0.98-1.11-1.57 -0.27-0.59-0.42-1.2-0.45-1.83 -0.12-0.09-0.2-0.2-0.26-0.34 -0.06-0.14-0.08-0.28-0.06-0.42 0.02-0.14 0.07-0.28 0.15-0.4 0.08-0.12 0.19-0.2 0.35-0.24C151.72 100.1 151.95 99.65 152.24 99.24zM156.91 99.7c-0.14-0.18-0.36-0.34-0.66-0.49 -0.25-0.1-0.53-0.15-0.86-0.15 -0.33 0-0.61 0.06-0.84 0.17 -0.3 0.14-0.56 0.34-0.8 0.6 -0.23 0.25-0.42 0.53-0.56 0.84 0.31 0.04 0.62 0.08 0.93 0.12 0.31 0.04 0.62 0.06 0.93 0.08 0.17 0 0.34 0 0.51 0 0.17 0 0.34-0.01 0.51-0.02 0.05 0 0.1 0 0.15-0.01 0.05-0.01 0.09-0.01 0.14-0.01 0.12-0.03 0.21-0.04 0.26-0.05 0.06-0.01 0.12-0.02 0.18-0.05 0.05-0.01 0.12-0.03 0.2-0.06 0.06-0.02 0.1-0.04 0.12-0.06 0.01-0.01 0.03-0.02 0.06-0.04l0.06-0.23c-0.02-0.05-0.04-0.1-0.05-0.15 -0.01-0.04-0.02-0.09-0.05-0.13 -0.01-0.04-0.04-0.1-0.09-0.17C156.99 99.82 156.94 99.76 156.91 99.7z\"></path>\r\n    <path class=\"logo__letter03\" d=\"M161.51 104.91c0-0.56 0.04-1.12 0.12-1.69 0.09-0.69 0.18-1.37 0.27-2.05 0.09-0.68 0.13-1.37 0.12-2.07 0-0.25 0.08-0.43 0.23-0.56 0.16-0.13 0.33-0.19 0.53-0.19 0.2 0 0.38 0.06 0.54 0.19 0.17 0.13 0.25 0.32 0.25 0.56 0.51-0.04 0.98-0.06 1.44-0.06 0.52 0.01 0.96 0.16 1.32 0.45 0.36 0.28 0.63 0.67 0.81 1.15 0.16 0.44 0.25 0.89 0.27 1.36 0.03 0.47 0.04 0.93 0.06 1.4 0.01 0.66 0.03 1.32 0.06 1.97 0.03 0.65 0.04 1.31 0.04 1.97 0 0.26-0.08 0.45-0.24 0.57 -0.16 0.12-0.34 0.18-0.52 0.18 -0.19 0-0.36-0.06-0.52-0.18 -0.16-0.12-0.24-0.31-0.24-0.57 0-0.62-0.01-1.23-0.03-1.83s-0.04-1.2-0.07-1.83c-0.03-0.34-0.04-0.68-0.03-1.04 0.01-0.35-0.02-0.68-0.09-0.98 -0.04-0.18-0.08-0.34-0.12-0.48 -0.04-0.13-0.11-0.27-0.21-0.4 -0.03-0.05-0.08-0.1-0.17-0.14 -0.08-0.04-0.16-0.06-0.22-0.06 -0.19 0-0.37 0.01-0.54 0.04 -0.17 0.03-0.34 0.06-0.52 0.12 -0.08 0.03-0.15 0.05-0.23 0.08 -0.08 0.03-0.15 0.06-0.21 0.1 -0.13 0.47-0.22 0.91-0.28 1.33 -0.06 0.42-0.11 0.84-0.16 1.27 -0.04 0.31-0.06 0.63-0.07 0.94 -0.01 0.32-0.02 0.63-0.04 0.94 -0.02 0.31-0.06 0.62-0.12 0.93 -0.06 0.31-0.16 0.61-0.3 0.9 -0.12 0.22-0.27 0.35-0.47 0.38 -0.19 0.03-0.37 0-0.53-0.1 -0.16-0.1-0.28-0.24-0.37-0.44 -0.08-0.19-0.07-0.4 0.03-0.62 0.12-0.23 0.18-0.49 0.2-0.76C161.49 105.44 161.5 105.17 161.51 104.91z\"></path>\r\n    <path class=\"logo__letter03\" d=\"M182.13 99.3c-0.08 0.36-0.17 0.73-0.27 1.08 -0.1 0.36-0.22 0.71-0.35 1.06 -0.14 0.36-0.28 0.72-0.41 1.08 -0.13 0.36-0.29 0.7-0.47 1.04 -0.17 0.33-0.35 0.64-0.54 0.94 -0.19 0.3-0.36 0.63-0.51 0.96 -0.13 0.3-0.26 0.59-0.4 0.88 -0.14 0.29-0.31 0.57-0.51 0.83 -0.1 0.13-0.22 0.21-0.35 0.23 -0.13 0.03-0.25 0.02-0.38-0.03 -0.12-0.05-0.24-0.12-0.35-0.22 -0.11-0.1-0.18-0.21-0.22-0.33 -0.22-0.61-0.38-1.22-0.49-1.83 -0.1-0.61-0.24-1.23-0.41-1.85 -0.04-0.18-0.08-0.36-0.13-0.52 -0.04-0.17-0.09-0.34-0.14-0.5 -0.1 0.3-0.22 0.59-0.34 0.87 -0.12 0.28-0.25 0.58-0.4 0.88 -0.15 0.3-0.31 0.6-0.47 0.91 -0.15 0.31-0.32 0.62-0.48 0.91 -0.14 0.3-0.31 0.58-0.5 0.83 -0.19 0.25-0.43 0.47-0.7 0.65 -0.22 0.14-0.44 0.16-0.67 0.04 -0.23-0.12-0.38-0.29-0.46-0.51 -0.19-0.58-0.37-1.18-0.52-1.78s-0.31-1.2-0.47-1.81c-0.15-0.6-0.32-1.2-0.48-1.79 -0.17-0.59-0.36-1.17-0.58-1.76 -0.08-0.19-0.05-0.38 0.07-0.57s0.28-0.31 0.46-0.38c0.22-0.06 0.42-0.04 0.59 0.08 0.17 0.12 0.29 0.27 0.36 0.47 0.36 0.93 0.66 1.87 0.89 2.82 0.23 0.95 0.48 1.9 0.74 2.86l0.12-0.23c0.14-0.28 0.28-0.56 0.42-0.83 0.14-0.27 0.28-0.55 0.42-0.83 0.16-0.3 0.29-0.6 0.42-0.92 0.12-0.32 0.24-0.64 0.34-0.96 0.1-0.31 0.2-0.62 0.29-0.93 0.09-0.31 0.15-0.64 0.17-0.97 0.01-0.21 0.09-0.37 0.22-0.51 0.14-0.13 0.29-0.21 0.47-0.23 0.18-0.03 0.34 0 0.5 0.09 0.16 0.08 0.27 0.24 0.33 0.46 0.18 0.66 0.37 1.31 0.56 1.96 0.19 0.65 0.37 1.3 0.52 1.96 0.06 0.27 0.12 0.54 0.18 0.81 0.05 0.27 0.11 0.53 0.17 0.79 0.14-0.31 0.31-0.61 0.5-0.9 0.19-0.29 0.36-0.59 0.51-0.9 0.29-0.58 0.54-1.19 0.75-1.83 0.21-0.64 0.39-1.28 0.51-1.91 0.04-0.22 0.16-0.38 0.36-0.49 0.2-0.1 0.4-0.12 0.59-0.06 0.22 0.06 0.38 0.19 0.47 0.37C182.14 98.9 182.17 99.09 182.13 99.3z\"></path>\r\n    <path class=\"logo__letter03\" d=\"M184.58 98.87c0.01-0.25 0.1-0.43 0.27-0.56 0.17-0.12 0.35-0.18 0.54-0.18 0.19 0 0.36 0.06 0.51 0.19s0.22 0.31 0.2 0.56c0 0.08 0 0.16-0.01 0.24 -0.01 0.08-0.01 0.16-0.01 0.24 0.41-0.21 0.85-0.38 1.31-0.54 0.46-0.15 0.92-0.24 1.38-0.28 0.46-0.04 0.91 0 1.34 0.11 0.44 0.11 0.83 0.32 1.2 0.63 0.18 0.17 0.26 0.35 0.24 0.55 -0.02 0.19-0.1 0.36-0.23 0.49 -0.13 0.14-0.31 0.22-0.51 0.25 -0.21 0.03-0.41-0.03-0.6-0.18 -0.14-0.12-0.3-0.2-0.48-0.25 -0.18-0.05-0.36-0.07-0.56-0.07 -0.2 0.01-0.4 0.03-0.6 0.07 -0.2 0.04-0.39 0.09-0.57 0.13 -0.69 0.22-1.33 0.51-1.92 0.88 0.03 0.63 0.07 1.27 0.12 1.9 0.05 0.53 0.1 1.08 0.14 1.64 0.04 0.56 0.15 1.1 0.33 1.6 0.08 0.23 0.06 0.43-0.05 0.59 -0.11 0.16-0.26 0.27-0.45 0.32 -0.19 0.05-0.38 0.04-0.58-0.04 -0.2-0.08-0.34-0.23-0.42-0.47 -0.1-0.3-0.17-0.6-0.21-0.91 -0.04-0.31-0.08-0.62-0.11-0.93 -0.03-0.3-0.06-0.6-0.09-0.9 -0.03-0.3-0.06-0.6-0.09-0.9 -0.06-0.7-0.11-1.39-0.13-2.09S184.52 99.57 184.58 98.87z\"></path>\r\n    <path class=\"logo__letter03\" d=\"M193.48 106.58c0.11-0.62 0.23-1.23 0.36-1.83 0.14-0.6 0.24-1.22 0.3-1.84 0.05-0.61 0.06-1.21 0.03-1.8 -0.03-0.59 0-1.19 0.11-1.8 0.03-0.21 0.15-0.36 0.36-0.47 0.22-0.1 0.41-0.13 0.59-0.08 0.22 0.07 0.37 0.19 0.46 0.37s0.11 0.38 0.09 0.58c-0.05 0.3-0.08 0.6-0.07 0.91 0.01 0.31 0.02 0.62 0.03 0.93 0 0.6-0.04 1.19-0.12 1.79 -0.08 0.62-0.18 1.23-0.3 1.83 -0.12 0.6-0.24 1.2-0.34 1.81 -0.04 0.21-0.16 0.36-0.37 0.47 -0.21 0.1-0.4 0.13-0.58 0.08 -0.22-0.06-0.37-0.19-0.46-0.37C193.46 106.98 193.44 106.79 193.48 106.58zM194.41 97.65c-0.09-0.02-0.18-0.07-0.27-0.12 -0.09-0.06-0.15-0.13-0.19-0.22 -0.04-0.1-0.07-0.19-0.1-0.27 -0.03-0.08-0.04-0.17-0.04-0.27 0-0.12 0.02-0.23 0.06-0.35 0.05-0.23 0.15-0.4 0.31-0.5 0.05-0.08 0.12-0.14 0.21-0.18 0.14-0.09 0.3-0.14 0.49-0.15 0.18-0.01 0.34 0.04 0.49 0.15 0.06 0.05 0.13 0.11 0.19 0.17 0.07 0.06 0.12 0.13 0.16 0.22 0.03 0.07 0.06 0.14 0.09 0.21 0.03 0.08 0.04 0.16 0.03 0.23 -0.01 0.09-0.03 0.18-0.04 0.25 -0.01 0.08-0.05 0.15-0.1 0.22 -0.06 0.09-0.12 0.15-0.16 0.19s-0.1 0.09-0.19 0.16c-0.05 0.05-0.13 0.09-0.23 0.12C194.84 97.65 194.6 97.7 194.41 97.65z\"></path>\r\n    <path class=\"logo__letter03\" d=\"M204.81 100c0.25 0 0.43 0.08 0.56 0.23 0.12 0.16 0.19 0.33 0.19 0.52 0 0.2-0.06 0.37-0.18 0.54 -0.12 0.16-0.31 0.24-0.56 0.24 -0.31 0.01-0.62 0.01-0.92-0.01s-0.6-0.04-0.9-0.07c0.01 1.02 0 2.05-0.05 3.07 -0.04 1.02-0.15 2.04-0.32 3.05 -0.03 0.22-0.14 0.38-0.35 0.49 -0.21 0.1-0.41 0.12-0.6 0.06 -0.22-0.06-0.37-0.18-0.46-0.36 -0.09-0.18-0.11-0.37-0.07-0.59 0.15-0.98 0.24-1.97 0.26-2.95 0.02-0.98 0.02-1.98-0.01-2.97 -0.49-0.08-0.99-0.16-1.49-0.24s-1-0.16-1.5-0.22c-0.22-0.02-0.38-0.14-0.47-0.36 -0.1-0.21-0.12-0.41-0.07-0.59 0.06-0.22 0.19-0.37 0.37-0.46 0.18-0.09 0.38-0.11 0.58-0.09 0.43 0.07 0.86 0.13 1.28 0.21 0.43 0.07 0.86 0.14 1.3 0.2 -0.01-0.06-0.02-0.16-0.02-0.29 0-1.17 0-2.32-0.01-3.46s0.05-2.29 0.17-3.46c0.03-0.21 0.11-0.39 0.24-0.55 0.14-0.15 0.31-0.23 0.53-0.23 0.19 0 0.38 0.08 0.55 0.23 0.18 0.16 0.25 0.34 0.23 0.55 -0.13 1.24-0.19 2.48-0.19 3.7 0.01 1.23 0.02 2.47 0.05 3.72 0.31 0.03 0.62 0.05 0.93 0.07C204.19 99.99 204.49 100 204.81 100z\"></path>\r\n    <path class=\"logo__letter03\" d=\"M207.67 106.58c0.1-0.62 0.23-1.23 0.36-1.83 0.14-0.6 0.24-1.22 0.3-1.84 0.05-0.61 0.06-1.21 0.03-1.8 -0.03-0.59 0-1.19 0.11-1.8 0.02-0.21 0.14-0.36 0.36-0.47 0.22-0.1 0.41-0.13 0.6-0.08 0.22 0.07 0.37 0.19 0.46 0.37 0.08 0.18 0.11 0.38 0.09 0.58 -0.05 0.3-0.08 0.6-0.07 0.91 0.01 0.31 0.02 0.62 0.03 0.93 0 0.6-0.04 1.19-0.12 1.79 -0.08 0.62-0.18 1.23-0.3 1.83 -0.12 0.6-0.24 1.2-0.34 1.81 -0.04 0.21-0.16 0.36-0.37 0.47 -0.21 0.1-0.4 0.13-0.58 0.08 -0.22-0.06-0.38-0.19-0.47-0.37C207.65 106.98 207.63 106.79 207.67 106.58zM208.6 97.65c-0.09-0.02-0.18-0.07-0.27-0.12 -0.09-0.06-0.15-0.13-0.19-0.22 -0.04-0.1-0.07-0.19-0.1-0.27 -0.03-0.08-0.04-0.17-0.04-0.27 0-0.12 0.02-0.23 0.06-0.35 0.05-0.23 0.16-0.4 0.31-0.5 0.05-0.08 0.12-0.14 0.21-0.18 0.14-0.09 0.3-0.14 0.49-0.15s0.34 0.04 0.49 0.15c0.06 0.05 0.13 0.11 0.19 0.17 0.06 0.06 0.12 0.13 0.16 0.22 0.03 0.07 0.06 0.14 0.09 0.21 0.03 0.08 0.04 0.16 0.03 0.23 -0.01 0.09-0.03 0.18-0.04 0.25 -0.01 0.08-0.05 0.15-0.1 0.22 -0.07 0.09-0.12 0.15-0.16 0.19 -0.04 0.04-0.1 0.09-0.19 0.16 -0.05 0.05-0.13 0.09-0.23 0.12C209.03 97.65 208.79 97.7 208.6 97.65z\"></path>\r\n    <path class=\"logo__letter03\" d=\"M213.23 104.91c0-0.56 0.04-1.12 0.12-1.69 0.09-0.69 0.18-1.37 0.27-2.05 0.09-0.68 0.13-1.37 0.12-2.07 0-0.25 0.08-0.43 0.23-0.56 0.16-0.13 0.33-0.19 0.53-0.19 0.19 0 0.38 0.06 0.54 0.19 0.17 0.13 0.25 0.32 0.25 0.56 0.51-0.04 0.98-0.06 1.44-0.06 0.52 0.01 0.96 0.16 1.32 0.45 0.36 0.28 0.64 0.67 0.82 1.15 0.15 0.44 0.24 0.89 0.27 1.36 0.03 0.47 0.05 0.93 0.06 1.4 0.01 0.66 0.03 1.32 0.06 1.97 0.03 0.65 0.04 1.31 0.04 1.97 0 0.26-0.08 0.45-0.24 0.57s-0.34 0.18-0.52 0.18c-0.19 0-0.36-0.06-0.52-0.18s-0.24-0.31-0.24-0.57c0-0.62-0.01-1.23-0.03-1.83 -0.02-0.6-0.04-1.2-0.07-1.83 -0.02-0.34-0.03-0.68-0.03-1.04 0.01-0.35-0.02-0.68-0.09-0.98 -0.04-0.18-0.08-0.34-0.11-0.48 -0.04-0.13-0.11-0.27-0.22-0.4 -0.02-0.05-0.08-0.1-0.16-0.14 -0.08-0.04-0.16-0.06-0.22-0.06 -0.2 0-0.38 0.01-0.55 0.04 -0.17 0.03-0.34 0.06-0.52 0.12 -0.08 0.03-0.15 0.05-0.23 0.08 -0.08 0.03-0.15 0.06-0.21 0.1 -0.13 0.47-0.22 0.91-0.28 1.33 -0.06 0.42-0.11 0.84-0.16 1.27 -0.04 0.31-0.06 0.63-0.07 0.94 -0.01 0.32-0.02 0.63-0.04 0.94 -0.02 0.31-0.06 0.62-0.12 0.93 -0.06 0.31-0.16 0.61-0.3 0.9 -0.12 0.22-0.27 0.35-0.47 0.38 -0.19 0.03-0.37 0-0.53-0.1 -0.16-0.1-0.29-0.24-0.37-0.44 -0.08-0.19-0.08-0.4 0.03-0.62 0.12-0.23 0.18-0.49 0.19-0.76C213.2 105.44 213.21 105.17 213.23 104.91z\"></path>\r\n    <path class=\"logo__letter03\" d=\"M222.32 111.75c0.28 0.27 0.62 0.46 0.99 0.57 0.38 0.11 0.75 0.15 1.13 0.11 0.38-0.04 0.73-0.15 1.07-0.33 0.34-0.18 0.62-0.43 0.84-0.76 0.47-0.66 0.77-1.39 0.9-2.18 0.14-0.8 0.19-1.6 0.17-2.4 -0.62 0.1-1.26 0.13-1.91 0.07 -0.65-0.06-1.27-0.2-1.85-0.42 -0.3-0.12-0.58-0.26-0.84-0.42 -0.27-0.16-0.48-0.39-0.63-0.69 -0.27-0.5-0.39-1.06-0.35-1.67 0.03-0.58 0.13-1.15 0.3-1.7 0.18-0.55 0.37-1.1 0.59-1.64 0.12-0.26 0.24-0.53 0.38-0.82 0.14-0.29 0.31-0.55 0.54-0.79 0.22-0.25 0.47-0.43 0.76-0.56 0.28-0.13 0.59-0.21 0.92-0.23 -0.05-0.18-0.05-0.35 0-0.52 0.05-0.16 0.16-0.29 0.33-0.4 0.17-0.1 0.37-0.13 0.59-0.08 0.23 0.05 0.39 0.17 0.48 0.35 0.05 0.12 0.1 0.23 0.15 0.35 0.05 0.12 0.09 0.23 0.13 0.35 0.26 0.7 0.5 1.4 0.71 2.12 0.21 0.71 0.42 1.43 0.61 2.15 0.23 0.86 0.41 1.73 0.52 2.6 0.12 0.88 0.16 1.77 0.14 2.68 -0.01 0.5-0.05 1.02-0.13 1.55 -0.07 0.53-0.19 1.04-0.36 1.54 -0.17 0.49-0.39 0.96-0.66 1.41 -0.27 0.45-0.62 0.83-1.05 1.16 -0.4 0.31-0.84 0.54-1.33 0.67 -0.48 0.14-0.98 0.19-1.48 0.16 -0.5-0.02-0.98-0.13-1.46-0.33 -0.47-0.19-0.89-0.47-1.25-0.82 -0.18-0.17-0.26-0.35-0.23-0.55 0.03-0.2 0.11-0.37 0.24-0.5 0.14-0.13 0.31-0.22 0.51-0.24C221.95 111.51 222.14 111.58 222.32 111.75zM224.48 105.05c0.45 0.12 0.92 0.2 1.41 0.24 0.49 0.05 0.96 0.02 1.41-0.09 -0.08-0.66-0.19-1.3-0.34-1.9 -0.15-0.61-0.31-1.23-0.5-1.85 -0.1-0.36-0.21-0.72-0.32-1.07 -0.11-0.35-0.23-0.7-0.34-1.05 -0.04 0.03-0.08 0.04-0.14 0.05 -0.05 0.01-0.11 0.02-0.18 0.03 -0.39 0-0.69 0.18-0.89 0.52 -0.14 0.22-0.26 0.45-0.35 0.7 -0.03 0.06-0.05 0.13-0.08 0.19 -0.03 0.06-0.05 0.12-0.08 0.18 -0.19 0.47-0.36 0.92-0.49 1.35 -0.14 0.43-0.22 0.86-0.24 1.27v0.35c0.01 0.09 0.03 0.16 0.04 0.21 0.03 0.12 0.04 0.19 0.05 0.22s0.04 0.09 0.11 0.19c0.08 0.07 0.15 0.12 0.22 0.16 0.06 0.04 0.1 0.06 0.12 0.08 0.11 0.04 0.21 0.08 0.3 0.12S224.37 105.02 224.48 105.05z\"></path>\r\n    <path class=\"logo__letter03\" d=\"M239.36 95.43c0.13-0.83 0.42-1.59 0.89-2.29 0.46-0.7 1.02-1.3 1.68-1.81 0.38-0.3 0.77-0.48 1.19-0.56 0.41-0.08 0.84 0.01 1.28 0.25 0.34 0.19 0.68 0.4 1.02 0.62 0.34 0.22 0.61 0.51 0.81 0.85 0.13 0.22 0.16 0.42 0.08 0.61 -0.08 0.19-0.2 0.33-0.37 0.43 -0.17 0.1-0.35 0.13-0.55 0.11s-0.36-0.15-0.48-0.37c-0.06-0.11-0.15-0.22-0.27-0.3 -0.12-0.08-0.23-0.16-0.33-0.22 -0.11-0.06-0.24-0.15-0.39-0.25 -0.14-0.1-0.28-0.17-0.43-0.19 -0.12-0.04-0.23-0.03-0.35 0.03 -0.12 0.06-0.23 0.14-0.34 0.23 -0.11 0.1-0.22 0.2-0.31 0.31 -0.1 0.11-0.18 0.2-0.26 0.28 -0.47 0.49-0.82 1.02-1.06 1.59 -0.24 0.57-0.35 1.2-0.34 1.88 0.01 0.47 0.05 0.93 0.12 1.4 0.37-0.02 0.76-0.05 1.14-0.08 0.38-0.03 0.76-0.05 1.14-0.08 0.22-0.03 0.4 0.05 0.55 0.21 0.15 0.17 0.22 0.36 0.22 0.56 0 0.22-0.07 0.4-0.22 0.53 -0.15 0.14-0.34 0.21-0.55 0.23 -0.34 0.02-0.68 0.05-1.02 0.08 -0.34 0.03-0.68 0.05-1.02 0.08 0.04 0.22 0.08 0.44 0.12 0.66 0.04 0.22 0.08 0.44 0.12 0.66 0.15 0.92 0.31 1.82 0.48 2.72s0.28 1.81 0.36 2.74c0.03 0.22-0.05 0.4-0.21 0.55 -0.17 0.15-0.36 0.22-0.56 0.22 -0.22 0-0.4-0.07-0.53-0.22 -0.14-0.15-0.22-0.33-0.24-0.55 -0.08-1.04-0.21-2.06-0.41-3.06 -0.19-1-0.37-2.01-0.54-3.02 -0.03-0.1-0.04-0.21-0.05-0.31 -0.01-0.1-0.02-0.21-0.05-0.31 -0.38 0.03-0.75 0.05-1.14 0.06 -0.38 0.01-0.77 0.02-1.15 0.02 -0.25 0-0.43-0.08-0.55-0.24s-0.19-0.34-0.19-0.53c0-0.19 0.06-0.37 0.19-0.53s0.31-0.24 0.55-0.24c0.68 0 1.37-0.02 2.06-0.06 -0.07-0.45-0.1-0.9-0.12-1.34C239.27 96.33 239.3 95.89 239.36 95.43z\"></path>\r\n    <path class=\"logo__letter03\" d=\"M250.65 97.82c0.41-0.05 0.85-0.07 1.3-0.05 0.45 0.02 0.89 0.1 1.3 0.23 0.41 0.14 0.79 0.34 1.13 0.61 0.34 0.27 0.6 0.63 0.78 1.07 0.13 0.31 0.2 0.63 0.21 0.94 0.01 0.32-0.04 0.62-0.14 0.91 -0.1 0.29-0.24 0.57-0.43 0.84 -0.19 0.27-0.41 0.51-0.65 0.73 -0.53 0.48-1.11 0.89-1.75 1.23 -0.63 0.34-1.3 0.6-2 0.78 -0.3 0.08-0.61 0.15-0.92 0.21 -0.32 0.06-0.64 0.09-0.96 0.09 -0.32 0-0.64-0.04-0.95-0.11 -0.31-0.07-0.6-0.19-0.87-0.36 -0.19-0.12-0.31-0.27-0.35-0.47 -0.08-0.22-0.16-0.43-0.25-0.62 -0.09-0.19-0.18-0.39-0.26-0.6 -0.08-0.21-0.15-0.42-0.2-0.62 -0.05-0.21-0.08-0.42-0.08-0.64 0-0.44 0.09-0.86 0.28-1.25 0.19-0.39 0.44-0.74 0.77-1.04 0.54-0.52 1.17-0.93 1.89-1.24C249.19 98.13 249.92 97.93 250.65 97.82zM252.85 99.49c-0.35-0.13-0.73-0.19-1.13-0.19 -0.43-0.01-0.85 0.03-1.28 0.13 -0.43 0.1-0.84 0.23-1.23 0.4 -0.36 0.14-0.73 0.34-1.12 0.59 -0.38 0.25-0.66 0.56-0.85 0.92 -0.1 0.19-0.15 0.39-0.15 0.59 0.01 0.2 0.04 0.4 0.1 0.6 0.06 0.2 0.14 0.4 0.24 0.6 0.1 0.2 0.18 0.4 0.26 0.59 0.21 0.05 0.34 0.08 0.39 0.08 0.03 0.01 0.06 0.02 0.1 0.02 0.04 0 0.07 0 0.1 0 0.26 0.03 0.49 0.02 0.7-0.02 0.14 0 0.32-0.03 0.54-0.08 0.34-0.07 0.66-0.15 0.97-0.26 0.31-0.11 0.6-0.23 0.85-0.36 0.3-0.14 0.59-0.3 0.87-0.47 0.29-0.17 0.53-0.34 0.72-0.52 0.13-0.12 0.25-0.24 0.37-0.37 0.06-0.06 0.11-0.11 0.14-0.15 0.06-0.09 0.12-0.16 0.16-0.2 0.04-0.05 0.07-0.1 0.1-0.17 0.05-0.09 0.08-0.16 0.08-0.21 0.01-0.02 0.02-0.06 0.03-0.1 0.01-0.04 0.02-0.07 0.03-0.1v-0.21c-0.01-0.05-0.02-0.09-0.02-0.12s-0.01-0.05-0.02-0.08c-0.04-0.09-0.07-0.16-0.11-0.2 -0.03-0.04-0.07-0.09-0.11-0.15 0.01 0.01 0-0.01-0.05-0.06 -0.04-0.05-0.07-0.09-0.09-0.1l-0.15-0.16c-0.07-0.04-0.14-0.08-0.21-0.13C253.01 99.56 252.93 99.52 252.85 99.49z\"></path>\r\n    <path class=\"logo__letter03\" d=\"M257.81 98.87c0.01-0.25 0.1-0.43 0.27-0.56s0.35-0.18 0.54-0.18c0.2 0 0.36 0.06 0.51 0.19s0.22 0.31 0.21 0.56c0 0.08 0 0.16-0.01 0.24 -0.01 0.08-0.01 0.16-0.01 0.24 0.42-0.21 0.85-0.38 1.31-0.54 0.46-0.15 0.92-0.24 1.38-0.28 0.46-0.04 0.91 0 1.34 0.11 0.44 0.11 0.83 0.32 1.19 0.63 0.18 0.17 0.26 0.35 0.24 0.55 -0.02 0.19-0.1 0.36-0.23 0.49 -0.14 0.14-0.31 0.22-0.51 0.25 -0.21 0.03-0.41-0.03-0.6-0.18 -0.14-0.12-0.3-0.2-0.48-0.25 -0.17-0.05-0.36-0.07-0.56-0.07s-0.4 0.03-0.6 0.07c-0.2 0.04-0.39 0.09-0.57 0.13 -0.69 0.22-1.33 0.51-1.92 0.88 0.03 0.63 0.06 1.27 0.12 1.9 0.05 0.53 0.1 1.08 0.14 1.64 0.04 0.56 0.15 1.1 0.33 1.6 0.08 0.23 0.06 0.43-0.05 0.59 -0.11 0.16-0.26 0.27-0.45 0.32 -0.19 0.05-0.38 0.04-0.58-0.04 -0.2-0.08-0.34-0.23-0.42-0.47 -0.1-0.3-0.18-0.6-0.21-0.91 -0.04-0.31-0.08-0.62-0.12-0.93 -0.02-0.3-0.05-0.6-0.09-0.9 -0.03-0.3-0.06-0.6-0.09-0.9 -0.06-0.7-0.11-1.39-0.13-2.09C257.74 100.27 257.76 99.57 257.81 98.87z\"></path>\r\n    <path class=\"logo__letter03\" d=\"M273.84 95.08c-0.26-0.08-0.42-0.24-0.47-0.5 -0.07-0.18-0.05-0.38 0.06-0.59 0.1-0.21 0.27-0.33 0.48-0.36 1.26-0.19 2.52-0.3 3.78-0.32 1.26-0.02 2.53-0.04 3.8-0.05 0.25 0 0.43 0.08 0.56 0.23 0.13 0.16 0.19 0.33 0.19 0.52s-0.07 0.37-0.19 0.53c-0.13 0.16-0.32 0.24-0.56 0.24 -1.01 0.03-2.03 0.04-3.05 0.04 -1.02 0-2.05 0.05-3.07 0.16 0.03 0.52 0.06 1.03 0.1 1.54 0.04 0.51 0.08 1.02 0.12 1.55 0.98-0.05 1.97-0.12 2.94-0.19 0.98-0.08 1.96-0.09 2.94-0.04 0.25 0.01 0.43 0.11 0.56 0.27 0.13 0.17 0.19 0.35 0.19 0.54 0 0.2-0.07 0.37-0.19 0.53 -0.13 0.16-0.32 0.23-0.56 0.21 -0.97-0.05-1.93-0.04-2.88 0.04 -0.95 0.08-1.91 0.14-2.88 0.19 0.08 0.93 0.15 1.86 0.22 2.79 0.07 0.93 0.12 1.86 0.15 2.79 0.45-0.1 0.91-0.2 1.38-0.3 0.47-0.1 0.93-0.17 1.4-0.23 0.47-0.06 0.93-0.09 1.4-0.09 0.47 0 0.93 0.04 1.4 0.12 0.21 0.04 0.36 0.16 0.46 0.37 0.1 0.21 0.13 0.4 0.08 0.58 -0.06 0.22-0.19 0.38-0.37 0.47 -0.18 0.09-0.38 0.12-0.6 0.08 -0.42-0.08-0.84-0.1-1.26-0.08 -0.43 0.03-0.85 0.07-1.26 0.14 -0.48 0.08-0.96 0.17-1.43 0.27 -0.47 0.1-0.94 0.21-1.41 0.33 -0.22 0.05-0.43 0.01-0.62-0.12 -0.18-0.03-0.34-0.1-0.49-0.21 -0.14-0.12-0.21-0.29-0.21-0.52 -0.02-1.1-0.07-2.19-0.15-3.26 -0.07-1.07-0.15-2.15-0.24-3.24 -0.14-0.14-0.22-0.32-0.24-0.53 -0.02-0.21 0.04-0.4 0.17-0.56C273.97 97.3 273.89 96.2 273.84 95.08z\"></path>\r\n    <path class=\"logo__letter03\" d=\"M286.2 103.96c-0.1-0.34-0.2-0.68-0.28-1.03 -0.08-0.35-0.18-0.69-0.28-1.03 -0.14-0.56-0.36-1.11-0.64-1.67 -0.14-0.28-0.28-0.57-0.43-0.86 -0.14-0.29-0.25-0.59-0.31-0.9 -0.05-0.25-0.01-0.45 0.13-0.61 0.14-0.16 0.29-0.27 0.48-0.32 0.18-0.05 0.36-0.04 0.54 0.04s0.3 0.24 0.35 0.49c0.06 0.31 0.17 0.6 0.32 0.87 0.15 0.27 0.3 0.55 0.44 0.83 0.14 0.3 0.27 0.6 0.37 0.91 0.1 0.31 0.2 0.62 0.29 0.93 0.1 0.34 0.2 0.68 0.28 1.04s0.19 0.7 0.3 1.04c0.04 0.13 0.08 0.26 0.13 0.38 0.05 0.12 0.09 0.25 0.14 0.38 0.13-0.37 0.23-0.7 0.31-0.98 0.08-0.28 0.17-0.55 0.27-0.81 0.14-0.39 0.28-0.77 0.41-1.16 0.13-0.38 0.25-0.77 0.35-1.17 0.1-0.37 0.18-0.75 0.23-1.14 0.05-0.38 0.13-0.76 0.23-1.13 0.06-0.23 0.19-0.39 0.39-0.47 0.19-0.08 0.38-0.09 0.56-0.04 0.18 0.05 0.33 0.16 0.46 0.32 0.12 0.16 0.15 0.36 0.09 0.59 -0.13 0.43-0.22 0.86-0.27 1.29 -0.05 0.44-0.14 0.86-0.27 1.27 -0.12 0.41-0.25 0.83-0.4 1.23 -0.15 0.41-0.29 0.82-0.44 1.23 -0.09 0.28-0.18 0.58-0.27 0.89 -0.09 0.3-0.2 0.6-0.32 0.88 -0.12 0.28-0.28 0.55-0.46 0.79 -0.18 0.25-0.41 0.46-0.68 0.62 -0.25 0.14-0.47 0.16-0.68 0.04 -0.21-0.12-0.36-0.28-0.46-0.5 -0.15-0.38-0.31-0.75-0.45-1.13C286.47 104.71 286.33 104.34 286.2 103.96z\"></path>\r\n    <path class=\"logo__letter03\" d=\"M294.21 99.24c0.25-0.34 0.54-0.63 0.89-0.89 0.34-0.26 0.71-0.46 1.1-0.61 0.39-0.15 0.79-0.23 1.21-0.23 0.41-0.01 0.83 0.07 1.24 0.24 0.4 0.16 0.76 0.37 1.09 0.63 0.32 0.27 0.57 0.61 0.76 1.02 0.14 0.31 0.23 0.65 0.25 1.01 0.03 0.36-0.07 0.69-0.29 0.99 -0.19 0.27-0.43 0.48-0.71 0.62 -0.28 0.14-0.58 0.25-0.89 0.31 -0.32 0.06-0.64 0.1-0.97 0.1 -0.33 0-0.64-0.01-0.94-0.02 -0.34-0.01-0.67-0.04-1-0.08 -0.33-0.04-0.66-0.08-1-0.12 0.1 0.58 0.31 1.1 0.62 1.56 0.31 0.45 0.73 0.8 1.26 1.03 0.14 0.05 0.25 0.09 0.33 0.12 0.04 0.01 0.08 0.02 0.11 0.03 0.03 0.01 0.07 0.01 0.11 0.01 0.1 0.01 0.19 0.02 0.26 0.03 0.07 0.01 0.14 0 0.2-0.01 0.09-0.01 0.15-0.02 0.18-0.03s0.07-0.02 0.11-0.03c0.14-0.04 0.27-0.09 0.38-0.14 0.11-0.05 0.24-0.14 0.4-0.25 0.08-0.06 0.18-0.16 0.31-0.29s0.24-0.25 0.33-0.35c0.13-0.18 0.29-0.3 0.48-0.37 0.19-0.06 0.38-0.04 0.57 0.08 0.17 0.11 0.29 0.26 0.36 0.48 0.07 0.22 0.04 0.41-0.09 0.59 -0.37 0.51-0.82 0.94-1.33 1.29 -0.51 0.36-1.1 0.55-1.76 0.57 -0.53 0.03-1.04-0.07-1.53-0.28 -0.49-0.21-0.92-0.5-1.3-0.86 -0.47-0.45-0.83-0.98-1.11-1.57 -0.27-0.59-0.42-1.2-0.44-1.83 -0.12-0.09-0.2-0.2-0.26-0.34s-0.08-0.28-0.06-0.42c0.02-0.14 0.07-0.28 0.14-0.4 0.08-0.12 0.2-0.2 0.35-0.24C293.69 100.1 293.91 99.65 294.21 99.24zM298.87 99.7c-0.14-0.18-0.36-0.34-0.66-0.49 -0.25-0.1-0.53-0.15-0.86-0.15 -0.33 0-0.61 0.06-0.85 0.17 -0.3 0.14-0.56 0.34-0.8 0.6 -0.23 0.25-0.42 0.53-0.56 0.84 0.31 0.04 0.62 0.08 0.93 0.12 0.31 0.04 0.62 0.06 0.93 0.08 0.17 0 0.34 0 0.51 0 0.17 0 0.34-0.01 0.51-0.02 0.05 0 0.1 0 0.15-0.01 0.05-0.01 0.1-0.01 0.15-0.01 0.12-0.03 0.2-0.04 0.26-0.05 0.06-0.01 0.12-0.02 0.19-0.05 0.05-0.01 0.12-0.03 0.19-0.06 0.06-0.02 0.1-0.04 0.12-0.06 0.01-0.01 0.03-0.02 0.06-0.04l0.06-0.23c-0.02-0.05-0.04-0.1-0.05-0.15 -0.01-0.04-0.02-0.09-0.05-0.13 -0.01-0.04-0.04-0.1-0.09-0.17C298.95 99.82 298.91 99.76 298.87 99.7z\"></path>\r\n    <path class=\"logo__letter03\" d=\"M303.61 98.87c0.01-0.25 0.1-0.43 0.27-0.56s0.35-0.18 0.54-0.18c0.19 0 0.37 0.06 0.52 0.19s0.22 0.31 0.2 0.56c0 0.08 0 0.16-0.01 0.24 -0.01 0.08-0.01 0.16-0.01 0.24 0.41-0.21 0.85-0.38 1.31-0.54 0.46-0.15 0.92-0.24 1.38-0.28 0.46-0.04 0.91 0 1.34 0.11 0.44 0.11 0.83 0.32 1.2 0.63 0.18 0.17 0.26 0.35 0.24 0.55 -0.02 0.19-0.1 0.36-0.23 0.49 -0.13 0.14-0.31 0.22-0.51 0.25s-0.41-0.03-0.6-0.18c-0.14-0.12-0.3-0.2-0.48-0.25 -0.18-0.05-0.36-0.07-0.56-0.07s-0.4 0.03-0.6 0.07c-0.2 0.04-0.39 0.09-0.57 0.13 -0.69 0.22-1.33 0.51-1.92 0.88 0.03 0.63 0.06 1.27 0.11 1.9 0.05 0.53 0.1 1.08 0.14 1.64 0.04 0.56 0.15 1.1 0.33 1.6 0.08 0.23 0.06 0.43-0.05 0.59 -0.11 0.16-0.26 0.27-0.45 0.32 -0.19 0.05-0.38 0.04-0.58-0.04 -0.2-0.08-0.34-0.23-0.42-0.47 -0.1-0.3-0.17-0.6-0.21-0.91 -0.04-0.31-0.08-0.62-0.11-0.93 -0.03-0.3-0.06-0.6-0.09-0.9 -0.03-0.3-0.06-0.6-0.09-0.9 -0.06-0.7-0.11-1.39-0.13-2.09S303.56 99.57 303.61 98.87z\"></path>\r\n    <path class=\"logo__letter03\" d=\"M319.84 98.04c0.18 0.1 0.3 0.26 0.37 0.47 0.07 0.21 0.03 0.4-0.1 0.58 -0.32 0.47-0.57 0.98-0.73 1.53 -0.16 0.56-0.35 1.1-0.55 1.63 -0.22 0.57-0.46 1.12-0.73 1.65 -0.27 0.53-0.55 1.07-0.85 1.61 -0.02 0.07-0.05 0.12-0.09 0.17 -0.03 0.05-0.06 0.1-0.09 0.17 0.05 0.21 0.02 0.39-0.09 0.55 -0.11 0.16-0.25 0.27-0.44 0.34 -0.53 0.91-1.07 1.8-1.6 2.69 -0.54 0.89-1.07 1.78-1.6 2.69 -0.13 0.22-0.29 0.34-0.5 0.37 -0.2 0.03-0.38-0.01-0.55-0.1 -0.17-0.1-0.29-0.24-0.37-0.43 -0.08-0.19-0.05-0.39 0.08-0.61 0.54-0.93 1.09-1.85 1.65-2.77 0.56-0.91 1.11-1.83 1.65-2.77 -0.58-1.05-1.14-2.11-1.67-3.18 -0.53-1.07-1.07-2.13-1.63-3.19 -0.12-0.22-0.13-0.42-0.05-0.61 0.09-0.19 0.21-0.33 0.37-0.43 0.16-0.1 0.34-0.13 0.54-0.11 0.2 0.03 0.36 0.15 0.48 0.37 0.48 0.93 0.95 1.86 1.42 2.79 0.47 0.93 0.95 1.85 1.44 2.77 0.48-0.88 0.91-1.81 1.28-2.78 0.19-0.53 0.38-1.07 0.55-1.62 0.18-0.55 0.43-1.05 0.75-1.51 0.12-0.18 0.27-0.3 0.47-0.36C319.45 97.89 319.64 97.92 319.84 98.04z\"></path>\r\n    <path class=\"logo__letter03\" d=\"M326.93 97.82c0.41-0.05 0.85-0.07 1.3-0.05 0.46 0.02 0.89 0.1 1.3 0.23 0.42 0.14 0.79 0.34 1.13 0.61 0.34 0.27 0.6 0.63 0.78 1.07 0.13 0.31 0.2 0.63 0.2 0.94 0.01 0.32-0.04 0.62-0.14 0.91 -0.1 0.29-0.24 0.57-0.43 0.84 -0.19 0.27-0.4 0.51-0.65 0.73 -0.53 0.48-1.11 0.89-1.75 1.23 -0.63 0.34-1.3 0.6-2 0.78 -0.3 0.08-0.6 0.15-0.92 0.21 -0.32 0.06-0.64 0.09-0.96 0.09s-0.64-0.04-0.95-0.11c-0.31-0.07-0.6-0.19-0.87-0.36 -0.19-0.12-0.31-0.27-0.35-0.47 -0.08-0.22-0.16-0.43-0.25-0.62 -0.09-0.19-0.18-0.39-0.26-0.6 -0.08-0.21-0.15-0.42-0.2-0.62 -0.05-0.21-0.08-0.42-0.08-0.64 0-0.44 0.1-0.86 0.28-1.25 0.19-0.39 0.44-0.74 0.77-1.04 0.55-0.52 1.17-0.93 1.89-1.24C325.47 98.13 326.19 97.93 326.93 97.82zM329.13 99.49c-0.35-0.13-0.73-0.19-1.13-0.19 -0.43-0.01-0.85 0.03-1.28 0.13 -0.43 0.1-0.83 0.23-1.22 0.4 -0.36 0.14-0.73 0.34-1.11 0.59 -0.38 0.25-0.67 0.56-0.85 0.92 -0.1 0.19-0.15 0.39-0.15 0.59 0.01 0.2 0.04 0.4 0.1 0.6 0.06 0.2 0.14 0.4 0.23 0.6 0.1 0.2 0.19 0.4 0.26 0.59 0.21 0.05 0.34 0.08 0.39 0.08 0.03 0.01 0.06 0.02 0.1 0.02 0.04 0 0.07 0 0.1 0 0.26 0.03 0.49 0.02 0.7-0.02 0.14 0 0.33-0.03 0.54-0.08 0.34-0.07 0.66-0.15 0.97-0.26 0.31-0.11 0.6-0.23 0.86-0.36 0.3-0.14 0.59-0.3 0.87-0.47 0.28-0.17 0.52-0.34 0.72-0.52 0.13-0.12 0.25-0.24 0.37-0.37 0.07-0.06 0.11-0.11 0.14-0.15 0.07-0.09 0.12-0.16 0.16-0.2 0.04-0.05 0.07-0.1 0.1-0.17 0.05-0.09 0.08-0.16 0.08-0.21 0.01-0.02 0.02-0.06 0.03-0.1 0.01-0.04 0.02-0.07 0.03-0.1v-0.21c-0.01-0.05-0.02-0.09-0.02-0.12s-0.01-0.05-0.02-0.08c-0.04-0.09-0.07-0.16-0.1-0.2 -0.03-0.04-0.07-0.09-0.11-0.15 0.01 0.01 0-0.01-0.05-0.06 -0.05-0.05-0.07-0.09-0.09-0.1l-0.15-0.16c-0.06-0.04-0.14-0.08-0.21-0.13C329.28 99.56 329.2 99.52 329.13 99.49z\"></path>\r\n    <path class=\"logo__letter03\" d=\"M333.95 104.91c0-0.56 0.04-1.12 0.12-1.69 0.09-0.69 0.18-1.37 0.27-2.05 0.09-0.68 0.13-1.37 0.12-2.07 0-0.25 0.08-0.43 0.23-0.56 0.16-0.13 0.33-0.19 0.53-0.19 0.19 0 0.38 0.06 0.54 0.19 0.17 0.13 0.25 0.32 0.25 0.56 0.51-0.04 0.98-0.06 1.44-0.06 0.52 0.01 0.96 0.16 1.32 0.45 0.36 0.28 0.64 0.67 0.82 1.15 0.16 0.44 0.25 0.89 0.27 1.36 0.03 0.47 0.05 0.93 0.06 1.4 0.01 0.66 0.03 1.32 0.06 1.97 0.02 0.65 0.04 1.31 0.04 1.97 0 0.26-0.08 0.45-0.24 0.57 -0.16 0.12-0.34 0.18-0.52 0.18 -0.19 0-0.36-0.06-0.52-0.18 -0.16-0.12-0.24-0.31-0.24-0.57 0-0.62-0.01-1.23-0.03-1.83 -0.02-0.6-0.04-1.2-0.07-1.83 -0.02-0.34-0.04-0.68-0.03-1.04 0.01-0.35-0.02-0.68-0.09-0.98 -0.04-0.18-0.08-0.34-0.12-0.48 -0.04-0.13-0.11-0.27-0.21-0.4 -0.02-0.05-0.08-0.1-0.16-0.14 -0.08-0.04-0.16-0.06-0.22-0.06 -0.19 0-0.38 0.01-0.54 0.04 -0.17 0.03-0.34 0.06-0.53 0.12 -0.08 0.03-0.15 0.05-0.23 0.08 -0.08 0.03-0.15 0.06-0.21 0.1 -0.13 0.47-0.22 0.91-0.28 1.33 -0.06 0.42-0.11 0.84-0.16 1.27 -0.04 0.31-0.06 0.63-0.07 0.94 -0.01 0.32-0.02 0.63-0.04 0.94 -0.02 0.31-0.06 0.62-0.11 0.93 -0.06 0.31-0.16 0.61-0.3 0.9 -0.12 0.22-0.27 0.35-0.47 0.38 -0.2 0.03-0.37 0-0.53-0.1 -0.16-0.1-0.29-0.24-0.37-0.44 -0.08-0.19-0.07-0.4 0.03-0.62 0.12-0.23 0.18-0.49 0.19-0.76C333.92 105.44 333.94 105.17 333.95 104.91z\"></path>\r\n    <path class=\"logo__letter03\" d=\"M343.47 99.24c0.25-0.34 0.54-0.63 0.88-0.89 0.34-0.26 0.71-0.46 1.1-0.61 0.39-0.15 0.79-0.23 1.2-0.23 0.41-0.01 0.83 0.07 1.24 0.24 0.4 0.16 0.77 0.37 1.09 0.63 0.32 0.27 0.57 0.61 0.76 1.02 0.14 0.31 0.23 0.65 0.25 1.01 0.03 0.36-0.07 0.69-0.29 0.99 -0.19 0.27-0.43 0.48-0.71 0.62 -0.28 0.14-0.58 0.25-0.89 0.31s-0.64 0.1-0.97 0.1c-0.33 0-0.65-0.01-0.94-0.02 -0.34-0.01-0.67-0.04-1-0.08 -0.33-0.04-0.66-0.08-1-0.12 0.11 0.58 0.31 1.1 0.62 1.56 0.31 0.45 0.73 0.8 1.26 1.03 0.14 0.05 0.25 0.09 0.33 0.12 0.04 0.01 0.07 0.02 0.11 0.03s0.07 0.01 0.11 0.01c0.1 0.01 0.19 0.02 0.26 0.03 0.07 0.01 0.14 0 0.2-0.01 0.09-0.01 0.15-0.02 0.18-0.03 0.03-0.01 0.07-0.02 0.11-0.03 0.14-0.04 0.27-0.09 0.38-0.14 0.11-0.05 0.24-0.14 0.4-0.25 0.08-0.06 0.18-0.16 0.31-0.29 0.13-0.13 0.24-0.25 0.33-0.35 0.13-0.18 0.29-0.3 0.48-0.37 0.19-0.06 0.38-0.04 0.57 0.08 0.17 0.11 0.29 0.26 0.36 0.48 0.07 0.22 0.04 0.41-0.09 0.59 -0.38 0.51-0.82 0.94-1.33 1.29 -0.51 0.36-1.1 0.55-1.76 0.57 -0.53 0.03-1.04-0.07-1.53-0.28 -0.49-0.21-0.93-0.5-1.3-0.86 -0.47-0.45-0.83-0.98-1.1-1.57 -0.27-0.59-0.42-1.2-0.45-1.83 -0.12-0.09-0.2-0.2-0.26-0.34 -0.06-0.14-0.08-0.28-0.06-0.42 0.02-0.14 0.07-0.28 0.15-0.4 0.08-0.12 0.19-0.2 0.35-0.24C342.95 100.1 343.17 99.65 343.47 99.24zM348.13 99.7c-0.14-0.18-0.36-0.34-0.66-0.49 -0.24-0.1-0.53-0.15-0.86-0.15 -0.33 0-0.61 0.06-0.85 0.17 -0.3 0.14-0.56 0.34-0.8 0.6 -0.23 0.25-0.42 0.53-0.56 0.84 0.31 0.04 0.62 0.08 0.93 0.12 0.31 0.04 0.62 0.06 0.93 0.08 0.17 0 0.34 0 0.51 0 0.17 0 0.34-0.01 0.51-0.02 0.05 0 0.1 0 0.15-0.01 0.04-0.01 0.09-0.01 0.14-0.01 0.12-0.03 0.21-0.04 0.26-0.05 0.06-0.01 0.12-0.02 0.18-0.05 0.05-0.01 0.12-0.03 0.19-0.06 0.07-0.02 0.1-0.04 0.12-0.06 0.01-0.01 0.03-0.02 0.06-0.04l0.06-0.23c-0.03-0.05-0.04-0.1-0.05-0.15 -0.01-0.04-0.02-0.09-0.05-0.13 -0.01-0.04-0.04-0.1-0.09-0.17C348.21 99.82 348.17 99.76 348.13 99.7z\"></path>\r\n</svg>\r\n<span class=\"logo__label\">SoCreate - Screenwriting for Everyone</span>"

/***/ }),

/***/ "../../../../../src/app/shared/socreate-logo/socreate-logo.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".logo {\n  fill: #666;\n  max-width: 100%;\n  opacity: 0.3; }\n  .logo__letter02 {\n    fill: #fff; }\n  .logo__label {\n    border: 0 !important;\n    clip: rect(1px, 1px, 1px, 1px);\n    height: 1px !important;\n    overflow: hidden;\n    padding: 0 !important;\n    position: absolute !important;\n    width: 1px !important; }\n  .logo:hover {\n    opacity: 1; }\n    .logo:hover .logo__symbol {\n      fill: #60c126; }\n    .logo:hover .logo__letter01 {\n      fill: #2F3E4E; }\n    .logo:hover .logo__letter03 {\n      fill: #60c126; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/socreate-logo/socreate-logo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SoCreateLogoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SoCreateLogoComponent = (function () {
    function SoCreateLogoComponent() {
    }
    SoCreateLogoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Component */])({
            selector: 'socreate-logo',
            template: __webpack_require__("../../../../../src/app/shared/socreate-logo/socreate-logo.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/socreate-logo/socreate-logo.component.scss")]
        }), 
        __metadata('design:paramtypes', [])
    ], SoCreateLogoComponent);
    return SoCreateLogoComponent;
}());
//# sourceMappingURL=C:/Code/Github/angularplayground.it/src/socreate-logo.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=C:/Code/Github/angularplayground.it/src/environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__("../../../../../src/polyfills.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_27" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=C:/Code/Github/angularplayground.it/src/main.js.map

/***/ }),

/***/ "../../../../../src/polyfills.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__("../../../../core-js/es6/symbol.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__("../../../../core-js/es6/object.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__("../../../../core-js/es6/function.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__("../../../../core-js/es6/parse-int.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__("../../../../core-js/es6/parse-float.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__("../../../../core-js/es6/number.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__("../../../../core-js/es6/math.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__("../../../../core-js/es6/string.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__("../../../../core-js/es6/date.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__("../../../../core-js/es6/array.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__("../../../../core-js/es6/regexp.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__("../../../../core-js/es6/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__("../../../../core-js/es6/set.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__("../../../../core-js/es6/reflect.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__("../../../../core-js/es7/reflect.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__("../../../../zone.js/dist/zone.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















//# sourceMappingURL=C:/Code/Github/angularplayground.it/src/polyfills.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map