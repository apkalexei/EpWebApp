webpackJsonp(["main"],{

/***/ "../../../../../package.json":
/***/ (function(module, exports) {

module.exports = {"name":"epweb-app","version":"0.0.0","license":"MIT","scripts":{"ng":"ng","start":"ng serve","build":"ng build --prod","test":"ng test","lint":"ng lint","e2e":"ng e2e"},"private":true,"dependencies":{"@angular-devkit/core":"^0.4.3","@angular/animations":"^5.1.0","@angular/common":"^5.1.0","@angular/compiler":"^5.1.0","@angular/core":"^5.1.0","@angular/forms":"^5.1.0","@angular/http":"^5.1.0","@angular/platform-browser":"^5.1.0","@angular/platform-browser-dynamic":"^5.1.0","@angular/router":"^5.1.0","@auth0/angular-jwt":"^1.1.0","bootstrap":"^3.3.7","bootswatch":"^4.0.0","core-js":"^2.4.1","devextreme":"^17.2.6","devextreme-angular":"^17.2.6","ngx-bootstrap":"^2.0.2","rxjs":"^5.5.2","zone.js":"^0.8.19"},"devDependencies":{"@angular/cli":"1.6.4","@angular/compiler-cli":"^5.1.0","@angular/language-service":"^5.1.0","@types/jasmine":"~2.8.3","@types/jasminewd2":"~2.0.2","@types/node":"^6.0.104","codelyzer":"^4.0.1","jasmine-core":"~2.8.0","jasmine-spec-reporter":"~4.2.1","karma":"~2.0.0","karma-chrome-launcher":"~2.2.0","karma-cli":"~1.0.1","karma-coverage-istanbul-reporter":"^1.2.1","karma-jasmine":"~1.1.0","karma-jasmine-html-reporter":"^0.2.2","protractor":"~5.1.2","ts-node":"~3.2.0","tslint":"~5.9.1","typescript":"~2.5.3"}}

/***/ }),

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/_guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/_services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        this.router.navigate(['/auth']);
        return false;
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "../../../../../src/app/_services/adapt.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdaptService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AdaptService = /** @class */ (function () {
    function AdaptService() {
        /* This service is for providing responsibility across the application mainly for responsible scheduler  */
        this.adapt = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
        this.adapt$ = this.adapt.asObservable();
        this.smallSize = {
            views: __webpack_require__("../../../../../src/assets/configuration.json").SchedulerSmallSizeViews,
            currentView: __webpack_require__("../../../../../src/assets/configuration.json").SchedulerSmallSizeCurrentView,
            size: "350",
            notifyPosition: "bottom"
        };
        /* Agenda is a special mode for schedulers for displaying scheduler on mobile devices */
        this.largeSize = {
            views: __webpack_require__("../../../../../src/assets/configuration.json").SchedulerLargeSizeViews,
            currentView: __webpack_require__("../../../../../src/assets/configuration.json").SchedulerLargeSizeCurrentView,
            size: "700",
            notifyPosition: "bottom right"
        };
    }
    AdaptService.prototype.getOptionsForAdaptation = function (value) {
        if (value) {
            return this.smallSize;
        }
        else {
            return this.largeSize;
        }
    };
    AdaptService.prototype.setAdaptValue = function () {
        var width = window.innerWidth;
        if (width < 768)
            this.adapt.next(true);
        else
            this.adapt.next(false);
    };
    AdaptService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], AdaptService);
    return AdaptService;
}());



/***/ }),

/***/ "../../../../../src/app/_services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth0_angular_jwt__ = __webpack_require__("../../../../@auth0/angular-jwt/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/throw.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AuthService = /** @class */ (function () {
    function AuthService(http, jwtHelperService) {
        this.http = http;
        this.jwtHelperService = jwtHelperService;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrl;
        this.ngSystemVersion = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].ngVersion;
    }
    AuthService.prototype.login = function (model) {
        var _this = this;
        return this.http.post(this.baseUrl + 'auth/login', model, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["e" /* HttpHeaders */]()
                .set('Content-Type', 'application/json')
        })
            .map(function (user) {
            if (user) {
                localStorage.setItem('token', user.tokenString);
                localStorage.setItem('user', JSON.stringify(user.user));
                _this.decodedToken = _this.jwtHelperService.decodeToken(user.tokenString);
                _this.currentUser = user.user;
                _this.userToken = user.tokenString;
            }
        });
    };
    AuthService.prototype.register = function (user) {
        return this.http.post(this.baseUrl + 'auth/register', user, { headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["e" /* HttpHeaders */]()
                .set('Content-Type', 'application/json') });
    };
    AuthService.prototype.getApiSystemVersion = function () {
        return this.http.get(this.baseUrl + 'admin/version');
    };
    AuthService.prototype.getNgSystemVersion = function () {
        return this.ngSystemVersion;
    };
    AuthService.prototype.loggedIn = function () {
        var token = this.jwtHelperService.tokenGetter();
        if (!token) {
            return false;
        }
        return !this.jwtHelperService.isTokenExpired(token);
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__auth0_angular_jwt__["a" /* JwtHelperService */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "../../../../../src/app/_services/error.interceptor.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ErrorInterceptor */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorInterceptorProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ErrorInterceptor = /** @class */ (function () {
    function ErrorInterceptor() {
    }
    ErrorInterceptor.prototype.intercept = function (req, next) {
        return next.handle(req).catch(function (error) {
            if (error instanceof __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpErrorResponse */]) {
                var applicationError = error.headers.get('Application-Error');
                if (applicationError) {
                    return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(applicationError);
                }
                var serverError = error.error;
                var modelStateErrors = '';
                if (serverError && typeof serverError === 'object') {
                    for (var key in serverError) {
                        if (serverError[key]) {
                            modelStateErrors += serverError[key] + '\n';
                        }
                    }
                }
                return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(modelStateErrors || serverError || 'Server error');
            }
        });
    };
    ErrorInterceptor = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])()
    ], ErrorInterceptor);
    return ErrorInterceptor;
}());

var ErrorInterceptorProvider = {
    provide: __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HTTP_INTERCEPTORS */],
    useClass: ErrorInterceptor,
    multi: true
};


/***/ }),

/***/ "../../../../../src/app/_services/filter.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FilterService = /** @class */ (function () {
    function FilterService(datePipe, authHttp) {
        this.datePipe = datePipe;
        this.authHttp = authHttp;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].apiUrl;
    }
    FilterService.prototype.getProductionGroupsForFilter = function () {
        return this.authHttp
            .get(this.baseUrl + "resourcegroup");
    };
    FilterService.prototype.getResourcesForFilter = function (resourceGroupId) {
        return this.authHttp
            .get(this.baseUrl + "resource/byResourceGroup/" + resourceGroupId);
    };
    FilterService.prototype.getFormatDate = function (value) {
        return this.datePipe.transform(value, 'MM/dd/yyyy');
    };
    FilterService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common__["d" /* DatePipe */], __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClient */]])
    ], FilterService);
    return FilterService;
}());



/***/ }),

/***/ "../../../../../src/app/_services/notify.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotifyService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__adapt_service__ = __webpack_require__("../../../../../src/app/_services/adapt.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_devextreme_ui_notify__ = __webpack_require__("../../../../devextreme/ui/notify.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_devextreme_ui_notify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_devextreme_ui_notify__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NotifyService = /** @class */ (function () {
    function NotifyService(adaptService) {
        var _this = this;
        this.adaptService = adaptService;
        this.adaptService.adapt$.subscribe(function (item) {
            _this.adaptOptions = _this.adaptService.getOptionsForAdaptation(item);
        });
    }
    NotifyService.prototype.success = function (content) {
        __WEBPACK_IMPORTED_MODULE_2_devextreme_ui_notify___default()({
            message: content,
            closeOnClick: true,
            position: this.adaptOptions.notifyPosition
        }, "success", 3500);
    };
    NotifyService.prototype.error = function (content) {
        __WEBPACK_IMPORTED_MODULE_2_devextreme_ui_notify___default()({
            message: content,
            closeOnClick: true,
            position: this.adaptOptions.notifyPosition
        }, "error", 3500);
    };
    NotifyService.prototype.info = function (content) {
        __WEBPACK_IMPORTED_MODULE_2_devextreme_ui_notify___default()({
            message: content,
            closeOnClick: true,
            position: this.adaptOptions.notifyPosition
        }, "info", 3500);
    };
    NotifyService.prototype.warning = function (content) {
        __WEBPACK_IMPORTED_MODULE_2_devextreme_ui_notify___default()({
            message: content,
            closeOnClick: true,
            position: this.adaptOptions.notifyPosition
        }, "warning", 3500);
    };
    NotifyService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__adapt_service__["a" /* AdaptService */]])
    ], NotifyService);
    return NotifyService;
}());



/***/ }),

/***/ "../../../../../src/app/_services/resource.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResourceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/* Service which is responsible for providing information to the scheduler based on information from search params sent via search form */
var ResourceService = /** @class */ (function () {
    function ResourceService(authHttp) {
        this.authHttp = authHttp;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].apiUrl;
    }
    ResourceService.prototype.getResAllocsForGivenResource = function (resourceId) {
        return this.authHttp.get(this.baseUrl + "resourceAllocation/" + resourceId);
    };
    ResourceService.prototype.getResourceDetailById = function (resourceId) {
        return this.authHttp.get(this.baseUrl + "resource/" + resourceId);
    };
    ResourceService.prototype.getProductionGroup = function (resourceGroupId) {
        return this.authHttp.get(this.baseUrl + "resourceGroup/" + resourceGroupId);
    };
    ResourceService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */]])
    ], ResourceService);
    return ResourceService;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@media only screen and (max-width: 480px) {\r\n  .container {\r\n    padding-left: 0%;\r\n    padding-right: 0%;\r\n  }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<dx-responsive-box (onOptionChanged)=\"adaptation()\">\r\n\r\n  <dxi-item>\r\n\r\n    <app-header></app-header>\r\n\r\n    <div class=\"container\">\r\n      <router-outlet></router-outlet>\r\n    </div>\r\n\r\n    <app-footer></app-footer>\r\n\r\n  </dxi-item>\r\n\r\n</dx-responsive-box>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_auth_service__ = __webpack_require__("../../../../../src/app/_services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_devextreme_angular_ui_responsive_box__ = __webpack_require__("../../../../devextreme-angular/ui/responsive-box.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_devextreme_angular_ui_responsive_box___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_devextreme_angular_ui_responsive_box__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_adapt_service__ = __webpack_require__("../../../../../src/app/_services/adapt.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth0_angular_jwt__ = __webpack_require__("../../../../@auth0/angular-jwt/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppComponent = /** @class */ (function () {
    function AppComponent(adaptService, authService, jwtHelperService) {
        var _this = this;
        this.adaptService = adaptService;
        this.authService = authService;
        this.jwtHelperService = jwtHelperService;
        this.adaptService.adapt$.subscribe(function (item) {
            _this.adaptOptions = _this.adaptService.getOptionsForAdaptation(item);
        });
    }
    AppComponent.prototype.adaptation = function () {
        this.adaptService.setAdaptValue();
    };
    AppComponent.prototype.ngOnInit = function () {
        var token = localStorage.getItem('token');
        var user = JSON.parse(localStorage.getItem('user'));
        if (token) {
            this.authService.decodedToken = this.jwtHelperService.decodeToken(token);
        }
        if (user) {
            this.authService.currentUser = user;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2_devextreme_angular_ui_responsive_box__["DxResponsiveBoxComponent"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_devextreme_angular_ui_responsive_box__["DxResponsiveBoxComponent"])
    ], AppComponent.prototype, "box", void 0);
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_adapt_service__["a" /* AdaptService */], __WEBPACK_IMPORTED_MODULE_0__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_4__auth0_angular_jwt__["a" /* JwtHelperService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export tokenGetter */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth_auth_component__ = __webpack_require__("../../../../../src/app/auth/auth.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http___ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_devextreme_angular__ = __webpack_require__("../../../../devextreme-angular/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_devextreme_angular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_devextreme_angular__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__routing_module__ = __webpack_require__("../../../../../src/app/routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_components_shared_components_module__ = __webpack_require__("../../../../../src/app/shared-components/shared-components.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__scheduler_scheduler_component__ = __webpack_require__("../../../../../src/app/scheduler/scheduler.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__search_search_component__ = __webpack_require__("../../../../../src/app/search/search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_resource_service__ = __webpack_require__("../../../../../src/app/_services/resource.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_filter_service__ = __webpack_require__("../../../../../src/app/_services/filter.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_adapt_service__ = __webpack_require__("../../../../../src/app/_services/adapt.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_auth_service__ = __webpack_require__("../../../../../src/app/_services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_notify_service__ = __webpack_require__("../../../../../src/app/_services/notify.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_error_interceptor__ = __webpack_require__("../../../../../src/app/_services/error.interceptor.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__guards_auth_guard__ = __webpack_require__("../../../../../src/app/_guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_ngx_bootstrap__ = __webpack_require__("../../../../ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__auth0_angular_jwt__ = __webpack_require__("../../../../@auth0/angular-jwt/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

// angular modules






//devextreme modules

// custom modules


// custom components



// custom services






// custom guards

// 3RD party modules


// JWT config
function tokenGetter() {
    return localStorage.getItem('token');
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_12__search_search_component__["a" /* SearchComponent */],
                __WEBPACK_IMPORTED_MODULE_11__scheduler_scheduler_component__["a" /* SchedulerComponent */],
                __WEBPACK_IMPORTED_MODULE_0__auth_auth_component__["a" /* AuthComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_7_devextreme_angular__["DxSchedulerModule"],
                __WEBPACK_IMPORTED_MODULE_7_devextreme_angular__["DxResponsiveBoxModule"],
                __WEBPACK_IMPORTED_MODULE_7_devextreme_angular__["DxTemplateModule"],
                __WEBPACK_IMPORTED_MODULE_7_devextreme_angular__["DxButtonModule"],
                __WEBPACK_IMPORTED_MODULE_9__shared_components_shared_components_module__["a" /* SharedComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_8__routing_module__["a" /* RoutingModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_http___["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_20_ngx_bootstrap__["a" /* BsDatepickerModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_20_ngx_bootstrap__["c" /* TabsModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_21__auth0_angular_jwt__["b" /* JwtModule */].forRoot({
                    config: {
                        tokenGetter: tokenGetter,
                        whitelistedDomains: ['localhost:5000']
                    }
                })
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_13__services_resource_service__["a" /* ResourceService */],
                __WEBPACK_IMPORTED_MODULE_14__services_filter_service__["a" /* FilterService */],
                __WEBPACK_IMPORTED_MODULE_15__services_adapt_service__["a" /* AdaptService */],
                __WEBPACK_IMPORTED_MODULE_16__services_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_19__guards_auth_guard__["a" /* AuthGuard */],
                __WEBPACK_IMPORTED_MODULE_17__services_notify_service__["a" /* NotifyService */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common__["d" /* DatePipe */],
                __WEBPACK_IMPORTED_MODULE_18__services_error_interceptor__["a" /* ErrorInterceptorProvider */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/auth/auth.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container {\r\n    max-width: 400px;\r\n    margin: 0 auto;\r\n    margin-top: 5vw;\r\n}\r\n\r\n.container input {\r\n    max-width: 250px;\r\n    margin: 0 auto;\r\n}\r\n\r\n.container h2 {\r\n    text-align: left;\r\n    max-width: 250px;\r\n    margin: 0 auto;\r\n    margin-bottom: 25px;\r\n}\r\n\r\n.btn-success.submit {\r\n    margin-top: 15px;\r\n    min-width: 150px;\r\n}\r\n\r\n.help-block {\r\n    color: red;\r\n}\r\n\r\n@media only screen and (max-width: 480px) {\r\n    .container {\r\n        width: 100vw;\r\n        margin: none;\r\n        height: 100vw;\r\n        margin-top: 5vw;\r\n    }\r\n    .alert {\r\n        margin-top: 15vw;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/auth/auth.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"tab-panel\">\n    <tabset class=\"member-tabset\" #loginTabs>\n\n      <!-- SIGNIN tab -->\n      <tab heading=\"Sign-in\">\n        <form [formGroup]=\"loginForm\" (submit)=\"login()\">\n\n          <h2>Sign-in</h2>\n\n          <div class=\"form-group\">\n            <input type=\"text\" class=\"form-control\" formControlName=\"username\" placeholder=\"Enter username\" autocomplete=\"off\">\n            <span class=\"help-block\" *ngIf=\"loginForm.get('username').hasError('required') && loginForm.get('username').touched\">\n              Username is required\n            </span>\n          </div>\n\n          <div class=\"form-group\">\n            <input type=\"password\" class=\"form-control\" formControlName=\"password\" placeholder=\"Enter password\" autocomplete=\"off\">\n            <span class=\"help-block\" *ngIf=\"loginForm.get('password').hasError('required') && loginForm.get('password').touched\">\n              Password is required\n            </span>\n          </div>\n\n          <div class=\"form-group\">\n            <button [disabled]=\"!loginForm.valid\" type=\"submit\" class=\"btn btn-success submit\">Login</button>\n          </div>\n\n        </form>\n      </tab>\n\n      <!-- REGISTER tab -->\n      <tab heading=\"Register\">\n\n        <form [formGroup]=\"registerForm\" (submit)=\"register()\" [hidden]=\"isRegistered\">\n\n          <h2>Register</h2>\n\n          <div class=\"form-group\" [ngClass]=\"{'has-error': registerForm.get('username').errors && registerForm.get('username').touched}\">\n\n            <input type=\"text\" class=\"form-control\" formControlName=\"username\" placeholder=\"Enter username\" autocomplete=\"off\">\n\n            <span class=\"help-block\" *ngIf=\"registerForm.get('username').hasError('required') && registerForm.get('username').touched\">\n              Username is required\n            </span>\n\n            <span class=\"help-block\" *ngIf=\"registerForm.get('username').hasError('minlength') && registerForm.get('username').touched\">\n              Username must be at least 6 characters\n            </span>\n\n          </div>\n\n          <div class=\"form-group\" [ngClass]=\"{'has-error': registerForm.get('email').errors && registerForm.get('email').touched}\">\n\n            <input type=\"email\" class=\"form-control\" formControlName=\"email\" placeholder=\"Enter your email\" autocomplete=\"off\">\n\n            <span class=\"help-block\" *ngIf=\"registerForm.get('email').hasError('email') && registerForm.get('email').touched\">\n              You need to enter an email adress.\n            </span>\n\n          </div>\n\n          <div class=\"form-group\" [ngClass]=\"{'has-error': registerForm.get('password').errors && registerForm.get('password').touched}\">\n\n            <input type=\"password\" class=\"form-control\" formControlName=\"password\" placeholder=\"Enter password\" autocomplete=\"off\">\n\n            <span class=\"help-block\" *ngIf=\"registerForm.get('password').hasError('required') && registerForm.get('password').touched\">\n              Password is required\n            </span>\n\n            <span class=\"help-block\" *ngIf=\"registerForm.get('password').hasError('minlength') && registerForm.get('password').touched\">\n              Password must be at least 8 characters\n            </span>\n\n          </div>\n\n          <div class=\"form-group\" [ngClass]=\"{'has-error': registerForm.get('passwordConfirm').errors \n          && registerForm.get('passwordConfirm').touched || registerForm.get('passwordConfirm').touched \n          && registerForm.hasError('mismatch')}\">\n\n            <input type=\"password\" class=\"form-control\" formControlName=\"passwordConfirm\" placeholder=\"Confirm password\" autocomplete=\"off\">\n\n            <span class=\"help-block\" *ngIf=\"registerForm.get('passwordConfirm').hasError('required') && registerForm.get('passwordConfirm').touched\">\n              Password is required\n            </span>\n\n            <span class=\"help-block\" *ngIf=\"registerForm.get('passwordConfirm').touched \n              && registerForm.hasError('mismatch')\">\n              Confirm password must match password\n            </span>\n\n          </div>\n\n          <div class=\"form-group\">\n            <button type=\"submit\" class=\"btn btn-success submit\" [disabled]=\"!registerForm.valid\">Register</button>\n          </div>\n\n        </form>\n\n        <!-- AFTER REGISTER NOTIFICATION -->\n        <div class=\"alert alert-success\" [hidden]=\"!isRegistered\">\n          <p>\n            <strong>Registration was successful.</strong> Your account needs to be verified by system administrator to be able to\n            sign into the system. We will contact you on your email adress.</p>\n        </div>\n\n      </tab>\n\n    </tabset>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/auth/auth.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_notify_service__ = __webpack_require__("../../../../../src/app/_services/notify.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/_services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthComponent = /** @class */ (function () {
    function AuthComponent(authService, router, formBuilder, notifyService) {
        this.authService = authService;
        this.router = router;
        this.formBuilder = formBuilder;
        this.notifyService = notifyService;
        this.isRegistered = false;
    }
    AuthComponent.prototype.ngOnInit = function () {
        this.createLoginForm();
        this.createRegisterForm();
    };
    /* Creates sign-in form */
    AuthComponent.prototype.createLoginForm = function () {
        this.loginForm = this.formBuilder.group({
            username: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required],
            password: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required]
        });
    };
    /* Creates register form */
    AuthComponent.prototype.createRegisterForm = function () {
        this.registerForm = this.formBuilder.group({
            username: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].minLength(6)]],
            email: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].email],
            password: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].minLength(8)]],
            passwordConfirm: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required],
        }, { validator: this.passwordMatchValidator });
    };
    /* Validates password inputs in registerForm */
    AuthComponent.prototype.passwordMatchValidator = function (g) {
        return g.get('password').value === g.get('passwordConfirm').value ? null : { 'mismatch': true };
    };
    /* Sends register request to authService */
    AuthComponent.prototype.register = function () {
        var _this = this;
        this.authService.register(this.registerForm.value).subscribe(function (data) {
            _this.isRegistered = true;
            _this.notifyService.success('Registration was successful');
        }, function (error) {
            _this.notifyService.error(error);
        });
    };
    /* Sends login request to authService */
    AuthComponent.prototype.login = function () {
        var _this = this;
        this.authService.login(this.loginForm.value).subscribe(function (data) {
            _this.notifyService.success('You have been successfully signed in');
        }, function (error) {
            _this.notifyService.error(error);
        }, function () {
            _this.router.navigate(['/search']);
        });
    };
    AuthComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
            selector: 'app-auth',
            template: __webpack_require__("../../../../../src/app/auth/auth.component.html"),
            styles: [__webpack_require__("../../../../../src/app/auth/auth.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_0__services_notify_service__["a" /* NotifyService */]])
    ], AuthComponent);
    return AuthComponent;
}());



/***/ }),

/***/ "../../../../../src/app/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__app_module__["a"]; });




/***/ }),

/***/ "../../../../../src/app/routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export appRoutes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth_auth_component__ = __webpack_require__("../../../../../src/app/auth/auth.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scheduler_scheduler_component__ = __webpack_require__("../../../../../src/app/scheduler/scheduler.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_search_component__ = __webpack_require__("../../../../../src/app/search/search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__guards_auth_guard__ = __webpack_require__("../../../../../src/app/_guards/auth.guard.ts");





var appRoutes = [
    {
        path: 'auth',
        component: __WEBPACK_IMPORTED_MODULE_0__auth_auth_component__["a" /* AuthComponent */]
    },
    {
        path: 'search',
        component: __WEBPACK_IMPORTED_MODULE_2__search_search_component__["a" /* SearchComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_4__guards_auth_guard__["a" /* AuthGuard */]],
        runGuardsAndResolvers: 'always',
    },
    {
        path: 'scheduler',
        component: __WEBPACK_IMPORTED_MODULE_1__scheduler_scheduler_component__["a" /* SchedulerComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_4__guards_auth_guard__["a" /* AuthGuard */]],
        runGuardsAndResolvers: 'always',
    },
    {
        path: '**',
        redirectTo: 'search',
        pathMatch: 'full'
    }
];
// provides routing to app.module.ts
var RoutingModule = __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* RouterModule */].forRoot(appRoutes);


/***/ }),

/***/ "../../../../../src/app/scheduler/scheduler.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".search-again {\r\n    float: left;\r\n}\r\n\r\n.schedule-info {\r\n    float: right;\r\n    font-size: 150%;\r\n}\r\n\r\n.scheduler-header {\r\n    height: 45px;\r\n}\r\n\r\n@media only screen and (max-width: 480px) {\r\n\r\n    .search-again {\r\n        margin-bottom: 10px;\r\n        margin-left: 10px;\r\n    }\r\n\r\n    .schedule-info {\r\n        float: right;\r\n        font-size: 90%;\r\n        margin-right: 9px;\r\n        max-width: 130px;\r\n        word-wrap: break-word;\r\n    }\r\n    \r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/scheduler/scheduler.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"scheduler-header\">\r\n  <div class=\"search-again\">\r\n    <button type=\"submit\" class=\"btn btn-default\" (click)=\"searchAgain()\">\r\n      <span class=\"glyphicon glyphicon-repeat\"></span> Search again</button>\r\n  </div>\r\n  <div class=\"schedule-info\">\r\n    Schedule for\r\n    <strong>{{ productionGroupInfo?.name }} / {{ resourceDetail?.name }}</strong>\r\n  </div>\r\n</div>\r\n<div class=\"scheduler\">\r\n  <dx-scheduler [dataSource]=\"resAllocs\" [views]=\"adaptOptions.views\" [editing]=\"false\" [currentView]=\"adaptOptions.currentView\"\r\n    [currentDate]=\"searchDate\" [startDayHour]=\"SchedulerStartDayHour\" [endDayHour]=\"SchedulerEndDayHour\" [showAllDayPanel]=\"SchedulerAllDayPanel\"\r\n    [height]=\"adaptOptions.size\" [showCurrentTimeIndicator]=\"SchedulerShowCurrentTimeIndicator\" (onAppointmentFormCreated)=\"onAppointmentFormCreated($event)\">\r\n  </dx-scheduler>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/scheduler/scheduler.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SchedulerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_notify_service__ = __webpack_require__("../../../../../src/app/_services/notify.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_resource_service__ = __webpack_require__("../../../../../src/app/_services/resource.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_adapt_service__ = __webpack_require__("../../../../../src/app/_services/adapt.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_filter_service__ = __webpack_require__("../../../../../src/app/_services/filter.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SchedulerComponent = /** @class */ (function () {
    function SchedulerComponent(resourceService, adaptService, route, router, filterService, notifyService, datePipe) {
        var _this = this;
        this.resourceService = resourceService;
        this.adaptService = adaptService;
        this.route = route;
        this.router = router;
        this.filterService = filterService;
        this.notifyService = notifyService;
        this.datePipe = datePipe;
        this.resAllocs = [];
        this.searchDate = new Date();
        /* Scheduler config */
        this.SchedulerStartDayHour = __webpack_require__("../../../../../src/assets/configuration.json").SchedulerStartDayHour;
        this.SchedulerEndDayHour = __webpack_require__("../../../../../src/assets/configuration.json").SchedulerEndDayHour;
        this.SchedulerAllDayPanel = __webpack_require__("../../../../../src/assets/configuration.json").SchedulerAllDayPanel;
        this.SchedulerShowCurrentTimeIndicator = __webpack_require__("../../../../../src/assets/configuration.json").SchedulerShowCurrentTimeIndicator;
        this.searchParams = this.getSearchParams();
        this.resourceService
            .getResAllocsForGivenResource(this.searchParams.resource)
            .subscribe(function (res) {
            _this.setResAlloc(res);
        }, function (err) {
            _this.notifyService.error("Error occured. Please try again.");
        });
        this.resourceService
            .getProductionGroup(this.searchParams.productionGroup)
            .subscribe(function (res) {
            _this.productionGroupInfo = res;
        }, function (err) {
            _this.notifyService.error("Error occured. Please try again.");
        });
        this.resourceService
            .getResourceDetailById(this.searchParams.resource)
            .subscribe(function (res) {
            _this.resourceDetail = res;
        }, function (err) {
            _this.notifyService.error("Error occured. Please try again.");
        });
        this.adaptService.adapt$.subscribe(function (item) {
            _this.adaptOptions = _this.adaptService.getOptionsForAdaptation(item);
        });
    }
    SchedulerComponent.prototype.ngOnInit = function () {
        this.adaptation();
        this.searchDate = this.searchParams.date;
    };
    SchedulerComponent.prototype.OnDestroy = function () {
        this.resAllocs = [];
        this.searchParams = {};
        this.adaptOptions = {};
    };
    /* gets search parameters from URL */
    SchedulerComponent.prototype.getSearchParams = function () {
        var result;
        this.route.params.subscribe(function (params) {
            result = params;
        });
        if (!result.date)
            result.date = new Date();
        return {
            productionGroup: Number(result.productionGroup),
            resource: Number(result.resource),
            date: new Date(result.date)
        };
    };
    /* changes adaptOptions based on screen size */
    SchedulerComponent.prototype.adaptation = function () {
        this.adaptService.setAdaptValue();
    };
    /* return back to search component + sends back search parameters */
    SchedulerComponent.prototype.searchAgain = function () {
        var sendParams = this.searchParams;
        sendParams.date = this.filterService.getFormatDate(sendParams.date);
        sendParams.searchAgain = true;
        this.router.navigate(["search", sendParams]);
    };
    /* Creates custom appointment detail - to be done*/
    SchedulerComponent.prototype.onAppointmentFormCreated = function (data) {
        var form = data.form;
        /* data.appointmentData returns an object (appointment detail):
    
            endDate: "2018-04-06T09:30:00"
            resAllocId: 1
            resourceId: 1
            startDate: "2018-04-06T07:30:00"
            text: "Directing 1"
    
            So API end-point has to be build to join tables and return valid data across production entities to fill out this form.
            Returned values from API will replace "value" fields below later.
            
        */
        form.option("items", [{
                label: {
                    text: "Date"
                },
                name: "date",
                editorType: "dxTextBox",
                editorOptions: {
                    value: this.datePipe.transform(data.appointmentData.startDate, 'fullDate'),
                }
            }, {
                label: {
                    text: "Start/End time"
                },
                name: "time",
                editorType: "dxTextBox",
                editorOptions: {
                    value: this.datePipe.transform(data.appointmentData.startDate, 'shortTime') + " - " + this.datePipe.transform(data.appointmentData.endDate, 'shortTime'),
                }
            }, {
                label: {
                    text: "Prod. ID"
                },
                name: "productionId",
                editorType: "dxTextBox",
                editorOptions: {
                    value: "XT-020485",
                }
            }, {
                label: {
                    text: "Prod. Unit"
                },
                name: "productionUnitId",
                editorType: "dxTextBox",
                editorOptions: {
                    value: "Strasbourg",
                }
            }, {
                label: {
                    text: "Prod. Status"
                },
                name: "productionStatus",
                editorType: "dxTextBox",
                editorOptions: {
                    value: "Completed",
                }
            }, {
                label: {
                    text: "Prod. Kind"
                },
                name: "productionKind",
                editorType: "dxTextBox",
                editorOptions: {
                    value: "Media news",
                }
            }, {
                label: {
                    text: "Customer"
                },
                name: "customer",
                editorType: "dxTextBox",
                editorOptions: {
                    value: "RTV Slovenija",
                }
            }, {
                label: {
                    text: "Contact person"
                },
                name: "contactPerson",
                editorType: "dxTextBox",
                editorOptions: {
                    value: "Boštjan Veselič",
                }
            }, {
                label: {
                    text: "Project note"
                },
                name: "projectNote",
                editorType: "dxTextBox",
                editorOptions: {
                    value: "",
                }
            }, {
                label: {
                    text: "Note for planning"
                },
                name: "noteForPlanning",
                editorType: "dxTextBox",
                editorOptions: {
                    value: "",
                }
            }
        ]);
    };
    /* Iterates over objects returned from server and stores them into resAllocs variable */
    SchedulerComponent.prototype.setResAlloc = function (data) {
        for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
            var resAlloc = data_1[_i];
            this.resAllocs.push(resAlloc);
        }
    };
    ;
    SchedulerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
            selector: 'app-scheduler',
            template: __webpack_require__("../../../../../src/app/scheduler/scheduler.component.html"),
            styles: [__webpack_require__("../../../../../src/app/scheduler/scheduler.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_resource_service__["a" /* ResourceService */],
            __WEBPACK_IMPORTED_MODULE_4__services_adapt_service__["a" /* AdaptService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_5__services_filter_service__["a" /* FilterService */],
            __WEBPACK_IMPORTED_MODULE_0__services_notify_service__["a" /* NotifyService */],
            __WEBPACK_IMPORTED_MODULE_6__angular_common__["d" /* DatePipe */]])
    ], SchedulerComponent);
    return SchedulerComponent;
}());



/***/ }),

/***/ "../../../../../src/app/search/search.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".well {\r\n    width: 400px;\r\n    margin: 0 auto;\r\n    margin-top: 5vw;\r\n}\r\n\r\n.btn-success.submit {\r\n    margin-top: 15px;\r\n    min-width: 150px;\r\n}\r\n\r\n.form-group label {\r\n    margin-bottom: 5px;\r\n}\r\n\r\n@media only screen and (max-width: 480px) {\r\n    .well {\r\n        width: 100vw;\r\n        margin: none;\r\n        height: 100vw;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/search/search.component.html":
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"searchForm\" (submit)=\"formSubmit()\">\r\n\r\n  <div class=\"well\">\r\n\r\n    <div class=\"form-group\">\r\n      <label for=\"productionGroup\">Production group</label>\r\n      <select id=\"productionGroup\" class=\"form-control\" formControlName=\"productionGroup\" (change)=\"onProdGroupChange()\">\r\n        <option *ngFor=\"let prodGroup of productionGroups\" value=\"{{ prodGroup.id }}\"> {{ prodGroup.name }} </option>\r\n      </select>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <label for=\"resource\">Resource</label>\r\n      <select id=\"resource\" class=\"form-control\" formControlName=\"resource\" (change)=\"onResourceChange()\">\r\n          <option *ngFor=\"let resource of resourcesByProductionGroup\" value=\"{{ resource.id }}\"> {{ resource.name }} </option>\r\n      </select>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <label for=\"date\">Date</label>\r\n      <div class=\"input-group\">\r\n        <input id=\"date\" type=\"text\" class=\"form-control\" bsDatepicker #dp=\"bsDatepicker\" formControlName=\"date\"\r\n          [bsConfig]=\"datePickerConfig\"/>\r\n        <div class=\"input-group-btn\">\r\n          <button type=\"button\" class=\"btn btn-success\" (click)=\"dp.show()\">Open</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <button [disabled]=\"!searchForm.valid\" type=\"submit\" class=\"btn btn-success submit\">Search..</button>\r\n    </div>\r\n    \r\n  </div>\r\n\r\n</form>\r\n"

/***/ }),

/***/ "../../../../../src/app/search/search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_filter_service__ = __webpack_require__("../../../../../src/app/_services/filter.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SearchComponent = /** @class */ (function () {
    function SearchComponent(formBuilder, filterService, router, route) {
        this.formBuilder = formBuilder;
        this.filterService = filterService;
        this.router = router;
        this.route = route;
    }
    SearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.filterService
            .getProductionGroupsForFilter()
            .subscribe(function (res) { return _this.productionGroups = res; });
        this.createSearchForm();
        this.tryAssignSearchParams();
        /* DatePicker configuration */
        this.datePickerConfig = Object.assign({}, { showWeekNumbers: false });
    };
    /* Creates form */
    SearchComponent.prototype.createSearchForm = function () {
        this.searchForm = this.formBuilder.group({
            productionGroup: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            resource: [{ value: null, disabled: true }, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            date: [{ value: new Date(), disabled: true }, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]
        });
    };
    /* Changes Resource dropdown list when Production group item is changed and turns on resource dropdown as production group is selected */
    SearchComponent.prototype.onProdGroupChange = function () {
        var _this = this;
        this.filterService
            .getResourcesForFilter(this.searchForm.value.productionGroup)
            .subscribe(function (res) { return _this.resourcesByProductionGroup = res; });
        this.searchForm.controls['resource'].enable();
    };
    /* Turns-on date-picker as resource is selected */
    SearchComponent.prototype.onResourceChange = function () {
        this.searchForm.controls['date'].enable();
    };
    /* Gets params from route in case they are sent back from scheduler via search again button */
    SearchComponent.prototype.getSearchParams = function () {
        var result;
        this.route.params.subscribe(function (params) {
            result = params;
        });
        return {
            productionGroup: Number(result.productionGroup),
            resource: Number(result.resource),
            date: new Date(result.date),
            searchAgain: Boolean(result.searchAgain)
        };
    };
    /* Assign search params to form components if there are any */
    SearchComponent.prototype.tryAssignSearchParams = function () {
        var _this = this;
        var searchParams = this.getSearchParams();
        if (searchParams.searchAgain == true) {
            this.searchForm.controls['resource'].enable();
            this.searchForm.controls['date'].enable();
            this.filterService
                .getResourcesForFilter(searchParams.productionGroup)
                .subscribe(function (res) { return _this.resourcesByProductionGroup = res; });
            this.searchForm.setValue({
                productionGroup: searchParams.productionGroup,
                resource: searchParams.resource,
                date: searchParams.date
            });
        }
    };
    /* Sends data from the searchForm to the scheduler  */
    SearchComponent.prototype.formSubmit = function () {
        var searchData = this.searchForm.value;
        searchData.date = this.filterService.getFormatDate(this.searchForm.value.date);
        this.router.navigate(["scheduler", searchData]);
    };
    SearchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-search',
            template: __webpack_require__("../../../../../src/app/search/search.component.html"),
            styles: [__webpack_require__("../../../../../src/app/search/search.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_2__services_filter_service__["a" /* FilterService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared-components/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "footer {\r\n    position: fixed;\r\n    left: 0;\r\n    bottom: 0px;\r\n    height: 70px;\r\n    width: 100%;\r\n    border-top: 1px solid #e5e5e5;\r\n    padding-top: 19px;\r\n    color: #777;\r\n    background-color: #fff;\r\n}\r\n\r\n.user-status {\r\n    display: none;\r\n}\r\n\r\n.system-version {\r\n    font-size: 80%;\r\n}\r\n\r\n@media only screen and (max-width: 480px) {\r\n    footer {\r\n        height: 50px;\r\n        padding-top: 9px;\r\n    }\r\n    .user-status {\r\n        display: unset;\r\n    }\r\n    .system-version {\r\n        display: none;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared-components/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer class=\"content\">\r\n        <div class=\"footer\">\r\n            <div *ngIf=\"loggedIn()\" class=\"user-status\">Signed in as <strong>{{ currentUser?.username }}</strong></div>\r\n            <div class=\"copyright\">Copyright&nbsp;&copy;&nbsp;2018 Provys</div>\r\n            <div class=\"system-version\">API {{ apiVersion }} / NG {{ ngVersion }}</div>\r\n        </div>\r\n</footer>"

/***/ }),

/***/ "../../../../../src/app/shared-components/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_auth_service__ = __webpack_require__("../../../../../src/app/_services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FooterComponent = /** @class */ (function () {
    function FooterComponent(authService) {
        this.authService = authService;
    }
    FooterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getApiSystemVersion().subscribe(function (res) {
            _this.apiVersion = res.version;
        });
        this.ngVersion = this.authService.getNgSystemVersion();
    };
    FooterComponent.prototype.loggedIn = function () {
        this.currentUser = this.authService.currentUser;
        return this.authService.loggedIn();
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__("../../../../../src/app/shared-components/footer/footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared-components/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__services_auth_service__["a" /* AuthService */]])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared-components/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".navbar {\r\n    max-height: 70px;\r\n}\r\n.dropdown-menu li, .dropdown-toggle {\r\n    cursor: pointer;\r\n}\r\n.navbar-inverse .navbar-nav>.open>a, .navbar-inverse .navbar-nav>.open>a:focus, .navbar-inverse .navbar-nav>.open>a:hover {\r\n    background: unset;\r\n}\r\n.container {\r\n    margin-top: 8px;\r\n}\r\n.navbar-right {\r\n    float: right;\r\n}\r\n.logo {\r\n    width: 204px;\r\n    height: 56px;\r\n    cursor: pointer;\r\n    background-image: url(data:image/png;base64,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)\r\n}\r\n.logo:focus {\r\n    outline: none;\r\n}\r\n.logout-collapsed {\r\n    display: none;\r\n}\r\n.logout-collapse {\r\n    margin-top: 8px;\r\n}\r\np {\r\n    color: #777;\r\n    margin-top: 15px;\r\n    margin-right: 10px;\r\n}\r\n.right {\r\n    float:right;\r\n}\r\n@media only screen and (max-width: 480px) {\r\n\r\n    .logo {\r\n        margin-left: 15px;\r\n    }\r\n    .logout-collapsed {\r\n        float: right;\r\n        display: unset;\r\n        margin-right: 8px;\r\n        margin-top: 10px;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared-components/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse\">\r\n  <div class=\"container\">\r\n    <div class=\"navbar-header\">\r\n\r\n      <div class=\"logout-collapsed\" *ngIf=\"loggedIn()\">\r\n          <button type=\"submit\" class=\"btn btn-default btn-sm navbar-right\" (click)=\"logout()\"><span class=\"glyphicon glyphicon-off\"></span></button>\r\n      </div>\r\n      \r\n      <div class=\"logo\" [routerLink]=\"['/search']\">\r\n      </div>\r\n    </div>\r\n    <div id=\"navbar\" class=\"navbar-collapse collapse\" *ngIf=\"loggedIn()\">\r\n\r\n      <button type=\"submit\" class=\"btn btn-default logout-collapse right\" (click)=\"logout()\"><span class=\"glyphicon glyphicon-off\"></span> Logout</button>\r\n      <p class=\"right\">Signed in as <strong>{{ currentUser?.username }}</strong></p>\r\n\r\n    </div>\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ "../../../../../src/app/shared-components/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_notify_service__ = __webpack_require__("../../../../../src/app/_services/notify.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("../../../../../src/app/_services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(authService, router, notifyService) {
        this.authService = authService;
        this.router = router;
        this.notifyService = notifyService;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.currentUser = this.authService.currentUser;
    };
    HeaderComponent.prototype.logout = function () {
        this.authService.userToken = null;
        this.authService.currentUser = null;
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        this.notifyService.success("Logged out.");
        this.router.navigate(["/auth"]);
    };
    HeaderComponent.prototype.loggedIn = function () {
        this.currentUser = this.authService.currentUser;
        return this.authService.loggedIn();
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'app-header',
            template: __webpack_require__("../../../../../src/app/shared-components/header/header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared-components/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_0__services_notify_service__["a" /* NotifyService */]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared-components/shared-components.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__header_header_component__ = __webpack_require__("../../../../../src/app/shared-components/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__footer_footer_component__ = __webpack_require__("../../../../../src/app/shared-components/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap__ = __webpack_require__("../../../../ngx-bootstrap/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// anngular modules



// custom components


// 3RD party modules

var SharedComponentsModule = /** @class */ (function () {
    function SharedComponentsModule() {
    }
    SharedComponentsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap__["b" /* BsDropdownModule */].forRoot()
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_4__footer_footer_component__["a" /* FooterComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_4__footer_footer_component__["a" /* FooterComponent */]
            ]
        })
    ], SharedComponentsModule);
    return SharedComponentsModule;
}());



/***/ }),

/***/ "../../../../../src/assets/configuration.json":
/***/ (function(module, exports) {

module.exports = {"DevelopmentApiAdress":"http://localhost:5000/api/","ProductionApiAdress":"api/","SchedulerStartDayHour":"7","SchedulerEndDayHour":"24","SchedulerAllDayPanel":false,"SchedulerShowCurrentTimeIndicator":true,"SchedulerLargeSizeViews":["day","week","workWeek","month"],"SchedulerLargeSizeCurrentView":"week","SchedulerSmallSizeViews":["agenda"],"SchedulerSmallSizeCurrentView":"agenda"}

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    apiUrl: __webpack_require__("../../../../../src/assets/configuration.json").DevelopmentApiAdress,
    ngVersion: __webpack_require__("../../../../../package.json").version
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__("../../../../../src/polyfills.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app___ = __webpack_require__("../../../../../src/app/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");





if (__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app___["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "../../../../../src/polyfills.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
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


















/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map