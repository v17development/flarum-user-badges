module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./forum.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./forum.js":
/*!******************!*\
  !*** ./forum.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_forum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/forum */ "./src/forum/index.js");
/* empty/unused harmony star reexport */

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _inheritsLoose_index_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../inheritsLoose/_index.mjs */ "./node_modules/@babel/runtime/helpers/inheritsLoose/_index.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inheritsLoose_index_mjs__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inheritsLoose/_index.mjs":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inheritsLoose/_index.mjs ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inheritsLoose; });
/* harmony import */ var _babel_runtime_helpers_setPrototypeOf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/setPrototypeOf */ "./node_modules/@babel/runtime/helpers/setPrototypeOf/index.js");

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  _babel_runtime_helpers_setPrototypeOf__WEBPACK_IMPORTED_MODULE_0__(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf/index.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  module.exports["default"] = module.exports, module.exports.__esModule = true;
  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./src/common/models/Badge.js":
/*!************************************!*\
  !*** ./src/common/models/Badge.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Badge; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_Model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/Model */ "flarum/Model");
/* harmony import */ var flarum_Model__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_Model__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_utils_mixin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/utils/mixin */ "flarum/utils/mixin");
/* harmony import */ var flarum_utils_mixin__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_utils_mixin__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _forum_components_BadgeModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../forum/components/BadgeModal */ "./src/forum/components/BadgeModal.js");





var Badge = /*#__PURE__*/function (_mixin) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(Badge, _mixin);

  function Badge() {
    return _mixin.apply(this, arguments) || this;
  }

  var _proto = Badge.prototype;

  _proto.apiEndpoint = function apiEndpoint() {
    return "/badges" + (this.exists ? "/" + this.data.id : "");
  };

  return Badge;
}(flarum_utils_mixin__WEBPACK_IMPORTED_MODULE_2___default()(flarum_Model__WEBPACK_IMPORTED_MODULE_1___default.a, {
  name: flarum_Model__WEBPACK_IMPORTED_MODULE_1___default.a.attribute("name"),
  icon: flarum_Model__WEBPACK_IMPORTED_MODULE_1___default.a.attribute("icon"),
  order: flarum_Model__WEBPACK_IMPORTED_MODULE_1___default.a.attribute("order"),
  image: flarum_Model__WEBPACK_IMPORTED_MODULE_1___default.a.attribute("image"),
  description: flarum_Model__WEBPACK_IMPORTED_MODULE_1___default.a.attribute("description"),
  isVisible: flarum_Model__WEBPACK_IMPORTED_MODULE_1___default.a.attribute("isVisible"),
  createdAt: flarum_Model__WEBPACK_IMPORTED_MODULE_1___default.a.attribute("createdAt"),
  earnedAmount: flarum_Model__WEBPACK_IMPORTED_MODULE_1___default.a.attribute("earnedAmount"),
  category: flarum_Model__WEBPACK_IMPORTED_MODULE_1___default.a.hasOne("category")
}));



/***/ }),

/***/ "./src/common/models/BadgeCategory.js":
/*!********************************************!*\
  !*** ./src/common/models/BadgeCategory.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BadgeCategory; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_Model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/Model */ "flarum/Model");
/* harmony import */ var flarum_Model__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_Model__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_utils_mixin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/utils/mixin */ "flarum/utils/mixin");
/* harmony import */ var flarum_utils_mixin__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_utils_mixin__WEBPACK_IMPORTED_MODULE_2__);




var BadgeCategory = /*#__PURE__*/function (_mixin) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(BadgeCategory, _mixin);

  function BadgeCategory() {
    return _mixin.apply(this, arguments) || this;
  }

  var _proto = BadgeCategory.prototype;

  _proto.apiEndpoint = function apiEndpoint() {
    return "/user_categories" + (this.exists ? "/" + this.data.id : "");
  };

  return BadgeCategory;
}(flarum_utils_mixin__WEBPACK_IMPORTED_MODULE_2___default()(flarum_Model__WEBPACK_IMPORTED_MODULE_1___default.a, {
  name: flarum_Model__WEBPACK_IMPORTED_MODULE_1___default.a.attribute("name"),
  order: flarum_Model__WEBPACK_IMPORTED_MODULE_1___default.a.attribute("order"),
  isEnabled: flarum_Model__WEBPACK_IMPORTED_MODULE_1___default.a.attribute("isEnabled"),
  createdAt: flarum_Model__WEBPACK_IMPORTED_MODULE_1___default.a.attribute("createdAt"),
  users: flarum_Model__WEBPACK_IMPORTED_MODULE_1___default.a.hasMany("users"),
  badges: flarum_Model__WEBPACK_IMPORTED_MODULE_1___default.a.hasMany("badges")
}));



/***/ }),

/***/ "./src/common/models/UserBadge.js":
/*!****************************************!*\
  !*** ./src/common/models/UserBadge.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UserBadge; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_Model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/Model */ "flarum/Model");
/* harmony import */ var flarum_Model__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_Model__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_utils_mixin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/utils/mixin */ "flarum/utils/mixin");
/* harmony import */ var flarum_utils_mixin__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_utils_mixin__WEBPACK_IMPORTED_MODULE_2__);




var UserBadge = /*#__PURE__*/function (_mixin) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(UserBadge, _mixin);

  function UserBadge() {
    return _mixin.apply(this, arguments) || this;
  }

  var _proto = UserBadge.prototype;

  _proto.apiEndpoint = function apiEndpoint() {
    return "/user_badges" + (this.exists ? "/" + this.data.id : "");
  };

  return UserBadge;
}(flarum_utils_mixin__WEBPACK_IMPORTED_MODULE_2___default()(flarum_Model__WEBPACK_IMPORTED_MODULE_1___default.a, {
  user: flarum_Model__WEBPACK_IMPORTED_MODULE_1___default.a.hasOne("user"),
  badge: flarum_Model__WEBPACK_IMPORTED_MODULE_1___default.a.hasOne("badge"),
  description: flarum_Model__WEBPACK_IMPORTED_MODULE_1___default.a.attribute("description"),
  isPrimary: flarum_Model__WEBPACK_IMPORTED_MODULE_1___default.a.attribute("isPrimary"),
  assignedAt: flarum_Model__WEBPACK_IMPORTED_MODULE_1___default.a.attribute("assignedAt")
}));



/***/ }),

/***/ "./src/forum/components/BadgeItemPage.js":
/*!***********************************************!*\
  !*** ./src/forum/components/BadgeItemPage.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BadgeItemPage; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_components_Page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/components/Page */ "flarum/components/Page");
/* harmony import */ var flarum_components_Page__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Page__WEBPACK_IMPORTED_MODULE_1__);



var BadgeItemPage = /*#__PURE__*/function (_Page) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(BadgeItemPage, _Page);

  function BadgeItemPage() {
    return _Page.apply(this, arguments) || this;
  }

  var _proto = BadgeItemPage.prototype;

  _proto.oninit = function oninit(vnode) {
    _Page.prototype.oninit.call(this, vnode);
  };

  _proto.view = function view() {
    return m("p", null, "Badge page");
  };

  return BadgeItemPage;
}(flarum_components_Page__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "./src/forum/components/BadgeModal.js":
/*!********************************************!*\
  !*** ./src/forum/components/BadgeModal.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BadgeModal; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_components_Modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/components/Modal */ "flarum/components/Modal");
/* harmony import */ var flarum_components_Modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Modal__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/Button */ "flarum/components/Button");
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_helpers_fullTime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/helpers/fullTime */ "flarum/helpers/fullTime");
/* harmony import */ var flarum_helpers_fullTime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_helpers_fullTime__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/utils/ItemList */ "flarum/utils/ItemList");
/* harmony import */ var flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_components_Link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/components/Link */ "flarum/components/Link");
/* harmony import */ var flarum_components_Link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _GiveBadgeModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./GiveBadgeModal */ "./src/forum/components/GiveBadgeModal.js");








var BadgeModal = /*#__PURE__*/function (_Modal) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(BadgeModal, _Modal);

  function BadgeModal() {
    return _Modal.apply(this, arguments) || this;
  }

  var _proto = BadgeModal.prototype;

  _proto.oninit = function oninit(vnode) {
    _Modal.prototype.oninit.call(this, vnode);

    this.loading = false;
  };

  _proto.className = function className() {
    return "Modal--small";
  };

  _proto.title = function title() {
    return app.translator.trans("v17development-flarum-badges.forum.badge_information");
  };

  _proto.content = function content() {
    var _this = this;

    return m("div", null, m("div", {
      className: "Modal-body"
    }, this.data().toArray()), this.attrs.userBadgeData && app.forum.attribute("canGiveBadge") && m("div", {
      className: "Modal-footer"
    }, m(flarum_components_Button__WEBPACK_IMPORTED_MODULE_2___default.a, {
      className: "Button Button--primary",
      onclick: function onclick() {
        if (confirm(app.translator.trans("v17development-flarum-badges.forum.moderation.remove_badge_confirm"))) {
          _this.loading = true;

          _this.attrs.userBadgeData["delete"]().then(function () {
            return _this.hide();
          });
        }
      },
      loading: this.loading
    }, app.translator.trans("v17development-flarum-badges.forum.moderation.remove_badge"))));
  };

  _proto.data = function data() {
    var _this2 = this;

    var items = new flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_4___default.a(); // Badge name

    items.add("name", m("div", {
      className: "BadgeModalListItem"
    }, m("p", null, m("b", null, app.translator.trans("v17development-flarum-badges.forum.badge.name"), ":")), m("p", null, this.attrs.badge.name()))); // Badge description

    items.add("description", m("div", {
      className: "BadgeModalListItem"
    }, m("p", null, m("b", null, app.translator.trans("v17development-flarum-badges.forum.badge.description"), ":")), m("p", null, this.attrs.badge.description()))); // Badge earning reason

    if (this.attrs.userBadgeData && (this.attrs.userBadgeData.description() || app.forum.attribute("canGiveBadge"))) {
      items.add("earning_reason", m("div", {
        className: "BadgeModalListItem"
      }, m("p", null, m("b", null, app.translator.trans("v17development-flarum-badges.forum.badge.earning_reason"), ":")), m("p", null, this.attrs.userBadgeData.description() ? this.attrs.userBadgeData.description() : m("i", null, app.translator.trans("v17development-flarum-badges.forum.badge.no_earning_reason"))), m("p", null, app.forum.attribute("canGiveBadge") && m("a", {
        href: "#",
        onclick: function onclick(e) {
          e.preventDefault();
          app.modal.show(_GiveBadgeModal__WEBPACK_IMPORTED_MODULE_6__["default"], {
            badge: _this2.attrs.userBadgeData
          });
        }
      }, app.translator.trans("v17development-flarum-badges.forum.badge.update_earning_reason")))));
    } // Badge earned on


    if (this.attrs.userBadgeData) {
      items.add("earned_date", m("div", {
        className: "BadgeModalListItem"
      }, m("p", null, m("b", null, app.translator.trans("v17development-flarum-badges.forum.badge.earned_on"), ":")), m("p", null, flarum_helpers_fullTime__WEBPACK_IMPORTED_MODULE_3___default()(this.attrs.userBadgeData.assignedAt()))));
    } // Badge category


    if (this.attrs.userBadgeData) {
      items.add("category", m("div", {
        className: "BadgeModalListItem"
      }, m("p", null, m("b", null, app.translator.trans("v17development-flarum-badges.forum.badge.category"), ":")), m("p", null, this.attrs.badge.category().name())));
    } // Badge category


    if (this.attrs.badge && this.attrs.badge.earnedAmount()) {
      items.add("earned_amount", m("div", {
        className: "BadgeModalListItem"
      }, m("p", null, app.translator.transChoice("v17development-flarum-badges.forum.badge.earned_count", this.attrs.badge.earnedAmount(), {
        count: this.attrs.badge.earnedAmount()
      }))));
    }

    return items;
  };

  return BadgeModal;
}(flarum_components_Modal__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "./src/forum/components/BadgesOverviewPage.js":
/*!****************************************************!*\
  !*** ./src/forum/components/BadgesOverviewPage.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BadgesOverviewPage; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_components_Page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/components/Page */ "flarum/components/Page");
/* harmony import */ var flarum_components_Page__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Page__WEBPACK_IMPORTED_MODULE_1__);



var BadgesOverviewPage = /*#__PURE__*/function (_Page) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(BadgesOverviewPage, _Page);

  function BadgesOverviewPage() {
    return _Page.apply(this, arguments) || this;
  }

  var _proto = BadgesOverviewPage.prototype;

  _proto.oninit = function oninit(vnode) {
    _Page.prototype.oninit.call(this, vnode);
  };

  _proto.view = function view() {
    return m("p", null, "Badge page");
  };

  return BadgesOverviewPage;
}(flarum_components_Page__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "./src/forum/components/BadgesProfilePage.js":
/*!***************************************************!*\
  !*** ./src/forum/components/BadgesProfilePage.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BadgesProfilePage; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_components_UserPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/components/UserPage */ "flarum/components/UserPage");
/* harmony import */ var flarum_components_UserPage__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_components_UserPage__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _UserBadgeList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UserBadgeList */ "./src/forum/components/UserBadgeList.js");




var BadgesProfilePage = /*#__PURE__*/function (_UserPage) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(BadgesProfilePage, _UserPage);

  function BadgesProfilePage() {
    return _UserPage.apply(this, arguments) || this;
  }

  var _proto = BadgesProfilePage.prototype;

  _proto.oninit = function oninit(vnode) {
    _UserPage.prototype.oninit.call(this, vnode);

    this.user = null;
    this.loadUser(m.route.param("username"));
  };

  _proto.content = function content() {
    return _UserBadgeList__WEBPACK_IMPORTED_MODULE_2__["default"].component({
      user: this.user
    });
  };

  _proto.show = function show(user) {
    _UserPage.prototype.show.call(this, user);

    this.user = user;
  };

  return BadgesProfilePage;
}(flarum_components_UserPage__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "./src/forum/components/GiveBadgeModal.js":
/*!************************************************!*\
  !*** ./src/forum/components/GiveBadgeModal.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GiveBadgeModal; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_components_Modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/components/Modal */ "flarum/components/Modal");
/* harmony import */ var flarum_components_Modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Modal__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/Button */ "flarum/components/Button");
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/utils/ItemList */ "flarum/utils/ItemList");
/* harmony import */ var flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_components_Select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/components/Select */ "flarum/components/Select");
/* harmony import */ var flarum_components_Select__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Select__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_utils_Stream__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/utils/Stream */ "flarum/utils/Stream");
/* harmony import */ var flarum_utils_Stream__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_utils_Stream__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _BadgeModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./BadgeModal */ "./src/forum/components/BadgeModal.js");








var GiveBadgeModal = /*#__PURE__*/function (_Modal) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(GiveBadgeModal, _Modal);

  function GiveBadgeModal() {
    return _Modal.apply(this, arguments) || this;
  }

  var _proto = GiveBadgeModal.prototype;

  _proto.oninit = function oninit(vnode) {
    var _this = this;

    _Modal.prototype.oninit.call(this, vnode); // Select image


    this.selectedBadge = this.attrs.badge ? this.attrs.badge.badge() : null; // Current user

    this.user = this.attrs.badge ? this.attrs.badge.user() : this.attrs.user; // User has badge

    this.userHasBadge = false; // Badge model

    this.badge = this.attrs.badge ? this.attrs.badge : app.store.createRecord("userBadges"); // Earning reason

    this.description = flarum_utils_Stream__WEBPACK_IMPORTED_MODULE_5___default()(this.badge.description()); // List of available bagges

    this.availableBadges = [];
    this.loading = false; // Load all available badges

    if (!this.attrs.badge) {
      this.loading = true;
      app.store.find("badge_categories", {
        include: "badges"
      }).then(function (badgeCategories) {
        _this.availableBadges = badgeCategories;
        _this.loading = false; // Redraw

        m.redraw();
      });
    } else {
      this.availableBadges[this.selectedBadge.id()] = this.selectedBadge.name();
    }
  };

  _proto.className = function className() {
    return "Modal--small BadgeModal";
  };

  _proto.title = function title() {
    return app.translator.trans("v17development-flarum-badges.forum." + (this.badge.exists ? "update" : "give") + "_badge");
  };

  _proto.content = function content() {
    return m("div", null, m("div", {
      className: "Modal-body"
    }, m("div", {
      className: "Form"
    }, this.fields().toArray())), m("div", {
      className: "Modal-footer"
    }, m(flarum_components_Button__WEBPACK_IMPORTED_MODULE_2___default.a, {
      className: "Button Button--primary",
      type: "submit",
      loading: this.loading,
      disabled: this.userHasBadge
    }, app.translator.trans("core.forum.composer_edit.submit_button"))));
  };

  _proto.fields = function fields() {
    var _this2 = this;

    var items = new flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_3___default.a(); // Badge selector

    items.add("badge", m("div", {
      className: "BadgeModalListItem"
    }, m("p", null, m("b", null, app.translator.trans("v17development-flarum-badges.forum.badge.badge"))), m("div", {
      className: "Select"
    }, m("select", {
      value: this.selectedBadge ? this.selectedBadge.id() : "empty",
      disabled: !!this.attrs.badge,
      onchange: function onchange(e) {
        if (e.target.value === "empty") return;
        _this2.selectedBadge = app.store.getById("badges", e.target.value); // Check if the user already has this badge

        _this2.checkUserHasBadge(_this2.selectedBadge);
      },
      className: "Select-input FormControl"
    }, m("option", {
      value: "empty"
    }, app.translator.trans("v17development-flarum-badges.forum.select_badge")), !this.attrs.badge && this.availableBadges.map(function (category) {
      return m("optgroup", {
        label: category.name()
      }, category.badges().map(function (badge) {
        return m("option", {
          value: badge.id()
        }, badge.name());
      }));
    }), !!this.attrs.badge && m("option", {
      value: this.selectedBadge.id()
    }, this.selectedBadge.name())), m("i", {
      "class": "icon fas fa-caret-down Select-caret"
    })), this.userHasBadge && m("p", {
      className: "UserHasBadge"
    }, app.translator.trans("v17development-flarum-badges.forum.user_has_badge"))), 30); // Badge description

    items.add("badge_description", m("div", {
      className: "BadgeModalListItem"
    }, m("p", null, m("b", null, app.translator.trans("v17development-flarum-badges.forum.badge.description"), ":")), m("p", null, this.selectedBadge ? this.selectedBadge.description() : app.translator.trans("v17development-flarum-badges.forum.select_badge"))), 30); // Badge earning reason

    items.add("description", m("div", {
      className: "BadgeModalListItem"
    }, m("p", null, m("b", null, app.translator.trans("v17development-flarum-badges.forum.badge.earning_reason"))), m("textarea", {
      className: "FormControl",
      placeholder: app.translator.trans("v17development-flarum-badges.forum.badge.earning_reason"),
      bidi: this.description
    })), 30);
    return items;
  };

  _proto.checkUserHasBadge = function checkUserHasBadge(badge) {
    var foundBadge = false;
    this.user.userBadges().map(function (userBadge) {
      if (userBadge.badge() == badge) {
        foundBadge = true;
      }
    });
    this.userHasBadge = foundBadge;
    m.redraw();
  };

  _proto.onsubmit = function onsubmit(e) {
    var _this3 = this;

    e.preventDefault();
    this.loading = true;
    this.badge.save({
      description: this.description(),
      relationships: this.attrs.badge ? {} : {
        badge: this.selectedBadge,
        user: this.user
      }
    }).then(function () {
      // Re-open badge modal
      if (_this3.attrs.badge) {
        app.modal.show(_BadgeModal__WEBPACK_IMPORTED_MODULE_6__["default"], {
          badge: _this3.attrs.badge.badge(),
          userBadgeData: _this3.attrs.badge
        });
      } else {
        _this3.hide();
      }

      m.redraw();
    }, function (response) {
      _this3.loading = false;

      _this3.handleErrors(response);
    });
  };

  return GiveBadgeModal;
}(flarum_components_Modal__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "./src/forum/components/UserBadge.js":
/*!*******************************************!*\
  !*** ./src/forum/components/UserBadge.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UserBadge; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/Component */ "flarum/Component");
/* harmony import */ var flarum_Component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_Component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _BadgeModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BadgeModal */ "./src/forum/components/BadgeModal.js");




var UserBadge = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(UserBadge, _Component);

  function UserBadge() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = UserBadge.prototype;

  _proto.view = function view() {
    var _this = this;

    return m("span", {
      className: "UserBadge",
      title: "" + (this.attrs.badge.description() ? this.attrs.badge.description() : ""),
      onclick: function onclick() {
        return app.modal.show(_BadgeModal__WEBPACK_IMPORTED_MODULE_2__["default"], {
          badge: _this.attrs.badge,
          userBadgeData: _this.attrs.userBadgeData
        });
      }
    }, m("i", {
      className: this.attrs.badge.icon()
    }), " ", this.attrs.badge.name());
  };

  _proto.oncreate = function oncreate(vnode) {
    _Component.prototype.oncreate.call(this, vnode);

    this.$().tooltip();
  };

  return UserBadge;
}(flarum_Component__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "./src/forum/components/UserBadgeList.js":
/*!***********************************************!*\
  !*** ./src/forum/components/UserBadgeList.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UserBadgeList; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/Component */ "flarum/Component");
/* harmony import */ var flarum_Component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_Component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _UserBadge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UserBadge */ "./src/forum/components/UserBadge.js");




var UserBadgeList = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(UserBadgeList, _Component);

  function UserBadgeList() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = UserBadgeList.prototype;

  _proto.view = function view() {
    var categories = {};
    this.attrs.user.userBadges().map(function (userBadge) {
      var categoryId = userBadge.badge().category().id();

      if (!categories[categoryId]) {
        categories[categoryId] = [userBadge];
      } else {
        categories[categoryId].push(userBadge);
      }
    });
    return m("div", {
      className: "UserBadges"
    }, Object.keys(categories).length === 0 && m("div", {
      className: "Placeholder"
    }, m("p", null, "This user does not have any badges yet.")), Object.keys(categories).length >= 1 && Object.keys(categories).map(function (categoryId) {
      var category = categories[categoryId];
      return m("div", null, m("h3", null, category[0].badge().category().name()), category.sort(function (a, b) {
        return a.badge().order() - b.badge().order();
      }).map(function (userBadge) {
        return m(_UserBadge__WEBPACK_IMPORTED_MODULE_2__["default"], {
          badge: userBadge.badge(),
          userBadgeData: userBadge
        });
      }));
    }));
  };

  return UserBadgeList;
}(flarum_Component__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "./src/forum/index.js":
/*!****************************!*\
  !*** ./src/forum/index.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/extend */ "flarum/extend");
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_Model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/Model */ "flarum/Model");
/* harmony import */ var flarum_Model__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_Model__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_models_User__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/models/User */ "flarum/models/User");
/* harmony import */ var flarum_models_User__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_models_User__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_components_UserPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/components/UserPage */ "flarum/components/UserPage");
/* harmony import */ var flarum_components_UserPage__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_components_UserPage__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_utils_UserControls__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/utils/UserControls */ "flarum/utils/UserControls");
/* harmony import */ var flarum_utils_UserControls__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_utils_UserControls__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_components_LinkButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/components/LinkButton */ "flarum/components/LinkButton");
/* harmony import */ var flarum_components_LinkButton__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_components_LinkButton__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/components/Button */ "flarum/components/Button");
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Button__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _common_models_Badge__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/models/Badge */ "./src/common/models/Badge.js");
/* harmony import */ var _common_models_BadgeCategory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/models/BadgeCategory */ "./src/common/models/BadgeCategory.js");
/* harmony import */ var _common_models_UserBadge__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../common/models/UserBadge */ "./src/common/models/UserBadge.js");
/* harmony import */ var _components_BadgesProfilePage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/BadgesProfilePage */ "./src/forum/components/BadgesProfilePage.js");
/* harmony import */ var _components_BadgesOverviewPage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/BadgesOverviewPage */ "./src/forum/components/BadgesOverviewPage.js");
/* harmony import */ var _components_BadgeItemPage__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/BadgeItemPage */ "./src/forum/components/BadgeItemPage.js");
/* harmony import */ var _components_GiveBadgeModal__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/GiveBadgeModal */ "./src/forum/components/GiveBadgeModal.js");














app.initializers.add("v17development-flarum-badges", function (app) {
  app.store.models.badges = _common_models_Badge__WEBPACK_IMPORTED_MODULE_7__["default"];
  app.store.models.badgeCategories = _common_models_BadgeCategory__WEBPACK_IMPORTED_MODULE_8__["default"];
  app.store.models.userBadges = _common_models_UserBadge__WEBPACK_IMPORTED_MODULE_9__["default"];
  flarum_models_User__WEBPACK_IMPORTED_MODULE_2___default.a.prototype.userBadges = flarum_Model__WEBPACK_IMPORTED_MODULE_1___default.a.hasMany("userBadges");
  flarum_models_User__WEBPACK_IMPORTED_MODULE_2___default.a.prototype.userPrimaryBadge = flarum_Model__WEBPACK_IMPORTED_MODULE_1___default.a.hasOne("userPrimaryBadge"); // Add user badges to the user profile

  app.routes["user.badges"] = {
    path: "/u/:username/badges",
    component: _components_BadgesProfilePage__WEBPACK_IMPORTED_MODULE_10__["default"]
  }; // Future
  // // Badges overview page
  // app.routes["badges"] = {
  //   path: "/badges",
  //   component: BadgesOverviewPage,
  // };
  // // Badges overview page
  // app.routes["badges.category"] = {
  //   path: "/badges/category/:id",
  //   component: BadgesOverviewPage,
  // };
  // // Badge item page
  // app.routes["badges.item"] = {
  //   path: "/badges/:id",
  //   component: BadgeItemPage,
  // };
  // Add uploads to user page menu items

  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_components_UserPage__WEBPACK_IMPORTED_MODULE_3___default.a.prototype, "navItems", function (items) {
    items.add("badges", flarum_components_LinkButton__WEBPACK_IMPORTED_MODULE_5___default.a.component({
      href: app.route("user.badges", {
        username: this.user.username()
      }),
      name: "badges",
      icon: "fas fa-user-tag"
    }, [app.translator.trans("v17development-flarum-badges.forum.badge.badges"), m("span", {
      className: "Button-badge"
    }, this.user.userBadges().length)]), 90);
  });
  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_utils_UserControls__WEBPACK_IMPORTED_MODULE_4___default.a, "moderationControls", function (items, user) {
    // User can give badges
    if (app.forum.attribute("canGiveBadge")) {
      items.add("test", m(flarum_components_Button__WEBPACK_IMPORTED_MODULE_6___default.a, {
        icon: "fas fa-user-tag",
        onclick: function onclick() {
          return app.modal.show(_components_GiveBadgeModal__WEBPACK_IMPORTED_MODULE_13__["default"], {
            user: user
          });
        }
      }, app.translator.trans("v17development-flarum-badges.forum.give_badge")));
    }
  });
});

/***/ }),

/***/ "flarum/Component":
/*!**************************************************!*\
  !*** external "flarum.core.compat['Component']" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['Component'];

/***/ }),

/***/ "flarum/Model":
/*!**********************************************!*\
  !*** external "flarum.core.compat['Model']" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['Model'];

/***/ }),

/***/ "flarum/components/Button":
/*!**********************************************************!*\
  !*** external "flarum.core.compat['components/Button']" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Button'];

/***/ }),

/***/ "flarum/components/Link":
/*!********************************************************!*\
  !*** external "flarum.core.compat['components/Link']" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Link'];

/***/ }),

/***/ "flarum/components/LinkButton":
/*!**************************************************************!*\
  !*** external "flarum.core.compat['components/LinkButton']" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/LinkButton'];

/***/ }),

/***/ "flarum/components/Modal":
/*!*********************************************************!*\
  !*** external "flarum.core.compat['components/Modal']" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Modal'];

/***/ }),

/***/ "flarum/components/Page":
/*!********************************************************!*\
  !*** external "flarum.core.compat['components/Page']" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Page'];

/***/ }),

/***/ "flarum/components/Select":
/*!**********************************************************!*\
  !*** external "flarum.core.compat['components/Select']" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Select'];

/***/ }),

/***/ "flarum/components/UserPage":
/*!************************************************************!*\
  !*** external "flarum.core.compat['components/UserPage']" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/UserPage'];

/***/ }),

/***/ "flarum/extend":
/*!***********************************************!*\
  !*** external "flarum.core.compat['extend']" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['extend'];

/***/ }),

/***/ "flarum/helpers/fullTime":
/*!*********************************************************!*\
  !*** external "flarum.core.compat['helpers/fullTime']" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['helpers/fullTime'];

/***/ }),

/***/ "flarum/models/User":
/*!****************************************************!*\
  !*** external "flarum.core.compat['models/User']" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['models/User'];

/***/ }),

/***/ "flarum/utils/ItemList":
/*!*******************************************************!*\
  !*** external "flarum.core.compat['utils/ItemList']" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['utils/ItemList'];

/***/ }),

/***/ "flarum/utils/Stream":
/*!*****************************************************!*\
  !*** external "flarum.core.compat['utils/Stream']" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['utils/Stream'];

/***/ }),

/***/ "flarum/utils/UserControls":
/*!***********************************************************!*\
  !*** external "flarum.core.compat['utils/UserControls']" ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['utils/UserControls'];

/***/ }),

/***/ "flarum/utils/mixin":
/*!****************************************************!*\
  !*** external "flarum.core.compat['utils/mixin']" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['utils/mixin'];

/***/ })

/******/ });
//# sourceMappingURL=forum.js.map