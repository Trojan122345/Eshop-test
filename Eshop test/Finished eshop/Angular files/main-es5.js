function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header></app-header>\n<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-1\"></div>\n      <app-side-nav></app-side-nav>\n    <div class=\"col-1\">\n    </div>\n    <div class=\"col-8\">\n      <router-outlet></router-outlet>\n    </div>\n    <div class=\"col-1\"></div>\n  </div>\n</div>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/auth/invalid-token/invalid-token.component.html":
  /*!******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/auth/invalid-token/invalid-token.component.html ***!
    \******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsAuthInvalidTokenInvalidTokenComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"alert alert-warning\">\n Přihlášení vypršelo\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/auth/login/login.component.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/auth/login/login.component.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsAuthLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div *ngIf=\"loadingState.isError()\" class=\"alert alert-danger\">{{loadingState.getError().substr(1, loadingState.getError().length-2)}}</div>\n<div *ngIf=\"!(loadingState.isWorking()||loadingState.isSuccess())\">\n  <form>\n    <div class=\"form-group\">\n      <label for=\"loginUsername\" class=\"form-label\">Uživatelské jméno</label>\n      <input id=\"loginUsername\" name=\"loginUsername\" type=\"text\" class=\"form-control\" [(ngModel)]=\"username\"/>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"loginPassword\" class=\"form-label\">Heslo</label>\n      <input id=\"loginPassword\" name=\"loginPassword\" type=\"password\" class=\"form-control\" [(ngModel)]=\"password\"/>\n    </div>\n    <button type=\"button\" (click)=checkLogin() class=\"btn btn-primary\">Přihlásit</button>\n  </form>\n</div>\n<div *ngIf=\"loadingState.isWorking()\">Přihlašování...</div>\n<div *ngIf=\"loadingState.isSuccess()\" class=\"alert alert-success\">Úspěšně příhlášen</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/auth/logout/logout.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/auth/logout/logout.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsAuthLogoutLogoutComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>logout works!</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/customers/customers/customers.component.html":
  /*!***************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/customers/customers/customers.component.html ***!
    \***************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsCustomersCustomersCustomersComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n  <h1 class=\"text-secondary text-center\">Registrovaní zákaznící</h1>\n  <div *ngIf=\"loadingState.isWorking()\">\n    Loading...\n  </div>\n  <div *ngIf=\"loadingState.isError()\">\n        <pre>\n          {{loadingState.getError()}}\n        </pre>\n  </div>\n  <div *ngIf=\"loadingState.isSuccess()\">\n    <table class=\"table table-dark table-hover\">\n      <thead>\n        <tr>\n          <th>ID</th>\n          <th>Uživatelské jméno</th>\n          <th>Jméno</th>\n          <th>Příjmení</th>\n          <th>E-mail</th>\n          <th>Admin</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let customer of customers\" data-toggle=\"tooltip\" title=\"password hash: {{customer.passwordHash}}\">\n          <td>{{customer.id}}</td>\n          <td>{{customer.username}}</td>\n          <td>{{customer.name}}</td>\n          <td>{{customer.surname}}</td>\n          <td>{{customer.email}}</td>\n          <td *ngIf=\"customer.admin\">Ano</td>\n          <td *ngIf=\"!customer.admin\">Ne</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/customers/register-customer/register-customer.component.html":
  /*!*******************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/customers/register-customer/register-customer.component.html ***!
    \*******************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsCustomersRegisterCustomerRegisterCustomerComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div *ngIf=\"!(loadingState.isWorking()||loadingState.isSuccess())\">\n  <form (ngSubmit)=\"insertNew()\">\n    <div class=\"form-group\">\n      <label for=\"registerName\" class=\"form-label\">Jméno</label>\n      <input id=\"registerName\" name=\"registerName\" type=\"text\" class=\"form-control\" [(ngModel)]=\"customerNew.name\" required/>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"surname\" class=\"form-label\">Příjmení</label>\n      <input id=\"surname\" name=\"surname\" type=\"text\" class=\"form-control\" [(ngModel)]=\"customerNew.surname\" required/>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"registerUsername\" class=\"form-label\">Uživatelské jméno</label>\n      <input id=\"registerUsername\" name=\"registerUsername\" type=\"text\" class=\"form-control\" [(ngModel)]=\"customerNew.username\" required/>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"email\" class=\"form-label\">E-mail</label>\n      <input id=\"email\" name=\"email\" type=\"email\" class=\"form-control\" [(ngModel)]=\"customerNew.email\" required/>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"registerPassword\" class=\"form-label\">Heslo</label>\n      <input id=\"registerPassword\" name=\"registerPassword\" type=\"password\" class=\"form-control\" [(ngModel)]=\"rawPassword\" required/>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"registerPassword\" class=\"form-label\">Kontrolní Heslo</label>\n      <input id=\"registerPasswordControl\" name=\"registerPasswordControl\" type=\"password\" class=\"form-control\" [(ngModel)]=\"rawPasswordControl\" required/>\n    </div>\n    <button type=\"submit\" class=\"btn btn-primary form-control\">Registrovat</button>\n  </form>\n</div>\n<div *ngIf=\"loadingState.isWorking()\">Registruji...</div>\n<div *ngIf=\"loadingState.isSuccess()\" class=\"alert alert-success\">Úspěšně registrován</div>\n<div *ngIf=\"loadingState.isError()\" class=\"alert alert-danger\">{{loadingState.getError()}}</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/discounts/discounts-add/discounts-add.component.html":
  /*!***********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/discounts/discounts-add/discounts-add.component.html ***!
    \***********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsDiscountsDiscountsAddDiscountsAddComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div *ngIf=\"componentState.isCreate()\">\n  <div *ngIf=\"componentState.isBadDiscount()\" class=\"alert alert-danger\">\n    Špatně vyplněný formulář. Prosím vyplňte slevu a zvolte správně datum\n  </div>\n  <h2 class=\"text-primary text-center mb-5\">Tvorba slev</h2>\n  <h4 class=\"text-secondary\">Produkt: </h4>\n  <select class=\"form-control mb-3\" id=\"test\" name=\"product\" (change)=\"selectProductCreating($event)\">\n    <option id=\"{{product.id}}\" *ngFor=\"let product of products\" [value]=\"product.id\">{{product.name}}</option>\n  </select>\n  <div *ngIf=\"selectedProduct!=null\">\n    <div class=\"row mb-5\">\n      <div class=\"col-md-7\">\n        <div class=\"row\">\n          <h4 class=\"text-secondary\">Náhled</h4>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-5\">\n            <div class=\"row\">\n              <div class=\"card\">\n                <div class=\"card-header\"><h4>Sleva číslo #</h4></div>\n                <div class=\"card-body\">\n                  <div class=\"card-text\">Sleva: {{discountPercent}}%</div>\n                  <div class=\"card-text\">Datum\n                    od: {{discountsService.dateToUserFriendlyStr(getDateFromString(dateFrom))}}</div>\n                  <div class=\"card-text\">Datum\n                    do: {{discountsService.dateToUserFriendlyStr(getDateFromString(dateTo))}}</div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-7\">\n            <div class=\"card\">\n              <div class=\"card-header\">{{selectedProduct.name}}</div>\n              <div class=\"card-body\">\n                <div class=\"row\">\n                  <div class=\"col\">\n                    <img src=\"{{productsService.getPictureUrl(selectedProduct)}}\" alt=\"{{selectedProduct.name}}\"\n                         height=\"100\"\n                         width=\"100\">\n                    <div *ngIf=\"discountPercent>0\">\n                      <p class=\"card-text\">\n                        <del>{{selectedProduct.price.toFixed(2)}} CZK</del>\n                      </p>\n                      <h5 class=\"card-text text-warning\">{{discountPrice.toFixed(2)}} CZK</h5>\n                    </div>\n                    <div *ngIf=\"!discountPercent>0\">\n                      <p>{{selectedProduct.price.toFixed(2)}} CZK</p>\n                    </div>\n                    <button class=\"btn btn-success\">Objednat</button>\n                  </div>\n                  <div class=\"col\" *ngIf=\"discountPercent>0\">\n                    <h4 class=\"card-text text-warning\">Sleva!</h4>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-5 float-right\">\n        <h3 class=\"text-info\">Sleva: </h3>\n        <h4 class=\"text-secondary\">Procenta: </h4>\n        <input class=\"form-control\" type=\"number\" min=\"0\" max=\"90\" (keyup)=\"updateDiscount($event)\">\n        <h4 class=\"text-secondary\">Datum slevy</h4>\n        <label for=\"dateFrom\" class=\"form-label\">Od</label>\n        <input class=\"form-control\" type=\"date\" id=\"dateFrom\" name=\"dateFrom\" (change)=\"checkDateTo()\"\n               [(ngModel)]=\"dateFrom\" min=\"{{min}}\"><br>\n        <label for=\"dateFrom\" class=\"form-label\">Do</label>\n        <input class=\"form-control\" type=\"date\" id=\"dateTo\" name=\"dateTo\" [(ngModel)]=\"dateTo\"\n               min=\"{{dateFrom}}\">\n      </div>\n    </div>\n    <button (click)=\"createDiscount()\" class=\"btn btn-success\">Vytvořit slevu</button>\n  </div>\n</div>\n\n<div *ngIf=\"componentState.isShowFinishedDiscount()\">\n  <div class=\"alert alert-success\">Sleva úspěšně vytvořena</div>\n  <h2>Vytvořená sleva:</h2>\n  <div class=\"row\">\n    <div class=\"col-4\">\n      <div class=\"card\">\n        <div class=\"card-header\"><h4>Sleva číslo {{finishedDiscount.id}}</h4></div>\n        <div class=\"card-body\">\n          <div class=\"card-text\">Sleva: {{finishedDiscount.percent}}%</div>\n          <div class=\"card-text\">Datum od: {{discountsService.dateToUserFriendlyStr(finishedDiscount.datefrom)}}</div>\n          <div class=\"card-text\">Datum do: {{discountsService.dateToUserFriendlyStr(finishedDiscount.dateto)}}</div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-4\">\n      <div class=\"card\">\n        <div class=\"card-header\"><h4>{{selectedProduct.name}}</h4></div>\n        <div class=\"card-body\">\n          <div class=\"row\">\n            <div class=\"col\">\n              <img src=\"{{productsService.getPictureUrl(selectedProduct)}}\" alt=\"{{selectedProduct.name}}\" height=\"100\"\n                   width=\"100\">\n              <p class=\"card-text\">\n                <del>{{selectedProduct.price.toFixed(2)}} CZK</del>\n              </p>\n              <h5 class=\"card-text text-warning\">{{discountPrice.toFixed(2)}} CZK</h5>\n              <button class=\"btn btn-success\">Objednat</button>\n            </div>\n            <div class=\"col\">\n              <h4 class=\"card-text text-warning\">Sleva!</h4>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/discounts/discounts-alter/discounts-alter.component.html":
  /*!***************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/discounts/discounts-alter/discounts-alter.component.html ***!
    \***************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsDiscountsDiscountsAlterDiscountsAlterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h2 class=\"text-center text-primary mb-5\">Upravit slevu</h2>\n<div *ngIf=\"loadingState.isSuccess()\" class=\"alert alert-success\">Produkt úspěšně upraven</div>\n<div *ngIf=\"loadingState.isError()\" class=\"alert alert-danger\">Při úpravě nastala chyba</div>\n<div class=\"row mb-5\">\n  <div class=\"col-md-7\">\n    <div class=\"row\">\n      <h3 class=\"text-info\">Náhled</h3>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-5\">\n        <div class=\"row\">\n          <div class=\"card\">\n            <div class=\"card-header\"><h4>Sleva číslo {{alteredDiscount.id}}</h4></div>\n            <div class=\"card-body\">\n              <div class=\"card-text\">Sleva: {{alteredDiscount.percent}}%</div>\n              <div class=\"card-text\">Datum\n                od: {{discountsService.dateToUserFriendlyStr(alteredDiscount.datefrom)}}</div>\n              <div class=\"card-text\">Datum do: {{discountsService.dateToUserFriendlyStr(alteredDiscount.dateto)}}</div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-7\">\n        <div class=\"card\">\n          <div class=\"card-header\"><h4>{{productToDiscount.name}}</h4></div>\n          <div class=\"card-body\">\n            <img src=\"{{productsService.getPictureUrl(productToDiscount)}}\" alt=\"{{productToDiscount.name}}\"\n                 height=\"100\"\n                 width=\"100\">\n            <p class=\"card-text\">\n              <del>{{productToDiscount.price.toFixed(2)}} CZK</del>\n            </p>\n            <p class=\"card-text\">{{discountPrice.toFixed(2)}} CZK</p>\n            <button class=\"btn btn-success\">Objednat</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-5\">\n    <h3 class=\"text-info\">Sleva: </h3>\n    <h4 class=\"text-secondary\">Procenta: </h4>\n    <input class=\"form-control\" type=\"number\" min=\"0\" max=\"90\" (keyup)=\"updateDiscount($event)\">\n    <h4 class=\"text-secondary\">Datum slevy</h4>\n    <label for=\"dateFrom\" class=\"form-label\">Od</label>\n    <input class=\"form-control\" type=\"date\" id=\"dateFrom\" name=\"dateFrom\" (change)=\"changeDateFrom($event)\"\n           min=\"{{min}}\"><br>\n    <label for=\"dateFrom\" class=\"form-label\">Do</label>\n    <input class=\"form-control\" type=\"date\" id=\"dateTo\" name=\"dateTo\" (change)=\"changeDateTo($event)\"\n           min=\"{{getMinDateTo()}}\">\n  </div>\n</div>\n<div class=\"row mb-3\">\n  <button class=\"btn btn-warning\" (click)=\"alterDiscount()\">Dokončit úpravu</button>\n</div>\n<div class=\"row mb-3\">\n  <button class=\"btn btn-primary\" (click)=\"showAllDiscounts()\">Zpět na výpis slev</button>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/discounts/discounts/discounts.component.html":
  /*!***************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/discounts/discounts/discounts.component.html ***!
    \***************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsDiscountsDiscountsDiscountsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div *ngIf=\"loadingState.isWorking()\">\n  <span class=\"spinner-border spinner-border-sm\"></span> Loading...\n</div>\n<div *ngIf=\"loadingState.isError()\">\n  <div class=\"alert alert-danger\">Spojení se serverem selhalo.</div>\n</div>\n<div *ngIf=\"!isAlterDiscount\">\n  <div *ngIf=\"loadingState.isSuccess()\">\n    <h1 class=\"text-primary text-center mb-5\">Seznam slev</h1>\n    <h2 class=\"text-secondary mb-3\">Produkt</h2>\n    <select class=\"form-control mb-5\" id=\"test\" name=\"product\" (change)=\"loadProductDiscounts($event)\">\n      <option value=\"-1\">Všechny produkty</option>\n      <option id=\"{{product.id}}\" *ngFor=\"let product of products\" [value]=\"product.id\">{{product.name}}</option>\n    </select>\n    <div *ngIf=\"discountsFuture.length>0\">\n      <h2 class=\"text-secondary mt-5 mb-3\">Nadcházející slevy</h2>\n      <div class=\"row\">\n        <div class=\"col-lg-6\" *ngFor=\"let discount of discountsFuture\">\n          {{updateSelectedDiscount(discount)}}\n          <div class=\"row\">\n            <div class=\"col-md-5\">\n              <div class=\"row\">\n                <div class=\"card mb-4\">\n                  <div class=\"card-header\"><h4>Sleva číslo {{discount.id}}</h4></div>\n                  <div class=\"card-body\">\n                    <div class=\"card-text\">Sleva: {{discount.percent}}%</div>\n                    <div class=\"card-text\">Datum od: {{discountsService.dateToUserFriendlyStr(discount.datefrom)}}</div>\n                    <div class=\"card-text\">Datum do: {{discountsService.dateToUserFriendlyStr(discount.dateto)}}</div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"row\">\n                <button class=\"btn btn-primary mb-2\" (click)=\"alterDiscount(discount.id)\">Změnit slevu</button>\n              </div>\n              <div class=\"row\">\n                <button class=\"btn btn-danger mb-2\" data-toggle=\"modal\" data-target=\"#confirmDeleteDiscount\"\n                        (click)=\"prepareModalDelete(discount.id)\">Zrušit slevu\n                </button>\n              </div>\n            </div>\n            <div class=\"col-md-7\">\n              <div class=\"card mb-4\">\n                <div class=\"card-header\"><h4>{{selectedProduct.name}}</h4></div>\n                <div class=\"card-body\">\n                  <div class=\"row\">\n                    <div class=\"col\">\n                      <img src=\"{{productsService.getPictureUrl(selectedProduct)}}\" alt=\"{{selectedProduct.name}}\"\n                           height=\"100\"\n                           width=\"100\">\n                      <p class=\"card-text\">\n                        <del>{{selectedProduct.price.toFixed(2)}} CZK</del>\n                      </p>\n                      <h5 class=\"card-text text-warning\">{{discountPrice.toFixed(2)}} CZK</h5>\n                      <button class=\"btn btn-success\">Objednat</button>\n                    </div>\n                    <div class=\"col\">\n                      <h4 class=\"card-text text-warning\">Sleva!</h4>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div *ngIf=\"discountsOnGoing.length>0\">\n      <h2 class=\"text-secondary mb-3\">Právě probíhající slevy</h2>\n      <div class=\"row\">\n        <div class=\"col-lg-6\" *ngFor=\"let discount of discountsOnGoing\">\n          {{updateSelectedDiscount(discount)}}\n          <div class=\"row\">\n            <div class=\"col-md-5\">\n              <div class=\"row\">\n                <div class=\"card\">\n                  <div class=\"card-header\"><h4>Sleva číslo {{discount.id}}</h4></div>\n                  <div class=\"card-body\">\n                    <div class=\"card-text\">Sleva: {{discount.percent}}%</div>\n                    <div class=\"card-text\">Datum od: {{discountsService.dateToUserFriendlyStr(discount.datefrom)}}</div>\n                    <div class=\"card-text\">Datum do: {{discountsService.dateToUserFriendlyStr(discount.dateto)}}</div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-md-7\">\n              <div class=\"card\">\n                <div class=\"card-header\"><h4>{{selectedProduct.name}}</h4></div>\n                <div class=\"card-body\">\n                  <div class=\"row\">\n                    <div class=\"col\">\n                      <img src=\"{{productsService.getPictureUrl(selectedProduct)}}\" alt=\"{{selectedProduct.name}}\"\n                           height=\"100\"\n                           width=\"100\">\n                      <p class=\"card-text\">\n                        <del>{{selectedProduct.price.toFixed(2)}} CZK</del>\n                      </p>\n                      <h5 class=\"card-text text-warning\">{{discountPrice.toFixed(2)}} CZK</h5>\n                      <button class=\"btn btn-success\">Objednat</button>\n                    </div>\n                    <div class=\"col\">\n                      <h4 class=\"card-text text-warning\">Sleva!</h4>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div *ngIf=\"discountsPast.length>0\">\n      <h2 class=\"text-secondary mb-3\">Již uběhlé slevy</h2>\n      <div class=\"row\">\n        <div class=\"col-lg-6\" *ngFor=\"let discount of discountsPast\">\n          {{updateSelectedDiscount(discount)}}\n          <div class=\"row\">\n            <div class=\"col-md-5\">\n              <div class=\"row\">\n                <div class=\"card\">\n                  <div class=\"card-header\"><h4>Sleva číslo {{discount.id}}</h4></div>\n                  <div class=\"card-body\">\n                    <div class=\"card-text\">Sleva: {{discount.percent}}%</div>\n                    <div class=\"card-text\">Datum od: {{discountsService.dateToUserFriendlyStr(discount.datefrom)}}</div>\n                    <div class=\"card-text\">Datum do: {{discountsService.dateToUserFriendlyStr(discount.dateto)}}</div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-md-7\">\n              <div class=\"card\">\n                <div class=\"card-header\"><h4>{{selectedProduct.name}}</h4></div>\n                <div class=\"card-body\">\n                  <div class=\"row\">\n                    <div class=\"col\">\n                      <img src=\"{{productsService.getPictureUrl(selectedProduct)}}\" alt=\"{{selectedProduct.name}}\"\n                           height=\"100\"\n                           width=\"100\">\n                      <p class=\"card-text\">\n                        <del>{{selectedProduct.price.toFixed(2)}} CZK</del>\n                      </p>\n                      <h5 class=\"card-text text-warning\">{{discountPrice.toFixed(2)}} CZK</h5>\n                      <button class=\"btn btn-success\">Objednat</button>\n                    </div>\n                    <div class=\"col\">\n                      <h4 class=\"card-text text-warning\">Sleva!</h4>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div *ngIf=\"isAlterDiscount\">\n  <app-discounts-alter [discountToAlter]=\"focusedDiscount\"\n                       [selectedProduct]=\"selectedProduct\"\n                       (finishedAlterDiscount)=\"finishAlteration($event)\"\n                       (showAll)=\"showAllDiscounts($event)\"\n  >\n  </app-discounts-alter>\n</div>\n\n<div id=\"confirmDeleteDiscount\" class=\"modal fade\" *ngIf=\"focusedDiscount!=null\">\n  <div class=\"modal-dialog modal-md\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h2 class=\"modal-title text-secondary\">Smazat slevu</h2>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n      </div>\n      <div class=\"modal-body\">\n        <h4 class=\"text-primary\">Opravdu si přejede vymazat slevu čislo {{focusedDiscount.id}}?</h4>\n        <button type=\"button\" class=\"btn btn-md btn-success\" data-dismiss=\"modal\"\n                (click)=\"deleteDiscount(focusedDiscount.id)\">Ano\n        </button>\n        <button type=\"button\" class=\"btn btn-md btn-danger float-right\" data-dismiss=\"modal\">Ne</button>\n      </div>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsHeaderHeaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<header>\n    <a routerLink=\"\" class=\"mr-auto\"> <img\n      src=\"https://ae01.alicdn.com/kf/HTB1_gUhRVXXXXbXXpXXq6xXFXXX8/Top-Tees-Custom-Any-Logo-Size-M4-SHERMAN-TANK-M-4-decals-kit-US-model-M4A1.jpg\"\n      height=\"100\" width=\"100\">\n    </a>\n</header>\n\n<nav id=\"nav\" class=\"navbar navbar-expand-md bg-dark navbar-dark sticky-top\">\n  <ul class=\"navbar-nav mr-auto\">\n    <li class=\"nav-item\" *ngIf=\"loginService.isAdminMode()\">\n      <a class=\"nav-link cursor\" routerLink=\"customers\">Zákazníci</a>\n    </li>\n    <li class=\"nav-item dropdown\" *ngIf=\"loginService.isAdminMode()\">\n      <a href=\"#\" class=\"nav-link cursor\" routerLink=\"products/add\">Přidat produkt</a>\n    </li>\n    <li class=\"nav-item dropdown\" *ngIf=\"loginService.isAdminMode()\">\n      <a href=\"#\" class=\"nav-link dropdown-toggle\" id=\"navbardrop1\" data-toggle=\"dropdown\">Kategorie</a>\n      <div class=\"dropdown-menu\">\n        <a class=\"dropdown-item cursor\" routerLink=\"categories\">Kategorie</a>\n        <a class=\"dropdown-item cursor\" routerLink=\"categories/add\">Přidat</a>\n        <a class=\"dropdown-item cursor\" routerLink=\"categories/alter\">Upravit</a>\n      </div>\n    </li>\n\n    <li class=\"nav-item\" *ngIf=\"loginService.isUserLoggedIn()\">\n      <a class=\"nav-link cursor\" routerLink=\"orders\">Objednávky</a>\n    </li>\n    <li class=\"nav-item dropdown\" *ngIf=\"loginService.isAdminMode()\">\n      <a href=\"#\" class=\"nav-link dropdown-toggle\" id=\"navbardrop2\" data-toggle=\"dropdown\">Slevy</a>\n      <div class=\"dropdown-menu\">\n        <a class=\"dropdown-item cursor\" routerLink=\"discounts\">Výpis</a>\n        <a class=\"dropdown-item cursor\" routerLink=\"discounts/add\">Přidat</a>\n      </div>\n    </li>\n  </ul>\n  <ul class=\"navbar-nav\" *ngIf=\"loginService.isUserLoggedIn()\">\n    <li class=\"nav-item dropdown\">\n      <a class=\"nav-link dropdown-toggle cursor\" data-toggle=\"dropdown\">{{loginService.getUsername()}}</a>\n      <div class=\"dropdown-menu dropdown-menu-right\">\n        <a class=\"dropdown-item cursor\" routerLink=\"logout\">Odhlásit</a>\n        <a class=\"dropdown-item cursor\" *ngIf=\"loginService.isUserAdmin()&&!loginService.isAdminMode()\"\n           (click)=\"changeAdminMode()\">Zapnout režim admina</a>\n        <a class=\"dropdown-item cursor\" *ngIf=\"loginService.isUserAdmin()&&loginService.isAdminMode()\"\n           (click)=\"changeAdminMode()\">Vypnout režim admina</a>\n      </div>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link cursor\" routerLink=\"cart\"><i class=\"material-icons\">shopping_cart</i>{{itemsInCart}}\n      </a>\n    </li>\n  </ul>\n  <ul class=\"navbar-nav\" *ngIf=\"!loginService.isUserLoggedIn()\">\n    <li class=\"nav-item\">\n      <a class=\"nav-link cursor\" data-toggle=\"modal\" data-target=\"#LoginForm\" #loginFormOpenButton>Přihlásit</a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link cursor\" data-toggle=\"modal\" data-target=\"#RegisterForm\">Registrovat</a>\n    </li>\n  </ul>\n</nav>\n\n<div id=\"LoginForm\" class=\"modal fade\">\n  <div class=\"modal-dialog modal-sm\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Přihlášení</h4>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" #loginFormCloseButton>\n          &times;\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <app-login (loginFinished)=\"closeLoginFormMessage($event)\"></app-login>\n      </div>\n    </div>\n  </div>\n</div>\n<div id=\"RegisterForm\" class=\"modal fade\">\n  <div class=\"modal-dialog modal-sm\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Registrace</h4>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" #registerFormCloseButton>&times;</button>\n      </div>\n      <div class=\"modal-body\">\n        <app-register-customer (registerFinished)=\"closeRegisterFormMessage($event)\"></app-register-customer>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!--div *ngIf=\"loginService.isUserLoggedIn()\">\n  {{checkToken()}}\n</div-->\n<!--h5>Upravit</h5>\n<dl>\n  <dt>Mezery</dt>\n  <dd>- skoro všude</dd>\n  <dt>Nadpisy a texty</dt>\n  <dd>- chce to hezčí</dd>\n</dl-->\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/productTypes/product-types-add/product-types-add.component.html":
  /*!**********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/productTypes/product-types-add/product-types-add.component.html ***!
    \**********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsProductTypesProductTypesAddProductTypesAddComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div *ngIf=\"loadingState.isError()\" class=\"alert alert-danger\">Spojení se serverem selhalo</div>\n<div *ngIf=\"loadingState.isWorking()\"><span class=\"spinner-border spinner-border-sm\"></span></div>\n<div *ngIf=\"loadingState.isSuccess()\">\n  <div *ngIf=\"workinsState.isError()\" class=\"alert alert-danger\">{{workinsState.getError()}}</div>\n  <div *ngIf=\"workinsState.isSuccess()\" class=\"alert alert-success\">Kategorie úspěšně přidána</div>\n  <h2 class=\"text-center text-secondary\"> Přidat kategorii</h2>\n\n  <form>\n    <div class=\"form-group\">\n      <label for=\"name\" classw=\"form-label\">Název</label>\n      <input id=\"name\" name=\"name\" type=\"text\" class=\"form-control\" [(ngModel)]=\"productType.typeName\" required/>\n    </div>\n    <button type=\"button\" class=\"btn btn-primary form-control\" (click)=\"insertNew()\">Přidat</button>\n  </form>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/productTypes/product-types-alter/product-types-alter.component.html":
  /*!**************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/productTypes/product-types-alter/product-types-alter.component.html ***!
    \**************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsProductTypesProductTypesAlterProductTypesAlterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h2 class=\"text-secondary text-center\">Seznam kategorií</h2>\n<div *ngIf=\"loadingState.isError()\">\n  <div class=\"alert alert-danger\">Spojení se serverem selhalo.</div>\n</div>\n<div *ngIf=\"loadingState.isWorking()\">\n  <span class=\"spinner-border spinner-border-sm\"></span>\n</div>\n<div *ngIf=\"loadingState.isSuccess()\">\n  <table class=\"table table-light table-hover\">\n    <thead class=\"thead-dark\">\n    <tr>\n      <th>ID</th>\n      <th>Název</th>\n      <th></th>\n    </tr>\n    </thead>\n    <tbody>\n    <tr *ngFor=\"let pt of productTypes; let index = index;trackBy:trackByIndex\">\n      <td>{{pt.id}}</td>\n\n      <td *ngIf=\"changingIndex!=index\">{{pt.typeName}}</td>\n      <td *ngIf=\"changingIndex==index\"><input type=\"text\" [(ngModel)]=\"productTypes[index].typeName\"></td>\n\n      <td *ngIf=\"changingIndex!=index\">\n        <button class=\"btn btn-primary\" (click)=\"changingType(index)\">Změnit název</button>\n      </td>\n      <td *ngIf=\"changingIndex==index\">\n        <button *ngIf=\"workingOn!=index\" class=\"btn btn-success\" (click)=\"saveChanges(index)\">Uložit změny</button>\n        <span *ngIf=\"workingOn==index\">Loading...</span>\n      </td>\n    </tr>\n    </tbody>\n  </table>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/productTypes/product-types/product-types.component.html":
  /*!**************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/productTypes/product-types/product-types.component.html ***!
    \**************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsProductTypesProductTypesProductTypesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h1 class=\"text-primary text-center\">Kategorie</h1>\n<div class=\"row\">\n  <div class=\"col-6\"><app-product-types-alter></app-product-types-alter></div>\n  <div class=\"col-6\"><app-product-types-add></app-product-types-add></div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/products/product-alter/product-alter.component.html":
  /*!**********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/products/product-alter/product-alter.component.html ***!
    \**********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsProductsProductAlterProductAlterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h1 class=\"text-primary text-center\">Upravit produkt</h1>\n<div *ngIf=\"sendingState.isSuccess()\" class=\"alert alert-success\">Produkt úspěšně upraven</div>\n<div *ngIf=\"sendingState.isError()\" class=\"alert alert-danger\">Při úpravě nastala chyba</div>\n<h3 class=\"text-secondary\">Náhled: </h3>\n<div *ngIf=\"loadingState.isWorking()\">\n  <span class=\"spinner-border spinner-border-sm\"></span>\n</div>\n<div *ngIf=\"loadingState.isSuccess()\" class=\"row\">\n  <div class=\"col-md-4\">\n    <div class=\"card\">\n      <div class=\"card-header\">{{this.productToAlter.name}}</div>\n      <div class=\"card-body\">\n        <img id=\"{{productToAlter.id}}\" src=\"{{productsService.getPictureUrl(productToAlter)}}\"\n             alt=\"{{productToAlter.name}}\" height=\"100\"\n             width=\"100\">\n        <p class=\"card-text\">{{productToAlter.price.toFixed(2)}} CZK</p>\n        <button class=\"btn btn-success btn-md\" (click)=\"test()\">Objednat</button>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-8\">\n    <form>\n      <div class=\"form-group\">\n        <label for=\"name\" class=\"form-label\">Název</label>\n        <input id=\"name\" name=\"name\" class=\"form-control\" type=\"text\" [(ngModel)]=\"productToAlter.name\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"price\" class=\"form-label\">Cena</label>\n        <input id=\"price\" name=\"price\" class=\"form-control\" type=\"number\" [(ngModel)]=\"productToAlter.price\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"imgURL\" class=\"form-label\">Adresa obrázku</label>\n        <input id=\"imgURL\" name=\"imgURL\" class=\"form-control\" type=\"text\" [(ngModel)]=\"productToAlter.pictureUrl\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"category\" class=\"form-label\">Kategorie</label>\n        <select class=\"form-control\" id=\"category\" name=\"productType\" (change)=\"changeProductType($event)\">\n          <option *ngFor=\"let productType of productTypes\" [value]=\"productType.id\"\n                  id=\"{{productType.id}}\"\n                  [selected]=\"productType.id == productToAlter.productTypeId\">{{productType.typeName}}</option>\n        </select>\n      </div>\n      <div class=\"form-group\">\n        <label *ngIf=\"productToAlter.selling\" for=\"selling\" class=\"form-label alert-success\">Je v prodeji</label>\n        <label *ngIf=\"!productToAlter.selling\" for=\"selling\" class=\"form-label alert-danger\">Není v prodeji</label>\n        <input id=\"selling\" name=\"selling\" class=\"form-control btn btn-primary\" type=\"checkbox\" [(ngModel)]=\"productToAlter.selling\">\n      </div>\n    </form>\n  </div>\n</div>\n<div class=\"row mb-3\">\n  <button class=\"btn-warning btn\" (click)=\"alterProduct()\">Uložit změny</button>\n</div>\n<!--div class=\"row mb-3\">\n  <button class=\"btn-primary btn\" (click)=\"showAllProducts()\">Zpět</button>\n</div-->\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/products/products-add/products-add.component.html":
  /*!********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/products/products-add/products-add.component.html ***!
    \********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsProductsProductsAddProductsAddComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div *ngIf=\"loadingState.isError()\" class=\"alert alert-danger text-center\">{{loadingState.getError()}}</div>\n<div *ngIf=\"loadingState.isSuccess()\" class=\"alert alert-success\">Produkt úspěšně přidán</div>\n<h1 class=\"text-center text-primary\">Přidat produkt</h1>\n<div class=\"row\">\n  <div class=\"col-md\">\n    <h2>Náhled</h2>\n    <div class=\"card\">\n      <div class=\"card-header\" *ngIf=\"product.name!=null\">{{product.name}}</div>\n      <div class=\"card-body\">\n        <img src=\"{{productsService.getPictureUrl(product)}}\" alt=\"{{product.name}}\" height=\"100\" width=\"100\">\n        <p class=\"card-text\">&nbsp;</p>\n        <h5 class=\"card-text\" *ngIf=\"product.price!=null\">{{product.price.toFixed(2)}} CZK</h5>\n        <button class=\"btn btn-success btn-md\">Objednat</button>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md\" *ngIf=\"!finished\">\n    <form>\n      <div class=\"form-group\">\n        <label for=\"name\" class=\"form-label\">Název</label>\n        <input id=\"name\" name=\"name\" type=\"text\" class=\"form-control\" [(ngModel)]=\"product.name\" required/>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"price\" class=\"form-label\">Cena</label>\n        <input id=\"price\" name=\"price\" type=\"number\" class=\"form-control\" [(ngModel)]=\"product.price\" min=\"1\" required/>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"pictureUrl\" class=\"form-label\">URL Obrázku</label>\n        <input id=\"pictureUrl\" name=\"pictureUrl\" type=\"text\" class=\"form-control\" [(ngModel)]=\"product.pictureUrl\"\n               required/>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"category\" class=\"form-label\">Kategorie</label>\n        <select class=\"form-control\" id=\"category\" name=\"productType\" (change)=\"changeProductType($event)\">\n          <option *ngFor=\"let productType of productTypes\" [value]=\"productType.id\"\n                  id=\"{{productType.id}}\">{{productType.typeName}}</option>\n        </select>\n      </div>\n      <button type=\"button\" class=\"btn btn-primary form-control\" (click)=\"insertNew()\">Přidat</button>\n    </form>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/products/products/products.component.html":
  /*!************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/products/products/products.component.html ***!
    \************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsProductsProductsProductsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div *ngIf=\"loadingTypeState.isSuccess()\">\n  <h1 class=\"text-center text-primary mb-5\">{{productType.typeName}}</h1>\n  <ul class=\"pagination pagination-md\">\n    <li *ngFor=\"let page of pages\" class=\"page-item\">\n      <button type=\"button\" class=\"page-link\" (click)=\"loadPage(page)\">{{page}}</button>\n    </li>\n  </ul>\n</div>\n<div *ngIf=\"loadingProductState.isWorking() || loadingTypeState.isWorking()\">\n  <span class=\"spinner-border spinner-border-sm\"></span>\n</div>\n<div *ngIf=\"loadingProductState.isError() || loadingTypeState.isError()\">\n  <div class=\"alert alert-danger\">Spojení se serverem selhalo.</div>\n</div>\n<div *ngIf=\"loadingProductState.isSuccess()\">\n  <div *ngIf=\"loginService.isAdminMode()\" class=\"mb-3\">\n    <button *ngIf=\"!this.showAdminProducts\" class=\"btn-secondary btn btn-md\" (click)=\"changeShowAdminProducts()\">\n      Zobrazit vyřazené produkty\n    </button>\n    <button *ngIf=\"this.showAdminProducts\" class=\"btn-secondary btn btn-md\" (click)=\"changeShowAdminProducts()\">\n      Zobrazit produkty v prodeji\n    </button>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-lg-4\" *ngFor=\"let product of products\">\n      <div class=\"card mb-4\">\n        <div class=\"card-header\">{{product.name}}</div>\n        <div class=\"card-body\" *ngIf=\"!loginService.isAdminMode()\">\n          <div class=\"row mb-2\">\n            <div class=\"col\">\n              <img src=\"{{productService.getPictureUrl(product)}}\" alt=\"{{product.name}}\" height=\"100\"\n                   width=\"100\">\n              <div *ngIf=\"product.price!=product.discountPrice\">\n                <p class=\"card-text\">\n                  <del>{{product.price.toFixed(2)}} CZK</del>\n                </p>\n                <h5 class=\"card-text text-warning\">{{product.discountPrice.toFixed(2)}} CZK</h5>\n              </div>\n              <div *ngIf=\"product.price==product.discountPrice\">\n                <p class=\"card-text\">&nbsp;</p>\n                <h5 class=\"card-text\">{{product.discountPrice.toFixed(2)}} CZK</h5>\n              </div>\n            </div>\n            <div class=\"col\">\n              <h4 class=\"card-text text-warning\" *ngIf=\"product.price!=product.discountPrice\">Sleva!</h4>\n            </div>\n          </div>\n          <div class=\"row\" *ngIf=\"loginService.isUserLoggedIn()\">\n            <button *ngIf=\"product.selling\" (click)=\"focusProduct(product.id)\"\n                    class=\"btn btn-success btn-md stretched-link\"\n                    data-toggle=\"modal\"\n                    data-target=\"#orderProduct\">Objednat\n            </button>\n          </div>\n        </div>\n\n        <div class=\"card-body\" *ngIf=\"loginService.isAdminMode()\">\n          <img src=\"{{productService.getPictureUrl(product)}}\" alt=\"{{product.name}}\" height=\"100\"\n               width=\"100\">\n          <p class=\"card-text\">{{product.price.toFixed(2)}} CZK</p>\n          <div class=\"row\">\n            <button (click)=\"alterProduct(product.id)\" class=\"btn btn-secondary btn-md\">Upravit produkt</button>\n          </div>\n          <div class=\"row\" *ngIf=\"!showAdminProducts\">\n            <button (click)=\"focusProduct(product.id)\" class=\"btn btn-danger btn-md\" data-toggle=\"modal\"\n                    data-target=\"#confirmPutProductOut\">Vyřadit z prodeje\n            </button>\n          </div>\n          <div class=\"row\" *ngIf=\"showAdminProducts\">\n            <button (click)=\"focusProduct(product.id)\" class=\"btn btn-success btn-md\" data-toggle=\"modal\"\n                    data-target=\"#confirmPutProductBack\">Zařadit zpět do prodeje\n            </button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <button (click)=\"loadMore()\" *ngIf=\"currentPage<pages.length\" class=\"btn btn-primary btn-md\">Načíst Další\n  </button>\n</div>\n\n<div *ngIf=\"loadingMoreProductsState.isWorking()\">\n  <span class=\"spinner-border spinner-border-sm\"></span>\n</div>\n\n<div *ngIf=\"loginService.isAdminMode()&&focusedProduct!=null\">\n  <div id=\"confirmPutProductOut\" class=\"modal fade\">\n    <div class=\"modal-dialog modal-md\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h2 class=\"modal-title text-secondary\">Vyřazení produktu</h2>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n        </div>\n        <div class=\"modal-body\">\n          <h4 class=\"text-primary\">Opravdu chcete vyřadit produkt {{focusedProduct.name}} z prodeje?</h4>\n          <button type=\"button\" class=\"btn btn-md btn-success\" data-dismiss=\"modal\" (click)=\"putProductOut()\">Ano\n          </button>\n          <button type=\"button\" class=\"btn btn-md btn-danger float-right\" data-dismiss=\"modal\">Ne</button>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div id=\"confirmPutProductBack\" class=\"modal fade\">\n    <div class=\"modal-dialog modal-md\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h2 class=\"modal-title text-secondary\">Zařazení produktu</h2>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n        </div>\n        <div class=\"modal-body\">\n          <h4 class=\"text-primary\">Opravdu chcete zařadit produkt {{focusedProduct.name}} zpět do prodeje?</h4>\n          <button type=\"button\" class=\"btn btn-md btn-success\" data-dismiss=\"modal\" (click)=\"putProductBack()\">Ano\n          </button>\n          <button type=\"button\" class=\"btn btn-md btn-danger float-right\" data-dismiss=\"modal\">Ne</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div id=\"orderProduct\" class=\"modal fade\" *ngIf=\"focusedProduct!=null\">\n  <div class=\"modal-dialog modal-md\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h2 class=\"modal-title text-secondary\">Objednat produkt {{focusedProduct.name}}</h2>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n      </div>\n      <div class=\"modal-body\">\n        <h6 class=\"form-label\">Současná cena za kus: {{focusedProduct.discountPrice}}</h6>\n        <h5 class=\"form-label\">Počet: </h5>\n        <input class=\"form-control\" type=\"number\" min=\"1\" (keyup)=\"amountChanged()\" [(ngModel)]=\"amountToAdd\">\n        <h4 *ngIf=\"totalPrice!=null\">Celková cena: {{totalPrice.toFixed(2)}} CZK</h4>\n        <button type=\"button\" class=\"btn btn-md btn-success\" data-dismiss=\"modal\" (click)=\"addToCart()\">Přidat</button>\n        <button type=\"button\" class=\"btn btn-md btn-danger float-right\" data-dismiss=\"modal\">Zrušit</button>\n      </div>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shopping/cart/cart.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shopping/cart/cart.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsShoppingCartCartComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div *ngIf=\"shoppingCartService.isCartExists()||componentState.isFinished()\">\n  <div *ngIf=\"!componentState.isAddress()\">\n    <h1 *ngIf=\"!componentState.isFinished()\" class=\"text-center text-primary\">Můj košík</h1>\n    <div *ngIf=\"componentState.isFinished()\">\n      <div class=\"alert alert-success\"><b>Objednávka úspěšně dokončena!</b></div>\n      <h2 class=\"text-center text-primary\">Objednávka číslo {{orderNumber}}</h2>\n    </div>\n    <div *ngIf=\"loadingState.isWorking()\">\n      <span class=\"spinner-border spinner-border-sm\"></span> Loading...\n    </div>\n    <div *ngIf=\"loadingState.isError()\">\n      <div class=\"alert alert-danger\">Spojení se serverem selhalo</div>\n    </div>\n    <div *ngIf=\"loadingState.isSuccess()\">\n      <table class=\"table table-light table-hover\">\n        <thead class=\"thead-dark\">\n        <tr>\n          <th></th>\n          <th>Název</th>\n          <th>Cena</th>\n          <th>Množství</th>\n          <th>Cena celkem</th>\n        </tr>\n        </thead>\n        <tbody>\n        <tr *ngFor=\"let item of cart\" data-toggle=\"modal\" data-target=\"#changeAmount\"\n            (click)=\"alterAmount(item.productID)\">\n          {{loadProduct(item.productID)}}\n          <td><img src=\"{{productsService.getPictureUrl(listedProduct)}}\" width=\"50\" height=\"50\"\n                   alt=\"{{listedProduct.name}}\"></td>\n          <td>{{listedProduct.name}}</td>\n          <td>{{listedProduct.discountPrice}}</td>\n          <td>{{item.amount}}</td>\n          <td>{{item.amount * listedProduct.discountPrice}}</td>\n        </tr>\n        </tbody>\n      </table>\n      <h4 class=\"text-info\">Celková cena: {{totalPrice.toFixed(2)}} CZK</h4>\n      <div class=\"row mb-2\">\n        <button class=\"btn btn-success btn-md\" (click)=\"componentState.setAddress()\"\n                *ngIf=\"componentState.isViewCart()&&cart.length>0\">Objednat\n        </button>\n      </div>\n      <div class=\"row mb-2\">\n        <button class=\"btn btn-danger btn-md\" (click)=\"empetyCart()\"\n                *ngIf=\"componentState.isViewCart()&&cart.length>0\">Vyprázdnit košík\n        </button>\n      </div>\n\n      <div *ngIf=\"componentState.isGoToFinish()\">\n        <h4 class=\"text-secondary\">Adresa: {{orderAddr.street}} {{orderAddr.city}}, {{orderAddr.psc}}</h4>\n        <button class=\"btn btn-success btn-md\" (click)=\"finishOrder()\">Dokončit objednávku</button>\n      </div>\n\n    </div>\n  </div>\n  <div *ngIf=\"componentState.isAddress()\">\n    <h2>Adresa</h2>\n    <div class=\"form-group\">\n      <label for=\"city\" class=\"form-label\">Město: </label>\n      <input id=\"city\" type=\"text\" class=\"form-control\" [(ngModel)]=\"orderAddr.city\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"street\" class=\"form-label\">Ulice a č.p.: </label>\n      <input id=\"street\" type=\"text\" class=\"form-control\" [(ngModel)]=\"orderAddr.street\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"psc\" class=\"form-label\">PSČ: </label>\n      <input id=\"psc\" type=\"text\" class=\"form-control\" [(ngModel)]=\"orderAddr.psc\">\n    </div>\n    <button class=\"btn btn-success btn-md\" (click)=\"componentState.setGoToFinish()\">Pokračovat</button>\n  </div>\n</div>\n<div *ngIf=\"!shoppingCartService.isCartExists()&&!componentState.isFinished()\">\n  <div class=\"alert alert-primary\">Košík je prázdný</div>\n  {{showProducts()}}\n</div>\n\n<div id=\"changeAmount\" class=\"modal fade\" *ngIf=\"focusedProduct!=null\">\n  <div class=\"modal-dialog modal-md\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h2 class=\"modal-title text-secondary\">Produkt {{focusedProduct.name}}</h2>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n      </div>\n      <div class=\"modal-body\">\n        <h6 class=\"form-label\">Současná cena za kus: {{focusedProduct.discountPrice}}</h6>\n        <h5 class=\"form-label\">Počet: </h5>\n        <input class=\"form-control\" type=\"number\" min=\"0\" (keyup)=\"amountChanged()\"\n               [(ngModel)]=\"alteredAmount\">\n        <h4>Cena: {{focusedProduct.discountPrice * alteredAmount}} CZK</h4>\n        <button type=\"button\" class=\"btn btn-md btn-success\" data-dismiss=\"modal\" (click)=\"finishUpdateAmount()\">Uložit\n          změny\n        </button>\n        <button type=\"button\" class=\"btn btn-md btn-danger float-right\" data-dismiss=\"modal\">Zrušit</button>\n      </div>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shopping/orders/orders.component.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shopping/orders/orders.component.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsShoppingOrdersOrdersComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div *ngIf=\"componentState.isShowAll()\">\n  <h1 *ngIf=\"!loginService.isAdminMode()\" class=\"text-primary text-center mb-5\">Moje objednávky</h1>\n  <h1 *ngIf=\"loginService.isAdminMode()\" class=\"text-primary text-center mb-5\">Výpis všech objednávek</h1>\n  <div *ngIf=\"loadingState.isWorking()\">\n\n    <span class=\"spinner-border spinner-border-sm\"></span> Loading...\n  </div>\n  <div *ngIf=\"loadingState.isError()\">\n    <div class=\"alert alert-danger\">Spojení se serverem selhalo.</div>\n  </div>\n  <div *ngIf=\"loadingState.isSuccess()\">\n    <table class=\"table table-light table-hover\">\n      <thead class=\"thead-dark\">\n      <tr>\n        <th>Číslo objednávky</th>\n        <th *ngIf=\"loginService.isAdminMode()\">Uživatel</th>\n        <th>Adresa</th>\n        <th>Datum objednání</th>\n        <th>Celková cena</th>\n        <th>Druhů zboži</th>\n      </tr>\n      </thead>\n      <tbody *ngIf=\"!loginService.isAdminMode()\">\n      <tr *ngFor=\"let orderInfo of orderInfos\" (click)=\"orderOut(orderInfo.order.id)\" data-toggle=\"tooltip\"\n          title=\"Vypsat obsah objednávky\" class=\"cursor\">\n        <td>{{orderInfo.order.id}}</td>\n        <td>{{addressToString(orderInfo.order.address)}}</td>\n        <td>{{orderInfo.order.orderdate}}</td>\n        <td>{{getTotalOrderPrice(orderInfo.items)}}</td>\n        <td>{{orderInfo.items.length}}</td>\n      </tr>\n      </tbody>\n      <tbody *ngIf=\"loginService.isAdminMode()\">\n      <tr *ngFor=\"let orderInfo of adminOrderInfos\" (click)=\"orderOut(orderInfo.order.id)\" data-toggle=\"tooltip\"\n          title=\"Vypsat obsah objednávky\" class=\"cursor\">\n        <td>{{orderInfo.order.id}}</td>\n        <td>{{getCustomerStringByID(orderInfo.order.customerId)}}</td>\n        <td>{{addressToString(orderInfo.order.address)}}</td>\n        <td>{{orderInfo.order.orderdate}}</td>\n        <td>{{getTotalOrderPrice(orderInfo.items)}}</td>\n        <td>{{orderInfo.items.length}}</td>\n      </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n\n<div *ngIf=\"componentState.isShowOne()\">\n  <h1 class=\"text-center text-primary\">Objednávka číslo {{orderID}}</h1>\n  <table class=\"table table-light table-hover\">\n    <thead class=\"thead-dark\">\n    <tr>\n      <th></th>\n      <th>Název</th>\n      <th>Cena</th>\n      <th>Množství</th>\n      <th>Cena celkem</th>\n    </tr>\n    </thead>\n    <tbody>\n    <tr *ngFor=\"let item of getCurrentOrder()\">\n      {{loadProduct(item.productID)}}\n      <td><img src=\"{{productsService.getPictureUrl(currentProduct)}}\" width=\"50\" height=\"50\"\n               alt=\"{{currentProduct.name}}\"></td>\n      <td>{{currentProduct.name}}</td>\n      <td>{{item.pricePerProduct}}</td>\n      <td>{{item.amount}}</td>\n      <td>{{item.amount * item.pricePerProduct}}</td>\n    </tr>\n    </tbody>\n  </table>\n  <div class=\"row\">\n    <div class=\"col-md-5\" *ngIf=\"this.loginService.isAdminMode()\">\n      <h2 class=\"text-secondary\">Uživatel</h2>\n      <div class=\"card\">\n        <div class=\"card-header\"><h4>{{currentCustomer.name}} {{currentCustomer.surname}}</h4></div>\n        <div class=\"card-body\">\n          <div class=\"row\">\n            <div class=\"col\">\n              <h5>ID:</h5>\n              <h5>Uživatelské jméno:</h5>\n              <h5>E-mail:</h5>\n            </div>\n            <div class=\"col\">\n              <h5>{{currentCustomer.id}}</h5>\n              <h5>{{currentCustomer.username}}</h5>\n              <h5>{{currentCustomer.email}}</h5>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md\">\n      <button (click)=\"getAllOrders()\" class=\"btn btn-primary\">Zpět na výpis objednávek</button>\n    </div>\n  </div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/side-nav/side-nav.component.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/side-nav/side-nav.component.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsSideNavSideNavComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ul class=\"nav flex-column\">\n  <li *ngFor=\"let productType of productTypes\" class=\"nav-item\">\n    <a class=\"nav-link\" [routerLink]=\"['products', productType.id]\"\n       >{{productType.typeName}}</a>\n  </li>\n</ul>\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _components_products_products_products_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/products/products/products.component */
    "./src/app/components/products/products/products.component.ts");
    /* harmony import */


    var _components_customers_customers_customers_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/customers/customers/customers.component */
    "./src/app/components/customers/customers/customers.component.ts");
    /* harmony import */


    var _components_products_products_add_products_add_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/products/products-add/products-add.component */
    "./src/app/components/products/products-add/products-add.component.ts");
    /* harmony import */


    var _components_customers_register_customer_register_customer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/customers/register-customer/register-customer.component */
    "./src/app/components/customers/register-customer/register-customer.component.ts");
    /* harmony import */


    var _components_auth_logout_logout_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/auth/logout/logout.component */
    "./src/app/components/auth/logout/logout.component.ts");
    /* harmony import */


    var _components_auth_Services_AuthGuard_auth_guard_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/auth/Services/AuthGuard/auth-guard-user.service */
    "./src/app/components/auth/Services/AuthGuard/auth-guard-user.service.ts");
    /* harmony import */


    var _components_auth_Services_AuthGuard_auth_guard_admin_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/auth/Services/AuthGuard/auth-guard-admin.service */
    "./src/app/components/auth/Services/AuthGuard/auth-guard-admin.service.ts");
    /* harmony import */


    var _components_shopping_cart_cart_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/shopping/cart/cart.component */
    "./src/app/components/shopping/cart/cart.component.ts");
    /* harmony import */


    var _components_shopping_orders_orders_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/shopping/orders/orders.component */
    "./src/app/components/shopping/orders/orders.component.ts");
    /* harmony import */


    var _components_auth_invalid_token_invalid_token_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./components/auth/invalid-token/invalid-token.component */
    "./src/app/components/auth/invalid-token/invalid-token.component.ts");
    /* harmony import */


    var _components_discounts_discounts_discounts_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./components/discounts/discounts/discounts.component */
    "./src/app/components/discounts/discounts/discounts.component.ts");
    /* harmony import */


    var _components_discounts_discounts_add_discounts_add_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./components/discounts/discounts-add/discounts-add.component */
    "./src/app/components/discounts/discounts-add/discounts-add.component.ts");
    /* harmony import */


    var _components_products_product_alter_product_alter_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./components/products/product-alter/product-alter.component */
    "./src/app/components/products/product-alter/product-alter.component.ts");
    /* harmony import */


    var _components_productTypes_product_types_alter_product_types_alter_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./components/productTypes/product-types-alter/product-types-alter.component */
    "./src/app/components/productTypes/product-types-alter/product-types-alter.component.ts");
    /* harmony import */


    var _components_productTypes_product_types_add_product_types_add_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./components/productTypes/product-types-add/product-types-add.component */
    "./src/app/components/productTypes/product-types-add/product-types-add.component.ts");
    /* harmony import */


    var _components_productTypes_product_types_product_types_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./components/productTypes/product-types/product-types.component */
    "./src/app/components/productTypes/product-types/product-types.component.ts");

    var routes = [{
      path: '',
      pathMatch: 'full',
      redirectTo: '/products/1'
    }, {
      path: 'products/add',
      component: _components_products_products_add_products_add_component__WEBPACK_IMPORTED_MODULE_5__["ProductsAddComponent"],
      canActivate: [_components_auth_Services_AuthGuard_auth_guard_admin_service__WEBPACK_IMPORTED_MODULE_9__["AuthGuardAdminService"]]
    }, {
      path: 'products/:productID',
      component: _components_products_products_products_component__WEBPACK_IMPORTED_MODULE_3__["ProductsComponent"]
    }, {
      path: 'products/alter/:id',
      component: _components_products_product_alter_product_alter_component__WEBPACK_IMPORTED_MODULE_15__["ProductAlterComponent"],
      canActivate: [_components_auth_Services_AuthGuard_auth_guard_admin_service__WEBPACK_IMPORTED_MODULE_9__["AuthGuardAdminService"]]
    }, {
      path: 'customers',
      component: _components_customers_customers_customers_component__WEBPACK_IMPORTED_MODULE_4__["CustomersComponent"],
      canActivate: [_components_auth_Services_AuthGuard_auth_guard_admin_service__WEBPACK_IMPORTED_MODULE_9__["AuthGuardAdminService"]]
    }, {
      path: 'customers/register',
      component: _components_customers_register_customer_register_customer_component__WEBPACK_IMPORTED_MODULE_6__["RegisterCustomerComponent"]
    }, {
      path: 'logout',
      component: _components_auth_logout_logout_component__WEBPACK_IMPORTED_MODULE_7__["LogoutComponent"],
      canActivate: [_components_auth_Services_AuthGuard_auth_guard_user_service__WEBPACK_IMPORTED_MODULE_8__["AuthGuardUserService"]]
    }, {
      path: 'cart',
      component: _components_shopping_cart_cart_component__WEBPACK_IMPORTED_MODULE_10__["CartComponent"],
      canActivate: [_components_auth_Services_AuthGuard_auth_guard_user_service__WEBPACK_IMPORTED_MODULE_8__["AuthGuardUserService"]]
    }, {
      path: 'orders',
      component: _components_shopping_orders_orders_component__WEBPACK_IMPORTED_MODULE_11__["OrdersComponent"],
      canActivate: [_components_auth_Services_AuthGuard_auth_guard_user_service__WEBPACK_IMPORTED_MODULE_8__["AuthGuardUserService"]]
    }, {
      path: 'loginExpired',
      component: _components_auth_invalid_token_invalid_token_component__WEBPACK_IMPORTED_MODULE_12__["InvalidTokenComponent"]
    }, {
      path: 'discounts',
      component: _components_discounts_discounts_discounts_component__WEBPACK_IMPORTED_MODULE_13__["DiscountsComponent"],
      canActivate: [_components_auth_Services_AuthGuard_auth_guard_admin_service__WEBPACK_IMPORTED_MODULE_9__["AuthGuardAdminService"]]
    }, {
      path: 'discounts/add',
      component: _components_discounts_discounts_add_discounts_add_component__WEBPACK_IMPORTED_MODULE_14__["DiscountsAddComponent"],
      canActivate: [_components_auth_Services_AuthGuard_auth_guard_admin_service__WEBPACK_IMPORTED_MODULE_9__["AuthGuardAdminService"]]
    }, {
      path: 'categories/alter',
      component: _components_productTypes_product_types_alter_product_types_alter_component__WEBPACK_IMPORTED_MODULE_16__["ProductTypesAlterComponent"],
      canActivate: [_components_auth_Services_AuthGuard_auth_guard_admin_service__WEBPACK_IMPORTED_MODULE_9__["AuthGuardAdminService"]]
    }, {
      path: 'categories/add',
      component: _components_productTypes_product_types_add_product_types_add_component__WEBPACK_IMPORTED_MODULE_17__["ProductTypesAddComponent"],
      canActivate: [_components_auth_Services_AuthGuard_auth_guard_admin_service__WEBPACK_IMPORTED_MODULE_9__["AuthGuardAdminService"]]
    }, {
      path: 'categories',
      component: _components_productTypes_product_types_product_types_component__WEBPACK_IMPORTED_MODULE_18__["ProductTypesComponent"],
      canActivate: [_components_auth_Services_AuthGuard_auth_guard_admin_service__WEBPACK_IMPORTED_MODULE_9__["AuthGuardAdminService"]]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'oopr-proj-angular';
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _components_customers_customers_customers_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/customers/customers/customers.component */
    "./src/app/components/customers/customers/customers.component.ts");
    /* harmony import */


    var _components_header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/header/header.component */
    "./src/app/components/header/header.component.ts");
    /* harmony import */


    var _components_auth_invalid_token_invalid_token_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/auth/invalid-token/invalid-token.component */
    "./src/app/components/auth/invalid-token/invalid-token.component.ts");
    /* harmony import */


    var _components_auth_login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/auth/login/login.component */
    "./src/app/components/auth/login/login.component.ts");
    /* harmony import */


    var _components_auth_logout_logout_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/auth/logout/logout.component */
    "./src/app/components/auth/logout/logout.component.ts");
    /* harmony import */


    var _components_customers_register_customer_register_customer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/customers/register-customer/register-customer.component */
    "./src/app/components/customers/register-customer/register-customer.component.ts");
    /* harmony import */


    var _components_products_products_add_products_add_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./components/products/products-add/products-add.component */
    "./src/app/components/products/products-add/products-add.component.ts");
    /* harmony import */


    var _components_products_products_products_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./components/products/products/products.component */
    "./src/app/components/products/products/products.component.ts");
    /* harmony import */


    var _components_products_product_alter_product_alter_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./components/products/product-alter/product-alter.component */
    "./src/app/components/products/product-alter/product-alter.component.ts");
    /* harmony import */


    var _components_shopping_cart_cart_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./components/shopping/cart/cart.component */
    "./src/app/components/shopping/cart/cart.component.ts");
    /* harmony import */


    var _components_shopping_orders_orders_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./components/shopping/orders/orders.component */
    "./src/app/components/shopping/orders/orders.component.ts");
    /* harmony import */


    var _components_auth_Services_basic_auth_interception_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./components/auth/Services/basic-auth-interception.service */
    "./src/app/components/auth/Services/basic-auth-interception.service.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _components_discounts_discounts_discounts_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./components/discounts/discounts/discounts.component */
    "./src/app/components/discounts/discounts/discounts.component.ts");
    /* harmony import */


    var _components_discounts_discounts_add_discounts_add_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./components/discounts/discounts-add/discounts-add.component */
    "./src/app/components/discounts/discounts-add/discounts-add.component.ts");
    /* harmony import */


    var _components_discounts_discounts_alter_discounts_alter_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./components/discounts/discounts-alter/discounts-alter.component */
    "./src/app/components/discounts/discounts-alter/discounts-alter.component.ts");
    /* harmony import */


    var _components_side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./components/side-nav/side-nav.component */
    "./src/app/components/side-nav/side-nav.component.ts");
    /* harmony import */


    var _components_productTypes_product_types_alter_product_types_alter_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./components/productTypes/product-types-alter/product-types-alter.component */
    "./src/app/components/productTypes/product-types-alter/product-types-alter.component.ts");
    /* harmony import */


    var _components_productTypes_product_types_add_product_types_add_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./components/productTypes/product-types-add/product-types-add.component */
    "./src/app/components/productTypes/product-types-add/product-types-add.component.ts");
    /* harmony import */


    var _components_productTypes_product_types_product_types_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./components/productTypes/product-types/product-types.component */
    "./src/app/components/productTypes/product-types/product-types.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _components_customers_customers_customers_component__WEBPACK_IMPORTED_MODULE_6__["CustomersComponent"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"], _components_auth_invalid_token_invalid_token_component__WEBPACK_IMPORTED_MODULE_8__["InvalidTokenComponent"], _components_auth_login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"], _components_auth_logout_logout_component__WEBPACK_IMPORTED_MODULE_10__["LogoutComponent"], _components_customers_register_customer_register_customer_component__WEBPACK_IMPORTED_MODULE_11__["RegisterCustomerComponent"], _components_products_products_add_products_add_component__WEBPACK_IMPORTED_MODULE_12__["ProductsAddComponent"], _components_products_products_products_component__WEBPACK_IMPORTED_MODULE_13__["ProductsComponent"], _components_products_product_alter_product_alter_component__WEBPACK_IMPORTED_MODULE_14__["ProductAlterComponent"], _components_shopping_cart_cart_component__WEBPACK_IMPORTED_MODULE_15__["CartComponent"], _components_shopping_orders_orders_component__WEBPACK_IMPORTED_MODULE_16__["OrdersComponent"], _components_discounts_discounts_discounts_component__WEBPACK_IMPORTED_MODULE_19__["DiscountsComponent"], _components_discounts_discounts_add_discounts_add_component__WEBPACK_IMPORTED_MODULE_20__["DiscountsAddComponent"], _components_discounts_discounts_alter_discounts_alter_component__WEBPACK_IMPORTED_MODULE_21__["DiscountsAlterComponent"], _components_side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_22__["SideNavComponent"], _components_productTypes_product_types_alter_product_types_alter_component__WEBPACK_IMPORTED_MODULE_23__["ProductTypesAlterComponent"], _components_productTypes_product_types_add_product_types_add_component__WEBPACK_IMPORTED_MODULE_24__["ProductTypesAddComponent"], _components_productTypes_product_types_product_types_component__WEBPACK_IMPORTED_MODULE_25__["ProductTypesComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_18__["AppRoutingModule"]],
      providers: [{
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"],
        useClass: _components_auth_Services_basic_auth_interception_service__WEBPACK_IMPORTED_MODULE_17__["BasicAuthInterceptionService"],
        multi: true
      }],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/components/auth/Services/AuthGuard/auth-guard-admin.service.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/components/auth/Services/AuthGuard/auth-guard-admin.service.ts ***!
    \********************************************************************************/

  /*! exports provided: AuthGuardAdminService */

  /***/
  function srcAppComponentsAuthServicesAuthGuardAuthGuardAdminServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuardAdminService", function () {
      return AuthGuardAdminService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../authentication.service */
    "./src/app/components/auth/Services/authentication.service.ts");

    var AuthGuardAdminService =
    /*#__PURE__*/
    function () {
      function AuthGuardAdminService(router, authService) {
        _classCallCheck(this, AuthGuardAdminService);

        this.router = router;
        this.authService = authService;
      }

      _createClass(AuthGuardAdminService, [{
        key: "canActivate",
        value: function canActivate(route, state) {
          var isAdmin = this.authService.isUserAdmin();

          if (isAdmin) {
            return true;
          }

          this.router.navigate(['products']);
          return false;
        }
      }]);

      return AuthGuardAdminService;
    }();

    AuthGuardAdminService.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]
      }];
    };

    AuthGuardAdminService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AuthGuardAdminService);
    /***/
  },

  /***/
  "./src/app/components/auth/Services/AuthGuard/auth-guard-user.service.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/components/auth/Services/AuthGuard/auth-guard-user.service.ts ***!
    \*******************************************************************************/

  /*! exports provided: AuthGuardUserService */

  /***/
  function srcAppComponentsAuthServicesAuthGuardAuthGuardUserServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuardUserService", function () {
      return AuthGuardUserService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../authentication.service */
    "./src/app/components/auth/Services/authentication.service.ts");

    var AuthGuardUserService =
    /*#__PURE__*/
    function () {
      function AuthGuardUserService(router, authService) {
        _classCallCheck(this, AuthGuardUserService);

        this.router = router;
        this.authService = authService;
      }

      _createClass(AuthGuardUserService, [{
        key: "canActivate",
        value: function canActivate(route, state) {
          if (this.authService.isUserLoggedIn()) {
            return true;
          }

          this.router.navigate(['products']);
          return false;
        }
      }]);

      return AuthGuardUserService;
    }();

    AuthGuardUserService.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]
      }];
    };

    AuthGuardUserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AuthGuardUserService);
    /***/
  },

  /***/
  "./src/app/components/auth/Services/authentication.service.ts":
  /*!********************************************************************!*\
    !*** ./src/app/components/auth/Services/authentication.service.ts ***!
    \********************************************************************/

  /*! exports provided: AuthenticationService */

  /***/
  function srcAppComponentsAuthServicesAuthenticationServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthenticationService", function () {
      return AuthenticationService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var AuthenticationService =
    /*#__PURE__*/
    function () {
      function AuthenticationService(router, httpClient) {
        _classCallCheck(this, AuthenticationService);

        this.router = router;
        this.httpClient = httpClient;
      }

      _createClass(AuthenticationService, [{
        key: "authenticate",
        value: function authenticate(username, password) {
          return this.httpClient.post('http://localhost:8080/api/login', {
            username: username,
            password: password
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (userData) {
            var tokenStr = 'Bearer ' + userData.token;
            var isAdmin = userData.admin;
            sessionStorage.setItem('username', username);
            sessionStorage.setItem('token', tokenStr);
            sessionStorage.setItem('isAdmin', isAdmin);
            return userData;
          }));
        }
      }, {
        key: "changeAdminMode",
        value: function changeAdminMode() {
          if (this.isUserAdmin()) {
            var isAdminModeS = sessionStorage.getItem('isAdminMode');

            if (isAdminModeS == null || isAdminModeS === 'false') {
              isAdminModeS = 'true';
            } else {
              isAdminModeS = 'false';
            }

            this.router.navigate(['']);
            sessionStorage.setItem('isAdminMode', isAdminModeS);
          }
        }
      }, {
        key: "isUserLoggedIn",
        value: function isUserLoggedIn() {
          var user = sessionStorage.getItem('username');
          return !(user === null);
        }
      }, {
        key: "isUserAdmin",
        value: function isUserAdmin() {
          var isAdminS = sessionStorage.getItem('isAdmin');
          return this.isUserLoggedIn() && isAdminS === 'true';
        }
      }, {
        key: "isAdminMode",
        value: function isAdminMode() {
          var isAdminModeS = sessionStorage.getItem('isAdminMode');
          return this.isUserAdmin() && isAdminModeS === 'true';
        }
      }, {
        key: "logout",
        value: function logout() {
          sessionStorage.removeItem('cart');
          sessionStorage.removeItem('cartID');
          sessionStorage.removeItem('username');
          sessionStorage.clear();
        }
      }, {
        key: "validateToken",
        value: function validateToken() {
          if (this.isUserLoggedIn()) {
            var url = 'http://localhost:8080/api/isValidLogin';
            var param = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('token', sessionStorage.getItem('token'));
            return this.httpClient.get(url, {
              params: param
            });
          }
        }
      }, {
        key: "checkToken",
        value: function checkToken() {
          var _this = this;

          this.validateToken().subscribe(function (res) {
            if (!res) {
              _this.router.navigate(['/loginExpired']);
            }
          });
        }
      }, {
        key: "getUsername",
        value: function getUsername() {
          return sessionStorage.getItem('username');
        }
      }]);

      return AuthenticationService;
    }();

    AuthenticationService.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    AuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AuthenticationService);
    /***/
  },

  /***/
  "./src/app/components/auth/Services/basic-auth-interception.service.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/components/auth/Services/basic-auth-interception.service.ts ***!
    \*****************************************************************************/

  /*! exports provided: BasicAuthInterceptionService */

  /***/
  function srcAppComponentsAuthServicesBasicAuthInterceptionServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BasicAuthInterceptionService", function () {
      return BasicAuthInterceptionService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var BasicAuthInterceptionService =
    /*#__PURE__*/
    function () {
      function BasicAuthInterceptionService() {
        _classCallCheck(this, BasicAuthInterceptionService);
      }

      _createClass(BasicAuthInterceptionService, [{
        key: "intercept",
        value: function intercept(req, next) {
          if (sessionStorage.getItem('username') && sessionStorage.getItem('token')) {
            req = req.clone({
              setHeaders: {
                Authorization: sessionStorage.getItem('token')
              }
            });
          }

          return next.handle(req);
        }
      }]);

      return BasicAuthInterceptionService;
    }();

    BasicAuthInterceptionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], BasicAuthInterceptionService);
    /***/
  },

  /***/
  "./src/app/components/auth/invalid-token/invalid-token.component.css":
  /*!***************************************************************************!*\
    !*** ./src/app/components/auth/invalid-token/invalid-token.component.css ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsAuthInvalidTokenInvalidTokenComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYXV0aC9pbnZhbGlkLXRva2VuL2ludmFsaWQtdG9rZW4uY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/components/auth/invalid-token/invalid-token.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/components/auth/invalid-token/invalid-token.component.ts ***!
    \**************************************************************************/

  /*! exports provided: InvalidTokenComponent */

  /***/
  function srcAppComponentsAuthInvalidTokenInvalidTokenComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InvalidTokenComponent", function () {
      return InvalidTokenComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var InvalidTokenComponent =
    /*#__PURE__*/
    function () {
      function InvalidTokenComponent(router) {
        _classCallCheck(this, InvalidTokenComponent);

        this.router = router;
      }

      _createClass(InvalidTokenComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          setTimeout(function (router) {
            router.navigate(['/logout']);
          }, 3 * 1000, this.router);
        }
      }]);

      return InvalidTokenComponent;
    }();

    InvalidTokenComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    InvalidTokenComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-invalid-token',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./invalid-token.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/auth/invalid-token/invalid-token.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./invalid-token.component.css */
      "./src/app/components/auth/invalid-token/invalid-token.component.css")).default]
    })], InvalidTokenComponent);
    /***/
  },

  /***/
  "./src/app/components/auth/login/login.component.css":
  /*!***********************************************************!*\
    !*** ./src/app/components/auth/login/login.component.css ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsAuthLoginLoginComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYXV0aC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/components/auth/login/login.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/components/auth/login/login.component.ts ***!
    \**********************************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppComponentsAuthLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _Services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../Services/authentication.service */
    "./src/app/components/auth/Services/authentication.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _model_OperState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../model/OperState */
    "./src/app/model/OperState.ts");
    /* harmony import */


    var _shopping_Services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../shopping/Services/shopping-cart.service */
    "./src/app/components/shopping/Services/shopping-cart.service.ts");

    var LoginComponent =
    /*#__PURE__*/
    function () {
      function LoginComponent(router, loginService, shoppingCartService) {
        _classCallCheck(this, LoginComponent);

        this.router = router;
        this.loginService = loginService;
        this.shoppingCartService = shoppingCartService;
        this.invalidLogin = false;
        this.loadingState = new _model_OperState__WEBPACK_IMPORTED_MODULE_4__["OperState"]();
        this.loginFinished = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "sendSuccessfulLogin",
        value: function sendSuccessfulLogin() {
          this.loginFinished.emit(true);
        }
      }, {
        key: "checkLogin",
        value: function checkLogin() {
          var _this2 = this;

          if (this.username == null || this.password == null) {
            this.loadingState.setError('Prosím vyplňte všechny pole');
          } else {
            this.loadingState.setWorking();
            this.loginService.authenticate(this.username, this.password).subscribe(function (data) {
              _this2.router.navigate(['']);

              _this2.invalidLogin = false;

              _this2.loadingState.setSuccess();

              _this2.shoppingCartService.loadCartIDFromDB();

              _this2.sendSuccessfulLogin();

              _this2.username = '';
              _this2.password = '';

              _this2.setStateBack();
            }, function (error) {
              _this2.invalidLogin = true;

              _this2.loadingState.setError('Přihlašovací údaje jsou nesprávné');
            });
          }
        }
      }, {
        key: "setStateBack",
        value: function setStateBack() {
          setTimeout(function (state) {
            state.setBack();
          }, 1300, this.loadingState);
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _Services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]
      }, {
        type: _shopping_Services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_5__["ShoppingCartService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], LoginComponent.prototype, "loginFinished", void 0);
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/auth/login/login.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.component.css */
      "./src/app/components/auth/login/login.component.css")).default]
    })], LoginComponent);
    /***/
  },

  /***/
  "./src/app/components/auth/logout/logout.component.css":
  /*!*************************************************************!*\
    !*** ./src/app/components/auth/logout/logout.component.css ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsAuthLogoutLogoutComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYXV0aC9sb2dvdXQvbG9nb3V0LmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/components/auth/logout/logout.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/components/auth/logout/logout.component.ts ***!
    \************************************************************/

  /*! exports provided: LogoutComponent */

  /***/
  function srcAppComponentsAuthLogoutLogoutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LogoutComponent", function () {
      return LogoutComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _Services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../Services/authentication.service */
    "./src/app/components/auth/Services/authentication.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var LogoutComponent =
    /*#__PURE__*/
    function () {
      function LogoutComponent(loginService, router) {
        _classCallCheck(this, LogoutComponent);

        this.loginService = loginService;
        this.router = router;
      }

      _createClass(LogoutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loginService.logout();
          sessionStorage.clear();
          this.router.navigate(['']);
        }
      }]);

      return LogoutComponent;
    }();

    LogoutComponent.ctorParameters = function () {
      return [{
        type: _Services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    LogoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-logout',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./logout.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/auth/logout/logout.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./logout.component.css */
      "./src/app/components/auth/logout/logout.component.css")).default]
    })], LogoutComponent);
    /***/
  },

  /***/
  "./src/app/components/customers/Services/customer.service.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/components/customers/Services/customer.service.ts ***!
    \*******************************************************************/

  /*! exports provided: CustomerService */

  /***/
  function srcAppComponentsCustomersServicesCustomerServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomerService", function () {
      return CustomerService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var CustomerService =
    /*#__PURE__*/
    function () {
      function CustomerService(http) {
        _classCallCheck(this, CustomerService);

        this.http = http;
        this.URL_BASE = 'http://localhost:8080/api/customers';
      }

      _createClass(CustomerService, [{
        key: "get",
        value: function get(id) {
          var url = this.buildUrl('/get');
          var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('id', id);
          return this.http.get(url, {
            params: httpParams
          });
        }
      }, {
        key: "register",
        value: function register(item, rawPass) {
          var url = this.buildUrl('/create');
          var param = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('rawPass', rawPass);
          var body = item;
          return this.http.post(url, body, {
            params: param
          });
        }
      }, {
        key: "list",
        value: function list() {
          var url = this.buildUrl('/list');
          return this.http.get(url);
        }
      }, {
        key: "buildUrl",
        value: function buildUrl(relativeUrl) {
          return this.URL_BASE + relativeUrl;
        }
      }]);

      return CustomerService;
    }();

    CustomerService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    CustomerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], CustomerService);
    /***/
  },

  /***/
  "./src/app/components/customers/customers/customers.component.css":
  /*!************************************************************************!*\
    !*** ./src/app/components/customers/customers/customers.component.css ***!
    \************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsCustomersCustomersCustomersComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY3VzdG9tZXJzL2N1c3RvbWVycy9jdXN0b21lcnMuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/components/customers/customers/customers.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/components/customers/customers/customers.component.ts ***!
    \***********************************************************************/

  /*! exports provided: CustomersComponent */

  /***/
  function srcAppComponentsCustomersCustomersCustomersComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomersComponent", function () {
      return CustomersComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _model_OperState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../model/OperState */
    "./src/app/model/OperState.ts");
    /* harmony import */


    var _Services_customer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../Services/customer.service */
    "./src/app/components/customers/Services/customer.service.ts");

    var CustomersComponent =
    /*#__PURE__*/
    function () {
      function CustomersComponent(customersService) {
        _classCallCheck(this, CustomersComponent);

        this.customersService = customersService;
        this.loadingState = new _model_OperState__WEBPACK_IMPORTED_MODULE_2__["OperState"]();
        this.customers = [];
      }

      _createClass(CustomersComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          this.loadingState.setWorking();
          this.customersService.list().subscribe(function (res) {
            _this3.customers = res;

            _this3.loadingState.setSuccess();
          }, function (err) {
            return _this3.loadingState.setError(err);
          });
        }
      }]);

      return CustomersComponent;
    }();

    CustomersComponent.ctorParameters = function () {
      return [{
        type: _Services_customer_service__WEBPACK_IMPORTED_MODULE_3__["CustomerService"]
      }];
    };

    CustomersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-customers',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./customers.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/customers/customers/customers.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./customers.component.css */
      "./src/app/components/customers/customers/customers.component.css")).default]
    })], CustomersComponent);
    /***/
  },

  /***/
  "./src/app/components/customers/register-customer/register-customer.component.css":
  /*!****************************************************************************************!*\
    !*** ./src/app/components/customers/register-customer/register-customer.component.css ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsCustomersRegisterCustomerRegisterCustomerComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY3VzdG9tZXJzL3JlZ2lzdGVyLWN1c3RvbWVyL3JlZ2lzdGVyLWN1c3RvbWVyLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/components/customers/register-customer/register-customer.component.ts":
  /*!***************************************************************************************!*\
    !*** ./src/app/components/customers/register-customer/register-customer.component.ts ***!
    \***************************************************************************************/

  /*! exports provided: RegisterCustomerComponent */

  /***/
  function srcAppComponentsCustomersRegisterCustomerRegisterCustomerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterCustomerComponent", function () {
      return RegisterCustomerComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _model_OperState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../model/OperState */
    "./src/app/model/OperState.ts");
    /* harmony import */


    var _model_CustomersVM__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../model/CustomersVM */
    "./src/app/model/CustomersVM.ts");
    /* harmony import */


    var _Services_customer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../Services/customer.service */
    "./src/app/components/customers/Services/customer.service.ts");

    var RegisterCustomerComponent =
    /*#__PURE__*/
    function () {
      function RegisterCustomerComponent(customerService) {
        _classCallCheck(this, RegisterCustomerComponent);

        this.customerService = customerService;
        this.customerNew = new _model_CustomersVM__WEBPACK_IMPORTED_MODULE_3__["CustomersVM"]();
        this.loadingState = new _model_OperState__WEBPACK_IMPORTED_MODULE_2__["OperState"]();
        this.registerFinished = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(RegisterCustomerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "insertNew",
        value: function insertNew() {
          var _this4 = this;

          if (this.checkForm()) {
            this.loadingState.setWorking();
            this.customerService.register(this.customerNew, this.rawPassword).subscribe(function (res) {
              _this4.loadingState.setSuccess();

              _this4.sendSuccessfulRegistration();

              _this4.setStateBack();

              _this4.customerNew = new _model_CustomersVM__WEBPACK_IMPORTED_MODULE_3__["CustomersVM"]();
              _this4.rawPasswordControl = '';
              _this4.rawPassword = '';
            }, function (err) {
              _this4.loadingState.setError('Registrace selhala');

              console.log(err);
            });
          }
        }
      }, {
        key: "sendSuccessfulRegistration",
        value: function sendSuccessfulRegistration() {
          this.registerFinished.emit(true);
        }
      }, {
        key: "checkForm",
        value: function checkForm() {
          if (this.customerNew.name == null || this.customerNew.username == null || this.customerNew.email == null || this.customerNew.surname == null || this.rawPassword == null || this.rawPasswordControl == null) {
            this.loadingState.setError('Prosím vyplňte všechny pole');
            return false;
          }

          if (!this.validateEmail(this.customerNew.email)) {
            this.loadingState.setError('E-mail má špatný tvar');
            return false;
          }

          if (this.rawPassword !== this.rawPasswordControl) {
            this.loadingState.setError('Hesla se musí shodovat');
            return false;
          }

          return true;
        }
      }, {
        key: "validateEmail",
        value: function validateEmail(email) {
          var regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
          return regexp.test(email);
        }
      }, {
        key: "setStateBack",
        value: function setStateBack() {
          setTimeout(function (state) {
            state.setBack();
          }, 1300, this.loadingState);
        }
      }]);

      return RegisterCustomerComponent;
    }();

    RegisterCustomerComponent.ctorParameters = function () {
      return [{
        type: _Services_customer_service__WEBPACK_IMPORTED_MODULE_4__["CustomerService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], RegisterCustomerComponent.prototype, "registerFinished", void 0);
    RegisterCustomerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-register-customer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./register-customer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/customers/register-customer/register-customer.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./register-customer.component.css */
      "./src/app/components/customers/register-customer/register-customer.component.css")).default]
    })], RegisterCustomerComponent);
    /***/
  },

  /***/
  "./src/app/components/discounts/Services/discounts.service.ts":
  /*!********************************************************************!*\
    !*** ./src/app/components/discounts/Services/discounts.service.ts ***!
    \********************************************************************/

  /*! exports provided: DiscountsService */

  /***/
  function srcAppComponentsDiscountsServicesDiscountsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DiscountsService", function () {
      return DiscountsService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var DiscountsService =
    /*#__PURE__*/
    function () {
      function DiscountsService(http) {
        _classCallCheck(this, DiscountsService);

        this.http = http;
        this.URL_BASE = 'http://localhost:8080/api/discounts';
      }

      _createClass(DiscountsService, [{
        key: "discountToJSON",
        value: function discountToJSON(disc) {
          var ret = JSON.stringify(disc);
          var toReplace = ret.substr(ret.search('datefrom') + 10 + 11, 14);
          ret = ret.replace(toReplace, '');
          ret = ret.replace(toReplace, '');
          return ret;
        }
      }, {
        key: "create",
        value: function create(discount) {
          var url = this.buildUrl('/create');
          var param = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('discountString', this.discountToJSON(discount));
          return this.http.post(url, null, {
            params: param
          });
        }
      }, {
        key: "test",
        value: function test(discount) {
          var url = this.buildUrl('/test');
          var param = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('discountString', this.discountToJSON(discount));
          return this.http.get(url, {
            params: param
          });
        }
      }, {
        key: "list",
        value: function list() {
          var url = this.buildUrl('/list');
          return this.http.get(url);
        }
      }, {
        key: "buildUrl",
        value: function buildUrl(relativeUrl) {
          return this.URL_BASE + relativeUrl;
        }
      }, {
        key: "getDiscountFromReturn",
        value: function getDiscountFromReturn(disc) {
          var ret = disc;
          ret.datefrom = new Date(disc.datefrom);
          ret.dateto = new Date(disc.dateto);
          return ret;
        }
      }, {
        key: "dateToUserFriendlyStr",
        value: function dateToUserFriendlyStr(date) {
          return date.getDate() + '. ' + (date.getMonth() + 1) + '. ' + date.getFullYear();
        }
      }, {
        key: "delete",
        value: function _delete(discountID) {
          var url = this.buildUrl('/delete');
          var param = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('discountID', JSON.stringify(discountID));
          return this.http.delete(url, {
            params: param
          });
        }
      }, {
        key: "alterDiscount",
        value: function alterDiscount(discount) {
          var url = this.buildUrl('/update');
          var param = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('discountString', this.discountToJSON(discount));
          return this.http.patch(url, null, {
            params: param
          });
        }
      }]);

      return DiscountsService;
    }();

    DiscountsService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    DiscountsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], DiscountsService);
    /***/
  },

  /***/
  "./src/app/components/discounts/discounts-add/DiscountAddCompState.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/components/discounts/discounts-add/DiscountAddCompState.ts ***!
    \****************************************************************************/

  /*! exports provided: DiscountAddCompState */

  /***/
  function srcAppComponentsDiscountsDiscountsAddDiscountAddCompStateTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DiscountAddCompState", function () {
      return DiscountAddCompState;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var DiscountAddCompState =
    /*#__PURE__*/
    function () {
      function DiscountAddCompState() {
        _classCallCheck(this, DiscountAddCompState);

        this.state = 0;
      }

      _createClass(DiscountAddCompState, [{
        key: "setCreate",
        value: function setCreate() {
          this.state = DiscountAddCompState.CREATE;
        }
      }, {
        key: "setBadDiscount",
        value: function setBadDiscount() {
          this.state = DiscountAddCompState.BADDISC;
        }
      }, {
        key: "setShowFinishedDiscount",
        value: function setShowFinishedDiscount() {
          this.state = DiscountAddCompState.SHOWFINDISC;
        }
      }, {
        key: "isCreate",
        value: function isCreate() {
          return this.state === DiscountAddCompState.CREATE || this.isBadDiscount();
        }
      }, {
        key: "isBadDiscount",
        value: function isBadDiscount() {
          return this.state === DiscountAddCompState.BADDISC;
        }
      }, {
        key: "isShowFinishedDiscount",
        value: function isShowFinishedDiscount() {
          return this.state === DiscountAddCompState.SHOWFINDISC;
        }
      }]);

      return DiscountAddCompState;
    }();

    DiscountAddCompState.CREATE = 1;
    DiscountAddCompState.BADDISC = 2;
    DiscountAddCompState.SHOWFINDISC = 3;
    /***/
  },

  /***/
  "./src/app/components/discounts/discounts-add/discounts-add.component.css":
  /*!********************************************************************************!*\
    !*** ./src/app/components/discounts/discounts-add/discounts-add.component.css ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsDiscountsDiscountsAddDiscountsAddComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGlzY291bnRzL2Rpc2NvdW50cy1hZGQvZGlzY291bnRzLWFkZC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/components/discounts/discounts-add/discounts-add.component.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/components/discounts/discounts-add/discounts-add.component.ts ***!
    \*******************************************************************************/

  /*! exports provided: DiscountsAddComponent */

  /***/
  function srcAppComponentsDiscountsDiscountsAddDiscountsAddComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DiscountsAddComponent", function () {
      return DiscountsAddComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _products_Services_products_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../products/Services/products.service */
    "./src/app/components/products/Services/products.service.ts");
    /* harmony import */


    var _Services_discounts_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../Services/discounts.service */
    "./src/app/components/discounts/Services/discounts.service.ts");
    /* harmony import */


    var _model_OperState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../model/OperState */
    "./src/app/model/OperState.ts");
    /* harmony import */


    var _DiscountAddCompState__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./DiscountAddCompState */
    "./src/app/components/discounts/discounts-add/DiscountAddCompState.ts");
    /* harmony import */


    var _model_DiscountsVM__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../model/DiscountsVM */
    "./src/app/model/DiscountsVM.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var DiscountsAddComponent =
    /*#__PURE__*/
    function () {
      function DiscountsAddComponent(productsService, discountsService, router) {
        _classCallCheck(this, DiscountsAddComponent);

        this.productsService = productsService;
        this.discountsService = discountsService;
        this.router = router;
        this.loadingState = new _model_OperState__WEBPACK_IMPORTED_MODULE_4__["OperState"]();
        this.componentState = new _DiscountAddCompState__WEBPACK_IMPORTED_MODULE_5__["DiscountAddCompState"]();
        this.products = [];
        this.min = new Date().toJSON().slice(0, 10);
        this.dateFrom = this.min;
        this.dateTo = this.min;
      }

      _createClass(DiscountsAddComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this5 = this;

          this.loadingState.setWorking();
          this.productsService.listAll(true).subscribe(function (products) {
            _this5.products = products;

            _this5.loadingState.setSuccess();

            _this5.selectedProduct = _this5.products[0];
          }, function (err) {
            return _this5.loadingState.setError(err);
          });
          this.discountPercent = 0;
          this.componentState.setCreate();
        }
      }, {
        key: "getDateFromString",
        value: function getDateFromString(date) {
          return new Date(date);
        }
      }, {
        key: "selectProductCreating",
        value: function selectProductCreating(event) {
          var productID = parseInt(event.target.value, 10);
          this.selectedProduct = this.products.find(function (p) {
            return p.id === productID;
          });
          this.updateDiscountProductChange();
        }
      }, {
        key: "updateDiscountProductChange",
        value: function updateDiscountProductChange() {
          this.discountPrice = this.selectedProduct.price - this.selectedProduct.price * this.discountPercent / 100;
        }
      }, {
        key: "updateDiscount",
        value: function updateDiscount(event) {
          this.discountPercent = parseInt(event.target.value, 10);
          this.discountPrice = this.selectedProduct.price * (1 - this.discountPercent / 100);
        }
      }, {
        key: "checkDateTo",
        value: function checkDateTo() {
          var from = new Date(this.dateFrom);
          var to = new Date(this.dateTo);

          if (from > to) {
            this.dateTo = this.dateFrom;
          }
        }
      }, {
        key: "createDiscount",
        value: function createDiscount() {
          var _this6 = this;

          console.log(this.checkDate());
          console.log(this.discountPercent);

          if (this.checkDate() && this.discountPercent > 0) {
            var discount = new _model_DiscountsVM__WEBPACK_IMPORTED_MODULE_6__["DiscountsVM"]();
            discount.productId = this.selectedProduct.id;
            discount.percent = this.discountPercent;
            discount.dateto = new Date(this.dateTo);
            discount.datefrom = new Date(this.dateFrom);
            this.loadingState.setWorking();
            this.discountsService.create(discount).subscribe(function (res) {
              _this6.loadingState.setSuccess();

              _this6.finishedDiscount = _this6.discountsService.getDiscountFromReturn(res);
              _this6.selectedProduct = _this6.products.find(function (p) {
                return p.id === _this6.finishedDiscount.productId;
              });
              _this6.discountPercent = _this6.finishedDiscount.percent;

              _this6.updateDiscountProductChange();

              _this6.componentState.setShowFinishedDiscount();

              _this6.showAll();
            }, function (err) {
              _this6.loadingState.setError(err);

              console.log(err);
            });
          } else {
            this.componentState.setBadDiscount();
          }
        }
      }, {
        key: "checkDate",
        value: function checkDate() {
          var from = new Date(this.dateFrom);
          var to = new Date(this.dateTo);
          var now = new Date(JSON.stringify(new Date()).substr(1, 10));

          if (from.getTime() > to.getTime() || from.getTime() < now.getTime() || to.getTime() < now.getTime()) {
            return false;
          } else {
            return true;
          }
        }
      }, {
        key: "showAll",
        value: function showAll() {
          setTimeout(function (router) {
            router.navigate(['discounts']);
          }, 2000, this.router);
        }
      }]);

      return DiscountsAddComponent;
    }();

    DiscountsAddComponent.ctorParameters = function () {
      return [{
        type: _products_Services_products_service__WEBPACK_IMPORTED_MODULE_2__["ProductsService"]
      }, {
        type: _Services_discounts_service__WEBPACK_IMPORTED_MODULE_3__["DiscountsService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
      }];
    };

    DiscountsAddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-discounts-add',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./discounts-add.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/discounts/discounts-add/discounts-add.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./discounts-add.component.css */
      "./src/app/components/discounts/discounts-add/discounts-add.component.css")).default]
    })], DiscountsAddComponent);
    /***/
  },

  /***/
  "./src/app/components/discounts/discounts-alter/discounts-alter.component.css":
  /*!************************************************************************************!*\
    !*** ./src/app/components/discounts/discounts-alter/discounts-alter.component.css ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsDiscountsDiscountsAlterDiscountsAlterComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGlzY291bnRzL2Rpc2NvdW50cy1hbHRlci9kaXNjb3VudHMtYWx0ZXIuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/components/discounts/discounts-alter/discounts-alter.component.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/components/discounts/discounts-alter/discounts-alter.component.ts ***!
    \***********************************************************************************/

  /*! exports provided: DiscountsAlterComponent */

  /***/
  function srcAppComponentsDiscountsDiscountsAlterDiscountsAlterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DiscountsAlterComponent", function () {
      return DiscountsAlterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _model_OperState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../model/OperState */
    "./src/app/model/OperState.ts");
    /* harmony import */


    var _Services_discounts_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../Services/discounts.service */
    "./src/app/components/discounts/Services/discounts.service.ts");
    /* harmony import */


    var _products_Services_products_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../products/Services/products.service */
    "./src/app/components/products/Services/products.service.ts");

    var DiscountsAlterComponent =
    /*#__PURE__*/
    function () {
      function DiscountsAlterComponent(discountsService, productsService) {
        _classCallCheck(this, DiscountsAlterComponent);

        this.discountsService = discountsService;
        this.productsService = productsService;
        this.loadingState = new _model_OperState__WEBPACK_IMPORTED_MODULE_2__["OperState"]();
        this.finishedAlterDiscount = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.showAll = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.min = new Date().toJSON().slice(0, 10);
      }

      _createClass(DiscountsAlterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.alteredDiscount = this.originalDiscount;
          this.discountPrice = this.productToDiscount.price * (1 - this.alteredDiscount.percent / 100);
        }
      }, {
        key: "updateDiscount",
        value: function updateDiscount(event) {
          this.alteredDiscount.percent = parseInt(event.target.value, 10);
          this.discountPrice = this.productToDiscount.price * (1 - this.alteredDiscount.percent / 100);
        }
      }, {
        key: "changeDateFrom",
        value: function changeDateFrom(event) {
          this.alteredDiscount.datefrom = new Date(event.target.value);
          this.checkDateTo();
        }
      }, {
        key: "checkDateTo",
        value: function checkDateTo() {
          if (this.alteredDiscount.datefrom > this.alteredDiscount.dateto) {
            this.alteredDiscount.dateto = this.alteredDiscount.datefrom;
          }
        }
      }, {
        key: "changeDateTo",
        value: function changeDateTo(event) {
          this.alteredDiscount.dateto = new Date(event.target.value);
        }
      }, {
        key: "getMinDateTo",
        value: function getMinDateTo() {
          return this.alteredDiscount.datefrom.toJSON().slice(0, 10);
        }
      }, {
        key: "alterDiscount",
        value: function alterDiscount() {
          var _this7 = this;

          this.discountsService.alterDiscount(this.alteredDiscount).subscribe(function (res) {
            _this7.loadingState.setSuccess();

            _this7.finishedAlterDiscount.emit(_this7.alteredDiscount);

            setTimeout(function (showAll) {
              showAll.emit(true);
            }, 2000, _this7.showAll);
          }, function (err) {
            return _this7.loadingState.setError(err);
          });
        }
      }, {
        key: "showAllDiscounts",
        value: function showAllDiscounts() {
          this.showAll.emit(true);
        }
      }]);

      return DiscountsAlterComponent;
    }();

    DiscountsAlterComponent.ctorParameters = function () {
      return [{
        type: _Services_discounts_service__WEBPACK_IMPORTED_MODULE_3__["DiscountsService"]
      }, {
        type: _products_Services_products_service__WEBPACK_IMPORTED_MODULE_4__["ProductsService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('discountToAlter')], DiscountsAlterComponent.prototype, "originalDiscount", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('selectedProduct')], DiscountsAlterComponent.prototype, "productToDiscount", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], DiscountsAlterComponent.prototype, "finishedAlterDiscount", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], DiscountsAlterComponent.prototype, "showAll", void 0);
    DiscountsAlterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-discounts-alter',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./discounts-alter.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/discounts/discounts-alter/discounts-alter.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./discounts-alter.component.css */
      "./src/app/components/discounts/discounts-alter/discounts-alter.component.css")).default]
    })], DiscountsAlterComponent);
    /***/
  },

  /***/
  "./src/app/components/discounts/discounts/discounts.component.css":
  /*!************************************************************************!*\
    !*** ./src/app/components/discounts/discounts/discounts.component.css ***!
    \************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsDiscountsDiscountsDiscountsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGlzY291bnRzL2Rpc2NvdW50cy9kaXNjb3VudHMuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/components/discounts/discounts/discounts.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/components/discounts/discounts/discounts.component.ts ***!
    \***********************************************************************/

  /*! exports provided: DiscountsComponent */

  /***/
  function srcAppComponentsDiscountsDiscountsDiscountsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DiscountsComponent", function () {
      return DiscountsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _products_Services_products_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../products/Services/products.service */
    "./src/app/components/products/Services/products.service.ts");
    /* harmony import */


    var _Services_discounts_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../Services/discounts.service */
    "./src/app/components/discounts/Services/discounts.service.ts");
    /* harmony import */


    var _model_OperState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../model/OperState */
    "./src/app/model/OperState.ts");

    var DiscountsComponent =
    /*#__PURE__*/
    function () {
      function DiscountsComponent(productsService, discountsService) {
        _classCallCheck(this, DiscountsComponent);

        this.productsService = productsService;
        this.discountsService = discountsService;
        this.loadingState = new _model_OperState__WEBPACK_IMPORTED_MODULE_4__["OperState"]();
        this.products = [];
        this.discountsOnGoing = [];
        this.discountsPast = [];
        this.discountsFuture = [];
        this.discountsAll = [];
      }

      _createClass(DiscountsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this8 = this;

          this.loadingState.setWorking();
          this.discountsService.list().subscribe(function (discounts) {
            discounts.map(function (d) {
              return _this8.discountsService.getDiscountFromReturn(d);
            }).forEach(function (d) {
              _this8.addDiscount(d);

              _this8.discountsAll.push(d);
            });

            _this8.productsService.listAll(true).subscribe(function (products) {
              _this8.products = products;

              _this8.loadingState.setSuccess();

              _this8.selectedProduct = _this8.products[0];
            }, function (err) {
              return _this8.loadingState.setError(err);
            });
          }, function (err) {
            return _this8.loadingState.setError(err);
          });
          this.discountPercent = 0;
        }
      }, {
        key: "updateSelectedDiscount",
        value: function updateSelectedDiscount(discount) {
          this.discountPercent = discount.percent;
          this.selectedProduct = this.products.find(function (p) {
            return p.id === discount.productId;
          });
          this.discountPrice = this.selectedProduct.price - this.selectedProduct.price * this.discountPercent / 100;
        }
      }, {
        key: "alterDiscount",
        value: function alterDiscount(discountID) {
          var _this9 = this;

          this.focusedDiscount = this.discountsFuture.find(function (d) {
            return d.id === discountID;
          });
          this.selectedProduct = this.products.find(function (p) {
            return p.id === _this9.focusedDiscount.productId;
          });
          this.isAlterDiscount = true;
        }
      }, {
        key: "finishAlteration",
        value: function finishAlteration($event) {
          var discountTemp = $event;
          var discount = this.discountsFuture.find(function (d) {
            return d.id === discountTemp.id;
          });
          discount.percent = discountTemp.percent;
          discount.datefrom = discountTemp.datefrom;
          discount.dateto = discountTemp.dateto;
        }
      }, {
        key: "showAllDiscounts",
        value: function showAllDiscounts($event) {
          this.isAlterDiscount = false;
        }
      }, {
        key: "addDiscount",
        value: function addDiscount(discount) {
          var today = new Date(new Date().toJSON().slice(0, 10));

          if (discount.datefrom <= today) {
            if (discount.dateto >= today) {
              this.discountsOnGoing.push(discount);
            } else {
              this.discountsPast.push(discount);
            }
          } else {
            this.discountsFuture.push(discount);
          }
        }
      }, {
        key: "prepareModalDelete",
        value: function prepareModalDelete(dicsountID) {
          this.focusedDiscount = this.discountsFuture.find(function (d) {
            return d.id === dicsountID;
          });
        }
      }, {
        key: "deleteDiscount",
        value: function deleteDiscount(discountID) {
          var _this10 = this;

          this.discountsService.delete(discountID).subscribe(function (res) {
            _this10.discountsFuture.splice(_this10.discountsFuture.findIndex(function (d) {
              return d.id === discountID;
            }), 1);
          });
        }
      }, {
        key: "loadProductDiscounts",
        value: function loadProductDiscounts(event) {
          var _this11 = this;

          var productID = parseInt(event.target.value, 10);
          this.discountsFuture = [];
          this.discountsOnGoing = [];
          this.discountsPast = [];

          if (productID >= 0) {
            this.discountsAll.filter(function (d) {
              return d.productId === productID;
            }).forEach(function (d) {
              return _this11.addDiscount(d);
            });
          } else {
            this.discountsAll.forEach(function (d) {
              return _this11.addDiscount(d);
            });
          }
        }
      }]);

      return DiscountsComponent;
    }();

    DiscountsComponent.ctorParameters = function () {
      return [{
        type: _products_Services_products_service__WEBPACK_IMPORTED_MODULE_2__["ProductsService"]
      }, {
        type: _Services_discounts_service__WEBPACK_IMPORTED_MODULE_3__["DiscountsService"]
      }];
    };

    DiscountsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-discounts',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./discounts.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/discounts/discounts/discounts.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./discounts.component.css */
      "./src/app/components/discounts/discounts/discounts.component.css")).default]
    })], DiscountsComponent);
    /***/
  },

  /***/
  "./src/app/components/header/header.component.css":
  /*!********************************************************!*\
    !*** ./src/app/components/header/header.component.css ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsHeaderHeaderComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/components/header/header.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/header/header.component.ts ***!
    \*******************************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppComponentsHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _auth_Services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../auth/Services/authentication.service */
    "./src/app/components/auth/Services/authentication.service.ts");
    /* harmony import */


    var _shopping_Services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../shopping/Services/shopping-cart.service */
    "./src/app/components/shopping/Services/shopping-cart.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../auth/login/login.component */
    "./src/app/components/auth/login/login.component.ts");
    /* harmony import */


    var _customers_register_customer_register_customer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../customers/register-customer/register-customer.component */
    "./src/app/components/customers/register-customer/register-customer.component.ts");

    var HeaderComponent =
    /*#__PURE__*/
    function () {
      function HeaderComponent(loginService, shoppingCartService, router) {
        var _this12 = this;

        _classCallCheck(this, HeaderComponent);

        this.loginService = loginService;
        this.shoppingCartService = shoppingCartService;
        this.router = router;
        this.shoppingCartService.itemsInCart.subscribe(function (itemsInCart) {
          return _this12.itemsInCart = itemsInCart;
        });
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this13 = this;

          if (this.loginService.isUserLoggedIn()) {
            this.checkLogin();
            this.itemsInCart = this.shoppingCartService.getItemsAmount();
            this.shoppingCartService.itemsInCart.subscribe(function (itemsInCart) {
              return _this13.itemsInCart = itemsInCart;
            });
          }
        }
      }, {
        key: "closeLoginFormMessage",
        value: function closeLoginFormMessage($event) {
          if ($event) {
            setTimeout(function (closeButton) {
              closeButton.nativeElement.click();
            }, 1000, this.loginFormCloseButton);
          }
        }
      }, {
        key: "closeRegisterFormMessage",
        value: function closeRegisterFormMessage($event) {
          if ($event) {
            setTimeout(function (closeButton, openButton) {
              closeButton.nativeElement.click();
              openButton.nativeElement.click();
            }, 1000, this.registerFormCloseButton, this.loginFormOpenButton);
          }
        }
      }, {
        key: "changeAdminMode",
        value: function changeAdminMode() {
          this.loginService.changeAdminMode();
        }
      }, {
        key: "checkLogin",
        value: function checkLogin() {
          this.loginService.checkToken();
          setTimeout(function func(loginservice) {
            if (loginservice.isUserLoggedIn()) {
              loginservice.checkToken();
            }

            setTimeout(func, 1000 * 60, loginservice);
          }, 1000 * 60, this.loginService);
        }
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ctorParameters = function () {
      return [{
        type: _auth_Services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]
      }, {
        type: _shopping_Services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_3__["ShoppingCartService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_auth_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"], {
      static: false
    })], HeaderComponent.prototype, "loginComp", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_customers_register_customer_register_customer_component__WEBPACK_IMPORTED_MODULE_6__["RegisterCustomerComponent"], {
      static: false
    })], HeaderComponent.prototype, "registerComp", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('loginFormCloseButton', {
      static: true
    })], HeaderComponent.prototype, "loginFormCloseButton", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('registerFormCloseButton', {
      static: true
    })], HeaderComponent.prototype, "registerFormCloseButton", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('loginFormOpenButton', {
      static: false
    })], HeaderComponent.prototype, "loginFormOpenButton", void 0);
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-header',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./header.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./header.component.css */
      "./src/app/components/header/header.component.css")).default]
    })], HeaderComponent);
    /***/
  },

  /***/
  "./src/app/components/productTypes/Services/product-types.service.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/components/productTypes/Services/product-types.service.ts ***!
    \***************************************************************************/

  /*! exports provided: ProductTypesService */

  /***/
  function srcAppComponentsProductTypesServicesProductTypesServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductTypesService", function () {
      return ProductTypesService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var ProductTypesService =
    /*#__PURE__*/
    function () {
      function ProductTypesService(http) {
        _classCallCheck(this, ProductTypesService);

        this.http = http;
        this.URL_BASE = 'http://localhost:8080/api/productTypes';
      }

      _createClass(ProductTypesService, [{
        key: "buildUrl",
        value: function buildUrl(relativeUrl) {
          return this.URL_BASE + relativeUrl;
        }
      }, {
        key: "get",
        value: function get(id) {
          var url = this.buildUrl('/get');
          var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('id', id);
          return this.http.get(url, {
            params: httpParams
          });
        }
      }, {
        key: "add",
        value: function add(item) {
          var url = this.buildUrl('/add');
          return this.http.post(url, item);
        }
      }, {
        key: "update",
        value: function update(item) {
          var url = this.buildUrl('/update');
          return this.http.patch(url, item);
        }
      }, {
        key: "list",
        value: function list() {
          var url = this.buildUrl('/list');
          return this.http.get(url);
        }
      }, {
        key: "getCount",
        value: function getCount(id, selling) {
          var url = this.buildUrl('/getCount');

          if (selling) {
            url += '/selling';
          } else {
            url += '/notSelling';
          }

          var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('id', id);
          return this.http.get(url, {
            params: httpParams
          });
        }
      }]);

      return ProductTypesService;
    }();

    ProductTypesService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    ProductTypesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ProductTypesService);
    /***/
  },

  /***/
  "./src/app/components/productTypes/product-types-add/product-types-add.component.css":
  /*!*******************************************************************************************!*\
    !*** ./src/app/components/productTypes/product-types-add/product-types-add.component.css ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsProductTypesProductTypesAddProductTypesAddComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZHVjdFR5cGVzL3Byb2R1Y3QtdHlwZXMtYWRkL3Byb2R1Y3QtdHlwZXMtYWRkLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/components/productTypes/product-types-add/product-types-add.component.ts":
  /*!******************************************************************************************!*\
    !*** ./src/app/components/productTypes/product-types-add/product-types-add.component.ts ***!
    \******************************************************************************************/

  /*! exports provided: ProductTypesAddComponent */

  /***/
  function srcAppComponentsProductTypesProductTypesAddProductTypesAddComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductTypesAddComponent", function () {
      return ProductTypesAddComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _Services_product_types_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../Services/product-types.service */
    "./src/app/components/productTypes/Services/product-types.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _model_OperState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../model/OperState */
    "./src/app/model/OperState.ts");
    /* harmony import */


    var _model_ProductTypeVM__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../model/ProductTypeVM */
    "./src/app/model/ProductTypeVM.ts");

    var ProductTypesAddComponent =
    /*#__PURE__*/
    function () {
      function ProductTypesAddComponent(productTypesService, router) {
        _classCallCheck(this, ProductTypesAddComponent);

        this.productTypesService = productTypesService;
        this.router = router;
        this.loadingState = new _model_OperState__WEBPACK_IMPORTED_MODULE_4__["OperState"]();
        this.workinsState = new _model_OperState__WEBPACK_IMPORTED_MODULE_4__["OperState"]();
        this.productType = new _model_ProductTypeVM__WEBPACK_IMPORTED_MODULE_5__["ProductTypeVM"]();
      }

      _createClass(ProductTypesAddComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this14 = this;

          this.loadingState.setWorking();
          this.productTypesService.list().subscribe(function (pt) {
            _this14.productTypesInDB = pt;

            _this14.loadingState.setSuccess();

            _this14.workinsState.setWorking();
          }, function (err) {
            _this14.loadingState.setError(err);
          });
        }
      }, {
        key: "checkFrom",
        value: function checkFrom() {
          if (this.productType.typeName == null || this.productType.typeName.replace(/\s/g, '') === '') {
            return false;
          } else {
            return true;
          }
        }
      }, {
        key: "checkName",
        value: function checkName() {
          var _this15 = this;

          if (this.productTypesInDB.find(function (pt) {
            return pt.typeName === _this15.productType.typeName;
          }) != null) {
            return false;
          } else {
            return true;
          }
        }
      }, {
        key: "insertNew",
        value: function insertNew() {
          var _this16 = this;

          if (!this.checkFrom()) {
            this.workinsState.setError('Špatně vyplněný formulář. Prosím vyplňte všechny pole.');
            return;
          }

          if (!this.checkName()) {
            this.workinsState.setError('Kategorie s tímto jménem již existuje.');
            return;
          }

          this.productTypesService.add(this.productType).subscribe(function (res) {
            _this16.workinsState.setSuccess();
          });
          this.finish();
        }
      }, {
        key: "finish",
        value: function finish() {
          setTimeout(function (router) {
            router.navigate(['/products/1']);
          }, 2000, this.router);
        }
      }]);

      return ProductTypesAddComponent;
    }();

    ProductTypesAddComponent.ctorParameters = function () {
      return [{
        type: _Services_product_types_service__WEBPACK_IMPORTED_MODULE_2__["ProductTypesService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    ProductTypesAddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-product-types-add',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./product-types-add.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/productTypes/product-types-add/product-types-add.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./product-types-add.component.css */
      "./src/app/components/productTypes/product-types-add/product-types-add.component.css")).default]
    })], ProductTypesAddComponent);
    /***/
  },

  /***/
  "./src/app/components/productTypes/product-types-alter/product-types-alter.component.css":
  /*!***********************************************************************************************!*\
    !*** ./src/app/components/productTypes/product-types-alter/product-types-alter.component.css ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsProductTypesProductTypesAlterProductTypesAlterComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZHVjdFR5cGVzL3Byb2R1Y3QtdHlwZXMtYWx0ZXIvcHJvZHVjdC10eXBlcy1hbHRlci5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/components/productTypes/product-types-alter/product-types-alter.component.ts":
  /*!**********************************************************************************************!*\
    !*** ./src/app/components/productTypes/product-types-alter/product-types-alter.component.ts ***!
    \**********************************************************************************************/

  /*! exports provided: ProductTypesAlterComponent */

  /***/
  function srcAppComponentsProductTypesProductTypesAlterProductTypesAlterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductTypesAlterComponent", function () {
      return ProductTypesAlterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _model_OperState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../model/OperState */
    "./src/app/model/OperState.ts");
    /* harmony import */


    var _Services_product_types_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../Services/product-types.service */
    "./src/app/components/productTypes/Services/product-types.service.ts");

    var ProductTypesAlterComponent =
    /*#__PURE__*/
    function () {
      function ProductTypesAlterComponent(productTypesService) {
        _classCallCheck(this, ProductTypesAlterComponent);

        this.productTypesService = productTypesService;
        this.loadingState = new _model_OperState__WEBPACK_IMPORTED_MODULE_2__["OperState"]();
        this.changingIndex = -1;
        this.workingOn = -1;
      }

      _createClass(ProductTypesAlterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this17 = this;

          this.loadingState.setWorking();
          this.productTypesService.list().subscribe(function (ptList) {
            _this17.productTypes = ptList;

            _this17.loadingState.setSuccess();
          }, function (err) {
            return _this17.loadingState.setError(err);
          });
        }
      }, {
        key: "trackByIndex",
        value: function trackByIndex(index, obj) {
          return index;
        }
      }, {
        key: "changingType",
        value: function changingType(index) {
          this.changingIndex = index;
        }
      }, {
        key: "saveChanges",
        value: function saveChanges(index) {
          var _this18 = this;

          var type = this.productTypes[index];
          this.workingOn = index;
          this.productTypesService.update(type).subscribe(function (res) {
            _this18.workingOn = -1;
            _this18.changingIndex = -1;
          });
        }
      }]);

      return ProductTypesAlterComponent;
    }();

    ProductTypesAlterComponent.ctorParameters = function () {
      return [{
        type: _Services_product_types_service__WEBPACK_IMPORTED_MODULE_3__["ProductTypesService"]
      }];
    };

    ProductTypesAlterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-product-types-alter',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./product-types-alter.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/productTypes/product-types-alter/product-types-alter.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./product-types-alter.component.css */
      "./src/app/components/productTypes/product-types-alter/product-types-alter.component.css")).default]
    })], ProductTypesAlterComponent);
    /***/
  },

  /***/
  "./src/app/components/productTypes/product-types/product-types.component.css":
  /*!***********************************************************************************!*\
    !*** ./src/app/components/productTypes/product-types/product-types.component.css ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsProductTypesProductTypesProductTypesComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZHVjdFR5cGVzL3Byb2R1Y3QtdHlwZXMvcHJvZHVjdC10eXBlcy5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/components/productTypes/product-types/product-types.component.ts":
  /*!**********************************************************************************!*\
    !*** ./src/app/components/productTypes/product-types/product-types.component.ts ***!
    \**********************************************************************************/

  /*! exports provided: ProductTypesComponent */

  /***/
  function srcAppComponentsProductTypesProductTypesProductTypesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductTypesComponent", function () {
      return ProductTypesComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ProductTypesComponent =
    /*#__PURE__*/
    function () {
      function ProductTypesComponent() {
        _classCallCheck(this, ProductTypesComponent);
      }

      _createClass(ProductTypesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ProductTypesComponent;
    }();

    ProductTypesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-product-types',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./product-types.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/productTypes/product-types/product-types.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./product-types.component.css */
      "./src/app/components/productTypes/product-types/product-types.component.css")).default]
    })], ProductTypesComponent);
    /***/
  },

  /***/
  "./src/app/components/products/Services/products.service.ts":
  /*!******************************************************************!*\
    !*** ./src/app/components/products/Services/products.service.ts ***!
    \******************************************************************/

  /*! exports provided: ProductsService */

  /***/
  function srcAppComponentsProductsServicesProductsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductsService", function () {
      return ProductsService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var ProductsService =
    /*#__PURE__*/
    function () {
      function ProductsService(http) {
        _classCallCheck(this, ProductsService);

        this.http = http;
        this.URL_BASE = 'http://localhost:8080/api/products';
      }

      _createClass(ProductsService, [{
        key: "get",
        value: function get(id) {
          var url = this.buildUrl('/get');
          var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('id', id);
          return this.http.get(url, {
            params: httpParams
          });
        }
      }, {
        key: "add",
        value: function add(item) {
          var url = this.buildUrl('/add');
          return this.http.post(url, item);
        }
      }, {
        key: "list",
        value: function list(startIndex, count, productTypeId, selling) {
          var url = this.buildUrl('/list');

          if (selling) {
            url += '/Selling/byType';
          } else {
            url += '/NotSelling/byType';
          }

          var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('startIndex', startIndex);
          httpParams = httpParams.set('count', count);
          httpParams = httpParams.set('productTypeId', productTypeId);
          return this.http.get(url, {
            params: httpParams
          });
        }
      }, {
        key: "listAll",
        value: function listAll(selling) {
          var url = this.buildUrl('/list');

          if (selling) {
            url += '/Selling';
          } else {
            url += '/NotSelling';
          }

          return this.http.get(url);
        }
      }, {
        key: "buildUrl",
        value: function buildUrl(relativeUrl) {
          return this.URL_BASE + relativeUrl;
        }
      }, {
        key: "getPictureUrl",
        value: function getPictureUrl(product) {
          var url = product.pictureUrl;
          var regExp = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;

          if (url == null || !url.match(regExp)) {
            return 'https://www.dia.org/sites/default/files/No_Img_Avail.jpg';
          } else {
            return product.pictureUrl;
          }
        }
      }, {
        key: "putOutOfSale",
        value: function putOutOfSale(productID) {
          var url = this.buildUrl('/putOutOfSale');
          var param = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('productID', JSON.stringify(productID));
          return this.http.patch(url, null, {
            params: param
          });
        }
      }, {
        key: "putOnSale",
        value: function putOnSale(productID) {
          var url = this.buildUrl('/putOnSale');
          var param = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('productID', JSON.stringify(productID));
          return this.http.patch(url, null, {
            params: param
          });
        }
      }, {
        key: "alterProduct",
        value: function alterProduct(product) {
          var url = this.buildUrl('/update');
          return this.http.patch(url, product);
        }
      }]);

      return ProductsService;
    }();

    ProductsService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    ProductsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ProductsService);
    /***/
  },

  /***/
  "./src/app/components/products/product-alter/product-alter.component.css":
  /*!*******************************************************************************!*\
    !*** ./src/app/components/products/product-alter/product-alter.component.css ***!
    \*******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsProductsProductAlterProductAlterComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZHVjdHMvcHJvZHVjdC1hbHRlci9wcm9kdWN0LWFsdGVyLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/components/products/product-alter/product-alter.component.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/components/products/product-alter/product-alter.component.ts ***!
    \******************************************************************************/

  /*! exports provided: ProductAlterComponent */

  /***/
  function srcAppComponentsProductsProductAlterProductAlterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductAlterComponent", function () {
      return ProductAlterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _model_ProductsVM__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../model/ProductsVM */
    "./src/app/model/ProductsVM.ts");
    /* harmony import */


    var _Services_products_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../Services/products.service */
    "./src/app/components/products/Services/products.service.ts");
    /* harmony import */


    var _model_OperState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../model/OperState */
    "./src/app/model/OperState.ts");
    /* harmony import */


    var _productTypes_Services_product_types_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../productTypes/Services/product-types.service */
    "./src/app/components/productTypes/Services/product-types.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var ProductAlterComponent =
    /*#__PURE__*/
    function () {
      function ProductAlterComponent(productsService, productTypesService, activatedRoute) {
        _classCallCheck(this, ProductAlterComponent);

        this.productsService = productsService;
        this.productTypesService = productTypesService;
        this.activatedRoute = activatedRoute;
        this.showAll = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.productToAlter = new _model_ProductsVM__WEBPACK_IMPORTED_MODULE_2__["ProductsVM"]();
        this.loadingState = new _model_OperState__WEBPACK_IMPORTED_MODULE_4__["OperState"]();
        this.sendingState = new _model_OperState__WEBPACK_IMPORTED_MODULE_4__["OperState"]();
        this.finishedAlterProduct = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(ProductAlterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this19 = this;

          this.loadingState.setWorking();
          this.activatedRoute.params.subscribe(function (params) {
            _this19.productsService.get(params.id).subscribe(function (product) {
              _this19.productToAlter = product;

              _this19.productTypesService.list().subscribe(function (res) {
                _this19.productTypes = res;

                _this19.loadingState.setSuccess();
              }, function (err) {
                _this19.loadingState.setError(err);
              });
            }, function (err) {
              return _this19.loadingState.setError(err);
            });
          });
        }
      }, {
        key: "test",
        value: function test() {
          console.log(this.originalProduct);
        }
      }, {
        key: "showAllProducts",
        value: function showAllProducts() {
          this.showAll.emit(true);
        }
      }, {
        key: "changeProductType",
        value: function changeProductType(event) {
          this.productToAlter.productTypeId = parseInt(event.target.value, 10);
        }
      }, {
        key: "alterProduct",
        value: function alterProduct() {
          var _this20 = this;

          this.sendingState.setWorking();
          this.productsService.alterProduct(this.productToAlter).subscribe(function (res) {
            _this20.sendingState.setSuccess(); // this.finishedAlterProduct.emit(this.productToAlter);

            /*setTimeout((showAll: EventEmitter<boolean>) => {
              showAll.emit(true);
            }, 2000, this.showAll);*/

          }, function (err) {
            return _this20.loadingState.setError(err);
          });
        }
      }]);

      return ProductAlterComponent;
    }();

    ProductAlterComponent.ctorParameters = function () {
      return [{
        type: _Services_products_service__WEBPACK_IMPORTED_MODULE_3__["ProductsService"]
      }, {
        type: _productTypes_Services_product_types_service__WEBPACK_IMPORTED_MODULE_5__["ProductTypesService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('productToAlter')], ProductAlterComponent.prototype, "originalProduct", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], ProductAlterComponent.prototype, "showAll", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], ProductAlterComponent.prototype, "finishedAlterProduct", void 0);
    ProductAlterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-product-alter',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./product-alter.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/products/product-alter/product-alter.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./product-alter.component.css */
      "./src/app/components/products/product-alter/product-alter.component.css")).default]
    })], ProductAlterComponent);
    /***/
  },

  /***/
  "./src/app/components/products/products-add/products-add.component.css":
  /*!*****************************************************************************!*\
    !*** ./src/app/components/products/products-add/products-add.component.css ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsProductsProductsAddProductsAddComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZHVjdHMvcHJvZHVjdHMtYWRkL3Byb2R1Y3RzLWFkZC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/components/products/products-add/products-add.component.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/components/products/products-add/products-add.component.ts ***!
    \****************************************************************************/

  /*! exports provided: ProductsAddComponent */

  /***/
  function srcAppComponentsProductsProductsAddProductsAddComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductsAddComponent", function () {
      return ProductsAddComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _model_ProductsVM__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../model/ProductsVM */
    "./src/app/model/ProductsVM.ts");
    /* harmony import */


    var _model_OperState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../model/OperState */
    "./src/app/model/OperState.ts");
    /* harmony import */


    var _Services_products_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../Services/products.service */
    "./src/app/components/products/Services/products.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _productTypes_Services_product_types_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../productTypes/Services/product-types.service */
    "./src/app/components/productTypes/Services/product-types.service.ts");

    var ProductsAddComponent =
    /*#__PURE__*/
    function () {
      function ProductsAddComponent(productsService, productTypesService, router) {
        _classCallCheck(this, ProductsAddComponent);

        this.productsService = productsService;
        this.productTypesService = productTypesService;
        this.router = router;
        this.product = new _model_ProductsVM__WEBPACK_IMPORTED_MODULE_2__["ProductsVM"]();
        this.loadingState = new _model_OperState__WEBPACK_IMPORTED_MODULE_3__["OperState"]();
      }

      _createClass(ProductsAddComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this21 = this;

          this.loadingState.setWorking();
          this.productTypesService.list().subscribe(function (res) {
            _this21.productTypes = res;
          }, function (err) {
            _this21.loadingState.setError(err);
          });
        }
      }, {
        key: "checkForm",
        value: function checkForm() {
          if (this.product.name == null || this.product.price == null || this.product.pictureUrl == null || this.product.price <= 0) {
            return false;
          }

          return true;
        }
      }, {
        key: "changeProductType",
        value: function changeProductType(event) {
          this.product.productTypeId = parseInt(event.target.value, 10);
        }
      }, {
        key: "insertNew",
        value: function insertNew() {
          var _this22 = this;

          if (this.product.id) {
            console.log('Error: not a new item, cannot be inserted.');
            return;
          }

          if (!this.checkForm()) {
            this.loadingState.setError('Špatně vyplněný formulář. Prosím, vyplňte všechny pole.');
          } else {
            this.loadingState.setWorking();
            this.productsService.add(this.product).subscribe(function (res) {
              _this22.loadingState.setSuccess();

              _this22.finish(res);
            }, function (err) {
              _this22.loadingState.setError('Špatné spojení se serverem');

              console.log(err);
            });
          }
        }
      }, {
        key: "finish",
        value: function finish(finishedProduct) {
          this.finished = true;
          this.product = finishedProduct;
          setTimeout(function (router) {
            router.navigate(['/products/1']);
          }, 2000, this.router);
        }
      }]);

      return ProductsAddComponent;
    }();

    ProductsAddComponent.ctorParameters = function () {
      return [{
        type: _Services_products_service__WEBPACK_IMPORTED_MODULE_4__["ProductsService"]
      }, {
        type: _productTypes_Services_product_types_service__WEBPACK_IMPORTED_MODULE_6__["ProductTypesService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }];
    };

    ProductsAddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-products-add',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./products-add.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/products/products-add/products-add.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./products-add.component.css */
      "./src/app/components/products/products-add/products-add.component.css")).default]
    })], ProductsAddComponent);
    /***/
  },

  /***/
  "./src/app/components/products/products/products.component.css":
  /*!*********************************************************************!*\
    !*** ./src/app/components/products/products/products.component.css ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsProductsProductsProductsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZHVjdHMvcHJvZHVjdHMvcHJvZHVjdHMuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/components/products/products/products.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/components/products/products/products.component.ts ***!
    \********************************************************************/

  /*! exports provided: ProductsComponent */

  /***/
  function srcAppComponentsProductsProductsProductsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductsComponent", function () {
      return ProductsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _model_OperState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../model/OperState */
    "./src/app/model/OperState.ts");
    /* harmony import */


    var _Services_products_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../Services/products.service */
    "./src/app/components/products/Services/products.service.ts");
    /* harmony import */


    var _shopping_Services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../shopping/Services/shopping-cart.service */
    "./src/app/components/shopping/Services/shopping-cart.service.ts");
    /* harmony import */


    var _auth_Services_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../auth/Services/authentication.service */
    "./src/app/components/auth/Services/authentication.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _productTypes_Services_product_types_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../productTypes/Services/product-types.service */
    "./src/app/components/productTypes/Services/product-types.service.ts");

    var ProductsComponent =
    /*#__PURE__*/
    function () {
      function ProductsComponent(productService, productTypesService, shoppingCartService, loginService, activatedRoute, router) {
        _classCallCheck(this, ProductsComponent);

        this.productService = productService;
        this.productTypesService = productTypesService;
        this.shoppingCartService = shoppingCartService;
        this.loginService = loginService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.ITEMSPERPAGE = 3;
        this.loadingProductState = new _model_OperState__WEBPACK_IMPORTED_MODULE_2__["OperState"]();
        this.loadingTypeState = new _model_OperState__WEBPACK_IMPORTED_MODULE_2__["OperState"]();
        this.loadingMoreProductsState = new _model_OperState__WEBPACK_IMPORTED_MODULE_2__["OperState"]();
        this.products = [];
        this.adminProducts = [];
        this.pages = [];
        this.showAdminProducts = false;
        this.amountToAdd = 1;
      }

      _createClass(ProductsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.showAdminProducts = false;
          this.loadAll();
        }
      }, {
        key: "loadAll",
        value: function loadAll() {
          var _this23 = this;

          this.loadingTypeState.setWorking();
          this.loadingProductState.setWorking();
          this.activatedRoute.params.subscribe(function (params) {
            _this23.productTypesService.get(params.productID).subscribe(function (productType) {
              _this23.productType = productType;

              _this23.productTypesService.getCount(JSON.stringify(_this23.productType.id), !_this23.showAdminProducts).subscribe(function (count) {
                _this23.fillPages(count);

                _this23.loadPage(1);

                _this23.loadingTypeState.setSuccess();
              }, function (err) {
                return _this23.loadingTypeState.setError(err);
              });
            }, function (err) {
              return _this23.loadingTypeState.setError(err);
            });
          }, function (err) {
            return _this23.loadingTypeState.setError(err);
          });
        }
      }, {
        key: "changeShowAdminProducts",
        value: function changeShowAdminProducts() {
          this.showAdminProducts = !this.showAdminProducts;
          this.loadAll();
        }
      }, {
        key: "loadProducts",
        value: function loadProducts(startIndex, count) {
          return this.productService.list(JSON.stringify(startIndex), JSON.stringify(count), JSON.stringify(this.productType.id), !this.showAdminProducts);
        }
      }, {
        key: "loadMore",
        value: function loadMore() {
          var _this24 = this;

          var start = this.currentPage * this.ITEMSPERPAGE;
          this.loadingMoreProductsState.setWorking();
          this.loadProducts(start, this.ITEMSPERPAGE).subscribe(function (tempList) {
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
              for (var _iterator = tempList[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var product = _step.value;

                _this24.products.push(product);
              }
            } catch (err) {
              _didIteratorError = true;
              _iteratorError = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                  _iterator.return();
                }
              } finally {
                if (_didIteratorError) {
                  throw _iteratorError;
                }
              }
            }

            _this24.currentPage++;

            _this24.loadingMoreProductsState.setSuccess();
          });
        }
      }, {
        key: "loadPage",
        value: function loadPage(page) {
          var _this25 = this;

          this.currentPage = page;
          this.products = [];
          var start = (page - 1) * this.ITEMSPERPAGE;
          this.loadingProductState.setWorking();
          this.loadProducts(start, this.ITEMSPERPAGE).subscribe(function (products) {
            _this25.products = products;

            _this25.loadingProductState.setSuccess();
          });
        }
      }, {
        key: "fillPages",
        value: function fillPages(totalCount) {
          this.pages = [];

          for (var i = 0; i < totalCount / this.ITEMSPERPAGE; i++) {
            this.pages.push(i + 1);
          }
        }
      }, {
        key: "focusProduct",
        value: function focusProduct(productID) {
          this.focusedProduct = this.products.find(function (p) {
            return p.id === productID;
          });

          if (this.focusedProduct == null) {
            this.focusedProduct = this.adminProducts.find(function (p) {
              return p.id === productID;
            });
          }

          this.amountToAdd = 1;
        }
      }, {
        key: "addToCart",
        value: function addToCart() {
          this.shoppingCartService.addItem(this.focusedProduct.id, this.amountToAdd);
        }
      }, {
        key: "changeTempProductSale",
        value: function changeTempProductSale(PID) {
          var arrayFrom;
          var arrayTo;

          if (this.products.findIndex(function (p) {
            return p.id === PID;
          }) < 0) {
            arrayFrom = this.adminProducts;
            arrayTo = this.products;
          } else {
            arrayFrom = this.products;
            arrayTo = this.adminProducts;
          }

          var productTemp = arrayFrom.find(function (p) {
            return p.id === PID;
          });
          productTemp.selling = !productTemp.selling;
          arrayFrom.splice(arrayFrom.findIndex(function (p) {
            return p.id === PID;
          }), 1);
          arrayTo.push(productTemp); // this.fillPages();

          this.loadPage(this.currentPage);
        }
      }, {
        key: "putProductOut",
        value: function putProductOut() {
          var _this26 = this;

          this.productService.putOutOfSale(this.focusedProduct.id).subscribe(function (res) {
            return _this26.changeTempProductSale(_this26.focusedProduct.id);
          }, function (err) {
            return _this26.loadingProductState.setError(err);
          });
        }
      }, {
        key: "putProductBack",
        value: function putProductBack() {
          var _this27 = this;

          this.productService.putOnSale(this.focusedProduct.id).subscribe(function (res) {
            return _this27.changeTempProductSale(_this27.focusedProduct.id);
          }, function (err) {
            return _this27.loadingProductState.setError(err);
          });
        }
      }, {
        key: "alterProduct",
        value: function alterProduct(productID) {
          this.router.navigate(['products/alter', productID]);
        }
      }, {
        key: "amountChanged",
        value: function amountChanged() {
          if (this.amountToAdd < 1 || this.amountToAdd == null) {
            this.amountToAdd = 1;
          }

          this.totalPrice = this.focusedProduct.discountPrice * this.amountToAdd;
        }
      }]);

      return ProductsComponent;
    }();

    ProductsComponent.ctorParameters = function () {
      return [{
        type: _Services_products_service__WEBPACK_IMPORTED_MODULE_3__["ProductsService"]
      }, {
        type: _productTypes_Services_product_types_service__WEBPACK_IMPORTED_MODULE_7__["ProductTypesService"]
      }, {
        type: _shopping_Services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_4__["ShoppingCartService"]
      }, {
        type: _auth_Services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
      }];
    };

    ProductsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-products',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./products.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/products/products/products.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./products.component.css */
      "./src/app/components/products/products/products.component.css")).default]
    })], ProductsComponent);
    /***/
  },

  /***/
  "./src/app/components/shopping/Services/orders.service.ts":
  /*!****************************************************************!*\
    !*** ./src/app/components/shopping/Services/orders.service.ts ***!
    \****************************************************************/

  /*! exports provided: OrdersService */

  /***/
  function srcAppComponentsShoppingServicesOrdersServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrdersService", function () {
      return OrdersService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var OrdersService =
    /*#__PURE__*/
    function () {
      function OrdersService(http) {
        _classCallCheck(this, OrdersService);

        this.http = http;
        this.URL_BASE = 'http://localhost:8080/api/orders';
      }

      _createClass(OrdersService, [{
        key: "get",
        value: function get(orderID) {
          var url = this.buildUrl('/get');
          var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('orderID', orderID);
          return this.http.get(url, {
            params: httpParams
          });
        }
      }, {
        key: "getUsersCartID",
        value: function getUsersCartID() {
          var url = this.buildUrl('/getCartID');
          var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('username', sessionStorage.getItem('username'));
          return this.http.get(url, {
            params: httpParams
          });
        }
      }, {
        key: "emptyCart",
        value: function emptyCart() {
          var url = this.buildUrl('/emptyCart');
          var param = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('username', sessionStorage.getItem('username'));
          this.http.delete(url, {
            params: param
          }).subscribe();
        }
      }, {
        key: "getUsersOrders",
        value: function getUsersOrders() {
          var url = this.buildUrl('/listByUsername');
          var param = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('username', sessionStorage.getItem('username'));
          return this.http.get(url, {
            params: param
          });
        }
      }, {
        key: "getOrderItems",
        value: function getOrderItems(orderID) {
          var url = this.buildUrl('/itemsList');
          var param = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('orderID', orderID);
          return this.http.get(url, {
            params: param
          });
        }
      }, {
        key: "getAllOrders",
        value: function getAllOrders() {
          var url = this.buildUrl('/listUnfinished');
          return this.http.get(url);
        }
      }, {
        key: "addToCart",
        value: function addToCart(cartItem) {
          var url = this.buildUrl('/addToCart');
          var param = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('username', sessionStorage.getItem('username'));
          return this.http.post(url, cartItem, {
            params: param
          });
        }
      }, {
        key: "updateCartItemAmount",
        value: function updateCartItemAmount(productID, newAmount) {
          var url = this.buildUrl('/updateCartItemAmount');
          var param = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('username', sessionStorage.getItem('username')).append('productID', productID).append('newAmount', newAmount);
          this.http.patch(url, null, {
            params: param
          }).subscribe();
        }
      }, {
        key: "orderCart",
        value: function orderCart(address) {
          var url = this.buildUrl('/order');
          var body = address;
          var param = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('username', sessionStorage.getItem('username'));
          return this.http.post(url, body, {
            params: param
          });
        }
      }, {
        key: "buildUrl",
        value: function buildUrl(relativeUrl) {
          return this.URL_BASE + relativeUrl;
        }
      }]);

      return OrdersService;
    }();

    OrdersService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    OrdersService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], OrdersService);
    /***/
  },

  /***/
  "./src/app/components/shopping/Services/shopping-cart.service.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/components/shopping/Services/shopping-cart.service.ts ***!
    \***********************************************************************/

  /*! exports provided: ShoppingCartService */

  /***/
  function srcAppComponentsShoppingServicesShoppingCartServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShoppingCartService", function () {
      return ShoppingCartService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _model_OrdersProductsVM__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../model/OrdersProductsVM */
    "./src/app/model/OrdersProductsVM.ts");
    /* harmony import */


    var _products_Services_products_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../products/Services/products.service */
    "./src/app/components/products/Services/products.service.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _orders_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./orders.service */
    "./src/app/components/shopping/Services/orders.service.ts");
    /* harmony import */


    var _auth_Services_authentication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../auth/Services/authentication.service */
    "./src/app/components/auth/Services/authentication.service.ts");

    var ShoppingCartService =
    /*#__PURE__*/
    function () {
      function ShoppingCartService(productsService, ordersService, loginService) {
        _classCallCheck(this, ShoppingCartService);

        this.productsService = productsService;
        this.ordersService = ordersService;
        this.loginService = loginService;
        this.itemsInCartSource = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](this.getItemsAmount());
        this.itemsInCart = this.itemsInCartSource.asObservable();

        if (this.loginService.isUserLoggedIn()) {
          this.updateCart();
        }
      }

      _createClass(ShoppingCartService, [{
        key: "changeItemsInCart",
        value: function changeItemsInCart() {
          this.itemsInCartSource.next(this.getItemsAmount());
        }
      }, {
        key: "getItemsAmount",
        value: function getItemsAmount() {
          var cart = JSON.parse(sessionStorage.getItem('cart'));

          if (cart == null) {
            return 0;
          } else {
            return cart.length;
          }
        }
        /*private createCart(): Array<OrdersProductsVM> {
          const cart = new Array<OrdersProductsVM>();
          this.ordersService.createCart().subscribe(
            orderID => {
              sessionStorage.setItem('cartID', JSON.stringify(orderID));
              this.saveCart(cart);
            }
          );
          return cart;
        }*/

      }, {
        key: "getCartFromDB",
        value: function getCartFromDB() {
          return this.ordersService.getOrderItems(sessionStorage.getItem('cartID'));
        }
      }, {
        key: "getCartFromSession",
        value: function getCartFromSession() {
          return JSON.parse(sessionStorage.getItem('cart'));
        }
      }, {
        key: "updateCart",
        value: function updateCart() {
          var _this28 = this;

          this.getCartFromDB().subscribe(function (cart) {
            return _this28.saveCart(cart);
          }, function (err) {
            return sessionStorage.removeItem('cart');
          });
        }
      }, {
        key: "saveCart",
        value: function saveCart(cart) {
          sessionStorage.setItem('cart', JSON.stringify(cart));
          this.changeItemsInCart();
        }
      }, {
        key: "loadCartIDFromDB",
        value: function loadCartIDFromDB() {
          var _this29 = this;

          this.ordersService.getUsersCartID().subscribe(function (cartID) {
            sessionStorage.setItem('cartID', cartID.toString(10));

            _this29.updateCart();
          });
        }
      }, {
        key: "isCartExists",
        value: function isCartExists() {
          var cart = sessionStorage.getItem('cart');

          if (cart == null || JSON.parse(cart).length === 0) {
            return false;
          } else {
            return true;
          }
        }
      }, {
        key: "addItem",
        value: function addItem(productID, amount) {
          var _this30 = this;

          var cartID = sessionStorage.getItem('cartID');
          var cartItem = new _model_OrdersProductsVM__WEBPACK_IMPORTED_MODULE_2__["OrdersProductsVM"]();
          cartItem.id = null;
          cartItem.amount = amount;
          cartItem.productID = productID;
          cartItem.orderID = parseInt(cartID, 10);
          cartItem.pricePerProduct = null;
          this.ordersService.addToCart(cartItem).subscribe(function (res) {
            cartItem.id = res;

            _this30.addItemToSessCart(cartItem);

            console.log(res);
          });
        }
      }, {
        key: "addItemToSessCart",
        value: function addItemToSessCart(cartItem) {
          var cart = this.getCartFromSession();
          var index = cart.findIndex(function (ci) {
            return ci.productID === cartItem.productID;
          });

          if (index < 0) {
            cart.push(cartItem);
          } else {
            cart[index].amount += cartItem.amount;
          }

          sessionStorage.setItem('cart', JSON.stringify(cart));
          this.changeItemsInCart();
        }
      }, {
        key: "emptyCart",
        value: function emptyCart() {
          this.ordersService.emptyCart();
          var cart = [];
          sessionStorage.setItem('cart', JSON.stringify(cart));
          this.changeItemsInCart();
        }
      }, {
        key: "updateItemAmount",
        value: function updateItemAmount(productIDS, newAmount) {
          var productID = parseInt(productIDS, 10);
          var cart = this.getCartFromSession();
          var index = cart.findIndex(function (p) {
            return p.productID === productID;
          });

          if (index > -1) {
            if (newAmount <= 0) {
              cart.splice(index, 1);
            } else {
              cart[index].amount = newAmount;
            }

            sessionStorage.setItem('cart', JSON.stringify(cart));
            this.changeItemsInCart();
            this.ordersService.updateCartItemAmount(productIDS, JSON.stringify(newAmount));
          }
        }
      }]);

      return ShoppingCartService;
    }();

    ShoppingCartService.ctorParameters = function () {
      return [{
        type: _products_Services_products_service__WEBPACK_IMPORTED_MODULE_3__["ProductsService"]
      }, {
        type: _orders_service__WEBPACK_IMPORTED_MODULE_5__["OrdersService"]
      }, {
        type: _auth_Services_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"]
      }];
    };

    ShoppingCartService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ShoppingCartService);
    /***/
  },

  /***/
  "./src/app/components/shopping/cart/CartCompState.ts":
  /*!***********************************************************!*\
    !*** ./src/app/components/shopping/cart/CartCompState.ts ***!
    \***********************************************************/

  /*! exports provided: CartCompState */

  /***/
  function srcAppComponentsShoppingCartCartCompStateTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CartCompState", function () {
      return CartCompState;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var CartCompState =
    /*#__PURE__*/
    function () {
      function CartCompState() {
        _classCallCheck(this, CartCompState);

        this.state = 0;
      }

      _createClass(CartCompState, [{
        key: "setViewCart",
        value: function setViewCart() {
          this.state = CartCompState.VIEWCART;
        }
      }, {
        key: "setAddress",
        value: function setAddress() {
          this.state = CartCompState.ADDRESS;
        }
      }, {
        key: "setGoToFinish",
        value: function setGoToFinish() {
          this.state = CartCompState.GOTOFINISH;
        }
      }, {
        key: "setFinished",
        value: function setFinished() {
          this.state = CartCompState.FINISHED;
        }
      }, {
        key: "isViewCart",
        value: function isViewCart() {
          return this.state === CartCompState.VIEWCART;
        }
      }, {
        key: "isAddress",
        value: function isAddress() {
          return this.state === CartCompState.ADDRESS;
        }
      }, {
        key: "isGoToFinish",
        value: function isGoToFinish() {
          return this.state === CartCompState.GOTOFINISH;
        }
      }, {
        key: "isFinished",
        value: function isFinished() {
          return this.state === CartCompState.FINISHED;
        }
      }]);

      return CartCompState;
    }();

    CartCompState.VIEWCART = 1;
    CartCompState.ADDRESS = 2;
    CartCompState.GOTOFINISH = 3;
    CartCompState.FINISHED = 4;
    /***/
  },

  /***/
  "./src/app/components/shopping/cart/cart.component.css":
  /*!*************************************************************!*\
    !*** ./src/app/components/shopping/cart/cart.component.css ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsShoppingCartCartComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2hvcHBpbmcvY2FydC9jYXJ0LmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/components/shopping/cart/cart.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/components/shopping/cart/cart.component.ts ***!
    \************************************************************/

  /*! exports provided: CartComponent */

  /***/
  function srcAppComponentsShoppingCartCartComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CartComponent", function () {
      return CartComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _model_OperState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../model/OperState */
    "./src/app/model/OperState.ts");
    /* harmony import */


    var _Services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../Services/shopping-cart.service */
    "./src/app/components/shopping/Services/shopping-cart.service.ts");
    /* harmony import */


    var _products_Services_products_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../products/Services/products.service */
    "./src/app/components/products/Services/products.service.ts");
    /* harmony import */


    var _model_OrderAddrVM__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../model/OrderAddrVM */
    "./src/app/model/OrderAddrVM.ts");
    /* harmony import */


    var _CartCompState__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./CartCompState */
    "./src/app/components/shopping/cart/CartCompState.ts");
    /* harmony import */


    var _Services_orders_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../Services/orders.service */
    "./src/app/components/shopping/Services/orders.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var CartComponent =
    /*#__PURE__*/
    function () {
      function CartComponent(shoppingCartService, productsService, ordersService, router) {
        _classCallCheck(this, CartComponent);

        this.shoppingCartService = shoppingCartService;
        this.productsService = productsService;
        this.ordersService = ordersService;
        this.router = router;
        this.loadingState = new _model_OperState__WEBPACK_IMPORTED_MODULE_2__["OperState"]();
        this.products = [];
        this.componentState = new _CartCompState__WEBPACK_IMPORTED_MODULE_6__["CartCompState"]();
      }

      _createClass(CartComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this31 = this;

          if (this.shoppingCartService.isCartExists()) {
            this.loadingState.setWorking();
            this.shoppingCartService.updateCart();
            this.totalPrice = 0;
            this.orderAddr = new _model_OrderAddrVM__WEBPACK_IMPORTED_MODULE_5__["OrderAddrVM"]();
            this.componentState.setViewCart();
            this.wasAltered = false;
            this.cart = this.shoppingCartService.getCartFromSession();
            this.productsService.listAll(true).subscribe(function (res) {
              _this31.products = res;

              _this31.updateTotalPrice();

              _this31.loadingState.setSuccess();
            }, function (err) {
              return _this31.loadingState.setError(err);
            });
          }
        }
      }, {
        key: "loadProduct",
        value: function loadProduct(currentID) {
          this.listedProduct = this.products.find(function (p) {
            return p.id === currentID;
          });
        }
      }, {
        key: "updateTotalPrice",
        value: function updateTotalPrice() {
          var _this32 = this;

          this.totalPrice = 0;
          this.cart.forEach(function (ci) {
            return _this32.totalPrice += _this32.products[_this32.products.findIndex(function (p) {
              return p.id === ci.productID;
            })].discountPrice * ci.amount;
          });
        }
      }, {
        key: "finishOrder",
        value: function finishOrder() {
          var _this33 = this;

          this.loadingState.setWorking();
          this.ordersService.orderCart(this.orderAddr).subscribe(function (res) {
            _this33.orderNumber = res.id;

            _this33.shoppingCartService.emptyCart();

            _this33.shoppingCartService.loadCartIDFromDB();

            _this33.loadingState.setSuccess();

            _this33.componentState.setFinished();

            _this33.showProducts();
          }, function (err) {
            return _this33.loadingState.setError(err);
          });
        }
      }, {
        key: "getOrderItems",
        value: function getOrderItems() {
          var _this34 = this;

          this.loadingState.setWorking();
          this.ordersService.getOrderItems(this.orderNumber.toString(10)).subscribe(function (res) {
            _this34.cart = res;

            _this34.loadingState.setSuccess();

            _this34.getOrderItems();
          }, function (err) {
            return _this34.loadingState.setError(err);
          });
        }
      }, {
        key: "alterAmount",
        value: function alterAmount(productID) {
          this.focusedProduct = this.products.find(function (p) {
            return p.id === productID;
          });
          this.alteredAmount = this.cart.find(function (c) {
            return c.productID === productID;
          }).amount;
        }
      }, {
        key: "amountChanged",
        value: function amountChanged() {
          if (this.alteredAmount < 0 || this.alteredAmount == null) {
            this.alteredAmount = 0;
          }
        }
      }, {
        key: "finishUpdateAmount",
        value: function finishUpdateAmount() {
          this.shoppingCartService.updateItemAmount(JSON.stringify(this.focusedProduct.id), this.alteredAmount);
          this.cart = this.shoppingCartService.getCartFromSession();
          this.updateTotalPrice();
        }
      }, {
        key: "empetyCart",
        value: function empetyCart() {
          this.shoppingCartService.emptyCart();
        }
      }, {
        key: "showProducts",
        value: function showProducts() {
          setTimeout(function (router) {
            router.navigate(['products']);
          }, 1500, this.router);
        }
      }]);

      return CartComponent;
    }();

    CartComponent.ctorParameters = function () {
      return [{
        type: _Services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_3__["ShoppingCartService"]
      }, {
        type: _products_Services_products_service__WEBPACK_IMPORTED_MODULE_4__["ProductsService"]
      }, {
        type: _Services_orders_service__WEBPACK_IMPORTED_MODULE_7__["OrdersService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]
      }];
    };

    CartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-cart',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./cart.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shopping/cart/cart.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./cart.component.css */
      "./src/app/components/shopping/cart/cart.component.css")).default]
    })], CartComponent);
    /***/
  },

  /***/
  "./src/app/components/shopping/orders/OrderCompState.ts":
  /*!**************************************************************!*\
    !*** ./src/app/components/shopping/orders/OrderCompState.ts ***!
    \**************************************************************/

  /*! exports provided: OrderCompState */

  /***/
  function srcAppComponentsShoppingOrdersOrderCompStateTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrderCompState", function () {
      return OrderCompState;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var OrderCompState =
    /*#__PURE__*/
    function () {
      function OrderCompState() {
        _classCallCheck(this, OrderCompState);

        this.state = 0;
      }

      _createClass(OrderCompState, [{
        key: "setShowAll",
        value: function setShowAll() {
          this.state = OrderCompState.SHOWALL;
        }
      }, {
        key: "setShowOne",
        value: function setShowOne() {
          this.state = OrderCompState.SHOWONE;
        }
      }, {
        key: "isShowAll",
        value: function isShowAll() {
          if (this.state === OrderCompState.SHOWALL) {
            return true;
          } else {
            return false;
          }
        }
      }, {
        key: "isShowOne",
        value: function isShowOne() {
          if (this.state === OrderCompState.SHOWONE) {
            return true;
          } else {
            return false;
          }
        }
      }]);

      return OrderCompState;
    }();

    OrderCompState.SHOWALL = 1;
    OrderCompState.SHOWONE = 2;
    /***/
  },

  /***/
  "./src/app/components/shopping/orders/orders.component.css":
  /*!*****************************************************************!*\
    !*** ./src/app/components/shopping/orders/orders.component.css ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsShoppingOrdersOrdersComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2hvcHBpbmcvb3JkZXJzL29yZGVycy5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/components/shopping/orders/orders.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/components/shopping/orders/orders.component.ts ***!
    \****************************************************************/

  /*! exports provided: OrdersComponent */

  /***/
  function srcAppComponentsShoppingOrdersOrdersComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrdersComponent", function () {
      return OrdersComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _Services_orders_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../Services/orders.service */
    "./src/app/components/shopping/Services/orders.service.ts");
    /* harmony import */


    var _model_OperState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../model/OperState */
    "./src/app/model/OperState.ts");
    /* harmony import */


    var _model_OrderInfo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../model/OrderInfo */
    "./src/app/model/OrderInfo.ts");
    /* harmony import */


    var _OrderCompState__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./OrderCompState */
    "./src/app/components/shopping/orders/OrderCompState.ts");
    /* harmony import */


    var _products_Services_products_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../products/Services/products.service */
    "./src/app/components/products/Services/products.service.ts");
    /* harmony import */


    var _auth_Services_authentication_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../auth/Services/authentication.service */
    "./src/app/components/auth/Services/authentication.service.ts");
    /* harmony import */


    var _customers_Services_customer_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../customers/Services/customer.service */
    "./src/app/components/customers/Services/customer.service.ts");

    var OrdersComponent =
    /*#__PURE__*/
    function () {
      function OrdersComponent(ordersService, productsService, loginService, customerService) {
        _classCallCheck(this, OrdersComponent);

        this.ordersService = ordersService;
        this.productsService = productsService;
        this.loginService = loginService;
        this.customerService = customerService;
        this.orderInfos = [];
        this.adminOrderInfos = [];
        this.customers = [];
        this.loadingState = new _model_OperState__WEBPACK_IMPORTED_MODULE_3__["OperState"]();
        this.componentState = new _OrderCompState__WEBPACK_IMPORTED_MODULE_5__["OrderCompState"]();
        this.products = [];
      }

      _createClass(OrdersComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this35 = this;

          this.loadingState.setWorking();
          this.componentState.setShowAll();
          this.ordersService.getUsersOrders().subscribe(function (orders) {
            var itemsProcessed = 0;
            orders.forEach(function (o) {
              var info = new _model_OrderInfo__WEBPACK_IMPORTED_MODULE_4__["OrderInfo"]();
              info.order = o;

              _this35.ordersService.getOrderItems(o.id.toString(10)).subscribe(function (res) {
                itemsProcessed++;
                info.items = res;

                _this35.orderInfos.push(info);

                if (itemsProcessed === orders.length) {
                  _this35.orderInfos.sort(function (oi1, oi2) {
                    return oi2.order.id - oi1.order.id;
                  });

                  _this35.loadingState.setSuccess();
                }
              }, function (err) {
                return _this35.loadingState.setError(err);
              });
            });
          }, function (err) {
            return _this35.loadingState.setError(err);
          });
          this.loadingState.setWorking();
          this.productsService.listAll(true).subscribe(function (res) {
            _this35.products = res;

            _this35.loadingState.setSuccess();
          }, function (err) {
            return _this35.loadingState.setError(err);
          });

          if (this.loginService.isUserAdmin()) {
            this.loadingState.setWorking();
            this.ordersService.getAllOrders().subscribe(function (orders) {
              var itemsProcessed = 0;
              orders.forEach(function (o) {
                var info = new _model_OrderInfo__WEBPACK_IMPORTED_MODULE_4__["OrderInfo"]();
                info.order = o;

                _this35.ordersService.getOrderItems(o.id.toString(10)).subscribe(function (res) {
                  itemsProcessed++;
                  info.items = res;

                  _this35.adminOrderInfos.push(info);

                  if (itemsProcessed === orders.length) {
                    _this35.orderInfos.sort(function (oi1, oi2) {
                      return oi2.order.id - oi1.order.id;
                    });

                    _this35.loadingState.setSuccess();
                  }
                }, function (err) {
                  return _this35.loadingState.setError(err);
                });
              });
            }, function (err) {
              return _this35.loadingState.setError(err);
            });
            this.customerService.list().subscribe(function (res) {
              return _this35.customers = res;
            }, function (err) {
              return _this35.loadingState.setError(err);
            });
          }
        }
      }, {
        key: "getTotalOrderPrice",
        value: function getTotalOrderPrice(ordersProducts) {
          var totalPrice = 0;
          ordersProducts.forEach(function (op) {
            return totalPrice += op.pricePerProduct * op.amount;
          });
          return totalPrice;
        }
      }, {
        key: "addressToString",
        value: function addressToString(address) {
          return address.street + ', ' + address.city + ', ' + address.psc;
        }
      }, {
        key: "orderOut",
        value: function orderOut(orderID) {
          var _this36 = this;

          this.orderID = orderID;
          this.componentState.setShowOne();

          if (this.loginService.isAdminMode()) {
            this.currentCustomer = this.customers.find(function (c) {
              return c.id === _this36.adminOrderInfos.find(function (oi) {
                return oi.order.id === _this36.orderID;
              }).order.customerId;
            });
          }
        }
      }, {
        key: "getCurrentOrder",
        value: function getCurrentOrder() {
          var _this37 = this;

          if (this.orderInfos.findIndex(function (oi) {
            return oi.order.id === _this37.orderID;
          }) < 0) {
            return this.adminOrderInfos[this.adminOrderInfos.findIndex(function (oi) {
              return oi.order.id === _this37.orderID;
            })].items;
          } else {
            return this.orderInfos[this.orderInfos.findIndex(function (oi) {
              return oi.order.id === _this37.orderID;
            })].items;
          }
        }
      }, {
        key: "loadProduct",
        value: function loadProduct(currentID) {
          this.currentProduct = this.products.find(function (p) {
            return p.id === currentID;
          });
        }
      }, {
        key: "getAllOrders",
        value: function getAllOrders() {
          this.componentState.setShowAll();
          this.orderID = null;
        }
      }, {
        key: "getCustomerStringByID",
        value: function getCustomerStringByID(customerID) {
          var tempCust = this.customers.find(function (c) {
            return c.id === customerID;
          });
          return tempCust.name + ' ' + tempCust.surname;
        }
      }]);

      return OrdersComponent;
    }();

    OrdersComponent.ctorParameters = function () {
      return [{
        type: _Services_orders_service__WEBPACK_IMPORTED_MODULE_2__["OrdersService"]
      }, {
        type: _products_Services_products_service__WEBPACK_IMPORTED_MODULE_6__["ProductsService"]
      }, {
        type: _auth_Services_authentication_service__WEBPACK_IMPORTED_MODULE_7__["AuthenticationService"]
      }, {
        type: _customers_Services_customer_service__WEBPACK_IMPORTED_MODULE_8__["CustomerService"]
      }];
    };

    OrdersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-orders',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./orders.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shopping/orders/orders.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./orders.component.css */
      "./src/app/components/shopping/orders/orders.component.css")).default]
    })], OrdersComponent);
    /***/
  },

  /***/
  "./src/app/components/side-nav/side-nav.component.css":
  /*!************************************************************!*\
    !*** ./src/app/components/side-nav/side-nav.component.css ***!
    \************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsSideNavSideNavComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2lkZS1uYXYvc2lkZS1uYXYuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/components/side-nav/side-nav.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/components/side-nav/side-nav.component.ts ***!
    \***********************************************************/

  /*! exports provided: SideNavComponent */

  /***/
  function srcAppComponentsSideNavSideNavComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SideNavComponent", function () {
      return SideNavComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _productTypes_Services_product_types_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../productTypes/Services/product-types.service */
    "./src/app/components/productTypes/Services/product-types.service.ts");
    /* harmony import */


    var _model_OperState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../model/OperState */
    "./src/app/model/OperState.ts");

    var SideNavComponent =
    /*#__PURE__*/
    function () {
      function SideNavComponent(productTypesService) {
        _classCallCheck(this, SideNavComponent);

        this.productTypesService = productTypesService;
        this.loadingState = new _model_OperState__WEBPACK_IMPORTED_MODULE_3__["OperState"]();
      }

      _createClass(SideNavComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this38 = this;

          this.productTypesService.list().subscribe(function (res) {
            _this38.productTypes = res;
          }, function (err) {
            _this38.loadingState.setError(err);
          });
        }
      }]);

      return SideNavComponent;
    }();

    SideNavComponent.ctorParameters = function () {
      return [{
        type: _productTypes_Services_product_types_service__WEBPACK_IMPORTED_MODULE_2__["ProductTypesService"]
      }];
    };

    SideNavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-side-nav',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./side-nav.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/side-nav/side-nav.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./side-nav.component.css */
      "./src/app/components/side-nav/side-nav.component.css")).default]
    })], SideNavComponent);
    /***/
  },

  /***/
  "./src/app/model/CustomersVM.ts":
  /*!**************************************!*\
    !*** ./src/app/model/CustomersVM.ts ***!
    \**************************************/

  /*! exports provided: CustomersVM */

  /***/
  function srcAppModelCustomersVMTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomersVM", function () {
      return CustomersVM;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var CustomersVM = function CustomersVM() {
      _classCallCheck(this, CustomersVM);
    };
    /***/

  },

  /***/
  "./src/app/model/DiscountsVM.ts":
  /*!**************************************!*\
    !*** ./src/app/model/DiscountsVM.ts ***!
    \**************************************/

  /*! exports provided: DiscountsVM */

  /***/
  function srcAppModelDiscountsVMTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DiscountsVM", function () {
      return DiscountsVM;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var DiscountsVM = function DiscountsVM() {
      _classCallCheck(this, DiscountsVM);
    };
    /***/

  },

  /***/
  "./src/app/model/OperState.ts":
  /*!************************************!*\
    !*** ./src/app/model/OperState.ts ***!
    \************************************/

  /*! exports provided: OperState */

  /***/
  function srcAppModelOperStateTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OperState", function () {
      return OperState;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var OperState =
    /*#__PURE__*/
    function () {
      function OperState() {
        _classCallCheck(this, OperState);

        this.state = 0;
      }

      _createClass(OperState, [{
        key: "setWorking",
        value: function setWorking() {
          this.state = OperState.WORKING;
        }
      }, {
        key: "setSuccess",
        value: function setSuccess() {
          this.state = OperState.SUCCESS;
        }
      }, {
        key: "isWorking",
        value: function isWorking() {
          return this.state === OperState.WORKING;
        }
      }, {
        key: "isSuccess",
        value: function isSuccess() {
          return this.state === OperState.SUCCESS;
        }
      }, {
        key: "isError",
        value: function isError() {
          return this.state === OperState.ERROR;
        }
      }, {
        key: "setError",
        value: function setError(error) {
          this.err = JSON.stringify(error, null, 1);
          this.state = OperState.ERROR;
        }
      }, {
        key: "getError",
        value: function getError() {
          return this.err;
        }
      }, {
        key: "setBack",
        value: function setBack() {
          this.state = 0;
        }
      }]);

      return OperState;
    }();

    OperState.WORKING = 1;
    OperState.SUCCESS = 2;
    OperState.ERROR = 3;
    /***/
  },

  /***/
  "./src/app/model/OrderAddrVM.ts":
  /*!**************************************!*\
    !*** ./src/app/model/OrderAddrVM.ts ***!
    \**************************************/

  /*! exports provided: OrderAddrVM */

  /***/
  function srcAppModelOrderAddrVMTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrderAddrVM", function () {
      return OrderAddrVM;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var OrderAddrVM = function OrderAddrVM() {
      _classCallCheck(this, OrderAddrVM);
    };
    /***/

  },

  /***/
  "./src/app/model/OrderInfo.ts":
  /*!************************************!*\
    !*** ./src/app/model/OrderInfo.ts ***!
    \************************************/

  /*! exports provided: OrderInfo */

  /***/
  function srcAppModelOrderInfoTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrderInfo", function () {
      return OrderInfo;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var OrderInfo = function OrderInfo() {
      _classCallCheck(this, OrderInfo);
    };
    /***/

  },

  /***/
  "./src/app/model/OrdersProductsVM.ts":
  /*!*******************************************!*\
    !*** ./src/app/model/OrdersProductsVM.ts ***!
    \*******************************************/

  /*! exports provided: OrdersProductsVM */

  /***/
  function srcAppModelOrdersProductsVMTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrdersProductsVM", function () {
      return OrdersProductsVM;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var OrdersProductsVM = function OrdersProductsVM() {
      _classCallCheck(this, OrdersProductsVM);
    };
    /***/

  },

  /***/
  "./src/app/model/ProductTypeVM.ts":
  /*!****************************************!*\
    !*** ./src/app/model/ProductTypeVM.ts ***!
    \****************************************/

  /*! exports provided: ProductTypeVM */

  /***/
  function srcAppModelProductTypeVMTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductTypeVM", function () {
      return ProductTypeVM;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var ProductTypeVM = function ProductTypeVM() {
      _classCallCheck(this, ProductTypeVM);
    };
    /***/

  },

  /***/
  "./src/app/model/ProductsVM.ts":
  /*!*************************************!*\
    !*** ./src/app/model/ProductsVM.ts ***!
    \*************************************/

  /*! exports provided: ProductsVM */

  /***/
  function srcAppModelProductsVMTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductsVM", function () {
      return ProductsVM;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var ProductsVM = function ProductsVM() {
      _classCallCheck(this, ProductsVM);
    };
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\PC\Documents\GitHub\Java-tests\Eshop test\Angular\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map