"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/set-function-length";
exports.ids = ["vendor-chunks/set-function-length"];
exports.modules = {

/***/ "(ssr)/./node_modules/set-function-length/index.js":
/*!***************************************************!*\
  !*** ./node_modules/set-function-length/index.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar GetIntrinsic = __webpack_require__(/*! get-intrinsic */ \"(ssr)/./node_modules/get-intrinsic/index.js\");\nvar define = __webpack_require__(/*! define-data-property */ \"(ssr)/./node_modules/define-data-property/index.js\");\nvar hasDescriptors = __webpack_require__(/*! has-property-descriptors */ \"(ssr)/./node_modules/has-property-descriptors/index.js\")();\nvar gOPD = __webpack_require__(/*! gopd */ \"(ssr)/./node_modules/gopd/index.js\");\nvar $TypeError = GetIntrinsic(\"%TypeError%\");\nvar $floor = GetIntrinsic(\"%Math.floor%\");\nmodule.exports = function setFunctionLength(fn, length) {\n    if (typeof fn !== \"function\") {\n        throw new $TypeError(\"`fn` is not a function\");\n    }\n    if (typeof length !== \"number\" || length < 0 || length > 0xFFFFFFFF || $floor(length) !== length) {\n        throw new $TypeError(\"`length` must be a positive 32-bit integer\");\n    }\n    var loose = arguments.length > 2 && !!arguments[2];\n    var functionLengthIsConfigurable = true;\n    var functionLengthIsWritable = true;\n    if (\"length\" in fn && gOPD) {\n        var desc = gOPD(fn, \"length\");\n        if (desc && !desc.configurable) {\n            functionLengthIsConfigurable = false;\n        }\n        if (desc && !desc.writable) {\n            functionLengthIsWritable = false;\n        }\n    }\n    if (functionLengthIsConfigurable || functionLengthIsWritable || !loose) {\n        if (hasDescriptors) {\n            define(fn, \"length\", length, true, true);\n        } else {\n            define(fn, \"length\", length);\n        }\n    }\n    return fn;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvc2V0LWZ1bmN0aW9uLWxlbmd0aC9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUVBLElBQUlBLGVBQWVDLG1CQUFPQSxDQUFDO0FBQzNCLElBQUlDLFNBQVNELG1CQUFPQSxDQUFDO0FBQ3JCLElBQUlFLGlCQUFpQkYsbUJBQU9BLENBQUM7QUFDN0IsSUFBSUcsT0FBT0gsbUJBQU9BLENBQUM7QUFFbkIsSUFBSUksYUFBYUwsYUFBYTtBQUM5QixJQUFJTSxTQUFTTixhQUFhO0FBRTFCTyxPQUFPQyxPQUFPLEdBQUcsU0FBU0Msa0JBQWtCQyxFQUFFLEVBQUVDLE1BQU07SUFDckQsSUFBSSxPQUFPRCxPQUFPLFlBQVk7UUFDN0IsTUFBTSxJQUFJTCxXQUFXO0lBQ3RCO0lBQ0EsSUFBSSxPQUFPTSxXQUFXLFlBQVlBLFNBQVMsS0FBS0EsU0FBUyxjQUFjTCxPQUFPSyxZQUFZQSxRQUFRO1FBQ2pHLE1BQU0sSUFBSU4sV0FBVztJQUN0QjtJQUVBLElBQUlPLFFBQVFDLFVBQVVGLE1BQU0sR0FBRyxLQUFLLENBQUMsQ0FBQ0UsU0FBUyxDQUFDLEVBQUU7SUFFbEQsSUFBSUMsK0JBQStCO0lBQ25DLElBQUlDLDJCQUEyQjtJQUMvQixJQUFJLFlBQVlMLE1BQU1OLE1BQU07UUFDM0IsSUFBSVksT0FBT1osS0FBS00sSUFBSTtRQUNwQixJQUFJTSxRQUFRLENBQUNBLEtBQUtDLFlBQVksRUFBRTtZQUMvQkgsK0JBQStCO1FBQ2hDO1FBQ0EsSUFBSUUsUUFBUSxDQUFDQSxLQUFLRSxRQUFRLEVBQUU7WUFDM0JILDJCQUEyQjtRQUM1QjtJQUNEO0lBRUEsSUFBSUQsZ0NBQWdDQyw0QkFBNEIsQ0FBQ0gsT0FBTztRQUN2RSxJQUFJVCxnQkFBZ0I7WUFDbkJELE9BQU9RLElBQUksVUFBVUMsUUFBUSxNQUFNO1FBQ3BDLE9BQU87WUFDTlQsT0FBT1EsSUFBSSxVQUFVQztRQUN0QjtJQUNEO0lBQ0EsT0FBT0Q7QUFDUiIsInNvdXJjZXMiOlsid2VicGFjazovL2NvZGUtdG8taW1nLy4vbm9kZV9tb2R1bGVzL3NldC1mdW5jdGlvbi1sZW5ndGgvaW5kZXguanM/OTM5YiJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBHZXRJbnRyaW5zaWMgPSByZXF1aXJlKCdnZXQtaW50cmluc2ljJyk7XG52YXIgZGVmaW5lID0gcmVxdWlyZSgnZGVmaW5lLWRhdGEtcHJvcGVydHknKTtcbnZhciBoYXNEZXNjcmlwdG9ycyA9IHJlcXVpcmUoJ2hhcy1wcm9wZXJ0eS1kZXNjcmlwdG9ycycpKCk7XG52YXIgZ09QRCA9IHJlcXVpcmUoJ2dvcGQnKTtcblxudmFyICRUeXBlRXJyb3IgPSBHZXRJbnRyaW5zaWMoJyVUeXBlRXJyb3IlJyk7XG52YXIgJGZsb29yID0gR2V0SW50cmluc2ljKCclTWF0aC5mbG9vciUnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBzZXRGdW5jdGlvbkxlbmd0aChmbiwgbGVuZ3RoKSB7XG5cdGlmICh0eXBlb2YgZm4gIT09ICdmdW5jdGlvbicpIHtcblx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcignYGZuYCBpcyBub3QgYSBmdW5jdGlvbicpO1xuXHR9XG5cdGlmICh0eXBlb2YgbGVuZ3RoICE9PSAnbnVtYmVyJyB8fCBsZW5ndGggPCAwIHx8IGxlbmd0aCA+IDB4RkZGRkZGRkYgfHwgJGZsb29yKGxlbmd0aCkgIT09IGxlbmd0aCkge1xuXHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdgbGVuZ3RoYCBtdXN0IGJlIGEgcG9zaXRpdmUgMzItYml0IGludGVnZXInKTtcblx0fVxuXG5cdHZhciBsb29zZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmICEhYXJndW1lbnRzWzJdO1xuXG5cdHZhciBmdW5jdGlvbkxlbmd0aElzQ29uZmlndXJhYmxlID0gdHJ1ZTtcblx0dmFyIGZ1bmN0aW9uTGVuZ3RoSXNXcml0YWJsZSA9IHRydWU7XG5cdGlmICgnbGVuZ3RoJyBpbiBmbiAmJiBnT1BEKSB7XG5cdFx0dmFyIGRlc2MgPSBnT1BEKGZuLCAnbGVuZ3RoJyk7XG5cdFx0aWYgKGRlc2MgJiYgIWRlc2MuY29uZmlndXJhYmxlKSB7XG5cdFx0XHRmdW5jdGlvbkxlbmd0aElzQ29uZmlndXJhYmxlID0gZmFsc2U7XG5cdFx0fVxuXHRcdGlmIChkZXNjICYmICFkZXNjLndyaXRhYmxlKSB7XG5cdFx0XHRmdW5jdGlvbkxlbmd0aElzV3JpdGFibGUgPSBmYWxzZTtcblx0XHR9XG5cdH1cblxuXHRpZiAoZnVuY3Rpb25MZW5ndGhJc0NvbmZpZ3VyYWJsZSB8fCBmdW5jdGlvbkxlbmd0aElzV3JpdGFibGUgfHwgIWxvb3NlKSB7XG5cdFx0aWYgKGhhc0Rlc2NyaXB0b3JzKSB7XG5cdFx0XHRkZWZpbmUoZm4sICdsZW5ndGgnLCBsZW5ndGgsIHRydWUsIHRydWUpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRkZWZpbmUoZm4sICdsZW5ndGgnLCBsZW5ndGgpO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gZm47XG59O1xuIl0sIm5hbWVzIjpbIkdldEludHJpbnNpYyIsInJlcXVpcmUiLCJkZWZpbmUiLCJoYXNEZXNjcmlwdG9ycyIsImdPUEQiLCIkVHlwZUVycm9yIiwiJGZsb29yIiwibW9kdWxlIiwiZXhwb3J0cyIsInNldEZ1bmN0aW9uTGVuZ3RoIiwiZm4iLCJsZW5ndGgiLCJsb29zZSIsImFyZ3VtZW50cyIsImZ1bmN0aW9uTGVuZ3RoSXNDb25maWd1cmFibGUiLCJmdW5jdGlvbkxlbmd0aElzV3JpdGFibGUiLCJkZXNjIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/set-function-length/index.js\n");

/***/ })

};
;