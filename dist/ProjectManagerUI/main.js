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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ui_user_user_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui/user/user.component */ "./src/app/ui/user/user.component.ts");
/* harmony import */ var _ui_project_project_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ui/project/project.component */ "./src/app/ui/project/project.component.ts");
/* harmony import */ var _ui_task_viewtask_viewtask_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ui/task/viewtask/viewtask.component */ "./src/app/ui/task/viewtask/viewtask.component.ts");
/* harmony import */ var _ui_task_addtask_addtask_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ui/task/addtask/addtask.component */ "./src/app/ui/task/addtask/addtask.component.ts");







var routes = [
    { path: '', redirectTo: '/user', pathMatch: 'full' },
    { path: 'user', component: _ui_user_user_component__WEBPACK_IMPORTED_MODULE_3__["UserComponent"] },
    { path: 'project', component: _ui_project_project_component__WEBPACK_IMPORTED_MODULE_4__["ProjectComponent"] },
    { path: 'task', component: _ui_task_viewtask_viewtask_component__WEBPACK_IMPORTED_MODULE_5__["ViewtaskComponent"] },
    { path: 'addtask', component: _ui_task_addtask_addtask_component__WEBPACK_IMPORTED_MODULE_6__["AddtaskComponent"] },
    { path: 'edittask/:id', component: _ui_task_addtask_addtask_component__WEBPACK_IMPORTED_MODULE_6__["AddtaskComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-sm bg-dark navbar-dark\">\n  <a class=\"navbar-brand\" href=\"#\">Project Manager</a>\n  <button type=\"button\" class=\"navbar-toggler\" data-toggle=\"collapse\" (click)=\"toggleNavbar()\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" [ngClass]=\"{ 'show': navbarOpen }\">\n    <ul class=\"navbar-nav\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"/user\">User</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"/project\">Project</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"/task\">Task</a>\n      </li>\n    </ul>\n  </div>\n</nav>\n<br />\n<div class=\"container-fluid\">\n  <router-outlet></router-outlet>\n</div>"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Project Manager';
        this.navbarOpen = false;
    }
    AppComponent.prototype.toggleNavbar = function () {
        this.navbarOpen = !this.navbarOpen;
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            preserveWhitespaces: true,
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _ui_user_user_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ui/user/user.component */ "./src/app/ui/user/user.component.ts");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _ui_project_project_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ui/project/project.component */ "./src/app/ui/project/project.component.ts");
/* harmony import */ var _ui_shared_messagedialog_messagedialog_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ui/shared/messagedialog/messagedialog.component */ "./src/app/ui/shared/messagedialog/messagedialog.component.ts");
/* harmony import */ var _ui_shared_userdialog_userdialog_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ui/shared/userdialog/userdialog.component */ "./src/app/ui/shared/userdialog/userdialog.component.ts");
/* harmony import */ var _pipe_filter_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pipe/filter.pipe */ "./src/app/pipe/filter.pipe.ts");
/* harmony import */ var _pipe_orderby_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pipe/orderby.pipe */ "./src/app/pipe/orderby.pipe.ts");
/* harmony import */ var _ui_task_addtask_addtask_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./ui/task/addtask/addtask.component */ "./src/app/ui/task/addtask/addtask.component.ts");
/* harmony import */ var _ui_task_viewtask_viewtask_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./ui/task/viewtask/viewtask.component */ "./src/app/ui/task/viewtask/viewtask.component.ts");
/* harmony import */ var _ui_shared_projectdialog_projectdialog_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./ui/shared/projectdialog/projectdialog.component */ "./src/app/ui/shared/projectdialog/projectdialog.component.ts");
/* harmony import */ var _ui_shared_parenttaskdialog_parenttaskdialog_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./ui/shared/parenttaskdialog/parenttaskdialog.component */ "./src/app/ui/shared/parenttaskdialog/parenttaskdialog.component.ts");




















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _ui_user_user_component__WEBPACK_IMPORTED_MODULE_7__["UserComponent"],
                _ui_project_project_component__WEBPACK_IMPORTED_MODULE_11__["ProjectComponent"],
                _ui_shared_messagedialog_messagedialog_component__WEBPACK_IMPORTED_MODULE_12__["MessagedialogComponent"],
                _ui_shared_userdialog_userdialog_component__WEBPACK_IMPORTED_MODULE_13__["UserdialogComponent"],
                _pipe_filter_pipe__WEBPACK_IMPORTED_MODULE_14__["FilterPipe"],
                _pipe_orderby_pipe__WEBPACK_IMPORTED_MODULE_15__["OrderbyPipe"],
                _ui_task_addtask_addtask_component__WEBPACK_IMPORTED_MODULE_16__["AddtaskComponent"],
                _ui_task_viewtask_viewtask_component__WEBPACK_IMPORTED_MODULE_17__["ViewtaskComponent"],
                _ui_shared_projectdialog_projectdialog_component__WEBPACK_IMPORTED_MODULE_18__["ProjectdialogComponent"],
                _ui_shared_parenttaskdialog_parenttaskdialog_component__WEBPACK_IMPORTED_MODULE_19__["ParenttaskdialogComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_8__["LayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"]
            ],
            entryComponents: [
                _ui_shared_userdialog_userdialog_component__WEBPACK_IMPORTED_MODULE_13__["UserdialogComponent"],
                _ui_shared_messagedialog_messagedialog_component__WEBPACK_IMPORTED_MODULE_12__["MessagedialogComponent"],
                _ui_shared_projectdialog_projectdialog_component__WEBPACK_IMPORTED_MODULE_18__["ProjectdialogComponent"],
                _ui_shared_parenttaskdialog_parenttaskdialog_component__WEBPACK_IMPORTED_MODULE_19__["ParenttaskdialogComponent"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/model/project/project.module.ts":
/*!*************************************************!*\
  !*** ./src/app/model/project/project.module.ts ***!
  \*************************************************/
/*! exports provided: ProjectModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectModule", function() { return ProjectModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");



var ProjectModule = /** @class */ (function () {
    function ProjectModule() {
    }
    ProjectModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
            ]
        })
    ], ProjectModule);
    return ProjectModule;
}());



/***/ }),

/***/ "./src/app/model/task/task.module.ts":
/*!*******************************************!*\
  !*** ./src/app/model/task/task.module.ts ***!
  \*******************************************/
/*! exports provided: TaskModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskModule", function() { return TaskModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");



var TaskModule = /** @class */ (function () {
    function TaskModule() {
    }
    TaskModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
            ]
        })
    ], TaskModule);
    return TaskModule;
}());



/***/ }),

/***/ "./src/app/model/user/user.module.ts":
/*!*******************************************!*\
  !*** ./src/app/model/user/user.module.ts ***!
  \*******************************************/
/*! exports provided: UserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");



var UserModule = /** @class */ (function () {
    function UserModule() {
    }
    UserModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
            ]
        })
    ], UserModule);
    return UserModule;
}());



/***/ }),

/***/ "./src/app/pipe/filter.pipe.ts":
/*!*************************************!*\
  !*** ./src/app/pipe/filter.pipe.ts ***!
  \*************************************/
/*! exports provided: FilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPipe", function() { return FilterPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FilterPipe = /** @class */ (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (items, searchText, properties) {
        if (!items)
            return [];
        if (!searchText)
            return items;
        return items.filter(function (item) {
            for (var key in item) {
                if (!properties) {
                    if (("" + item[key]).toLocaleLowerCase().includes(searchText.toLocaleLowerCase()))
                        return true;
                }
                else {
                    if (properties && properties.indexOf(key) >= 0) {
                        if (("" + item[key]).toLocaleLowerCase().includes(searchText.toLocaleLowerCase()))
                            return true;
                    }
                }
            }
            return false;
        });
    };
    FilterPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'filter'
        })
    ], FilterPipe);
    return FilterPipe;
}());



/***/ }),

/***/ "./src/app/pipe/orderby.pipe.ts":
/*!**************************************!*\
  !*** ./src/app/pipe/orderby.pipe.ts ***!
  \**************************************/
/*! exports provided: OrderbyPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderbyPipe", function() { return OrderbyPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var OrderbyPipe = /** @class */ (function () {
    function OrderbyPipe() {
    }
    OrderbyPipe.prototype.transform = function (items, field, order) {
        if (!items || !field || !order)
            return items;
        return items.sort(function (a, b) {
            a = a[field];
            b = b[field];
            if (a < b) {
                return -1 * order;
            }
            else if (a > b) {
                return 1 * order;
            }
            else {
                return 0;
            }
            //return a > b ? order : order * (-1);
        });
    };
    OrderbyPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'orderby'
        })
    ], OrderbyPipe);
    return OrderbyPipe;
}());



/***/ }),

/***/ "./src/app/service/project.service.ts":
/*!********************************************!*\
  !*** ./src/app/service/project.service.ts ***!
  \********************************************/
/*! exports provided: ProjectService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectService", function() { return ProjectService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");






var ProjectService = /** @class */ (function () {
    function ProjectService(http) {
        this.http = http;
        this.endpoint = "" + src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiBaseUri;
    }
    // get all projects
    ProjectService.prototype.getProjects = function () {
        var _this = this;
        return this.http.get(this.endpoint + '/api/project/getprojects')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (e) { return _this.handleError(e); }));
    };
    // get all projects
    ProjectService.prototype.getProjectsForSearch = function () {
        var _this = this;
        return this.http.get(this.endpoint + '/api/project/getprojectsforsearch')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (e) { return _this.handleError(e); }));
    };
    // get project by id
    ProjectService.prototype.getProjectById = function (id) {
        var _this = this;
        return this.http.get(this.endpoint + '/api/project/getprojectbyid/' + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (e) { return _this.handleError(e); }));
    };
    // add & update Project
    ProjectService.prototype.saveProject = function (proj) {
        var _this = this;
        return this.http.post(this.endpoint + '/api/project/save', proj)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (e) { return _this.handleError(e); }));
    };
    // delete Project
    ProjectService.prototype.deleteProject = function (id) {
        var _this = this;
        return this.http.delete(this.endpoint + '/api/project/delete/' + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (e) { return _this.handleError(e); }));
    };
    // suspend Project
    ProjectService.prototype.suspendProject = function (id) {
        var _this = this;
        return this.http.post(this.endpoint + '/api/project/suspend', { ProjectId: id })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (e) { return _this.handleError(e); }));
    };
    // error handler
    ProjectService.prototype.handleError = function (error) {
        console.log(error);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])("Server error occured");
    };
    ProjectService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ProjectService);
    return ProjectService;
}());



/***/ }),

/***/ "./src/app/service/task.service.ts":
/*!*****************************************!*\
  !*** ./src/app/service/task.service.ts ***!
  \*****************************************/
/*! exports provided: TaskService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskService", function() { return TaskService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");






var TaskService = /** @class */ (function () {
    function TaskService(http) {
        this.http = http;
        this.endpoint = "" + src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiBaseUri;
    }
    // get all tasks
    TaskService.prototype.getTasks = function () {
        var _this = this;
        return this.http.get(this.endpoint + '/api/task/gettasks')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (e) { return _this.handleError(e); }));
    };
    TaskService.prototype.getTasksByProjectId = function (projectId) {
        var _this = this;
        return this.http.get(this.endpoint + '/api/task/gettasksbyprojectid/' + projectId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (e) { return _this.handleError(e); }));
    };
    TaskService.prototype.getParentTasks = function () {
        var _this = this;
        return this.http.get(this.endpoint + '/api/task/getparenttasks')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (e) { return _this.handleError(e); }));
    };
    // get task by id
    TaskService.prototype.getTaskById = function (id) {
        var _this = this;
        return this.http.get(this.endpoint + '/api/task/gettaskbyid/' + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (e) { return _this.handleError(e); }));
    };
    // save Task
    TaskService.prototype.saveTask = function (task) {
        var _this = this;
        return this.http.post(this.endpoint + '/api/task/save', task)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (e) { return _this.handleError(e); }));
    };
    // complete Task
    TaskService.prototype.completeTask = function (id) {
        var _this = this;
        return this.http.post(this.endpoint + '/api/task/complete', { TaskId: id })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (e) { return _this.handleError(e); }));
    };
    // error handler
    TaskService.prototype.handleError = function (error) {
        console.log(error);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])("Server error occured");
    };
    TaskService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], TaskService);
    return TaskService;
}());



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");






var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.endpoint = "" + src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiBaseUri;
    }
    // get all users
    UserService.prototype.getUsers = function () {
        var _this = this;
        return this.http.get(this.endpoint + '/api/user/getusers')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (e) { return _this.handleError(e); }));
    };
    // get user by id
    UserService.prototype.getUserById = function (id) {
        var _this = this;
        return this.http.get(this.endpoint + '/api/user/getuserbyid/' + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (e) { return _this.handleError(e); }));
    };
    // save user
    UserService.prototype.saveUser = function (user) {
        var _this = this;
        return this.http.post(this.endpoint + '/api/user/save', user)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (e) { return _this.handleError(e); }));
    };
    // delete user
    UserService.prototype.deleteUser = function (id) {
        var _this = this;
        return this.http.delete(this.endpoint + '/api/user/delete/' + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (e) { return _this.handleError(e); }));
    };
    // error handler
    UserService.prototype.handleError = function (error) {
        console.log(error);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])("Server error occured");
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/ui/project/project.component.css":
/*!**************************************************!*\
  !*** ./src/app/ui/project/project.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpL3Byb2plY3QvcHJvamVjdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/ui/project/project.component.html":
/*!***************************************************!*\
  !*** ./src/app/ui/project/project.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row d-flex\">\n  <div class=\"col-10\">\n    <button type=\"button\" class=\"btn btn-primary float-right\" [hidden]=\"actionClicked\" (click)=\"addProject()\">Add Project</button>\n  </div>\n</div>\n<div [hidden]=\"!actionClicked\">\n  <div class=\"page-header\">{{ title }}</div>\n  <br />\n  <form [formGroup]=\"projectForm\" (ngSubmit)=\"onSubmit()\">\n    <div class=\"form-group row\">\n      <label for=\"projectDescription\" class=\"col-12 col-sm-2 control-label\">Project Description</label>\n      <div class=\"col-12 col-sm-4\">\n        <input type=\"text\" class=\"form-control\" formControlName=\"ProjectDescription\" maxlength=\"40\" [ngClass]=\"{ 'invalid': submitted && f.ProjectDescription.errors }\" />\n      </div>\n      <div *ngIf=\"submitted && f.ProjectDescription.errors\" class=\"col-12 col-sm-4 text-danger small\">\n        Project Description is required\n      </div>\n    </div>\n    <div class=\"form-group row\">\n      <label class=\"col-12 col-sm-2 control-label\">Manager</label>\n      <div class=\"col-12 col-sm-4 input-group\">\n        <input type=\"text\" class=\"form-control\" formControlName=\"Manager\" readonly [ngClass]=\"{ 'invalid': submitted && f.Manager.errors }\" />\n        <div class=\"input-group-append\">\n          <span (click)=\"openUserDialog()\" class=\"input-group-text\"><i class=\"fa fa-search\"></i></span>\n        </div>\n      </div>\n      <div *ngIf=\"submitted && f.Manager.errors\" class=\"col-12 col-sm-4 text-danger small\">\n        Manager is required\n      </div>\n    </div>\n    <div class=\"form-group row\">\n      <label class=\"col-12 col-sm-2 control-label\">Priority</label>\n      <div class=\"col-12 col-sm-4\">\n        <input type=\"range\" min=\"0\" max=\"30\" step=\"1\" class=\"form-control\" formControlName=\"Priority\" />\n      </div>\n      <div *ngIf=\"submitted && f.Priority.errors\" class=\"col-12 col-sm-4 text-danger small\">\n        Priority is required\n      </div>\n    </div>\n    <div class=\"form-group row\">\n      <label class=\"col-12 col-sm-2 control-label\">Set Start Date</label>\n      <div class=\"col-12 col-sm-4\">\n        <input type=\"checkbox\" class=\"checkbox\" formControlName=\"DateRequired\" (change)=\"toggleDate()\">\n      </div>\n    </div>\n    <div class=\"form-group row\">\n      <label class=\"col-12 col-sm-2 control-label\">Start Date</label>\n      <div class=\"col-12 col-sm-4\">\n        <input type=\"date\" class=\"form-control\" formControlName=\"StartDate\">\n      </div>\n      <div *ngIf=\"submitted && startDateRequired\" class=\"col-12 col-sm-4 text-danger small\">\n        Start date is required\n      </div>\n      <div *ngIf=\"submitted && startDateGreater\" class=\"col-12 col-sm-4 text-danger small\">\n        Start date is greater than end date\n      </div>\n    </div>\n    <div class=\"form-group row\">\n      <label class=\"col-12 col-sm-2 control-label\">End Date</label>\n      <div class=\"col-12 col-sm-4\">\n        <input type=\"date\" class=\"form-control\" formControlName=\"EndDate\">\n      </div>\n      <div *ngIf=\"submitted && endDateRequired\" class=\"col-12 col-sm-4 text-danger small\">\n        End date is required\n      </div>\n    </div>\n    <div class=\"button-row\">\n      <button class=\"btn btn-success btn-sm\">{{ buttonText }}</button>\n      <button type=\"button\" class=\"btn btn-primary btn-sm\" (click)=\"cancel()\">Cancel</button>\n    </div>\n    <br />\n    <div class=\"form-group\" *ngIf=\"submitted && !status\">\n      <span class=\"text-danger small\"> {{ error }} </span>\n    </div>\n  </form>\n  <br />\n</div>\n<h4 class=\"page-header\">View Projects</h4>\n<div class=\"row\">\n  <div class=\"col-12 col-sm-4\">\n    <input class=\"form-control\" type=\"text\" [(ngModel)]=\"searchText\" placeholder=\"Search...\">\n  </div>\n  <div class=\"col-12 col-sm-8\">\n    <label>Sort by:</label>\n    <button type=\"button\" class=\"btn btn-link\" (click)=\"sortBy('StartDate')\">Start Date</button>\n    |<button type=\"button\" class=\"btn btn-link\" (click)=\"sortBy('EndDate')\">End Date</button>\n    |<button type=\"button\" class=\"btn btn-link\" (click)=\"sortBy('Priority')\">Priority</button>\n    |<button type=\"button\" class=\"btn btn-link\" (click)=\"sortBy('CompletedTaskCount')\">Completed</button>\n  </div>\n</div>\n<br />\n<div class=\"list-group\" *ngFor=\"let proj of Projects | filter: searchText : properties | orderby: field : order\">\n  <div class=\"list-group-item\">\n    <div class=\"row\">\n      <div class=\"col-12 col-sm-6\">\n        <div class=\"row\">\n          <div class=\"col-12 col-sm-6\">\n            <div class=\"list-group-item-text\">\n              <label>Project: </label> {{ proj.ProjectDescription }}\n            </div>\n          </div>\n          <div class=\"col-12 col-sm-6\">\n            <div class=\"list-group-item-text\">\n              <label>Priority: </label> {{ proj.Priority }}\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-12 col-sm-6\">\n            <div class=\"list-group-item-text\">\n              <label>Start Date: </label> {{ proj.StartDate | date: \"dd-MM-yyyy\" }}\n            </div>\n          </div>\n          <div class=\"col-12 col-sm-6\">\n            <div class=\"list-group-item-text\">\n              <label>End Date: </label> {{ proj.EndDate | date: \"dd-MM-yyyy\" }}\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-12 col-sm-6\">\n            <div class=\"list-group-item-text\">\n              <label>Task Count: </label> {{ proj.TaskCount }}\n            </div>\n          </div>\n          <div class=\"col-12 col-sm-6\">\n            <div class=\"list-group-item-text\">\n              <label>Completed Task Count: </label> {{ proj.CompletedTaskCount }}\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-12 col-sm-6\">\n        <button class=\"btn btn-sm btn-primary\" (click)=\"editProject(proj.ProjectId)\">Edit</button>\n        | <button class=\"btn btn-sm btn-danger\" (click)=\"suspendProject(proj.ProjectId)\">Suspend</button>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/ui/project/project.component.ts":
/*!*************************************************!*\
  !*** ./src/app/ui/project/project.component.ts ***!
  \*************************************************/
/*! exports provided: ProjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectComponent", function() { return ProjectComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_model_project_project_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/model/project/project.module */ "./src/app/model/project/project.module.ts");
/* harmony import */ var src_app_service_project_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/project.service */ "./src/app/service/project.service.ts");
/* harmony import */ var src_app_ui_shared_userdialog_userdialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/ui/shared/userdialog/userdialog.component */ "./src/app/ui/shared/userdialog/userdialog.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_messagedialog_messagedialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/messagedialog/messagedialog.component */ "./src/app/ui/shared/messagedialog/messagedialog.component.ts");









var ProjectComponent = /** @class */ (function () {
    function ProjectComponent(projectService, dialog) {
        this.projectService = projectService;
        this.dialog = dialog;
        this.submitted = false;
        this.properties = ["ProjectDescription", "StartDate", "EndDate", "Priority", "TaskCount", "CompletedTaskCouunt"];
    }
    ProjectComponent.prototype.ngOnInit = function () {
        this.getProjects();
        this.initializeFormControl();
        this.order = 1;
    };
    ProjectComponent.prototype.initializeFormControl = function () {
        this.Project = new src_app_model_project_project_module__WEBPACK_IMPORTED_MODULE_4__["ProjectModule"]();
        // new object
        this.projectForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            ProjectDescription: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            Manager: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            Priority: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(1)),
            DateRequired: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](false),
            StartDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({ value: null, disable: true }),
            EndDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({ value: null, disable: true })
        });
        this.toggleDate();
        this.buttonText = "Save";
    };
    Object.defineProperty(ProjectComponent.prototype, "f", {
        get: function () { return this.projectForm.controls; },
        enumerable: true,
        configurable: true
    });
    // get the projects
    ProjectComponent.prototype.getProjects = function () {
        var _this = this;
        this.projectService.getProjects().subscribe(function (result) { return _this.Projects = result; });
    };
    ProjectComponent.prototype.toggleDate = function () {
        this.startDateRequired = false;
        this.endDateRequired = false;
        this.startDateGreater = false;
        var dateRequired = this.projectForm.controls['DateRequired'].value;
        if (dateRequired) {
            var today = new Date();
            var todayplus1 = new Date();
            todayplus1.setDate(today.getDate() + 1);
            this.projectForm.patchValue({
                StartDate: Object(_angular_common__WEBPACK_IMPORTED_MODULE_7__["formatDate"])(today, 'yyyy-MM-dd', 'en-US'),
                EndDate: Object(_angular_common__WEBPACK_IMPORTED_MODULE_7__["formatDate"])(todayplus1, 'yyyy-MM-dd', 'en-US')
            });
            this.projectForm.controls['StartDate'].enable();
            this.projectForm.controls['EndDate'].enable();
        }
        else {
            this.projectForm.patchValue({
                StartDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({ value: null }),
                EndDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({ value: null })
            });
            this.projectForm.controls['StartDate'].disable();
            this.projectForm.controls['EndDate'].disable();
        }
    };
    ProjectComponent.prototype.openUserDialog = function () {
        var _this = this;
        this.userDialog = this.dialog.open(src_app_ui_shared_userdialog_userdialog_component__WEBPACK_IMPORTED_MODULE_6__["UserdialogComponent"], {
            height: "400px", width: "600px"
        });
        this.userDialog.afterClosed().subscribe(function (user) {
            if (user != null) {
                _this.projectForm.patchValue({
                    Manager: user.LastName + ", " + user.FirstName
                });
                _this.managerId = user.UserId;
            }
        });
    };
    ProjectComponent.prototype.resetForm = function () {
        this.actionClicked = false;
        this.buttonText = "Save";
        this.Project = new src_app_model_project_project_module__WEBPACK_IMPORTED_MODULE_4__["ProjectModule"]();
        this.managerId = 0;
        this.startDateRequired = false;
        this.endDateRequired = false;
        this.startDateGreater = false;
        this.projectForm.patchValue({
            ProjectDescription: '',
            ManagerId: '',
            Manager: '',
            Priority: 0,
            StartDate: null,
            EndDate: null
        });
    };
    ProjectComponent.prototype.cancel = function () {
        this.resetForm();
    };
    ProjectComponent.prototype.addProject = function () {
        this.resetForm();
        this.actionClicked = true;
        this.title = "Add Project";
        this.buttonText = "Add";
        this.toggleDate();
    };
    ProjectComponent.prototype.editProject = function (id) {
        var _this = this;
        this.actionClicked = true;
        this.title = "Edit Project";
        this.buttonText = "Update";
        this.projectService.getProjectById(id).subscribe(function (result) {
            _this.Project = result;
            _this.projectForm.patchValue({
                ProjectDescription: _this.Project.ProjectDescription,
                Manager: _this.Project.ManagerName,
                Priority: _this.Project.Priority,
                StartDate: _this.Project.StartDate,
                EndDate: _this.Project.EndDate
            });
            _this.projectForm.patchValue({
                DateRequired: _this.Project.StartDate != null
            });
            _this.managerId = _this.Project.ManagerId;
            _this.toggleDate();
        });
    };
    ProjectComponent.prototype.suspendProject = function (id) {
        var _this = this;
        this.messageDialog = this.dialog.open(_shared_messagedialog_messagedialog_component__WEBPACK_IMPORTED_MODULE_8__["MessagedialogComponent"], {
            data: { message: "Are you sure to suspend the project?" },
            height: "250px",
            width: "400px",
        });
        this.messageDialog.afterClosed().subscribe(function (response) {
            if (response == "OK") {
                // suspend the project on confirmation
                _this.projectService.suspendProject(id).subscribe(function (result) {
                    if (result) {
                        // reload the table
                        _this.getProjects();
                        _this.resetForm();
                    }
                    else {
                        _this.error = "Error while saving the task";
                    }
                }, function (error) {
                    _this.error = "Error while saving the task";
                });
            }
        });
    };
    ProjectComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        this.startDateRequired = false;
        this.endDateRequired = false;
        if (this.projectForm.invalid) {
            return;
        }
        this.Project.ProjectDescription = this.projectForm.get('ProjectDescription').value;
        this.Project.ManagerId = this.managerId;
        this.Project.Priority = this.projectForm.get('Priority').value;
        var dateRequired = this.projectForm.controls['DateRequired'].value;
        if (dateRequired) {
            var startDate = this.projectForm.get('StartDate').value;
            var endDate = this.projectForm.get('EndDate').value;
            if (startDate == null || startDate == undefined || startDate == "") {
                this.startDateRequired = true;
            }
            if (endDate == null || endDate == undefined || endDate == "") {
                this.endDateRequired = true;
            }
            if (this.startDateRequired || this.endDateRequired) {
                return;
            }
            if (startDate > endDate) {
                this.startDateGreater = true;
                return;
            }
            this.Project.StartDate = this.projectForm.get('StartDate').value;
            this.Project.EndDate = this.projectForm.get('EndDate').value;
        }
        else {
            this.Project.StartDate = null;
            this.Project.EndDate = null;
        }
        this.projectService.saveProject(this.Project).subscribe(function (result) {
            if (result > 0) {
                // reload the table
                _this.getProjects();
                _this.resetForm();
            }
            else {
                _this.error = "Error while saving the task";
            }
        }, function (error) {
            _this.error = "Error while saving the task";
        });
        return;
    };
    ProjectComponent.prototype.sortBy = function (field) {
        this.field = field;
        this.order = this.order * (-1);
        return false;
    };
    ProjectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-project',
            template: __webpack_require__(/*! ./project.component.html */ "./src/app/ui/project/project.component.html"),
            preserveWhitespaces: true,
            styles: [__webpack_require__(/*! ./project.component.css */ "./src/app/ui/project/project.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_service_project_service__WEBPACK_IMPORTED_MODULE_5__["ProjectService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]])
    ], ProjectComponent);
    return ProjectComponent;
}());



/***/ }),

/***/ "./src/app/ui/shared/messagedialog/messagedialog.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/ui/shared/messagedialog/messagedialog.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpL3NoYXJlZC9tZXNzYWdlZGlhbG9nL21lc3NhZ2VkaWFsb2cuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/ui/shared/messagedialog/messagedialog.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/ui/shared/messagedialog/messagedialog.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Confirmation Message</h1>\n<mat-dialog-content>\n<div class=\"row\">\n  <div class=\"col-md-12\">\n    {{ data.message }}\n  </div>\n</div>\n<br />\n<div class=\"button-row\">\n    <button type=\"button\" class=\"btn btn-primary btn-sm\" (click)=\"ok()\">OK</button>\n    <button type=\"button\" class=\"btn btn-default btn-sm\" (click)=\"cancel()\">Cancel</button>\n</div>\n<br />\n</mat-dialog-content>"

/***/ }),

/***/ "./src/app/ui/shared/messagedialog/messagedialog.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/ui/shared/messagedialog/messagedialog.component.ts ***!
  \********************************************************************/
/*! exports provided: MessagedialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagedialogComponent", function() { return MessagedialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var MessagedialogComponent = /** @class */ (function () {
    function MessagedialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    MessagedialogComponent.prototype.ngOnInit = function () {
    };
    MessagedialogComponent.prototype.ok = function () {
        this.dialogRef.close('OK');
    };
    MessagedialogComponent.prototype.cancel = function () {
        this.dialogRef.close('CANCEL');
    };
    MessagedialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-messagedialog',
            template: __webpack_require__(/*! ./messagedialog.component.html */ "./src/app/ui/shared/messagedialog/messagedialog.component.html"),
            preserveWhitespaces: true,
            styles: [__webpack_require__(/*! ./messagedialog.component.css */ "./src/app/ui/shared/messagedialog/messagedialog.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])
    ], MessagedialogComponent);
    return MessagedialogComponent;
}());



/***/ }),

/***/ "./src/app/ui/shared/parenttaskdialog/parenttaskdialog.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/ui/shared/parenttaskdialog/parenttaskdialog.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpL3NoYXJlZC9wYXJlbnR0YXNrZGlhbG9nL3BhcmVudHRhc2tkaWFsb2cuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/ui/shared/parenttaskdialog/parenttaskdialog.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/ui/shared/parenttaskdialog/parenttaskdialog.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Select Task</h1>\n<mat-dialog-content>\n<div class=\"row\">\n  <div class=\"col-md-6\">\n    <input type=\"text\" [(ngModel)]=\"searchText\" class=\"form-control\" placeholder=\"Search...\">\n  </div>\n</div>\n<br />\n<table class=\"table table-responsive\">\n  <thead>\n    <tr>\n      <th>Task</th>\n      <th></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let task of ParentTasks | filter: searchText\">\n      <td>{{ task.TaskDescription }}</td>\n      <td>\n        <button type=\"button\" class=\"btn btn-link btn-sm\" (click)=\"selectTask(task)\">Select</button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n</mat-dialog-content>"

/***/ }),

/***/ "./src/app/ui/shared/parenttaskdialog/parenttaskdialog.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/ui/shared/parenttaskdialog/parenttaskdialog.component.ts ***!
  \**************************************************************************/
/*! exports provided: ParenttaskdialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParenttaskdialogComponent", function() { return ParenttaskdialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_service_task_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/task.service */ "./src/app/service/task.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");




var ParenttaskdialogComponent = /** @class */ (function () {
    function ParenttaskdialogComponent(taskService, dialogRef) {
        this.taskService = taskService;
        this.dialogRef = dialogRef;
    }
    ParenttaskdialogComponent.prototype.ngOnInit = function () {
        this.getParentTasks();
    };
    ParenttaskdialogComponent.prototype.getParentTasks = function () {
        var _this = this;
        this.taskService.getParentTasks().subscribe(function (result) { _this.ParentTasks = result; });
    };
    ParenttaskdialogComponent.prototype.selectTask = function (tsk) {
        this.dialogRef.close(tsk);
    };
    ParenttaskdialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-parenttaskdialog',
            template: __webpack_require__(/*! ./parenttaskdialog.component.html */ "./src/app/ui/shared/parenttaskdialog/parenttaskdialog.component.html"),
            styles: [__webpack_require__(/*! ./parenttaskdialog.component.css */ "./src/app/ui/shared/parenttaskdialog/parenttaskdialog.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_service_task_service__WEBPACK_IMPORTED_MODULE_2__["TaskService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"]])
    ], ParenttaskdialogComponent);
    return ParenttaskdialogComponent;
}());



/***/ }),

/***/ "./src/app/ui/shared/projectdialog/projectdialog.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/ui/shared/projectdialog/projectdialog.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpL3NoYXJlZC9wcm9qZWN0ZGlhbG9nL3Byb2plY3RkaWFsb2cuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/ui/shared/projectdialog/projectdialog.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/ui/shared/projectdialog/projectdialog.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Select Project</h1>\n<mat-dialog-content>\n<div class=\"row\">\n  <div class=\"col-md-6\">\n    <input type=\"text\" [(ngModel)]=\"searchText\" class=\"form-control\" placeholder=\"Search...\">\n  </div>\n</div>\n<br />\n<table class=\"table table-responsive\">\n  <thead>\n    <tr>\n      <th>Project</th>\n      <th></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let proj of Projects | filter: searchText\">\n      <td>{{ proj.ProjectDescription }}</td>\n      <td>\n        <button type=\"button\" class=\"btn btn-link btn-sm\" (click)=\"selectProject(proj)\">Select</button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n</mat-dialog-content>"

/***/ }),

/***/ "./src/app/ui/shared/projectdialog/projectdialog.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/ui/shared/projectdialog/projectdialog.component.ts ***!
  \********************************************************************/
/*! exports provided: ProjectdialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectdialogComponent", function() { return ProjectdialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_service_project_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/project.service */ "./src/app/service/project.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");




var ProjectdialogComponent = /** @class */ (function () {
    function ProjectdialogComponent(projectService, dialogRef) {
        this.projectService = projectService;
        this.dialogRef = dialogRef;
    }
    ProjectdialogComponent.prototype.ngOnInit = function () {
        this.getProjects();
    };
    ProjectdialogComponent.prototype.getProjects = function () {
        var _this = this;
        this.projectService.getProjectsForSearch().subscribe(function (result) { _this.Projects = result; });
    };
    ProjectdialogComponent.prototype.selectProject = function (project) {
        this.dialogRef.close(project);
    };
    ProjectdialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-projectdialog',
            template: __webpack_require__(/*! ./projectdialog.component.html */ "./src/app/ui/shared/projectdialog/projectdialog.component.html"),
            styles: [__webpack_require__(/*! ./projectdialog.component.css */ "./src/app/ui/shared/projectdialog/projectdialog.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_service_project_service__WEBPACK_IMPORTED_MODULE_2__["ProjectService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"]])
    ], ProjectdialogComponent);
    return ProjectdialogComponent;
}());



/***/ }),

/***/ "./src/app/ui/shared/userdialog/userdialog.component.css":
/*!***************************************************************!*\
  !*** ./src/app/ui/shared/userdialog/userdialog.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpL3NoYXJlZC91c2VyZGlhbG9nL3VzZXJkaWFsb2cuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/ui/shared/userdialog/userdialog.component.html":
/*!****************************************************************!*\
  !*** ./src/app/ui/shared/userdialog/userdialog.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Select User</h1>\n<mat-dialog-content>\n<div class=\"row\">\n  <div class=\"col-md-6\">\n    <input type=\"text\" [(ngModel)]=\"searchText\" class=\"form-control\" placeholder=\"Search...\">\n  </div>\n</div>\n<br />\n<table class=\"table table-responsive\">\n  <thead>\n    <tr>\n      <th>First Name</th>\n      <th>Last Name</th>\n      <th></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let user of Users | filter: searchText\">\n      <td>{{ user.FirstName }}</td>\n      <td>{{ user.LastName }}</td>\n      <td>\n        <button type=\"button\" class=\"btn btn-link btn-sm\" (click)=\"selectUser(user)\">Select</button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n</mat-dialog-content>"

/***/ }),

/***/ "./src/app/ui/shared/userdialog/userdialog.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/ui/shared/userdialog/userdialog.component.ts ***!
  \**************************************************************/
/*! exports provided: UserdialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserdialogComponent", function() { return UserdialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _service_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../service/user.service */ "./src/app/service/user.service.ts");




var UserdialogComponent = /** @class */ (function () {
    function UserdialogComponent(userService, dialogRef) {
        this.userService = userService;
        this.dialogRef = dialogRef;
    }
    UserdialogComponent.prototype.ngOnInit = function () {
        this.getUsers();
    };
    UserdialogComponent.prototype.getUsers = function () {
        var _this = this;
        this.userService.getUsers().subscribe(function (result) { _this.Users = result; });
    };
    UserdialogComponent.prototype.selectUser = function (user) {
        this.dialogRef.close(user);
    };
    UserdialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-userdialog',
            template: __webpack_require__(/*! ./userdialog.component.html */ "./src/app/ui/shared/userdialog/userdialog.component.html"),
            styles: [__webpack_require__(/*! ./userdialog.component.css */ "./src/app/ui/shared/userdialog/userdialog.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]])
    ], UserdialogComponent);
    return UserdialogComponent;
}());



/***/ }),

/***/ "./src/app/ui/task/addtask/addtask.component.css":
/*!*******************************************************!*\
  !*** ./src/app/ui/task/addtask/addtask.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpL3Rhc2svYWRkdGFzay9hZGR0YXNrLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/ui/task/addtask/addtask.component.html":
/*!********************************************************!*\
  !*** ./src/app/ui/task/addtask/addtask.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-header\">{{ title }}</div>\n<br />\n<form [formGroup]=\"taskForm\" (ngSubmit)=\"onSubmit()\">\n  <div class=\"form-group row\">\n    <label class=\"col-12 col-sm-2 control-label\">Project</label>\n    <div class=\"col-12 col-sm-4 input-group\">\n      <input type=\"text\" class=\"form-control\" formControlName=\"Project\" readonly [ngClass]=\"{ 'invalid': submitted && f.Project.errors }\" />\n      <div class=\"input-group-append\">\n        <span (click)=\"openProjectDialog()\" class=\"input-group-text\"><i class=\"fa fa-search\"></i></span>\n      </div>\n    </div>\n    <div *ngIf=\"submitted && f.Project.errors\" class=\"col-12 col-sm-4 text-danger small\">\n      Project is required\n    </div>\n  </div>\n  <div class=\"form-group row\">\n    <label for=\"task\" class=\"col-12 col-sm-2 control-label\">Task</label>\n    <div class=\"col-12 col-sm-4\">\n      <input type=\"text\" class=\"form-control\" formControlName=\"Task\" maxlength=\"40\" [ngClass]=\"{ 'invalid': submitted && f.Task.errors }\" />\n    </div>\n    <div *ngIf=\"submitted && f.Task.errors\" class=\"col-12 col-sm-4 text-danger small\">\n      Task is required\n    </div>\n  </div>\n  <div class=\"form-group row\">\n    <label class=\"col-12 col-sm-2 control-label\">Is Parent Task</label>\n    <div class=\"col-12 col-sm-4\">\n      <input type=\"checkbox\" class=\"checkbox\" formControlName=\"IsParentTask\" (change)=\"onParentTaskChange()\">\n    </div>\n  </div>\n  <div class=\"form-group row\">\n    <label class=\"col-12 col-sm-2 control-label\">Parent Task</label>\n    <div class=\"col-12 col-sm-4 input-group\">\n      <input type=\"text\" class=\"form-control\" formControlName=\"ParentTask\" readonly [ngClass]=\"{ 'invalid': submitted && f.ParentTask.errors }\" />\n      <div class=\"input-group-append\">\n        <span (click)=\"openParentTaskDialog()\" class=\"input-group-text\"><i class=\"fa fa-search\"></i></span>\n      </div>\n    </div>\n  </div>\n  <div class=\"form-group row\">\n    <label class=\"col-12 col-sm-2 control-label\">Priority</label>\n    <div class=\"col-12 col-sm-4\">\n      <input type=\"range\" min=\"0\" max=\"30\" step=\"1\" class=\"form-control\" formControlName=\"Priority\" />\n    </div>\n    <div *ngIf=\"submitted && priorityRequired\" class=\"col-12 col-sm-4 text-danger small\">\n      Priority is required\n    </div>\n  </div>\n  <div class=\"form-group row\">\n    <label class=\"col-12 col-sm-2 control-label\">Start Date</label>\n    <div class=\"col-12 col-sm-4\">\n      <input type=\"date\" class=\"form-control\" formControlName=\"StartDate\">\n    </div>\n    <div *ngIf=\"submitted && startDateRequired\" class=\"col-12 col-sm-4 text-danger small\">\n      Start date is required\n    </div>\n    <div *ngIf=\"submitted && startDateGreater\" class=\"col-12 col-sm-4 text-danger small\">\n      Start date is greater than end date\n    </div>\n  </div>\n  <div class=\"form-group row\">\n    <label class=\"col-12 col-sm-2 control-label\">End Date</label>\n    <div class=\"col-12 col-sm-4\">\n      <input type=\"date\" class=\"form-control\" formControlName=\"EndDate\">\n    </div>\n    <div *ngIf=\"submitted && endDateRequired\" class=\"col-12 col-sm-4 text-danger small\">\n      End date is required\n    </div>\n  </div>\n  <div class=\"form-group row\">\n    <label class=\"col-12 col-sm-2 control-label\">User</label>\n    <div class=\"col-12 col-sm-4 input-group\">\n      <input type=\"text\" class=\"form-control\" formControlName=\"User\" readonly [ngClass]=\"{ 'invalid': submitted && userRequired }\" />\n      <div class=\"input-group-append\">\n        <span (click)=\"openUserDialog()\" class=\"input-group-text\"><i class=\"fa fa-search\"></i></span>\n      </div>\n    </div>\n    <div *ngIf=\"submitted && userRequired\" class=\"col-12 col-sm-4 text-danger small\">\n      User is required\n    </div>\n  </div>\n  <div class=\"button-row\">\n    <button class=\"btn btn-success btn-sm\">{{ buttonText }}</button>\n    <button type=\"button\" class=\"btn btn-primary btn-sm\" (click)=\"cancel()\">Cancel</button>\n  </div>\n  <br />\n  <div class=\"form-group\" *ngIf=\"submitted && !status\">\n    <span class=\"text-danger small\"> {{ error }} </span>\n  </div>\n</form>\n"

/***/ }),

/***/ "./src/app/ui/task/addtask/addtask.component.ts":
/*!******************************************************!*\
  !*** ./src/app/ui/task/addtask/addtask.component.ts ***!
  \******************************************************/
/*! exports provided: AddtaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddtaskComponent", function() { return AddtaskComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_service_task_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/task.service */ "./src/app/service/task.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_model_task_task_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/model/task/task.module */ "./src/app/model/task/task.module.ts");
/* harmony import */ var _shared_userdialog_userdialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/userdialog/userdialog.component */ "./src/app/ui/shared/userdialog/userdialog.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_projectdialog_projectdialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/projectdialog/projectdialog.component */ "./src/app/ui/shared/projectdialog/projectdialog.component.ts");
/* harmony import */ var _shared_parenttaskdialog_parenttaskdialog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/parenttaskdialog/parenttaskdialog.component */ "./src/app/ui/shared/parenttaskdialog/parenttaskdialog.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");











var AddtaskComponent = /** @class */ (function () {
    function AddtaskComponent(taskService, dialog, route, activatedRoute) {
        this.taskService = taskService;
        this.dialog = dialog;
        this.route = route;
        this.activatedRoute = activatedRoute;
        this.submitted = false;
    }
    AddtaskComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.initializeFormControl();
        this.isEdit = false;
        // for edit
        this.activatedRoute.params.subscribe(function (params) {
            if (params != null) {
                var taskId = params['id'];
                if (taskId != null && taskId != undefined) {
                    _this.Task.TaskId = taskId;
                    _this.editTask(_this.Task.TaskId);
                }
            }
        });
    };
    AddtaskComponent.prototype.initializeFormControl = function () {
        this.Task = new src_app_model_task_task_module__WEBPACK_IMPORTED_MODULE_5__["TaskModule"]();
        // new object
        this.taskForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            Project: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            Task: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            IsParentTask: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](false),
            ParentTask: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: null, disable: true }),
            Priority: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: 0, disable: true }),
            StartDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: null, disable: true }),
            EndDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: null, disable: true }),
            User: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: null, disable: true }),
        });
        this.addProject();
        this.onParentTaskChange();
    };
    Object.defineProperty(AddtaskComponent.prototype, "f", {
        get: function () {
            return this.taskForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    AddtaskComponent.prototype.onParentTaskChange = function () {
        this.startDateRequired = false;
        this.endDateRequired = false;
        this.startDateGreater = false;
        var isParentTask = this.taskForm.controls['IsParentTask'].value;
        if (!isParentTask) {
            var today = new Date();
            var todayplus1 = new Date();
            todayplus1.setDate(today.getDate() + 1);
            this.taskForm.patchValue({
                StartDate: Object(_angular_common__WEBPACK_IMPORTED_MODULE_7__["formatDate"])(today, 'yyyy-MM-dd', 'en-US'),
                EndDate: Object(_angular_common__WEBPACK_IMPORTED_MODULE_7__["formatDate"])(todayplus1, 'yyyy-MM-dd', 'en-US')
            });
            this.taskForm.controls['StartDate'].enable();
            this.taskForm.controls['EndDate'].enable();
            this.taskForm.controls['Priority'].enable();
            this.taskForm.controls['ParentTask'].enable();
            this.taskForm.controls['User'].enable();
        }
        else {
            this.taskForm.patchValue({
                StartDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: null }),
                EndDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: null }),
                ParentTask: '',
                Priority: 0,
                User: '',
            });
            this.userId = 0;
            this.parentTaskId = 0;
            this.taskForm.controls['StartDate'].disable();
            this.taskForm.controls['EndDate'].disable();
            this.taskForm.controls['Priority'].disable();
            this.taskForm.controls['ParentTask'].enable();
            this.taskForm.controls['User'].disable();
        }
    };
    AddtaskComponent.prototype.openProjectDialog = function () {
        var _this = this;
        if (!this.isEdit) {
            this.projectDialog = this.dialog.open(_shared_projectdialog_projectdialog_component__WEBPACK_IMPORTED_MODULE_8__["ProjectdialogComponent"], {
                height: "400px", width: "600px"
            });
            this.projectDialog.afterClosed().subscribe(function (proj) {
                if (proj != null) {
                    _this.taskForm.patchValue({
                        Project: proj.ProjectDescription
                    });
                    _this.projectId = proj.ProjectId;
                }
            });
        }
    };
    AddtaskComponent.prototype.openUserDialog = function () {
        var _this = this;
        var isParentTask = this.taskForm.controls['IsParentTask'].value;
        if (!isParentTask) {
            this.userDialog = this.dialog.open(_shared_userdialog_userdialog_component__WEBPACK_IMPORTED_MODULE_6__["UserdialogComponent"], {
                height: "400px", width: "600px"
            });
            this.userDialog.afterClosed().subscribe(function (user) {
                if (user != null) {
                    _this.taskForm.patchValue({
                        User: user.LastName + ", " + user.FirstName
                    });
                    _this.userId = user.UserId;
                }
            });
        }
    };
    AddtaskComponent.prototype.openParentTaskDialog = function () {
        var _this = this;
        var isParentTask = this.taskForm.controls['IsParentTask'].value;
        if (!isParentTask) {
            this.taskDialog = this.dialog.open(_shared_parenttaskdialog_parenttaskdialog_component__WEBPACK_IMPORTED_MODULE_9__["ParenttaskdialogComponent"], {
                height: "400px", width: "600px"
            });
            this.taskDialog.afterClosed().subscribe(function (pTask) {
                if (pTask != null) {
                    _this.taskForm.patchValue({
                        ParentTask: pTask.TaskDescription
                    });
                    _this.parentTaskId = pTask.TaskId;
                }
            });
        }
    };
    AddtaskComponent.prototype.resetForm = function () {
        this.Task = new src_app_model_task_task_module__WEBPACK_IMPORTED_MODULE_5__["TaskModule"]();
        this.projectId = 0;
        this.parentTaskId = null;
        this.userId = 0;
        this.startDateRequired = false;
        this.endDateRequired = false;
        this.startDateGreater = false;
        this.userRequrired = false;
        this.taskForm.patchValue({
            Project: '',
            Task: '',
            IsParentTask: false,
            ParentTask: '',
            Priority: 0,
            StartDate: null,
            EndDate: null,
            User: ''
        });
    };
    AddtaskComponent.prototype.cancel = function () {
        this.resetForm();
        this.route.navigate(['/task']);
    };
    AddtaskComponent.prototype.addProject = function () {
        this.resetForm();
        this.title = "Add Task";
        this.buttonText = "Add";
        this.onParentTaskChange();
    };
    AddtaskComponent.prototype.editTask = function (id) {
        var _this = this;
        this.title = "Edit Task";
        this.isEdit = true;
        this.buttonText = "Update";
        this.taskService.getTaskById(id).subscribe(function (result) {
            _this.Task = result;
            _this.taskForm.patchValue({
                Project: _this.Task.ProjectDescription,
                Task: _this.Task.TaskDescription,
                IsParentTask: _this.Task.IsParentTask,
                ParentTask: _this.Task.ParentTaskDescription,
                Priority: _this.Task.Priority,
                StartDate: _this.Task.StartDate,
                EndDate: _this.Task.EndDate,
                User: _this.Task.UserName
            });
            _this.projectId = _this.Task.ProjectId;
            _this.parentTaskId = _this.Task.ParentTaskId;
            _this.userId = _this.Task.UserId;
            _this.onParentTaskChange();
            // on edit mode, not allow to change the parent flag
            var isParentTask = _this.taskForm.controls['IsParentTask'].value;
            if (isParentTask) {
                _this.taskForm.controls['IsParentTask'].disable();
            }
        });
    };
    AddtaskComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        this.startDateRequired = false;
        this.endDateRequired = false;
        this.priorityRequired = false;
        this.startDateGreater = false;
        this.userRequired = false;
        if (this.taskForm.invalid) {
            return;
        }
        var isParentTask = this.taskForm.controls['IsParentTask'].value;
        this.Task.ProjectDescription = this.taskForm.get('Project').value;
        this.Task.ProjectId = this.projectId;
        this.Task.TaskDescription = this.taskForm.get('Task').value;
        this.Task.IsParentTask = isParentTask;
        if (!isParentTask) {
            var startDate = this.taskForm.get('StartDate').value;
            var endDate = this.taskForm.get('EndDate').value;
            var priority = this.taskForm.get('Priority').value;
            var user = this.taskForm.get('User').value;
            if (startDate == null || startDate == undefined || startDate == "") {
                this.startDateRequired = true;
            }
            if (endDate == null || endDate == undefined || endDate == "") {
                this.endDateRequired = true;
            }
            if (priority == null || priority == undefined || priority == "" || priority == 0) {
                this.priorityRequired = true;
            }
            if (user == null || user == undefined || user == "") {
                this.userRequired = true;
            }
            if (this.startDateRequired || this.endDateRequired
                || this.priorityRequired || this.userRequired) {
                return;
            }
            if (startDate > endDate) {
                this.startDateGreater = true;
                return;
            }
            this.Task.StartDate = this.taskForm.get('StartDate').value;
            this.Task.EndDate = this.taskForm.get('EndDate').value;
            this.Task.Priority = this.taskForm.get('Priority').value;
            this.Task.UserName = this.taskForm.get('User').value;
            ;
            this.Task.UserId = this.userId;
            this.Task.ParentTaskId = this.parentTaskId;
        }
        else {
            this.Task.StartDate = null;
            this.Task.EndDate = null;
            this.Task.Priority = null;
            this.Task.ParentTaskId = null;
            this.Task.UserId = null;
        }
        this.taskService.saveTask(this.Task).subscribe(function (result) {
            if (result > 0) {
                _this.route.navigate(['/task']);
            }
            else {
                _this.error = "Error while saving the task";
            }
        }, function (error) {
            _this.error = "Error while saving the task";
        });
        return;
    };
    AddtaskComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-addtask',
            template: __webpack_require__(/*! ./addtask.component.html */ "./src/app/ui/task/addtask/addtask.component.html"),
            preserveWhitespaces: true,
            styles: [__webpack_require__(/*! ./addtask.component.css */ "./src/app/ui/task/addtask/addtask.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_service_task_service__WEBPACK_IMPORTED_MODULE_2__["TaskService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
            _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"]])
    ], AddtaskComponent);
    return AddtaskComponent;
}());



/***/ }),

/***/ "./src/app/ui/task/viewtask/viewtask.component.css":
/*!*********************************************************!*\
  !*** ./src/app/ui/task/viewtask/viewtask.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpL3Rhc2svdmlld3Rhc2svdmlld3Rhc2suY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/ui/task/viewtask/viewtask.component.html":
/*!**********************************************************!*\
  !*** ./src/app/ui/task/viewtask/viewtask.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row d-flex\">\n  <div class=\"col-10\">\n    <button type=\"button\" class=\"btn btn-primary float-right\" (click)=\"addTask()\">Add Task</button>\n  </div>\n</div>\n<h4 class=\"page-header\">View Tasks</h4>\n<div class=\"form-group row\">\n  <label class=\"col-12 col-sm-2 control-label\">Project:</label>\n  <div class=\"col-12 col-sm-4 input-group\">\n    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"Project\" readonly />\n    <div class=\"input-group-append\">\n      <span (click)=\"openProjectDialog()\" class=\"input-group-text\"><i class=\"fa fa-search\"></i></span>\n    </div>\n  </div>\n</div>\n<div class=\"col-12 col-sm-8\">\n  <label>Sort by:</label>\n  <button type=\"button\" class=\"btn btn-link\" (click)=\"sortBy('StartDate')\">Start Date</button>\n  |<button type=\"button\" class=\"btn btn-link\" (click)=\"sortBy('EndDate')\">End Date</button>\n  |<button type=\"button\" class=\"btn btn-link\" (click)=\"sortBy('Priority')\">Priority</button>\n  |<button type=\"button\" class=\"btn btn-link\" (click)=\"sortBy('Completed')\">Completed</button>\n</div>\n<br />\n<div class=\"list-group\" *ngFor=\"let task of Tasks | filter: searchText : properties | orderby: field : order\">\n  <div class=\"list-group-item\">\n    <div class=\"row\">\n      <div class=\"col-12 col-sm-6\">\n        <div class=\"row\">\n          <div class=\"col-12\">\n            <div class=\"list-group-item-text\">\n              <label>Task: </label> {{ task.TaskDescription }}\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-12\">\n            <div class=\"list-group-item-text\">\n              <label>Parent Task: </label> {{ task.ParentTaskDescription }}\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-12 col-sm-6\">\n            <div class=\"list-group-item-text\">\n              <label>Start Date: </label> {{ task.StartDate | date: \"dd-MM-yyyy\" }}\n            </div>\n          </div>\n          <div class=\"col-12 col-sm-6\">\n            <div class=\"list-group-item-text\">\n              <label>End Date: </label> {{ task.EndDate | date: \"dd-MM-yyyy\" }}\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-12 col-sm-6\">\n            <div class=\"list-group-item-text\">\n              <label>Priority: </label> {{ task.Priority }}\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-12 col-sm-6\">\n        <div *ngIf=\"!task.Completed\">\n          <button class=\"btn btn-sm btn-primary\" (click)=\"editTask(task.TaskId)\">Edit</button>\n          | <button class=\"btn btn-sm btn-danger\" (click)=\"completeTask(task.TaskId)\">Complete</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/ui/task/viewtask/viewtask.component.ts":
/*!********************************************************!*\
  !*** ./src/app/ui/task/viewtask/viewtask.component.ts ***!
  \********************************************************/
/*! exports provided: ViewtaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewtaskComponent", function() { return ViewtaskComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_service_task_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/task.service */ "./src/app/service/task.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _shared_messagedialog_messagedialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/messagedialog/messagedialog.component */ "./src/app/ui/shared/messagedialog/messagedialog.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_projectdialog_projectdialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/projectdialog/projectdialog.component */ "./src/app/ui/shared/projectdialog/projectdialog.component.ts");







var ViewtaskComponent = /** @class */ (function () {
    function ViewtaskComponent(taskService, dialog, route) {
        this.taskService = taskService;
        this.dialog = dialog;
        this.route = route;
        this.order = 1;
        this.properties = null;
    }
    ViewtaskComponent.prototype.ngOnInit = function () {
    };
    // get the Tasks
    ViewtaskComponent.prototype.getTasks = function () {
        var _this = this;
        this.taskService.getTasks().subscribe(function (result) { return _this.Tasks = result; });
    };
    ViewtaskComponent.prototype.openProjectDialog = function () {
        var _this = this;
        this.projectDialog = this.dialog.open(_shared_projectdialog_projectdialog_component__WEBPACK_IMPORTED_MODULE_6__["ProjectdialogComponent"], {
            height: "400px", width: "600px"
        });
        this.projectDialog.afterClosed().subscribe(function (proj) {
            if (proj != null) {
                _this.Project = proj.ProjectDescription;
                _this.projectId = proj.ProjectId;
                _this.taskService.getTasksByProjectId(_this.projectId).subscribe(function (result) {
                    return _this.Tasks = result;
                }, function (error) { return console.error(error); });
            }
        });
    };
    ViewtaskComponent.prototype.resetForm = function () {
    };
    ViewtaskComponent.prototype.completeTask = function (id) {
        var _this = this;
        this.messageDialog = this.dialog.open(_shared_messagedialog_messagedialog_component__WEBPACK_IMPORTED_MODULE_4__["MessagedialogComponent"], {
            data: { message: "Are you sure to complete the task ?" },
            height: "250px",
            width: "400px",
        });
        this.messageDialog.afterClosed().subscribe(function (response) {
            if (response == "OK") {
                // complete the task 
                _this.taskService.completeTask(id).subscribe(function (result) {
                    if (result) {
                        // reload the table
                        _this.getTasks();
                        _this.resetForm();
                    }
                    else {
                        _this.error = "Error while saving the task";
                    }
                }, function (error) {
                    _this.error = "Error while saving the task";
                });
            }
        });
    };
    ViewtaskComponent.prototype.addTask = function () {
        this.route.navigate(['/addtask']);
    };
    ViewtaskComponent.prototype.editTask = function (id) {
        this.route.navigate(['/edittask/' + id]);
    };
    ViewtaskComponent.prototype.sortBy = function (field) {
        this.field = field;
        this.order = this.order * (-1);
        return false;
    };
    ViewtaskComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-viewtask',
            template: __webpack_require__(/*! ./viewtask.component.html */ "./src/app/ui/task/viewtask/viewtask.component.html"),
            styles: [__webpack_require__(/*! ./viewtask.component.css */ "./src/app/ui/task/viewtask/viewtask.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_service_task_service__WEBPACK_IMPORTED_MODULE_2__["TaskService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], ViewtaskComponent);
    return ViewtaskComponent;
}());



/***/ }),

/***/ "./src/app/ui/user/user.component.css":
/*!********************************************!*\
  !*** ./src/app/ui/user/user.component.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpL3VzZXIvdXNlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/ui/user/user.component.html":
/*!*********************************************!*\
  !*** ./src/app/ui/user/user.component.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row d-flex\">\n  <div class=\"col-10\">\n    <button type=\"button\" class=\"btn btn-primary float-right\" [hidden]=\"actionClicked\" (click)=\"addUser()\">Add User</button>\n  </div>\n</div>\n<div [hidden]=\"!actionClicked\">\n  <div class=\"page-header\">{{ title }}</div>\n  <br />\n  <form [formGroup]=\"userForm\" (ngSubmit)=\"onSubmit()\">\n    <div class=\"form-group row\">\n      <label for=\"firstName\" class=\"col-12 col-sm-2 control-label\">First Name</label>\n      <div class=\"col-12 col-sm-4\">\n        <input type=\"text\" class=\"form-control\" formControlName=\"FirstName\" maxlength=\"40\" [ngClass]=\"{ 'invalid': submitted && f.FirstName.errors }\" />\n      </div>\n      <div *ngIf=\"submitted && f.FirstName.errors\" class=\"col-12 col-sm-4 text-danger small\">\n          First name is required\n      </div>\n    </div>\n    <div class=\"form-group row\">\n      <label for=\"lastName\" class=\"col-12 col-sm-2 control-label\">Last Name</label>\n      <div class=\"col-12 col-sm-4\">\n        <input type=\"text\" class=\"form-control\" formControlName=\"LastName\" maxlength=\"40\" [ngClass]=\"{ 'invalid': submitted && f.LastName.errors }\" />\n      </div>      \n      <div *ngIf=\"submitted && f.LastName.errors\" class=\"col-12 col-sm-4 text-danger small\">\n          Last name is required\n      </div>\n    </div>\n    <div class=\"button-row\">\n      <button class=\"btn btn-success btn-sm\">{{ buttonText }}</button>\n      <button type=\"button\" class=\"btn btn-primary btn-sm\" (click)=\"cancel()\">Cancel</button>\n    </div>\n    <div class=\"form-group\" *ngIf=\"submitted && !status\">\n      <span class=\"text-danger small\"> {{ error }} </span>\n    </div>\n  </form>\n  <br />\n</div>\n<h4>View User</h4>\n<div class=\"row\">\n  <div class=\"col-12 col-sm-4\">\n    <input class=\"form-control\" type=\"text\" [(ngModel)]=\"searchText\" placeholder=\"Search...\">\n  </div>\n  <div class=\"col-12 col-sm-8\">\n    <label>Sort by:</label>\n    <button type=\"button\" class=\"btn btn-link\" (click)=\"sortBy('FirstName')\">First Name</button>\n    |<button type=\"button\" class=\"btn btn-link\" (click)=\"sortBy('LastName')\">Last Name</button>\n    |<button type=\"button\" class=\"btn btn-link\" (click)=\"sortBy('UserId')\">User Id</button>\n  </div>\n</div>\n<br />\n<div class=\"list-group\" *ngFor=\"let user of Users | filter: searchText | orderby: field : order \">\n  <div class=\"list-group-item\">\n    <div class=\"row\">\n      <div class=\"col-12 col-sm-6\">\n        <div class=\"list-group-item-text\">\n          <label>User Id: </label> {{ user.UserId }}</div>\n        <div class=\"list-group-item-text\">\n          <label>First Name: </label> {{ user.FirstName }}</div>\n        <div class=\"list-group-item-text\">\n          <label>Last Name: </label> {{ user.LastName }}</div>\n      </div>\n      <div class=\"col-12 col-sm-6\">\n          <button class=\"btn btn-sm btn-primary\" (click)=\"editUser(user.UserId)\">Edit</button>\n          | <button class=\"btn btn-sm btn-danger\" (click)=\"deleteUser(user.UserId)\">Delete</button>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/ui/user/user.component.ts":
/*!*******************************************!*\
  !*** ./src/app/ui/user/user.component.ts ***!
  \*******************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _model_user_user_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../model/user/user.module */ "./src/app/model/user/user.module.ts");
/* harmony import */ var _service_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/user.service */ "./src/app/service/user.service.ts");
/* harmony import */ var _shared_messagedialog_messagedialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/messagedialog/messagedialog.component */ "./src/app/ui/shared/messagedialog/messagedialog.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");







var UserComponent = /** @class */ (function () {
    function UserComponent(userService, dialog) {
        this.userService = userService;
        this.dialog = dialog;
        this.submitted = false;
    }
    UserComponent.prototype.ngOnInit = function () {
        this.getUsers();
        this.initializeFormControl();
        this.User = new _model_user_user_module__WEBPACK_IMPORTED_MODULE_3__["UserModule"]();
        this.title = "Add User";
        this.actionClicked = false;
        this.order = 1;
    };
    UserComponent.prototype.initializeFormControl = function () {
        // new object
        this.userForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            FirstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            LastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
        this.buttonText = "Save";
    };
    // get the users
    UserComponent.prototype.getUsers = function () {
        var _this = this;
        this.userService.getUsers().subscribe(function (result) { return _this.Users = result; });
    };
    UserComponent.prototype.addUser = function () {
        this.actionClicked = true;
        this.title = "Add User";
        this.buttonText = "Add";
        this.userForm.patchValue({
            FirstName: '',
            LastName: '',
            UserId: 0
        });
    };
    UserComponent.prototype.editUser = function (id) {
        var _this = this;
        this.actionClicked = true;
        this.title = "Edit User";
        this.buttonText = "Update";
        this.userService.getUserById(id).subscribe(function (result) {
            _this.User = result;
            _this.userForm.patchValue({
                FirstName: _this.User.FirstName,
                LastName: _this.User.LastName,
                UserId: _this.User.UserId
            });
        });
    };
    UserComponent.prototype.deleteUser = function (id) {
        var _this = this;
        this.messageDialog = this.dialog.open(_shared_messagedialog_messagedialog_component__WEBPACK_IMPORTED_MODULE_5__["MessagedialogComponent"], {
            data: { message: "Are you sure to delete the user?" },
            height: "250px",
            width: "400px",
        });
        this.messageDialog.afterClosed().subscribe(function (response) {
            if (response == "OK") {
                // delete the user upon confirmation
                _this.userService.deleteUser(id).subscribe(function (result) {
                    if (result) {
                        // reload the table
                        _this.getUsers();
                        _this.resetForm();
                    }
                    else {
                        _this.error = "Error while saving the task";
                    }
                }, function (error) {
                    _this.error = "Error while saving the task";
                });
            }
        });
    };
    UserComponent.prototype.cancel = function () {
        this.resetForm();
    };
    UserComponent.prototype.resetForm = function () {
        this.actionClicked = false;
        this.searchText = "";
        this.field = "";
        this.order = 1;
        this.userForm.patchValue({
            FirstName: '',
            LastName: '',
            UserId: 0
        });
    };
    Object.defineProperty(UserComponent.prototype, "f", {
        get: function () { return this.userForm.controls; },
        enumerable: true,
        configurable: true
    });
    UserComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        if (this.userForm.invalid) {
            return;
        }
        this.User.FirstName = this.userForm.get('FirstName').value;
        this.User.LastName = this.userForm.get('LastName').value;
        this.userService.saveUser(this.User).subscribe(function (result) {
            if (result > 0) {
                // reload the table
                _this.getUsers();
                _this.resetForm();
            }
            else {
                _this.error = "Error while saving the task";
            }
        });
        return;
    };
    UserComponent.prototype.sortBy = function (field) {
        this.field = field;
        this.order = this.order * (-1);
        return false;
    };
    UserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user',
            template: __webpack_require__(/*! ./user.component.html */ "./src/app/ui/user/user.component.html"),
            preserveWhitespaces: true,
            styles: [__webpack_require__(/*! ./user.component.css */ "./src/app/ui/user/user.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]])
    ], UserComponent);
    return UserComponent;
}());



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
    production: false,
    apiBaseUri: "http://localhost/ProjectManagerAPI"
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\718450\ProjectManager_Finalsubmit\ProjectManagerUI\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map