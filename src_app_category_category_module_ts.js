"use strict";
(self["webpackChunkadmin_angular"] = self["webpackChunkadmin_angular"] || []).push([["src_app_category_category_module_ts"],{

/***/ 14826:
/*!*****************************************************!*\
  !*** ./src/app/category/category-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoryRoutingModule": () => (/* binding */ CategoryRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _pages_category_details_category_details_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/category-details/category-details.component */ 86198);
/* harmony import */ var _pages_category_list_category_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/category-list/category-list.component */ 34861);
/* harmony import */ var _resolvers_category_resolver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resolvers/category.resolver */ 7419);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);






const routes = [
    {
        path: 'new',
        resolve: {
            category: _resolvers_category_resolver__WEBPACK_IMPORTED_MODULE_2__.CategoryResolver,
        },
        component: _pages_category_details_category_details_component__WEBPACK_IMPORTED_MODULE_0__.CategoryDetailsComponent,
    },
    {
        path: ':id',
        resolve: {
            category: _resolvers_category_resolver__WEBPACK_IMPORTED_MODULE_2__.CategoryResolver,
        },
        component: _pages_category_details_category_details_component__WEBPACK_IMPORTED_MODULE_0__.CategoryDetailsComponent,
    },
    {
        path: '',
        pathMatch: 'full',
        component: _pages_category_list_category_list_component__WEBPACK_IMPORTED_MODULE_1__.CategoryListComponent,
    },
];
class CategoryRoutingModule {
}
CategoryRoutingModule.ɵfac = function CategoryRoutingModule_Factory(t) { return new (t || CategoryRoutingModule)(); };
CategoryRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: CategoryRoutingModule });
CategoryRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](CategoryRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] }); })();


/***/ }),

/***/ 26914:
/*!*********************************************!*\
  !*** ./src/app/category/category.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoryModule": () => (/* binding */ CategoryModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common/http */ 53882);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 70325);
/* harmony import */ var ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/breadcrumb */ 17401);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/button */ 56079);
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/card */ 47108);
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/form */ 32734);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/icon */ 35203);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/input */ 29422);
/* harmony import */ var ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/layout */ 82681);
/* harmony import */ var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/message */ 91804);
/* harmony import */ var ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/page-header */ 92443);
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-zorro-antd/select */ 61532);
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/table */ 4316);
/* harmony import */ var ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ng-zorro-antd/tabs */ 97768);
/* harmony import */ var ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng-zorro-antd/upload */ 40896);
/* harmony import */ var ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ng-zorro-antd/switch */ 17318);
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ 79787);
/* harmony import */ var ng_zorro_antd_tree_select__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ng-zorro-antd/tree-select */ 21821);
/* harmony import */ var _category_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./category-routing.module */ 14826);
/* harmony import */ var _pages_category_list_category_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/category-list/category-list.component */ 34861);
/* harmony import */ var _pages_category_details_category_details_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/category-details/category-details.component */ 86198);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared.module */ 44466);
/* harmony import */ var _resolvers_category_resolver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./resolvers/category.resolver */ 7419);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);



























class CategoryModule {
}
CategoryModule.ɵfac = function CategoryModule_Factory(t) { return new (t || CategoryModule)(); };
CategoryModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: CategoryModule });
CategoryModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ providers: [_resolvers_category_resolver__WEBPACK_IMPORTED_MODULE_4__.CategoryResolver], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _category_routing_module__WEBPACK_IMPORTED_MODULE_0__.CategoryRoutingModule,
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
            ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_23__.NzSwitchModule,
            ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_24__.NzToolTipModule,
            ng_zorro_antd_tree_select__WEBPACK_IMPORTED_MODULE_25__.NzTreeSelectModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](CategoryModule, { declarations: [_pages_category_list_category_list_component__WEBPACK_IMPORTED_MODULE_1__.CategoryListComponent, _pages_category_details_category_details_component__WEBPACK_IMPORTED_MODULE_2__.CategoryDetailsComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
        _category_routing_module__WEBPACK_IMPORTED_MODULE_0__.CategoryRoutingModule,
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
        ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_22__.NzTabsModule,
        ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_23__.NzSwitchModule,
        ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_24__.NzToolTipModule,
        ng_zorro_antd_tree_select__WEBPACK_IMPORTED_MODULE_25__.NzTreeSelectModule] }); })();


/***/ }),

/***/ 86198:
/*!*******************************************************************************!*\
  !*** ./src/app/category/pages/category-details/category-details.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoryDetailsComponent": () => (/* binding */ CategoryDetailsComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ 202);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 79441);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 81134);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 61486);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 22663);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 33927);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 85816);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../environments/environment */ 92340);
/* harmony import */ var _graphql_graphql__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../graphql/graphql */ 44092);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/message */ 91804);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ngx-translate/core */ 70325);
/* harmony import */ var _shared_services_language_language_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/services/language/language.service */ 14701);
/* harmony import */ var _shared_services_file_file_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/services/file/file.service */ 52250);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common/http */ 53882);
/* harmony import */ var _shared_services_string_string_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/services/string/string.service */ 69665);
/* harmony import */ var ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng-zorro-antd/page-header */ 92443);
/* harmony import */ var ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ng-zorro-antd/breadcrumb */ 17401);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 29910);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ng-zorro-antd/icon */ 35203);
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ng-zorro-antd/form */ 32734);
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ng-zorro-antd/card */ 47108);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ng-zorro-antd/grid */ 95039);
/* harmony import */ var ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ng-zorro-antd/switch */ 17318);
/* harmony import */ var ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ng-zorro-antd/upload */ 40896);
/* harmony import */ var ng_zorro_antd_tree_select__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ng-zorro-antd/tree-select */ 21821);
/* harmony import */ var ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ng-zorro-antd/tabs */ 97768);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ng-zorro-antd/input */ 29422);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ng-zorro-antd/button */ 56079);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 94772);
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ng-zorro-antd/select */ 61532);
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ 79787);
/* harmony import */ var _shared_pipes_emoji_flag_from_language_code_emoji_flag_from_language_code_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/pipes/emoji-flag-from-language-code/emoji-flag-from-language-code.pipe */ 98877);


































function CategoryDetailsComponent_ng_container_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
} }
function CategoryDetailsComponent_ng_template_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "img", 21);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("src", ctx_r2.validateForm.controls["activeLogo"].value.url || "", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
} }
function CategoryDetailsComponent_ng_container_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
} }
function CategoryDetailsComponent_ng_template_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "img", 21);
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("src", ctx_r5.validateForm.controls["inactiveLogo"].value.url || "", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
} }
function CategoryDetailsComponent_nz_tab_43_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](1, "emojiFlagFromLanguageCode");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "lowercase");
} if (rf & 2) {
    const translation_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](1, 2, translation_r7.value.language), " ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 4, "language." + _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](3, 6, translation_r7.value.language)), "");
} }
function CategoryDetailsComponent_nz_tab_43_ng_template_31_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CategoryDetailsComponent_nz_tab_43_ng_template_31_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); const translation_r7 = ctx_r15.$implicit; const i_r8 = ctx_r15.index; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r14.generateSlug(translation_r7.value.name, i_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nzTooltipTitle", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](1, 1, "category.create_slug_from_name"));
} }
function CategoryDetailsComponent_nz_tab_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "nz-tab", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, CategoryDetailsComponent_nz_tab_43_ng_template_1_Template, 4, 8, "ng-template", null, 23, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "nz-form-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "nz-form-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "nz-form-control", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "nz-select", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](10, "nz-option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](12, "nz-option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](14, "nz-option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "nz-form-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "nz-form-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](19, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "nz-form-control", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](21, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](22, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "nz-form-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "nz-form-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](26, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](27, "nz-form-control", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](28, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](29, "nz-input-group", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](30, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](31, CategoryDetailsComponent_nz_tab_43_ng_template_31_Template, 2, 3, "ng-template", null, 29, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](33, "nz-form-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](34, "nz-form-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](36, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](37, "nz-form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](38, "nz-switch", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r8 = ctx.index;
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](2);
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](32);
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroupName", i_r8)("nzTitle", _r9)("nzClosable", ctx_r6.translations.controls.length > 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](6, 17, "common.language"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("nzErrorTip", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](8, 19, "ui.form.should_not_be_empty"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nzValue", ctx_r6.LanguageCode.Vi)("nzLabel", "\uD83C\uDDFB\uD83C\uDDF3 " + _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](11, 21, "language.vi"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nzValue", ctx_r6.LanguageCode.En)("nzLabel", "\uD83C\uDDFA\uD83C\uDDF8 " + _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](13, 23, "language.en"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nzValue", ctx_r6.LanguageCode.Ko)("nzLabel", "\uD83C\uDDF0\uD83C\uDDF7 " + _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](15, 25, "language.ko"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](19, 27, "category.name"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("nzErrorTip", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](21, 29, "ui.form.should_not_be_empty"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](26, 31, "category.create_slug_from_name"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("nzErrorTip", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](28, 33, "ui.form.should_not_be_empty"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nzSuffix", _r11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](36, 35, "common.origin"));
} }
const _c0 = function () { return []; };
const _c1 = function () { return { "max-height": "300px" }; };
class CategoryDetailsComponent {
    constructor(fb, route, location, createCategoryGQL, updateCategoryGQL, getHierarchicalCategoriesGQL, msgService, translateService, languageService, fileService, httpClient, stringService) {
        this.fb = fb;
        this.route = route;
        this.location = location;
        this.createCategoryGQL = createCategoryGQL;
        this.updateCategoryGQL = updateCategoryGQL;
        this.getHierarchicalCategoriesGQL = getHierarchicalCategoriesGQL;
        this.msgService = msgService;
        this.translateService = translateService;
        this.languageService = languageService;
        this.fileService = fileService;
        this.httpClient = httpClient;
        this.stringService = stringService;
        this.LanguageCode = _graphql_graphql__WEBPACK_IMPORTED_MODULE_2__.LanguageCode;
        this.CategoryStatus = _graphql_graphql__WEBPACK_IMPORTED_MODULE_2__.CategoryStatus;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subject();
        this.loading = false;
        this.categories = [];
        this.beforeUploadActiveLogo = (file) => {
            this.activeLogoFile = file;
            this.fileService.getBase64(file, (img, width, height) => {
                this.validateForm.patchValue({
                    activeLogo: {
                        url: img,
                        width,
                        height,
                    },
                });
            });
            return false;
        };
        this.beforeUploadInactiveLogo = (file) => {
            this.inactiveLogoFile = file;
            this.fileService.getBase64(file, (img, width, height) => {
                this.validateForm.patchValue({
                    inactiveLogo: {
                        url: img,
                        width,
                        height,
                    },
                });
            });
            return false;
        };
        this.validateForm = this.fb.group({
            status: [_graphql_graphql__WEBPACK_IMPORTED_MODULE_2__.CategoryStatus.Active, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
            parent: [null],
            activeLogo: [null],
            inactiveLogo: [null],
            translations: this.fb.array([], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required),
        });
    }
    ngOnInit() {
        this.route.data
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.destroy$), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.map)((value) => value.category))
            .subscribe((category) => {
            var _a, _b, _c, _d, _e, _f;
            this.category = category;
            this.validateForm.patchValue({
                status: (category === null || category === void 0 ? void 0 : category.status) === _graphql_graphql__WEBPACK_IMPORTED_MODULE_2__.CategoryStatus.Active,
                parent: (_c = (_b = (_a = this.category) === null || _a === void 0 ? void 0 : _a.parent) === null || _b === void 0 ? void 0 : _b.id) === null || _c === void 0 ? void 0 : _c.toString(),
                activeLogo: (_d = this.category) === null || _d === void 0 ? void 0 : _d.activeLogo,
                inactiveLogo: (_e = this.category) === null || _e === void 0 ? void 0 : _e.inactiveLogo,
            });
            this.validateForm.setControl('translations', this.fb.array(this.languageService
                .sort([...(((_f = this.category) === null || _f === void 0 ? void 0 : _f.translations) || [])])
                .map((translation) => {
                return this.fb.group({
                    id: [translation.id],
                    name: [translation.name, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
                    language: [translation.language, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
                    isOriginal: [translation.isOriginal, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
                    slug: [translation.slug, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
                });
            }) || [], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required));
        });
        this.getHierarchicalCategoriesGQL
            .fetch()
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.destroy$))
            .subscribe(({ data, error, errors }) => {
            if (error || errors) {
            }
            if (data) {
                this.categories = data.categories.map((category) => {
                    var _a, _b, _c;
                    return {
                        // tslint:disable-next-line: deprecation
                        key: `${category.id}`,
                        title: (_b = (_a = category.translations) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.name,
                        isLeaf: false,
                        children: (_c = category.children) === null || _c === void 0 ? void 0 : _c.map((child) => {
                            var _a, _b;
                            return {
                                // tslint:disable-next-line: deprecation
                                key: `${child.id}`,
                                title: (_b = (_a = child.translations) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.name,
                                isLeaf: true,
                            };
                        }),
                    };
                });
            }
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
            name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
            language: [language, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
            isOriginal: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
            slug: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
        }));
    }
    removeTab(index) {
        this.translations.removeAt(index);
    }
    generateSlug(name, index) {
        var _a;
        if (!(name === null || name === void 0 ? void 0 : name.trim().length)) {
            return;
        }
        this.translations.patchValue((_a = this.translations.value) === null || _a === void 0 ? void 0 : _a.map((value, i) => {
            if (index === i) {
                value.slug = this.stringService.stringToSlug(name);
                return value;
            }
            return value;
        }));
    }
    submit() {
        Object.values(this.validateForm.controls).forEach((control) => {
            control.markAsDirty();
            control.updateValueAndValidity();
        });
        if (this.validateForm.invalid) {
            return;
        }
        this.loading = true;
        let activeLogoObservable;
        if (this.activeLogoFile) {
            const formData = new FormData();
            formData.append('file', this.activeLogoFile);
            activeLogoObservable = this.httpClient.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiUri}/single-upload?useWatermark=false&isResponsive=false`, formData);
        }
        else {
            activeLogoObservable = (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.of)({
                url: null,
            });
        }
        let inactiveLogoObservable;
        if (this.inactiveLogoFile) {
            const formData = new FormData();
            formData.append('file', this.inactiveLogoFile);
            inactiveLogoObservable = this.httpClient.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiUri}/single-upload?useWatermark=false&isResponsive=false`, formData);
        }
        else {
            inactiveLogoObservable = (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.of)({
                url: null,
            });
        }
        (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.combineLatest)([activeLogoObservable, inactiveLogoObservable])
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.destroy$), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.mergeMap)(([{ url: activeLogoUrl }, { url: inactiveLogoUrl }]) => {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
            if ((_a = this.category) === null || _a === void 0 ? void 0 : _a.id) {
                const data = {
                    status: ((_b = this.validateForm.get('status')) === null || _b === void 0 ? void 0 : _b.value)
                        ? _graphql_graphql__WEBPACK_IMPORTED_MODULE_2__.CategoryStatus.Active
                        : _graphql_graphql__WEBPACK_IMPORTED_MODULE_2__.CategoryStatus.Inactive,
                    activeLogo: this.activeLogoFile && activeLogoUrl
                        ? {
                            create: {
                                name: this.activeLogoFile.name,
                                url: activeLogoUrl,
                                width: this.validateForm.get('activeLogo').value.width,
                                height: this.validateForm.get('activeLogo').value.height,
                            },
                            disconnect: ((_c = this.category.activeLogo) === null || _c === void 0 ? void 0 : _c.id)
                                ? {
                                    id: this.category.activeLogo.id,
                                }
                                : undefined,
                        }
                        : {
                            connect: ((_d = this.category.activeLogo) === null || _d === void 0 ? void 0 : _d.id)
                                ? {
                                    id: this.category.activeLogo.id,
                                }
                                : undefined,
                        },
                    inactiveLogo: this.inactiveLogoFile && inactiveLogoUrl
                        ? {
                            create: {
                                name: this.inactiveLogoFile.name,
                                url: inactiveLogoUrl,
                                width: this.validateForm.get('inactiveLogo').value.width,
                                height: this.validateForm.get('inactiveLogo').value.height,
                            },
                            disconnect: ((_e = this.category.inactiveLogo) === null || _e === void 0 ? void 0 : _e.id)
                                ? {
                                    id: this.category.inactiveLogo.id,
                                }
                                : undefined,
                        }
                        : {
                            connect: ((_f = this.category.inactiveLogo) === null || _f === void 0 ? void 0 : _f.id)
                                ? {
                                    id: this.category.inactiveLogo.id,
                                }
                                : undefined,
                        },
                    parent: ((_g = this.validateForm.get('parent')) === null || _g === void 0 ? void 0 : _g.value) && {
                        connect: {
                            id: +((_h = this.validateForm.get('parent')) === null || _h === void 0 ? void 0 : _h.value),
                        },
                    },
                    translations: {
                        create: (_j = this.translations.value) === null || _j === void 0 ? void 0 : _j.filter((translation) => !translation.id).map((translation) => lodash__WEBPACK_IMPORTED_MODULE_0___default().omit(translation, ['id'])),
                        set: (_k = this.translations.value) === null || _k === void 0 ? void 0 : _k.filter((translation) => translation.id),
                    },
                };
                return this.updateCategoryGQL.mutate({
                    where: {
                        id: this.category.id,
                    },
                    data,
                });
            }
            else {
                const data = {
                    status: ((_l = this.validateForm.get('status')) === null || _l === void 0 ? void 0 : _l.value)
                        ? _graphql_graphql__WEBPACK_IMPORTED_MODULE_2__.CategoryStatus.Active
                        : _graphql_graphql__WEBPACK_IMPORTED_MODULE_2__.CategoryStatus.Inactive,
                    activeLogo: this.activeLogoFile && activeLogoUrl
                        ? {
                            create: {
                                name: this.activeLogoFile.name,
                                url: activeLogoUrl,
                                width: this.validateForm.get('activeLogo').value.width,
                                height: this.validateForm.get('activeLogo').value.height,
                            },
                        }
                        : undefined,
                    parent: ((_m = this.validateForm.get('parent')) === null || _m === void 0 ? void 0 : _m.value) && {
                        connect: {
                            id: +((_o = this.validateForm.get('parent')) === null || _o === void 0 ? void 0 : _o.value),
                        },
                    },
                    inactiveLogo: this.inactiveLogoFile && inactiveLogoUrl
                        ? {
                            create: {
                                name: this.inactiveLogoFile.name,
                                url: inactiveLogoUrl,
                                width: this.validateForm.get('inactiveLogo').value.width,
                                height: this.validateForm.get('inactiveLogo').value.height,
                            },
                        }
                        : undefined,
                    translations: {
                        create: (_p = this.translations.value) === null || _p === void 0 ? void 0 : _p.map((translation) => lodash__WEBPACK_IMPORTED_MODULE_0___default().omit(translation, ['id'])),
                    },
                };
                return this.createCategoryGQL.mutate({
                    data,
                });
            }
        }))
            .subscribe(({ errors, data }) => {
            var _a, _b;
            if (errors) {
                this.msgService.error(this.translateService.instant(`category.${((_a = this.category) === null || _a === void 0 ? void 0 : _a.id) ? 'update' : 'create'}_error`));
            }
            if (data) {
                this.msgService.success(this.translateService.instant(`category.${((_b = this.category) === null || _b === void 0 ? void 0 : _b.id) ? 'update' : 'create'}_success`));
                this.location.back();
            }
            this.loading = false;
        }, () => {
            var _a;
            this.msgService.error(this.translateService.instant(`category.${((_a = this.category) === null || _a === void 0 ? void 0 : _a.id) ? 'update' : 'create'}_error`));
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
CategoryDetailsComponent.ɵfac = function CategoryDetailsComponent_Factory(t) { return new (t || CategoryDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_15__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_16__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_graphql_graphql__WEBPACK_IMPORTED_MODULE_2__.CreateCategoryGQL), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_graphql_graphql__WEBPACK_IMPORTED_MODULE_2__.UpdateCategoryGQL), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_graphql_graphql__WEBPACK_IMPORTED_MODULE_2__.GetHierarchicalCategoriesGQL), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_17__.NzMessageService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_shared_services_language_language_service__WEBPACK_IMPORTED_MODULE_3__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_shared_services_file_file_service__WEBPACK_IMPORTED_MODULE_4__.FileService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_19__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_shared_services_string_string_service__WEBPACK_IMPORTED_MODULE_5__.StringService)); };
CategoryDetailsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: CategoryDetailsComponent, selectors: [["app-category-details"]], decls: 53, vars: 43, consts: [[1, "site-page-header"], ["nz-page-header-breadcrumb", ""], ["nz-icon", "", "nzType", "home"], ["routerLink", "/categories"], ["nz-form", "", 3, "nzLayout", "formGroup", "ngSubmit"], [1, "mb-3"], ["formControlName", "status"], ["nz-row", "", "nzJustify", "start"], ["nz-col", "", "nzLg", "4", "nzXs", "12"], ["nzListType", "picture-card", 1, "cover-uploader", 3, "nzBeforeUpload", "nzShowUploadList"], [4, "ngIf", "ngIfElse"], ["elseActiveBlock", ""], ["elseInactiveBlock", ""], ["nzHasFeedback", "", 3, "nzErrorTip"], ["nzShowSearch", "", "nzAllowClear", "", "formControlName", "parent", 1, "w-100", 3, "nzPlaceHolder", "nzNodes", "nzDropdownStyle"], ["nzType", "editable-card", "formArrayName", "translations", 3, "nzAdd", "nzClose"], ["nzClosable", "", 3, "formGroupName", "nzTitle", "nzClosable", 4, "ngFor", "ngForOf"], [1, "mt-2", "pb-4"], ["nz-button", "", "nzType", "primary", 3, "nzLoading"], ["nz-button", "", "type", "button", 1, "ml-2", 3, "nzDanger", "click"], ["nz-icon", "", "nzType", "camera", "nzTheme", "outline", 1, "upload-icon"], [2, "width", "100%", 3, "src"], ["nzClosable", "", 3, "formGroupName", "nzTitle", "nzClosable"], ["title", ""], ["formControlName", "language"], [3, "nzValue", "nzLabel"], ["nz-input", "", "formControlName", "name"], [3, "nzSuffix"], ["nz-input", "", "formControlName", "slug"], ["suffixTemplate", ""], ["formControlName", "isOriginal"], ["nz-icon", "", "nzType", "sync", "nzTheme", "outline", "nz-tooltip", "", 3, "nzTooltipTitle", "click"]], template: function CategoryDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "nz-page-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "nz-breadcrumb", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "nz-breadcrumb-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "nz-breadcrumb-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](7, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "nz-breadcrumb-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngSubmit", function CategoryDetailsComponent_Template_form_ngSubmit_11_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "nz-card", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "nz-form-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](16, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "nz-form-control");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](18, "nz-switch", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "nz-form-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](22, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "nz-upload", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](26, CategoryDetailsComponent_ng_container_26_Template, 2, 0, "ng-container", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](27, CategoryDetailsComponent_ng_template_27_Template, 1, 1, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](29, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "nz-upload", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](31, CategoryDetailsComponent_ng_container_31_Template, 2, 0, "ng-container", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](32, CategoryDetailsComponent_ng_template_32_Template, 1, 1, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](34, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](35, "nz-form-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](37, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](38, "nz-form-control", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](39, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](40, "nz-tree-select", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](41, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](42, "nz-tabset", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("nzAdd", function CategoryDetailsComponent_Template_nz_tabset_nzAdd_42_listener() { return ctx.addTab(); })("nzClose", function CategoryDetailsComponent_Template_nz_tabset_nzClose_42_listener($event) { return ctx.removeTab($event.index); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](43, CategoryDetailsComponent_nz_tab_43_Template, 39, 37, "nz-tab", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](44, "nz-form-item", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](45, "nz-form-control");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](46, "nz-input-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](47, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](48);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](49, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](50, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CategoryDetailsComponent_Template_button_click_50_listener() { return ctx.cancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](51);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](52, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](28);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](7, 24, "common.category"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](((ctx.category == null ? null : ctx.category.translations) || _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](40, _c0))[0] == null ? null : ((ctx.category == null ? null : ctx.category.translations) || _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](41, _c0))[0].name);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nzLayout", "vertical")("formGroup", ctx.validateForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](16, 26, "common.status"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](22, 28, "common.logo"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nzBeforeUpload", ctx.beforeUploadActiveLogo)("nzShowUploadList", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.validateForm.controls["activeLogo"].value)("ngIfElse", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nzBeforeUpload", ctx.beforeUploadInactiveLogo)("nzShowUploadList", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.validateForm.controls["inactiveLogo"].value)("ngIfElse", _r4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](37, 30, "common.category"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("nzErrorTip", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](39, 32, "ui.form.should_not_be_empty"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("nzPlaceHolder", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](41, 34, "common.category"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nzNodes", ctx.categories)("nzDropdownStyle", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](42, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.translations.controls);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nzLoading", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](49, 36, (ctx.category == null ? null : ctx.category.id) ? "common.update" : "common.add"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nzDanger", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](52, 38, "common.cancel"), " ");
    } }, directives: [ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_20__.NzPageHeaderComponent, ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_21__.NzBreadCrumbComponent, ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_20__.NzPageHeaderBreadcrumbDirective, ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_21__.NzBreadCrumbItemComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_22__["ɵNzTransitionPatchDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_23__.NzIconDirective, _angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterLinkWithHref, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatusGroup, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_24__.NzFormDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroupDirective, ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_25__.NzCardComponent, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_26__.NzRowDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_24__.NzFormItemComponent, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_26__.NzColDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_24__.NzFormLabelComponent, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_24__.NzFormControlComponent, ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_27__.NzSwitchComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControlName, ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_28__.NzUploadComponent, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgIf, ng_zorro_antd_tree_select__WEBPACK_IMPORTED_MODULE_29__.NzTreeSelectComponent, ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_30__.NzTabSetComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormArrayName, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgForOf, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_31__.NzInputGroupComponent, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_32__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_33__.NzWaveDirective, ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_30__.NzTabComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroupName, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_34__.NzSelectComponent, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_34__.NzOptionComponent, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_31__.NzInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_31__.NzInputGroupWhitSuffixOrPrefixDirective, ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_35__.NzTooltipDirective], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__.TranslatePipe, _shared_pipes_emoji_flag_from_language_code_emoji_flag_from_language_code_pipe__WEBPACK_IMPORTED_MODULE_6__.EmojiFlagFromLanguageCodePipe, _angular_common__WEBPACK_IMPORTED_MODULE_16__.LowerCasePipe], styles: ["[_nghost-%COMP%]     .cover-uploader > .ant-upload {\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhdGVnb3J5LWRldGFpbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtBQUNGIiwiZmlsZSI6ImNhdGVnb3J5LWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCA6Om5nLWRlZXAgLmNvdmVyLXVwbG9hZGVyID4gLmFudC11cGxvYWQge1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuIl19 */"] });


/***/ }),

/***/ 34861:
/*!*************************************************************************!*\
  !*** ./src/app/category/pages/category-list/category-list.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoryListComponent": () => (/* binding */ CategoryListComponent)
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




















function CategoryListComponent_ng_template_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 1, "common.search"), " ");
} }
const _c0 = function (a1) { return ["/categories", a1]; };
function CategoryListComponent_tr_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](category_r3.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", category_r3.translations[0] == null ? null : category_r3.translations[0].name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](6, _c0, category_r3.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 4, "common.edit"));
} }
class CategoryListComponent {
    constructor(fb, router, route, getCategoryListGQL, msgService, translateService) {
        this.fb = fb;
        this.router = router;
        this.route = route;
        this.getCategoryListGQL = getCategoryListGQL;
        this.msgService = msgService;
        this.translateService = translateService;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
        this.categories = [];
        this.categoriesCount = 0;
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
                this.dataQueryRef = this.getCategoryListGQL.watch(this.getVariables(), {
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
                        this.categories = data.categories;
                        this.categoriesCount =
                            data.categoriesConnection.aggregate.count;
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
                    name: {
                        contains: ((_a = this.text) === null || _a === void 0 ? void 0 : _a.trim()) || undefined,
                    },
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
CategoryListComponent.ɵfac = function CategoryListComponent_Factory(t) { return new (t || CategoryListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_graphql_graphql__WEBPACK_IMPORTED_MODULE_0__.GetCategoryListGQL), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_6__.NzMessageService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateService)); };
CategoryListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CategoryListComponent, selectors: [["app-category-list"]], decls: 35, vars: 24, consts: [[1, "site-page-header", 3, "nzTitle"], ["nz-page-header-breadcrumb", ""], ["nz-icon", "", "nzType", "home"], ["nz-button", "", "nzType", "primary", "routerLink", "/categories/new"], ["nz-icon", "", "nzType", "plus", "nzTheme", "outline"], [1, "mb-3"], ["nz-form", "", 3, "formGroup", "ngSubmit"], [1, "row", "justify-content-lg-center"], [1, "col-12", "col-lg-6"], ["nzSearch", "", 3, "nzAddOnAfter"], ["formControlName", "name", "type", "text", "nz-input", "", 3, "placeholder"], ["suffixIconButton", ""], [1, "mb-4"], ["nzBordered", "", 3, "nzData", "nzFrontPagination", "nzTotal", "nzPageIndex", "nzPageSize", "nzLoading", "nzQueryParams"], [4, "ngFor", "ngForOf"], ["nz-button", "", "nzType", "primary", "type", "submit", "nzSearch", ""], ["nz-icon", "", "nzType", "search", "nzTheme", "outline"], [3, "routerLink"]], template: function CategoryListComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function CategoryListComponent_Template_form_ngSubmit_15_listener() { return ctx.handleSearch(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "nz-input-group", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](20, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, CategoryListComponent_ng_template_21_Template, 4, 3, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "nz-card", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "nz-table", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("nzQueryParams", function CategoryListComponent_Template_nz_table_nzQueryParams_24_listener($event) { return ctx.handleQueryParamsChange($event); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](34, CategoryListComponent_tr_34_Template, 9, 8, "tr", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("nzTitle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 14, "common.category"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 16, "common.category"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](13, 18, "category.create"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.searchForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzAddOnAfter", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](20, 20, "category.name"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzData", ctx.categories)("nzFrontPagination", false)("nzTotal", ctx.categoriesCount)("nzPageIndex", ctx.pageIndex)("nzPageSize", ctx.pageSize)("nzLoading", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](31, 22, "category.name"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.categories);
    } }, directives: [ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_8__.NzPageHeaderComponent, ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_9__.NzBreadCrumbComponent, ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_8__.NzPageHeaderBreadcrumbDirective, ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_9__.NzBreadCrumbItemComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_10__["ɵNzTransitionPatchDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_11__.NzIconDirective, ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_8__.NzPageHeaderExtraDirective, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_12__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_13__.NzWaveDirective, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_14__.NzCardComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_15__.NzFormDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_16__.NzInputGroupComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_16__.NzInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_17__.NzTableComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_17__.NzTheadComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_17__.NzTrDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_17__.NzTableCellDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_17__.NzThMeasureDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_17__.NzTbodyComponent, _angular_common__WEBPACK_IMPORTED_MODULE_18__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkWithHref], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXRlZ29yeS1saXN0LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 7419:
/*!*********************************************************!*\
  !*** ./src/app/category/resolvers/category.resolver.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoryResolver": () => (/* binding */ CategoryResolver)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 33927);
/* harmony import */ var _graphql_graphql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../graphql/graphql */ 44092);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);





class CategoryResolver {
    constructor(getCategoryDetailsGQL, router) {
        this.getCategoryDetailsGQL = getCategoryDetailsGQL;
        this.router = router;
    }
    resolve(route) {
        const id = parseInt(route.paramMap.get('id') || '', 10);
        if (id) {
            return this.getCategoryDetailsGQL
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
                if ((_a = result.data) === null || _a === void 0 ? void 0 : _a.category) {
                    return result.data.category;
                }
                else {
                    this.router.navigateByUrl('/exception/404');
                    return undefined;
                }
            }));
        }
        else {
            return {
                status: _graphql_graphql__WEBPACK_IMPORTED_MODULE_0__.CategoryStatus.Active,
                translations: [
                    {
                        language: _graphql_graphql__WEBPACK_IMPORTED_MODULE_0__.LanguageCode.Vi,
                    },
                ],
            };
        }
    }
}
CategoryResolver.ɵfac = function CategoryResolver_Factory(t) { return new (t || CategoryResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_graphql_graphql__WEBPACK_IMPORTED_MODULE_0__.GetCategoryDetailsGQL), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router)); };
CategoryResolver.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: CategoryResolver, factory: CategoryResolver.ɵfac });


/***/ })

}]);
//# sourceMappingURL=src_app_category_category_module_ts.js.map