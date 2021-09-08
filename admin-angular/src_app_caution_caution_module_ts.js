"use strict";
(self["webpackChunkadmin_angular"] = self["webpackChunkadmin_angular"] || []).push([["src_app_caution_caution_module_ts"],{

/***/ 93008:
/*!***************************************************!*\
  !*** ./src/app/caution/caution-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CautionRoutingModule": () => (/* binding */ CautionRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _pages_caution_details_caution_details_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/caution-details/caution-details.component */ 11413);
/* harmony import */ var _pages_caution_list_caution_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/caution-list/caution-list.component */ 12960);
/* harmony import */ var _resolvers_caution_resolver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resolvers/caution.resolver */ 98115);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);






const routes = [
    {
        path: 'new',
        resolve: {
            caution: _resolvers_caution_resolver__WEBPACK_IMPORTED_MODULE_2__.CautionResolver,
        },
        component: _pages_caution_details_caution_details_component__WEBPACK_IMPORTED_MODULE_0__.CautionDetailsComponent,
    },
    {
        path: ':id',
        resolve: {
            caution: _resolvers_caution_resolver__WEBPACK_IMPORTED_MODULE_2__.CautionResolver,
        },
        component: _pages_caution_details_caution_details_component__WEBPACK_IMPORTED_MODULE_0__.CautionDetailsComponent,
    },
    {
        path: '',
        pathMatch: 'full',
        component: _pages_caution_list_caution_list_component__WEBPACK_IMPORTED_MODULE_1__.CautionListComponent,
    },
];
class CautionRoutingModule {
}
CautionRoutingModule.ɵfac = function CautionRoutingModule_Factory(t) { return new (t || CautionRoutingModule)(); };
CautionRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: CautionRoutingModule });
CautionRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](CautionRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] }); })();


/***/ }),

/***/ 57805:
/*!*******************************************!*\
  !*** ./src/app/caution/caution.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CautionModule": () => (/* binding */ CautionModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 70325);
/* harmony import */ var ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/page-header */ 92443);
/* harmony import */ var ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/breadcrumb */ 17401);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/button */ 56079);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/icon */ 35203);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/input */ 29422);
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/card */ 47108);
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/table */ 4316);
/* harmony import */ var ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/layout */ 82681);
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/form */ 32734);
/* harmony import */ var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/message */ 91804);
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/select */ 61532);
/* harmony import */ var ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-zorro-antd/upload */ 40896);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common/http */ 53882);
/* harmony import */ var ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ng-zorro-antd/tabs */ 97768);
/* harmony import */ var _caution_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./caution-routing.module */ 93008);
/* harmony import */ var _pages_caution_list_caution_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/caution-list/caution-list.component */ 12960);
/* harmony import */ var _pages_caution_details_caution_details_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/caution-details/caution-details.component */ 11413);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared.module */ 44466);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);























class CautionModule {
}
CautionModule.ɵfac = function CautionModule_Factory(t) { return new (t || CautionModule)(); };
CautionModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: CautionModule });
CautionModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _caution_routing_module__WEBPACK_IMPORTED_MODULE_0__.CautionRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule.forChild(),
            ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_8__.NzPageHeaderModule,
            ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_9__.NzBreadCrumbModule,
            ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_10__.NzButtonModule,
            ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_11__.NzIconModule,
            ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_12__.NzInputModule,
            ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_13__.NzCardModule,
            ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_14__.NzTableModule,
            ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_15__.NzMessageModule,
            ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_16__.NzLayoutModule,
            ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_17__.NzFormModule,
            ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_18__.NzSelectModule,
            ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_19__.NzUploadModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_20__.HttpClientModule,
            ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_21__.NzTabsModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](CautionModule, { declarations: [_pages_caution_list_caution_list_component__WEBPACK_IMPORTED_MODULE_1__.CautionListComponent, _pages_caution_details_caution_details_component__WEBPACK_IMPORTED_MODULE_2__.CautionDetailsComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _caution_routing_module__WEBPACK_IMPORTED_MODULE_0__.CautionRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule, ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_8__.NzPageHeaderModule,
        ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_9__.NzBreadCrumbModule,
        ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_10__.NzButtonModule,
        ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_11__.NzIconModule,
        ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_12__.NzInputModule,
        ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_13__.NzCardModule,
        ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_14__.NzTableModule,
        ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_15__.NzMessageModule,
        ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_16__.NzLayoutModule,
        ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_17__.NzFormModule,
        ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_18__.NzSelectModule,
        ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_19__.NzUploadModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_20__.HttpClientModule,
        ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_21__.NzTabsModule] }); })();


/***/ }),

/***/ 11413:
/*!****************************************************************************!*\
  !*** ./src/app/caution/pages/caution-details/caution-details.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CautionDetailsComponent": () => (/* binding */ CautionDetailsComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 79441);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 81134);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 22663);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 33927);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 85816);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ 202);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _graphql_graphql__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../graphql/graphql */ 44092);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/message */ 91804);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/core */ 70325);
/* harmony import */ var _shared_services_language_language_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/services/language/language.service */ 14701);
/* harmony import */ var ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/page-header */ 92443);
/* harmony import */ var ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/breadcrumb */ 17401);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 29910);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/icon */ 35203);
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-zorro-antd/form */ 32734);
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng-zorro-antd/card */ 47108);
/* harmony import */ var ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ng-zorro-antd/tabs */ 97768);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ng-zorro-antd/grid */ 95039);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ng-zorro-antd/input */ 29422);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ng-zorro-antd/button */ 56079);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 94772);
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ng-zorro-antd/select */ 61532);
/* harmony import */ var _shared_pipes_emoji_flag_from_language_code_emoji_flag_from_language_code_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/pipes/emoji-flag-from-language-code/emoji-flag-from-language-code.pipe */ 98877);


























function CautionDetailsComponent_nz_tab_14_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](1, "emojiFlagFromLanguageCode");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "lowercase");
} if (rf & 2) {
    const translation_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](1, 2, translation_r1.value.language), " ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 4, "language." + _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 6, translation_r1.value.language)), "");
} }
const _c0 = function () { return { minRows: 5, maxRows: 10 }; };
function CautionDetailsComponent_nz_tab_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "nz-tab", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, CautionDetailsComponent_nz_tab_14_ng_template_1_Template, 4, 8, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "nz-form-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "nz-form-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "nz-form-control", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "nz-select", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "nz-option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "nz-option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](14, "nz-option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "nz-form-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "nz-form-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](19, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "nz-form-control", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](21, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](22, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "nz-form-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "nz-form-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](26, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "nz-form-control", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](28, "textarea", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r2 = ctx.index;
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](2);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroupName", i_r2)("nzTitle", _r3)("nzClosable", ctx_r0.translations.controls.length > 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](6, 15, "common.language"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("nzErrorTip", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](8, 17, "ui.form.should_not_be_empty"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzValue", ctx_r0.LanguageCode.Vi)("nzLabel", "\uD83C\uDDFB\uD83C\uDDF3 " + _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](11, 19, "language.vi"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzValue", ctx_r0.LanguageCode.En)("nzLabel", "\uD83C\uDDFA\uD83C\uDDF8 " + _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](13, 21, "language.en"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzValue", ctx_r0.LanguageCode.Ko)("nzLabel", "\uD83C\uDDF0\uD83C\uDDF7 " + _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](15, 23, "language.ko"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](19, 25, "caution.name"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("nzErrorTip", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](21, 27, "ui.form.should_not_be_empty"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](26, 29, "caution.description"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzAutosize", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](31, _c0));
} }
const _c1 = function () { return []; };
class CautionDetailsComponent {
    constructor(fb, route, location, createCautionGQL, updateCautionGQL, msgService, translateService, languageService) {
        this.fb = fb;
        this.route = route;
        this.location = location;
        this.createCautionGQL = createCautionGQL;
        this.updateCautionGQL = updateCautionGQL;
        this.msgService = msgService;
        this.translateService = translateService;
        this.languageService = languageService;
        this.LanguageCode = _graphql_graphql__WEBPACK_IMPORTED_MODULE_1__.LanguageCode;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
        this.loading = false;
        this.validateForm = this.fb.group({
            translations: this.fb.array([], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required),
        });
    }
    ngOnInit() {
        this.route.data
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.destroy$), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)((value) => value.caution))
            .subscribe((caution) => {
            var _a;
            this.caution = caution;
            this.validateForm.setControl('translations', this.fb.array(this.languageService
                .sort([...(((_a = this.caution) === null || _a === void 0 ? void 0 : _a.translations) || [])])
                .map((translation) => {
                return this.fb.group({
                    id: [translation.id],
                    name: [translation.name, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
                    language: [translation.language, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
                    description: [translation.description],
                });
            }) || [], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required));
        });
    }
    get translations() {
        return this.validateForm.get('translations');
    }
    addTab() {
        const languages = new Set([
            _graphql_graphql__WEBPACK_IMPORTED_MODULE_1__.LanguageCode.Vi,
            _graphql_graphql__WEBPACK_IMPORTED_MODULE_1__.LanguageCode.En,
            _graphql_graphql__WEBPACK_IMPORTED_MODULE_1__.LanguageCode.Ko,
        ]);
        this.translations.controls.forEach((control) => languages.delete(control.value.language));
        const language = languages.size === 0 ? _graphql_graphql__WEBPACK_IMPORTED_MODULE_1__.LanguageCode.Vi : languages.values().next().value;
        this.translations.push(this.fb.group({
            id: [],
            name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            language: [language, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            description: [],
        }));
    }
    removeTab(index) {
        this.translations.removeAt(index);
    }
    submit() {
        var _a;
        Object.values(this.validateForm.controls).forEach((control) => {
            control.markAsDirty();
            control.updateValueAndValidity();
        });
        if (this.validateForm.invalid) {
            return;
        }
        this.loading = true;
        (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.of)((_a = this.caution) === null || _a === void 0 ? void 0 : _a.id)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.destroy$), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.mergeMap)((id) => {
            var _a, _b, _c;
            if (id) {
                const data = {
                    translations: {
                        create: (_a = this.translations.value) === null || _a === void 0 ? void 0 : _a.filter((translation) => !translation.id).map((translation) => lodash__WEBPACK_IMPORTED_MODULE_0___default().omit(translation, ['id'])),
                        set: (_b = this.translations.value) === null || _b === void 0 ? void 0 : _b.filter((translation) => translation.id),
                    },
                };
                return this.updateCautionGQL.mutate({
                    where: {
                        id,
                    },
                    data,
                });
            }
            else {
                const data = {
                    translations: {
                        create: (_c = this.translations.value) === null || _c === void 0 ? void 0 : _c.map((translation) => lodash__WEBPACK_IMPORTED_MODULE_0___default().omit(translation, ['id'])),
                    },
                };
                return this.createCautionGQL.mutate({
                    data,
                });
            }
        }))
            .subscribe(({ errors, data }) => {
            var _a, _b;
            if (errors) {
                this.msgService.error(this.translateService.instant(`caution.${((_a = this.caution) === null || _a === void 0 ? void 0 : _a.id) ? 'update' : 'create'}_error`));
            }
            if (data) {
                this.msgService.success(this.translateService.instant(`caution.${((_b = this.caution) === null || _b === void 0 ? void 0 : _b.id) ? 'update' : 'create'}_success`));
                this.location.back();
            }
            this.loading = false;
        }, () => {
            var _a;
            this.msgService.error(this.translateService.instant(`caution.${((_a = this.caution) === null || _a === void 0 ? void 0 : _a.id) ? 'update' : 'create'}_error`));
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
CautionDetailsComponent.ɵfac = function CautionDetailsComponent_Factory(t) { return new (t || CautionDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_12__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_graphql_graphql__WEBPACK_IMPORTED_MODULE_1__.CreateCautionGQL), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_graphql_graphql__WEBPACK_IMPORTED_MODULE_1__.UpdateCautionGQL), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_13__.NzMessageService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_shared_services_language_language_service__WEBPACK_IMPORTED_MODULE_2__.LanguageService)); };
CautionDetailsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: CautionDetailsComponent, selectors: [["app-caution-details"]], decls: 24, vars: 17, consts: [[1, "site-page-header"], ["nz-page-header-breadcrumb", ""], ["nz-icon", "", "nzType", "home"], ["routerLink", "/cautions"], ["nz-form", "", 3, "nzLayout", "formGroup", "ngSubmit"], [1, "mb-3"], ["nzType", "editable-card", "formArrayName", "translations", 3, "nzAdd", "nzClose"], ["nzClosable", "", 3, "formGroupName", "nzTitle", "nzClosable", 4, "ngFor", "ngForOf"], [1, "mt-2", "pb-4"], ["nz-button", "", "nzType", "primary", 3, "nzLoading"], ["nz-button", "", "type", "button", 1, "ml-2", 3, "nzDanger", "click"], ["nzClosable", "", 3, "formGroupName", "nzTitle", "nzClosable"], ["title", ""], ["nzHasFeedback", "", 3, "nzErrorTip"], ["formControlName", "language"], [3, "nzValue", "nzLabel"], ["nz-input", "", "formControlName", "name"], ["nzHasFeedback", ""], ["nz-input", "", "formControlName", "description", 3, "nzAutosize"]], template: function CautionDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "nz-page-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "nz-breadcrumb", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "nz-breadcrumb-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "nz-breadcrumb-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](7, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "nz-breadcrumb-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function CautionDetailsComponent_Template_form_ngSubmit_11_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "nz-card", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "nz-tabset", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("nzAdd", function CautionDetailsComponent_Template_nz_tabset_nzAdd_13_listener() { return ctx.addTab(); })("nzClose", function CautionDetailsComponent_Template_nz_tabset_nzClose_13_listener($event) { return ctx.removeTab($event.index); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, CautionDetailsComponent_nz_tab_14_Template, 29, 32, "nz-tab", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "nz-form-item", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "nz-form-control");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "nz-input-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](20, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CautionDetailsComponent_Template_button_click_21_listener() { return ctx.cancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](23, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](7, 9, "common.caution"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](((ctx.caution == null ? null : ctx.caution.translations) || _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](15, _c1))[0] == null ? null : ((ctx.caution == null ? null : ctx.caution.translations) || _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](16, _c1))[0].name);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzLayout", "vertical")("formGroup", ctx.validateForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.translations.controls);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzLoading", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](20, 11, (ctx.caution == null ? null : ctx.caution.id) ? "common.update" : "common.add"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzDanger", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](23, 13, "common.cancel"), " ");
    } }, directives: [ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_15__.NzPageHeaderComponent, ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_16__.NzBreadCrumbComponent, ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_15__.NzPageHeaderBreadcrumbDirective, ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_16__.NzBreadCrumbItemComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_17__["ɵNzTransitionPatchDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_18__.NzIconDirective, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterLinkWithHref, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_19__.NzFormDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_20__.NzCardComponent, ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_21__.NzTabSetComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormArrayName, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_22__.NzRowDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_19__.NzFormItemComponent, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_22__.NzColDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_19__.NzFormControlComponent, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_23__.NzInputGroupComponent, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_24__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_25__.NzWaveDirective, ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_21__.NzTabComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupName, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_19__.NzFormLabelComponent, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_26__.NzSelectComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_26__.NzOptionComponent, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_23__.NzInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_23__.NzAutosizeDirective], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslatePipe, _shared_pipes_emoji_flag_from_language_code_emoji_flag_from_language_code_pipe__WEBPACK_IMPORTED_MODULE_3__.EmojiFlagFromLanguageCodePipe, _angular_common__WEBPACK_IMPORTED_MODULE_12__.LowerCasePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXV0aW9uLWRldGFpbHMuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 12960:
/*!**********************************************************************!*\
  !*** ./src/app/caution/pages/caution-list/caution-list.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CautionListComponent": () => (/* binding */ CautionListComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 79441);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 22663);
/* harmony import */ var _graphql_graphql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../graphql/graphql */ 44092);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/message */ 91804);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 70325);
/* harmony import */ var ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/page-header */ 92443);
/* harmony import */ var ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/breadcrumb */ 17401);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 29910);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/icon */ 35203);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/button */ 56079);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 94772);
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/card */ 47108);
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/form */ 32734);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/input */ 29422);
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/table */ 4316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ 54364);




















function CautionListComponent_ng_template_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 1, "common.search"), " ");
} }
const _c0 = function (a1) { return ["/cautions", a1]; };
function CautionListComponent_tr_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const caution_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](caution_r3.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", caution_r3.translations[0] == null ? null : caution_r3.translations[0].name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", caution_r3.translations[0] == null ? null : caution_r3.translations[0].description, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](7, _c0, caution_r3.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](10, 5, "common.edit"));
} }
class CautionListComponent {
    constructor(fb, router, route, getFunctionListGQL, msgService, translateService) {
        this.fb = fb;
        this.router = router;
        this.route = route;
        this.getFunctionListGQL = getFunctionListGQL;
        this.msgService = msgService;
        this.translateService = translateService;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
        this.cautions = [];
        this.cautionsCount = 0;
        this.pageIndex = 1;
        this.pageSize = 10;
        this.loading = false;
        this.searchForm = this.fb.group({
            name: [null],
        });
    }
    ngOnInit() {
        this.route.queryParamMap
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.takeUntil)(this.destroy$))
            .subscribe((paramMap) => {
            var _a;
            this.pageIndex = parseInt(paramMap.get('page') || '1', 10);
            this.pageSize = parseInt(paramMap.get('size') || '10', 10);
            this.text = paramMap.get('text') || '';
            this.patchFormValue();
            if (this.dataSubscription) {
                (_a = this.dataQueryRef) === null || _a === void 0 ? void 0 : _a.refetch(this.getVariables());
            }
            else {
                this.dataQueryRef = this.getFunctionListGQL.watch(this.getVariables(), {
                    notifyOnNetworkStatusChange: true,
                    fetchPolicy: 'network-only',
                });
                this.dataSubscription = this.dataQueryRef.valueChanges
                    .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.takeUntil)(this.destroy$))
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
                        this.cautions = data.cautions;
                        this.cautionsCount = data.cautionsConnection.aggregate.count;
                    }
                });
            }
        });
    }
    getVariables() {
        var _a;
        return {
            first: this.pageSize,
            skip: (this.pageIndex - 1) * this.pageSize,
            where: {
                translationsSome: {
                    nameContains: ((_a = this.text) === null || _a === void 0 ? void 0 : _a.trim()) || undefined,
                },
            },
            orderBy: {
                id: _graphql_graphql__WEBPACK_IMPORTED_MODULE_0__.OrderBy.Desc,
            },
        };
    }
    patchFormValue() {
        if (this.text && this.searchForm.controls.name.untouched) {
            this.searchForm.patchValue({
                name: this.text,
            });
        }
    }
    handleQueryParamsChange(params) {
        this.router.navigate([], {
            queryParams: {
                page: params.pageIndex,
                size: params.pageSize,
            },
            relativeTo: this.route,
            queryParamsHandling: 'merge',
        });
    }
    handleSearch() {
        const searchData = this.searchForm.value;
        const text = searchData.name || undefined;
        this.router.navigate([], {
            queryParams: {
                text,
                page: 1,
            },
            relativeTo: this.route,
            queryParamsHandling: 'merge',
        });
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.unsubscribe();
    }
}
CautionListComponent.ɵfac = function CautionListComponent_Factory(t) { return new (t || CautionListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_graphql_graphql__WEBPACK_IMPORTED_MODULE_0__.GetCautionListGQL), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_6__.NzMessageService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateService)); };
CautionListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CautionListComponent, selectors: [["app-caution-list"]], decls: 38, vars: 27, consts: [[1, "site-page-header", 3, "nzTitle"], ["nz-page-header-breadcrumb", ""], ["nz-icon", "", "nzType", "home"], ["nz-button", "", "nzType", "primary", "routerLink", "/cautions/new"], ["nz-icon", "", "nzType", "plus", "nzTheme", "outline"], [1, "mb-3"], ["nz-form", "", 3, "formGroup", "ngSubmit"], [1, "row", "justify-content-lg-center"], [1, "col-12", "col-lg-6"], ["nzSearch", "", 3, "nzAddOnAfter"], ["formControlName", "name", "type", "text", "nz-input", "", 3, "placeholder"], ["suffixIconButton", ""], [1, "mb-4"], ["nzBordered", "", 3, "nzData", "nzFrontPagination", "nzTotal", "nzPageIndex", "nzPageSize", "nzLoading", "nzQueryParams"], [4, "ngFor", "ngForOf"], ["nz-button", "", "nzType", "primary", "type", "submit", "nzSearch", ""], ["nz-icon", "", "nzType", "search", "nzTheme", "outline"], [3, "routerLink"]], template: function CautionListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nz-page-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "nz-breadcrumb", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "nz-breadcrumb-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "nz-breadcrumb-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "nz-page-header-extra");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](13, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "nz-card", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function CautionListComponent_Template_form_ngSubmit_15_listener() { return ctx.handleSearch(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "nz-input-group", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](20, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, CautionListComponent_ng_template_21_Template, 4, 3, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "nz-card", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "nz-table", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("nzQueryParams", function CautionListComponent_Template_nz_table_nzQueryParams_24_listener($event) { return ctx.handleQueryParamsChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](31, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](34, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](37, CautionListComponent_tr_37_Template, 11, 9, "tr", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("nzTitle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 15, "common.caution"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 17, "common.caution"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](13, 19, "caution.create"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.searchForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzAddOnAfter", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](20, 21, "function.name"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzData", ctx.cautions)("nzFrontPagination", false)("nzTotal", ctx.cautionsCount)("nzPageIndex", ctx.pageIndex)("nzPageSize", ctx.pageSize)("nzLoading", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](31, 23, "caution.name"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](34, 25, "caution.description"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.cautions);
    } }, directives: [ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_8__.NzPageHeaderComponent, ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_9__.NzBreadCrumbComponent, ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_8__.NzPageHeaderBreadcrumbDirective, ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_9__.NzBreadCrumbItemComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_10__["ɵNzTransitionPatchDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_11__.NzIconDirective, ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_8__.NzPageHeaderExtraDirective, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_12__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_13__.NzWaveDirective, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_14__.NzCardComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_15__.NzFormDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_16__.NzInputGroupComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_16__.NzInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_17__.NzTableComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_17__.NzTheadComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_17__.NzTrDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_17__.NzTableCellDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_17__.NzThMeasureDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_17__.NzTbodyComponent, _angular_common__WEBPACK_IMPORTED_MODULE_18__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkWithHref], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXV0aW9uLWxpc3QuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 98115:
/*!*******************************************************!*\
  !*** ./src/app/caution/resolvers/caution.resolver.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CautionResolver": () => (/* binding */ CautionResolver)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 33927);
/* harmony import */ var _graphql_graphql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../graphql/graphql */ 44092);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);





class CautionResolver {
    constructor(getCautionDetailsGQL, router) {
        this.getCautionDetailsGQL = getCautionDetailsGQL;
        this.router = router;
    }
    resolve(route) {
        const id = parseInt(route.paramMap.get('id') || '', 10);
        if (id) {
            return this.getCautionDetailsGQL
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
                if ((_a = result.data) === null || _a === void 0 ? void 0 : _a.caution) {
                    return result.data.caution;
                }
                else {
                    this.router.navigateByUrl('/exception/404');
                    return undefined;
                }
            }));
        }
        else {
            return {
                translations: [
                    {
                        language: _graphql_graphql__WEBPACK_IMPORTED_MODULE_0__.LanguageCode.Vi,
                    },
                ],
            };
        }
    }
}
CautionResolver.ɵfac = function CautionResolver_Factory(t) { return new (t || CautionResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_graphql_graphql__WEBPACK_IMPORTED_MODULE_0__.GetCautionDetailsGQL), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router)); };
CautionResolver.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: CautionResolver, factory: CautionResolver.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=src_app_caution_caution_module_ts.js.map