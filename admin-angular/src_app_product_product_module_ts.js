"use strict";
(self["webpackChunkadmin_angular"] = self["webpackChunkadmin_angular"] || []).push([["src_app_product_product_module_ts"],{

/***/ 59403:
/*!*****************************************************************************************!*\
  !*** ./src/app/product/components/ingredient-analysis/ingredient-analysis.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IngredientAnalysisComponent": () => (/* binding */ IngredientAnalysisComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 79441);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 22663);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _graphql_graphql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../graphql/graphql */ 44092);
/* harmony import */ var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/message */ 91804);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 70325);
/* harmony import */ var ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/drawer */ 88346);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/grid */ 95039);
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/form */ 32734);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/input */ 29422);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 29910);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/button */ 56079);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 94772);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/icon */ 35203);
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/table */ 4316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 54364);

















function IngredientAnalysisComponent_tr_27_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("nzCheckedChange", function IngredientAnalysisComponent_tr_27_Template_td_nzCheckedChange_1_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const ingredient_r2 = restoredCtx.$implicit; return ingredient_r2.checked = $event; })("nzCheckedChange", function IngredientAnalysisComponent_tr_27_Template_td_nzCheckedChange_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r5.refreshStatus(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ingredient_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzLeft", true)("nzChecked", ingredient_r2.checked)("nzDisabled", ingredient_r2.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ingredient_r2 == null ? null : ingredient_r2.source, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ingredient_r2 == null ? null : ingredient_r2.target, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzLeft", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ingredient_r2 == null ? null : ingredient_r2.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzLeft", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ingredient_r2 == null ? null : ingredient_r2.ewg);
} }
const _c0 = function () { return { minRows: 5, maxRows: 10 }; };
const _c1 = function () { return []; };
const CosDNARegExp = /(.+?)[\r\n]+.*?[\r\n]?\t(.*?)\t(.*?)\t(.*?)\t(.*)/g;
const SkincarismaRegExp = /(\d?)[\r\n]+\t(.*?)[\r\n]+\t(.*?)[\r\n]+/g;
var IngredientSource;
(function (IngredientSource) {
    IngredientSource[IngredientSource["COSDNA"] = 1] = "COSDNA";
    IngredientSource[IngredientSource["SKINCARISMA"] = 2] = "SKINCARISMA";
    IngredientSource[IngredientSource["OTHER"] = 3] = "OTHER";
})(IngredientSource || (IngredientSource = {}));
class IngredientAnalysisComponent {
    constructor(analyzeIngredientsGQL, msgService, translateService, drawerRef) {
        this.analyzeIngredientsGQL = analyzeIngredientsGQL;
        this.msgService = msgService;
        this.translateService = translateService;
        this.drawerRef = drawerRef;
        this.IngredientSource = IngredientSource;
        this.allChecked = true;
        this.selectedIngredients = new Set();
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    }
    ngOnInit() {
        if (!this.analyzedResult || !this.selectedIngredients) {
            return;
        }
        this.analyzedResult = this.analyzedResult.map((ingredient) => {
            ingredient.checked = this.selectedIngredients.has(ingredient.id || 0);
            ingredient.disabled =
                this.selectedIngredients.has(ingredient.id || 0) || !ingredient.id;
            return ingredient;
        });
    }
    analyzeIngredients(source) {
        this.analyzing = source;
        if (!this.searchText) {
            this.analyzing = undefined;
            return;
        }
        let ingredients;
        const names = [];
        if (source !== IngredientSource.OTHER) {
            const regex = source === IngredientSource.COSDNA ? CosDNARegExp : SkincarismaRegExp;
            let array;
            while (true) {
                array = regex.exec(this.searchText);
                if (!array) {
                    break;
                }
                names.push(array[source === IngredientSource.COSDNA ? 1 : 3]);
            }
            ingredients = names.join(';');
        }
        else {
            ingredients = this.searchText;
            names.push(...ingredients.split(';'));
        }
        this.analyzeIngredientsGQL
            .watch({
            text: ingredients,
        }, {
            notifyOnNetworkStatusChange: true,
            errorPolicy: 'all',
        })
            .valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.takeUntil)(this.destroy$))
            .subscribe(({ data, loading, errors, error }) => {
            this.analyzing = (loading && source) || undefined;
            if (loading) {
                return;
            }
            if (error || errors) {
                this.msgService.error(this.translateService.instant('ui.message.error'));
                return;
            }
            if (data) {
                this.analyzedResult = data.analyzeIngredients.ingredients.map((ingredient, index) => {
                    var _a;
                    return {
                        id: ingredient === null || ingredient === void 0 ? void 0 : ingredient.id,
                        source: names[index],
                        target: (_a = ingredient === null || ingredient === void 0 ? void 0 : ingredient.translations) === null || _a === void 0 ? void 0 : _a[0].name,
                        ewg: (ingredient === null || ingredient === void 0 ? void 0 : ingredient.ewg) || undefined,
                        checked: !!ingredient,
                        disabled: !ingredient || this.selectedIngredients.has(ingredient.id),
                    };
                });
            }
        });
    }
    checkAllIngredients(value) {
        var _a;
        (_a = this.analyzedResult) === null || _a === void 0 ? void 0 : _a.forEach((ingredient) => {
            if (ingredient.id) {
                ingredient.checked = value;
            }
        });
        this.refreshStatus();
    }
    refreshStatus() {
        var _a;
        const validData = ((_a = this.analyzedResult) === null || _a === void 0 ? void 0 : _a.filter((value) => !!value.id)) || [];
        this.allChecked =
            validData.length > 0 &&
                validData.every((value) => value.checked === true);
    }
    pickAnalyzedIngredients() {
        var _a;
        if (!((_a = this.analyzedResult) === null || _a === void 0 ? void 0 : _a.length)) {
            return;
        }
        this.drawerRef.close(this.backupData(false));
    }
    cancel() {
        this.drawerRef.close(this.backupData(true));
    }
    backupData(cancelled) {
        var _a;
        return {
            allChecked: this.allChecked,
            searchText: this.searchText,
            analyzedResult: this.analyzedResult,
            newSelectedIngredients: cancelled
                ? []
                : (_a = this.analyzedResult) === null || _a === void 0 ? void 0 : _a.filter((i) => i.checked && !i.disabled),
        };
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.unsubscribe();
    }
}
IngredientAnalysisComponent.ɵfac = function IngredientAnalysisComponent_Factory(t) { return new (t || IngredientAnalysisComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_graphql_graphql__WEBPACK_IMPORTED_MODULE_0__.AnalyzeIngredientsGQL), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_4__.NzMessageService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_6__.NzDrawerRef)); };
IngredientAnalysisComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: IngredientAnalysisComponent, selectors: [["app-ingredient-analysis"]], decls: 35, vars: 24, consts: [[1, "mb-2"], ["nz-input", "", 3, "nzAutosize", "ngModel", "ngModelChange"], ["nz-button", "", "nzType", "dashed", "type", "button", 1, "mr-2", 3, "nzLoading", "click"], ["nz-icon", "", "nzType", "search", "nzTheme", "outline"], ["nz-button", "", "nzType", "dashed", "type", "button", 3, "nzLoading", "click"], [3, "nzData", "hidden", "nzPageSize"], ["table", ""], ["nzWidth", "60px", 3, "nzLeft", "nzChecked", "nzCheckedChange"], [3, "nzLeft"], [4, "ngFor", "ngForOf"], ["nz-button", "", 1, "mr-2", 3, "click"], ["nz-button", "", "type", "button", "nzType", "primary", 3, "click"], [3, "nzLeft", "nzChecked", "nzDisabled", "nzCheckedChange"]], template: function IngredientAnalysisComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nz-form-control", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "textarea", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function IngredientAnalysisComponent_Template_textarea_ngModelChange_1_listener($event) { return ctx.searchText = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "nz-input-group", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function IngredientAnalysisComponent_Template_button_click_3_listener() { return ctx.analyzeIngredients(ctx.IngredientSource.COSDNA); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "CosDNA ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function IngredientAnalysisComponent_Template_button_click_6_listener() { return ctx.analyzeIngredients(ctx.IngredientSource.SKINCARISMA); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Skincarisma ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function IngredientAnalysisComponent_Template_button_click_9_listener() { return ctx.analyzeIngredients(ctx.IngredientSource.OTHER); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](12, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "nz-table", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("nzCheckedChange", function IngredientAnalysisComponent_Template_th_nzCheckedChange_17_listener($event) { return ctx.checkAllIngredients($event); })("nzCheckedChange", function IngredientAnalysisComponent_Template_th_nzCheckedChange_17_listener($event) { return ctx.allChecked = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Source");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Target");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "EWG");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, IngredientAnalysisComponent_tr_27_Template, 10, 9, "tr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function IngredientAnalysisComponent_Template_button_click_29_listener() { return ctx.cancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](31, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function IngredientAnalysisComponent_Template_button_click_32_listener() { return ctx.pickAnalyzedIngredients(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](34, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzAutosize", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](22, _c0))("ngModel", ctx.searchText);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzLoading", ctx.analyzing === ctx.IngredientSource.COSDNA);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzLoading", ctx.analyzing === ctx.IngredientSource.SKINCARISMA);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzLoading", ctx.analyzing === ctx.IngredientSource.OTHER);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](12, 16, "common.other"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzData", ctx.analyzedResult || _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](23, _c1))("hidden", !ctx.analyzedResult)("nzPageSize", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzLeft", true)("nzChecked", ctx.allChecked);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzLeft", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzLeft", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _r0.data);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](31, 18, "common.cancel"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](34, 20, "product.import_ingredients"), " ");
    } }, directives: [ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_7__.NzColDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_8__.NzFormControlComponent, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_9__.NzInputDirective, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_9__.NzAutosizeDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgModel, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_11__["ɵNzTransitionPatchDirective"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_9__.NzInputGroupComponent, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_12__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_13__.NzWaveDirective, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_14__.NzIconDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_15__.NzTableComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_15__.NzTheadComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_15__.NzTrDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_15__.NzTableCellDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_15__.NzThMeasureDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_15__.NzCellFixedDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_15__.NzThSelectionComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_15__.NzTbodyComponent, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgForOf, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_15__.NzTdAddOnComponent], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbmdyZWRpZW50LWFuYWx5c2lzLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 23642:
/*!****************************************************************************!*\
  !*** ./src/app/product/pages/product-details/product-details.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductDetailsComponent": () => (/* binding */ ProductDetailsComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 79441);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 61486);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs */ 81134);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 22663);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs/operators */ 85816);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ 202);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/cdk/layout */ 66883);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../environments/environment */ 92340);
/* harmony import */ var _graphql_graphql__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../graphql/graphql */ 44092);
/* harmony import */ var _components_ingredient_analysis_ingredient_analysis_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/ingredient-analysis/ingredient-analysis.component */ 59403);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common/http */ 53882);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _shared_services_file_file_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/services/file/file.service */ 52250);
/* harmony import */ var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ng-zorro-antd/message */ 91804);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @ngx-translate/core */ 70325);
/* harmony import */ var _shared_services_string_string_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/services/string/string.service */ 69665);
/* harmony import */ var _shared_services_language_language_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/services/language/language.service */ 14701);
/* harmony import */ var ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ng-zorro-antd/drawer */ 88346);
/* harmony import */ var _ingredient_services_unit_converter_unit_converter_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../ingredient/services/unit-converter/unit-converter.service */ 45021);
/* harmony import */ var ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ng-zorro-antd/page-header */ 92443);
/* harmony import */ var ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ng-zorro-antd/breadcrumb */ 17401);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 29910);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ng-zorro-antd/icon */ 35203);
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ng-zorro-antd/form */ 32734);
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ng-zorro-antd/card */ 47108);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ng-zorro-antd/grid */ 95039);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ng-zorro-antd/input */ 29422);
/* harmony import */ var ng_zorro_antd_tree_select__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ng-zorro-antd/tree-select */ 21821);
/* harmony import */ var _shared_components_brand_select_brand_select_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/components/brand-select/brand-select.component */ 85633);
/* harmony import */ var ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ng-zorro-antd/switch */ 17318);
/* harmony import */ var ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ng-zorro-antd/input-number */ 77727);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @ng-select/ng-select */ 36868);
/* harmony import */ var ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ng-zorro-antd/upload */ 40896);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ng-zorro-antd/button */ 56079);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 94772);
/* harmony import */ var _shared_components_ingredient_select_ingredient_select_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/components/ingredient-select/ingredient-select.component */ 86186);
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ng-zorro-antd/table */ 4316);
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ng-zorro-antd/select */ 61532);
/* harmony import */ var _shared_directives_img_fallback_img_fallback_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/directives/img-fallback/img-fallback.directive */ 31841);
/* harmony import */ var _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @tinymce/tinymce-angular */ 59408);
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ 79787);












































function ProductDetailsComponent_ng_template_74_nz_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "nz-option", 50);
} if (rf & 2) {
    const unit_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("nzValue", unit_r25)("nzLabel", unit_r25);
} }
function ProductDetailsComponent_ng_template_74_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "nz-select", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, ProductDetailsComponent_ng_template_74_nz_option_1_Template, 1, 2, "nz-option", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("nzAllowClear", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r1.packagingUnits);
} }
function ProductDetailsComponent_ng_template_84_nz_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "nz-option", 50);
} if (rf & 2) {
    const unit_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("nzValue", unit_r27)("nzLabel", unit_r27);
} }
function ProductDetailsComponent_ng_template_84_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "nz-select", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, ProductDetailsComponent_ng_template_84_nz_option_1_Template, 1, 2, "nz-option", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("nzAllowClear", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r3.units);
} }
function ProductDetailsComponent_ng_template_94_nz_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "nz-option", 50);
} if (rf & 2) {
    const unit_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("nzValue", unit_r29)("nzLabel", unit_r29);
} }
function ProductDetailsComponent_ng_template_94_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "nz-select", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, ProductDetailsComponent_ng_template_94_nz_option_1_Template, 1, 2, "nz-option", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("nzAllowClear", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r5.units);
} }
function ProductDetailsComponent_ng_template_104_nz_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "nz-option", 50);
} if (rf & 2) {
    const unit_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("nzValue", unit_r31)("nzLabel", unit_r31);
} }
function ProductDetailsComponent_ng_template_104_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "nz-select", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, ProductDetailsComponent_ng_template_104_nz_option_1_Template, 1, 2, "nz-option", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("nzAllowClear", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r7.units);
} }
function ProductDetailsComponent_ng_container_119_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "i", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
} }
const _c0 = function () { return []; };
function ProductDetailsComponent_img_120_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "img", 55);
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("src", ctx_r9.thumbnailFile ? ctx_r9.thumbnailImage == null ? null : ctx_r9.thumbnailImage.url : (ctx_r9.product == null ? null : ctx_r9.product.thumbnail == null ? null : ctx_r9.product.thumbnail.small == null ? null : ctx_r9.product.thumbnail.small.url) || "", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsanitizeUrl"])("appImgFallback", (ctx_r9.product == null ? null : ctx_r9.product.thumbnail == null ? null : ctx_r9.product.thumbnail.url) || _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](2, _c0));
} }
function ProductDetailsComponent_ng_container_122_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "button", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ProductDetailsComponent_ng_container_122_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r33); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return ctx_r32.addVideo(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](2, "i", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](4, 1, "product.add_video"), " ");
} }
function ProductDetailsComponent_ng_template_123_Template(rf, ctx) { if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "button", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ProductDetailsComponent_ng_template_123_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r35); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return ctx_r34.removeVideo(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "i", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "product.remove_video"), " ");
} }
function ProductDetailsComponent_div_125_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "nz-form-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "nz-form-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "nz-form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](7, "input", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](8, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](9, "nz-form-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](10, "nz-form-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](13, "nz-form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](14, "input", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("nzGutter", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("nzXs", 24)("nzSm", 24)("nzMd", 24)("nzLg", 12)("nzXl", 12)("nzXXl", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](5, 15, "product.video_title"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("nzXs", 24)("nzSm", 24)("nzMd", 24)("nzLg", 12)("nzXl", 12)("nzXXl", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](12, 17, "product.video_url"));
} }
function ProductDetailsComponent_ng_container_127_Template(rf, ctx) { if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "button", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ProductDetailsComponent_ng_container_127_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r37); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return ctx_r36.addImageDescription(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](2, "i", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](4, 1, "product.add_image_description"), " ");
} }
function ProductDetailsComponent_ng_template_128_Template(rf, ctx) { if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "button", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ProductDetailsComponent_ng_template_128_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r39); const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return ctx_r38.removeImageDescription(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "i", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "product.remove_image_description"), " ");
} }
const _c1 = "print preview fullpage paste importcss searchreplace autolink autosave save directionality code visualblocks";
const _c2 = "visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc";
const _c3 = "insertdatetime advlist lists wordcount imagetools textpattern noneditable help charmap quickbars emoticons";
const _c4 = function () { return [_c1, _c2, _c3]; };
const _c5 = "undo redo | bold italic underline strikethrough | \n      fontselect fontsizeselect formatselect | \n      alignleft aligncenter alignright alignjustify | \n      outdent indent |  numlist bullist checklist | \n      forecolor backcolor casechange permanentpen formatpainter removeformat | \n      pagebreak | charmap emoticons | fullscreen  preview save print | \n      insertfile image media pageembed template link anchor codesample | a11ycheck ltr rtl | showcomments addcomment";
const _c6 = function (a2, a3) { return { height: 500, menubar: true, images_upload_handler: a2, plugins: a3, toolbar: _c5 }; };
function ProductDetailsComponent_nz_form_item_130_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "nz-form-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "nz-form-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "nz-form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](5, "editor", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 2, "product.image_description"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("init", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction2"](5, _c6, ctx_r17.handleUploadImage, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](4, _c4)));
} }
function ProductDetailsComponent_ng_template_140_Template(rf, ctx) { if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "i", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ProductDetailsComponent_ng_template_140_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r41); const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return ctx_r40.generateSlug(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("nzTooltipTitle", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](1, 1, "product.create_slug_from_name"));
} }
function ProductDetailsComponent_ng_template_150_Template(rf, ctx) { if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "button", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ProductDetailsComponent_ng_template_150_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r43); const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return ctx_r42.addIngredients(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "i", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "product.import_ingredients"), " ");
} }
function ProductDetailsComponent_tr_171_ng_template_8_nz_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "nz-option", 50);
} if (rf & 2) {
    const unit_r49 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("nzValue", unit_r49)("nzLabel", unit_r49);
} }
function ProductDetailsComponent_tr_171_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "nz-select", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, ProductDetailsComponent_tr_171_ng_template_8_nz_option_1_Template, 1, 2, "nz-option", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("nzAllowClear", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r47.units);
} }
function ProductDetailsComponent_tr_171_Template(rf, ctx) { if (rf & 1) {
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "tr", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "nz-input-group", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](7, "nz-input-number", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](8, ProductDetailsComponent_tr_171_ng_template_8_Template, 2, 2, "ng-template", null, 68, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](11, "button", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ProductDetailsComponent_tr_171_Template_button_click_11_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r51); const i_r45 = restoredCtx.index; const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return ctx_r50.removeIngredient(i_r45); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](12, "i", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ingredient_r44 = ctx.$implicit;
    const i_r45 = ctx.index;
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](158);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("formGroupName", (_r22.nzPageIndex - 1) * _r22.nzPageSize + i_r45);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ingredient_r44.value.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ingredient_r44.value.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("nzAddOnAfter", _r46);
} }
const _c7 = function () { return { minRows: 10, maxRows: 10 }; };
const _c8 = function () { return { "max-height": "300px" }; };
const _c9 = function () { return { standalone: true }; };
const IU = 'IU';
class ProductDetailsComponent {
    constructor(fb, route, getHierarchicalCategoriesGQL, httpClient, location, fileService, createProductGQL, updateProductGQL, msgService, translateService, stringService, languageService, breakpointObserver, drawerService, unitConverter) {
        this.fb = fb;
        this.route = route;
        this.getHierarchicalCategoriesGQL = getHierarchicalCategoriesGQL;
        this.httpClient = httpClient;
        this.location = location;
        this.fileService = fileService;
        this.createProductGQL = createProductGQL;
        this.updateProductGQL = updateProductGQL;
        this.msgService = msgService;
        this.translateService = translateService;
        this.stringService = stringService;
        this.languageService = languageService;
        this.breakpointObserver = breakpointObserver;
        this.drawerService = drawerService;
        this.unitConverter = unitConverter;
        this.ProductStatus = _graphql_graphql__WEBPACK_IMPORTED_MODULE_2__.ProductStatus;
        this.units = [...Object.values(_graphql_graphql__WEBPACK_IMPORTED_MODULE_2__.Unit), IU];
        this.packagingUnits = Object.values(_graphql_graphql__WEBPACK_IMPORTED_MODULE_2__.PackagingtUnit);
        this.loading = false;
        this.selectedIngredients = [];
        this.categories = [];
        this.formatterVnd = (value) => `₫ ${value}`;
        this.beforeUploadThumbnail = (file) => {
            this.thumbnailFile = file;
            this.fileService.getBase64(file, (img, width, height) => {
                var _a;
                this.thumbnailImage = {
                    url: img,
                    name: ((_a = this.thumbnailFile) === null || _a === void 0 ? void 0 : _a.filename) || '',
                    width,
                    height,
                };
            });
            return false;
        };
        this.handleUploadImage = (blogInfo, success, failure) => {
            const data = new FormData();
            data.append('file', blogInfo.blob());
            this.httpClient
                .post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiUri}/single-upload?useWatermark=false`, data)
                .subscribe((response) => {
                success(response.url);
            }, (error) => {
                failure(error);
            });
        };
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_12__.Subject();
        this.validateForm = this.fb.group({
            name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required],
            description: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required],
            slug: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required],
            price: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required],
            measure: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required],
            status: [true, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required],
            categories: [[], _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required],
            brand: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required],
            ingredients: this.fb.array([]),
            barcodes: [[]],
            rdi: [null],
            packagingUnit: [null],
            netWeightPerPackage: [null],
            weightUnit: [null],
            netVolumePerPackage: [null],
            volumeUnit: [null],
            energyPerPackage: [null],
            energyUnit: [null],
        });
        this.languages = new Map();
        this.languages.set(_graphql_graphql__WEBPACK_IMPORTED_MODULE_2__.LanguageCode.Vi, 1);
        this.languages.set(_graphql_graphql__WEBPACK_IMPORTED_MODULE_2__.LanguageCode.En, 2);
    }
    ngOnInit() {
        (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.combineLatest)([this.route.data, this.unitConverter.fetchConfig()])
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.takeUntil)(this.destroy$))
            .subscribe(([{ product }]) => {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19, _20, _21, _22, _23, _24, _25, _26;
            this.product = product;
            this.thumbnailImage =
                (((_a = this.product) === null || _a === void 0 ? void 0 : _a.thumbnail) && {
                    url: this.product.thumbnail.url,
                    name: this.product.thumbnail.name,
                    width: this.product.thumbnail.width || 0,
                    height: this.product.thumbnail.height || 0,
                }) ||
                    undefined;
            if (((_b = this.product) === null || _b === void 0 ? void 0 : _b.videoTitle) || ((_c = this.product) === null || _c === void 0 ? void 0 : _c.videoUrl)) {
                this.addVideo();
            }
            if (
            // tslint:disable-next-line: deprecation
            ((_d = this.product) === null || _d === void 0 ? void 0 : _d.id) &&
                ((_g = (_f = (_e = this.product) === null || _e === void 0 ? void 0 : _e.translations) === null || _f === void 0 ? void 0 : _f[0]) === null || _g === void 0 ? void 0 : _g.imageDescription)) {
                this.addImageDescription();
            }
            this.validateForm.patchValue({
                name: (_k = (_j = (_h = this.product) === null || _h === void 0 ? void 0 : _h.translations) === null || _j === void 0 ? void 0 : _j[0]) === null || _k === void 0 ? void 0 : _k.name,
                description: (_o = (_m = (_l = this.product) === null || _l === void 0 ? void 0 : _l.translations) === null || _m === void 0 ? void 0 : _m[0]) === null || _o === void 0 ? void 0 : _o.description,
                imageDescription: (_r = (_q = (_p = this.product) === null || _p === void 0 ? void 0 : _p.translations) === null || _q === void 0 ? void 0 : _q[0]) === null || _r === void 0 ? void 0 : _r.imageDescription,
                slug: (_u = (_t = (_s = this.product) === null || _s === void 0 ? void 0 : _s.translations) === null || _t === void 0 ? void 0 : _t[0]) === null || _u === void 0 ? void 0 : _u.slug,
                price: ((_v = this.product) === null || _v === void 0 ? void 0 : _v.price) || '',
                measure: (_w = this.product) === null || _w === void 0 ? void 0 : _w.measure,
                status: ((_x = this.product) === null || _x === void 0 ? void 0 : _x.status) === _graphql_graphql__WEBPACK_IMPORTED_MODULE_2__.ProductStatus.Active,
                videoUrl: (_y = this.product) === null || _y === void 0 ? void 0 : _y.videoUrl,
                videoTitle: (_z = this.product) === null || _z === void 0 ? void 0 : _z.videoTitle,
                packagingUnit: (_1 = (_0 = this.product) === null || _0 === void 0 ? void 0 : _0.attributes) === null || _1 === void 0 ? void 0 : _1.packagingUnit,
                rdi: (_3 = (_2 = this.product) === null || _2 === void 0 ? void 0 : _2.attributes) === null || _3 === void 0 ? void 0 : _3.rdi,
                netWeightPerPackage: (_5 = (_4 = this.product) === null || _4 === void 0 ? void 0 : _4.attributes) === null || _5 === void 0 ? void 0 : _5.netWeightPerPackage,
                weightUnit: (_7 = (_6 = this.product) === null || _6 === void 0 ? void 0 : _6.attributes) === null || _7 === void 0 ? void 0 : _7.weightUnit,
                netVolumePerPackage: (_9 = (_8 = this.product) === null || _8 === void 0 ? void 0 : _8.attributes) === null || _9 === void 0 ? void 0 : _9.netVolumePerPackage,
                volumeUnit: (_11 = (_10 = this.product) === null || _10 === void 0 ? void 0 : _10.attributes) === null || _11 === void 0 ? void 0 : _11.volumeUnit,
                energyPerPackage: (_13 = (_12 = this.product) === null || _12 === void 0 ? void 0 : _12.attributes) === null || _13 === void 0 ? void 0 : _13.energyPerPackage,
                energyUnit: (_15 = (_14 = this.product) === null || _14 === void 0 ? void 0 : _14.attributes) === null || _15 === void 0 ? void 0 : _15.energyUnit,
                categories: ((_17 = (_16 = this.product) === null || _16 === void 0 ? void 0 : _16.categories) === null || _17 === void 0 ? void 0 : _17.map(
                // tslint:disable-next-line: deprecation
                (category) => `${category.id}`)) || [],
                brand: {
                    name: (_21 = (_20 = (_19 = (_18 = this.product) === null || _18 === void 0 ? void 0 : _18.brand) === null || _19 === void 0 ? void 0 : _19.translations) === null || _20 === void 0 ? void 0 : _20[0]) === null || _21 === void 0 ? void 0 : _21.name,
                    brand: {
                        // tslint:disable-next-line: deprecation
                        id: (_23 = (_22 = this.product) === null || _22 === void 0 ? void 0 : _22.brand) === null || _23 === void 0 ? void 0 : _23.id,
                    },
                },
                barcodes: ((_24 = this.product) === null || _24 === void 0 ? void 0 : _24.barcodes) || [],
            });
            this.validateForm.setControl('ingredients', this.fb.array(lodash__WEBPACK_IMPORTED_MODULE_0___default().sortBy(((_26 = (_25 = this.product) === null || _25 === void 0 ? void 0 : _25.productToIngredients) === null || _26 === void 0 ? void 0 : _26.map((pti) => {
                var _a, _b, _c;
                return this.fb.group(this.unitConverter.convert({
                    id: pti.ingredient.id,
                    name: (_a = this.languageService.pick(this.languages, pti.ingredient.translations)) === null || _a === void 0 ? void 0 : _a.name,
                    amount: ((_b = pti.attributes) === null || _b === void 0 ? void 0 : _b.amount) || undefined,
                    amountUnit: ((_c = pti.attributes) === null || _c === void 0 ? void 0 : _c.amountUnit) || undefined,
                }, 'source'));
            })) || [], 'value.name')));
        });
        this.getHierarchicalCategoriesGQL
            .fetch()
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.takeUntil)(this.destroy$))
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
    addVideo() {
        var _a, _b;
        this.validateForm.addControl('videoTitle', this.fb.control((_a = this.product) === null || _a === void 0 ? void 0 : _a.videoTitle));
        this.validateForm.addControl('videoUrl', this.fb.control((_b = this.product) === null || _b === void 0 ? void 0 : _b.videoUrl));
    }
    removeVideo() {
        this.validateForm.removeControl('videoTitle');
        this.validateForm.removeControl('videoUrl');
    }
    addImageDescription() {
        var _a, _b, _c;
        this.validateForm.addControl('imageDescription', this.fb.control((_c = (_b = (_a = this.product) === null || _a === void 0 ? void 0 : _a.translations) === null || _b === void 0 ? void 0 : _b[0]) === null || _c === void 0 ? void 0 : _c.imageDescription));
    }
    removeImageDescription() {
        this.validateForm.removeControl('imageDescription');
    }
    isSmallDevice() {
        return this.breakpointObserver.isMatched([
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_16__.Breakpoints.XSmall,
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_16__.Breakpoints.Small,
        ]);
    }
    openIngredientAnalysis() {
        const drawerRef = this.drawerService.create({
            nzTitle: this.translateService.instant('product.analyze_ingredient'),
            nzContentParams: Object.assign({ selectedIngredients: new Set(this.ingredients.value.map((i) => i.id)) }, (this.ingredientAnalysisData || {})),
            nzContent: _components_ingredient_analysis_ingredient_analysis_component__WEBPACK_IMPORTED_MODULE_3__.IngredientAnalysisComponent,
            nzMaskClosable: false,
            nzWidth: this.breakpointObserver.isMatched([
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_16__.Breakpoints.XSmall,
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_16__.Breakpoints.Small,
            ])
                ? '100%'
                : '50%',
        });
        drawerRef.afterClose.subscribe((data) => {
            var _a, _b;
            this.ingredientAnalysisData = data;
            if (!((_a = data === null || data === void 0 ? void 0 : data.newSelectedIngredients) === null || _a === void 0 ? void 0 : _a.length)) {
                return;
            }
            (_b = data.newSelectedIngredients) === null || _b === void 0 ? void 0 : _b.forEach((ingredient) => {
                this.ingredients.push(this.fb.group({
                    id: ingredient.id,
                    name: ingredient.target,
                    amount: null,
                    amountUnit: null,
                }));
            });
            this.ingredients.controls.sort((c1, c2) => {
                return (c1.value.name || '').localeCompare(c2.value.name);
            });
            this.ingredients.controls = [...this.ingredients.controls];
        });
    }
    addIngredients() {
        if (!this.selectedIngredients.length) {
            return;
        }
        this.selectedIngredients.forEach((it) => {
            this.ingredients.push(this.fb.group({
                id: it.ingredient.id,
                name: it.name,
                amount: null,
                amountUnit: null,
            }));
        });
        this.ingredients.controls.sort((c1, c2) => {
            return (c1.value.name || '').localeCompare(c2.value.name);
        });
        this.ingredients.controls = [...this.ingredients.controls];
        this.selectedIngredients = [];
    }
    removeIngredient(index) {
        this.ingredients.removeAt(index);
        this.ingredients.controls = [...this.ingredients.controls];
    }
    get ingredients() {
        return this.validateForm.get('ingredients');
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
    submitForm() {
        var _a, _b, _c, _d;
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
            coverObservable = (0,rxjs__WEBPACK_IMPORTED_MODULE_17__.of)({
                id: (_b = (_a = this.product) === null || _a === void 0 ? void 0 : _a.thumbnail) === null || _b === void 0 ? void 0 : _b.id,
                url: ((_d = (_c = this.product) === null || _c === void 0 ? void 0 : _c.thumbnail) === null || _d === void 0 ? void 0 : _d.url) || '',
            });
        }
        coverObservable
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.takeUntil)(this.destroy$), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.mergeMap)(({ id, url }) => {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14;
            const ingredients = (_a = this.validateForm.get('ingredients')) === null || _a === void 0 ? void 0 : _a.value;
            const inputData = {
                status: ((_b = this.validateForm.get('status')) === null || _b === void 0 ? void 0 : _b.value)
                    ? _graphql_graphql__WEBPACK_IMPORTED_MODULE_2__.ProductStatus.Active
                    : _graphql_graphql__WEBPACK_IMPORTED_MODULE_2__.ProductStatus.Inactive,
                price: (_c = this.validateForm.get('price')) === null || _c === void 0 ? void 0 : _c.value,
                measure: (_d = this.validateForm.get('measure')) === null || _d === void 0 ? void 0 : _d.value,
                videoTitle: (_e = this.validateForm.get('videoTitle')) === null || _e === void 0 ? void 0 : _e.value,
                videoUrl: (_f = this.validateForm.get('videoUrl')) === null || _f === void 0 ? void 0 : _f.value,
                brand: {
                    connect: {
                        id: (_g = this.validateForm.get('brand')) === null || _g === void 0 ? void 0 : _g.value.brand.id,
                    },
                },
                attribute: {
                    create: {
                        rdi: ((_h = this.validateForm.get('rdi')) === null || _h === void 0 ? void 0 : _h.value) || null,
                        packagingUnit: (_j = this.validateForm.get('packagingUnit')) === null || _j === void 0 ? void 0 : _j.value,
                        netWeightPerPackage: ((_k = this.validateForm.get('netWeightPerPackage')) === null || _k === void 0 ? void 0 : _k.value) || null,
                        weightUnit: (_l = this.validateForm.get('weightUnit')) === null || _l === void 0 ? void 0 : _l.value,
                        netVolumePerPackage: ((_m = this.validateForm.get('netVolumePerPackage')) === null || _m === void 0 ? void 0 : _m.value) || null,
                        volumeUnit: (_o = this.validateForm.get('volumeUnit')) === null || _o === void 0 ? void 0 : _o.value,
                        energyPerPackage: ((_p = this.validateForm.get('energyPerPackage')) === null || _p === void 0 ? void 0 : _p.value) || null,
                        energyUnit: (_q = this.validateForm.get('energyUnit')) === null || _q === void 0 ? void 0 : _q.value,
                    },
                },
            };
            // tslint:disable-next-line: deprecation
            if ((_r = this.product) === null || _r === void 0 ? void 0 : _r.id) {
                return this.updateProductGQL.mutate({
                    where: {
                        // tslint:disable-next-line: deprecation
                        id: this.product.id,
                    },
                    data: Object.assign(Object.assign({}, inputData), { categories: {
                            set: (_s = this.validateForm
                                .get('categories')) === null || _s === void 0 ? void 0 : _s.value.map((value) => ({
                                id: +value,
                            })),
                        }, barcodes: {
                            create: (_u = (_t = this.validateForm
                                .get('barcodes')) === null || _t === void 0 ? void 0 : _t.value) === null || _u === void 0 ? void 0 : _u.filter((barcode) => barcode.label).map((barcode) => ({
                                value: barcode.label,
                            })),
                            set: (_w = (_v = this.validateForm
                                .get('barcodes')) === null || _v === void 0 ? void 0 : _v.value) === null || _w === void 0 ? void 0 : _w.filter((barcode) => barcode.id).map((barcode) => ({
                                id: barcode.id,
                            })),
                        }, thumbnail: {
                            connect: (id && {
                                id,
                            }) ||
                                undefined,
                            create: (!id &&
                                this.thumbnailImage && Object.assign(Object.assign({}, this.thumbnailImage), { url })) ||
                                undefined,
                        }, productToIngredients: {
                            create: ingredients.map((pti) => {
                                const targetPti = this.unitConverter.convert(pti, 'target');
                                return {
                                    ingredientId: targetPti.id,
                                    attribute: (pti.amountUnit && {
                                        create: {
                                            amount: targetPti.amount || null,
                                            amountUnit: targetPti.amountUnit || null,
                                        },
                                    }) ||
                                        undefined,
                                };
                            }),
                        }, translations: {
                            create: (!((_y = (_x = this.product) === null || _x === void 0 ? void 0 : _x.translations) === null || _y === void 0 ? void 0 : _y[0]) && [
                                {
                                    name: (_z = this.validateForm.get('name')) === null || _z === void 0 ? void 0 : _z.value,
                                    description: (_0 = this.validateForm.get('description')) === null || _0 === void 0 ? void 0 : _0.value,
                                    language: _graphql_graphql__WEBPACK_IMPORTED_MODULE_2__.LanguageCode.Vi,
                                    isOriginal: true,
                                    imageDescription: ((_1 = this.validateForm.get('imageDescription')) === null || _1 === void 0 ? void 0 : _1.value) ||
                                        null,
                                    slug: (_2 = this.validateForm.get('slug')) === null || _2 === void 0 ? void 0 : _2.value,
                                },
                            ]) ||
                                undefined,
                            set: ((_4 = (_3 = this.product) === null || _3 === void 0 ? void 0 : _3.translations) === null || _4 === void 0 ? void 0 : _4[0]) && [
                                {
                                    id: this.product.translations[0].id,
                                    name: (_5 = this.validateForm.get('name')) === null || _5 === void 0 ? void 0 : _5.value,
                                    description: (_6 = this.validateForm.get('description')) === null || _6 === void 0 ? void 0 : _6.value,
                                    language: _graphql_graphql__WEBPACK_IMPORTED_MODULE_2__.LanguageCode.Vi,
                                    isOriginal: true,
                                    imageDescription: ((_7 = this.validateForm.get('imageDescription')) === null || _7 === void 0 ? void 0 : _7.value) ||
                                        null,
                                    slug: (_8 = this.validateForm.get('slug')) === null || _8 === void 0 ? void 0 : _8.value,
                                },
                            ],
                        } }),
                }, {
                    errorPolicy: 'all',
                });
            }
            else {
                return this.createProductGQL.mutate({
                    data: Object.assign(Object.assign({}, inputData), { categories: {
                            connect: (_9 = this.validateForm
                                .get('categories')) === null || _9 === void 0 ? void 0 : _9.value.map((value) => ({
                                id: +value,
                            })),
                        }, barcodes: {
                            create: (_10 = this.validateForm
                                .get('barcodes')) === null || _10 === void 0 ? void 0 : _10.value.map((barcode) => ({
                                value: barcode.label,
                            })),
                        }, thumbnail: {
                            create: this.thumbnailImage && Object.assign(Object.assign({}, this.thumbnailImage), { url }),
                        }, productToIngredients: {
                            create: ingredients.map((pti) => {
                                const targetPti = this.unitConverter.convert(pti, 'target');
                                return {
                                    ingredientId: targetPti.id,
                                    attribute: (pti.amountUnit && {
                                        create: {
                                            amount: targetPti.amount || null,
                                            amountUnit: targetPti.amountUnit || null,
                                        },
                                    }) ||
                                        undefined,
                                };
                            }),
                        }, translations: {
                            create: [
                                {
                                    name: (_11 = this.validateForm.get('name')) === null || _11 === void 0 ? void 0 : _11.value,
                                    description: (_12 = this.validateForm.get('description')) === null || _12 === void 0 ? void 0 : _12.value,
                                    language: _graphql_graphql__WEBPACK_IMPORTED_MODULE_2__.LanguageCode.Vi,
                                    isOriginal: true,
                                    imageDescription: ((_13 = this.validateForm.get('imageDescription')) === null || _13 === void 0 ? void 0 : _13.value) ||
                                        null,
                                    slug: (_14 = this.validateForm.get('slug')) === null || _14 === void 0 ? void 0 : _14.value,
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
                this.msgService.error(this.translateService.instant(`product.${((_a = this.product) === null || _a === void 0 ? void 0 : _a.id) ? 'update' : 'create'}_error`));
            }
            if (data) {
                this.msgService.success(this.translateService.instant(`product.${((_b = this.product) === null || _b === void 0 ? void 0 : _b.id) ? 'update' : 'create'}_success`));
                this.location.back();
            }
            this.loading = false;
        }, () => {
            var _a;
            this.msgService.error(this.translateService.instant(`product.${((_a = this.product) === null || _a === void 0 ? void 0 : _a.id) ? 'update' : 'create'}_error`));
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
ProductDetailsComponent.ɵfac = function ProductDetailsComponent_Factory(t) { return new (t || ProductDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_19__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_graphql_graphql__WEBPACK_IMPORTED_MODULE_2__.GetHierarchicalCategoriesGQL), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_20__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_21__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_shared_services_file_file_service__WEBPACK_IMPORTED_MODULE_4__.FileService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_graphql_graphql__WEBPACK_IMPORTED_MODULE_2__.CreateProductGQL), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_graphql_graphql__WEBPACK_IMPORTED_MODULE_2__.UpdateProductGQL), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_22__.NzMessageService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_23__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_shared_services_string_string_service__WEBPACK_IMPORTED_MODULE_5__.StringService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_shared_services_language_language_service__WEBPACK_IMPORTED_MODULE_6__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_16__.BreakpointObserver), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_24__.NzDrawerService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_ingredient_services_unit_converter_unit_converter_service__WEBPACK_IMPORTED_MODULE_7__.UnitConverterService)); };
ProductDetailsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({ type: ProductDetailsComponent, selectors: [["app-product-details"]], decls: 181, vars: 168, consts: [[1, "site-page-header"], ["nz-page-header-breadcrumb", ""], ["nz-icon", "", "nzType", "home"], ["routerLink", "/products"], ["nz-form", "", 3, "nzLayout", "formGroup", "ngSubmit"], [1, "mb-3"], ["nzHasFeedback", "", 3, "nzErrorTip"], ["nz-input", "", "formControlName", "name"], ["nz-input", "", "formControlName", "description", 3, "nzAutosize"], ["nzShowSearch", "", "nzAllowClear", "", "formControlName", "categories", 1, "w-100", 3, "nzPlaceHolder", "nzNodes", "nzMultiple", "nzDropdownStyle"], ["formControlName", "brand"], ["formControlName", "status"], ["nz-row", "", 3, "nzGutter"], ["nz-col", "", 3, "nzXs", "nzSm", "nzMd", "nzLg", "nzXl", "nzXXl"], ["formControlName", "price", 1, "w-100", 3, "nzMin", "nzStep", "nzFormatter"], ["nz-input", "", "formControlName", "measure"], ["nzHasFeedback", ""], [3, "nzAddOnAfter"], ["formControlName", "rdi", 1, "w-100", 3, "nzMin", "nzStep"], ["packagingUnit", ""], ["formControlName", "netWeightPerPackage", 1, "w-100"], ["weightAddOnAfterTemplate", ""], ["formControlName", "netVolumePerPackage", 1, "w-100"], ["volumeAddOnAfterTemplate", ""], ["formControlName", "energyPerPackage", 1, "w-100"], ["energyAddOnAfterTemplate", ""], ["bindLabel", "value", "formControlName", "barcodes", 3, "hideSelected", "multiple", "clearable", "addTag"], ["nzListType", "picture-card", 1, "cover-uploader", 3, "nzBeforeUpload", "nzShowUploadList"], [4, "ngIf"], ["style", "width: 100%", 3, "src", "appImgFallback", 4, "ngIf"], ["nz-row", ""], [4, "ngIf", "ngIfElse"], ["elseVideo", ""], ["nz-row", "", 3, "nzGutter", 4, "ngIf"], ["elseImageDescription", ""], [3, "nzSuffix"], ["nz-input", "", "formControlName", "slug"], ["suffixTemplate", ""], ["nz-button", "", "nzType", "dashed", "type", "button", "nzBlock", "", 3, "click"], ["nzSearch", "", 3, "nzAddOnAfter"], [3, "ngModel", "ngModelOptions", "ngModelChange"], ["addIngredientsBtn", ""], ["nzTableLayout", "fixed", "formArrayName", "ingredients", 3, "nzData", "nzPageSize"], ["ingredientsTable", ""], [3, "formGroupName", 4, "ngFor", "ngForOf"], [1, "mt-2", "pb-4"], ["nz-button", "", "nzType", "primary", 3, "nzLoading"], ["nz-button", "", "type", "button", 1, "ml-2", 3, "nzDanger", "click"], ["formControlName", "packagingUnit", 1, "unit", 3, "nzAllowClear"], [3, "nzValue", "nzLabel", 4, "ngFor", "ngForOf"], [3, "nzValue", "nzLabel"], ["formControlName", "weightUnit", 1, "unit", 3, "nzAllowClear"], ["formControlName", "volumeUnit", 1, "unit", 3, "nzAllowClear"], ["formControlName", "energyUnit", 1, "unit", 3, "nzAllowClear"], ["nz-icon", "", "nzType", "camera", "nzTheme", "outline", 1, "upload-icon"], [2, "width", "100%", 3, "src", "appImgFallback"], ["nz-button", "", "nzType", "dashed", "type", "button", 1, "mb-2", 3, "click"], ["nz-icon", "", "nzType", "plus"], ["nz-button", "", "nzType", "dashed", "nzDanger", "", "type", "button", 1, "mb-2", 3, "click"], ["nz-icon", "", "nzType", "minus"], ["nz-input", "", "formControlName", "videoTitle"], ["nz-input", "", "formControlName", "videoUrl"], ["apiKey", "fogegal2uijx4gnuleljxppluzgepbi58urxfi2k5ul8y79d", "formControlName", "imageDescription", 3, "init"], ["nz-icon", "", "nzType", "sync", "nzTheme", "outline", "nz-tooltip", "", 3, "nzTooltipTitle", "click"], ["nz-button", "", "nzType", "primary", "type", "button", "nzSearch", "", 3, "click"], ["nz-icon", "", "nzType", "down", "nzTheme", "outline"], [3, "formGroupName"], ["formControlName", "amount", "type", "number", 1, "w-100"], ["unitTemplate", ""], ["nz-button", "", "nzType", "text", "nzDanger", "", 3, "click"], ["nz-icon", "", "nzType", "delete", "nzTheme", "outline"], ["formControlName", "amountUnit", "nzAllowClear", "", 1, "unit", 3, "nzAllowClear"]], template: function ProductDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "nz-page-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "nz-breadcrumb", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "nz-breadcrumb-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](3, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "nz-breadcrumb-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](7, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](8, "nz-breadcrumb-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](9, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](11, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ngSubmit", function ProductDetailsComponent_Template_form_ngSubmit_11_listener() { return ctx.submitForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](12, "nz-card", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](13, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](14, "nz-form-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](16, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](17, "nz-form-control", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](18, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](19, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](20, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](21, "nz-form-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](23, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](24, "nz-form-control", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](25, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](26, "textarea", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](27, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](28, "nz-form-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](30, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](31, "nz-form-control", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](32, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](33, "nz-tree-select", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](34, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](35, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](36, "nz-form-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](38, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](39, "nz-form-control", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](40, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](41, "app-brand-select", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](42, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](43, "nz-form-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](45, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](46, "nz-form-control");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](47, "nz-switch", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](48, "nz-card", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](49, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](50, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](51, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](52, "nz-form-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](53);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](54, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](55, "nz-form-control", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](56, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](57, "nz-input-number", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](58, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](59, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](60, "nz-form-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](61);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](62, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](63, "nz-form-control", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](64, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](65, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](66, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](67, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](68, "nz-form-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](69);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](70, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](71, "nz-form-control", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](72, "nz-input-group", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](73, "nz-input-number", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](74, ProductDetailsComponent_ng_template_74_Template, 2, 2, "ng-template", null, 19, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](76, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](77, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](78, "nz-form-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](79);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](80, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](81, "nz-form-control", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](82, "nz-input-group", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](83, "nz-input-number", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](84, ProductDetailsComponent_ng_template_84_Template, 2, 2, "ng-template", null, 21, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](86, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](87, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](88, "nz-form-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](89);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](90, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](91, "nz-form-control", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](92, "nz-input-group", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](93, "nz-input-number", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](94, ProductDetailsComponent_ng_template_94_Template, 2, 2, "ng-template", null, 23, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](96, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](97, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](98, "nz-form-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](99);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](100, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](101, "nz-form-control", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](102, "nz-input-group", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](103, "nz-input-number", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](104, ProductDetailsComponent_ng_template_104_Template, 2, 2, "ng-template", null, 25, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](106, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](107, "nz-form-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](108);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](109, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](110, "nz-form-control", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](111, "ng-select", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](112, "nz-card", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](113, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](114, "nz-form-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](115);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](116, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](117, "nz-form-control");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](118, "nz-upload", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](119, ProductDetailsComponent_ng_container_119_Template, 2, 0, "ng-container", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](120, ProductDetailsComponent_img_120_Template, 1, 3, "img", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](121, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](122, ProductDetailsComponent_ng_container_122_Template, 5, 3, "ng-container", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](123, ProductDetailsComponent_ng_template_123_Template, 4, 3, "ng-template", null, 32, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](125, ProductDetailsComponent_div_125_Template, 15, 19, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](126, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](127, ProductDetailsComponent_ng_container_127_Template, 5, 3, "ng-container", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](128, ProductDetailsComponent_ng_template_128_Template, 4, 3, "ng-template", null, 34, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](130, ProductDetailsComponent_nz_form_item_130_Template, 6, 8, "nz-form-item", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](131, "nz-card", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](132, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](133, "nz-form-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](134);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](135, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](136, "nz-form-control", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](137, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](138, "nz-input-group", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](139, "input", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](140, ProductDetailsComponent_ng_template_140_Template, 2, 3, "ng-template", null, 37, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](142, "nz-card", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](143, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](144, "button", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ProductDetailsComponent_Template_button_click_144_listener() { return ctx.openIngredientAnalysis(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](145);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](146, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](147, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](148, "nz-input-group", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](149, "app-ingredient-select", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ngModelChange", function ProductDetailsComponent_Template_app_ingredient_select_ngModelChange_149_listener($event) { return ctx.selectedIngredients = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](150, ProductDetailsComponent_ng_template_150_Template, 4, 3, "ng-template", null, 41, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](152, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](153, "nz-form-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](154);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](155, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](156, "nz-form-control", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](157, "nz-table", 42, 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](159, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](160, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](161, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](162, "ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](163, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](164);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](165, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](166, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](167);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](168, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](169, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](170, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](171, ProductDetailsComponent_tr_171_Template, 13, 4, "tr", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](172, "nz-form-item", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](173, "nz-form-control");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](174, "nz-input-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](175, "button", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](176);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](177, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](178, "button", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ProductDetailsComponent_Template_button_click_178_listener() { return ctx.cancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](179);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](180, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](75);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](85);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](95);
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](105);
        const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](124);
        const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](129);
        const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](141);
        const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](151);
        const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](158);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](7, 105, "common.product"));
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](((ctx.product == null ? null : ctx.product.translations) || _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](163, _c0))[0] == null ? null : ((ctx.product == null ? null : ctx.product.translations) || _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](164, _c0))[0].name);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("nzLayout", "vertical")("formGroup", ctx.validateForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](16, 107, "product.name"));
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("nzErrorTip", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](18, 109, "ui.form.should_not_be_empty"));
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](23, 111, "product.description"));
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("nzErrorTip", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](25, 113, "ui.form.should_not_be_empty"));
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("nzAutosize", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](165, _c7));
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](30, 115, "common.category"));
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("nzErrorTip", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](32, 117, "ui.form.should_not_be_empty"));
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("nzPlaceHolder", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](34, 119, "common.category"));
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("nzNodes", ctx.categories)("nzMultiple", true)("nzDropdownStyle", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](166, _c8));
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](38, 121, "common.brand"));
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("nzErrorTip", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](40, 123, "ui.form.should_not_be_empty"));
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](45, 125, "common.status"));
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("nzGutter", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("nzXs", 24)("nzSm", 24)("nzMd", 24)("nzLg", 12)("nzXl", 12)("nzXXl", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](54, 127, "common.price"));
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("nzErrorTip", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](56, 129, "ui.form.should_not_be_empty"));
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("nzMin", 1000)("nzStep", 5000)("nzFormatter", ctx.formatterVnd);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("nzXs", 24)("nzSm", 24)("nzMd", 24)("nzLg", 12)("nzXl", 12)("nzXXl", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](62, 131, "common.measure"));
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("nzErrorTip", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](64, 133, "ui.form.should_not_be_empty"));
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("nzXs", 24)("nzSm", 24)("nzMd", 24)("nzLg", 12)("nzXl", 12)("nzXXl", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](70, 135, "product.rdi_packaging_unit"));
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("nzAddOnAfter", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("nzMin", 1)("nzStep", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("nzXs", 24)("nzSm", 24)("nzMd", 24)("nzLg", 12)("nzXl", 12)("nzXXl", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](80, 137, "product.net_weight_per_package"));
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("nzAddOnAfter", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("nzXs", 24)("nzSm", 24)("nzMd", 24)("nzLg", 12)("nzXl", 12)("nzXXl", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](90, 139, "product.net_volume_per_package"));
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("nzAddOnAfter", _r4);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("nzXs", 24)("nzSm", 24)("nzMd", 24)("nzLg", 12)("nzXl", 12)("nzXXl", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](100, 141, "product.energy_per_package"));
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("nzAddOnAfter", _r6);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](109, 143, "common.barcode"));
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("hideSelected", true)("multiple", true)("clearable", true)("addTag", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](116, 145, "event.cover"));
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("nzBeforeUpload", ctx.beforeUploadThumbnail)("nzShowUploadList", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !ctx.thumbnailImage);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.thumbnailImage);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !ctx.validateForm.get("videoTitle"))("ngIfElse", _r11);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.validateForm.get("videoTitle"));
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !ctx.validateForm.get("imageDescription"))("ngIfElse", _r15);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.validateForm.get("imageDescription"));
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](135, 147, "product.web_url"));
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("nzErrorTip", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](137, 149, "ui.form.should_not_be_empty"));
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("nzSuffix", _r18);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](146, 151, "ingredient.analyze_from_cosdna_skincarisma"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("nzAddOnAfter", _r20);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngModel", ctx.selectedIngredients)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](167, _c9));
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](155, 153, "common.ingredient"));
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("nzData", ctx.ingredients.controls)("nzPageSize", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](165, 155, "ingredient.name"));
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](168, 157, "ingredient.content"));
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", _r22.data);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("nzLoading", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](177, 159, (ctx.product == null ? null : ctx.product.id) ? "common.update" : "common.add"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("nzDanger", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](180, 161, "common.cancel"), " ");
    } }, directives: [ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_25__.NzPageHeaderComponent, ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_26__.NzBreadCrumbComponent, ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_25__.NzPageHeaderBreadcrumbDirective, ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_26__.NzBreadCrumbItemComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_27__["ɵNzTransitionPatchDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_28__.NzIconDirective, _angular_router__WEBPACK_IMPORTED_MODULE_19__.RouterLinkWithHref, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatusGroup, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_29__.NzFormDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormGroupDirective, ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_30__.NzCardComponent, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_31__.NzRowDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_29__.NzFormItemComponent, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_31__.NzColDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_29__.NzFormLabelComponent, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_29__.NzFormControlComponent, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_32__.NzInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControlName, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_32__.NzAutosizeDirective, ng_zorro_antd_tree_select__WEBPACK_IMPORTED_MODULE_33__.NzTreeSelectComponent, _shared_components_brand_select_brand_select_component__WEBPACK_IMPORTED_MODULE_8__.BrandSelectComponent, ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_34__.NzSwitchComponent, ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_35__.NzInputNumberComponent, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_32__.NzInputGroupComponent, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_36__.NgSelectComponent, ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_37__.NzUploadComponent, _angular_common__WEBPACK_IMPORTED_MODULE_21__.NgIf, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_32__.NzInputGroupWhitSuffixOrPrefixDirective, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_38__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_39__.NzWaveDirective, _shared_components_ingredient_select_ingredient_select_component__WEBPACK_IMPORTED_MODULE_9__.IngredientSelectComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgModel, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_40__.NzTableComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormArrayName, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_40__.NzTheadComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_40__.NzTrDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_40__.NzTableCellDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_40__.NzThMeasureDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_40__.NzTbodyComponent, _angular_common__WEBPACK_IMPORTED_MODULE_21__.NgForOf, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_41__.NzSelectComponent, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_41__.NzOptionComponent, _shared_directives_img_fallback_img_fallback_directive__WEBPACK_IMPORTED_MODULE_10__.ImgFallbackDirective, _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_42__.EditorComponent, ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_43__.NzTooltipDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormGroupName], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_23__.TranslatePipe], styles: ["[_nghost-%COMP%]     .cover-uploader > .ant-upload {\n  overflow: hidden;\n}\n\n.unit[_ngcontent-%COMP%] {\n  min-width: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3QtZGV0YWlscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtBQUNGIiwiZmlsZSI6InByb2R1Y3QtZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IDo6bmctZGVlcCAuY292ZXItdXBsb2FkZXIgPiAuYW50LXVwbG9hZCB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi51bml0IHtcbiAgbWluLXdpZHRoOiAxMDBweDtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ 97698:
/*!**********************************************************************!*\
  !*** ./src/app/product/pages/product-list/product-list.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductListComponent": () => (/* binding */ ProductListComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 79441);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 22663);
/* harmony import */ var _graphql_graphql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../graphql/graphql */ 44092);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/message */ 91804);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 70325);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/page-header */ 92443);
/* harmony import */ var ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/breadcrumb */ 17401);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 29910);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/icon */ 35203);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/button */ 56079);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 94772);
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/card */ 47108);
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/form */ 32734);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/grid */ 95039);
/* harmony import */ var ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-zorro-antd/radio */ 31031);
/* harmony import */ var ng_zorro_antd_tree_select__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng-zorro-antd/tree-select */ 21821);
/* harmony import */ var _shared_components_brand_select_brand_select_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/components/brand-select/brand-select.component */ 85633);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ng-zorro-antd/input */ 29422);
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ng-zorro-antd/table */ 4316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _shared_directives_img_fallback_img_fallback_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/directives/img-fallback/img-fallback.directive */ 31841);
/* harmony import */ var ng_zorro_antd_typography__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ng-zorro-antd/typography */ 87250);
/* harmony import */ var ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ng-zorro-antd/tag */ 9506);



























function ProductListComponent_tr_59_nz_tag_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "nz-tag");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](category_r4.translations[0] == null ? null : category_r4.translations[0].name);
} }
const _c0 = function () { return []; };
const _c1 = function (a1) { return ["/products", a1]; };
function ProductListComponent_tr_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, ProductListComponent_tr_59_nz_tag_14_Template, 2, 1, "nz-tag", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "nz-tag", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](21, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](product_r1.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", product_r1.thumbnail == null ? null : product_r1.thumbnail.small == null ? null : product_r1.thumbnail.small.url, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"])("appImgFallback", (product_r1.thumbnail == null ? null : product_r1.thumbnail.url) || _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](13, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](product_r1.translations[0] == null ? null : product_r1.translations[0].name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", product_r1.brand.smallLogoUrl, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"])("appImgFallback", product_r1.brand.logoUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", product_r1.categories);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzColor", product_r1.status === ctx_r0.ProductStatus.Active ? "success" : "error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](product_r1.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](14, _c1, product_r1.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](21, 11, "common.edit"));
} }
const _c2 = function () { return [16, 8]; };
const _c3 = function () { return { "max-height": "300px" }; };
class ProductListComponent {
    constructor(getProductListGQL, getHierarchicalCategoriesGQL, searchBrandsGQL, route, router, msgService, translateService, fb) {
        this.getProductListGQL = getProductListGQL;
        this.getHierarchicalCategoriesGQL = getHierarchicalCategoriesGQL;
        this.searchBrandsGQL = searchBrandsGQL;
        this.route = route;
        this.router = router;
        this.msgService = msgService;
        this.translateService = translateService;
        this.fb = fb;
        this.ProductStatus = _graphql_graphql__WEBPACK_IMPORTED_MODULE_0__.ProductStatus;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
        this.products = [];
        this.productsCount = 0;
        this.pageIndex = 1;
        this.pageSize = 10;
        this.loading = false;
        this.categories = [];
        this.searchForm = this.fb.group({
            product: [null],
            brand: [null],
            category: [null],
            status: [undefined],
        });
    }
    ngOnInit() {
        this.route.queryParamMap
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.destroy$))
            .subscribe((paramMap) => {
            this.pageIndex = parseInt(paramMap.get('page') || '1', 10);
            this.pageSize = parseInt(paramMap.get('size') || '10', 10);
            this.categoryId =
                parseInt(paramMap.get('category') || '0', 10) || undefined;
            this.brandId = parseInt(paramMap.get('brand') || '0', 10) || undefined;
            this.text = paramMap.get('text') || '';
            this.status = Object.values(_graphql_graphql__WEBPACK_IMPORTED_MODULE_0__.ProductStatus).includes(paramMap.get('status'))
                ? paramMap.get('status')
                : undefined;
            this.patchFormValue();
            if (this.dataSubscription) {
                this.refetch();
            }
            else {
                this.dataQueryRef = this.getProductListGQL.watch(this.getVariables(), {
                    notifyOnNetworkStatusChange: true,
                    fetchPolicy: 'network-only',
                });
                this.dataSubscription = this.dataQueryRef.valueChanges
                    .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.destroy$))
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
                        this.products = data.products;
                        this.productsCount = data.productsConnection.aggregate.count;
                    }
                });
            }
        });
        this.getHierarchicalCategoriesGQL
            .fetch()
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.destroy$))
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
    patchFormValue() {
        if (this.categoryId && this.searchForm.controls.category.untouched) {
            this.searchForm.patchValue({
                category: `${this.categoryId}`,
            });
        }
        if (this.brandId &&
            this.searchForm.controls.brand.untouched &&
            this.searchForm.controls.brand.pristine) {
            this.searchBrandsGQL
                .fetch({
                where: {
                    id: this.brandId,
                },
                first: 1,
            })
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.destroy$))
                .subscribe(({ data }) => {
                var _a, _b, _c;
                if ((_a = data === null || data === void 0 ? void 0 : data.brands) === null || _a === void 0 ? void 0 : _a.length) {
                    this.searchForm.patchValue({
                        brand: {
                            name: (_c = (_b = data.brands[0].translations) === null || _b === void 0 ? void 0 : _b[0]) === null || _c === void 0 ? void 0 : _c.name,
                            brand: {
                                // tslint:disable-next-line: deprecation
                                id: data.brands[0].id,
                            },
                        },
                    });
                }
            });
        }
        if (this.text && this.searchForm.controls.product.untouched) {
            this.searchForm.patchValue({
                product: this.text,
            });
        }
        if (this.searchForm.controls.status.untouched) {
            this.searchForm.patchValue({
                status: this.status || undefined,
            });
        }
    }
    refetch() {
        var _a;
        (_a = this.dataQueryRef) === null || _a === void 0 ? void 0 : _a.refetch(this.getVariables());
    }
    getVariables() {
        return {
            where: {
                nameContains: this.text || undefined,
                categoriesSome: {
                    id: this.categoryId || undefined,
                },
                brand: {
                    id: this.brandId || undefined,
                },
                status: this.status || undefined,
            },
            first: this.pageSize,
            skip: (this.pageIndex - 1) * this.pageSize,
            orderBy: [
                {
                    id: _graphql_graphql__WEBPACK_IMPORTED_MODULE_0__.OrderBy.Desc,
                },
            ],
        };
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
        var _a;
        const searchData = this.searchForm.value;
        const brandId = ((_a = searchData.brand) === null || _a === void 0 ? void 0 : _a.brand.id) || undefined;
        const categoryId = parseInt(searchData.category, 10) || undefined;
        const text = searchData.product || undefined;
        const status = searchData.status || undefined;
        this.router.navigate([], {
            queryParams: {
                text,
                brand: brandId,
                category: categoryId,
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
ProductListComponent.ɵfac = function ProductListComponent_Factory(t) { return new (t || ProductListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_graphql_graphql__WEBPACK_IMPORTED_MODULE_0__.GetProductListGQL), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_graphql_graphql__WEBPACK_IMPORTED_MODULE_0__.GetHierarchicalCategoriesGQL), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_graphql_graphql__WEBPACK_IMPORTED_MODULE_0__.SearchBrandsGQL), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_7__.NzMessageService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormBuilder)); };
ProductListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ProductListComponent, selectors: [["app-product-list"]], decls: 60, vars: 80, consts: [[1, "site-page-header", 3, "nzTitle"], ["nz-page-header-breadcrumb", ""], ["nz-icon", "", "nzType", "home"], ["nz-button", "", "nzType", "primary", "routerLink", "/products/new"], ["nz-icon", "", "nzType", "plus", "nzTheme", "outline"], [1, "mb-3"], ["nz-form", "", 3, "formGroup", "ngSubmit"], ["nz-row", "", 3, "nzGutter"], ["nz-col", "", 3, "nzXs", "nzSm", "nzMd", "nzLg", "nzXl", "nzXXl"], ["formControlName", "status"], ["nz-radio-button", "", 3, "nzValue", "click"], ["nzShowSearch", "", "nzAllowClear", "", "formControlName", "category", 1, "w-100", 3, "nzPlaceHolder", "nzNodes", "nzDropdownStyle"], ["formControlName", "brand"], ["nz-input", "", "formControlName", "product", 3, "placeholder"], ["nz-button", "", "nzType", "primary", "type", "submit"], ["nz-icon", "", "nzType", "search", "nzTheme", "outline"], [1, "mb-4"], ["nzBordered", "", 3, "nzData", "nzFrontPagination", "nzTotal", "nzPageIndex", "nzPageSize", "nzLoading", "nzQueryParams"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "d-flex", "justify-content-start", "align-items-center"], [1, "product-thumbnail", "mr-2", "img-thumbnail", "flex-grow-0", "flex-shrink-0"], ["loading", "lazy", 3, "src", "appImgFallback"], ["nz-typography", ""], [1, "brand-logo", "img-thumbnail"], [4, "ngFor", "ngForOf"], [3, "nzColor"], [3, "routerLink"]], template: function ProductListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "nz-page-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](1, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "nz-breadcrumb", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "nz-breadcrumb-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "nz-breadcrumb-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](8, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "nz-page-header-extra");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](13, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "nz-card", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function ProductListComponent_Template_form_ngSubmit_15_listener() { return ctx.handleSearch(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "nz-radio-group", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ProductListComponent_Template_label_click_19_listener() { return ctx.handleSearch(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](21, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ProductListComponent_Template_label_click_22_listener() { return ctx.handleSearch(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "Active");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ProductListComponent_Template_label_click_24_listener() { return ctx.handleSearch(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, "Inactive");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](27, "nz-tree-select", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](28, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](30, "app-brand-select", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](32, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](33, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](36, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](38, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "nz-card", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "nz-table", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("nzQueryParams", function ProductListComponent_Template_nz_table_nzQueryParams_40_listener($event) { return ctx.handleQueryParamsChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](44, "ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](46);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](47, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](49);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](50, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](52);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](53, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](55);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](56, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](57, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](59, ProductListComponent_tr_59_Template, 22, 16, "tr", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("nzTitle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](1, 56, "common.product"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](8, 58, "common.product"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](13, 60, "product.create"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.searchForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzGutter", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](78, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzXs", 24)("nzSm", 24)("nzMd", 24)("nzLg", 24)("nzXl", 24)("nzXXl", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzValue", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](21, 62, "common.all"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzValue", ctx.ProductStatus.Active);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzValue", ctx.ProductStatus.Inactive);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzXs", 24)("nzSm", 24)("nzMd", 24)("nzLg", 6)("nzXl", 6)("nzXXl", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("nzPlaceHolder", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](28, 64, "common.category"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzNodes", ctx.categories)("nzDropdownStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](79, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzXs", 24)("nzSm", 24)("nzMd", 24)("nzLg", 6)("nzXl", 6)("nzXXl", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzXs", 24)("nzSm", 24)("nzMd", 24)("nzLg", 6)("nzXl", 6)("nzXXl", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](33, 66, "product.name"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzXs", 24)("nzSm", 24)("nzMd", 24)("nzLg", 6)("nzXl", 6)("nzXXl", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](38, 68, "common.search"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzData", ctx.products)("nzFrontPagination", false)("nzTotal", ctx.productsCount)("nzPageIndex", ctx.pageIndex)("nzPageSize", ctx.pageSize)("nzLoading", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](47, 70, "product.name"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](50, 72, "common.brand"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](53, 74, "common.category"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](56, 76, "common.status"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.products)("ngForTrackBy", ctx.trackById);
    } }, directives: [ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_10__.NzPageHeaderComponent, ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_11__.NzBreadCrumbComponent, ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_10__.NzPageHeaderBreadcrumbDirective, ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_11__.NzBreadCrumbItemComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_12__["ɵNzTransitionPatchDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_13__.NzIconDirective, ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_10__.NzPageHeaderExtraDirective, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_14__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_15__.NzWaveDirective, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink, ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_16__.NzCardComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatusGroup, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_17__.NzFormDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroupDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_18__.NzRowDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_18__.NzColDirective, ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_19__.NzRadioGroupComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControlName, ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_19__.NzRadioComponent, ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_19__.NzRadioButtonDirective, ng_zorro_antd_tree_select__WEBPACK_IMPORTED_MODULE_20__.NzTreeSelectComponent, _shared_components_brand_select_brand_select_component__WEBPACK_IMPORTED_MODULE_1__.BrandSelectComponent, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_21__.NzInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_22__.NzTableComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_22__.NzTheadComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_22__.NzTrDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_22__.NzTableCellDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_22__.NzThMeasureDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_22__.NzTbodyComponent, _angular_common__WEBPACK_IMPORTED_MODULE_23__.NgForOf, _shared_directives_img_fallback_img_fallback_directive__WEBPACK_IMPORTED_MODULE_2__.ImgFallbackDirective, ng_zorro_antd_typography__WEBPACK_IMPORTED_MODULE_24__.NzTypographyComponent, ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_25__.NzTagComponent, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLinkWithHref], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslatePipe], styles: [".product-thumbnail[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  position: relative;\n  overflow: hidden;\n}\n.product-thumbnail[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n.brand-logo[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 50px;\n  position: relative;\n  overflow: hidden;\n}\n.brand-logo[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3QtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUNGO0FBQ0U7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFDSjtBQUdBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBQUY7QUFFRTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUFKIiwiZmlsZSI6InByb2R1Y3QtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9kdWN0LXRodW1ibmFpbCB7XG4gIHdpZHRoOiA4MHB4O1xuICBoZWlnaHQ6IDgwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICA+IGltZyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxufVxuXG4uYnJhbmQtbG9nbyB7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgPiBpbWcge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cbn1cbiJdfQ== */"] });


/***/ }),

/***/ 90364:
/*!**************************************************************************************!*\
  !*** ./src/app/product/pages/product-request-list/product-request-list.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductRequestListComponent": () => (/* binding */ ProductRequestListComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 79441);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 22663);
/* harmony import */ var _graphql_graphql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../graphql/graphql */ 44092);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/message */ 91804);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 70325);
/* harmony import */ var ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/page-header */ 92443);
/* harmony import */ var ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/breadcrumb */ 17401);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 29910);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/icon */ 35203);
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/card */ 47108);
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/table */ 4316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var ng_zorro_antd_typography__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/typography */ 87250);
/* harmony import */ var ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/switch */ 17318);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _shared_directives_img_fallback_img_fallback_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/directives/img-fallback/img-fallback.directive */ 31841);
/* harmony import */ var ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/avatar */ 37893);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-zorro-antd/button */ 56079);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 94772);






















const _c0 = function () { return []; };
function ProductRequestListComponent_tr_35_img_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 17);
} if (rf & 2) {
    const request_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", request_r1.user.avatar == null ? null : request_r1.user.avatar.small == null ? null : request_r1.user.avatar.small.url, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"])("appImgFallback", (request_r1.user.avatar == null ? null : request_r1.user.avatar.url) || _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](2, _c0));
} }
function ProductRequestListComponent_tr_35_nz_avatar_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "nz-avatar", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "slice");
} if (rf & 2) {
    const request_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzText", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind3"](1, 1, request_r1.user.account, 0, 2));
} }
function ProductRequestListComponent_tr_35_button_18_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProductRequestListComponent_tr_35_button_18_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10); const request_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r8.viewImages(request_r1.images, request_r1.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "svg", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "path", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 1, "product.view_image"), " ");
} }
function ProductRequestListComponent_tr_35_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, ProductRequestListComponent_tr_35_img_7_Template, 1, 3, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, ProductRequestListComponent_tr_35_nz_avatar_8_Template, 2, 5, "nz-avatar", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, ProductRequestListComponent_tr_35_button_18_Template, 6, 3, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](21, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "nz-switch", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProductRequestListComponent_tr_35_Template_nz_switch_click_23_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12); const request_r1 = restoredCtx.$implicit; const i_r2 = restoredCtx.index; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r11.updateStatus(request_r1, i_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const request_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", request_r1.id, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("id", "lightgallery_" + request_r1.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !!(request_r1.user.avatar == null ? null : request_r1.user.avatar.url));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !request_r1.user.avatar);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](request_r1.user.account);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzType", request_r1.user.gender === ctx_r0.Gender.Male ? "man" : "woman");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](request_r1.content);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !!(request_r1.images == null ? null : request_r1.images.length));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](21, 12, request_r1.createdAt, "short"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", request_r1.isDone)("nzControl", true)("nzLoading", ctx_r0.switchings[i_r2]);
} }
class ProductRequestListComponent {
    constructor(getProductRequestsGQL, route, router, msgService, translateService, updateProductRequestGQL) {
        this.getProductRequestsGQL = getProductRequestsGQL;
        this.route = route;
        this.router = router;
        this.msgService = msgService;
        this.translateService = translateService;
        this.updateProductRequestGQL = updateProductRequestGQL;
        this.Gender = _graphql_graphql__WEBPACK_IMPORTED_MODULE_0__.Gender;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
        this.requests = [];
        this.requestsCount = 0;
        this.pageIndex = 1;
        this.pageSize = 10;
        this.loading = false;
        this.switchings = [];
    }
    ngOnInit() {
        this.route.queryParamMap
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this.destroy$))
            .subscribe((paramMap) => {
            this.pageIndex = parseInt(paramMap.get('page') || '1', 10);
            this.pageSize = parseInt(paramMap.get('size') || '10', 10);
            if (this.dataSubscription) {
                this.refetch();
            }
            else {
                this.dataQueryRef = this.getProductRequestsGQL.watch(this.getVariables(), {
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
                        this.requests = [...data.productRequests];
                        this.requestsCount =
                            data.productRequestsConnection.aggregate.count;
                        this.switchings = Array(this.requestsCount).fill(false);
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
            where: {},
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
                size: params.pageSize,
            },
            relativeTo: this.route,
            queryParamsHandling: 'merge',
        });
    }
    trackById(index, item) {
        return item.id;
    }
    viewImages(images, requestId) {
        lightGallery(document.getElementById(`lightgallery_${requestId}`), {
            dynamic: true,
            dynamicEl: images.map((src) => ({
                src,
            })),
        });
    }
    updateStatus(request, index) {
        this.switchings[index] = true;
        this.updateProductRequestGQL
            .mutate({
            where: {
                id: request.id,
            },
            data: {
                isDone: !request.isDone,
            },
        }, {
            errorPolicy: 'all',
        })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this.destroy$))
            .subscribe(({ errors, data }) => {
            this.switchings[index] = false;
            if (errors) {
                this.msgService.error(this.translateService.instant('product.update_status_error'));
                return;
            }
            if (data) {
                this.msgService.success(this.translateService.instant('product.update_status_success'));
                this.requests[index] = Object.assign(Object.assign({}, request), { isDone: !request.isDone });
                this.requests = [...this.requests];
            }
        }, () => {
            this.msgService.error(this.translateService.instant('product.update_status_error'));
            this.switchings[index] = false;
        });
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.unsubscribe();
    }
}
ProductRequestListComponent.ɵfac = function ProductRequestListComponent_Factory(t) { return new (t || ProductRequestListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_graphql_graphql__WEBPACK_IMPORTED_MODULE_0__.GetProductRequestsGQL), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_6__.NzMessageService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_graphql_graphql__WEBPACK_IMPORTED_MODULE_0__.UpdateProductRequestGQL)); };
ProductRequestListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ProductRequestListComponent, selectors: [["app-product-request-list"]], decls: 36, vars: 32, consts: [[1, "site-page-header", 3, "nzTitle"], ["nz-page-header-breadcrumb", ""], ["nz-icon", "", "nzType", "home"], [1, "mb-4"], ["nzBordered", "", 3, "nzData", "nzFrontPagination", "nzTotal", "nzPageIndex", "nzPageSize", "nzLoading", "nzQueryParams"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "d-none", 3, "id"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "avatar", "mr-2", "flex-grow-0", "flex-shrink-0"], [3, "src", "appImgFallback", 4, "ngIf"], [3, "nzText", 4, "ngIf"], [1, "d-flex", "flex-column", "flex-grow-1"], ["nz-typography", ""], ["nz-icon", "", 3, "nzType"], ["nzBreakWord", ""], ["nz-button", "", "nzType", "dashed", 3, "click", 4, "ngIf"], [3, "ngModel", "nzControl", "nzLoading", "click"], [3, "src", "appImgFallback"], [3, "nzText"], ["nz-button", "", "nzType", "dashed", 3, "click"], ["nz-icon", ""], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"]], template: function ProductRequestListComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "nz-breadcrumb-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](12, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "nz-card", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "nz-table", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("nzQueryParams", function ProductRequestListComponent_Template_nz_table_nzQueryParams_14_listener($event) { return ctx.handleQueryParamsChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](21, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](24, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](27, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](30, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](33, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](35, ProductRequestListComponent_tr_35_Template, 24, 15, "tr", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("nzTitle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 16, "product.request"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](8, 18, "common.product"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](12, 20, "product.request"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzData", ctx.requests)("nzFrontPagination", false)("nzTotal", ctx.requestsCount)("nzPageIndex", ctx.pageIndex)("nzPageSize", ctx.pageSize)("nzLoading", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](21, 22, "common.user"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](24, 24, "common.content"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](27, 26, "common.image"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](30, 28, "common.created_at"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](33, 30, "common.status"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.requests)("ngForTrackBy", ctx.trackById);
    } }, directives: [ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_8__.NzPageHeaderComponent, ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_9__.NzBreadCrumbComponent, ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_8__.NzPageHeaderBreadcrumbDirective, ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_9__.NzBreadCrumbItemComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_10__["ɵNzTransitionPatchDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_11__.NzIconDirective, ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_12__.NzCardComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_13__.NzTableComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_13__.NzTheadComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_13__.NzTrDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_13__.NzTableCellDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_13__.NzThMeasureDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_13__.NzTbodyComponent, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, ng_zorro_antd_typography__WEBPACK_IMPORTED_MODULE_15__.NzTypographyComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_13__.NzCellBreakWordDirective, ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_16__.NzSwitchComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NgModel, _shared_directives_img_fallback_img_fallback_directive__WEBPACK_IMPORTED_MODULE_1__.ImgFallbackDirective, ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_18__.NzAvatarComponent, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_19__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_20__.NzWaveDirective], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_14__.DatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_14__.SlicePipe], styles: [".avatar[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  width: 32px;\n  height: 32px;\n  position: relative;\n  overflow: hidden;\n}\n.avatar[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3QtcmVxdWVzdC1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFDRjtBQUNFO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBQ0oiLCJmaWxlIjoicHJvZHVjdC1yZXF1ZXN0LWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXZhdGFyIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB3aWR0aDogMzJweDtcbiAgaGVpZ2h0OiAzMnB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgPiBpbWcge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cbn1cbiJdfQ== */"] });


/***/ }),

/***/ 76329:
/*!***************************************************!*\
  !*** ./src/app/product/product-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductRoutingModule": () => (/* binding */ ProductRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _pages_product_details_product_details_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/product-details/product-details.component */ 23642);
/* harmony import */ var _pages_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/product-list/product-list.component */ 97698);
/* harmony import */ var _pages_product_request_list_product_request_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/product-request-list/product-request-list.component */ 90364);
/* harmony import */ var _resolvers_product_resolver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./resolvers/product.resolver */ 39220);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);







const routes = [
    {
        path: 'new',
        component: _pages_product_details_product_details_component__WEBPACK_IMPORTED_MODULE_0__.ProductDetailsComponent,
        resolve: {
            product: _resolvers_product_resolver__WEBPACK_IMPORTED_MODULE_3__.ProductResolver,
        },
    },
    {
        path: 'requests',
        component: _pages_product_request_list_product_request_list_component__WEBPACK_IMPORTED_MODULE_2__.ProductRequestListComponent,
    },
    {
        path: ':id',
        component: _pages_product_details_product_details_component__WEBPACK_IMPORTED_MODULE_0__.ProductDetailsComponent,
        resolve: {
            product: _resolvers_product_resolver__WEBPACK_IMPORTED_MODULE_3__.ProductResolver,
        },
    },
    { path: '', pathMatch: 'full', component: _pages_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_1__.ProductListComponent },
];
class ProductRoutingModule {
}
ProductRoutingModule.ɵfac = function ProductRoutingModule_Factory(t) { return new (t || ProductRoutingModule)(); };
ProductRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: ProductRoutingModule });
ProductRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](ProductRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] }); })();


/***/ }),

/***/ 7695:
/*!**********************************************!*\
  !*** ./src/app/product/product.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductComponent": () => (/* binding */ ProductComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class ProductComponent {
    constructor() { }
    ngOnInit() {
    }
}
ProductComponent.ɵfac = function ProductComponent_Factory(t) { return new (t || ProductComponent)(); };
ProductComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductComponent, selectors: [["app-product"]], decls: 2, vars: 0, template: function ProductComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "product works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9kdWN0LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 11589:
/*!*******************************************!*\
  !*** ./src/app/product/product.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductModule": () => (/* binding */ ProductModule)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ 53882);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/page-header */ 92443);
/* harmony import */ var ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/breadcrumb */ 17401);
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/table */ 4316);
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/card */ 47108);
/* harmony import */ var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/message */ 91804);
/* harmony import */ var ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-zorro-antd/tag */ 9506);
/* harmony import */ var ng_zorro_antd_typography__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng-zorro-antd/typography */ 87250);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ng-zorro-antd/button */ 56079);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ng-zorro-antd/icon */ 35203);
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ng-zorro-antd/form */ 32734);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ng-zorro-antd/grid */ 95039);
/* harmony import */ var ng_zorro_antd_tree_select__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ng-zorro-antd/tree-select */ 21821);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ng-zorro-antd/input */ 29422);
/* harmony import */ var ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ng-zorro-antd/input-number */ 77727);
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ng-zorro-antd/select */ 61532);
/* harmony import */ var _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @tinymce/tinymce-angular */ 59408);
/* harmony import */ var ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ng-zorro-antd/upload */ 40896);
/* harmony import */ var ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ng-zorro-antd/checkbox */ 23530);
/* harmony import */ var ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ng-zorro-antd/switch */ 17318);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @ng-select/ng-select */ 36868);
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ 79787);
/* harmony import */ var ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ng-zorro-antd/radio */ 31031);
/* harmony import */ var ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ng-zorro-antd/avatar */ 37893);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ 70325);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ng-zorro-antd/modal */ 98797);
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/cdk/layout */ 66883);
/* harmony import */ var ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ng-zorro-antd/drawer */ 88346);
/* harmony import */ var _product_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product-routing.module */ 76329);
/* harmony import */ var _product_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product.component */ 7695);
/* harmony import */ var _pages_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/product-list/product-list.component */ 97698);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared.module */ 44466);
/* harmony import */ var _pages_product_details_product_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/product-details/product-details.component */ 23642);
/* harmony import */ var _pages_product_request_list_product_request_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/product-request-list/product-request-list.component */ 90364);
/* harmony import */ var _components_ingredient_analysis_ingredient_analysis_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/ingredient-analysis/ingredient-analysis.component */ 59403);
/* harmony import */ var _ingredient_ingredient_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ingredient/ingredient.module */ 95122);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2316);








































class ProductModule {
}
ProductModule.ɵfac = function ProductModule_Factory(t) { return new (t || ProductModule)(); };
ProductModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: ProductModule });
ProductModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
            _product_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProductRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClientModule,
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_12__.LayoutModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule,
            _ingredient_ingredient_module__WEBPACK_IMPORTED_MODULE_7__.IngredientModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslateModule.forChild(),
            ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_14__.NzPageHeaderModule,
            ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_15__.NzBreadCrumbModule,
            ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_16__.NzTableModule,
            ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_17__.NzCardModule,
            ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_18__.NzMessageModule,
            ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_19__.NzTagModule,
            ng_zorro_antd_typography__WEBPACK_IMPORTED_MODULE_20__.NzTypographyModule,
            ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_21__.NzButtonModule,
            ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_22__.NzIconModule,
            ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_23__.NzFormModule,
            ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_24__.NzGridModule,
            ng_zorro_antd_tree_select__WEBPACK_IMPORTED_MODULE_25__.NzTreeSelectModule,
            ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_26__.NzInputModule,
            ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_27__.NzInputNumberModule,
            ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_28__.NzSelectModule,
            _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_29__.EditorModule,
            ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_30__.NzUploadModule,
            ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_31__.NzCheckboxModule,
            ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_32__.NzSwitchModule,
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_33__.NgSelectModule,
            ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_34__.NzToolTipModule,
            ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_35__.NzRadioModule,
            ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_36__.NzAvatarModule,
            ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_37__.NzModalModule,
            ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_38__.NzDrawerModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](ProductModule, { declarations: [_product_component__WEBPACK_IMPORTED_MODULE_1__.ProductComponent,
        _pages_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_2__.ProductListComponent,
        _pages_product_details_product_details_component__WEBPACK_IMPORTED_MODULE_4__.ProductDetailsComponent,
        _pages_product_request_list_product_request_list_component__WEBPACK_IMPORTED_MODULE_5__.ProductRequestListComponent,
        _components_ingredient_analysis_ingredient_analysis_component__WEBPACK_IMPORTED_MODULE_6__.IngredientAnalysisComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
        _product_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProductRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClientModule,
        _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_12__.LayoutModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule,
        _ingredient_ingredient_module__WEBPACK_IMPORTED_MODULE_7__.IngredientModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslateModule, ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_14__.NzPageHeaderModule,
        ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_15__.NzBreadCrumbModule,
        ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_16__.NzTableModule,
        ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_17__.NzCardModule,
        ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_18__.NzMessageModule,
        ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_19__.NzTagModule,
        ng_zorro_antd_typography__WEBPACK_IMPORTED_MODULE_20__.NzTypographyModule,
        ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_21__.NzButtonModule,
        ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_22__.NzIconModule,
        ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_23__.NzFormModule,
        ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_24__.NzGridModule,
        ng_zorro_antd_tree_select__WEBPACK_IMPORTED_MODULE_25__.NzTreeSelectModule,
        ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_26__.NzInputModule,
        ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_27__.NzInputNumberModule,
        ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_28__.NzSelectModule,
        _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_29__.EditorModule,
        ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_30__.NzUploadModule,
        ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_31__.NzCheckboxModule,
        ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_32__.NzSwitchModule,
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_33__.NgSelectModule,
        ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_34__.NzToolTipModule,
        ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_35__.NzRadioModule,
        ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_36__.NzAvatarModule,
        ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_37__.NzModalModule,
        ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_38__.NzDrawerModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_product_product_module_ts.js.map