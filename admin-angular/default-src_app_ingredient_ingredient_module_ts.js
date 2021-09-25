"use strict";
(self["webpackChunkadmin_angular"] = self["webpackChunkadmin_angular"] || []).push([["default-src_app_ingredient_ingredient_module_ts"],{

/***/ 87497:
/*!**********************************************************************************!*\
  !*** ./src/app/ingredient/components/caution-select/caution-select.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CautionSelectComponent": () => (/* binding */ CautionSelectComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 79441);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 76491);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 22663);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 80639);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 83720);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 9170);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 98636);
/* harmony import */ var _graphql_graphql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../graphql/graphql */ 44092);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-select/ng-select */ 36868);
/* harmony import */ var _shared_pipes_emoji_flag_from_language_code_emoji_flag_from_language_code_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/pipes/emoji-flag-from-language-code/emoji-flag-from-language-code.pipe */ 98877);









function CautionSelectComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CautionSelectComponent_ng_template_1_Template_span_click_2_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5); const item_r2 = restoredCtx.item; const clear_r3 = restoredCtx.clear; return clear_r3(item_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.item;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", item_r2.name, "");
} }
function CautionSelectComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "emojiFlagFromLanguageCode");
} if (rf & 2) {
    const item_r6 = ctx.item;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", item_r6.name, " ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 2, item_r6.language), " ");
} }
class CautionSelectComponent {
    constructor(searchCautionTranslationsGQL) {
        this.searchCautionTranslationsGQL = searchCautionTranslationsGQL;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
        this.loading = false;
        this.text$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject('');
        this.buffer = [];
        this.completed = false;
        this.onChange = (_) => { };
        this.onTouched = () => { };
        this.text$
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.destroy$), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.debounceTime)(250), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.distinctUntilChanged)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.filter)((term) => (term === null || term === void 0 ? void 0 : term.trim().length) > 0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.tap)(() => {
            this.buffer = [];
            this.fetchMore();
        }))
            .subscribe();
    }
    ngOnInit() { }
    writeValue(obj) {
        if (this.translations !== obj) {
            this.translations = obj;
            this.handleModelChange();
        }
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    handleModelChange() {
        this.onChange(this.translations);
    }
    scrollToEnd() {
        if (!this.completed) {
            this.fetchMore();
        }
    }
    // scroll({ end }: { end: number }): void {
    //   if (this.loading || this.completed || !this.text$.getValue()) {
    //     return;
    //   }
    //   if (end + 10 >= this.buffer.length) {
    //     this.fetchMore();
    //     console.log('scroll');
    //   }
    // }
    fetchMore() {
        this.searchCautionTranslationsGQL
            .fetch({
            where: {
                nameContains: this.text$.getValue(),
            },
            first: 30,
            skip: this.buffer.length,
        })
            .subscribe(({ loading, data }) => {
            this.loading = loading;
            this.completed = (data === null || data === void 0 ? void 0 : data.cautionTranslations.length) === 0;
            this.buffer = this.buffer.concat(data.cautionTranslations);
        });
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.unsubscribe();
    }
}
CautionSelectComponent.ɵfac = function CautionSelectComponent_Factory(t) { return new (t || CautionSelectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_graphql_graphql__WEBPACK_IMPORTED_MODULE_0__.SearchCautionTranslationsGQL)); };
CautionSelectComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CautionSelectComponent, selectors: [["app-caution-select"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NG_VALUE_ACCESSOR,
                useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.forwardRef)(() => CautionSelectComponent),
                multi: true,
            },
        ])], decls: 3, vars: 7, consts: [["bindLabel", "name", 3, "items", "virtualScroll", "loading", "hideSelected", "typeahead", "ngModel", "multiple", "ngModelChange", "scrollToEnd"], ["ng-label-tmp", ""], ["ng-option-tmp", ""], [1, "ng-value-label"], ["aria-hidden", "true", 1, "ng-value-icon", "right", 3, "click"]], template: function CautionSelectComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ng-select", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function CautionSelectComponent_Template_ng_select_ngModelChange_0_listener($event) { return ctx.translations = $event; })("scrollToEnd", function CautionSelectComponent_Template_ng_select_scrollToEnd_0_listener() { return ctx.scrollToEnd(); })("ngModelChange", function CautionSelectComponent_Template_ng_select_ngModelChange_0_listener() { return ctx.handleModelChange(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, CautionSelectComponent_ng_template_1_Template, 4, 1, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, CautionSelectComponent_ng_template_2_Template, 2, 4, "ng-template", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("items", ctx.buffer)("virtualScroll", true)("loading", ctx.loading)("hideSelected", true)("typeahead", ctx.text$)("ngModel", ctx.translations)("multiple", true);
    } }, directives: [_ng_select_ng_select__WEBPACK_IMPORTED_MODULE_11__.NgSelectComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgModel, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_11__["ɵh"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_11__["ɵf"]], pipes: [_shared_pipes_emoji_flag_from_language_code_emoji_flag_from_language_code_pipe__WEBPACK_IMPORTED_MODULE_1__.EmojiFlagFromLanguageCodePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXV0aW9uLXNlbGVjdC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 16377:
/*!************************************************************************************!*\
  !*** ./src/app/ingredient/components/function-select/function-select.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FunctionSelectComponent": () => (/* binding */ FunctionSelectComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 79441);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 76491);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 22663);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 80639);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 83720);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 9170);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 98636);
/* harmony import */ var _graphql_graphql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../graphql/graphql */ 44092);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-select/ng-select */ 36868);
/* harmony import */ var _shared_pipes_emoji_flag_from_language_code_emoji_flag_from_language_code_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/pipes/emoji-flag-from-language-code/emoji-flag-from-language-code.pipe */ 98877);









function FunctionSelectComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FunctionSelectComponent_ng_template_1_Template_span_click_3_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5); const item_r2 = restoredCtx.item; const clear_r3 = restoredCtx.clear; return clear_r3(item_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.item;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", item_r2.function.symbolUrl, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"])("alt", item_r2.name)("title", item_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", item_r2.name, "");
} }
function FunctionSelectComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "emojiFlagFromLanguageCode");
} if (rf & 2) {
    const item_r6 = ctx.item;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", item_r6.function.symbolUrl, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"])("alt", item_r6.name)("title", item_r6.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", item_r6.name, " ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 5, item_r6.language), " ");
} }
class FunctionSelectComponent {
    constructor(searchFunctionTranslationsGQL) {
        this.searchFunctionTranslationsGQL = searchFunctionTranslationsGQL;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
        this.loading = false;
        this.text$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject('');
        this.buffer = [];
        this.completed = false;
        this.onChange = (_) => { };
        this.onTouched = () => { };
        this.text$
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.destroy$), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.debounceTime)(250), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.distinctUntilChanged)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.filter)((term) => (term === null || term === void 0 ? void 0 : term.trim().length) > 0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.tap)(() => {
            this.buffer = [];
            this.fetchMore();
        }))
            .subscribe();
    }
    ngOnInit() { }
    writeValue(obj) {
        if (this.translations !== obj) {
            this.translations = obj;
            this.handleModelChange();
        }
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    handleModelChange() {
        this.onChange(this.translations);
    }
    scrollToEnd() {
        if (!this.completed) {
            this.fetchMore();
        }
    }
    // scroll({ end }: { end: number }): void {
    //   if (this.loading || this.completed || !this.text$.getValue()) {
    //     return;
    //   }
    //   if (end + 10 >= this.buffer.length) {
    //     this.fetchMore();
    //     console.log('scroll');
    //   }
    // }
    fetchMore() {
        this.searchFunctionTranslationsGQL
            .fetch({
            where: {
                nameContains: this.text$.getValue(),
            },
            first: 30,
            skip: this.buffer.length,
        })
            .subscribe(({ loading, data }) => {
            this.loading = loading;
            this.completed = (data === null || data === void 0 ? void 0 : data.functionTranslations.length) === 0;
            this.buffer = this.buffer.concat(data.functionTranslations);
        });
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.unsubscribe();
    }
}
FunctionSelectComponent.ɵfac = function FunctionSelectComponent_Factory(t) { return new (t || FunctionSelectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_graphql_graphql__WEBPACK_IMPORTED_MODULE_0__.SearchFunctionTranslationsGQL)); };
FunctionSelectComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: FunctionSelectComponent, selectors: [["app-function-select"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NG_VALUE_ACCESSOR,
                useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.forwardRef)(() => FunctionSelectComponent),
                multi: true,
            },
        ])], decls: 3, vars: 7, consts: [["bindLabel", "name", 3, "items", "virtualScroll", "loading", "hideSelected", "typeahead", "ngModel", "multiple", "ngModelChange", "scrollToEnd"], ["ng-label-tmp", ""], ["ng-option-tmp", ""], [1, "ng-value-label"], [1, "function__icon", 3, "src", "alt", "title"], ["aria-hidden", "true", 1, "ng-value-icon", "right", 3, "click"]], template: function FunctionSelectComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ng-select", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function FunctionSelectComponent_Template_ng_select_ngModelChange_0_listener($event) { return ctx.translations = $event; })("scrollToEnd", function FunctionSelectComponent_Template_ng_select_scrollToEnd_0_listener() { return ctx.scrollToEnd(); })("ngModelChange", function FunctionSelectComponent_Template_ng_select_ngModelChange_0_listener() { return ctx.handleModelChange(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, FunctionSelectComponent_ng_template_1_Template, 5, 4, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, FunctionSelectComponent_ng_template_2_Template, 3, 7, "ng-template", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("items", ctx.buffer)("virtualScroll", true)("loading", ctx.loading)("hideSelected", true)("typeahead", ctx.text$)("ngModel", ctx.translations)("multiple", true);
    } }, directives: [_ng_select_ng_select__WEBPACK_IMPORTED_MODULE_11__.NgSelectComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgModel, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_11__["ɵh"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_11__["ɵf"]], pipes: [_shared_pipes_emoji_flag_from_language_code_emoji_flag_from_language_code_pipe__WEBPACK_IMPORTED_MODULE_1__.EmojiFlagFromLanguageCodePipe], styles: [".function__icon[_ngcontent-%COMP%] {\n  width: 14px;\n  height: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZ1bmN0aW9uLXNlbGVjdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBQ0YiLCJmaWxlIjoiZnVuY3Rpb24tc2VsZWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZ1bmN0aW9uX19pY29uIHtcbiAgd2lkdGg6IDE0cHg7XG4gIGhlaWdodDogMTRweDtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ 48170:
/*!******************************************************************************************!*\
  !*** ./src/app/ingredient/components/ingredient-compact/ingredient-compact.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IngredientCompactComponent": () => (/* binding */ IngredientCompactComponent)
/* harmony export */ });
/* harmony import */ var _graphql_graphql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../graphql/graphql */ 44092);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _shared_services_language_language_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/services/language/language.service */ 14701);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 54364);




const _c0 = function () { return []; };
function IngredientCompactComponent_img_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 7);
} if (rf & 2) {
    const function_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("src", function_r2.symbolUrl, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("alt", (function_r2.translations || _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](3, _c0))[0] == null ? null : (function_r2.translations || _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](4, _c0))[0].name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("title", (function_r2.translations || _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](5, _c0))[0] == null ? null : (function_r2.translations || _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](6, _c0))[0].name);
} }
function IngredientCompactComponent_img_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 8);
} }
const _c1 = function (a0, a1, a2, a3) { return { "ewg-score--low": a0, "ewg-score--medium": a1, "ewg-score--high": a2, "ewg-score--unknown": a3 }; };
class IngredientCompactComponent {
    constructor(languageService) {
        this.languageService = languageService;
        this.EwgRiskType = _graphql_graphql__WEBPACK_IMPORTED_MODULE_0__.EwgRiskType;
        this.languages = new Map();
        this.languages.set(_graphql_graphql__WEBPACK_IMPORTED_MODULE_0__.LanguageCode.Vi, 1);
        this.languages.set(_graphql_graphql__WEBPACK_IMPORTED_MODULE_0__.LanguageCode.En, 2);
    }
    ngOnInit() { }
    pick(ingredient) {
        var _a;
        return (_a = this.languageService.pick(this.languages, ingredient.translations)) === null || _a === void 0 ? void 0 : _a.name;
    }
}
IngredientCompactComponent.ɵfac = function IngredientCompactComponent_Factory(t) { return new (t || IngredientCompactComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_shared_services_language_language_service__WEBPACK_IMPORTED_MODULE_1__.LanguageService)); };
IngredientCompactComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: IngredientCompactComponent, selectors: [["app-ingredient-compact"]], inputs: { ingredient: "ingredient" }, decls: 9, vars: 10, consts: [[1, "ingredient-card"], [1, "text-white", 3, "ngClass"], [1, "flex-grow-1"], [1, "ingredient-functions"], ["class", "function__icon", 3, "src", "alt", "title", 4, "ngFor", "ngForOf"], ["className", "{styles.cautionIndicator}", 1, "caution-indicator"], ["src", "assets/icons/caution.svg", "class", "w-100 h-100", 4, "ngIf"], [1, "function__icon", 3, "src", "alt", "title"], ["src", "assets/icons/caution.svg", 1, "w-100", "h-100"]], template: function IngredientCompactComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, IngredientCompactComponent_img_6_Template, 1, 7, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, IngredientCompactComponent_img_8_Template, 1, 0, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction4"](5, _c1, ctx.ingredient.ewgRiskType === ctx.EwgRiskType.Low, ctx.ingredient.ewgRiskType === ctx.EwgRiskType.Medium, ctx.ingredient.ewgRiskType === ctx.EwgRiskType.High, ctx.ingredient.ewgRiskType === null));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.ingredient.ewg, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.pick(ctx.ingredient), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.ingredient.specialFunctions);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.ingredient.cautions == null ? null : ctx.ingredient.cautions.length);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf], styles: [".ingredient-card[_ngcontent-%COMP%] {\n  border-radius: 11px;\n  padding: 15px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.ingredient-card[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]    + *[_ngcontent-%COMP%] {\n  margin-left: 20px;\n}\n.ewg-score--low[_ngcontent-%COMP%] {\n  background-size: contain;\n  background-repeat: no-repeat;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 30px;\n  height: 30px;\n  background-image: url(\"/assets/icons/ewg-low.svg\");\n}\n.ewg-score--medium[_ngcontent-%COMP%] {\n  background-size: contain;\n  background-repeat: no-repeat;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 30px;\n  height: 30px;\n  background-image: url(\"/assets/icons/ewg-medium.svg\");\n}\n.ewg-score--high[_ngcontent-%COMP%] {\n  background-size: contain;\n  background-repeat: no-repeat;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 30px;\n  height: 30px;\n  background-image: url(\"/assets/icons/ewg-high.svg\");\n}\n.ewg-score--unknown[_ngcontent-%COMP%] {\n  background-size: contain;\n  background-repeat: no-repeat;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 30px;\n  height: 30px;\n  background-image: url(\"/assets/icons/ewg-unknown.svg\");\n}\n.ingredient-functions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  overflow-x: auto;\n  overflow-y: hidden;\n}\n.ingredient-functions[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%]    + img[_ngcontent-%COMP%] {\n  margin-left: 6px;\n}\n.function__icon[_ngcontent-%COMP%] {\n  width: 14px;\n  height: 14px;\n}\n.caution-indicator[_ngcontent-%COMP%] {\n  width: 23px;\n  height: 23px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZ3JlZGllbnQtY29tcGFjdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FBQ0Y7QUFDRTtFQUNFLGlCQUFBO0FBQ0o7QUFjRTtFQVZBLHdCQUFBO0VBQ0EsNEJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBTUUsa0RBQUE7QUFMSjtBQVFFO0VBZkEsd0JBQUE7RUFDQSw0QkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFXRSxxREFBQTtBQUFKO0FBR0U7RUFwQkEsd0JBQUE7RUFDQSw0QkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFnQkUsbURBQUE7QUFLSjtBQUZFO0VBekJBLHdCQUFBO0VBQ0EsNEJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBcUJFLHNEQUFBO0FBVUo7QUFOQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUVBLGdCQUFBO0VBQ0Esa0JBQUE7QUFRRjtBQU5FO0VBQ0UsZ0JBQUE7QUFRSjtBQUpBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFPRjtBQUpBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFPRiIsImZpbGUiOiJpbmdyZWRpZW50LWNvbXBhY3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5ncmVkaWVudC1jYXJkIHtcbiAgYm9yZGVyLXJhZGl1czogMTFweDtcbiAgcGFkZGluZzogMTVweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAvLyBnYXA6IDIwcHg7IC8vIGlzIG5vdCBzdXBwb3J0ZWQgYnkgc2FmYXJpXG4gID4gKiArICoge1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICB9XG59XG5cbkBtaXhpbiBld2ctc2NvcmUge1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xufVxuXG4uZXdnLXNjb3JlIHtcbiAgJi0tbG93IHtcbiAgICBAaW5jbHVkZSBld2ctc2NvcmU7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2ljb25zL2V3Zy1sb3cuc3ZnJyk7XG4gIH1cblxuICAmLS1tZWRpdW0ge1xuICAgIEBpbmNsdWRlIGV3Zy1zY29yZTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvaWNvbnMvZXdnLW1lZGl1bS5zdmcnKTtcbiAgfVxuXG4gICYtLWhpZ2gge1xuICAgIEBpbmNsdWRlIGV3Zy1zY29yZTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvaWNvbnMvZXdnLWhpZ2guc3ZnJyk7XG4gIH1cblxuICAmLS11bmtub3duIHtcbiAgICBAaW5jbHVkZSBld2ctc2NvcmU7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2ljb25zL2V3Zy11bmtub3duLnN2ZycpO1xuICB9XG59XG5cbi5pbmdyZWRpZW50LWZ1bmN0aW9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIC8vIGdhcDogNnB4O1xuICBvdmVyZmxvdy14OiBhdXRvO1xuICBvdmVyZmxvdy15OiBoaWRkZW47XG5cbiAgPiBpbWcgKyBpbWcge1xuICAgIG1hcmdpbi1sZWZ0OiA2cHg7XG4gIH1cbn1cblxuLmZ1bmN0aW9uX19pY29uIHtcbiAgd2lkdGg6IDE0cHg7XG4gIGhlaWdodDogMTRweDtcbn1cblxuLmNhdXRpb24taW5kaWNhdG9yIHtcbiAgd2lkdGg6IDIzcHg7XG4gIGhlaWdodDogMjNweDtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ 78253:
/*!*********************************************************!*\
  !*** ./src/app/ingredient/ingredient-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IngredientRoutingModule": () => (/* binding */ IngredientRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _pages_ingredient_details_ingredient_details_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/ingredient-details/ingredient-details.component */ 70358);
/* harmony import */ var _pages_ingredient_list_ingredient_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/ingredient-list/ingredient-list.component */ 71923);
/* harmony import */ var _resolvers_ingredient_resolver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resolvers/ingredient.resolver */ 30037);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);






const routes = [
    {
        path: 'new',
        resolve: {
            ingredient: _resolvers_ingredient_resolver__WEBPACK_IMPORTED_MODULE_2__.IngredientResolver,
        },
        component: _pages_ingredient_details_ingredient_details_component__WEBPACK_IMPORTED_MODULE_0__.IngredientDetailsComponent,
    },
    {
        path: ':id',
        resolve: {
            ingredient: _resolvers_ingredient_resolver__WEBPACK_IMPORTED_MODULE_2__.IngredientResolver,
        },
        component: _pages_ingredient_details_ingredient_details_component__WEBPACK_IMPORTED_MODULE_0__.IngredientDetailsComponent,
    },
    {
        path: '',
        pathMatch: 'full',
        component: _pages_ingredient_list_ingredient_list_component__WEBPACK_IMPORTED_MODULE_1__.IngredientListComponent,
    },
];
class IngredientRoutingModule {
}
IngredientRoutingModule.ɵfac = function IngredientRoutingModule_Factory(t) { return new (t || IngredientRoutingModule)(); };
IngredientRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: IngredientRoutingModule });
IngredientRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](IngredientRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] }); })();


/***/ }),

/***/ 95122:
/*!*************************************************!*\
  !*** ./src/app/ingredient/ingredient.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IngredientModule": () => (/* binding */ IngredientModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/card */ 47108);
/* harmony import */ var ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/page-header */ 92443);
/* harmony import */ var ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/breadcrumb */ 17401);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ 70325);
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/table */ 4316);
/* harmony import */ var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/message */ 91804);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/input */ 29422);
/* harmony import */ var ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-zorro-antd/input-number */ 77727);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng-zorro-antd/button */ 56079);
/* harmony import */ var ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ng-zorro-antd/tabs */ 97768);
/* harmony import */ var ng_zorro_antd_collapse__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ng-zorro-antd/collapse */ 39370);
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ng-zorro-antd/select */ 61532);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/shared.module */ 44466);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ng-zorro-antd/icon */ 35203);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ng-zorro-antd/grid */ 95039);
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ng-zorro-antd/form */ 32734);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @ng-select/ng-select */ 36868);
/* harmony import */ var _ingredient_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ingredient-routing.module */ 78253);
/* harmony import */ var _pages_ingredient_list_ingredient_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/ingredient-list/ingredient-list.component */ 71923);
/* harmony import */ var _components_ingredient_compact_ingredient_compact_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/ingredient-compact/ingredient-compact.component */ 48170);
/* harmony import */ var _pages_ingredient_details_ingredient_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/ingredient-details/ingredient-details.component */ 70358);
/* harmony import */ var _components_caution_select_caution_select_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/caution-select/caution-select.component */ 87497);
/* harmony import */ var _components_function_select_function_select_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/function-select/function-select.component */ 16377);
/* harmony import */ var _resolvers_ingredient_resolver__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./resolvers/ingredient.resolver */ 30037);
/* harmony import */ var _services_unit_converter_unit_converter_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/unit-converter/unit-converter.service */ 45021);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2316);





























class IngredientModule {
}
IngredientModule.ɵfac = function IngredientModule_Factory(t) { return new (t || IngredientModule)(); };
IngredientModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: IngredientModule });
IngredientModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ providers: [_resolvers_ingredient_resolver__WEBPACK_IMPORTED_MODULE_7__.IngredientResolver, _services_unit_converter_unit_converter_service__WEBPACK_IMPORTED_MODULE_8__.UnitConverterService], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule,
            _ingredient_routing_module__WEBPACK_IMPORTED_MODULE_1__.IngredientRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslateModule.forChild(),
            ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_13__.NzCardModule,
            ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_14__.NzPageHeaderModule,
            ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_15__.NzBreadCrumbModule,
            ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_16__.NzTableModule,
            ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_17__.NzMessageModule,
            ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_18__.NzInputModule,
            ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_19__.NzInputNumberModule,
            ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_20__.NzButtonModule,
            ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_21__.NzIconModule,
            ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_22__.NzGridModule,
            ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_23__.NzFormModule,
            ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_16__.NzTableModule,
            ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_24__.NzTabsModule,
            ng_zorro_antd_collapse__WEBPACK_IMPORTED_MODULE_25__.NzCollapseModule,
            ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_26__.NzSelectModule,
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_27__.NgSelectModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](IngredientModule, { declarations: [_pages_ingredient_list_ingredient_list_component__WEBPACK_IMPORTED_MODULE_2__.IngredientListComponent,
        _components_ingredient_compact_ingredient_compact_component__WEBPACK_IMPORTED_MODULE_3__.IngredientCompactComponent,
        _pages_ingredient_details_ingredient_details_component__WEBPACK_IMPORTED_MODULE_4__.IngredientDetailsComponent,
        _components_caution_select_caution_select_component__WEBPACK_IMPORTED_MODULE_5__.CautionSelectComponent,
        _components_function_select_function_select_component__WEBPACK_IMPORTED_MODULE_6__.FunctionSelectComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule,
        _ingredient_routing_module__WEBPACK_IMPORTED_MODULE_1__.IngredientRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslateModule, ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_13__.NzCardModule,
        ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_14__.NzPageHeaderModule,
        ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_15__.NzBreadCrumbModule,
        ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_16__.NzTableModule,
        ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_17__.NzMessageModule,
        ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_18__.NzInputModule,
        ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_19__.NzInputNumberModule,
        ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_20__.NzButtonModule,
        ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_21__.NzIconModule,
        ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_22__.NzGridModule,
        ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_23__.NzFormModule,
        ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_16__.NzTableModule,
        ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_24__.NzTabsModule,
        ng_zorro_antd_collapse__WEBPACK_IMPORTED_MODULE_25__.NzCollapseModule,
        ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_26__.NzSelectModule,
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_27__.NgSelectModule] }); })();


/***/ }),

/***/ 70358:
/*!*************************************************************************************!*\
  !*** ./src/app/ingredient/pages/ingredient-details/ingredient-details.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IngredientDetailsComponent": () => (/* binding */ IngredientDetailsComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 79441);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 81134);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 22663);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 33927);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 85816);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ 202);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _graphql_graphql__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../graphql/graphql */ 44092);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/message */ 91804);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ngx-translate/core */ 70325);
/* harmony import */ var _shared_services_language_language_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/services/language/language.service */ 14701);
/* harmony import */ var _services_unit_converter_unit_converter_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/unit-converter/unit-converter.service */ 45021);
/* harmony import */ var ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/page-header */ 92443);
/* harmony import */ var ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-zorro-antd/breadcrumb */ 17401);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 29910);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ng-zorro-antd/icon */ 35203);
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ng-zorro-antd/form */ 32734);
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ng-zorro-antd/card */ 47108);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ng-zorro-antd/grid */ 95039);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ng-zorro-antd/input */ 29422);
/* harmony import */ var _components_function_select_function_select_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/function-select/function-select.component */ 16377);
/* harmony import */ var _components_caution_select_caution_select_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/caution-select/caution-select.component */ 87497);
/* harmony import */ var ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ng-zorro-antd/input-number */ 77727);
/* harmony import */ var ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ng-zorro-antd/tabs */ 97768);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ng-zorro-antd/button */ 56079);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 94772);
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ng-zorro-antd/select */ 61532);
/* harmony import */ var ng_zorro_antd_collapse__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ng-zorro-antd/collapse */ 39370);
/* harmony import */ var _shared_pipes_emoji_flag_from_language_code_emoji_flag_from_language_code_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/pipes/emoji-flag-from-language-code/emoji-flag-from-language-code.pipe */ 98877);































function IngredientDetailsComponent_ng_template_38_nz_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "nz-option", 20);
} if (rf & 2) {
    const unit_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nzValue", unit_r4)("nzLabel", unit_r4);
} }
function IngredientDetailsComponent_ng_template_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "nz-select", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, IngredientDetailsComponent_ng_template_38_nz_option_1_Template, 1, 2, "nz-option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r1.units);
} }
function IngredientDetailsComponent_nz_tab_41_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](1, "emojiFlagFromLanguageCode");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "lowercase");
} if (rf & 2) {
    const translation_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](1, 2, translation_r5.value.language), " ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 4, "language." + _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](3, 6, translation_r5.value.language)), "");
} }
const _c0 = function () { return { minRows: 5, maxRows: 10 }; };
const _c1 = function () { return { minRows: 2, maxRows: 5 }; };
function IngredientDetailsComponent_nz_tab_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "nz-tab", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, IngredientDetailsComponent_nz_tab_41_ng_template_1_Template, 4, 8, "ng-template", null, 22, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "nz-form-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "nz-form-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "nz-form-control", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "nz-select", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](10, "nz-option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](12, "nz-option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](14, "nz-option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "nz-form-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "nz-form-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](19, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "nz-form-control", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](21, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](22, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "nz-form-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "nz-form-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](26, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](27, "nz-form-control", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](28, "textarea", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](29, "nz-form-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "nz-form-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](32, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](33, "nz-form-control", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](34, "textarea", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](35, "nz-collapse");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](36, "nz-collapse-panel", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](37, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](38, "nz-form-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](39, "nz-form-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](41, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](42, "nz-form-control", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](43, "textarea", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](44, "nz-form-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](45, "nz-form-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](46);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](47, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](48, "nz-form-control", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](49, "textarea", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](50, "nz-form-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](51, "nz-form-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](52);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](53, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](54, "nz-form-control", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](55, "textarea", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](56, "nz-form-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](57, "nz-form-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](58);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](59, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](60, "nz-form-control", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](61, "textarea", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](62, "nz-form-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](63, "nz-form-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](64);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](65, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](66, "nz-form-control", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](67, "textarea", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](68, "nz-form-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](69, "nz-form-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](70);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](71, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](72, "nz-form-control", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](73, "textarea", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](74, "nz-form-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](75, "nz-form-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](76);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](77, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](78, "nz-form-control", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](79, "textarea", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r6 = ctx.index;
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](2);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroupName", i_r6)("nzTitle", _r7)("nzClosable", ctx_r2.translations.controls.length > 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](6, 32, "common.language"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("nzErrorTip", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](8, 34, "ui.form.should_not_be_empty"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nzValue", ctx_r2.LanguageCode.Vi)("nzLabel", "\uD83C\uDDFB\uD83C\uDDF3 " + _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](11, 36, "language.vi"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nzValue", ctx_r2.LanguageCode.En)("nzLabel", "\uD83C\uDDFA\uD83C\uDDF8 " + _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](13, 38, "language.en"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nzValue", ctx_r2.LanguageCode.Ko)("nzLabel", "\uD83C\uDDF0\uD83C\uDDF7 " + _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](15, 40, "language.ko"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](19, 42, "ingredient.name"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("nzErrorTip", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](21, 44, "ui.form.should_not_be_empty"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](26, 46, "ingredient.description"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nzAutosize", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](66, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](32, 48, "ingredient.effect"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nzAutosize", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](67, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nzHeader", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](37, 50, "ingredient.functional_food"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](41, 52, "ingredient.dose"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nzAutosize", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](68, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](47, 54, "ingredient.exceed_dose"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nzAutosize", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](69, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](53, 56, "ingredient.pregnant"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nzAutosize", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](70, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](59, 58, "ingredient.combination"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nzAutosize", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](71, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](65, 60, "ingredient.not_combination"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nzAutosize", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](72, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](71, 62, "ingredient.notable_case"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nzAutosize", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](73, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](77, 64, "ingredient.attention"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nzAutosize", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](74, _c1));
} }
const _c2 = function () { return []; };
const IU = 'IU';
class IngredientDetailsComponent {
    constructor(fb, route, location, createIngredientGQL, updateIngredientGQL, msgService, translateService, languageService, unitConverter) {
        this.fb = fb;
        this.route = route;
        this.location = location;
        this.createIngredientGQL = createIngredientGQL;
        this.updateIngredientGQL = updateIngredientGQL;
        this.msgService = msgService;
        this.translateService = translateService;
        this.languageService = languageService;
        this.unitConverter = unitConverter;
        this.LanguageCode = _graphql_graphql__WEBPACK_IMPORTED_MODULE_1__.LanguageCode;
        this.units = [...Object.values(_graphql_graphql__WEBPACK_IMPORTED_MODULE_1__.Unit), IU];
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subject();
        this.loading = false;
        this.validateForm = this.fb.group({
            ewg: [null],
            translations: this.fb.array([], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required),
            functionTranslations: this.fb.control([]),
            cautionTranslations: this.fb.control([]),
            rdi: [null],
            rdiUnit: [null],
        });
    }
    ngOnInit() {
        this.route.data
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.destroy$), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.map)((value) => value.ingredient))
            .subscribe((ingredient) => {
            var _a, _b, _c, _d, _e, _f, _g, _h;
            this.ingredient = ingredient;
            const rdiData = this.unitConverter.convert({
                id: this.ingredient.id,
                amount: ((_b = (_a = this.ingredient) === null || _a === void 0 ? void 0 : _a.attributes) === null || _b === void 0 ? void 0 : _b.rdi) || undefined,
                amountUnit: ((_d = (_c = this.ingredient) === null || _c === void 0 ? void 0 : _c.attributes) === null || _d === void 0 ? void 0 : _d.rdiUnit) || undefined,
            }, 'source');
            this.validateForm.patchValue({
                ewg: (_e = this.ingredient) === null || _e === void 0 ? void 0 : _e.ewg,
                rdi: rdiData.amount,
                rdiUnit: rdiData.amountUnit,
            });
            this.validateForm.setControl('translations', this.fb.array(this.languageService
                .sort([...(((_f = this.ingredient) === null || _f === void 0 ? void 0 : _f.translations) || [])])
                .map((translation) => {
                return this.fb.group({
                    id: [translation.id],
                    name: [translation.name, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
                    language: [translation.language, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
                    description: [translation.description],
                    effect: [translation.effect],
                    dose: [translation.dose],
                    exceedDose: [translation.exceedDose],
                    pregnant: [translation.pregnant],
                    combination: [translation.combination],
                    notCombination: [translation.notCombination],
                    notableCase: [translation.notableCase],
                    attention: [translation.attention],
                });
            }) || [], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required));
            this.validateForm.patchValue({
                functionTranslations: ((_g = ingredient.specialFunctions) === null || _g === void 0 ? void 0 : _g.map((f) => {
                    var _a;
                    return (Object.assign(Object.assign({}, (_a = f.translations) === null || _a === void 0 ? void 0 : _a[0]), { function: Object.assign({}, f) }));
                })) || [],
                cautionTranslations: ((_h = ingredient.cautions) === null || _h === void 0 ? void 0 : _h.map((caution) => {
                    var _a;
                    return (Object.assign(Object.assign({}, (_a = caution.translations) === null || _a === void 0 ? void 0 : _a[0]), { caution }));
                })) || [],
            });
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
            name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
            language: [language, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
            description: [],
            effect: [],
            dose: [],
            exceedDose: [],
            pregnant: [],
            combination: [],
            notCombination: [],
            notableCase: [],
            attention: [],
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
        (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.of)((_a = this.ingredient) === null || _a === void 0 ? void 0 : _a.id)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.mergeMap)((value) => {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u;
            if (value) {
                const rdiData = this.unitConverter.convert({
                    id: value,
                    amount: ((_a = this.validateForm.get('rdi')) === null || _a === void 0 ? void 0 : _a.value) || undefined,
                    amountUnit: ((_b = this.validateForm.get('rdiUnit')) === null || _b === void 0 ? void 0 : _b.value) || undefined,
                }, 'target');
                const data = {
                    ewg: (_c = this.validateForm.get('ewg')) === null || _c === void 0 ? void 0 : _c.value,
                    attribute: ((_d = this.validateForm.get('rdi')) === null || _d === void 0 ? void 0 : _d.value) && {
                        create: {
                            rdi: rdiData.amount,
                            rdiUnit: rdiData.amountUnit,
                        },
                    },
                    translations: {
                        create: (_e = this.translations.value) === null || _e === void 0 ? void 0 : _e.filter((translation) => !translation.id).map((translation) => lodash__WEBPACK_IMPORTED_MODULE_0___default().omit(translation, ['id'])),
                        set: (_f = this.translations.value) === null || _f === void 0 ? void 0 : _f.filter((translation) => translation.id),
                    },
                    cautions: {
                        set: ((_h = (_g = this.validateForm
                            .get('cautionTranslations')) === null || _g === void 0 ? void 0 : _g.value) === null || _h === void 0 ? void 0 : _h.map((translation) => ({
                            id: translation.caution.id,
                        }))) || [],
                    },
                    functions: {
                        set: ((_k = (_j = this.validateForm
                            .get('functionTranslations')) === null || _j === void 0 ? void 0 : _j.value) === null || _k === void 0 ? void 0 : _k.map((translation) => ({
                            id: translation.function.id,
                        }))) || [],
                    },
                };
                return this.updateIngredientGQL.mutate({
                    where: {
                        id: value,
                    },
                    data,
                });
            }
            else {
                const data = {
                    ewg: (_l = this.validateForm.get('ewg')) === null || _l === void 0 ? void 0 : _l.value,
                    attribute: ((_m = this.validateForm.get('rdi')) === null || _m === void 0 ? void 0 : _m.value) && {
                        create: {
                            rdi: (_o = this.validateForm.get('rdi')) === null || _o === void 0 ? void 0 : _o.value,
                            rdiUnit: (_p = this.validateForm.get('rdiUnit')) === null || _p === void 0 ? void 0 : _p.value,
                        },
                    },
                    translations: {
                        create: (_q = this.translations.value) === null || _q === void 0 ? void 0 : _q.map((translation) => lodash__WEBPACK_IMPORTED_MODULE_0___default().omit(translation, ['id'])),
                    },
                    cautions: {
                        connect: ((_s = (_r = this.validateForm
                            .get('cautionTranslations')) === null || _r === void 0 ? void 0 : _r.value) === null || _s === void 0 ? void 0 : _s.map((translation) => ({
                            id: translation.caution.id,
                        }))) || {},
                    },
                    functions: {
                        connect: ((_u = (_t = this.validateForm
                            .get('functionTranslations')) === null || _t === void 0 ? void 0 : _t.value) === null || _u === void 0 ? void 0 : _u.map((translation) => ({
                            id: translation.function.id,
                        }))) || {},
                    },
                };
                return this.createIngredientGQL.mutate({
                    data,
                });
            }
        }))
            .subscribe(({ errors, data }) => {
            var _a, _b;
            if (errors) {
                this.msgService.error(this.translateService.instant(`ingredient.${((_a = this.ingredient) === null || _a === void 0 ? void 0 : _a.id) ? 'update' : 'create'}_error`));
            }
            if (data) {
                this.msgService.success(this.translateService.instant(`ingredient.${((_b = this.ingredient) === null || _b === void 0 ? void 0 : _b.id) ? 'update' : 'create'}_success`));
                this.location.back();
            }
            this.loading = false;
        }, () => {
            var _a;
            this.msgService.error(this.translateService.instant(`ingredient.${((_a = this.ingredient) === null || _a === void 0 ? void 0 : _a.id) ? 'update' : 'create'}_error`));
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
IngredientDetailsComponent.ɵfac = function IngredientDetailsComponent_Factory(t) { return new (t || IngredientDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_14__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_15__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_graphql_graphql__WEBPACK_IMPORTED_MODULE_1__.CreateIngredientGQL), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_graphql_graphql__WEBPACK_IMPORTED_MODULE_1__.UpdateIngredientGQL), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_16__.NzMessageService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_shared_services_language_language_service__WEBPACK_IMPORTED_MODULE_2__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_unit_converter_unit_converter_service__WEBPACK_IMPORTED_MODULE_3__.UnitConverterService)); };
IngredientDetailsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: IngredientDetailsComponent, selectors: [["app-ingredient-details"]], decls: 51, vars: 27, consts: [[1, "site-page-header"], ["nz-page-header-breadcrumb", ""], ["nz-icon", "", "nzType", "home"], ["routerLink", "/ingredients"], ["nz-form", "", 3, "nzLayout", "formGroup", "ngSubmit"], [1, "mb-3"], [1, "ewg"], ["nz-input", "", "formControlName", "ewg"], ["formControlName", "functionTranslations"], ["formControlName", "cautionTranslations"], [3, "nzAddOnAfter"], ["formControlName", "rdi", "type", "number", 1, "w-100"], ["unit", ""], ["nzType", "editable-card", "formArrayName", "translations", 3, "nzAdd", "nzClose"], ["nzClosable", "", 3, "formGroupName", "nzTitle", "nzClosable", 4, "ngFor", "ngForOf"], [1, "mt-2", "pb-4"], ["nz-button", "", "nzType", "primary", 3, "nzLoading"], ["nz-button", "", "type", "button", 1, "ml-2", 3, "nzDanger", "click"], ["formControlName", "rdiUnit", "nzAllowClear", "", 1, "unit"], [3, "nzValue", "nzLabel", 4, "ngFor", "ngForOf"], [3, "nzValue", "nzLabel"], ["nzClosable", "", 3, "formGroupName", "nzTitle", "nzClosable"], ["title", ""], ["nzHasFeedback", "", 3, "nzErrorTip"], ["formControlName", "language"], ["nz-input", "", "formControlName", "name"], ["nzHasFeedback", ""], ["nz-input", "", "formControlName", "description", 3, "nzAutosize"], ["nz-input", "", "formControlName", "effect", 3, "nzAutosize"], [3, "nzHeader"], ["nz-input", "", "formControlName", "dose", 3, "nzAutosize"], ["nz-input", "", "formControlName", "exceedDose", 3, "nzAutosize"], ["nz-input", "", "formControlName", "pregnant", 3, "nzAutosize"], ["nz-input", "", "formControlName", "combination", 3, "nzAutosize"], ["nz-input", "", "formControlName", "notCombination", 3, "nzAutosize"], ["nz-input", "", "formControlName", "notableCase", 3, "nzAutosize"], ["nz-input", "", "formControlName", "attention", 3, "nzAutosize"]], template: function IngredientDetailsComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngSubmit", function IngredientDetailsComponent_Template_form_ngSubmit_11_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "nz-card", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "nz-form-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16, "ewg");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "nz-form-control");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](18, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "nz-form-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](22, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "nz-form-control");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](24, "app-function-select", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "nz-form-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](28, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](29, "nz-form-control");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](30, "app-caution-select", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](31, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](32, "nz-form-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](34, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](35, "nz-form-control");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](36, "nz-input-group", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](37, "nz-input-number", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](38, IngredientDetailsComponent_ng_template_38_Template, 2, 1, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](40, "nz-tabset", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("nzAdd", function IngredientDetailsComponent_Template_nz_tabset_nzAdd_40_listener() { return ctx.addTab(); })("nzClose", function IngredientDetailsComponent_Template_nz_tabset_nzClose_40_listener($event) { return ctx.removeTab($event.index); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](41, IngredientDetailsComponent_nz_tab_41_Template, 80, 75, "nz-tab", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](42, "nz-form-item", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](43, "nz-form-control");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](44, "nz-input-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](45, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](46);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](47, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](48, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function IngredientDetailsComponent_Template_button_click_48_listener() { return ctx.cancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](49);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](50, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](7, 13, "common.ingredient"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](((ctx.ingredient == null ? null : ctx.ingredient.translations) || _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](25, _c2))[0] == null ? null : ((ctx.ingredient == null ? null : ctx.ingredient.translations) || _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](26, _c2))[0].name);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nzLayout", "vertical")("formGroup", ctx.validateForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](22, 15, "ingredient.special_function"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](28, 17, "ingredient.caution"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](34, 19, "product.rdi"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nzAddOnAfter", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.translations.controls);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nzLoading", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](47, 21, (ctx.ingredient == null ? null : ctx.ingredient.id) ? "common.update" : "common.add"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nzDanger", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](50, 23, "common.cancel"), " ");
    } }, directives: [ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_18__.NzPageHeaderComponent, ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_19__.NzBreadCrumbComponent, ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_18__.NzPageHeaderBreadcrumbDirective, ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_19__.NzBreadCrumbItemComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_20__["ɵNzTransitionPatchDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_21__.NzIconDirective, _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterLinkWithHref, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatusGroup, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_22__.NzFormDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroupDirective, ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_23__.NzCardComponent, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_24__.NzRowDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_22__.NzFormItemComponent, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_24__.NzColDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_22__.NzFormLabelComponent, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_22__.NzFormControlComponent, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_25__.NzInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControlName, _components_function_select_function_select_component__WEBPACK_IMPORTED_MODULE_4__.FunctionSelectComponent, _components_caution_select_caution_select_component__WEBPACK_IMPORTED_MODULE_5__.CautionSelectComponent, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_25__.NzInputGroupComponent, ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_26__.NzInputNumberComponent, ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_27__.NzTabSetComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormArrayName, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgForOf, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_28__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_29__.NzWaveDirective, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_30__.NzSelectComponent, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_30__.NzOptionComponent, ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_27__.NzTabComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroupName, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_25__.NzAutosizeDirective, ng_zorro_antd_collapse__WEBPACK_IMPORTED_MODULE_31__.NzCollapseComponent, ng_zorro_antd_collapse__WEBPACK_IMPORTED_MODULE_31__.NzCollapsePanelComponent], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__.TranslatePipe, _shared_pipes_emoji_flag_from_language_code_emoji_flag_from_language_code_pipe__WEBPACK_IMPORTED_MODULE_6__.EmojiFlagFromLanguageCodePipe, _angular_common__WEBPACK_IMPORTED_MODULE_15__.LowerCasePipe], styles: [".ewg[_ngcontent-%COMP%] {\n  color: darkgreen;\n  font-weight: bold;\n}\n\n.unit[_ngcontent-%COMP%] {\n  min-width: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZ3JlZGllbnQtZGV0YWlscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0FBQ0YiLCJmaWxlIjoiaW5ncmVkaWVudC1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV3ZyB7XG4gIGNvbG9yOiBkYXJrZ3JlZW47XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4udW5pdCB7XG4gIG1pbi13aWR0aDogMTAwcHg7XG59XG4iXX0= */"] });


/***/ }),

/***/ 71923:
/*!*******************************************************************************!*\
  !*** ./src/app/ingredient/pages/ingredient-list/ingredient-list.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IngredientListComponent": () => (/* binding */ IngredientListComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 79441);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 22663);
/* harmony import */ var _graphql_graphql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../graphql/graphql */ 44092);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/message */ 91804);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 70325);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/page-header */ 92443);
/* harmony import */ var ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/breadcrumb */ 17401);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 29910);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/icon */ 35203);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/button */ 56079);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 94772);
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/card */ 47108);
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/form */ 32734);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/input */ 29422);
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/table */ 4316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _components_ingredient_compact_ingredient_compact_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/ingredient-compact/ingredient-compact.component */ 48170);





















function IngredientListComponent_ng_template_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 1, "common.search"), " ");
} }
const _c0 = function (a1) { return ["/ingredients", a1]; };
function IngredientListComponent_tr_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "app-ingredient-compact", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ingredient_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ingredient_r3.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ingredient", ingredient_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](6, _c0, ingredient_r3.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](8, 4, "common.edit"));
} }
class IngredientListComponent {
    constructor(route, router, getIngredientListGQL, msgService, translateService, fb) {
        this.route = route;
        this.router = router;
        this.getIngredientListGQL = getIngredientListGQL;
        this.msgService = msgService;
        this.translateService = translateService;
        this.fb = fb;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
        this.ingredients = [];
        this.ingredientsCount = 0;
        this.pageIndex = 1;
        this.pageSize = 10;
        this.loading = false;
        this.searchForm = this.fb.group({
            name: [null],
        });
    }
    ngOnInit() {
        this.route.queryParamMap
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this.destroy$))
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
                this.dataQueryRef = this.getIngredientListGQL.watch(this.getVariables(), {
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
                        this.ingredients = data.ingredients;
                        this.ingredientsCount =
                            data.ingredientsConnection.aggregate.count;
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
IngredientListComponent.ɵfac = function IngredientListComponent_Factory(t) { return new (t || IngredientListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_graphql_graphql__WEBPACK_IMPORTED_MODULE_0__.GetIngredientListGQL), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_6__.NzMessageService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder)); };
IngredientListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: IngredientListComponent, selectors: [["app-ingredient-list"]], decls: 35, vars: 24, consts: [[1, "site-page-header", 3, "nzTitle"], ["nz-page-header-breadcrumb", ""], ["nz-icon", "", "nzType", "home"], ["nz-button", "", "nzType", "primary", "routerLink", "/ingredients/new"], ["nz-icon", "", "nzType", "plus", "nzTheme", "outline"], [1, "mb-3"], ["nz-form", "", 3, "formGroup", "ngSubmit"], [1, "row", "justify-content-lg-center"], [1, "col-12", "col-lg-6"], ["nzSearch", "", 3, "nzAddOnAfter"], ["formControlName", "name", "type", "text", "nz-input", "", 3, "placeholder"], ["suffixIconButton", ""], [1, "mb-4"], ["nzBordered", "", 3, "nzData", "nzFrontPagination", "nzTotal", "nzPageIndex", "nzPageSize", "nzLoading", "nzQueryParams"], [4, "ngFor", "ngForOf"], ["nz-button", "", "nzType", "primary", "type", "submit", "nzSearch", ""], ["nz-icon", "", "nzType", "search", "nzTheme", "outline"], [3, "ingredient"], [3, "routerLink"]], template: function IngredientListComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function IngredientListComponent_Template_form_ngSubmit_15_listener() { return ctx.handleSearch(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "nz-input-group", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](20, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](21, IngredientListComponent_ng_template_21_Template, 4, 3, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "nz-card", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "nz-table", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("nzQueryParams", function IngredientListComponent_Template_nz_table_nzQueryParams_24_listener($event) { return ctx.handleQueryParamsChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](31, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](32, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](34, IngredientListComponent_tr_34_Template, 9, 8, "tr", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("nzTitle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 14, "common.ingredient"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](8, 16, "common.ingredient"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](13, 18, "ingredient.create"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.searchForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzAddOnAfter", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](20, 20, "ingredient.name"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzData", ctx.ingredients)("nzFrontPagination", false)("nzTotal", ctx.ingredientsCount)("nzPageIndex", ctx.pageIndex)("nzPageSize", ctx.pageSize)("nzLoading", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](31, 22, "ingredient.name"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.ingredients);
    } }, directives: [ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_9__.NzPageHeaderComponent, ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_10__.NzBreadCrumbComponent, ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_9__.NzPageHeaderBreadcrumbDirective, ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_10__.NzBreadCrumbItemComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_11__["ɵNzTransitionPatchDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_12__.NzIconDirective, ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_9__.NzPageHeaderExtraDirective, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_13__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_14__.NzWaveDirective, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_15__.NzCardComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_16__.NzFormDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupDirective, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_17__.NzInputGroupComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_17__.NzInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlName, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_18__.NzTableComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_18__.NzTheadComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_18__.NzTrDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_18__.NzTableCellDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_18__.NzThMeasureDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_18__.NzTbodyComponent, _angular_common__WEBPACK_IMPORTED_MODULE_19__.NgForOf, _components_ingredient_compact_ingredient_compact_component__WEBPACK_IMPORTED_MODULE_1__.IngredientCompactComponent, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkWithHref], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbmdyZWRpZW50LWxpc3QuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 30037:
/*!*************************************************************!*\
  !*** ./src/app/ingredient/resolvers/ingredient.resolver.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IngredientResolver": () => (/* binding */ IngredientResolver)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 33927);
/* harmony import */ var _graphql_graphql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../graphql/graphql */ 44092);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);





class IngredientResolver {
    constructor(router, getIngredientDetailsGQL) {
        this.router = router;
        this.getIngredientDetailsGQL = getIngredientDetailsGQL;
    }
    resolve(route, state) {
        const id = parseInt(route.paramMap.get('id') || '', 10);
        if (id) {
            return this.getIngredientDetailsGQL
                .fetch({
                id,
            }, {
                fetchPolicy: 'network-only',
            })
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((result) => {
                var _a, _b;
                if (result.error || result.errors) {
                    this.router.navigateByUrl('/exception/500');
                    return undefined;
                }
                if ((_a = result.data) === null || _a === void 0 ? void 0 : _a.ingredient) {
                    return Object.assign(Object.assign({}, result.data.ingredient), { translations: ((_b = result.data.ingredient.translations) === null || _b === void 0 ? void 0 : _b.length) === 0
                            ? [
                                {
                                    language: _graphql_graphql__WEBPACK_IMPORTED_MODULE_0__.LanguageCode.Vi,
                                },
                            ]
                            : result.data.ingredient.translations });
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
IngredientResolver.ɵfac = function IngredientResolver_Factory(t) { return new (t || IngredientResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_graphql_graphql__WEBPACK_IMPORTED_MODULE_0__.GetIngredientDetailsGQL)); };
IngredientResolver.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: IngredientResolver, factory: IngredientResolver.ɵfac });


/***/ }),

/***/ 45021:
/*!******************************************************************************!*\
  !*** ./src/app/ingredient/services/unit-converter/unit-converter.service.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UnitConverterService": () => (/* binding */ UnitConverterService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_fire_compat_remote_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/compat/remote-config */ 44405);


const IU = 'IU';
class UnitConverterService {
    constructor(remoteConfig) {
        this.remoteConfig = remoteConfig;
        this.remoteConfig.strings.IU_INGREDIENTS.subscribe((value) => {
            this.IUConfig = value && JSON.parse(value);
        });
    }
    convert(ingredientRow, toSourceOrTarget) {
        var _a;
        const config = (_a = this.IUConfig) === null || _a === void 0 ? void 0 : _a[`${ingredientRow.id}`];
        if (!ingredientRow.amountUnit ||
            !ingredientRow.amount ||
            !config ||
            (toSourceOrTarget === 'source' &&
                ingredientRow.amountUnit !== config.targetUnit) ||
            (toSourceOrTarget === 'target' &&
                ingredientRow.amountUnit !== config.sourceUnit)) {
            return ingredientRow;
        }
        ingredientRow.amountUnit =
            toSourceOrTarget === 'source' ? config.sourceUnit : config.targetUnit;
        ingredientRow.amount =
            toSourceOrTarget === 'source'
                ? (ingredientRow.amount / config.targetValue) * config.sourceValue
                : (ingredientRow.amount / config.sourceValue) * config.targetValue;
        return ingredientRow;
    }
}
UnitConverterService.ɵfac = function UnitConverterService_Factory(t) { return new (t || UnitConverterService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_compat_remote_config__WEBPACK_IMPORTED_MODULE_1__.AngularFireRemoteConfig)); };
UnitConverterService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UnitConverterService, factory: UnitConverterService.ɵfac });


/***/ })

}]);
//# sourceMappingURL=default-src_app_ingredient_ingredient_module_ts.js.map