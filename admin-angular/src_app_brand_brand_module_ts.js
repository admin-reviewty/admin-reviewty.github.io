"use strict";
(self["webpackChunkadmin_angular"] = self["webpackChunkadmin_angular"] || []).push([["src_app_brand_brand_module_ts"],{

/***/ 9506:
/*!*******************************************************************************!*\
  !*** ./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-tag.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzTagComponent": () => (/* binding */ NzTagComponent),
/* harmony export */   "NzTagModule": () => (/* binding */ NzTagModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/bidi */ 772);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 79441);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 22663);
/* harmony import */ var ng_zorro_antd_core_color__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/core/color */ 96366);
/* harmony import */ var ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/core/util */ 82504);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/icon */ 35203);











/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */





function NzTagComponent_i_1_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzTagComponent_i_1_Template_i_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.closeTag($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = ["*"];
class NzTagComponent {
    constructor(cdr, renderer, elementRef, directionality) {
        this.cdr = cdr;
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.directionality = directionality;
        this.isPresetColor = false;
        this.nzMode = 'default';
        this.nzChecked = false;
        this.nzOnClose = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.nzCheckedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.dir = 'ltr';
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
        // TODO: move to host after View Engine deprecation
        this.elementRef.nativeElement.classList.add('ant-tag');
    }
    updateCheckedStatus() {
        if (this.nzMode === 'checkable') {
            this.nzChecked = !this.nzChecked;
            this.nzCheckedChange.emit(this.nzChecked);
        }
    }
    closeTag(e) {
        this.nzOnClose.emit(e);
        if (!e.defaultPrevented) {
            this.renderer.removeChild(this.renderer.parentNode(this.elementRef.nativeElement), this.elementRef.nativeElement);
        }
    }
    /**
     * @deprecated
     * move to host after View Engine deprecation
     * host: {
     *   '[class]': `isPresetColor ? ('ant-tag-' + nzColor) : ''`
     * }
     */
    clearPresetColor() {
        const hostElement = this.elementRef.nativeElement;
        // /(ant-tag-(?:pink|red|...))/g
        const regexp = new RegExp(`(ant-tag-(?:${[...ng_zorro_antd_core_color__WEBPACK_IMPORTED_MODULE_2__.presetColors, ...ng_zorro_antd_core_color__WEBPACK_IMPORTED_MODULE_2__.statusColors].join('|')}))`, 'g');
        const classname = hostElement.classList.toString();
        const matches = [];
        let match = regexp.exec(classname);
        while (match !== null) {
            matches.push(match[1]);
            match = regexp.exec(classname);
        }
        hostElement.classList.remove(...matches);
    }
    /**
     * @deprecated
     * move to host after View Engine deprecation
     * host: {
     *   '[class]': `isPresetColor ? ('ant-tag-' + nzColor) : ''`
     * }
     */
    setPresetColor() {
        const hostElement = this.elementRef.nativeElement;
        this.clearPresetColor();
        if (!this.nzColor) {
            this.isPresetColor = false;
        }
        else {
            this.isPresetColor = (0,ng_zorro_antd_core_color__WEBPACK_IMPORTED_MODULE_2__.isPresetColor)(this.nzColor) || (0,ng_zorro_antd_core_color__WEBPACK_IMPORTED_MODULE_2__.isStatusColor)(this.nzColor);
        }
        if (this.isPresetColor) {
            hostElement.classList.add(`ant-tag-${this.nzColor}`);
        }
    }
    ngOnInit() {
        var _a;
        (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.takeUntil)(this.destroy$)).subscribe((direction) => {
            this.dir = direction;
            this.cdr.detectChanges();
        });
        this.dir = this.directionality.value;
    }
    ngOnChanges(changes) {
        const { nzColor } = changes;
        if (nzColor) {
            this.setPresetColor();
        }
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
NzTagComponent.ɵfac = function NzTagComponent_Factory(t) { return new (t || NzTagComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__.Directionality, 8)); };
NzTagComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzTagComponent, selectors: [["nz-tag"]], hostVars: 10, hostBindings: function NzTagComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzTagComponent_click_HostBindingHandler() { return ctx.updateCheckedStatus(); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", ctx.isPresetColor ? "" : ctx.nzColor);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-tag-has-color", ctx.nzColor && !ctx.isPresetColor)("ant-tag-checkable", ctx.nzMode === "checkable")("ant-tag-checkable-checked", ctx.nzChecked)("ant-tag-rtl", ctx.dir === "rtl");
    } }, inputs: { nzMode: "nzMode", nzChecked: "nzChecked", nzColor: "nzColor" }, outputs: { nzOnClose: "nzOnClose", nzCheckedChange: "nzCheckedChange" }, exportAs: ["nzTag"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], ngContentSelectors: _c0, decls: 2, vars: 1, consts: [["nz-icon", "", "nzType", "close", "class", "ant-tag-close-icon", "tabindex", "-1", 3, "click", 4, "ngIf"], ["nz-icon", "", "nzType", "close", "tabindex", "-1", 1, "ant-tag-close-icon", 3, "click"]], template: function NzTagComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzTagComponent_i_1_Template, 1, 0, "i", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.nzMode === "closeable");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_6__.NzIconDirective], encapsulation: 2, changeDetection: 0 });
NzTagComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2 },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef },
    { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__.Directionality, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional }] }
];
NzTagComponent.propDecorators = {
    nzMode: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    nzColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    nzChecked: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    nzOnClose: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    nzCheckedChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }]
};
(0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_8__.InputBoolean)()
], NzTagComponent.prototype, "nzChecked", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzTagComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
        args: [{
                selector: 'nz-tag',
                exportAs: 'nzTag',
                preserveWhitespaces: false,
                template: `
    <ng-content></ng-content>
    <i
      nz-icon
      nzType="close"
      class="ant-tag-close-icon"
      *ngIf="nzMode === 'closeable'"
      tabindex="-1"
      (click)="closeTag($event)"
    ></i>
  `,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
                host: {
                    '[style.background-color]': `isPresetColor ? '' : nzColor`,
                    '[class.ant-tag-has-color]': `nzColor && !isPresetColor`,
                    '[class.ant-tag-checkable]': `nzMode === 'checkable'`,
                    '[class.ant-tag-checkable-checked]': `nzChecked`,
                    '[class.ant-tag-rtl]': `dir === 'rtl'`,
                    '(click)': 'updateCheckedStatus()'
                }
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2 }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }, { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__.Directionality, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }] }]; }, { nzMode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], nzChecked: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], nzOnClose: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], nzCheckedChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], nzColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }] }); })();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzTagModule {
}
NzTagModule.ɵfac = function NzTagModule_Factory(t) { return new (t || NzTagModule)(); };
NzTagModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NzTagModule });
NzTagModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__.BidiModule, _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_6__.NzIconModule]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzTagModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
        args: [{
                imports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__.BidiModule, _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_6__.NzIconModule],
                declarations: [NzTagComponent],
                exports: [NzTagComponent]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NzTagModule, { declarations: function () { return [NzTagComponent]; }, imports: function () { return [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__.BidiModule, _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_6__.NzIconModule]; }, exports: function () { return [NzTagComponent]; } }); })();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */

/**
 * Generated bundle index. Do not edit.
 */





/***/ }),

/***/ 22898:
/*!***********************************************!*\
  !*** ./src/app/brand/brand-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BrandRoutingModule": () => (/* binding */ BrandRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _pages_brand_details_brand_details_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/brand-details/brand-details.component */ 72551);
/* harmony import */ var _pages_brand_list_brand_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/brand-list/brand-list.component */ 69776);
/* harmony import */ var _resolver_brand_resolver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resolver/brand.resolver */ 39718);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);






const routes = [
    {
        path: 'new',
        component: _pages_brand_details_brand_details_component__WEBPACK_IMPORTED_MODULE_0__.BrandDetailsComponent,
        resolve: {
            brand: _resolver_brand_resolver__WEBPACK_IMPORTED_MODULE_2__.BrandResolver,
        },
    },
    {
        path: ':id',
        component: _pages_brand_details_brand_details_component__WEBPACK_IMPORTED_MODULE_0__.BrandDetailsComponent,
        resolve: {
            brand: _resolver_brand_resolver__WEBPACK_IMPORTED_MODULE_2__.BrandResolver,
        },
    },
    {
        path: '',
        pathMatch: 'full',
        component: _pages_brand_list_brand_list_component__WEBPACK_IMPORTED_MODULE_1__.BrandListComponent,
    },
];
class BrandRoutingModule {
}
BrandRoutingModule.ɵfac = function BrandRoutingModule_Factory(t) { return new (t || BrandRoutingModule)(); };
BrandRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: BrandRoutingModule });
BrandRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](BrandRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] }); })();


/***/ }),

/***/ 31547:
/*!***************************************!*\
  !*** ./src/app/brand/brand.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BrandModule": () => (/* binding */ BrandModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/page-header */ 92443);
/* harmony import */ var ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/breadcrumb */ 17401);
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/card */ 47108);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/grid */ 95039);
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/table */ 4316);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 70325);
/* harmony import */ var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/message */ 91804);
/* harmony import */ var ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/tag */ 9506);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/button */ 56079);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/input */ 29422);
/* harmony import */ var ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-zorro-antd/radio */ 31031);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng-zorro-antd/icon */ 35203);
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ng-zorro-antd/form */ 32734);
/* harmony import */ var ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ng-zorro-antd/upload */ 40896);
/* harmony import */ var ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ng-zorro-antd/switch */ 17318);
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ng-zorro-antd/select */ 61532);
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ 79787);
/* harmony import */ var _brand_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./brand-routing.module */ 22898);
/* harmony import */ var _pages_brand_list_brand_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/brand-list/brand-list.component */ 69776);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/shared.module */ 44466);
/* harmony import */ var _pages_brand_details_brand_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/brand-details/brand-details.component */ 72551);
/* harmony import */ var _resolver_brand_resolver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./resolver/brand.resolver */ 39718);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 53882);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);



























class BrandModule {
}
BrandModule.ɵfac = function BrandModule_Factory(t) { return new (t || BrandModule)(); };
BrandModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: BrandModule });
BrandModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ providers: [_resolver_brand_resolver__WEBPACK_IMPORTED_MODULE_4__.BrandResolver], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _brand_routing_module__WEBPACK_IMPORTED_MODULE_0__.BrandRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClientModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateModule.forChild(),
            ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_10__.NzPageHeaderModule,
            ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_11__.NzBreadCrumbModule,
            ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_12__.NzCardModule,
            ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_13__.NzGridModule,
            ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_14__.NzTableModule,
            ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_15__.NzMessageModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
            ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_16__.NzTagModule,
            ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_17__.NzButtonModule,
            ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_18__.NzInputModule,
            ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_19__.NzRadioModule,
            ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_20__.NzIconModule,
            ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_21__.NzFormModule,
            ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_22__.NzUploadModule,
            ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_23__.NzSwitchModule,
            ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_24__.NzSelectModule,
            ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_25__.NzToolTipModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](BrandModule, { declarations: [_pages_brand_list_brand_list_component__WEBPACK_IMPORTED_MODULE_1__.BrandListComponent, _pages_brand_details_brand_details_component__WEBPACK_IMPORTED_MODULE_3__.BrandDetailsComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
        _brand_routing_module__WEBPACK_IMPORTED_MODULE_0__.BrandRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClientModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateModule, ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_10__.NzPageHeaderModule,
        ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_11__.NzBreadCrumbModule,
        ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_12__.NzCardModule,
        ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_13__.NzGridModule,
        ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_14__.NzTableModule,
        ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_15__.NzMessageModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
        ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_16__.NzTagModule,
        ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_17__.NzButtonModule,
        ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_18__.NzInputModule,
        ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_19__.NzRadioModule,
        ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_20__.NzIconModule,
        ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_21__.NzFormModule,
        ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_22__.NzUploadModule,
        ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_23__.NzSwitchModule,
        ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_24__.NzSelectModule,
        ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_25__.NzToolTipModule] }); })();


/***/ }),

/***/ 72551:
/*!**********************************************************************!*\
  !*** ./src/app/brand/pages/brand-details/brand-details.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BrandDetailsComponent": () => (/* binding */ BrandDetailsComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 79441);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 81134);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 22663);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 85816);
/* harmony import */ var _slim_2_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slim-2.json */ 26292);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../environments/environment */ 92340);
/* harmony import */ var _graphql_graphql__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../graphql/graphql */ 44092);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _shared_services_file_file_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/services/file/file.service */ 52250);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _shared_services_string_string_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/services/string/string.service */ 69665);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ 53882);
/* harmony import */ var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/message */ 91804);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngx-translate/core */ 70325);
/* harmony import */ var ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/page-header */ 92443);
/* harmony import */ var ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/breadcrumb */ 17401);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 29910);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng-zorro-antd/icon */ 35203);
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ng-zorro-antd/form */ 32734);
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ng-zorro-antd/card */ 47108);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ng-zorro-antd/grid */ 95039);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ng-zorro-antd/input */ 29422);
/* harmony import */ var ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ng-zorro-antd/upload */ 40896);
/* harmony import */ var ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ng-zorro-antd/switch */ 17318);
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ng-zorro-antd/select */ 61532);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ng-zorro-antd/button */ 56079);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 94772);
/* harmony import */ var _shared_directives_img_fallback_img_fallback_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/directives/img-fallback/img-fallback.directive */ 31841);
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ 79787);































function BrandDetailsComponent_ng_container_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} }
const _c0 = function () { return []; };
function BrandDetailsComponent_img_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "img", 23);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", ctx_r1.thumbnailFile ? ctx_r1.thumbnailUrl : (ctx_r1.brand == null ? null : ctx_r1.brand.smallLogoUrl) || "", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"])("appImgFallback", (ctx_r1.brand == null ? null : ctx_r1.brand.logoUrl) || _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](2, _c0));
} }
function BrandDetailsComponent_nz_option_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "nz-option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](1, "translate");
} if (rf & 2) {
    const type_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("nzLabel", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](1, 2, "brand.type." + type_r6.value))("nzValue", type_r6);
} }
function BrandDetailsComponent_nz_option_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "nz-option", 24);
} if (rf & 2) {
    const country_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("nzLabel", country_r7.name)("nzValue", country_r7.alpha2);
} }
function BrandDetailsComponent_ng_template_62_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function BrandDetailsComponent_ng_template_62_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r8.generateSlug(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("nzTooltipTitle", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](1, 1, "brand.create_slug_from_name"));
} }
const _c1 = function () { return { minRows: 10, maxRows: 10 }; };
class BrandDetailsComponent {
    constructor(fb, fileService, location, route, stringService, httpClient, createBrandGQL, updateBrandGQL, msgService, translateService) {
        this.fb = fb;
        this.fileService = fileService;
        this.location = location;
        this.route = route;
        this.stringService = stringService;
        this.httpClient = httpClient;
        this.createBrandGQL = createBrandGQL;
        this.updateBrandGQL = updateBrandGQL;
        this.msgService = msgService;
        this.translateService = translateService;
        this.BrandStatus = _graphql_graphql__WEBPACK_IMPORTED_MODULE_2__.BrandStatus;
        this.countries = _slim_2_json__WEBPACK_IMPORTED_MODULE_0__;
        this.loading = false;
        this.brandTypes = [
            {
                id: '1',
                value: _graphql_graphql__WEBPACK_IMPORTED_MODULE_2__.BrandTypeValue.DepartmentStore,
            },
            {
                id: '2',
                value: _graphql_graphql__WEBPACK_IMPORTED_MODULE_2__.BrandTypeValue.DrugStore,
            },
            {
                id: '3',
                value: _graphql_graphql__WEBPACK_IMPORTED_MODULE_2__.BrandTypeValue.RoadStore,
            },
            {
                id: '4',
                value: _graphql_graphql__WEBPACK_IMPORTED_MODULE_2__.BrandTypeValue.OnlineOther,
            },
        ];
        this.beforeUploadThumbnail = (file) => {
            this.thumbnailFile = file;
            this.fileService.getBase64(file, (img) => {
                this.thumbnailUrl = img;
            });
            return false;
        };
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subject();
        this.validateForm = this.fb.group({
            name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
            description: [null],
            types: [[]],
            status: [_graphql_graphql__WEBPACK_IMPORTED_MODULE_2__.BrandStatus.Active, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
            slug: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
            coo: [null],
        });
    }
    ngOnInit() {
        this.route.data.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this.destroy$)).subscribe(({ brand }) => {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r;
            this.brand = brand;
            this.thumbnailUrl = (_a = this.brand) === null || _a === void 0 ? void 0 : _a.logoUrl;
            this.validateForm.patchValue({
                name: (_d = (_c = (_b = this.brand) === null || _b === void 0 ? void 0 : _b.translations) === null || _c === void 0 ? void 0 : _c[0]) === null || _d === void 0 ? void 0 : _d.name,
                description: (_g = (_f = (_e = this.brand) === null || _e === void 0 ? void 0 : _e.translations) === null || _f === void 0 ? void 0 : _f[0]) === null || _g === void 0 ? void 0 : _g.description,
                status: ((_h = this.brand) === null || _h === void 0 ? void 0 : _h.status) === _graphql_graphql__WEBPACK_IMPORTED_MODULE_2__.BrandStatus.Active ? true : false,
                slug: (_l = (_k = (_j = this.brand) === null || _j === void 0 ? void 0 : _j.translations) === null || _k === void 0 ? void 0 : _k[0]) === null || _l === void 0 ? void 0 : _l.slug,
                types: (_m = this.brand) === null || _m === void 0 ? void 0 : _m.types,
                coo: (_o = this.brand) === null || _o === void 0 ? void 0 : _o.coo,
            });
            if (!((_r = (_q = (_p = this.brand) === null || _p === void 0 ? void 0 : _p.translations) === null || _q === void 0 ? void 0 : _q[0]) === null || _r === void 0 ? void 0 : _r.slug)) {
                this.generateSlug();
            }
        });
    }
    generateSlug() {
        var _a;
        const name = (_a = this.validateForm.get('name')) === null || _a === void 0 ? void 0 : _a.value;
        if (!(name === null || name === void 0 ? void 0 : name.trim().length)) {
            return;
        }
        this.validateForm.patchValue({
            slug: this.stringService.stringToSlug(name),
        });
    }
    compareBrandTypes(type1, type2) {
        return (type1 && type2 && type1.id === type2.id) || type1 === type2;
    }
    submitForm() {
        var _a;
        Object.values(this.validateForm.controls).forEach((control) => {
            control.markAsDirty();
            control.updateValueAndValidity();
        });
        if (this.validateForm.invalid) {
            return;
        }
        this.loading = true;
        let coverObservable;
        if (this.thumbnailFile) {
            const formData = new FormData();
            formData.append('file', this.thumbnailFile);
            coverObservable = this.httpClient.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiUri}/single-upload?useWatermark=false`, formData);
        }
        else {
            coverObservable = (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.of)({
                url: ((_a = this.brand) === null || _a === void 0 ? void 0 : _a.logoUrl) || '',
            });
        }
        coverObservable
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this.destroy$), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.mergeMap)(({ url }) => {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t;
            const data = {
                status: ((_a = this.validateForm.get('status')) === null || _a === void 0 ? void 0 : _a.value)
                    ? _graphql_graphql__WEBPACK_IMPORTED_MODULE_2__.BrandStatus.Active
                    : _graphql_graphql__WEBPACK_IMPORTED_MODULE_2__.BrandStatus.Inactive,
                logoUrl: url,
                coo: (_b = this.validateForm.get('coo')) === null || _b === void 0 ? void 0 : _b.value,
            };
            if ((_c = this.brand) === null || _c === void 0 ? void 0 : _c.uid) {
                return this.updateBrandGQL.mutate({
                    where: {
                        // tslint:disable-next-line: deprecation
                        id: this.brand.id,
                    },
                    data: Object.assign(Object.assign({}, data), { types: {
                            set: (_d = this.validateForm
                                .get('types')) === null || _d === void 0 ? void 0 : _d.value.map((type) => ({
                                id: type.id,
                            })),
                        }, translations: {
                            create: (!((_f = (_e = this.brand) === null || _e === void 0 ? void 0 : _e.translations) === null || _f === void 0 ? void 0 : _f[0]) && [
                                {
                                    name: (_g = this.validateForm.get('name')) === null || _g === void 0 ? void 0 : _g.value,
                                    description: (_h = this.validateForm.get('description')) === null || _h === void 0 ? void 0 : _h.value,
                                    isOriginal: true,
                                    language: _graphql_graphql__WEBPACK_IMPORTED_MODULE_2__.LanguageCode.Vi,
                                    slug: (_j = this.validateForm.get('slug')) === null || _j === void 0 ? void 0 : _j.value,
                                },
                            ]) ||
                                undefined,
                            set: ((_l = (_k = this.brand) === null || _k === void 0 ? void 0 : _k.translations) === null || _l === void 0 ? void 0 : _l[0]) && [
                                {
                                    id: this.brand.translations[0].id,
                                    name: (_m = this.validateForm.get('name')) === null || _m === void 0 ? void 0 : _m.value,
                                    description: (_o = this.validateForm.get('description')) === null || _o === void 0 ? void 0 : _o.value,
                                    isOriginal: true,
                                    language: _graphql_graphql__WEBPACK_IMPORTED_MODULE_2__.LanguageCode.Vi,
                                    slug: (_p = this.validateForm.get('slug')) === null || _p === void 0 ? void 0 : _p.value,
                                },
                            ],
                        } }),
                }, {
                    errorPolicy: 'all',
                });
            }
            else {
                return this.createBrandGQL.mutate({
                    data: Object.assign(Object.assign({}, data), { types: {
                            connect: (_q = this.validateForm
                                .get('types')) === null || _q === void 0 ? void 0 : _q.value.map((type) => ({
                                id: type.id,
                            })),
                        }, translations: {
                            create: [
                                {
                                    name: (_r = this.validateForm.get('name')) === null || _r === void 0 ? void 0 : _r.value,
                                    description: (_s = this.validateForm.get('description')) === null || _s === void 0 ? void 0 : _s.value,
                                    isOriginal: true,
                                    language: _graphql_graphql__WEBPACK_IMPORTED_MODULE_2__.LanguageCode.Vi,
                                    slug: (_t = this.validateForm.get('slug')) === null || _t === void 0 ? void 0 : _t.value,
                                },
                            ],
                        } }),
                }, {
                    errorPolicy: 'all',
                });
            }
        }))
            .subscribe(({ errors, data }) => {
            var _a, _b;
            if (errors) {
                this.msgService.error(this.translateService.instant(
                // tslint:disable-next-line: deprecation
                `brand.${((_a = this.brand) === null || _a === void 0 ? void 0 : _a.id) ? 'update' : 'create'}_error`));
            }
            if (data) {
                this.msgService.success(this.translateService.instant(
                // tslint:disable-next-line: deprecation
                `brand.${((_b = this.brand) === null || _b === void 0 ? void 0 : _b.id) ? 'update' : 'create'}_success`));
                this.location.back();
            }
            this.loading = false;
        }, () => {
            var _a;
            this.msgService.error(this.translateService.instant(
            // tslint:disable-next-line: deprecation
            `brand.${((_a = this.brand) === null || _a === void 0 ? void 0 : _a.id) ? 'update' : 'create'}_error`));
            this.loading = false;
        });
    }
    cancel() {
        this.location.back();
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.unsubscribe();
    }
}
BrandDetailsComponent.ɵfac = function BrandDetailsComponent_Factory(t) { return new (t || BrandDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_shared_services_file_file_service__WEBPACK_IMPORTED_MODULE_3__.FileService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_12__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_shared_services_string_string_service__WEBPACK_IMPORTED_MODULE_4__.StringService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_graphql_graphql__WEBPACK_IMPORTED_MODULE_2__.CreateBrandGQL), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_graphql_graphql__WEBPACK_IMPORTED_MODULE_2__.UpdateBrandGQL), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_15__.NzMessageService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__.TranslateService)); };
BrandDetailsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: BrandDetailsComponent, selectors: [["app-brand-details"]], decls: 73, vars: 54, consts: [[1, "site-page-header"], ["nz-page-header-breadcrumb", ""], ["nz-icon", "", "nzType", "home"], ["nz-form", "", 3, "nzLayout", "formGroup", "ngSubmit"], [1, "mb-3"], ["nzHasFeedback", "", 3, "nzErrorTip"], ["nz-input", "", "formControlName", "name"], ["nzHasFeedback", ""], ["nz-input", "", "formControlName", "description", 3, "nzAutosize"], ["nzListType", "picture-card", 1, "cover-uploader", 3, "nzBeforeUpload", "nzShowUploadList"], [4, "ngIf"], ["style", "width: 100%", 3, "src", "appImgFallback", 4, "ngIf"], ["formControlName", "status"], ["formControlName", "types", "nzMode", "multiple", 3, "compareWith"], [3, "nzLabel", "nzValue", 4, "ngFor", "ngForOf"], ["formControlName", "coo", "nzShowSearch", "", "nzAllowClear", ""], [3, "nzSuffix"], ["nz-input", "", "formControlName", "slug"], ["suffixTemplate", ""], [1, "mt-2", "pb-4"], ["nz-button", "", "nzType", "primary", 3, "nzLoading"], ["nz-button", "", "type", "button", 1, "ml-2", 3, "nzDanger", "click"], ["nz-icon", "", "nzType", "camera", "nzTheme", "outline", 1, "upload-icon"], [2, "width", "100%", 3, "src", "appImgFallback"], [3, "nzLabel", "nzValue"], ["nz-icon", "", "nzType", "sync", "nzTheme", "outline", "nz-tooltip", "", 3, "nzTooltipTitle", "click"]], template: function BrandDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "nz-page-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "nz-breadcrumb", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "nz-breadcrumb-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "nz-breadcrumb-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](7, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "nz-breadcrumb-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngSubmit", function BrandDetailsComponent_Template_form_ngSubmit_10_listener() { return ctx.submitForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "nz-card", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "nz-form-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](15, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "nz-form-control", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](17, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](18, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "nz-form-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](22, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "nz-form-control", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](24, "textarea", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "nz-form-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](28, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "nz-form-control");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "nz-upload", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](31, BrandDetailsComponent_ng_container_31_Template, 2, 0, "ng-container", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](32, BrandDetailsComponent_img_32_Template, 1, 3, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](33, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "nz-form-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](36, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](37, "nz-form-control");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](38, "nz-switch", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](39, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](40, "nz-form-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](42, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](43, "nz-form-control");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](44, "nz-select", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](45, BrandDetailsComponent_nz_option_45_Template, 2, 4, "nz-option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](46, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](47, "nz-form-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](48);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](49, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](50, "nz-form-control", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](51, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](52, "nz-select", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](53, BrandDetailsComponent_nz_option_53_Template, 1, 2, "nz-option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](54, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](55, "nz-form-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](56);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](57, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](58, "nz-form-control", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](59, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](60, "nz-input-group", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](61, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](62, BrandDetailsComponent_ng_template_62_Template, 2, 3, "ng-template", null, 18, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](64, "nz-form-item", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](65, "nz-form-control");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](66, "nz-input-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](67, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](68);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](69, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](70, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function BrandDetailsComponent_Template_button_click_70_listener() { return ctx.cancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](71);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](72, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](63);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](7, 27, "common.brand"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx.validateForm.controls.name == null ? null : ctx.validateForm.controls.name.value, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("nzLayout", "vertical")("formGroup", ctx.validateForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](15, 29, "brand.name"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("nzErrorTip", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](17, 31, "ui.form.should_not_be_empty"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](22, 33, "brand.description"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("nzAutosize", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](53, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](28, 35, "event.cover"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("nzBeforeUpload", ctx.beforeUploadThumbnail)("nzShowUploadList", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.thumbnailUrl);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.thumbnailUrl);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](36, 37, "common.status"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](42, 39, "common.type"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("compareWith", ctx.compareBrandTypes);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.brandTypes);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](49, 41, "brand.country_code"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("nzErrorTip", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](51, 43, "ui.form.should_not_be_empty"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.countries);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](57, 45, "product.web_url"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("nzErrorTip", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](59, 47, "ui.form.should_not_be_empty"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("nzSuffix", _r4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("nzLoading", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](69, 49, (ctx.brand == null ? null : ctx.brand.id) ? "common.update" : "common.add"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("nzDanger", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](72, 51, "common.cancel"), " ");
    } }, directives: [ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_17__.NzPageHeaderComponent, ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_18__.NzBreadCrumbComponent, ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_17__.NzPageHeaderBreadcrumbDirective, ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_18__.NzBreadCrumbItemComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_19__["ɵNzTransitionPatchDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_20__.NzIconDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_21__.NzFormDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupDirective, ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_22__.NzCardComponent, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_23__.NzRowDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_21__.NzFormItemComponent, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_23__.NzColDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_21__.NzFormLabelComponent, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_21__.NzFormControlComponent, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_24__.NzInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlName, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_24__.NzAutosizeDirective, ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_25__.NzUploadComponent, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_26__.NzSwitchComponent, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_27__.NzSelectComponent, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_24__.NzInputGroupComponent, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_24__.NzInputGroupWhitSuffixOrPrefixDirective, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_28__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_29__.NzWaveDirective, _shared_directives_img_fallback_img_fallback_directive__WEBPACK_IMPORTED_MODULE_5__.ImgFallbackDirective, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_27__.NzOptionComponent, ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_30__.NzTooltipDirective], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJicmFuZC1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 69776:
/*!****************************************************************!*\
  !*** ./src/app/brand/pages/brand-list/brand-list.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BrandListComponent": () => (/* binding */ BrandListComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 79441);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 22663);
/* harmony import */ var _graphql_graphql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../graphql/graphql */ 44092);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/message */ 91804);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 70325);
/* harmony import */ var ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/page-header */ 92443);
/* harmony import */ var ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/breadcrumb */ 17401);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 29910);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/icon */ 35203);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/button */ 56079);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 94772);
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/card */ 47108);
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/form */ 32734);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/grid */ 95039);
/* harmony import */ var ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/radio */ 31031);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-zorro-antd/input */ 29422);
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng-zorro-antd/table */ 4316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _shared_directives_img_fallback_img_fallback_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/directives/img-fallback/img-fallback.directive */ 31841);
/* harmony import */ var ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ng-zorro-antd/tag */ 9506);
























const _c0 = function () { return []; };
const _c1 = function (a1) { return ["/brands", a1]; };
function BrandListComponent_tr_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "nz-tag", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](16, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const brand_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](brand_r1.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", brand_r1.smallLogoUrl, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"])("appImgFallback", brand_r1.logoUrl || _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](10, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](brand_r1.translations[0] == null ? null : brand_r1.translations[0].name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzColor", brand_r1.status === ctx_r0.BrandStatus.Active ? "success" : "error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](brand_r1.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](11, _c1, brand_r1.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](16, 8, "common.edit"));
} }
class BrandListComponent {
    constructor(fb, route, router, getBrandListGQL, msgService, translateService) {
        this.fb = fb;
        this.route = route;
        this.router = router;
        this.getBrandListGQL = getBrandListGQL;
        this.msgService = msgService;
        this.translateService = translateService;
        this.BrandStatus = _graphql_graphql__WEBPACK_IMPORTED_MODULE_0__.BrandStatus;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
        this.brands = [];
        this.brandsCount = 0;
        this.pageIndex = 1;
        this.pageSize = 10;
        this.loading = false;
        this.searchForm = this.fb.group({
            name: [null],
            status: [null],
        });
    }
    ngOnInit() {
        this.route.queryParamMap
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this.destroy$))
            .subscribe((paramMap) => {
            this.pageIndex = parseInt(paramMap.get('page') || '1', 10);
            this.pageSize = parseInt(paramMap.get('page-size') || '10', 10);
            this.text = paramMap.get('text') || '';
            this.status = Object.values(_graphql_graphql__WEBPACK_IMPORTED_MODULE_0__.BrandStatus).includes(paramMap.get('status'))
                ? paramMap.get('status')
                : undefined;
            this.searchForm.patchValue({
                name: this.text,
                status: this.status,
            });
            if (this.dataSubscription) {
                this.refetch();
            }
            else {
                this.dataQueryRef = this.getBrandListGQL.watch(this.getVariables(), {
                    notifyOnNetworkStatusChange: true,
                    fetchPolicy: 'network-only',
                });
                this.dataSubscription = this.dataQueryRef.valueChanges
                    .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this.destroy$))
                    .subscribe(({ data, loading, error, errors }) => {
                    this.loading = loading;
                    if (loading) {
                        return;
                    }
                    if (error || errors) {
                        this.msgService.error(this.translateService.instant('ui.message.can_not_load_data'));
                        return;
                    }
                    if (data) {
                        this.brands = data.brands;
                        this.brandsCount = data.brandsConnection.aggregate.count;
                    }
                });
            }
        });
    }
    refetch() {
        var _a;
        (_a = this.dataQueryRef) === null || _a === void 0 ? void 0 : _a.refetch(this.getVariables());
    }
    getVariables() {
        return {
            where: {
                translationsSome: {
                    nameContains: this.text || undefined,
                },
                status: this.status,
            },
            first: this.pageSize,
            skip: (this.pageIndex - 1) * this.pageSize,
            orderBy: {
                id: _graphql_graphql__WEBPACK_IMPORTED_MODULE_0__.OrderBy.Desc,
            },
        };
    }
    handleQueryParamsChange(params) {
        this.router.navigate([], {
            queryParams: {
                page: params.pageIndex,
                'page-size': params.pageSize,
            },
            relativeTo: this.route,
            queryParamsHandling: 'merge',
        });
    }
    handleSearch() {
        const searchData = this.searchForm.value;
        const status = searchData.status || undefined;
        const text = searchData.name || undefined;
        this.router.navigate([], {
            queryParams: {
                text,
                status,
            },
            relativeTo: this.route,
            queryParamsHandling: 'merge',
        });
    }
    trackById(index, item) {
        return item.id;
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.unsubscribe();
    }
}
BrandListComponent.ɵfac = function BrandListComponent_Factory(t) { return new (t || BrandListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_graphql_graphql__WEBPACK_IMPORTED_MODULE_0__.GetBrandListGQL), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_7__.NzMessageService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateService)); };
BrandListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: BrandListComponent, selectors: [["app-brand-list"]], decls: 49, vars: 55, consts: [[1, "site-page-header", 3, "nzTitle"], ["nz-page-header-breadcrumb", ""], ["nz-icon", "", "nzType", "home"], ["nz-button", "", "nzType", "primary", "routerLink", "/brands/new"], ["nz-icon", "", "nzType", "plus", "nzTheme", "outline"], [1, "mb-3"], ["nz-form", "", 3, "formGroup", "ngSubmit"], ["nz-row", "", 3, "nzGutter"], ["nz-col", "", "nzFlex", "center", 3, "nzXs", "nzSm", "nzMd", "nzLg", "nzXl", "nzXXl"], ["formControlName", "status"], ["nz-radio-button", "", 3, "nzValue", "click"], ["nz-input", "", "formControlName", "name", 1, "mr-2", 3, "placeholder"], ["nz-button", "", "nzType", "primary", "type", "submit"], ["nz-icon", "", "nzType", "search", "nzTheme", "outline"], [1, "mb-4"], ["nzBordered", "", 3, "nzData", "nzFrontPagination", "nzTotal", "nzPageIndex", "nzPageSize", "nzLoading", "nzQueryParams"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "d-flex", "justify-content-start", "align-items-center"], [1, "brand-logo", "mr-2", "img-thumbnail", "flex-grow-0", "flex-shrink-0"], ["loading", "lazy", 3, "src", "appImgFallback"], ["nz-typography", ""], [3, "nzColor"], [3, "routerLink"]], template: function BrandListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nz-page-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "nz-breadcrumb", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "nz-breadcrumb-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "nz-breadcrumb-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](8, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "nz-page-header-extra");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](13, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "nz-card", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function BrandListComponent_Template_form_ngSubmit_15_listener() { return ctx.handleSearch(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "nz-radio-group", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BrandListComponent_Template_label_click_19_listener() { return ctx.handleSearch(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](21, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BrandListComponent_Template_label_click_22_listener() { return ctx.handleSearch(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Active");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BrandListComponent_Template_label_click_24_listener() { return ctx.handleSearch(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "Inactive");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](27, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](28, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](31, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](33, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "nz-card", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "nz-table", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("nzQueryParams", function BrandListComponent_Template_nz_table_nzQueryParams_35_listener($event) { return ctx.handleQueryParamsChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, "ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](42, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](45, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](46, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](48, BrandListComponent_tr_48_Template, 17, 13, "tr", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("nzTitle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 39, "common.brand"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](8, 41, "common.brand"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](13, 43, "brand.create"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.searchForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzGutter", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzXs", 24)("nzSm", 24)("nzMd", 24)("nzLg", 8)("nzXl", 8)("nzXXl", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzValue", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](21, 45, "common.all"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzValue", ctx.BrandStatus.Active);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzValue", ctx.BrandStatus.Inactive);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzXs", 24)("nzSm", 24)("nzMd", 24)("nzLg", 8)("nzXl", 8)("nzXXl", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](28, 47, "brand.name"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzXs", 24)("nzSm", 24)("nzMd", 24)("nzLg", 8)("nzXl", 8)("nzXXl", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](33, 49, "common.search"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzData", ctx.brands)("nzFrontPagination", false)("nzTotal", ctx.brandsCount)("nzPageIndex", ctx.pageIndex)("nzPageSize", ctx.pageSize)("nzLoading", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](42, 51, "brand.name"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](45, 53, "common.status"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.brands)("ngForTrackBy", ctx.trackById);
    } }, directives: [ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_9__.NzPageHeaderComponent, ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_10__.NzBreadCrumbComponent, ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_9__.NzPageHeaderBreadcrumbDirective, ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_10__.NzBreadCrumbItemComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_11__["ɵNzTransitionPatchDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_12__.NzIconDirective, ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_9__.NzPageHeaderExtraDirective, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_13__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_14__.NzWaveDirective, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink, ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_15__.NzCardComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_16__.NzFormDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_17__.NzRowDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_17__.NzColDirective, ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_18__.NzRadioGroupComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_18__.NzRadioComponent, ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_18__.NzRadioButtonDirective, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_19__.NzInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_20__.NzTableComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_20__.NzTheadComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_20__.NzTrDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_20__.NzTableCellDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_20__.NzThMeasureDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_20__.NzTbodyComponent, _angular_common__WEBPACK_IMPORTED_MODULE_21__.NgForOf, _shared_directives_img_fallback_img_fallback_directive__WEBPACK_IMPORTED_MODULE_1__.ImgFallbackDirective, ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_22__.NzTagComponent, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLinkWithHref], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslatePipe], styles: [".brand-logo[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 50px;\n  position: relative;\n  overflow: hidden;\n}\n.brand-logo[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJyYW5kLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFDRjtBQUNFO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBQ0oiLCJmaWxlIjoiYnJhbmQtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5icmFuZC1sb2dvIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICA+IGltZyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxufVxuIl19 */"] });


/***/ }),

/***/ 39718:
/*!**************************************************!*\
  !*** ./src/app/brand/resolver/brand.resolver.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BrandResolver": () => (/* binding */ BrandResolver)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 33927);
/* harmony import */ var _graphql_graphql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../graphql/graphql */ 44092);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);





class BrandResolver {
    constructor(getBrandDetailsGQL, router) {
        this.getBrandDetailsGQL = getBrandDetailsGQL;
        this.router = router;
    }
    resolve(route, state) {
        const id = parseInt(route.paramMap.get('id') || '', 10);
        if (id) {
            return this.getBrandDetailsGQL
                .fetch({
                where: {
                    id,
                },
            }, {
                fetchPolicy: 'network-only',
            })
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((result) => {
                var _a;
                if (result.error || result.errors) {
                    this.router.navigateByUrl('/exception/500');
                    return undefined;
                }
                if ((_a = result.data) === null || _a === void 0 ? void 0 : _a.brand) {
                    return result.data.brand;
                }
                else {
                    this.router.navigateByUrl('/exception/404');
                    return undefined;
                }
            }));
        }
        else {
            return {
                status: _graphql_graphql__WEBPACK_IMPORTED_MODULE_0__.BrandStatus.Active,
            };
        }
    }
}
BrandResolver.ɵfac = function BrandResolver_Factory(t) { return new (t || BrandResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_graphql_graphql__WEBPACK_IMPORTED_MODULE_0__.GetBrandDetailsGQL), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router)); };
BrandResolver.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: BrandResolver, factory: BrandResolver.ɵfac });


/***/ }),

/***/ 26292:
/*!*******************************************************!*\
  !*** ./src/app/brand/pages/brand-details/slim-2.json ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = JSON.parse('[{"name":"Afghanistan","alpha2":"AF","country-code":"004"},{"name":"Åland Islands","alpha2":"AX","country-code":"248"},{"name":"Albania","alpha2":"AL","country-code":"008"},{"name":"Algeria","alpha2":"DZ","country-code":"012"},{"name":"American Samoa","alpha2":"AS","country-code":"016"},{"name":"Andorra","alpha2":"AD","country-code":"020"},{"name":"Angola","alpha2":"AO","country-code":"024"},{"name":"Anguilla","alpha2":"AI","country-code":"660"},{"name":"Antarctica","alpha2":"AQ","country-code":"010"},{"name":"Antigua and Barbuda","alpha2":"AG","country-code":"028"},{"name":"Argentina","alpha2":"AR","country-code":"032"},{"name":"Armenia","alpha2":"AM","country-code":"051"},{"name":"Aruba","alpha2":"AW","country-code":"533"},{"name":"Australia","alpha2":"AU","country-code":"036"},{"name":"Austria","alpha2":"AT","country-code":"040"},{"name":"Azerbaijan","alpha2":"AZ","country-code":"031"},{"name":"Bahamas","alpha2":"BS","country-code":"044"},{"name":"Bahrain","alpha2":"BH","country-code":"048"},{"name":"Bangladesh","alpha2":"BD","country-code":"050"},{"name":"Barbados","alpha2":"BB","country-code":"052"},{"name":"Belarus","alpha2":"BY","country-code":"112"},{"name":"Belgium","alpha2":"BE","country-code":"056"},{"name":"Belize","alpha2":"BZ","country-code":"084"},{"name":"Benin","alpha2":"BJ","country-code":"204"},{"name":"Bermuda","alpha2":"BM","country-code":"060"},{"name":"Bhutan","alpha2":"BT","country-code":"064"},{"name":"Bolivia (Plurinational State of)","alpha2":"BO","country-code":"068"},{"name":"Bonaire, Sint Eustatius and Saba","alpha2":"BQ","country-code":"535"},{"name":"Bosnia and Herzegovina","alpha2":"BA","country-code":"070"},{"name":"Botswana","alpha2":"BW","country-code":"072"},{"name":"Bouvet Island","alpha2":"BV","country-code":"074"},{"name":"Brazil","alpha2":"BR","country-code":"076"},{"name":"British Indian Ocean Territory","alpha2":"IO","country-code":"086"},{"name":"Brunei Darussalam","alpha2":"BN","country-code":"096"},{"name":"Bulgaria","alpha2":"BG","country-code":"100"},{"name":"Burkina Faso","alpha2":"BF","country-code":"854"},{"name":"Burundi","alpha2":"BI","country-code":"108"},{"name":"Cabo Verde","alpha2":"CV","country-code":"132"},{"name":"Cambodia","alpha2":"KH","country-code":"116"},{"name":"Cameroon","alpha2":"CM","country-code":"120"},{"name":"Canada","alpha2":"CA","country-code":"124"},{"name":"Cayman Islands","alpha2":"KY","country-code":"136"},{"name":"Central African Republic","alpha2":"CF","country-code":"140"},{"name":"Chad","alpha2":"TD","country-code":"148"},{"name":"Chile","alpha2":"CL","country-code":"152"},{"name":"China","alpha2":"CN","country-code":"156"},{"name":"Christmas Island","alpha2":"CX","country-code":"162"},{"name":"Cocos (Keeling) Islands","alpha2":"CC","country-code":"166"},{"name":"Colombia","alpha2":"CO","country-code":"170"},{"name":"Comoros","alpha2":"KM","country-code":"174"},{"name":"Congo","alpha2":"CG","country-code":"178"},{"name":"Congo, Democratic Republic of the","alpha2":"CD","country-code":"180"},{"name":"Cook Islands","alpha2":"CK","country-code":"184"},{"name":"Costa Rica","alpha2":"CR","country-code":"188"},{"name":"Côte d\'Ivoire","alpha2":"CI","country-code":"384"},{"name":"Croatia","alpha2":"HR","country-code":"191"},{"name":"Cuba","alpha2":"CU","country-code":"192"},{"name":"Curaçao","alpha2":"CW","country-code":"531"},{"name":"Cyprus","alpha2":"CY","country-code":"196"},{"name":"Czechia","alpha2":"CZ","country-code":"203"},{"name":"Denmark","alpha2":"DK","country-code":"208"},{"name":"Djibouti","alpha2":"DJ","country-code":"262"},{"name":"Dominica","alpha2":"DM","country-code":"212"},{"name":"Dominican Republic","alpha2":"DO","country-code":"214"},{"name":"Ecuador","alpha2":"EC","country-code":"218"},{"name":"Egypt","alpha2":"EG","country-code":"818"},{"name":"El Salvador","alpha2":"SV","country-code":"222"},{"name":"Equatorial Guinea","alpha2":"GQ","country-code":"226"},{"name":"Eritrea","alpha2":"ER","country-code":"232"},{"name":"Estonia","alpha2":"EE","country-code":"233"},{"name":"Eswatini","alpha2":"SZ","country-code":"748"},{"name":"Ethiopia","alpha2":"ET","country-code":"231"},{"name":"Falkland Islands (Malvinas)","alpha2":"FK","country-code":"238"},{"name":"Faroe Islands","alpha2":"FO","country-code":"234"},{"name":"Fiji","alpha2":"FJ","country-code":"242"},{"name":"Finland","alpha2":"FI","country-code":"246"},{"name":"France","alpha2":"FR","country-code":"250"},{"name":"French Guiana","alpha2":"GF","country-code":"254"},{"name":"French Polynesia","alpha2":"PF","country-code":"258"},{"name":"French Southern Territories","alpha2":"TF","country-code":"260"},{"name":"Gabon","alpha2":"GA","country-code":"266"},{"name":"Gambia","alpha2":"GM","country-code":"270"},{"name":"Georgia","alpha2":"GE","country-code":"268"},{"name":"Germany","alpha2":"DE","country-code":"276"},{"name":"Ghana","alpha2":"GH","country-code":"288"},{"name":"Gibraltar","alpha2":"GI","country-code":"292"},{"name":"Greece","alpha2":"GR","country-code":"300"},{"name":"Greenland","alpha2":"GL","country-code":"304"},{"name":"Grenada","alpha2":"GD","country-code":"308"},{"name":"Guadeloupe","alpha2":"GP","country-code":"312"},{"name":"Guam","alpha2":"GU","country-code":"316"},{"name":"Guatemala","alpha2":"GT","country-code":"320"},{"name":"Guernsey","alpha2":"GG","country-code":"831"},{"name":"Guinea","alpha2":"GN","country-code":"324"},{"name":"Guinea-Bissau","alpha2":"GW","country-code":"624"},{"name":"Guyana","alpha2":"GY","country-code":"328"},{"name":"Haiti","alpha2":"HT","country-code":"332"},{"name":"Heard Island and McDonald Islands","alpha2":"HM","country-code":"334"},{"name":"Holy See","alpha2":"VA","country-code":"336"},{"name":"Honduras","alpha2":"HN","country-code":"340"},{"name":"Hong Kong","alpha2":"HK","country-code":"344"},{"name":"Hungary","alpha2":"HU","country-code":"348"},{"name":"Iceland","alpha2":"IS","country-code":"352"},{"name":"India","alpha2":"IN","country-code":"356"},{"name":"Indonesia","alpha2":"ID","country-code":"360"},{"name":"Iran (Islamic Republic of)","alpha2":"IR","country-code":"364"},{"name":"Iraq","alpha2":"IQ","country-code":"368"},{"name":"Ireland","alpha2":"IE","country-code":"372"},{"name":"Isle of Man","alpha2":"IM","country-code":"833"},{"name":"Israel","alpha2":"IL","country-code":"376"},{"name":"Italy","alpha2":"IT","country-code":"380"},{"name":"Jamaica","alpha2":"JM","country-code":"388"},{"name":"Japan","alpha2":"JP","country-code":"392"},{"name":"Jersey","alpha2":"JE","country-code":"832"},{"name":"Jordan","alpha2":"JO","country-code":"400"},{"name":"Kazakhstan","alpha2":"KZ","country-code":"398"},{"name":"Kenya","alpha2":"KE","country-code":"404"},{"name":"Kiribati","alpha2":"KI","country-code":"296"},{"name":"Korea (Democratic People\'s Republic of)","alpha2":"KP","country-code":"408"},{"name":"Korea, Republic of","alpha2":"KR","country-code":"410"},{"name":"Kuwait","alpha2":"KW","country-code":"414"},{"name":"Kyrgyzstan","alpha2":"KG","country-code":"417"},{"name":"Lao People\'s Democratic Republic","alpha2":"LA","country-code":"418"},{"name":"Latvia","alpha2":"LV","country-code":"428"},{"name":"Lebanon","alpha2":"LB","country-code":"422"},{"name":"Lesotho","alpha2":"LS","country-code":"426"},{"name":"Liberia","alpha2":"LR","country-code":"430"},{"name":"Libya","alpha2":"LY","country-code":"434"},{"name":"Liechtenstein","alpha2":"LI","country-code":"438"},{"name":"Lithuania","alpha2":"LT","country-code":"440"},{"name":"Luxembourg","alpha2":"LU","country-code":"442"},{"name":"Macao","alpha2":"MO","country-code":"446"},{"name":"Madagascar","alpha2":"MG","country-code":"450"},{"name":"Malawi","alpha2":"MW","country-code":"454"},{"name":"Malaysia","alpha2":"MY","country-code":"458"},{"name":"Maldives","alpha2":"MV","country-code":"462"},{"name":"Mali","alpha2":"ML","country-code":"466"},{"name":"Malta","alpha2":"MT","country-code":"470"},{"name":"Marshall Islands","alpha2":"MH","country-code":"584"},{"name":"Martinique","alpha2":"MQ","country-code":"474"},{"name":"Mauritania","alpha2":"MR","country-code":"478"},{"name":"Mauritius","alpha2":"MU","country-code":"480"},{"name":"Mayotte","alpha2":"YT","country-code":"175"},{"name":"Mexico","alpha2":"MX","country-code":"484"},{"name":"Micronesia (Federated States of)","alpha2":"FM","country-code":"583"},{"name":"Moldova, Republic of","alpha2":"MD","country-code":"498"},{"name":"Monaco","alpha2":"MC","country-code":"492"},{"name":"Mongolia","alpha2":"MN","country-code":"496"},{"name":"Montenegro","alpha2":"ME","country-code":"499"},{"name":"Montserrat","alpha2":"MS","country-code":"500"},{"name":"Morocco","alpha2":"MA","country-code":"504"},{"name":"Mozambique","alpha2":"MZ","country-code":"508"},{"name":"Myanmar","alpha2":"MM","country-code":"104"},{"name":"Namibia","alpha2":"NA","country-code":"516"},{"name":"Nauru","alpha2":"NR","country-code":"520"},{"name":"Nepal","alpha2":"NP","country-code":"524"},{"name":"Netherlands","alpha2":"NL","country-code":"528"},{"name":"New Caledonia","alpha2":"NC","country-code":"540"},{"name":"New Zealand","alpha2":"NZ","country-code":"554"},{"name":"Nicaragua","alpha2":"NI","country-code":"558"},{"name":"Niger","alpha2":"NE","country-code":"562"},{"name":"Nigeria","alpha2":"NG","country-code":"566"},{"name":"Niue","alpha2":"NU","country-code":"570"},{"name":"Norfolk Island","alpha2":"NF","country-code":"574"},{"name":"North Macedonia","alpha2":"MK","country-code":"807"},{"name":"Northern Mariana Islands","alpha2":"MP","country-code":"580"},{"name":"Norway","alpha2":"NO","country-code":"578"},{"name":"Oman","alpha2":"OM","country-code":"512"},{"name":"Pakistan","alpha2":"PK","country-code":"586"},{"name":"Palau","alpha2":"PW","country-code":"585"},{"name":"Palestine, State of","alpha2":"PS","country-code":"275"},{"name":"Panama","alpha2":"PA","country-code":"591"},{"name":"Papua New Guinea","alpha2":"PG","country-code":"598"},{"name":"Paraguay","alpha2":"PY","country-code":"600"},{"name":"Peru","alpha2":"PE","country-code":"604"},{"name":"Philippines","alpha2":"PH","country-code":"608"},{"name":"Pitcairn","alpha2":"PN","country-code":"612"},{"name":"Poland","alpha2":"PL","country-code":"616"},{"name":"Portugal","alpha2":"PT","country-code":"620"},{"name":"Puerto Rico","alpha2":"PR","country-code":"630"},{"name":"Qatar","alpha2":"QA","country-code":"634"},{"name":"Réunion","alpha2":"RE","country-code":"638"},{"name":"Romania","alpha2":"RO","country-code":"642"},{"name":"Russian Federation","alpha2":"RU","country-code":"643"},{"name":"Rwanda","alpha2":"RW","country-code":"646"},{"name":"Saint Barthélemy","alpha2":"BL","country-code":"652"},{"name":"Saint Helena, Ascension and Tristan da Cunha","alpha2":"SH","country-code":"654"},{"name":"Saint Kitts and Nevis","alpha2":"KN","country-code":"659"},{"name":"Saint Lucia","alpha2":"LC","country-code":"662"},{"name":"Saint Martin (French part)","alpha2":"MF","country-code":"663"},{"name":"Saint Pierre and Miquelon","alpha2":"PM","country-code":"666"},{"name":"Saint Vincent and the Grenadines","alpha2":"VC","country-code":"670"},{"name":"Samoa","alpha2":"WS","country-code":"882"},{"name":"San Marino","alpha2":"SM","country-code":"674"},{"name":"Sao Tome and Principe","alpha2":"ST","country-code":"678"},{"name":"Saudi Arabia","alpha2":"SA","country-code":"682"},{"name":"Senegal","alpha2":"SN","country-code":"686"},{"name":"Serbia","alpha2":"RS","country-code":"688"},{"name":"Seychelles","alpha2":"SC","country-code":"690"},{"name":"Sierra Leone","alpha2":"SL","country-code":"694"},{"name":"Singapore","alpha2":"SG","country-code":"702"},{"name":"Sint Maarten (Dutch part)","alpha2":"SX","country-code":"534"},{"name":"Slovakia","alpha2":"SK","country-code":"703"},{"name":"Slovenia","alpha2":"SI","country-code":"705"},{"name":"Solomon Islands","alpha2":"SB","country-code":"090"},{"name":"Somalia","alpha2":"SO","country-code":"706"},{"name":"South Africa","alpha2":"ZA","country-code":"710"},{"name":"South Georgia and the South Sandwich Islands","alpha2":"GS","country-code":"239"},{"name":"South Sudan","alpha2":"SS","country-code":"728"},{"name":"Spain","alpha2":"ES","country-code":"724"},{"name":"Sri Lanka","alpha2":"LK","country-code":"144"},{"name":"Sudan","alpha2":"SD","country-code":"729"},{"name":"Suriname","alpha2":"SR","country-code":"740"},{"name":"Svalbard and Jan Mayen","alpha2":"SJ","country-code":"744"},{"name":"Sweden","alpha2":"SE","country-code":"752"},{"name":"Switzerland","alpha2":"CH","country-code":"756"},{"name":"Syrian Arab Republic","alpha2":"SY","country-code":"760"},{"name":"Taiwan, Province of China","alpha2":"TW","country-code":"158"},{"name":"Tajikistan","alpha2":"TJ","country-code":"762"},{"name":"Tanzania, United Republic of","alpha2":"TZ","country-code":"834"},{"name":"Thailand","alpha2":"TH","country-code":"764"},{"name":"Timor-Leste","alpha2":"TL","country-code":"626"},{"name":"Togo","alpha2":"TG","country-code":"768"},{"name":"Tokelau","alpha2":"TK","country-code":"772"},{"name":"Tonga","alpha2":"TO","country-code":"776"},{"name":"Trinidad and Tobago","alpha2":"TT","country-code":"780"},{"name":"Tunisia","alpha2":"TN","country-code":"788"},{"name":"Turkey","alpha2":"TR","country-code":"792"},{"name":"Turkmenistan","alpha2":"TM","country-code":"795"},{"name":"Turks and Caicos Islands","alpha2":"TC","country-code":"796"},{"name":"Tuvalu","alpha2":"TV","country-code":"798"},{"name":"Uganda","alpha2":"UG","country-code":"800"},{"name":"Ukraine","alpha2":"UA","country-code":"804"},{"name":"United Arab Emirates","alpha2":"AE","country-code":"784"},{"name":"United Kingdom of Great Britain and Northern Ireland","alpha2":"GB","country-code":"826"},{"name":"United States of America","alpha2":"US","country-code":"840"},{"name":"United States Minor Outlying Islands","alpha2":"UM","country-code":"581"},{"name":"Uruguay","alpha2":"UY","country-code":"858"},{"name":"Uzbekistan","alpha2":"UZ","country-code":"860"},{"name":"Vanuatu","alpha2":"VU","country-code":"548"},{"name":"Venezuela (Bolivarian Republic of)","alpha2":"VE","country-code":"862"},{"name":"Viet Nam","alpha2":"VN","country-code":"704"},{"name":"Virgin Islands (British)","alpha2":"VG","country-code":"092"},{"name":"Virgin Islands (U.S.)","alpha2":"VI","country-code":"850"},{"name":"Wallis and Futuna","alpha2":"WF","country-code":"876"},{"name":"Western Sahara","alpha2":"EH","country-code":"732"},{"name":"Yemen","alpha2":"YE","country-code":"887"},{"name":"Zambia","alpha2":"ZM","country-code":"894"},{"name":"Zimbabwe","alpha2":"ZW","country-code":"716"}]');

/***/ })

}]);
//# sourceMappingURL=src_app_brand_brand_module_ts.js.map