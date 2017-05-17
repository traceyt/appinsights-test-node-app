exports.id = 0;
exports.modules = {

/***/ "./app/server.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_applicationinsights__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_applicationinsights___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_applicationinsights__);



var app = __WEBPACK_IMPORTED_MODULE_0_express___default()();

__WEBPACK_IMPORTED_MODULE_1_applicationinsights___default.a.setup("0dccd139-e558-41b0-838c-fd892a3b0b16");
__WEBPACK_IMPORTED_MODULE_1_applicationinsights___default.a.start();

app.get("/api", function (req, res) {
    res.send({ message: "I am a server route and can also be hot reloaded again!" });
});

app.get('/api/insightTest', function (req, res) {
    __WEBPACK_IMPORTED_MODULE_1_applicationinsights___default.a.client.trackRequest(req, res);
    res.send('insightTest response');
});

/* harmony default export */ __webpack_exports__["default"] = (app);

/***/ })

};