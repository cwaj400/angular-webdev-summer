(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-white-board></app-white-board>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'ang-webdev-angelljames';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _white_board_white_board_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./white-board/white-board.component */ "./src/app/white-board/white-board.component.ts");
/* harmony import */ var _services_course_service_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/course.service.client */ "./src/app/services/course.service.client.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _course_navigator_course_navigator_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./course-navigator/course-navigator.component */ "./src/app/course-navigator/course-navigator.component.ts");
/* harmony import */ var _enrollment_enrollment_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./enrollment/enrollment.component */ "./src/app/enrollment/enrollment.component.ts");
/* harmony import */ var _sections_sections_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./sections/sections.component */ "./src/app/sections/sections.component.ts");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _services_section_service_client__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/section.service.client */ "./src/app/services/section.service.client.ts");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _white_board_white_board_component__WEBPACK_IMPORTED_MODULE_4__["WhiteBoardComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_8__["ProfileComponent"],
                _course_navigator_course_navigator_component__WEBPACK_IMPORTED_MODULE_9__["CourseNavigatorComponent"],
                _enrollment_enrollment_component__WEBPACK_IMPORTED_MODULE_10__["EnrollmentComponent"],
                _sections_sections_component__WEBPACK_IMPORTED_MODULE_11__["SectionsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_14__["routing"]
            ],
            providers: [_services_course_service_client__WEBPACK_IMPORTED_MODULE_5__["CourseServiceClient"], _services_user_service_client__WEBPACK_IMPORTED_MODULE_12__["UserServiceClient"], _services_section_service_client__WEBPACK_IMPORTED_MODULE_13__["SectionServiceClient"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _course_navigator_course_navigator_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./course-navigator/course-navigator.component */ "./src/app/course-navigator/course-navigator.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _sections_sections_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sections/sections.component */ "./src/app/sections/sections.component.ts");
/* harmony import */ var _enrollment_enrollment_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./enrollment/enrollment.component */ "./src/app/enrollment/enrollment.component.ts");







var appRoutes = [
    { path: 'enrollments', component: _enrollment_enrollment_component__WEBPACK_IMPORTED_MODULE_6__["EnrollmentComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"] },
    { path: 'profile', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_4__["ProfileComponent"] },
    { path: 'courses', component: _course_navigator_course_navigator_component__WEBPACK_IMPORTED_MODULE_1__["CourseNavigatorComponent"] },
    { path: 'sections', component: _sections_sections_component__WEBPACK_IMPORTED_MODULE_5__["SectionsComponent"] }
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(appRoutes);


/***/ }),

/***/ "./src/app/course-navigator/course-navigator.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/course-navigator/course-navigator.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/course-navigator/course-navigator.component.html":
/*!******************************************************************!*\
  !*** ./src/app/course-navigator/course-navigator.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"row\">\n  <div class=\"col-4\">\n    <h2>Courses</h2>\n    <ul class=\"list-group\">\n      <li (click)=\"selectCourse(course)\"\n          [ngClass]=\"{'active': course.id == selectedCourse.id}\"\n          *ngFor=\"let course of courses\"\n          class=\"list-group-item\">\n        {{course.title}}\n      </li>\n    </ul>\n  </div>\n  <div class=\"col-4\">\n    <h2>Modules</h2>\n    <ul class=\"list-group\">\n      <li (click)=\"selectModule(module)\"\n          *ngFor=\"let module of selectedCourse.modules\"\n          class=\"list-group-item\">\n        {{module.title}}\n      </li>\n    </ul>\n  </div>\n  <div class=\"col-4\">\n    <h2>Lessons</h2>\n    <ul class=\"list-group\">\n      <li *ngFor=\"let lesson of selectedModule.lessons\"\n          class=\"list-group-item\">\n        {{lesson.title}}\n      </li>\n    </ul>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/course-navigator/course-navigator.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/course-navigator/course-navigator.component.ts ***!
  \****************************************************************/
/*! exports provided: CourseNavigatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseNavigatorComponent", function() { return CourseNavigatorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_course_service_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/course.service.client */ "./src/app/services/course.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CourseNavigatorComponent = /** @class */ (function () {
    function CourseNavigatorComponent(courseService) {
        this.courseService = courseService;
        this.courses = [];
        this.selectedCourse = {};
        this.selectedModule = {};
    }
    CourseNavigatorComponent.prototype.selectCourse = function (course) {
        this.selectedCourse = course;
        this.selectedModule = {};
    };
    CourseNavigatorComponent.prototype.selectModule = function (module) {
        this.selectedModule = module;
    };
    CourseNavigatorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.courseService
            .findAllCourses()
            .then(function (courses) { return _this.courses = courses; });
    };
    CourseNavigatorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-course-navigator',
            template: __webpack_require__(/*! ./course-navigator.component.html */ "./src/app/course-navigator/course-navigator.component.html"),
            styles: [__webpack_require__(/*! ./course-navigator.component.css */ "./src/app/course-navigator/course-navigator.component.css")]
        }),
        __metadata("design:paramtypes", [_services_course_service_client__WEBPACK_IMPORTED_MODULE_1__["CourseServiceClient"]])
    ], CourseNavigatorComponent);
    return CourseNavigatorComponent;
}());



/***/ }),

/***/ "./src/app/enrollment/enrollment.component.css":
/*!*****************************************************!*\
  !*** ./src/app/enrollment/enrollment.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/enrollment/enrollment.component.html":
/*!******************************************************!*\
  !*** ./src/app/enrollment/enrollment.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Enrollments</h2>\n<ul class=\"list-group\">\n  <li *ngFor=\"let section of sections\" class=\"list-group-item\">\n    {{section.title}} (seats: 24)\n    <button class=\"float-right\" (click)=\"enroll(section._id)\">Enroll</button>\n  </li>\n</ul>\n"

/***/ }),

/***/ "./src/app/enrollment/enrollment.component.ts":
/*!****************************************************!*\
  !*** ./src/app/enrollment/enrollment.component.ts ***!
  \****************************************************/
/*! exports provided: EnrollmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnrollmentComponent", function() { return EnrollmentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_section_service_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/section.service.client */ "./src/app/services/section.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EnrollmentComponent = /** @class */ (function () {
    function EnrollmentComponent(sectionService) {
        var _this = this;
        this.sectionService = sectionService;
        this.sections = [];
        this.enroll = function (sectionId) {
            return _this.sectionService
                .enroll(sectionId);
        };
    }
    EnrollmentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sectionService
            .findAllSections()
            .then(function (sections) { return _this.sections = sections; });
    };
    EnrollmentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-enrollment',
            template: __webpack_require__(/*! ./enrollment.component.html */ "./src/app/enrollment/enrollment.component.html"),
            styles: [__webpack_require__(/*! ./enrollment.component.css */ "./src/app/enrollment/enrollment.component.css")]
        }),
        __metadata("design:paramtypes", [_services_section_service_client__WEBPACK_IMPORTED_MODULE_1__["SectionServiceClient"]])
    ], EnrollmentComponent);
    return EnrollmentComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<h2>Login</h2>\n<input [(ngModel)]=\"username\"\n       class=\"form-control\"/>\n<input [(ngModel)]=\"password\"\n       class=\"form-control\"/>\n<button (click)=\"login(username, password)\"\n        class=\"btn btn-primary btn-block\">\n  Login\n</button>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, userService) {
        var _this = this;
        this.router = router;
        this.userService = userService;
        this.login = function (username, password) {
            var user = {
                username: username,
                password: password
            };
            _this.userService.login(user)
                .then(function (u) { return _this.router.navigate(['profile']); });
        };
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_user_service_client__WEBPACK_IMPORTED_MODULE_1__["UserServiceClient"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.css":
/*!***********************************************!*\
  !*** ./src/app/profile/profile.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/profile/profile.component.html":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  profile works!\n</p>\n"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProfileComponent = /** @class */ (function () {
    function ProfileComponent() {
    }
    ProfileComponent.prototype.ngOnInit = function () {
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  register works!\n</p>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RegisterComponent = /** @class */ (function () {
    function RegisterComponent() {
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/sections/sections.component.css":
/*!*************************************************!*\
  !*** ./src/app/sections/sections.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/sections/sections.component.html":
/*!**************************************************!*\
  !*** ./src/app/sections/sections.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  sections works!\n</p>\n"

/***/ }),

/***/ "./src/app/sections/sections.component.ts":
/*!************************************************!*\
  !*** ./src/app/sections/sections.component.ts ***!
  \************************************************/
/*! exports provided: SectionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionsComponent", function() { return SectionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SectionsComponent = /** @class */ (function () {
    function SectionsComponent() {
    }
    SectionsComponent.prototype.ngOnInit = function () {
    };
    SectionsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sections',
            template: __webpack_require__(/*! ./sections.component.html */ "./src/app/sections/sections.component.html"),
            styles: [__webpack_require__(/*! ./sections.component.css */ "./src/app/sections/sections.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SectionsComponent);
    return SectionsComponent;
}());



/***/ }),

/***/ "./src/app/services/course.service.client.ts":
/*!***************************************************!*\
  !*** ./src/app/services/course.service.client.ts ***!
  \***************************************************/
/*! exports provided: CourseServiceClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseServiceClient", function() { return CourseServiceClient; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CourseServiceClient = /** @class */ (function () {
    function CourseServiceClient() {
    }
    CourseServiceClient.prototype.findAllCourses = function () {
        return fetch('http://localhost:8080/api/course')
            .then(function (response) { return response.json(); });
    };
    CourseServiceClient = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], CourseServiceClient);
    return CourseServiceClient;
}());



/***/ }),

/***/ "./src/app/services/section.service.client.ts":
/*!****************************************************!*\
  !*** ./src/app/services/section.service.client.ts ***!
  \****************************************************/
/*! exports provided: SectionServiceClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionServiceClient", function() { return SectionServiceClient; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SectionServiceClient = /** @class */ (function () {
    function SectionServiceClient() {
        this.enroll = function (sectionId) {
            return fetch('http://localhost:3000/api/section/' + sectionId + '/enroll', {
                method: 'put',
                credentials: 'include'
            });
        };
        this.findAllSections = function () {
            return fetch('http://localhost:3000/api/section')
                .then(function (response) { return response.json(); });
        };
        this.findSectionsForCourse = function (courseId) {
            return fetch('http://localhost:3000/api/course/' + courseId + '/section')
                .then(function (response) { return response.json(); });
        };
        this.createSection = function (section) {
            return fetch('http://localhost:3000/api/section', {
                method: 'post',
                headers: {
                    'content-type': 'application/json'
                },
                credentials: 'include',
                body: JSON.stringify(section)
            })
                .then(function (response) { return response.json(); });
        };
    }
    SectionServiceClient = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], SectionServiceClient);
    return SectionServiceClient;
}());



/***/ }),

/***/ "./src/app/services/user.service.client.ts":
/*!*************************************************!*\
  !*** ./src/app/services/user.service.client.ts ***!
  \*************************************************/
/*! exports provided: UserServiceClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserServiceClient", function() { return UserServiceClient; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var UserServiceClient = /** @class */ (function () {
    function UserServiceClient() {
        this.login = function (user) {
            return fetch('http://localhost:3000/login', {
                method: 'post',
                credentials: 'include',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(user)
            });
        };
        this.currentUser = function () {
            return fetch('http://localhost:3000/currentUser', {
                credentials: 'include'
            }).then(function (response) { return response.json(); });
        };
    }
    UserServiceClient = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], UserServiceClient);
    return UserServiceClient;
}());



/***/ }),

/***/ "./src/app/white-board/white-board.component.css":
/*!*******************************************************!*\
  !*** ./src/app/white-board/white-board.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/white-board/white-board.component.html":
/*!********************************************************!*\
  !*** ./src/app/white-board/white-board.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <h1>Welcome to WhiteBoard</h1>\n\n  <a routerLink=\"enrollments\">Enrollments</a> |\n  <a routerLink=\"sections\">Sections</a> |\n  <a routerLink=\"courses\">Course Navigator</a> |\n  <a routerLink=\"login\">Login</a> |\n  <a routerLink=\"register\">Register</a> |\n  <a routerLink=\"profile\">Profile</a>\n\n  <router-outlet></router-outlet>\n\n</div>\n\n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/white-board/white-board.component.ts":
/*!******************************************************!*\
  !*** ./src/app/white-board/white-board.component.ts ***!
  \******************************************************/
/*! exports provided: WhiteBoardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WhiteBoardComponent", function() { return WhiteBoardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WhiteBoardComponent = /** @class */ (function () {
    function WhiteBoardComponent() {
    }
    WhiteBoardComponent.prototype.ngOnInit = function () {
    };
    WhiteBoardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-white-board',
            template: __webpack_require__(/*! ./white-board.component.html */ "./src/app/white-board/white-board.component.html"),
            styles: [__webpack_require__(/*! ./white-board.component.css */ "./src/app/white-board/white-board.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], WhiteBoardComponent);
    return WhiteBoardComponent;
}());

// TODO:different areas of main page.
// TODO: grid area?
// TODO: node js, can it be in same folder?
// TODO: selection fix.


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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/williamangell-james/Desktop/husky_work/2018/Summer2/web-dev/ang-webdev-angelljames/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map