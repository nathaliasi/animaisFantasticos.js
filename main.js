/* eslint-disable no-unused-vars */
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => {
  // webpackBootstrap
  /******/ 'use strict';
  /******/ let __webpack_modules__ = {
    /***/ './js/modules/accordion.js':
      /*!*********************************!*\
  !*** ./js/modules/accordion.js ***!
  \*********************************/
      // eslint-disable-next-line no-unused-vars
      /***/ (
        // eslint-disable-next-line no-unused-vars
        __unused_webpack_module,
        // eslint-disable-next-line no-unused-vars
        __webpack_exports__,
        // eslint-disable-next-line no-unused-vars
        __webpack_require__,
      ) => {
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initAccordion)\n/* harmony export */ });\nfunction initAccordion() {\n  const accordionList = document.querySelectorAll('[data-anime=\"accordion\"] dt');\n  const activeClass = 'ativo';\n  \n  if(accordionList.length) {\n    accordionList[0].classList.add(activeClass);\n    accordionList[0].nextElementSibling.classList.add(activeClass);\n\n    function activeAccordion() {\n      this.classList.toggle(activeClass);\n      this.nextElementSibling.classList.toggle(activeClass);\n    }\n\n    accordionList.forEach((item) => {\n      item.addEventListener('click', activeAccordion);\n    });\n  }\n}\n\n//# sourceURL=webpack://animaisfantasticos/./js/modules/accordion.js?",
        );

        /***/
      },

    /***/ './js/modules/anima-numeros.js':
      /*!*************************************!*\
  !*** ./js/modules/anima-numeros.js ***!
  \*************************************/
      // eslint-disable-next-line no-unused-vars
      /***/ (
        // eslint-disable-next-line no-unused-vars
        __unused_webpack_module,
        // eslint-disable-next-line no-unused-vars
        __webpack_exports__,
        // eslint-disable-next-line no-unused-vars
        __webpack_require__,
      ) => {
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initAnimaNumeros)\n/* harmony export */ });\nfunction initAnimaNumeros() {\r\n  function animaNumeros() {\r\n    const numeros = document.querySelectorAll('[data-numero]');\r\n\r\n    numeros.forEach((numero) => {\r\n      const total = +numero.innerText;\r\n      const incremento = Math.floor(total / 100);\r\n      let start = 0;\r\n      const timer = setInterval(() => {\r\n        start = start + incremento;\r\n        numero.innerText = start;\r\n        if (start > total) {\r\n          numero.innerText = total;\r\n          clearInterval(timer);\r\n        }\r\n      }, 25 * Math.random());\r\n    });\r\n  }\r\n\r\n  function handleMutation(mutation) {\r\n    if (mutation[0].target.classList.contains('ativo')) {\r\n      observer.disconnect();\r\n      animaNumeros();\r\n    }\r\n  }\r\n  const observerTarget = document.querySelector('.numeros');\r\n  const observer = new MutationObserver(handleMutation);\r\n  observer.observe(observerTarget, { attributes: true });\r\n}\r\n\n\n//# sourceURL=webpack://animaisfantasticos/./js/modules/anima-numeros.js?",
        );

        /***/
      },

    /***/ './js/modules/dropdown-menu.js':
      /*!*************************************!*\
  !*** ./js/modules/dropdown-menu.js ***!
  \*************************************/
      // eslint-disable-next-line no-unused-vars
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initDropdownMenu)\n/* harmony export */ });\n/* harmony import */ var _outsideclick_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outsideclick.js */ \"./js/modules/outsideclick.js\");\n\n\nfunction initDropdownMenu() {\n  const dropdownMenus = document.querySelectorAll('[data-dropdown]');\n  dropdownMenus.forEach(menu => {\n    ['touchstart', 'click'].forEach(userEvent => {\n      menu.addEventListener(userEvent, handleClick);\n    });\n  });\n\n  function handleClick(event) {\n    event.preventDefault();\n    this.classList.add('active');\n    (0,_outsideclick_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, ['touchstart', 'click'], () => {\n      this.classList.remove('active');\n    });\n  };\n}\n\n//# sourceURL=webpack://animaisfantasticos/./js/modules/dropdown-menu.js?",
        );

        /***/
      },

    /***/ './js/modules/menu-mobile.js':
      /*!***********************************!*\
  !*** ./js/modules/menu-mobile.js ***!
  \***********************************/
      // eslint-disable-next-line no-unused-vars
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initMenuMobile)\n/* harmony export */ });\n/* harmony import */ var _outsideclick_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outsideclick.js */ \"./js/modules/outsideclick.js\");\n\n\nfunction initMenuMobile() {\n  const menuButton = document.querySelector('[data-menu=\"button\"]');\n  const menuList = document.querySelector('[data-menu=\"list\"]');\n  const eventos = ['click', 'touchstart'];\n\n  if (menuButton) {\n    function openMenu(event) {\n      menuList.classList.add('active');\n      menuButton.classList.add('active');\n      (0,_outsideclick_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(menuList, eventos, () => {\n        menuList.classList.remove('active');\n        menuButton.classList.remove('active');\n      });\n    }\n    eventos.forEach((evento) => menuButton.addEventListener(evento, openMenu));\n  }\n}\n\n\n//# sourceURL=webpack://animaisfantasticos/./js/modules/menu-mobile.js?",
        );

        /***/
      },

    /***/ './js/modules/modal.js':
      /*!*****************************!*\
  !*** ./js/modules/modal.js ***!
  \*****************************/
      // eslint-disable-next-line no-unused-vars
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initModal)\n/* harmony export */ });\nfunction initModal() {\n  const botaoAbrir = document.querySelector('[data-modal=\"abrir\"]');\n  const botaoFechar = document.querySelector('[data-modal=\"fechar\"]');\n  const containerModal = document.querySelector('[data-modal=\"container\"]');\n  \n  if(botaoAbrir && botaoFechar && containerModal) {\n    \n    function toggleModal(event) {\n      event.preventDefault();\n      containerModal.classList.toggle('ativo');\n    }\n    function cliqueForaModal(event) {\n      if(event.target === this) {\n        toggleModal(event);\n      }\n    }\n  \n    botaoAbrir.addEventListener('click', toggleModal);\n    botaoFechar.addEventListener('click', toggleModal);\n    containerModal.addEventListener('click', cliqueForaModal);\n  }\n}\n\n\n\n//# sourceURL=webpack://animaisfantasticos/./js/modules/modal.js?",
        );

        /***/
      },

    /***/ './js/modules/outsideclick.js':
      /*!************************************!*\
  !*** ./js/modules/outsideclick.js ***!
  \************************************/
      // eslint-disable-next-line no-unused-vars
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ outsideClick)\n/* harmony export */ });\nfunction outsideClick(element, events, callback) {\n  const html = document.documentElement;\n  const outside = 'data-outside';\n\n  if (!element.hasAttribute(outside)) {\n    events.forEach((userEvent) => {\n      setTimeout(() => html.addEventListener(userEvent, handleOutsideClick));\n    });\n    element.setAttribute(outside, '');\n  }\n  function handleOutsideClick(event) {\n    if (!element.contains(event.target)) {\n      element.removeAttribute(outside);\n      events.forEach((userEvent) => {\n        html.removeEventListener(userEvent, handleOutsideClick);\n      });\n      callback();\n    }\n  }\n}\n\n\n//# sourceURL=webpack://animaisfantasticos/./js/modules/outsideclick.js?",
        );

        /***/
      },

    /***/ './js/modules/scroll-animacao.js':
      /*!***************************************!*\
  !*** ./js/modules/scroll-animacao.js ***!
  \***************************************/
      // eslint-disable-next-line no-unused-vars
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initAnimacaoScroll)\n/* harmony export */ });\nfunction initAnimacaoScroll() {\n  const sections = document.querySelectorAll('[data-anime=\"scroll\"]');\n  if (sections.length) {\n    const windowMetade = window.innerHeight * 0.6;\n\n    function animaScroll() {\n      sections.forEach((section) => {\n        const sectionTop = section.getBoundingClientRect().top;\n        const isSectionVisible = sectionTop - windowMetade < 0;\n        if (isSectionVisible) section.classList.add('ativo');\n        else if (section.classList.contains('ativo')) {\n          section.classList.remove('ativo');\n        }\n      });\n    }\n\n    animaScroll();\n\n    window.addEventListener('scroll', animaScroll);\n  }\n}\n\n\n//# sourceURL=webpack://animaisfantasticos/./js/modules/scroll-animacao.js?",
        );

        /***/
      },

    /***/ './js/modules/scroll-suave.js':
      /*!************************************!*\
  !*** ./js/modules/scroll-suave.js ***!
  \************************************/
      // eslint-disable-next-line no-unused-vars
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initScrollSuave)\n/* harmony export */ });\nfunction initScrollSuave() {\n  const linksInternos = document.querySelectorAll('[data-menu=\"suave\"] a[href^=\"#\"]');\n\n  function scrollToSection(event) {\n    event.preventDefault();\n    const href = event.currentTarget.getAttribute('href');\n    const section = document.querySelector(href);\n    section.scrollIntoView({\n      behavior: 'smooth',\n      block: 'start',\n    });\n\n    // forma alternativa\n    // const topo = section.offsetTop;\n    // window.scrollTo({\n    //   top: topo,\n    //   behavior: 'smooth',\n    // });\n  }\n\n  linksInternos.forEach((link) => {\n    link.addEventListener('click', scrollToSection);\n  });\n}\n\n//# sourceURL=webpack://animaisfantasticos/./js/modules/scroll-suave.js?",
        );

        /***/
      },

    /***/ './js/modules/tabnav.js':
      /*!******************************!*\
  !*** ./js/modules/tabnav.js ***!
  \******************************/
      // eslint-disable-next-line no-unused-vars
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initTabNav)\n/* harmony export */ });\nfunction initTabNav() {\n  const tabMenu = document.querySelectorAll('[data-tab=\"menu\"] li');\n  const tabContent = document.querySelectorAll('[data-tab=\"content\"] section');\n\n  if(tabMenu.length && tabContent.length) {\n    tabContent[0].classList.add('ativo');\n\n    function activeTab(index) {\n      tabContent.forEach((section) => {\n        section.classList.remove('ativo');\n      });\n      const direcao = tabContent[index].dataset.anime;\n      tabContent[index].classList.add('ativo', direcao);\n    }\n\n    tabMenu.forEach((itemMenu, index) => {\n      itemMenu.addEventListener('click', () => {\n        activeTab(index);\n      });\n    });\n  }\n}\n\n//# sourceURL=webpack://animaisfantasticos/./js/modules/tabnav.js?",
        );

        /***/
      },

    /***/ './js/modules/tooltip.js':
      /*!*******************************!*\
  !*** ./js/modules/tooltip.js ***!
  \*******************************/
      // eslint-disable-next-line no-unused-vars
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initTooltip)\n/* harmony export */ });\nfunction initTooltip() {\n  const tooltips = document.querySelectorAll('[data-tooltip]');\n\n  tooltips.forEach((item) => {\n    item.addEventListener('mouseover', onMouseOver);\n  })\n  \n  function onMouseOver(event) {\n    const tooltipBox = criarTooltipBox(this);\n    \n    onMouseMove.tooltipBox = tooltipBox;\n    this.addEventListener('mousemove', onMouseMove);\n  \n    onMouseLeave.tooltipBox = tooltipBox;\n    onMouseLeave.element = this;\n    this.addEventListener('mouseleave', onMouseLeave);\n  }\n  \n  const onMouseLeave = {\n    handleEvent() {\n      this.tooltipBox.remove();\n      this.element.removeEventListener('mouseleave', onMouseLeave);\n      this.element.removeEventListener('mousemove', onMouseMove);\n    }\n  }\n  \n  const onMouseMove = {\n    handleEvent(event) {\n      this.tooltipBox.style.top = event.pageY + 20 + 'px';\n      this.tooltipBox.style.left = event.pageX + 20 + 'px';\n    }\n  }\n  \n  function criarTooltipBox(element) {\n    const tooltipBox = document.createElement('div');\n    const text = element.getAttribute('aria-label');\n    tooltipBox.classList.add('tooltip');\n    tooltipBox.innerText = text;\n    document.body.appendChild(tooltipBox);\n    return tooltipBox;\n  }\n}\n\n\n\n//# sourceURL=webpack://animaisfantasticos/./js/modules/tooltip.js?",
        );

        /***/
      },

    /***/ './js/script.js':
      /*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
      // eslint-disable-next-line no-unused-vars
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_scroll_suave_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/scroll-suave.js */ "./js/modules/scroll-suave.js");\n/* harmony import */ var _modules_scroll_animacao_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/scroll-animacao.js */ "./js/modules/scroll-animacao.js");\n/* harmony import */ var _modules_accordion_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/accordion.js */ "./js/modules/accordion.js");\n/* harmony import */ var _modules_tabnav_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/tabnav.js */ "./js/modules/tabnav.js");\n/* harmony import */ var _modules_modal_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/modal.js */ "./js/modules/modal.js");\n/* harmony import */ var _modules_tooltip_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/tooltip.js */ "./js/modules/tooltip.js");\n/* harmony import */ var _modules_dropdown_menu_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/dropdown-menu.js */ "./js/modules/dropdown-menu.js");\n/* harmony import */ var _modules_menu_mobile_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/menu-mobile.js */ "./js/modules/menu-mobile.js");\n/* harmony import */ var _modules_anima_numeros_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/anima-numeros.js */ "./js/modules/anima-numeros.js");\n\n\n\n\n\n\n\n\n\n\n(0,_modules_scroll_suave_js__WEBPACK_IMPORTED_MODULE_0__["default"])();\n(0,_modules_scroll_animacao_js__WEBPACK_IMPORTED_MODULE_1__["default"])();\n(0,_modules_accordion_js__WEBPACK_IMPORTED_MODULE_2__["default"])();\n(0,_modules_tabnav_js__WEBPACK_IMPORTED_MODULE_3__["default"])();\n(0,_modules_modal_js__WEBPACK_IMPORTED_MODULE_4__["default"])();\n(0,_modules_tooltip_js__WEBPACK_IMPORTED_MODULE_5__["default"])();\n(0,_modules_dropdown_menu_js__WEBPACK_IMPORTED_MODULE_6__["default"])();\n(0,_modules_menu_mobile_js__WEBPACK_IMPORTED_MODULE_7__["default"])();\n(0,_modules_anima_numeros_js__WEBPACK_IMPORTED_MODULE_8__["default"])();\n\n\n//# sourceURL=webpack://animaisfantasticos/./js/script.js?',
        );

        /***/
      },

    /******/
  };
  /************************************************************************/
  /******/ // The module cache
  /******/ let __webpack_module_cache__ = {};
  /******/
  /******/ // The require function
  /******/ function __webpack_require__(moduleId) {
    /******/ // Check if module is in cache
    /******/ let cachedModule = __webpack_module_cache__[moduleId];
    /******/ if (cachedModule !== undefined) {
      /******/ return cachedModule.exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/ let module = (__webpack_module_cache__[moduleId] = {
      /******/ // no module.id needed
      /******/ // no module.loaded needed
      /******/ exports: {},
      /******/
    });
    /******/
    /******/ // Execute the module function
    /******/ __webpack_modules__[moduleId](
      module,
      module.exports,
      __webpack_require__,
    );
    /******/
    /******/ // Return the exports of the module
    /******/ return module.exports;
    /******/
  }
  /******/
  /************************************************************************/
  /******/ /* webpack/runtime/define property getters */
  /******/ (() => {
    /******/ // define getter functions for harmony exports
    /******/ __webpack_require__.d = (exports, definition) => {
      /******/ for (let key in definition) {
        /******/ if (
          __webpack_require__.o(definition, key) &&
          !__webpack_require__.o(exports, key)
        ) {
          /******/ Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key],
          });
          /******/
        }
        /******/
      }
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/hasOwnProperty shorthand */
  /******/ (() => {
    /******/ __webpack_require__.o = (obj, prop) =>
      Object.prototype.hasOwnProperty.call(obj, prop);
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/make namespace object */
  /******/ (() => {
    /******/ // define __esModule on exports
    /******/ __webpack_require__.r = (exports) => {
      /******/ if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
        /******/ Object.defineProperty(exports, Symbol.toStringTag, {
          value: 'Module',
        });
        /******/
      }
      /******/ Object.defineProperty(exports, '__esModule', { value: true });
      /******/
    };
    /******/
  })();
  /******/
  /******/
})();
