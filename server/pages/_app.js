(function() {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 33:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "P": function() { return /* reexport */ Headers; },
  "r": function() { return /* reexport */ theme; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
;// CONCATENATED MODULE: external "@material-ui/core/AppBar"
var AppBar_namespaceObject = require("@material-ui/core/AppBar");;
var AppBar_default = /*#__PURE__*/__webpack_require__.n(AppBar_namespaceObject);
;// CONCATENATED MODULE: external "@material-ui/core/Toolbar"
var Toolbar_namespaceObject = require("@material-ui/core/Toolbar");;
var Toolbar_default = /*#__PURE__*/__webpack_require__.n(Toolbar_namespaceObject);
;// CONCATENATED MODULE: external "@material-ui/core/IconButton"
var IconButton_namespaceObject = require("@material-ui/core/IconButton");;
var IconButton_default = /*#__PURE__*/__webpack_require__.n(IconButton_namespaceObject);
;// CONCATENATED MODULE: external "@material-ui/core/Typography"
var Typography_namespaceObject = require("@material-ui/core/Typography");;
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_namespaceObject);
;// CONCATENATED MODULE: external "@material-ui/core/InputBase"
var InputBase_namespaceObject = require("@material-ui/core/InputBase");;
var InputBase_default = /*#__PURE__*/__webpack_require__.n(InputBase_namespaceObject);
;// CONCATENATED MODULE: external "@material-ui/core/Badge"
var Badge_namespaceObject = require("@material-ui/core/Badge");;
var Badge_default = /*#__PURE__*/__webpack_require__.n(Badge_namespaceObject);
;// CONCATENATED MODULE: external "@material-ui/core/MenuItem"
var MenuItem_namespaceObject = require("@material-ui/core/MenuItem");;
var MenuItem_default = /*#__PURE__*/__webpack_require__.n(MenuItem_namespaceObject);
;// CONCATENATED MODULE: external "@material-ui/core/Menu"
var Menu_namespaceObject = require("@material-ui/core/Menu");;
var Menu_default = /*#__PURE__*/__webpack_require__.n(Menu_namespaceObject);
;// CONCATENATED MODULE: external "@material-ui/icons/Menu"
var icons_Menu_namespaceObject = require("@material-ui/icons/Menu");;
var icons_Menu_default = /*#__PURE__*/__webpack_require__.n(icons_Menu_namespaceObject);
;// CONCATENATED MODULE: external "@material-ui/icons/Search"
var Search_namespaceObject = require("@material-ui/icons/Search");;
var Search_default = /*#__PURE__*/__webpack_require__.n(Search_namespaceObject);
;// CONCATENATED MODULE: external "@material-ui/icons/AccountCircle"
var AccountCircle_namespaceObject = require("@material-ui/icons/AccountCircle");;
var AccountCircle_default = /*#__PURE__*/__webpack_require__.n(AccountCircle_namespaceObject);
;// CONCATENATED MODULE: external "@material-ui/icons/Mail"
var Mail_namespaceObject = require("@material-ui/icons/Mail");;
var Mail_default = /*#__PURE__*/__webpack_require__.n(Mail_namespaceObject);
;// CONCATENATED MODULE: external "@material-ui/icons/Notifications"
var Notifications_namespaceObject = require("@material-ui/icons/Notifications");;
var Notifications_default = /*#__PURE__*/__webpack_require__.n(Notifications_namespaceObject);
;// CONCATENATED MODULE: external "@material-ui/icons/MoreVert"
var MoreVert_namespaceObject = require("@material-ui/icons/MoreVert");;
var MoreVert_default = /*#__PURE__*/__webpack_require__.n(MoreVert_namespaceObject);
// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__(604);
;// CONCATENATED MODULE: ./components/commons/Headers/style.tsx

const useStyles = (0,styles_.makeStyles)(theme => (0,styles_.createStyles)({
  grow: {
    flexGrow: 1
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block'
    }
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: (0,styles_.fade)(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: (0,styles_.fade)(theme.palette.common.white, 0.25)
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto'
    }
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputRoot: {
    color: 'inherit'
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch'
    }
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex'
    }
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  }
}));
;// CONCATENATED MODULE: ./components/commons/Headers/Headers.tsx


















const Headers = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = external_react_default().useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = external_react_default().useState(null);
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = event => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';

  const renderMenu = /*#__PURE__*/(0,jsx_runtime_.jsxs)((Menu_default()), {
    anchorEl: anchorEl,
    anchorOrigin: {
      vertical: 'top',
      horizontal: 'right'
    },
    id: menuId,
    keepMounted: true,
    transformOrigin: {
      vertical: 'top',
      horizontal: 'right'
    },
    open: isMenuOpen,
    onClose: handleMenuClose,
    children: [/*#__PURE__*/(0,jsx_runtime_.jsx)((MenuItem_default()), {
      onClick: handleMenuClose,
      children: "Profile"
    }), /*#__PURE__*/(0,jsx_runtime_.jsx)((MenuItem_default()), {
      onClick: handleMenuClose,
      children: "My account"
    })]
  });

  const mobileMenuId = 'primary-search-account-menu-mobile';

  const renderMobileMenu = /*#__PURE__*/(0,jsx_runtime_.jsxs)((Menu_default()), {
    anchorEl: mobileMoreAnchorEl,
    anchorOrigin: {
      vertical: 'top',
      horizontal: 'right'
    },
    id: mobileMenuId,
    keepMounted: true,
    transformOrigin: {
      vertical: 'top',
      horizontal: 'right'
    },
    open: isMobileMenuOpen,
    onClose: handleMobileMenuClose,
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((MenuItem_default()), {
      children: [/*#__PURE__*/(0,jsx_runtime_.jsx)((IconButton_default()), {
        "aria-label": "show 4 new mails",
        color: "inherit",
        children: /*#__PURE__*/(0,jsx_runtime_.jsx)((Badge_default()), {
          badgeContent: 4,
          color: "secondary",
          children: /*#__PURE__*/(0,jsx_runtime_.jsx)((Mail_default()), {})
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsx)("p", {
        children: "Messages"
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)((MenuItem_default()), {
      children: [/*#__PURE__*/(0,jsx_runtime_.jsx)((IconButton_default()), {
        "aria-label": "show 11 new notifications",
        color: "inherit",
        children: /*#__PURE__*/(0,jsx_runtime_.jsx)((Badge_default()), {
          badgeContent: 11,
          color: "secondary",
          children: /*#__PURE__*/(0,jsx_runtime_.jsx)((Notifications_default()), {})
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsx)("p", {
        children: "Notifications"
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)((MenuItem_default()), {
      onClick: handleProfileMenuOpen,
      children: [/*#__PURE__*/(0,jsx_runtime_.jsx)((IconButton_default()), {
        "aria-label": "account of current user",
        "aria-controls": "primary-search-account-menu",
        "aria-haspopup": "true",
        color: "inherit",
        children: /*#__PURE__*/(0,jsx_runtime_.jsx)((AccountCircle_default()), {})
      }), /*#__PURE__*/(0,jsx_runtime_.jsx)("p", {
        children: "Profile"
      })]
    })]
  });

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: classes.grow,
    children: [/*#__PURE__*/(0,jsx_runtime_.jsx)((AppBar_default()), {
      position: "static",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)((Toolbar_default()), {
        children: [/*#__PURE__*/(0,jsx_runtime_.jsx)((IconButton_default()), {
          edge: "start",
          color: "inherit",
          "aria-label": "open drawer",
          children: /*#__PURE__*/(0,jsx_runtime_.jsx)((icons_Menu_default()), {})
        }), /*#__PURE__*/(0,jsx_runtime_.jsx)((Typography_default()), {
          className: classes.title,
          variant: "h6",
          noWrap: true,
          children: "Material-UI"
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: classes.search,
          children: [/*#__PURE__*/(0,jsx_runtime_.jsx)("div", {
            className: classes.searchIcon,
            children: /*#__PURE__*/(0,jsx_runtime_.jsx)((Search_default()), {})
          }), /*#__PURE__*/(0,jsx_runtime_.jsx)((InputBase_default()), {
            placeholder: "Search\u2026",
            classes: {
              root: classes.inputRoot,
              input: classes.inputInput
            },
            inputProps: {
              'aria-label': 'search'
            }
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsx)("div", {
          className: classes.grow
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: classes.sectionDesktop,
          children: [/*#__PURE__*/(0,jsx_runtime_.jsx)((IconButton_default()), {
            "aria-label": "show 4 new mails",
            color: "inherit",
            children: /*#__PURE__*/(0,jsx_runtime_.jsx)((Badge_default()), {
              badgeContent: 4,
              color: "secondary",
              children: /*#__PURE__*/(0,jsx_runtime_.jsx)((Mail_default()), {})
            })
          }), /*#__PURE__*/(0,jsx_runtime_.jsx)((IconButton_default()), {
            "aria-label": "show 17 new notifications",
            color: "inherit",
            children: /*#__PURE__*/(0,jsx_runtime_.jsx)((Badge_default()), {
              badgeContent: 17,
              color: "secondary",
              children: /*#__PURE__*/(0,jsx_runtime_.jsx)((Notifications_default()), {})
            })
          }), /*#__PURE__*/(0,jsx_runtime_.jsx)((IconButton_default()), {
            edge: "end",
            "aria-label": "account of current user",
            "aria-controls": menuId,
            "aria-haspopup": "true",
            onClick: handleProfileMenuOpen,
            color: "inherit",
            children: /*#__PURE__*/(0,jsx_runtime_.jsx)((AccountCircle_default()), {})
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsx)("div", {
          className: classes.sectionMobile,
          children: /*#__PURE__*/(0,jsx_runtime_.jsx)((IconButton_default()), {
            "aria-label": "show more",
            "aria-controls": mobileMenuId,
            "aria-haspopup": "true",
            onClick: handleMobileMenuOpen,
            color: "inherit",
            children: /*#__PURE__*/(0,jsx_runtime_.jsx)((MoreVert_default()), {})
          })
        })]
      })
    }), renderMobileMenu, renderMenu]
  });
};
;// CONCATENATED MODULE: ./components/commons/Headers/index.ts

;// CONCATENATED MODULE: ./components/commons/Theme/theme.tsx

const theme = (0,styles_.createMuiTheme)({
  palette: {
    primary: {
      main: '#09257a',
      contrastText: '#fff'
    },
    secondary: {
      main: '#be3b48'
    }
  }
});
;// CONCATENATED MODULE: ./components/commons/index.ts



/***/ }),

/***/ 421:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(701);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_commons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(33);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(604);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__.ThemeProvider, {
    theme: _components_commons__WEBPACK_IMPORTED_MODULE_2__/* .theme */ .r,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("title", {
          children: "Create Next App"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("link", {
          rel: "icon",
          href: "/favicon.ico"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_commons__WEBPACK_IMPORTED_MODULE_2__/* .Headers */ .P, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Component, _objectSpread({}, pageProps))]
    })
  });
}

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ 604:
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/core/styles");;

/***/ }),

/***/ 701:
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ 297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__(421));
module.exports = __webpack_exports__;

})();