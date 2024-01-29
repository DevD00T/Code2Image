"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/is-date-object";
exports.ids = ["vendor-chunks/is-date-object"];
exports.modules = {

/***/ "(ssr)/./node_modules/is-date-object/index.js":
/*!**********************************************!*\
  !*** ./node_modules/is-date-object/index.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar getDay = Date.prototype.getDay;\nvar tryDateObject = function tryDateGetDayCall(value) {\n    try {\n        getDay.call(value);\n        return true;\n    } catch (e) {\n        return false;\n    }\n};\nvar toStr = Object.prototype.toString;\nvar dateClass = \"[object Date]\";\nvar hasToStringTag = __webpack_require__(/*! has-tostringtag/shams */ \"(ssr)/./node_modules/has-tostringtag/shams.js\")();\nmodule.exports = function isDateObject(value) {\n    if (typeof value !== \"object\" || value === null) {\n        return false;\n    }\n    return hasToStringTag ? tryDateObject(value) : toStr.call(value) === dateClass;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvaXMtZGF0ZS1vYmplY3QvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFFQSxJQUFJQSxTQUFTQyxLQUFLQyxTQUFTLENBQUNGLE1BQU07QUFDbEMsSUFBSUcsZ0JBQWdCLFNBQVNDLGtCQUFrQkMsS0FBSztJQUNuRCxJQUFJO1FBQ0hMLE9BQU9NLElBQUksQ0FBQ0Q7UUFDWixPQUFPO0lBQ1IsRUFBRSxPQUFPRSxHQUFHO1FBQ1gsT0FBTztJQUNSO0FBQ0Q7QUFFQSxJQUFJQyxRQUFRQyxPQUFPUCxTQUFTLENBQUNRLFFBQVE7QUFDckMsSUFBSUMsWUFBWTtBQUNoQixJQUFJQyxpQkFBaUJDLG1CQUFPQSxDQUFDO0FBRTdCQyxPQUFPQyxPQUFPLEdBQUcsU0FBU0MsYUFBYVgsS0FBSztJQUMzQyxJQUFJLE9BQU9BLFVBQVUsWUFBWUEsVUFBVSxNQUFNO1FBQ2hELE9BQU87SUFDUjtJQUNBLE9BQU9PLGlCQUFpQlQsY0FBY0UsU0FBU0csTUFBTUYsSUFBSSxDQUFDRCxXQUFXTTtBQUN0RSIsInNvdXJjZXMiOlsid2VicGFjazovL2NvZGUtdG8taW1nLy4vbm9kZV9tb2R1bGVzL2lzLWRhdGUtb2JqZWN0L2luZGV4LmpzPzM4OWMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZ2V0RGF5ID0gRGF0ZS5wcm90b3R5cGUuZ2V0RGF5O1xudmFyIHRyeURhdGVPYmplY3QgPSBmdW5jdGlvbiB0cnlEYXRlR2V0RGF5Q2FsbCh2YWx1ZSkge1xuXHR0cnkge1xuXHRcdGdldERheS5jYWxsKHZhbHVlKTtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxufTtcblxudmFyIHRvU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcbnZhciBkYXRlQ2xhc3MgPSAnW29iamVjdCBEYXRlXSc7XG52YXIgaGFzVG9TdHJpbmdUYWcgPSByZXF1aXJlKCdoYXMtdG9zdHJpbmd0YWcvc2hhbXMnKSgpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzRGF0ZU9iamVjdCh2YWx1ZSkge1xuXHRpZiAodHlwZW9mIHZhbHVlICE9PSAnb2JqZWN0JyB8fCB2YWx1ZSA9PT0gbnVsbCkge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXHRyZXR1cm4gaGFzVG9TdHJpbmdUYWcgPyB0cnlEYXRlT2JqZWN0KHZhbHVlKSA6IHRvU3RyLmNhbGwodmFsdWUpID09PSBkYXRlQ2xhc3M7XG59O1xuIl0sIm5hbWVzIjpbImdldERheSIsIkRhdGUiLCJwcm90b3R5cGUiLCJ0cnlEYXRlT2JqZWN0IiwidHJ5RGF0ZUdldERheUNhbGwiLCJ2YWx1ZSIsImNhbGwiLCJlIiwidG9TdHIiLCJPYmplY3QiLCJ0b1N0cmluZyIsImRhdGVDbGFzcyIsImhhc1RvU3RyaW5nVGFnIiwicmVxdWlyZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJpc0RhdGVPYmplY3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/is-date-object/index.js\n");

/***/ })

};
;