"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/users/signup/route";
exports.ids = ["app/api/users/signup/route"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "prettier/plugins/html":
/*!****************************************!*\
  !*** external "prettier/plugins/html" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("prettier/plugins/html");

/***/ }),

/***/ "prettier/standalone":
/*!**************************************!*\
  !*** external "prettier/standalone" ***!
  \**************************************/
/***/ ((module) => {

module.exports = require("prettier/standalone");

/***/ }),

/***/ "async_hooks":
/*!******************************!*\
  !*** external "async_hooks" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("async_hooks");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "node:stream":
/*!******************************!*\
  !*** external "node:stream" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("node:stream");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fusers%2Fsignup%2Froute&page=%2Fapi%2Fusers%2Fsignup%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fusers%2Fsignup%2Froute.js&appDir=C%3A%5CUsers%5Curooj.nadeem%5Cemployee-attendance-portal%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Curooj.nadeem%5Cemployee-attendance-portal&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fusers%2Fsignup%2Froute&page=%2Fapi%2Fusers%2Fsignup%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fusers%2Fsignup%2Froute.js&appDir=C%3A%5CUsers%5Curooj.nadeem%5Cemployee-attendance-portal%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Curooj.nadeem%5Cemployee-attendance-portal&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_urooj_nadeem_employee_attendance_portal_src_app_api_users_signup_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/users/signup/route.js */ \"(rsc)/./src/app/api/users/signup/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/users/signup/route\",\n        pathname: \"/api/users/signup\",\n        filename: \"route\",\n        bundlePath: \"app/api/users/signup/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\urooj.nadeem\\\\employee-attendance-portal\\\\src\\\\app\\\\api\\\\users\\\\signup\\\\route.js\",\n    nextConfigOutput,\n    userland: C_Users_urooj_nadeem_employee_attendance_portal_src_app_api_users_signup_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/users/signup/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZ1c2VycyUyRnNpZ251cCUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGdXNlcnMlMkZzaWdudXAlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZ1c2VycyUyRnNpZ251cCUyRnJvdXRlLmpzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUN1cm9vai5uYWRlZW0lNUNlbXBsb3llZS1hdHRlbmRhbmNlLXBvcnRhbCU1Q3NyYyU1Q2FwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9QyUzQSU1Q1VzZXJzJTVDdXJvb2oubmFkZWVtJTVDZW1wbG95ZWUtYXR0ZW5kYW5jZS1wb3J0YWwmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFzRztBQUN2QztBQUNjO0FBQzJDO0FBQ3hIO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnSEFBbUI7QUFDM0M7QUFDQSxjQUFjLHlFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsaUVBQWlFO0FBQ3pFO0FBQ0E7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDdUg7O0FBRXZIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZW1wbG95ZWUtYXR0ZW5kYW5jZS1wb3J0YWwvPzljNjciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiQzpcXFxcVXNlcnNcXFxcdXJvb2oubmFkZWVtXFxcXGVtcGxveWVlLWF0dGVuZGFuY2UtcG9ydGFsXFxcXHNyY1xcXFxhcHBcXFxcYXBpXFxcXHVzZXJzXFxcXHNpZ251cFxcXFxyb3V0ZS5qc1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvdXNlcnMvc2lnbnVwL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvdXNlcnMvc2lnbnVwXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS91c2Vycy9zaWdudXAvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCJDOlxcXFxVc2Vyc1xcXFx1cm9vai5uYWRlZW1cXFxcZW1wbG95ZWUtYXR0ZW5kYW5jZS1wb3J0YWxcXFxcc3JjXFxcXGFwcFxcXFxhcGlcXFxcdXNlcnNcXFxcc2lnbnVwXFxcXHJvdXRlLmpzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuY29uc3Qgb3JpZ2luYWxQYXRobmFtZSA9IFwiL2FwaS91c2Vycy9zaWdudXAvcm91dGVcIjtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgc2VydmVySG9va3MsXG4gICAgICAgIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgb3JpZ2luYWxQYXRobmFtZSwgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fusers%2Fsignup%2Froute&page=%2Fapi%2Fusers%2Fsignup%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fusers%2Fsignup%2Froute.js&appDir=C%3A%5CUsers%5Curooj.nadeem%5Cemployee-attendance-portal%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Curooj.nadeem%5Cemployee-attendance-portal&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/users/signup/route.js":
/*!*******************************************!*\
  !*** ./src/app/api/users/signup/route.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var _db_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/db/db */ \"(rsc)/./src/db/db.js\");\n/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/models/User */ \"(rsc)/./src/models/User.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bcryptjs */ \"(rsc)/./node_modules/bcryptjs/index.js\");\n/* harmony import */ var _utils_mailer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/utils/mailer */ \"(rsc)/./src/utils/mailer.js\");\n\n\n\n\n(0,_db_db__WEBPACK_IMPORTED_MODULE_0__.connectDB)();\nasync function POST(request) {\n    try {\n        const reqBody = await request.json();\n        const { username, email, password } = reqBody;\n        //validation krni hai abhi\n        console.log(reqBody);\n        const user = await _models_User__WEBPACK_IMPORTED_MODULE_1__[\"default\"].findOne({\n            email\n        });\n        if (user) {\n            return new Response(JSON.stringify({\n                error: \"User already exists!\"\n            }));\n        }\n        // for hashed pass\n        const salt = await bcryptjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"].genSalt(10);\n        const hashedPassword = await bcryptjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"].hash(password, salt);\n        //creating new user\n        const newUser = new _models_User__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n            username,\n            email,\n            password: hashedPassword\n        });\n        const savedUser = await newUser.save();\n        console.log(savedUser);\n        // for verification email\n        await (0,_utils_mailer__WEBPACK_IMPORTED_MODULE_3__.sendEmail)({\n            email,\n            emailType: \"VERIFY\",\n            userId: savedUser._id\n        });\n        return new Response(JSON.stringify({\n            message: \"User registered successfully!\",\n            success: true,\n            savedUser\n        }));\n    } catch (error) {\n        return new Response(JSON.stringify({\n            error: error.message\n        }));\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS91c2Vycy9zaWdudXAvcm91dGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBb0M7QUFDSDtBQUNEO0FBQ1c7QUFFM0NBLGlEQUFTQTtBQUVGLGVBQWVJLEtBQUtDLE9BQU87SUFDaEMsSUFBSTtRQUNGLE1BQU1DLFVBQVUsTUFBTUQsUUFBUUUsSUFBSTtRQUNsQyxNQUFNLEVBQUVDLFFBQVEsRUFBRUMsS0FBSyxFQUFFQyxRQUFRLEVBQUUsR0FBR0o7UUFDdEMsMEJBQTBCO1FBQzFCSyxRQUFRQyxHQUFHLENBQUNOO1FBRVosTUFBTU8sT0FBTyxNQUFNWixvREFBSUEsQ0FBQ2EsT0FBTyxDQUFDO1lBQUVMO1FBQU07UUFDeEMsSUFBSUksTUFBTTtZQUNSLE9BQU8sSUFBSUUsU0FBU0MsS0FBS0MsU0FBUyxDQUFDO2dCQUFFQyxPQUFPO1lBQXVCO1FBQ3JFO1FBRUEsa0JBQWtCO1FBQ2xCLE1BQU1DLE9BQU8sTUFBTWpCLHdEQUFnQixDQUFDO1FBQ3BDLE1BQU1tQixpQkFBaUIsTUFBTW5CLHFEQUFhLENBQUNRLFVBQVVTO1FBRXJELG1CQUFtQjtRQUNuQixNQUFNSSxVQUFVLElBQUl0QixvREFBSUEsQ0FBQztZQUN2Qk87WUFDQUM7WUFDQUMsVUFBVVc7UUFDWjtRQUVBLE1BQU1HLFlBQVksTUFBTUQsUUFBUUUsSUFBSTtRQUNwQ2QsUUFBUUMsR0FBRyxDQUFDWTtRQUVaLHlCQUF5QjtRQUN6QixNQUFNckIsd0RBQVNBLENBQUM7WUFBRU07WUFBT2lCLFdBQVc7WUFBVUMsUUFBUUgsVUFBVUksR0FBRztRQUFDO1FBRXBFLE9BQU8sSUFBSWIsU0FDVEMsS0FBS0MsU0FBUyxDQUFDO1lBQ2JZLFNBQVM7WUFDVEMsU0FBUztZQUNUTjtRQUNGO0lBRUosRUFBRSxPQUFPTixPQUFPO1FBQ2QsT0FBTyxJQUFJSCxTQUFTQyxLQUFLQyxTQUFTLENBQUM7WUFBRUMsT0FBT0EsTUFBTVcsT0FBTztRQUFDO0lBQzVEO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lbXBsb3llZS1hdHRlbmRhbmNlLXBvcnRhbC8uL3NyYy9hcHAvYXBpL3VzZXJzL3NpZ251cC9yb3V0ZS5qcz81NGRlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbm5lY3REQiB9IGZyb20gXCJAL2RiL2RiXCI7XHJcbmltcG9ydCBVc2VyIGZyb20gXCJAL21vZGVscy9Vc2VyXCI7XHJcbmltcG9ydCBiY3J5cHRqcyBmcm9tIFwiYmNyeXB0anNcIjtcclxuaW1wb3J0IHsgc2VuZEVtYWlsIH0gZnJvbSBcIkAvdXRpbHMvbWFpbGVyXCI7XHJcblxyXG5jb25uZWN0REIoKTtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQT1NUKHJlcXVlc3QpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVxQm9keSA9IGF3YWl0IHJlcXVlc3QuanNvbigpO1xyXG4gICAgY29uc3QgeyB1c2VybmFtZSwgZW1haWwsIHBhc3N3b3JkIH0gPSByZXFCb2R5O1xyXG4gICAgLy92YWxpZGF0aW9uIGtybmkgaGFpIGFiaGlcclxuICAgIGNvbnNvbGUubG9nKHJlcUJvZHkpO1xyXG5cclxuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBVc2VyLmZpbmRPbmUoeyBlbWFpbCB9KTtcclxuICAgIGlmICh1c2VyKSB7XHJcbiAgICAgIHJldHVybiBuZXcgUmVzcG9uc2UoSlNPTi5zdHJpbmdpZnkoeyBlcnJvcjogXCJVc2VyIGFscmVhZHkgZXhpc3RzIVwiIH0pKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBmb3IgaGFzaGVkIHBhc3NcclxuICAgIGNvbnN0IHNhbHQgPSBhd2FpdCBiY3J5cHRqcy5nZW5TYWx0KDEwKTtcclxuICAgIGNvbnN0IGhhc2hlZFBhc3N3b3JkID0gYXdhaXQgYmNyeXB0anMuaGFzaChwYXNzd29yZCwgc2FsdCk7XHJcblxyXG4gICAgLy9jcmVhdGluZyBuZXcgdXNlclxyXG4gICAgY29uc3QgbmV3VXNlciA9IG5ldyBVc2VyKHtcclxuICAgICAgdXNlcm5hbWUsXHJcbiAgICAgIGVtYWlsLFxyXG4gICAgICBwYXNzd29yZDogaGFzaGVkUGFzc3dvcmQsXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBzYXZlZFVzZXIgPSBhd2FpdCBuZXdVc2VyLnNhdmUoKTtcclxuICAgIGNvbnNvbGUubG9nKHNhdmVkVXNlcik7XHJcblxyXG4gICAgLy8gZm9yIHZlcmlmaWNhdGlvbiBlbWFpbFxyXG4gICAgYXdhaXQgc2VuZEVtYWlsKHsgZW1haWwsIGVtYWlsVHlwZTogXCJWRVJJRllcIiwgdXNlcklkOiBzYXZlZFVzZXIuX2lkIH0pO1xyXG5cclxuICAgIHJldHVybiBuZXcgUmVzcG9uc2UoXHJcbiAgICAgIEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICBtZXNzYWdlOiBcIlVzZXIgcmVnaXN0ZXJlZCBzdWNjZXNzZnVsbHkhXCIsXHJcbiAgICAgICAgc3VjY2VzczogdHJ1ZSxcclxuICAgICAgICBzYXZlZFVzZXIsXHJcbiAgICAgIH0pXHJcbiAgICApO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4gbmV3IFJlc3BvbnNlKEpTT04uc3RyaW5naWZ5KHsgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfSkpO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsiY29ubmVjdERCIiwiVXNlciIsImJjcnlwdGpzIiwic2VuZEVtYWlsIiwiUE9TVCIsInJlcXVlc3QiLCJyZXFCb2R5IiwianNvbiIsInVzZXJuYW1lIiwiZW1haWwiLCJwYXNzd29yZCIsImNvbnNvbGUiLCJsb2ciLCJ1c2VyIiwiZmluZE9uZSIsIlJlc3BvbnNlIiwiSlNPTiIsInN0cmluZ2lmeSIsImVycm9yIiwic2FsdCIsImdlblNhbHQiLCJoYXNoZWRQYXNzd29yZCIsImhhc2giLCJuZXdVc2VyIiwic2F2ZWRVc2VyIiwic2F2ZSIsImVtYWlsVHlwZSIsInVzZXJJZCIsIl9pZCIsIm1lc3NhZ2UiLCJzdWNjZXNzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/users/signup/route.js\n");

/***/ }),

/***/ "(rsc)/./src/db/db.js":
/*!**********************!*\
  !*** ./src/db/db.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   connectDB: () => (/* binding */ connectDB)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function connectDB() {\n    try {\n        mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.MONGO_URI);\n        const connection = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().connection);\n        connection.on(\"connected\", ()=>{\n            console.log(\"MongoDB connected\");\n        });\n        connection.on(\"error\", (error)=>{\n            console.log(\"MongoDB connection error, please make sure DB is up and running:\" + error);\n            process.exit();\n        });\n    } catch (error) {\n        console.log(\"Something went wrong in connecting to DB\");\n        console.log(error);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvZGIvZGIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWdDO0FBRXpCLGVBQWVDO0lBQ3BCLElBQUk7UUFDRkQsdURBQWdCLENBQUNHLFFBQVFDLEdBQUcsQ0FBQ0MsU0FBUztRQUN0QyxNQUFNQyxhQUFhTiw0REFBbUI7UUFFdENNLFdBQVdDLEVBQUUsQ0FBQyxhQUFhO1lBQ3pCQyxRQUFRQyxHQUFHLENBQUM7UUFDZDtRQUVBSCxXQUFXQyxFQUFFLENBQUMsU0FBUyxDQUFDRztZQUN0QkYsUUFBUUMsR0FBRyxDQUNULHFFQUNFQztZQUVKUCxRQUFRUSxJQUFJO1FBQ2Q7SUFDRixFQUFFLE9BQU9ELE9BQU87UUFDZEYsUUFBUUMsR0FBRyxDQUFDO1FBQ1pELFFBQVFDLEdBQUcsQ0FBQ0M7SUFDZDtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZW1wbG95ZWUtYXR0ZW5kYW5jZS1wb3J0YWwvLi9zcmMvZGIvZGIuanM/Y2ViOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY29ubmVjdERCKCkge1xyXG4gIHRyeSB7XHJcbiAgICBtb25nb29zZS5jb25uZWN0KHByb2Nlc3MuZW52Lk1PTkdPX1VSSSk7XHJcbiAgICBjb25zdCBjb25uZWN0aW9uID0gbW9uZ29vc2UuY29ubmVjdGlvbjtcclxuXHJcbiAgICBjb25uZWN0aW9uLm9uKFwiY29ubmVjdGVkXCIsICgpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coXCJNb25nb0RCIGNvbm5lY3RlZFwiKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbm5lY3Rpb24ub24oXCJlcnJvclwiLCAoZXJyb3IpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coXHJcbiAgICAgICAgXCJNb25nb0RCIGNvbm5lY3Rpb24gZXJyb3IsIHBsZWFzZSBtYWtlIHN1cmUgREIgaXMgdXAgYW5kIHJ1bm5pbmc6XCIgK1xyXG4gICAgICAgICAgZXJyb3JcclxuICAgICAgKTtcclxuICAgICAgcHJvY2Vzcy5leGl0KCk7XHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5sb2coXCJTb21ldGhpbmcgd2VudCB3cm9uZyBpbiBjb25uZWN0aW5nIHRvIERCXCIpO1xyXG4gICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gIH1cclxufSJdLCJuYW1lcyI6WyJtb25nb29zZSIsImNvbm5lY3REQiIsImNvbm5lY3QiLCJwcm9jZXNzIiwiZW52IiwiTU9OR09fVVJJIiwiY29ubmVjdGlvbiIsIm9uIiwiY29uc29sZSIsImxvZyIsImVycm9yIiwiZXhpdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/db/db.js\n");

/***/ }),

/***/ "(rsc)/./src/models/User.js":
/*!****************************!*\
  !*** ./src/models/User.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst userSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    username: {\n        type: String,\n        required: [\n            true,\n            \"Please provide a username\"\n        ],\n        unique: true\n    },\n    email: {\n        type: String,\n        required: [\n            true,\n            \"Please provide an email\"\n        ],\n        unique: true\n    },\n    password: {\n        type: String,\n        required: [\n            true,\n            \"Please enter the password\"\n        ]\n    },\n    isVerified: {\n        type: Boolean,\n        default: false\n    },\n    isAdmin: {\n        type: Boolean,\n        default: false\n    },\n    forgotPasswordToken: String,\n    forgotPasswordTokenExpiry: Date,\n    verifyToken: String,\n    verifyTokenExpiry: Date\n});\nconst User = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).users || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"users\", userSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (User);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbW9kZWxzL1VzZXIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWdDO0FBRWhDLE1BQU1DLGFBQWEsSUFBSUQsd0RBQWUsQ0FBQztJQUNuQ0csVUFBUztRQUNMQyxNQUFNQztRQUNOQyxVQUFVO1lBQUM7WUFBTTtTQUE0QjtRQUM3Q0MsUUFBUTtJQUNaO0lBRUFDLE9BQU07UUFDRkosTUFBTUM7UUFDTkMsVUFBVTtZQUFDO1lBQU07U0FBMEI7UUFDM0NDLFFBQVE7SUFDWjtJQUVBRSxVQUFTO1FBQ0xMLE1BQU1DO1FBQ05DLFVBQVM7WUFBQztZQUFNO1NBQTRCO0lBQ2hEO0lBRUFJLFlBQVc7UUFDUE4sTUFBTU87UUFDTkMsU0FBUztJQUNiO0lBRUFDLFNBQVE7UUFDSlQsTUFBTU87UUFDTkMsU0FBUztJQUNiO0lBRUFFLHFCQUFxQlQ7SUFDckJVLDJCQUEyQkM7SUFDM0JDLGFBQWFaO0lBQ2JhLG1CQUFtQkY7QUFDdkI7QUFFQSxNQUFNRyxPQUFPbkIsd0RBQWUsQ0FBQ3FCLEtBQUssSUFBSXJCLHFEQUFjLENBQUMsU0FBU0M7QUFFOUQsaUVBQWVrQixJQUFJQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZW1wbG95ZWUtYXR0ZW5kYW5jZS1wb3J0YWwvLi9zcmMvbW9kZWxzL1VzZXIuanM/N2QwYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XHJcblxyXG5jb25zdCB1c2VyU2NoZW1hID0gbmV3IG1vbmdvb3NlLlNjaGVtYSh7XHJcbiAgICB1c2VybmFtZTp7XHJcbiAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgIHJlcXVpcmVkOiBbdHJ1ZSwgXCJQbGVhc2UgcHJvdmlkZSBhIHVzZXJuYW1lXCJdLFxyXG4gICAgICAgIHVuaXF1ZTogdHJ1ZVxyXG4gICAgfSxcclxuXHJcbiAgICBlbWFpbDp7XHJcbiAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgIHJlcXVpcmVkOiBbdHJ1ZSwgXCJQbGVhc2UgcHJvdmlkZSBhbiBlbWFpbFwiXSxcclxuICAgICAgICB1bmlxdWU6IHRydWUgICAgXHJcbiAgICB9LFxyXG5cclxuICAgIHBhc3N3b3JkOntcclxuICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgcmVxdWlyZWQ6W3RydWUsIFwiUGxlYXNlIGVudGVyIHRoZSBwYXNzd29yZFwiXSBcclxuICAgIH0sXHJcblxyXG4gICAgaXNWZXJpZmllZDp7XHJcbiAgICAgICAgdHlwZTogQm9vbGVhbixcclxuICAgICAgICBkZWZhdWx0OiBmYWxzZVxyXG4gICAgfSxcclxuXHJcbiAgICBpc0FkbWluOntcclxuICAgICAgICB0eXBlOiBCb29sZWFuLFxyXG4gICAgICAgIGRlZmF1bHQ6IGZhbHNlXHJcbiAgICB9LFxyXG5cclxuICAgIGZvcmdvdFBhc3N3b3JkVG9rZW46IFN0cmluZyxcclxuICAgIGZvcmdvdFBhc3N3b3JkVG9rZW5FeHBpcnk6IERhdGUsXHJcbiAgICB2ZXJpZnlUb2tlbjogU3RyaW5nLFxyXG4gICAgdmVyaWZ5VG9rZW5FeHBpcnk6IERhdGVcclxufSlcclxuXHJcbmNvbnN0IFVzZXIgPSBtb25nb29zZS5tb2RlbHMudXNlcnMgfHwgbW9uZ29vc2UubW9kZWwoXCJ1c2Vyc1wiLCB1c2VyU2NoZW1hKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXNlciJdLCJuYW1lcyI6WyJtb25nb29zZSIsInVzZXJTY2hlbWEiLCJTY2hlbWEiLCJ1c2VybmFtZSIsInR5cGUiLCJTdHJpbmciLCJyZXF1aXJlZCIsInVuaXF1ZSIsImVtYWlsIiwicGFzc3dvcmQiLCJpc1ZlcmlmaWVkIiwiQm9vbGVhbiIsImRlZmF1bHQiLCJpc0FkbWluIiwiZm9yZ290UGFzc3dvcmRUb2tlbiIsImZvcmdvdFBhc3N3b3JkVG9rZW5FeHBpcnkiLCJEYXRlIiwidmVyaWZ5VG9rZW4iLCJ2ZXJpZnlUb2tlbkV4cGlyeSIsIlVzZXIiLCJtb2RlbHMiLCJ1c2VycyIsIm1vZGVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/models/User.js\n");

/***/ }),

/***/ "(rsc)/./src/utils/mailer.js":
/*!*****************************!*\
  !*** ./src/utils/mailer.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   sendEmail: () => (/* binding */ sendEmail)\n/* harmony export */ });\n/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/models/User */ \"(rsc)/./src/models/User.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bcryptjs */ \"(rsc)/./node_modules/bcryptjs/index.js\");\n/* harmony import */ var resend__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! resend */ \"(rsc)/./node_modules/resend/dist/index.mjs\");\n\n\n\nconst resend = new resend__WEBPACK_IMPORTED_MODULE_2__.Resend(process.env.RESEND_API_KEY);\nconst sendEmail = async ({ email, emailType, userId })=>{\n    try {\n        const hashedToken = await bcryptjs__WEBPACK_IMPORTED_MODULE_1__[\"default\"].hash(userId.toString(), 10);\n        if (emailType === \"VERIFY\") {\n            await _models_User__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findByIdAndUpdate(userId, {\n                verifyToken: hashedToken,\n                verifyTokenExpiry: Date.now() + 3600000\n            });\n        } else if (emailType === \"RESET\") {\n            await _models_User__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findByIdAndUpdate(userId, {\n                forgotPasswordToken: hashedToken,\n                forgotPasswordTokenExpiry: Date.now() + 3600000\n            });\n        }\n        const data = await resend.emails.send({\n            from: \"onboarding@resend.dev\",\n            to: email,\n            subject: emailType === \"VERIFY\" ? \"Verify your email\" : \"Reset your password\",\n            html: `<p>Click <a href=\"${process.env.DOMAIN}/verifyemail?token=${hashedToken}\"> here </a> to ${emailType === \"VERIFY\" ? \"verify your email\" : \"reset your password\"}</p>`\n        });\n        return data;\n    } catch (error) {\n        console.log(\"Email sending error:\", error.message);\n        throw new Error(error.message);\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvdXRpbHMvbWFpbGVyLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBaUM7QUFDRDtBQUNBO0FBRWhDLE1BQU1HLFNBQVMsSUFBSUQsMENBQU1BLENBQUNFLFFBQVFDLEdBQUcsQ0FBQ0MsY0FBYztBQUU3QyxNQUFNQyxZQUFZLE9BQU8sRUFBRUMsS0FBSyxFQUFFQyxTQUFTLEVBQUVDLE1BQU0sRUFBRTtJQUMxRCxJQUFJO1FBQ0YsTUFBTUMsY0FBYyxNQUFNVixxREFBYSxDQUFDUyxPQUFPRyxRQUFRLElBQUk7UUFFM0QsSUFBSUosY0FBYyxVQUFVO1lBQzFCLE1BQU1ULG9EQUFJQSxDQUFDYyxpQkFBaUIsQ0FBQ0osUUFBUTtnQkFDbkNLLGFBQWFKO2dCQUNiSyxtQkFBbUJDLEtBQUtDLEdBQUcsS0FBSztZQUNsQztRQUNGLE9BQU8sSUFBSVQsY0FBYyxTQUFTO1lBQ2hDLE1BQU1ULG9EQUFJQSxDQUFDYyxpQkFBaUIsQ0FBQ0osUUFBUTtnQkFDbkNTLHFCQUFxQlI7Z0JBQ3JCUywyQkFBMkJILEtBQUtDLEdBQUcsS0FBSztZQUMxQztRQUNGO1FBRUEsTUFBTUcsT0FBTyxNQUFNbEIsT0FBT21CLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDO1lBQ3BDQyxNQUFNO1lBQ05DLElBQUlqQjtZQUNKa0IsU0FDRWpCLGNBQWMsV0FBVyxzQkFBc0I7WUFDakRrQixNQUFNLENBQUMsa0JBQWtCLEVBQUV2QixRQUFRQyxHQUFHLENBQUN1QixNQUFNLENBQUMsbUJBQW1CLEVBQUVqQixZQUFZLGdCQUFnQixFQUFFRixjQUFjLFdBQVcsc0JBQXNCLHNCQUFzQixJQUFJLENBQUM7UUFDN0s7UUFDQSxPQUFPWTtJQUNULEVBQUUsT0FBT1EsT0FBTztRQUNkQyxRQUFRQyxHQUFHLENBQUMsd0JBQXdCRixNQUFNRyxPQUFPO1FBQ2pELE1BQU0sSUFBSUMsTUFBTUosTUFBTUcsT0FBTztJQUMvQjtBQUNGLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lbXBsb3llZS1hdHRlbmRhbmNlLXBvcnRhbC8uL3NyYy91dGlscy9tYWlsZXIuanM/YThmMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVXNlciBmcm9tIFwiQC9tb2RlbHMvVXNlclwiO1xyXG5pbXBvcnQgYmNyeXB0anMgZnJvbSBcImJjcnlwdGpzXCI7XHJcbmltcG9ydCB7IFJlc2VuZCB9IGZyb20gXCJyZXNlbmRcIjtcclxuXHJcbmNvbnN0IHJlc2VuZCA9IG5ldyBSZXNlbmQocHJvY2Vzcy5lbnYuUkVTRU5EX0FQSV9LRVkpO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNlbmRFbWFpbCA9IGFzeW5jICh7IGVtYWlsLCBlbWFpbFR5cGUsIHVzZXJJZCB9KSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGhhc2hlZFRva2VuID0gYXdhaXQgYmNyeXB0anMuaGFzaCh1c2VySWQudG9TdHJpbmcoKSwgMTApO1xyXG5cclxuICAgIGlmIChlbWFpbFR5cGUgPT09IFwiVkVSSUZZXCIpIHtcclxuICAgICAgYXdhaXQgVXNlci5maW5kQnlJZEFuZFVwZGF0ZSh1c2VySWQsIHtcclxuICAgICAgICB2ZXJpZnlUb2tlbjogaGFzaGVkVG9rZW4sXHJcbiAgICAgICAgdmVyaWZ5VG9rZW5FeHBpcnk6IERhdGUubm93KCkgKyAzNjAwMDAwLFxyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSBpZiAoZW1haWxUeXBlID09PSBcIlJFU0VUXCIpIHtcclxuICAgICAgYXdhaXQgVXNlci5maW5kQnlJZEFuZFVwZGF0ZSh1c2VySWQsIHtcclxuICAgICAgICBmb3Jnb3RQYXNzd29yZFRva2VuOiBoYXNoZWRUb2tlbixcclxuICAgICAgICBmb3Jnb3RQYXNzd29yZFRva2VuRXhwaXJ5OiBEYXRlLm5vdygpICsgMzYwMDAwMCxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc2VuZC5lbWFpbHMuc2VuZCh7XHJcbiAgICAgIGZyb206IFwib25ib2FyZGluZ0ByZXNlbmQuZGV2XCIsXHJcbiAgICAgIHRvOiBlbWFpbCxcclxuICAgICAgc3ViamVjdDpcclxuICAgICAgICBlbWFpbFR5cGUgPT09IFwiVkVSSUZZXCIgPyBcIlZlcmlmeSB5b3VyIGVtYWlsXCIgOiBcIlJlc2V0IHlvdXIgcGFzc3dvcmRcIixcclxuICAgICAgaHRtbDogYDxwPkNsaWNrIDxhIGhyZWY9XCIke3Byb2Nlc3MuZW52LkRPTUFJTn0vdmVyaWZ5ZW1haWw/dG9rZW49JHtoYXNoZWRUb2tlbn1cIj4gaGVyZSA8L2E+IHRvICR7ZW1haWxUeXBlID09PSBcIlZFUklGWVwiID8gXCJ2ZXJpZnkgeW91ciBlbWFpbFwiIDogXCJyZXNldCB5b3VyIHBhc3N3b3JkXCJ9PC9wPmAsXHJcbiAgICB9KTtcclxuICAgIHJldHVybiBkYXRhO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcIkVtYWlsIHNlbmRpbmcgZXJyb3I6XCIsIGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKGVycm9yLm1lc3NhZ2UpO1xyXG4gIH1cclxufTsiXSwibmFtZXMiOlsiVXNlciIsImJjcnlwdGpzIiwiUmVzZW5kIiwicmVzZW5kIiwicHJvY2VzcyIsImVudiIsIlJFU0VORF9BUElfS0VZIiwic2VuZEVtYWlsIiwiZW1haWwiLCJlbWFpbFR5cGUiLCJ1c2VySWQiLCJoYXNoZWRUb2tlbiIsImhhc2giLCJ0b1N0cmluZyIsImZpbmRCeUlkQW5kVXBkYXRlIiwidmVyaWZ5VG9rZW4iLCJ2ZXJpZnlUb2tlbkV4cGlyeSIsIkRhdGUiLCJub3ciLCJmb3Jnb3RQYXNzd29yZFRva2VuIiwiZm9yZ290UGFzc3dvcmRUb2tlbkV4cGlyeSIsImRhdGEiLCJlbWFpbHMiLCJzZW5kIiwiZnJvbSIsInRvIiwic3ViamVjdCIsImh0bWwiLCJET01BSU4iLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJtZXNzYWdlIiwiRXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/utils/mailer.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/resend","vendor-chunks/bcryptjs"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fusers%2Fsignup%2Froute&page=%2Fapi%2Fusers%2Fsignup%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fusers%2Fsignup%2Froute.js&appDir=C%3A%5CUsers%5Curooj.nadeem%5Cemployee-attendance-portal%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Curooj.nadeem%5Cemployee-attendance-portal&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();