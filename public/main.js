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
    /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
    /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
    /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
    
    
    
    
    
    
    const _c0 = function (a1) { return ["/symptoms", a1]; };
    function EoComponent_div_9_div_15_a_1_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const symp_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, symp_r5.symp_name));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](symp_r5.symp_name);
    } }
    function EoComponent_div_9_div_15_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EoComponent_div_9_div_15_a_1_Template, 2, 4, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const i_r6 = ctx.index;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r6 % 2 == 0);
    } }
    function EoComponent_div_9_div_17_a_1_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const symp_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, symp_r9.symp_name));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](symp_r9.symp_name);
    } }
    function EoComponent_div_9_div_17_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EoComponent_div_9_div_17_a_1_Template, 2, 4, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const i_r10 = ctx.index;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r10 % 2 != 0);
    } }
    function EoComponent_div_9_ng_container_24_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Properties:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Historical Uses:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Body Systems:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Aroma Description:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    } if (rf & 2) {
        const eo_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](eo_r1.eo_prop);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](eo_r1.eo_hist_uses);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](eo_r1.eo_body_sys);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](eo_r1.eo_aroma_desc);
    } }
    function EoComponent_div_9_Template(rf, ctx) { if (rf & 1) {
        const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Symptoms List");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EoComponent_div_9_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.EOAPI.getEOSymptom(ctx_r14.eoName); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Get Symptoms");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, EoComponent_div_9_div_15_Template, 2, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, EoComponent_div_9_div_17_Template, 2, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EoComponent_div_9_Template_button_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, EoComponent_div_9_ng_container_24_Template, 21, 4, "ng-container", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const eo_r1 = ctx.$implicit;
        const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](eo_r1.eo_name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", eo_r1.eo_url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Use the button below to find out on which symptoms ", eo_r1.eo_name, " may be useful: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.EOAPI.sympSearch);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.EOAPI.sympSearch);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r0.buttonName, ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.show);
    } }
    class EoComponent {
        constructor(EOAPI, _Activatedroute) {
            this.EOAPI = EOAPI;
            this._Activatedroute = _Activatedroute;
            this.show = false;
            this.buttonName = 'Show Essential Oil Information';
            let result = this._Activatedroute.snapshot.paramMap.get("eo_name");
            console.log(result);
            this.EOAPI.getEO(result);
        }
        ngOnInit() {
            this.EOAPI.getOil();
        }
        toggle() {
            this.show = !this.show;
            if (this.show)
                this.buttonName = "Hide Essential Oil Information";
            else
                this.buttonName = "Show Essential Oil Information";
        }
    }
    EoComponent.ɵfac = function EoComponent_Factory(t) { return new (t || EoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_eo_api_service__WEBPACK_IMPORTED_MODULE_1__["EOAPIService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
    EoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EoComponent, selectors: [["app-eo"]], decls: 10, vars: 2, consts: [[1, "divider"], ["src", "assets/Hand_drawn_flowers_doodle.jpg", "alt", "flower doodle"], ["type", "text", "name", "eoName", "placeholder", "Input Essential Oil Name", 3, "ngModel", "ngModelChange"], [1, "container"], [4, "ngFor", "ngForOf"], [1, "info"], [3, "src"], [1, "infoheader"], [1, "infobox"], [3, "click"], [1, "wrapper"], [1, "list1"], [1, "list2"], ["id", "bt", 3, "click"], [4, "ngIf"], [3, "routerLink", 4, "ngIf"], [3, "routerLink"], [1, "title"]], template: function EoComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Essential Oils");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Enter the name of an Essential Oil for which you would like more information");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EoComponent_Template_input_ngModelChange_7_listener() { return ctx.EOAPI.getEO(ctx.eoName); })("ngModelChange", function EoComponent_Template_input_ngModelChange_7_listener($event) { return ctx.eoName = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, EoComponent_div_9_Template, 25, 7, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.eoName);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.EOAPI.eoSearch);
        } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: ["h1[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n}\n\nh2[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n}\n\nh3[_ngcontent-%COMP%] {\n    font-size: 18px;\n}\n\n.container[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n}\n\n.divider[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: 10%;\n    width: 10%;\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n}\n\ninput[_ngcontent-%COMP%] {\n    font-size: 10pt;\n    font-family: Paprika;\n    width: 200px;\n    background-color: rgb(229, 250, 245); \n    border-radius: 5px;\n}\n\nbutton[_ngcontent-%COMP%] {\n    font-size: 10pt;\n    font-family: Paprika;\n    width: 150px;\n    background-color: rgb(229, 250, 245); \n    border-radius: 5px;\n    text-align: left;\n    outline: none;\n}\n\n#bt[_ngcontent-%COMP%] {\n    font-size: 18px;\n    font-family: Paprika;\n    border: none;\n    outline: none;\n    text-decoration: none;\n    background-color: transparent;\n    width: 100%;\n    text-align: left;\n}\n\n.container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: 200px;\n    width: 400px;\n    \n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n    padding-bottom: 30px;\n}\n\n\n\n.infoheader[_ngcontent-%COMP%] {\n    border: darkgray;\n    border-style: solid;\n    border-top-right-radius: 30px 20px;\n    border-top-left-radius: 30px 20px;\n    background-color: #9BCD9B;\n    padding: 5px 20px;\n}\n\n.infobox[_ngcontent-%COMP%] {\n    border-left: darkgray;\n    border-right: darkgray;\n    border-bottom: darkgray;\n    border-style: solid;\n    border-bottom-right-radius: 10px;\n    border-bottom-left-radius: 10px;\n    padding: 10px 5px;\n}\n\n.title[_ngcontent-%COMP%] {\n    font-weight: 700;\n}\n\n.wrapper[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    \n    padding-top: 10px;\n    padding-bottom: 30px;\n}\n\n.symplist[_ngcontent-%COMP%] {\n    border: solid darkgray;\n    border-radius: 5px;\n    margin-top: 30px;\n    padding: 5px;\n}\n\n@media only screen and (min-width: 768px) {\n\n    .infoheader[_ngcontent-%COMP%] {\n        background-color: #feffef\n    }\n\n\n\n\n\n\n  }\n\n@media only screen and (min-width: 992px) {\n    .infoheader[_ngcontent-%COMP%] {\n        background-color: #90EE90;\n    }\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsVUFBVTtJQUNWLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLG9CQUFvQjtJQUNwQixZQUFZO0lBQ1osb0NBQW9DO0lBQ3BDLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixvQkFBb0I7SUFDcEIsWUFBWTtJQUNaLG9DQUFvQztJQUNwQyxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysb0JBQW9CO0lBQ3BCLFlBQVk7SUFDWixhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLDZCQUE2QjtJQUM3QixXQUFXO0lBQ1gsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsb0JBQW9CO0FBQ3hCOztBQUVBOzs7OztHQUtHOztBQUVIO0lBQ0ksZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixrQ0FBa0M7SUFDbEMsaUNBQWlDO0lBQ2pDLHlCQUF5QjtJQUN6QixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsZ0NBQWdDO0lBQ2hDLCtCQUErQjtJQUMvQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDhCQUE4QjtJQUM5QixvQ0FBb0M7SUFDcEMsaUJBQWlCO0lBQ2pCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLFlBQVk7QUFDaEI7O0FBRUE7O0lBRUk7UUFDSTtJQUNKO0FBQ0o7O0dBRUc7O0FBRUg7O0dBRUc7O0FBRUg7Ozs7Ozs7R0FPRzs7RUFFRDs7QUFHRjtJQUNJO1FBQ0kseUJBQXlCO0lBQzdCO0VBQ0YiLCJmaWxlIjoiZW8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgxIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG5oMiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuaDMge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLmNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5kaXZpZGVyIGltZyB7XG4gICAgaGVpZ2h0OiAxMCU7XG4gICAgd2lkdGg6IDEwJTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG5cbmlucHV0IHtcbiAgICBmb250LXNpemU6IDEwcHQ7XG4gICAgZm9udC1mYW1pbHk6IFBhcHJpa2E7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjksIDI1MCwgMjQ1KTsgXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG5idXR0b24ge1xuICAgIGZvbnQtc2l6ZTogMTBwdDtcbiAgICBmb250LWZhbWlseTogUGFwcmlrYTtcbiAgICB3aWR0aDogMTUwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyOSwgMjUwLCAyNDUpOyBcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBvdXRsaW5lOiBub25lO1xufVxuXG4jYnQge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBmb250LWZhbWlseTogUGFwcmlrYTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLmNvbnRhaW5lciBpbWcge1xuICAgIGhlaWdodDogMjAwcHg7XG4gICAgd2lkdGg6IDQwMHB4O1xuICAgIC8qIG9iamVjdC1maXQ6IGNvdmVyOyAqL1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICBwYWRkaW5nLWJvdHRvbTogMzBweDtcbn1cblxuLyogLnByb3BlcnRpZXMge1xuICAgIG91dGxpbmUtc3R5bGU6IHNvbGlkO1xuICAgIG91dGxpbmUtY29sb3I6IGdyYXk7XG4gICAgb3V0bGluZS13aWR0aDogMXB4O1xuICAgIG91dGxpbmUtb2Zmc2V0OiA1cHg7XG59ICovXG5cbi5pbmZvaGVhZGVyIHtcbiAgICBib3JkZXI6IGRhcmtncmF5O1xuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDMwcHggMjBweDtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAzMHB4IDIwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzlCQ0Q5QjtcbiAgICBwYWRkaW5nOiA1cHggMjBweDtcbn1cblxuLmluZm9ib3gge1xuICAgIGJvcmRlci1sZWZ0OiBkYXJrZ3JheTtcbiAgICBib3JkZXItcmlnaHQ6IGRhcmtncmF5O1xuICAgIGJvcmRlci1ib3R0b206IGRhcmtncmF5O1xuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEwcHg7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTBweDtcbiAgICBwYWRkaW5nOiAxMHB4IDVweDtcbn1cblxuLnRpdGxlIHtcbiAgICBmb250LXdlaWdodDogNzAwO1xufVxuXG4ud3JhcHBlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAvKiBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7ICovXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDMwcHg7XG59XG5cbi5zeW1wbGlzdCB7XG4gICAgYm9yZGVyOiBzb2xpZCBkYXJrZ3JheTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICBwYWRkaW5nOiA1cHg7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcblxuICAgIC5pbmZvaGVhZGVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmZlZlxuICAgIH1cbi8qIC5jb250YWluZXIge1xuICAgIGZsb2F0OiByaWdodDtcbn0gKi9cblxuLyogLmNvbnRhaW5lciBpbWcge1xuICAgIGZsb2F0OiBsZWZ0O1xufSAqL1xuXG4vKiAuaW5mbyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XG4gICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDMwcHg7XG59ICovXG5cbiAgfVxuXG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgICAuaW5mb2hlYWRlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM5MEVFOTA7XG4gICAgfVxuICB9Il19 */"] });
    /*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EoComponent, [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
            args: [{
                    selector: 'app-eo',
                    templateUrl: './eo.component.html',
                    styleUrls: ['./eo.component.css']
                }]
        }], function () { return [{ type: _eo_api_service__WEBPACK_IMPORTED_MODULE_1__["EOAPIService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }]; }, null); })();
    
    
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
    /* harmony import */ var _eo_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../eo-api.service */ "oAyI");
    /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
    
    
    
    
    const _c0 = function (a1) { return ["/eo", a1]; };
    class HomeComponent {
        constructor(EOAPI, _Activatedroute) {
            this.EOAPI = EOAPI;
            this._Activatedroute = _Activatedroute;
            this.randomTerm = [];
            let result = this._Activatedroute.snapshot.paramMap.get("eo_name");
            console.log(result);
            this.EOAPI.getEO(result);
        }
        ngOnInit() {
        }
    }
    HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_eo_api_service__WEBPACK_IMPORTED_MODULE_1__["EOAPIService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 23, vars: 4, consts: [[1, "container"], [1, "header"], ["id", "sym"], ["routerLink", "/symptoms"], ["src", "assets/Symp2.png", "alt", "Symptoms"], ["id", "eo"], ["routerLink", "/eo"], ["src", "assets/EO1.png", "alt", "Essential Oils"], ["id", "random"], ["src", "assets/Untitled_Artwork.png", 3, "click"], ["id", "random-term"], [3, "routerLink"], ["id", "disclaimer"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Symptoms Checker");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Essential Oils Info");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h2", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Run the EO Randomizer");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "img", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_img_click_14_listener() { return ctx.EOAPI.getRandom(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "The information provided on this web site is intended for basic, general informational purposes only. It is not intended as medical advice and it does not include all possible precautions, side effects, or interactions that may occur. The creators of this website do not take responsibility for how you use the information provided. Statements contained on this website have not been evaluated by the FDA. You should conduct thorough research via multiple sources and consult directly with a qualified medical professional before using any essential oil or product. Information on this website must not be relied upon for medical, legal, financial or other decisions. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx.EOAPI.randomTerm[0].eo_name));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.EOAPI.randomTerm[0].eo_name, "");
        } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: ["h2[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n}\n\na[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.header[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n\n\n\n\nimg[_ngcontent-%COMP%] {\n    width: 200px;\n    height: 150px;\n}\n\n\n\n#random-term[_ngcontent-%COMP%] {\n    margin: auto;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    font-size: 16px;\n}\n\n#disclaimer[_ngcontent-%COMP%] {\n    background-color: none;\n    display: flex;\n    font-size: 6px;\n    text-align: justify;\n    border-top: 2px solid black;\n    border-bottom: 2px solid black;\n    border-left: 2px solid black;\n    border-right: 2px solid black;\n    padding: 10px;\n    margin: 10px;\n}\n\n@media only screen and (min-width: 768px) {\n    \n\n    \n    .header[_ngcontent-%COMP%] {\n    float: left;\n    width: 32%;\n    padding: 5px;\n  }\n  \n  \n  .container[_ngcontent-%COMP%]::after {\n    content: \"\";\n    clear: both;\n    display: table;\n  }\n\n  #random-term[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n font-size: 16px;\n}\n  \n    \n    \n    #disclaimer[_ngcontent-%COMP%] {\n        background-color: aquamarine;\n        font-size: 8px;\n        border: gray;\n        text-align: justify;\n        display: flex;\n        \n    }\n\n}\n\n@media only screen and (min-width: 992px) {\n    h2[_ngcontent-%COMP%] {\n        color:rgb(163, 171, 106);\n        font: bold;\n    }\n\n    #disclaimer[_ngcontent-%COMP%] {\n        background-color:rgb(163, 171, 106);\n        font-size: 8px;\n        border: gray;\n        text-align: justify;\n        display: flex;\n        align-content: flex-end;\n        \n    }\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0FBQ3ZCOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7OztHQWlCRzs7QUFFSDs7Ozs7R0FLRzs7QUFFSDtJQUNJLFlBQVk7SUFDWixhQUFhO0FBQ2pCOztBQUVBOzs7Ozs7OztHQVFHOztBQUVIO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsMkJBQTJCO0lBQzNCLDhCQUE4QjtJQUM5Qiw0QkFBNEI7SUFDNUIsNkJBQTZCO0lBQzdCLGFBQWE7SUFDYixZQUFZO0FBQ2hCOztBQUVBO0lBQ0k7Ozs7T0FJRzs7SUFFSCxvRUFBb0U7SUFDcEU7SUFDQSxXQUFXO0lBQ1gsVUFBVTtJQUNWLFlBQVk7RUFDZDs7RUFFQSx3Q0FBd0M7RUFDeEM7SUFDRSxXQUFXO0lBQ1gsV0FBVztJQUNYLGNBQWM7RUFDaEI7O0VBRUE7RUFDQSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtDQUNwQixlQUFlO0FBQ2hCOztJQUVJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztPQTBCRzs7SUFFSDtRQUNJLDRCQUE0QjtRQUM1QixjQUFjO1FBQ2QsWUFBWTtRQUNaLG1CQUFtQjtRQUNuQixhQUFhO1FBQ2IscUJBQXFCO0lBQ3pCOztBQUVKOztBQUVBO0lBQ0k7UUFDSSx3QkFBd0I7UUFDeEIsVUFBVTtJQUNkOztJQUVBO1FBQ0ksbUNBQW1DO1FBQ25DLGNBQWM7UUFDZCxZQUFZO1FBQ1osbUJBQW1CO1FBQ25CLGFBQWE7UUFDYix1QkFBdUI7UUFDdkIscUJBQXFCO0lBQ3pCOztBQUVKIiwiZmlsZSI6ImhvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG5hIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5oZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4vKiAjc3ltIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuI2VvIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuI3JhbmRvbSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG59ICovXG5cbi8qIGltZyB7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBsZWZ0OiAyMDBweDtcbiAgICByaWdodDogMjAwcHg7XG59ICovXG5cbmltZyB7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIGhlaWdodDogMTUwcHg7XG59XG5cbi8qIC5yYW5kb20tYnV0dG9uIHtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgbGVmdDogMjAwcHg7XG4gICAgcmlnaHQ6IDIwMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2IoMTI1LCAyNDIsIDEzNSksIHJnYigzOCwgMTYxLCAzOCksIHJnYigxMiwgMTUyLCA0OSksIHJnYigxNCwgMjIyLCAzMSksIHJnYigxMCwgMTQ0LCAxMCksIHJnYigxNCwgMTg1LCA1OSkpXG59ICovXG5cbiNyYW5kb20tdGVybSB7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuI2Rpc2NsYWltZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IG5vbmU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmb250LXNpemU6IDZweDtcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCBibGFjaztcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgYmxhY2s7XG4gICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCBibGFjaztcbiAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCBibGFjaztcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIG1hcmdpbjogMTBweDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICAgIC8qIC5oZWFkZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgfSAqL1xuXG4gICAgLyogVGhyZWUgaW1hZ2UgY29udGFpbmVycyAodXNlIDI1JSBmb3IgZm91ciwgYW5kIDUwJSBmb3IgdHdvLCBldGMpICovXG4gICAgLmhlYWRlciB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgd2lkdGg6IDMyJTtcbiAgICBwYWRkaW5nOiA1cHg7XG4gIH1cbiAgXG4gIC8qIENsZWFyIGZsb2F0cyBhZnRlciBpbWFnZSBjb250YWluZXJzICovXG4gIC5jb250YWluZXI6OmFmdGVyIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIGNsZWFyOiBib3RoO1xuICAgIGRpc3BsYXk6IHRhYmxlO1xuICB9XG5cbiAgI3JhbmRvbS10ZXJtIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gZm9udC1zaXplOiAxNnB4O1xufVxuICBcbiAgICAvKiAjc3ltIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgfVxuICAgIFxuICAgICNlbyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIH1cbiAgICBcbiAgICAjcmFuZG9tIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgfVxuICAgIFxuICAgIGltZyB7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBsZWZ0OiAyMDBweDtcbiAgICAgICAgcmlnaHQ6IDIwMHB4O1xuICAgIH0gKi9cbiAgICBcbiAgICAjZGlzY2xhaW1lciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGFxdWFtYXJpbmU7XG4gICAgICAgIGZvbnQtc2l6ZTogOHB4O1xuICAgICAgICBib3JkZXI6IGdyYXk7XG4gICAgICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIC8qIHRleHQtYWxpZ246IGVuZDsgKi9cbiAgICB9XG5cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCkge1xuICAgIGgyIHtcbiAgICAgICAgY29sb3I6cmdiKDE2MywgMTcxLCAxMDYpO1xuICAgICAgICBmb250OiBib2xkO1xuICAgIH1cblxuICAgICNkaXNjbGFpbWVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMTYzLCAxNzEsIDEwNik7XG4gICAgICAgIGZvbnQtc2l6ZTogOHB4O1xuICAgICAgICBib3JkZXI6IGdyYXk7XG4gICAgICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICAvKiB0ZXh0LWFsaWduOiBlbmQ7ICovXG4gICAgfVxuXG59Il19 */"] });
    /*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
            args: [{
                    selector: 'app-home',
                    templateUrl: './home.component.html',
                    styleUrls: ['./home.component.css']
                }]
        }], function () { return [{ type: _eo_api_service__WEBPACK_IMPORTED_MODULE_1__["EOAPIService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }]; }, null); })();
    
    
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
    
    
    
    class NavComponent {
        constructor() { }
        // menuIsVisible: boolean = false;
        // toggleMenu(): void {
        //    this.menuIsVisible = !this.menuIsVisible;
        //  }
        ngOnInit() {
        }
    }
    NavComponent.ɵfac = function NavComponent_Factory(t) { return new (t || NavComponent)(); };
    NavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavComponent, selectors: [["app-nav"]], decls: 14, vars: 0, consts: [[1, "menu-wrapper"], [1, "header"], ["routerLink", ""], ["id", "logo", "src", "assets/eSenseLogo2.png"], [1, "menu"], ["routerLink", "/symptoms"], ["routerLink", "/eo"]], template: function NavComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "header", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Home");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Symptom Checker");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Essential Oil Information");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  \n  \n  border-bottom: 5px solid black;\n  padding-top: 30px;\n  margin: 10px;\n}\n\n\n\n.header[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\nmargin: 0;\npadding: 0;\nlist-style: none;\noverflow: hidden;\n}\n\na[_ngcontent-%COMP%] {\ncolor: black;\npadding: 5px;\ntext-decoration: none;\nfont-size: 12px;\ndisplay: block;\n}\n\n\n\n.header[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .header[_ngcontent-%COMP%]   .menu-btn[_ngcontent-%COMP%]:hover {\n  background-color: rgba(0, 0, 0, 0.10);\n}\n\n\n\n\n\nimg[_ngcontent-%COMP%] {\n    padding: 0px;\n}\n\n@media only screen and (min-width: 768px) {\n  header[_ngcontent-%COMP%] {\n      background-color: mediumaquamarine;\n      border: none;\n  } \n\n    \n\n}\n\n@media only screen and (min-width: 992px) {\n\nheader[_ngcontent-%COMP%] {\n  \n  background-color:rgb(199, 205, 140);\n  border: none;\n  padding-top: 50px;\n  margin: auto;\n}\n\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIseUNBQXlDO0VBQ3pDLHFCQUFxQjtFQUNyQiw4QkFBOEI7RUFDOUIsaUJBQWlCO0VBQ2pCLFlBQVk7QUFDZDs7QUFFQTs7Ozs7O0dBTUc7O0FBRUg7QUFDQSxTQUFTO0FBQ1QsVUFBVTtBQUNWLGdCQUFnQjtBQUNoQixnQkFBZ0I7QUFDaEI7O0FBRUE7QUFDQSxZQUFZO0FBQ1osWUFBWTtBQUNaLHFCQUFxQjtBQUNyQixlQUFlO0FBQ2YsY0FBYztBQUNkOztBQUVBOzs7Ozs7R0FNRzs7QUFFSDs7RUFFRSxxQ0FBcUM7QUFDdkM7O0FBRUEsb0JBQW9COztBQUNwQjs7Ozs7Ozs7O0dBU0c7O0FBRUg7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0VBQ0U7TUFDSSxrQ0FBa0M7TUFDbEMsWUFBWTtFQUNoQjs7SUFFRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXlCRDs7QUFFSDs7QUFFQTs7QUFFQTtFQUNFOzttQ0FFaUM7RUFDakMsbUNBQW1DO0VBQ25DLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsWUFBWTtBQUNkOztBQUVBOzs7R0FHRztBQUNIIiwiZmlsZSI6Im5hdi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOnJnYigxNjMsIDE3MSwgMTA2KTsgKi9cbiAgLyogZm9udC1zaXplOiAxNXB4OyAqL1xuICBib3JkZXItYm90dG9tOiA1cHggc29saWQgYmxhY2s7XG4gIHBhZGRpbmctdG9wOiAzMHB4O1xuICBtYXJnaW46IDEwcHg7XG59XG5cbi8qIC5tZW51LXdyYXBwZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XG4gIHdpZHRoOiAzMDBweDtcbiAgYm9yZGVyOiAxNXB4IHNvbGlkIGdyZWVuO1xuICBwYWRkaW5nOiA1MHB4O1xuICBtYXJnaW46IDIwcHg7XG59ICovXG5cbi5oZWFkZXIgdWwge1xubWFyZ2luOiAwO1xucGFkZGluZzogMDtcbmxpc3Qtc3R5bGU6IG5vbmU7XG5vdmVyZmxvdzogaGlkZGVuO1xufVxuXG5hIHtcbmNvbG9yOiBibGFjaztcbnBhZGRpbmc6IDVweDtcbnRleHQtZGVjb3JhdGlvbjogbm9uZTtcbmZvbnQtc2l6ZTogMTJweDtcbmRpc3BsYXk6IGJsb2NrO1xufVxuXG4vKiAuaGVhZGVyIGxpIGEge1xuXG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjb2xvcjogIzQxNDE0MTtcbiAgcGFkZGluZzogMTBweCAxMHB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59ICovXG4gXG4uaGVhZGVyIGxpIGE6aG92ZXIsXG4uaGVhZGVyIC5tZW51LWJ0bjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xMCk7XG59XG5cbi8qIC5oZWFkZXIgLmxvZ28geyAqL1xuLyogI2xvZ28ge1xuICBjb2xvcjogI2ZmZjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZsb2F0OiBsZWZ0O1xuICBmb250LXNpemU6IDEuNWVtO1xuICBwYWRkaW5nOiAxMnB4IDIwcHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgbWF4LXdpZHRoOiA1MCU7XG4gIGhlaWdodDogYXV0bzsgIFxufSAqL1xuXG5pbWcge1xuICAgIHBhZGRpbmc6IDBweDtcbn1cbiAgICBcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgaGVhZGVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IG1lZGl1bWFxdWFtYXJpbmU7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gIH0gXG5cbiAgICAvKiAubWVudS13cmFwcGVye1xuICAgICAgYmFja2dyb3VuZDogIzQxNDE0MTtcbiAgICAgIGhlaWdodDogNTVweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiA1NXB4O1xuICAgICAgd2lkdGg6IDEwMCU7XG4gIH1cbi5oZWFkZXIgbGkge1xuICBmbG9hdDogbGVmdDtcbn1cbiAgLmhlYWRlciAubG9nb3tcbiAgICAgIGxpbmUtaGVpZ2h0OiAxO1xuICB9XG4uaGVhZGVyIGxpIGEge1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMHB4IDMwcHg7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcblxufVxuLmhlYWRlciAubWVudSB7XG4gIGNsZWFyOiBub25lO1xuICBmbG9hdDogcmlnaHQ7XG4gIG1heC1oZWlnaHQ6IG5vbmU7XG59XG4uaGVhZGVyIC5tZW51LWljb24ge1xuICBkaXNwbGF5OiBub25lO1xufSAqL1xuXG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIHtcblxuaGVhZGVyIHtcbiAgLyogZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyAqL1xuICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigxOTksIDIwNSwgMTQwKTtcbiAgYm9yZGVyOiBub25lO1xuICBwYWRkaW5nLXRvcDogNTBweDtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4vKiAjbWVudSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xufSAqL1xufSJdfQ== */"] });
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
            this.randomTerm = [];
            this.eoRandomArray = [];
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
        //to get all symptoms
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
        //START To get all oils by symp or sub symp name
        getRandom() {
            let randomNumber = Math.floor((Math.random() * 69) + 14);
            console.log(randomNumber);
            // let eoId = this.randomTerm[randomNumber];
            if (randomNumber) {
                this.http.get(this.url + `eo/random/${randomNumber}`).subscribe((resp) => {
                    this.randomTerm[0] = resp[0];
                    console.log(this.randomTerm);
                }, (error) => {
                    console.log(error);
                });
            }
        }
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
    /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
    /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
    /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
    
    
    
    
    
    
    function SymptomsComponent_option_7_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const symp_r3 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", symp_r3.symp_name, "");
    } }
    function SymptomsComponent_option_11_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const sub_r4 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", sub_r4.sub_symp);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](sub_r4.sub_symp);
    } }
    const _c0 = function (a1) { return ["/eo", a1]; };
    function SymptomsComponent_section_16_p_7_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const eos_r7 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, eos_r7.eo_name));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](eos_r7.eo_name);
    } }
    function SymptomsComponent_section_16_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, SymptomsComponent_section_16_p_7_Template, 3, 4, "p", 1);
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
        constructor(EOAPI, _Activatedroute) {
            this.EOAPI = EOAPI;
            this._Activatedroute = _Activatedroute;
            this.selectedValue = '';
            this.subSympName = '';
            this.subName = '';
            let result = this._Activatedroute.snapshot.paramMap.get("symp_name");
            console.log(result);
            this.EOAPI.getSymptom(result);
        }
        ngOnInit() {
            this.EOAPI.getAllSymp();
        }
    }
    SymptomsComponent.ɵfac = function SymptomsComponent_Factory(t) { return new (t || SymptomsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_eo_api_service__WEBPACK_IMPORTED_MODULE_1__["EOAPIService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
    SymptomsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SymptomsComponent, selectors: [["app-symptoms"]], decls: 17, vars: 5, consts: [["type", "select", "name", "sympName", "placeholder", "Input Symptom", 3, "ngModel", "ngModelChange"], [4, "ngFor", "ngForOf"], ["name", "subName", 3, "ngModel", "click", "ngModelChange"], [3, "ngValue", 4, "ngFor", "ngForOf"], [3, "click"], [3, "ngValue"], [3, "routerLink"]], template: function SymptomsComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Symptoms Checker");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Select the Symptom for which you would like more information");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "select", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SymptomsComponent_Template_select_ngModelChange_5_listener($event) { return ctx.sympName = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "option");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, SymptomsComponent_option_7_Template, 2, 1, "option", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "If there is a secondary, or more defining symptom, select it here");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "select", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SymptomsComponent_Template_select_click_10_listener() { return ctx.EOAPI.getSubSymptom(ctx.sympName); })("ngModelChange", function SymptomsComponent_Template_select_ngModelChange_10_listener($event) { return ctx.subName = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, SymptomsComponent_option_11_Template, 2, 2, "option", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Once you have selected a Symptom and/or Secondary Symptom, click here");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SymptomsComponent_Template_button_click_14_listener() { return ctx.EOAPI.getSymptom(ctx.sympName); })("click", function SymptomsComponent_Template_button_click_14_listener() { return ctx.EOAPI.getResults(ctx.sympName, ctx.subName); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Get Info ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, SymptomsComponent_section_16_Template, 12, 5, "section", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.sympName);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.EOAPI.symptoms);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.subName);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.EOAPI.subSearch);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.EOAPI.sympSearch);
        } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: [".header[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN5bXB0b21zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCIiwiZmlsZSI6InN5bXB0b21zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyIHVsIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59Il19 */"] });
    /*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SymptomsComponent, [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
            args: [{
                    selector: 'app-symptoms',
                    templateUrl: './symptoms.component.html',
                    styleUrls: ['./symptoms.component.css']
                }]
        }], function () { return [{ type: _eo_api_service__WEBPACK_IMPORTED_MODULE_1__["EOAPIService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }]; }, null); })();
    
    
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
        { path: 'symptoms/:symp_name', component: _symptoms_symptoms_component__WEBPACK_IMPORTED_MODULE_3__["SymptomsComponent"] },
        { path: 'eo', component: _eo_eo_component__WEBPACK_IMPORTED_MODULE_4__["EoComponent"] },
        { path: 'eo/:eo_name', component: _eo_eo_component__WEBPACK_IMPORTED_MODULE_4__["EoComponent"] },
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