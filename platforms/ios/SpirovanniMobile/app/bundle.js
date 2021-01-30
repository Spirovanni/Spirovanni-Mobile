require("./runtime.js");require("./vendor.js");module.exports =
(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["bundle"],{

/***/ "../$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./app.css":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {global.registerModule("~@nativescript/theme/css/core.css", () => __webpack_require__("../node_modules/@nativescript/webpack/helpers/css2json-loader.js?useForImports!../node_modules/@nativescript/theme/css/core.css"));
global.registerModule("@nativescript/theme/css/core.css", () => __webpack_require__("../node_modules/@nativescript/webpack/helpers/css2json-loader.js?useForImports!../node_modules/@nativescript/theme/css/core.css"));
global.registerModule("~@nativescript/theme/css/default.css", () => __webpack_require__("../node_modules/@nativescript/webpack/helpers/css2json-loader.js?useForImports!../node_modules/@nativescript/theme/css/default.css"));
global.registerModule("@nativescript/theme/css/default.css", () => __webpack_require__("../node_modules/@nativescript/webpack/helpers/css2json-loader.js?useForImports!../node_modules/@nativescript/theme/css/default.css"));module.exports = {"type":"stylesheet","stylesheet":{"rules":[{"type":"comment","comment":"\nIn NativeScript, the app.css file is where you place CSS rules that\nyou would like to apply to your entire application. Check out\nhttp://docs.nativescript.org/ui/styling for a full list of the CSS\nselectors and properties you can use to style UI components.\n\n/*\nIn many cases you may want to use the NativeScript core theme instead\nof writing your own CSS rules. You can learn more about the \nNativeScript core theme at https://github.com/nativescript/theme\nThe imported CSS rules must precede all other types of rules.\n"},{"type":"import","import":"\"~@nativescript/theme/css/core.css\""},{"type":"import","import":"\"~@nativescript/theme/css/default.css\""},{"type":"comment","comment":" Place any CSS rules you want to apply on both iOS and Android here.\nThis is where the vast majority of your CSS code goes. "},{"type":"comment","comment":"\nThe following CSS rule changes the font size of all Buttons that have the\n\"-primary\" class modifier.\n"},{"type":"rule","selectors":["Button.-primary"],"declarations":[{"type":"declaration","property":"font-size","value":"18"}]}],"parsingErrors":[]}};;
    if (true) {
        module.hot.accept();
        module.hot.dispose(() => {
            global.hmrRefresh({ type: 'style', path: './app.css' });
        })
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./app/@core/services/api.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




// import { CookieService } from 'ngx-cookie-service';
class ApiService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.baseUrl = 'http://127.0.0.1:8000/';
        this.baseCardUrl = `${this.baseUrl}api/cards/`;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json'
        });
    }
    getCards() {
        return this.httpClient.get(this.baseCardUrl, { headers: this.getAuthHeaders() });
    }
    getCard(id) {
        return this.httpClient.get(`${this.baseCardUrl}${id}/`, { headers: this.getAuthHeaders() });
    }
    createCard(title, description) {
        const body = JSON.stringify({ title, description });
        return this.httpClient.post(`${this.baseCardUrl}`, body, { headers: this.getAuthHeaders() });
    }
    updateCard(id, title, description) {
        const body = JSON.stringify({ title, description });
        return this.httpClient.put(`${this.baseCardUrl}${id}/`, body, { headers: this.getAuthHeaders() });
    }
    deleteCard(id) {
        return this.httpClient.delete(`${this.baseCardUrl}${id}/`, { headers: this.getAuthHeaders() });
    }
    rateCard(rate, cardId) {
        const body = JSON.stringify({ stars: rate });
        return this.httpClient.post(`${this.baseCardUrl}${cardId}/rate_card/`, body, { headers: this.getAuthHeaders() });
    }
    loginUser(authData) {
        const body = JSON.stringify(authData);
        return this.httpClient.post(`${this.baseUrl}auth/`, body, { headers: this.getAuthHeaders() });
    }
    registerUser(authData) {
        const body = JSON.stringify(authData);
        return this.httpClient.post(`${this.baseUrl}api/users/`, body, { headers: this.getAuthHeaders() });
    }
    getAuthHeaders() {
        const token = '069bbc38f30919f10c0635ac26d795db437bd4ad';
        return new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json',
            Authorization: `Token ${token}`
        });
    }
}
ApiService.ɵfac = function ApiService_Factory(t) { return new (t || ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ApiService, factory: ApiService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApiService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _nativescript_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@nativescript/angular/__ivy_ngcc__/fesm2015/nativescript-angular.js");
/* harmony import */ var _item_items_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/item/items.component.ts");
/* harmony import */ var _item_item_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/item/item-detail.component.ts");






const routes = [
    { path: "", redirectTo: "/items", pathMatch: "full" },
    { path: "items", component: _item_items_component__WEBPACK_IMPORTED_MODULE_2__["ItemsComponent"] },
    { path: "item/:id", component: _item_item_detail_component__WEBPACK_IMPORTED_MODULE_3__["ItemDetailComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_nativescript_angular__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"].forRoot(routes)], _nativescript_angular__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_nativescript_angular__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"]], exports: [_nativescript_angular__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_nativescript_angular__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"].forRoot(routes)],
                exports: [_nativescript_angular__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _nativescript_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@nativescript/angular/__ivy_ngcc__/fesm2015/nativescript-angular.js");



class AppComponent {
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["ns-app"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "GridLayout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "page-router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_nativescript_angular__WEBPACK_IMPORTED_MODULE_1__["PageRouterOutlet"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "ns-app",
                templateUrl: "./app.component.html"
            }]
    }], null, null); })();


/***/ }),

/***/ "./app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _nativescript_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@nativescript/angular/__ivy_ngcc__/fesm2015/nativescript-angular.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/app.component.ts");
/* harmony import */ var _item_items_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./app/item/items.component.ts");
/* harmony import */ var _item_item_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./app/item/item-detail.component.ts");







class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _nativescript_angular__WEBPACK_IMPORTED_MODULE_1__["NativeScriptModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _item_items_component__WEBPACK_IMPORTED_MODULE_4__["ItemsComponent"],
        _item_item_detail_component__WEBPACK_IMPORTED_MODULE_5__["ItemDetailComponent"]], imports: [_nativescript_angular__WEBPACK_IMPORTED_MODULE_1__["NativeScriptModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                bootstrap: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
                ],
                imports: [
                    _nativescript_angular__WEBPACK_IMPORTED_MODULE_1__["NativeScriptModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
                ],
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _item_items_component__WEBPACK_IMPORTED_MODULE_4__["ItemsComponent"],
                    _item_item_detail_component__WEBPACK_IMPORTED_MODULE_5__["ItemDetailComponent"]
                ],
                providers: [],
                schemas: [
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["NO_ERRORS_SCHEMA"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./app/item/item-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemDetailComponent", function() { return ItemDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _core_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/@core/services/api.service.ts");
/* harmony import */ var _nativescript_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/@nativescript/angular/__ivy_ngcc__/fesm2015/nativescript-angular.js");







class ItemDetailComponent {
    constructor(apiService, route) {
        this.apiService = apiService;
        this.route = route;
    }
    ngOnInit() {
        const id = +this.route.snapshot.params.id;
        // this.item = this.apiService.getItem(id);
    }
}
ItemDetailComponent.ɵfac = function ItemDetailComponent_Factory(t) { return new (t || ItemDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
ItemDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ItemDetailComponent, selectors: [["ns-details"]], decls: 6, vars: 3, consts: [["title", "Details"], ["flexDirection", "column"], [1, "m-15"], [1, "h2", 3, "text"], [1, "h4", "m-15", 3, "text"]], template: function ItemDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ActionBar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "FlexboxLayout", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "FlexboxLayout", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "Label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "Label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "Label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("text", ctx.item.id + ". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("text", ctx.item.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("text", ctx.item.role);
    } }, directives: [_nativescript_angular__WEBPACK_IMPORTED_MODULE_3__["ActionBarComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ItemDetailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "ns-details",
                templateUrl: "./item-detail.component.html",
            }]
    }], function () { return [{ type: _core_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./app/item/items.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemsComponent", function() { return ItemsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _core_services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./app/@core/services/api.service.ts");
/* harmony import */ var _nativescript_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/@nativescript/angular/__ivy_ngcc__/fesm2015/nativescript-angular.js");





const _c0 = function (a1) { return ["/item", a1]; };
function ItemsComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "StackLayout");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "Label", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.item;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nsRouterLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, item_r1.id))("text", item_r1.name);
} }
class ItemsComponent {
    constructor(apiService) {
        this.apiService = apiService;
    }
    ngOnInit() {
        // this.items = this.itemService.getItems();
    }
}
ItemsComponent.ɵfac = function ItemsComponent_Factory(t) { return new (t || ItemsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"])); };
ItemsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ItemsComponent, selectors: [["ns-items"]], decls: 4, vars: 1, consts: [["title", "My App"], [3, "items"], [3, "nsRouterLink", "text"]], template: function ItemsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ActionBar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "GridLayout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ListView", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ItemsComponent_ng_template_3_Template, 2, 4, "ng-template");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx.items);
    } }, directives: [_nativescript_angular__WEBPACK_IMPORTED_MODULE_2__["ActionBarComponent"], _nativescript_angular__WEBPACK_IMPORTED_MODULE_2__["ListViewComponent"], _nativescript_angular__WEBPACK_IMPORTED_MODULE_2__["NSRouterLink"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ItemsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "ns-items",
                templateUrl: "./items.component.html"
            }]
    }], function () { return [{ type: _core_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"] }]; }, null); })();


/***/ }),

/***/ "./main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var _nativescript_core_bundle_entry_points__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@nativescript/core/bundle-entry-points.js");
/* harmony import */ var _nativescript_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@nativescript/angular/__ivy_ngcc__/fesm2015/nativescript-angular.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/app.module.ts");

            __webpack_require__("../node_modules/@nativescript/webpack/helpers/load-application-css-angular.js")();
            
            
        if (true) {
            const hmrUpdate = __webpack_require__("../node_modules/@nativescript/webpack/hmr/index.js").hmrUpdate;
            global.__coreModulesLiveSync = global.__onLiveSync;

            global.__onLiveSync = function () {
                // handle hot updated on LiveSync
                hmrUpdate();
            };

            global.hmrRefresh = function({ type, path } = {}) {
                // the hot updates are applied, ask the modules to apply the changes
                setTimeout(() => {
                    global.__coreModulesLiveSync({ type, path });
                });
            };

            // handle hot updated on initial app start
            hmrUpdate();
        }
        
            
        
        

var options_Generated = {};

if (true) {
    options_Generated = {
        hmrOptions: {
            moduleTypeFactory: function () { return __webpack_require__("./app/app.module.ts").AppModule; },
            livesyncCallback: function (platformReboot) { setTimeout(platformReboot, 0); }
        }
    };
}

if (true) {
    module["hot"].accept(["./app/app.module.ts"], function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/app.module.ts");
(function () {
        global["hmrRefresh"]({});
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this));
}
// A traditional NativeScript application starts by initializing global objects,
// setting up global CSS rules, creating, and navigating to the main page.
// Angular applications need to take care of their own initialization:
// modules, components, directives, routes, DI providers.
// A NativeScript Angular app needs to make both paradigms work together,
// so we provide a wrapper platform object, platformNativeScriptDynamic,
// that sets up a NativeScript application and can bootstrap the Angular framework.
_nativescript_angular__WEBPACK_IMPORTED_MODULE_1__["platformNativeScriptDynamic"](Object.assign({}, options_Generated)).bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);

    
        
        
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "~/package.json":
/***/ (function(module, exports) {

module.exports = require("~/package.json");

/***/ })

},[["./main.ts","runtime","vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vJF9sYXp5X3JvdXRlX3Jlc291cmNlIGxhenkgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vLi9hcHAuY3NzIiwid2VicGFjazovLy8uL2FwcC9AY29yZS9zZXJ2aWNlcy9hcGkuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9hcHAvYXBwLXJvdXRpbmcubW9kdWxlLnRzIiwid2VicGFjazovLy8uL2FwcC9hcHAuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FwcC9hcHAuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL2FwcC5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2l0ZW0vaXRlbS1kZXRhaWwuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FwcC9pdGVtL2l0ZW0tZGV0YWlsLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC9pdGVtL2l0ZW1zLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvaXRlbS9pdGVtcy5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9tYWluLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcIn4vcGFja2FnZS5qc29uXCIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQSw0Q0FBNEMsV0FBVztBQUN2RDtBQUNBO0FBQ0EseUU7Ozs7Ozs7QUNaQSwrR0FBaUUsbUJBQU8sQ0FBQyxpSUFBK0Y7QUFDeEssZ0VBQWdFLG1CQUFPLENBQUMsaUlBQStGO0FBQ3ZLLG9FQUFvRSxtQkFBTyxDQUFDLG9JQUFrRztBQUM5SyxtRUFBbUUsbUJBQU8sQ0FBQyxvSUFBa0csR0FBRyxrQkFBa0Isa0NBQWtDLFVBQVUsa2pCQUFrakIsRUFBRSxpRUFBaUUsRUFBRSxvRUFBb0UsRUFBRSwySkFBMkosRUFBRSx5SUFBeUksRUFBRSwrREFBK0QseURBQXlE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QXlCOzs7Ozs7Ozs7Ozs7Ozs7OztBQUU3QyxjQUFnRjtBQUNOO0FBQzFFLHNEQUFzRTtBQUN0RSx3QkFBeUQ7QUFDekQsU0FBeUU7QUFDekUsUUFBd0U7QUFDeEUsWUFBbUY7QUFDbkYsUUFBeUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1p6RCwyQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiB3ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQocmVxKSB7XG5cdC8vIEhlcmUgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigpIGlzIHVzZWQgaW5zdGVhZCBvZiBuZXcgUHJvbWlzZSgpIHRvIHByZXZlbnRcblx0Ly8gdW5jYXVnaHQgZXhjZXB0aW9uIHBvcHBpbmcgdXAgaW4gZGV2dG9vbHNcblx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oZnVuY3Rpb24oKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9KTtcbn1cbndlYnBhY2tFbXB0eUFzeW5jQ29udGV4dC5rZXlzID0gZnVuY3Rpb24oKSB7IHJldHVybiBbXTsgfTtcbndlYnBhY2tFbXB0eUFzeW5jQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0VtcHR5QXN5bmNDb250ZXh0O1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQ7XG53ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQuaWQgPSBcIi4uLyQkX2xhenlfcm91dGVfcmVzb3VyY2UgbGF6eSByZWN1cnNpdmVcIjsiLCJnbG9iYWwucmVnaXN0ZXJNb2R1bGUoXCJ+QG5hdGl2ZXNjcmlwdC90aGVtZS9jc3MvY29yZS5jc3NcIiwgKCkgPT4gcmVxdWlyZShcIiFAbmF0aXZlc2NyaXB0L3dlYnBhY2svaGVscGVycy9jc3MyanNvbi1sb2FkZXI/dXNlRm9ySW1wb3J0cyFAbmF0aXZlc2NyaXB0L3RoZW1lL2Nzcy9jb3JlLmNzc1wiKSk7XG5nbG9iYWwucmVnaXN0ZXJNb2R1bGUoXCJAbmF0aXZlc2NyaXB0L3RoZW1lL2Nzcy9jb3JlLmNzc1wiLCAoKSA9PiByZXF1aXJlKFwiIUBuYXRpdmVzY3JpcHQvd2VicGFjay9oZWxwZXJzL2NzczJqc29uLWxvYWRlcj91c2VGb3JJbXBvcnRzIUBuYXRpdmVzY3JpcHQvdGhlbWUvY3NzL2NvcmUuY3NzXCIpKTtcbmdsb2JhbC5yZWdpc3Rlck1vZHVsZShcIn5AbmF0aXZlc2NyaXB0L3RoZW1lL2Nzcy9kZWZhdWx0LmNzc1wiLCAoKSA9PiByZXF1aXJlKFwiIUBuYXRpdmVzY3JpcHQvd2VicGFjay9oZWxwZXJzL2NzczJqc29uLWxvYWRlcj91c2VGb3JJbXBvcnRzIUBuYXRpdmVzY3JpcHQvdGhlbWUvY3NzL2RlZmF1bHQuY3NzXCIpKTtcbmdsb2JhbC5yZWdpc3Rlck1vZHVsZShcIkBuYXRpdmVzY3JpcHQvdGhlbWUvY3NzL2RlZmF1bHQuY3NzXCIsICgpID0+IHJlcXVpcmUoXCIhQG5hdGl2ZXNjcmlwdC93ZWJwYWNrL2hlbHBlcnMvY3NzMmpzb24tbG9hZGVyP3VzZUZvckltcG9ydHMhQG5hdGl2ZXNjcmlwdC90aGVtZS9jc3MvZGVmYXVsdC5jc3NcIikpO21vZHVsZS5leHBvcnRzID0ge1widHlwZVwiOlwic3R5bGVzaGVldFwiLFwic3R5bGVzaGVldFwiOntcInJ1bGVzXCI6W3tcInR5cGVcIjpcImNvbW1lbnRcIixcImNvbW1lbnRcIjpcIlxcbkluIE5hdGl2ZVNjcmlwdCwgdGhlIGFwcC5jc3MgZmlsZSBpcyB3aGVyZSB5b3UgcGxhY2UgQ1NTIHJ1bGVzIHRoYXRcXG55b3Ugd291bGQgbGlrZSB0byBhcHBseSB0byB5b3VyIGVudGlyZSBhcHBsaWNhdGlvbi4gQ2hlY2sgb3V0XFxuaHR0cDovL2RvY3MubmF0aXZlc2NyaXB0Lm9yZy91aS9zdHlsaW5nIGZvciBhIGZ1bGwgbGlzdCBvZiB0aGUgQ1NTXFxuc2VsZWN0b3JzIGFuZCBwcm9wZXJ0aWVzIHlvdSBjYW4gdXNlIHRvIHN0eWxlIFVJIGNvbXBvbmVudHMuXFxuXFxuLypcXG5JbiBtYW55IGNhc2VzIHlvdSBtYXkgd2FudCB0byB1c2UgdGhlIE5hdGl2ZVNjcmlwdCBjb3JlIHRoZW1lIGluc3RlYWRcXG5vZiB3cml0aW5nIHlvdXIgb3duIENTUyBydWxlcy4gWW91IGNhbiBsZWFybiBtb3JlIGFib3V0IHRoZSBcXG5OYXRpdmVTY3JpcHQgY29yZSB0aGVtZSBhdCBodHRwczovL2dpdGh1Yi5jb20vbmF0aXZlc2NyaXB0L3RoZW1lXFxuVGhlIGltcG9ydGVkIENTUyBydWxlcyBtdXN0IHByZWNlZGUgYWxsIG90aGVyIHR5cGVzIG9mIHJ1bGVzLlxcblwifSx7XCJ0eXBlXCI6XCJpbXBvcnRcIixcImltcG9ydFwiOlwiXFxcIn5AbmF0aXZlc2NyaXB0L3RoZW1lL2Nzcy9jb3JlLmNzc1xcXCJcIn0se1widHlwZVwiOlwiaW1wb3J0XCIsXCJpbXBvcnRcIjpcIlxcXCJ+QG5hdGl2ZXNjcmlwdC90aGVtZS9jc3MvZGVmYXVsdC5jc3NcXFwiXCJ9LHtcInR5cGVcIjpcImNvbW1lbnRcIixcImNvbW1lbnRcIjpcIiBQbGFjZSBhbnkgQ1NTIHJ1bGVzIHlvdSB3YW50IHRvIGFwcGx5IG9uIGJvdGggaU9TIGFuZCBBbmRyb2lkIGhlcmUuXFxuVGhpcyBpcyB3aGVyZSB0aGUgdmFzdCBtYWpvcml0eSBvZiB5b3VyIENTUyBjb2RlIGdvZXMuIFwifSx7XCJ0eXBlXCI6XCJjb21tZW50XCIsXCJjb21tZW50XCI6XCJcXG5UaGUgZm9sbG93aW5nIENTUyBydWxlIGNoYW5nZXMgdGhlIGZvbnQgc2l6ZSBvZiBhbGwgQnV0dG9ucyB0aGF0IGhhdmUgdGhlXFxuXFxcIi1wcmltYXJ5XFxcIiBjbGFzcyBtb2RpZmllci5cXG5cIn0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiQnV0dG9uLi1wcmltYXJ5XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZm9udC1zaXplXCIsXCJ2YWx1ZVwiOlwiMThcIn1dfV0sXCJwYXJzaW5nRXJyb3JzXCI6W119fTs7XG4gICAgaWYgKG1vZHVsZS5ob3QpIHtcbiAgICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogJ3N0eWxlJywgcGF0aDogJy4vYXBwLmNzcycgfSk7XG4gICAgICAgIH0pXG4gICAgfVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBDYXJkIH0gZnJvbSAnLi4vbW9kZWxzL0NhcmQnO1xuLy8gaW1wb3J0IHsgQ29va2llU2VydmljZSB9IGZyb20gJ25neC1jb29raWUtc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEFwaVNlcnZpY2Uge1xuICBiYXNlVXJsID0gJ2h0dHA6Ly8xMjcuMC4wLjE6ODAwMC8nO1xuICBiYXNlQ2FyZFVybCA9IGAke3RoaXMuYmFzZVVybH1hcGkvY2FyZHMvYDtcbiAgaGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICB9KTtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBodHRwQ2xpZW50OiBIdHRwQ2xpZW50LFxuICAgIC8vIHByaXZhdGUgY29va2llU2VydmljZTogQ29va2llU2VydmljZVxuICApIHsgfVxuICBnZXRDYXJkcygpIHtcbiAgICByZXR1cm4gdGhpcy5odHRwQ2xpZW50LmdldDxDYXJkW10+KHRoaXMuYmFzZUNhcmRVcmwsIHtoZWFkZXJzOiB0aGlzLmdldEF1dGhIZWFkZXJzKCl9KTtcbiAgfVxuICBnZXRDYXJkKGlkOiBudW1iZXIpIHtcbiAgICByZXR1cm4gdGhpcy5odHRwQ2xpZW50LmdldDxDYXJkPihgJHt0aGlzLmJhc2VDYXJkVXJsfSR7aWR9L2AsIHtoZWFkZXJzOiB0aGlzLmdldEF1dGhIZWFkZXJzKCl9KTtcbiAgfVxuICBjcmVhdGVDYXJkKHRpdGxlOiBzdHJpbmcsIGRlc2NyaXB0aW9uOiBzdHJpbmcpIHtcbiAgICBjb25zdCBib2R5ID0gSlNPTi5zdHJpbmdpZnkoe3RpdGxlLCBkZXNjcmlwdGlvbn0pO1xuICAgIHJldHVybiB0aGlzLmh0dHBDbGllbnQucG9zdChgJHt0aGlzLmJhc2VDYXJkVXJsfWAsIGJvZHksIHtoZWFkZXJzOiB0aGlzLmdldEF1dGhIZWFkZXJzKCl9KTtcbiAgfVxuICB1cGRhdGVDYXJkKGlkOiBudW1iZXIsIHRpdGxlOiBzdHJpbmcsIGRlc2NyaXB0aW9uOiBzdHJpbmcpIHtcbiAgICBjb25zdCBib2R5ID0gSlNPTi5zdHJpbmdpZnkoe3RpdGxlLCBkZXNjcmlwdGlvbn0pO1xuICAgIHJldHVybiB0aGlzLmh0dHBDbGllbnQucHV0KGAke3RoaXMuYmFzZUNhcmRVcmx9JHtpZH0vYCwgYm9keSwge2hlYWRlcnM6IHRoaXMuZ2V0QXV0aEhlYWRlcnMoKX0pO1xuICB9XG4gIGRlbGV0ZUNhcmQoaWQ6IG51bWJlcikge1xuICAgIHJldHVybiB0aGlzLmh0dHBDbGllbnQuZGVsZXRlKGAke3RoaXMuYmFzZUNhcmRVcmx9JHtpZH0vYCwge2hlYWRlcnM6IHRoaXMuZ2V0QXV0aEhlYWRlcnMoKX0pO1xuICB9XG4gIHJhdGVDYXJkKHJhdGU6IG51bWJlciwgY2FyZElkOiBudW1iZXIpIHtcbiAgICBjb25zdCBib2R5ID0gSlNPTi5zdHJpbmdpZnkoe3N0YXJzOiByYXRlfSk7XG4gICAgcmV0dXJuIHRoaXMuaHR0cENsaWVudC5wb3N0KGAke3RoaXMuYmFzZUNhcmRVcmx9JHtjYXJkSWR9L3JhdGVfY2FyZC9gLCBib2R5LCB7aGVhZGVyczogdGhpcy5nZXRBdXRoSGVhZGVycygpfSk7XG4gIH1cbiAgbG9naW5Vc2VyKGF1dGhEYXRhKSB7XG4gICAgY29uc3QgYm9keSA9IEpTT04uc3RyaW5naWZ5KGF1dGhEYXRhKTtcbiAgICByZXR1cm4gdGhpcy5odHRwQ2xpZW50LnBvc3QoYCR7dGhpcy5iYXNlVXJsfWF1dGgvYCwgYm9keSwge2hlYWRlcnM6IHRoaXMuZ2V0QXV0aEhlYWRlcnMoKX0pO1xuICB9XG4gIHJlZ2lzdGVyVXNlcihhdXRoRGF0YSkge1xuICAgIGNvbnN0IGJvZHkgPSBKU09OLnN0cmluZ2lmeShhdXRoRGF0YSk7XG4gICAgcmV0dXJuIHRoaXMuaHR0cENsaWVudC5wb3N0KGAke3RoaXMuYmFzZVVybH1hcGkvdXNlcnMvYCwgYm9keSwge2hlYWRlcnM6IHRoaXMuZ2V0QXV0aEhlYWRlcnMoKX0pO1xuICB9XG4gIGdldEF1dGhIZWFkZXJzKCkge1xuICAgIGNvbnN0IHRva2VuID0gJzA2OWJiYzM4ZjMwOTE5ZjEwYzA2MzVhYzI2ZDc5NWRiNDM3YmQ0YWQnO1xuICAgIHJldHVybiBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgIEF1dGhvcml6YXRpb246IGBUb2tlbiAke3Rva2VufWBcbiAgICB9KTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVzIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSBcIkBuYXRpdmVzY3JpcHQvYW5ndWxhclwiO1xuXG5pbXBvcnQgeyBJdGVtc0NvbXBvbmVudCB9IGZyb20gXCIuL2l0ZW0vaXRlbXMuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBJdGVtRGV0YWlsQ29tcG9uZW50IH0gZnJvbSBcIi4vaXRlbS9pdGVtLWRldGFpbC5jb21wb25lbnRcIjtcblxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXG4gICAgeyBwYXRoOiBcIlwiLCByZWRpcmVjdFRvOiBcIi9pdGVtc1wiLCBwYXRoTWF0Y2g6IFwiZnVsbFwiIH0sXG4gICAgeyBwYXRoOiBcIml0ZW1zXCIsIGNvbXBvbmVudDogSXRlbXNDb21wb25lbnQgfSxcbiAgICB7IHBhdGg6IFwiaXRlbS86aWRcIiwgY29tcG9uZW50OiBJdGVtRGV0YWlsQ29tcG9uZW50IH1cbl07XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JSb290KHJvdXRlcyldLFxuICAgIGV4cG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGVdXG59KVxuZXhwb3J0IGNsYXNzIEFwcFJvdXRpbmdNb2R1bGUgeyB9XG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJucy1hcHBcIixcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2FwcC5jb21wb25lbnQuaHRtbFwiXG59KVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7IH1cbiIsIjxHcmlkTGF5b3V0PlxuICA8cGFnZS1yb3V0ZXItb3V0bGV0PjwvcGFnZS1yb3V0ZXItb3V0bGV0PlxuPC9HcmlkTGF5b3V0PlxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSBcIkBuYXRpdmVzY3JpcHQvYW5ndWxhclwiO1xuXG5pbXBvcnQgeyBBcHBSb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vYXBwLXJvdXRpbmcubW9kdWxlXCI7XG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tIFwiLi9hcHAuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBJdGVtc0NvbXBvbmVudCB9IGZyb20gXCIuL2l0ZW0vaXRlbXMuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBJdGVtRGV0YWlsQ29tcG9uZW50IH0gZnJvbSBcIi4vaXRlbS9pdGVtLWRldGFpbC5jb21wb25lbnRcIjtcblxuQE5nTW9kdWxlKHtcbiAgICBib290c3RyYXA6IFtcbiAgICAgICAgQXBwQ29tcG9uZW50XG4gICAgXSxcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIE5hdGl2ZVNjcmlwdE1vZHVsZSxcbiAgICAgICAgQXBwUm91dGluZ01vZHVsZVxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIEFwcENvbXBvbmVudCxcbiAgICAgICAgSXRlbXNDb21wb25lbnQsXG4gICAgICAgIEl0ZW1EZXRhaWxDb21wb25lbnRcbiAgICBdLFxuICAgIHByb3ZpZGVyczogW10sXG4gICAgc2NoZW1hczogW1xuICAgICAgICBOT19FUlJPUlNfU0NIRU1BXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUgeyB9XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcblxuaW1wb3J0IHsgSXRlbSB9IGZyb20gXCIuL2l0ZW1cIjtcbmltcG9ydCB7IEFwaVNlcnZpY2UgfSBmcm9tIFwiLi4vQGNvcmUvc2VydmljZXMvYXBpLnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibnMtZGV0YWlsc1wiLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vaXRlbS1kZXRhaWwuY29tcG9uZW50Lmh0bWxcIixcbn0pXG5leHBvcnQgY2xhc3MgSXRlbURldGFpbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgaXRlbTogSXRlbTtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIGFwaVNlcnZpY2U6IEFwaVNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlXG4gICAgKSB7fVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGlkID0gK3RoaXMucm91dGUuc25hcHNob3QucGFyYW1zLmlkO1xuICAgICAgICAvLyB0aGlzLml0ZW0gPSB0aGlzLmFwaVNlcnZpY2UuZ2V0SXRlbShpZCk7XG4gICAgfVxufVxuIiwiPEFjdGlvbkJhciB0aXRsZT1cIkRldGFpbHNcIj48L0FjdGlvbkJhcj5cblxuPEZsZXhib3hMYXlvdXQgZmxleERpcmVjdGlvbj1cImNvbHVtblwiPlxuICAgIDxGbGV4Ym94TGF5b3V0IGNsYXNzPVwibS0xNVwiPlxuICAgICAgICA8TGFiZWwgY2xhc3M9XCJoMlwiIFt0ZXh0XT1cIml0ZW0uaWQgKyAnLiAnXCI+PC9MYWJlbD5cbiAgICAgICAgPExhYmVsIGNsYXNzPVwiaDJcIiBbdGV4dF09XCJpdGVtLm5hbWVcIj48L0xhYmVsPlxuICAgIDwvRmxleGJveExheW91dD5cbiAgICA8TGFiZWwgY2xhc3M9XCJoNCBtLTE1XCIgW3RleHRdPVwiaXRlbS5yb2xlXCI+PC9MYWJlbD5cbjwvRmxleGJveExheW91dD5cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuaW1wb3J0IHsgSXRlbSB9IGZyb20gXCIuL2l0ZW1cIjtcbmltcG9ydCB7IEFwaVNlcnZpY2UgfSBmcm9tIFwiLi4vQGNvcmUvc2VydmljZXMvYXBpLnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibnMtaXRlbXNcIixcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2l0ZW1zLmNvbXBvbmVudC5odG1sXCJcbn0pXG5leHBvcnQgY2xhc3MgSXRlbXNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIGl0ZW1zOiBBcnJheTxJdGVtPjtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgYXBpU2VydmljZTogQXBpU2VydmljZSkgeyB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgLy8gdGhpcy5pdGVtcyA9IHRoaXMuaXRlbVNlcnZpY2UuZ2V0SXRlbXMoKTtcbiAgICB9XG59XG4iLCI8IS0tXG5UaGUgdGVtcGxhdGUgZGVmaW5lcyB0aGUgdmlldyBvZiB0aGUgY29tcG9uZW50IC0gd2hhdCBpcyBhY3R1YWxseSByZW5kZXJlZC5cbkluIE5hdGl2ZVNjcmlwdCBhcHBsaWNhdGlvbnMgdGhlIHRlbXBsYXRlIGlzIGRlZmluZWQgd2l0aCBYTUwgdXNpbmcgTmF0aXZlU2NyaXB0IFVJIGVsZW1lbnRzLlxuSXQgaXMgZGlmZmVyZW50IGZyb20gSFRNTC4gU28gaW5zdGVhZCBvZiA8aW5wdXQ+LCA8c3Bhbj4sIDxkaXY+IGV0Yy4gLSB3ZSBoYXZlIDxUZXh0RmllbGQ+LCA8TGFiZWw+IGFuZCBsYXlvdXRzLlxuVGhlIGltcG9ydGFudCB0aGluZyBpcyB0aGF0IGFsdGhvdWdoIHRoZSBlbGVtZW50cyBhcmUgZGlmZmVyZW50IC0gYWxsIG9mIHRoZSBBbmd1bGFy4oCZcyB0ZW1wbGF0ZSBzeW50YXggd29ya3MgZXhhY3RseSB0aGUgc2FtZS5cblNvIHlvdSBjYW4gc3RpbGwgdXNlIHRlbXBsYXRlIGV4cHJlc3Npb25zLCBiaW5kaW5ncywgdGVtcGxhdGVzIGFzIHdlbGwgYXMgYWxsIHRoZSBidWlsdC1pbiBkaXJlY3RpdmVzLlxuLS0+XG5cbjwhLS1cblRoZSBBY3Rpb25CYXIgaXMgdGhlIE5hdGl2ZVNjcmlwdCBjb21tb24gYWJzdHJhY3Rpb24gb3ZlciB0aGUgQW5kcm9pZCBBY3Rpb25CYXIgYW5kIGlPUyBOYXZpZ2F0aW9uQmFyLlxuaHR0cDovL2RvY3MubmF0aXZlc2NyaXB0Lm9yZy91aS9hY3Rpb24tYmFyXG4tLT5cbjxBY3Rpb25CYXIgdGl0bGU9XCJNeSBBcHBcIj5cbjwvQWN0aW9uQmFyPlxuXG48IS0tXG5UaGUgR3JpZExheW91dCBhcnJhbmdlcyBpdHMgY2hpbGQgZWxlbWVudHMgaW4gYSB0YWJsZSBzdHJ1Y3R1cmUgb2Ygcm93cyBhbmQgY29sdW1ucy5cbkEgY2VsbCBjYW4gY29udGFpbiBtdWx0aXBsZSBjaGlsZCBlbGVtZW50cywgdGhleSBjYW4gc3BhbiBvdmVyIG11bHRpcGxlIHJvd3MgYW5kIGNvbHVtbnMsXG5hbmQgZXZlbiBvdmVybGFwIGVhY2ggb3RoZXIuIFRoZSBHcmlkTGF5b3V0IGhhcyBvbmUgY29sdW1uIGFuZCBvbmUgcm93IGJ5IGRlZmF1bHQuXG5Zb3UgY2FuIGxlYXJuIG1vcmUgYWJvdXQgTmF0aXZlU2NyaXB0IGxheW91dHMgYXQgaHR0cHM6Ly9kb2NzLm5hdGl2ZXNjcmlwdC5vcmcvdWkvbGF5b3V0LWNvbnRhaW5lcnMuXG5cblRoZXNlIGNvbXBvbmVudHMgbWFrZSB1c2Ugb2YgdGhlIE5hdGl2ZVNjcmlwdCBjb3JlIHRoZW1lLCB3aGljaCBzdHlsZXMgdGhlbSB3aXRoIGVsZW1lbnQgc2VsZWN0b3JzLlxuVGhlIHRoZW1lIGFsc28gcHJvdmlkZXMgYSBzZXQgb2YgaGVscGVyIGNsYXNzIG5hbWVzIHN1Y2ggYXMgcC0yMCwgaDEsIGgyLCBhbmQgdGV4dC1jZW50ZXIgdG8gZW5oYW5jZSBzdHlsaW5nLlxuWW91IGNhbiBsZWFybiBtb3JlIGFib3V0IHRoZSBOYXRpdmVTY3JpcHQgY29yZSB0aGVtZSBhdCBodHRwczovL2dpdGh1Yi5jb20vbmF0aXZlc2NyaXB0L3RoZW1lXG4tLT5cbjxHcmlkTGF5b3V0PlxuICAgIDxMaXN0VmlldyBbaXRlbXNdPVwiaXRlbXNcIj5cbiAgICAgICAgPG5nLXRlbXBsYXRlIGxldC1pdGVtPVwiaXRlbVwiPlxuICAgICAgICAgICAgPFN0YWNrTGF5b3V0PlxuICAgICAgICAgICAgICAgIDxMYWJlbCBbbnNSb3V0ZXJMaW5rXT1cIlsnL2l0ZW0nLCBpdGVtLmlkXVwiIFt0ZXh0XT1cIml0ZW0ubmFtZVwiPjwvTGFiZWw+XG4gICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxuICAgICAgICA8L25nLXRlbXBsYXRlPlxuICAgIDwvTGlzdFZpZXc+XG48L0dyaWRMYXlvdXQ+XG4iLCIvLyB0aGlzIGltcG9ydCBzaG91bGQgYmUgZmlyc3QgaW4gb3JkZXIgdG8gbG9hZCBzb21lIHJlcXVpcmVkIHNldHRpbmdzIChsaWtlIGdsb2JhbHMgYW5kIHJlZmxlY3QtbWV0YWRhdGEpXG5pbXBvcnQgeyBwbGF0Zm9ybU5hdGl2ZVNjcmlwdER5bmFtaWMgfSBmcm9tIFwiQG5hdGl2ZXNjcmlwdC9hbmd1bGFyXCI7XG5cbmltcG9ydCB7IEFwcE1vZHVsZSB9IGZyb20gXCIuL2FwcC9hcHAubW9kdWxlXCI7XG5cbi8vIEEgdHJhZGl0aW9uYWwgTmF0aXZlU2NyaXB0IGFwcGxpY2F0aW9uIHN0YXJ0cyBieSBpbml0aWFsaXppbmcgZ2xvYmFsIG9iamVjdHMsXG4vLyBzZXR0aW5nIHVwIGdsb2JhbCBDU1MgcnVsZXMsIGNyZWF0aW5nLCBhbmQgbmF2aWdhdGluZyB0byB0aGUgbWFpbiBwYWdlLlxuLy8gQW5ndWxhciBhcHBsaWNhdGlvbnMgbmVlZCB0byB0YWtlIGNhcmUgb2YgdGhlaXIgb3duIGluaXRpYWxpemF0aW9uOlxuLy8gbW9kdWxlcywgY29tcG9uZW50cywgZGlyZWN0aXZlcywgcm91dGVzLCBESSBwcm92aWRlcnMuXG4vLyBBIE5hdGl2ZVNjcmlwdCBBbmd1bGFyIGFwcCBuZWVkcyB0byBtYWtlIGJvdGggcGFyYWRpZ21zIHdvcmsgdG9nZXRoZXIsXG4vLyBzbyB3ZSBwcm92aWRlIGEgd3JhcHBlciBwbGF0Zm9ybSBvYmplY3QsIHBsYXRmb3JtTmF0aXZlU2NyaXB0RHluYW1pYyxcbi8vIHRoYXQgc2V0cyB1cCBhIE5hdGl2ZVNjcmlwdCBhcHBsaWNhdGlvbiBhbmQgY2FuIGJvb3RzdHJhcCB0aGUgQW5ndWxhciBmcmFtZXdvcmsuXG5wbGF0Zm9ybU5hdGl2ZVNjcmlwdER5bmFtaWMoKS5ib290c3RyYXBNb2R1bGUoQXBwTW9kdWxlKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIn4vcGFja2FnZS5qc29uXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=