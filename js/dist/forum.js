/******/ (() => { // webpackBootstrap
/******/ 	// runtime can't be in strict mode because a global variable is assign and maybe created.
/******/ 	var __webpack_modules__ = ({

/***/ "./src/common/components/UserBadge.js":
/*!********************************************!*\
  !*** ./src/common/components/UserBadge.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UserBadge)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/Component */ "flarum/common/Component");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_components_Tooltip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/components/Tooltip */ "flarum/common/components/Tooltip");
/* harmony import */ var flarum_common_components_Tooltip__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Tooltip__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _forum_components_BadgeModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../forum/components/BadgeModal */ "./src/forum/components/BadgeModal.js");





var UserBadge = /*#__PURE__*/function (_Component) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(UserBadge, _Component);

  function UserBadge() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = UserBadge.prototype;

  _proto.oninit = function oninit(vnode) {
    _Component.prototype.oninit.call(this, vnode);

    this.tooltip = this.attrs.tooltip !== false;
    this.forceVisibility = this.attrs.forceVisibility === true;
  };

  _proto.view = function view() {
    // Hide badge when not enabled
    if (!this.attrs.badge.isVisible() && !this.forceVisibility) {
      return null;
    } // Just show badge


    if (this.tooltip === false) return this.badge();
    return m((flarum_common_components_Tooltip__WEBPACK_IMPORTED_MODULE_2___default()), {
      text: "" + (this.attrs.badge.description() ? this.attrs.badge.description() : "")
    }, this.badge());
  };

  _proto.badge = function badge() {
    var _this = this;

    var isPartlyHidden = !this.attrs.badge.isVisible() && this.forceVisibility; // This badge is an image

    if (this.attrs.badge.image()) {
      return m("img", {
        src: this.attrs.badge.image(),
        className: "UserBadgeImage",
        onclick: function onclick() {
          if (_this.attrs.onclick) {
            _this.attrs.onclick();
          }
        },
        style: {
          opacity: isPartlyHidden ? 0.5 : undefined
        }
      });
    }

    return m("span", {
      className: "UserBadge UserBadge-" + this.attrs.badge.id(),
      onclick: function onclick() {
        if (_this.attrs.onclick) {
          _this.attrs.onclick();
        }
      },
      style: {
        backgroundColor: this.attrs.badge.backgroundColor(),
        color: this.attrs.badge.labelColor(),
        borderColor: this.attrs.badge.backgroundColor(),
        opacity: isPartlyHidden ? 0.5 : undefined
      }
    }, m("i", {
      className: this.attrs.badge.icon(),
      style: {
        color: this.attrs.badge.iconColor()
      }
    }), " ", this.attrs.badge.name());
  };

  return UserBadge;
}((flarum_common_Component__WEBPACK_IMPORTED_MODULE_1___default()));



/***/ }),

/***/ "./src/common/index.js":
/*!*****************************!*\
  !*** ./src/common/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_common_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/common/app */ "flarum/common/app");
/* harmony import */ var flarum_common_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_common_app__WEBPACK_IMPORTED_MODULE_0__);

flarum_common_app__WEBPACK_IMPORTED_MODULE_0___default().initializers.add('v17development/flarum-user-badges', function () {// console.log('[v17development/flarum-user-badges] Hello, forum and admin!')
});

/***/ }),

/***/ "./src/common/models/Badge.js":
/*!************************************!*\
  !*** ./src/common/models/Badge.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Badge)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_Model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/Model */ "flarum/Model");
/* harmony import */ var flarum_Model__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_Model__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_utils_mixin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/utils/mixin */ "flarum/utils/mixin");
/* harmony import */ var flarum_utils_mixin__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_utils_mixin__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _forum_components_BadgeModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../forum/components/BadgeModal */ "./src/forum/components/BadgeModal.js");





var Badge = /*#__PURE__*/function (_mixin) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(Badge, _mixin);

  function Badge() {
    return _mixin.apply(this, arguments) || this;
  }

  var _proto = Badge.prototype;

  _proto.apiEndpoint = function apiEndpoint() {
    return "/badges" + (this.exists ? "/" + this.data.id : "");
  };

  return Badge;
}(flarum_utils_mixin__WEBPACK_IMPORTED_MODULE_2___default()((flarum_Model__WEBPACK_IMPORTED_MODULE_1___default()), {
  name: flarum_Model__WEBPACK_IMPORTED_MODULE_1___default().attribute("name"),
  icon: flarum_Model__WEBPACK_IMPORTED_MODULE_1___default().attribute("icon"),
  order: flarum_Model__WEBPACK_IMPORTED_MODULE_1___default().attribute("order"),
  image: flarum_Model__WEBPACK_IMPORTED_MODULE_1___default().attribute("image"),
  description: flarum_Model__WEBPACK_IMPORTED_MODULE_1___default().attribute("description"),
  isVisible: flarum_Model__WEBPACK_IMPORTED_MODULE_1___default().attribute("isVisible"),
  createdAt: flarum_Model__WEBPACK_IMPORTED_MODULE_1___default().attribute("createdAt"),
  earnedAmount: flarum_Model__WEBPACK_IMPORTED_MODULE_1___default().attribute("earnedAmount"),
  category: flarum_Model__WEBPACK_IMPORTED_MODULE_1___default().hasOne("category"),
  backgroundColor: flarum_Model__WEBPACK_IMPORTED_MODULE_1___default().attribute("backgroundColor"),
  iconColor: flarum_Model__WEBPACK_IMPORTED_MODULE_1___default().attribute("iconColor"),
  labelColor: flarum_Model__WEBPACK_IMPORTED_MODULE_1___default().attribute("labelColor")
}));



/***/ }),

/***/ "./src/common/models/BadgeCategory.js":
/*!********************************************!*\
  !*** ./src/common/models/BadgeCategory.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BadgeCategory)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_Model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/Model */ "flarum/Model");
/* harmony import */ var flarum_Model__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_Model__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_utils_mixin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/utils/mixin */ "flarum/utils/mixin");
/* harmony import */ var flarum_utils_mixin__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_utils_mixin__WEBPACK_IMPORTED_MODULE_2__);




var BadgeCategory = /*#__PURE__*/function (_mixin) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(BadgeCategory, _mixin);

  function BadgeCategory() {
    return _mixin.apply(this, arguments) || this;
  }

  var _proto = BadgeCategory.prototype;

  _proto.apiEndpoint = function apiEndpoint() {
    return "/badge_categories" + (this.exists ? "/" + this.data.id : "");
  };

  return BadgeCategory;
}(flarum_utils_mixin__WEBPACK_IMPORTED_MODULE_2___default()((flarum_Model__WEBPACK_IMPORTED_MODULE_1___default()), {
  name: flarum_Model__WEBPACK_IMPORTED_MODULE_1___default().attribute("name"),
  order: flarum_Model__WEBPACK_IMPORTED_MODULE_1___default().attribute("order"),
  description: flarum_Model__WEBPACK_IMPORTED_MODULE_1___default().attribute("description"),
  isEnabled: flarum_Model__WEBPACK_IMPORTED_MODULE_1___default().attribute("isEnabled"),
  createdAt: flarum_Model__WEBPACK_IMPORTED_MODULE_1___default().attribute("createdAt"),
  isTable: flarum_Model__WEBPACK_IMPORTED_MODULE_1___default().attribute("isTable"),
  users: flarum_Model__WEBPACK_IMPORTED_MODULE_1___default().hasMany("users"),
  badges: flarum_Model__WEBPACK_IMPORTED_MODULE_1___default().hasMany("badges")
}));



/***/ }),

/***/ "./src/common/models/UserBadge.js":
/*!****************************************!*\
  !*** ./src/common/models/UserBadge.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UserBadge)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_Model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/Model */ "flarum/Model");
/* harmony import */ var flarum_Model__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_Model__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_utils_mixin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/utils/mixin */ "flarum/utils/mixin");
/* harmony import */ var flarum_utils_mixin__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_utils_mixin__WEBPACK_IMPORTED_MODULE_2__);




var UserBadge = /*#__PURE__*/function (_mixin) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(UserBadge, _mixin);

  function UserBadge() {
    return _mixin.apply(this, arguments) || this;
  }

  var _proto = UserBadge.prototype;

  _proto.apiEndpoint = function apiEndpoint() {
    return "/user_badges" + (this.exists ? "/" + this.data.id : "");
  };

  return UserBadge;
}(flarum_utils_mixin__WEBPACK_IMPORTED_MODULE_2___default()((flarum_Model__WEBPACK_IMPORTED_MODULE_1___default()), {
  user: flarum_Model__WEBPACK_IMPORTED_MODULE_1___default().hasOne("user"),
  badge: flarum_Model__WEBPACK_IMPORTED_MODULE_1___default().hasOne("badge"),
  description: flarum_Model__WEBPACK_IMPORTED_MODULE_1___default().attribute("description"),
  isPrimary: flarum_Model__WEBPACK_IMPORTED_MODULE_1___default().attribute("isPrimary"),
  assignedAt: flarum_Model__WEBPACK_IMPORTED_MODULE_1___default().attribute("assignedAt")
}));



/***/ }),

/***/ "./src/forum/addSidebarNav.js":
/*!************************************!*\
  !*** ./src/forum/addSidebarNav.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addSidebarNav)
/* harmony export */ });
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/extend */ "flarum/extend");
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/components/IndexPage */ "flarum/components/IndexPage");
/* harmony import */ var flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_LinkButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/LinkButton */ "flarum/components/LinkButton");
/* harmony import */ var flarum_components_LinkButton__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_LinkButton__WEBPACK_IMPORTED_MODULE_2__);



function addSidebarNav() {
  (0,flarum_extend__WEBPACK_IMPORTED_MODULE_0__.extend)((flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_1___default().prototype), "navItems", function (items) {
    items.add("badges", m((flarum_components_LinkButton__WEBPACK_IMPORTED_MODULE_2___default()), {
      icon: "fas fa-id-badge",
      href: app.route("badges")
    }, app.translator.trans("v17development-flarum-badges.forum.badge.badges")), 15);
    return items;
  });
}

/***/ }),

/***/ "./src/forum/components/BadgeCategoryList/BlockListView.js":
/*!*****************************************************************!*\
  !*** ./src/forum/components/BadgeCategoryList/BlockListView.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BlockListView)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/Component */ "flarum/common/Component");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/Link */ "flarum/components/Link");
/* harmony import */ var flarum_components_Link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common_components_UserBadge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/components/UserBadge */ "./src/common/components/UserBadge.js");





var BlockListView = /*#__PURE__*/function (_Component) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(BlockListView, _Component);

  function BlockListView() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = BlockListView.prototype;

  _proto.view = function view() {
    if (!this.attrs.badges) {
      return null;
    }

    var badges = this.attrs.badges;
    return m("ul", {
      className: "BadgeCategoryList"
    }, badges.map(function (badge) {
      return m("li", null, m((flarum_components_Link__WEBPACK_IMPORTED_MODULE_2___default()), {
        href: app.route("badges.item", {
          id: badge.id()
        }),
        className: "BadgeContainer"
      }, m("div", {
        className: "BadgeContainerInfo"
      }, m(_common_components_UserBadge__WEBPACK_IMPORTED_MODULE_3__["default"], {
        badge: badge,
        tooltip: false
      }), m("p", {
        className: "BadgeDescription"
      }, badge.description()), m("p", null, app.translator.trans("v17development-flarum-badges.forum.badge.earned_count", {
        count: badge.earnedAmount()
      })))));
    }));
  };

  return BlockListView;
}((flarum_common_Component__WEBPACK_IMPORTED_MODULE_1___default()));



/***/ }),

/***/ "./src/forum/components/BadgeCategoryList/TableView.js":
/*!*************************************************************!*\
  !*** ./src/forum/components/BadgeCategoryList/TableView.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TableView)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/Component */ "flarum/common/Component");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/Link */ "flarum/components/Link");
/* harmony import */ var flarum_components_Link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common_components_UserBadge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/components/UserBadge */ "./src/common/components/UserBadge.js");





var TableView = /*#__PURE__*/function (_Component) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(TableView, _Component);

  function TableView() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = TableView.prototype;

  _proto.view = function view() {
    if (!this.attrs.badges) {
      return null;
    }

    var badges = this.attrs.badges;
    return m("table", {
      width: "100%",
      className: "BadgeTable"
    }, m("thead", null, m("tr", null, m("th", {
      scope: "col"
    }, app.translator.trans("v17development-flarum-badges.forum.badge.badges")), m("th", {
      scope: "col"
    }, app.translator.trans("v17development-flarum-badges.forum.badge.description")))), m("tbody", null, badges.map(function (badge) {
      return m("tr", null, m("td", null, m((flarum_components_Link__WEBPACK_IMPORTED_MODULE_2___default()), {
        href: app.route("badges.item", {
          id: badge.id()
        })
      }, m(_common_components_UserBadge__WEBPACK_IMPORTED_MODULE_3__["default"], {
        badge: badge,
        tooltip: false
      }))), m("td", null, badge.description(), m("div", {
        className: "BadgeTableRewarded"
      }, app.translator.trans("v17development-flarum-badges.forum.badge.earned_count", {
        count: badge.earnedAmount()
      }))));
    })));
  };

  return TableView;
}((flarum_common_Component__WEBPACK_IMPORTED_MODULE_1___default()));



/***/ }),

/***/ "./src/forum/components/BadgeItemPage.js":
/*!***********************************************!*\
  !*** ./src/forum/components/BadgeItemPage.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BadgeItemPage)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_components_Page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/components/Page */ "flarum/components/Page");
/* harmony import */ var flarum_components_Page__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Page__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/IndexPage */ "flarum/components/IndexPage");
/* harmony import */ var flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_helpers_listItems__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/helpers/listItems */ "flarum/common/helpers/listItems");
/* harmony import */ var flarum_common_helpers_listItems__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_helpers_listItems__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/components/LoadingIndicator */ "flarum/components/LoadingIndicator");
/* harmony import */ var flarum_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_components_LinkButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/components/LinkButton */ "flarum/components/LinkButton");
/* harmony import */ var flarum_components_LinkButton__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_components_LinkButton__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _BadgeUserList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./BadgeUserList */ "./src/forum/components/BadgeUserList.js");








var BadgeItemPage = /*#__PURE__*/function (_Page) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(BadgeItemPage, _Page);

  function BadgeItemPage() {
    return _Page.apply(this, arguments) || this;
  }

  var _proto = BadgeItemPage.prototype;

  _proto.oninit = function oninit(vnode) {
    var _this = this;

    _Page.prototype.oninit.call(this, vnode);

    this.bodyClass = "App--index";
    var found = app.store.getById("badges", m.route.param("id"));
    this.loading = !found;

    if (!found) {
      // Load badge categories
      app.store.find("badges/" + m.route.param("id")).then(function (badge) {
        _this.loading = false;
        app.history.push("badgeItemPage", badge.name());

        _this.setTitle(badge);

        m.redraw();
      });
    } else {
      app.history.push("badgeItemPage", found.name());
      this.setTitle(found);
    }
  };

  _proto.setTitle = function setTitle(badge) {
    app.setTitle(badge.name() + " - " + app.translator.trans("v17development-flarum-badges.forum.badge.badges"));
  };

  _proto.view = function view() {
    var badge = app.store.getById("badges", m.route.param("id"));
    return m("div", {
      className: "IndexPage"
    }, flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_2___default().prototype.hero(), m("div", {
      className: "container"
    }, m("div", {
      className: "sideNavContainer"
    }, m("nav", {
      className: "IndexPage-nav sideNav"
    }, m("ul", null, flarum_common_helpers_listItems__WEBPACK_IMPORTED_MODULE_3___default()(flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_2___default().prototype.sidebarItems().toArray()))), m("div", {
      className: "IndexPage-results sideNavOffset"
    }, m((flarum_components_LinkButton__WEBPACK_IMPORTED_MODULE_5___default()), {
      href: app.route("badges"),
      icon: "fas fa-chevron-left",
      className: "Button BadgesOverviewButton"
    }, app.translator.trans("v17development-flarum-badges.forum.badge.badges")), this.loading && m((flarum_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_4___default()), {
      size: "large"
    }), !this.loading && m("div", {
      className: "BadgeUserListInfo"
    }, m("i", {
      className: badge.icon()
    }), m("div", {
      className: "BadgeUserListInfo-meta"
    }, m("h3", null, badge.name()), m("p", null, badge.description()))), badge && m("h3", null, app.translator.trans("v17development-flarum-badges.forum.badge.earned_by_count", {
      count: badge.earnedAmount()
    })), !this.loading && app.forum.attribute("canViewDetailedBadgeUsers") && m(_BadgeUserList__WEBPACK_IMPORTED_MODULE_6__["default"], {
      state: app.userBadgeListState,
      badgeId: badge.id()
    })))));
  };

  return BadgeItemPage;
}((flarum_components_Page__WEBPACK_IMPORTED_MODULE_1___default()));



/***/ }),

/***/ "./src/forum/components/BadgeModal.js":
/*!********************************************!*\
  !*** ./src/forum/components/BadgeModal.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BadgeModal)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_components_Modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/components/Modal */ "flarum/components/Modal");
/* harmony import */ var flarum_components_Modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Modal__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/Button */ "flarum/components/Button");
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_helpers_fullTime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/helpers/fullTime */ "flarum/helpers/fullTime");
/* harmony import */ var flarum_helpers_fullTime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_helpers_fullTime__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/utils/ItemList */ "flarum/utils/ItemList");
/* harmony import */ var flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_components_LinkButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/components/LinkButton */ "flarum/components/LinkButton");
/* harmony import */ var flarum_components_LinkButton__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_components_LinkButton__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _GiveBadgeModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./GiveBadgeModal */ "./src/forum/components/GiveBadgeModal.js");








var BadgeModal = /*#__PURE__*/function (_Modal) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(BadgeModal, _Modal);

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
    }, this.data().toArray()), m("div", {
      className: "Modal-footer"
    }, m((flarum_components_LinkButton__WEBPACK_IMPORTED_MODULE_5___default()), {
      href: app.route("badges.item", {
        id: this.attrs.badge.id()
      }),
      className: "Button",
      style: {
        margin: "0 10px"
      }
    }, app.translator.trans("v17development-flarum-badges.forum.badge.badge_details")), this.attrs.userBadgeData && app.forum.attribute("canGiveBadge") && m((flarum_components_Button__WEBPACK_IMPORTED_MODULE_2___default()), {
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

    var items = new (flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_4___default())(); // Badge name

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
      }, m("p", null, m("b", null, app.translator.trans("v17development-flarum-badges.forum.badge.category"), ":")), m("p", null, this.attrs.badge.category() && this.attrs.badge.category().name(), !this.attrs.badge.category() && app.translator.trans("v17development-flarum-badges.forum.uncategorized"))));
    } // Badge category


    if (this.attrs.badge && this.attrs.badge.earnedAmount()) {
      items.add("earned_amount", m("div", {
        className: "BadgeModalListItem"
      }, m("p", null, app.translator.trans("v17development-flarum-badges.forum.badge.earned_count", {
        count: this.attrs.badge.earnedAmount()
      }))));
    }

    return items;
  };

  return BadgeModal;
}((flarum_components_Modal__WEBPACK_IMPORTED_MODULE_1___default()));



/***/ }),

/***/ "./src/forum/components/BadgeUserList.js":
/*!***********************************************!*\
  !*** ./src/forum/components/BadgeUserList.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BadgeUserList)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/Component */ "flarum/common/Component");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/Button */ "flarum/components/Button");
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_components_Link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/components/Link */ "flarum/components/Link");
/* harmony import */ var flarum_components_Link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/components/LoadingIndicator */ "flarum/components/LoadingIndicator");
/* harmony import */ var flarum_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_helpers_avatar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/helpers/avatar */ "flarum/helpers/avatar");
/* harmony import */ var flarum_helpers_avatar__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_helpers_avatar__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var flarum_helpers_humanTime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/helpers/humanTime */ "flarum/helpers/humanTime");
/* harmony import */ var flarum_helpers_humanTime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_helpers_humanTime__WEBPACK_IMPORTED_MODULE_6__);








var BadgeUserList = /*#__PURE__*/function (_Component) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(BadgeUserList, _Component);

  function BadgeUserList() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = BadgeUserList.prototype;

  _proto.oninit = function oninit(vnode) {
    _Component.prototype.oninit.call(this, vnode); // Load articles


    this.attrs.state.refreshParams({
      filter: {
        badge: this.attrs.badgeId
      },
      sort: "-assignedAt"
    });
  };

  _proto.view = function view() {
    var state = this.attrs.state;
    var loading = null;

    if (state.isInitialLoading() || state.isLoadingNext()) {
      loading = flarum_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_4___default().component({
        size: "large"
      });
    } else if (state.hasNext()) {
      loading = flarum_components_Button__WEBPACK_IMPORTED_MODULE_2___default().component({
        className: "Button",
        icon: "fas fa-chevron-down",
        onclick: state.loadNext.bind(state)
      }, app.translator.trans("core.forum.discussion_list.load_more_button"));
    } // No items


    if (state.isInitialLoading() && state.isEmpty()) {
      return m((flarum_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_4___default()), null);
    } // No items


    if (state.isEmpty()) {
      return m("div", {
        className: "BadgeUserList-empty"
      }, app.translator.trans("v17development-flarum-badges.forum.no_received"));
    }

    return m("div", null, m("ul", {
      className: "BadgeUserList"
    }, state.getPages().map(function (pg) {
      return pg.items.map(function (userBadge) {
        return m("li", null, m((flarum_components_Link__WEBPACK_IMPORTED_MODULE_3___default()), {
          href: app.route("user.badges", {
            username: userBadge.user().username()
          }),
          className: "BadgeUserList-user"
        }, flarum_helpers_avatar__WEBPACK_IMPORTED_MODULE_5___default()(userBadge.user()), m("div", {
          className: "BadgeUserList-userinfo"
        }, m("h4", null, userBadge.user().displayName()), m("p", null, app.translator.trans("v17development-flarum-badges.forum.badge.received_on", {
          date: flarum_helpers_humanTime__WEBPACK_IMPORTED_MODULE_6___default()(userBadge.assignedAt())
        })))));
      });
    })), loading && m("div", {
      className: "SupportSearchList-loadMore"
    }, loading));
  };

  return BadgeUserList;
}((flarum_common_Component__WEBPACK_IMPORTED_MODULE_1___default()));



/***/ }),

/***/ "./src/forum/components/BadgesOverviewPage.js":
/*!****************************************************!*\
  !*** ./src/forum/components/BadgesOverviewPage.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BadgesOverviewPage)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_components_Page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/components/Page */ "flarum/components/Page");
/* harmony import */ var flarum_components_Page__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Page__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/IndexPage */ "flarum/components/IndexPage");
/* harmony import */ var flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_helpers_listItems__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/helpers/listItems */ "flarum/common/helpers/listItems");
/* harmony import */ var flarum_common_helpers_listItems__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_helpers_listItems__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/components/LoadingIndicator */ "flarum/components/LoadingIndicator");
/* harmony import */ var flarum_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _BadgeCategoryList_TableView__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./BadgeCategoryList/TableView */ "./src/forum/components/BadgeCategoryList/TableView.js");
/* harmony import */ var _BadgeCategoryList_BlockListView__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./BadgeCategoryList/BlockListView */ "./src/forum/components/BadgeCategoryList/BlockListView.js");








var BadgesOverviewPage = /*#__PURE__*/function (_Page) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(BadgesOverviewPage, _Page);

  function BadgesOverviewPage() {
    return _Page.apply(this, arguments) || this;
  }

  var _proto = BadgesOverviewPage.prototype;

  _proto.oninit = function oninit(vnode) {
    var _this = this;

    _Page.prototype.oninit.call(this, vnode);

    this.bodyClass = "App--index";
    this.loading = true;
    app.history.push("badgeOverviewPage");
    app.setTitle(app.translator.trans("v17development-flarum-badges.forum.badge.badges")); // Load badge categories

    app.store.find("badge_categories").then(function () {
      _this.loading = false;
      m.redraw();
    });
  };

  _proto.view = function view() {
    var categories = app.store.all("badgeCategories").sort(function (a, b) {
      return a.order() - b.order();
    });
    return m("div", {
      className: "IndexPage"
    }, flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_2___default().prototype.hero(), m("div", {
      className: "container"
    }, m("div", {
      className: "sideNavContainer"
    }, m("nav", {
      className: "IndexPage-nav sideNav"
    }, m("ul", null, flarum_common_helpers_listItems__WEBPACK_IMPORTED_MODULE_3___default()(flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_2___default().prototype.sidebarItems().toArray()))), m("div", {
      className: "IndexPage-results sideNavOffset"
    }, m("h2", {
      className: "BadgeOverviewTitle"
    }, app.translator.trans("v17development-flarum-badges.forum.badge.badges")), this.loading && m((flarum_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_4___default()), {
      size: "large"
    }), !this.loading && categories.map(function (category) {
      var badges = category.badges().sort(function (a, b) {
        return a.order() - b.order();
      });
      return m("div", {
        className: "BadgeCategory"
      }, m("h3", null, category.name()), category.description() && m("p", null, category.description()), category.isTable() && m(_BadgeCategoryList_TableView__WEBPACK_IMPORTED_MODULE_5__["default"], {
        badges: badges
      }), !category.isTable() && m(_BadgeCategoryList_BlockListView__WEBPACK_IMPORTED_MODULE_6__["default"], {
        badges: badges
      }));
    })))));
  };

  return BadgesOverviewPage;
}((flarum_components_Page__WEBPACK_IMPORTED_MODULE_1___default()));



/***/ }),

/***/ "./src/forum/components/BadgesProfilePage.js":
/*!***************************************************!*\
  !*** ./src/forum/components/BadgesProfilePage.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BadgesProfilePage)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_components_UserPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/components/UserPage */ "flarum/components/UserPage");
/* harmony import */ var flarum_components_UserPage__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_components_UserPage__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/LoadingIndicator */ "flarum/components/LoadingIndicator");
/* harmony import */ var flarum_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _UserBadgeList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./UserBadgeList */ "./src/forum/components/UserBadgeList.js");





var BadgesProfilePage = /*#__PURE__*/function (_UserPage) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(BadgesProfilePage, _UserPage);

  function BadgesProfilePage() {
    return _UserPage.apply(this, arguments) || this;
  }

  var _proto = BadgesProfilePage.prototype;

  _proto.oninit = function oninit(vnode) {
    _UserPage.prototype.oninit.call(this, vnode);

    this.user = null;
    this.loading = true;
    this.loadUser(m.route.param("username"));
  };

  _proto.content = function content() {
    if (!this.user || this.loading) {
      return m((flarum_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_2___default()), {
        size: 46
      });
    }

    return _UserBadgeList__WEBPACK_IMPORTED_MODULE_3__["default"].component({
      user: this.user
    });
  };

  _proto.show = function show(user) {
    var _this = this;

    _UserPage.prototype.show.call(this, user);

    this.user = user;
    app.store.find("users", user.id(), {
      include: "userBadges,userBadges.badge,userBadges.badge.category"
    }).then(function () {
      _this.loading = false;
      m.redraw();
    });
  };

  return BadgesProfilePage;
}((flarum_components_UserPage__WEBPACK_IMPORTED_MODULE_1___default()));



/***/ }),

/***/ "./src/forum/components/GiveBadgeModal.js":
/*!************************************************!*\
  !*** ./src/forum/components/GiveBadgeModal.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GiveBadgeModal)
/* harmony export */ });
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
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(GiveBadgeModal, _Modal);

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

    this.categories = {};
    this.uncategorizedBadges = [];
    this.loading = false; // Load all available badges

    if (!this.attrs.badge) {
      this.loading = true;
      app.store.find("badges", {
        include: "category"
      }).then(function (badges) {
        badges.forEach(function (badge) {
          // Categorized
          if (badge.category()) {
            var category = badge.category();

            if (!_this.categories[category.id()]) {
              _this.categories[category.id()] = {
                category: category,
                badges: [badge]
              };
            } else {
              _this.categories[category.id()].badges.push(badge);
            }
          } // Uncategorized
          else {
            _this.uncategorizedBadges.push(badge);
          }
        });
        _this.loading = false; // Redraw

        m.redraw();
      });
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
    }, m((flarum_components_Button__WEBPACK_IMPORTED_MODULE_2___default()), {
      className: "Button Button--primary",
      type: "submit",
      loading: this.loading,
      disabled: this.userHasBadge
    }, app.translator.trans("core.forum.composer_edit.submit_button"))));
  };

  _proto.fields = function fields() {
    var _this2 = this;

    var items = new (flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_3___default())(); // Badge selector

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
    }, app.translator.trans("v17development-flarum-badges.forum.select_badge")), !this.attrs.badge && Object.values(this.categories).map(function (_ref) {
      var category = _ref.category,
          badges = _ref.badges;
      return m("optgroup", {
        label: category.name()
      }, badges.map(function (badge) {
        return m("option", {
          value: badge.id()
        }, badge.name());
      }));
    }), !this.attrs.badge && this.uncategorizedBadges.length >= 1 && m("optgroup", {
      label: app.translator.trans("v17development-flarum-badges.forum.uncategorized")
    }, this.uncategorizedBadges.map(function (badge) {
      return m("option", {
        value: badge.id()
      }, badge.name());
    })), !!this.attrs.badge && m("option", {
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
}((flarum_components_Modal__WEBPACK_IMPORTED_MODULE_1___default()));



/***/ }),

/***/ "./src/forum/components/UserBadgeList.js":
/*!***********************************************!*\
  !*** ./src/forum/components/UserBadgeList.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UserBadgeList)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/Component */ "flarum/common/Component");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_components_UserBadge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/components/UserBadge */ "./src/common/components/UserBadge.js");
/* harmony import */ var _BadgeModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BadgeModal */ "./src/forum/components/BadgeModal.js");





var UserBadgeList = /*#__PURE__*/function (_Component) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(UserBadgeList, _Component);

  function UserBadgeList() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = UserBadgeList.prototype;

  _proto.view = function view() {
    var categories = {};
    var uncategorized = [];
    this.attrs.user.userBadges().map(function (userBadge) {
      if (!userBadge) return null; // Categorized

      if (userBadge.badge().category()) {
        var category = userBadge.badge().category();

        if (!categories[category.id()]) {
          categories[category.id()] = {
            category: category,
            badges: [userBadge]
          };
        } else {
          categories[category.id()].badges.push(userBadge);
        }
      } // Uncategorized
      else {
        uncategorized.push(userBadge);
      }
    });
    return m("div", {
      className: "UserBadges"
    }, Object.keys(categories).length === 0 && m("div", {
      className: "Placeholder"
    }, m("p", null, app.translator.trans("v17development-flarum-badges.forum.user_no_badges"))), Object.keys(categories).length >= 1 && Object.keys(categories).sort(function (a, b) {
      return categories[a].category.order() - categories[b].category.order();
    }).map(function (id) {
      var category = categories[id].category;
      var badges = categories[id].badges;
      if (!category.isEnabled()) return null;
      return m("div", {
        className: "UserBadgesCategory"
      }, m("h3", null, category.name()), category.description() && m("p", null, category.description()), badges.sort(function (a, b) {
        return a.badge().order() - b.badge().order();
      }).map(function (userBadge) {
        return m(_common_components_UserBadge__WEBPACK_IMPORTED_MODULE_2__["default"], {
          badge: userBadge.badge(),
          onclick: function onclick() {
            return app.modal.show(_BadgeModal__WEBPACK_IMPORTED_MODULE_3__["default"], {
              badge: userBadge.badge(),
              userBadgeData: userBadge
            });
          }
        });
      }));
    }), uncategorized.length >= 1 && m("div", {
      className: "UserBadgesCategory"
    }, m("h3", null, app.translator.trans("v17development-flarum-badges.forum.uncategorized")), uncategorized.sort(function (a, b) {
      return a.badge().order() - b.badge().order();
    }).map(function (userBadge) {
      return m(_common_components_UserBadge__WEBPACK_IMPORTED_MODULE_2__["default"], {
        badge: userBadge.badge(),
        onclick: function onclick() {
          return app.modal.show(_BadgeModal__WEBPACK_IMPORTED_MODULE_3__["default"], {
            badge: userBadge.badge(),
            userBadgeData: userBadge
          });
        }
      });
    })));
  };

  return UserBadgeList;
}((flarum_common_Component__WEBPACK_IMPORTED_MODULE_1___default()));



/***/ }),

/***/ "./src/forum/components/addBadgeListUserCard.js":
/*!******************************************************!*\
  !*** ./src/forum/components/addBadgeListUserCard.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addBadgeListUserCard)
/* harmony export */ });
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/common/extend */ "flarum/common/extend");
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_forum_components_UserCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/forum/components/UserCard */ "flarum/forum/components/UserCard");
/* harmony import */ var flarum_forum_components_UserCard__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_UserCard__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_components_UserBadge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/components/UserBadge */ "./src/common/components/UserBadge.js");
/* harmony import */ var _BadgeModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BadgeModal */ "./src/forum/components/BadgeModal.js");




function addBadgeListUserCard() {
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__.extend)((flarum_forum_components_UserCard__WEBPACK_IMPORTED_MODULE_1___default().prototype), 'infoItems', function (items) {
    var userBadges = this.attrs.user.userBadges();
    items.add('badges', userBadges.map(function (userBadge) {
      return m(_common_components_UserBadge__WEBPACK_IMPORTED_MODULE_2__["default"], {
        badge: userBadge.badge(),
        onclick: function onclick() {
          return app.modal.show(_BadgeModal__WEBPACK_IMPORTED_MODULE_3__["default"], {
            badge: userBadge.badge(),
            userBadgeData: userBadge
          });
        }
      });
    }));
  });
}

/***/ }),

/***/ "./src/forum/index.js":
/*!****************************!*\
  !*** ./src/forum/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
/* harmony import */ var _addSidebarNav__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./addSidebarNav */ "./src/forum/addSidebarNav.js");
/* harmony import */ var _states_UserBadgeListState__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./states/UserBadgeListState */ "./src/forum/states/UserBadgeListState.js");
/* harmony import */ var _notification_BadgeReceivedNotification__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./notification/BadgeReceivedNotification */ "./src/forum/notification/BadgeReceivedNotification.js");
/* harmony import */ var flarum_forum_components_NotificationGrid__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! flarum/forum/components/NotificationGrid */ "flarum/forum/components/NotificationGrid");
/* harmony import */ var flarum_forum_components_NotificationGrid__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_NotificationGrid__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _components_addBadgeListUserCard__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/addBadgeListUserCard */ "./src/forum/components/addBadgeListUserCard.js");



















app.initializers.add("v17development-flarum-badges", function (app) {
  app.store.models.badges = _common_models_Badge__WEBPACK_IMPORTED_MODULE_7__["default"];
  app.store.models.badgeCategories = _common_models_BadgeCategory__WEBPACK_IMPORTED_MODULE_8__["default"];
  app.store.models.userBadges = _common_models_UserBadge__WEBPACK_IMPORTED_MODULE_9__["default"];
  (flarum_models_User__WEBPACK_IMPORTED_MODULE_2___default().prototype.userBadges) = flarum_Model__WEBPACK_IMPORTED_MODULE_1___default().hasMany("userBadges");
  (flarum_models_User__WEBPACK_IMPORTED_MODULE_2___default().prototype.userPrimaryBadge) = flarum_Model__WEBPACK_IMPORTED_MODULE_1___default().hasOne("userPrimaryBadge"); // Add user badges to the user profile

  app.routes["user.badges"] = {
    path: "/u/:username/badges",
    component: _components_BadgesProfilePage__WEBPACK_IMPORTED_MODULE_10__["default"]
  }; // Badges overview page

  app.routes.badges = {
    path: "/badges",
    component: _components_BadgesOverviewPage__WEBPACK_IMPORTED_MODULE_11__["default"]
  }; // Future
  // // Badges overview page
  // app.routes["badges.category"] = {
  //   path: "/badges/category/:id",
  //   component: BadgesOverviewPage,
  // };
  // Badge item page

  app.routes["badges.item"] = {
    path: "/badges/:id",
    component: _components_BadgeItemPage__WEBPACK_IMPORTED_MODULE_12__["default"]
  };
  (0,_addSidebarNav__WEBPACK_IMPORTED_MODULE_14__["default"])();
  app.userBadgeListState = new _states_UserBadgeListState__WEBPACK_IMPORTED_MODULE_15__["default"]({}); // Badge received notification

  app.notificationComponents.badgeReceived = _notification_BadgeReceivedNotification__WEBPACK_IMPORTED_MODULE_16__["default"]; // Enable badge notifications?

  (0,flarum_extend__WEBPACK_IMPORTED_MODULE_0__.extend)((flarum_forum_components_NotificationGrid__WEBPACK_IMPORTED_MODULE_17___default().prototype), "notificationTypes", function (items) {
    items.add("badgeReceived", {
      name: "badgeReceived",
      icon: "fas fa-user-tag",
      label: app.translator.trans("v17development-flarum-badges.forum.notification.settings")
    });
  }); // Add uploads to user page menu items

  (0,flarum_extend__WEBPACK_IMPORTED_MODULE_0__.extend)((flarum_components_UserPage__WEBPACK_IMPORTED_MODULE_3___default().prototype), "navItems", function (items) {
    items.add("badges", flarum_components_LinkButton__WEBPACK_IMPORTED_MODULE_5___default().component({
      href: app.route("user.badges", {
        username: this.user.username()
      }),
      name: "badges",
      icon: "fas fa-user-tag"
    }, [app.translator.trans("v17development-flarum-badges.forum.badge.badges"), m("span", {
      className: "Button-badge"
    }, this.user.userBadges().length)]), 90);
  });
  (0,flarum_extend__WEBPACK_IMPORTED_MODULE_0__.extend)((flarum_utils_UserControls__WEBPACK_IMPORTED_MODULE_4___default()), "moderationControls", function (items, user) {
    // User can give badges
    if (app.forum.attribute("canGiveBadge")) {
      items.add("test", m((flarum_components_Button__WEBPACK_IMPORTED_MODULE_6___default()), {
        icon: "fas fa-user-tag",
        onclick: function onclick() {
          return app.modal.show(_components_GiveBadgeModal__WEBPACK_IMPORTED_MODULE_13__["default"], {
            user: user
          });
        }
      }, app.translator.trans("v17development-flarum-badges.forum.give_badge")));
    }
  });
  (0,_components_addBadgeListUserCard__WEBPACK_IMPORTED_MODULE_18__["default"])();
});

/***/ }),

/***/ "./src/forum/notification/BadgeReceivedNotification.js":
/*!*************************************************************!*\
  !*** ./src/forum/notification/BadgeReceivedNotification.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BadgeReceivedNotification)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_forum_components_Notification__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/forum/components/Notification */ "flarum/forum/components/Notification");
/* harmony import */ var flarum_forum_components_Notification__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_Notification__WEBPACK_IMPORTED_MODULE_1__);



var BadgeReceivedNotification = /*#__PURE__*/function (_Notification) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(BadgeReceivedNotification, _Notification);

  function BadgeReceivedNotification() {
    return _Notification.apply(this, arguments) || this;
  }

  var _proto = BadgeReceivedNotification.prototype;

  _proto.icon = function icon() {
    return "";
  };

  _proto.href = function href() {
    return app.route("user.badges", {
      username: app.session.user.username()
    });
  };

  _proto.content = function content() {
    return app.translator.trans("v17development-flarum-badges.forum.notification.title");
  };

  _proto.excerpt = function excerpt() {
    var subject = this.attrs.notification.subject();
    return m("div", null, m("i", {
      className: "icon " + subject.badge().icon()
    }), subject.badge().name());
  };

  return BadgeReceivedNotification;
}((flarum_forum_components_Notification__WEBPACK_IMPORTED_MODULE_1___default()));



/***/ }),

/***/ "./src/forum/states/UserBadgeListState.js":
/*!************************************************!*\
  !*** ./src/forum/states/UserBadgeListState.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UserBadgeListState)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_common_states_PaginatedListState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/states/PaginatedListState */ "flarum/common/states/PaginatedListState");
/* harmony import */ var flarum_common_states_PaginatedListState__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_states_PaginatedListState__WEBPACK_IMPORTED_MODULE_2__);




var UserBadgeListState = /*#__PURE__*/function (_PaginatedListState) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(UserBadgeListState, _PaginatedListState);

  function UserBadgeListState(params, page) {
    if (page === void 0) {
      page = 1;
    }

    return _PaginatedListState.call(this, params, page, 18) || this;
  }

  (0,_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(UserBadgeListState, [{
    key: "type",
    get: function get() {
      return "user_badges";
    }
  }]);

  return UserBadgeListState;
}((flarum_common_states_PaginatedListState__WEBPACK_IMPORTED_MODULE_2___default()));



/***/ }),

/***/ "flarum/Model":
/*!**********************************************!*\
  !*** external "flarum.core.compat['Model']" ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['Model'];

/***/ }),

/***/ "flarum/common/Component":
/*!*********************************************************!*\
  !*** external "flarum.core.compat['common/Component']" ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/Component'];

/***/ }),

/***/ "flarum/common/app":
/*!***************************************************!*\
  !*** external "flarum.core.compat['common/app']" ***!
  \***************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/app'];

/***/ }),

/***/ "flarum/common/components/Tooltip":
/*!******************************************************************!*\
  !*** external "flarum.core.compat['common/components/Tooltip']" ***!
  \******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/components/Tooltip'];

/***/ }),

/***/ "flarum/common/extend":
/*!******************************************************!*\
  !*** external "flarum.core.compat['common/extend']" ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/extend'];

/***/ }),

/***/ "flarum/common/helpers/listItems":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['common/helpers/listItems']" ***!
  \*****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/helpers/listItems'];

/***/ }),

/***/ "flarum/common/states/PaginatedListState":
/*!*************************************************************************!*\
  !*** external "flarum.core.compat['common/states/PaginatedListState']" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/states/PaginatedListState'];

/***/ }),

/***/ "flarum/components/Button":
/*!**********************************************************!*\
  !*** external "flarum.core.compat['components/Button']" ***!
  \**********************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['components/Button'];

/***/ }),

/***/ "flarum/components/IndexPage":
/*!*************************************************************!*\
  !*** external "flarum.core.compat['components/IndexPage']" ***!
  \*************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['components/IndexPage'];

/***/ }),

/***/ "flarum/components/Link":
/*!********************************************************!*\
  !*** external "flarum.core.compat['components/Link']" ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['components/Link'];

/***/ }),

/***/ "flarum/components/LinkButton":
/*!**************************************************************!*\
  !*** external "flarum.core.compat['components/LinkButton']" ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['components/LinkButton'];

/***/ }),

/***/ "flarum/components/LoadingIndicator":
/*!********************************************************************!*\
  !*** external "flarum.core.compat['components/LoadingIndicator']" ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['components/LoadingIndicator'];

/***/ }),

/***/ "flarum/components/Modal":
/*!*********************************************************!*\
  !*** external "flarum.core.compat['components/Modal']" ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['components/Modal'];

/***/ }),

/***/ "flarum/components/Page":
/*!********************************************************!*\
  !*** external "flarum.core.compat['components/Page']" ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['components/Page'];

/***/ }),

/***/ "flarum/components/Select":
/*!**********************************************************!*\
  !*** external "flarum.core.compat['components/Select']" ***!
  \**********************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['components/Select'];

/***/ }),

/***/ "flarum/components/UserPage":
/*!************************************************************!*\
  !*** external "flarum.core.compat['components/UserPage']" ***!
  \************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['components/UserPage'];

/***/ }),

/***/ "flarum/extend":
/*!***********************************************!*\
  !*** external "flarum.core.compat['extend']" ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['extend'];

/***/ }),

/***/ "flarum/forum/components/Notification":
/*!**********************************************************************!*\
  !*** external "flarum.core.compat['forum/components/Notification']" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['forum/components/Notification'];

/***/ }),

/***/ "flarum/forum/components/NotificationGrid":
/*!**************************************************************************!*\
  !*** external "flarum.core.compat['forum/components/NotificationGrid']" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['forum/components/NotificationGrid'];

/***/ }),

/***/ "flarum/forum/components/UserCard":
/*!******************************************************************!*\
  !*** external "flarum.core.compat['forum/components/UserCard']" ***!
  \******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['forum/components/UserCard'];

/***/ }),

/***/ "flarum/helpers/avatar":
/*!*******************************************************!*\
  !*** external "flarum.core.compat['helpers/avatar']" ***!
  \*******************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['helpers/avatar'];

/***/ }),

/***/ "flarum/helpers/fullTime":
/*!*********************************************************!*\
  !*** external "flarum.core.compat['helpers/fullTime']" ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['helpers/fullTime'];

/***/ }),

/***/ "flarum/helpers/humanTime":
/*!**********************************************************!*\
  !*** external "flarum.core.compat['helpers/humanTime']" ***!
  \**********************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['helpers/humanTime'];

/***/ }),

/***/ "flarum/models/User":
/*!****************************************************!*\
  !*** external "flarum.core.compat['models/User']" ***!
  \****************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['models/User'];

/***/ }),

/***/ "flarum/utils/ItemList":
/*!*******************************************************!*\
  !*** external "flarum.core.compat['utils/ItemList']" ***!
  \*******************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['utils/ItemList'];

/***/ }),

/***/ "flarum/utils/Stream":
/*!*****************************************************!*\
  !*** external "flarum.core.compat['utils/Stream']" ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['utils/Stream'];

/***/ }),

/***/ "flarum/utils/UserControls":
/*!***********************************************************!*\
  !*** external "flarum.core.compat['utils/UserControls']" ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['utils/UserControls'];

/***/ }),

/***/ "flarum/utils/mixin":
/*!****************************************************!*\
  !*** external "flarum.core.compat['utils/mixin']" ***!
  \****************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['utils/mixin'];

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _createClass)
/* harmony export */ });
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _inheritsLoose)
/* harmony export */ });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  (0,_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _setPrototypeOf)
/* harmony export */ });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!******************!*\
  !*** ./forum.js ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/common */ "./src/common/index.js");
/* harmony import */ var _src_forum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/forum */ "./src/forum/index.js");


})();

module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=forum.js.map