(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/Ashley/Documents/Sites/Grand-Circus/Projects/Final-Project/final_project/src/main.ts */"zUnb");


/***/ }),

/***/ "9sPT":
/*!************************************!*\
  !*** ./src/app/eo/eo.component.ts ***!
  \************************************/
/*! exports provided: EoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EoComponent", function() { return EoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _eo_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../eo-api.service */ "oAyI");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function EoComponent_div_5_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const eo_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](eo_r1.eo_prop);
} }
function EoComponent_div_5_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const symp_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](symp_r5.symp_name);
} }
function EoComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EoComponent_div_5_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.toggle(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, EoComponent_div_5_ng_container_7_Template, 3, 1, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Symptoms List");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EoComponent_div_5_Template_button_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.EOAPI.getEOSymptom(ctx_r8.eoName); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Get Symptoms");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, EoComponent_div_5_div_20_Template, 3, 1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const eo_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](eo_r1.eo_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", eo_r1.eo_url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.buttonName, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.show);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Historical Uses: ", eo_r1.eo_hist_uses, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Body Systems: ", eo_r1.eo_body_sys, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Aroma Description: ", eo_r1.eo_aroma_desc, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", eo_r1.eo_name, " may be useful on the following symptoms:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.EOAPI.sympSearch);
} }
class EoComponent {
    constructor(EOAPI) {
        this.EOAPI = EOAPI;
        this.show = false;
        this.buttonName = 'Show Properties';
    }
    ngOnInit() {
        this.EOAPI.getOil();
    }
    toggle() {
        this.show = !this.show;
        if (this.show)
            this.buttonName = "Hide Properties";
        else
            this.buttonName = "Show Properties";
    }
}
EoComponent.ɵfac = function EoComponent_Factory(t) { return new (t || EoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_eo_api_service__WEBPACK_IMPORTED_MODULE_1__["EOAPIService"])); };
EoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EoComponent, selectors: [["app-eo"]], decls: 6, vars: 2, consts: [["type", "text", "name", "eoName", "placeholder", "Input Essential Oil Name", 3, "ngModel", "ngModelChange"], [1, "container"], [4, "ngFor", "ngForOf"], ["height", "50%", "width", "50%", 3, "src"], ["id", "bt", 3, "click"], [4, "ngIf"], [3, "click"]], template: function EoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Essential Oils");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EoComponent_Template_input_ngModelChange_3_listener() { return ctx.EOAPI.getEO(ctx.eoName); })("ngModelChange", function EoComponent_Template_input_ngModelChange_3_listener($event) { return ctx.eoName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, EoComponent_div_5_Template, 21, 9, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.eoName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.EOAPI.eoSearch);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: ["#bt[_ngcontent-%COMP%] {\n    border: none;\n    font-size: 40px;\n    text-decoration: none;\n    background-color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osZUFBZTtJQUNmLHFCQUFxQjtJQUNyQix1QkFBdUI7QUFDM0IiLCJmaWxlIjoiZW8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNidCB7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-eo',
                templateUrl: './eo.component.html',
                styleUrls: ['./eo.component.css']
            }]
    }], function () { return [{ type: _eo_api_service__WEBPACK_IMPORTED_MODULE_1__["EOAPIService"] }]; }, null); })();


/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 12, vars: 0, consts: [[1, "header"], ["href", "/symptoms"], ["src", "assets/bottleswithherbs.jpg", "alt", "Symptoms"], ["href", "/eo"], ["src", "assets/leafdroptobottle.jpg", "alt", "Essential Oils"], [1, "advisory"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Symptoms Checker");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Essential Oils Info");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "The information provided on this web site is intended for basic, general informational purposes only. It is not intended as medical advice and it does not include all possible precautions, side effects, or interactions that may occur. The creators of this website do not take responsibility for how you use the information provided. Statements contained on this website have not been evaluated by the FDA. You should conduct thorough research via multiple sources and consult directly with a qualified medical professional before using any essential oil or product. Information on this website must not be relied upon for medical, legal, financial or other decisions. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["h2[_ngcontent-%COMP%] {\n    display: flex;\n    text-align: center;\n}\n\n.advisory[_ngcontent-%COMP%] {\nfont-size: 10px;\nborder: gray;\nborder-top: 15px;\ndisplay: flex;\njustify-content: center;\n}\n\n@media only screen and (min-width: 768px) {\n\n}\n\n@media only screen and (min-width: 992px) {\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixrQkFBa0I7QUFDdEI7O0FBRUE7QUFDQSxlQUFlO0FBQ2YsWUFBWTtBQUNaLGdCQUFnQjtBQUNoQixhQUFhO0FBQ2IsdUJBQXVCO0FBQ3ZCOztBQUlBOztBQUVBOztBQUVBOztBQUVBIiwiZmlsZSI6ImhvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmFkdmlzb3J5IHtcbmZvbnQtc2l6ZTogMTBweDtcbmJvcmRlcjogZ3JheTtcbmJvcmRlci10b3A6IDE1cHg7XG5kaXNwbGF5OiBmbGV4O1xuanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cblxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG5cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCkge1xuXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "CPpQ":
/*!********************************************************!*\
  !*** ./src/app/symptom-list/symptom-list.component.ts ***!
  \********************************************************/
/*! exports provided: SymptomListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SymptomListComponent", function() { return SymptomListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _eo_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../eo-api.service */ "oAyI");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function SymptomListComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.symptom.symp_name);
} }
class SymptomListComponent {
    constructor(EOAPI) {
        this.EOAPI = EOAPI;
    }
    ngOnInit() {
        this.EOAPI.getEOSymptom();
    }
}
SymptomListComponent.ɵfac = function SymptomListComponent_Factory(t) { return new (t || SymptomListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_eo_api_service__WEBPACK_IMPORTED_MODULE_1__["EOAPIService"])); };
SymptomListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SymptomListComponent, selectors: [["app-symptom-list"]], inputs: { eoName: "eoName" }, decls: 1, vars: 1, consts: [[4, "ngIf"], [1, "list"]], template: function SymptomListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SymptomListComponent_div_0_Template, 3, 1, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.eoName);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzeW1wdG9tLWxpc3QuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SymptomListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-symptom-list',
                templateUrl: './symptom-list.component.html',
                styleUrls: ['./symptom-list.component.css']
            }]
    }], function () { return [{ type: _eo_api_service__WEBPACK_IMPORTED_MODULE_1__["EOAPIService"] }]; }, { eoName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nav/nav.component */ "izVM");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class AppComponent {
    constructor() {
        this.title = 'final-project';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
    } }, directives: [_nav_nav_component__WEBPACK_IMPORTED_MODULE_1__["NavComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _symptoms_symptoms_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./symptoms/symptoms.component */ "tZ6y");
/* harmony import */ var _eo_eo_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./eo/eo.component */ "9sPT");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./nav/nav.component */ "izVM");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _symptom_list_symptom_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./symptom-list/symptom-list.component */ "CPpQ");












class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
        _symptoms_symptoms_component__WEBPACK_IMPORTED_MODULE_6__["SymptomsComponent"],
        _eo_eo_component__WEBPACK_IMPORTED_MODULE_7__["EoComponent"],
        _nav_nav_component__WEBPACK_IMPORTED_MODULE_8__["NavComponent"],
        _symptom_list_symptom_list_component__WEBPACK_IMPORTED_MODULE_10__["SymptomListComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                    _symptoms_symptoms_component__WEBPACK_IMPORTED_MODULE_6__["SymptomsComponent"],
                    _eo_eo_component__WEBPACK_IMPORTED_MODULE_7__["EoComponent"],
                    _nav_nav_component__WEBPACK_IMPORTED_MODULE_8__["NavComponent"],
                    _symptom_list_symptom_list_component__WEBPACK_IMPORTED_MODULE_10__["SymptomListComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "izVM":
/*!**************************************!*\
  !*** ./src/app/nav/nav.component.ts ***!
  \**************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




const _c0 = function (a0) { return { "display": a0 }; };
class NavComponent {
    constructor() {
        this.menuIsVisible = false;
    }
    toggleMenu() {
        this.menuIsVisible = !this.menuIsVisible;
    }
    ngOnInit() {
    }
}
NavComponent.ɵfac = function NavComponent_Factory(t) { return new (t || NavComponent)(); };
NavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavComponent, selectors: [["app-nav"]], decls: 16, vars: 3, consts: [[1, "menu-wrapper"], [1, "header"], ["routerLink", ""], ["id", "logo", "src", "assets/freelogo.jpg"], [3, "click"], ["id", "hamburger", "src", "assets/ham_menu.svg", "alt", "menu"], [3, "ngStyle"], ["routerLink", "/symptoms"], ["routerLink", "/eo"]], template: function NavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_Template_div_click_4_listener() { return ctx.toggleMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Symptom Checker");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Essential Oil Information");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx.menuIsVisible ? "block" : "none"));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"]], styles: ["header[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    background-color: darkgreen;\n    font-size: 10px;\n}\n\n.header[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    margin: 0;\n    padding: 0;\n    list-style: none;\n    overflow: hidden;\n  }\n\n.header[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    display: block;\n    color: #414141;\n    padding: 10px 10px;\n    text-decoration: none;\n  }\n\n.header[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .header[_ngcontent-%COMP%]   .menu-btn[_ngcontent-%COMP%]:hover {\n    background-color: rgba(0, 0, 0, 0.10);\n  }\n\n\n\n#logo[_ngcontent-%COMP%] {\n    color: #fff;\n    display: block;\n    float: left;\n    font-size: 1.5em;\n    padding: 12px 20px;\n    text-decoration: none;\n    max-width: 50%;\n    height: auto;  \n  }\n\n@media only screen and (min-width: 768px) {\n    header[_ngcontent-%COMP%] {\n        display: flex;\n        flex-direction: row;\n        justify-content: space-between;\n        background-color: mediumaquamarine;\n        align-items: center;\n    } \n     .header[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n        margin: 0;\n        padding: 0;\n        list-style: none;\n        overflow: hidden;\n      }\n\n      \n\n}\n\n@media only screen and (min-width: 992px) {\n\n  header[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    background-color: limegreen;\n}\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw4QkFBOEI7SUFDOUIsMkJBQTJCO0lBQzNCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixnQkFBZ0I7RUFDbEI7O0FBRUE7SUFDRSxjQUFjO0lBQ2QsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixxQkFBcUI7RUFDdkI7O0FBRUE7O0lBRUUscUNBQXFDO0VBQ3ZDOztBQUVBLG9CQUFvQjs7QUFDcEI7SUFDRSxXQUFXO0lBQ1gsY0FBYztJQUNkLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixjQUFjO0lBQ2QsWUFBWTtFQUNkOztBQUVGO0lBQ0k7UUFDSSxhQUFhO1FBQ2IsbUJBQW1CO1FBQ25CLDhCQUE4QjtRQUM5QixrQ0FBa0M7UUFDbEMsbUJBQW1CO0lBQ3ZCO0tBQ0M7UUFDRyxTQUFTO1FBQ1QsVUFBVTtRQUNWLGdCQUFnQjtRQUNoQixnQkFBZ0I7TUFDbEI7O01BRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0F5QkQ7O0FBRUw7O0FBRUE7O0VBRUU7SUFDRSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDhCQUE4QjtJQUM5QiwyQkFBMkI7QUFDL0I7O0FBRUEiLCJmaWxlIjoibmF2LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2dyZWVuO1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbn1cblxuLmhlYWRlciB1bCB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG5cbiAgLmhlYWRlciBsaSBhIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBjb2xvcjogIzQxNDE0MTtcbiAgICBwYWRkaW5nOiAxMHB4IDEwcHg7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB9XG4gICBcbiAgLmhlYWRlciBsaSBhOmhvdmVyLFxuICAuaGVhZGVyIC5tZW51LWJ0bjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEwKTtcbiAgfVxuXG4gIC8qIC5oZWFkZXIgLmxvZ28geyAqL1xuICAjbG9nbyB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgZm9udC1zaXplOiAxLjVlbTtcbiAgICBwYWRkaW5nOiAxMnB4IDIwcHg7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIG1heC13aWR0aDogNTAlO1xuICAgIGhlaWdodDogYXV0bzsgIFxuICB9XG4gICAgICBcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICBoZWFkZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IG1lZGl1bWFxdWFtYXJpbmU7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgfSBcbiAgICAgLmhlYWRlciB1bCB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIH1cblxuICAgICAgLyogLm1lbnUtd3JhcHBlcntcbiAgICAgICAgYmFja2dyb3VuZDogIzQxNDE0MTtcbiAgICAgICAgaGVpZ2h0OiA1NXB4O1xuICAgICAgICBsaW5lLWhlaWdodDogNTVweDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICAuaGVhZGVyIGxpIHtcbiAgICBmbG9hdDogbGVmdDtcbiAgfVxuICAgIC5oZWFkZXIgLmxvZ297XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgIH1cbiAgLmhlYWRlciBsaSBhIHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBwYWRkaW5nOiAwcHggMzBweDtcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG4gIFxuICB9XG4gIC5oZWFkZXIgLm1lbnUge1xuICAgIGNsZWFyOiBub25lO1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBtYXgtaGVpZ2h0OiBub25lO1xuICB9XG4gIC5oZWFkZXIgLm1lbnUtaWNvbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfSAqL1xuXG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIHtcblxuICBoZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGltZWdyZWVuO1xufVxuXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-nav',
                templateUrl: './nav.component.html',
                styleUrls: ['./nav.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "oAyI":
/*!***********************************!*\
  !*** ./src/app/eo-api.service.ts ***!
  \***********************************/
/*! exports provided: EOAPIService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EOAPIService", function() { return EOAPIService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class EOAPIService {
    constructor(http) {
        this.http = http;
        this.essentialOils = [];
        this.url = 'http://localhost:3000/api/';
        // public url: string = 'https://group-1-final-project-esense.herokuapp.com/api/';
        this.eoSearch = [];
        this.sympSearch = [];
        this.subSearch = [];
        this.filter = '';
        this.sympEO = [];
        this.eoSubArray = [];
        this.sub_symp = '';
        this.subEoSearch = [];
        this.eoSympArray = [];
        this.essentialOils = [];
        this.symptoms = [];
        this.subSearch = [];
    }
    //to get EOs by Name
    getEO(eoName) {
        if (eoName) {
            this.http.get(this.url + `eo/${eoName}`).subscribe((resp) => {
                this.eoSearch = resp;
            }, (error) => {
                console.log(error);
            } //else bring back all or top 3 EOs
            );
        }
    }
    //To get symptoms by EO name
    getEOSymptom(eoName) {
        console.log("we are here");
        if (eoName) {
            this.http.get(this.url + `symptom/${eoName}`).subscribe((resp) => {
                this.sympSearch = resp;
                console.log(this.sympSearch);
            }, (error) => {
                console.log(error);
            }
            //add else to return all subsymptoms
            );
        }
    }
    //to get ALL oils
    getOil() {
        this.essentialOils = [];
        this.http.get(this.url + 'eo').subscribe((data) => {
            for (const key in data) {
                if (Object.prototype.hasOwnProperty.call(data, key)) {
                    const essentialOil = data[key];
                    this.essentialOils.push(essentialOil);
                }
            }
        }, (error) => {
            console.error('there is an error');
        });
    }
    getAllSymp() {
        this.http.get(this.url + 'symptoms').subscribe((data) => {
            for (const key in data) {
                if (Object.prototype.hasOwnProperty.call(data, key)) {
                    const symptom = data[key];
                    this.symptoms.push(symptom);
                }
            }
        }, (error) => {
            console.error('there is an error');
        });
    }
    //To get symptom by Name
    getSymptom(sympName) {
        if (sympName) {
            this.http.get(this.url + `symptoms/${sympName}`).subscribe((resp) => {
                this.sympSearch = resp;
            }, (error) => {
                console.log(error);
            }
            //add else to return all symptoms
            );
        }
    }
    //To get sub symptom by symptom name
    getSubSymptom(sympName) {
        if (sympName) {
            this.http.get(this.url + `subsymptoms/${sympName}`).subscribe((resp) => {
                this.subSearch = resp;
            }, (error) => {
                console.log(error);
            }
            //add else to return all subsymptoms
            );
        }
    }
    // To get EO by Symptom name
    // getSympEO(sympName?: string) {
    //   if (sympName) { 
    //   this.http.get(this.url + `eobysymp/${sympName}`).subscribe(
    //     (resp:any) => {
    //       this.eoSearch = resp
    //       console.log(this.eoSearch)
    //     },
    //     (error) => {
    //       console.log(error);
    //       }
    //add else to return all subsymptoms
    //     )
    //   }
    // }
    //To get EO by SubSymptom name
    //     getSubEO(subSympName?: string) {
    //      console.log(subSympName);
    //       if (subSympName) { 
    //       this.http.get(this.url + `eobysub/${subSympName}`).subscribe(
    //         (resp:any) => {
    //           this.subEoSearch = resp
    //           console.log(this.subEoSearch)
    //         },
    //         (error) => {
    //           console.log(error);
    //           }
    //           //add else to return all subsymptoms
    //         )
    //       }
    //     }
    // }
    //To get EO by SubSymptom name
    // getSubEO(sub_symp?: string) {
    //   if (sub_symp) { 
    //    this.http.get(this.url + `eobysub/${sub_symp}`).subscribe(
    //      (resp:any) => {
    //        this.eoSearch = resp;
    //        this.subSymp === true;
    //        console.log(this.eoSearch)
    //      },
    //      (error) => {
    //        console.log(error);
    //       }
    // add else to return all subsymptoms
    //      )
    //    }
    //  }
    //START
    getResults(sympName, subName) {
        if (subName) {
            this.http.get(this.url + `eobysub/${subName}`).subscribe((resp) => {
                this.eoSubArray = resp;
                console.log(this.eoSubArray);
            });
        }
        else {
            this.http.get(this.url + `eobysymp/${sympName}`).subscribe((resp) => {
                this.eoSubArray = resp;
                console.log(this.eoSubArray);
            });
        }
    }
}
EOAPIService.ɵfac = function EOAPIService_Factory(t) { return new (t || EOAPIService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
EOAPIService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: EOAPIService, factory: EOAPIService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EOAPIService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "tZ6y":
/*!************************************************!*\
  !*** ./src/app/symptoms/symptoms.component.ts ***!
  \************************************************/
/*! exports provided: SymptomsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SymptomsComponent", function() { return SymptomsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _eo_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../eo-api.service */ "oAyI");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function SymptomsComponent_option_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const symp_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", symp_r3.symp_name, "");
} }
function SymptomsComponent_option_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", sub_r4.sub_symp);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](sub_r4.sub_symp);
} }
function SymptomsComponent_section_11_p_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const eos_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", eos_r7.eo_name, "");
} }
function SymptomsComponent_section_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " The recommendated oils include: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, SymptomsComponent_section_11_p_7_Template, 2, 1, "p", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r5.symp_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r5.symp_desc);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.EOAPI.eoSubArray);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" To apply topically: ", item_r5.topical_appl, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" To use as aroma therapy: ", item_r5.aromatic_appl, "");
} }
class SymptomsComponent {
    constructor(EOAPI) {
        this.EOAPI = EOAPI;
        this.selectedValue = '';
        this.subSympName = '';
        this.subName = '';
    }
    ngOnInit() {
        this.EOAPI.getSymptom();
    }
}
SymptomsComponent.ɵfac = function SymptomsComponent_Factory(t) { return new (t || SymptomsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_eo_api_service__WEBPACK_IMPORTED_MODULE_1__["EOAPIService"])); };
SymptomsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SymptomsComponent, selectors: [["app-symptoms"]], decls: 12, vars: 5, consts: [[3, "click"], ["type", "select", "name", "sympName", "placeholder", "Input Symptom", 3, "ngModel", "ngModelChange"], [4, "ngFor", "ngForOf"], ["name", "subName", 3, "ngModel", "click", "ngModelChange"], [3, "ngValue", 4, "ngFor", "ngForOf"], [3, "ngValue"]], template: function SymptomsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Symptoms Checker");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SymptomsComponent_Template_button_click_3_listener() { return ctx.EOAPI.getAllSymp(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Click Me ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "select", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SymptomsComponent_Template_select_ngModelChange_5_listener() { return ctx.EOAPI.getSubSymptom(); })("ngModelChange", function SymptomsComponent_Template_select_ngModelChange_5_listener($event) { return ctx.sympName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SymptomsComponent_option_6_Template, 2, 1, "option", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "select", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SymptomsComponent_Template_select_click_7_listener() { return ctx.EOAPI.getSubSymptom(ctx.sympName); })("ngModelChange", function SymptomsComponent_Template_select_ngModelChange_7_listener($event) { return ctx.subName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, SymptomsComponent_option_8_Template, 2, 2, "option", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SymptomsComponent_Template_button_click_9_listener() { return ctx.EOAPI.getSymptom(ctx.sympName); })("click", function SymptomsComponent_Template_button_click_9_listener() { return ctx.EOAPI.getResults(ctx.sympName, ctx.subName); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Get Info ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, SymptomsComponent_section_11_Template, 12, 5, "section", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.sympName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.EOAPI.symptoms);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.subName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.EOAPI.subSearch);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.EOAPI.sympSearch);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"]], styles: [".header[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN5bXB0b21zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCIiwiZmlsZSI6InN5bXB0b21zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyIHVsIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SymptomsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-symptoms',
                templateUrl: './symptoms.component.html',
                styleUrls: ['./symptoms.component.css']
            }]
    }], function () { return [{ type: _eo_api_service__WEBPACK_IMPORTED_MODULE_1__["EOAPIService"] }]; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _symptoms_symptoms_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./symptoms/symptoms.component */ "tZ6y");
/* harmony import */ var _eo_eo_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./eo/eo.component */ "9sPT");







const routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'symptoms', component: _symptoms_symptoms_component__WEBPACK_IMPORTED_MODULE_3__["SymptomsComponent"] },
    { path: 'eo', component: _eo_eo_component__WEBPACK_IMPORTED_MODULE_4__["EoComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map