(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/add-post/add-post.component.ts":
/*!************************************************!*\
  !*** ./src/app/add-post/add-post.component.ts ***!
  \************************************************/
/*! exports provided: AddPostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPostComponent", function() { return AddPostComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _models_post__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/post */ "./src/app/models/post.ts");
/* harmony import */ var _add_post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-post.service */ "./src/app/add-post/add-post.service.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _service_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/common.service */ "./src/app/service/common.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");









var AddPostComponent = /** @class */ (function () {
    function AddPostComponent(modalService, bsModalRef, router, addPostService, commonService) {
        this.modalService = modalService;
        this.bsModalRef = bsModalRef;
        this.router = router;
        this.addPostService = addPostService;
        this.commonService = commonService;
        this.post = new _models_post__WEBPACK_IMPORTED_MODULE_1__["Post"]();
    }
    AddPostComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.commonService.postEdit_Observable.subscribe(function (res) {
            _this.post = _this.commonService.post_to_be_edited;
            console.log('post about ', _this.post._id);
        });
    };
    AddPostComponent.prototype.close = function () {
        this.bsModalRef.hide();
    };
    ;
    AddPostComponent.prototype.addPost = function () {
        var _this = this;
        if (this.post.title && this.post.description) {
            if (this.post._id) {
                this.addPostService.updatePost(this.post).subscribe(function (res) {
                    _this.commonService.notifyPostAddition();
                });
            }
            else {
                this.addPostService.addPost(this.post).subscribe(function (res) {
                    _this.commonService.notifyPostAddition();
                });
            }
        }
        else {
            alert('Title and Description required');
        }
    };
    AddPostComponent.ɵfac = function AddPostComponent_Factory(t) { return new (t || AddPostComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_add_post_service__WEBPACK_IMPORTED_MODULE_2__["AddPostService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"])); };
    AddPostComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddPostComponent, selectors: [["app-add-post"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_add_post_service__WEBPACK_IMPORTED_MODULE_2__["AddPostService"]])], decls: 23, vars: 2, consts: [[1, "modal-content"], [1, "modal-header"], ["id", "exampleModalLabel", 1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-label", "close", 1, "close", 3, "click"], ["closeBtn", ""], ["aria-hidden", "true"], [1, "modal-body"], [1, "form-group"], ["for", "exampleInputEmail1"], ["name", "title", "type", "text", "id", "exampleInputEmail1", "aria-describedby", "emailHelp", "placeholder", "Enter title", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "exampleInputPassword1"], ["name", "description", "id", "exampleInputPassword1", "placeholder", "Description", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], ["type", "button", "aria-label", "close", 1, "btn", "btn-primary-right", 3, "click"]], template: function AddPostComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Modal title");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3, 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddPostComponent_Template_button_click_4_listener() { return ctx.close(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u00D7");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "form");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Title");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddPostComponent_Template_input_ngModelChange_13_listener($event) { return ctx.post.title = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Description");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "textarea", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddPostComponent_Template_textarea_ngModelChange_17_listener($event) { return ctx.post.description = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "                        ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddPostComponent_Template_button_click_19_listener() { return ctx.addPost(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Add");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddPostComponent_Template_button_click_21_listener() { return ctx.close(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Close");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.post.title);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.post.description);
        } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZC1wb3N0L2FkZC1wb3N0LmNvbXBvbmVudC5zY3NzIn0= */"] });
    return AddPostComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddPostComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-add-post',
                templateUrl: './add-post.component.html',
                styleUrls: ['./add-post.component.scss'],
                providers: [_add_post_service__WEBPACK_IMPORTED_MODULE_2__["AddPostService"]]
            }]
    }], function () { return [{ type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalService"] }, { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalRef"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _add_post_service__WEBPACK_IMPORTED_MODULE_2__["AddPostService"] }, { type: _service_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/add-post/add-post.service.ts":
/*!**********************************************!*\
  !*** ./src/app/add-post/add-post.service.ts ***!
  \**********************************************/
/*! exports provided: AddPostService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPostService", function() { return AddPostService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");



var AddPostService = /** @class */ (function () {
    function AddPostService(http) {
        this.http = http;
    }
    //As seen in the above code, you have made use of the HttpClient to make the API call and return the Observable
    AddPostService.prototype.addPost = function (post) {
        return this.http.post('/api/post/createPost', {
            title: post.title,
            description: post.description
        });
    };
    AddPostService.prototype.updatePost = function (post) {
        return this.http.post('/api/post/updatePost', {
            id: post._id,
            title: post.title,
            description: post.description
        });
    };
    AddPostService.ɵfac = function AddPostService_Factory(t) { return new (t || AddPostService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
    AddPostService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AddPostService, factory: AddPostService.ɵfac });
    return AddPostService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddPostService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _root_root_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./root/root.component */ "./src/app/root/root.component.ts");
/* harmony import */ var _service_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./service/user.service */ "./src/app/service/user.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _add_post_add_post_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./add-post/add-post.component */ "./src/app/add-post/add-post.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _show_post_show_post_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./show-post/show-post.component */ "./src/app/show-post/show-post.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _service_auth_guard_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./service/auth-guard.service */ "./src/app/service/auth-guard.service.ts");
/* harmony import */ var _service_common_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./service/common.service */ "./src/app/service/common.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./landing/landing.component */ "./src/app/landing/landing.component.ts");
/* harmony import */ var _background_image_directive__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./background-image.directive */ "./src/app/background-image.directive.ts");






















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_root_root_component__WEBPACK_IMPORTED_MODULE_7__["RootComponent"]] });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_service_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"], _service_auth_guard_service__WEBPACK_IMPORTED_MODULE_15__["AuthGuardService"], _service_common_service__WEBPACK_IMPORTED_MODULE_16__["CommonService"]], imports: [[
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_17__["CommonModule"],
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__["ModalModule"].forRoot(),
            ]] });
    return AppModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_root_root_component__WEBPACK_IMPORTED_MODULE_7__["RootComponent"],
        _login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"],
        _register_register_component__WEBPACK_IMPORTED_MODULE_14__["RegisterComponent"],
        _add_post_add_post_component__WEBPACK_IMPORTED_MODULE_11__["AddPostComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"],
        _show_post_show_post_component__WEBPACK_IMPORTED_MODULE_13__["ShowPostComponent"],
        _landing_landing_component__WEBPACK_IMPORTED_MODULE_18__["LandingComponent"],
        _background_image_directive__WEBPACK_IMPORTED_MODULE_19__["BackgroundImageDirective"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
        _app_routing__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_17__["CommonModule"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__["ModalModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
        args: [{
                declarations: [
                    _root_root_component__WEBPACK_IMPORTED_MODULE_7__["RootComponent"],
                    _login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"],
                    _register_register_component__WEBPACK_IMPORTED_MODULE_14__["RegisterComponent"],
                    _add_post_add_post_component__WEBPACK_IMPORTED_MODULE_11__["AddPostComponent"],
                    _home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"],
                    _show_post_show_post_component__WEBPACK_IMPORTED_MODULE_13__["ShowPostComponent"],
                    _landing_landing_component__WEBPACK_IMPORTED_MODULE_18__["LandingComponent"],
                    _background_image_directive__WEBPACK_IMPORTED_MODULE_19__["BackgroundImageDirective"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
                    _app_routing__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_17__["CommonModule"],
                    ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__["ModalModule"].forRoot(),
                ],
                providers: [_service_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"], _service_auth_guard_service__WEBPACK_IMPORTED_MODULE_15__["AuthGuardService"], _service_common_service__WEBPACK_IMPORTED_MODULE_16__["CommonService"]],
                bootstrap: [_root_root_component__WEBPACK_IMPORTED_MODULE_7__["RootComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./landing/landing.component */ "./src/app/landing/landing.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _add_post_add_post_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-post/add-post.component */ "./src/app/add-post/add-post.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");









var routes = [
    { path: '', component: _landing_landing_component__WEBPACK_IMPORTED_MODULE_2__["LandingComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"] },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
    { path: 'add', component: _add_post_add_post_component__WEBPACK_IMPORTED_MODULE_5__["AddPostComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return AppRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/background-image.directive.ts":
/*!***********************************************!*\
  !*** ./src/app/background-image.directive.ts ***!
  \***********************************************/
/*! exports provided: BackgroundImageDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackgroundImageDirective", function() { return BackgroundImageDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var BackgroundImageDirective = /** @class */ (function () {
    function BackgroundImageDirective(el) {
        this.el = el;
        this.imageLoaded = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](true);
    }
    BackgroundImageDirective.prototype.ngAfterViewInit = function () {
        var _this = this;
        var img = new Image();
        var bgStyle = getComputedStyle(this.el.nativeElement).backgroundImage;
        var src = bgStyle.replace(/(^url\()|(\)$|[\"\'])/g, '');
        img.src = src;
        img.addEventListener('load', function () {
            _this.imageLoaded.emit(true);
        });
    };
    BackgroundImageDirective.ɵfac = function BackgroundImageDirective_Factory(t) { return new (t || BackgroundImageDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
    BackgroundImageDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: BackgroundImageDirective, selectors: [["", "appBackgroundImage", ""]], outputs: { imageLoaded: "imageLoaded" } });
    return BackgroundImageDirective;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BackgroundImageDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[appBackgroundImage]',
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { imageLoaded: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _add_post_add_post_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../add-post/add-post.component */ "./src/app/add-post/add-post.component.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _service_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/common.service */ "./src/app/service/common.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _show_post_show_post_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../show-post/show-post.component */ "./src/app/show-post/show-post.component.ts");







var _c0 = ["addPost"];
var HomeComponent = /** @class */ (function () {
    function HomeComponent(modalService, commonService, router) {
        var _this = this;
        this.modalService = modalService;
        this.commonService = commonService;
        this.router = router;
        if (!localStorage.getItem('loggedInUser')) {
            this.router.navigate(['/home']);
        }
        this.commonService.postEdit_Observable.subscribe(function (res) {
            _this.addBtn.nativeElement.click();
        });
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.openAddPostComponent = function () {
        console.log("this button was clicked");
        this.bsModalRef = this.modalService.show(_add_post_add_post_component__WEBPACK_IMPORTED_MODULE_1__["AddPostComponent"]);
        this.bsModalRef.content.closeModal = "Close";
    };
    HomeComponent.prototype.logout = function () {
        localStorage.removeItem('loggedInUser');
        this.router.navigate(['/']);
    };
    HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], viewQuery: function HomeComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        } if (rf & 2) {
            var _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.addBtn = _t.first);
        } }, decls: 17, vars: 0, consts: [[1, "header", "clearfix"], [1, "nav", "nav-pills", "float-right"], [1, "nav-item"], ["type", "button", 1, "btn", "btn-primary"], ["type", "button", 1, "btn", "btn-link", 3, "click"], [1, "text-muted"], ["role", "main"], [1, "footer"], ["src", "../../assets/blog.png", 1, "drawing"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Home ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_7_listener() { return ctx.logout(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Logout ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h3", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Angular Blog App");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "main", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "app-show-post");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "footer", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\u00A9 Lidia Davidson Quarantine Diary 2020");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, directives: [_show_post_show_post_component__WEBPACK_IMPORTED_MODULE_5__["ShowPostComponent"]], styles: [".header[_ngcontent-%COMP%], .marketing[_ngcontent-%COMP%], .footer[_ngcontent-%COMP%] {\n  padding-right: 1rem;\n  padding-left: 1rem;\n}\n\n\n\n.header[_ngcontent-%COMP%] {\n  padding-bottom: 1rem;\n  border-bottom: .05rem solid #e5e5e5;\n}\n\n.header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-top: 0;\n  margin-bottom: 0;\n  line-height: 3rem;\n}\n\n\n\n.footer[_ngcontent-%COMP%] {\n  padding-top: 1.5rem;\n  color: #777;\n  border-top: .05rem solid #e5e5e5;\n}\n\n\n\n@media (min-width: 48em) {\n  .container[_ngcontent-%COMP%] {\n    max-width: 46rem;\n  }\n}\n\n.container-narrow[_ngcontent-%COMP%]    > hr[_ngcontent-%COMP%] {\n  margin: 2rem 0;\n}\n\n\n\n.jumbotron[_ngcontent-%COMP%] {\n  text-align: center;\n  border-bottom: .05rem solid #e5e5e5;\n}\n\n.jumbotron[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  padding: .75rem 1.5rem;\n  font-size: 1.5rem;\n}\n\n\n\n.marketing[_ngcontent-%COMP%] {\n  margin: 3rem 0;\n}\n\n.marketing[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]    + h4[_ngcontent-%COMP%] {\n  margin-top: 1.5rem;\n}\n\n\n\n@media screen and (min-width: 48em) {\n  \n  .header[_ngcontent-%COMP%], .marketing[_ngcontent-%COMP%], .footer[_ngcontent-%COMP%] {\n    padding-right: 0;\n    padding-left: 0;\n  }\n  .drawing[_ngcontent-%COMP%] {\n    float: right;\n  }\n  \n  .header[_ngcontent-%COMP%] {\n    margin-bottom: 2rem;\n  }\n  .jumbotron[_ngcontent-%COMP%] {\n    border-bottom: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxcVXNlcnNcXGRhdmlkXFxDb2RlXFxjb2RpbmdMYWJcXGNvZGluZ0Jsb2cvc3JjXFxhcHBcXGhvbWVcXGhvbWUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0VBR0UsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQ0NwQjs7QURFQSx1QkFBQTs7QUFDQTtFQUNFLG9CQUFvQjtFQUNwQixtQ0FBbUM7QUNDckM7O0FERUE7RUFDRSxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQ0NuQjs7QURFQSx1QkFBQTs7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsZ0NBQWdDO0FDQ2xDOztBREVBLHdCQUFBOztBQUNBO0VBQ0U7SUFDRSxnQkFBZ0I7RUNDbEI7QUFDRjs7QURDQTtFQUNFLGNBQWM7QUNFaEI7O0FEQ0EsOENBQUE7O0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsbUNBQW1DO0FDRXJDOztBREFBO0VBQ0Usc0JBQXNCO0VBQ3RCLGlCQUFpQjtBQ0duQjs7QURBQSxpQ0FBQTs7QUFDQTtFQUNFLGNBQWM7QUNHaEI7O0FEREE7RUFDRSxrQkFBa0I7QUNJcEI7O0FEREEsd0NBQUE7O0FBQ0E7RUFDRSxzQ0FBQTtFQUNBOzs7SUFHRSxnQkFBZ0I7SUFDaEIsZUFBZTtFQ0lqQjtFREZBO0lBQ0UsWUFBWTtFQ0lkO0VEREEsMkJBQUE7RUFDQTtJQUNFLG1CQUFtQjtFQ0dyQjtFREFBO0lBQ0UsZ0JBQWdCO0VDRWxCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyLFxyXG4ubWFya2V0aW5nLFxyXG4uZm9vdGVyIHtcclxuICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xyXG4gIHBhZGRpbmctbGVmdDogMXJlbTtcclxufVxyXG4gXHJcbi8qIEN1c3RvbSBwYWdlIGhlYWRlciAqL1xyXG4uaGVhZGVyIHtcclxuICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcclxuICBib3JkZXItYm90dG9tOiAuMDVyZW0gc29saWQgI2U1ZTVlNTtcclxufVxyXG4gXHJcbi5oZWFkZXIgaDMge1xyXG4gIG1hcmdpbi10b3A6IDA7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxuICBsaW5lLWhlaWdodDogM3JlbTtcclxufVxyXG4gXHJcbi8qIEN1c3RvbSBwYWdlIGZvb3RlciAqL1xyXG4uZm9vdGVyIHtcclxuICBwYWRkaW5nLXRvcDogMS41cmVtO1xyXG4gIGNvbG9yOiAjNzc3O1xyXG4gIGJvcmRlci10b3A6IC4wNXJlbSBzb2xpZCAjZTVlNWU1O1xyXG59XHJcbiBcclxuLyogQ3VzdG9taXplIGNvbnRhaW5lciAqL1xyXG5AbWVkaWEgKG1pbi13aWR0aDogNDhlbSkge1xyXG4gIC5jb250YWluZXIge1xyXG4gICAgbWF4LXdpZHRoOiA0NnJlbTtcclxuICB9XHJcbn1cclxuLmNvbnRhaW5lci1uYXJyb3cgPiBociB7XHJcbiAgbWFyZ2luOiAycmVtIDA7XHJcbn1cclxuIFxyXG4vKiBNYWluIG1hcmtldGluZyBtZXNzYWdlIGFuZCBzaWduIHVwIGJ1dHRvbiAqL1xyXG4uanVtYm90cm9uIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYm9yZGVyLWJvdHRvbTogLjA1cmVtIHNvbGlkICNlNWU1ZTU7XHJcbn1cclxuLmp1bWJvdHJvbiAuYnRuIHtcclxuICBwYWRkaW5nOiAuNzVyZW0gMS41cmVtO1xyXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xyXG59XHJcbiBcclxuLyogU3VwcG9ydGluZyBtYXJrZXRpbmcgY29udGVudCAqL1xyXG4ubWFya2V0aW5nIHtcclxuICBtYXJnaW46IDNyZW0gMDtcclxufVxyXG4ubWFya2V0aW5nIHAgKyBoNCB7XHJcbiAgbWFyZ2luLXRvcDogMS41cmVtO1xyXG59XHJcbiBcclxuLyogUmVzcG9uc2l2ZTogUG9ydHJhaXQgdGFibGV0cyBhbmQgdXAgKi9cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDhlbSkge1xyXG4gIC8qIFJlbW92ZSB0aGUgcGFkZGluZyB3ZSBzZXQgZWFybGllciAqL1xyXG4gIC5oZWFkZXIsXHJcbiAgLm1hcmtldGluZyxcclxuICAuZm9vdGVyIHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDA7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgfVxyXG4gIC5kcmF3aW5nIHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICB9XHJcbiBcclxuICAvKiBTcGFjZSBvdXQgdGhlIG1hc3RoZWFkICovXHJcbiAgLmhlYWRlciB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG4gIH1cclxuIFxyXG4gIC5qdW1ib3Ryb24ge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMDtcclxuICB9XHJcbn0iLCIuaGVhZGVyLFxuLm1hcmtldGluZyxcbi5mb290ZXIge1xuICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xuICBwYWRkaW5nLWxlZnQ6IDFyZW07XG59XG5cbi8qIEN1c3RvbSBwYWdlIGhlYWRlciAqL1xuLmhlYWRlciB7XG4gIHBhZGRpbmctYm90dG9tOiAxcmVtO1xuICBib3JkZXItYm90dG9tOiAuMDVyZW0gc29saWQgI2U1ZTVlNTtcbn1cblxuLmhlYWRlciBoMyB7XG4gIG1hcmdpbi10b3A6IDA7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIGxpbmUtaGVpZ2h0OiAzcmVtO1xufVxuXG4vKiBDdXN0b20gcGFnZSBmb290ZXIgKi9cbi5mb290ZXIge1xuICBwYWRkaW5nLXRvcDogMS41cmVtO1xuICBjb2xvcjogIzc3NztcbiAgYm9yZGVyLXRvcDogLjA1cmVtIHNvbGlkICNlNWU1ZTU7XG59XG5cbi8qIEN1c3RvbWl6ZSBjb250YWluZXIgKi9cbkBtZWRpYSAobWluLXdpZHRoOiA0OGVtKSB7XG4gIC5jb250YWluZXIge1xuICAgIG1heC13aWR0aDogNDZyZW07XG4gIH1cbn1cblxuLmNvbnRhaW5lci1uYXJyb3cgPiBociB7XG4gIG1hcmdpbjogMnJlbSAwO1xufVxuXG4vKiBNYWluIG1hcmtldGluZyBtZXNzYWdlIGFuZCBzaWduIHVwIGJ1dHRvbiAqL1xuLmp1bWJvdHJvbiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLWJvdHRvbTogLjA1cmVtIHNvbGlkICNlNWU1ZTU7XG59XG5cbi5qdW1ib3Ryb24gLmJ0biB7XG4gIHBhZGRpbmc6IC43NXJlbSAxLjVyZW07XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xufVxuXG4vKiBTdXBwb3J0aW5nIG1hcmtldGluZyBjb250ZW50ICovXG4ubWFya2V0aW5nIHtcbiAgbWFyZ2luOiAzcmVtIDA7XG59XG5cbi5tYXJrZXRpbmcgcCArIGg0IHtcbiAgbWFyZ2luLXRvcDogMS41cmVtO1xufVxuXG4vKiBSZXNwb25zaXZlOiBQb3J0cmFpdCB0YWJsZXRzIGFuZCB1cCAqL1xuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDhlbSkge1xuICAvKiBSZW1vdmUgdGhlIHBhZGRpbmcgd2Ugc2V0IGVhcmxpZXIgKi9cbiAgLmhlYWRlcixcbiAgLm1hcmtldGluZyxcbiAgLmZvb3RlciB7XG4gICAgcGFkZGluZy1yaWdodDogMDtcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gIH1cbiAgLmRyYXdpbmcge1xuICAgIGZsb2F0OiByaWdodDtcbiAgfVxuICAvKiBTcGFjZSBvdXQgdGhlIG1hc3RoZWFkICovXG4gIC5oZWFkZXIge1xuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG4gIH1cbiAgLmp1bWJvdHJvbiB7XG4gICAgYm9yZGVyLWJvdHRvbTogMDtcbiAgfVxufVxuIl19 */"] });
    return HomeComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss']
            }]
    }], function () { return [{ type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"] }, { type: _service_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, { addBtn: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['addPost']
        }] }); })();


/***/ }),

/***/ "./src/app/landing/landing.component.ts":
/*!**********************************************!*\
  !*** ./src/app/landing/landing.component.ts ***!
  \**********************************************/
/*! exports provided: LandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingComponent", function() { return LandingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _background_image_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../background-image.directive */ "./src/app/background-image.directive.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");





var _c0 = function () { return { "background-image": "url(../../assets/galaxy.jpg)" }; };
var LandingComponent = /** @class */ (function () {
    function LandingComponent(router) {
        this.router = router;
        this.navbarOpen = false;
    }
    LandingComponent.prototype.ngOnInit = function () {
        var navbarItems = document.querySelectorAll('.navbar-nav>li');
        navbarItems.forEach(function (navbarItem) {
            navbarItem.addEventListener('click', function () {
                var navbar = document.querySelector('.navbar-collapse');
                navbar.classList.remove('show');
            });
        });
    };
    LandingComponent.prototype.loaded = function () {
        console.log("loaded");
    };
    LandingComponent.ɵfac = function LandingComponent_Factory(t) { return new (t || LandingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
    LandingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LandingComponent, selectors: [["app-landing"]], decls: 180, vars: 2, consts: [["id", "home"], [1, "navbar", "navbar-dark", "bg-dark", "navbar-expand-md", "fixed-top"], ["href", "#", 1, "navbar-brand"], ["src", "../../assets/logo.png", "alt", "Logo", "title", "Logo"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarResponsive", 1, "navbar-toggler", 3, "click"], [1, "navbar-toggler-icon"], ["id", "navbarResponsive", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "ml-auto"], [1, "nav-item"], ["href", "#home", 1, "nav-link"], ["href", "#about", 1, "nav-link"], ["href", "#portfolio", 1, "nav-link"], ["href", "#skills", 1, "nav-link"], ["href", "#contact", 1, "nav-link"], [1, "nav-item", "dropdown", "offset"], ["href", "#", "id", "navbarDropdown", "role", "button", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle"], ["aria-labelledby", "navbarDropdown", 1, "dropdown-menu", "bg-dark"], ["routerLinkActive", "active", 1, "nav-link", 3, "click"], [1, "landing"], [1, "home-wrap"], ["appBackgroundImage", "", 1, "home-inner", 3, "ngStyle", "imageLoaded"], [1, "col-12", "caption"], [1, "text-light", "text-uppercase", "pb-3", "pb-mb-4"], ["href", "#portfolio", 1, "btn", "btn-outline-light"], ["id", "about", 1, "offset"], [1, "container-fluid"], [1, "row", "justify-content-center", "text-center", "py-5"], [1, "col-11", "col-md-10", "col-lg-9"], ["id", "jumbotron", 1, "jumbotron", "text-center", "pt-5", "mb-0"], ["id", "aboutRow", 1, "row", "justify-content-start", "align-items-center"], [1, "col-lg-5"], [1, "about_img"], ["src", "../../assets/me.png", "alt", "me", 1, "aboutMePhoto"], [1, "offset-lg-1", "col-lg-5"], [1, "main_title", "text-left"], [1, "aboutMe"], ["href", "../../assets/Lidia Davidson - Resume.pdf", 1, "light_btn"], ["id", "portfolio", 1, "offset"], [1, "container-fluid", "text-center", "py-5", "mx-0"], [1, "portfolio"], [1, "portfolioContainer"], [1, "portfolio_items", "grid"], [1, "col-sm-4", "col-xs-6", "xs-padding", "single_item", "branding"], [1, "portfolio_item"], ["src", "../../assets/health.jpg", "width", "405px", "height", "285px", "alt", "Portfolio Item", 1, "portImg"], [1, "hover_effect"], ["href", "https://better-health.herokuapp.com/"], [1, "comment"], [1, "col-sm-4", "col-xs-6", "xs-padding", "single_item", "photo"], ["src", "../../assets/travel.jpg", "width", "405px", "height", "285px", "alt", "Portfolio Item", 1, "portImg"], ["href", " https://avrybrdly93.github.io/Tour/"], ["src", "../../assets/cards.jpg", "width", "405px", "height", "285px", "alt", "Portfolio Item", 1, "portImg"], ["href", "https://jsfiddle.net/LidiaWebDev/0nkuh78t/"], ["src", "../../assets/crystal.jpg", "width", "405px", "height", "285px", "alt", "Portfolio Item", 1, "portImg"], ["href", "https://lidiawebdev.github.io/unit-4-game/"], [1, "col-sm-4", "col-xs-6", "xs-padding", "single_item", "print"], ["src", "../../assets/trivia.jpg", "width", "405px", "height", "285px", "alt", "Portfolio Item", 1, "portImg"], ["href", "https://lidiawebdev.github.io/TriviaGame/"], [1, "col-sm-4", "col-xs-6", "xs-padding", "single_item", "website"], ["src", "../../assets/gif.jpg", "width", "405px", "height", "285px", "alt", "Portfolio Item", 1, "portImg"], ["href", "https://lidiawebdev.github.io/GifTastic/"], ["src", "../../assets/music.jpg", "width", "405px", "height", "285px", "alt", "burger", 1, "portImg"], ["href", "https://sublme-music.herokuapp.com/"], ["src", "../../assets/timer.jpg", "width", "405px", "height", "285px", "alt", "Portfolio Item", 1, "portImg"], ["href", "https://jsfiddle.net/LidiaWebDev/rqpuhz8k/246/"], ["src", "../../assets/npm.jpg", "width", "405px", "height", "285px", "alt", "Portfolio Item", 1, "portImg"], ["href", "https://www.npmjs.com/package/order-wizard-schematic-onlyfortest"], [1, "quote", "container-fluid"], [1, "blockquote"], ["id", "skills", 1, "offset"], [1, "jumbotron", "text-center", "pb-5", "mb-0"], [1, "heading"], [1, "row", "no-gutters", "mb-5", "icons", "d-flex", "justify-content-around"], [1, "col-11", "col-md-10"], [1, "skillset", "row", "pt-3", "justify-content-around"], [1, "m4", "colored", "skill-icon", "devicon-html5-plain-wordmark"], [1, "m4", "colored", "skill-icon", "devicon-bootstrap-plain", "colored"], [1, "m4", "colored", "skill-icon", "devicon-sass-original", "colored"], [1, "m4", "colored", "skill-icon", "devicon-angularjs-plain", "colored"], [1, "m4", "colored", "skill-icon", "devicon-typescript-plain"], [1, "m4", "colored", "skill-icon", "devicon-c-line", "colored"], [1, "m4", "colored", "skill-icon", "devicon-mongodb-plain-wordmark", "colored"], [1, "m4", "colored", "skill-icon", "devicon-amazonwebservices-original", "colored"], [1, "m4", "colored", "skill-icon", "devicon-mysql-plain", "colored"], [1, "m4", "colored", "skill-icon", "devicon-nodejs-plain-wordmark", "colored"], [1, "m4", "colored", "skill-icon", "devicon-express-original-wordmark", "colored"], ["id", "contact", 1, "offset"], [1, "container-fluid", "footer"], [1, "row", "pt-4", "pb-5", "justify-content-center"], ["id", "footerSocial", 1, "col-sm-11", "col-md-9", "col-lg-6", "text-light", "text-center"], [1, "social", "mt-lg-0", "mt-4"], ["href", "mailto:davidson.lidiafirst@gmail.com"], [1, "fa", "fa-envelope-square", "fa-3x"], ["href", "https://www.linkedin.com/in/lidiadavidson/", "target", "_blank"], [1, "fab", "fa-linkedin", "fa-3x"], ["href", "https://twitter.com/LidiaDa81393011", "target", "_blank"], [1, "fab", "fa-twitter-square", "fa-3x"], ["href", "https://dev.to/lidiawebdev", "target", "_blank"], [1, "fab", "fa-dev", "fa-3x"], ["href", "https://www.facebook.com/rusfinlidia", "target", "_blank"], [1, "fab", "fa-facebook-square", "fa-3x"], [1, "socket", "w-100", "mt-5"], [1, "mb-0", "text-light"], ["href", "#", "target", "_blank"]], template: function LandingComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingComponent_Template_button_click_4_listener() { return ctx.navbarOpen = !ctx.navbarOpen; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Home");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "About");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Portfolio");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Skills");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Contact");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Blog Zone ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingComponent_Template_a_click_27_listener() { return ctx.router.navigate(["/login"]); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Login");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingComponent_Template_a_click_29_listener() { return ctx.router.navigate(["/register"]); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Register");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("imageLoaded", function LandingComponent_Template_div_imageLoaded_33_listener() { return ctx.loaded(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h1", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " Lidia Davidson Personal WebPage ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "See my work");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "div", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " The portfolio runs on MEAN stack ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "img", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 33);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 34);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "h1");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Web Developer ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "p", 35);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " Hi! I am Lidia from Corona, Ca. Tech inspires me to go forward to explore, analyze, test and apply what I have learned to new projects. I am a passionate web developer, who won't sit a day without finding new exciting tools that help me to build something amazing. My recent experience connected with developing Angular applications. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "a", 36);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Download Resume");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 37);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 38);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "h2", 39);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Portfolio");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 40);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "ul", 41);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "li", 42);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "figure", 43);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "img", 44);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 45);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "a", 46);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "span", 47);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "BetterHealth");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "li", 48);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "figure", 43);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "img", 49);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 45);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "a", 50);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "span", 47);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, " Tour Project");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "li", 42);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "figure", 43);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "img", 51);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 45);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "a", 52);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "span", 47);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Signature Pad ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "li", 42);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "figure", 43);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "img", 53);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 45);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "a", 54);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "span", 47);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "Crystal Collector");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "li", 55);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "figure", 43);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "img", 56);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 45);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "a", 57);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "span", 47);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "Trivia Game");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "li", 58);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "figure", 43);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "img", 59);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 45);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "a", 60);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "span", 47);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "GifTastic");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "li", 42);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "figure", 43);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](111, "img", 61);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 45);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "a", 62);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "span", 47);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "Sublme Music App");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "li", 55);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "figure", 43);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](118, "img", 63);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 45);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "a", 64);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "span", 47);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "Timer Modular Code");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "li", 42);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "figure", 43);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](125, "img", 65);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 45);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "a", 66);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "span", 47);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "Angular Schematics NPM");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "div", 67);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "q", 68);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "Experience is the name everyone gives to their mistakes. Oscar Wilde.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "div", 69);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "div", 70);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "h2", 71);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "Technical Skills");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "div", 72);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "div", 73);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "div", 74);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](141, "div", 75);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](142, "div", 76);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](143, "div", 77);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](144, "div", 78);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](145, "div", 79);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](146, "div", 80);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "div", 74);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](148, "div", 81);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](149, "div", 82);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](150, "div", 83);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](151, "div", 84);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](152, "div", 85);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](153, "div", 86);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "div", 87);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "div", 88);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "div", 89);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, " If you are interested, you are welcome to contact me. I am open to new horizons to expand. A self-starter and a team player. Connect via any offered platforms below. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "ul", 90);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "a", 91);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](162, "i", 92);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "a", 93);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](165, "i", 94);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "a", 95);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](168, "i", 96);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "a", 97);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](171, "i", 98);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "a", 99);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](174, "i", 100);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](175, "hr", 101);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "p", 102);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](177, " \u00A9 ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "a", 103);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](179, "Lidia Davidson 2020");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](33);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
        } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _background_image_directive__WEBPACK_IMPORTED_MODULE_2__["BackgroundImageDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgStyle"]], styles: ["@import url(http://fonts.googleapis.com/css?family=Gentium+Book+Basic:400,700,700italic,400italic);\n@charset \"UTF-8\";\n\n.navbar-brand[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 2rem;\n}\n.navbar-dark[_ngcontent-%COMP%] {\n  padding: .6rem 1rem;\n  font-size: .9rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: .1rem;\n}\n.navbar-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding-right: .8rem;\n}\n.navbar-nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  padding-top: .8rem;\n  color: white !important;\n}\n.navbar-nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover, .navbar-nav[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%] {\n  color: #00b3ff !important;\n  cursor: pointer;\n}\n.caption[_ngcontent-%COMP%] {\n  z-index: 1;\n  position: absolute;\n  top: 40%;\n  right: 1%;\n  text-align: center;\n}\n.btn[_ngcontent-%COMP%] {\n  border-width: medium;\n  border-radius: 0;\n  text-transform: uppercase;\n  padding: .5rem 1.2rem;\n}\n.dropdown-menu[_ngcontent-%COMP%] {\n  background-color: rgba(41, 43, 44, 0.6) !important;\n  margin-top: 10px;\n}\n\n.offset[_ngcontent-%COMP%]:before {\n  content: \"\";\n  height: 3.875rem;\n  display: block;\n  margin-top: -3.875rem;\n}\n.heading[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  font-weight: 700;\n  padding-bottom: 1rem;\n}\n.about[_ngcontent-%COMP%]   .svg-inline--fa[_ngcontent-%COMP%] {\n  color: #00b3ff;\n}\n.aboutMe[_ngcontent-%COMP%] {\n  text-align: justify;\n  text-justify: inter-word;\n  color: #505962;\n  line-height: 200%;\n  font-size: 20px;\n}\na.light_btn[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  background-color: #0694F9;\n  font-size: 20px;\n  font-weight: 600;\n}\na.light_btn[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:hover {\n  -webkit-mask-image: linear-gradient(-75deg, rgba(9, 11, 124, 0.5) 60%, #000 50%, rgba(97, 43, 223, 0.5) 80%);\n  -webkit-mask-size: 200%;\n  -webkit-animation: shine 2s infinite;\n          animation: shine 2s infinite;\n}\n@-webkit-keyframes shine {\n  from {\n    -webkit-mask-position: 150%;\n  }\n  to {\n    -webkit-mask-position: -50%;\n  }\n}\n.portfolio-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1);\n}\n.portfolio-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  transition: transform .4s ease;\n}\na[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  background: #fff;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n#jumbotron[_ngcontent-%COMP%] {\n  width: 100%;\n  display: table;\n  z-index: -1;\n  top: 0;\n  left: 0;\n  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0) 35%, #767577 90%);\n}\n#aboutRow[_ngcontent-%COMP%] {\n  width: inherit;\n  min-height: inherit;\n  margin: 0;\n  padding: 0;\n}\n\n.portfolio[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  font-weight: 700;\n  padding-bottom: 1rem;\n}\n.portfolioContainer[_ngcontent-%COMP%] {\n  display: grid;\n}\n.portfolio_section[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #eaeaea;\n  display: block;\n  text-align: center;\n  overflow: hidden;\n  padding: 0;\n  margin: 0;\n  background-color: #fff;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 14px;\n  line-height: 23px;\n  font-weight: 400;\n  position: relative;\n  overflow-x: hidden;\n}\nimg[_ngcontent-%COMP%] {\n  border: none;\n  outline: none;\n}\n.portfolio_items[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\na[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n}\na[_ngcontent-%COMP%]:focus {\n  outline: 0;\n  text-decoration: none;\n}\n.portfolio_items[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding: 10px;\n  display: inline-block;\n}\n.portfolio_section[_ngcontent-%COMP%]   .portfolio_items[_ngcontent-%COMP%]   .portfolio_item[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n}\n.portfolio_items[_ngcontent-%COMP%]   .portfolio_item[_ngcontent-%COMP%]   .hover_effect[_ngcontent-%COMP%] {\n  background-color: transparent;\n  padding: 25px;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  left: 0;\n  top: 0;\n  text-align: center;\n  opacity: 0;\n  visibility: hidden;\n  transition: opacity 0.7s ease-in-out;\n}\n.portfolio_items[_ngcontent-%COMP%]   .portfolio_item[_ngcontent-%COMP%]   .hover_effect[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.8);\n  display: table;\n  height: 95%;\n  width: 100%;\n}\n.portfolio_items[_ngcontent-%COMP%]   .portfolio_item[_ngcontent-%COMP%]   .hover_effect[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  transform: scale(0.2);\n  transition: all 250ms cubic-bezier(1, -0.6, 0.57, -0.15) 0s;\n  visibility: hidden;\n  width: auto;\n}\n.portfolio_items[_ngcontent-%COMP%]   .portfolio_item[_ngcontent-%COMP%]:hover   .hover_effect[_ngcontent-%COMP%] {\n  visibility: visible;\n  opacity: 1;\n}\n.portfolio_items[_ngcontent-%COMP%]   .portfolio_item[_ngcontent-%COMP%]:hover   .hover_effect[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: scale(1);\n  visibility: visible;\n}\n.portfolio_items[_ngcontent-%COMP%]   .portfolio_item[_ngcontent-%COMP%]:hover   .hover_effect[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]    > span.comment[_ngcontent-%COMP%] {\n  font-size: 2em;\n  text-align: center;\n  display: table-cell;\n  vertical-align: middle;\n  background-color: #0694F9;\n}\n\n.skill-icon[_ngcontent-%COMP%] {\n  font-size: 7.7em;\n}\n.m4[_ngcontent-%COMP%] {\n  margin: 1.5rem !important;\n}\n.skillset[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n.quote[_ngcontent-%COMP%] {\n  margin: 50px auto;\n  max-width: 700px;\n  padding-bottom: 40px;\n}\n.blockquote[_ngcontent-%COMP%] {\n  quotes: \"\u00AB\" \"\u00BB\" \"\u2039\" \"\u203A\";\n  text-align: center;\n  float: left;\n  overflow: hidden;\n  white-space: nowrap;\n}\nq[_ngcontent-%COMP%]:before {\n  content: open-quote;\n}\nq[_ngcontent-%COMP%]:after {\n  content: close-quote;\n}\nq[_ngcontent-%COMP%]:before, q[_ngcontent-%COMP%]:after {\n  color: #00b3ff;\n  font-size: 1.2em;\n}\n\n.footer[_ngcontent-%COMP%] {\n  background-color: #565b61;\n}\n.footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: white;\n  text-decoration: none;\n}\n#footerSocial[_ngcontent-%COMP%] {\n  padding-top: 70px;\n}\nul.social[_ngcontent-%COMP%] {\n  list-style-type: none;\n  display: flex;\n  padding: 0;\n  margin: 0 auto;\n  max-width: 11.8rem;\n  justify-content: center;\n}\nul.social[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: inline;\n  padding-right: 1.2rem;\n  text-align: center;\n  margin: 5px 0px 30px;\n}\nul.social[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 45px;\n  height: 45px;\n  line-height: 45px;\n  text-align: center;\n  color: #ffffff;\n  font-size: 16px;\n  margin-right: 12px;\n}\nul.social[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:last-child {\n  margin-right: 0px;\n}\nul.social[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #0684f9;\n}\n.footer[_ngcontent-%COMP%]   .svg-inline--fa[_ngcontent-%COMP%] {\n  font-size: 1.6rem;\n}\n.footer[_ngcontent-%COMP%]   .svg-inline--fa[_ngcontent-%COMP%]:hover {\n  background: #00b3ff;\n}\nhr.socket[_ngcontent-%COMP%] {\n  border-top: .2rem solid #666b71;\n}\n\n.landing[_ngcontent-%COMP%] {\n  width: 100%;\n  display: table;\n  z-index: -1;\n  height: 100vh;\n  top: 0;\n  left: 0;\n}\n.landing[_ngcontent-%COMP%]   .home-wrap[_ngcontent-%COMP%] {\n  clip: rect(0, auto, auto, 0);\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n.landing[_ngcontent-%COMP%]   .home-inner[_ngcontent-%COMP%] {\n  display: table;\n  top: 0;\n  left: 0;\n  margin: 0 auto;\n  padding: 0 auto;\n  width: 100%;\n  min-height: 100vh;\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  position: fixed;\n  transform: translateZ(0);\n  -webkit-transform: translate(0);\n  will-change: transform;\n  overflow: hidden;\n}\n\n@media (max-width: 767.98px) {\n  .caption[_ngcontent-%COMP%] {\n    top: 34%;\n  }\n  .caption[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 1.8rem;\n  }\n  img.aboutMePhoto[_ngcontent-%COMP%], img.portImg[_ngcontent-%COMP%] {\n    width: 100%;\n    height: auto;\n  }\n  .aboutMe[_ngcontent-%COMP%] {\n    -webkit-hyphens: auto;\n        -ms-hyphens: auto;\n            hyphens: auto;\n    text-align: center;\n  }\n  a.light_btn[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n  a.light_btn[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n    display: table;\n    margin: 0 auto;\n    width: 50%;\n    margin: 0 auto;\n  }\n  h1.text-light[_ngcontent-%COMP%] {\n    visibility: hidden;\n  }\n  h1.text-light[_ngcontent-%COMP%]:after {\n    visibility: visible;\n    text-align: center;\n    content: \"Lidia Davidson\";\n  }\n  .blockquote[_ngcontent-%COMP%] {\n    text-align: center !important;\n    white-space: normal;\n    font-size: 15px;\n  }\n}\n@media (min-width: 320px) and (max-width: 568px) {\n  h1.text-light[_ngcontent-%COMP%]:after {\n    text-align: center;\n    display: inline-block;\n    font-size: 17px;\n    margin-left: 10px;\n    text-align: center;\n    display: inline-block;\n  }\n}\n@media (min-width: 768px) and (max-width: 1366px) {\n  img.portImg[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGFuZGluZy9DOlxcVXNlcnNcXGRhdmlkXFxDb2RlXFxjb2RpbmdMYWJcXGNvZGluZ0Jsb2cvc3JjXFxhcHBcXGxhbmRpbmdcXGxhbmRpbmcuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xhbmRpbmcvbGFuZGluZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsa0dBQVk7QUNBWixnQkFBZ0I7QURFZCw4Q0FBQTtBQUNGO0VBQ0ksWUFBVztBQ0NmO0FEQ0E7RUFDSSxtQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIscUJBQW9CO0FDRXhCO0FEQUE7RUFDSSxvQkFBb0I7QUNHeEI7QURBQTtFQUNJLGtCQUFrQjtFQUNsQix1QkFBdUI7QUNHM0I7QUREQTs7RUFHSSx5QkFBd0I7RUFDeEIsZUFBZTtBQ0duQjtBRERBO0VBQ0ksVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixRQUFPO0VBQ1AsU0FBUztFQUNULGtCQUFrQjtBQ0l0QjtBREZBO0VBQ0ksb0JBQW9CO0VBQ3BCLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIscUJBQ0o7QUNJQTtBREZBO0VBQ0ksa0RBQStDO0VBQy9DLGdCQUFnQjtBQ0twQjtBREZBLHlDQUFBO0FBQ0E7RUFDSSxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxxQkFBcUI7QUNLekI7QURIQTtFQUNJLHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIsb0JBQW9CO0FDTXhCO0FESEE7RUFDSSxjQUFjO0FDTWxCO0FESEE7RUFDRSxtQkFBbUI7RUFDbkIsd0JBQXdCO0VBQ3hCLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsZUFBZTtBQ01qQjtBREZBO0VBQ0UseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZixnQkFBZ0I7QUNLbEI7QURIQTtFQUNFLDRHQUE0RztFQUM1Ryx1QkFBdUI7RUFDdkIsb0NBQTRCO1VBQTVCLDRCQUE0QjtBQ005QjtBREhBO0VBQ0U7SUFDRSwyQkFBMkI7RUNNN0I7RURIQTtJQUNFLDJCQUEyQjtFQ0s3QjtBQUNGO0FEREE7RUFDSSxxQkFBcUI7QUNJekI7QURGQTtFQUNJLDhCQUE4QjtBQ0tsQztBREhBO0VBR0UsZ0JBQWtCO0VBQ2xCLDZCQUE2QjtFQUM3QixvQ0FBb0M7QUNJdEM7QURDQTtFQUNFLFdBQVU7RUFDVixjQUFjO0VBQ2QsV0FBVztFQUNYLE1BQUs7RUFDTCxPQUFNO0VBQ04sK0VBQXNGO0FDRXhGO0FEQUE7RUFDRSxjQUFjO0VBQ1osbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCxVQUFVO0FDR2Q7QUREQSwrQ0FBQTtBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQixvQkFBb0I7QUNHdEI7QURDQTtFQUNFLGFBQWE7QUNFZjtBREVBO0VBQ0ksZ0NBQWdDO0VBQ2hDLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixTQUFTO0VBQ1Qsc0JBQXNCO0VBQ3RCLGlDQUFpQztFQUNqQyxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsa0JBQWtCO0FDQ3RCO0FER0U7RUFDRSxZQUFZO0VBQ1osYUFBYTtBQ0FqQjtBRElFO0VBQ0UsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixTQUFTO0FDRGI7QURJRTs7RUFFQSxxQkFBcUI7QUNEdkI7QURJQTtFQUNFLFVBQVU7RUFDVixxQkFBcUI7QUNEdkI7QURLRTtFQUNFLGFBQWE7RUFDYixxQkFBcUI7QUNGekI7QURNRTtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUNIcEI7QURLRTtFQUNFLDZCQUE0QjtFQUM1QixhQUFhO0VBQ2IsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsT0FBTztFQUNQLE1BQU07RUFDTixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixvQ0FBb0M7QUNGeEM7QURNRTtFQUNFLDBDQUEwQztFQUMxQyxjQUFjO0VBQ2QsV0FBVztFQUNYLFdBQVc7QUNIZjtBRFFFO0VBRUUscUJBQXFCO0VBRXJCLDJEQUEyRDtFQUMzRCxrQkFBa0I7RUFDbEIsV0FBVztBQ0xmO0FEUUU7RUFDRSxtQkFBbUI7RUFDbkIsVUFBVTtBQ0xkO0FEUUU7RUFDRSxVQUFVO0VBRVYsbUJBQW1CO0VBQ25CLG1CQUFtQjtBQ0x2QjtBRFNFO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLHlCQUF3QjtBQ041QjtBRFlFLGtCQUFBO0FBQ0E7RUFDRSxnQkFBZ0I7QUNUcEI7QURXRTtFQUNFLHlCQUF3QjtBQ1I1QjtBRFlFO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtBQ1RsQztBRGFFO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixvQkFBb0I7QUNWeEI7QURjRTtFQUNFLHVCQUFRO0VBQ1Isa0JBQWtCO0VBQ2xCLFdBQVU7RUFBRSxnQkFBZTtFQUMzQixtQkFBbUI7QUNWdkI7QURhQztFQUNDLG1CQUFtQjtBQ1ZyQjtBRGFBO0VBQ0Usb0JBQW9CO0FDVnRCO0FEYUE7O0VBRUUsY0FBYztFQUNkLGdCQUFnQjtBQ1ZsQjtBRFlBLHlEQUFBO0FBRUE7RUFDSSx5QkFBd0I7QUNWNUI7QURhQTtFQUNJLFlBQVc7RUFDWCxxQkFBcUI7QUNWekI7QURhQTtFQUNFLGlCQUFpQjtBQ1ZuQjtBRGFBO0VBQ0kscUJBQW9CO0VBQ3BCLGFBQWE7RUFDYixVQUFVO0VBQ1YsY0FBYztFQUVkLGtCQUFrQjtFQUNsQix1QkFBdUI7QUNYM0I7QURjQTtFQUVJLGVBQWU7RUFDZixxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLG9CQUFvQjtBQ1p4QjtBRE9BO0VBT00scUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsZUFBZTtFQUNmLGtCQUFrQjtBQ1Z4QjtBREpBO0VBaUJRLGlCQUFpQjtBQ1R6QjtBRFJBO0VBb0JRLGNBQXlCO0FDUmpDO0FEYUE7RUFDSSxpQkFBaUI7QUNWckI7QURjQTtFQUNJLG1CQUFtQjtBQ1h2QjtBRGNBO0VBQ0ksK0JBQWdDO0FDWHBDO0FEZUEsK0NBQUE7QUFDQTtFQUVJLFdBQVU7RUFDVixjQUFjO0VBQ2QsV0FBVztFQUNYLGFBQWE7RUFDYixNQUFLO0VBQ0wsT0FBTTtBQ2JWO0FETUE7RUFVUSw0QkFBNEI7RUFDNUIsa0JBQWtCO0VBQ2xCLE1BQUs7RUFDTCxPQUFNO0VBQ04sV0FBVTtFQUNWLFlBQVc7QUNabkI7QURIQTtFQWtCUSxjQUFjO0VBQ2QsTUFBSztFQUNMLE9BQU07RUFDTixjQUFjO0VBQ2QsZUFBZTtFQUNmLFdBQVU7RUFDVixpQkFBaUI7RUFDakIsc0JBQXNCO0VBQ3RCLDJCQUEyQjtFQUMzQiw0QkFBNEI7RUFDNUIsZUFBZTtFQUNmLHdCQUF3QjtFQUN4QiwrQkFBK0I7RUFDL0Isc0JBQXNCO0VBQ3RCLGdCQUFnQjtBQ1h4QjtBRGVBLCtDQUFBO0FBR0E7RUFDSTtJQUNJLFFBQU87RUNkYjtFRGdCRTtJQUNJLGlCQUFnQjtFQ2R0QjtFRGdCRTs7SUFFRSxXQUFXO0lBQ1gsWUFBWTtFQ2RoQjtFRGdCRTtJQUNFLHFCQUFhO1FBQWIsaUJBQWE7WUFBYixhQUFhO0lBQ2Isa0JBQWtCO0VDZHRCO0VEaUJFO0lBQ0Usa0JBQWtCO0VDZnRCO0VEY0U7SUFHRSxjQUFjO0lBQ2QsY0FBYztJQUNkLFVBQVM7SUFDVCxjQUFhO0VDZGpCO0VEaUJFO0lBQ0Usa0JBQWtCO0VDZnRCO0VEaUJFO0lBQ0MsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQix5QkFBd0I7RUNmM0I7RURrQkU7SUFFRSw2QkFBNEI7SUFDNUIsbUJBQW1CO0lBQ25CLGVBQWU7RUNqQm5CO0FBQ0Y7QURtQkE7RUFDRTtJQUNFLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIscUJBQXFCO0VDaEJ2QjtBQUNGO0FEbUJBO0VBQ0U7SUFDRSxXQUFXO0VDaEJiO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9sYW5kaW5nL2xhbmRpbmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybChodHRwOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1HZW50aXVtK0Jvb2srQmFzaWM6NDAwLDcwMCw3MDBpdGFsaWMsNDAwaXRhbGljKTtcclxuJGI6IDEuNWVtOyAvLyBib3JkZXItd2lkdGhcclxuICAvKiA9PT09PT09PT1OQVZJR0FUSU9OPT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG4ubmF2YmFyLWJyYW5kIGltZyB7XHJcbiAgICBoZWlnaHQ6MnJlbTsgXHJcbn1cclxuLm5hdmJhci1kYXJrIHtcclxuICAgIHBhZGRpbmc6LjZyZW0gMXJlbTsgXHJcbiAgICBmb250LXNpemU6IC45cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDsgXHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6LjFyZW07XHJcbn1cclxuLm5hdmJhci1uYXYgbGkge1xyXG4gICAgcGFkZGluZy1yaWdodDogLjhyZW07IFxyXG4gICBcclxufVxyXG4ubmF2YmFyLW5hdiAubmF2LWxpbmsge1xyXG4gICAgcGFkZGluZy10b3A6IC44cmVtO1xyXG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbn1cclxuLm5hdmJhci1uYXYgLm5hdi1saW5rOmhvdmVyLFxyXG4gICAgLm5hdmJhci1uYXYgLm5hdi1saW5rLmFjdGl2ZSB7XHJcbiAgICBcclxuICAgIGNvbG9yOiAjMDBiM2ZmIWltcG9ydGFudDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjsgXHJcbn1cclxuLmNhcHRpb24ge1xyXG4gICAgei1pbmRleDogMTsgXHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6NDAlOyBcclxuICAgIHJpZ2h0OiAxJTsgXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmJ0biB7XHJcbiAgICBib3JkZXItd2lkdGg6IG1lZGl1bTsgXHJcbiAgICBib3JkZXItcmFkaXVzOiAwOyBcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7ICBcclxuICAgIHBhZGRpbmc6IC41cmVtIDEuMnJlbVxyXG59XHJcblxyXG4uZHJvcGRvd24tbWVudSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQxLDQzLDQ0LDAuNikgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcbi8qID09PT09PT09PUFCT1VUIFNFQ1RJT049PT09PT09PT09PT09PT0qL1xyXG4ub2Zmc2V0OmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgaGVpZ2h0OiAzLjg3NXJlbTtcclxuICAgIGRpc3BsYXk6IGJsb2NrOyBcclxuICAgIG1hcmdpbi10b3A6IC0zLjg3NXJlbTtcclxufVxyXG4uaGVhZGluZyB7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxcmVtO1xyXG59XHJcblxyXG4uYWJvdXQgLnN2Zy1pbmxpbmUtLWZhe1xyXG4gICAgY29sb3I6ICMwMGIzZmY7XHJcbn1cclxuXHJcbi5hYm91dE1lIHtcclxuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gIHRleHQtanVzdGlmeTogaW50ZXItd29yZDtcclxuICBjb2xvcjogIzUwNTk2MjsgXHJcbiAgbGluZS1oZWlnaHQ6IDIwMCU7XHJcbiAgZm9udC1zaXplOiAyMHB4OyBcclxuXHJcbn1cclxuXHJcbmEubGlnaHRfYnRuID4gc3BhbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA2OTRGOTtcclxuICBmb250LXNpemU6IDIwcHg7IFxyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuYS5saWdodF9idG4gPiBzcGFuOmhvdmVyIHtcclxuICAtd2Via2l0LW1hc2staW1hZ2U6IGxpbmVhci1ncmFkaWVudCgtNzVkZWcsIHJnYmEoOSwgMTEsIDEyNCwgMC41KSA2MCUsICMwMDAgNTAlLCByZ2JhKDk3LCA0MywgMjIzLCAwLjUpIDgwJSk7XHJcbiAgLXdlYmtpdC1tYXNrLXNpemU6IDIwMCU7XHJcbiAgYW5pbWF0aW9uOiBzaGluZSAycyBpbmZpbml0ZTtcclxufVxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIHNoaW5lIHtcclxuICBmcm9tIHtcclxuICAgIC13ZWJraXQtbWFzay1wb3NpdGlvbjogMTUwJTtcclxuICB9XHJcbiAgXHJcbiAgdG8ge1xyXG4gICAgLXdlYmtpdC1tYXNrLXBvc2l0aW9uOiAtNTAlO1xyXG4gIH0gXHJcbn1cclxuXHJcblxyXG4ucG9ydGZvbGlvLWl0ZW0gaW1nOmhvdmVye1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xyXG59XHJcbi5wb3J0Zm9saW8taXRlbSBpbWcge1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC40cyBlYXNlO1xyXG59XHJcbmEgPiBzcGFuIHtcclxuXHJcbiBcclxuICBiYWNrZ3JvdW5kOiAgI2ZmZiA7XHJcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XHJcbiAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gXHJcbn1cclxuXHJcblxyXG4janVtYm90cm9uIHtcclxuICB3aWR0aDoxMDAlOyBcclxuICBkaXNwbGF5OiB0YWJsZTsgXHJcbiAgei1pbmRleDogLTE7IFxyXG4gIHRvcDowOyBcclxuICBsZWZ0OjA7IFxyXG4gIGJhY2tncm91bmQtaW1hZ2U6bGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiYSgwLDAsMCwwKSAzNSUsIHJnYigxMTgsIDExNywgMTE5KSA5MCUpO1xyXG59XHJcbiNhYm91dFJvdyB7XHJcbiAgd2lkdGg6IGluaGVyaXQ7XHJcbiAgICBtaW4taGVpZ2h0OiBpbmhlcml0O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxufVxyXG4vKj09PT09PT09PT1QT1JURk9MSU8gU0VDVElPTj09PT09PT09PT09PT09PT09Ki9cclxuXHJcbi5wb3J0Zm9saW8ge1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcclxuICBcclxufVxyXG5cclxuLnBvcnRmb2xpb0NvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuIFxyXG59XHJcblxyXG4ucG9ydGZvbGlvX3NlY3Rpb24ge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlYWVhZWE7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIzcHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gICAgXHJcbiAgfVxyXG5cclxuICBpbWcge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIFxyXG4gIH1cclxuXHJcbiAgLnBvcnRmb2xpb19pdGVtcyB7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogMDtcclxuIH1cclxuXHJcbiAgYSxcclxuYTpob3ZlciB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5cclxufVxyXG5hOmZvY3VzIHtcclxuICBvdXRsaW5lOiAwO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBcclxufVxyXG5cclxuICAucG9ydGZvbGlvX2l0ZW1zIGxpIHtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IFxyXG4gICBcclxuICB9XHJcbiAgXHJcbiAgLnBvcnRmb2xpb19zZWN0aW9uIC5wb3J0Zm9saW9faXRlbXMgLnBvcnRmb2xpb19pdGVtIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgfVxyXG4gIC5wb3J0Zm9saW9faXRlbXMgLnBvcnRmb2xpb19pdGVtIC5ob3Zlcl9lZmZlY3Qge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtcclxuICAgIHBhZGRpbmc6IDI1cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjdzIGVhc2UtaW4tb3V0O1xyXG4gICAgXHJcbiBcclxuICB9XHJcbiAgLnBvcnRmb2xpb19pdGVtcyAucG9ydGZvbGlvX2l0ZW0gLmhvdmVyX2VmZmVjdCBhIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcclxuICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgaGVpZ2h0OiA5NSU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgXHJcbiAgICBcclxuICAgIFxyXG4gIH1cclxuICAucG9ydGZvbGlvX2l0ZW1zIC5wb3J0Zm9saW9faXRlbSAuaG92ZXJfZWZmZWN0IGEgaW1nIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjIpO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjIpO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMjUwbXMgY3ViaWMtYmV6aWVyKDEsIC0wLjYsIDAuNTcsIC0wLjE1KSAwcztcclxuICAgIHRyYW5zaXRpb246IGFsbCAyNTBtcyBjdWJpYy1iZXppZXIoMSwgLTAuNiwgMC41NywgLTAuMTUpIDBzO1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBcclxuICB9XHJcbiAgLnBvcnRmb2xpb19pdGVtcyAucG9ydGZvbGlvX2l0ZW06aG92ZXIgLmhvdmVyX2VmZmVjdCB7XHJcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgXHJcbiAgfVxyXG4gIC5wb3J0Zm9saW9faXRlbXMgLnBvcnRmb2xpb19pdGVtOmhvdmVyIC5ob3Zlcl9lZmZlY3QgYSBpbWcge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgICBcclxuICB9XHJcblxyXG4gIC5wb3J0Zm9saW9faXRlbXMgLnBvcnRmb2xpb19pdGVtOmhvdmVyIC5ob3Zlcl9lZmZlY3QgPiBhID4gc3Bhbi5jb21tZW50IHtcclxuICAgIGZvbnQtc2l6ZTogMmVtO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZGlzcGxheTogdGFibGUtY2VsbDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMwNjk0Rjk7XHJcbiAgICBcclxuICB9XHJcblxyXG5cclxuXHJcbiAgLyogU0tJTExTIFNFQ1RJT04qL1xyXG4gIC5za2lsbC1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogNy43ZW07XHJcbiAgfVxyXG4gIC5tNCB7XHJcbiAgICBtYXJnaW46MS41cmVtICFpbXBvcnRhbnQ7XHJcbiAgICBcclxuICB9XHJcblxyXG4gIC5za2lsbHNldCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gXHJcblxyXG4gIH1cclxuICAucXVvdGV7XHJcbiAgICBtYXJnaW46IDUwcHggYXV0bztcclxuICAgIG1heC13aWR0aDogNzAwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNDBweDsgICBcclxuICB9XHJcblxyXG5cclxuICAuYmxvY2txdW90ZSB7XHJcbiAgICBxdW90ZXM6IFwiwqtcIiBcIsK7XCIgXCLigLlcIiBcIuKAulwiO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZmxvYXQ6bGVmdDsgb3ZlcmZsb3c6aGlkZGVuO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIFxyXG4gfVxyXG4gcTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IG9wZW4tcXVvdGU7XHJcbn1cclxuXHJcbnE6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IGNsb3NlLXF1b3RlO1xyXG59XHJcblxyXG5xOmJlZm9yZSxcclxucTphZnRlciB7XHJcbiAgY29sb3I6ICMwMGIzZmY7XHJcbiAgZm9udC1zaXplOiAxLjJlbTtcclxufVxyXG4vKiA9PT09PT09PT1DT05UQUNUIFNFQ1RJT04gJiYgRk9PVEVSPT09PT09PT09PT09PT09PT09PSovXHJcblxyXG4uZm9vdGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IzU2NWI2MTtcclxufVxyXG5cclxuLmZvb3RlciBhIHtcclxuICAgIGNvbG9yOndoaXRlO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lOyBcclxufVxyXG5cclxuI2Zvb3RlclNvY2lhbCB7XHJcbiAgcGFkZGluZy10b3A6IDcwcHg7IFxyXG59XHJcblxyXG51bC5zb2NpYWwge1xyXG4gICAgbGlzdC1zdHlsZS10eXBlOm5vbmU7IFxyXG4gICAgZGlzcGxheTogZmxleDsgXHJcbiAgICBwYWRkaW5nOiAwOyBcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgXHJcbiAgICBtYXgtd2lkdGg6IDExLjhyZW07IFxyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBcclxufVxyXG51bC5zb2NpYWwgbGkge1xyXG4gXHJcbiAgICBkaXNwbGF5OiBpbmxpbmU7IFxyXG4gICAgcGFkZGluZy1yaWdodDogMS4ycmVtO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiA1cHggMHB4IDMwcHg7XHJcbiAgICBhIHtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICB3aWR0aDogNDVweDtcclxuICAgICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgICBsaW5lLWhlaWdodDogNDVweDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDEycHg7XHJcbiAgIFxyXG4gICAgICAmOmxhc3QtY2hpbGQge1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMHB4O1xyXG4gICAgICB9XHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIGNvbG9yOiBoc2woMjA5LCA5NSUsIDUwJSk7XHJcbiAgICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5mb290ZXIgLnN2Zy1pbmxpbmUtLWZhe1xyXG4gICAgZm9udC1zaXplOiAxLjZyZW07XHJcbn1cclxuXHJcblxyXG4uZm9vdGVyIC5zdmctaW5saW5lLS1mYTpob3ZlcntcclxuICAgIGJhY2tncm91bmQ6ICMwMGIzZmY7XHJcbn1cclxuXHJcbmhyLnNvY2tldCB7XHJcbiAgICBib3JkZXItdG9wOiAuMnJlbSBzb2xpZCAjNjY2YjcxIDtcclxufVxyXG5cclxuXHJcbi8qID09PT09PT09PUZJWEVEIExBTkRJTkcgUEFHRSBTRUNUSU9OPT09PT09PT0qL1xyXG4ubGFuZGluZyB7XHJcbiAgICAvLyBwb3NpdGlvbjogZml4ZWQ7IFxyXG4gICAgd2lkdGg6MTAwJTsgXHJcbiAgICBkaXNwbGF5OiB0YWJsZTsgXHJcbiAgICB6LWluZGV4OiAtMTsgXHJcbiAgICBoZWlnaHQ6IDEwMHZoOyBcclxuICAgIHRvcDowOyBcclxuICAgIGxlZnQ6MDsgXHJcblxyXG4gICAgLmhvbWUtd3JhcCB7XHJcbiAgICAgICAgY2xpcDogcmVjdCgwLCBhdXRvLCBhdXRvLCAwKTtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOjA7XHJcbiAgICAgICAgbGVmdDowO1xyXG4gICAgICAgIHdpZHRoOjEwMCU7IFxyXG4gICAgICAgIGhlaWdodDoxMDAlOyBcclxuICAgIH1cclxuICAgIC5ob21lLWlubmVyIHtcclxuICAgICAgICBkaXNwbGF5OiB0YWJsZTsgXHJcbiAgICAgICAgdG9wOjA7IFxyXG4gICAgICAgIGxlZnQ6MDsgXHJcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87IFxyXG4gICAgICAgIHBhZGRpbmc6IDAgYXV0bzsgXHJcbiAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyBcclxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCk7XHJcbiAgICAgICAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybTtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuOyAgICAgICAgXHJcbiAgICB9XHJcbn1cclxuXHJcbi8qID09PT09PT09PT09PT09PT1NRURJQSBRVUVSSUVTPT09PT09PT09PT09PT0qL1xyXG5cclxuXHJcbkBtZWRpYShtYXgtd2lkdGg6NzY3Ljk4cHgpIHtcclxuICAgIC5jYXB0aW9uIHtcclxuICAgICAgICB0b3A6MzQlO1xyXG4gICB9XHJcbiAgICAuY2FwdGlvbiBoMSB7XHJcbiAgICAgICAgZm9udC1zaXplOjEuOHJlbTtcclxuICAgIH1cclxuICAgIGltZy5hYm91dE1lUGhvdG8sXHJcbiAgICBpbWcucG9ydEltZyB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICB9XHJcbiAgICAuYWJvdXRNZSB7XHJcbiAgICAgIGh5cGhlbnM6IGF1dG87XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgIGEubGlnaHRfYnRuIHtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgID4gc3BhbiB7XHJcbiAgICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgd2lkdGg6NTAlO1xyXG4gICAgICBtYXJnaW46MCBhdXRvO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBoMS50ZXh0LWxpZ2h0IHtcclxuICAgICAgdmlzaWJpbGl0eTogaGlkZGVuOyBcclxuICAgIH1cclxuICAgIGgxLnRleHQtbGlnaHQ6YWZ0ZXIge1xyXG4gICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgIGNvbnRlbnQ6XCJMaWRpYSBEYXZpZHNvblwiO1xyXG4gICAgIFxyXG4gICAgfVxyXG4gICAgLmJsb2NrcXVvdGUge1xyXG4gIFxyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXIhaW1wb3J0YW50O1xyXG4gICAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xyXG4gICAgICBmb250LXNpemU6IDE1cHg7IFxyXG4gICAgfVxyXG4gIH1cclxuQG1lZGlhIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogNTY4cHgpIHsgXHJcbiAgaDEudGV4dC1saWdodDphZnRlciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jazsgXHJcbiAgXHJcbiAgfVxyXG59XHJcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDEzNjZweCkge1xyXG4gIGltZy5wb3J0SW1nIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgXHJcbiAgfVxyXG59XHJcblxyXG5cclxuIiwiQGNoYXJzZXQgXCJVVEYtOFwiO1xuQGltcG9ydCB1cmwoaHR0cDovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9R2VudGl1bStCb29rK0Jhc2ljOjQwMCw3MDAsNzAwaXRhbGljLDQwMGl0YWxpYyk7XG4vKiA9PT09PT09PT1OQVZJR0FUSU9OPT09PT09PT09PT09PT09PT09PT09PT0qL1xuLm5hdmJhci1icmFuZCBpbWcge1xuICBoZWlnaHQ6IDJyZW07XG59XG5cbi5uYXZiYXItZGFyayB7XG4gIHBhZGRpbmc6IC42cmVtIDFyZW07XG4gIGZvbnQtc2l6ZTogLjlyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxldHRlci1zcGFjaW5nOiAuMXJlbTtcbn1cblxuLm5hdmJhci1uYXYgbGkge1xuICBwYWRkaW5nLXJpZ2h0OiAuOHJlbTtcbn1cblxuLm5hdmJhci1uYXYgLm5hdi1saW5rIHtcbiAgcGFkZGluZy10b3A6IC44cmVtO1xuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn1cblxuLm5hdmJhci1uYXYgLm5hdi1saW5rOmhvdmVyLFxuLm5hdmJhci1uYXYgLm5hdi1saW5rLmFjdGl2ZSB7XG4gIGNvbG9yOiAjMDBiM2ZmICFpbXBvcnRhbnQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmNhcHRpb24ge1xuICB6LWluZGV4OiAxO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNDAlO1xuICByaWdodDogMSU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmJ0biB7XG4gIGJvcmRlci13aWR0aDogbWVkaXVtO1xuICBib3JkZXItcmFkaXVzOiAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBwYWRkaW5nOiAuNXJlbSAxLjJyZW07XG59XG5cbi5kcm9wZG93bi1tZW51IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg0MSwgNDMsIDQ0LCAwLjYpICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi8qID09PT09PT09PUFCT1VUIFNFQ1RJT049PT09PT09PT09PT09PT0qL1xuLm9mZnNldDpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBoZWlnaHQ6IDMuODc1cmVtO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLXRvcDogLTMuODc1cmVtO1xufVxuXG4uaGVhZGluZyB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIHBhZGRpbmctYm90dG9tOiAxcmVtO1xufVxuXG4uYWJvdXQgLnN2Zy1pbmxpbmUtLWZhIHtcbiAgY29sb3I6ICMwMGIzZmY7XG59XG5cbi5hYm91dE1lIHtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgdGV4dC1qdXN0aWZ5OiBpbnRlci13b3JkO1xuICBjb2xvcjogIzUwNTk2MjtcbiAgbGluZS1oZWlnaHQ6IDIwMCU7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuYS5saWdodF9idG4gPiBzcGFuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA2OTRGOTtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG5hLmxpZ2h0X2J0biA+IHNwYW46aG92ZXIge1xuICAtd2Via2l0LW1hc2staW1hZ2U6IGxpbmVhci1ncmFkaWVudCgtNzVkZWcsIHJnYmEoOSwgMTEsIDEyNCwgMC41KSA2MCUsICMwMDAgNTAlLCByZ2JhKDk3LCA0MywgMjIzLCAwLjUpIDgwJSk7XG4gIC13ZWJraXQtbWFzay1zaXplOiAyMDAlO1xuICBhbmltYXRpb246IHNoaW5lIDJzIGluZmluaXRlO1xufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgc2hpbmUge1xuICBmcm9tIHtcbiAgICAtd2Via2l0LW1hc2stcG9zaXRpb246IDE1MCU7XG4gIH1cbiAgdG8ge1xuICAgIC13ZWJraXQtbWFzay1wb3NpdGlvbjogLTUwJTtcbiAgfVxufVxuXG4ucG9ydGZvbGlvLWl0ZW0gaW1nOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xufVxuXG4ucG9ydGZvbGlvLWl0ZW0gaW1nIHtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC40cyBlYXNlO1xufVxuXG5hID4gc3BhbiB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbiNqdW1ib3Ryb24ge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogdGFibGU7XG4gIHotaW5kZXg6IC0xO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYmEoMCwgMCwgMCwgMCkgMzUlLCAjNzY3NTc3IDkwJSk7XG59XG5cbiNhYm91dFJvdyB7XG4gIHdpZHRoOiBpbmhlcml0O1xuICBtaW4taGVpZ2h0OiBpbmhlcml0O1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi8qPT09PT09PT09PVBPUlRGT0xJTyBTRUNUSU9OPT09PT09PT09PT09PT09PT0qL1xuLnBvcnRmb2xpbyB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIHBhZGRpbmctYm90dG9tOiAxcmVtO1xufVxuXG4ucG9ydGZvbGlvQ29udGFpbmVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbn1cblxuLnBvcnRmb2xpb19zZWN0aW9uIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlYWVhZWE7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDIzcHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xufVxuXG5pbWcge1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi5wb3J0Zm9saW9faXRlbXMge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG59XG5cbmEsXG5hOmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5hOmZvY3VzIHtcbiAgb3V0bGluZTogMDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4ucG9ydGZvbGlvX2l0ZW1zIGxpIHtcbiAgcGFkZGluZzogMTBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4ucG9ydGZvbGlvX3NlY3Rpb24gLnBvcnRmb2xpb19pdGVtcyAucG9ydGZvbGlvX2l0ZW0ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5wb3J0Zm9saW9faXRlbXMgLnBvcnRmb2xpb19pdGVtIC5ob3Zlcl9lZmZlY3Qge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgcGFkZGluZzogMjVweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgb3BhY2l0eTogMDtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuN3MgZWFzZS1pbi1vdXQ7XG59XG5cbi5wb3J0Zm9saW9faXRlbXMgLnBvcnRmb2xpb19pdGVtIC5ob3Zlcl9lZmZlY3QgYSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcbiAgZGlzcGxheTogdGFibGU7XG4gIGhlaWdodDogOTUlO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnBvcnRmb2xpb19pdGVtcyAucG9ydGZvbGlvX2l0ZW0gLmhvdmVyX2VmZmVjdCBhIGltZyB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjIpO1xuICB0cmFuc2Zvcm06IHNjYWxlKDAuMik7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDI1MG1zIGN1YmljLWJlemllcigxLCAtMC42LCAwLjU3LCAtMC4xNSkgMHM7XG4gIHRyYW5zaXRpb246IGFsbCAyNTBtcyBjdWJpYy1iZXppZXIoMSwgLTAuNiwgMC41NywgLTAuMTUpIDBzO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIHdpZHRoOiBhdXRvO1xufVxuXG4ucG9ydGZvbGlvX2l0ZW1zIC5wb3J0Zm9saW9faXRlbTpob3ZlciAuaG92ZXJfZWZmZWN0IHtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgb3BhY2l0eTogMTtcbn1cblxuLnBvcnRmb2xpb19pdGVtcyAucG9ydGZvbGlvX2l0ZW06aG92ZXIgLmhvdmVyX2VmZmVjdCBhIGltZyB7XG4gIG9wYWNpdHk6IDE7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbn1cblxuLnBvcnRmb2xpb19pdGVtcyAucG9ydGZvbGlvX2l0ZW06aG92ZXIgLmhvdmVyX2VmZmVjdCA+IGEgPiBzcGFuLmNvbW1lbnQge1xuICBmb250LXNpemU6IDJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDY5NEY5O1xufVxuXG4vKiBTS0lMTFMgU0VDVElPTiovXG4uc2tpbGwtaWNvbiB7XG4gIGZvbnQtc2l6ZTogNy43ZW07XG59XG5cbi5tNCB7XG4gIG1hcmdpbjogMS41cmVtICFpbXBvcnRhbnQ7XG59XG5cbi5za2lsbHNldCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLnF1b3RlIHtcbiAgbWFyZ2luOiA1MHB4IGF1dG87XG4gIG1heC13aWR0aDogNzAwcHg7XG4gIHBhZGRpbmctYm90dG9tOiA0MHB4O1xufVxuXG4uYmxvY2txdW90ZSB7XG4gIHF1b3RlczogXCLCq1wiIFwiwrtcIiBcIuKAuVwiIFwi4oC6XCI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbnE6YmVmb3JlIHtcbiAgY29udGVudDogb3Blbi1xdW90ZTtcbn1cblxucTphZnRlciB7XG4gIGNvbnRlbnQ6IGNsb3NlLXF1b3RlO1xufVxuXG5xOmJlZm9yZSxcbnE6YWZ0ZXIge1xuICBjb2xvcjogIzAwYjNmZjtcbiAgZm9udC1zaXplOiAxLjJlbTtcbn1cblxuLyogPT09PT09PT09Q09OVEFDVCBTRUNUSU9OICYmIEZPT1RFUj09PT09PT09PT09PT09PT09PT0qL1xuLmZvb3RlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1NjViNjE7XG59XG5cbi5mb290ZXIgYSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4jZm9vdGVyU29jaWFsIHtcbiAgcGFkZGluZy10b3A6IDcwcHg7XG59XG5cbnVsLnNvY2lhbCB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1heC13aWR0aDogMTEuOHJlbTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbnVsLnNvY2lhbCBsaSB7XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgcGFkZGluZy1yaWdodDogMS4ycmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogNXB4IDBweCAzMHB4O1xufVxuXG51bC5zb2NpYWwgbGkgYSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDQ1cHg7XG4gIGhlaWdodDogNDVweDtcbiAgbGluZS1oZWlnaHQ6IDQ1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xufVxuXG51bC5zb2NpYWwgbGkgYTpsYXN0LWNoaWxkIHtcbiAgbWFyZ2luLXJpZ2h0OiAwcHg7XG59XG5cbnVsLnNvY2lhbCBsaSBhOmhvdmVyIHtcbiAgY29sb3I6ICMwNjg0Zjk7XG59XG5cbi5mb290ZXIgLnN2Zy1pbmxpbmUtLWZhIHtcbiAgZm9udC1zaXplOiAxLjZyZW07XG59XG5cbi5mb290ZXIgLnN2Zy1pbmxpbmUtLWZhOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzAwYjNmZjtcbn1cblxuaHIuc29ja2V0IHtcbiAgYm9yZGVyLXRvcDogLjJyZW0gc29saWQgIzY2NmI3MTtcbn1cblxuLyogPT09PT09PT09RklYRUQgTEFORElORyBQQUdFIFNFQ1RJT049PT09PT09PSovXG4ubGFuZGluZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiB0YWJsZTtcbiAgei1pbmRleDogLTE7XG4gIGhlaWdodDogMTAwdmg7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbn1cblxuLmxhbmRpbmcgLmhvbWUtd3JhcCB7XG4gIGNsaXA6IHJlY3QoMCwgYXV0bywgYXV0bywgMCk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4ubGFuZGluZyAuaG9tZS1pbm5lciB7XG4gIGRpc3BsYXk6IHRhYmxlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nOiAwIGF1dG87XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwKTtcbiAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLyogPT09PT09PT09PT09PT09PU1FRElBIFFVRVJJRVM9PT09PT09PT09PT09PSovXG5AbWVkaWEgKG1heC13aWR0aDogNzY3Ljk4cHgpIHtcbiAgLmNhcHRpb24ge1xuICAgIHRvcDogMzQlO1xuICB9XG4gIC5jYXB0aW9uIGgxIHtcbiAgICBmb250LXNpemU6IDEuOHJlbTtcbiAgfVxuICBpbWcuYWJvdXRNZVBob3RvLFxuICBpbWcucG9ydEltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICB9XG4gIC5hYm91dE1lIHtcbiAgICBoeXBoZW5zOiBhdXRvO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICBhLmxpZ2h0X2J0biB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIGEubGlnaHRfYnRuID4gc3BhbiB7XG4gICAgZGlzcGxheTogdGFibGU7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgd2lkdGg6IDUwJTtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgfVxuICBoMS50ZXh0LWxpZ2h0IHtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIH1cbiAgaDEudGV4dC1saWdodDphZnRlciB7XG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29udGVudDogXCJMaWRpYSBEYXZpZHNvblwiO1xuICB9XG4gIC5ibG9ja3F1b3RlIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgfVxufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiA1NjhweCkge1xuICBoMS50ZXh0LWxpZ2h0OmFmdGVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB9XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDEzNjZweCkge1xuICBpbWcucG9ydEltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cbiJdfQ== */"] });
    return LandingComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LandingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-landing',
                templateUrl: './landing.component.html',
                styleUrls: ['./landing.component.scss'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _service_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/user.service */ "./src/app/service/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _background_image_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../background-image.directive */ "./src/app/background-image.directive.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");







var _c0 = function () { return { "background-image": "url(../../assets/galaxy.jpg)" }; };
var LoginComponent = /** @class */ (function () {
    function LoginComponent(loginService, router) {
        this.loginService = loginService;
        this.router = router;
        this.credentials = {
            _id: '',
            email: '',
            username: '',
            password: ''
        };
        window.scrollTo(0, 0);
    }
    LoginComponent.prototype.validateLogin = function () {
        var _this = this;
        if (this.credentials.email && this.credentials.password) {
            console.log('connected successfully, email is ', this.credentials.email, '; password is ', this.credentials.password);
            this.loginService.validateLogin(this.credentials).subscribe(function (result) {
                console.log('result is ', result);
                if (result) {
                    _this.router.navigate(['/home']);
                }
                else {
                    alert("Such user does not exist, please check your credentials and try again");
                    _this.router.navigate(['/login']);
                }
            }, function (error) {
                console.log('error is ', error);
                alert('Wrong login credentials, please try again');
            });
        }
        else {
            alert('Enter you email and the password');
        }
    };
    LoginComponent.prototype.moveToRegister = function () {
        this.router.navigate(['/register']);
    };
    LoginComponent.prototype.loaded = function () {
        console.log('loaded');
    };
    LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
    LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 28, vars: 4, consts: [["appBackgroundImage", "", 1, "container", 3, "ngStyle", "imageLoaded"], [1, "d-flex", "justify-content-center", "h-100"], [1, "card"], [1, "card-header"], [1, "card-body"], [3, "submit"], [1, "input-group", "form-group"], [1, "input-group-prepend"], [1, "input-group-text"], [1, "fas", "fa-user", "fa-lg"], ["type", "email", "name", "email", "placeholder", "Email", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "fas", "fa-unlock", "fa-lg"], ["type", "password", "name", "password", "placeholder", "Password", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "row", "align-items-center", "remember"], ["type", "checkbox"], [1, "form-group"], ["type", "submit", "value", "Login", 1, "btn", "float-right", "login_btn"], [1, "card-footer"], [1, "d-flex", "justify-content-center", "links"], [1, "d-flex", "justify-content-center"], ["href", "#"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("imageLoaded", function LoginComponent_Template_div_imageLoaded_0_listener() { return ctx.loaded(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Login");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function LoginComponent_Template_form_submit_7_listener() { return ctx.validateLogin(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_12_listener($event) { return ctx.credentials.email = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_17_listener($event) { return ctx.credentials.password = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Remember Me ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "div", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Go Back");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.credentials.email);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.credentials.password);
        } }, directives: [_background_image_directive__WEBPACK_IMPORTED_MODULE_3__["BackgroundImageDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgStyle"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"]], styles: [".container[_ngcontent-%COMP%] {\n  align-content: center;\n  min-height: 100%;\n  min-width: 100%;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  position: absolute;\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n\n.card[_ngcontent-%COMP%] {\n  height: 370px;\n  margin-top: auto;\n  margin-bottom: auto;\n  width: 400px;\n  background-color: rgba(0, 0, 0, 0.5) !important;\n}\n\n.card-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #00b3ff;\n}\n\n.input-group-prepend[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  width: 50px;\n  background: -webkit-linear-gradient(90deg, #16222A 10%, #3A6073 90%);\n  color: #405993;\n  border: 0 !important;\n}\n\n.fa-user[_ngcontent-%COMP%]:hover, .fa-unlock[_ngcontent-%COMP%]:hover {\n  color: #00b3ff !important;\n}\n\ninput[_ngcontent-%COMP%]:focus {\n  outline: 0 0 0 0  !important;\n  box-shadow: 0 0 0 0 !important;\n}\n\n.remember[_ngcontent-%COMP%] {\n  color: #00b3ff;\n}\n\n.remember[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  margin-left: 15px;\n  margin-right: 5px;\n}\n\n.login_btn[_ngcontent-%COMP%] {\n  border: 0 solid;\n  box-shadow: inset 0 0 20px rgba(255, 255, 255, 0);\n  outline: 1px solid;\n  outline-color: rgba(255, 255, 255, 0.5);\n  outline-offset: 0px;\n  text-shadow: none;\n  color: white;\n  transition: all 1250ms cubic-bezier(0.19, 1, 0.22, 1);\n  background: -webkit-linear-gradient(90deg, #16222A 10%, #405993 90%);\n  width: 100px;\n}\n\n.login_btn[_ngcontent-%COMP%]:hover:focus {\n  border: 2px solid;\n  border-radius: 2px;\n  box-shadow: inset 0 0 20px rgba(255, 255, 255, 0.5), 0 0 20px rgba(255, 255, 255, 0.2);\n  outline-color: rgba(255, 255, 255, 0);\n  outline-offset: 5px;\n  text-shadow: 1px 1px 2px #427388;\n  background: #00b3ff;\n}\n\n.links[_ngcontent-%COMP%] {\n  color: #00b3ff;\n}\n\n.links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  margin-left: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vQzpcXFVzZXJzXFxkYXZpZFxcQ29kZVxcY29kaW5nTGFiXFxjb2RpbmdCbG9nL3NyY1xcYXBwXFxsb2dpblxcbG9naW4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBRUEscUJBQXFCO0VBQ3JCLGdCQUFnQjtFQUNoQixlQUFjO0VBQ2QsTUFBTTtFQUFFLFFBQVE7RUFBRSxTQUFTO0VBQUUsT0FBTztFQUNwQyxrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLDRCQUE0QjtBQ0U1Qjs7QURFQTtFQUNBLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWiwrQ0FBNEM7QUNDNUM7O0FERUE7RUFDQSxjQUFhO0FDQ2I7O0FERUE7RUFDQSxXQUFXO0VBQ1gsb0VBQW9FO0VBQ3BFLGNBQWM7RUFDZCxvQkFBbUI7QUNDbkI7O0FERUE7RUFDSSx5QkFBd0I7QUNDNUI7O0FER0E7RUFDQSw0QkFBNEI7RUFDNUIsOEJBQThCO0FDQTlCOztBRElBO0VBQ0EsY0FBYTtBQ0RiOztBRElBO0VBRUEsV0FBVztFQUNYLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsaUJBQWlCO0FDRmpCOztBREtBO0VBQ0EsZUFBZTtFQUNmLGlEQUFpRDtFQUNqRCxrQkFBa0I7RUFDbEIsdUNBQXNDO0VBQ3RDLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLHFEQUFxRDtFQUNyRCxvRUFBb0U7RUFDcEUsWUFBWTtBQ0ZaOztBREtBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixzRkFBb0Y7RUFDcEYscUNBQXFDO0VBQ3JDLG1CQUFtQjtFQUNuQixnQ0FBZ0M7RUFDbEMsbUJBQW1CO0FDRm5COztBREtBO0VBQ0EsY0FBYztBQ0ZkOztBREtBO0VBQ0EsZ0JBQWdCO0FDRmhCIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmNvbnRhaW5lcntcclxuXHJcbmFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxubWluLWhlaWdodDogMTAwJTtcclxubWluLXdpZHRoOjEwMCU7IFxyXG50b3A6IDA7IHJpZ2h0OiAwOyBib3R0b206IDA7IGxlZnQ6IDA7IFxyXG5wb3NpdGlvbjogYWJzb2x1dGU7XHJcbmJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbmJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcblxyXG59XHJcblxyXG4uY2FyZHtcclxuaGVpZ2h0OiAzNzBweDtcclxubWFyZ2luLXRvcDogYXV0bztcclxubWFyZ2luLWJvdHRvbTogYXV0bztcclxud2lkdGg6IDQwMHB4O1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNSkgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmNhcmQtaGVhZGVyIGgze1xyXG5jb2xvcjojMDBiM2ZmO1xyXG59XHJcblxyXG4uaW5wdXQtZ3JvdXAtcHJlcGVuZCBzcGFue1xyXG53aWR0aDogNTBweDtcclxuYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoOTBkZWcsICMxNjIyMkEgMTAlLCAjM0E2MDczIDkwJSk7XHJcbmNvbG9yOiAjNDA1OTkzO1xyXG5ib3JkZXI6MCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZmEtdXNlcjpob3ZlciwgLmZhLXVubG9jazpob3ZlcntcclxuICAgIGNvbG9yOiAjMDBiM2ZmIWltcG9ydGFudDtcclxuICAgXHJcbn1cclxuXHJcbmlucHV0OmZvY3Vze1xyXG5vdXRsaW5lOiAwIDAgMCAwICAhaW1wb3J0YW50O1xyXG5ib3gtc2hhZG93OiAwIDAgMCAwICFpbXBvcnRhbnQ7XHJcblxyXG59XHJcblxyXG4ucmVtZW1iZXJ7XHJcbmNvbG9yOiMwMGIzZmY7XHJcbn1cclxuXHJcbi5yZW1lbWJlciBpbnB1dFxyXG57XHJcbndpZHRoOiAyMHB4O1xyXG5oZWlnaHQ6IDIwcHg7XHJcbm1hcmdpbi1sZWZ0OiAxNXB4O1xyXG5tYXJnaW4tcmlnaHQ6IDVweDtcclxufVxyXG5cclxuLmxvZ2luX2J0bntcclxuYm9yZGVyOiAwIHNvbGlkO1xyXG5ib3gtc2hhZG93OiBpbnNldCAwIDAgMjBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApO1xyXG5vdXRsaW5lOiAxcHggc29saWQ7XHJcbm91dGxpbmUtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjUpO1xyXG5vdXRsaW5lLW9mZnNldDogMHB4O1xyXG50ZXh0LXNoYWRvdzogbm9uZTtcclxuY29sb3I6IHdoaXRlO1xyXG50cmFuc2l0aW9uOiBhbGwgMTI1MG1zIGN1YmljLWJlemllcigwLjE5LCAxLCAwLjIyLCAxKTtcclxuYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoOTBkZWcsICMxNjIyMkEgMTAlLCAjNDA1OTkzIDkwJSk7XHJcbndpZHRoOiAxMDBweDtcclxufVxyXG5cclxuLmxvZ2luX2J0bjpob3Zlcjpmb2N1c3tcclxuICBib3JkZXI6IDJweCBzb2xpZDtcclxuICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDIwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAuNSksIDAgMCAyMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjIpO1xyXG4gIG91dGxpbmUtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XHJcbiAgb3V0bGluZS1vZmZzZXQ6IDVweDtcclxuICB0ZXh0LXNoYWRvdzogMXB4IDFweCAycHggIzQyNzM4ODsgXHJcbmJhY2tncm91bmQ6ICMwMGIzZmY7XHJcbn1cclxuXHJcbi5saW5rc3tcclxuY29sb3I6ICMwMGIzZmY7XHJcbn1cclxuXHJcbi5saW5rcyBhe1xyXG5tYXJnaW4tbGVmdDogNHB4O1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuLy8gLmZvcm0tc2lnbmluIHtcclxuLy8gICAgIG1heC13aWR0aDogMzMwcHg7XHJcbi8vICAgICBwYWRkaW5nOiAxNXB4O1xyXG4vLyAgICAgbWFyZ2luOiAwIGF1dG87XHJcbi8vICAgfVxyXG4vLyAgIC5mb3JtLXNpZ25pbiAuZm9ybS1zaWduaW4taGVhZGluZyxcclxuLy8gICAuZm9ybS1zaWduaW4gLmNoZWNrYm94IHtcclxuLy8gICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbi8vICAgfVxyXG4vLyAgIC5mb3JtLXNpZ25pbiAuY2hlY2tib3gge1xyXG4vLyAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuLy8gICB9XHJcbi8vICAgLmZvcm0tc2lnbmluIC5mb3JtLWNvbnRyb2wge1xyXG4vLyAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4vLyAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuLy8gICAgIGhlaWdodDogYXV0bztcclxuLy8gICAgIHBhZGRpbmc6IDEwcHg7XHJcbi8vICAgICBmb250LXNpemU6IDE2cHg7XHJcbi8vICAgfVxyXG4vLyAgIC5mb3JtLXNpZ25pbiAuZm9ybS1jb250cm9sOmZvY3VzIHtcclxuLy8gICAgIHotaW5kZXg6IDI7XHJcbi8vICAgfVxyXG4vLyAgIC5mb3JtLXNpZ25pbiBpbnB1dFt0eXBlPVwiZW1haWxcIl0ge1xyXG4vLyAgICAgbWFyZ2luLWJvdHRvbTogLTFweDtcclxuLy8gICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xyXG4vLyAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcclxuLy8gICB9XHJcbi8vICAgLmZvcm0tc2lnbmluIGlucHV0W3R5cGU9XCJwYXNzd29yZFwiXSB7XHJcbi8vICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4vLyAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcclxuLy8gICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xyXG4vLyAgIH0iLCIuY29udGFpbmVyIHtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBtaW4taGVpZ2h0OiAxMDAlO1xuICBtaW4td2lkdGg6IDEwMCU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufVxuXG4uY2FyZCB7XG4gIGhlaWdodDogMzcwcHg7XG4gIG1hcmdpbi10b3A6IGF1dG87XG4gIG1hcmdpbi1ib3R0b206IGF1dG87XG4gIHdpZHRoOiA0MDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpICFpbXBvcnRhbnQ7XG59XG5cbi5jYXJkLWhlYWRlciBoMyB7XG4gIGNvbG9yOiAjMDBiM2ZmO1xufVxuXG4uaW5wdXQtZ3JvdXAtcHJlcGVuZCBzcGFuIHtcbiAgd2lkdGg6IDUwcHg7XG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjMTYyMjJBIDEwJSwgIzNBNjA3MyA5MCUpO1xuICBjb2xvcjogIzQwNTk5MztcbiAgYm9yZGVyOiAwICFpbXBvcnRhbnQ7XG59XG5cbi5mYS11c2VyOmhvdmVyLCAuZmEtdW5sb2NrOmhvdmVyIHtcbiAgY29sb3I6ICMwMGIzZmYgIWltcG9ydGFudDtcbn1cblxuaW5wdXQ6Zm9jdXMge1xuICBvdXRsaW5lOiAwIDAgMCAwICAhaW1wb3J0YW50O1xuICBib3gtc2hhZG93OiAwIDAgMCAwICFpbXBvcnRhbnQ7XG59XG5cbi5yZW1lbWJlciB7XG4gIGNvbG9yOiAjMDBiM2ZmO1xufVxuXG4ucmVtZW1iZXIgaW5wdXQge1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBtYXJnaW4tbGVmdDogMTVweDtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG5cbi5sb2dpbl9idG4ge1xuICBib3JkZXI6IDAgc29saWQ7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAyMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XG4gIG91dGxpbmU6IDFweCBzb2xpZDtcbiAgb3V0bGluZS1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xuICBvdXRsaW5lLW9mZnNldDogMHB4O1xuICB0ZXh0LXNoYWRvdzogbm9uZTtcbiAgY29sb3I6IHdoaXRlO1xuICB0cmFuc2l0aW9uOiBhbGwgMTI1MG1zIGN1YmljLWJlemllcigwLjE5LCAxLCAwLjIyLCAxKTtcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoOTBkZWcsICMxNjIyMkEgMTAlLCAjNDA1OTkzIDkwJSk7XG4gIHdpZHRoOiAxMDBweDtcbn1cblxuLmxvZ2luX2J0bjpob3Zlcjpmb2N1cyB7XG4gIGJvcmRlcjogMnB4IHNvbGlkO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAyMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSwgMCAwIDIwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xuICBvdXRsaW5lLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDApO1xuICBvdXRsaW5lLW9mZnNldDogNXB4O1xuICB0ZXh0LXNoYWRvdzogMXB4IDFweCAycHggIzQyNzM4ODtcbiAgYmFja2dyb3VuZDogIzAwYjNmZjtcbn1cblxuLmxpbmtzIHtcbiAgY29sb3I6ICMwMGIzZmY7XG59XG5cbi5saW5rcyBhIHtcbiAgbWFyZ2luLWxlZnQ6IDRweDtcbn1cbiJdfQ== */"] });
    return LoginComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.scss'],
            }]
    }], function () { return [{ type: _service_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/models/post.ts":
/*!********************************!*\
  !*** ./src/app/models/post.ts ***!
  \********************************/
/*! exports provided: Post */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Post", function() { return Post; });
var Post = /** @class */ (function () {
    function Post() {
        this._id = '';
        this.title = '';
        this.description = '';
    }
    return Post;
}());



/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _service_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/user.service */ "./src/app/service/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _background_image_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../background-image.directive */ "./src/app/background-image.directive.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");







var _c0 = function () { return { "background-image": "url(../../assets/galaxy.jpg)" }; };
var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(auth, router) {
        this.auth = auth;
        this.router = router;
        this.credentials = {
            _id: '',
            email: '',
            username: '',
            password: '',
        };
    }
    // ngOnInit() {}
    RegisterComponent.prototype.moveToLogin = function () {
        this.router.navigate(['/login']);
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        if (this.credentials.email &&
            this.credentials.username &&
            this.credentials.password) {
            this.auth.register(this.credentials).subscribe(function () {
                _this.router.navigate(['/login']);
                console.log('You are successfully registered');
            }, function (err) {
                console.error(err);
                alert('Credentials do not match or left an empty field, please try again');
            });
        }
        else {
            alert('The fields are empty, please fill each required field');
        }
    };
    RegisterComponent.prototype.loaded = function () {
        console.log('loaded');
    };
    RegisterComponent.ɵfac = function RegisterComponent_Factory(t) { return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
    RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegisterComponent, selectors: [["app-register"]], decls: 20, vars: 5, consts: [["appBackgroundImage", "", 1, "container", 3, "ngStyle", "imageLoaded"], [1, "d-flex", "justify-content-center", "h-100"], [1, "card"], [1, "card-header", "d-flex", "justify-content-between"], ["href", "#"], [1, "card-body"], [3, "submit"], [1, "input-group", "form-group"], ["type", "text", "name", "email", "placeholder", "Enter your email", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "form-group"], ["type", "text", "name", "username", "placeholder", "Enter your Username", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "email", "name", "email", "placeholder", "Enter Password", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "submit", 1, "btn", "float-right", "register_btn"], [1, "card-footer"], [1, "d-flex", "justify-content-center", "links"]], template: function RegisterComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("imageLoaded", function RegisterComponent_Template_div_imageLoaded_0_listener() { return ctx.loaded(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Register");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Go Back");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "form", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function RegisterComponent_Template_form_submit_9_listener() { return ctx.register(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_11_listener($event) { return ctx.credentials.email = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_13_listener($event) { return ctx.credentials.username = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_15_listener($event) { return ctx.credentials.password = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Register");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.credentials.email);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.credentials.username);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.credentials.password);
        } }, directives: [_background_image_directive__WEBPACK_IMPORTED_MODULE_3__["BackgroundImageDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgStyle"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"]], styles: [".container[_ngcontent-%COMP%] {\n  align-content: center;\n  min-height: 100%;\n  min-width: 100%;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  position: absolute;\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n\n.card[_ngcontent-%COMP%] {\n  height: 370px;\n  margin-top: auto;\n  margin-bottom: auto;\n  width: 400px;\n  background-color: rgba(0, 0, 0, 0.5) !important;\n}\n\n.social_icon[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 60px;\n  margin-left: 10px;\n  color: #FFC312;\n}\n\n.social_icon[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:hover {\n  color: white;\n  cursor: pointer;\n}\n\n.card-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #00b3ff;\n}\n\n.social_icon[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 20px;\n  top: -45px;\n}\n\n.input-group-prepend[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  width: 50px;\n  background: -webkit-linear-gradient(90deg, #16222A 10%, #3A6073 90%);\n  color: #405993;\n  border: 0 !important;\n}\n\n.fa-user[_ngcontent-%COMP%]:hover, .fa-unlock[_ngcontent-%COMP%]:hover {\n  color: #00b3ff !important;\n}\n\ninput[_ngcontent-%COMP%]:focus {\n  outline: 0 0 0 0  !important;\n  box-shadow: 0 0 0 0 !important;\n}\n\n.remember[_ngcontent-%COMP%] {\n  color: #00b3ff;\n}\n\n.remember[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  margin-left: 15px;\n  margin-right: 5px;\n}\n\n.register_btn[_ngcontent-%COMP%] {\n  border: 0 solid;\n  box-shadow: inset 0 0 20px rgba(255, 255, 255, 0);\n  outline: 1px solid;\n  outline-color: rgba(255, 255, 255, 0.5);\n  outline-offset: 0px;\n  text-shadow: none;\n  color: white;\n  transition: all 1250ms cubic-bezier(0.19, 1, 0.22, 1);\n  background: -webkit-linear-gradient(90deg, #16222A 10%, #405993 90%);\n  width: 100px;\n}\n\n.register_btn[_ngcontent-%COMP%]:hover:focus {\n  border: 2px solid;\n  border-radius: 2px;\n  box-shadow: inset 0 0 20px rgba(255, 255, 255, 0.5), 0 0 20px rgba(255, 255, 255, 0.2);\n  outline-color: rgba(255, 255, 255, 0);\n  outline-offset: 5px;\n  text-shadow: 1px 1px 2px #427388;\n  background: #00b3ff;\n}\n\n.links[_ngcontent-%COMP%] {\n  color: #00b3ff;\n}\n\na[_ngcontent-%COMP%] {\n  margin-top: 7px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvQzpcXFVzZXJzXFxkYXZpZFxcQ29kZVxcY29kaW5nTGFiXFxjb2RpbmdCbG9nL3NyY1xcYXBwXFxyZWdpc3RlclxccmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBRUkscUJBQXFCO0VBQ3JCLGdCQUFnQjtFQUNoQixlQUFjO0VBQ2QsTUFBTTtFQUFFLFFBQVE7RUFBRSxTQUFTO0VBQUUsT0FBTztFQUNwQyxrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLDRCQUE0QjtBQ0VoQzs7QURDSTtFQUNBLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWiwrQ0FBNEM7QUNFaEQ7O0FEQ0k7RUFDQSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGNBQWM7QUNFbEI7O0FEQ0k7RUFDQSxZQUFZO0VBQ1osZUFBZTtBQ0VuQjs7QURDSTtFQUNBLGNBQWE7QUNFakI7O0FEQ0k7RUFDQSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFVBQVU7QUNFZDs7QURDSTtFQUNBLFdBQVc7RUFDWCxvRUFBb0U7RUFDcEUsY0FBYztFQUNkLG9CQUFtQjtBQ0V2Qjs7QURDSTtFQUNJLHlCQUF3QjtBQ0VoQzs7QURFSTtFQUNBLDRCQUE0QjtFQUM1Qiw4QkFBOEI7QUNDbEM7O0FER0k7RUFDQSxjQUFhO0FDQWpCOztBREdJO0VBRUEsV0FBVztFQUNYLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsaUJBQWlCO0FDRHJCOztBRElJO0VBQ0EsZUFBZTtFQUNmLGlEQUFpRDtFQUNqRCxrQkFBa0I7RUFDbEIsdUNBQXNDO0VBQ3RDLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLHFEQUFxRDtFQUNyRCxvRUFBb0U7RUFDcEUsWUFBWTtBQ0RoQjs7QURJSTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsc0ZBQW9GO0VBQ3BGLHFDQUFxQztFQUNyQyxtQkFBbUI7RUFDbkIsZ0NBQWdDO0VBQ2xDLG1CQUFtQjtBQ0R2Qjs7QURNSTtFQUNBLGNBQWM7QUNIbEI7O0FETUk7RUFDQyxlQUFlO0FDSHBCIiwiZmlsZSI6InNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmNvbnRhaW5lcntcclxuXHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gICAgbWluLXdpZHRoOjEwMCU7IFxyXG4gICAgdG9wOiAwOyByaWdodDogMDsgYm90dG9tOiAwOyBsZWZ0OiAwOyBcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0OyBcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmNhcmR7XHJcbiAgICBoZWlnaHQ6IDM3MHB4O1xyXG4gICAgbWFyZ2luLXRvcDogYXV0bztcclxuICAgIG1hcmdpbi1ib3R0b206IGF1dG87XHJcbiAgICB3aWR0aDogNDAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNSkgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnNvY2lhbF9pY29uIHNwYW57XHJcbiAgICBmb250LXNpemU6IDYwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIGNvbG9yOiAjRkZDMzEyO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuc29jaWFsX2ljb24gc3Bhbjpob3ZlcntcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmNhcmQtaGVhZGVyIGgze1xyXG4gICAgY29sb3I6IzAwYjNmZjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnNvY2lhbF9pY29ue1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDIwcHg7XHJcbiAgICB0b3A6IC00NXB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuaW5wdXQtZ3JvdXAtcHJlcGVuZCBzcGFue1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCg5MGRlZywgIzE2MjIyQSAxMCUsICMzQTYwNzMgOTAlKTtcclxuICAgIGNvbG9yOiAjNDA1OTkzO1xyXG4gICAgYm9yZGVyOjAgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmZhLXVzZXI6aG92ZXIsIC5mYS11bmxvY2s6aG92ZXJ7XHJcbiAgICAgICAgY29sb3I6ICMwMGIzZmYhaW1wb3J0YW50O1xyXG4gICAgICAgXHJcbiAgICB9XHJcbiAgICBcclxuICAgIGlucHV0OmZvY3Vze1xyXG4gICAgb3V0bGluZTogMCAwIDAgMCAgIWltcG9ydGFudDtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAwIDAgIWltcG9ydGFudDtcclxuICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAucmVtZW1iZXJ7XHJcbiAgICBjb2xvcjojMDBiM2ZmO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAucmVtZW1iZXIgaW5wdXRcclxuICAgIHtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnJlZ2lzdGVyX2J0bntcclxuICAgIGJvcmRlcjogMCBzb2xpZDtcclxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAyMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XHJcbiAgICBvdXRsaW5lOiAxcHggc29saWQ7XHJcbiAgICBvdXRsaW5lLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC41KTtcclxuICAgIG91dGxpbmUtb2Zmc2V0OiAwcHg7XHJcbiAgICB0ZXh0LXNoYWRvdzogbm9uZTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAxMjUwbXMgY3ViaWMtYmV6aWVyKDAuMTksIDEsIDAuMjIsIDEpO1xyXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoOTBkZWcsICMxNjIyMkEgMTAlLCAjNDA1OTkzIDkwJSk7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5yZWdpc3Rlcl9idG46aG92ZXI6Zm9jdXN7XHJcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAyMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjUpLCAwIDAgMjBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIC4yKTtcclxuICAgICAgb3V0bGluZS1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcclxuICAgICAgb3V0bGluZS1vZmZzZXQ6IDVweDtcclxuICAgICAgdGV4dC1zaGFkb3c6IDFweCAxcHggMnB4ICM0MjczODg7IFxyXG4gICAgYmFja2dyb3VuZDogIzAwYjNmZjtcclxuICAgIH1cclxuXHJcbiAgICBcclxuICAgIFxyXG4gICAgLmxpbmtze1xyXG4gICAgY29sb3I6ICMwMGIzZmY7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGF7XHJcbiAgICAgbWFyZ2luLXRvcDogN3B4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAiLCIuY29udGFpbmVyIHtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBtaW4taGVpZ2h0OiAxMDAlO1xuICBtaW4td2lkdGg6IDEwMCU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufVxuXG4uY2FyZCB7XG4gIGhlaWdodDogMzcwcHg7XG4gIG1hcmdpbi10b3A6IGF1dG87XG4gIG1hcmdpbi1ib3R0b206IGF1dG87XG4gIHdpZHRoOiA0MDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpICFpbXBvcnRhbnQ7XG59XG5cbi5zb2NpYWxfaWNvbiBzcGFuIHtcbiAgZm9udC1zaXplOiA2MHB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgY29sb3I6ICNGRkMzMTI7XG59XG5cbi5zb2NpYWxfaWNvbiBzcGFuOmhvdmVyIHtcbiAgY29sb3I6IHdoaXRlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5jYXJkLWhlYWRlciBoMyB7XG4gIGNvbG9yOiAjMDBiM2ZmO1xufVxuXG4uc29jaWFsX2ljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAyMHB4O1xuICB0b3A6IC00NXB4O1xufVxuXG4uaW5wdXQtZ3JvdXAtcHJlcGVuZCBzcGFuIHtcbiAgd2lkdGg6IDUwcHg7XG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjMTYyMjJBIDEwJSwgIzNBNjA3MyA5MCUpO1xuICBjb2xvcjogIzQwNTk5MztcbiAgYm9yZGVyOiAwICFpbXBvcnRhbnQ7XG59XG5cbi5mYS11c2VyOmhvdmVyLCAuZmEtdW5sb2NrOmhvdmVyIHtcbiAgY29sb3I6ICMwMGIzZmYgIWltcG9ydGFudDtcbn1cblxuaW5wdXQ6Zm9jdXMge1xuICBvdXRsaW5lOiAwIDAgMCAwICAhaW1wb3J0YW50O1xuICBib3gtc2hhZG93OiAwIDAgMCAwICFpbXBvcnRhbnQ7XG59XG5cbi5yZW1lbWJlciB7XG4gIGNvbG9yOiAjMDBiM2ZmO1xufVxuXG4ucmVtZW1iZXIgaW5wdXQge1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBtYXJnaW4tbGVmdDogMTVweDtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG5cbi5yZWdpc3Rlcl9idG4ge1xuICBib3JkZXI6IDAgc29saWQ7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAyMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XG4gIG91dGxpbmU6IDFweCBzb2xpZDtcbiAgb3V0bGluZS1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xuICBvdXRsaW5lLW9mZnNldDogMHB4O1xuICB0ZXh0LXNoYWRvdzogbm9uZTtcbiAgY29sb3I6IHdoaXRlO1xuICB0cmFuc2l0aW9uOiBhbGwgMTI1MG1zIGN1YmljLWJlemllcigwLjE5LCAxLCAwLjIyLCAxKTtcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoOTBkZWcsICMxNjIyMkEgMTAlLCAjNDA1OTkzIDkwJSk7XG4gIHdpZHRoOiAxMDBweDtcbn1cblxuLnJlZ2lzdGVyX2J0bjpob3Zlcjpmb2N1cyB7XG4gIGJvcmRlcjogMnB4IHNvbGlkO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAyMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSwgMCAwIDIwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xuICBvdXRsaW5lLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDApO1xuICBvdXRsaW5lLW9mZnNldDogNXB4O1xuICB0ZXh0LXNoYWRvdzogMXB4IDFweCAycHggIzQyNzM4ODtcbiAgYmFja2dyb3VuZDogIzAwYjNmZjtcbn1cblxuLmxpbmtzIHtcbiAgY29sb3I6ICMwMGIzZmY7XG59XG5cbmEge1xuICBtYXJnaW4tdG9wOiA3cHg7XG59XG4iXX0= */"] });
    return RegisterComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-register',
                templateUrl: './register.component.html',
                styleUrls: ['./register.component.scss'],
            }]
    }], function () { return [{ type: _service_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/root/root.component.ts":
/*!****************************************!*\
  !*** ./src/app/root/root.component.ts ***!
  \****************************************/
/*! exports provided: RootComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RootComponent", function() { return RootComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");



var RootComponent = /** @class */ (function () {
    function RootComponent() {
    }
    RootComponent.ɵfac = function RootComponent_Factory(t) { return new (t || RootComponent)(); };
    RootComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RootComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function RootComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], encapsulation: 2 });
    return RootComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RootComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './root.component.html'
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/service/auth-guard.service.ts":
/*!***********************************************!*\
  !*** ./src/app/service/auth-guard.service.ts ***!
  \***********************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user.service */ "./src/app/service/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");




var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(loginService, router) {
        this.loginService = loginService;
        this.router = router;
    }
    AuthGuardService.prototype.canActivate = function () {
        if (!this.loginService.isLoggedIn()) {
            this.router.navigate(['/']);
            return false;
        }
        return true;
    };
    AuthGuardService.ɵfac = function AuthGuardService_Factory(t) { return new (t || AuthGuardService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
    AuthGuardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuardService, factory: AuthGuardService.ɵfac });
    return AuthGuardService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuardService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/service/common.service.ts":
/*!*******************************************!*\
  !*** ./src/app/service/common.service.ts ***!
  \*******************************************/
/*! exports provided: CommonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonService", function() { return CommonService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/internal/Subject */ "./node_modules/rxjs/internal/Subject.js");
/* harmony import */ var rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _models_post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/post */ "./src/app/models/post.ts");




var CommonService = /** @class */ (function () {
    function CommonService() {
        //I have declared a Subject called postAdded_Observable to keep track of the new blog post addition to the database. Whenever 
        //a new blog post is added to the database,  call the notifyPostAddition method, which will notify the subscribers about the update.
        this.postAdded_Observable = new rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        //to define an observable to keep track of when the edit button is clicked.
        this.postEdit_Observable = new rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.post_to_be_edited = new _models_post__WEBPACK_IMPORTED_MODULE_2__["Post"]();
    }
    CommonService.prototype.notifyPostAddition = function () {
        this.postAdded_Observable.next();
    };
    CommonService.prototype.notifyPostEdit = function () {
        this.postEdit_Observable.next();
    };
    CommonService.prototype.setPostToEdit = function (post) {
        this.post_to_be_edited = post;
        this.notifyPostEdit();
    };
    CommonService.ɵfac = function CommonService_Factory(t) { return new (t || CommonService)(); };
    CommonService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CommonService, factory: CommonService.ɵfac });
    return CommonService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CommonService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/service/user.service.ts":
/*!*****************************************!*\
  !*** ./src/app/service/user.service.ts ***!
  \*****************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");





var UserService = /** @class */ (function () {
    function UserService(http, router) {
        this.http = http;
        this.router = router;
    }
    UserService.prototype.saveToken = function (token) {
        localStorage.setItem('usertoken', token);
        this.token = token;
    };
    UserService.prototype.getToken = function () {
        if (!this.token) {
            this.token = localStorage.getItem('usertoken');
        }
        return this.token;
    };
    UserService.prototype.getUserDetails = function () {
        var token = this.getToken();
        var payload;
        if (token) {
            payload = token.split('.')[1];
            payload = window.atob(payload);
            return JSON.parse(payload);
        }
        else {
            return null;
        }
    };
    UserService.prototype.isLoggedIn = function () {
        var user = this.getUserDetails();
        if (user) {
            return user.exp > Date.now() / 1000;
        }
        else {
            return false;
        }
    };
    //Register a new user - add him to the db
    UserService.prototype.register = function (user) {
        var _this = this;
        var base = this.http.post("http://127.0.0.1:3000/users/register", user);
        var request = base.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (data) {
            if (data.token) {
                _this.saveToken(data.token);
            }
            return data;
        }));
        return request;
    };
    //login already an existing user 
    UserService.prototype.request = function (method, type, user) {
        var _this = this;
        var base;
        if (method === 'post') {
            base = this.http.post("http://127.0.0.1:3000/users/login", user);
        }
        var request = base.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (data) {
            if (data.token) {
                _this.saveToken(data.token);
            }
            return data;
        }));
        return request;
    };
    UserService.prototype.validateLogin = function (user) {
        return this.request('post', 'login', user);
    };
    UserService.prototype.profile = function () {
        return this.http.get("http://127.0.0.1:3000/users/home", {
            headers: { Authorization: " " + this.getToken() }
        });
    };
    UserService.prototype.logout = function () {
        this.token = '';
        window.localStorage.removeItem('usertoken');
        this.router.navigateByUrl('/');
    };
    UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
    UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac });
    return UserService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/show-post/show-post.component.ts":
/*!**************************************************!*\
  !*** ./src/app/show-post/show-post.component.ts ***!
  \**************************************************/
/*! exports provided: ShowPostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowPostComponent", function() { return ShowPostComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _show_post_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./show-post.service */ "./src/app/show-post/show-post.service.ts");
/* harmony import */ var _service_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/common.service */ "./src/app/service/common.service.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/modal/fesm5/ngx-bootstrap-modal.js");






var _c0 = ["closeBtn"];
function ShowPostComponent_ng_template_17_Template(rf, ctx) { if (rf & 1) {
    var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Delete Post");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Are you sure ? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 14, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShowPostComponent_ng_template_17_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.unsetDelete(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShowPostComponent_ng_template_17_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.deletePost(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
;
var ShowPostComponent = /** @class */ (function () {
    function ShowPostComponent(showPostService, commonService, modalService) {
        this.showPostService = showPostService;
        this.commonService = commonService;
        this.modalService = modalService;
    }
    ShowPostComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getAllPost();
        this.commonService.postAdded_Observable.subscribe(function (res) {
            _this.getAllPost();
        });
    };
    ShowPostComponent.prototype.setDelete = function (template, post) {
        this.modalRef = this.modalService.show(template);
        this.post_to_delete = post;
    };
    ShowPostComponent.prototype.unsetDelete = function () {
        this.post_to_delete = null;
    };
    ShowPostComponent.prototype.getAllPost = function () {
        var _this = this;
        this.showPostService.getAllPost().subscribe(function (result) {
            console.log('result is ', result);
            _this.posts = result['data'];
        });
    };
    ShowPostComponent.prototype.editPost = function (post) {
        this.commonService.setPostToEdit(post);
    };
    ShowPostComponent.prototype.deletePost = function () {
        var _this = this;
        this.showPostService.deletePost(this.post_to_delete._id).subscribe(function (res) {
            _this.getAllPost();
        });
    };
    ShowPostComponent.ɵfac = function ShowPostComponent_Factory(t) { return new (t || ShowPostComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_show_post_service__WEBPACK_IMPORTED_MODULE_1__["ShowPostService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalService"])); };
    ShowPostComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ShowPostComponent, selectors: [["app-show-post"]], viewQuery: function ShowPostComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        } if (rf & 2) {
            var _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.closeBtn = _t.first);
        } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_show_post_service__WEBPACK_IMPORTED_MODULE_1__["ShowPostService"]])], decls: 19, vars: 0, consts: [[1, "list-group"], ["href", "https://twitter.com/LidiaDa81393011", 1, "list-group-item", "list-group-item-action", "flex-column", "align-items-start"], [1, "d-flex", "w-100", "justify-content-between"], [1, "mb-1"], [1, "text-muted"], [1, "list-group-item", "list-group-item-action", "flex-column", "align-items-start"], ["template", ""], [1, "modal-content"], [1, "modal-header"], ["id", "exampleModalLabel", 1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-secondary", 3, "click"], ["closeBtn", ""], ["type", "button", 1, "btn", "btn-primary", 3, "click"]], template: function ShowPostComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Growing Tech Twitter Network");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "small", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "2 days ago");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Hello to the tech world! I would love to grow my network and get to know great talented developers to learn, communicate and cooperate together. Click on this post and check my Twitter Diary on my daily coding journey. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h5", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "The idea for this blog");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "small");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "3 days ago");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Hello! My name is Lidia. My initial plan was to create a Portfolio page. However, the more I thought on the structure, the more I realized that I would like to have a blog in addition to my portfolio. I am working on the content for now and plan to launch the official blog on tech topics. --COMING SOON--UNDER CONSTRUCTION ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ShowPostComponent_ng_template_17_Template, 15, 0, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, styles: ["i[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\na[_ngcontent-%COMP%]:-webkit-any-link {\n  cursor: default;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hvdy1wb3N0L0M6XFxVc2Vyc1xcZGF2aWRcXENvZGVcXGNvZGluZ0xhYlxcY29kaW5nQmxvZy9zcmNcXGFwcFxcc2hvdy1wb3N0XFxzaG93LXBvc3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3Nob3ctcG9zdC9zaG93LXBvc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxlQUFlO0FDQ2hCOztBRENBO0VBQ0MsZUFBZTtBQ0VoQiIsImZpbGUiOiJzcmMvYXBwL3Nob3ctcG9zdC9zaG93LXBvc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpe1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5hOi13ZWJraXQtYW55LWxpbmsge1xyXG4gY3Vyc29yOiBkZWZhdWx0O1xyXG59IiwiaSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuYTotd2Via2l0LWFueS1saW5rIHtcbiAgY3Vyc29yOiBkZWZhdWx0O1xufVxuIl19 */"] });
    return ShowPostComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShowPostComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-show-post',
                templateUrl: './show-post.component.html',
                styleUrls: ['./show-post.component.scss'],
                providers: [_show_post_service__WEBPACK_IMPORTED_MODULE_1__["ShowPostService"]]
            }]
    }], function () { return [{ type: _show_post_service__WEBPACK_IMPORTED_MODULE_1__["ShowPostService"] }, { type: _service_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"] }, { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalService"] }]; }, { closeBtn: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['closeBtn']
        }] }); })();


/***/ }),

/***/ "./src/app/show-post/show-post.service.ts":
/*!************************************************!*\
  !*** ./src/app/show-post/show-post.service.ts ***!
  \************************************************/
/*! exports provided: ShowPostService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowPostService", function() { return ShowPostService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");



var ShowPostService = /** @class */ (function () {
    function ShowPostService(http) {
        this.http = http;
    }
    ShowPostService.prototype.getAllPost = function () {
        console.log("is this here??");
        return this.http.post('/api/post/getAllPost', {});
    };
    ShowPostService.prototype.deletePost = function (id) {
        return this.http.post('/api/post/deletePost', { id: id });
    };
    ShowPostService.ɵfac = function ShowPostService_Factory(t) { return new (t || ShowPostService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
    ShowPostService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ShowPostService, factory: ShowPostService.ɵfac });
    return ShowPostService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShowPostService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
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
var environment = {
    production: true
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\david\Code\codingLab\codingBlog\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map