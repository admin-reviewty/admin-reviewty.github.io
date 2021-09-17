(self["webpackChunkadmin_angular"] = self["webpackChunkadmin_angular"] || []).push([["main"],{

/***/ 98255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 98255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 90158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _auth_guards_anonymous_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth/guards/anonymous.guard */ 12572);
/* harmony import */ var _auth_guards_authenticated_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth/guards/authenticated.guard */ 58901);
/* harmony import */ var _auth_pages_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth/pages/login/login.component */ 61741);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);






const routes = [
    {
        path: 'login',
        component: _auth_pages_login_login_component__WEBPACK_IMPORTED_MODULE_2__.LoginComponent,
        canActivate: [_auth_guards_anonymous_guard__WEBPACK_IMPORTED_MODULE_0__.AnonymousGuard],
    },
    {
        path: '',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_pages_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/pages.module */ 18950)).then((m) => m.PagesModule),
        canLoad: [_auth_guards_authenticated_guard__WEBPACK_IMPORTED_MODULE_1__.AuthenticatedGuard],
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] }); })();


/***/ }),

/***/ 55041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ 70325);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 71258);



class AppComponent {
    constructor(translateService) {
        this.translateService = translateService;
        this.translateService.setDefaultLang('vi');
    }
    ngOnInit() { }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslateService)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 36747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HttpLoaderFactory": () => (/* binding */ HttpLoaderFactory),
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ 71570);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ 20718);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ 53882);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ 70325);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/http-loader */ 49476);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_common_locales_en__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/locales/en */ 14289);
/* harmony import */ var _angular_common_locales_en__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_en__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/i18n */ 54523);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 90158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ 55041);
/* harmony import */ var _graphql_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./graphql.module */ 93756);
/* harmony import */ var _auth_auth_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth/auth.module */ 71674);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2316);





// config angular i18n


// config ng-zorro-antd i18n







(0,_angular_common__WEBPACK_IMPORTED_MODULE_5__.registerLocaleData)((_angular_common_locales_en__WEBPACK_IMPORTED_MODULE_0___default()));
// AoT requires an exported function for factories
function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_6__.TranslateHttpLoader(http);
}
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ providers: [{ provide: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_8__.NZ_I18N, useValue: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_8__.en_US }], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.BrowserModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__.BrowserAnimationsModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
            _graphql_module__WEBPACK_IMPORTED_MODULE_3__.GraphQLModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClientModule,
            _auth_auth_module__WEBPACK_IMPORTED_MODULE_4__.AuthModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslateModule.forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslateLoader,
                    useFactory: HttpLoaderFactory,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClient],
                },
            }),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.BrowserModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__.BrowserAnimationsModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
        _graphql_module__WEBPACK_IMPORTED_MODULE_3__.GraphQLModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClientModule,
        _auth_auth_module__WEBPACK_IMPORTED_MODULE_4__.AuthModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslateModule] }); })();


/***/ }),

/***/ 71674:
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthModule": () => (/* binding */ AuthModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/form */ 32734);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/button */ 56079);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/input */ 29422);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/grid */ 95039);
/* harmony import */ var ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/checkbox */ 23530);
/* harmony import */ var ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/alert */ 83015);
/* harmony import */ var _guards_authenticated_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./guards/authenticated.guard */ 58901);
/* harmony import */ var _guards_anonymous_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./guards/anonymous.guard */ 12572);
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/login/login.component */ 61741);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ 70325);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);














class AuthModule {
}
AuthModule.ɵfac = function AuthModule_Factory(t) { return new (t || AuthModule)(); };
AuthModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AuthModule });
AuthModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ providers: [_guards_authenticated_guard__WEBPACK_IMPORTED_MODULE_0__.AuthenticatedGuard, _guards_anonymous_guard__WEBPACK_IMPORTED_MODULE_1__.AnonymousGuard], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_6__.NzFormModule,
            ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_7__.NzButtonModule,
            ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_8__.NzInputModule,
            ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_9__.NzGridModule,
            ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_10__.NzCheckboxModule,
            ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_11__.NzAlertModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslateModule.forChild(),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AuthModule, { declarations: [_pages_login_login_component__WEBPACK_IMPORTED_MODULE_2__.LoginComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
        ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_6__.NzFormModule,
        ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_7__.NzButtonModule,
        ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_8__.NzInputModule,
        ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_9__.NzGridModule,
        ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_10__.NzCheckboxModule,
        ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_11__.NzAlertModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslateModule] }); })();


/***/ }),

/***/ 12572:
/*!************************************************!*\
  !*** ./src/app/auth/guards/anonymous.guard.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnonymousGuard": () => (/* binding */ AnonymousGuard)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 33927);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _graphql_graphql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../graphql/graphql */ 44092);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);




class AnonymousGuard {
    constructor(meGQL, router) {
        this.meGQL = meGQL;
        this.router = router;
    }
    canActivate() {
        return this.meGQL
            .fetch({}, {
            errorPolicy: 'all',
        })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((result) => {
            var _a;
            if ((_a = result.data) === null || _a === void 0 ? void 0 : _a.me) {
                this.router.navigate(['/']);
                return false;
            }
            if (result.error || result.errors) {
                return true;
            }
            return true;
        }));
    }
}
AnonymousGuard.ɵfac = function AnonymousGuard_Factory(t) { return new (t || AnonymousGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_graphql_graphql__WEBPACK_IMPORTED_MODULE_0__.MeGQL), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router)); };
AnonymousGuard.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: AnonymousGuard, factory: AnonymousGuard.ɵfac });


/***/ }),

/***/ 58901:
/*!****************************************************!*\
  !*** ./src/app/auth/guards/authenticated.guard.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthenticatedGuard": () => (/* binding */ AuthenticatedGuard)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 33927);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _graphql_graphql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../graphql/graphql */ 44092);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);




class AuthenticatedGuard {
    constructor(meGQL, router) {
        this.meGQL = meGQL;
        this.router = router;
    }
    canActivate() {
        return this.meGQL
            .fetch({}, {
            errorPolicy: 'all',
        })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((result) => {
            var _a;
            if ((_a = result.data) === null || _a === void 0 ? void 0 : _a.me) {
                return true;
            }
            if (result.error || result.errors) {
                this.router.navigate(['/login']);
                return false;
            }
            return false;
        }));
    }
    canLoad() {
        return this.canActivate();
    }
}
AuthenticatedGuard.ɵfac = function AuthenticatedGuard_Factory(t) { return new (t || AuthenticatedGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_graphql_graphql__WEBPACK_IMPORTED_MODULE_0__.MeGQL), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router)); };
AuthenticatedGuard.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: AuthenticatedGuard, factory: AuthenticatedGuard.ɵfac });


/***/ }),

/***/ 61741:
/*!*****************************************************!*\
  !*** ./src/app/auth/pages/login/login.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _graphql_graphql__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../graphql/graphql */ 44092);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/form */ 32734);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/grid */ 95039);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 29910);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/input */ 29422);
/* harmony import */ var ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/checkbox */ 23530);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/button */ 56079);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 94772);
/* harmony import */ var ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/alert */ 83015);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/core */ 70325);
















function LoginComponent_nz_alert_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "nz-alert", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "translate");
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzMessage", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 2, "auth.incorrect_email_or_password"))("nzShowIcon", true);
} }
class LoginComponent {
    constructor(fb, loginGQL, router) {
        this.fb = fb;
        this.loginGQL = loginGQL;
        this.router = router;
        this.submitting = false;
    }
    ngOnInit() {
        this.validateForm = this.fb.group({
            email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
            password: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
            remember: [true],
        });
    }
    submitForm() {
        Object.values(this.validateForm.controls).forEach((control) => {
            control.markAsDirty();
            control.updateValueAndValidity();
        });
        if (this.validateForm.invalid) {
            return;
        }
        this.submitting = true;
        if (this.validateForm.valid) {
            this.loginGQL
                .mutate({
                email: this.validateForm.controls.email.value,
                password: this.validateForm.controls.password.value,
            }, {
                errorPolicy: 'all',
            })
                .subscribe((result) => {
                var _a;
                this.submitting = false;
                if ((_a = result.data) === null || _a === void 0 ? void 0 : _a.login) {
                    localStorage.setItem(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.tokenKey, result.data.login.token);
                    this.router.navigateByUrl('/');
                }
                if (result.errors) {
                    this.errors = result.errors;
                }
            }, () => {
                this.submitting = false;
            });
        }
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_graphql_graphql__WEBPACK_IMPORTED_MODULE_1__.LoginGQL), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router)); };
LoginComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 24, vars: 6, consts: [[1, "layout-container"], [1, "layout-content"], [1, "logo-container"], ["src", "/assets/images/logo.svg", "alt", "logo", 1, "logo"], ["nzType", "error", "style", "margin-bottom: 24px", 3, "nzMessage", "nzShowIcon", 4, "ngIf"], ["nz-form", "", 1, "login-form", 3, "formGroup", "ngSubmit"], ["nzErrorTip", "Please input your username!"], ["nzPrefixIcon", "user"], ["type", "email", "nz-input", "", "formControlName", "email", "placeholder", "Email"], ["nzErrorTip", "Please input your Password!"], ["nzPrefixIcon", "lock"], ["type", "password", "nz-input", "", "formControlName", "password", "placeholder", "Password"], ["nz-row", "", 1, "login-form-margin"], ["nz-col", "", 3, "nzSpan"], ["nz-checkbox", "", "formControlName", "remember"], [1, "login-form-forgot"], ["nz-button", "", 1, "login-form-button", "login-form-margin", 3, "nzType", "nzLoading"], ["nzType", "error", 2, "margin-bottom", "24px", 3, "nzMessage", "nzShowIcon"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, LoginComponent_nz_alert_4_Template, 2, 4, "nz-alert", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_5_listener() { return ctx.submitForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "nz-form-control", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "nz-input-group", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "nz-form-control", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "nz-input-group", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Remember me");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Forgot password");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, " Log in ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.submitting && ctx.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.validateForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzSpan", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzSpan", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzType", "primary")("nzLoading", ctx.submitting);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_6__.NzFormDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_7__.NzRowDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_6__.NzFormItemComponent, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_7__.NzColDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_6__.NzFormControlComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_8__["ɵNzTransitionPatchDirective"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_9__.NzInputGroupComponent, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_9__.NzInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_10__.NzCheckboxComponent, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_11__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_12__.NzWaveDirective, ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_13__.NzAlertComponent], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslatePipe], styles: [".layout-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  height: 100vh;\n}\n\n.layout-content[_ngcontent-%COMP%] {\n  width: 368px;\n  margin: 0 auto;\n}\n\n.logo-container[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 1rem;\n}\n\n.login-form-margin[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n\n.login-form-forgot[_ngcontent-%COMP%] {\n  float: right;\n}\n\n.login-form-button[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n@media screen and (max-width: 576px) {\n  .layout-content[_ngcontent-%COMP%] {\n    width: 95%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLGNBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLFVBQUE7RUFDRjtBQUNGIiwiZmlsZSI6ImxvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxheW91dC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDEwMHZoO1xufVxuXG4ubGF5b3V0LWNvbnRlbnQge1xuICB3aWR0aDogMzY4cHg7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4ubG9nby1jb250YWluZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG5cbi5sb2dpbi1mb3JtLW1hcmdpbiB7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG59XG5cbi5sb2dpbi1mb3JtLWZvcmdvdCB7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuLmxvZ2luLWZvcm0tYnV0dG9uIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gIC5sYXlvdXQtY29udGVudCB7XG4gICAgd2lkdGg6IDk1JTtcbiAgfVxufVxuIl19 */"] });


/***/ }),

/***/ 93756:
/*!***********************************!*\
  !*** ./src/app/graphql.module.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createApollo": () => (/* binding */ createApollo),
/* harmony export */   "GraphQLModule": () => (/* binding */ GraphQLModule)
/* harmony export */ });
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! apollo-angular */ 79424);
/* harmony import */ var _apollo_client_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client/core */ 46954);
/* harmony import */ var _apollo_client_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/client/core */ 65088);
/* harmony import */ var apollo_angular_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! apollo-angular/http */ 70696);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 53882);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);






function createApollo(httpLink) {
    const http = httpLink.create({
        uri: _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.graphqlUri,
        withCredentials: true,
    });
    const middleware = new _apollo_client_core__WEBPACK_IMPORTED_MODULE_1__.ApolloLink((operation, forward) => {
        operation.setContext({
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.tokenKey) || null}`),
        });
        return forward(operation);
    });
    const link = middleware.concat(http);
    return {
        link,
        cache: new _apollo_client_core__WEBPACK_IMPORTED_MODULE_3__.InMemoryCache(),
    };
}
class GraphQLModule {
}
GraphQLModule.ɵfac = function GraphQLModule_Factory(t) { return new (t || GraphQLModule)(); };
GraphQLModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: GraphQLModule });
GraphQLModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ providers: [
        {
            provide: apollo_angular__WEBPACK_IMPORTED_MODULE_5__.APOLLO_OPTIONS,
            useFactory: createApollo,
            deps: [apollo_angular_http__WEBPACK_IMPORTED_MODULE_6__.HttpLink],
        },
    ] });


/***/ }),

/***/ 92340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: true,
    graphqlUri: 'https://api.admin.review-ty.com/graphql',
    apiUri: 'https://api.admin.review-ty.com/admin-api',
    tokenKey: 'rvt_tk',
    videoCategoryId: '7',
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 44092:
/*!********************************!*\
  !*** ./src/graphql/graphql.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountType": () => (/* binding */ AccountType),
/* harmony export */   "BaumannSkinType": () => (/* binding */ BaumannSkinType),
/* harmony export */   "BrandStatus": () => (/* binding */ BrandStatus),
/* harmony export */   "BrandTypeValue": () => (/* binding */ BrandTypeValue),
/* harmony export */   "CategoryStatus": () => (/* binding */ CategoryStatus),
/* harmony export */   "ChannelCommand": () => (/* binding */ ChannelCommand),
/* harmony export */   "CommonErrorCode": () => (/* binding */ CommonErrorCode),
/* harmony export */   "Currency": () => (/* binding */ Currency),
/* harmony export */   "DeviceType": () => (/* binding */ DeviceType),
/* harmony export */   "EcommerceSite": () => (/* binding */ EcommerceSite),
/* harmony export */   "ErrorStatus": () => (/* binding */ ErrorStatus),
/* harmony export */   "EventCommentStatus": () => (/* binding */ EventCommentStatus),
/* harmony export */   "EventType": () => (/* binding */ EventType),
/* harmony export */   "EwgRiskType": () => (/* binding */ EwgRiskType),
/* harmony export */   "FixedSize": () => (/* binding */ FixedSize),
/* harmony export */   "Gender": () => (/* binding */ Gender),
/* harmony export */   "LanguageCode": () => (/* binding */ LanguageCode),
/* harmony export */   "LiveStreamErrorCode": () => (/* binding */ LiveStreamErrorCode),
/* harmony export */   "LiveStreamStatus": () => (/* binding */ LiveStreamStatus),
/* harmony export */   "MediaType": () => (/* binding */ MediaType),
/* harmony export */   "OauthProvider": () => (/* binding */ OauthProvider),
/* harmony export */   "OrderBy": () => (/* binding */ OrderBy),
/* harmony export */   "OrderErrorCode": () => (/* binding */ OrderErrorCode),
/* harmony export */   "OrderStatus": () => (/* binding */ OrderStatus),
/* harmony export */   "PackagingtUnit": () => (/* binding */ PackagingtUnit),
/* harmony export */   "PointStatus": () => (/* binding */ PointStatus),
/* harmony export */   "PointType": () => (/* binding */ PointType),
/* harmony export */   "PostCommentReportType": () => (/* binding */ PostCommentReportType),
/* harmony export */   "PostCommentStatus": () => (/* binding */ PostCommentStatus),
/* harmony export */   "PostCreateErrorCode": () => (/* binding */ PostCreateErrorCode),
/* harmony export */   "PostQueryType": () => (/* binding */ PostQueryType),
/* harmony export */   "PostReportType": () => (/* binding */ PostReportType),
/* harmony export */   "PostStatus": () => (/* binding */ PostStatus),
/* harmony export */   "ProductEditStatus": () => (/* binding */ ProductEditStatus),
/* harmony export */   "ProductStatus": () => (/* binding */ ProductStatus),
/* harmony export */   "ReactStatus": () => (/* binding */ ReactStatus),
/* harmony export */   "ReviewReportStatus": () => (/* binding */ ReviewReportStatus),
/* harmony export */   "ReviewReportType": () => (/* binding */ ReviewReportType),
/* harmony export */   "ReviewStatus": () => (/* binding */ ReviewStatus),
/* harmony export */   "Role": () => (/* binding */ Role),
/* harmony export */   "ShopMutationErrorCode": () => (/* binding */ ShopMutationErrorCode),
/* harmony export */   "ShopStatus": () => (/* binding */ ShopStatus),
/* harmony export */   "SkinType": () => (/* binding */ SkinType),
/* harmony export */   "SpecialIngredientFunctionType": () => (/* binding */ SpecialIngredientFunctionType),
/* harmony export */   "Unit": () => (/* binding */ Unit),
/* harmony export */   "UserDeleteReason": () => (/* binding */ UserDeleteReason),
/* harmony export */   "VideoStatus": () => (/* binding */ VideoStatus),
/* harmony export */   "BrandListFieldsFragmentDoc": () => (/* binding */ BrandListFieldsFragmentDoc),
/* harmony export */   "CautionDetailsFragmentDoc": () => (/* binding */ CautionDetailsFragmentDoc),
/* harmony export */   "FunctionDetailsFragmentDoc": () => (/* binding */ FunctionDetailsFragmentDoc),
/* harmony export */   "IngredientDetailsFragmentDoc": () => (/* binding */ IngredientDetailsFragmentDoc),
/* harmony export */   "FunctionFieldsFragmentDoc": () => (/* binding */ FunctionFieldsFragmentDoc),
/* harmony export */   "IngredientCompactFieldsFragmentDoc": () => (/* binding */ IngredientCompactFieldsFragmentDoc),
/* harmony export */   "SearchCautionTranslationFragmentDoc": () => (/* binding */ SearchCautionTranslationFragmentDoc),
/* harmony export */   "SearchFunctionTranslationFragmentDoc": () => (/* binding */ SearchFunctionTranslationFragmentDoc),
/* harmony export */   "SearchIngredientTranslationFragmentDoc": () => (/* binding */ SearchIngredientTranslationFragmentDoc),
/* harmony export */   "PostCommentFieldsFragmentDoc": () => (/* binding */ PostCommentFieldsFragmentDoc),
/* harmony export */   "PostCommentReportFieldFragmentDoc": () => (/* binding */ PostCommentReportFieldFragmentDoc),
/* harmony export */   "ProductCardFragmentDoc": () => (/* binding */ ProductCardFragmentDoc),
/* harmony export */   "PostCardFragmentDoc": () => (/* binding */ PostCardFragmentDoc),
/* harmony export */   "VideoFieldsFragmentDoc": () => (/* binding */ VideoFieldsFragmentDoc),
/* harmony export */   "ProductVideoFieldsFragmentDoc": () => (/* binding */ ProductVideoFieldsFragmentDoc),
/* harmony export */   "VideoCardFragmentDoc": () => (/* binding */ VideoCardFragmentDoc),
/* harmony export */   "ProductListFieldsFragmentDoc": () => (/* binding */ ProductListFieldsFragmentDoc),
/* harmony export */   "ProductRequestFieldFragmentDoc": () => (/* binding */ ProductRequestFieldFragmentDoc),
/* harmony export */   "ReviewReportListFieldsFragmentDoc": () => (/* binding */ ReviewReportListFieldsFragmentDoc),
/* harmony export */   "ReviewListFieldsFragmentDoc": () => (/* binding */ ReviewListFieldsFragmentDoc),
/* harmony export */   "ReportListFieldsWithReviewFragmentDoc": () => (/* binding */ ReportListFieldsWithReviewFragmentDoc),
/* harmony export */   "MentionUserFieldsFragmentDoc": () => (/* binding */ MentionUserFieldsFragmentDoc),
/* harmony export */   "LoginDocument": () => (/* binding */ LoginDocument),
/* harmony export */   "LoginGQL": () => (/* binding */ LoginGQL),
/* harmony export */   "MeDocument": () => (/* binding */ MeDocument),
/* harmony export */   "MeGQL": () => (/* binding */ MeGQL),
/* harmony export */   "CreateBannersDocument": () => (/* binding */ CreateBannersDocument),
/* harmony export */   "CreateBannersGQL": () => (/* binding */ CreateBannersGQL),
/* harmony export */   "GetBannerListDocument": () => (/* binding */ GetBannerListDocument),
/* harmony export */   "GetBannerListGQL": () => (/* binding */ GetBannerListGQL),
/* harmony export */   "CreateBrandDocument": () => (/* binding */ CreateBrandDocument),
/* harmony export */   "CreateBrandGQL": () => (/* binding */ CreateBrandGQL),
/* harmony export */   "GetBrandDetailsDocument": () => (/* binding */ GetBrandDetailsDocument),
/* harmony export */   "GetBrandDetailsGQL": () => (/* binding */ GetBrandDetailsGQL),
/* harmony export */   "GetBrandListDocument": () => (/* binding */ GetBrandListDocument),
/* harmony export */   "GetBrandListGQL": () => (/* binding */ GetBrandListGQL),
/* harmony export */   "SearchBrandsDocument": () => (/* binding */ SearchBrandsDocument),
/* harmony export */   "SearchBrandsGQL": () => (/* binding */ SearchBrandsGQL),
/* harmony export */   "UpdateBrandDocument": () => (/* binding */ UpdateBrandDocument),
/* harmony export */   "UpdateBrandGQL": () => (/* binding */ UpdateBrandGQL),
/* harmony export */   "CreateCategoryDocument": () => (/* binding */ CreateCategoryDocument),
/* harmony export */   "CreateCategoryGQL": () => (/* binding */ CreateCategoryGQL),
/* harmony export */   "GetCategoryDetailsDocument": () => (/* binding */ GetCategoryDetailsDocument),
/* harmony export */   "GetCategoryDetailsGQL": () => (/* binding */ GetCategoryDetailsGQL),
/* harmony export */   "GetCategoryListDocument": () => (/* binding */ GetCategoryListDocument),
/* harmony export */   "GetCategoryListGQL": () => (/* binding */ GetCategoryListGQL),
/* harmony export */   "GetHierarchicalCategoriesDocument": () => (/* binding */ GetHierarchicalCategoriesDocument),
/* harmony export */   "GetHierarchicalCategoriesGQL": () => (/* binding */ GetHierarchicalCategoriesGQL),
/* harmony export */   "UpdateCategoryDocument": () => (/* binding */ UpdateCategoryDocument),
/* harmony export */   "UpdateCategoryGQL": () => (/* binding */ UpdateCategoryGQL),
/* harmony export */   "AwardEventCommentDocument": () => (/* binding */ AwardEventCommentDocument),
/* harmony export */   "AwardEventCommentGQL": () => (/* binding */ AwardEventCommentGQL),
/* harmony export */   "AwardEventCommentsDocument": () => (/* binding */ AwardEventCommentsDocument),
/* harmony export */   "AwardEventCommentsGQL": () => (/* binding */ AwardEventCommentsGQL),
/* harmony export */   "CreateEventNotificationDocument": () => (/* binding */ CreateEventNotificationDocument),
/* harmony export */   "CreateEventNotificationGQL": () => (/* binding */ CreateEventNotificationGQL),
/* harmony export */   "CreateEventDocument": () => (/* binding */ CreateEventDocument),
/* harmony export */   "CreateEventGQL": () => (/* binding */ CreateEventGQL),
/* harmony export */   "DeleteEventNotificationDocument": () => (/* binding */ DeleteEventNotificationDocument),
/* harmony export */   "DeleteEventNotificationGQL": () => (/* binding */ DeleteEventNotificationGQL),
/* harmony export */   "DeleteEventDocument": () => (/* binding */ DeleteEventDocument),
/* harmony export */   "DeleteEventGQL": () => (/* binding */ DeleteEventGQL),
/* harmony export */   "GetEventCommentsDocument": () => (/* binding */ GetEventCommentsDocument),
/* harmony export */   "GetEventCommentsGQL": () => (/* binding */ GetEventCommentsGQL),
/* harmony export */   "GetEventDetailsDocument": () => (/* binding */ GetEventDetailsDocument),
/* harmony export */   "GetEventDetailsGQL": () => (/* binding */ GetEventDetailsGQL),
/* harmony export */   "GetEventListDocument": () => (/* binding */ GetEventListDocument),
/* harmony export */   "GetEventListGQL": () => (/* binding */ GetEventListGQL),
/* harmony export */   "ReclaimEventCommentDocument": () => (/* binding */ ReclaimEventCommentDocument),
/* harmony export */   "ReclaimEventCommentGQL": () => (/* binding */ ReclaimEventCommentGQL),
/* harmony export */   "UpdateEventNotificationDocument": () => (/* binding */ UpdateEventNotificationDocument),
/* harmony export */   "UpdateEventNotificationGQL": () => (/* binding */ UpdateEventNotificationGQL),
/* harmony export */   "UpdateEventDocument": () => (/* binding */ UpdateEventDocument),
/* harmony export */   "UpdateEventGQL": () => (/* binding */ UpdateEventGQL),
/* harmony export */   "AnalyzeIngredientsDocument": () => (/* binding */ AnalyzeIngredientsDocument),
/* harmony export */   "AnalyzeIngredientsGQL": () => (/* binding */ AnalyzeIngredientsGQL),
/* harmony export */   "CreateCautionDocument": () => (/* binding */ CreateCautionDocument),
/* harmony export */   "CreateCautionGQL": () => (/* binding */ CreateCautionGQL),
/* harmony export */   "CreateFunctionDocument": () => (/* binding */ CreateFunctionDocument),
/* harmony export */   "CreateFunctionGQL": () => (/* binding */ CreateFunctionGQL),
/* harmony export */   "CreateIngredientDocument": () => (/* binding */ CreateIngredientDocument),
/* harmony export */   "CreateIngredientGQL": () => (/* binding */ CreateIngredientGQL),
/* harmony export */   "GetCautionDetailsDocument": () => (/* binding */ GetCautionDetailsDocument),
/* harmony export */   "GetCautionDetailsGQL": () => (/* binding */ GetCautionDetailsGQL),
/* harmony export */   "GetCautionListDocument": () => (/* binding */ GetCautionListDocument),
/* harmony export */   "GetCautionListGQL": () => (/* binding */ GetCautionListGQL),
/* harmony export */   "GetFunctionDetailsDocument": () => (/* binding */ GetFunctionDetailsDocument),
/* harmony export */   "GetFunctionDetailsGQL": () => (/* binding */ GetFunctionDetailsGQL),
/* harmony export */   "GetFunctionListDocument": () => (/* binding */ GetFunctionListDocument),
/* harmony export */   "GetFunctionListGQL": () => (/* binding */ GetFunctionListGQL),
/* harmony export */   "GetIngredientDetailsDocument": () => (/* binding */ GetIngredientDetailsDocument),
/* harmony export */   "GetIngredientDetailsGQL": () => (/* binding */ GetIngredientDetailsGQL),
/* harmony export */   "GetIngredientListDocument": () => (/* binding */ GetIngredientListDocument),
/* harmony export */   "GetIngredientListGQL": () => (/* binding */ GetIngredientListGQL),
/* harmony export */   "SearchCautionTranslationsDocument": () => (/* binding */ SearchCautionTranslationsDocument),
/* harmony export */   "SearchCautionTranslationsGQL": () => (/* binding */ SearchCautionTranslationsGQL),
/* harmony export */   "SearchFunctionTranslationsDocument": () => (/* binding */ SearchFunctionTranslationsDocument),
/* harmony export */   "SearchFunctionTranslationsGQL": () => (/* binding */ SearchFunctionTranslationsGQL),
/* harmony export */   "SearchIngredientTranslationsDocument": () => (/* binding */ SearchIngredientTranslationsDocument),
/* harmony export */   "SearchIngredientTranslationsGQL": () => (/* binding */ SearchIngredientTranslationsGQL),
/* harmony export */   "UpdateCautionDocument": () => (/* binding */ UpdateCautionDocument),
/* harmony export */   "UpdateCautionGQL": () => (/* binding */ UpdateCautionGQL),
/* harmony export */   "UpdateFunctionDocument": () => (/* binding */ UpdateFunctionDocument),
/* harmony export */   "UpdateFunctionGQL": () => (/* binding */ UpdateFunctionGQL),
/* harmony export */   "UpdateIngredientDocument": () => (/* binding */ UpdateIngredientDocument),
/* harmony export */   "UpdateIngredientGQL": () => (/* binding */ UpdateIngredientGQL),
/* harmony export */   "ApprovePostCommentReportDocument": () => (/* binding */ ApprovePostCommentReportDocument),
/* harmony export */   "ApprovePostCommentReportGQL": () => (/* binding */ ApprovePostCommentReportGQL),
/* harmony export */   "ApprovePostDocument": () => (/* binding */ ApprovePostDocument),
/* harmony export */   "ApprovePostGQL": () => (/* binding */ ApprovePostGQL),
/* harmony export */   "GetPostCommentReportListDocument": () => (/* binding */ GetPostCommentReportListDocument),
/* harmony export */   "GetPostCommentReportListGQL": () => (/* binding */ GetPostCommentReportListGQL),
/* harmony export */   "GetPostListDocument": () => (/* binding */ GetPostListDocument),
/* harmony export */   "GetPostListGQL": () => (/* binding */ GetPostListGQL),
/* harmony export */   "GetVideoPostListDocument": () => (/* binding */ GetVideoPostListDocument),
/* harmony export */   "GetVideoPostListGQL": () => (/* binding */ GetVideoPostListGQL),
/* harmony export */   "RejectPostCommentReportDocument": () => (/* binding */ RejectPostCommentReportDocument),
/* harmony export */   "RejectPostCommentReportGQL": () => (/* binding */ RejectPostCommentReportGQL),
/* harmony export */   "RejectPostDocument": () => (/* binding */ RejectPostDocument),
/* harmony export */   "RejectPostGQL": () => (/* binding */ RejectPostGQL),
/* harmony export */   "CreateProductDocument": () => (/* binding */ CreateProductDocument),
/* harmony export */   "CreateProductGQL": () => (/* binding */ CreateProductGQL),
/* harmony export */   "GetProductDetailsDocument": () => (/* binding */ GetProductDetailsDocument),
/* harmony export */   "GetProductDetailsGQL": () => (/* binding */ GetProductDetailsGQL),
/* harmony export */   "GetProductListDocument": () => (/* binding */ GetProductListDocument),
/* harmony export */   "GetProductListGQL": () => (/* binding */ GetProductListGQL),
/* harmony export */   "GetProductRequestsDocument": () => (/* binding */ GetProductRequestsDocument),
/* harmony export */   "GetProductRequestsGQL": () => (/* binding */ GetProductRequestsGQL),
/* harmony export */   "SearchProductListDocument": () => (/* binding */ SearchProductListDocument),
/* harmony export */   "SearchProductListGQL": () => (/* binding */ SearchProductListGQL),
/* harmony export */   "SearchProductsDocument": () => (/* binding */ SearchProductsDocument),
/* harmony export */   "SearchProductsGQL": () => (/* binding */ SearchProductsGQL),
/* harmony export */   "UpdateProductRequestDocument": () => (/* binding */ UpdateProductRequestDocument),
/* harmony export */   "UpdateProductRequestGQL": () => (/* binding */ UpdateProductRequestGQL),
/* harmony export */   "UpdateProductDocument": () => (/* binding */ UpdateProductDocument),
/* harmony export */   "UpdateProductGQL": () => (/* binding */ UpdateProductGQL),
/* harmony export */   "ApproveReviewReportDocument": () => (/* binding */ ApproveReviewReportDocument),
/* harmony export */   "ApproveReviewReportGQL": () => (/* binding */ ApproveReviewReportGQL),
/* harmony export */   "ApproveReviewDocument": () => (/* binding */ ApproveReviewDocument),
/* harmony export */   "ApproveReviewGQL": () => (/* binding */ ApproveReviewGQL),
/* harmony export */   "GetReportsOfReviewDocument": () => (/* binding */ GetReportsOfReviewDocument),
/* harmony export */   "GetReportsOfReviewGQL": () => (/* binding */ GetReportsOfReviewGQL),
/* harmony export */   "GetReviewListDocument": () => (/* binding */ GetReviewListDocument),
/* harmony export */   "GetReviewListGQL": () => (/* binding */ GetReviewListGQL),
/* harmony export */   "GetReviewReportListDocument": () => (/* binding */ GetReviewReportListDocument),
/* harmony export */   "GetReviewReportListGQL": () => (/* binding */ GetReviewReportListGQL),
/* harmony export */   "RejectReviewReportDocument": () => (/* binding */ RejectReviewReportDocument),
/* harmony export */   "RejectReviewReportGQL": () => (/* binding */ RejectReviewReportGQL),
/* harmony export */   "RejectReviewDocument": () => (/* binding */ RejectReviewDocument),
/* harmony export */   "RejectReviewGQL": () => (/* binding */ RejectReviewGQL),
/* harmony export */   "ApproveShopDocument": () => (/* binding */ ApproveShopDocument),
/* harmony export */   "ApproveShopGQL": () => (/* binding */ ApproveShopGQL),
/* harmony export */   "BlockShopDocument": () => (/* binding */ BlockShopDocument),
/* harmony export */   "BlockShopGQL": () => (/* binding */ BlockShopGQL),
/* harmony export */   "GetShopDetailsDocument": () => (/* binding */ GetShopDetailsDocument),
/* harmony export */   "GetShopDetailsGQL": () => (/* binding */ GetShopDetailsGQL),
/* harmony export */   "GetShopListDocument": () => (/* binding */ GetShopListDocument),
/* harmony export */   "GetShopListGQL": () => (/* binding */ GetShopListGQL),
/* harmony export */   "UploadShopToProductsDocument": () => (/* binding */ UploadShopToProductsDocument),
/* harmony export */   "UploadShopToProductsGQL": () => (/* binding */ UploadShopToProductsGQL),
/* harmony export */   "SearchTagTranslationsDocument": () => (/* binding */ SearchTagTranslationsDocument),
/* harmony export */   "SearchTagTranslationsGQL": () => (/* binding */ SearchTagTranslationsGQL),
/* harmony export */   "GetUserDetailsDocument": () => (/* binding */ GetUserDetailsDocument),
/* harmony export */   "GetUserDetailsGQL": () => (/* binding */ GetUserDetailsGQL),
/* harmony export */   "GetUserListDocument": () => (/* binding */ GetUserListDocument),
/* harmony export */   "GetUserListGQL": () => (/* binding */ GetUserListGQL),
/* harmony export */   "BlockUserDocument": () => (/* binding */ BlockUserDocument),
/* harmony export */   "BlockUserGQL": () => (/* binding */ BlockUserGQL),
/* harmony export */   "UpgradeUserDocument": () => (/* binding */ UpgradeUserDocument),
/* harmony export */   "UpgradeUserGQL": () => (/* binding */ UpgradeUserGQL),
/* harmony export */   "SearchUsersDocument": () => (/* binding */ SearchUsersDocument),
/* harmony export */   "SearchUsersGQL": () => (/* binding */ SearchUsersGQL)
/* harmony export */ });
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-angular */ 21187);
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apollo-angular */ 79424);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);




var AccountType;
(function (AccountType) {
    AccountType["Person"] = "PERSON";
    AccountType["Organization"] = "ORGANIZATION";
})(AccountType || (AccountType = {}));
var BaumannSkinType;
(function (BaumannSkinType) {
    BaumannSkinType["Dspt"] = "DSPT";
    BaumannSkinType["Dsnt"] = "DSNT";
    BaumannSkinType["Dspw"] = "DSPW";
    BaumannSkinType["Dsnw"] = "DSNW";
    BaumannSkinType["Ospt"] = "OSPT";
    BaumannSkinType["Osnt"] = "OSNT";
    BaumannSkinType["Ospw"] = "OSPW";
    BaumannSkinType["Osnw"] = "OSNW";
    BaumannSkinType["Orpt"] = "ORPT";
    BaumannSkinType["Ornt"] = "ORNT";
    BaumannSkinType["Orpw"] = "ORPW";
    BaumannSkinType["Ornw"] = "ORNW";
    BaumannSkinType["Drpt"] = "DRPT";
    BaumannSkinType["Drnt"] = "DRNT";
    BaumannSkinType["Drpw"] = "DRPW";
    BaumannSkinType["Drnw"] = "DRNW";
})(BaumannSkinType || (BaumannSkinType = {}));
var BrandStatus;
(function (BrandStatus) {
    BrandStatus["Active"] = "ACTIVE";
    BrandStatus["Inactive"] = "INACTIVE";
})(BrandStatus || (BrandStatus = {}));
var BrandTypeValue;
(function (BrandTypeValue) {
    BrandTypeValue["DepartmentStore"] = "DEPARTMENT_STORE";
    BrandTypeValue["DrugStore"] = "DRUG_STORE";
    BrandTypeValue["RoadStore"] = "ROAD_STORE";
    BrandTypeValue["OnlineOther"] = "ONLINE_OTHER";
})(BrandTypeValue || (BrandTypeValue = {}));
var CategoryStatus;
(function (CategoryStatus) {
    CategoryStatus["Inactive"] = "INACTIVE";
    CategoryStatus["Active"] = "ACTIVE";
})(CategoryStatus || (CategoryStatus = {}));
var ChannelCommand;
(function (ChannelCommand) {
    ChannelCommand["Start"] = "START";
    ChannelCommand["Stop"] = "STOP";
    ChannelCommand["Status"] = "STATUS";
})(ChannelCommand || (ChannelCommand = {}));
var CommonErrorCode;
(function (CommonErrorCode) {
    CommonErrorCode["InternalServerError"] = "INTERNAL_SERVER_ERROR";
    CommonErrorCode["Forbidden"] = "FORBIDDEN";
    CommonErrorCode["NotFound"] = "NOT_FOUND";
})(CommonErrorCode || (CommonErrorCode = {}));
var Currency;
(function (Currency) {
    Currency["Vnd"] = "VND";
})(Currency || (Currency = {}));
var DeviceType;
(function (DeviceType) {
    DeviceType["Android"] = "ANDROID";
    DeviceType["Ios"] = "IOS";
})(DeviceType || (DeviceType = {}));
var EcommerceSite;
(function (EcommerceSite) {
    EcommerceSite["Lazada"] = "LAZADA";
    EcommerceSite["Tiki"] = "TIKI";
    EcommerceSite["Shopee"] = "SHOPEE";
})(EcommerceSite || (EcommerceSite = {}));
var ErrorStatus;
(function (ErrorStatus) {
    ErrorStatus["Unauthorized"] = "UNAUTHORIZED";
    ErrorStatus["Forbidden"] = "FORBIDDEN";
    ErrorStatus["NotFound"] = "NOT_FOUND";
    ErrorStatus["InternalServerError"] = "INTERNAL_SERVER_ERROR";
    ErrorStatus["BadRequest"] = "BAD_REQUEST";
})(ErrorStatus || (ErrorStatus = {}));
var EventCommentStatus;
(function (EventCommentStatus) {
    EventCommentStatus["Created"] = "CREATED";
    EventCommentStatus["Cancelled"] = "CANCELLED";
    EventCommentStatus["Confirmed"] = "CONFIRMED";
})(EventCommentStatus || (EventCommentStatus = {}));
var EventType;
(function (EventType) {
    EventType["Trial"] = "TRIAL";
    EventType["Sale"] = "SALE";
})(EventType || (EventType = {}));
var EwgRiskType;
(function (EwgRiskType) {
    EwgRiskType["Low"] = "LOW";
    EwgRiskType["Medium"] = "MEDIUM";
    EwgRiskType["High"] = "HIGH";
})(EwgRiskType || (EwgRiskType = {}));
var FixedSize;
(function (FixedSize) {
    FixedSize["Small"] = "SMALL";
    FixedSize["Medium"] = "MEDIUM";
    FixedSize["Large"] = "LARGE";
})(FixedSize || (FixedSize = {}));
var Gender;
(function (Gender) {
    Gender["Male"] = "MALE";
    Gender["Female"] = "FEMALE";
    Gender["Other"] = "OTHER";
})(Gender || (Gender = {}));
var LanguageCode;
(function (LanguageCode) {
    LanguageCode["Ko"] = "KO";
    LanguageCode["Vi"] = "VI";
    LanguageCode["En"] = "EN";
})(LanguageCode || (LanguageCode = {}));
var LiveStreamErrorCode;
(function (LiveStreamErrorCode) {
    LiveStreamErrorCode["HaveNotCreatedShop"] = "HAVE_NOT_CREATED_SHOP";
    LiveStreamErrorCode["ShopNotApprovedYet"] = "SHOP_NOT_APPROVED_YET";
    LiveStreamErrorCode["NotEnoughChannels"] = "NOT_ENOUGH_CHANNELS";
    LiveStreamErrorCode["ShopIsBlocked"] = "SHOP_IS_BLOCKED";
})(LiveStreamErrorCode || (LiveStreamErrorCode = {}));
var LiveStreamStatus;
(function (LiveStreamStatus) {
    LiveStreamStatus["Created"] = "CREATED";
    LiveStreamStatus["Running"] = "RUNNING";
    LiveStreamStatus["Stopped"] = "STOPPED";
})(LiveStreamStatus || (LiveStreamStatus = {}));
var MediaType;
(function (MediaType) {
    MediaType["Video"] = "VIDEO";
    MediaType["LiveStream"] = "LIVE_STREAM";
})(MediaType || (MediaType = {}));
var OauthProvider;
(function (OauthProvider) {
    OauthProvider["Facebook"] = "Facebook";
    OauthProvider["Apple"] = "Apple";
    OauthProvider["Instagram"] = "Instagram";
})(OauthProvider || (OauthProvider = {}));
var OrderBy;
(function (OrderBy) {
    OrderBy["Asc"] = "ASC";
    OrderBy["AscNullsFirst"] = "ASC_NULLS_FIRST";
    OrderBy["AscNullsLast"] = "ASC_NULLS_LAST";
    OrderBy["Desc"] = "DESC";
    OrderBy["DescNullFirst"] = "DESC_NULL_FIRST";
    OrderBy["DescNullLast"] = "DESC_NULL_LAST";
})(OrderBy || (OrderBy = {}));
var OrderErrorCode;
(function (OrderErrorCode) {
    OrderErrorCode["OrderConfirmed"] = "ORDER_CONFIRMED";
    OrderErrorCode["OrderCancelled"] = "ORDER_CANCELLED";
})(OrderErrorCode || (OrderErrorCode = {}));
var OrderStatus;
(function (OrderStatus) {
    OrderStatus["Created"] = "CREATED";
    OrderStatus["Confirmed"] = "CONFIRMED";
    OrderStatus["Cancelled"] = "CANCELLED";
})(OrderStatus || (OrderStatus = {}));
var PackagingtUnit;
(function (PackagingtUnit) {
    PackagingtUnit["Pack"] = "PACK";
    PackagingtUnit["Pill"] = "PILL";
    PackagingtUnit["Tube"] = "TUBE";
    PackagingtUnit["Box"] = "BOX";
    PackagingtUnit["Tbsp"] = "TBSP";
})(PackagingtUnit || (PackagingtUnit = {}));
var PointStatus;
(function (PointStatus) {
    PointStatus["Created"] = "CREATED";
    PointStatus["Approved"] = "APPROVED";
})(PointStatus || (PointStatus = {}));
var PointType;
(function (PointType) {
    PointType["FirstReview"] = "FIRST_REVIEW";
    PointType["NormalReview"] = "NORMAL_REVIEW";
    PointType["SignUp"] = "SIGN_UP";
    PointType["DailyActive"] = "DAILY_ACTIVE";
    PointType["WeeklyActive"] = "WEEKLY_ACTIVE";
    PointType["MonthlyActive"] = "MONTHLY_ACTIVE";
    PointType["Gift"] = "GIFT";
    PointType["ExchangePointsForCoupons"] = "EXCHANGE_POINTS_FOR_COUPONS";
    PointType["FirstPost"] = "FIRST_POST";
    PointType["PostWithHighReactions"] = "POST_WITH_HIGH_REACTIONS";
    PointType["PostHasManyLikes"] = "POST_HAS_MANY_LIKES";
    PointType["RequestProduct"] = "REQUEST_PRODUCT";
    PointType["EditProduct"] = "EDIT_PRODUCT";
    PointType["FirstComment"] = "FIRST_COMMENT";
    PointType["NormalComment"] = "NORMAL_COMMENT";
    PointType["EventPoints"] = "EVENT_POINTS";
    PointType["BestAnswer"] = "BEST_ANSWER";
    PointType["ApprovedReviewReport"] = "APPROVED_REVIEW_REPORT";
    PointType["Have_20Followers"] = "HAVE_20_FOLLOWERS";
    PointType["Referral"] = "REFERRAL";
    PointType["Referee"] = "REFEREE";
    PointType["ReferralBonus"] = "REFERRAL_BONUS";
})(PointType || (PointType = {}));
var PostCommentReportType;
(function (PostCommentReportType) {
    PostCommentReportType["Spam"] = "SPAM";
    PostCommentReportType["Advertising"] = "ADVERTISING";
    PostCommentReportType["Harass"] = "HARASS";
    PostCommentReportType["Swearing"] = "SWEARING";
    PostCommentReportType["PersonalInformation"] = "PERSONAL_INFORMATION";
    PostCommentReportType["Other"] = "OTHER";
})(PostCommentReportType || (PostCommentReportType = {}));
var PostCommentStatus;
(function (PostCommentStatus) {
    PostCommentStatus["Created"] = "CREATED";
    PostCommentStatus["Hidden"] = "HIDDEN";
    PostCommentStatus["Reported"] = "REPORTED";
})(PostCommentStatus || (PostCommentStatus = {}));
var PostCreateErrorCode;
(function (PostCreateErrorCode) {
    PostCreateErrorCode["HaveNotVerifiedPhoneNumber"] = "HAVE_NOT_VERIFIED_PHONE_NUMBER";
    PostCreateErrorCode["HaveNotVerifiedEmail"] = "HAVE_NOT_VERIFIED_EMAIL";
    PostCreateErrorCode["NotEnoughPoints"] = "NOT_ENOUGH_POINTS";
    PostCreateErrorCode["ExceedMaxSharedPointsPerDay"] = "EXCEED_MAX_SHARED_POINTS_PER_DAY";
})(PostCreateErrorCode || (PostCreateErrorCode = {}));
var PostQueryType;
(function (PostQueryType) {
    PostQueryType["Following"] = "FOLLOWING";
    PostQueryType["Discovery"] = "DISCOVERY";
    PostQueryType["Normal"] = "NORMAL";
})(PostQueryType || (PostQueryType = {}));
var PostReportType;
(function (PostReportType) {
    PostReportType["Repeat"] = "REPEAT";
    PostReportType["Advertising"] = "ADVERTISING";
    PostReportType["Swearing"] = "SWEARING";
    PostReportType["PersonalInformation"] = "PERSONAL_INFORMATION";
    PostReportType["Other"] = "OTHER";
})(PostReportType || (PostReportType = {}));
var PostStatus;
(function (PostStatus) {
    PostStatus["Created"] = "CREATED";
    PostStatus["Approved"] = "APPROVED";
    PostStatus["Hidden"] = "HIDDEN";
})(PostStatus || (PostStatus = {}));
var ProductEditStatus;
(function (ProductEditStatus) {
    ProductEditStatus["Created"] = "CREATED";
})(ProductEditStatus || (ProductEditStatus = {}));
var ProductStatus;
(function (ProductStatus) {
    ProductStatus["Active"] = "ACTIVE";
    ProductStatus["Inactive"] = "INACTIVE";
})(ProductStatus || (ProductStatus = {}));
var ReactStatus;
(function (ReactStatus) {
    ReactStatus["None"] = "NONE";
    ReactStatus["Like"] = "LIKE";
    ReactStatus["Dislike"] = "DISLIKE";
})(ReactStatus || (ReactStatus = {}));
var ReviewReportStatus;
(function (ReviewReportStatus) {
    ReviewReportStatus["Created"] = "CREATED";
    ReviewReportStatus["Approved"] = "APPROVED";
    ReviewReportStatus["Rejected"] = "REJECTED";
})(ReviewReportStatus || (ReviewReportStatus = {}));
var ReviewReportType;
(function (ReviewReportType) {
    ReviewReportType["NotRelated"] = "NOT_RELATED";
    ReviewReportType["Repeat"] = "REPEAT";
    ReviewReportType["Advertising"] = "ADVERTISING";
    ReviewReportType["Simple"] = "SIMPLE";
    ReviewReportType["Swearing"] = "SWEARING";
    ReviewReportType["PersonalInformation"] = "PERSONAL_INFORMATION";
    ReviewReportType["Other"] = "OTHER";
})(ReviewReportType || (ReviewReportType = {}));
var ReviewStatus;
(function (ReviewStatus) {
    ReviewStatus["Created"] = "CREATED";
    ReviewStatus["Approved"] = "APPROVED";
    ReviewStatus["Hidden"] = "HIDDEN";
})(ReviewStatus || (ReviewStatus = {}));
var Role;
(function (Role) {
    Role["Anonymous"] = "ANONYMOUS";
    Role["User"] = "USER";
    Role["Admin"] = "ADMIN";
    Role["Shop"] = "SHOP";
})(Role || (Role = {}));
var ShopMutationErrorCode;
(function (ShopMutationErrorCode) {
    ShopMutationErrorCode["NameAlreadyInUse"] = "NAME_ALREADY_IN_USE";
    ShopMutationErrorCode["YouAreNotTheOwner"] = "YOU_ARE_NOT_THE_OWNER";
})(ShopMutationErrorCode || (ShopMutationErrorCode = {}));
var ShopStatus;
(function (ShopStatus) {
    ShopStatus["Created"] = "CREATED";
    ShopStatus["Approved"] = "APPROVED";
    ShopStatus["Blocked"] = "BLOCKED";
})(ShopStatus || (ShopStatus = {}));
var SkinType;
(function (SkinType) {
    SkinType["Dry"] = "DRY";
    SkinType["Oily"] = "OILY";
    SkinType["Neutral"] = "NEUTRAL";
    SkinType["Mixed"] = "MIXED";
    SkinType["Sensitive"] = "SENSITIVE";
})(SkinType || (SkinType = {}));
var SpecialIngredientFunctionType;
(function (SpecialIngredientFunctionType) {
    SpecialIngredientFunctionType["Advantage"] = "ADVANTAGE";
    SpecialIngredientFunctionType["Disadvantage"] = "DISADVANTAGE";
    SpecialIngredientFunctionType["Recommendation"] = "RECOMMENDATION";
})(SpecialIngredientFunctionType || (SpecialIngredientFunctionType = {}));
var Unit;
(function (Unit) {
    Unit["Mcg"] = "mcg";
    Unit["Mg"] = "mg";
    Unit["G"] = "g";
    Unit["Ml"] = "ml";
    Unit["L"] = "l";
    Unit["Kcal"] = "kcal";
    Unit["Cal"] = "cal";
    Unit["Cfu"] = "CFU";
    Unit["Micronutrient"] = "micronutrient";
})(Unit || (Unit = {}));
var UserDeleteReason;
(function (UserDeleteReason) {
    UserDeleteReason["InformationIsNotHelpful"] = "INFORMATION_IS_NOT_HELPFUL";
    UserDeleteReason["IngredientAreNotAccurate"] = "INGREDIENT_ARE_NOT_ACCURATE";
    UserDeleteReason["PostsAreUnhelpfulAndOrOffensive"] = "POSTS_ARE_UNHELPFUL_AND_OR_OFFENSIVE";
    UserDeleteReason["ReviewsAreNotHelpful"] = "REVIEWS_ARE_NOT_HELPFUL";
    UserDeleteReason["TakeToMuchEffortToEarnPoints"] = "TAKE_TO_MUCH_EFFORT_TO_EARN_POINTS";
    UserDeleteReason["NeverWinGiveaways"] = "NEVER_WIN_GIVEAWAYS";
    UserDeleteReason["AppIsSlowAndBugs"] = "APP_IS_SLOW_AND_BUGS";
    UserDeleteReason["Other"] = "OTHER";
})(UserDeleteReason || (UserDeleteReason = {}));
var VideoStatus;
(function (VideoStatus) {
    VideoStatus["InProgressing"] = "IN_PROGRESSING";
    VideoStatus["Complete"] = "COMPLETE";
    VideoStatus["Error"] = "ERROR";
})(VideoStatus || (VideoStatus = {}));
const BrandListFieldsFragmentDoc = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
    fragment BrandListFields on Brand {
  id
  smallLogoUrl: fixedLogoUrl(width: SMALL)
  logoUrl
  status
  translations(where: {language: VI}) {
    name
  }
}
    `;
const CautionDetailsFragmentDoc = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
    fragment CautionDetails on IngredientCaution {
  id
  translations {
    id
    name
    description
    language
  }
}
    `;
const FunctionDetailsFragmentDoc = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
    fragment FunctionDetails on SpecialIngredientFunction {
  id
  type
  symbolUrl
  translations {
    id
    name
    language
    description
  }
}
    `;
const IngredientDetailsFragmentDoc = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
    fragment IngredientDetails on Ingredient {
  id
  ewg
  ewgRiskType
  attributes {
    rdi
    rdiUnit
  }
  translations {
    id
    language
    name
    description
    effect
    dose
    exceedDose
    pregnant
    combination
    notCombination
    notableCase
    attention
  }
  cautions {
    id
    translations(where: {language: VI}) {
      id
      name
      language
    }
  }
  specialFunctions {
    id
    type
    symbolUrl
    translations(where: {language: VI}) {
      id
      name
      language
    }
  }
}
    `;
const FunctionFieldsFragmentDoc = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
    fragment FunctionFields on SpecialIngredientFunction {
  id
  type
  symbolUrl
  translations(where: {language: VI}) {
    name
  }
}
    `;
const IngredientCompactFieldsFragmentDoc = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
    fragment IngredientCompactFields on Ingredient {
  id
  ewg
  ewgRiskType
  cautions {
    id
    translations(where: {language: VI}) {
      name
    }
  }
  translations {
    name
    language
  }
  specialFunctions {
    ...FunctionFields
  }
}
    ${FunctionFieldsFragmentDoc}`;
const SearchCautionTranslationFragmentDoc = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
    fragment SearchCautionTranslation on IngredientCautionTranslation {
  id
  name
  language
  caution {
    id
  }
}
    `;
const SearchFunctionTranslationFragmentDoc = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
    fragment SearchFunctionTranslation on SpecialIngredientFunctionTranslation {
  id
  name
  language
  function {
    id
    symbolUrl
    type
  }
}
    `;
const SearchIngredientTranslationFragmentDoc = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
    fragment SearchIngredientTranslation on IngredientTranslation {
  id
  name
  ingredient {
    id
  }
}
    `;
const PostCommentFieldsFragmentDoc = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
    fragment PostCommentFields on PostComment {
  id
  content
  status
  createdAt
  updatedAt
  post {
    author {
      id
      account
    }
  }
  author {
    id
    account
    email
    avatar {
      url
    }
  }
}
    `;
const PostCommentReportFieldFragmentDoc = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
    fragment PostCommentReportField on PostCommentReport {
  id
  type
  reason
  createdAt
  updatedAt
  postComment {
    ...PostCommentFields
  }
  user {
    account
    avatar {
      small: fixed(width: SMALL) {
        url
      }
      url
    }
  }
}
    ${PostCommentFieldsFragmentDoc}`;
const ProductCardFragmentDoc = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
    fragment ProductCard on Product {
  price
  measure
  thumbnail {
    small: fixed(width: SMALL) {
      url
    }
    url
  }
  translations(where: {language: VI}) {
    name
  }
  reviewsConnection {
    aggregate {
      count
      avg {
        rate
      }
    }
  }
}
    `;
const PostCardFragmentDoc = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
    fragment PostCard on Post {
  id
  content
  status
  createdAt
  updatedAt
  author {
    account
    birthYear
    skinType
    gender
    avatar {
      small: fixed(width: SMALL) {
        url
      }
      url
    }
  }
  category {
    translations(where: {language: VI}) {
      name
    }
  }
  images {
    small: fixed(width: SMALL) {
      url
    }
    large: fixed(width: LARGE) {
      url
    }
    url
  }
  products {
    ...ProductCard
  }
  reactionsConnection {
    aggregate {
      sum {
        value
      }
    }
  }
  commentsConnection {
    aggregate {
      count
    }
  }
}
    ${ProductCardFragmentDoc}`;
const VideoFieldsFragmentDoc = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
    fragment VideoFields on Video {
  thumbnail {
    width
    height
    url
  }
  details {
    height
    width
    url
  }
  status
}
    `;
const ProductVideoFieldsFragmentDoc = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
    fragment ProductVideoFields on Product {
  price
  measure
  thumbnail {
    small: fixed(width: SMALL) {
      url
    }
    url
  }
  translations(where: {language: VI}) {
    name
  }
  reviewsConnection {
    aggregate {
      count
      avg {
        rate
      }
    }
  }
}
    `;
const VideoCardFragmentDoc = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
    fragment VideoCard on Post {
  id
  content
  status
  author {
    id
    account
    avatar {
      url
      fixed(width: SMALL) {
        url
      }
    }
  }
  video {
    ...VideoFields
  }
  products {
    ...ProductVideoFields
  }
  reactionsConnection {
    aggregate {
      sum {
        value
      }
    }
  }
  commentsConnection {
    aggregate {
      count
    }
  }
}
    ${VideoFieldsFragmentDoc}
${ProductVideoFieldsFragmentDoc}`;
const ProductListFieldsFragmentDoc = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
    fragment ProductListFields on Product {
  id
  status
  translations(where: {language: VI}) {
    name
  }
  brand {
    translations(where: {language: VI}) {
      name
    }
    logoUrl
    smallLogoUrl: fixedLogoUrl(width: SMALL)
  }
  categories {
    translations(where: {language: VI}) {
      name
    }
  }
  thumbnail {
    small: fixed(width: SMALL) {
      url
    }
    url
  }
}
    `;
const ProductRequestFieldFragmentDoc = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
    fragment ProductRequestField on ProductRequest {
  id
  isDone
  images
  content
  createdAt
  user {
    account
    gender
    avatar {
      small: fixed(width: SMALL) {
        url
      }
      url
    }
  }
}
    `;
const ReviewReportListFieldsFragmentDoc = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
    fragment ReviewReportListFields on ReviewReport {
  id
  type
  reason
  status
  createdAt
  updatedAt
  user {
    account
    avatar {
      small: fixed(width: SMALL) {
        url
      }
      url
    }
  }
}
    `;
const ReviewListFieldsFragmentDoc = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
    fragment ReviewListFields on Review {
  id
  content
  rate
  status
  createdAt
  updatedAt
  product {
    id
    thumbnail {
      small: fixed(width: SMALL) {
        url
      }
      url
    }
    translations(where: {language: VI}) {
      name
    }
    brand {
      translations(where: {language: VI}) {
        name
      }
    }
  }
  user {
    id
    account
    email
    avatar {
      url
    }
  }
  images {
    small: fixed(width: SMALL) {
      url
    }
    large: fixed(width: LARGE) {
      url
    }
    name
    url
    width
    height
  }
  reportsConnection {
    aggregate {
      count
    }
  }
}
    `;
const ReportListFieldsWithReviewFragmentDoc = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
    fragment ReportListFieldsWithReview on ReviewReport {
  id
  review {
    ...ReviewListFields
  }
  type
  reason
  status
  createdAt
  updatedAt
  user {
    account
    avatar {
      small: fixed(width: SMALL) {
        url
      }
      url
    }
  }
}
    ${ReviewListFieldsFragmentDoc}`;
const MentionUserFieldsFragmentDoc = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
    fragment MentionUserFields on User {
  id
  account
}
    `;
const LoginDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
    mutation login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
  }
}
    `;
class LoginGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_1__.Mutation {
    constructor(apollo) {
        super(apollo);
        this.document = LoginDocument;
    }
}
LoginGQL.ɵfac = function LoginGQL_Factory(t) { return new (t || LoginGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_1__.Apollo)); };
LoginGQL.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: LoginGQL, factory: LoginGQL.ɵfac, providedIn: 'root' });
const MeDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
    query me {
  me
}
    `;
class MeGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_1__.Query {
    constructor(apollo) {
        super(apollo);
        this.document = MeDocument;
    }
}
MeGQL.ɵfac = function MeGQL_Factory(t) { return new (t || MeGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_1__.Apollo)); };
MeGQL.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: MeGQL, factory: MeGQL.ɵfac, providedIn: 'root' });
const CreateBannersDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
    mutation createBanners($data: [BannerInput!]!) {
  createBanners(data: $data)
}
    `;
class CreateBannersGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_1__.Mutation {
    constructor(apollo) {
        super(apollo);
        this.document = CreateBannersDocument;
    }
}
CreateBannersGQL.ɵfac = function CreateBannersGQL_Factory(t) { return new (t || CreateBannersGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_1__.Apollo)); };
CreateBannersGQL.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: CreateBannersGQL, factory: CreateBannersGQL.ɵfac, providedIn: 'root' });
const GetBannerListDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
    query getBannerList {
  banners {
    liveStreamId
    thumbnailUrl
  }
}
    `;
class GetBannerListGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_1__.Query {
    constructor(apollo) {
        super(apollo);
        this.document = GetBannerListDocument;
    }
}
GetBannerListGQL.ɵfac = function GetBannerListGQL_Factory(t) { return new (t || GetBannerListGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_1__.Apollo)); };
GetBannerListGQL.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: GetBannerListGQL, factory: GetBannerListGQL.ɵfac, providedIn: 'root' });
const CreateBrandDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
    mutation createBrand($data: BrandCreateInput!) {
  createBrand(data: $data) {
    id
  }
}
    `;
class CreateBrandGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_1__.Mutation {
    constructor(apollo) {
        super(apollo);
        this.document = CreateBrandDocument;
    }
}
CreateBrandGQL.ɵfac = function CreateBrandGQL_Factory(t) { return new (t || CreateBrandGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_1__.Apollo)); };
CreateBrandGQL.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: CreateBrandGQL, factory: CreateBrandGQL.ɵfac, providedIn: 'root' });
const GetBrandDetailsDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
    query getBrandDetails($where: BrandWhereUniqueInput!) {
  brand(where: $where) {
    id
    uid
    smallLogoUrl: fixedLogoUrl(width: SMALL)
    logoUrl
    coo
    status
    translations(where: {language: VI}) {
      id
      name
      description
      slug
    }
    types {
      id
      value
    }
  }
}
    `;
class GetBrandDetailsGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_1__.Query {
    constructor(apollo) {
        super(apollo);
        this.document = GetBrandDetailsDocument;
    }
}
GetBrandDetailsGQL.ɵfac = function GetBrandDetailsGQL_Factory(t) { return new (t || GetBrandDetailsGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_1__.Apollo)); };
GetBrandDetailsGQL.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: GetBrandDetailsGQL, factory: GetBrandDetailsGQL.ɵfac, providedIn: 'root' });
const GetBrandListDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
    query getBrandList($skip: Int = 0, $after: String, $before: String, $first: Int, $last: Int, $where: BrandWhereInput, $orderBy: BrandOrderByInput) {
  brands(
    skip: $skip
    after: $after
    before: $before
    first: $first
    last: $last
    where: $where
    orderBy: $orderBy
  ) {
    ...BrandListFields
  }
  brandsConnection(
    skip: $skip
    after: $after
    before: $before
    first: $first
    last: $last
    where: $where
    orderBy: $orderBy
  ) {
    aggregate {
      count
    }
  }
}
    ${BrandListFieldsFragmentDoc}`;
class GetBrandListGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_1__.Query {
    constructor(apollo) {
        super(apollo);
        this.document = GetBrandListDocument;
    }
}
GetBrandListGQL.ɵfac = function GetBrandListGQL_Factory(t) { return new (t || GetBrandListGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_1__.Apollo)); };
GetBrandListGQL.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: GetBrandListGQL, factory: GetBrandListGQL.ɵfac, providedIn: 'root' });
const SearchBrandsDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
    query searchBrands($skip: Int = 0, $after: String, $before: String, $first: Int = 10, $last: Int, $where: BrandWhereInput, $orderBy: BrandOrderByInput) {
  brands(
    skip: $skip
    after: $after
    before: $before
    first: $first
    last: $last
    where: $where
    orderBy: $orderBy
  ) {
    id
    translations(where: {language: VI}) {
      name
    }
  }
}
    `;
class SearchBrandsGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_1__.Query {
    constructor(apollo) {
        super(apollo);
        this.document = SearchBrandsDocument;
    }
}
SearchBrandsGQL.ɵfac = function SearchBrandsGQL_Factory(t) { return new (t || SearchBrandsGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_1__.Apollo)); };
SearchBrandsGQL.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: SearchBrandsGQL, factory: SearchBrandsGQL.ɵfac, providedIn: 'root' });
const UpdateBrandDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
    mutation updateBrand($where: BrandWhereUniqueInput!, $data: BrandUpdateInput!) {
  updateBrand(where: $where, data: $data) {
    id
  }
}
    `;
class UpdateBrandGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_1__.Mutation {
    constructor(apollo) {
        super(apollo);
        this.document = UpdateBrandDocument;
    }
}
UpdateBrandGQL.ɵfac = function UpdateBrandGQL_Factory(t) { return new (t || UpdateBrandGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_1__.Apollo)); };
UpdateBrandGQL.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: UpdateBrandGQL, factory: UpdateBrandGQL.ɵfac, providedIn: 'root' });
const CreateCategoryDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
    mutation createCategory($data: CategoryCreateInput!) {
  createCategory(data: $data) {
    id
  }
}
    `;
class CreateCategoryGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_1__.Mutation {
    constructor(apollo) {
        super(apollo);
        this.document = CreateCategoryDocument;
    }
}
CreateCategoryGQL.ɵfac = function CreateCategoryGQL_Factory(t) { return new (t || CreateCategoryGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_1__.Apollo)); };
CreateCategoryGQL.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: CreateCategoryGQL, factory: CreateCategoryGQL.ɵfac, providedIn: 'root' });
const GetCategoryDetailsDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
    query getCategoryDetails($where: CategoryWhereUniqueInput!) {
  category(where: $where) {
    id
    status
    parent {
      id
      translations(where: {language: VI}) {
        name
      }
    }
    activeLogo {
      id
      name
      url
      width
      height
    }
    inactiveLogo {
      id
      name
      url
      width
      height
    }
    translations {
      id
      name
      slug
      isOriginal
      language
    }
  }
}
    `;
class GetCategoryDetailsGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_1__.Query {
    constructor(apollo) {
        super(apollo);
        this.document = GetCategoryDetailsDocument;
    }
}
GetCategoryDetailsGQL.ɵfac = function GetCategoryDetailsGQL_Factory(t) { return new (t || GetCategoryDetailsGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_1__.Apollo)); };
GetCategoryDetailsGQL.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: GetCategoryDetailsGQL, factory: GetCategoryDetailsGQL.ɵfac, providedIn: 'root' });
const GetCategoryListDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
    query getCategoryList($skip: Int = 0, $after: String, $before: String, $first: Int = 10, $last: Int, $where: CategoryWhereInput, $orderBy: CategoryOrderByInput) {
  categories(
    skip: $skip
    after: $after
    before: $before
    first: $first
    last: $last
    where: $where
    orderBy: $orderBy
  ) {
    id
    status
    parent {
      id
      translations(where: {language: VI}) {
        name
      }
    }
    translations(where: {language: VI}) {
      name
    }
  }
  categoriesConnection(
    skip: $skip
    after: $after
    before: $before
    first: $first
    last: $last
    where: $where
    orderBy: $orderBy
  ) {
    aggregate {
      count
    }
  }
}
    `;
class GetCategoryListGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_1__.Query {
    constructor(apollo) {
        super(apollo);
        this.document = GetCategoryListDocument;
    }
}
GetCategoryListGQL.ɵfac = function GetCategoryListGQL_Factory(t) { return new (t || GetCategoryListGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_1__.Apollo)); };
GetCategoryListGQL.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: GetCategoryListGQL, factory: GetCategoryListGQL.ɵfac, providedIn: 'root' });
const GetHierarchicalCategoriesDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
    query getHierarchicalCategories {
  categories(where: {parent: {id: null}}, first: 100) {
    id
    translations(where: {language: VI}) {
      name
    }
    children {
      id
      translations(where: {language: VI}) {
        name
      }
    }
  }
}
    `;
class GetHierarchicalCategoriesGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_1__.Query {
    constructor(apollo) {
        super(apollo);
        this.document = GetHierarchicalCategoriesDocument;
    }
}
GetHierarchicalCategoriesGQL.ɵfac = function GetHierarchicalCategoriesGQL_Factory(t) { return new (t || GetHierarchicalCategoriesGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_1__.Apollo)); };
GetHierarchicalCategoriesGQL.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: GetHierarchicalCategoriesGQL, factory: GetHierarchicalCategoriesGQL.ɵfac, providedIn: 'root' });
const UpdateCategoryDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
    mutation updateCategory($where: CategoryWhereUniqueInput!, $data: CategoryUpdateInput!) {
  updateCategory(where: $where, data: $data) {
    id
  }
}
    `;
class UpdateCategoryGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_1__.Mutation {
    constructor(apollo) {
        super(apollo);
        this.document = UpdateCategoryDocument;
    }
}
UpdateCategoryGQL.ɵfac = function UpdateCategoryGQL_Factory(t) { return new (t || UpdateCategoryGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_1__.Apollo)); };
UpdateCategoryGQL.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: UpdateCategoryGQL, factory: UpdateCategoryGQL.ɵfac, providedIn: 'root' });
const AwardEventCommentDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
    mutation awardEventComment($id: Int!) {
  awardEventComment(where: {id: $id}) {
    id
  }
}
    `;
class AwardEventCommentGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_1__.Mutation {
    constructor(apollo) {
        super(apollo);
        this.document = AwardEventCommentDocument;
    }
}
AwardEventCommentGQL.ɵfac = function AwardEventCommentGQL_Factory(t) { return new (t || AwardEventCommentGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_1__.Apollo)); };
AwardEventCommentGQL.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: AwardEventCommentGQL, factory: AwardEventCommentGQL.ɵfac, providedIn: 'root' });
const AwardEventCommentsDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
    mutation awardEventComments($data: EventCommentUpdateManyWithoutEventInput!) {
  awardEventComments(data: $data)
}
    `;
class AwardEventCommentsGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_1__.Mutation {
    constructor(apollo) {
        super(apollo);
        this.document = AwardEventCommentsDocument;
    }
}
AwardEventCommentsGQL.ɵfac = function AwardEventCommentsGQL_Factory(t) { return new (t || AwardEventCommentsGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_1__.Apollo)); };
AwardEventCommentsGQL.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: AwardEventCommentsGQL, factory: AwardEventCommentsGQL.ɵfac, providedIn: 'root' });
const CreateEventNotificationDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
    mutation createEventNotification($data: EventNotificationCreateInput!) {
  createEventNotification(data: $data) {
    id
    title
    content
    notifiedAt
  }
}
    `;
class CreateEventNotificationGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_1__.Mutation {
    constructor(apollo) {
        super(apollo);
        this.document = CreateEventNotificationDocument;
    }
}
CreateEventNotificationGQL.ɵfac = function CreateEventNotificationGQL_Factory(t) { return new (t || CreateEventNotificationGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_1__.Apollo)); };
CreateEventNotificationGQL.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: CreateEventNotificationGQL, factory: CreateEventNotificationGQL.ɵfac, providedIn: 'root' });
const CreateEventDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
    mutation createEvent($data: EventCreateInput!) {
  createEvent(data: $data) {
    id
  }
}
    `;
class CreateEventGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_1__.Mutation {
    constructor(apollo) {
        super(apollo);
        this.document = CreateEventDocument;
    }
}
CreateEventGQL.ɵfac = function CreateEventGQL_Factory(t) { return new (t || CreateEventGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_1__.Apollo)); };
CreateEventGQL.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: CreateEventGQL, factory: CreateEventGQL.ɵfac, providedIn: 'root' });
const DeleteEventNotificationDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
    mutation deleteEventNotification($where: EventNotificationWhereUniqueInput!) {
  deleteEventNotification(where: $where) {
    id
  }
}
    `;
class DeleteEventNotificationGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_1__.Mutation {
    constructor(apollo) {
        super(apollo);
        this.document = DeleteEventNotificationDocument;
    }
}
DeleteEventNotificationGQL.ɵfac = function DeleteEventNotificationGQL_Factory(t) { return new (t || DeleteEventNotificationGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_1__.Apollo)); };
DeleteEventNotificationGQL.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: DeleteEventNotificationGQL, factory: DeleteEventNotificationGQL.ɵfac, providedIn: 'root' });
const DeleteEventDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
    mutation deleteEvent($where: EventWhereUniqueInput!) {
  deleteEvent(where: $where) {
    id
  }
}
    `;
class DeleteEventGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_1__.Mutation {
    constructor(apollo) {
        super(apollo);
        this.document = DeleteEventDocument;
    }
}
DeleteEventGQL.ɵfac = function DeleteEventGQL_Factory(t) { return new (t || DeleteEventGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_1__.Apollo)); };
DeleteEventGQL.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: DeleteEventGQL, factory: DeleteEventGQL.ɵfac, providedIn: 'root' });
const GetEventCommentsDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
    query getEventComments($skip: Int = 0, $after: String, $before: String, $first: Int = 10, $last: Int, $where: EventCommentWhereInput, $orderBy: EventCommentOrderByInput) {
  eventComments(
    skip: $skip
    after: $after
    before: $before
    first: $first
    last: $last
    where: $where
    orderBy: $orderBy
  ) {
    id
    content
    createdAt
    status
    user {
      id
      account
      phoneNumber
      address
      gender
      birthYear
      avatar {
        url
        small: fixed(width: SMALL) {
          url
        }
        medium: fixed(width: MEDIUM) {
          url
        }
      }
    }
  }
  eventCommentsConnection(
    skip: $skip
    after: $after
    before: $before
    first: $first
    last: $last
    where: $where
    orderBy: $orderBy
  ) {
    aggregate {
      count
    }
  }
}
    `;
class GetEventCommentsGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_1__.Query {
    constructor(apollo) {
        super(apollo);
        this.document = GetEventCommentsDocument;
    }
}
GetEventCommentsGQL.ɵfac = function GetEventCommentsGQL_Factory(t) { return new (t || GetEventCommentsGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_1__.Apollo)); };
GetEventCommentsGQL.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: GetEventCommentsGQL, factory: GetEventCommentsGQL.ɵfac, providedIn: 'root' });
const GetEventDetailsDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
    query getEventDetails($where: EventWhereUniqueInput!) {
  event(where: $where) {
    id
    name
    condition
    startedAt
    endedAt
    coverUrl
    content
    visible
    type
    reviewDeadline
    numberOfWinners
    minimumNumberOfReviews
    reminderDates
    points
    eventToProducts {
      product {
        id
        translations(where: {language: VI}) {
          name
          language
        }
      }
      quantity
    }
    tags {
      id
      translations(where: {language: VI}) {
        content
        language
      }
    }
    notifications {
      id
      title
      content
      notifiedAt
    }
  }
}
    `;
class GetEventDetailsGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_1__.Query {
    constructor(apollo) {
        super(apollo);
        this.document = GetEventDetailsDocument;
    }
}
GetEventDetailsGQL.ɵfac = function GetEventDetailsGQL_Factory(t) { return new (t || GetEventDetailsGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_1__.Apollo)); };
GetEventDetailsGQL.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: GetEventDetailsGQL, factory: GetEventDetailsGQL.ɵfac, providedIn: 'root' });
const GetEventListDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
    query getEventList($skip: Int, $after: String, $before: String, $first: Int, $last: Int, $where: EventWhereInput, $orderBy: EventOrderByInput) {
  events(
    skip: $skip
    after: $after
    before: $before
    first: $first
    last: $last
    where: $where
    orderBy: $orderBy
  ) {
    id
    name
    startedAt
    endedAt
    coverUrl
    type
    commentsConnection {
      aggregate {
        count
      }
    }
    currentNumberOfWinners
    maximumNumberOfWinners
    notifications {
      id
    }
  }
  eventsConnection(
    skip: $skip
    after: $after
    before: $before
    first: $first
    last: $last
    where: $where
    orderBy: $orderBy
  ) {
    aggregate {
      count
    }
  }
}
    `;
class GetEventListGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_1__.Query {
    constructor(apollo) {
        super(apollo);
        this.document = GetEventListDocument;
    }
}
GetEventListGQL.ɵfac = function GetEventListGQL_Factory(t) { return new (t || GetEventListGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_1__.Apollo)); };
GetEventListGQL.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: GetEventListGQL, factory: GetEventListGQL.ɵfac, providedIn: 'root' });
const ReclaimEventCommentDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
    mutation reclaimEventComment($id: Int!, $payback: Boolean!) {
  reclaimEventComment(where: {id: $id}, payback: $payback) {
    id
  }
}
    `;
class ReclaimEventCommentGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_1__.Mutation {
    constructor(apollo) {
        super(apollo);
        this.document = ReclaimEventCommentDocument;
    }
}
ReclaimEventCommentGQL.ɵfac = function ReclaimEventCommentGQL_Factory(t) { return new (t || ReclaimEventCommentGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_1__.Apollo)); };
ReclaimEventCommentGQL.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: ReclaimEventCommentGQL, factory: ReclaimEventCommentGQL.ɵfac, providedIn: 'root' });
const UpdateEventNotificationDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
    mutation updateEventNotification($where: EventNotificationWhereUniqueInput!, $data: EventNotificationUpdateInput!) {
  updateEventNotification(where: $where, data: $data) {
    id
    title
    content
    notifiedAt
  }
}
    `;
class UpdateEventNotificationGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_1__.Mutation {
    constructor(apollo) {
        super(apollo);
        this.document = UpdateEventNotificationDocument;
    }
}
UpdateEventNotificationGQL.ɵfac = function UpdateEventNotificationGQL_Factory(t) { return new (t || UpdateEventNotificationGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_1__.Apollo)); };
UpdateEventNotificationGQL.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: UpdateEventNotificationGQL, factory: UpdateEventNotificationGQL.ɵfac, providedIn: 'root' });
const UpdateEventDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
    mutation updateEvent($where: EventWhereUniqueInput!, $data: EventUpdateInput!) {
  updateEvent(where: $where, data: $data) {
    id
  }
}
    `;
class UpdateEventGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_1__.Mutation {
    constructor(apollo) {
        super(apollo);
        this.document = UpdateEventDocument;
    }
}
UpdateEventGQL.ɵfac = function UpdateEventGQL_Factory(t) { return new (t || UpdateEventGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_1__.Apollo)); };
UpdateEventGQL.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: UpdateEventGQL, factory: UpdateEventGQL.ɵfac, providedIn: 'root' });
const AnalyzeIngredientsDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
    query analyzeIngredients($text: String!) {
  analyzeIngredients(text: $text) {
    ingredients {
      id
      translations {
        name
      }
      ewg
    }
    total
  }
}
    `;
class AnalyzeIngredientsGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_1__.Query {
    constructor(apollo) {
        super(apollo);
        this.document = AnalyzeIngredientsDocument;
    }
}
AnalyzeIngredientsGQL.ɵfac = function AnalyzeIngredientsGQL_Factory(t) { return new (t || AnalyzeIngredientsGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_1__.Apollo)); };
AnalyzeIngredientsGQL.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: AnalyzeIngredientsGQL, factory: AnalyzeIngredientsGQL.ɵfac, providedIn: 'root' });
const CreateCautionDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
    mutation createCaution($data: CautionCreateInput!) {
  createCaution(data: $data) {
    id
  }
}
    `;
class CreateCautionGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_1__.Mutation {
    constructor(apollo) {
        super(apollo);
        this.document = CreateCautionDocument;
    }
}
CreateCautionGQL.ɵfac = function CreateCautionGQL_Factory(t) { return new (t || CreateCautionGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_1__.Apollo)); };
CreateCautionGQL.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: CreateCautionGQL, factory: CreateCautionGQL.ɵfac, providedIn: 'root' });
const CreateFunctionDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
    mutation createFunction($data: FunctionCreateInput!) {
  createFunction(data: $data) {
    id
  }
}
    `;
class CreateFunctionGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_1__.Mutation {
    constructor(apollo) {
        super(apollo);
        this.document = CreateFunctionDocument;
    }
}
CreateFunctionGQL.ɵfac = function CreateFunctionGQL_Factory(t) { return new (t || CreateFunctionGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_1__.Apollo)); };
CreateFunctionGQL.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: CreateFunctionGQL, factory: CreateFunctionGQL.ɵfac, providedIn: 'root' });
const CreateIngredientDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
    mutation createIngredient($data: IngredientCreateInput!) {
  createIngredient(data: $data) {
    id
  }
}
    `;
class CreateIngredientGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_1__.Mutation {
    constructor(apollo) {
        super(apollo);
        this.document = CreateIngredientDocument;
    }
}
CreateIngredientGQL.ɵfac = function CreateIngredientGQL_Factory(t) { return new (t || CreateIngredientGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_1__.Apollo)); };
CreateIngredientGQL.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: CreateIngredientGQL, factory: CreateIngredientGQL.ɵfac, providedIn: 'root' });
const GetCautionDetailsDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
    query getCautionDetails($where: CautionWhereUniqueInput!) {
  caution(where: $where) {
    ...CautionDetails
  }
}
    ${CautionDetailsFragmentDoc}`;
class GetCautionDetailsGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_1__.Query {
    constructor(apollo) {
        super(apollo);
        this.document = GetCautionDetailsDocument;
    }
}
GetCautionDetailsGQL.ɵfac = function GetCautionDetailsGQL_Factory(t) { return new (t || GetCautionDetailsGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_1__.Apollo)); };
GetCautionDetailsGQL.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: GetCautionDetailsGQL, factory: GetCautionDetailsGQL.ɵfac, providedIn: 'root' });
const GetCautionListDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
    query getCautionList($skip: Int = 0, $after: String, $before: String, $first: Int, $last: Int, $where: IngredientCautionWhereInput, $orderBy: BaseOrderByInput) {
  cautions(
    skip: $skip
    after: $after
    before: $before
    first: $first
    last: $last
    where: $where
    orderBy: $orderBy
  ) {
    id
    translations {
      id
      name
      description
      language
    }
  }
  cautionsConnection(
    skip: $skip
    after: $after
    before: $before
    first: $first
    last: $last
    where: $where
    orderBy: $orderBy
  ) {
    aggregate {
      count
    }
  }
}
    `;
class GetCautionListGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_1__.Query {
    constructor(apollo) {
        super(apollo);
        this.document = GetCautionListDocument;
    }
}
GetCautionListGQL.ɵfac = function GetCautionListGQL_Factory(t) { return new (t || GetCautionListGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_1__.Apollo)); };
GetCautionListGQL.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: GetCautionListGQL, factory: GetCautionListGQL.ɵfac, providedIn: 'root' });
const GetFunctionDetailsDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
    query getFunctionDetails($where: FunctionWhereUniqueInput!) {
  function(where: $where) {
    ...FunctionDetails
  }
}
    ${FunctionDetailsFragmentDoc}`;
class GetFunctionDetailsGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_1__.Query {
    constructor(apollo) {
        super(apollo);
        this.document = GetFunctionDetailsDocument;
    }
}
GetFunctionDetailsGQL.ɵfac = function GetFunctionDetailsGQL_Factory(t) { return new (t || GetFunctionDetailsGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_1__.Apollo)); };
GetFunctionDetailsGQL.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: GetFunctionDetailsGQL, factory: GetFunctionDetailsGQL.ɵfac, providedIn: 'root' });
const GetFunctionListDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
    query getFunctionList($skip: Int = 0, $after: String, $before: String, $first: Int, $last: Int, $where: SpecialIngredientFunctionWhereInput, $orderBy: SpecialIngredientFunctionOrderByInput) {
  functions(
    skip: $skip
    after: $after
    before: $before
    first: $first
    last: $last
    where: $where
    orderBy: $orderBy
  ) {
    id
    symbolUrl
    type
    translations(where: {language: VI}) {
      id
      name
      description
    }
  }
  functionsConnection(
    skip: $skip
    after: $after
    before: $before
    first: $first
    last: $last
    where: $where
    orderBy: $orderBy
  ) {
    aggregate {
      count
    }
  }
}
    `;
class GetFunctionListGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_1__.Query {
    constructor(apollo) {
        super(apollo);
        this.document = GetFunctionListDocument;
    }
}
GetFunctionListGQL.ɵfac = function GetFunctionListGQL_Factory(t) { return new (t || GetFunctionListGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_1__.Apollo)); };
GetFunctionListGQL.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: GetFunctionListGQL, factory: GetFunctionListGQL.ɵfac, providedIn: 'root' });
const GetIngredientDetailsDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
    query getIngredientDetails($id: Int!) {
  ingredient(where: {id: $id}) {
    ...IngredientDetails
  }
}
    ${IngredientDetailsFragmentDoc}`;
class GetIngredientDetailsGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_1__.Query {
    constructor(apollo) {
        super(apollo);
        this.document = GetIngredientDetailsDocument;
    }
}
GetIngredientDetailsGQL.ɵfac = function GetIngredientDetailsGQL_Factory(t) { return new (t || GetIngredientDetailsGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_1__.Apollo)); };
GetIngredientDetailsGQL.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: GetIngredientDetailsGQL, factory: GetIngredientDetailsGQL.ɵfac, providedIn: 'root' });
const GetIngredientListDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
    query getIngredientList($skip: Int = 0, $after: String, $before: String, $first: Int, $last: Int, $where: IngredientWhereInput, $orderBy: IngredientOrderByInput) {
  ingredients(
    skip: $skip
    after: $after
    before: $before
    first: $first
    last: $last
    where: $where
    orderBy: $orderBy
  ) {
    ...IngredientCompactFields
  }
  ingredientsConnection(
    skip: $skip
    after: $after
    before: $before
    first: $first
    last: $last
    where: $where
    orderBy: $orderBy
  ) {
    aggregate {
      count
    }
  }
}
    ${IngredientCompactFieldsFragmentDoc}`;
class GetIngredientListGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_1__.Query {
    constructor(apollo) {
        super(apollo);
        this.document = GetIngredientListDocument;
    }
}
GetIngredientListGQL.ɵfac = function GetIngredientListGQL_Factory(t) { return new (t || GetIngredientListGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_1__.Apollo)); };
GetIngredientListGQL.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: GetIngredientListGQL, factory: GetIngredientListGQL.ɵfac, providedIn: 'root' });
const SearchCautionTranslationsDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
    query searchCautionTranslations($skip: Int = 0, $after: String, $before: String, $first: Int, $last: Int, $where: IngredientCautionTranslationWhereInput, $orderBy: BaseOrderByInput) {
  cautionTranslations(
    skip: $skip
    after: $after
    before: $before
    first: $first
    last: $last
    where: $where
    orderBy: $orderBy
  ) {
    ...SearchCautionTranslation
  }
}
    ${SearchCautionTranslationFragmentDoc}`;
class SearchCautionTranslationsGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_1__.Query {
    constructor(apollo) {
        super(apollo);
        this.document = SearchCautionTranslationsDocument;
    }
}
SearchCautionTranslationsGQL.ɵfac = function SearchCautionTranslationsGQL_Factory(t) { return new (t || SearchCautionTranslationsGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_1__.Apollo)); };
SearchCautionTranslationsGQL.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: SearchCautionTranslationsGQL, factory: SearchCautionTranslationsGQL.ɵfac, providedIn: 'root' });
const SearchFunctionTranslationsDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
    query searchFunctionTranslations($skip: Int = 0, $after: String, $before: String, $first: Int, $last: Int, $where: SpecialIngredientFunctionTranslationWhereInput, $orderBy: BaseOrderByInput) {
  functionTranslations(
    skip: $skip
    after: $after
    before: $before
    first: $first
    last: $last
    where: $where
    orderBy: $orderBy
  ) {
    ...SearchFunctionTranslation
  }
}
    ${SearchFunctionTranslationFragmentDoc}`;
class SearchFunctionTranslationsGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_1__.Query {
    constructor(apollo) {
        super(apollo);
        this.document = SearchFunctionTranslationsDocument;
    }
}
SearchFunctionTranslationsGQL.ɵfac = function SearchFunctionTranslationsGQL_Factory(t) { return new (t || SearchFunctionTranslationsGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_1__.Apollo)); };
SearchFunctionTranslationsGQL.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: SearchFunctionTranslationsGQL, factory: SearchFunctionTranslationsGQL.ɵfac, providedIn: 'root' });
const SearchIngredientTranslationsDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
    query searchIngredientTranslations($skip: Int = 0, $after: String, $before: String, $first: Int = 10, $last: Int, $where: IngredientTranslationWhereInput, $orderBy: IngredientTranslationOrderByInput) {
  ingredientTranslations(
    skip: $skip
    after: $after
    before: $before
    first: $first
    last: $last
    where: $where
    orderBy: $orderBy
  ) {
    ...SearchIngredientTranslation
  }
}
    ${SearchIngredientTranslationFragmentDoc}`;
class SearchIngredientTranslationsGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_1__.Query {
    constructor(apollo) {
        super(apollo);
        this.document = SearchIngredientTranslationsDocument;
    }
}
SearchIngredientTranslationsGQL.ɵfac = function SearchIngredientTranslationsGQL_Factory(t) { return new (t || SearchIngredientTranslationsGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_1__.Apollo)); };
SearchIngredientTranslationsGQL.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: SearchIngredientTranslationsGQL, factory: SearchIngredientTranslationsGQL.ɵfac, providedIn: 'root' });
const UpdateCautionDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
    mutation updateCaution($where: CautionWhereUniqueInput!, $data: CautionUpdateInput!) {
  updateCaution(where: $where, data: $data) {
    id
  }
}
    `;
class UpdateCautionGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_1__.Mutation {
    constructor(apollo) {
        super(apollo);
        this.document = UpdateCautionDocument;
    }
}
UpdateCautionGQL.ɵfac = function UpdateCautionGQL_Factory(t) { return new (t || UpdateCautionGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_1__.Apollo)); };
UpdateCautionGQL.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: UpdateCautionGQL, factory: UpdateCautionGQL.ɵfac, providedIn: 'root' });
const UpdateFunctionDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
    mutation updateFunction($where: FunctionWhereUniqueInput!, $data: FunctionUpdateInput!) {
  updateFunction(where: $where, data: $data) {
    id
  }
}
    `;
class UpdateFunctionGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_1__.Mutation {
    constructor(apollo) {
        super(apollo);
        this.document = UpdateFunctionDocument;
    }
}
UpdateFunctionGQL.ɵfac = function UpdateFunctionGQL_Factory(t) { return new (t || UpdateFunctionGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_1__.Apollo)); };
UpdateFunctionGQL.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: UpdateFunctionGQL, factory: UpdateFunctionGQL.ɵfac, providedIn: 'root' });
const UpdateIngredientDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
    mutation updateIngredient($where: IngredientWhereUniqueInput!, $data: IngredientUpdateInput!) {
  updateIngredient(where: $where, data: $data) {
    id
  }
}
    `;
class UpdateIngredientGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_1__.Mutation {
    constructor(apollo) {
        super(apollo);
        this.document = UpdateIngredientDocument;
    }
}
UpdateIngredientGQL.ɵfac = function UpdateIngredientGQL_Factory(t) { return new (t || UpdateIngredientGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_1__.Apollo)); };
UpdateIngredientGQL.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: UpdateIngredientGQL, factory: UpdateIngredientGQL.ɵfac, providedIn: 'root' });
const ApprovePostCommentReportDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
    mutation approvePostCommentReport($where: PostCommentReportWhereUniqueInput!) {
  approvePostCommentReport(where: $where) {
    id
  }
}
    `;
class ApprovePostCommentReportGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_1__.Mutation {
    constructor(apollo) {
        super(apollo);
        this.document = ApprovePostCommentReportDocument;
    }
}
ApprovePostCommentReportGQL.ɵfac = function ApprovePostCommentReportGQL_Factory(t) { return new (t || ApprovePostCommentReportGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_1__.Apollo)); };
ApprovePostCommentReportGQL.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: ApprovePostCommentReportGQL, factory: ApprovePostCommentReportGQL.ɵfac, providedIn: 'root' });
const ApprovePostDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
    mutation approvePost($id: Int!) {
  approvePost(where: {id: $id}) {
    id
  }
}
    `;
class ApprovePostGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_1__.Mutation {
    constructor(apollo) {
        super(apollo);
        this.document = ApprovePostDocument;
    }
}
ApprovePostGQL.ɵfac = function ApprovePostGQL_Factory(t) { return new (t || ApprovePostGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_1__.Apollo)); };
ApprovePostGQL.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: ApprovePostGQL, factory: ApprovePostGQL.ɵfac, providedIn: 'root' });
const GetPostCommentReportListDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
    query getPostCommentReportList($skip: Int = 0, $after: String, $before: String, $first: Int, $last: Int, $where: PostCommentReportWhereInput, $orderBy: PostCommentReportOrderByInput) {
  postCommentReports(
    skip: $skip
    after: $after
    before: $before
    first: $first
    last: $last
    where: $where
    orderBy: $orderBy
  ) {
    ...PostCommentReportField
  }
  postCommentReportsConnection(
    skip: $skip
    after: $after
    before: $before
    first: $first
    last: $last
    where: $where
    orderBy: $orderBy
  ) {
    aggregate {
      count
    }
  }
}
    ${PostCommentReportFieldFragmentDoc}`;
class GetPostCommentReportListGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_1__.Query {
    constructor(apollo) {
        super(apollo);
        this.document = GetPostCommentReportListDocument;
    }
}
GetPostCommentReportListGQL.ɵfac = function GetPostCommentReportListGQL_Factory(t) { return new (t || GetPostCommentReportListGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_1__.Apollo)); };
GetPostCommentReportListGQL.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: GetPostCommentReportListGQL, factory: GetPostCommentReportListGQL.ɵfac, providedIn: 'root' });
const GetPostListDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
    query getPostList($skip: Int = 0, $after: String, $before: String, $first: Int, $last: Int, $where: PostWhereInput, $orderBy: [PostOrderByInput!]) {
  posts(
    skip: $skip
    after: $after
    before: $before
    first: $first
    last: $last
    where: $where
    orderBy: $orderBy
  ) {
    ...PostCard
  }
  postsConnection(
    skip: $skip
    after: $after
    before: $before
    first: $first
    last: $last
    where: $where
    orderBy: $orderBy
  ) {
    aggregate {
      count
    }
  }
}
    ${PostCardFragmentDoc}`;
class GetPostListGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_1__.Query {
    constructor(apollo) {
        super(apollo);
        this.document = GetPostListDocument;
    }
}
GetPostListGQL.ɵfac = function GetPostListGQL_Factory(t) { return new (t || GetPostListGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_1__.Apollo)); };
GetPostListGQL.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: GetPostListGQL, factory: GetPostListGQL.ɵfac, providedIn: 'root' });
const GetVideoPostListDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
    query GetVideoPostList($where: PostWhereInput, $orderBy: [PostOrderByInput!], $skip: Int = 0, $after: String, $before: String, $first: Int = 12, $last: Int) {
  posts(
    skip: $skip
    after: $after
    before: $before
    first: $first
    last: $last
    where: $where
    orderBy: $orderBy
  ) {
    ...VideoCard
  }
  postsConnection(where: $where) {
    aggregate {
      count
    }
  }
}
    ${VideoCardFragmentDoc}`;
class GetVideoPostListGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_1__.Query {
    constructor(apollo) {
        super(apollo);
        this.document = GetVideoPostListDocument;
    }
}
GetVideoPostListGQL.ɵfac = function GetVideoPostListGQL_Factory(t) { return new (t || GetVideoPostListGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_1__.Apollo)); };
GetVideoPostListGQL.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: GetVideoPostListGQL, factory: GetVideoPostListGQL.ɵfac, providedIn: 'root' });
const RejectPostCommentReportDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
    mutation rejectPostCommentReport($where: PostCommentReportWhereUniqueInput!) {
  rejectPostCommentReport(where: $where) {
    id
  }
}
    `;
class RejectPostCommentReportGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_1__.Mutation {
    constructor(apollo) {
        super(apollo);
        this.document = RejectPostCommentReportDocument;
    }
}
RejectPostCommentReportGQL.ɵfac = function RejectPostCommentReportGQL_Factory(t) { return new (t || RejectPostCommentReportGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_1__.Apollo)); };
RejectPostCommentReportGQL.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: RejectPostCommentReportGQL, factory: RejectPostCommentReportGQL.ɵfac, providedIn: 'root' });
const RejectPostDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
    mutation rejectPost($id: Int!) {
  rejectPost(where: {id: $id}) {
    id
  }
}
    `;
class RejectPostGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_1__.Mutation {
    constructor(apollo) {
        super(apollo);
        this.document = RejectPostDocument;
    }
}
RejectPostGQL.ɵfac = function RejectPostGQL_Factory(t) { return new (t || RejectPostGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_1__.Apollo)); };
RejectPostGQL.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: RejectPostGQL, factory: RejectPostGQL.ɵfac, providedIn: 'root' });
const CreateProductDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
    mutation createProduct($data: ProductCreateInput!) {
  createProduct(data: $data) {
    uid
  }
}
    `;
class CreateProductGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_1__.Mutation {
    constructor(apollo) {
        super(apollo);
        this.document = CreateProductDocument;
    }
}
CreateProductGQL.ɵfac = function CreateProductGQL_Factory(t) { return new (t || CreateProductGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_1__.Apollo)); };
CreateProductGQL.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: CreateProductGQL, factory: CreateProductGQL.ɵfac, providedIn: 'root' });
const GetProductDetailsDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
    query getProductDetails($where: ProductWhereUniqueInput!) {
  product(where: $where) {
    id
    price
    measure
    videoUrl
    videoTitle
    status
    translations(where: {language: VI}) {
      id
      name
      description
      imageDescription
      slug
    }
    thumbnail {
      id
      url
      small: fixed(width: SMALL) {
        url
      }
      name
      width
      height
    }
    categories {
      id
      translations(where: {language: VI}) {
        name
      }
    }
    brand {
      id
      translations(where: {language: VI}) {
        name
      }
    }
    barcodes(first: 1000) {
      id
      value
    }
    attributes {
      rdi
      packagingUnit
      netWeightPerPackage
      weightUnit
      netVolumePerPackage
      volumeUnit
      energyPerPackage
      energyUnit
    }
    productToIngredients(first: 1000) {
      attributes {
        amount
        amountUnit
      }
      ingredient {
        id
        translations {
          name
          language
        }
      }
    }
  }
}
    `;
class GetProductDetailsGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_1__.Query {
    constructor(apollo) {
        super(apollo);
        this.document = GetProductDetailsDocument;
    }
}
GetProductDetailsGQL.ɵfac = function GetProductDetailsGQL_Factory(t) { return new (t || GetProductDetailsGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_1__.Apollo)); };
GetProductDetailsGQL.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: GetProductDetailsGQL, factory: GetProductDetailsGQL.ɵfac, providedIn: 'root' });
const GetProductListDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
    query getProductList($skip: Int = 0, $after: String, $before: String, $first: Int = 10, $last: Int, $where: ProductWhereInput, $orderBy: [ProductOrderByInput!]) {
  products(
    skip: $skip
    after: $after
    before: $before
    first: $first
    last: $last
    where: $where
    orderBy: $orderBy
  ) {
    ...ProductListFields
  }
  productsConnection(
    skip: $skip
    after: $after
    before: $before
    first: $first
    last: $last
    where: $where
    orderBy: $orderBy
  ) {
    aggregate {
      count
    }
  }
}
    ${ProductListFieldsFragmentDoc}`;
class GetProductListGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_1__.Query {
    constructor(apollo) {
        super(apollo);
        this.document = GetProductListDocument;
    }
}
GetProductListGQL.ɵfac = function GetProductListGQL_Factory(t) { return new (t || GetProductListGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_1__.Apollo)); };
GetProductListGQL.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: GetProductListGQL, factory: GetProductListGQL.ɵfac, providedIn: 'root' });
const GetProductRequestsDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
    query getProductRequests($skip: Int = 0, $after: String, $before: String, $first: Int, $last: Int, $where: ProductRequestWhereInput, $orderBy: ProductRequestOrderByInput) {
  productRequests(
    skip: $skip
    after: $after
    before: $before
    first: $first
    last: $last
    where: $where
    orderBy: $orderBy
  ) {
    ...ProductRequestField
  }
  productRequestsConnection(
    skip: $skip
    after: $after
    before: $before
    first: $first
    last: $last
    where: $where
    orderBy: $orderBy
  ) {
    aggregate {
      count
    }
  }
}
    ${ProductRequestFieldFragmentDoc}`;
class GetProductRequestsGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_1__.Query {
    constructor(apollo) {
        super(apollo);
        this.document = GetProductRequestsDocument;
    }
}
GetProductRequestsGQL.ɵfac = function GetProductRequestsGQL_Factory(t) { return new (t || GetProductRequestsGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_1__.Apollo)); };
GetProductRequestsGQL.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: GetProductRequestsGQL, factory: GetProductRequestsGQL.ɵfac, providedIn: 'root' });
const SearchProductListDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
    query searchProductList($skip: Int = 0, $first: Int = 20, $text: String!) {
  searchProducts(skip: $skip, first: $first, text: $text) {
    products {
      ...ProductListFields
    }
    total
  }
}
    ${ProductListFieldsFragmentDoc}`;
class SearchProductListGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_1__.Query {
    constructor(apollo) {
        super(apollo);
        this.document = SearchProductListDocument;
    }
}
SearchProductListGQL.ɵfac = function SearchProductListGQL_Factory(t) { return new (t || SearchProductListGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_1__.Apollo)); };
SearchProductListGQL.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: SearchProductListGQL, factory: SearchProductListGQL.ɵfac, providedIn: 'root' });
const SearchProductsDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
    query searchProducts($skip: Int = 0, $first: Int = 20, $text: String!) {
  searchProducts(text: $text, first: $first, skip: $skip) {
    total
    products {
      id
      translations(where: {language: VI}) {
        name
      }
    }
  }
}
    `;
class SearchProductsGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_1__.Query {
    constructor(apollo) {
        super(apollo);
        this.document = SearchProductsDocument;
    }
}
SearchProductsGQL.ɵfac = function SearchProductsGQL_Factory(t) { return new (t || SearchProductsGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_1__.Apollo)); };
SearchProductsGQL.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: SearchProductsGQL, factory: SearchProductsGQL.ɵfac, providedIn: 'root' });
const UpdateProductRequestDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
    mutation updateProductRequest($data: ProductRequestUpdateInput!, $where: ProductRequestWhereUniqueInput!) {
  updateProductRequest(data: $data, where: $where) {
    id
  }
}
    `;
class UpdateProductRequestGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_1__.Mutation {
    constructor(apollo) {
        super(apollo);
        this.document = UpdateProductRequestDocument;
    }
}
UpdateProductRequestGQL.ɵfac = function UpdateProductRequestGQL_Factory(t) { return new (t || UpdateProductRequestGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_1__.Apollo)); };
UpdateProductRequestGQL.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: UpdateProductRequestGQL, factory: UpdateProductRequestGQL.ɵfac, providedIn: 'root' });
const UpdateProductDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
    mutation updateProduct($where: ProductWhereUniqueInput!, $data: ProductUpdateInput!) {
  updateProduct(where: $where, data: $data) {
    uid
  }
}
    `;
class UpdateProductGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_1__.Mutation {
    constructor(apollo) {
        super(apollo);
        this.document = UpdateProductDocument;
    }
}
UpdateProductGQL.ɵfac = function UpdateProductGQL_Factory(t) { return new (t || UpdateProductGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_1__.Apollo)); };
UpdateProductGQL.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: UpdateProductGQL, factory: UpdateProductGQL.ɵfac, providedIn: 'root' });
const ApproveReviewReportDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
    mutation approveReviewReport($where: ReviewReportWhereUniqueInput!) {
  approveReviewReport(where: $where) {
    id
  }
}
    `;
class ApproveReviewReportGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_1__.Mutation {
    constructor(apollo) {
        super(apollo);
        this.document = ApproveReviewReportDocument;
    }
}
ApproveReviewReportGQL.ɵfac = function ApproveReviewReportGQL_Factory(t) { return new (t || ApproveReviewReportGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_1__.Apollo)); };
ApproveReviewReportGQL.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: ApproveReviewReportGQL, factory: ApproveReviewReportGQL.ɵfac, providedIn: 'root' });
const ApproveReviewDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
    mutation approveReview($where: ReviewWhereUniqueInput!) {
  approveReview(where: $where) {
    id
  }
}
    `;
class ApproveReviewGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_1__.Mutation {
    constructor(apollo) {
        super(apollo);
        this.document = ApproveReviewDocument;
    }
}
ApproveReviewGQL.ɵfac = function ApproveReviewGQL_Factory(t) { return new (t || ApproveReviewGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_1__.Apollo)); };
ApproveReviewGQL.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: ApproveReviewGQL, factory: ApproveReviewGQL.ɵfac, providedIn: 'root' });
const GetReportsOfReviewDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
    query getReportsOfReview($skip: Int = 0, $after: String, $before: String, $first: Int, $last: Int, $where: ReviewReportWhereInput, $orderBy: ReviewReportOrderByInput) {
  reviewReports(
    skip: $skip
    after: $after
    before: $before
    first: $first
    last: $last
    where: $where
    orderBy: $orderBy
  ) {
    ...ReviewReportListFields
  }
}
    ${ReviewReportListFieldsFragmentDoc}`;
class GetReportsOfReviewGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_1__.Query {
    constructor(apollo) {
        super(apollo);
        this.document = GetReportsOfReviewDocument;
    }
}
GetReportsOfReviewGQL.ɵfac = function GetReportsOfReviewGQL_Factory(t) { return new (t || GetReportsOfReviewGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_1__.Apollo)); };
GetReportsOfReviewGQL.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: GetReportsOfReviewGQL, factory: GetReportsOfReviewGQL.ɵfac, providedIn: 'root' });
const GetReviewListDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
    query getReviewList($skip: Int = 0, $after: String, $before: String, $first: Int = 10, $last: Int, $where: ReviewWhereInput, $orderBy: ReviewOrderByInput) {
  reviews(
    skip: $skip
    after: $after
    before: $before
    first: $first
    last: $last
    where: $where
    orderBy: $orderBy
  ) {
    ...ReviewListFields
  }
  reviewsConnection(
    skip: $skip
    after: $after
    before: $before
    first: $first
    last: $last
    where: $where
    orderBy: $orderBy
  ) {
    aggregate {
      count
    }
  }
}
    ${ReviewListFieldsFragmentDoc}`;
class GetReviewListGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_1__.Query {
    constructor(apollo) {
        super(apollo);
        this.document = GetReviewListDocument;
    }
}
GetReviewListGQL.ɵfac = function GetReviewListGQL_Factory(t) { return new (t || GetReviewListGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_1__.Apollo)); };
GetReviewListGQL.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: GetReviewListGQL, factory: GetReviewListGQL.ɵfac, providedIn: 'root' });
const GetReviewReportListDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
    query getReviewReportList($skip: Int = 0, $after: String, $before: String, $first: Int, $last: Int, $where: ReviewReportWhereInput, $orderBy: ReviewReportOrderByInput) {
  reviewReports(
    skip: $skip
    after: $after
    before: $before
    first: $first
    last: $last
    where: $where
    orderBy: $orderBy
  ) {
    ...ReportListFieldsWithReview
  }
  reviewReportsConnection(
    skip: $skip
    after: $after
    before: $before
    first: $first
    last: $last
    where: $where
    orderBy: $orderBy
  ) {
    aggregate {
      count
    }
  }
}
    ${ReportListFieldsWithReviewFragmentDoc}`;
class GetReviewReportListGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_1__.Query {
    constructor(apollo) {
        super(apollo);
        this.document = GetReviewReportListDocument;
    }
}
GetReviewReportListGQL.ɵfac = function GetReviewReportListGQL_Factory(t) { return new (t || GetReviewReportListGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_1__.Apollo)); };
GetReviewReportListGQL.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: GetReviewReportListGQL, factory: GetReviewReportListGQL.ɵfac, providedIn: 'root' });
const RejectReviewReportDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
    mutation rejectReviewReport($where: ReviewReportWhereUniqueInput!) {
  rejectReviewReport(where: $where) {
    id
  }
}
    `;
class RejectReviewReportGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_1__.Mutation {
    constructor(apollo) {
        super(apollo);
        this.document = RejectReviewReportDocument;
    }
}
RejectReviewReportGQL.ɵfac = function RejectReviewReportGQL_Factory(t) { return new (t || RejectReviewReportGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_1__.Apollo)); };
RejectReviewReportGQL.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: RejectReviewReportGQL, factory: RejectReviewReportGQL.ɵfac, providedIn: 'root' });
const RejectReviewDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
    mutation rejectReview($where: ReviewWhereUniqueInput!) {
  rejectReview(where: $where) {
    id
  }
}
    `;
class RejectReviewGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_1__.Mutation {
    constructor(apollo) {
        super(apollo);
        this.document = RejectReviewDocument;
    }
}
RejectReviewGQL.ɵfac = function RejectReviewGQL_Factory(t) { return new (t || RejectReviewGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_1__.Apollo)); };
RejectReviewGQL.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: RejectReviewGQL, factory: RejectReviewGQL.ɵfac, providedIn: 'root' });
const ApproveShopDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
    mutation approveShop($where: ShopWhereUniqueInput!) {
  approveShop(where: $where) {
    id
  }
}
    `;
class ApproveShopGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_1__.Mutation {
    constructor(apollo) {
        super(apollo);
        this.document = ApproveShopDocument;
    }
}
ApproveShopGQL.ɵfac = function ApproveShopGQL_Factory(t) { return new (t || ApproveShopGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_1__.Apollo)); };
ApproveShopGQL.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: ApproveShopGQL, factory: ApproveShopGQL.ɵfac, providedIn: 'root' });
const BlockShopDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
    mutation blockShop($where: ShopWhereUniqueInput!, $reason: String!) {
  blockShop(where: $where, reason: $reason) {
    id
  }
}
    `;
class BlockShopGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_1__.Mutation {
    constructor(apollo) {
        super(apollo);
        this.document = BlockShopDocument;
    }
}
BlockShopGQL.ɵfac = function BlockShopGQL_Factory(t) { return new (t || BlockShopGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_1__.Apollo)); };
BlockShopGQL.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: BlockShopGQL, factory: BlockShopGQL.ɵfac, providedIn: 'root' });
const GetShopDetailsDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
    query getShopDetails($id: Int!) {
  shop(where: {id: $id}) {
    id
    name
    description
    status
    createdAt
    updatedAt
    pickupAddress {
      address
      ward
      district
      province
      country
    }
    user {
      id
      account
      avatar {
        small: fixed(width: SMALL) {
          url
        }
        url
      }
      email
    }
    cover {
      id
      medium: fixed(width: MEDIUM) {
        url
      }
      url
    }
    externalLinks {
      title
      url
      image {
        url
      }
    }
  }
}
    `;
class GetShopDetailsGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_1__.Query {
    constructor(apollo) {
        super(apollo);
        this.document = GetShopDetailsDocument;
    }
}
GetShopDetailsGQL.ɵfac = function GetShopDetailsGQL_Factory(t) { return new (t || GetShopDetailsGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_1__.Apollo)); };
GetShopDetailsGQL.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: GetShopDetailsGQL, factory: GetShopDetailsGQL.ɵfac, providedIn: 'root' });
const GetShopListDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
    query getShopList($skip: Int = 0, $after: String, $before: String, $first: Int = 10, $last: Int, $where: ShopWhereInput, $orderBy: ShopOrderByInput, $orderBys: [ShopOrderByInput!]) {
  shops(
    skip: $skip
    after: $after
    before: $before
    first: $first
    last: $last
    where: $where
    orderBy: $orderBy
    orderBys: $orderBys
  ) {
    id
    name
    status
    user {
      id
      avatar {
        fixed(width: SMALL) {
          url
        }
        url
      }
      email
      isOfficial
      type
    }
    createdAt
  }
  shopsConnection(
    skip: $skip
    after: $after
    before: $before
    first: $first
    last: $last
    where: $where
    orderBy: $orderBy
    orderBys: $orderBys
  ) {
    aggregate {
      count
    }
  }
}
    `;
class GetShopListGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_1__.Query {
    constructor(apollo) {
        super(apollo);
        this.document = GetShopListDocument;
    }
}
GetShopListGQL.ɵfac = function GetShopListGQL_Factory(t) { return new (t || GetShopListGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_1__.Apollo)); };
GetShopListGQL.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: GetShopListGQL, factory: GetShopListGQL.ɵfac, providedIn: 'root' });
const UploadShopToProductsDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
    mutation uploadShopToProducts($data: [ShopToProductCreateInput!]!) {
  uploadShopToProducts(data: $data) {
    price
  }
}
    `;
class UploadShopToProductsGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_1__.Mutation {
    constructor(apollo) {
        super(apollo);
        this.document = UploadShopToProductsDocument;
    }
}
UploadShopToProductsGQL.ɵfac = function UploadShopToProductsGQL_Factory(t) { return new (t || UploadShopToProductsGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_1__.Apollo)); };
UploadShopToProductsGQL.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: UploadShopToProductsGQL, factory: UploadShopToProductsGQL.ɵfac, providedIn: 'root' });
const SearchTagTranslationsDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
    query searchTagTranslations($skip: Int, $after: String, $before: String, $first: Int, $last: Int, $where: TagTranslationWhereInput, $orderBy: TagTranslationOrderByInput) {
  tagTranslations(
    skip: $skip
    after: $after
    before: $before
    first: $first
    last: $last
    where: $where
    orderBy: $orderBy
  ) {
    id
    content
    tag {
      id
    }
  }
}
    `;
class SearchTagTranslationsGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_1__.Query {
    constructor(apollo) {
        super(apollo);
        this.document = SearchTagTranslationsDocument;
    }
}
SearchTagTranslationsGQL.ɵfac = function SearchTagTranslationsGQL_Factory(t) { return new (t || SearchTagTranslationsGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_1__.Apollo)); };
SearchTagTranslationsGQL.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: SearchTagTranslationsGQL, factory: SearchTagTranslationsGQL.ɵfac, providedIn: 'root' });
const GetUserDetailsDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
    query getUserDetails($id: Int!) {
  user(where: {id: $id}) {
    id
    email
    account
    gender
    birthYear
    baumannSkinType
    isOfficial
    isBlocked
    avatar {
      url
      fixed(width: SMALL) {
        url
      }
    }
  }
}
    `;
class GetUserDetailsGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_1__.Query {
    constructor(apollo) {
        super(apollo);
        this.document = GetUserDetailsDocument;
    }
}
GetUserDetailsGQL.ɵfac = function GetUserDetailsGQL_Factory(t) { return new (t || GetUserDetailsGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_1__.Apollo)); };
GetUserDetailsGQL.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: GetUserDetailsGQL, factory: GetUserDetailsGQL.ɵfac, providedIn: 'root' });
const GetUserListDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
    query getUserList($skip: Int = 0, $after: String, $before: String, $first: Int, $last: Int, $where: UserWhereInput, $orderBy: UserOrderByInput) {
  users(
    skip: $skip
    after: $after
    before: $before
    first: $first
    last: $last
    where: $where
    orderBy: $orderBy
  ) {
    id
    account
    email
    isOfficial
    createdAt
    isBlocked
    avatar {
      url
      fixed(width: SMALL) {
        url
      }
    }
  }
  usersConnection(
    skip: $skip
    after: $after
    before: $before
    first: $first
    last: $last
    where: $where
  ) {
    aggregate {
      count
    }
  }
}
    `;
class GetUserListGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_1__.Query {
    constructor(apollo) {
        super(apollo);
        this.document = GetUserListDocument;
    }
}
GetUserListGQL.ɵfac = function GetUserListGQL_Factory(t) { return new (t || GetUserListGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_1__.Apollo)); };
GetUserListGQL.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: GetUserListGQL, factory: GetUserListGQL.ɵfac, providedIn: 'root' });
const BlockUserDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
    mutation blockUser($where: UserWhereUniqueInput!, $isBlocked: Boolean!) {
  blockUser(where: $where, isBlocked: $isBlocked) {
    id
  }
}
    `;
class BlockUserGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_1__.Mutation {
    constructor(apollo) {
        super(apollo);
        this.document = BlockUserDocument;
    }
}
BlockUserGQL.ɵfac = function BlockUserGQL_Factory(t) { return new (t || BlockUserGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_1__.Apollo)); };
BlockUserGQL.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: BlockUserGQL, factory: BlockUserGQL.ɵfac, providedIn: 'root' });
const UpgradeUserDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
    mutation upgradeUser($where: UserWhereUniqueInput!, $isOfficial: Boolean!) {
  upgradeUser(where: $where, isOfficial: $isOfficial) {
    id
  }
}
    `;
class UpgradeUserGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_1__.Mutation {
    constructor(apollo) {
        super(apollo);
        this.document = UpgradeUserDocument;
    }
}
UpgradeUserGQL.ɵfac = function UpgradeUserGQL_Factory(t) { return new (t || UpgradeUserGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_1__.Apollo)); };
UpgradeUserGQL.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: UpgradeUserGQL, factory: UpgradeUserGQL.ɵfac, providedIn: 'root' });
const SearchUsersDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
    query searchUsers($skip: Int = 0, $after: String, $before: String, $first: Int, $last: Int, $where: UserWhereInput) {
  users(
    skip: $skip
    after: $after
    before: $before
    first: $first
    last: $last
    where: $where
  ) {
    ...MentionUserFields
  }
}
    ${MentionUserFieldsFragmentDoc}`;
class SearchUsersGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_1__.Query {
    constructor(apollo) {
        super(apollo);
        this.document = SearchUsersDocument;
    }
}
SearchUsersGQL.ɵfac = function SearchUsersGQL_Factory(t) { return new (t || SearchUsersGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_1__.Apollo)); };
SearchUsersGQL.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: SearchUsersGQL, factory: SearchUsersGQL.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 14431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 71570);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 36747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 92340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(14431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map