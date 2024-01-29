"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/is-symbol";
exports.ids = ["vendor-chunks/is-symbol"];
exports.modules = {

/***/ "(ssr)/./node_modules/is-symbol/index.js":
/*!*****************************************!*\
  !*** ./node_modules/is-symbol/index.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar toStr = Object.prototype.toString;\nvar hasSymbols = __webpack_require__(/*! has-symbols */ \"(ssr)/./node_modules/has-symbols/index.js\")();\nif (hasSymbols) {\n    var symToStr = Symbol.prototype.toString;\n    var symStringRegex = /^Symbol\\(.*\\)$/;\n    var isSymbolObject = function isRealSymbolObject(value) {\n        if (typeof value.valueOf() !== \"symbol\") {\n            return false;\n        }\n        return symStringRegex.test(symToStr.call(value));\n    };\n    module.exports = function isSymbol(value) {\n        if (typeof value === \"symbol\") {\n            return true;\n        }\n        if (toStr.call(value) !== \"[object Symbol]\") {\n            return false;\n        }\n        try {\n            return isSymbolObject(value);\n        } catch (e) {\n            return false;\n        }\n    };\n} else {\n    module.exports = function isSymbol(value) {\n        // this environment does not support Symbols.\n        return  false && 0;\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvaXMtc3ltYm9sL2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBRUEsSUFBSUEsUUFBUUMsT0FBT0MsU0FBUyxDQUFDQyxRQUFRO0FBQ3JDLElBQUlDLGFBQWFDLG1CQUFPQSxDQUFDO0FBRXpCLElBQUlELFlBQVk7SUFDZixJQUFJRSxXQUFXQyxPQUFPTCxTQUFTLENBQUNDLFFBQVE7SUFDeEMsSUFBSUssaUJBQWlCO0lBQ3JCLElBQUlDLGlCQUFpQixTQUFTQyxtQkFBbUJDLEtBQUs7UUFDckQsSUFBSSxPQUFPQSxNQUFNQyxPQUFPLE9BQU8sVUFBVTtZQUN4QyxPQUFPO1FBQ1I7UUFDQSxPQUFPSixlQUFlSyxJQUFJLENBQUNQLFNBQVNRLElBQUksQ0FBQ0g7SUFDMUM7SUFFQUksT0FBT0MsT0FBTyxHQUFHLFNBQVNDLFNBQVNOLEtBQUs7UUFDdkMsSUFBSSxPQUFPQSxVQUFVLFVBQVU7WUFDOUIsT0FBTztRQUNSO1FBQ0EsSUFBSVgsTUFBTWMsSUFBSSxDQUFDSCxXQUFXLG1CQUFtQjtZQUM1QyxPQUFPO1FBQ1I7UUFDQSxJQUFJO1lBQ0gsT0FBT0YsZUFBZUU7UUFDdkIsRUFBRSxPQUFPTyxHQUFHO1lBQ1gsT0FBTztRQUNSO0lBQ0Q7QUFDRCxPQUFPO0lBRU5ILE9BQU9DLE9BQU8sR0FBRyxTQUFTQyxTQUFTTixLQUFLO1FBQ3ZDLDZDQUE2QztRQUM3QyxPQUFPLE1BQUssSUFBSUEsQ0FBS0E7SUFDdEI7QUFDRCIsInNvdXJjZXMiOlsid2VicGFjazovL2NvZGUtdG8taW1nLy4vbm9kZV9tb2R1bGVzL2lzLXN5bWJvbC9pbmRleC5qcz8zNmM2Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIHRvU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcbnZhciBoYXNTeW1ib2xzID0gcmVxdWlyZSgnaGFzLXN5bWJvbHMnKSgpO1xuXG5pZiAoaGFzU3ltYm9scykge1xuXHR2YXIgc3ltVG9TdHIgPSBTeW1ib2wucHJvdG90eXBlLnRvU3RyaW5nO1xuXHR2YXIgc3ltU3RyaW5nUmVnZXggPSAvXlN5bWJvbFxcKC4qXFwpJC87XG5cdHZhciBpc1N5bWJvbE9iamVjdCA9IGZ1bmN0aW9uIGlzUmVhbFN5bWJvbE9iamVjdCh2YWx1ZSkge1xuXHRcdGlmICh0eXBlb2YgdmFsdWUudmFsdWVPZigpICE9PSAnc3ltYm9sJykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHRyZXR1cm4gc3ltU3RyaW5nUmVnZXgudGVzdChzeW1Ub1N0ci5jYWxsKHZhbHVlKSk7XG5cdH07XG5cblx0bW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc1N5bWJvbCh2YWx1ZSkge1xuXHRcdGlmICh0eXBlb2YgdmFsdWUgPT09ICdzeW1ib2wnKSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cdFx0aWYgKHRvU3RyLmNhbGwodmFsdWUpICE9PSAnW29iamVjdCBTeW1ib2xdJykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHR0cnkge1xuXHRcdFx0cmV0dXJuIGlzU3ltYm9sT2JqZWN0KHZhbHVlKTtcblx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHR9O1xufSBlbHNlIHtcblxuXHRtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzU3ltYm9sKHZhbHVlKSB7XG5cdFx0Ly8gdGhpcyBlbnZpcm9ubWVudCBkb2VzIG5vdCBzdXBwb3J0IFN5bWJvbHMuXG5cdFx0cmV0dXJuIGZhbHNlICYmIHZhbHVlO1xuXHR9O1xufVxuIl0sIm5hbWVzIjpbInRvU3RyIiwiT2JqZWN0IiwicHJvdG90eXBlIiwidG9TdHJpbmciLCJoYXNTeW1ib2xzIiwicmVxdWlyZSIsInN5bVRvU3RyIiwiU3ltYm9sIiwic3ltU3RyaW5nUmVnZXgiLCJpc1N5bWJvbE9iamVjdCIsImlzUmVhbFN5bWJvbE9iamVjdCIsInZhbHVlIiwidmFsdWVPZiIsInRlc3QiLCJjYWxsIiwibW9kdWxlIiwiZXhwb3J0cyIsImlzU3ltYm9sIiwiZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/is-symbol/index.js\n");

/***/ })

};
;