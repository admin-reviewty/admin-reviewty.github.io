"use strict";
(self["webpackChunkadmin_angular"] = self["webpackChunkadmin_angular"] || []).push([["src_app_pages_pages_module_ts"],{

/***/ 88346:
/*!**********************************************************************************!*\
  !*** ./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-drawer.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DRAWER_ANIMATE_DURATION": () => (/* binding */ DRAWER_ANIMATE_DURATION),
/* harmony export */   "DrawerBuilderForService": () => (/* binding */ DrawerBuilderForService),
/* harmony export */   "NzDrawerComponent": () => (/* binding */ NzDrawerComponent),
/* harmony export */   "NzDrawerContentDirective": () => (/* binding */ NzDrawerContentDirective),
/* harmony export */   "NzDrawerModule": () => (/* binding */ NzDrawerModule),
/* harmony export */   "NzDrawerRef": () => (/* binding */ NzDrawerRef),
/* harmony export */   "NzDrawerService": () => (/* binding */ NzDrawerService),
/* harmony export */   "NzDrawerServiceModule": () => (/* binding */ NzDrawerServiceModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/a11y */ 51606);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/bidi */ 772);
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/keycodes */ 90084);
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/overlay */ 45129);
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/portal */ 40912);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 79441);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 22663);
/* harmony import */ var ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/core/config */ 11973);
/* harmony import */ var ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/core/util */ 82504);
/* harmony import */ var ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/core/no-animation */ 39054);
/* harmony import */ var ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/core/outlet */ 66306);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/icon */ 35203);


















/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */











const _c0 = ["drawerTemplate"];
function NzDrawerComponent_ng_template_0_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzDrawerComponent_ng_template_0_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r9.maskClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx_r2.nzMaskStyle);
} }
function NzDrawerComponent_ng_template_0_div_5_div_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r13.nzTitle, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function NzDrawerComponent_ng_template_0_div_5_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzDrawerComponent_ng_template_0_div_5_div_1_ng_container_1_Template, 2, 1, "ng-container", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzStringTemplateOutlet", ctx_r11.nzTitle);
} }
function NzDrawerComponent_ng_template_0_div_5_button_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const closeIcon_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzType", closeIcon_r15);
} }
function NzDrawerComponent_ng_template_0_div_5_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzDrawerComponent_ng_template_0_div_5_button_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r16.closeClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzDrawerComponent_ng_template_0_div_5_button_2_ng_container_1_Template, 2, 1, "ng-container", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzStringTemplateOutlet", ctx_r12.nzCloseIcon);
} }
function NzDrawerComponent_ng_template_0_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzDrawerComponent_ng_template_0_div_5_div_1_Template, 2, 1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NzDrawerComponent_ng_template_0_div_5_button_2_Template, 2, 1, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-drawer-header", !!ctx_r3.nzTitle)("ant-drawer-header-no-title", !ctx_r3.nzTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.nzTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.nzClosable);
} }
function NzDrawerComponent_ng_template_0_ng_template_7_Template(rf, ctx) { }
function NzDrawerComponent_ng_template_0_ng_container_8_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
function NzDrawerComponent_ng_template_0_ng_container_8_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzDrawerComponent_ng_template_0_ng_container_8_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r18.nzContent)("ngTemplateOutletContext", ctx_r18.templateContext);
} }
function NzDrawerComponent_ng_template_0_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzDrawerComponent_ng_template_0_ng_container_8_ng_container_1_Template, 2, 2, "ng-container", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.isTemplateRef(ctx_r5.nzContent));
} }
function NzDrawerComponent_ng_template_0_ng_template_9_ng_container_0_ng_template_1_Template(rf, ctx) { }
function NzDrawerComponent_ng_template_0_ng_template_9_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzDrawerComponent_ng_template_0_ng_template_9_ng_container_0_ng_template_1_Template, 0, 0, "ng-template", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r20.contentFromContentChild);
} }
function NzDrawerComponent_ng_template_0_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NzDrawerComponent_ng_template_0_ng_template_9_ng_container_0_Template, 2, 1, "ng-container", 19);
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.contentFromContentChild && (ctx_r7.isOpen || ctx_r7.inAnimation));
} }
function NzDrawerComponent_ng_template_0_div_11_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r22.nzFooter, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function NzDrawerComponent_ng_template_0_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzDrawerComponent_ng_template_0_div_11_ng_container_1_Template, 2, 1, "ng-container", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzStringTemplateOutlet", ctx_r8.nzFooter);
} }
function NzDrawerComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzDrawerComponent_ng_template_0_div_1_Template, 1, 1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NzDrawerComponent_ng_template_0_div_5_Template, 3, 6, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, NzDrawerComponent_ng_template_0_ng_template_7_Template, 0, 0, "ng-template", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, NzDrawerComponent_ng_template_0_ng_container_8_Template, 2, 1, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, NzDrawerComponent_ng_template_0_ng_template_9_Template, 1, 1, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, NzDrawerComponent_ng_template_0_div_11_Template, 2, 1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("transform", ctx_r1.offsetTransform)("transition", ctx_r1.placementChanging ? "none" : null)("z-index", ctx_r1.nzZIndex);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-drawer-rtl", ctx_r1.dir === "rtl")("ant-drawer-open", ctx_r1.isOpen)("no-mask", !ctx_r1.nzMask)("ant-drawer-top", ctx_r1.nzPlacement === "top")("ant-drawer-bottom", ctx_r1.nzPlacement === "bottom")("ant-drawer-right", ctx_r1.nzPlacement === "right")("ant-drawer-left", ctx_r1.nzPlacement === "left");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzNoAnimation", ctx_r1.nzNoAnimation);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.nzMask);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("ant-drawer-content-wrapper ", ctx_r1.nzWrapClassName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx_r1.width)("height", ctx_r1.height)("transform", ctx_r1.transform)("transition", ctx_r1.placementChanging ? "none" : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("height", ctx_r1.isLeftOrRight ? "100%" : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.nzTitle || ctx_r1.nzClosable);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx_r1.nzBodyStyle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.nzContent)("ngIfElse", _r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.nzFooter);
} }
class NzDrawerContentDirective {
    constructor(templateRef) {
        this.templateRef = templateRef;
    }
}
NzDrawerContentDirective.ɵfac = function NzDrawerContentDirective_Factory(t) { return new (t || NzDrawerContentDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef)); };
NzDrawerContentDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: NzDrawerContentDirective, selectors: [["", "nzDrawerContent", ""]], exportAs: ["nzDrawerContent"] });
NzDrawerContentDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef }
];

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzDrawerRef {
}

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
const DRAWER_ANIMATE_DURATION = 300;
const NZ_CONFIG_MODULE_NAME = 'drawer';
class NzDrawerComponent extends NzDrawerRef {
    constructor(cdr, 
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    document, nzConfigService, renderer, overlay, injector, changeDetectorRef, focusTrapFactory, viewContainerRef, overlayKeyboardDispatcher, directionality) {
        super();
        this.cdr = cdr;
        this.document = document;
        this.nzConfigService = nzConfigService;
        this.renderer = renderer;
        this.overlay = overlay;
        this.injector = injector;
        this.changeDetectorRef = changeDetectorRef;
        this.focusTrapFactory = focusTrapFactory;
        this.viewContainerRef = viewContainerRef;
        this.overlayKeyboardDispatcher = overlayKeyboardDispatcher;
        this.directionality = directionality;
        this._nzModuleName = NZ_CONFIG_MODULE_NAME;
        this.nzCloseIcon = 'close';
        this.nzClosable = true;
        this.nzMaskClosable = true;
        this.nzMask = true;
        this.nzCloseOnNavigation = true;
        this.nzNoAnimation = false;
        this.nzKeyboard = true;
        this.nzPlacement = 'right';
        this.nzMaskStyle = {};
        this.nzBodyStyle = {};
        this.nzWidth = 256;
        this.nzHeight = 256;
        this.nzZIndex = 1000;
        this.nzOffsetX = 0;
        this.nzOffsetY = 0;
        this.componentInstance = null;
        this.nzOnViewInit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.nzOnClose = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.nzVisibleChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
        this.placementChanging = false;
        this.placementChangeTimeoutId = -1;
        this.isOpen = false;
        this.inAnimation = false;
        this.templateContext = {
            $implicit: undefined,
            drawerRef: this
        };
        this.nzAfterOpen = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
        this.nzAfterClose = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
        // from service config
        this.nzDirection = undefined;
        this.dir = 'ltr';
    }
    set nzVisible(value) {
        this.isOpen = value;
    }
    get nzVisible() {
        return this.isOpen;
    }
    get offsetTransform() {
        if (!this.isOpen || this.nzOffsetX + this.nzOffsetY === 0) {
            return null;
        }
        switch (this.nzPlacement) {
            case 'left':
                return `translateX(${this.nzOffsetX}px)`;
            case 'right':
                return `translateX(-${this.nzOffsetX}px)`;
            case 'top':
                return `translateY(${this.nzOffsetY}px)`;
            case 'bottom':
                return `translateY(-${this.nzOffsetY}px)`;
        }
    }
    get transform() {
        if (this.isOpen) {
            return null;
        }
        switch (this.nzPlacement) {
            case 'left':
                return `translateX(-100%)`;
            case 'right':
                return `translateX(100%)`;
            case 'top':
                return `translateY(-100%)`;
            case 'bottom':
                return `translateY(100%)`;
        }
    }
    get width() {
        return this.isLeftOrRight ? (0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_2__.toCssPixel)(this.nzWidth) : null;
    }
    get height() {
        return !this.isLeftOrRight ? (0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_2__.toCssPixel)(this.nzHeight) : null;
    }
    get isLeftOrRight() {
        return this.nzPlacement === 'left' || this.nzPlacement === 'right';
    }
    get afterOpen() {
        return this.nzAfterOpen.asObservable();
    }
    get afterClose() {
        return this.nzAfterClose.asObservable();
    }
    isTemplateRef(value) {
        return value instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef;
    }
    ngOnInit() {
        var _a;
        (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.takeUntil)(this.destroy$)).subscribe((direction) => {
            this.dir = direction;
            this.cdr.detectChanges();
        });
        this.dir = this.nzDirection || this.directionality.value;
        this.attachOverlay();
        this.updateOverlayStyle();
        this.updateBodyOverflow();
        this.templateContext = { $implicit: this.nzContentParams, drawerRef: this };
        this.changeDetectorRef.detectChanges();
    }
    ngAfterViewInit() {
        this.attachBodyContent();
        // The `setTimeout` triggers change detection. There's no sense to schedule the DOM timer if anyone is
        // listening to the `nzOnViewInit` event inside the template, for instance `<nz-drawer (nzOnViewInit)="...">`.
        if (this.nzOnViewInit.observers.length) {
            setTimeout(() => {
                this.nzOnViewInit.emit();
            });
        }
    }
    ngOnChanges(changes) {
        const { nzPlacement, nzVisible } = changes;
        if (nzVisible) {
            const value = changes.nzVisible.currentValue;
            if (value) {
                this.open();
            }
            else {
                this.close();
            }
        }
        if (nzPlacement && !nzPlacement.isFirstChange()) {
            this.triggerPlacementChangeCycleOnce();
        }
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
        clearTimeout(this.placementChangeTimeoutId);
        this.disposeOverlay();
    }
    getAnimationDuration() {
        return this.nzNoAnimation ? 0 : DRAWER_ANIMATE_DURATION;
    }
    // Disable the transition animation temporarily when the placement changing
    triggerPlacementChangeCycleOnce() {
        if (!this.nzNoAnimation) {
            this.placementChanging = true;
            this.changeDetectorRef.markForCheck();
            clearTimeout(this.placementChangeTimeoutId);
            this.placementChangeTimeoutId = setTimeout(() => {
                this.placementChanging = false;
                this.changeDetectorRef.markForCheck();
            }, this.getAnimationDuration());
        }
    }
    close(result) {
        this.isOpen = false;
        this.inAnimation = true;
        this.nzVisibleChange.emit(false);
        this.updateOverlayStyle();
        this.overlayKeyboardDispatcher.remove(this.overlayRef);
        this.changeDetectorRef.detectChanges();
        setTimeout(() => {
            this.updateBodyOverflow();
            this.restoreFocus();
            this.inAnimation = false;
            this.nzAfterClose.next(result);
            this.nzAfterClose.complete();
            this.componentInstance = null;
        }, this.getAnimationDuration());
    }
    open() {
        this.attachOverlay();
        this.isOpen = true;
        this.inAnimation = true;
        this.nzVisibleChange.emit(true);
        this.overlayKeyboardDispatcher.add(this.overlayRef);
        this.updateOverlayStyle();
        this.updateBodyOverflow();
        this.savePreviouslyFocusedElement();
        this.trapFocus();
        this.changeDetectorRef.detectChanges();
        setTimeout(() => {
            this.inAnimation = false;
            this.changeDetectorRef.detectChanges();
            this.nzAfterOpen.next();
        }, this.getAnimationDuration());
    }
    getContentComponent() {
        return this.componentInstance;
    }
    closeClick() {
        this.nzOnClose.emit();
    }
    maskClick() {
        if (this.nzMaskClosable && this.nzMask) {
            this.nzOnClose.emit();
        }
    }
    attachBodyContent() {
        this.bodyPortalOutlet.dispose();
        if (this.nzContent instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__.Type) {
            const childInjector = _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector.create({
                parent: this.injector,
                providers: [{ provide: NzDrawerRef, useValue: this }]
            });
            const componentPortal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__.ComponentPortal(this.nzContent, null, childInjector);
            const componentRef = this.bodyPortalOutlet.attachComponentPortal(componentPortal);
            this.componentInstance = componentRef.instance;
            Object.assign(componentRef.instance, this.nzContentParams);
            componentRef.changeDetectorRef.detectChanges();
        }
    }
    attachOverlay() {
        if (!this.overlayRef) {
            this.portal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__.TemplatePortal(this.drawerTemplate, this.viewContainerRef);
            this.overlayRef = this.overlay.create(this.getOverlayConfig());
        }
        if (this.overlayRef && !this.overlayRef.hasAttached()) {
            this.overlayRef.attach(this.portal);
            this.overlayRef.keydownEvents()
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.takeUntil)(this.destroy$))
                .subscribe((event) => {
                if (event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__.ESCAPE && this.isOpen && this.nzKeyboard) {
                    this.nzOnClose.emit();
                }
            });
            this.overlayRef
                .detachments()
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.takeUntil)(this.destroy$))
                .subscribe(() => {
                this.disposeOverlay();
            });
        }
    }
    disposeOverlay() {
        var _a;
        (_a = this.overlayRef) === null || _a === void 0 ? void 0 : _a.dispose();
        this.overlayRef = null;
    }
    getOverlayConfig() {
        return new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__.OverlayConfig({
            disposeOnNavigation: this.nzCloseOnNavigation,
            positionStrategy: this.overlay.position().global(),
            scrollStrategy: this.overlay.scrollStrategies.block()
        });
    }
    updateOverlayStyle() {
        if (this.overlayRef && this.overlayRef.overlayElement) {
            this.renderer.setStyle(this.overlayRef.overlayElement, 'pointer-events', this.isOpen ? 'auto' : 'none');
        }
    }
    updateBodyOverflow() {
        if (this.overlayRef) {
            if (this.isOpen) {
                this.overlayRef.getConfig().scrollStrategy.enable();
            }
            else {
                this.overlayRef.getConfig().scrollStrategy.disable();
            }
        }
    }
    savePreviouslyFocusedElement() {
        if (this.document && !this.previouslyFocusedElement) {
            this.previouslyFocusedElement = this.document.activeElement;
            // We need the extra check, because IE's svg element has no blur method.
            if (this.previouslyFocusedElement && typeof this.previouslyFocusedElement.blur === 'function') {
                this.previouslyFocusedElement.blur();
            }
        }
    }
    trapFocus() {
        if (!this.focusTrap && this.overlayRef && this.overlayRef.overlayElement) {
            this.focusTrap = this.focusTrapFactory.create(this.overlayRef.overlayElement);
            this.focusTrap.focusInitialElement();
        }
    }
    restoreFocus() {
        // We need the extra check, because IE can set the `activeElement` to null in some cases.
        if (this.previouslyFocusedElement && typeof this.previouslyFocusedElement.focus === 'function') {
            this.previouslyFocusedElement.focus();
        }
        if (this.focusTrap) {
            this.focusTrap.destroy();
        }
    }
}
NzDrawerComponent.ɵfac = function NzDrawerComponent_Factory(t) { return new (t || NzDrawerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_7__.DOCUMENT, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_8__.NzConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__.Overlay), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__.FocusTrapFactory), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__.OverlayKeyboardDispatcher), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__.Directionality, 8)); };
NzDrawerComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDrawerComponent, selectors: [["nz-drawer"]], contentQueries: function NzDrawerComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NzDrawerContentDirective, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.contentFromContentChild = _t.first);
    } }, viewQuery: function NzDrawerComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__.CdkPortalOutlet, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.drawerTemplate = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.bodyPortalOutlet = _t.first);
    } }, inputs: { nzCloseIcon: "nzCloseIcon", nzClosable: "nzClosable", nzMaskClosable: "nzMaskClosable", nzMask: "nzMask", nzCloseOnNavigation: "nzCloseOnNavigation", nzNoAnimation: "nzNoAnimation", nzKeyboard: "nzKeyboard", nzPlacement: "nzPlacement", nzMaskStyle: "nzMaskStyle", nzBodyStyle: "nzBodyStyle", nzWidth: "nzWidth", nzHeight: "nzHeight", nzZIndex: "nzZIndex", nzOffsetX: "nzOffsetX", nzOffsetY: "nzOffsetY", nzVisible: "nzVisible", nzContent: "nzContent", nzTitle: "nzTitle", nzFooter: "nzFooter", nzWrapClassName: "nzWrapClassName" }, outputs: { nzOnViewInit: "nzOnViewInit", nzOnClose: "nzOnClose", nzVisibleChange: "nzVisibleChange" }, exportAs: ["nzDrawer"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 2, vars: 0, consts: [["drawerTemplate", ""], [1, "ant-drawer", 3, "nzNoAnimation"], ["class", "ant-drawer-mask", 3, "ngStyle", "click", 4, "ngIf"], [1, "ant-drawer-content"], [1, "ant-drawer-wrapper-body"], [3, "ant-drawer-header", "ant-drawer-header-no-title", 4, "ngIf"], [1, "ant-drawer-body", 3, "ngStyle"], ["cdkPortalOutlet", ""], [4, "ngIf", "ngIfElse"], ["contentElseTemp", ""], ["class", "ant-drawer-footer", 4, "ngIf"], [1, "ant-drawer-mask", 3, "ngStyle", "click"], ["class", "ant-drawer-title", 4, "ngIf"], ["aria-label", "Close", "class", "ant-drawer-close", "style", "--scroll-bar: 0px;", 3, "click", 4, "ngIf"], [1, "ant-drawer-title"], [4, "nzStringTemplateOutlet"], [3, "innerHTML"], ["aria-label", "Close", 1, "ant-drawer-close", 2, "--scroll-bar", "0px", 3, "click"], ["nz-icon", "", 3, "nzType"], [4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "ngTemplateOutlet"], [1, "ant-drawer-footer"]], template: function NzDrawerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NzDrawerComponent_ng_template_0_Template, 12, 40, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } }, directives: [ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_11__.NzNoAnimationDirective, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgStyle, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__.CdkPortalOutlet, ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_12__.NzStringTemplateOutletDirective, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_13__.NzIconDirective, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgTemplateOutlet], encapsulation: 2, changeDetection: 0 });
NzDrawerComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject, args: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.DOCUMENT,] }] },
    { type: ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_8__.NzConfigService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2 },
    { type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__.Overlay },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef },
    { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__.FocusTrapFactory },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef },
    { type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__.OverlayKeyboardDispatcher },
    { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__.Directionality, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional }] }
];
NzDrawerComponent.propDecorators = {
    nzContent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    nzCloseIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    nzClosable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    nzMaskClosable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    nzMask: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    nzCloseOnNavigation: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    nzNoAnimation: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    nzKeyboard: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    nzTitle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    nzFooter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    nzPlacement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    nzMaskStyle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    nzBodyStyle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    nzWrapClassName: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    nzWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    nzHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    nzZIndex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    nzOffsetX: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    nzOffsetY: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    nzVisible: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    nzOnViewInit: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    nzOnClose: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    nzVisibleChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    drawerTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild, args: ['drawerTemplate', { static: true },] }],
    bodyPortalOutlet: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild, args: [_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__.CdkPortalOutlet, { static: false },] }],
    contentFromContentChild: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild, args: [NzDrawerContentDirective, { static: true, read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef },] }]
};
(0,tslib__WEBPACK_IMPORTED_MODULE_14__.__decorate)([
    (0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_2__.InputBoolean)()
], NzDrawerComponent.prototype, "nzClosable", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_14__.__decorate)([
    (0,ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_8__.WithConfig)(),
    (0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_2__.InputBoolean)()
], NzDrawerComponent.prototype, "nzMaskClosable", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_14__.__decorate)([
    (0,ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_8__.WithConfig)(),
    (0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_2__.InputBoolean)()
], NzDrawerComponent.prototype, "nzMask", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_14__.__decorate)([
    (0,ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_8__.WithConfig)(),
    (0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_2__.InputBoolean)()
], NzDrawerComponent.prototype, "nzCloseOnNavigation", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_14__.__decorate)([
    (0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_2__.InputBoolean)()
], NzDrawerComponent.prototype, "nzNoAnimation", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_14__.__decorate)([
    (0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_2__.InputBoolean)()
], NzDrawerComponent.prototype, "nzKeyboard", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_14__.__decorate)([
    (0,ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_8__.WithConfig)()
], NzDrawerComponent.prototype, "nzDirection", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzDrawerContentDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
        args: [{
                selector: '[nzDrawerContent]',
                exportAs: 'nzDrawerContent'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef }]; }, null); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzDrawerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
        args: [{
                selector: 'nz-drawer',
                exportAs: 'nzDrawer',
                template: `
    <ng-template #drawerTemplate>
      <div
        class="ant-drawer"
        [nzNoAnimation]="nzNoAnimation"
        [class.ant-drawer-rtl]="dir === 'rtl'"
        [class.ant-drawer-open]="isOpen"
        [class.no-mask]="!nzMask"
        [class.ant-drawer-top]="nzPlacement === 'top'"
        [class.ant-drawer-bottom]="nzPlacement === 'bottom'"
        [class.ant-drawer-right]="nzPlacement === 'right'"
        [class.ant-drawer-left]="nzPlacement === 'left'"
        [style.transform]="offsetTransform"
        [style.transition]="placementChanging ? 'none' : null"
        [style.zIndex]="nzZIndex"
      >
        <div class="ant-drawer-mask" (click)="maskClick()" *ngIf="nzMask" [ngStyle]="nzMaskStyle"></div>
        <div
          class="ant-drawer-content-wrapper {{ nzWrapClassName }}"
          [style.width]="width"
          [style.height]="height"
          [style.transform]="transform"
          [style.transition]="placementChanging ? 'none' : null"
        >
          <div class="ant-drawer-content">
            <div class="ant-drawer-wrapper-body" [style.height]="isLeftOrRight ? '100%' : null">
              <div
                *ngIf="nzTitle || nzClosable"
                [class.ant-drawer-header]="!!nzTitle"
                [class.ant-drawer-header-no-title]="!nzTitle"
              >
                <div *ngIf="nzTitle" class="ant-drawer-title">
                  <ng-container *nzStringTemplateOutlet="nzTitle">
                    <div [innerHTML]="nzTitle"></div>
                  </ng-container>
                </div>
                <button
                  *ngIf="nzClosable"
                  (click)="closeClick()"
                  aria-label="Close"
                  class="ant-drawer-close"
                  style="--scroll-bar: 0px;"
                >
                  <ng-container *nzStringTemplateOutlet="nzCloseIcon; let closeIcon">
                    <i nz-icon [nzType]="closeIcon"></i>
                  </ng-container>
                </button>
              </div>
              <div class="ant-drawer-body" [ngStyle]="nzBodyStyle">
                <ng-template cdkPortalOutlet></ng-template>
                <ng-container *ngIf="nzContent; else contentElseTemp">
                  <ng-container *ngIf="isTemplateRef(nzContent)">
                    <ng-container *ngTemplateOutlet="$any(nzContent); context: templateContext"></ng-container>
                  </ng-container>
                </ng-container>
                <ng-template #contentElseTemp>
                  <ng-container *ngIf="contentFromContentChild && (isOpen || inAnimation)">
                    <ng-template [ngTemplateOutlet]="contentFromContentChild"></ng-template>
                  </ng-container>
                </ng-template>
              </div>
              <div *ngIf="nzFooter" class="ant-drawer-footer">
                <ng-container *nzStringTemplateOutlet="nzFooter">
                  <div [innerHTML]="nzFooter"></div>
                </ng-container>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ng-template>
  `,
                preserveWhitespaces: false,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.DOCUMENT]
            }] }, { type: ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_8__.NzConfigService }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2 }, { type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__.Overlay }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef }, { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__.FocusTrapFactory }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef }, { type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__.OverlayKeyboardDispatcher }, { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__.Directionality, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }] }]; }, { nzCloseIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], nzClosable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], nzMaskClosable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], nzMask: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], nzCloseOnNavigation: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], nzNoAnimation: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], nzKeyboard: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], nzPlacement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], nzMaskStyle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], nzBodyStyle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], nzWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], nzHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], nzZIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], nzOffsetX: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], nzOffsetY: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], nzOnViewInit: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], nzOnClose: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], nzVisibleChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], nzVisible: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], nzContent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], nzTitle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], nzFooter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], nzWrapClassName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], drawerTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
            args: ['drawerTemplate', { static: true }]
        }], bodyPortalOutlet: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
            args: [_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__.CdkPortalOutlet, { static: false }]
        }], contentFromContentChild: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
            args: [NzDrawerContentDirective, { static: true, read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef }]
        }] }); })();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzDrawerServiceModule {
}
NzDrawerServiceModule.ɵfac = function NzDrawerServiceModule_Factory(t) { return new (t || NzDrawerServiceModule)(); };
NzDrawerServiceModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NzDrawerServiceModule });
NzDrawerServiceModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({});
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzDrawerServiceModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule
    }], null, null); })();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzDrawerModule {
}
NzDrawerModule.ɵfac = function NzDrawerModule_Factory(t) { return new (t || NzDrawerModule)(); };
NzDrawerModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NzDrawerModule });
NzDrawerModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[
            _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__.BidiModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__.OverlayModule,
            _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__.PortalModule,
            ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_13__.NzIconModule,
            ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_12__.NzOutletModule,
            ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_11__.NzNoAnimationModule,
            NzDrawerServiceModule
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzDrawerModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
        args: [{
                imports: [
                    _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__.BidiModule,
                    _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
                    _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__.OverlayModule,
                    _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__.PortalModule,
                    ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_13__.NzIconModule,
                    ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_12__.NzOutletModule,
                    ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_11__.NzNoAnimationModule,
                    NzDrawerServiceModule
                ],
                exports: [NzDrawerComponent, NzDrawerContentDirective],
                declarations: [NzDrawerComponent, NzDrawerContentDirective],
                entryComponents: [NzDrawerComponent]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NzDrawerModule, { declarations: function () { return [NzDrawerComponent, NzDrawerContentDirective]; }, imports: function () { return [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__.BidiModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
        _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__.OverlayModule,
        _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__.PortalModule,
        ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_13__.NzIconModule,
        ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_12__.NzOutletModule,
        ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_11__.NzNoAnimationModule, NzDrawerServiceModule]; }, exports: function () { return [NzDrawerComponent, NzDrawerContentDirective]; } }); })();

class DrawerBuilderForService {
    constructor(overlay, options) {
        this.overlay = overlay;
        this.options = options;
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
        /** pick {@link NzDrawerOptions.nzOnCancel} and omit this option */
        const _a = this.options, { nzOnCancel } = _a, componentOption = (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__rest)(_a, ["nzOnCancel"]);
        this.overlayRef = this.overlay.create();
        this.drawerRef = this.overlayRef.attach(new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__.ComponentPortal(NzDrawerComponent)).instance;
        this.updateOptions(componentOption);
        // Prevent repeatedly open drawer when tap focus element.
        this.drawerRef.savePreviouslyFocusedElement();
        this.drawerRef.nzOnViewInit.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.takeUntil)(this.unsubscribe$)).subscribe(() => {
            this.drawerRef.open();
        });
        this.drawerRef.nzOnClose.subscribe(() => {
            if (nzOnCancel) {
                nzOnCancel().then(canClose => {
                    if (canClose !== false) {
                        this.drawerRef.close();
                    }
                });
            }
            else {
                this.drawerRef.close();
            }
        });
        this.drawerRef.afterClose.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.takeUntil)(this.unsubscribe$)).subscribe(() => {
            this.overlayRef.dispose();
            this.drawerRef = null;
            this.unsubscribe$.next();
            this.unsubscribe$.complete();
        });
    }
    getInstance() {
        return this.drawerRef;
    }
    updateOptions(options) {
        Object.assign(this.drawerRef, options);
    }
}
class NzDrawerService {
    constructor(overlay) {
        this.overlay = overlay;
    }
    create(options) {
        return new DrawerBuilderForService(this.overlay, options).getInstance();
    }
}
NzDrawerService.ɵfac = function NzDrawerService_Factory(t) { return new (t || NzDrawerService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__.Overlay)); };
NzDrawerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ factory: function NzDrawerService_Factory() { return new NzDrawerService(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__.Overlay)); }, token: NzDrawerService, providedIn: NzDrawerServiceModule });
NzDrawerService.ctorParameters = () => [
    { type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__.Overlay }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzDrawerService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
        args: [{ providedIn: NzDrawerServiceModule }]
    }], function () { return [{ type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__.Overlay }]; }, null); })();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */

/**
 * Generated bundle index. Do not edit.
 */





/***/ }),

/***/ 82681:
/*!**********************************************************************************!*\
  !*** ./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-layout.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NzContentComponent": () => (/* binding */ NzContentComponent),
/* harmony export */   "NzFooterComponent": () => (/* binding */ NzFooterComponent),
/* harmony export */   "NzHeaderComponent": () => (/* binding */ NzHeaderComponent),
/* harmony export */   "NzLayoutComponent": () => (/* binding */ NzLayoutComponent),
/* harmony export */   "NzLayoutModule": () => (/* binding */ NzLayoutModule),
/* harmony export */   "NzSiderComponent": () => (/* binding */ NzSiderComponent),
/* harmony export */   "ɵNzSiderTriggerComponent": () => (/* binding */ NzSiderTriggerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/bidi */ 772);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 79441);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 22663);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/platform */ 36145);
/* harmony import */ var ng_zorro_antd_core_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/core/services */ 65042);
/* harmony import */ var ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/core/util */ 82504);
/* harmony import */ var ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/menu */ 3026);
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/layout */ 66883);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/icon */ 35203);













/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */







const _c0 = ["*"];
function NzSiderComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzSiderComponent_div_2_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.setCollapsed(!ctx_r1.nzCollapsed); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matchBreakPoint", ctx_r0.matchBreakPoint)("nzCollapsedWidth", ctx_r0.nzCollapsedWidth)("nzCollapsed", ctx_r0.nzCollapsed)("nzBreakpoint", ctx_r0.nzBreakpoint)("nzReverseArrow", ctx_r0.nzReverseArrow)("nzTrigger", ctx_r0.nzTrigger)("nzZeroTrigger", ctx_r0.nzZeroTrigger)("siderWidth", ctx_r0.widthSetting);
} }
const _c1 = ["nz-sider-trigger", ""];
function NzSiderTriggerComponent_ng_container_0_ng_template_1_Template(rf, ctx) { }
function NzSiderTriggerComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzSiderTriggerComponent_ng_container_0_ng_template_1_Template, 0, 0, "ng-template", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.nzZeroTrigger || _r4);
} }
function NzSiderTriggerComponent_ng_container_1_ng_template_1_Template(rf, ctx) { }
function NzSiderTriggerComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzSiderTriggerComponent_ng_container_1_ng_template_1_Template, 0, 0, "ng-template", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.nzTrigger || _r2);
} }
function NzSiderTriggerComponent_ng_template_2_i_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 5);
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzType", ctx_r8.nzCollapsed ? "right" : "left");
} }
function NzSiderTriggerComponent_ng_template_2_i_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 5);
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzType", ctx_r9.nzCollapsed ? "left" : "right");
} }
function NzSiderTriggerComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NzSiderTriggerComponent_ng_template_2_i_0_Template, 1, 1, "i", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzSiderTriggerComponent_ng_template_2_i_1_Template, 1, 1, "i", 4);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r3.nzReverseArrow);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.nzReverseArrow);
} }
function NzSiderTriggerComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 6);
} }
class NzContentComponent {
    constructor(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.renderer.addClass(this.elementRef.nativeElement, 'ant-layout-content');
    }
}
NzContentComponent.ɵfac = function NzContentComponent_Factory(t) { return new (t || NzContentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2)); };
NzContentComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzContentComponent, selectors: [["nz-content"]], exportAs: ["nzContent"], ngContentSelectors: _c0, decls: 1, vars: 0, template: function NzContentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
    } }, encapsulation: 2, changeDetection: 0 });
NzContentComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2 }
];

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzFooterComponent {
    constructor(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.renderer.addClass(this.elementRef.nativeElement, 'ant-layout-footer');
    }
}
NzFooterComponent.ɵfac = function NzFooterComponent_Factory(t) { return new (t || NzFooterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2)); };
NzFooterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzFooterComponent, selectors: [["nz-footer"]], exportAs: ["nzFooter"], ngContentSelectors: _c0, decls: 1, vars: 0, template: function NzFooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
    } }, encapsulation: 2, changeDetection: 0 });
NzFooterComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2 }
];

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzHeaderComponent {
    constructor(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.renderer.addClass(this.elementRef.nativeElement, 'ant-layout-header');
    }
}
NzHeaderComponent.ɵfac = function NzHeaderComponent_Factory(t) { return new (t || NzHeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2)); };
NzHeaderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzHeaderComponent, selectors: [["nz-header"]], exportAs: ["nzHeader"], ngContentSelectors: _c0, decls: 1, vars: 0, template: function NzHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
    } }, encapsulation: 2, changeDetection: 0 });
NzHeaderComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2 }
];

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzSiderComponent {
    constructor(platform, cdr, breakpointService, elementRef) {
        this.platform = platform;
        this.cdr = cdr;
        this.breakpointService = breakpointService;
        this.elementRef = elementRef;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
        this.nzMenuDirective = null;
        this.nzCollapsedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.nzWidth = 200;
        this.nzTheme = 'dark';
        this.nzCollapsedWidth = 80;
        this.nzBreakpoint = null;
        this.nzZeroTrigger = null;
        this.nzTrigger = undefined;
        this.nzReverseArrow = false;
        this.nzCollapsible = false;
        this.nzCollapsed = false;
        this.matchBreakPoint = false;
        this.flexSetting = null;
        this.widthSetting = null;
        // TODO: move to host after View Engine deprecation
        this.elementRef.nativeElement.classList.add('ant-layout-sider');
    }
    updateStyleMap() {
        this.widthSetting = this.nzCollapsed ? `${this.nzCollapsedWidth}px` : (0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_2__.toCssPixel)(this.nzWidth);
        this.flexSetting = `0 0 ${this.widthSetting}`;
        this.cdr.markForCheck();
    }
    updateMenuInlineCollapsed() {
        if (this.nzMenuDirective && this.nzMenuDirective.nzMode === 'inline' && this.nzCollapsedWidth !== 0) {
            this.nzMenuDirective.setInlineCollapsed(this.nzCollapsed);
        }
    }
    setCollapsed(collapsed) {
        if (collapsed !== this.nzCollapsed) {
            this.nzCollapsed = collapsed;
            this.nzCollapsedChange.emit(collapsed);
            this.updateMenuInlineCollapsed();
            this.updateStyleMap();
            this.cdr.markForCheck();
        }
    }
    ngOnInit() {
        this.updateStyleMap();
        if (this.platform.isBrowser) {
            this.breakpointService
                .subscribe(ng_zorro_antd_core_services__WEBPACK_IMPORTED_MODULE_3__.siderResponsiveMap, true)
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this.destroy$))
                .subscribe(map => {
                const breakpoint = this.nzBreakpoint;
                if (breakpoint) {
                    (0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_2__.inNextTick)().subscribe(() => {
                        this.matchBreakPoint = !map[breakpoint];
                        this.setCollapsed(this.matchBreakPoint);
                        this.cdr.markForCheck();
                    });
                }
            });
        }
    }
    ngOnChanges(changes) {
        const { nzCollapsed, nzCollapsedWidth, nzWidth } = changes;
        if (nzCollapsed || nzCollapsedWidth || nzWidth) {
            this.updateStyleMap();
        }
        if (nzCollapsed) {
            this.updateMenuInlineCollapsed();
        }
    }
    ngAfterContentInit() {
        this.updateMenuInlineCollapsed();
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
NzSiderComponent.ɵfac = function NzSiderComponent_Factory(t) { return new (t || NzSiderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_5__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_core_services__WEBPACK_IMPORTED_MODULE_3__.NzBreakpointService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef)); };
NzSiderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzSiderComponent, selectors: [["nz-sider"]], contentQueries: function NzSiderComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_6__.NzMenuDirective, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.nzMenuDirective = _t.first);
    } }, hostVars: 16, hostBindings: function NzSiderComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("flex", ctx.flexSetting)("max-width", ctx.widthSetting)("min-width", ctx.widthSetting)("width", ctx.widthSetting);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-layout-sider-zero-width", ctx.nzCollapsed && ctx.nzCollapsedWidth === 0)("ant-layout-sider-light", ctx.nzTheme === "light")("ant-layout-sider-dark", ctx.nzTheme === "dark")("ant-layout-sider-collapsed", ctx.nzCollapsed);
    } }, inputs: { nzWidth: "nzWidth", nzTheme: "nzTheme", nzCollapsedWidth: "nzCollapsedWidth", nzBreakpoint: "nzBreakpoint", nzZeroTrigger: "nzZeroTrigger", nzTrigger: "nzTrigger", nzReverseArrow: "nzReverseArrow", nzCollapsible: "nzCollapsible", nzCollapsed: "nzCollapsed" }, outputs: { nzCollapsedChange: "nzCollapsedChange" }, exportAs: ["nzSider"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], ngContentSelectors: _c0, decls: 3, vars: 1, consts: [[1, "ant-layout-sider-children"], ["nz-sider-trigger", "", 3, "matchBreakPoint", "nzCollapsedWidth", "nzCollapsed", "nzBreakpoint", "nzReverseArrow", "nzTrigger", "nzZeroTrigger", "siderWidth", "click", 4, "ngIf"], ["nz-sider-trigger", "", 3, "matchBreakPoint", "nzCollapsedWidth", "nzCollapsed", "nzBreakpoint", "nzReverseArrow", "nzTrigger", "nzZeroTrigger", "siderWidth", "click"]], template: function NzSiderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NzSiderComponent_div_2_Template, 1, 8, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.nzCollapsible && ctx.nzTrigger !== null);
    } }, directives: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, NzSiderTriggerComponent]; }, encapsulation: 2, changeDetection: 0 });
NzSiderComponent.ctorParameters = () => [
    { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_5__.Platform },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef },
    { type: ng_zorro_antd_core_services__WEBPACK_IMPORTED_MODULE_3__.NzBreakpointService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }
];
NzSiderComponent.propDecorators = {
    nzMenuDirective: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild, args: [ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_6__.NzMenuDirective,] }],
    nzCollapsedChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    nzWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    nzTheme: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    nzCollapsedWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    nzBreakpoint: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    nzZeroTrigger: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    nzTrigger: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    nzReverseArrow: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    nzCollapsible: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    nzCollapsed: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }]
};
(0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_2__.InputBoolean)()
], NzSiderComponent.prototype, "nzReverseArrow", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_2__.InputBoolean)()
], NzSiderComponent.prototype, "nzCollapsible", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_2__.InputBoolean)()
], NzSiderComponent.prototype, "nzCollapsed", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzContentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
        args: [{
                selector: 'nz-content',
                exportAs: 'nzContent',
                preserveWhitespaces: false,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
                template: ` <ng-content></ng-content> `
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2 }]; }, null); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzFooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
        args: [{
                selector: 'nz-footer',
                exportAs: 'nzFooter',
                preserveWhitespaces: false,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
                template: ` <ng-content></ng-content> `
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2 }]; }, null); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzHeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
        args: [{
                selector: 'nz-header',
                exportAs: 'nzHeader',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
                preserveWhitespaces: false,
                template: ` <ng-content></ng-content> `
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2 }]; }, null); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzSiderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
        args: [{
                selector: 'nz-sider',
                exportAs: 'nzSider',
                preserveWhitespaces: false,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
                template: `
    <div class="ant-layout-sider-children">
      <ng-content></ng-content>
    </div>
    <div
      *ngIf="nzCollapsible && nzTrigger !== null"
      nz-sider-trigger
      [matchBreakPoint]="matchBreakPoint"
      [nzCollapsedWidth]="nzCollapsedWidth"
      [nzCollapsed]="nzCollapsed"
      [nzBreakpoint]="nzBreakpoint"
      [nzReverseArrow]="nzReverseArrow"
      [nzTrigger]="nzTrigger"
      [nzZeroTrigger]="nzZeroTrigger"
      [siderWidth]="widthSetting"
      (click)="setCollapsed(!nzCollapsed)"
    ></div>
  `,
                host: {
                    '[class.ant-layout-sider-zero-width]': `nzCollapsed && nzCollapsedWidth === 0`,
                    '[class.ant-layout-sider-light]': `nzTheme === 'light'`,
                    '[class.ant-layout-sider-dark]': `nzTheme === 'dark'`,
                    '[class.ant-layout-sider-collapsed]': `nzCollapsed`,
                    '[style.flex]': 'flexSetting',
                    '[style.maxWidth]': 'widthSetting',
                    '[style.minWidth]': 'widthSetting',
                    '[style.width]': 'widthSetting'
                }
            }]
    }], function () { return [{ type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_5__.Platform }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef }, { type: ng_zorro_antd_core_services__WEBPACK_IMPORTED_MODULE_3__.NzBreakpointService }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }]; }, { nzMenuDirective: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
            args: [ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_6__.NzMenuDirective]
        }], nzCollapsedChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], nzWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], nzTheme: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], nzCollapsedWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], nzBreakpoint: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], nzZeroTrigger: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], nzTrigger: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], nzReverseArrow: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], nzCollapsible: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], nzCollapsed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }] }); })();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzLayoutComponent {
    constructor(elementRef, directionality) {
        this.elementRef = elementRef;
        this.directionality = directionality;
        this.dir = 'ltr';
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
        // TODO: move to host after View Engine deprecation
        this.elementRef.nativeElement.classList.add('ant-layout');
    }
    ngOnInit() {
        var _a;
        this.dir = this.directionality.value;
        (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this.destroy$)).subscribe((direction) => {
            this.dir = direction;
        });
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
NzLayoutComponent.ɵfac = function NzLayoutComponent_Factory(t) { return new (t || NzLayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_9__.Directionality, 8)); };
NzLayoutComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzLayoutComponent, selectors: [["nz-layout"]], contentQueries: function NzLayoutComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NzSiderComponent, 4);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.listOfNzSiderComponent = _t);
    } }, hostVars: 4, hostBindings: function NzLayoutComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-layout-rtl", ctx.dir === "rtl")("ant-layout-has-sider", ctx.listOfNzSiderComponent.length > 0);
    } }, exportAs: ["nzLayout"], ngContentSelectors: _c0, decls: 1, vars: 0, template: function NzLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
    } }, encapsulation: 2, changeDetection: 0 });
NzLayoutComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef },
    { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_9__.Directionality, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional }] }
];
NzLayoutComponent.propDecorators = {
    listOfNzSiderComponent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren, args: [NzSiderComponent,] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzLayoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
        args: [{
                selector: 'nz-layout',
                exportAs: 'nzLayout',
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
                preserveWhitespaces: false,
                template: ` <ng-content></ng-content> `,
                host: {
                    '[class.ant-layout-rtl]': `dir === 'rtl'`,
                    '[class.ant-layout-has-sider]': 'listOfNzSiderComponent.length > 0'
                }
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }, { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_9__.Directionality, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }] }]; }, { listOfNzSiderComponent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
            args: [NzSiderComponent]
        }] }); })();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzSiderTriggerComponent {
    constructor() {
        this.nzCollapsed = false;
        this.nzReverseArrow = false;
        this.nzZeroTrigger = null;
        this.nzTrigger = undefined;
        this.matchBreakPoint = false;
        this.nzCollapsedWidth = null;
        this.siderWidth = null;
        this.nzBreakpoint = null;
        this.isZeroTrigger = false;
        this.isNormalTrigger = false;
    }
    updateTriggerType() {
        this.isZeroTrigger =
            this.nzCollapsedWidth === 0 && ((this.nzBreakpoint && this.matchBreakPoint) || !this.nzBreakpoint);
        this.isNormalTrigger = this.nzCollapsedWidth !== 0;
    }
    ngOnInit() {
        this.updateTriggerType();
    }
    ngOnChanges() {
        this.updateTriggerType();
    }
}
NzSiderTriggerComponent.ɵfac = function NzSiderTriggerComponent_Factory(t) { return new (t || NzSiderTriggerComponent)(); };
NzSiderTriggerComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzSiderTriggerComponent, selectors: [["", "nz-sider-trigger", ""]], hostVars: 10, hostBindings: function NzSiderTriggerComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx.isNormalTrigger ? ctx.siderWidth : null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-layout-sider-trigger", ctx.isNormalTrigger)("ant-layout-sider-zero-width-trigger", ctx.isZeroTrigger)("ant-layout-sider-zero-width-trigger-right", ctx.isZeroTrigger && ctx.nzReverseArrow)("ant-layout-sider-zero-width-trigger-left", ctx.isZeroTrigger && !ctx.nzReverseArrow);
    } }, inputs: { nzCollapsed: "nzCollapsed", nzReverseArrow: "nzReverseArrow", nzZeroTrigger: "nzZeroTrigger", nzTrigger: "nzTrigger", matchBreakPoint: "matchBreakPoint", nzCollapsedWidth: "nzCollapsedWidth", siderWidth: "siderWidth", nzBreakpoint: "nzBreakpoint" }, exportAs: ["nzSiderTrigger"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], attrs: _c1, decls: 6, vars: 2, consts: [[4, "ngIf"], ["defaultTrigger", ""], ["defaultZeroTrigger", ""], [3, "ngTemplateOutlet"], ["nz-icon", "", 3, "nzType", 4, "ngIf"], ["nz-icon", "", 3, "nzType"], ["nz-icon", "", "nzType", "bars"]], template: function NzSiderTriggerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NzSiderTriggerComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzSiderTriggerComponent_ng_container_1_Template, 2, 1, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NzSiderTriggerComponent_ng_template_2_Template, 2, 2, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NzSiderTriggerComponent_ng_template_4_Template, 1, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isZeroTrigger);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isNormalTrigger);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgTemplateOutlet, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_10__.NzIconDirective], encapsulation: 2, changeDetection: 0 });
NzSiderTriggerComponent.propDecorators = {
    nzCollapsed: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    nzReverseArrow: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    nzZeroTrigger: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    nzTrigger: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    matchBreakPoint: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    nzCollapsedWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    siderWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    nzBreakpoint: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzSiderTriggerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
        args: [{
                selector: '[nz-sider-trigger]',
                exportAs: 'nzSiderTrigger',
                preserveWhitespaces: false,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
                template: `
    <ng-container *ngIf="isZeroTrigger">
      <ng-template [ngTemplateOutlet]="nzZeroTrigger || defaultZeroTrigger"></ng-template>
    </ng-container>
    <ng-container *ngIf="isNormalTrigger">
      <ng-template [ngTemplateOutlet]="nzTrigger || defaultTrigger"></ng-template>
    </ng-container>
    <ng-template #defaultTrigger>
      <i nz-icon [nzType]="nzCollapsed ? 'right' : 'left'" *ngIf="!nzReverseArrow"></i>
      <i nz-icon [nzType]="nzCollapsed ? 'left' : 'right'" *ngIf="nzReverseArrow"></i>
    </ng-template>
    <ng-template #defaultZeroTrigger>
      <i nz-icon nzType="bars"></i>
    </ng-template>
  `,
                host: {
                    '[class.ant-layout-sider-trigger]': 'isNormalTrigger',
                    '[style.width]': 'isNormalTrigger ? siderWidth : null',
                    '[class.ant-layout-sider-zero-width-trigger]': 'isZeroTrigger',
                    '[class.ant-layout-sider-zero-width-trigger-right]': 'isZeroTrigger && nzReverseArrow',
                    '[class.ant-layout-sider-zero-width-trigger-left]': 'isZeroTrigger && !nzReverseArrow'
                }
            }]
    }], function () { return []; }, { nzCollapsed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], nzReverseArrow: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], nzZeroTrigger: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], nzTrigger: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], matchBreakPoint: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], nzCollapsedWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], siderWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], nzBreakpoint: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }] }); })();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzLayoutModule {
}
NzLayoutModule.ɵfac = function NzLayoutModule_Factory(t) { return new (t || NzLayoutModule)(); };
NzLayoutModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NzLayoutModule });
NzLayoutModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_9__.BidiModule, _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_10__.NzIconModule, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_11__.LayoutModule, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_5__.PlatformModule]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzLayoutModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
        args: [{
                declarations: [
                    NzLayoutComponent,
                    NzHeaderComponent,
                    NzContentComponent,
                    NzFooterComponent,
                    NzSiderComponent,
                    NzSiderTriggerComponent
                ],
                exports: [NzLayoutComponent, NzHeaderComponent, NzContentComponent, NzFooterComponent, NzSiderComponent],
                imports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_9__.BidiModule, _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_10__.NzIconModule, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_11__.LayoutModule, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_5__.PlatformModule]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NzLayoutModule, { declarations: function () { return [NzLayoutComponent, NzHeaderComponent, NzContentComponent, NzFooterComponent, NzSiderComponent, NzSiderTriggerComponent]; }, imports: function () { return [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_9__.BidiModule, _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_10__.NzIconModule, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_11__.LayoutModule, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_5__.PlatformModule]; }, exports: function () { return [NzLayoutComponent, NzHeaderComponent, NzContentComponent, NzFooterComponent, NzSiderComponent]; } }); })();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */

/**
 * Generated bundle index. Do not edit.
 */





/***/ }),

/***/ 3026:
/*!********************************************************************************!*\
  !*** ./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-menu.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuDropDownTokenFactory": () => (/* binding */ MenuDropDownTokenFactory),
/* harmony export */   "MenuGroupFactory": () => (/* binding */ MenuGroupFactory),
/* harmony export */   "MenuService": () => (/* binding */ MenuService),
/* harmony export */   "MenuServiceFactory": () => (/* binding */ MenuServiceFactory),
/* harmony export */   "NzIsMenuInsideDropDownToken": () => (/* binding */ NzIsMenuInsideDropDownToken),
/* harmony export */   "NzMenuDirective": () => (/* binding */ NzMenuDirective),
/* harmony export */   "NzMenuDividerDirective": () => (/* binding */ NzMenuDividerDirective),
/* harmony export */   "NzMenuGroupComponent": () => (/* binding */ NzMenuGroupComponent),
/* harmony export */   "NzMenuItemDirective": () => (/* binding */ NzMenuItemDirective),
/* harmony export */   "NzMenuModule": () => (/* binding */ NzMenuModule),
/* harmony export */   "NzMenuServiceLocalToken": () => (/* binding */ NzMenuServiceLocalToken),
/* harmony export */   "NzSubMenuComponent": () => (/* binding */ NzSubMenuComponent),
/* harmony export */   "NzSubMenuTitleComponent": () => (/* binding */ NzSubMenuTitleComponent),
/* harmony export */   "NzSubmenuInlineChildComponent": () => (/* binding */ NzSubmenuInlineChildComponent),
/* harmony export */   "NzSubmenuNoneInlineChildComponent": () => (/* binding */ NzSubmenuNoneInlineChildComponent),
/* harmony export */   "NzSubmenuService": () => (/* binding */ NzSubmenuService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/cdk/bidi */ 772);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 79441);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 76491);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 89919);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 61486);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 33927);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 85816);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 9170);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 67202);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 7494);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 83720);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 22663);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs/operators */ 1143);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs/operators */ 79902);
/* harmony import */ var ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/core/util */ 82504);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/cdk/overlay */ 45129);
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/cdk/platform */ 36145);
/* harmony import */ var ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng-zorro-antd/core/no-animation */ 39054);
/* harmony import */ var ng_zorro_antd_core_overlay__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/core/overlay */ 78478);
/* harmony import */ var ng_zorro_antd_core_animation__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ng-zorro-antd/core/animation */ 40143);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ng-zorro-antd/core/outlet */ 66306);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ng-zorro-antd/icon */ 35203);
















/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */










const _c0 = ["nz-submenu", ""];
function NzSubMenuComponent_ng_content_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0, 0, ["*ngIf", "!nzTitle"]);
} }
function NzSubMenuComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 6);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mode", ctx_r2.mode)("nzOpen", ctx_r2.nzOpen)("@.disabled", ctx_r2.noAnimation == null ? null : ctx_r2.noAnimation.nzNoAnimation)("nzNoAnimation", ctx_r2.noAnimation == null ? null : ctx_r2.noAnimation.nzNoAnimation)("menuClass", ctx_r2.nzMenuClassName)("templateOutlet", _r5);
} }
function NzSubMenuComponent_ng_template_4_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("subMenuMouseState", function NzSubMenuComponent_ng_template_4_ng_template_0_Template_div_subMenuMouseState_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r8.setMouseEnterState($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("theme", ctx_r7.theme)("mode", ctx_r7.mode)("nzOpen", ctx_r7.nzOpen)("position", ctx_r7.position)("nzDisabled", ctx_r7.nzDisabled)("isMenuInsideDropDown", ctx_r7.isMenuInsideDropDown)("templateOutlet", _r5)("menuClass", ctx_r7.nzMenuClassName)("@.disabled", ctx_r7.noAnimation == null ? null : ctx_r7.noAnimation.nzNoAnimation)("nzNoAnimation", ctx_r7.noAnimation == null ? null : ctx_r7.noAnimation.nzNoAnimation);
} }
function NzSubMenuComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NzSubMenuComponent_ng_template_4_ng_template_0_Template, 1, 10, "ng-template", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("positionChange", function NzSubMenuComponent_ng_template_4_Template_ng_template_positionChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.onPositionChange($event); });
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkConnectedOverlayPositions", ctx_r4.overlayPositions)("cdkConnectedOverlayOrigin", _r0)("cdkConnectedOverlayWidth", ctx_r4.triggerWidth)("cdkConnectedOverlayOpen", ctx_r4.nzOpen)("cdkConnectedOverlayTransformOriginOn", ".ant-menu-submenu");
} }
function NzSubMenuComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0, 1);
} }
const _c1 = [[["", "title", ""]], "*"];
const _c2 = ["[title]", "*"];
const _c3 = ["titleElement"];
const _c4 = ["nz-menu-group", ""];
function NzMenuGroupComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.nzTitle);
} }
function NzMenuGroupComponent_ng_content_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0, 1, ["*ngIf", "!nzTitle"]);
} }
const _c5 = ["*", [["", "title", ""]]];
const _c6 = ["*", "[title]"];
const _c7 = ["nz-submenu-title", ""];
function NzSubMenuTitleComponent_i_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 4);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzType", ctx_r0.nzIcon);
} }
function NzSubMenuTitleComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.nzTitle);
} }
function NzSubMenuTitleComponent_span_3_i_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 8);
} }
function NzSubMenuTitleComponent_span_3_i_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 9);
} }
function NzSubMenuTitleComponent_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzSubMenuTitleComponent_span_3_i_1_Template, 1, 0, "i", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NzSubMenuTitleComponent_span_3_i_2_Template, 1, 0, "i", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx_r2.dir);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "rtl");
} }
function NzSubMenuTitleComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 10);
} }
const _c8 = ["*"];
const _c9 = ["nz-submenu-inline-child", ""];
function NzSubmenuInlineChildComponent_ng_template_0_Template(rf, ctx) { }
const _c10 = ["nz-submenu-none-inline-child", ""];
function NzSubmenuNoneInlineChildComponent_ng_template_1_Template(rf, ctx) { }
class MenuService {
    constructor() {
        /** all descendant menu click **/
        this.descendantMenuItemClick$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
        /** child menu item click **/
        this.childMenuItemClick$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
        this.theme$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject('light');
        this.mode$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject('vertical');
        this.inlineIndent$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(24);
        this.isChildSubMenuOpen$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(false);
    }
    onDescendantMenuItemClick(menu) {
        this.descendantMenuItemClick$.next(menu);
    }
    onChildMenuItemClick(menu) {
        this.childMenuItemClick$.next(menu);
    }
    setMode(mode) {
        this.mode$.next(mode);
    }
    setTheme(theme) {
        this.theme$.next(theme);
    }
    setInlineIndent(indent) {
        this.inlineIndent$.next(indent);
    }
}
MenuService.ɵfac = function MenuService_Factory(t) { return new (t || MenuService)(); };
MenuService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MenuService, factory: MenuService.ɵfac });

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
const NzIsMenuInsideDropDownToken = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('NzIsInDropDownMenuToken');
const NzMenuServiceLocalToken = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('NzMenuServiceLocalToken');

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzSubmenuService {
    constructor(nzHostSubmenuService, nzMenuService, isMenuInsideDropDown) {
        this.nzHostSubmenuService = nzHostSubmenuService;
        this.nzMenuService = nzMenuService;
        this.isMenuInsideDropDown = isMenuInsideDropDown;
        this.mode$ = this.nzMenuService.mode$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(mode => {
            if (mode === 'inline') {
                return 'inline';
                /** if inside another submenu, set the mode to vertical **/
            }
            else if (mode === 'vertical' || this.nzHostSubmenuService) {
                return 'vertical';
            }
            else {
                return 'horizontal';
            }
        }));
        this.level = 1;
        this.isCurrentSubMenuOpen$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(false);
        this.isChildSubMenuOpen$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(false);
        /** submenu title & overlay mouse enter status **/
        this.isMouseEnterTitleOrOverlay$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
        this.childMenuItemClick$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
        if (this.nzHostSubmenuService) {
            this.level = this.nzHostSubmenuService.level + 1;
        }
        /** close if menu item clicked **/
        const isClosedByMenuItemClick = this.childMenuItemClick$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.mergeMap)(() => this.mode$), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.filter)(mode => mode !== 'inline' || this.isMenuInsideDropDown), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.mapTo)(false));
        const isCurrentSubmenuOpen$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.merge)(this.isMouseEnterTitleOrOverlay$, isClosedByMenuItemClick);
        /** combine the child submenu status with current submenu status to calculate host submenu open **/
        const isSubMenuOpenWithDebounce$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.combineLatest)([this.isChildSubMenuOpen$, isCurrentSubmenuOpen$]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(([isChildSubMenuOpen, isCurrentSubmenuOpen]) => isChildSubMenuOpen || isCurrentSubmenuOpen), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.auditTime)(150), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.distinctUntilChanged)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.takeUntil)(this.destroy$));
        isSubMenuOpenWithDebounce$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.distinctUntilChanged)()).subscribe(data => {
            this.setOpenStateWithoutDebounce(data);
            if (this.nzHostSubmenuService) {
                /** set parent submenu's child submenu open status **/
                this.nzHostSubmenuService.isChildSubMenuOpen$.next(data);
            }
            else {
                this.nzMenuService.isChildSubMenuOpen$.next(data);
            }
        });
    }
    /**
     * menu item inside submenu clicked
     *
     * @param menu
     */
    onChildMenuItemClick(menu) {
        this.childMenuItemClick$.next(menu);
    }
    setOpenStateWithoutDebounce(value) {
        this.isCurrentSubMenuOpen$.next(value);
    }
    setMouseEnterTitleOrOverlayState(value) {
        this.isMouseEnterTitleOrOverlay$.next(value);
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
NzSubmenuService.ɵfac = function NzSubmenuService_Factory(t) { return new (t || NzSubmenuService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](NzSubmenuService, 12), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](MenuService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](NzIsMenuInsideDropDownToken)); };
NzSubmenuService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NzSubmenuService, factory: NzSubmenuService.ɵfac });
NzSubmenuService.ctorParameters = () => [
    { type: NzSubmenuService, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.SkipSelf }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional }] },
    { type: MenuService },
    { type: Boolean, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject, args: [NzIsMenuInsideDropDownToken,] }] }
];

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzMenuItemDirective {
    constructor(nzMenuService, cdr, nzSubmenuService, isMenuInsideDropDown, directionality, routerLink, routerLinkWithHref, router) {
        this.nzMenuService = nzMenuService;
        this.cdr = cdr;
        this.nzSubmenuService = nzSubmenuService;
        this.isMenuInsideDropDown = isMenuInsideDropDown;
        this.directionality = directionality;
        this.routerLink = routerLink;
        this.routerLinkWithHref = routerLinkWithHref;
        this.router = router;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
        this.level = this.nzSubmenuService ? this.nzSubmenuService.level + 1 : 1;
        this.selected$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
        this.inlinePaddingLeft = null;
        this.dir = 'ltr';
        this.nzDisabled = false;
        this.nzSelected = false;
        this.nzDanger = false;
        this.nzMatchRouterExact = false;
        this.nzMatchRouter = false;
        if (router) {
            this.router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.takeUntil)(this.destroy$), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.filter)(e => e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_12__.NavigationEnd)).subscribe(() => {
                this.updateRouterActive();
            });
        }
    }
    /** clear all item selected status except this */
    clickMenuItem(e) {
        if (this.nzDisabled) {
            e.preventDefault();
            e.stopPropagation();
        }
        else {
            this.nzMenuService.onDescendantMenuItemClick(this);
            if (this.nzSubmenuService) {
                /** menu item inside the submenu **/
                this.nzSubmenuService.onChildMenuItemClick(this);
            }
            else {
                /** menu item inside the root menu **/
                this.nzMenuService.onChildMenuItemClick(this);
            }
        }
    }
    setSelectedState(value) {
        this.nzSelected = value;
        this.selected$.next(value);
    }
    updateRouterActive() {
        if (!this.listOfRouterLink ||
            !this.listOfRouterLinkWithHref ||
            !this.router ||
            !this.router.navigated ||
            !this.nzMatchRouter) {
            return;
        }
        Promise.resolve().then(() => {
            const hasActiveLinks = this.hasActiveLinks();
            if (this.nzSelected !== hasActiveLinks) {
                this.nzSelected = hasActiveLinks;
                this.setSelectedState(this.nzSelected);
                this.cdr.markForCheck();
            }
        });
    }
    hasActiveLinks() {
        const isActiveCheckFn = this.isLinkActive(this.router);
        return ((this.routerLink && isActiveCheckFn(this.routerLink)) ||
            (this.routerLinkWithHref && isActiveCheckFn(this.routerLinkWithHref)) ||
            this.listOfRouterLink.some(isActiveCheckFn) ||
            this.listOfRouterLinkWithHref.some(isActiveCheckFn));
    }
    isLinkActive(router) {
        return (link) => router.isActive(link.urlTree, this.nzMatchRouterExact);
    }
    ngOnInit() {
        var _a;
        /** store origin padding in padding */
        (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.combineLatest)([this.nzMenuService.mode$, this.nzMenuService.inlineIndent$])
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.takeUntil)(this.destroy$))
            .subscribe(([mode, inlineIndent]) => {
            this.inlinePaddingLeft = mode === 'inline' ? this.level * inlineIndent : null;
        });
        this.dir = this.directionality.value;
        (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.takeUntil)(this.destroy$)).subscribe((direction) => {
            this.dir = direction;
        });
    }
    ngAfterContentInit() {
        this.listOfRouterLink.changes.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.takeUntil)(this.destroy$)).subscribe(() => this.updateRouterActive());
        this.listOfRouterLinkWithHref.changes.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.takeUntil)(this.destroy$)).subscribe(() => this.updateRouterActive());
        this.updateRouterActive();
    }
    ngOnChanges(changes) {
        if (changes.nzSelected) {
            this.setSelectedState(this.nzSelected);
        }
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
NzMenuItemDirective.ɵfac = function NzMenuItemDirective_Factory(t) { return new (t || NzMenuItemDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MenuService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NzSubmenuService, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NzIsMenuInsideDropDownToken), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_13__.Directionality, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterLink, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterLinkWithHref, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.Router, 8)); };
NzMenuItemDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: NzMenuItemDirective, selectors: [["", "nz-menu-item", ""]], contentQueries: function NzMenuItemDirective_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterLink, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterLinkWithHref, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.listOfRouterLink = _t);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.listOfRouterLinkWithHref = _t);
    } }, hostVars: 20, hostBindings: function NzMenuItemDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzMenuItemDirective_click_HostBindingHandler($event) { return ctx.clickMenuItem($event); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("padding-left", ctx.dir === "rtl" ? null : ctx.nzPaddingLeft || ctx.inlinePaddingLeft, "px")("padding-right", ctx.dir === "rtl" ? ctx.nzPaddingLeft || ctx.inlinePaddingLeft : null, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-dropdown-menu-item", ctx.isMenuInsideDropDown)("ant-dropdown-menu-item-selected", ctx.isMenuInsideDropDown && ctx.nzSelected)("ant-dropdown-menu-item-danger", ctx.isMenuInsideDropDown && ctx.nzDanger)("ant-dropdown-menu-item-disabled", ctx.isMenuInsideDropDown && ctx.nzDisabled)("ant-menu-item", !ctx.isMenuInsideDropDown)("ant-menu-item-selected", !ctx.isMenuInsideDropDown && ctx.nzSelected)("ant-menu-item-danger", !ctx.isMenuInsideDropDown && ctx.nzDanger)("ant-menu-item-disabled", !ctx.isMenuInsideDropDown && ctx.nzDisabled);
    } }, inputs: { nzDisabled: "nzDisabled", nzSelected: "nzSelected", nzDanger: "nzDanger", nzMatchRouterExact: "nzMatchRouterExact", nzMatchRouter: "nzMatchRouter", nzPaddingLeft: "nzPaddingLeft" }, exportAs: ["nzMenuItem"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]] });
NzMenuItemDirective.ctorParameters = () => [
    { type: MenuService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef },
    { type: NzSubmenuService, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional }] },
    { type: Boolean, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject, args: [NzIsMenuInsideDropDownToken,] }] },
    { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_13__.Directionality, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional }] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterLink, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional }] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterLinkWithHref, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional }] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__.Router, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional }] }
];
NzMenuItemDirective.propDecorators = {
    nzPaddingLeft: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    nzDisabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    nzSelected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    nzDanger: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    nzMatchRouterExact: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    nzMatchRouter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    listOfRouterLink: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren, args: [_angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterLink, { descendants: true },] }],
    listOfRouterLinkWithHref: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren, args: [_angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterLinkWithHref, { descendants: true },] }]
};
(0,tslib__WEBPACK_IMPORTED_MODULE_14__.__decorate)([
    (0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_15__.InputBoolean)()
], NzMenuItemDirective.prototype, "nzDisabled", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_14__.__decorate)([
    (0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_15__.InputBoolean)()
], NzMenuItemDirective.prototype, "nzSelected", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_14__.__decorate)([
    (0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_15__.InputBoolean)()
], NzMenuItemDirective.prototype, "nzDanger", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_14__.__decorate)([
    (0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_15__.InputBoolean)()
], NzMenuItemDirective.prototype, "nzMatchRouterExact", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_14__.__decorate)([
    (0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_15__.InputBoolean)()
], NzMenuItemDirective.prototype, "nzMatchRouter", void 0);

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
const listOfVerticalPositions = [
    ng_zorro_antd_core_overlay__WEBPACK_IMPORTED_MODULE_16__.POSITION_MAP.rightTop,
    ng_zorro_antd_core_overlay__WEBPACK_IMPORTED_MODULE_16__.POSITION_MAP.right,
    ng_zorro_antd_core_overlay__WEBPACK_IMPORTED_MODULE_16__.POSITION_MAP.rightBottom,
    ng_zorro_antd_core_overlay__WEBPACK_IMPORTED_MODULE_16__.POSITION_MAP.leftTop,
    ng_zorro_antd_core_overlay__WEBPACK_IMPORTED_MODULE_16__.POSITION_MAP.left,
    ng_zorro_antd_core_overlay__WEBPACK_IMPORTED_MODULE_16__.POSITION_MAP.leftBottom
];
const listOfHorizontalPositions = [ng_zorro_antd_core_overlay__WEBPACK_IMPORTED_MODULE_16__.POSITION_MAP.bottomLeft];
class NzSubMenuComponent {
    constructor(nzMenuService, cdr, nzSubmenuService, platform, isMenuInsideDropDown, directionality, noAnimation) {
        this.nzMenuService = nzMenuService;
        this.cdr = cdr;
        this.nzSubmenuService = nzSubmenuService;
        this.platform = platform;
        this.isMenuInsideDropDown = isMenuInsideDropDown;
        this.directionality = directionality;
        this.noAnimation = noAnimation;
        this.nzMenuClassName = '';
        this.nzPaddingLeft = null;
        this.nzTitle = null;
        this.nzIcon = null;
        this.nzOpen = false;
        this.nzDisabled = false;
        this.nzOpenChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.cdkOverlayOrigin = null;
        this.listOfNzSubMenuComponent = null;
        this.listOfNzMenuItemDirective = null;
        this.level = this.nzSubmenuService.level;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
        this.position = 'right';
        this.triggerWidth = null;
        this.theme = 'light';
        this.mode = 'vertical';
        this.inlinePaddingLeft = null;
        this.overlayPositions = listOfVerticalPositions;
        this.isSelected = false;
        this.isActive = false;
        this.dir = 'ltr';
    }
    /** set the submenu host open status directly **/
    setOpenStateWithoutDebounce(open) {
        this.nzSubmenuService.setOpenStateWithoutDebounce(open);
    }
    toggleSubMenu() {
        this.setOpenStateWithoutDebounce(!this.nzOpen);
    }
    setMouseEnterState(value) {
        this.isActive = value;
        if (this.mode !== 'inline') {
            this.nzSubmenuService.setMouseEnterTitleOrOverlayState(value);
        }
    }
    setTriggerWidth() {
        if (this.mode === 'horizontal' && this.platform.isBrowser && this.cdkOverlayOrigin) {
            /** TODO: fast dom **/
            this.triggerWidth = this.cdkOverlayOrigin.nativeElement.getBoundingClientRect().width;
        }
    }
    onPositionChange(position) {
        const placement = (0,ng_zorro_antd_core_overlay__WEBPACK_IMPORTED_MODULE_16__.getPlacementName)(position);
        if (placement === 'rightTop' || placement === 'rightBottom' || placement === 'right') {
            this.position = 'right';
        }
        else if (placement === 'leftTop' || placement === 'leftBottom' || placement === 'left') {
            this.position = 'left';
        }
        this.cdr.markForCheck();
    }
    ngOnInit() {
        var _a;
        /** submenu theme update **/
        this.nzMenuService.theme$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.takeUntil)(this.destroy$)).subscribe(theme => {
            this.theme = theme;
            this.cdr.markForCheck();
        });
        /** submenu mode update **/
        this.nzSubmenuService.mode$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.takeUntil)(this.destroy$)).subscribe(mode => {
            this.mode = mode;
            if (mode === 'horizontal') {
                this.overlayPositions = listOfHorizontalPositions;
            }
            else if (mode === 'vertical') {
                this.overlayPositions = listOfVerticalPositions;
            }
            this.cdr.markForCheck();
        });
        /** inlineIndent update **/
        (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.combineLatest)([this.nzSubmenuService.mode$, this.nzMenuService.inlineIndent$])
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.takeUntil)(this.destroy$))
            .subscribe(([mode, inlineIndent]) => {
            this.inlinePaddingLeft = mode === 'inline' ? this.level * inlineIndent : null;
            this.cdr.markForCheck();
        });
        /** current submenu open status **/
        this.nzSubmenuService.isCurrentSubMenuOpen$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.takeUntil)(this.destroy$)).subscribe(open => {
            this.isActive = open;
            if (open !== this.nzOpen) {
                this.setTriggerWidth();
                this.nzOpen = open;
                this.nzOpenChange.emit(this.nzOpen);
                this.cdr.markForCheck();
            }
        });
        this.dir = this.directionality.value;
        (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.takeUntil)(this.destroy$)).subscribe((direction) => {
            this.dir = direction;
            this.cdr.markForCheck();
        });
    }
    ngAfterContentInit() {
        this.setTriggerWidth();
        const listOfNzMenuItemDirective = this.listOfNzMenuItemDirective;
        const changes = listOfNzMenuItemDirective.changes;
        const mergedObservable = (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.merge)(...[changes, ...listOfNzMenuItemDirective.map(menu => menu.selected$)]);
        changes
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.startWith)(listOfNzMenuItemDirective), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.switchMap)(() => mergedObservable), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.startWith)(true), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(() => listOfNzMenuItemDirective.some(e => e.nzSelected)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.takeUntil)(this.destroy$))
            .subscribe(selected => {
            this.isSelected = selected;
            this.cdr.markForCheck();
        });
    }
    ngOnChanges(changes) {
        const { nzOpen } = changes;
        if (nzOpen) {
            this.nzSubmenuService.setOpenStateWithoutDebounce(this.nzOpen);
            this.setTriggerWidth();
        }
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
NzSubMenuComponent.ɵfac = function NzSubMenuComponent_Factory(t) { return new (t || NzSubMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MenuService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NzSubmenuService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_19__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NzIsMenuInsideDropDownToken), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_13__.Directionality, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_20__.NzNoAnimationDirective, 9)); };
NzSubMenuComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzSubMenuComponent, selectors: [["", "nz-submenu", ""]], contentQueries: function NzSubMenuComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NzSubMenuComponent, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NzMenuItemDirective, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.listOfNzSubMenuComponent = _t);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.listOfNzMenuItemDirective = _t);
    } }, viewQuery: function NzSubMenuComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_21__.CdkOverlayOrigin, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.cdkOverlayOrigin = _t.first);
    } }, hostVars: 34, hostBindings: function NzSubMenuComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-dropdown-menu-submenu", ctx.isMenuInsideDropDown)("ant-dropdown-menu-submenu-disabled", ctx.isMenuInsideDropDown && ctx.nzDisabled)("ant-dropdown-menu-submenu-open", ctx.isMenuInsideDropDown && ctx.nzOpen)("ant-dropdown-menu-submenu-selected", ctx.isMenuInsideDropDown && ctx.isSelected)("ant-dropdown-menu-submenu-vertical", ctx.isMenuInsideDropDown && ctx.mode === "vertical")("ant-dropdown-menu-submenu-horizontal", ctx.isMenuInsideDropDown && ctx.mode === "horizontal")("ant-dropdown-menu-submenu-inline", ctx.isMenuInsideDropDown && ctx.mode === "inline")("ant-dropdown-menu-submenu-active", ctx.isMenuInsideDropDown && ctx.isActive)("ant-menu-submenu", !ctx.isMenuInsideDropDown)("ant-menu-submenu-disabled", !ctx.isMenuInsideDropDown && ctx.nzDisabled)("ant-menu-submenu-open", !ctx.isMenuInsideDropDown && ctx.nzOpen)("ant-menu-submenu-selected", !ctx.isMenuInsideDropDown && ctx.isSelected)("ant-menu-submenu-vertical", !ctx.isMenuInsideDropDown && ctx.mode === "vertical")("ant-menu-submenu-horizontal", !ctx.isMenuInsideDropDown && ctx.mode === "horizontal")("ant-menu-submenu-inline", !ctx.isMenuInsideDropDown && ctx.mode === "inline")("ant-menu-submenu-active", !ctx.isMenuInsideDropDown && ctx.isActive)("ant-menu-submenu-rtl", ctx.dir === "rtl");
    } }, inputs: { nzMenuClassName: "nzMenuClassName", nzPaddingLeft: "nzPaddingLeft", nzTitle: "nzTitle", nzIcon: "nzIcon", nzOpen: "nzOpen", nzDisabled: "nzDisabled" }, outputs: { nzOpenChange: "nzOpenChange" }, exportAs: ["nzSubmenu"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([NzSubmenuService]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], attrs: _c0, ngContentSelectors: _c2, decls: 8, vars: 9, consts: [["nz-submenu-title", "", "cdkOverlayOrigin", "", 3, "nzIcon", "nzTitle", "mode", "nzDisabled", "isMenuInsideDropDown", "paddingLeft", "subMenuMouseState", "toggleSubMenu"], ["origin", "cdkOverlayOrigin"], [4, "ngIf"], ["nz-submenu-inline-child", "", 3, "mode", "nzOpen", "nzNoAnimation", "menuClass", "templateOutlet", 4, "ngIf", "ngIfElse"], ["nonInlineTemplate", ""], ["subMenuTemplate", ""], ["nz-submenu-inline-child", "", 3, "mode", "nzOpen", "nzNoAnimation", "menuClass", "templateOutlet"], ["cdkConnectedOverlay", "", 3, "cdkConnectedOverlayPositions", "cdkConnectedOverlayOrigin", "cdkConnectedOverlayWidth", "cdkConnectedOverlayOpen", "cdkConnectedOverlayTransformOriginOn", "positionChange"], ["nz-submenu-none-inline-child", "", 3, "theme", "mode", "nzOpen", "position", "nzDisabled", "isMenuInsideDropDown", "templateOutlet", "menuClass", "nzNoAnimation", "subMenuMouseState"]], template: function NzSubMenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("subMenuMouseState", function NzSubMenuComponent_Template_div_subMenuMouseState_0_listener($event) { return ctx.setMouseEnterState($event); })("toggleSubMenu", function NzSubMenuComponent_Template_div_toggleSubMenu_0_listener() { return ctx.toggleSubMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NzSubMenuComponent_ng_content_2_Template, 1, 0, "ng-content", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NzSubMenuComponent_div_3_Template, 1, 6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NzSubMenuComponent_ng_template_4_Template, 1, 5, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, NzSubMenuComponent_ng_template_6_Template, 1, 0, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzIcon", ctx.nzIcon)("nzTitle", ctx.nzTitle)("mode", ctx.mode)("nzDisabled", ctx.nzDisabled)("isMenuInsideDropDown", ctx.isMenuInsideDropDown)("paddingLeft", ctx.nzPaddingLeft || ctx.inlinePaddingLeft);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.nzTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mode === "inline")("ngIfElse", _r3);
    } }, directives: function () { return [NzSubMenuTitleComponent, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_21__.CdkOverlayOrigin, _angular_common__WEBPACK_IMPORTED_MODULE_22__.NgIf, NzSubmenuInlineChildComponent, ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_20__.NzNoAnimationDirective, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_21__.CdkConnectedOverlay, NzSubmenuNoneInlineChildComponent]; }, encapsulation: 2, changeDetection: 0 });
NzSubMenuComponent.ctorParameters = () => [
    { type: MenuService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef },
    { type: NzSubmenuService },
    { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_19__.Platform },
    { type: Boolean, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject, args: [NzIsMenuInsideDropDownToken,] }] },
    { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_13__.Directionality, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional }] },
    { type: ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_20__.NzNoAnimationDirective, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Host }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional }] }
];
NzSubMenuComponent.propDecorators = {
    nzMenuClassName: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    nzPaddingLeft: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    nzTitle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    nzIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    nzOpen: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    nzDisabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    nzOpenChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    cdkOverlayOrigin: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild, args: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_21__.CdkOverlayOrigin, { static: true, read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef },] }],
    listOfNzSubMenuComponent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren, args: [NzSubMenuComponent, { descendants: true },] }],
    listOfNzMenuItemDirective: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren, args: [NzMenuItemDirective, { descendants: true },] }]
};
(0,tslib__WEBPACK_IMPORTED_MODULE_14__.__decorate)([
    (0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_15__.InputBoolean)()
], NzSubMenuComponent.prototype, "nzOpen", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_14__.__decorate)([
    (0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_15__.InputBoolean)()
], NzSubMenuComponent.prototype, "nzDisabled", void 0);

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
function MenuServiceFactory(serviceInsideDropDown, serviceOutsideDropDown) {
    return serviceInsideDropDown ? serviceInsideDropDown : serviceOutsideDropDown;
}
function MenuDropDownTokenFactory(isMenuInsideDropDownToken) {
    return isMenuInsideDropDownToken ? isMenuInsideDropDownToken : false;
}
class NzMenuDirective {
    constructor(nzMenuService, isMenuInsideDropDown, cdr, directionality) {
        this.nzMenuService = nzMenuService;
        this.isMenuInsideDropDown = isMenuInsideDropDown;
        this.cdr = cdr;
        this.directionality = directionality;
        this.nzInlineIndent = 24;
        this.nzTheme = 'light';
        this.nzMode = 'vertical';
        this.nzInlineCollapsed = false;
        this.nzSelectable = !this.isMenuInsideDropDown;
        this.nzClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.actualMode = 'vertical';
        this.dir = 'ltr';
        this.inlineCollapsed$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(this.nzInlineCollapsed);
        this.mode$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(this.nzMode);
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
        this.listOfOpenedNzSubMenuComponent = [];
    }
    setInlineCollapsed(inlineCollapsed) {
        this.nzInlineCollapsed = inlineCollapsed;
        this.inlineCollapsed$.next(inlineCollapsed);
    }
    updateInlineCollapse() {
        if (this.listOfNzMenuItemDirective) {
            if (this.nzInlineCollapsed) {
                this.listOfOpenedNzSubMenuComponent = this.listOfNzSubMenuComponent.filter(submenu => submenu.nzOpen);
                this.listOfNzSubMenuComponent.forEach(submenu => submenu.setOpenStateWithoutDebounce(false));
            }
            else {
                this.listOfOpenedNzSubMenuComponent.forEach(submenu => submenu.setOpenStateWithoutDebounce(true));
                this.listOfOpenedNzSubMenuComponent = [];
            }
        }
    }
    ngOnInit() {
        var _a;
        (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.combineLatest)([this.inlineCollapsed$, this.mode$])
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.takeUntil)(this.destroy$))
            .subscribe(([inlineCollapsed, mode]) => {
            this.actualMode = inlineCollapsed ? 'vertical' : mode;
            this.nzMenuService.setMode(this.actualMode);
            this.cdr.markForCheck();
        });
        this.nzMenuService.descendantMenuItemClick$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.takeUntil)(this.destroy$)).subscribe(menu => {
            this.nzClick.emit(menu);
            if (this.nzSelectable && !menu.nzMatchRouter) {
                this.listOfNzMenuItemDirective.forEach(item => item.setSelectedState(item === menu));
            }
        });
        this.dir = this.directionality.value;
        (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.takeUntil)(this.destroy$)).subscribe((direction) => {
            this.dir = direction;
            this.nzMenuService.setMode(this.actualMode);
            this.cdr.markForCheck();
        });
    }
    ngAfterContentInit() {
        this.inlineCollapsed$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.takeUntil)(this.destroy$)).subscribe(() => {
            this.updateInlineCollapse();
            this.cdr.markForCheck();
        });
    }
    ngOnChanges(changes) {
        const { nzInlineCollapsed, nzInlineIndent, nzTheme, nzMode } = changes;
        if (nzInlineCollapsed) {
            this.inlineCollapsed$.next(this.nzInlineCollapsed);
        }
        if (nzInlineIndent) {
            this.nzMenuService.setInlineIndent(this.nzInlineIndent);
        }
        if (nzTheme) {
            this.nzMenuService.setTheme(this.nzTheme);
        }
        if (nzMode) {
            this.mode$.next(this.nzMode);
            if (!changes.nzMode.isFirstChange() && this.listOfNzSubMenuComponent) {
                this.listOfNzSubMenuComponent.forEach(submenu => submenu.setOpenStateWithoutDebounce(false));
            }
        }
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
NzMenuDirective.ɵfac = function NzMenuDirective_Factory(t) { return new (t || NzMenuDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MenuService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NzIsMenuInsideDropDownToken), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_13__.Directionality, 8)); };
NzMenuDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: NzMenuDirective, selectors: [["", "nz-menu", ""]], contentQueries: function NzMenuDirective_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NzMenuItemDirective, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NzSubMenuComponent, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.listOfNzMenuItemDirective = _t);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.listOfNzSubMenuComponent = _t);
    } }, hostVars: 34, hostBindings: function NzMenuDirective_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-dropdown-menu", ctx.isMenuInsideDropDown)("ant-dropdown-menu-root", ctx.isMenuInsideDropDown)("ant-dropdown-menu-light", ctx.isMenuInsideDropDown && ctx.nzTheme === "light")("ant-dropdown-menu-dark", ctx.isMenuInsideDropDown && ctx.nzTheme === "dark")("ant-dropdown-menu-vertical", ctx.isMenuInsideDropDown && ctx.actualMode === "vertical")("ant-dropdown-menu-horizontal", ctx.isMenuInsideDropDown && ctx.actualMode === "horizontal")("ant-dropdown-menu-inline", ctx.isMenuInsideDropDown && ctx.actualMode === "inline")("ant-dropdown-menu-inline-collapsed", ctx.isMenuInsideDropDown && ctx.nzInlineCollapsed)("ant-menu", !ctx.isMenuInsideDropDown)("ant-menu-root", !ctx.isMenuInsideDropDown)("ant-menu-light", !ctx.isMenuInsideDropDown && ctx.nzTheme === "light")("ant-menu-dark", !ctx.isMenuInsideDropDown && ctx.nzTheme === "dark")("ant-menu-vertical", !ctx.isMenuInsideDropDown && ctx.actualMode === "vertical")("ant-menu-horizontal", !ctx.isMenuInsideDropDown && ctx.actualMode === "horizontal")("ant-menu-inline", !ctx.isMenuInsideDropDown && ctx.actualMode === "inline")("ant-menu-inline-collapsed", !ctx.isMenuInsideDropDown && ctx.nzInlineCollapsed)("ant-menu-rtl", ctx.dir === "rtl");
    } }, inputs: { nzInlineIndent: "nzInlineIndent", nzTheme: "nzTheme", nzMode: "nzMode", nzInlineCollapsed: "nzInlineCollapsed", nzSelectable: "nzSelectable" }, outputs: { nzClick: "nzClick" }, exportAs: ["nzMenu"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            {
                provide: NzMenuServiceLocalToken,
                useClass: MenuService
            },
            /** use the top level service **/
            {
                provide: MenuService,
                useFactory: MenuServiceFactory,
                deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_0__.SkipSelf(), new _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional(), MenuService], NzMenuServiceLocalToken]
            },
            /** check if menu inside dropdown-menu component **/
            {
                provide: NzIsMenuInsideDropDownToken,
                useFactory: MenuDropDownTokenFactory,
                deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_0__.SkipSelf(), new _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional(), NzIsMenuInsideDropDownToken]]
            }
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]] });
NzMenuDirective.ctorParameters = () => [
    { type: MenuService },
    { type: Boolean, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject, args: [NzIsMenuInsideDropDownToken,] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef },
    { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_13__.Directionality, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional }] }
];
NzMenuDirective.propDecorators = {
    listOfNzMenuItemDirective: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren, args: [NzMenuItemDirective, { descendants: true },] }],
    listOfNzSubMenuComponent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren, args: [NzSubMenuComponent, { descendants: true },] }],
    nzInlineIndent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    nzTheme: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    nzMode: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    nzInlineCollapsed: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    nzSelectable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    nzClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }]
};
(0,tslib__WEBPACK_IMPORTED_MODULE_14__.__decorate)([
    (0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_15__.InputBoolean)()
], NzMenuDirective.prototype, "nzInlineCollapsed", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_14__.__decorate)([
    (0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_15__.InputBoolean)()
], NzMenuDirective.prototype, "nzSelectable", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
    }], function () { return []; }, null); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzSubmenuService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
    }], function () { return [{ type: NzSubmenuService, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.SkipSelf
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }] }, { type: MenuService }, { type: Boolean, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [NzIsMenuInsideDropDownToken]
            }] }]; }, null); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzMenuItemDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
        args: [{
                selector: '[nz-menu-item]',
                exportAs: 'nzMenuItem',
                host: {
                    '[class.ant-dropdown-menu-item]': `isMenuInsideDropDown`,
                    '[class.ant-dropdown-menu-item-selected]': `isMenuInsideDropDown && nzSelected`,
                    '[class.ant-dropdown-menu-item-danger]': `isMenuInsideDropDown && nzDanger`,
                    '[class.ant-dropdown-menu-item-disabled]': `isMenuInsideDropDown && nzDisabled`,
                    '[class.ant-menu-item]': `!isMenuInsideDropDown`,
                    '[class.ant-menu-item-selected]': `!isMenuInsideDropDown && nzSelected`,
                    '[class.ant-menu-item-danger]': `!isMenuInsideDropDown && nzDanger`,
                    '[class.ant-menu-item-disabled]': `!isMenuInsideDropDown && nzDisabled`,
                    '[style.paddingLeft.px]': `dir === 'rtl' ? null : nzPaddingLeft || inlinePaddingLeft`,
                    '[style.paddingRight.px]': `dir === 'rtl' ? nzPaddingLeft || inlinePaddingLeft : null`,
                    '(click)': 'clickMenuItem($event)'
                }
            }]
    }], function () { return [{ type: MenuService }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef }, { type: NzSubmenuService, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }] }, { type: Boolean, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [NzIsMenuInsideDropDownToken]
            }] }, { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_13__.Directionality, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterLink, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterLinkWithHref, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__.Router, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }] }]; }, { nzDisabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], nzSelected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], nzDanger: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], nzMatchRouterExact: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], nzMatchRouter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], nzPaddingLeft: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], listOfRouterLink: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
            args: [_angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterLink, { descendants: true }]
        }], listOfRouterLinkWithHref: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
            args: [_angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterLinkWithHref, { descendants: true }]
        }] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzSubMenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
        args: [{
                selector: '[nz-submenu]',
                exportAs: 'nzSubmenu',
                providers: [NzSubmenuService],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
                preserveWhitespaces: false,
                template: `
    <div
      nz-submenu-title
      cdkOverlayOrigin
      #origin="cdkOverlayOrigin"
      [nzIcon]="nzIcon"
      [nzTitle]="nzTitle"
      [mode]="mode"
      [nzDisabled]="nzDisabled"
      [isMenuInsideDropDown]="isMenuInsideDropDown"
      [paddingLeft]="nzPaddingLeft || inlinePaddingLeft"
      (subMenuMouseState)="setMouseEnterState($event)"
      (toggleSubMenu)="toggleSubMenu()"
    >
      <ng-content select="[title]" *ngIf="!nzTitle"></ng-content>
    </div>
    <div
      *ngIf="mode === 'inline'; else nonInlineTemplate"
      nz-submenu-inline-child
      [mode]="mode"
      [nzOpen]="nzOpen"
      [@.disabled]="noAnimation?.nzNoAnimation"
      [nzNoAnimation]="noAnimation?.nzNoAnimation"
      [menuClass]="nzMenuClassName"
      [templateOutlet]="subMenuTemplate"
    ></div>
    <ng-template #nonInlineTemplate>
      <ng-template
        cdkConnectedOverlay
        (positionChange)="onPositionChange($event)"
        [cdkConnectedOverlayPositions]="overlayPositions"
        [cdkConnectedOverlayOrigin]="origin"
        [cdkConnectedOverlayWidth]="triggerWidth!"
        [cdkConnectedOverlayOpen]="nzOpen"
        [cdkConnectedOverlayTransformOriginOn]="'.ant-menu-submenu'"
      >
        <div
          nz-submenu-none-inline-child
          [theme]="theme"
          [mode]="mode"
          [nzOpen]="nzOpen"
          [position]="position"
          [nzDisabled]="nzDisabled"
          [isMenuInsideDropDown]="isMenuInsideDropDown"
          [templateOutlet]="subMenuTemplate"
          [menuClass]="nzMenuClassName"
          [@.disabled]="noAnimation?.nzNoAnimation"
          [nzNoAnimation]="noAnimation?.nzNoAnimation"
          (subMenuMouseState)="setMouseEnterState($event)"
        ></div>
      </ng-template>
    </ng-template>

    <ng-template #subMenuTemplate>
      <ng-content></ng-content>
    </ng-template>
  `,
                host: {
                    '[class.ant-dropdown-menu-submenu]': `isMenuInsideDropDown`,
                    '[class.ant-dropdown-menu-submenu-disabled]': `isMenuInsideDropDown && nzDisabled`,
                    '[class.ant-dropdown-menu-submenu-open]': `isMenuInsideDropDown && nzOpen`,
                    '[class.ant-dropdown-menu-submenu-selected]': `isMenuInsideDropDown && isSelected`,
                    '[class.ant-dropdown-menu-submenu-vertical]': `isMenuInsideDropDown && mode === 'vertical'`,
                    '[class.ant-dropdown-menu-submenu-horizontal]': `isMenuInsideDropDown && mode === 'horizontal'`,
                    '[class.ant-dropdown-menu-submenu-inline]': `isMenuInsideDropDown && mode === 'inline'`,
                    '[class.ant-dropdown-menu-submenu-active]': `isMenuInsideDropDown && isActive`,
                    '[class.ant-menu-submenu]': `!isMenuInsideDropDown`,
                    '[class.ant-menu-submenu-disabled]': `!isMenuInsideDropDown && nzDisabled`,
                    '[class.ant-menu-submenu-open]': `!isMenuInsideDropDown && nzOpen`,
                    '[class.ant-menu-submenu-selected]': `!isMenuInsideDropDown && isSelected`,
                    '[class.ant-menu-submenu-vertical]': `!isMenuInsideDropDown && mode === 'vertical'`,
                    '[class.ant-menu-submenu-horizontal]': `!isMenuInsideDropDown && mode === 'horizontal'`,
                    '[class.ant-menu-submenu-inline]': `!isMenuInsideDropDown && mode === 'inline'`,
                    '[class.ant-menu-submenu-active]': `!isMenuInsideDropDown && isActive`,
                    '[class.ant-menu-submenu-rtl]': `dir === 'rtl'`
                }
            }]
    }], function () { return [{ type: MenuService }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef }, { type: NzSubmenuService }, { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_19__.Platform }, { type: Boolean, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [NzIsMenuInsideDropDownToken]
            }] }, { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_13__.Directionality, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }] }, { type: ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_20__.NzNoAnimationDirective, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Host
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }] }]; }, { nzMenuClassName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], nzPaddingLeft: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], nzTitle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], nzIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], nzOpen: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], nzDisabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], nzOpenChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], cdkOverlayOrigin: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
            args: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_21__.CdkOverlayOrigin, { static: true, read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }]
        }], listOfNzSubMenuComponent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
            args: [NzSubMenuComponent, { descendants: true }]
        }], listOfNzMenuItemDirective: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
            args: [NzMenuItemDirective, { descendants: true }]
        }] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzMenuDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
        args: [{
                selector: '[nz-menu]',
                exportAs: 'nzMenu',
                providers: [
                    {
                        provide: NzMenuServiceLocalToken,
                        useClass: MenuService
                    },
                    /** use the top level service **/
                    {
                        provide: MenuService,
                        useFactory: MenuServiceFactory,
                        deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_0__.SkipSelf(), new _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional(), MenuService], NzMenuServiceLocalToken]
                    },
                    /** check if menu inside dropdown-menu component **/
                    {
                        provide: NzIsMenuInsideDropDownToken,
                        useFactory: MenuDropDownTokenFactory,
                        deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_0__.SkipSelf(), new _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional(), NzIsMenuInsideDropDownToken]]
                    }
                ],
                host: {
                    '[class.ant-dropdown-menu]': `isMenuInsideDropDown`,
                    '[class.ant-dropdown-menu-root]': `isMenuInsideDropDown`,
                    '[class.ant-dropdown-menu-light]': `isMenuInsideDropDown && nzTheme === 'light'`,
                    '[class.ant-dropdown-menu-dark]': `isMenuInsideDropDown && nzTheme === 'dark'`,
                    '[class.ant-dropdown-menu-vertical]': `isMenuInsideDropDown && actualMode === 'vertical'`,
                    '[class.ant-dropdown-menu-horizontal]': `isMenuInsideDropDown && actualMode === 'horizontal'`,
                    '[class.ant-dropdown-menu-inline]': `isMenuInsideDropDown && actualMode === 'inline'`,
                    '[class.ant-dropdown-menu-inline-collapsed]': `isMenuInsideDropDown && nzInlineCollapsed`,
                    '[class.ant-menu]': `!isMenuInsideDropDown`,
                    '[class.ant-menu-root]': `!isMenuInsideDropDown`,
                    '[class.ant-menu-light]': `!isMenuInsideDropDown && nzTheme === 'light'`,
                    '[class.ant-menu-dark]': `!isMenuInsideDropDown && nzTheme === 'dark'`,
                    '[class.ant-menu-vertical]': `!isMenuInsideDropDown && actualMode === 'vertical'`,
                    '[class.ant-menu-horizontal]': `!isMenuInsideDropDown && actualMode === 'horizontal'`,
                    '[class.ant-menu-inline]': `!isMenuInsideDropDown && actualMode === 'inline'`,
                    '[class.ant-menu-inline-collapsed]': `!isMenuInsideDropDown && nzInlineCollapsed`,
                    '[class.ant-menu-rtl]': `dir === 'rtl'`
                }
            }]
    }], function () { return [{ type: MenuService }, { type: Boolean, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [NzIsMenuInsideDropDownToken]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef }, { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_13__.Directionality, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }] }]; }, { nzInlineIndent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], nzTheme: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], nzMode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], nzInlineCollapsed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], nzSelectable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], nzClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], listOfNzMenuItemDirective: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
            args: [NzMenuItemDirective, { descendants: true }]
        }], listOfNzSubMenuComponent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
            args: [NzSubMenuComponent, { descendants: true }]
        }] }); })();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
function MenuGroupFactory(isMenuInsideDropDownToken) {
    return isMenuInsideDropDownToken ? isMenuInsideDropDownToken : false;
}
class NzMenuGroupComponent {
    constructor(elementRef, renderer, isMenuInsideDropDown) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.isMenuInsideDropDown = isMenuInsideDropDown;
        const className = this.isMenuInsideDropDown ? 'ant-dropdown-menu-item-group' : 'ant-menu-item-group';
        this.renderer.addClass(elementRef.nativeElement, className);
    }
    ngAfterViewInit() {
        const ulElement = this.titleElement.nativeElement.nextElementSibling;
        if (ulElement) {
            /** add classname to ul **/
            const className = this.isMenuInsideDropDown ? 'ant-dropdown-menu-item-group-list' : 'ant-menu-item-group-list';
            this.renderer.addClass(ulElement, className);
        }
    }
}
NzMenuGroupComponent.ɵfac = function NzMenuGroupComponent_Factory(t) { return new (t || NzMenuGroupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NzIsMenuInsideDropDownToken)); };
NzMenuGroupComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzMenuGroupComponent, selectors: [["", "nz-menu-group", ""]], viewQuery: function NzMenuGroupComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c3, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.titleElement = _t.first);
    } }, inputs: { nzTitle: "nzTitle" }, exportAs: ["nzMenuGroup"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            /** check if menu inside dropdown-menu component **/
            {
                provide: NzIsMenuInsideDropDownToken,
                useFactory: MenuGroupFactory,
                deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_0__.SkipSelf(), new _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional(), NzIsMenuInsideDropDownToken]]
            }
        ])], attrs: _c4, ngContentSelectors: _c6, decls: 5, vars: 6, consts: [["titleElement", ""], [4, "nzStringTemplateOutlet"], [4, "ngIf"]], template: function NzMenuGroupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", null, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NzMenuGroupComponent_ng_container_2_Template, 2, 1, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NzMenuGroupComponent_ng_content_3_Template, 1, 0, "ng-content", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](4);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-menu-item-group-title", !ctx.isMenuInsideDropDown)("ant-dropdown-menu-item-group-title", ctx.isMenuInsideDropDown);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzStringTemplateOutlet", ctx.nzTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.nzTitle);
    } }, directives: [ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_23__.NzStringTemplateOutletDirective, _angular_common__WEBPACK_IMPORTED_MODULE_22__.NgIf], encapsulation: 2, changeDetection: 0 });
NzMenuGroupComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2 },
    { type: Boolean, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject, args: [NzIsMenuInsideDropDownToken,] }] }
];
NzMenuGroupComponent.propDecorators = {
    nzTitle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    titleElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild, args: ['titleElement',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzMenuGroupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
        args: [{
                selector: '[nz-menu-group]',
                exportAs: 'nzMenuGroup',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
                providers: [
                    /** check if menu inside dropdown-menu component **/
                    {
                        provide: NzIsMenuInsideDropDownToken,
                        useFactory: MenuGroupFactory,
                        deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_0__.SkipSelf(), new _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional(), NzIsMenuInsideDropDownToken]]
                    }
                ],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
                template: `
    <div
      [class.ant-menu-item-group-title]="!isMenuInsideDropDown"
      [class.ant-dropdown-menu-item-group-title]="isMenuInsideDropDown"
      #titleElement
    >
      <ng-container *nzStringTemplateOutlet="nzTitle">{{ nzTitle }}</ng-container>
      <ng-content select="[title]" *ngIf="!nzTitle"></ng-content>
    </div>
    <ng-content></ng-content>
  `,
                preserveWhitespaces: false
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2 }, { type: Boolean, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [NzIsMenuInsideDropDownToken]
            }] }]; }, { nzTitle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], titleElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
            args: ['titleElement']
        }] }); })();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzMenuDividerDirective {
    constructor(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.renderer.addClass(elementRef.nativeElement, 'ant-dropdown-menu-item-divider');
    }
}
NzMenuDividerDirective.ɵfac = function NzMenuDividerDirective_Factory(t) { return new (t || NzMenuDividerDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2)); };
NzMenuDividerDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: NzMenuDividerDirective, selectors: [["", "nz-menu-divider", ""]], exportAs: ["nzMenuDivider"] });
NzMenuDividerDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2 }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzMenuDividerDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
        args: [{
                selector: '[nz-menu-divider]',
                exportAs: 'nzMenuDivider'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2 }]; }, null); })();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzSubMenuTitleComponent {
    constructor(cdr, directionality) {
        this.cdr = cdr;
        this.directionality = directionality;
        this.nzIcon = null;
        this.nzTitle = null;
        this.isMenuInsideDropDown = false;
        this.nzDisabled = false;
        this.paddingLeft = null;
        this.mode = 'vertical';
        this.toggleSubMenu = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.subMenuMouseState = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.dir = 'ltr';
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    }
    ngOnInit() {
        var _a;
        this.dir = this.directionality.value;
        (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.takeUntil)(this.destroy$)).subscribe((direction) => {
            this.dir = direction;
            this.cdr.detectChanges();
        });
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    setMouseState(state) {
        if (!this.nzDisabled) {
            this.subMenuMouseState.next(state);
        }
    }
    clickTitle() {
        if (this.mode === 'inline' && !this.nzDisabled) {
            this.toggleSubMenu.emit();
        }
    }
}
NzSubMenuTitleComponent.ɵfac = function NzSubMenuTitleComponent_Factory(t) { return new (t || NzSubMenuTitleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_13__.Directionality, 8)); };
NzSubMenuTitleComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzSubMenuTitleComponent, selectors: [["", "nz-submenu-title", ""]], hostVars: 8, hostBindings: function NzSubMenuTitleComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzSubMenuTitleComponent_click_HostBindingHandler() { return ctx.clickTitle(); })("mouseenter", function NzSubMenuTitleComponent_mouseenter_HostBindingHandler() { return ctx.setMouseState(true); })("mouseleave", function NzSubMenuTitleComponent_mouseleave_HostBindingHandler() { return ctx.setMouseState(false); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("padding-left", ctx.dir === "rtl" ? null : ctx.paddingLeft, "px")("padding-right", ctx.dir === "rtl" ? ctx.paddingLeft : null, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-dropdown-menu-submenu-title", ctx.isMenuInsideDropDown)("ant-menu-submenu-title", !ctx.isMenuInsideDropDown);
    } }, inputs: { nzIcon: "nzIcon", nzTitle: "nzTitle", isMenuInsideDropDown: "isMenuInsideDropDown", nzDisabled: "nzDisabled", paddingLeft: "paddingLeft", mode: "mode" }, outputs: { toggleSubMenu: "toggleSubMenu", subMenuMouseState: "subMenuMouseState" }, exportAs: ["nzSubmenuTitle"], attrs: _c7, ngContentSelectors: _c8, decls: 6, vars: 4, consts: [["nz-icon", "", 3, "nzType", 4, "ngIf"], [4, "nzStringTemplateOutlet"], ["class", "ant-dropdown-menu-submenu-expand-icon", 3, "ngSwitch", 4, "ngIf", "ngIfElse"], ["notDropdownTpl", ""], ["nz-icon", "", 3, "nzType"], [1, "ant-dropdown-menu-submenu-expand-icon", 3, "ngSwitch"], ["nz-icon", "", "nzType", "left", "class", "ant-dropdown-menu-submenu-arrow-icon", 4, "ngSwitchCase"], ["nz-icon", "", "nzType", "right", "class", "ant-dropdown-menu-submenu-arrow-icon", 4, "ngSwitchDefault"], ["nz-icon", "", "nzType", "left", 1, "ant-dropdown-menu-submenu-arrow-icon"], ["nz-icon", "", "nzType", "right", 1, "ant-dropdown-menu-submenu-arrow-icon"], [1, "ant-menu-submenu-arrow"]], template: function NzSubMenuTitleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NzSubMenuTitleComponent_i_0_Template, 1, 1, "i", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzSubMenuTitleComponent_ng_container_1_Template, 3, 1, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NzSubMenuTitleComponent_span_3_Template, 3, 2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NzSubMenuTitleComponent_ng_template_4_Template, 1, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.nzIcon);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzStringTemplateOutlet", ctx.nzTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isMenuInsideDropDown)("ngIfElse", _r3);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_22__.NgIf, ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_23__.NzStringTemplateOutletDirective, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_24__.NzIconDirective, _angular_common__WEBPACK_IMPORTED_MODULE_22__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_22__.NgSwitchCase, _angular_common__WEBPACK_IMPORTED_MODULE_22__.NgSwitchDefault], encapsulation: 2, changeDetection: 0 });
NzSubMenuTitleComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef },
    { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_13__.Directionality, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional }] }
];
NzSubMenuTitleComponent.propDecorators = {
    nzIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    nzTitle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    isMenuInsideDropDown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    nzDisabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    paddingLeft: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    mode: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    toggleSubMenu: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    subMenuMouseState: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzSubMenuTitleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
        args: [{
                selector: '[nz-submenu-title]',
                exportAs: 'nzSubmenuTitle',
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
                template: `
    <i nz-icon [nzType]="nzIcon" *ngIf="nzIcon"></i>
    <ng-container *nzStringTemplateOutlet="nzTitle">
      <span>{{ nzTitle }}</span>
    </ng-container>
    <ng-content></ng-content>
    <span
      [ngSwitch]="dir"
      *ngIf="isMenuInsideDropDown; else notDropdownTpl"
      class="ant-dropdown-menu-submenu-expand-icon"
    >
      <i *ngSwitchCase="'rtl'" nz-icon nzType="left" class="ant-dropdown-menu-submenu-arrow-icon"></i>
      <i *ngSwitchDefault nz-icon nzType="right" class="ant-dropdown-menu-submenu-arrow-icon"></i>
    </span>
    <ng-template #notDropdownTpl>
      <i class="ant-menu-submenu-arrow"></i>
    </ng-template>
  `,
                host: {
                    '[class.ant-dropdown-menu-submenu-title]': 'isMenuInsideDropDown',
                    '[class.ant-menu-submenu-title]': '!isMenuInsideDropDown',
                    '[style.paddingLeft.px]': `dir === 'rtl' ? null : paddingLeft `,
                    '[style.paddingRight.px]': `dir === 'rtl' ? paddingLeft : null`,
                    '(click)': 'clickTitle()',
                    '(mouseenter)': 'setMouseState(true)',
                    '(mouseleave)': 'setMouseState(false)'
                }
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef }, { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_13__.Directionality, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }] }]; }, { nzIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], nzTitle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], isMenuInsideDropDown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], nzDisabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], paddingLeft: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], mode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], toggleSubMenu: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], subMenuMouseState: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }] }); })();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzSubmenuInlineChildComponent {
    constructor(elementRef, renderer, directionality) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.directionality = directionality;
        this.templateOutlet = null;
        this.menuClass = '';
        this.mode = 'vertical';
        this.nzOpen = false;
        this.listOfCacheClassName = [];
        this.expandState = 'collapsed';
        this.dir = 'ltr';
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
        // TODO: move to host after View Engine deprecation
        this.elementRef.nativeElement.classList.add('ant-menu', 'ant-menu-inline', 'ant-menu-sub');
    }
    calcMotionState() {
        if (this.nzOpen) {
            this.expandState = 'expanded';
        }
        else {
            this.expandState = 'collapsed';
        }
    }
    ngOnInit() {
        var _a;
        this.calcMotionState();
        this.dir = this.directionality.value;
        (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.takeUntil)(this.destroy$)).subscribe((direction) => {
            this.dir = direction;
        });
    }
    ngOnChanges(changes) {
        const { mode, nzOpen, menuClass } = changes;
        if (mode || nzOpen) {
            this.calcMotionState();
        }
        if (menuClass) {
            if (this.listOfCacheClassName.length) {
                this.listOfCacheClassName
                    .filter(item => !!item)
                    .forEach(className => {
                    this.renderer.removeClass(this.elementRef.nativeElement, className);
                });
            }
            if (this.menuClass) {
                this.listOfCacheClassName = this.menuClass.split(' ');
                this.listOfCacheClassName
                    .filter(item => !!item)
                    .forEach(className => {
                    this.renderer.addClass(this.elementRef.nativeElement, className);
                });
            }
        }
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
NzSubmenuInlineChildComponent.ɵfac = function NzSubmenuInlineChildComponent_Factory(t) { return new (t || NzSubmenuInlineChildComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_13__.Directionality, 8)); };
NzSubmenuInlineChildComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzSubmenuInlineChildComponent, selectors: [["", "nz-submenu-inline-child", ""]], hostVars: 3, hostBindings: function NzSubmenuInlineChildComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsyntheticHostProperty"]("@collapseMotion", ctx.expandState);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-menu-rtl", ctx.dir === "rtl");
    } }, inputs: { templateOutlet: "templateOutlet", menuClass: "menuClass", mode: "mode", nzOpen: "nzOpen" }, exportAs: ["nzSubmenuInlineChild"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], attrs: _c9, decls: 1, vars: 1, consts: [[3, "ngTemplateOutlet"]], template: function NzSubmenuInlineChildComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NzSubmenuInlineChildComponent_ng_template_0_Template, 0, 0, "ng-template", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx.templateOutlet);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_22__.NgTemplateOutlet], encapsulation: 2, data: { animation: [ng_zorro_antd_core_animation__WEBPACK_IMPORTED_MODULE_25__.collapseMotion] }, changeDetection: 0 });
NzSubmenuInlineChildComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2 },
    { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_13__.Directionality, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional }] }
];
NzSubmenuInlineChildComponent.propDecorators = {
    templateOutlet: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    menuClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    mode: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    nzOpen: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzSubmenuInlineChildComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
        args: [{
                selector: '[nz-submenu-inline-child]',
                animations: [ng_zorro_antd_core_animation__WEBPACK_IMPORTED_MODULE_25__.collapseMotion],
                exportAs: 'nzSubmenuInlineChild',
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
                template: ` <ng-template [ngTemplateOutlet]="templateOutlet"></ng-template> `,
                host: {
                    '[class.ant-menu-rtl]': `dir === 'rtl'`,
                    '[@collapseMotion]': 'expandState'
                }
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2 }, { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_13__.Directionality, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }] }]; }, { templateOutlet: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], menuClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], mode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], nzOpen: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }] }); })();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzSubmenuNoneInlineChildComponent {
    constructor(elementRef, directionality) {
        this.elementRef = elementRef;
        this.directionality = directionality;
        this.menuClass = '';
        this.theme = 'light';
        this.templateOutlet = null;
        this.isMenuInsideDropDown = false;
        this.mode = 'vertical';
        this.position = 'right';
        this.nzDisabled = false;
        this.nzOpen = false;
        this.subMenuMouseState = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.expandState = 'collapsed';
        this.dir = 'ltr';
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
        // TODO: move to host after View Engine deprecation
        this.elementRef.nativeElement.classList.add('ant-menu-submenu', 'ant-menu-submenu-popup');
    }
    setMouseState(state) {
        if (!this.nzDisabled) {
            this.subMenuMouseState.next(state);
        }
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    calcMotionState() {
        if (this.nzOpen) {
            if (this.mode === 'horizontal') {
                this.expandState = 'bottom';
            }
            else if (this.mode === 'vertical') {
                this.expandState = 'active';
            }
        }
        else {
            this.expandState = 'collapsed';
        }
    }
    ngOnInit() {
        var _a;
        this.calcMotionState();
        this.dir = this.directionality.value;
        (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.takeUntil)(this.destroy$)).subscribe((direction) => {
            this.dir = direction;
        });
    }
    ngOnChanges(changes) {
        const { mode, nzOpen } = changes;
        if (mode || nzOpen) {
            this.calcMotionState();
        }
    }
}
NzSubmenuNoneInlineChildComponent.ɵfac = function NzSubmenuNoneInlineChildComponent_Factory(t) { return new (t || NzSubmenuNoneInlineChildComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_13__.Directionality, 8)); };
NzSubmenuNoneInlineChildComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzSubmenuNoneInlineChildComponent, selectors: [["", "nz-submenu-none-inline-child", ""]], hostVars: 14, hostBindings: function NzSubmenuNoneInlineChildComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function NzSubmenuNoneInlineChildComponent_mouseenter_HostBindingHandler() { return ctx.setMouseState(true); })("mouseleave", function NzSubmenuNoneInlineChildComponent_mouseleave_HostBindingHandler() { return ctx.setMouseState(false); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsyntheticHostProperty"]("@slideMotion", ctx.expandState)("@zoomBigMotion", ctx.expandState);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-menu-light", ctx.theme === "light")("ant-menu-dark", ctx.theme === "dark")("ant-menu-submenu-placement-bottom", ctx.mode === "horizontal")("ant-menu-submenu-placement-right", ctx.mode === "vertical" && ctx.position === "right")("ant-menu-submenu-placement-left", ctx.mode === "vertical" && ctx.position === "left")("ant-menu-submenu-rtl", ctx.dir === "rtl");
    } }, inputs: { menuClass: "menuClass", theme: "theme", templateOutlet: "templateOutlet", isMenuInsideDropDown: "isMenuInsideDropDown", mode: "mode", position: "position", nzDisabled: "nzDisabled", nzOpen: "nzOpen" }, outputs: { subMenuMouseState: "subMenuMouseState" }, exportAs: ["nzSubmenuNoneInlineChild"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], attrs: _c10, decls: 2, vars: 16, consts: [[3, "ngClass"], [3, "ngTemplateOutlet"]], template: function NzSubmenuNoneInlineChildComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzSubmenuNoneInlineChildComponent_ng_template_1_Template, 0, 0, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-dropdown-menu", ctx.isMenuInsideDropDown)("ant-menu", !ctx.isMenuInsideDropDown)("ant-dropdown-menu-vertical", ctx.isMenuInsideDropDown)("ant-menu-vertical", !ctx.isMenuInsideDropDown)("ant-dropdown-menu-sub", ctx.isMenuInsideDropDown)("ant-menu-sub", !ctx.isMenuInsideDropDown)("ant-menu-rtl", ctx.dir === "rtl");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.menuClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx.templateOutlet);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_22__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_22__.NgTemplateOutlet], encapsulation: 2, data: { animation: [ng_zorro_antd_core_animation__WEBPACK_IMPORTED_MODULE_25__.zoomBigMotion, ng_zorro_antd_core_animation__WEBPACK_IMPORTED_MODULE_25__.slideMotion] }, changeDetection: 0 });
NzSubmenuNoneInlineChildComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef },
    { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_13__.Directionality, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional }] }
];
NzSubmenuNoneInlineChildComponent.propDecorators = {
    menuClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    theme: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    templateOutlet: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    isMenuInsideDropDown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    mode: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    position: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    nzDisabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    nzOpen: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    subMenuMouseState: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzSubmenuNoneInlineChildComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
        args: [{
                selector: '[nz-submenu-none-inline-child]',
                exportAs: 'nzSubmenuNoneInlineChild',
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
                animations: [ng_zorro_antd_core_animation__WEBPACK_IMPORTED_MODULE_25__.zoomBigMotion, ng_zorro_antd_core_animation__WEBPACK_IMPORTED_MODULE_25__.slideMotion],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
                template: `
    <div
      [class.ant-dropdown-menu]="isMenuInsideDropDown"
      [class.ant-menu]="!isMenuInsideDropDown"
      [class.ant-dropdown-menu-vertical]="isMenuInsideDropDown"
      [class.ant-menu-vertical]="!isMenuInsideDropDown"
      [class.ant-dropdown-menu-sub]="isMenuInsideDropDown"
      [class.ant-menu-sub]="!isMenuInsideDropDown"
      [class.ant-menu-rtl]="dir === 'rtl'"
      [ngClass]="menuClass"
    >
      <ng-template [ngTemplateOutlet]="templateOutlet"></ng-template>
    </div>
  `,
                host: {
                    '[class.ant-menu-light]': "theme === 'light'",
                    '[class.ant-menu-dark]': "theme === 'dark'",
                    '[class.ant-menu-submenu-placement-bottom]': "mode === 'horizontal'",
                    '[class.ant-menu-submenu-placement-right]': "mode === 'vertical' && position === 'right'",
                    '[class.ant-menu-submenu-placement-left]': "mode === 'vertical' && position === 'left'",
                    '[class.ant-menu-submenu-rtl]': 'dir ==="rtl"',
                    '[@slideMotion]': 'expandState',
                    '[@zoomBigMotion]': 'expandState',
                    '(mouseenter)': 'setMouseState(true)',
                    '(mouseleave)': 'setMouseState(false)'
                }
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }, { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_13__.Directionality, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }] }]; }, { menuClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], theme: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], templateOutlet: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], isMenuInsideDropDown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], mode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], position: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], nzDisabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], nzOpen: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], subMenuMouseState: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }] }); })();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzMenuModule {
}
NzMenuModule.ɵfac = function NzMenuModule_Factory(t) { return new (t || NzMenuModule)(); };
NzMenuModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NzMenuModule });
NzMenuModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_13__.BidiModule, _angular_common__WEBPACK_IMPORTED_MODULE_22__.CommonModule, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_19__.PlatformModule, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_21__.OverlayModule, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_24__.NzIconModule, ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_20__.NzNoAnimationModule, ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_23__.NzOutletModule]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzMenuModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
        args: [{
                imports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_13__.BidiModule, _angular_common__WEBPACK_IMPORTED_MODULE_22__.CommonModule, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_19__.PlatformModule, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_21__.OverlayModule, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_24__.NzIconModule, ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_20__.NzNoAnimationModule, ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_23__.NzOutletModule],
                declarations: [
                    NzMenuDirective,
                    NzMenuItemDirective,
                    NzSubMenuComponent,
                    NzMenuDividerDirective,
                    NzMenuGroupComponent,
                    NzSubMenuTitleComponent,
                    NzSubmenuInlineChildComponent,
                    NzSubmenuNoneInlineChildComponent
                ],
                exports: [NzMenuDirective, NzMenuItemDirective, NzSubMenuComponent, NzMenuDividerDirective, NzMenuGroupComponent]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NzMenuModule, { declarations: function () { return [NzMenuDirective, NzMenuItemDirective, NzSubMenuComponent, NzMenuDividerDirective, NzMenuGroupComponent, NzSubMenuTitleComponent, NzSubmenuInlineChildComponent, NzSubmenuNoneInlineChildComponent]; }, imports: function () { return [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_13__.BidiModule, _angular_common__WEBPACK_IMPORTED_MODULE_22__.CommonModule, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_19__.PlatformModule, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_21__.OverlayModule, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_24__.NzIconModule, ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_20__.NzNoAnimationModule, ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_23__.NzOutletModule]; }, exports: function () { return [NzMenuDirective, NzMenuItemDirective, NzSubMenuComponent, NzMenuDividerDirective, NzMenuGroupComponent]; } }); })();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */

/**
 * Generated bundle index. Do not edit.
 */





/***/ }),

/***/ 21210:
/*!******************************************!*\
  !*** ./src/app/icons-provider.module.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IconsProviderModule": () => (/* binding */ IconsProviderModule)
/* harmony export */ });
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/icon */ 35203);
/* harmony import */ var _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ant-design/icons-angular/icons */ 53156);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);



const icons = [_ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__.MenuFoldOutline, _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__.MenuUnfoldOutline, _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__.DashboardOutline, _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_0__.FormOutline];
class IconsProviderModule {
}
IconsProviderModule.ɵfac = function IconsProviderModule_Factory(t) { return new (t || IconsProviderModule)(); };
IconsProviderModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: IconsProviderModule });
IconsProviderModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ providers: [
        { provide: ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_2__.NZ_ICONS, useValue: icons }
    ], imports: [[ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_2__.NzIconModule], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_2__.NzIconModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](IconsProviderModule, { imports: [ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_2__.NzIconModule], exports: [ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_2__.NzIconModule] }); })();


/***/ }),

/***/ 39730:
/*!***********************************************!*\
  !*** ./src/app/pages/pages-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PagesRoutingModule": () => (/* binding */ PagesRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _pages_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages.component */ 37664);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);




const routes = [
    {
        path: '',
        component: _pages_component__WEBPACK_IMPORTED_MODULE_0__.PagesComponent,
        children: [
            { path: '', pathMatch: 'full', redirectTo: '/welcome' },
            {
                path: 'welcome',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_welcome_welcome_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../welcome/welcome.module */ 32526)).then((m) => m.WelcomeModule),
            },
            {
                path: 'events',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ng-zorro-antd___ivy_ngcc___fesm2015_ng-zorro-antd-breadcrumb_js-node_mod-63a715"), __webpack_require__.e("default-node_modules_ng-zorro-antd___ivy_ngcc___fesm2015_ng-zorro-antd-pagination_js"), __webpack_require__.e("default-node_modules_ng-zorro-antd___ivy_ngcc___fesm2015_ng-zorro-antd-radio_js"), __webpack_require__.e("default-node_modules_ng-zorro-antd___ivy_ngcc___fesm2015_ng-zorro-antd-table_js"), __webpack_require__.e("default-node_modules_ng-zorro-antd___ivy_ngcc___fesm2015_ng-zorro-antd-upload_js"), __webpack_require__.e("default-node_modules_ng-zorro-antd___ivy_ngcc___fesm2015_ng-zorro-antd-tabs_js"), __webpack_require__.e("default-node_modules_ng-zorro-antd___ivy_ngcc___fesm2015_ng-zorro-antd-avatar_js"), __webpack_require__.e("default-node_modules_ng-zorro-antd___ivy_ngcc___fesm2015_ng-zorro-antd-modal_js"), __webpack_require__.e("default-node_modules_ng-zorro-antd___ivy_ngcc___fesm2015_ng-zorro-antd-list_js"), __webpack_require__.e("default-node_modules_ng-zorro-antd___ivy_ngcc___fesm2015_ng-zorro-antd-input-number_js"), __webpack_require__.e("default-node_modules_ng-zorro-antd___ivy_ngcc___fesm2015_ng-zorro-antd-date-picker_js"), __webpack_require__.e("default-node_modules_ng-zorro-antd___ivy_ngcc___fesm2015_ng-zorro-antd-badge_js"), __webpack_require__.e("default-node_modules_xlsx_xlsx_js"), __webpack_require__.e("default-node_modules_tinymce_tinymce-angular___ivy_ngcc___fesm2015_tinymce-tinymce-angular_js"), __webpack_require__.e("src_app_event_event_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../event/event.module */ 61904)).then((m) => m.EventModule),
            },
            {
                path: 'products',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ng-zorro-antd___ivy_ngcc___fesm2015_ng-zorro-antd-breadcrumb_js-node_mod-63a715"), __webpack_require__.e("default-node_modules_ng-zorro-antd___ivy_ngcc___fesm2015_ng-zorro-antd-pagination_js"), __webpack_require__.e("default-node_modules_ng-zorro-antd___ivy_ngcc___fesm2015_ng-zorro-antd-radio_js"), __webpack_require__.e("default-node_modules_ng-zorro-antd___ivy_ngcc___fesm2015_ng-zorro-antd-table_js"), __webpack_require__.e("default-node_modules_ng-zorro-antd___ivy_ngcc___fesm2015_ng-zorro-antd-upload_js"), __webpack_require__.e("default-node_modules_lodash_lodash_js"), __webpack_require__.e("default-node_modules_ng-zorro-antd___ivy_ngcc___fesm2015_ng-zorro-antd-avatar_js"), __webpack_require__.e("default-node_modules_ng-zorro-antd___ivy_ngcc___fesm2015_ng-zorro-antd-modal_js"), __webpack_require__.e("default-node_modules_ng-zorro-antd___ivy_ngcc___fesm2015_ng-zorro-antd-tag_js-node_modules_ng-4d5cc9"), __webpack_require__.e("default-node_modules_ng-zorro-antd___ivy_ngcc___fesm2015_ng-zorro-antd-input-number_js"), __webpack_require__.e("default-node_modules_ng-zorro-antd___ivy_ngcc___fesm2015_ng-zorro-antd-switch_js"), __webpack_require__.e("default-node_modules_ng-zorro-antd___ivy_ngcc___fesm2015_ng-zorro-antd-tree-select_js"), __webpack_require__.e("default-node_modules_tinymce_tinymce-angular___ivy_ngcc___fesm2015_tinymce-tinymce-angular_js"), __webpack_require__.e("src_app_product_product_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../product/product.module */ 11589)).then((m) => m.ProductModule),
            },
            {
                path: 'brands',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ng-zorro-antd___ivy_ngcc___fesm2015_ng-zorro-antd-breadcrumb_js-node_mod-63a715"), __webpack_require__.e("default-node_modules_ng-zorro-antd___ivy_ngcc___fesm2015_ng-zorro-antd-pagination_js"), __webpack_require__.e("default-node_modules_ng-zorro-antd___ivy_ngcc___fesm2015_ng-zorro-antd-radio_js"), __webpack_require__.e("default-node_modules_ng-zorro-antd___ivy_ngcc___fesm2015_ng-zorro-antd-table_js"), __webpack_require__.e("default-node_modules_ng-zorro-antd___ivy_ngcc___fesm2015_ng-zorro-antd-upload_js"), __webpack_require__.e("default-node_modules_ng-zorro-antd___ivy_ngcc___fesm2015_ng-zorro-antd-switch_js"), __webpack_require__.e("src_app_brand_brand_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../brand/brand.module */ 31547)).then((m) => m.BrandModule),
            },
            {
                path: 'categories',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ng-zorro-antd___ivy_ngcc___fesm2015_ng-zorro-antd-breadcrumb_js-node_mod-63a715"), __webpack_require__.e("default-node_modules_ng-zorro-antd___ivy_ngcc___fesm2015_ng-zorro-antd-pagination_js"), __webpack_require__.e("default-node_modules_ng-zorro-antd___ivy_ngcc___fesm2015_ng-zorro-antd-radio_js"), __webpack_require__.e("default-node_modules_ng-zorro-antd___ivy_ngcc___fesm2015_ng-zorro-antd-table_js"), __webpack_require__.e("default-node_modules_ng-zorro-antd___ivy_ngcc___fesm2015_ng-zorro-antd-upload_js"), __webpack_require__.e("default-node_modules_lodash_lodash_js"), __webpack_require__.e("default-node_modules_ng-zorro-antd___ivy_ngcc___fesm2015_ng-zorro-antd-tabs_js"), __webpack_require__.e("default-node_modules_ng-zorro-antd___ivy_ngcc___fesm2015_ng-zorro-antd-switch_js"), __webpack_require__.e("default-node_modules_ng-zorro-antd___ivy_ngcc___fesm2015_ng-zorro-antd-tree-select_js"), __webpack_require__.e("src_app_category_category_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../category/category.module */ 26914)).then((m) => m.CategoryModule),
            },
            {
                path: 'feed',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ng-zorro-antd___ivy_ngcc___fesm2015_ng-zorro-antd-breadcrumb_js-node_mod-63a715"), __webpack_require__.e("default-node_modules_ng-zorro-antd___ivy_ngcc___fesm2015_ng-zorro-antd-pagination_js"), __webpack_require__.e("default-node_modules_ng-zorro-antd___ivy_ngcc___fesm2015_ng-zorro-antd-radio_js"), __webpack_require__.e("default-node_modules_ng-zorro-antd___ivy_ngcc___fesm2015_ng-zorro-antd-avatar_js"), __webpack_require__.e("default-node_modules_ng-zorro-antd___ivy_ngcc___fesm2015_ng-zorro-antd-tag_js-node_modules_ng-4d5cc9"), __webpack_require__.e("default-node_modules_ng-zorro-antd___ivy_ngcc___fesm2015_ng-zorro-antd-list_js"), __webpack_require__.e("default-node_modules_ng-zorro-antd___ivy_ngcc___fesm2015_ng-zorro-antd-date-picker_js"), __webpack_require__.e("default-node_modules_ng-zorro-antd___ivy_ngcc___fesm2015_ng-zorro-antd-badge_js"), __webpack_require__.e("default-node_modules_ng-zorro-antd___ivy_ngcc___fesm2015_ng-zorro-antd-divider_js-node_module-212d78"), __webpack_require__.e("default-node_modules_ng-zorro-antd___ivy_ngcc___fesm2015_ng-zorro-antd-rate_js"), __webpack_require__.e("src_app_feed_feed_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../feed/feed.module */ 5628)).then((m) => m.FeedModule),
            },
            {
                path: 'reviews',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ng-zorro-antd___ivy_ngcc___fesm2015_ng-zorro-antd-breadcrumb_js-node_mod-63a715"), __webpack_require__.e("default-node_modules_ng-zorro-antd___ivy_ngcc___fesm2015_ng-zorro-antd-pagination_js"), __webpack_require__.e("default-node_modules_ng-zorro-antd___ivy_ngcc___fesm2015_ng-zorro-antd-avatar_js"), __webpack_require__.e("default-node_modules_ng-zorro-antd___ivy_ngcc___fesm2015_ng-zorro-antd-tag_js-node_modules_ng-4d5cc9"), __webpack_require__.e("default-node_modules_ng-zorro-antd___ivy_ngcc___fesm2015_ng-zorro-antd-list_js"), __webpack_require__.e("default-node_modules_ng-zorro-antd___ivy_ngcc___fesm2015_ng-zorro-antd-badge_js"), __webpack_require__.e("default-node_modules_ng-zorro-antd___ivy_ngcc___fesm2015_ng-zorro-antd-divider_js-node_module-212d78"), __webpack_require__.e("default-node_modules_ng-zorro-antd___ivy_ngcc___fesm2015_ng-zorro-antd-rate_js"), __webpack_require__.e("src_app_review_review_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../review/review.module */ 83682)).then((m) => m.ReviewModule),
            },
            {
                path: 'ingredients',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ng-zorro-antd___ivy_ngcc___fesm2015_ng-zorro-antd-breadcrumb_js-node_mod-63a715"), __webpack_require__.e("default-node_modules_ng-zorro-antd___ivy_ngcc___fesm2015_ng-zorro-antd-pagination_js"), __webpack_require__.e("default-node_modules_ng-zorro-antd___ivy_ngcc___fesm2015_ng-zorro-antd-radio_js"), __webpack_require__.e("default-node_modules_ng-zorro-antd___ivy_ngcc___fesm2015_ng-zorro-antd-table_js"), __webpack_require__.e("default-node_modules_lodash_lodash_js"), __webpack_require__.e("default-node_modules_ng-zorro-antd___ivy_ngcc___fesm2015_ng-zorro-antd-tabs_js"), __webpack_require__.e("default-node_modules_ng-zorro-antd___ivy_ngcc___fesm2015_ng-zorro-antd-input-number_js"), __webpack_require__.e("default-node_modules_ng-zorro-antd___ivy_ngcc___fesm2015_ng-zorro-antd-collapse_js"), __webpack_require__.e("src_app_ingredient_ingredient_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../ingredient/ingredient.module */ 95122)).then((m) => m.IngredientModule),
            },
            {
                path: 'functions',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ng-zorro-antd___ivy_ngcc___fesm2015_ng-zorro-antd-breadcrumb_js-node_mod-63a715"), __webpack_require__.e("default-node_modules_ng-zorro-antd___ivy_ngcc___fesm2015_ng-zorro-antd-pagination_js"), __webpack_require__.e("default-node_modules_ng-zorro-antd___ivy_ngcc___fesm2015_ng-zorro-antd-radio_js"), __webpack_require__.e("default-node_modules_ng-zorro-antd___ivy_ngcc___fesm2015_ng-zorro-antd-table_js"), __webpack_require__.e("default-node_modules_ng-zorro-antd___ivy_ngcc___fesm2015_ng-zorro-antd-upload_js"), __webpack_require__.e("default-node_modules_lodash_lodash_js"), __webpack_require__.e("default-node_modules_ng-zorro-antd___ivy_ngcc___fesm2015_ng-zorro-antd-tabs_js"), __webpack_require__.e("src_app_function_function_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../function/function.module */ 4219)).then((m) => m.FunctionModule),
            },
            {
                path: 'cautions',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ng-zorro-antd___ivy_ngcc___fesm2015_ng-zorro-antd-breadcrumb_js-node_mod-63a715"), __webpack_require__.e("default-node_modules_ng-zorro-antd___ivy_ngcc___fesm2015_ng-zorro-antd-pagination_js"), __webpack_require__.e("default-node_modules_ng-zorro-antd___ivy_ngcc___fesm2015_ng-zorro-antd-radio_js"), __webpack_require__.e("default-node_modules_ng-zorro-antd___ivy_ngcc___fesm2015_ng-zorro-antd-table_js"), __webpack_require__.e("default-node_modules_ng-zorro-antd___ivy_ngcc___fesm2015_ng-zorro-antd-upload_js"), __webpack_require__.e("default-node_modules_lodash_lodash_js"), __webpack_require__.e("default-node_modules_ng-zorro-antd___ivy_ngcc___fesm2015_ng-zorro-antd-tabs_js"), __webpack_require__.e("src_app_caution_caution_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../caution/caution.module */ 57805)).then((m) => m.CautionModule),
            },
            {
                path: 'posts',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ng-zorro-antd___ivy_ngcc___fesm2015_ng-zorro-antd-breadcrumb_js-node_mod-63a715"), __webpack_require__.e("default-node_modules_ng-zorro-antd___ivy_ngcc___fesm2015_ng-zorro-antd-pagination_js"), __webpack_require__.e("default-node_modules_ng-zorro-antd___ivy_ngcc___fesm2015_ng-zorro-antd-radio_js"), __webpack_require__.e("default-node_modules_ng-zorro-antd___ivy_ngcc___fesm2015_ng-zorro-antd-avatar_js"), __webpack_require__.e("default-node_modules_ng-zorro-antd___ivy_ngcc___fesm2015_ng-zorro-antd-tag_js-node_modules_ng-4d5cc9"), __webpack_require__.e("default-node_modules_ng-zorro-antd___ivy_ngcc___fesm2015_ng-zorro-antd-list_js"), __webpack_require__.e("default-node_modules_ng-zorro-antd___ivy_ngcc___fesm2015_ng-zorro-antd-date-picker_js"), __webpack_require__.e("default-node_modules_ng-zorro-antd___ivy_ngcc___fesm2015_ng-zorro-antd-badge_js"), __webpack_require__.e("default-node_modules_ng-zorro-antd___ivy_ngcc___fesm2015_ng-zorro-antd-divider_js-node_module-212d78"), __webpack_require__.e("default-node_modules_ng-zorro-antd___ivy_ngcc___fesm2015_ng-zorro-antd-rate_js"), __webpack_require__.e("src_app_feed_feed_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../feed/feed.module */ 5628)).then((m) => m.FeedModule),
            },
            {
                path: 'live-streams',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ng-zorro-antd___ivy_ngcc___fesm2015_ng-zorro-antd-breadcrumb_js-node_mod-63a715"), __webpack_require__.e("default-node_modules_ng-zorro-antd___ivy_ngcc___fesm2015_ng-zorro-antd-upload_js"), __webpack_require__.e("default-node_modules_ng-zorro-antd___ivy_ngcc___fesm2015_ng-zorro-antd-avatar_js"), __webpack_require__.e("default-node_modules_ng-zorro-antd___ivy_ngcc___fesm2015_ng-zorro-antd-modal_js"), __webpack_require__.e("default-node_modules_ng-zorro-antd___ivy_ngcc___fesm2015_ng-zorro-antd-list_js"), __webpack_require__.e("default-node_modules_ng-zorro-antd___ivy_ngcc___fesm2015_ng-zorro-antd-input-number_js"), __webpack_require__.e("src_app_live-stream_live-stream_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../live-stream/live-stream.module */ 56866)).then((m) => m.LiveStreamModule),
            },
            {
                path: 'users',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ng-zorro-antd___ivy_ngcc___fesm2015_ng-zorro-antd-breadcrumb_js-node_mod-63a715"), __webpack_require__.e("default-node_modules_ng-zorro-antd___ivy_ngcc___fesm2015_ng-zorro-antd-pagination_js"), __webpack_require__.e("default-node_modules_ng-zorro-antd___ivy_ngcc___fesm2015_ng-zorro-antd-radio_js"), __webpack_require__.e("default-node_modules_ng-zorro-antd___ivy_ngcc___fesm2015_ng-zorro-antd-table_js"), __webpack_require__.e("default-node_modules_ng-zorro-antd___ivy_ngcc___fesm2015_ng-zorro-antd-upload_js"), __webpack_require__.e("default-node_modules_lodash_lodash_js"), __webpack_require__.e("default-node_modules_ng-zorro-antd___ivy_ngcc___fesm2015_ng-zorro-antd-modal_js"), __webpack_require__.e("default-node_modules_ng-zorro-antd___ivy_ngcc___fesm2015_ng-zorro-antd-tag_js-node_modules_ng-4d5cc9"), __webpack_require__.e("default-node_modules_ng-zorro-antd___ivy_ngcc___fesm2015_ng-zorro-antd-switch_js"), __webpack_require__.e("default-node_modules_ng-zorro-antd___ivy_ngcc___fesm2015_ng-zorro-antd-date-picker_js"), __webpack_require__.e("default-node_modules_ng-zorro-antd___ivy_ngcc___fesm2015_ng-zorro-antd-divider_js-node_module-212d78"), __webpack_require__.e("default-node_modules_xlsx_xlsx_js"), __webpack_require__.e("default-node_modules_ng-zorro-antd___ivy_ngcc___fesm2015_ng-zorro-antd-collapse_js"), __webpack_require__.e("src_app_user_user_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../user/user.module */ 88524)).then((m) => m.UserModule),
            },
        ],
    },
];
class PagesRoutingModule {
}
PagesRoutingModule.ɵfac = function PagesRoutingModule_Factory(t) { return new (t || PagesRoutingModule)(); };
PagesRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: PagesRoutingModule });
PagesRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](PagesRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 37664:
/*!******************************************!*\
  !*** ./src/app/pages/pages.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PagesComponent": () => (/* binding */ PagesComponent)
/* harmony export */ });
/* harmony import */ var _graphql_graphql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../graphql/graphql */ 44092);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/layout */ 66883);
/* harmony import */ var ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/layout */ 82681);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/icon */ 35203);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/drawer */ 88346);
/* harmony import */ var ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/menu */ 3026);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 70325);










function PagesComponent_ng_container_1_nz_sider_3_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nz-sider", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("nzCollapsedChange", function PagesComponent_ng_container_1_nz_sider_3_Template_nz_sider_nzCollapsedChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r5.isCollapsed = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](1, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzCollapsed", ctx_r4.isCollapsed)("nzTrigger", null);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r2);
} }
function PagesComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, PagesComponent_ng_container_1_nz_sider_3_Template, 2, 3, "nz-sider", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", ctx_r0.isCollapsed);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", !ctx_r0.isCollapsed);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r0.isMobile);
} }
function PagesComponent_nz_drawer_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0, 12);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r2);
} }
const _c0 = function () { return { padding: 0 }; };
function PagesComponent_nz_drawer_2_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nz-drawer", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("nzOnClose", function PagesComponent_nz_drawer_2_Template_nz_drawer_nzOnClose_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r8.isCollapsed = true; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, PagesComponent_nz_drawer_2_ng_container_1_Template, 1, 1, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzVisible", !ctx_r1.isCollapsed)("nzClosable", false)("nzBodyStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](3, _c0));
} }
const _c1 = function () { return { deleted: false }; };
function PagesComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Reviewty Admin");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ul", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "li", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "li", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Welcome");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "li", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "li", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](17, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "li", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](21, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "li", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "li", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](27, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "li", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](29, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "li", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](34, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "li", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](38, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "li", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](42, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "li", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](46, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "li", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "a", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](50, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "li", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](54, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "li", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](58, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "li", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](60, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "li", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](65, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "li", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "a", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](69, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "li", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](71, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "li", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "a", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](76, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "li", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "a", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](79, "Video");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "li", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "a", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](82);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](83, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "li", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](85, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "li", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](89, "Banners");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "li", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](91, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "li", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "a", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](95);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](96, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "li", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "a", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](99);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](100, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzInlineCollapsed", ctx_r3.isCollapsed);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](17, 23, "common.event"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](21, 25, "common.tip"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](27, 27, "common.event"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("nzTitle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](29, 29, "common.product"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](34, 31, "common.product"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](38, 33, "product.request"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](42, 35, "common.brand"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](46, 37, "common.category"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](50, 39, "common.ingredient"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](54, 41, "common.function"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](58, 43, "common.caution"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("nzTitle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](60, 45, "common.review"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](65, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](65, 47, "common.review"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](69, 49, "review.report"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("nzTitle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](71, 51, "common.feed"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](76, 53, "common.post"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](83, 55, "review.report"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("nzTitle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](85, 57, "common.live_stream"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("nzTitle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](91, 59, "common.user"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](96, 61, "common.user"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](100, 63, "common.shop"));
} }
class PagesComponent {
    constructor(breakpointObserver) {
        this.breakpointObserver = breakpointObserver;
        this.isCollapsed = false;
        this.ReviewStatus = _graphql_graphql__WEBPACK_IMPORTED_MODULE_0__.ReviewStatus;
        this.breakpointObserver.observe('(max-width: 767px)').subscribe((value) => {
            this.isMobile = value.matches;
            if (this.isMobile) {
                this.isCollapsed = true;
            }
        });
    }
    ngOnInit() { }
    ngOnDestroy() {
        this.breakpointObserver.ngOnDestroy();
    }
}
PagesComponent.ɵfac = function PagesComponent_Factory(t) { return new (t || PagesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__.BreakpointObserver)); };
PagesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PagesComponent, selectors: [["app-pages"]], decls: 12, vars: 3, consts: [[1, "app-layout"], [4, "ngIf"], ["nzPlacement", "left", 3, "nzVisible", "nzClosable", "nzBodyStyle", "nzOnClose", 4, "ngIf"], ["menuTemplate", ""], [1, "w-100"], [1, "app-header"], [1, "header-trigger", 3, "click"], ["nz-icon", "", 1, "trigger", 3, "nzType"], [2, "width", "256px", "overflow", "hidden", "flex", "0 0 256px", "max-width", "256px", "min-width", "256px", 3, "hidden"], [2, "width", "80px", "overflow", "hidden", "flex", "0 0 80px", "max-width", "80px", "min-width", "80px", 3, "hidden"], ["class", "menu-sidebar", "nzCollapsible", "", "nzWidth", "256px", "nzBreakpoint", "md", 3, "nzCollapsed", "nzTrigger", "nzCollapsedChange", 4, "ngIf"], ["nzCollapsible", "", "nzWidth", "256px", "nzBreakpoint", "md", 1, "menu-sidebar", 3, "nzCollapsed", "nzTrigger", "nzCollapsedChange"], [3, "ngTemplateOutlet"], ["nzPlacement", "left", 3, "nzVisible", "nzClosable", "nzBodyStyle", "nzOnClose"], [3, "ngTemplateOutlet", 4, "nzDrawerContent"], [1, "sidebar-logo"], ["href", "https://ng.ant.design/", "target", "_blank"], ["src", "https://ng.ant.design/assets/img/logo.svg", "alt", "logo"], [1, "ant-pro-sider"], ["nz-menu", "", "nzTheme", "dark", "nzMode", "inline", 3, "nzInlineCollapsed"], ["nz-submenu", "", "nzOpen", "", "nzTitle", "Dashboard", "nzIcon", "dashboard"], ["nz-menu-item", "", "nzMatchRouter", ""], ["routerLink", "/welcome"], ["nz-submenu", "", "nzOpen", "", "nzTitle", "Content", "nzIcon", "bulb"], ["nz-menu-item", "", "nzMatchRouter", "", "nzMatchRouterExact", ""], ["routerLink", "/events"], ["routerLink", "/tips"], ["nz-submenu", "", "nzOpen", "", "nzTitle", "Shopping", "nzIcon", "shopping"], ["routerLink", "/events/orders"], ["nz-submenu", "", "nzOpen", "", "nzIcon", "database", 3, "nzTitle"], ["routerLink", "/products"], ["routerLink", "/products/requests"], ["routerLink", "/brands"], ["routerLink", "/categories"], ["routerLink", "/ingredients"], ["routerLink", "/functions"], ["routerLink", "/cautions"], ["nz-submenu", "", "nzOpen", "", "nzIcon", "star", 3, "nzTitle"], ["routerLink", "/reviews", 3, "queryParams"], ["routerLink", "/reviews/reports"], ["nz-submenu", "", "nzOpen", "", "nzIcon", "container", 3, "nzTitle"], ["routerLink", "/posts"], ["routerLink", "/posts/videos"], ["routerLink", "/posts/reports"], ["nz-submenu", "", "nzOpen", "", "nzIcon", "video-camera", 3, "nzTitle"], ["routerLink", "/live-streams/banners"], ["nz-submenu", "", "nzOpen", "", "nzIcon", "user", 3, "nzTitle"], ["routerLink", "/users"], ["routerLink", "/users/shops"]], template: function PagesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nz-layout", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, PagesComponent_ng_container_1_Template, 4, 3, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, PagesComponent_nz_drawer_2_Template, 2, 4, "nz-drawer", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, PagesComponent_ng_template_3_Template, 101, 66, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "nz-layout", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "nz-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PagesComponent_Template_span_click_8_listener() { return ctx.isCollapsed = !ctx.isCollapsed; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "nz-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isMobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isMobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzType", ctx.isCollapsed ? "menu-unfold" : "menu-fold");
    } }, directives: [ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_3__.NzLayoutComponent, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_3__.NzHeaderComponent, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_5__.NzIconDirective, ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_3__.NzContentComponent, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterOutlet, ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_3__.NzSiderComponent, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgTemplateOutlet, ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_7__.NzDrawerComponent, ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_7__.NzDrawerContentDirective, ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_8__.NzMenuDirective, ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_8__.NzSubMenuComponent, ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_8__.NzMenuItemDirective, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLinkWithHref], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslatePipe], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.app-layout[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  width: 100%;\n}\n\n.menu-sidebar[_ngcontent-%COMP%] {\n  box-shadow: 2px 0 6px rgba(0, 21, 41, 0.35);\n  position: fixed;\n  top: 0;\n  left: 0;\n  height: 100%;\n  z-index: 10;\n}\n\n.header-trigger[_ngcontent-%COMP%] {\n  height: 64px;\n  padding: 20px 24px;\n  font-size: 20px;\n  cursor: pointer;\n  transition: all 0.3s, padding 0s;\n}\n\n.trigger[_ngcontent-%COMP%]:hover {\n  color: #1890ff;\n}\n\n.sidebar-logo[_ngcontent-%COMP%] {\n  position: relative;\n  height: 64px;\n  padding-left: 24px;\n  overflow: hidden;\n  line-height: 64px;\n  background: #001529;\n  transition: all 0.3s;\n}\n\n.sidebar-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: inline-block;\n  height: 32px;\n  width: 32px;\n  vertical-align: middle;\n}\n\n.sidebar-logo[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin: 0 0 0 20px;\n  color: #fff;\n  font-weight: 600;\n  font-size: 14px;\n  font-family: Avenir, Helvetica Neue, Arial, Helvetica, sans-serif;\n  vertical-align: middle;\n}\n\nnz-header[_ngcontent-%COMP%] {\n  padding: 0;\n  width: 100%;\n  z-index: 2;\n}\n\n.app-header[_ngcontent-%COMP%] {\n  position: relative;\n  height: 64px;\n  padding: 0;\n  background: #fff;\n  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);\n}\n\nnz-content[_ngcontent-%COMP%] {\n  margin: 24px;\n}\n\n.inner-content[_ngcontent-%COMP%] {\n  padding: 24px;\n  background: #fff;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLGtDQUFBO0VBQ0EsbUNBQUE7RUFDQSxrQ0FBQTtBQUNGOztBQUVBO0VBQ0UsaUJBQUE7RUFDQSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSwyQ0FBQTtFQUNBLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGdDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7QUFDRjs7QUFFQTtFQUNFLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUVBQUE7RUFDQSxzQkFBQTtBQUNGOztBQUVBO0VBQ0UsVUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyQ0FBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQUNGIiwiZmlsZSI6InBhZ2VzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbn1cblxuLmFwcC1sYXlvdXQge1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5tZW51LXNpZGViYXIge1xuICBib3gtc2hhZG93OiAycHggMCA2cHggcmdiYSgwLCAyMSwgNDEsIDAuMzUpO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB6LWluZGV4OiAxMDtcbn1cblxuLmhlYWRlci10cmlnZ2VyIHtcbiAgaGVpZ2h0OiA2NHB4O1xuICBwYWRkaW5nOiAyMHB4IDI0cHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcywgcGFkZGluZyAwcztcbn1cblxuLnRyaWdnZXI6aG92ZXIge1xuICBjb2xvcjogIzE4OTBmZjtcbn1cblxuLnNpZGViYXItbG9nbyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiA2NHB4O1xuICBwYWRkaW5nLWxlZnQ6IDI0cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGxpbmUtaGVpZ2h0OiA2NHB4O1xuICBiYWNrZ3JvdW5kOiAjMDAxNTI5O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbn1cblxuLnNpZGViYXItbG9nbyBpbWcge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGhlaWdodDogMzJweDtcbiAgd2lkdGg6IDMycHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5zaWRlYmFyLWxvZ28gaDEge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbjogMCAwIDAgMjBweDtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC1mYW1pbHk6IEF2ZW5pciwgSGVsdmV0aWNhIE5ldWUsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbm56LWhlYWRlciB7XG4gIHBhZGRpbmc6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICB6LWluZGV4OiAyO1xufVxuXG4uYXBwLWhlYWRlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiA2NHB4O1xuICBwYWRkaW5nOiAwO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3gtc2hhZG93OiAwIDFweCA0cHggcmdiYSgwLCAyMSwgNDEsIDAuMDgpO1xufVxuXG5uei1jb250ZW50IHtcbiAgbWFyZ2luOiAyNHB4O1xufVxuXG4uaW5uZXItY29udGVudCB7XG4gIHBhZGRpbmc6IDI0cHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGhlaWdodDogMTAwJTtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ 18950:
/*!***************************************!*\
  !*** ./src/app/pages/pages.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PagesModule": () => (/* binding */ PagesModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/layout */ 82681);
/* harmony import */ var ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/menu */ 3026);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/icon */ 35203);
/* harmony import */ var ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/i18n */ 54523);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ 70325);
/* harmony import */ var _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ant-design/icons-angular/icons */ 53156);
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/cdk/layout */ 66883);
/* harmony import */ var ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/drawer */ 88346);
/* harmony import */ var _pages_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages-routing.module */ 39730);
/* harmony import */ var _pages_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages.component */ 37664);
/* harmony import */ var _icons_provider_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../icons-provider.module */ 21210);
/* harmony import */ var _product_resolvers_product_resolver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../product/resolvers/product.resolver */ 39220);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);

















const antDesignIcons = _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_4__;
const icons = Object.keys(antDesignIcons).map((key) => antDesignIcons[key]);
class PagesModule {
}
PagesModule.ɵfac = function PagesModule_Factory(t) { return new (t || PagesModule)(); };
PagesModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: PagesModule });
PagesModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ providers: [
        { provide: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_6__.NZ_I18N, useValue: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_6__.en_GB },
        { provide: ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_7__.NZ_ICONS, useValue: icons },
        _product_resolvers_product_resolver__WEBPACK_IMPORTED_MODULE_3__.ProductResolver,
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
            _pages_routing_module__WEBPACK_IMPORTED_MODULE_0__.PagesRoutingModule,
            _icons_provider_module__WEBPACK_IMPORTED_MODULE_2__.IconsProviderModule,
            ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_9__.NzLayoutModule,
            ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_10__.NzMenuModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslateModule.forChild(),
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_13__.LayoutModule,
            ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_14__.NzDrawerModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](PagesModule, { declarations: [_pages_component__WEBPACK_IMPORTED_MODULE_1__.PagesComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
        _pages_routing_module__WEBPACK_IMPORTED_MODULE_0__.PagesRoutingModule,
        _icons_provider_module__WEBPACK_IMPORTED_MODULE_2__.IconsProviderModule,
        ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_9__.NzLayoutModule,
        ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_10__.NzMenuModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslateModule, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_13__.LayoutModule,
        ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_14__.NzDrawerModule] }); })();


/***/ }),

/***/ 39220:
/*!*******************************************************!*\
  !*** ./src/app/product/resolvers/product.resolver.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductResolver": () => (/* binding */ ProductResolver)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 33927);
/* harmony import */ var _graphql_graphql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../graphql/graphql */ 44092);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);





class ProductResolver {
    constructor(getProductDetailsGQL, router) {
        this.getProductDetailsGQL = getProductDetailsGQL;
        this.router = router;
    }
    resolve(route, state) {
        const id = parseInt(route.paramMap.get('id') || '', 10);
        if (id) {
            return this.getProductDetailsGQL
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
                if ((_a = result.data) === null || _a === void 0 ? void 0 : _a.product) {
                    return result.data.product;
                }
                else {
                    this.router.navigateByUrl('/exception/404');
                    return undefined;
                }
            }));
        }
        else {
            return {
                status: _graphql_graphql__WEBPACK_IMPORTED_MODULE_0__.ProductStatus.Active,
                translations: [
                    {
                        imageDescription: '<html><head><style>img {width: 100%; height: auto;} iframe { width: 96vw; height: calc(96vw / 1.77); } p {margin: 0px; padding: 0px;}</style></head><body></body></html>',
                    },
                ],
            };
        }
    }
}
ProductResolver.ɵfac = function ProductResolver_Factory(t) { return new (t || ProductResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_graphql_graphql__WEBPACK_IMPORTED_MODULE_0__.GetProductDetailsGQL), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router)); };
ProductResolver.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: ProductResolver, factory: ProductResolver.ɵfac });


/***/ })

}]);
//# sourceMappingURL=src_app_pages_pages_module_ts.js.map