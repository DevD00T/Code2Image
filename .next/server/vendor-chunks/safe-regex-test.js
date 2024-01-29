"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/safe-regex-test";
exports.ids = ["vendor-chunks/safe-regex-test"];
exports.modules = {

/***/ "(ssr)/./node_modules/safe-regex-test/index.js":
/*!***********************************************!*\
  !*** ./node_modules/safe-regex-test/index.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar callBound = __webpack_require__(/*! call-bind/callBound */ \"(ssr)/./node_modules/call-bind/callBound.js\");\nvar GetIntrinsic = __webpack_require__(/*! get-intrinsic */ \"(ssr)/./node_modules/get-intrinsic/index.js\");\nvar isRegex = __webpack_require__(/*! is-regex */ \"(ssr)/./node_modules/is-regex/index.js\");\nvar $exec = callBound(\"RegExp.prototype.exec\");\nvar $TypeError = GetIntrinsic(\"%TypeError%\");\nmodule.exports = function regexTester(regex) {\n    if (!isRegex(regex)) {\n        throw new $TypeError(\"`regex` must be a RegExp\");\n    }\n    return function test(s) {\n        return $exec(regex, s) !== null;\n    };\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvc2FmZS1yZWdleC10ZXN0L2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBRUEsSUFBSUEsWUFBWUMsbUJBQU9BLENBQUM7QUFDeEIsSUFBSUMsZUFBZUQsbUJBQU9BLENBQUM7QUFDM0IsSUFBSUUsVUFBVUYsbUJBQU9BLENBQUM7QUFFdEIsSUFBSUcsUUFBUUosVUFBVTtBQUN0QixJQUFJSyxhQUFhSCxhQUFhO0FBRTlCSSxPQUFPQyxPQUFPLEdBQUcsU0FBU0MsWUFBWUMsS0FBSztJQUMxQyxJQUFJLENBQUNOLFFBQVFNLFFBQVE7UUFDcEIsTUFBTSxJQUFJSixXQUFXO0lBQ3RCO0lBQ0EsT0FBTyxTQUFTSyxLQUFLQyxDQUFDO1FBQ3JCLE9BQU9QLE1BQU1LLE9BQU9FLE9BQU87SUFDNUI7QUFDRCIsInNvdXJjZXMiOlsid2VicGFjazovL2NvZGUtdG8taW1nLy4vbm9kZV9tb2R1bGVzL3NhZmUtcmVnZXgtdGVzdC9pbmRleC5qcz9mM2ZlIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIGNhbGxCb3VuZCA9IHJlcXVpcmUoJ2NhbGwtYmluZC9jYWxsQm91bmQnKTtcbnZhciBHZXRJbnRyaW5zaWMgPSByZXF1aXJlKCdnZXQtaW50cmluc2ljJyk7XG52YXIgaXNSZWdleCA9IHJlcXVpcmUoJ2lzLXJlZ2V4Jyk7XG5cbnZhciAkZXhlYyA9IGNhbGxCb3VuZCgnUmVnRXhwLnByb3RvdHlwZS5leGVjJyk7XG52YXIgJFR5cGVFcnJvciA9IEdldEludHJpbnNpYygnJVR5cGVFcnJvciUnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiByZWdleFRlc3RlcihyZWdleCkge1xuXHRpZiAoIWlzUmVnZXgocmVnZXgpKSB7XG5cdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ2ByZWdleGAgbXVzdCBiZSBhIFJlZ0V4cCcpO1xuXHR9XG5cdHJldHVybiBmdW5jdGlvbiB0ZXN0KHMpIHtcblx0XHRyZXR1cm4gJGV4ZWMocmVnZXgsIHMpICE9PSBudWxsO1xuXHR9O1xufTtcbiJdLCJuYW1lcyI6WyJjYWxsQm91bmQiLCJyZXF1aXJlIiwiR2V0SW50cmluc2ljIiwiaXNSZWdleCIsIiRleGVjIiwiJFR5cGVFcnJvciIsIm1vZHVsZSIsImV4cG9ydHMiLCJyZWdleFRlc3RlciIsInJlZ2V4IiwidGVzdCIsInMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/safe-regex-test/index.js\n");

/***/ })

};
;