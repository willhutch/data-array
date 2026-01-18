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
exports.id = "pages/api/data";
exports.ids = ["pages/api/data"];
exports.modules = {

/***/ "(api-node)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fdata&preferredRegion=&absolutePagePath=.%2Fpages%2Fapi%2Fdata%2Findex.js&middlewareConfigBase64=e30%3D!":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fdata&preferredRegion=&absolutePagePath=.%2Fpages%2Fapi%2Fdata%2Findex.js&middlewareConfigBase64=e30%3D! ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   handler: () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_api_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/api-utils */ \"(api-node)/./node_modules/next/dist/server/api-utils/index.js\");\n/* harmony import */ var next_dist_server_api_utils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_api_utils__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(api-node)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/route-modules/pages-api/module.compiled */ \"(api-node)/./node_modules/next/dist/server/route-modules/pages-api/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/dist/build/templates/helpers */ \"(api-node)/./node_modules/next/dist/build/templates/helpers.js\");\n/* harmony import */ var _pages_api_data_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/api/data/index.js */ \"(api-node)/./pages/api/data/index.js\");\n/* harmony import */ var next_dist_server_lib_trace_tracer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/dist/server/lib/trace/tracer */ \"(api-node)/./node_modules/next/dist/server/lib/trace/tracer.js\");\n/* harmony import */ var next_dist_server_lib_trace_tracer__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_trace_tracer__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_dist_server_lib_trace_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/dist/server/lib/trace/constants */ \"(api-node)/./node_modules/next/dist/server/lib/trace/constants.js\");\n/* harmony import */ var next_dist_server_lib_trace_constants__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_trace_constants__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var next_dist_server_request_meta__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/dist/server/request-meta */ \"(api-node)/./node_modules/next/dist/server/request-meta.js\");\n/* harmony import */ var next_dist_server_request_meta__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_request_meta__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\n\n// Import the userland code.\n\n\n\n\n// Re-export the handler (should be the default export).\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_3__.hoist)(_pages_api_data_index_js__WEBPACK_IMPORTED_MODULE_4__, 'default'));\n// Re-export config.\nconst config = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_3__.hoist)(_pages_api_data_index_js__WEBPACK_IMPORTED_MODULE_4__, 'config');\n// Create and export the route module that will be consumed.\nconst routeModule = new next_dist_server_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_2__.PagesAPIRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES_API,\n        page: \"/api/data\",\n        pathname: \"/api/data\",\n        // The following aren't used in production.\n        bundlePath: '',\n        filename: ''\n    },\n    userland: _pages_api_data_index_js__WEBPACK_IMPORTED_MODULE_4__,\n    distDir: \".next/dev\" || 0,\n    relativeProjectDir:  false || ''\n});\nasync function handler(req, res, ctx) {\n    if (routeModule.isDev) {\n        (0,next_dist_server_request_meta__WEBPACK_IMPORTED_MODULE_7__.addRequestMeta)(req, 'devRequestTimingInternalsEnd', process.hrtime.bigint());\n    }\n    let srcPage = \"/api/data\";\n    // turbopack doesn't normalize `/index` in the page name\n    // so we need to to process dynamic routes properly\n    // TODO: fix turbopack providing differing value from webpack\n    if (false) {}\n    const prepareResult = await routeModule.prepare(req, res, {\n        srcPage\n    });\n    if (!prepareResult) {\n        res.statusCode = 400;\n        res.end('Bad Request');\n        ctx.waitUntil == null ? void 0 : ctx.waitUntil.call(ctx, Promise.resolve());\n        return;\n    }\n    const { query, params, prerenderManifest, routerServerContext } = prepareResult;\n    try {\n        const method = req.method || 'GET';\n        const tracer = (0,next_dist_server_lib_trace_tracer__WEBPACK_IMPORTED_MODULE_5__.getTracer)();\n        const activeSpan = tracer.getActiveScopeSpan();\n        const onRequestError = routeModule.instrumentationOnRequestError.bind(routeModule);\n        const invokeRouteModule = async (span)=>routeModule.render(req, res, {\n                query: {\n                    ...query,\n                    ...params\n                },\n                params,\n                allowedRevalidateHeaderKeys: [],\n                multiZoneDraftMode: Boolean(false),\n                trustHostHeader: false,\n                // TODO: get this from from runtime env so manifest\n                // doesn't need to load\n                previewProps: prerenderManifest.preview,\n                propagateError: false,\n                dev: routeModule.isDev,\n                page: \"/api/data\",\n                internalRevalidate: routerServerContext == null ? void 0 : routerServerContext.revalidate,\n                onError: (...args)=>onRequestError(req, ...args)\n            }).finally(()=>{\n                if (!span) return;\n                span.setAttributes({\n                    'http.status_code': res.statusCode,\n                    'next.rsc': false\n                });\n                const rootSpanAttributes = tracer.getRootSpanAttributes();\n                // We were unable to get attributes, probably OTEL is not enabled\n                if (!rootSpanAttributes) {\n                    return;\n                }\n                if (rootSpanAttributes.get('next.span_type') !== next_dist_server_lib_trace_constants__WEBPACK_IMPORTED_MODULE_6__.BaseServerSpan.handleRequest) {\n                    console.warn(`Unexpected root span type '${rootSpanAttributes.get('next.span_type')}'. Please report this Next.js issue https://github.com/vercel/next.js`);\n                    return;\n                }\n                const route = rootSpanAttributes.get('next.route');\n                if (route) {\n                    const name = `${method} ${route}`;\n                    span.setAttributes({\n                        'next.route': route,\n                        'http.route': route,\n                        'next.span_name': name\n                    });\n                    span.updateName(name);\n                } else {\n                    span.updateName(`${method} ${srcPage}`);\n                }\n            });\n        // TODO: activeSpan code path is for when wrapped by\n        // next-server can be removed when this is no longer used\n        if (activeSpan) {\n            await invokeRouteModule(activeSpan);\n        } else {\n            await tracer.withPropagatedContext(req.headers, ()=>tracer.trace(next_dist_server_lib_trace_constants__WEBPACK_IMPORTED_MODULE_6__.BaseServerSpan.handleRequest, {\n                    spanName: `${method} ${srcPage}`,\n                    kind: next_dist_server_lib_trace_tracer__WEBPACK_IMPORTED_MODULE_5__.SpanKind.SERVER,\n                    attributes: {\n                        'http.method': method,\n                        'http.target': req.url\n                    }\n                }, invokeRouteModule));\n        }\n    } catch (err) {\n        // we re-throw in dev to show the error overlay\n        if (routeModule.isDev) {\n            throw err;\n        }\n        // this is technically an invariant as error handling\n        // should be done inside of api-resolver onError\n        (0,next_dist_server_api_utils__WEBPACK_IMPORTED_MODULE_0__.sendError)(res, 500, 'Internal Server Error');\n    } finally{\n        // We don't allow any waitUntil work in pages API routes currently\n        // so if callback is present return with resolved promise since no\n        // pending work\n        ctx.waitUntil == null ? void 0 : ctx.waitUntil.call(ctx, Promise.resolve());\n    }\n}\n\n//# sourceMappingURL=pages-api.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaS1ub2RlKS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL25leHQtcm91dGUtbG9hZGVyL2luZGV4LmpzP2tpbmQ9UEFHRVNfQVBJJnBhZ2U9JTJGYXBpJTJGZGF0YSZwcmVmZXJyZWRSZWdpb249JmFic29sdXRlUGFnZVBhdGg9LiUyRnBhZ2VzJTJGYXBpJTJGZGF0YSUyRmluZGV4LmpzJm1pZGRsZXdhcmVDb25maWdCYXNlNjQ9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXVEO0FBQ0M7QUFDdUM7QUFDckM7QUFDMUQ7QUFDc0Q7QUFDa0I7QUFDRjtBQUNQO0FBQy9EO0FBQ0EsaUVBQWUsd0VBQUssQ0FBQyxxREFBUSxZQUFZLEVBQUM7QUFDMUM7QUFDTyxlQUFlLHdFQUFLLENBQUMscURBQVE7QUFDcEM7QUFDQSx3QkFBd0IseUdBQW1CO0FBQzNDO0FBQ0EsY0FBYyxrRUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLFlBQVk7QUFDWixhQUFhLFdBQW9DLElBQUksQ0FBRTtBQUN2RCx3QkFBd0IsTUFBdUM7QUFDL0QsQ0FBQztBQUNNO0FBQ1A7QUFDQSxRQUFRLDZFQUFjO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLEtBQXFCLEVBQUUsRUFFMUI7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksd0RBQXdEO0FBQ3BFO0FBQ0E7QUFDQSx1QkFBdUIsNEVBQVM7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0EsNkNBQTZDLEVBQTZDO0FBQzFGLDRDQUE0QyxLQUF3QztBQUNwRixpQ0FBaUMsS0FBb0M7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWlFLGdGQUFjO0FBQy9FLCtEQUErRCx5Q0FBeUM7QUFDeEc7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsUUFBUSxFQUFFLE1BQU07QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQSxrQkFBa0I7QUFDbEIsdUNBQXVDLFFBQVEsRUFBRSxRQUFRO0FBQ3pEO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLDZFQUE2RSxnRkFBYztBQUMzRixpQ0FBaUMsUUFBUSxFQUFFLFFBQVE7QUFDbkQsMEJBQTBCLHVFQUFRO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEscUVBQVM7QUFDakIsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHNlbmRFcnJvciB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2FwaS11dGlsc1wiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgUGFnZXNBUElSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLW1vZHVsZXMvcGFnZXMtYXBpL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgaG9pc3QgfSBmcm9tIFwibmV4dC9kaXN0L2J1aWxkL3RlbXBsYXRlcy9oZWxwZXJzXCI7XG4vLyBJbXBvcnQgdGhlIHVzZXJsYW5kIGNvZGUuXG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiLi9wYWdlcy9hcGkvZGF0YS9pbmRleC5qc1wiO1xuaW1wb3J0IHsgZ2V0VHJhY2VyLCBTcGFuS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi90cmFjZS90cmFjZXJcIjtcbmltcG9ydCB7IEJhc2VTZXJ2ZXJTcGFuIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3RyYWNlL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgYWRkUmVxdWVzdE1ldGEgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yZXF1ZXN0LW1ldGFcIjtcbi8vIFJlLWV4cG9ydCB0aGUgaGFuZGxlciAoc2hvdWxkIGJlIHRoZSBkZWZhdWx0IGV4cG9ydCkuXG5leHBvcnQgZGVmYXVsdCBob2lzdCh1c2VybGFuZCwgJ2RlZmF1bHQnKTtcbi8vIFJlLWV4cG9ydCBjb25maWcuXG5leHBvcnQgY29uc3QgY29uZmlnID0gaG9pc3QodXNlcmxhbmQsICdjb25maWcnKTtcbi8vIENyZWF0ZSBhbmQgZXhwb3J0IHRoZSByb3V0ZSBtb2R1bGUgdGhhdCB3aWxsIGJlIGNvbnN1bWVkLlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgUGFnZXNBUElSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuUEFHRVNfQVBJLFxuICAgICAgICBwYWdlOiBcIi9hcGkvZGF0YVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL2RhdGFcIixcbiAgICAgICAgLy8gVGhlIGZvbGxvd2luZyBhcmVuJ3QgdXNlZCBpbiBwcm9kdWN0aW9uLlxuICAgICAgICBidW5kbGVQYXRoOiAnJyxcbiAgICAgICAgZmlsZW5hbWU6ICcnXG4gICAgfSxcbiAgICB1c2VybGFuZCxcbiAgICBkaXN0RGlyOiBwcm9jZXNzLmVudi5fX05FWFRfUkVMQVRJVkVfRElTVF9ESVIgfHwgJycsXG4gICAgcmVsYXRpdmVQcm9qZWN0RGlyOiBwcm9jZXNzLmVudi5fX05FWFRfUkVMQVRJVkVfUFJPSkVDVF9ESVIgfHwgJydcbn0pO1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMsIGN0eCkge1xuICAgIGlmIChyb3V0ZU1vZHVsZS5pc0Rldikge1xuICAgICAgICBhZGRSZXF1ZXN0TWV0YShyZXEsICdkZXZSZXF1ZXN0VGltaW5nSW50ZXJuYWxzRW5kJywgcHJvY2Vzcy5ocnRpbWUuYmlnaW50KCkpO1xuICAgIH1cbiAgICBsZXQgc3JjUGFnZSA9IFwiL2FwaS9kYXRhXCI7XG4gICAgLy8gdHVyYm9wYWNrIGRvZXNuJ3Qgbm9ybWFsaXplIGAvaW5kZXhgIGluIHRoZSBwYWdlIG5hbWVcbiAgICAvLyBzbyB3ZSBuZWVkIHRvIHRvIHByb2Nlc3MgZHluYW1pYyByb3V0ZXMgcHJvcGVybHlcbiAgICAvLyBUT0RPOiBmaXggdHVyYm9wYWNrIHByb3ZpZGluZyBkaWZmZXJpbmcgdmFsdWUgZnJvbSB3ZWJwYWNrXG4gICAgaWYgKHByb2Nlc3MuZW52LlRVUkJPUEFDSykge1xuICAgICAgICBzcmNQYWdlID0gc3JjUGFnZS5yZXBsYWNlKC9cXC9pbmRleCQvLCAnJykgfHwgJy8nO1xuICAgIH1cbiAgICBjb25zdCBwcmVwYXJlUmVzdWx0ID0gYXdhaXQgcm91dGVNb2R1bGUucHJlcGFyZShyZXEsIHJlcywge1xuICAgICAgICBzcmNQYWdlXG4gICAgfSk7XG4gICAgaWYgKCFwcmVwYXJlUmVzdWx0KSB7XG4gICAgICAgIHJlcy5zdGF0dXNDb2RlID0gNDAwO1xuICAgICAgICByZXMuZW5kKCdCYWQgUmVxdWVzdCcpO1xuICAgICAgICBjdHgud2FpdFVudGlsID09IG51bGwgPyB2b2lkIDAgOiBjdHgud2FpdFVudGlsLmNhbGwoY3R4LCBQcm9taXNlLnJlc29sdmUoKSk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgeyBxdWVyeSwgcGFyYW1zLCBwcmVyZW5kZXJNYW5pZmVzdCwgcm91dGVyU2VydmVyQ29udGV4dCB9ID0gcHJlcGFyZVJlc3VsdDtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCBtZXRob2QgPSByZXEubWV0aG9kIHx8ICdHRVQnO1xuICAgICAgICBjb25zdCB0cmFjZXIgPSBnZXRUcmFjZXIoKTtcbiAgICAgICAgY29uc3QgYWN0aXZlU3BhbiA9IHRyYWNlci5nZXRBY3RpdmVTY29wZVNwYW4oKTtcbiAgICAgICAgY29uc3Qgb25SZXF1ZXN0RXJyb3IgPSByb3V0ZU1vZHVsZS5pbnN0cnVtZW50YXRpb25PblJlcXVlc3RFcnJvci5iaW5kKHJvdXRlTW9kdWxlKTtcbiAgICAgICAgY29uc3QgaW52b2tlUm91dGVNb2R1bGUgPSBhc3luYyAoc3Bhbik9PnJvdXRlTW9kdWxlLnJlbmRlcihyZXEsIHJlcywge1xuICAgICAgICAgICAgICAgIHF1ZXJ5OiB7XG4gICAgICAgICAgICAgICAgICAgIC4uLnF1ZXJ5LFxuICAgICAgICAgICAgICAgICAgICAuLi5wYXJhbXNcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHBhcmFtcyxcbiAgICAgICAgICAgICAgICBhbGxvd2VkUmV2YWxpZGF0ZUhlYWRlcktleXM6IHByb2Nlc3MuZW52Ll9fTkVYVF9BTExPV0VEX1JFVkFMSURBVEVfSEVBREVSUyxcbiAgICAgICAgICAgICAgICBtdWx0aVpvbmVEcmFmdE1vZGU6IEJvb2xlYW4ocHJvY2Vzcy5lbnYuX19ORVhUX01VTFRJX1pPTkVfRFJBRlRfTU9ERSksXG4gICAgICAgICAgICAgICAgdHJ1c3RIb3N0SGVhZGVyOiBwcm9jZXNzLmVudi5fX05FWFRfVFJVU1RfSE9TVF9IRUFERVIsXG4gICAgICAgICAgICAgICAgLy8gVE9ETzogZ2V0IHRoaXMgZnJvbSBmcm9tIHJ1bnRpbWUgZW52IHNvIG1hbmlmZXN0XG4gICAgICAgICAgICAgICAgLy8gZG9lc24ndCBuZWVkIHRvIGxvYWRcbiAgICAgICAgICAgICAgICBwcmV2aWV3UHJvcHM6IHByZXJlbmRlck1hbmlmZXN0LnByZXZpZXcsXG4gICAgICAgICAgICAgICAgcHJvcGFnYXRlRXJyb3I6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGRldjogcm91dGVNb2R1bGUuaXNEZXYsXG4gICAgICAgICAgICAgICAgcGFnZTogXCIvYXBpL2RhdGFcIixcbiAgICAgICAgICAgICAgICBpbnRlcm5hbFJldmFsaWRhdGU6IHJvdXRlclNlcnZlckNvbnRleHQgPT0gbnVsbCA/IHZvaWQgMCA6IHJvdXRlclNlcnZlckNvbnRleHQucmV2YWxpZGF0ZSxcbiAgICAgICAgICAgICAgICBvbkVycm9yOiAoLi4uYXJncyk9Pm9uUmVxdWVzdEVycm9yKHJlcSwgLi4uYXJncylcbiAgICAgICAgICAgIH0pLmZpbmFsbHkoKCk9PntcbiAgICAgICAgICAgICAgICBpZiAoIXNwYW4pIHJldHVybjtcbiAgICAgICAgICAgICAgICBzcGFuLnNldEF0dHJpYnV0ZXMoe1xuICAgICAgICAgICAgICAgICAgICAnaHR0cC5zdGF0dXNfY29kZSc6IHJlcy5zdGF0dXNDb2RlLFxuICAgICAgICAgICAgICAgICAgICAnbmV4dC5yc2MnOiBmYWxzZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJvb3RTcGFuQXR0cmlidXRlcyA9IHRyYWNlci5nZXRSb290U3BhbkF0dHJpYnV0ZXMoKTtcbiAgICAgICAgICAgICAgICAvLyBXZSB3ZXJlIHVuYWJsZSB0byBnZXQgYXR0cmlidXRlcywgcHJvYmFibHkgT1RFTCBpcyBub3QgZW5hYmxlZFxuICAgICAgICAgICAgICAgIGlmICghcm9vdFNwYW5BdHRyaWJ1dGVzKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHJvb3RTcGFuQXR0cmlidXRlcy5nZXQoJ25leHQuc3Bhbl90eXBlJykgIT09IEJhc2VTZXJ2ZXJTcGFuLmhhbmRsZVJlcXVlc3QpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGBVbmV4cGVjdGVkIHJvb3Qgc3BhbiB0eXBlICcke3Jvb3RTcGFuQXR0cmlidXRlcy5nZXQoJ25leHQuc3Bhbl90eXBlJyl9Jy4gUGxlYXNlIHJlcG9ydCB0aGlzIE5leHQuanMgaXNzdWUgaHR0cHM6Ly9naXRodWIuY29tL3ZlcmNlbC9uZXh0LmpzYCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc3Qgcm91dGUgPSByb290U3BhbkF0dHJpYnV0ZXMuZ2V0KCduZXh0LnJvdXRlJyk7XG4gICAgICAgICAgICAgICAgaWYgKHJvdXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5hbWUgPSBgJHttZXRob2R9ICR7cm91dGV9YDtcbiAgICAgICAgICAgICAgICAgICAgc3Bhbi5zZXRBdHRyaWJ1dGVzKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICduZXh0LnJvdXRlJzogcm91dGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAnaHR0cC5yb3V0ZSc6IHJvdXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ25leHQuc3Bhbl9uYW1lJzogbmFtZVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgc3Bhbi51cGRhdGVOYW1lKG5hbWUpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHNwYW4udXBkYXRlTmFtZShgJHttZXRob2R9ICR7c3JjUGFnZX1gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgLy8gVE9ETzogYWN0aXZlU3BhbiBjb2RlIHBhdGggaXMgZm9yIHdoZW4gd3JhcHBlZCBieVxuICAgICAgICAvLyBuZXh0LXNlcnZlciBjYW4gYmUgcmVtb3ZlZCB3aGVuIHRoaXMgaXMgbm8gbG9uZ2VyIHVzZWRcbiAgICAgICAgaWYgKGFjdGl2ZVNwYW4pIHtcbiAgICAgICAgICAgIGF3YWl0IGludm9rZVJvdXRlTW9kdWxlKGFjdGl2ZVNwYW4pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYXdhaXQgdHJhY2VyLndpdGhQcm9wYWdhdGVkQ29udGV4dChyZXEuaGVhZGVycywgKCk9PnRyYWNlci50cmFjZShCYXNlU2VydmVyU3Bhbi5oYW5kbGVSZXF1ZXN0LCB7XG4gICAgICAgICAgICAgICAgICAgIHNwYW5OYW1lOiBgJHttZXRob2R9ICR7c3JjUGFnZX1gLFxuICAgICAgICAgICAgICAgICAgICBraW5kOiBTcGFuS2luZC5TRVJWRVIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICdodHRwLm1ldGhvZCc6IG1ldGhvZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICdodHRwLnRhcmdldCc6IHJlcS51cmxcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIGludm9rZVJvdXRlTW9kdWxlKSk7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgLy8gd2UgcmUtdGhyb3cgaW4gZGV2IHRvIHNob3cgdGhlIGVycm9yIG92ZXJsYXlcbiAgICAgICAgaWYgKHJvdXRlTW9kdWxlLmlzRGV2KSB7XG4gICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgIH1cbiAgICAgICAgLy8gdGhpcyBpcyB0ZWNobmljYWxseSBhbiBpbnZhcmlhbnQgYXMgZXJyb3IgaGFuZGxpbmdcbiAgICAgICAgLy8gc2hvdWxkIGJlIGRvbmUgaW5zaWRlIG9mIGFwaS1yZXNvbHZlciBvbkVycm9yXG4gICAgICAgIHNlbmRFcnJvcihyZXMsIDUwMCwgJ0ludGVybmFsIFNlcnZlciBFcnJvcicpO1xuICAgIH0gZmluYWxseXtcbiAgICAgICAgLy8gV2UgZG9uJ3QgYWxsb3cgYW55IHdhaXRVbnRpbCB3b3JrIGluIHBhZ2VzIEFQSSByb3V0ZXMgY3VycmVudGx5XG4gICAgICAgIC8vIHNvIGlmIGNhbGxiYWNrIGlzIHByZXNlbnQgcmV0dXJuIHdpdGggcmVzb2x2ZWQgcHJvbWlzZSBzaW5jZSBub1xuICAgICAgICAvLyBwZW5kaW5nIHdvcmtcbiAgICAgICAgY3R4LndhaXRVbnRpbCA9PSBudWxsID8gdm9pZCAwIDogY3R4LndhaXRVbnRpbC5jYWxsKGN0eCwgUHJvbWlzZS5yZXNvbHZlKCkpO1xuICAgIH1cbn1cblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cGFnZXMtYXBpLmpzLm1hcFxuIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api-node)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fdata&preferredRegion=&absolutePagePath=.%2Fpages%2Fapi%2Fdata%2Findex.js&middlewareConfigBase64=e30%3D!\n");

/***/ }),

/***/ "(api-node)/./pages/api/data/index.js":
/*!*********************************!*\
  !*** ./pages/api/data/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n// Use @ alias configured in next.config.js which points to src/\nconst InputSanitizer = __webpack_require__(/*! @/util/inputSanitizer */ \"(api-node)/./src/util/inputSanitizer.js\");\nconst ContentValidator = __webpack_require__(/*! @/util/contentValidator */ \"(api-node)/./src/util/contentValidator.js\");\nconst FileNotFoundError = __webpack_require__(/*! @/exceptions/fileNotFoundError */ \"(api-node)/./src/exceptions/fileNotFoundError.js\");\nconst SheetNotFoundError = __webpack_require__(/*! @/exceptions/sheetNotFoundError */ \"(api-node)/./src/exceptions/sheetNotFoundError.js\");\nconst InvalidContentError = __webpack_require__(/*! @/exceptions/invalidContentError */ \"(api-node)/./src/exceptions/invalidContentError.js\");\nconst MalformedDataError = __webpack_require__(/*! @/exceptions/malformedDataError */ \"(api-node)/./src/exceptions/malformedDataError.js\");\nconst ExceptionMessages = __webpack_require__(/*! @/util/exceptionMessages */ \"(api-node)/./src/util/exceptionMessages.js\");\n// Helper to extract sheet ID from URL\nfunction extractSheetId(sheetReference) {\n    const matches = sheetReference.match(/https:\\/\\/docs.google.com\\/spreadsheets\\/d\\/(.*?)($|\\/$|\\/.*|\\?.*)/);\n    return matches !== null ? matches[1] : sheetReference;\n}\n// Helper to get file name from URL\nfunction getFileName(url) {\n    const search = /([^\\\\/]+)$/;\n    const match = search.exec(decodeURIComponent(url.replace(/\\+/g, ' ')));\n    return match != null ? match[1] : url;\n}\n// Fetch Google Sheets data\nasync function fetchGoogleSheetData(sheetId, sheetName = null) {\n    const API_KEY = \"AIzaSyANtGg5kH_rF2glvF0z1Mcz9bmXj7dzrG4\";\n    // #region agent log\n    fetch('http://127.0.0.1:7242/ingest/c55d8f9b-e738-4e94-a1fc-550ceba6989a', {\n        method: 'POST',\n        headers: {\n            'Content-Type': 'application/json'\n        },\n        body: JSON.stringify({\n            location: 'pages/api/data/index.js:28',\n            message: 'Starting fetchGoogleSheetData',\n            data: {\n                sheetId,\n                hasApiKey: !!API_KEY\n            },\n            timestamp: Date.now(),\n            sessionId: 'debug-session',\n            runId: 'run1',\n            hypothesisId: 'A'\n        })\n    }).catch(()=>{});\n    // #endregion\n    try {\n        // For public Google Sheets, use the API directly with API key\n        // This is simpler and more reliable than googleapis for public sheets\n        if (!API_KEY) {\n            throw new SheetNotFoundError('API_KEY environment variable is required for Google Sheets access');\n        }\n        // Get spreadsheet metadata\n        const metadataUrl = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}?key=${API_KEY}`;\n        const metadataResponse = await fetch(metadataUrl);\n        if (!metadataResponse.ok) {\n            if (metadataResponse.status === 404) {\n                throw new SheetNotFoundError(ExceptionMessages.SHEET_NOT_FOUND);\n            }\n            if (metadataResponse.status === 403) {\n                throw new SheetNotFoundError(ExceptionMessages.UNAUTHORIZED || 'Unauthorized access to sheet');\n            }\n            throw new Error(`Google Sheets API error: ${metadataResponse.status}`);\n        }\n        const spreadsheet = await metadataResponse.json();\n        const sheetNames = spreadsheet.sheets.map((s)=>s.properties.title);\n        const currentSheetName = sheetName || sheetNames[0];\n        // Get sheet data\n        const dataUrl = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${encodeURIComponent(currentSheetName)}!A1:F?key=${API_KEY}`;\n        const dataResponse = await fetch(dataUrl);\n        if (!dataResponse.ok) {\n            throw new Error(`Failed to fetch sheet data: ${dataResponse.status}`);\n        }\n        const dataResult = await dataResponse.json();\n        const values = dataResult.values;\n        // #region agent log\n        fetch('http://127.0.0.1:7242/ingest/c55d8f9b-e738-4e94-a1fc-550ceba6989a', {\n            method: 'POST',\n            headers: {\n                'Content-Type': 'application/json'\n            },\n            body: JSON.stringify({\n                location: 'pages/api/data/index.js:59',\n                message: 'Got spreadsheet data',\n                data: {\n                    hasValues: !!values,\n                    valueCount: values?.length\n                },\n                timestamp: Date.now(),\n                sessionId: 'debug-session',\n                runId: 'run1',\n                hypothesisId: 'C'\n            })\n        }).catch(()=>{});\n        // #endregion\n        if (!values || values.length === 0) {\n            throw new MalformedDataError(ExceptionMessages.MISSING_CONTENT);\n        }\n        // Validate headers\n        const header = values[0];\n        const contentValidator = new ContentValidator(header);\n        contentValidator.verifyContent();\n        contentValidator.verifyHeaders();\n        // Process data rows\n        const dataRows = values.slice(1);\n        const inputSanitizer = new InputSanitizer();\n        const blips = dataRows.map((row)=>inputSanitizer.sanitizeForProtectedSheet(row, header));\n        return {\n            title: spreadsheet.properties.title,\n            blips,\n            sheetName: currentSheetName,\n            sheetNames\n        };\n    } catch (error) {\n        // #region agent log\n        fetch('http://127.0.0.1:7242/ingest/c55d8f9b-e738-4e94-a1fc-550ceba6989a', {\n            method: 'POST',\n            headers: {\n                'Content-Type': 'application/json'\n            },\n            body: JSON.stringify({\n                location: 'pages/api/data/index.js:79',\n                message: 'Error in fetchGoogleSheetData',\n                data: {\n                    errorCode: error.code,\n                    errorMessage: error.message,\n                    errorType: error.constructor.name\n                },\n                timestamp: Date.now(),\n                sessionId: 'debug-session',\n                runId: 'run1',\n                hypothesisId: 'D'\n            })\n        }).catch(()=>{});\n        // #endregion\n        if (error instanceof SheetNotFoundError || error instanceof MalformedDataError || error instanceof InvalidContentError) {\n            throw error;\n        }\n        // Handle Google API errors\n        if (error.code === 404 || error.code === 'ENOTFOUND') {\n            throw new SheetNotFoundError(ExceptionMessages.SHEET_NOT_FOUND);\n        }\n        if (error.code === 403 || error.code === 'UNAUTHENTICATED') {\n            throw new SheetNotFoundError(ExceptionMessages.UNAUTHORIZED || 'Unauthorized access to sheet');\n        }\n        throw new SheetNotFoundError(ExceptionMessages.SHEET_NOT_FOUND || error.message);\n    }\n}\n// Fetch CSV data\nasync function fetchCSVData(url) {\n    try {\n        // Dynamically import d3 as it's ESM\n        const d3Module = await __webpack_require__.e(/*! import() */ \"vendor-chunks/d3\").then(__webpack_require__.bind(__webpack_require__, /*! d3 */ \"(api-node)/./node_modules/d3/src/index.js\"));\n        const d3Lib = d3Module.default || d3Module;\n        const response = await fetch(url);\n        if (!response.ok) {\n            throw new FileNotFoundError(`Oops! We can't find the CSV file you've entered`);\n        }\n        const csvText = await response.text();\n        const data = d3Lib.csvParse(csvText);\n        if (!data || data.length === 0) {\n            throw new InvalidContentError(ExceptionMessages.INVALID_CSV_CONTENT);\n        }\n        const columnNames = data.columns;\n        delete data.columns;\n        const contentValidator = new ContentValidator(columnNames);\n        contentValidator.verifyContent();\n        contentValidator.verifyHeaders();\n        const inputSanitizer = new InputSanitizer();\n        const blips = data.map((row)=>inputSanitizer.sanitize(row));\n        return {\n            title: getFileName(url).replace(/\\.csv$/, ''),\n            blips,\n            sheetName: 'CSV File',\n            sheetNames: []\n        };\n    } catch (error) {\n        if (error instanceof FileNotFoundError || error instanceof InvalidContentError || error instanceof MalformedDataError) {\n            throw error;\n        }\n        throw new FileNotFoundError(`Oops! We can't find the CSV file you've entered`);\n    }\n}\n// Fetch JSON data\nasync function fetchJSONData(url) {\n    try {\n        const response = await fetch(url);\n        if (!response.ok) {\n            throw new FileNotFoundError(`Oops! We can't find the JSON file you've entered`);\n        }\n        const data = await response.json();\n        if (!data || !Array.isArray(data) || data.length === 0) {\n            throw new InvalidContentError(ExceptionMessages.INVALID_JSON_CONTENT);\n        }\n        const columnNames = Object.keys(data[0]);\n        const contentValidator = new ContentValidator(columnNames);\n        contentValidator.verifyContent();\n        contentValidator.verifyHeaders();\n        const inputSanitizer = new InputSanitizer();\n        const blips = data.map((row)=>inputSanitizer.sanitize(row));\n        return {\n            title: getFileName(url).replace(/\\.json$/, ''),\n            blips,\n            sheetName: 'JSON File',\n            sheetNames: []\n        };\n    } catch (error) {\n        if (error instanceof FileNotFoundError || error instanceof InvalidContentError || error instanceof MalformedDataError) {\n            throw error;\n        }\n        throw new FileNotFoundError(`Oops! We can't find the JSON file you've entered`);\n    }\n}\n// Main API handler\nasync function handler(req, res) {\n    // #region agent log\n    fetch('http://127.0.0.1:7242/ingest/c55d8f9b-e738-4e94-a1fc-550ceba6989a', {\n        method: 'POST',\n        headers: {\n            'Content-Type': 'application/json'\n        },\n        body: JSON.stringify({\n            location: 'pages/api/data/index.js:173',\n            message: 'API handler called',\n            data: {\n                method: req.method,\n                hasDocumentId: !!req.query.documentId,\n                hasSheetId: !!req.query.sheetId\n            },\n            timestamp: Date.now(),\n            sessionId: 'debug-session',\n            runId: 'run1',\n            hypothesisId: 'E'\n        })\n    }).catch(()=>{});\n    // #endregion\n    if (req.method !== 'GET' && req.method !== 'POST') {\n        return res.status(405).json({\n            error: 'Method not allowed'\n        });\n    }\n    try {\n        const { documentId, sheetId, sheetName } = req.method === 'GET' ? req.query : req.body;\n        const sourceUrl = documentId || sheetId;\n        if (!sourceUrl) {\n            return res.status(400).json({\n                error: 'Missing documentId or sheetId parameter'\n            });\n        }\n        let result;\n        // Determine data source type and fetch accordingly\n        if (sourceUrl.endsWith('.csv')) {\n            result = await fetchCSVData(sourceUrl);\n        } else if (sourceUrl.endsWith('.json')) {\n            result = await fetchJSONData(sourceUrl);\n        } else {\n            // Assume it's a Google Sheet\n            const extractedSheetId = extractSheetId(sourceUrl);\n            // #region agent log\n            fetch('http://127.0.0.1:7242/ingest/c55d8f9b-e738-4e94-a1fc-550ceba6989a', {\n                method: 'POST',\n                headers: {\n                    'Content-Type': 'application/json'\n                },\n                body: JSON.stringify({\n                    location: 'pages/api/data/index.js:195',\n                    message: 'About to fetch Google Sheet',\n                    data: {\n                        extractedSheetId,\n                        sourceUrl\n                    },\n                    timestamp: Date.now(),\n                    sessionId: 'debug-session',\n                    runId: 'run1',\n                    hypothesisId: 'F'\n                })\n            }).catch(()=>{});\n            // #endregion\n            result = await fetchGoogleSheetData(extractedSheetId, sheetName);\n        }\n        return res.status(200).json(result);\n    } catch (error) {\n        console.error('Error fetching data:', error);\n        if (error instanceof FileNotFoundError) {\n            return res.status(404).json({\n                error: error.message || 'File not found'\n            });\n        }\n        if (error instanceof SheetNotFoundError) {\n            return res.status(404).json({\n                error: error.message || 'Sheet not found'\n            });\n        }\n        if (error instanceof InvalidContentError || error instanceof MalformedDataError) {\n            return res.status(400).json({\n                error: error.message || 'Invalid content'\n            });\n        }\n        return res.status(500).json({\n            error: error.message || 'Internal server error'\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUVBLE9BQU9rRixJQUFJMUQsTUFBTSxDQUFDLEtBQUtLLElBQUksQ0FBQzJEO0lBQzlCLEVBQUUsT0FBT2hDLE9BQU87UUFDZG1DLFFBQVFuQyxLQUFLLENBQUMsd0JBQXdCQTtRQUV0QyxJQUFJQSxpQkFBaUJ6RSxtQkFBbUI7WUFDdEMsT0FBT21HLElBQUkxRCxNQUFNLENBQUMsS0FBS0ssSUFBSSxDQUFDO2dCQUFFMkIsT0FBT0EsTUFBTTdDLE9BQU8sSUFBSTtZQUFpQjtRQUN6RTtRQUNBLElBQUk2QyxpQkFBaUJ4RSxvQkFBb0I7WUFDdkMsT0FBT2tHLElBQUkxRCxNQUFNLENBQUMsS0FBS0ssSUFBSSxDQUFDO2dCQUFFMkIsT0FBT0EsTUFBTTdDLE9BQU8sSUFBSTtZQUFrQjtRQUMxRTtRQUNBLElBQUk2QyxpQkFBaUJ2RSx1QkFBdUJ1RSxpQkFBaUJ0RSxvQkFBb0I7WUFDL0UsT0FBT2dHLElBQUkxRCxNQUFNLENBQUMsS0FBS0ssSUFBSSxDQUFDO2dCQUFFMkIsT0FBT0EsTUFBTTdDLE9BQU8sSUFBSTtZQUFrQjtRQUMxRTtRQUVBLE9BQU91RSxJQUFJMUQsTUFBTSxDQUFDLEtBQUtLLElBQUksQ0FBQztZQUFFMkIsT0FBT0EsTUFBTTdDLE9BQU8sSUFBSTtRQUF3QjtJQUNoRjtBQUNGIiwic291cmNlcyI6WyIvVXNlcnMvd2lsbGh1dGNoaW5zb24vRG9jdW1lbnRzL2RhdGEtYXJyYXkvcGFnZXMvYXBpL2RhdGEvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVXNlIEAgYWxpYXMgY29uZmlndXJlZCBpbiBuZXh0LmNvbmZpZy5qcyB3aGljaCBwb2ludHMgdG8gc3JjL1xuY29uc3QgSW5wdXRTYW5pdGl6ZXIgPSByZXF1aXJlKCdAL3V0aWwvaW5wdXRTYW5pdGl6ZXInKVxuY29uc3QgQ29udGVudFZhbGlkYXRvciA9IHJlcXVpcmUoJ0AvdXRpbC9jb250ZW50VmFsaWRhdG9yJylcbmNvbnN0IEZpbGVOb3RGb3VuZEVycm9yID0gcmVxdWlyZSgnQC9leGNlcHRpb25zL2ZpbGVOb3RGb3VuZEVycm9yJylcbmNvbnN0IFNoZWV0Tm90Rm91bmRFcnJvciA9IHJlcXVpcmUoJ0AvZXhjZXB0aW9ucy9zaGVldE5vdEZvdW5kRXJyb3InKVxuY29uc3QgSW52YWxpZENvbnRlbnRFcnJvciA9IHJlcXVpcmUoJ0AvZXhjZXB0aW9ucy9pbnZhbGlkQ29udGVudEVycm9yJylcbmNvbnN0IE1hbGZvcm1lZERhdGFFcnJvciA9IHJlcXVpcmUoJ0AvZXhjZXB0aW9ucy9tYWxmb3JtZWREYXRhRXJyb3InKVxuY29uc3QgRXhjZXB0aW9uTWVzc2FnZXMgPSByZXF1aXJlKCdAL3V0aWwvZXhjZXB0aW9uTWVzc2FnZXMnKVxuXG4vLyBIZWxwZXIgdG8gZXh0cmFjdCBzaGVldCBJRCBmcm9tIFVSTFxuZnVuY3Rpb24gZXh0cmFjdFNoZWV0SWQoc2hlZXRSZWZlcmVuY2UpIHtcbiAgY29uc3QgbWF0Y2hlcyA9IHNoZWV0UmVmZXJlbmNlLm1hdGNoKC9odHRwczpcXC9cXC9kb2NzLmdvb2dsZS5jb21cXC9zcHJlYWRzaGVldHNcXC9kXFwvKC4qPykoJHxcXC8kfFxcLy4qfFxcPy4qKS8pXG4gIHJldHVybiBtYXRjaGVzICE9PSBudWxsID8gbWF0Y2hlc1sxXSA6IHNoZWV0UmVmZXJlbmNlXG59XG5cbi8vIEhlbHBlciB0byBnZXQgZmlsZSBuYW1lIGZyb20gVVJMXG5mdW5jdGlvbiBnZXRGaWxlTmFtZSh1cmwpIHtcbiAgY29uc3Qgc2VhcmNoID0gLyhbXlxcXFwvXSspJC9cbiAgY29uc3QgbWF0Y2ggPSBzZWFyY2guZXhlYyhkZWNvZGVVUklDb21wb25lbnQodXJsLnJlcGxhY2UoL1xcKy9nLCAnICcpKSlcbiAgcmV0dXJuIG1hdGNoICE9IG51bGwgPyBtYXRjaFsxXSA6IHVybFxufVxuXG4vLyBGZXRjaCBHb29nbGUgU2hlZXRzIGRhdGFcbmFzeW5jIGZ1bmN0aW9uIGZldGNoR29vZ2xlU2hlZXREYXRhKHNoZWV0SWQsIHNoZWV0TmFtZSA9IG51bGwpIHtcbiAgY29uc3QgQVBJX0tFWSA9IHByb2Nlc3MuZW52LkFQSV9LRVlcblxuICAvLyAjcmVnaW9uIGFnZW50IGxvZ1xuICBmZXRjaCgnaHR0cDovLzEyNy4wLjAuMTo3MjQyL2luZ2VzdC9jNTVkOGY5Yi1lNzM4LTRlOTQtYTFmYy01NTBjZWJhNjk4OWEnLHttZXRob2Q6J1BPU1QnLGhlYWRlcnM6eydDb250ZW50LVR5cGUnOidhcHBsaWNhdGlvbi9qc29uJ30sYm9keTpKU09OLnN0cmluZ2lmeSh7bG9jYXRpb246J3BhZ2VzL2FwaS9kYXRhL2luZGV4LmpzOjI4JyxtZXNzYWdlOidTdGFydGluZyBmZXRjaEdvb2dsZVNoZWV0RGF0YScsZGF0YTp7c2hlZXRJZCxoYXNBcGlLZXk6ISFBUElfS0VZfSx0aW1lc3RhbXA6RGF0ZS5ub3coKSxzZXNzaW9uSWQ6J2RlYnVnLXNlc3Npb24nLHJ1bklkOidydW4xJyxoeXBvdGhlc2lzSWQ6J0EnfSl9KS5jYXRjaCgoKT0+e30pO1xuICAvLyAjZW5kcmVnaW9uXG5cbiAgdHJ5IHtcbiAgICAvLyBGb3IgcHVibGljIEdvb2dsZSBTaGVldHMsIHVzZSB0aGUgQVBJIGRpcmVjdGx5IHdpdGggQVBJIGtleVxuICAgIC8vIFRoaXMgaXMgc2ltcGxlciBhbmQgbW9yZSByZWxpYWJsZSB0aGFuIGdvb2dsZWFwaXMgZm9yIHB1YmxpYyBzaGVldHNcbiAgICBpZiAoIUFQSV9LRVkpIHtcbiAgICAgIHRocm93IG5ldyBTaGVldE5vdEZvdW5kRXJyb3IoJ0FQSV9LRVkgZW52aXJvbm1lbnQgdmFyaWFibGUgaXMgcmVxdWlyZWQgZm9yIEdvb2dsZSBTaGVldHMgYWNjZXNzJylcbiAgICB9XG5cbiAgICAvLyBHZXQgc3ByZWFkc2hlZXQgbWV0YWRhdGFcbiAgICBjb25zdCBtZXRhZGF0YVVybCA9IGBodHRwczovL3NoZWV0cy5nb29nbGVhcGlzLmNvbS92NC9zcHJlYWRzaGVldHMvJHtzaGVldElkfT9rZXk9JHtBUElfS0VZfWBcbiAgICBjb25zdCBtZXRhZGF0YVJlc3BvbnNlID0gYXdhaXQgZmV0Y2gobWV0YWRhdGFVcmwpXG4gICAgXG4gICAgaWYgKCFtZXRhZGF0YVJlc3BvbnNlLm9rKSB7XG4gICAgICBpZiAobWV0YWRhdGFSZXNwb25zZS5zdGF0dXMgPT09IDQwNCkge1xuICAgICAgICB0aHJvdyBuZXcgU2hlZXROb3RGb3VuZEVycm9yKEV4Y2VwdGlvbk1lc3NhZ2VzLlNIRUVUX05PVF9GT1VORClcbiAgICAgIH1cbiAgICAgIGlmIChtZXRhZGF0YVJlc3BvbnNlLnN0YXR1cyA9PT0gNDAzKSB7XG4gICAgICAgIHRocm93IG5ldyBTaGVldE5vdEZvdW5kRXJyb3IoRXhjZXB0aW9uTWVzc2FnZXMuVU5BVVRIT1JJWkVEIHx8ICdVbmF1dGhvcml6ZWQgYWNjZXNzIHRvIHNoZWV0JylcbiAgICAgIH1cbiAgICAgIHRocm93IG5ldyBFcnJvcihgR29vZ2xlIFNoZWV0cyBBUEkgZXJyb3I6ICR7bWV0YWRhdGFSZXNwb25zZS5zdGF0dXN9YClcbiAgICB9XG5cbiAgICBjb25zdCBzcHJlYWRzaGVldCA9IGF3YWl0IG1ldGFkYXRhUmVzcG9uc2UuanNvbigpXG4gICAgY29uc3Qgc2hlZXROYW1lcyA9IHNwcmVhZHNoZWV0LnNoZWV0cy5tYXAoKHMpID0+IHMucHJvcGVydGllcy50aXRsZSlcbiAgICBjb25zdCBjdXJyZW50U2hlZXROYW1lID0gc2hlZXROYW1lIHx8IHNoZWV0TmFtZXNbMF1cblxuICAgIC8vIEdldCBzaGVldCBkYXRhXG4gICAgY29uc3QgZGF0YVVybCA9IGBodHRwczovL3NoZWV0cy5nb29nbGVhcGlzLmNvbS92NC9zcHJlYWRzaGVldHMvJHtzaGVldElkfS92YWx1ZXMvJHtlbmNvZGVVUklDb21wb25lbnQoY3VycmVudFNoZWV0TmFtZSl9IUExOkY/a2V5PSR7QVBJX0tFWX1gXG4gICAgY29uc3QgZGF0YVJlc3BvbnNlID0gYXdhaXQgZmV0Y2goZGF0YVVybClcbiAgICBcbiAgICBpZiAoIWRhdGFSZXNwb25zZS5vaykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gZmV0Y2ggc2hlZXQgZGF0YTogJHtkYXRhUmVzcG9uc2Uuc3RhdHVzfWApXG4gICAgfVxuXG4gICAgY29uc3QgZGF0YVJlc3VsdCA9IGF3YWl0IGRhdGFSZXNwb25zZS5qc29uKClcbiAgICBjb25zdCB2YWx1ZXMgPSBkYXRhUmVzdWx0LnZhbHVlc1xuXG4gICAgLy8gI3JlZ2lvbiBhZ2VudCBsb2dcbiAgICBmZXRjaCgnaHR0cDovLzEyNy4wLjAuMTo3MjQyL2luZ2VzdC9jNTVkOGY5Yi1lNzM4LTRlOTQtYTFmYy01NTBjZWJhNjk4OWEnLHttZXRob2Q6J1BPU1QnLGhlYWRlcnM6eydDb250ZW50LVR5cGUnOidhcHBsaWNhdGlvbi9qc29uJ30sYm9keTpKU09OLnN0cmluZ2lmeSh7bG9jYXRpb246J3BhZ2VzL2FwaS9kYXRhL2luZGV4LmpzOjU5JyxtZXNzYWdlOidHb3Qgc3ByZWFkc2hlZXQgZGF0YScsZGF0YTp7aGFzVmFsdWVzOiEhdmFsdWVzLHZhbHVlQ291bnQ6dmFsdWVzPy5sZW5ndGh9LHRpbWVzdGFtcDpEYXRlLm5vdygpLHNlc3Npb25JZDonZGVidWctc2Vzc2lvbicscnVuSWQ6J3J1bjEnLGh5cG90aGVzaXNJZDonQyd9KX0pLmNhdGNoKCgpPT57fSk7XG4gICAgLy8gI2VuZHJlZ2lvblxuICAgIGlmICghdmFsdWVzIHx8IHZhbHVlcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHRocm93IG5ldyBNYWxmb3JtZWREYXRhRXJyb3IoRXhjZXB0aW9uTWVzc2FnZXMuTUlTU0lOR19DT05URU5UKVxuICAgIH1cblxuICAgIC8vIFZhbGlkYXRlIGhlYWRlcnNcbiAgICBjb25zdCBoZWFkZXIgPSB2YWx1ZXNbMF1cbiAgICBjb25zdCBjb250ZW50VmFsaWRhdG9yID0gbmV3IENvbnRlbnRWYWxpZGF0b3IoaGVhZGVyKVxuICAgIGNvbnRlbnRWYWxpZGF0b3IudmVyaWZ5Q29udGVudCgpXG4gICAgY29udGVudFZhbGlkYXRvci52ZXJpZnlIZWFkZXJzKClcblxuICAgIC8vIFByb2Nlc3MgZGF0YSByb3dzXG4gICAgY29uc3QgZGF0YVJvd3MgPSB2YWx1ZXMuc2xpY2UoMSlcbiAgICBjb25zdCBpbnB1dFNhbml0aXplciA9IG5ldyBJbnB1dFNhbml0aXplcigpXG4gICAgY29uc3QgYmxpcHMgPSBkYXRhUm93cy5tYXAoKHJvdykgPT4gaW5wdXRTYW5pdGl6ZXIuc2FuaXRpemVGb3JQcm90ZWN0ZWRTaGVldChyb3csIGhlYWRlcikpXG5cbiAgICByZXR1cm4ge1xuICAgICAgdGl0bGU6IHNwcmVhZHNoZWV0LnByb3BlcnRpZXMudGl0bGUsXG4gICAgICBibGlwcyxcbiAgICAgIHNoZWV0TmFtZTogY3VycmVudFNoZWV0TmFtZSxcbiAgICAgIHNoZWV0TmFtZXMsXG4gICAgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIC8vICNyZWdpb24gYWdlbnQgbG9nXG4gICAgZmV0Y2goJ2h0dHA6Ly8xMjcuMC4wLjE6NzI0Mi9pbmdlc3QvYzU1ZDhmOWItZTczOC00ZTk0LWExZmMtNTUwY2ViYTY5ODlhJyx7bWV0aG9kOidQT1NUJyxoZWFkZXJzOnsnQ29udGVudC1UeXBlJzonYXBwbGljYXRpb24vanNvbid9LGJvZHk6SlNPTi5zdHJpbmdpZnkoe2xvY2F0aW9uOidwYWdlcy9hcGkvZGF0YS9pbmRleC5qczo3OScsbWVzc2FnZTonRXJyb3IgaW4gZmV0Y2hHb29nbGVTaGVldERhdGEnLGRhdGE6e2Vycm9yQ29kZTplcnJvci5jb2RlLGVycm9yTWVzc2FnZTplcnJvci5tZXNzYWdlLGVycm9yVHlwZTplcnJvci5jb25zdHJ1Y3Rvci5uYW1lfSx0aW1lc3RhbXA6RGF0ZS5ub3coKSxzZXNzaW9uSWQ6J2RlYnVnLXNlc3Npb24nLHJ1bklkOidydW4xJyxoeXBvdGhlc2lzSWQ6J0QnfSl9KS5jYXRjaCgoKT0+e30pO1xuICAgIC8vICNlbmRyZWdpb25cblxuICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIFNoZWV0Tm90Rm91bmRFcnJvciB8fCBlcnJvciBpbnN0YW5jZW9mIE1hbGZvcm1lZERhdGFFcnJvciB8fCBlcnJvciBpbnN0YW5jZW9mIEludmFsaWRDb250ZW50RXJyb3IpIHtcbiAgICAgIHRocm93IGVycm9yXG4gICAgfVxuICAgIC8vIEhhbmRsZSBHb29nbGUgQVBJIGVycm9yc1xuICAgIGlmIChlcnJvci5jb2RlID09PSA0MDQgfHwgZXJyb3IuY29kZSA9PT0gJ0VOT1RGT1VORCcpIHtcbiAgICAgIHRocm93IG5ldyBTaGVldE5vdEZvdW5kRXJyb3IoRXhjZXB0aW9uTWVzc2FnZXMuU0hFRVRfTk9UX0ZPVU5EKVxuICAgIH1cbiAgICBpZiAoZXJyb3IuY29kZSA9PT0gNDAzIHx8IGVycm9yLmNvZGUgPT09ICdVTkFVVEhFTlRJQ0FURUQnKSB7XG4gICAgICB0aHJvdyBuZXcgU2hlZXROb3RGb3VuZEVycm9yKEV4Y2VwdGlvbk1lc3NhZ2VzLlVOQVVUSE9SSVpFRCB8fCAnVW5hdXRob3JpemVkIGFjY2VzcyB0byBzaGVldCcpXG4gICAgfVxuICAgIHRocm93IG5ldyBTaGVldE5vdEZvdW5kRXJyb3IoRXhjZXB0aW9uTWVzc2FnZXMuU0hFRVRfTk9UX0ZPVU5EIHx8IGVycm9yLm1lc3NhZ2UpXG4gIH1cbn1cblxuLy8gRmV0Y2ggQ1NWIGRhdGFcbmFzeW5jIGZ1bmN0aW9uIGZldGNoQ1NWRGF0YSh1cmwpIHtcbiAgdHJ5IHtcbiAgICAvLyBEeW5hbWljYWxseSBpbXBvcnQgZDMgYXMgaXQncyBFU01cbiAgICBjb25zdCBkM01vZHVsZSA9IGF3YWl0IGltcG9ydCgnZDMnKVxuICAgIGNvbnN0IGQzTGliID0gZDNNb2R1bGUuZGVmYXVsdCB8fCBkM01vZHVsZVxuICAgIFxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsKVxuICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgIHRocm93IG5ldyBGaWxlTm90Rm91bmRFcnJvcihgT29wcyEgV2UgY2FuJ3QgZmluZCB0aGUgQ1NWIGZpbGUgeW91J3ZlIGVudGVyZWRgKVxuICAgIH1cbiAgICBcbiAgICBjb25zdCBjc3ZUZXh0ID0gYXdhaXQgcmVzcG9uc2UudGV4dCgpXG4gICAgY29uc3QgZGF0YSA9IGQzTGliLmNzdlBhcnNlKGNzdlRleHQpXG4gICAgXG4gICAgaWYgKCFkYXRhIHx8IGRhdGEubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aHJvdyBuZXcgSW52YWxpZENvbnRlbnRFcnJvcihFeGNlcHRpb25NZXNzYWdlcy5JTlZBTElEX0NTVl9DT05URU5UKVxuICAgIH1cblxuICAgIGNvbnN0IGNvbHVtbk5hbWVzID0gZGF0YS5jb2x1bW5zXG4gICAgZGVsZXRlIGRhdGEuY29sdW1uc1xuXG4gICAgY29uc3QgY29udGVudFZhbGlkYXRvciA9IG5ldyBDb250ZW50VmFsaWRhdG9yKGNvbHVtbk5hbWVzKVxuICAgIGNvbnRlbnRWYWxpZGF0b3IudmVyaWZ5Q29udGVudCgpXG4gICAgY29udGVudFZhbGlkYXRvci52ZXJpZnlIZWFkZXJzKClcblxuICAgIGNvbnN0IGlucHV0U2FuaXRpemVyID0gbmV3IElucHV0U2FuaXRpemVyKClcbiAgICBjb25zdCBibGlwcyA9IGRhdGEubWFwKChyb3cpID0+IGlucHV0U2FuaXRpemVyLnNhbml0aXplKHJvdykpXG5cbiAgICByZXR1cm4ge1xuICAgICAgdGl0bGU6IGdldEZpbGVOYW1lKHVybCkucmVwbGFjZSgvXFwuY3N2JC8sICcnKSxcbiAgICAgIGJsaXBzLFxuICAgICAgc2hlZXROYW1lOiAnQ1NWIEZpbGUnLFxuICAgICAgc2hlZXROYW1lczogW10sXG4gICAgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEZpbGVOb3RGb3VuZEVycm9yIHx8IGVycm9yIGluc3RhbmNlb2YgSW52YWxpZENvbnRlbnRFcnJvciB8fCBlcnJvciBpbnN0YW5jZW9mIE1hbGZvcm1lZERhdGFFcnJvcikge1xuICAgICAgdGhyb3cgZXJyb3JcbiAgICB9XG4gICAgdGhyb3cgbmV3IEZpbGVOb3RGb3VuZEVycm9yKGBPb3BzISBXZSBjYW4ndCBmaW5kIHRoZSBDU1YgZmlsZSB5b3UndmUgZW50ZXJlZGApXG4gIH1cbn1cblxuLy8gRmV0Y2ggSlNPTiBkYXRhXG5hc3luYyBmdW5jdGlvbiBmZXRjaEpTT05EYXRhKHVybCkge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsKVxuICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgIHRocm93IG5ldyBGaWxlTm90Rm91bmRFcnJvcihgT29wcyEgV2UgY2FuJ3QgZmluZCB0aGUgSlNPTiBmaWxlIHlvdSd2ZSBlbnRlcmVkYClcbiAgICB9XG4gICAgXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxuICAgIFxuICAgIGlmICghZGF0YSB8fCAhQXJyYXkuaXNBcnJheShkYXRhKSB8fCBkYXRhLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhyb3cgbmV3IEludmFsaWRDb250ZW50RXJyb3IoRXhjZXB0aW9uTWVzc2FnZXMuSU5WQUxJRF9KU09OX0NPTlRFTlQpXG4gICAgfVxuXG4gICAgY29uc3QgY29sdW1uTmFtZXMgPSBPYmplY3Qua2V5cyhkYXRhWzBdKVxuICAgIGNvbnN0IGNvbnRlbnRWYWxpZGF0b3IgPSBuZXcgQ29udGVudFZhbGlkYXRvcihjb2x1bW5OYW1lcylcbiAgICBjb250ZW50VmFsaWRhdG9yLnZlcmlmeUNvbnRlbnQoKVxuICAgIGNvbnRlbnRWYWxpZGF0b3IudmVyaWZ5SGVhZGVycygpXG5cbiAgICBjb25zdCBpbnB1dFNhbml0aXplciA9IG5ldyBJbnB1dFNhbml0aXplcigpXG4gICAgY29uc3QgYmxpcHMgPSBkYXRhLm1hcCgocm93KSA9PiBpbnB1dFNhbml0aXplci5zYW5pdGl6ZShyb3cpKVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHRpdGxlOiBnZXRGaWxlTmFtZSh1cmwpLnJlcGxhY2UoL1xcLmpzb24kLywgJycpLFxuICAgICAgYmxpcHMsXG4gICAgICBzaGVldE5hbWU6ICdKU09OIEZpbGUnLFxuICAgICAgc2hlZXROYW1lczogW10sXG4gICAgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEZpbGVOb3RGb3VuZEVycm9yIHx8IGVycm9yIGluc3RhbmNlb2YgSW52YWxpZENvbnRlbnRFcnJvciB8fCBlcnJvciBpbnN0YW5jZW9mIE1hbGZvcm1lZERhdGFFcnJvcikge1xuICAgICAgdGhyb3cgZXJyb3JcbiAgICB9XG4gICAgdGhyb3cgbmV3IEZpbGVOb3RGb3VuZEVycm9yKGBPb3BzISBXZSBjYW4ndCBmaW5kIHRoZSBKU09OIGZpbGUgeW91J3ZlIGVudGVyZWRgKVxuICB9XG59XG5cbi8vIE1haW4gQVBJIGhhbmRsZXJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcbiAgLy8gI3JlZ2lvbiBhZ2VudCBsb2dcbiAgZmV0Y2goJ2h0dHA6Ly8xMjcuMC4wLjE6NzI0Mi9pbmdlc3QvYzU1ZDhmOWItZTczOC00ZTk0LWExZmMtNTUwY2ViYTY5ODlhJyx7bWV0aG9kOidQT1NUJyxoZWFkZXJzOnsnQ29udGVudC1UeXBlJzonYXBwbGljYXRpb24vanNvbid9LGJvZHk6SlNPTi5zdHJpbmdpZnkoe2xvY2F0aW9uOidwYWdlcy9hcGkvZGF0YS9pbmRleC5qczoxNzMnLG1lc3NhZ2U6J0FQSSBoYW5kbGVyIGNhbGxlZCcsZGF0YTp7bWV0aG9kOnJlcS5tZXRob2QsaGFzRG9jdW1lbnRJZDohIXJlcS5xdWVyeS5kb2N1bWVudElkLGhhc1NoZWV0SWQ6ISFyZXEucXVlcnkuc2hlZXRJZH0sdGltZXN0YW1wOkRhdGUubm93KCksc2Vzc2lvbklkOidkZWJ1Zy1zZXNzaW9uJyxydW5JZDoncnVuMScsaHlwb3RoZXNpc0lkOidFJ30pfSkuY2F0Y2goKCk9Pnt9KTtcbiAgLy8gI2VuZHJlZ2lvblxuXG4gIGlmIChyZXEubWV0aG9kICE9PSAnR0VUJyAmJiByZXEubWV0aG9kICE9PSAnUE9TVCcpIHtcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDUpLmpzb24oeyBlcnJvcjogJ01ldGhvZCBub3QgYWxsb3dlZCcgfSlcbiAgfVxuXG4gIHRyeSB7XG4gICAgY29uc3QgeyBkb2N1bWVudElkLCBzaGVldElkLCBzaGVldE5hbWUgfSA9IHJlcS5tZXRob2QgPT09ICdHRVQnID8gcmVxLnF1ZXJ5IDogcmVxLmJvZHlcbiAgICBjb25zdCBzb3VyY2VVcmwgPSBkb2N1bWVudElkIHx8IHNoZWV0SWRcblxuICAgIGlmICghc291cmNlVXJsKSB7XG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oeyBlcnJvcjogJ01pc3NpbmcgZG9jdW1lbnRJZCBvciBzaGVldElkIHBhcmFtZXRlcicgfSlcbiAgICB9XG5cbiAgICBsZXQgcmVzdWx0XG5cbiAgICAvLyBEZXRlcm1pbmUgZGF0YSBzb3VyY2UgdHlwZSBhbmQgZmV0Y2ggYWNjb3JkaW5nbHlcbiAgICBpZiAoc291cmNlVXJsLmVuZHNXaXRoKCcuY3N2JykpIHtcbiAgICAgIHJlc3VsdCA9IGF3YWl0IGZldGNoQ1NWRGF0YShzb3VyY2VVcmwpXG4gICAgfSBlbHNlIGlmIChzb3VyY2VVcmwuZW5kc1dpdGgoJy5qc29uJykpIHtcbiAgICAgIHJlc3VsdCA9IGF3YWl0IGZldGNoSlNPTkRhdGEoc291cmNlVXJsKVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBBc3N1bWUgaXQncyBhIEdvb2dsZSBTaGVldFxuICAgICAgY29uc3QgZXh0cmFjdGVkU2hlZXRJZCA9IGV4dHJhY3RTaGVldElkKHNvdXJjZVVybClcbiAgICAgIFxuICAgICAgLy8gI3JlZ2lvbiBhZ2VudCBsb2dcbiAgICAgIGZldGNoKCdodHRwOi8vMTI3LjAuMC4xOjcyNDIvaW5nZXN0L2M1NWQ4ZjliLWU3MzgtNGU5NC1hMWZjLTU1MGNlYmE2OTg5YScse21ldGhvZDonUE9TVCcsaGVhZGVyczp7J0NvbnRlbnQtVHlwZSc6J2FwcGxpY2F0aW9uL2pzb24nfSxib2R5OkpTT04uc3RyaW5naWZ5KHtsb2NhdGlvbjoncGFnZXMvYXBpL2RhdGEvaW5kZXguanM6MTk1JyxtZXNzYWdlOidBYm91dCB0byBmZXRjaCBHb29nbGUgU2hlZXQnLGRhdGE6e2V4dHJhY3RlZFNoZWV0SWQsc291cmNlVXJsfSx0aW1lc3RhbXA6RGF0ZS5ub3coKSxzZXNzaW9uSWQ6J2RlYnVnLXNlc3Npb24nLHJ1bklkOidydW4xJyxoeXBvdGhlc2lzSWQ6J0YnfSl9KS5jYXRjaCgoKT0+e30pO1xuICAgICAgLy8gI2VuZHJlZ2lvblxuICAgICAgXG4gICAgICByZXN1bHQgPSBhd2FpdCBmZXRjaEdvb2dsZVNoZWV0RGF0YShleHRyYWN0ZWRTaGVldElkLCBzaGVldE5hbWUpXG4gICAgfVxuXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHJlc3VsdClcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBkYXRhOicsIGVycm9yKVxuXG4gICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRmlsZU5vdEZvdW5kRXJyb3IpIHtcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwNCkuanNvbih7IGVycm9yOiBlcnJvci5tZXNzYWdlIHx8ICdGaWxlIG5vdCBmb3VuZCcgfSlcbiAgICB9XG4gICAgaWYgKGVycm9yIGluc3RhbmNlb2YgU2hlZXROb3RGb3VuZEVycm9yKSB7XG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDQpLmpzb24oeyBlcnJvcjogZXJyb3IubWVzc2FnZSB8fCAnU2hlZXQgbm90IGZvdW5kJyB9KVxuICAgIH1cbiAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBJbnZhbGlkQ29udGVudEVycm9yIHx8IGVycm9yIGluc3RhbmNlb2YgTWFsZm9ybWVkRGF0YUVycm9yKSB7XG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oeyBlcnJvcjogZXJyb3IubWVzc2FnZSB8fCAnSW52YWxpZCBjb250ZW50JyB9KVxuICAgIH1cblxuICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IGVycm9yOiBlcnJvci5tZXNzYWdlIHx8ICdJbnRlcm5hbCBzZXJ2ZXIgZXJyb3InIH0pXG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJJbnB1dFNhbml0aXplciIsInJlcXVpcmUiLCJDb250ZW50VmFsaWRhdG9yIiwiRmlsZU5vdEZvdW5kRXJyb3IiLCJTaGVldE5vdEZvdW5kRXJyb3IiLCJJbnZhbGlkQ29udGVudEVycm9yIiwiTWFsZm9ybWVkRGF0YUVycm9yIiwiRXhjZXB0aW9uTWVzc2FnZXMiLCJleHRyYWN0U2hlZXRJZCIsInNoZWV0UmVmZXJlbmNlIiwibWF0Y2hlcyIsIm1hdGNoIiwiZ2V0RmlsZU5hbWUiLCJ1cmwiLCJzZWFyY2giLCJleGVjIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwicmVwbGFjZSIsImZldGNoR29vZ2xlU2hlZXREYXRhIiwic2hlZXRJZCIsInNoZWV0TmFtZSIsIkFQSV9LRVkiLCJwcm9jZXNzIiwiZW52IiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJsb2NhdGlvbiIsIm1lc3NhZ2UiLCJkYXRhIiwiaGFzQXBpS2V5IiwidGltZXN0YW1wIiwiRGF0ZSIsIm5vdyIsInNlc3Npb25JZCIsInJ1bklkIiwiaHlwb3RoZXNpc0lkIiwiY2F0Y2giLCJtZXRhZGF0YVVybCIsIm1ldGFkYXRhUmVzcG9uc2UiLCJvayIsInN0YXR1cyIsIlNIRUVUX05PVF9GT1VORCIsIlVOQVVUSE9SSVpFRCIsIkVycm9yIiwic3ByZWFkc2hlZXQiLCJqc29uIiwic2hlZXROYW1lcyIsInNoZWV0cyIsIm1hcCIsInMiLCJwcm9wZXJ0aWVzIiwidGl0bGUiLCJjdXJyZW50U2hlZXROYW1lIiwiZGF0YVVybCIsImVuY29kZVVSSUNvbXBvbmVudCIsImRhdGFSZXNwb25zZSIsImRhdGFSZXN1bHQiLCJ2YWx1ZXMiLCJoYXNWYWx1ZXMiLCJ2YWx1ZUNvdW50IiwibGVuZ3RoIiwiTUlTU0lOR19DT05URU5UIiwiaGVhZGVyIiwiY29udGVudFZhbGlkYXRvciIsInZlcmlmeUNvbnRlbnQiLCJ2ZXJpZnlIZWFkZXJzIiwiZGF0YVJvd3MiLCJzbGljZSIsImlucHV0U2FuaXRpemVyIiwiYmxpcHMiLCJyb3ciLCJzYW5pdGl6ZUZvclByb3RlY3RlZFNoZWV0IiwiZXJyb3IiLCJlcnJvckNvZGUiLCJjb2RlIiwiZXJyb3JNZXNzYWdlIiwiZXJyb3JUeXBlIiwibmFtZSIsImZldGNoQ1NWRGF0YSIsImQzTW9kdWxlIiwiZDNMaWIiLCJkZWZhdWx0IiwicmVzcG9uc2UiLCJjc3ZUZXh0IiwidGV4dCIsImNzdlBhcnNlIiwiSU5WQUxJRF9DU1ZfQ09OVEVOVCIsImNvbHVtbk5hbWVzIiwiY29sdW1ucyIsInNhbml0aXplIiwiZmV0Y2hKU09ORGF0YSIsIkFycmF5IiwiaXNBcnJheSIsIklOVkFMSURfSlNPTl9DT05URU5UIiwiT2JqZWN0Iiwia2V5cyIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJoYXNEb2N1bWVudElkIiwicXVlcnkiLCJkb2N1bWVudElkIiwiaGFzU2hlZXRJZCIsInNvdXJjZVVybCIsInJlc3VsdCIsImVuZHNXaXRoIiwiZXh0cmFjdGVkU2hlZXRJZCIsImNvbnNvbGUiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api-node)/./pages/api/data/index.js\n");

/***/ }),

/***/ "(api-node)/./src/exceptions/fileNotFoundError.js":
/*!*********************************************!*\
  !*** ./src/exceptions/fileNotFoundError.js ***!
  \*********************************************/
/***/ ((module) => {

eval("\nclass FileNotFoundError extends Error {\n    constructor(message){\n        super(message);\n        this.message = message;\n    }\n}\nmodule.exports = FileNotFoundError;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaS1ub2RlKS8uL3NyYy9leGNlcHRpb25zL2ZpbGVOb3RGb3VuZEVycm9yLmpzIiwibWFwcGluZ3MiOiI7QUFBQSxNQUFNQSwwQkFBMEJDO0lBQzlCLFlBQVlDLE9BQU8sQ0FBRTtRQUNuQixLQUFLLENBQUNBO1FBQ04sSUFBSSxDQUFDQSxPQUFPLEdBQUdBO0lBQ2pCO0FBQ0Y7QUFFQUMsT0FBT0MsT0FBTyxHQUFHSiIsInNvdXJjZXMiOlsiL1VzZXJzL3dpbGxodXRjaGluc29uL0RvY3VtZW50cy9kYXRhLWFycmF5L3NyYy9leGNlcHRpb25zL2ZpbGVOb3RGb3VuZEVycm9yLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEZpbGVOb3RGb3VuZEVycm9yIGV4dGVuZHMgRXJyb3Ige1xuICBjb25zdHJ1Y3RvcihtZXNzYWdlKSB7XG4gICAgc3VwZXIobWVzc2FnZSlcbiAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBGaWxlTm90Rm91bmRFcnJvclxuIl0sIm5hbWVzIjpbIkZpbGVOb3RGb3VuZEVycm9yIiwiRXJyb3IiLCJtZXNzYWdlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api-node)/./src/exceptions/fileNotFoundError.js\n");

/***/ }),

/***/ "(api-node)/./src/exceptions/invalidContentError.js":
/*!***********************************************!*\
  !*** ./src/exceptions/invalidContentError.js ***!
  \***********************************************/
/***/ ((module) => {

eval("\nclass InvalidContentError extends Error {\n    constructor(message){\n        super(message);\n        this.message = message;\n    }\n}\nmodule.exports = InvalidContentError;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaS1ub2RlKS8uL3NyYy9leGNlcHRpb25zL2ludmFsaWRDb250ZW50RXJyb3IuanMiLCJtYXBwaW5ncyI6IjtBQUFBLE1BQU1BLDRCQUE0QkM7SUFDaEMsWUFBWUMsT0FBTyxDQUFFO1FBQ25CLEtBQUssQ0FBQ0E7UUFDTixJQUFJLENBQUNBLE9BQU8sR0FBR0E7SUFDakI7QUFDRjtBQUVBQyxPQUFPQyxPQUFPLEdBQUdKIiwic291cmNlcyI6WyIvVXNlcnMvd2lsbGh1dGNoaW5zb24vRG9jdW1lbnRzL2RhdGEtYXJyYXkvc3JjL2V4Y2VwdGlvbnMvaW52YWxpZENvbnRlbnRFcnJvci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBJbnZhbGlkQ29udGVudEVycm9yIGV4dGVuZHMgRXJyb3Ige1xuICBjb25zdHJ1Y3RvcihtZXNzYWdlKSB7XG4gICAgc3VwZXIobWVzc2FnZSlcbiAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBJbnZhbGlkQ29udGVudEVycm9yXG4iXSwibmFtZXMiOlsiSW52YWxpZENvbnRlbnRFcnJvciIsIkVycm9yIiwibWVzc2FnZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api-node)/./src/exceptions/invalidContentError.js\n");

/***/ }),

/***/ "(api-node)/./src/exceptions/malformedDataError.js":
/*!**********************************************!*\
  !*** ./src/exceptions/malformedDataError.js ***!
  \**********************************************/
/***/ ((module) => {

eval("\nconst MalformedDataError = function(message) {\n    this.message = message;\n};\nObject.setPrototypeOf(MalformedDataError, Error);\nMalformedDataError.prototype = Object.create(Error.prototype);\nMalformedDataError.prototype.name = 'MalformedDataError';\nMalformedDataError.prototype.message = '';\nMalformedDataError.prototype.constructor = MalformedDataError;\nmodule.exports = MalformedDataError;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaS1ub2RlKS8uL3NyYy9leGNlcHRpb25zL21hbGZvcm1lZERhdGFFcnJvci5qcyIsIm1hcHBpbmdzIjoiO0FBQUEsTUFBTUEscUJBQXFCLFNBQVVDLE9BQU87SUFDMUMsSUFBSSxDQUFDQSxPQUFPLEdBQUdBO0FBQ2pCO0FBRUFDLE9BQU9DLGNBQWMsQ0FBQ0gsb0JBQW9CSTtBQUMxQ0osbUJBQW1CSyxTQUFTLEdBQUdILE9BQU9JLE1BQU0sQ0FBQ0YsTUFBTUMsU0FBUztBQUM1REwsbUJBQW1CSyxTQUFTLENBQUNFLElBQUksR0FBRztBQUNwQ1AsbUJBQW1CSyxTQUFTLENBQUNKLE9BQU8sR0FBRztBQUN2Q0QsbUJBQW1CSyxTQUFTLENBQUMsV0FBVyxHQUFHTDtBQUUzQ1EsT0FBT0MsT0FBTyxHQUFHVCIsInNvdXJjZXMiOlsiL1VzZXJzL3dpbGxodXRjaGluc29uL0RvY3VtZW50cy9kYXRhLWFycmF5L3NyYy9leGNlcHRpb25zL21hbGZvcm1lZERhdGFFcnJvci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBNYWxmb3JtZWREYXRhRXJyb3IgPSBmdW5jdGlvbiAobWVzc2FnZSkge1xuICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlXG59XG5cbk9iamVjdC5zZXRQcm90b3R5cGVPZihNYWxmb3JtZWREYXRhRXJyb3IsIEVycm9yKVxuTWFsZm9ybWVkRGF0YUVycm9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoRXJyb3IucHJvdG90eXBlKVxuTWFsZm9ybWVkRGF0YUVycm9yLnByb3RvdHlwZS5uYW1lID0gJ01hbGZvcm1lZERhdGFFcnJvcidcbk1hbGZvcm1lZERhdGFFcnJvci5wcm90b3R5cGUubWVzc2FnZSA9ICcnXG5NYWxmb3JtZWREYXRhRXJyb3IucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gTWFsZm9ybWVkRGF0YUVycm9yXG5cbm1vZHVsZS5leHBvcnRzID0gTWFsZm9ybWVkRGF0YUVycm9yXG4iXSwibmFtZXMiOlsiTWFsZm9ybWVkRGF0YUVycm9yIiwibWVzc2FnZSIsIk9iamVjdCIsInNldFByb3RvdHlwZU9mIiwiRXJyb3IiLCJwcm90b3R5cGUiLCJjcmVhdGUiLCJuYW1lIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api-node)/./src/exceptions/malformedDataError.js\n");

/***/ }),

/***/ "(api-node)/./src/exceptions/sheetNotFoundError.js":
/*!**********************************************!*\
  !*** ./src/exceptions/sheetNotFoundError.js ***!
  \**********************************************/
/***/ ((module) => {

eval("\nconst SheetNotFoundError = function(message) {\n    this.message = message;\n};\nObject.setPrototypeOf(SheetNotFoundError, Error);\nSheetNotFoundError.prototype = Object.create(Error.prototype);\nSheetNotFoundError.prototype.name = 'SheetNotFoundError';\nSheetNotFoundError.prototype.message = '';\nSheetNotFoundError.prototype.constructor = SheetNotFoundError;\nmodule.exports = SheetNotFoundError;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaS1ub2RlKS8uL3NyYy9leGNlcHRpb25zL3NoZWV0Tm90Rm91bmRFcnJvci5qcyIsIm1hcHBpbmdzIjoiO0FBQUEsTUFBTUEscUJBQXFCLFNBQVVDLE9BQU87SUFDMUMsSUFBSSxDQUFDQSxPQUFPLEdBQUdBO0FBQ2pCO0FBRUFDLE9BQU9DLGNBQWMsQ0FBQ0gsb0JBQW9CSTtBQUMxQ0osbUJBQW1CSyxTQUFTLEdBQUdILE9BQU9JLE1BQU0sQ0FBQ0YsTUFBTUMsU0FBUztBQUM1REwsbUJBQW1CSyxTQUFTLENBQUNFLElBQUksR0FBRztBQUNwQ1AsbUJBQW1CSyxTQUFTLENBQUNKLE9BQU8sR0FBRztBQUN2Q0QsbUJBQW1CSyxTQUFTLENBQUMsV0FBVyxHQUFHTDtBQUUzQ1EsT0FBT0MsT0FBTyxHQUFHVCIsInNvdXJjZXMiOlsiL1VzZXJzL3dpbGxodXRjaGluc29uL0RvY3VtZW50cy9kYXRhLWFycmF5L3NyYy9leGNlcHRpb25zL3NoZWV0Tm90Rm91bmRFcnJvci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBTaGVldE5vdEZvdW5kRXJyb3IgPSBmdW5jdGlvbiAobWVzc2FnZSkge1xuICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlXG59XG5cbk9iamVjdC5zZXRQcm90b3R5cGVPZihTaGVldE5vdEZvdW5kRXJyb3IsIEVycm9yKVxuU2hlZXROb3RGb3VuZEVycm9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoRXJyb3IucHJvdG90eXBlKVxuU2hlZXROb3RGb3VuZEVycm9yLnByb3RvdHlwZS5uYW1lID0gJ1NoZWV0Tm90Rm91bmRFcnJvcidcblNoZWV0Tm90Rm91bmRFcnJvci5wcm90b3R5cGUubWVzc2FnZSA9ICcnXG5TaGVldE5vdEZvdW5kRXJyb3IucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gU2hlZXROb3RGb3VuZEVycm9yXG5cbm1vZHVsZS5leHBvcnRzID0gU2hlZXROb3RGb3VuZEVycm9yXG4iXSwibmFtZXMiOlsiU2hlZXROb3RGb3VuZEVycm9yIiwibWVzc2FnZSIsIk9iamVjdCIsInNldFByb3RvdHlwZU9mIiwiRXJyb3IiLCJwcm90b3R5cGUiLCJjcmVhdGUiLCJuYW1lIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api-node)/./src/exceptions/sheetNotFoundError.js\n");

/***/ }),

/***/ "(api-node)/./src/util/contentValidator.js":
/*!**************************************!*\
  !*** ./src/util/contentValidator.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nconst _ = {\n    map: __webpack_require__(/*! lodash/map */ \"lodash/map\"),\n    uniqBy: __webpack_require__(/*! lodash/uniqBy */ \"lodash/uniqBy\"),\n    capitalize: __webpack_require__(/*! lodash/capitalize */ \"lodash/capitalize\"),\n    each: __webpack_require__(/*! lodash/each */ \"lodash/each\")\n};\nconst MalformedDataError = __webpack_require__(/*! ../../src/exceptions/malformedDataError */ \"(api-node)/./src/exceptions/malformedDataError.js\");\nconst ExceptionMessages = __webpack_require__(/*! ./exceptionMessages */ \"(api-node)/./src/util/exceptionMessages.js\");\nconst ContentValidator = function(columnNames) {\n    var self = {};\n    columnNames = columnNames.map(function(columnName) {\n        return columnName.trim();\n    });\n    self.verifyContent = function() {\n        if (columnNames.length === 0) {\n            throw new MalformedDataError(ExceptionMessages.MISSING_CONTENT);\n        }\n    };\n    self.verifyHeaders = function() {\n        _.each([\n            'name',\n            'ring',\n            'quadrant',\n            'description'\n        ], function(field) {\n            if (columnNames.indexOf(field) === -1) {\n                throw new MalformedDataError(ExceptionMessages.MISSING_HEADERS);\n            }\n        });\n        // At least one of isNew or status must be present\n        if (columnNames.indexOf('isNew') === -1 && columnNames.indexOf('status') === -1) {\n            throw new MalformedDataError(ExceptionMessages.MISSING_HEADERS);\n        }\n    };\n    return self;\n};\nmodule.exports = ContentValidator;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaS1ub2RlKS8uL3NyYy91dGlsL2NvbnRlbnRWYWxpZGF0b3IuanMiLCJtYXBwaW5ncyI6IjtBQUFBLE1BQU1BLElBQUk7SUFDUkMsS0FBS0MsbUJBQU9BLENBQUMsOEJBQVk7SUFDekJDLFFBQVFELG1CQUFPQSxDQUFDLG9DQUFlO0lBQy9CRSxZQUFZRixtQkFBT0EsQ0FBQyw0Q0FBbUI7SUFDdkNHLE1BQU1ILG1CQUFPQSxDQUFDLGdDQUFhO0FBQzdCO0FBRUEsTUFBTUkscUJBQXFCSixtQkFBT0EsQ0FBQyxrR0FBeUM7QUFDNUUsTUFBTUssb0JBQW9CTCxtQkFBT0EsQ0FBQyx1RUFBcUI7QUFFdkQsTUFBTU0sbUJBQW1CLFNBQVVDLFdBQVc7SUFDNUMsSUFBSUMsT0FBTyxDQUFDO0lBQ1pELGNBQWNBLFlBQVlSLEdBQUcsQ0FBQyxTQUFVVSxVQUFVO1FBQ2hELE9BQU9BLFdBQVdDLElBQUk7SUFDeEI7SUFFQUYsS0FBS0csYUFBYSxHQUFHO1FBQ25CLElBQUlKLFlBQVlLLE1BQU0sS0FBSyxHQUFHO1lBQzVCLE1BQU0sSUFBSVIsbUJBQW1CQyxrQkFBa0JRLGVBQWU7UUFDaEU7SUFDRjtJQUVBTCxLQUFLTSxhQUFhLEdBQUc7UUFDbkJoQixFQUFFSyxJQUFJLENBQUM7WUFBQztZQUFRO1lBQVE7WUFBWTtTQUFjLEVBQUUsU0FBVVksS0FBSztZQUNqRSxJQUFJUixZQUFZUyxPQUFPLENBQUNELFdBQVcsQ0FBQyxHQUFHO2dCQUNyQyxNQUFNLElBQUlYLG1CQUFtQkMsa0JBQWtCWSxlQUFlO1lBQ2hFO1FBQ0Y7UUFFQSxrREFBa0Q7UUFDbEQsSUFBSVYsWUFBWVMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxLQUFLVCxZQUFZUyxPQUFPLENBQUMsY0FBYyxDQUFDLEdBQUc7WUFDL0UsTUFBTSxJQUFJWixtQkFBbUJDLGtCQUFrQlksZUFBZTtRQUNoRTtJQUNGO0lBRUEsT0FBT1Q7QUFDVDtBQUVBVSxPQUFPQyxPQUFPLEdBQUdiIiwic291cmNlcyI6WyIvVXNlcnMvd2lsbGh1dGNoaW5zb24vRG9jdW1lbnRzL2RhdGEtYXJyYXkvc3JjL3V0aWwvY29udGVudFZhbGlkYXRvci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBfID0ge1xuICBtYXA6IHJlcXVpcmUoJ2xvZGFzaC9tYXAnKSxcbiAgdW5pcUJ5OiByZXF1aXJlKCdsb2Rhc2gvdW5pcUJ5JyksXG4gIGNhcGl0YWxpemU6IHJlcXVpcmUoJ2xvZGFzaC9jYXBpdGFsaXplJyksXG4gIGVhY2g6IHJlcXVpcmUoJ2xvZGFzaC9lYWNoJyksXG59XG5cbmNvbnN0IE1hbGZvcm1lZERhdGFFcnJvciA9IHJlcXVpcmUoJy4uLy4uL3NyYy9leGNlcHRpb25zL21hbGZvcm1lZERhdGFFcnJvcicpXG5jb25zdCBFeGNlcHRpb25NZXNzYWdlcyA9IHJlcXVpcmUoJy4vZXhjZXB0aW9uTWVzc2FnZXMnKVxuXG5jb25zdCBDb250ZW50VmFsaWRhdG9yID0gZnVuY3Rpb24gKGNvbHVtbk5hbWVzKSB7XG4gIHZhciBzZWxmID0ge31cbiAgY29sdW1uTmFtZXMgPSBjb2x1bW5OYW1lcy5tYXAoZnVuY3Rpb24gKGNvbHVtbk5hbWUpIHtcbiAgICByZXR1cm4gY29sdW1uTmFtZS50cmltKClcbiAgfSlcblxuICBzZWxmLnZlcmlmeUNvbnRlbnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKGNvbHVtbk5hbWVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhyb3cgbmV3IE1hbGZvcm1lZERhdGFFcnJvcihFeGNlcHRpb25NZXNzYWdlcy5NSVNTSU5HX0NPTlRFTlQpXG4gICAgfVxuICB9XG5cbiAgc2VsZi52ZXJpZnlIZWFkZXJzID0gZnVuY3Rpb24gKCkge1xuICAgIF8uZWFjaChbJ25hbWUnLCAncmluZycsICdxdWFkcmFudCcsICdkZXNjcmlwdGlvbiddLCBmdW5jdGlvbiAoZmllbGQpIHtcbiAgICAgIGlmIChjb2x1bW5OYW1lcy5pbmRleE9mKGZpZWxkKSA9PT0gLTEpIHtcbiAgICAgICAgdGhyb3cgbmV3IE1hbGZvcm1lZERhdGFFcnJvcihFeGNlcHRpb25NZXNzYWdlcy5NSVNTSU5HX0hFQURFUlMpXG4gICAgICB9XG4gICAgfSlcblxuICAgIC8vIEF0IGxlYXN0IG9uZSBvZiBpc05ldyBvciBzdGF0dXMgbXVzdCBiZSBwcmVzZW50XG4gICAgaWYgKGNvbHVtbk5hbWVzLmluZGV4T2YoJ2lzTmV3JykgPT09IC0xICYmIGNvbHVtbk5hbWVzLmluZGV4T2YoJ3N0YXR1cycpID09PSAtMSkge1xuICAgICAgdGhyb3cgbmV3IE1hbGZvcm1lZERhdGFFcnJvcihFeGNlcHRpb25NZXNzYWdlcy5NSVNTSU5HX0hFQURFUlMpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHNlbGZcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDb250ZW50VmFsaWRhdG9yXG4iXSwibmFtZXMiOlsiXyIsIm1hcCIsInJlcXVpcmUiLCJ1bmlxQnkiLCJjYXBpdGFsaXplIiwiZWFjaCIsIk1hbGZvcm1lZERhdGFFcnJvciIsIkV4Y2VwdGlvbk1lc3NhZ2VzIiwiQ29udGVudFZhbGlkYXRvciIsImNvbHVtbk5hbWVzIiwic2VsZiIsImNvbHVtbk5hbWUiLCJ0cmltIiwidmVyaWZ5Q29udGVudCIsImxlbmd0aCIsIk1JU1NJTkdfQ09OVEVOVCIsInZlcmlmeUhlYWRlcnMiLCJmaWVsZCIsImluZGV4T2YiLCJNSVNTSU5HX0hFQURFUlMiLCJtb2R1bGUiLCJleHBvcnRzIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api-node)/./src/util/contentValidator.js\n");

/***/ }),

/***/ "(api-node)/./src/util/exceptionMessages.js":
/*!***************************************!*\
  !*** ./src/util/exceptionMessages.js ***!
  \***************************************/
/***/ ((module) => {

eval("\nconst ExceptionMessages = {\n    TOO_MANY_QUADRANTS: 'There are more than 4 quadrant names listed in your data. Check the quadrant column for errors.',\n    TOO_MANY_RINGS: 'More than 4 rings.',\n    MISSING_HEADERS: 'Document is missing one or more required headers or they are misspelled. ' + 'Check that your document contains headers for \"name\", \"ring\", \"quadrant\", \"isNew\", \"description\".',\n    MISSING_CONTENT: 'Document is missing content.',\n    LESS_THAN_FOUR_QUADRANTS: 'There are less than 4 quadrant names listed in your data. Check the quadrant column for errors.',\n    SHEET_NOT_FOUND: 'Oops! We can’t find the Google Sheet you’ve entered. Can you check the URL?',\n    SHEET_NOT_FOUND_NEW: 'Oops! We can’t find the Google Sheet you’ve entered, please check the URL of your sheet.',\n    UNAUTHORIZED: 'UNAUTHORIZED',\n    INVALID_CONFIG: 'Unexpected number of quadrants or rings. Please check in the configuration.',\n    INVALID_JSON_CONTENT: 'Invalid content of JSON file. Please check the content of file.',\n    INVALID_CSV_CONTENT: 'Invalid content of CSV file. Please check the content of file.'\n};\nmodule.exports = ExceptionMessages;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaS1ub2RlKS8uL3NyYy91dGlsL2V4Y2VwdGlvbk1lc3NhZ2VzLmpzIiwibWFwcGluZ3MiOiI7QUFBQSxNQUFNQSxvQkFBb0I7SUFDeEJDLG9CQUFvQjtJQUNwQkMsZ0JBQWdCO0lBQ2hCQyxpQkFDRSw4RUFDQTtJQUNGQyxpQkFBaUI7SUFDakJDLDBCQUNFO0lBQ0ZDLGlCQUFpQjtJQUNqQkMscUJBQXFCO0lBQ3JCQyxjQUFjO0lBQ2RDLGdCQUFnQjtJQUNoQkMsc0JBQXNCO0lBQ3RCQyxxQkFBcUI7QUFDdkI7QUFFQUMsT0FBT0MsT0FBTyxHQUFHYiIsInNvdXJjZXMiOlsiL1VzZXJzL3dpbGxodXRjaGluc29uL0RvY3VtZW50cy9kYXRhLWFycmF5L3NyYy91dGlsL2V4Y2VwdGlvbk1lc3NhZ2VzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IEV4Y2VwdGlvbk1lc3NhZ2VzID0ge1xuICBUT09fTUFOWV9RVUFEUkFOVFM6ICdUaGVyZSBhcmUgbW9yZSB0aGFuIDQgcXVhZHJhbnQgbmFtZXMgbGlzdGVkIGluIHlvdXIgZGF0YS4gQ2hlY2sgdGhlIHF1YWRyYW50IGNvbHVtbiBmb3IgZXJyb3JzLicsXG4gIFRPT19NQU5ZX1JJTkdTOiAnTW9yZSB0aGFuIDQgcmluZ3MuJyxcbiAgTUlTU0lOR19IRUFERVJTOlxuICAgICdEb2N1bWVudCBpcyBtaXNzaW5nIG9uZSBvciBtb3JlIHJlcXVpcmVkIGhlYWRlcnMgb3IgdGhleSBhcmUgbWlzc3BlbGxlZC4gJyArXG4gICAgJ0NoZWNrIHRoYXQgeW91ciBkb2N1bWVudCBjb250YWlucyBoZWFkZXJzIGZvciBcIm5hbWVcIiwgXCJyaW5nXCIsIFwicXVhZHJhbnRcIiwgXCJpc05ld1wiLCBcImRlc2NyaXB0aW9uXCIuJyxcbiAgTUlTU0lOR19DT05URU5UOiAnRG9jdW1lbnQgaXMgbWlzc2luZyBjb250ZW50LicsXG4gIExFU1NfVEhBTl9GT1VSX1FVQURSQU5UUzpcbiAgICAnVGhlcmUgYXJlIGxlc3MgdGhhbiA0IHF1YWRyYW50IG5hbWVzIGxpc3RlZCBpbiB5b3VyIGRhdGEuIENoZWNrIHRoZSBxdWFkcmFudCBjb2x1bW4gZm9yIGVycm9ycy4nLFxuICBTSEVFVF9OT1RfRk9VTkQ6ICdPb3BzISBXZSBjYW7igJl0IGZpbmQgdGhlIEdvb2dsZSBTaGVldCB5b3XigJl2ZSBlbnRlcmVkLiBDYW4geW91IGNoZWNrIHRoZSBVUkw/JyxcbiAgU0hFRVRfTk9UX0ZPVU5EX05FVzogJ09vcHMhIFdlIGNhbuKAmXQgZmluZCB0aGUgR29vZ2xlIFNoZWV0IHlvdeKAmXZlIGVudGVyZWQsIHBsZWFzZSBjaGVjayB0aGUgVVJMIG9mIHlvdXIgc2hlZXQuJyxcbiAgVU5BVVRIT1JJWkVEOiAnVU5BVVRIT1JJWkVEJyxcbiAgSU5WQUxJRF9DT05GSUc6ICdVbmV4cGVjdGVkIG51bWJlciBvZiBxdWFkcmFudHMgb3IgcmluZ3MuIFBsZWFzZSBjaGVjayBpbiB0aGUgY29uZmlndXJhdGlvbi4nLFxuICBJTlZBTElEX0pTT05fQ09OVEVOVDogJ0ludmFsaWQgY29udGVudCBvZiBKU09OIGZpbGUuIFBsZWFzZSBjaGVjayB0aGUgY29udGVudCBvZiBmaWxlLicsXG4gIElOVkFMSURfQ1NWX0NPTlRFTlQ6ICdJbnZhbGlkIGNvbnRlbnQgb2YgQ1NWIGZpbGUuIFBsZWFzZSBjaGVjayB0aGUgY29udGVudCBvZiBmaWxlLicsXG59XG5cbm1vZHVsZS5leHBvcnRzID0gRXhjZXB0aW9uTWVzc2FnZXNcbiJdLCJuYW1lcyI6WyJFeGNlcHRpb25NZXNzYWdlcyIsIlRPT19NQU5ZX1FVQURSQU5UUyIsIlRPT19NQU5ZX1JJTkdTIiwiTUlTU0lOR19IRUFERVJTIiwiTUlTU0lOR19DT05URU5UIiwiTEVTU19USEFOX0ZPVVJfUVVBRFJBTlRTIiwiU0hFRVRfTk9UX0ZPVU5EIiwiU0hFRVRfTk9UX0ZPVU5EX05FVyIsIlVOQVVUSE9SSVpFRCIsIklOVkFMSURfQ09ORklHIiwiSU5WQUxJRF9KU09OX0NPTlRFTlQiLCJJTlZBTElEX0NTVl9DT05URU5UIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api-node)/./src/util/exceptionMessages.js\n");

/***/ }),

/***/ "(api-node)/./src/util/inputSanitizer.js":
/*!************************************!*\
  !*** ./src/util/inputSanitizer.js ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nconst sanitizeHtml = __webpack_require__(/*! sanitize-html */ \"sanitize-html\");\nconst _ = {\n    forOwn: __webpack_require__(/*! lodash/forOwn */ \"lodash/forOwn\")\n};\nconst InputSanitizer = function() {\n    var relaxedOptions = {\n        allowedTags: [\n            'b',\n            'i',\n            'em',\n            'strong',\n            'a',\n            'h1',\n            'h2',\n            'h3',\n            'h4',\n            'h5',\n            'h6',\n            'li',\n            'ul',\n            'br',\n            'p',\n            'u'\n        ],\n        allowedAttributes: {\n            a: [\n                'href',\n                'target',\n                'rel'\n            ]\n        }\n    };\n    var restrictedOptions = {\n        allowedTags: [],\n        allowedAttributes: {},\n        textFilter: function(text) {\n            return text.replace(/&amp;/, '&');\n        }\n    };\n    function trimWhiteSpaces(blip) {\n        var processedBlip = {};\n        _.forOwn(blip, function(value, key) {\n            processedBlip[key.trim()] = value.trim();\n        });\n        return processedBlip;\n    }\n    var self = {};\n    self.sanitize = function(rawBlip) {\n        var blip = trimWhiteSpaces(rawBlip);\n        blip.description = sanitizeHtml(blip.description, relaxedOptions);\n        blip.name = sanitizeHtml(blip.name, restrictedOptions);\n        blip.isNew = sanitizeHtml(blip.isNew, restrictedOptions);\n        blip.status = sanitizeHtml(blip.status, restrictedOptions);\n        blip.ring = sanitizeHtml(blip.ring, restrictedOptions);\n        blip.quadrant = sanitizeHtml(blip.quadrant, restrictedOptions);\n        return blip;\n    };\n    self.sanitizeForProtectedSheet = function(rawBlip, header) {\n        var blip = trimWhiteSpaces(rawBlip);\n        const descriptionIndex = header.indexOf('description');\n        const nameIndex = header.indexOf('name');\n        const isNewIndex = header.indexOf('isNew');\n        const statusIndex = header.indexOf('status');\n        const quadrantIndex = header.indexOf('quadrant');\n        const ringIndex = header.indexOf('ring');\n        const description = descriptionIndex === -1 ? '' : blip[descriptionIndex];\n        const name = nameIndex === -1 ? '' : blip[nameIndex];\n        const isNew = isNewIndex === -1 ? '' : blip[isNewIndex];\n        const status = statusIndex === -1 ? '' : blip[statusIndex];\n        const ring = ringIndex === -1 ? '' : blip[ringIndex];\n        const quadrant = quadrantIndex === -1 ? '' : blip[quadrantIndex];\n        blip.description = sanitizeHtml(description, relaxedOptions);\n        blip.name = sanitizeHtml(name, restrictedOptions);\n        blip.isNew = sanitizeHtml(isNew, restrictedOptions);\n        blip.status = sanitizeHtml(status, restrictedOptions);\n        blip.ring = sanitizeHtml(ring, restrictedOptions);\n        blip.quadrant = sanitizeHtml(quadrant, restrictedOptions);\n        return blip;\n    };\n    return self;\n};\nmodule.exports = InputSanitizer;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TSxHQUFHekIsYUFBYXlCLFFBQVFoQjtRQUNuQ0ssS0FBS1ksSUFBSSxHQUFHMUIsYUFBYTBCLE1BQU1qQjtRQUMvQkssS0FBS2EsUUFBUSxHQUFHM0IsYUFBYTJCLFVBQVVsQjtRQUV2QyxPQUFPSztJQUNUO0lBRUEsT0FBT0s7QUFDVDtBQUVBa0IsT0FBT0MsT0FBTyxHQUFHbEMiLCJzb3VyY2VzIjpbIi9Vc2Vycy93aWxsaHV0Y2hpbnNvbi9Eb2N1bWVudHMvZGF0YS1hcnJheS9zcmMvdXRpbC9pbnB1dFNhbml0aXplci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBzYW5pdGl6ZUh0bWwgPSByZXF1aXJlKCdzYW5pdGl6ZS1odG1sJylcbmNvbnN0IF8gPSB7XG4gIGZvck93bjogcmVxdWlyZSgnbG9kYXNoL2Zvck93bicpLFxufVxuXG5jb25zdCBJbnB1dFNhbml0aXplciA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIHJlbGF4ZWRPcHRpb25zID0ge1xuICAgIGFsbG93ZWRUYWdzOiBbJ2InLCAnaScsICdlbScsICdzdHJvbmcnLCAnYScsICdoMScsICdoMicsICdoMycsICdoNCcsICdoNScsICdoNicsICdsaScsICd1bCcsICdicicsICdwJywgJ3UnXSxcbiAgICBhbGxvd2VkQXR0cmlidXRlczoge1xuICAgICAgYTogWydocmVmJywgJ3RhcmdldCcsICdyZWwnXSxcbiAgICB9LFxuICB9XG5cbiAgdmFyIHJlc3RyaWN0ZWRPcHRpb25zID0ge1xuICAgIGFsbG93ZWRUYWdzOiBbXSxcbiAgICBhbGxvd2VkQXR0cmlidXRlczoge30sXG4gICAgdGV4dEZpbHRlcjogZnVuY3Rpb24gKHRleHQpIHtcbiAgICAgIHJldHVybiB0ZXh0LnJlcGxhY2UoLyZhbXA7LywgJyYnKVxuICAgIH0sXG4gIH1cblxuICBmdW5jdGlvbiB0cmltV2hpdGVTcGFjZXMoYmxpcCkge1xuICAgIHZhciBwcm9jZXNzZWRCbGlwID0ge31cbiAgICBfLmZvck93bihibGlwLCBmdW5jdGlvbiAodmFsdWUsIGtleSkge1xuICAgICAgcHJvY2Vzc2VkQmxpcFtrZXkudHJpbSgpXSA9IHZhbHVlLnRyaW0oKVxuICAgIH0pXG4gICAgcmV0dXJuIHByb2Nlc3NlZEJsaXBcbiAgfVxuXG4gIHZhciBzZWxmID0ge31cbiAgc2VsZi5zYW5pdGl6ZSA9IGZ1bmN0aW9uIChyYXdCbGlwKSB7XG4gICAgdmFyIGJsaXAgPSB0cmltV2hpdGVTcGFjZXMocmF3QmxpcClcbiAgICBibGlwLmRlc2NyaXB0aW9uID0gc2FuaXRpemVIdG1sKGJsaXAuZGVzY3JpcHRpb24sIHJlbGF4ZWRPcHRpb25zKVxuICAgIGJsaXAubmFtZSA9IHNhbml0aXplSHRtbChibGlwLm5hbWUsIHJlc3RyaWN0ZWRPcHRpb25zKVxuICAgIGJsaXAuaXNOZXcgPSBzYW5pdGl6ZUh0bWwoYmxpcC5pc05ldywgcmVzdHJpY3RlZE9wdGlvbnMpXG4gICAgYmxpcC5zdGF0dXMgPSBzYW5pdGl6ZUh0bWwoYmxpcC5zdGF0dXMsIHJlc3RyaWN0ZWRPcHRpb25zKVxuICAgIGJsaXAucmluZyA9IHNhbml0aXplSHRtbChibGlwLnJpbmcsIHJlc3RyaWN0ZWRPcHRpb25zKVxuICAgIGJsaXAucXVhZHJhbnQgPSBzYW5pdGl6ZUh0bWwoYmxpcC5xdWFkcmFudCwgcmVzdHJpY3RlZE9wdGlvbnMpXG5cbiAgICByZXR1cm4gYmxpcFxuICB9XG5cbiAgc2VsZi5zYW5pdGl6ZUZvclByb3RlY3RlZFNoZWV0ID0gZnVuY3Rpb24gKHJhd0JsaXAsIGhlYWRlcikge1xuICAgIHZhciBibGlwID0gdHJpbVdoaXRlU3BhY2VzKHJhd0JsaXApXG5cbiAgICBjb25zdCBkZXNjcmlwdGlvbkluZGV4ID0gaGVhZGVyLmluZGV4T2YoJ2Rlc2NyaXB0aW9uJylcbiAgICBjb25zdCBuYW1lSW5kZXggPSBoZWFkZXIuaW5kZXhPZignbmFtZScpXG4gICAgY29uc3QgaXNOZXdJbmRleCA9IGhlYWRlci5pbmRleE9mKCdpc05ldycpXG4gICAgY29uc3Qgc3RhdHVzSW5kZXggPSBoZWFkZXIuaW5kZXhPZignc3RhdHVzJylcbiAgICBjb25zdCBxdWFkcmFudEluZGV4ID0gaGVhZGVyLmluZGV4T2YoJ3F1YWRyYW50JylcbiAgICBjb25zdCByaW5nSW5kZXggPSBoZWFkZXIuaW5kZXhPZigncmluZycpXG5cbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uSW5kZXggPT09IC0xID8gJycgOiBibGlwW2Rlc2NyaXB0aW9uSW5kZXhdXG4gICAgY29uc3QgbmFtZSA9IG5hbWVJbmRleCA9PT0gLTEgPyAnJyA6IGJsaXBbbmFtZUluZGV4XVxuICAgIGNvbnN0IGlzTmV3ID0gaXNOZXdJbmRleCA9PT0gLTEgPyAnJyA6IGJsaXBbaXNOZXdJbmRleF1cbiAgICBjb25zdCBzdGF0dXMgPSBzdGF0dXNJbmRleCA9PT0gLTEgPyAnJyA6IGJsaXBbc3RhdHVzSW5kZXhdXG4gICAgY29uc3QgcmluZyA9IHJpbmdJbmRleCA9PT0gLTEgPyAnJyA6IGJsaXBbcmluZ0luZGV4XVxuICAgIGNvbnN0IHF1YWRyYW50ID0gcXVhZHJhbnRJbmRleCA9PT0gLTEgPyAnJyA6IGJsaXBbcXVhZHJhbnRJbmRleF1cblxuICAgIGJsaXAuZGVzY3JpcHRpb24gPSBzYW5pdGl6ZUh0bWwoZGVzY3JpcHRpb24sIHJlbGF4ZWRPcHRpb25zKVxuICAgIGJsaXAubmFtZSA9IHNhbml0aXplSHRtbChuYW1lLCByZXN0cmljdGVkT3B0aW9ucylcbiAgICBibGlwLmlzTmV3ID0gc2FuaXRpemVIdG1sKGlzTmV3LCByZXN0cmljdGVkT3B0aW9ucylcbiAgICBibGlwLnN0YXR1cyA9IHNhbml0aXplSHRtbChzdGF0dXMsIHJlc3RyaWN0ZWRPcHRpb25zKVxuICAgIGJsaXAucmluZyA9IHNhbml0aXplSHRtbChyaW5nLCByZXN0cmljdGVkT3B0aW9ucylcbiAgICBibGlwLnF1YWRyYW50ID0gc2FuaXRpemVIdG1sKHF1YWRyYW50LCByZXN0cmljdGVkT3B0aW9ucylcblxuICAgIHJldHVybiBibGlwXG4gIH1cblxuICByZXR1cm4gc2VsZlxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IElucHV0U2FuaXRpemVyXG4iXSwibmFtZXMiOlsic2FuaXRpemVIdG1sIiwicmVxdWlyZSIsIl8iLCJmb3JPd24iLCJJbnB1dFNhbml0aXplciIsInJlbGF4ZWRPcHRpb25zIiwiYWxsb3dlZFRhZ3MiLCJhbGxvd2VkQXR0cmlidXRlcyIsImEiLCJyZXN0cmljdGVkT3B0aW9ucyIsInRleHRGaWx0ZXIiLCJ0ZXh0IiwicmVwbGFjZSIsInRyaW1XaGl0ZVNwYWNlcyIsImJsaXAiLCJwcm9jZXNzZWRCbGlwIiwidmFsdWUiLCJrZXkiLCJ0cmltIiwic2VsZiIsInNhbml0aXplIiwicmF3QmxpcCIsImRlc2NyaXB0aW9uIiwibmFtZSIsImlzTmV3Iiwic3RhdHVzIiwicmluZyIsInF1YWRyYW50Iiwic2FuaXRpemVGb3JQcm90ZWN0ZWRTaGVldCIsImhlYWRlciIsImRlc2NyaXB0aW9uSW5kZXgiLCJpbmRleE9mIiwibmFtZUluZGV4IiwiaXNOZXdJbmRleCIsInN0YXR1c0luZGV4IiwicXVhZHJhbnRJbmRleCIsInJpbmdJbmRleCIsIm1vZHVsZSIsImV4cG9ydHMiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api-node)/./src/util/inputSanitizer.js\n");

/***/ }),

/***/ "d3-array":
/*!***************************!*\
  !*** external "d3-array" ***!
  \***************************/
/***/ ((module) => {

module.exports = import("d3-array");;

/***/ }),

/***/ "d3-axis":
/*!**************************!*\
  !*** external "d3-axis" ***!
  \**************************/
/***/ ((module) => {

module.exports = import("d3-axis");;

/***/ }),

/***/ "d3-brush":
/*!***************************!*\
  !*** external "d3-brush" ***!
  \***************************/
/***/ ((module) => {

module.exports = import("d3-brush");;

/***/ }),

/***/ "d3-chord":
/*!***************************!*\
  !*** external "d3-chord" ***!
  \***************************/
/***/ ((module) => {

module.exports = import("d3-chord");;

/***/ }),

/***/ "d3-color":
/*!***************************!*\
  !*** external "d3-color" ***!
  \***************************/
/***/ ((module) => {

module.exports = import("d3-color");;

/***/ }),

/***/ "d3-contour":
/*!*****************************!*\
  !*** external "d3-contour" ***!
  \*****************************/
/***/ ((module) => {

module.exports = import("d3-contour");;

/***/ }),

/***/ "d3-delaunay":
/*!******************************!*\
  !*** external "d3-delaunay" ***!
  \******************************/
/***/ ((module) => {

module.exports = import("d3-delaunay");;

/***/ }),

/***/ "d3-dispatch":
/*!******************************!*\
  !*** external "d3-dispatch" ***!
  \******************************/
/***/ ((module) => {

module.exports = import("d3-dispatch");;

/***/ }),

/***/ "d3-drag":
/*!**************************!*\
  !*** external "d3-drag" ***!
  \**************************/
/***/ ((module) => {

module.exports = import("d3-drag");;

/***/ }),

/***/ "d3-dsv":
/*!*************************!*\
  !*** external "d3-dsv" ***!
  \*************************/
/***/ ((module) => {

module.exports = import("d3-dsv");;

/***/ }),

/***/ "d3-ease":
/*!**************************!*\
  !*** external "d3-ease" ***!
  \**************************/
/***/ ((module) => {

module.exports = import("d3-ease");;

/***/ }),

/***/ "d3-fetch":
/*!***************************!*\
  !*** external "d3-fetch" ***!
  \***************************/
/***/ ((module) => {

module.exports = import("d3-fetch");;

/***/ }),

/***/ "d3-force":
/*!***************************!*\
  !*** external "d3-force" ***!
  \***************************/
/***/ ((module) => {

module.exports = import("d3-force");;

/***/ }),

/***/ "d3-format":
/*!****************************!*\
  !*** external "d3-format" ***!
  \****************************/
/***/ ((module) => {

module.exports = import("d3-format");;

/***/ }),

/***/ "d3-geo":
/*!*************************!*\
  !*** external "d3-geo" ***!
  \*************************/
/***/ ((module) => {

module.exports = import("d3-geo");;

/***/ }),

/***/ "d3-hierarchy":
/*!*******************************!*\
  !*** external "d3-hierarchy" ***!
  \*******************************/
/***/ ((module) => {

module.exports = import("d3-hierarchy");;

/***/ }),

/***/ "d3-interpolate":
/*!*********************************!*\
  !*** external "d3-interpolate" ***!
  \*********************************/
/***/ ((module) => {

module.exports = import("d3-interpolate");;

/***/ }),

/***/ "d3-path":
/*!**************************!*\
  !*** external "d3-path" ***!
  \**************************/
/***/ ((module) => {

module.exports = import("d3-path");;

/***/ }),

/***/ "d3-polygon":
/*!*****************************!*\
  !*** external "d3-polygon" ***!
  \*****************************/
/***/ ((module) => {

module.exports = import("d3-polygon");;

/***/ }),

/***/ "d3-quadtree":
/*!******************************!*\
  !*** external "d3-quadtree" ***!
  \******************************/
/***/ ((module) => {

module.exports = import("d3-quadtree");;

/***/ }),

/***/ "d3-random":
/*!****************************!*\
  !*** external "d3-random" ***!
  \****************************/
/***/ ((module) => {

module.exports = import("d3-random");;

/***/ }),

/***/ "d3-scale":
/*!***************************!*\
  !*** external "d3-scale" ***!
  \***************************/
/***/ ((module) => {

module.exports = import("d3-scale");;

/***/ }),

/***/ "d3-scale-chromatic":
/*!*************************************!*\
  !*** external "d3-scale-chromatic" ***!
  \*************************************/
/***/ ((module) => {

module.exports = import("d3-scale-chromatic");;

/***/ }),

/***/ "d3-selection":
/*!*******************************!*\
  !*** external "d3-selection" ***!
  \*******************************/
/***/ ((module) => {

module.exports = import("d3-selection");;

/***/ }),

/***/ "d3-shape":
/*!***************************!*\
  !*** external "d3-shape" ***!
  \***************************/
/***/ ((module) => {

module.exports = import("d3-shape");;

/***/ }),

/***/ "d3-time":
/*!**************************!*\
  !*** external "d3-time" ***!
  \**************************/
/***/ ((module) => {

module.exports = import("d3-time");;

/***/ }),

/***/ "d3-time-format":
/*!*********************************!*\
  !*** external "d3-time-format" ***!
  \*********************************/
/***/ ((module) => {

module.exports = import("d3-time-format");;

/***/ }),

/***/ "d3-timer":
/*!***************************!*\
  !*** external "d3-timer" ***!
  \***************************/
/***/ ((module) => {

module.exports = import("d3-timer");;

/***/ }),

/***/ "d3-transition":
/*!********************************!*\
  !*** external "d3-transition" ***!
  \********************************/
/***/ ((module) => {

module.exports = import("d3-transition");;

/***/ }),

/***/ "d3-zoom":
/*!**************************!*\
  !*** external "d3-zoom" ***!
  \**************************/
/***/ ((module) => {

module.exports = import("d3-zoom");;

/***/ }),

/***/ "lodash/capitalize":
/*!************************************!*\
  !*** external "lodash/capitalize" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("lodash/capitalize");

/***/ }),

/***/ "lodash/each":
/*!******************************!*\
  !*** external "lodash/each" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("lodash/each");

/***/ }),

/***/ "lodash/forOwn":
/*!********************************!*\
  !*** external "lodash/forOwn" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("lodash/forOwn");

/***/ }),

/***/ "lodash/map":
/*!*****************************!*\
  !*** external "lodash/map" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("lodash/map");

/***/ }),

/***/ "lodash/uniqBy":
/*!********************************!*\
  !*** external "lodash/uniqBy" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("lodash/uniqBy");

/***/ }),

/***/ "next/dist/compiled/next-server/pages-api.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages-api.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/pages-api.runtime.dev.js");

/***/ }),

/***/ "sanitize-html":
/*!********************************!*\
  !*** external "sanitize-html" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("sanitize-html");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(api-node)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fdata&preferredRegion=&absolutePagePath=.%2Fpages%2Fapi%2Fdata%2Findex.js&middlewareConfigBase64=e30%3D!")));
module.exports = __webpack_exports__;

})();