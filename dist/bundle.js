/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"filterUrl\": () => (/* binding */ filterUrl),\n/* harmony export */   \"generateTable\": () => (/* binding */ generateTable)\n/* harmony export */ });\n// Fonction qui genere le teableau \nfunction generateTable(person) {\n  // Creation <table>\n  var tbl = document.createElement(\"table\");\n  var tblBody = document.createElement(\"tbody\");\n  var tblHead = document.createElement(\"thead\");\n  var row = document.createElement(\"tr\");\n  var tabHead = [\"Nom\", \"Prénom\", \"Âge\", \"Couleur des yeux\", \"Email\"];\n\n  //Creation <thead>\n  for (var j = 0; j < tabHead.length; j++) {\n    var cell = document.createElement(\"td\");\n    var cellText = document.createTextNode(tabHead[j]);\n    cell.appendChild(cellText);\n    row.appendChild(cell);\n  }\n  tblHead.appendChild(row);\n  tbl.appendChild(tblHead);\n\n  // Creation des Cellule\n  for (var i = 0; i < person.length; i++) {\n    var _row = document.createElement(\"tr\");\n    for (var _j = 0; _j < tabHead.length; _j++) {\n      var value = \"\";\n      if (_j == 0) value = person[i].name.last;\n      if (_j == 1) value = person[i].name.first;\n      if (_j == 2) value = person[i].age;\n      if (_j == 3) value = person[i].eyeColor;\n      if (_j == 4) value = person[i].email;\n      var _cell = document.createElement(\"td\");\n      var _cellText = document.createTextNode(value);\n      _cell.appendChild(_cellText);\n      _row.appendChild(_cell);\n    }\n\n    // Ajout de la ligne dans le tbody\n    tblBody.appendChild(_row);\n  }\n\n  // Envoi le tbody a la table\n  tbl.appendChild(tblBody);\n  // Ajoute la tabke au body \n  document.body.appendChild(tbl);\n}\n\n/*\r\nFonction filtrable par lastName , firstName  , email , eyeColor , age\r\n*/\nfunction filterUrl(person) {\n  var queryString = window.location.search;\n  var urlParams = new URLSearchParams(queryString);\n\n  // Test si lastName est en parametre\n  if (urlParams.has('lastName')) {\n    var lastName = urlParams.get('lastName');\n    person = person.filter(function (p) {\n      return p.name.last.indexOf(lastName) >= 0;\n    });\n  }\n\n  // Test si fisrtName est en parametre\n  if (urlParams.has('firstName')) {\n    var firstName = urlParams.get('firstName');\n    console.log(firstName);\n    person = person.filter(function (p) {\n      return p.name.first.indexOf(firstName) >= 0;\n    });\n  }\n\n  // Test si email est en parametre\n  if (urlParams.has('email')) {\n    var email = urlParams.get('email');\n    person = person.filter(function (p) {\n      return p.email.indexOf(email) >= 0;\n    });\n  }\n\n  // Test si eyeColor est en parametre\n  if (urlParams.has('eyeColor')) {\n    var eyeColor = urlParams.get('eyeColor');\n    if (eyeColor == 'blue' || eyeColor == 'brown' || eyeColor == 'green') {\n      person = person.filter(function (p) {\n        return p.eyeColor == eyeColor;\n      });\n    }\n  }\n\n  // Test si age est en parametre\n  // 20-25 , 26-30 , 31-35 , 36-41\n  // de 20 à 25 ans, de 26 à 30 ans, de 31 à 35 ans et enfin de 36 à 41 ans\n  if (urlParams.has('age')) {\n    var age = urlParams.get('age');\n    var range = {\n      min: 0,\n      max: 120\n    };\n    if (age == '20-25') range = {\n      min: 20,\n      max: 25\n    };\n    if (age == '26-30') range = {\n      min: 26,\n      max: 30\n    };\n    if (age == '31-35') range = {\n      min: 31,\n      max: 35\n    };\n    if (age == '36-41') range = {\n      min: 36,\n      max: 41\n    };\n    person = person.filter(function (p) {\n      return p.age >= range.min && p.age <= range.max;\n    });\n  }\n  return person;\n}\n\n//# sourceURL=webpack://prisma/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;