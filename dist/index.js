/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(global, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/next-auth/providers/credentials.js":
/*!*********************************************************!*\
  !*** ./node_modules/next-auth/providers/credentials.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("{\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports[\"default\"] = Credentials;\nfunction Credentials(options) {\n  return {\n    id: \"credentials\",\n    name: \"Credentials\",\n    type: \"credentials\",\n    credentials: {},\n    authorize: () => null,\n    options\n  };\n}\n\n//# sourceURL=webpack://@iteais/js-sdk/./node_modules/next-auth/providers/credentials.js?\n}");

/***/ }),

/***/ "./src/auth/option.ts":
/*!****************************!*\
  !*** ./src/auth/option.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authOptions: () => (/* binding */ authOptions)\n/* harmony export */ });\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/providers/credentials */ \"./node_modules/next-auth/providers/credentials.js\");\n/* harmony import */ var node_process__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! node:process */ \"node:process\");\n/* harmony import */ var node_process__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(node_process__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_retry_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/retry-fetch */ \"./src/utils/retry-fetch.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\n\n\n\nconst authOptions = {\n    callbacks: {\n        jwt(_a) {\n            return __awaiter(this, arguments, void 0, function* ({ user, token }) {\n                if (user) {\n                    return Object.assign(Object.assign({}, token), { user: Object.assign({}, user) });\n                }\n                return token;\n            });\n        },\n        session(_a) {\n            return __awaiter(this, arguments, void 0, function* ({ session, token }) {\n                return Object.assign(Object.assign({}, session), { user: token.user });\n            });\n        },\n    },\n    providers: [\n        (0,next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n            credentials: {\n                username: { type: 'string' },\n                password: { type: 'password' },\n            },\n            authorize(credentials) {\n                return __awaiter(this, void 0, void 0, function* () {\n                    if (!credentials) {\n                        return null;\n                    }\n                    const r = yield (0,_utils_retry_fetch__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(`${node_process__WEBPACK_IMPORTED_MODULE_1__.env.USER_SERVER}/auth/login`, {\n                        method: 'POST',\n                        body: JSON.stringify({ login: credentials.username, password: credentials.password }),\n                    });\n                    const body = yield r.json();\n                    // const { username, password } = credentials\n                    //\n                    // // Replace with real authentication here\n                    // const ok = username === 'Username' && password === 'Password'\n                    //\n                    if (!r.ok) {\n                        throw new Error(\"dict.login.message.auth_failed\");\n                    }\n                    return body;\n                    // throw new Error('Some error')\n                    //\n                    // return {\n                    //   id: 1,\n                    //   name: 'Name',\n                    //   username: 'Username',\n                    //   email: 'user@email.com',\n                    //   avatar: '/assets/img/avatars/8.jpg',\n                    // }\n                });\n            },\n        }),\n    ],\n};\n\n\n//# sourceURL=webpack://@iteais/js-sdk/./src/auth/option.ts?\n}");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authOptions: () => (/* reexport safe */ _auth_option__WEBPACK_IMPORTED_MODULE_0__.authOptions)\n/* harmony export */ });\n/* harmony import */ var _auth_option__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth/option */ \"./src/auth/option.ts\");\n// import retryFetch from \"./utils/retry-fetch\";\n// import serverFetch from \"./utils/server-fetch\";\n\n\n\n\n//# sourceURL=webpack://@iteais/js-sdk/./src/index.ts?\n}");

/***/ }),

/***/ "./src/utils/retry-fetch.ts":
/*!**********************************!*\
  !*** ./src/utils/retry-fetch.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ retryFetch)\n/* harmony export */ });\n/* harmony import */ var node_crypto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! node:crypto */ \"node:crypto\");\n/* harmony import */ var node_crypto__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(node_crypto__WEBPACK_IMPORTED_MODULE_0__);\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\n// import 'server-only'\n\nclass RetryableError extends Error {\n}\nfunction hashSHA256(data) {\n    return (0,node_crypto__WEBPACK_IMPORTED_MODULE_0__.createHash)('sha256').update(data).digest('hex'); // Converts the hash to a hexadecimal string\n}\n/**\n * Fetch wrapper for server side use only.\n * Implemented retries and timeout.\n *\n * @param args\n */\nfunction retryFetch(...args) {\n    return __awaiter(this, void 0, void 0, function* () {\n        var _a;\n        let retryCount = 0;\n        const maxRetries = 3;\n        const timeout = 30000; // 30 seconds\n        let success = false;\n        while (retryCount < maxRetries && !success) {\n            try {\n                const key = 'abc45678';\n                const secret = 'cba4567891234567';\n                const time = new Date().getTime();\n                const sign = hashSHA256(key + time + secret);\n                // eslint-disable-next-line no-await-in-loop\n                const response = yield fetch(args[0], Object.assign(Object.assign({}, args[1]), { signal: AbortSignal.timeout(timeout), headers: Object.assign(Object.assign({}, (_a = args[1]) === null || _a === void 0 ? void 0 : _a.headers), { 'Api-Key': key, 'Api-Sign': sign, 'Api-Time': time.toString() }) }));\n                if (!response.ok) {\n                    const statusCode = response.status;\n                    // Retry only on specific HTTP status codes indicating network issues\n                    if ((statusCode >= 500 && statusCode <= 599) // Server errors\n                        || statusCode === 408 // Request timeout\n                        || statusCode === 429 // Too many requests\n                        || statusCode === 0 // Network error or CORS policy blocking\n                    ) {\n                        retryCount += 1;\n                        throw new RetryableError(`Network-related error occurred (Status: ${statusCode}).`);\n                    }\n                    throw new Error(`HTTP error! Status: ${statusCode}`);\n                }\n                success = true;\n                return response;\n            }\n            catch (error) {\n                if (error instanceof RetryableError) {\n                    // eslint-disable-next-line no-continue\n                    continue;\n                }\n                if (error.name === 'TimeoutError') {\n                    throw new Error('Fetch request timeout error.');\n                }\n                throw error;\n            }\n        }\n        throw new Error('Maximum number of retries reached without success.');\n    });\n}\n\n\n//# sourceURL=webpack://@iteais/js-sdk/./src/utils/retry-fetch.ts?\n}");

/***/ }),

/***/ "node:crypto":
/*!******************************!*\
  !*** external "node:crypto" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("node:crypto");

/***/ }),

/***/ "node:process":
/*!*******************************!*\
  !*** external "node:process" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("node:process");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});