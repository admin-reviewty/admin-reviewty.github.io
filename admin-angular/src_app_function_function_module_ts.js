"use strict";
(self["webpackChunkadmin_angular"] = self["webpackChunkadmin_angular"] || []).push([["src_app_function_function_module_ts"],{

/***/ 28020:
/*!*****************************************************!*\
  !*** ./src/app/function/function-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FunctionRoutingModule": () => (/* binding */ FunctionRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _pages_function_details_function_details_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/function-details/function-details.component */ 77673);
/* harmony import */ var _pages_function_list_function_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/function-list/function-list.component */ 7995);
/* harmony import */ var _resolvers_function_resolver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resolvers/function.resolver */ 81051);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);






const routes = [
    {
        path: 'new',
        resolve: {
            function: _resolvers_function_resolver__WEBPACK_IMPORTED_MODULE_2__.FunctionResolver,
        },
        component: _pages_function_details_function_details_component__WEBPACK_IMPORTED_MODULE_0__.FunctionDetailsComponent,
    },
    {
        path: ':id',
        resolve: {
            function: _resolvers_function_resolver__WEBPACK_IMPORTED_MODULE_2__.FunctionResolver,
        },
        component: _pages_function_details_function_details_component__WEBPACK_IMPORTED_MODULE_0__.FunctionDetailsComponent,
    },
    {
        path: '',
        pathMatch: 'full',
        component: _pages_function_list_function_list_component__WEBPACK_IMPORTED_MODULE_1__.FunctionListComponent,
    },
];
class FunctionRoutingModule {
}
FunctionRoutingModule.ɵfac = function FunctionRoutingModule_Factory(t) { return new (t || FunctionRoutingModule)(); };
FunctionRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: FunctionRoutingModule });
FunctionRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](FunctionRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] }); })();


/***/ }),

/***/ 4219:
/*!*********************************************!*\
  !*** ./src/app/function/function.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FunctionModule": () => (/* binding */ FunctionModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 70325);
/* harmony import */ var ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/page-header */ 92443);
/* harmony import */ var ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/breadcrumb */ 17401);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/button */ 56079);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/icon */ 35203);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/input */ 29422);
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/card */ 47108);
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/table */ 4316);
/* harmony import */ var ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/layout */ 82681);
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/form */ 32734);
/* harmony import */ var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/message */ 91804);
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-zorro-antd/select */ 61532);
/* harmony import */ var ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng-zorro-antd/upload */ 40896);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common/http */ 53882);
/* harmony import */ var ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ng-zorro-antd/tabs */ 97768);
/* harmony import */ var _function_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./function-routing.module */ 28020);
/* harmony import */ var _pages_function_list_function_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/function-list/function-list.component */ 7995);
/* harmony import */ var _pages_function_details_function_details_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/function-details/function-details.component */ 77673);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared.module */ 44466);
/* harmony import */ var _resolvers_function_resolver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./resolvers/function.resolver */ 81051);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);
























class FunctionModule {
}
FunctionModule.ɵfac = function FunctionModule_Factory(t) { return new (t || FunctionModule)(); };
FunctionModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: FunctionModule });
FunctionModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ providers: [_resolvers_function_resolver__WEBPACK_IMPORTED_MODULE_4__.FunctionResolver], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _function_routing_module__WEBPACK_IMPORTED_MODULE_0__.FunctionRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule.forChild(),
            ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_9__.NzPageHeaderModule,
            ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_10__.NzBreadCrumbModule,
            ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_11__.NzButtonModule,
            ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_12__.NzIconModule,
            ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_13__.NzInputModule,
            ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_14__.NzCardModule,
            ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_15__.NzTableModule,
            ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_16__.NzMessageModule,
            ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_17__.NzLayoutModule,
            ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_18__.NzFormModule,
            ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_19__.NzSelectModule,
            ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_20__.NzUploadModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_21__.HttpClientModule,
            ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_22__.NzTabsModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](FunctionModule, { declarations: [_pages_function_list_function_list_component__WEBPACK_IMPORTED_MODULE_1__.FunctionListComponent, _pages_function_details_function_details_component__WEBPACK_IMPORTED_MODULE_2__.FunctionDetailsComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
        _function_routing_module__WEBPACK_IMPORTED_MODULE_0__.FunctionRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule, ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_9__.NzPageHeaderModule,
        ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_10__.NzBreadCrumbModule,
        ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_11__.NzButtonModule,
        ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_12__.NzIconModule,
        ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_13__.NzInputModule,
        ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_14__.NzCardModule,
        ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_15__.NzTableModule,
        ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_16__.NzMessageModule,
        ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_17__.NzLayoutModule,
        ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_18__.NzFormModule,
        ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_19__.NzSelectModule,
        ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_20__.NzUploadModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_21__.HttpClientModule,
        ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_22__.NzTabsModule] }); })();


/***/ }),

/***/ 77673:
/*!*******************************************************************************!*\
  !*** ./src/app/function/pages/function-details/function-details.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FunctionDetailsComponent": () => (/* binding */ FunctionDetailsComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 79441);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 81134);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 22663);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 33927);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 85816);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ 202);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../environments/environment */ 92340);
/* harmony import */ var _graphql_graphql__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../graphql/graphql */ 44092);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/message */ 91804);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngx-translate/core */ 70325);
/* harmony import */ var _shared_services_language_language_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/services/language/language.service */ 14701);
/* harmony import */ var _shared_services_file_file_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/services/file/file.service */ 52250);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common/http */ 53882);
/* harmony import */ var ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/page-header */ 92443);
/* harmony import */ var ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-zorro-antd/breadcrumb */ 17401);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 29910);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ng-zorro-antd/icon */ 35203);
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ng-zorro-antd/form */ 32734);
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ng-zorro-antd/card */ 47108);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ng-zorro-antd/grid */ 95039);
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ng-zorro-antd/select */ 61532);
/* harmony import */ var ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ng-zorro-antd/upload */ 40896);
/* harmony import */ var ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ng-zorro-antd/tabs */ 97768);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ng-zorro-antd/input */ 29422);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ng-zorro-antd/button */ 56079);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 94772);
/* harmony import */ var _shared_pipes_emoji_flag_from_language_code_emoji_flag_from_language_code_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/pipes/emoji-flag-from-language-code/emoji-flag-from-language-code.pipe */ 98877);






























function FunctionDetailsComponent_ng_container_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} }
function FunctionDetailsComponent_ng_template_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "img", 17);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", ctx_r2.validateForm.controls["symbolUrl"].value || "", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
} }
function FunctionDetailsComponent_nz_tab_35_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](1, "emojiFlagFromLanguageCode");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](3, "lowercase");
} if (rf & 2) {
    const translation_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](1, 2, translation_r4.value.language), " ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 4, "language." + _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](3, 6, translation_r4.value.language)), "");
} }
const _c0 = function () { return { minRows: 5, maxRows: 10 }; };
function FunctionDetailsComponent_nz_tab_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "nz-tab", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, FunctionDetailsComponent_nz_tab_35_ng_template_1_Template, 4, 8, "ng-template", null, 19, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "nz-form-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "nz-form-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "nz-form-control", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "nz-select", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](10, "nz-option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](12, "nz-option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](14, "nz-option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "nz-form-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "nz-form-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](19, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "nz-form-control", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](21, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](22, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "nz-form-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "nz-form-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](26, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "nz-form-control", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](28, "textarea", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r5 = ctx.index;
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](2);
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroupName", i_r5)("nzTitle", _r6)("nzClosable", ctx_r3.translations.controls.length > 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](6, 15, "common.language"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("nzErrorTip", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](8, 17, "ui.form.should_not_be_empty"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("nzValue", ctx_r3.LanguageCode.Vi)("nzLabel", "\uD83C\uDDFB\uD83C\uDDF3 " + _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](11, 19, "language.vi"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("nzValue", ctx_r3.LanguageCode.En)("nzLabel", "\uD83C\uDDFA\uD83C\uDDF8 " + _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](13, 21, "language.en"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("nzValue", ctx_r3.LanguageCode.Ko)("nzLabel", "\uD83C\uDDF0\uD83C\uDDF7 " + _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](15, 23, "language.ko"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](19, 25, "function.name"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("nzErrorTip", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](21, 27, "ui.form.should_not_be_empty"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](26, 29, "function.description"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("nzAutosize", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](31, _c0));
} }
const _c1 = function () { return []; };
class FunctionDetailsComponent {
    constructor(fb, route, location, createFunctionGQL, updateFunctionGQL, msgService, translateService, languageService, fileService, httpClient) {
        this.fb = fb;
        this.route = route;
        this.location = location;
        this.createFunctionGQL = createFunctionGQL;
        this.updateFunctionGQL = updateFunctionGQL;
        this.msgService = msgService;
        this.translateService = translateService;
        this.languageService = languageService;
        this.fileService = fileService;
        this.httpClient = httpClient;
        this.LanguageCode = _graphql_graphql__WEBPACK_IMPORTED_MODULE_2__.LanguageCode;
        this.FunctionType = _graphql_graphql__WEBPACK_IMPORTED_MODULE_2__.SpecialIngredientFunctionType;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subject();
        this.loading = false;
        this.beforeUploadThumbnail = (file) => {
            this.symbolFile = file;
            this.fileService.getBase64(file, (img) => {
                this.validateForm.patchValue({
                    symbolUrl: img,
                });
            });
            return false;
        };
        this.validateForm = this.fb.group({
            type: [_graphql_graphql__WEBPACK_IMPORTED_MODULE_2__.SpecialIngredientFunctionType.Advantage, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
            symbolUrl: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
            translations: this.fb.array([], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required),
        });
    }
    ngOnInit() {
        this.route.data
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this.destroy$), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.map)((value) => value.function))
            .subscribe((func) => {
            var _a;
            this.function = func;
            this.validateForm.patchValue({
                type: func.type,
                symbolUrl: func.symbolUrl,
            });
            this.validateForm.setControl('translations', this.fb.array(this.languageService
                .sort([...(((_a = this.function) === null || _a === void 0 ? void 0 : _a.translations) || [])])
                .map((translation) => {
                return this.fb.group({
                    id: [translation.id],
                    name: [translation.name, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
                    language: [translation.language, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
                    description: [translation.description],
                });
            }) || [], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required));
        });
    }
    get translations() {
        return this.validateForm.get('translations');
    }
    addTab() {
        const languages = new Set([
            _graphql_graphql__WEBPACK_IMPORTED_MODULE_2__.LanguageCode.Vi,
            _graphql_graphql__WEBPACK_IMPORTED_MODULE_2__.LanguageCode.En,
            _graphql_graphql__WEBPACK_IMPORTED_MODULE_2__.LanguageCode.Ko,
        ]);
        this.translations.controls.forEach((control) => languages.delete(control.value.language));
        const language = languages.size === 0 ? _graphql_graphql__WEBPACK_IMPORTED_MODULE_2__.LanguageCode.Vi : languages.values().next().value;
        this.translations.push(this.fb.group({
            id: [],
            name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
            language: [language, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
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
        let symbolObservable;
        if (this.symbolFile) {
            const formData = new FormData();
            formData.append('file', this.symbolFile);
            symbolObservable = this.httpClient.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiUri}/single-upload?useWatermark=false`, formData);
        }
        else {
            symbolObservable = (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.of)({
                url: ((_a = this.function) === null || _a === void 0 ? void 0 : _a.symbolUrl) || '',
            });
        }
        symbolObservable
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this.destroy$), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.mergeMap)(({ url }) => {
            var _a, _b, _c, _d, _e, _f;
            if ((_a = this.function) === null || _a === void 0 ? void 0 : _a.id) {
                const data = {
                    type: (_b = this.validateForm.get('type')) === null || _b === void 0 ? void 0 : _b.value,
                    symbolUrl: url,
                    translations: {
                        create: (_c = this.translations.value) === null || _c === void 0 ? void 0 : _c.filter((translation) => !translation.id).map((translation) => lodash__WEBPACK_IMPORTED_MODULE_0___default().omit(translation, ['id'])),
                        set: (_d = this.translations.value) === null || _d === void 0 ? void 0 : _d.filter((translation) => translation.id),
                    },
                };
                return this.updateFunctionGQL.mutate({
                    where: {
                        id: this.function.id,
                    },
                    data,
                });
            }
            else {
                const data = {
                    type: (_e = this.validateForm.get('type')) === null || _e === void 0 ? void 0 : _e.value,
                    symbolUrl: url,
                    translations: {
                        create: (_f = this.translations.value) === null || _f === void 0 ? void 0 : _f.map((translation) => lodash__WEBPACK_IMPORTED_MODULE_0___default().omit(translation, ['id'])),
                    },
                };
                return this.createFunctionGQL.mutate({
                    data,
                });
            }
        }))
            .subscribe(({ errors, data }) => {
            var _a, _b;
            if (errors) {
                this.msgService.error(this.translateService.instant(`function.${((_a = this.function) === null || _a === void 0 ? void 0 : _a.id) ? 'update' : 'create'}_error`));
            }
            if (data) {
                this.msgService.success(this.translateService.instant(`function.${((_b = this.function) === null || _b === void 0 ? void 0 : _b.id) ? 'update' : 'create'}_success`));
                this.location.back();
            }
            this.loading = false;
        }, () => {
            var _a;
            this.msgService.error(this.translateService.instant(`function.${((_a = this.function) === null || _a === void 0 ? void 0 : _a.id) ? 'update' : 'create'}_error`));
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
FunctionDetailsComponent.ɵfac = function FunctionDetailsComponent_Factory(t) { return new (t || FunctionDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_14__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_graphql_graphql__WEBPACK_IMPORTED_MODULE_2__.CreateFunctionGQL), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_graphql_graphql__WEBPACK_IMPORTED_MODULE_2__.UpdateFunctionGQL), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_15__.NzMessageService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_shared_services_language_language_service__WEBPACK_IMPORTED_MODULE_3__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_shared_services_file_file_service__WEBPACK_IMPORTED_MODULE_4__.FileService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_17__.HttpClient)); };
FunctionDetailsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: FunctionDetailsComponent, selectors: [["app-function-details"]], decls: 45, vars: 39, consts: [[1, "site-page-header"], ["nz-page-header-breadcrumb", ""], ["nz-icon", "", "nzType", "home"], ["routerLink", "/functions"], ["nz-form", "", 3, "nzLayout", "formGroup", "ngSubmit"], [1, "mb-3"], ["formControlName", "type"], [3, "nzLabel", "nzValue"], ["nzListType", "picture-card", 1, "cover-uploader", 3, "nzBeforeUpload", "nzShowUploadList"], [4, "ngIf", "ngIfElse"], ["elseBlock", ""], ["nzType", "editable-card", "formArrayName", "translations", 3, "nzAdd", "nzClose"], ["nzClosable", "", 3, "formGroupName", "nzTitle", "nzClosable", 4, "ngFor", "ngForOf"], [1, "mt-2", "pb-4"], ["nz-button", "", "nzType", "primary", 3, "nzLoading"], ["nz-button", "", "type", "button", 1, "ml-2", 3, "nzDanger", "click"], ["nz-icon", "", "nzType", "camera", "nzTheme", "outline", 1, "upload-icon"], [2, "width", "100%", 3, "src"], ["nzClosable", "", 3, "formGroupName", "nzTitle", "nzClosable"], ["title", ""], ["nzHasFeedback", "", 3, "nzErrorTip"], ["formControlName", "language"], [3, "nzValue", "nzLabel"], ["nz-input", "", "formControlName", "name"], ["nzHasFeedback", ""], ["nz-input", "", "formControlName", "description", 3, "nzAutosize"]], template: function FunctionDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "nz-page-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "nz-breadcrumb", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "nz-breadcrumb-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "nz-breadcrumb-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](7, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "nz-breadcrumb-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngSubmit", function FunctionDetailsComponent_Template_form_ngSubmit_11_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "nz-card", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "nz-form-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](16, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "nz-form-control");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "nz-select", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](19, "nz-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](20, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](21, "nz-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](22, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](23, "nz-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](24, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "nz-form-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](28, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "nz-form-control");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "nz-upload", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](31, FunctionDetailsComponent_ng_container_31_Template, 2, 0, "ng-container", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](32, FunctionDetailsComponent_ng_template_32_Template, 1, 1, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "nz-tabset", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("nzAdd", function FunctionDetailsComponent_Template_nz_tabset_nzAdd_34_listener() { return ctx.addTab(); })("nzClose", function FunctionDetailsComponent_Template_nz_tabset_nzClose_34_listener($event) { return ctx.removeTab($event.index); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](35, FunctionDetailsComponent_nz_tab_35_Template, 29, 32, "nz-tab", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](36, "nz-form-item", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](37, "nz-form-control");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](38, "nz-input-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](39, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](41, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](42, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function FunctionDetailsComponent_Template_button_click_42_listener() { return ctx.cancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](44, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](7, 21, "common.function"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](((ctx.function == null ? null : ctx.function.translations) || _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](37, _c1))[0] == null ? null : ((ctx.function == null ? null : ctx.function.translations) || _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](38, _c1))[0].name);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("nzLayout", "vertical")("formGroup", ctx.validateForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](16, 23, "common.type"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("nzLabel", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](20, 25, "function.good"))("nzValue", ctx.FunctionType.Advantage);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("nzLabel", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](22, 27, "function.bad"))("nzValue", ctx.FunctionType.Disadvantage);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("nzLabel", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](24, 29, "function.recommend"))("nzValue", ctx.FunctionType.Recommendation);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](28, 31, "function.symbol"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("nzBeforeUpload", ctx.beforeUploadThumbnail)("nzShowUploadList", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.validateForm.controls["symbolUrl"].value)("ngIfElse", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.translations.controls);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("nzLoading", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](41, 33, (ctx.function == null ? null : ctx.function.id) ? "common.update" : "common.add"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("nzDanger", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](44, 35, "common.cancel"), " ");
    } }, directives: [ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_18__.NzPageHeaderComponent, ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_19__.NzBreadCrumbComponent, ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_18__.NzPageHeaderBreadcrumbDirective, ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_19__.NzBreadCrumbItemComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_20__["ɵNzTransitionPatchDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_21__.NzIconDirective, _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterLinkWithHref, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_22__.NzFormDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupDirective, ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_23__.NzCardComponent, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_24__.NzRowDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_22__.NzFormItemComponent, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_24__.NzColDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_22__.NzFormLabelComponent, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_22__.NzFormControlComponent, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_25__.NzSelectComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlName, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_25__.NzOptionComponent, ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_26__.NzUploadComponent, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_27__.NzTabSetComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormArrayName, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgForOf, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_28__.NzInputGroupComponent, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_29__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_30__.NzWaveDirective, ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_27__.NzTabComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupName, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_28__.NzInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_28__.NzAutosizeDirective], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__.TranslatePipe, _shared_pipes_emoji_flag_from_language_code_emoji_flag_from_language_code_pipe__WEBPACK_IMPORTED_MODULE_5__.EmojiFlagFromLanguageCodePipe, _angular_common__WEBPACK_IMPORTED_MODULE_14__.LowerCasePipe], styles: ["[_nghost-%COMP%]     .cover-uploader > .ant-upload {\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZ1bmN0aW9uLWRldGFpbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtBQUNGIiwiZmlsZSI6ImZ1bmN0aW9uLWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCA6Om5nLWRlZXAgLmNvdmVyLXVwbG9hZGVyID4gLmFudC11cGxvYWQge1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuIl19 */"] });


/***/ }),

/***/ 7995:
/*!*************************************************************************!*\
  !*** ./src/app/function/pages/function-list/function-list.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FunctionListComponent": () => (/* binding */ FunctionListComponent)
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




















function FunctionListComponent_ng_template_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 1, "common.search"), " ");
} }
const _c0 = function (a1) { return ["/functions", a1]; };
function FunctionListComponent_tr_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const function_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](function_r3.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", function_r3.symbolUrl, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("alt", function_r3.translations[0] == null ? null : function_r3.translations[0].name)("title", function_r3.translations[0] == null ? null : function_r3.translations[0].name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", function_r3.translations[0] == null ? null : function_r3.translations[0].name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](9, _c0, function_r3.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](9, 7, "common.edit"));
} }
class FunctionListComponent {
    constructor(fb, router, route, getFunctionListGQL, msgService, translateService) {
        this.fb = fb;
        this.router = router;
        this.route = route;
        this.getFunctionListGQL = getFunctionListGQL;
        this.msgService = msgService;
        this.translateService = translateService;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
        this.functions = [];
        this.functionsCount = 0;
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
                        this.functions = data.functions;
                        this.functionsCount = data.functionsConnection.aggregate.count;
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
FunctionListComponent.ɵfac = function FunctionListComponent_Factory(t) { return new (t || FunctionListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_graphql_graphql__WEBPACK_IMPORTED_MODULE_0__.GetFunctionListGQL), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_6__.NzMessageService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateService)); };
FunctionListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: FunctionListComponent, selectors: [["app-function-list"]], decls: 35, vars: 24, consts: [[1, "site-page-header", 3, "nzTitle"], ["nz-page-header-breadcrumb", ""], ["nz-icon", "", "nzType", "home"], ["nz-button", "", "nzType", "primary", "routerLink", "/functions/new"], ["nz-icon", "", "nzType", "plus", "nzTheme", "outline"], [1, "mb-3"], ["nz-form", "", 3, "formGroup", "ngSubmit"], [1, "row", "justify-content-lg-center"], [1, "col-12", "col-lg-6"], ["nzSearch", "", 3, "nzAddOnAfter"], ["formControlName", "name", "type", "text", "nz-input", "", 3, "placeholder"], ["suffixIconButton", ""], [1, "mb-4"], ["nzBordered", "", 3, "nzData", "nzFrontPagination", "nzTotal", "nzPageIndex", "nzPageSize", "nzLoading", "nzQueryParams"], [4, "ngFor", "ngForOf"], ["nz-button", "", "nzType", "primary", "type", "submit", "nzSearch", ""], ["nz-icon", "", "nzType", "search", "nzTheme", "outline"], [1, "function__icon", "mr-2", 3, "src", "alt", "title"], [3, "routerLink"]], template: function FunctionListComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function FunctionListComponent_Template_form_ngSubmit_15_listener() { return ctx.handleSearch(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "nz-input-group", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](20, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, FunctionListComponent_ng_template_21_Template, 4, 3, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "nz-card", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "nz-table", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("nzQueryParams", function FunctionListComponent_Template_nz_table_nzQueryParams_24_listener($event) { return ctx.handleQueryParamsChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](31, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](34, FunctionListComponent_tr_34_Template, 10, 11, "tr", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("nzTitle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 14, "common.function"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 16, "common.function"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](13, 18, "function.create"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.searchForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzAddOnAfter", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](20, 20, "function.name"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzData", ctx.functions)("nzFrontPagination", false)("nzTotal", ctx.functionsCount)("nzPageIndex", ctx.pageIndex)("nzPageSize", ctx.pageSize)("nzLoading", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](31, 22, "function.name"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.functions);
    } }, directives: [ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_8__.NzPageHeaderComponent, ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_9__.NzBreadCrumbComponent, ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_8__.NzPageHeaderBreadcrumbDirective, ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_9__.NzBreadCrumbItemComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_10__["ɵNzTransitionPatchDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_11__.NzIconDirective, ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_8__.NzPageHeaderExtraDirective, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_12__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_13__.NzWaveDirective, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_14__.NzCardComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_15__.NzFormDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_16__.NzInputGroupComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_16__.NzInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_17__.NzTableComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_17__.NzTheadComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_17__.NzTrDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_17__.NzTableCellDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_17__.NzThMeasureDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_17__.NzTbodyComponent, _angular_common__WEBPACK_IMPORTED_MODULE_18__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkWithHref], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslatePipe], styles: [".function__icon[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZ1bmN0aW9uLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQUNGIiwiZmlsZSI6ImZ1bmN0aW9uLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZnVuY3Rpb25fX2ljb24ge1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xufVxuIl19 */"] });


/***/ }),

/***/ 81051:
/*!*********************************************************!*\
  !*** ./src/app/function/resolvers/function.resolver.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FunctionResolver": () => (/* binding */ FunctionResolver)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 33927);
/* harmony import */ var _graphql_graphql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../graphql/graphql */ 44092);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);





class FunctionResolver {
    constructor(getFunctionDetailsGQL, router) {
        this.getFunctionDetailsGQL = getFunctionDetailsGQL;
        this.router = router;
    }
    resolve(route) {
        const id = parseInt(route.paramMap.get('id') || '', 10);
        if (id) {
            return this.getFunctionDetailsGQL
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
                if ((_a = result.data) === null || _a === void 0 ? void 0 : _a.function) {
                    return result.data.function;
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
FunctionResolver.ɵfac = function FunctionResolver_Factory(t) { return new (t || FunctionResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_graphql_graphql__WEBPACK_IMPORTED_MODULE_0__.GetFunctionDetailsGQL), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router)); };
FunctionResolver.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: FunctionResolver, factory: FunctionResolver.ɵfac });


/***/ })

}]);
//# sourceMappingURL=src_app_function_function_module_ts.js.map