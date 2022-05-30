/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/get-viewport-options/dist/script.js":
/*!**********************************************************!*\
  !*** ./node_modules/get-viewport-options/dist/script.js ***!
  \**********************************************************/
/***/ (function(module, exports) {

"use strict";
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

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

function _classPrivateFieldLooseBase(receiver, privateKey) {
  if (!Object.prototype.hasOwnProperty.call(receiver, privateKey)) {
    throw new TypeError("attempted to use private field on non-instance");
  }

  return receiver;
}

var id = 0;

function _classPrivateFieldLooseKey(name) {
  return "__private_" + id++ + "_" + name;
}

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

(function (factory) {
  if (true) {
    // AMD. Register as an anonymous module.
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(function () {
  var _setup = _classPrivateFieldLooseKey("setup");

  var GetViewportOptions = /*#__PURE__*/function () {
    function GetViewportOptions() {
      _classCallCheck(this, GetViewportOptions);

      Object.defineProperty(this, _setup, {
        value: _setup2
      });
      this.viewportWidth = window.innerWidth || document.documentElement.clientWidth || document.getElementsByTagName('body')[0].clientWidth;
      this.viewportHeight = window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight;
      this.scrollbarWidth = this.getScrollWidth();
      this.hoverAvailability = this.getHoverAvailability();

      _classPrivateFieldLooseBase(this, _setup)[_setup]();
    }

    _createClass(GetViewportOptions, [{
      key: "getScrollWidth",
      // Функция определения ширины скролла
      value: function getScrollWidth() {
        var div = document.createElement('div');
        var width = 0;
        div.style.overflowY = 'scroll';
        div.style.width = '50px';
        div.style.height = '50px';
        document.body.append(div);
        width = div.offsetWidth - div.clientWidth;
        div.remove();
        return width;
      } // Функция определения поддержки ховера

    }, {
      key: "getHoverAvailability",
      value: function getHoverAvailability() {
        var style = document.createElement('style');
        style.textContent = "\n                :root {\n                    --hover-device:false;\n                }\n                @media (hover) {\n                    :root {\n                        --hover-device:true;\n                    }\n                }\n            ";
        document.body.append(style);
        var hover = getComputedStyle(document.getElementsByTagName('body')[0]).getPropertyValue('--hover-device');

        if (hover === 'false') {
          return false;
        } else {
          return true;
        }
      }
    }, {
      key: "getViewportWidth",
      value: function getViewportWidth() {
        return this.viewportWidth;
      }
    }, {
      key: "getViewportHeight",
      value: function getViewportHeight() {
        return this.viewportHeight;
      }
    }, {
      key: "getFullOptions",
      value: function getFullOptions() {
        return {
          viewportWidth: this.viewportWidth,
          viewportHeight: this.viewportHeight,
          scrollbarWidth: this.scrollbarWidth,
          hoverAvailability: this.hoverAvailability
        };
      }
    }]);

    return GetViewportOptions;
  }();

  function _setup2() {
    var _this = this; // Переопределение ширины и высоты при ресайзе


    window.addEventListener('resize', function () {
      _this.viewportWidth = window.innerWidth || document.documentElement.clientWidth || document.getElementsByTagName('body')[0].clientWidth;
      _this.viewportHeight = window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight;
    });
  }

  return GetViewportOptions;
});

/***/ }),

/***/ "./resources/blocks/header/header.js":
/*!*******************************************!*\
  !*** ./resources/blocks/header/header.js ***!
  \*******************************************/
/***/ (function() {

let $navbar = document.getElementsByClassName('header__navbar')[0];
let $navbarTop = document.getElementsByClassName('header__navbar-top-panel')[0];
let $navbarInnerNav = document.getElementsByClassName('header__navbar-inner-panel-right')[0];
let $navbarToggle = document.getElementsByClassName('header__navbar-toggle')[0];
let $navbarBtn = document.getElementsByClassName('header__navbar-btn')[0];
let navbarScrollClass = 'header__navbar--slide';
let navbarTopActiveClass = 'header__navbar-top-panel--active';
let navbarInnerActiveClass = 'header__navbar-inner-panel-right--active';

function checkNavbarBtnClick() {
  if (!$navbarInnerNav.classList.contains(navbarInnerActiveClass)) {
    $navbarInnerNav.classList.add(navbarInnerActiveClass);
  } else {
    $navbarInnerNav.classList.remove(navbarInnerActiveClass);
  }
}

function checkNavbarToggleClick() {
  if (!$navbarTop.classList.contains(navbarTopActiveClass)) {
    $navbarTop.classList.add(navbarTopActiveClass);
  } else {
    $navbarTop.classList.remove(navbarTopActiveClass);
  }
}

function checkScrollClass() {
  if (window.scrollY > 0) {
    $navbar.classList.add(navbarScrollClass);
  } else {
    $navbar.classList.remove(navbarScrollClass);
  }
}

$navbarBtn.addEventListener('click', () => {
  checkNavbarBtnClick();
});
$navbarToggle.addEventListener('click', () => {
  checkNavbarToggleClick();
});
window.addEventListener('scroll', () => {
  checkScrollClass();
});
checkScrollClass();

/***/ }),

/***/ "./resources/blocks/input/input.js":
/*!*****************************************!*\
  !*** ./resources/blocks/input/input.js ***!
  \*****************************************/
/***/ (function() {

let $inputForms = document.querySelectorAll('.input__form');
let inputFocusClass = 'input--focus';
let inputActiveClass = 'input--active';

if ($inputForms.length > 0) {
  $inputForms.forEach($input => {
    $input.onblur = function () {
      let $inputContainer = $input.parentNode;
      $inputContainer.classList.remove(inputFocusClass);
    };

    $input.onfocus = function () {
      let $inputContainer = $input.parentNode;
      $inputContainer.classList.add(inputFocusClass);

      if (!$inputContainer.classList.contains(inputActiveClass)) {
        $inputContainer.classList.add(inputActiveClass);
      }
    };
  });
}

/***/ }),

/***/ "./resources/blocks/modal/modal.js":
/*!*****************************************!*\
  !*** ./resources/blocks/modal/modal.js ***!
  \*****************************************/
/***/ (function() {

class Modals {
  static modalClass = 'modal';
  static modalOpenClass = 'modal--open';
  static modalShowClass = 'modal--show';

  constructor(options) {
    this.init();
  }

  init() {
    this.$modals = Array.from(document.getElementsByClassName(Modals.modalClass));
    this.modalsArray = new Map();
    this.$modals.forEach($modal => {
      let background = '<div class="modal__background" data-modal-close></div>';
      $modal.insertAdjacentHTML('afterbegin', background);
      this.modalsArray.set($modal.id, $modal);
    });
    this.$openButtons = document.querySelectorAll('[data-modal-open]');
    this.$closeButtons = document.querySelectorAll('[data-modal-close]');
    this.clickOpenHandler = this.clickOpenHandler.bind(this);
    this.clickCloseHandler = this.clickCloseHandler.bind(this);
    this.$openButtons.forEach($button => {
      $button.addEventListener('click', this.clickOpenHandler);
    });
    this.$closeButtons.forEach($button => {
      $button.addEventListener('click', this.clickCloseHandler);
    });
  }

  clickOpenHandler(event) {
    if (event.target.dataset.modalOpen) {
      this.open(event.target.dataset.modalOpen);
    } else {
      this.open(event.target.closest('[data-modal-open]').dataset.modalOpen);
    }
  }

  clickCloseHandler() {
    this.close();
  }

  open(id) {
    this.setCenter(id);
    this.modalsArray.get(id).classList.add(Modals.modalShowClass);
  }

  close() {
    this.$modals.forEach($modal => {
      $modal.classList.remove(Modals.modalOpenClass);
    });
  }

  setCenter(id) {
    this.modalsArray.get(id).classList.add(Modals.modalOpenClass);
    let modalHeight = this.modalsArray.get(id).offsetHeight;
    let viewportHeight = window.viewportOptions.viewportHeight;
    let top = viewportHeight / 2 - modalHeight / 2;
    this.modalsArray.get(id).style.top = top + 'px';
  }

}

window.modals = new Modals();

/***/ }),

/***/ "./resources/index.js":
/*!****************************!*\
  !*** ./resources/index.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var get_viewport_options__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! get-viewport-options */ "./node_modules/get-viewport-options/dist/script.js");
/* harmony import */ var get_viewport_options__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(get_viewport_options__WEBPACK_IMPORTED_MODULE_0__);

window.mobileWidth = 1279;
window.mobileWidthSmall = 768;
window.viewportOptions = new (get_viewport_options__WEBPACK_IMPORTED_MODULE_0___default())(); // Подключение эмулятора бэкенда

__webpack_require__(/*! ./js-backend/backend.js */ "./resources/js-backend/backend.js");

/***/ }),

/***/ "./resources/js-backend/backend.js":
/*!*****************************************!*\
  !*** ./resources/js-backend/backend.js ***!
  \*****************************************/
/***/ (function() {

//empty

/***/ }),

/***/ "./resources/blocks/about/about.scss":
/*!*******************************************!*\
  !*** ./resources/blocks/about/about.scss ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./resources/blocks/banner-task/banner-task.scss":
/*!*******************************************************!*\
  !*** ./resources/blocks/banner-task/banner-task.scss ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./resources/blocks/base/main.scss":
/*!*****************************************!*\
  !*** ./resources/blocks/base/main.scss ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./resources/blocks/base/media-queries.scss":
/*!**************************************************!*\
  !*** ./resources/blocks/base/media-queries.scss ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./resources/blocks/base/mixins.scss":
/*!*******************************************!*\
  !*** ./resources/blocks/base/mixins.scss ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./resources/blocks/base/variables.scss":
/*!**********************************************!*\
  !*** ./resources/blocks/base/variables.scss ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./resources/blocks/breadcrumbs/breadcrumbs.scss":
/*!*******************************************************!*\
  !*** ./resources/blocks/breadcrumbs/breadcrumbs.scss ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./resources/blocks/contacts/contacts.scss":
/*!*************************************************!*\
  !*** ./resources/blocks/contacts/contacts.scss ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./resources/blocks/footer/footer.scss":
/*!*********************************************!*\
  !*** ./resources/blocks/footer/footer.scss ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./resources/blocks/header/header.scss":
/*!*********************************************!*\
  !*** ./resources/blocks/header/header.scss ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./resources/blocks/input/input.scss":
/*!*******************************************!*\
  !*** ./resources/blocks/input/input.scss ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./resources/blocks/main/main.scss":
/*!*****************************************!*\
  !*** ./resources/blocks/main/main.scss ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./resources/blocks/modal/modal.scss":
/*!*******************************************!*\
  !*** ./resources/blocks/modal/modal.scss ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./resources/blocks/pagination/pagination.scss":
/*!*****************************************************!*\
  !*** ./resources/blocks/pagination/pagination.scss ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./resources/blocks/project-cart/project-cart.scss":
/*!*********************************************************!*\
  !*** ./resources/blocks/project-cart/project-cart.scss ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./resources/blocks/projects/projects.scss":
/*!*************************************************!*\
  !*** ./resources/blocks/projects/projects.scss ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./resources/blocks/services/services.scss":
/*!*************************************************!*\
  !*** ./resources/blocks/services/services.scss ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./resources/blocks/social/social.scss":
/*!*********************************************!*\
  !*** ./resources/blocks/social/social.scss ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./resources/blocks/welcome/welcome.scss":
/*!***********************************************!*\
  !*** ./resources/blocks/welcome/welcome.scss ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	__webpack_require__("./resources/index.js");
/******/ 	__webpack_require__("./resources/blocks/header/header.js");
/******/ 	__webpack_require__("./resources/blocks/input/input.js");
/******/ 	__webpack_require__("./resources/blocks/modal/modal.js");
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	__webpack_require__("./resources/js-backend/backend.js");
/******/ 	__webpack_require__("./resources/blocks/about/about.scss");
/******/ 	__webpack_require__("./resources/blocks/banner-task/banner-task.scss");
/******/ 	__webpack_require__("./resources/blocks/base/main.scss");
/******/ 	__webpack_require__("./resources/blocks/base/media-queries.scss");
/******/ 	__webpack_require__("./resources/blocks/base/mixins.scss");
/******/ 	__webpack_require__("./resources/blocks/base/variables.scss");
/******/ 	__webpack_require__("./resources/blocks/breadcrumbs/breadcrumbs.scss");
/******/ 	__webpack_require__("./resources/blocks/contacts/contacts.scss");
/******/ 	__webpack_require__("./resources/blocks/footer/footer.scss");
/******/ 	__webpack_require__("./resources/blocks/header/header.scss");
/******/ 	__webpack_require__("./resources/blocks/input/input.scss");
/******/ 	__webpack_require__("./resources/blocks/main/main.scss");
/******/ 	__webpack_require__("./resources/blocks/modal/modal.scss");
/******/ 	__webpack_require__("./resources/blocks/pagination/pagination.scss");
/******/ 	__webpack_require__("./resources/blocks/project-cart/project-cart.scss");
/******/ 	__webpack_require__("./resources/blocks/projects/projects.scss");
/******/ 	__webpack_require__("./resources/blocks/services/services.scss");
/******/ 	__webpack_require__("./resources/blocks/social/social.scss");
/******/ 	var __webpack_exports__ = __webpack_require__("./resources/blocks/welcome/welcome.scss");
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map