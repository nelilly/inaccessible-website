webpackHotUpdate_N_E("pages/nebulous",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./src/components/Notice/style.module.css":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-2-2!./src/components/Notice/style.module.css ***!
  \**********************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"\\n.style_notice__AWDkc {\\n  background-color: #eee;\\n  display: -webkit-flex;\\n  display: flex;\\n  -webkit-justify-content: space-between;\\n          justify-content: space-between;\\n  padding: 1rem;\\n  position: absolute;\\n  margin-bottom: -5.5rem;\\n  top: 0;\\n  -webkit-transform: translateY(0);\\n          transform: translateY(0);\\n  -webkit-transition: 2s -webkit-transform ease-in-out;\\n  transition: 2s -webkit-transform ease-in-out;\\n  transition: 2s transform ease-in-out;\\n  transition: 2s transform ease-in-out, 2s -webkit-transform ease-in-out;\\n  width: 100vw;\\n  z-index: -1;\\n}\\n\\n.style_notice__AWDkc.style_open__3_tiO {\\n  -webkit-transform: translateY(5rem);\\n          transform: translateY(5rem);\\n}\\n\\n.style_notice__AWDkc.style_noticeInfo__2QPY6 {\\n  background-color: #009c;\\n  color: #fff;\\n}\\n\\n.style_notice__AWDkc.style_noticeSuccess__1cv5w {\\n  background-color: #090c;\\n  color: #fff;\\n}\\n\\n.style_notice__AWDkc.style_noticeWarning__18P4w {\\n  background-color: #990c;\\n  color: #fff;\\n}\\n\\n.style_notice__AWDkc.style_noticeError__2aPzh {\\n  background-color: #900c;\\n  color: #fff;\\n}\\n\\n.style_notice__AWDkc a {\\n  text-decoration: underline;\\n}\\n\\n.style_notice__AWDkc a:hover,\\n.style_notice__AWDkc.style_noticeInfo__2QPY6 a:hover,\\n.style_notice__AWDkc.style_noticeSuccess__1cv5w a:hover,\\n.style_notice__AWDkc.style_noticeWarning__18P4w a:hover,\\n.style_notice__AWDkc.style_noticeError__2aPzh a:hover {\\n  color: #fff;\\n}\\n\\n.style_notice__AWDkc.style_noticeInfo__2QPY6 a {\\n  color: #00f;\\n}\\n\\n.style_notice__AWDkc.style_noticeSuccess__1cv5w a {\\n  color: #0f0;\\n}\\n\\n.style_notice__AWDkc.style_noticeWarning__18P4w a {\\n  color: #ff0;\\n}\\n\\n.style_notice__AWDkc.style_noticeError__2aPzh a {\\n  color: #f00;\\n}\\n\\n.style_noticeButton__2iCHp {\\n  cursor: pointer;\\n  font-size: 1.5rem;\\n  line-height: .5;\\n  padding: .5rem;\\n}\\n\\n.style_noticeButton__2iCHp:hover {\\n  color: #003;\\n}\\n\", \"\",{\"version\":3,\"sources\":[\"webpack://src/components/Notice/style.module.css\"],\"names\":[],\"mappings\":\";AACA;EACE,sBAAsB;EACtB,qBAAa;EAAb,aAAa;EACb,sCAA8B;UAA9B,8BAA8B;EAC9B,aAAa;EACb,kBAAkB;EAClB,sBAAsB;EACtB,MAAM;EACN,gCAAwB;UAAxB,wBAAwB;EACxB,oDAAoC;EAApC,4CAAoC;EAApC,oCAAoC;EAApC,sEAAoC;EACpC,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,mCAA2B;UAA3B,2BAA2B;AAC7B;;AAEA;EACE,uBAAuB;EACvB,WAAW;AACb;;AAEA;EACE,uBAAuB;EACvB,WAAW;AACb;;AAEA;EACE,uBAAuB;EACvB,WAAW;AACb;;AAEA;EACE,uBAAuB;EACvB,WAAW;AACb;;AAEA;EACE,0BAA0B;AAC5B;;AAEA;;;;;EAKE,WAAW;AACb;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,eAAe;EACf,iBAAiB;EACjB,eAAe;EACf,cAAc;AAChB;;AAEA;EACE,WAAW;AACb\",\"sourcesContent\":[\"\\n.notice {\\n  background-color: #eee;\\n  display: flex;\\n  justify-content: space-between;\\n  padding: 1rem;\\n  position: absolute;\\n  margin-bottom: -5.5rem;\\n  top: 0;\\n  transform: translateY(0);\\n  transition: 2s transform ease-in-out;\\n  width: 100vw;\\n  z-index: -1;\\n}\\n\\n.notice.open {\\n  transform: translateY(5rem);\\n}\\n\\n.notice.noticeInfo {\\n  background-color: #009c;\\n  color: #fff;\\n}\\n\\n.notice.noticeSuccess {\\n  background-color: #090c;\\n  color: #fff;\\n}\\n\\n.notice.noticeWarning {\\n  background-color: #990c;\\n  color: #fff;\\n}\\n\\n.notice.noticeError {\\n  background-color: #900c;\\n  color: #fff;\\n}\\n\\n.notice a {\\n  text-decoration: underline;\\n}\\n\\n.notice a:hover,\\n.notice.noticeInfo a:hover,\\n.notice.noticeSuccess a:hover,\\n.notice.noticeWarning a:hover,\\n.notice.noticeError a:hover {\\n  color: #fff;\\n}\\n\\n.notice.noticeInfo a {\\n  color: #00f;\\n}\\n\\n.notice.noticeSuccess a {\\n  color: #0f0;\\n}\\n\\n.notice.noticeWarning a {\\n  color: #ff0;\\n}\\n\\n.notice.noticeError a {\\n  color: #f00;\\n}\\n\\n.noticeButton {\\n  cursor: pointer;\\n  font-size: 1.5rem;\\n  line-height: .5;\\n  padding: .5rem;\\n}\\n\\n.noticeButton:hover {\\n  color: #003;\\n}\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"notice\": \"style_notice__AWDkc\",\n\t\"open\": \"style_open__3_tiO\",\n\t\"noticeInfo\": \"style_noticeInfo__2QPY6\",\n\t\"noticeSuccess\": \"style_noticeSuccess__1cv5w\",\n\t\"noticeWarning\": \"style_noticeWarning__18P4w\",\n\t\"noticeError\": \"style_noticeError__2aPzh\",\n\t\"noticeButton\": \"style_noticeButton__2iCHp\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTm90aWNlL3N0eWxlLm1vZHVsZS5jc3M/YTU5YSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLDJHQUFzRDtBQUNoRztBQUNBO0FBQ0EsOEJBQThCLFFBQVMsMkJBQTJCLDJCQUEyQiwwQkFBMEIsa0JBQWtCLDJDQUEyQywyQ0FBMkMsa0JBQWtCLHVCQUF1QiwyQkFBMkIsV0FBVyxxQ0FBcUMscUNBQXFDLHlEQUF5RCxpREFBaUQseUNBQXlDLDJFQUEyRSxpQkFBaUIsZ0JBQWdCLEdBQUcsNENBQTRDLHdDQUF3Qyx3Q0FBd0MsR0FBRyxrREFBa0QsNEJBQTRCLGdCQUFnQixHQUFHLHFEQUFxRCw0QkFBNEIsZ0JBQWdCLEdBQUcscURBQXFELDRCQUE0QixnQkFBZ0IsR0FBRyxtREFBbUQsNEJBQTRCLGdCQUFnQixHQUFHLDRCQUE0QiwrQkFBK0IsR0FBRyxxUUFBcVEsZ0JBQWdCLEdBQUcsb0RBQW9ELGdCQUFnQixHQUFHLHVEQUF1RCxnQkFBZ0IsR0FBRyx1REFBdUQsZ0JBQWdCLEdBQUcscURBQXFELGdCQUFnQixHQUFHLGdDQUFnQyxvQkFBb0Isc0JBQXNCLG9CQUFvQixtQkFBbUIsR0FBRyxzQ0FBc0MsZ0JBQWdCLEdBQUcsU0FBUyxtR0FBbUcsS0FBSyxZQUFZLFlBQVksVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sU0FBUyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLG9DQUFvQywyQkFBMkIsa0JBQWtCLG1DQUFtQyxrQkFBa0IsdUJBQXVCLDJCQUEyQixXQUFXLDZCQUE2Qix5Q0FBeUMsaUJBQWlCLGdCQUFnQixHQUFHLGtCQUFrQixnQ0FBZ0MsR0FBRyx3QkFBd0IsNEJBQTRCLGdCQUFnQixHQUFHLDJCQUEyQiw0QkFBNEIsZ0JBQWdCLEdBQUcsMkJBQTJCLDRCQUE0QixnQkFBZ0IsR0FBRyx5QkFBeUIsNEJBQTRCLGdCQUFnQixHQUFHLGVBQWUsK0JBQStCLEdBQUcsZ0pBQWdKLGdCQUFnQixHQUFHLDBCQUEwQixnQkFBZ0IsR0FBRyw2QkFBNkIsZ0JBQWdCLEdBQUcsNkJBQTZCLGdCQUFnQixHQUFHLDJCQUEyQixnQkFBZ0IsR0FBRyxtQkFBbUIsb0JBQW9CLHNCQUFzQixvQkFBb0IsbUJBQW1CLEdBQUcseUJBQXlCLGdCQUFnQixHQUFHLHFCQUFxQjtBQUNqeUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPyEuL3NyYy9jb21wb25lbnRzL05vdGljZS9zdHlsZS5tb2R1bGUuY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLnN0eWxlX25vdGljZV9fQVdEa2Mge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcXG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtd2Via2l0LWp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIG1hcmdpbi1ib3R0b206IC01LjVyZW07XFxuICB0b3A6IDA7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAycyAtd2Via2l0LXRyYW5zZm9ybSBlYXNlLWluLW91dDtcXG4gIHRyYW5zaXRpb246IDJzIC13ZWJraXQtdHJhbnNmb3JtIGVhc2UtaW4tb3V0O1xcbiAgdHJhbnNpdGlvbjogMnMgdHJhbnNmb3JtIGVhc2UtaW4tb3V0O1xcbiAgdHJhbnNpdGlvbjogMnMgdHJhbnNmb3JtIGVhc2UtaW4tb3V0LCAycyAtd2Via2l0LXRyYW5zZm9ybSBlYXNlLWluLW91dDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIHotaW5kZXg6IC0xO1xcbn1cXG5cXG4uc3R5bGVfbm90aWNlX19BV0RrYy5zdHlsZV9vcGVuX18zX3RpTyB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSg1cmVtKTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDVyZW0pO1xcbn1cXG5cXG4uc3R5bGVfbm90aWNlX19BV0RrYy5zdHlsZV9ub3RpY2VJbmZvX18yUVBZNiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5YztcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG4uc3R5bGVfbm90aWNlX19BV0RrYy5zdHlsZV9ub3RpY2VTdWNjZXNzX18xY3Y1dyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDkwYztcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG4uc3R5bGVfbm90aWNlX19BV0RrYy5zdHlsZV9ub3RpY2VXYXJuaW5nX18xOFA0dyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTkwYztcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG4uc3R5bGVfbm90aWNlX19BV0RrYy5zdHlsZV9ub3RpY2VFcnJvcl9fMmFQemgge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzkwMGM7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuLnN0eWxlX25vdGljZV9fQVdEa2MgYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuXFxuLnN0eWxlX25vdGljZV9fQVdEa2MgYTpob3ZlcixcXG4uc3R5bGVfbm90aWNlX19BV0RrYy5zdHlsZV9ub3RpY2VJbmZvX18yUVBZNiBhOmhvdmVyLFxcbi5zdHlsZV9ub3RpY2VfX0FXRGtjLnN0eWxlX25vdGljZVN1Y2Nlc3NfXzFjdjV3IGE6aG92ZXIsXFxuLnN0eWxlX25vdGljZV9fQVdEa2Muc3R5bGVfbm90aWNlV2FybmluZ19fMThQNHcgYTpob3ZlcixcXG4uc3R5bGVfbm90aWNlX19BV0RrYy5zdHlsZV9ub3RpY2VFcnJvcl9fMmFQemggYTpob3ZlciB7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuLnN0eWxlX25vdGljZV9fQVdEa2Muc3R5bGVfbm90aWNlSW5mb19fMlFQWTYgYSB7XFxuICBjb2xvcjogIzAwZjtcXG59XFxuXFxuLnN0eWxlX25vdGljZV9fQVdEa2Muc3R5bGVfbm90aWNlU3VjY2Vzc19fMWN2NXcgYSB7XFxuICBjb2xvcjogIzBmMDtcXG59XFxuXFxuLnN0eWxlX25vdGljZV9fQVdEa2Muc3R5bGVfbm90aWNlV2FybmluZ19fMThQNHcgYSB7XFxuICBjb2xvcjogI2ZmMDtcXG59XFxuXFxuLnN0eWxlX25vdGljZV9fQVdEa2Muc3R5bGVfbm90aWNlRXJyb3JfXzJhUHpoIGEge1xcbiAgY29sb3I6ICNmMDA7XFxufVxcblxcbi5zdHlsZV9ub3RpY2VCdXR0b25fXzJpQ0hwIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgbGluZS1oZWlnaHQ6IC41O1xcbiAgcGFkZGluZzogLjVyZW07XFxufVxcblxcbi5zdHlsZV9ub3RpY2VCdXR0b25fXzJpQ0hwOmhvdmVyIHtcXG4gIGNvbG9yOiAjMDAzO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3JjL2NvbXBvbmVudHMvTm90aWNlL3N0eWxlLm1vZHVsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQUNBO0VBQ0Usc0JBQXNCO0VBQ3RCLHFCQUFhO0VBQWIsYUFBYTtFQUNiLHNDQUE4QjtVQUE5Qiw4QkFBOEI7RUFDOUIsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsTUFBTTtFQUNOLGdDQUF3QjtVQUF4Qix3QkFBd0I7RUFDeEIsb0RBQW9DO0VBQXBDLDRDQUFvQztFQUFwQyxvQ0FBb0M7RUFBcEMsc0VBQW9DO0VBQ3BDLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxtQ0FBMkI7VUFBM0IsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixXQUFXO0FBQ2I7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsV0FBVztBQUNiOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLDBCQUEwQjtBQUM1Qjs7QUFFQTs7Ozs7RUFLRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsV0FBVztBQUNiXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIlxcbi5ub3RpY2Uge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbWFyZ2luLWJvdHRvbTogLTUuNXJlbTtcXG4gIHRvcDogMDtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcXG4gIHRyYW5zaXRpb246IDJzIHRyYW5zZm9ybSBlYXNlLWluLW91dDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIHotaW5kZXg6IC0xO1xcbn1cXG5cXG4ubm90aWNlLm9wZW4ge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDVyZW0pO1xcbn1cXG5cXG4ubm90aWNlLm5vdGljZUluZm8ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwOWM7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuLm5vdGljZS5ub3RpY2VTdWNjZXNzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwOTBjO1xcbiAgY29sb3I6ICNmZmY7XFxufVxcblxcbi5ub3RpY2Uubm90aWNlV2FybmluZyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTkwYztcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG4ubm90aWNlLm5vdGljZUVycm9yIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM5MDBjO1xcbiAgY29sb3I6ICNmZmY7XFxufVxcblxcbi5ub3RpY2UgYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuXFxuLm5vdGljZSBhOmhvdmVyLFxcbi5ub3RpY2Uubm90aWNlSW5mbyBhOmhvdmVyLFxcbi5ub3RpY2Uubm90aWNlU3VjY2VzcyBhOmhvdmVyLFxcbi5ub3RpY2Uubm90aWNlV2FybmluZyBhOmhvdmVyLFxcbi5ub3RpY2Uubm90aWNlRXJyb3IgYTpob3ZlciB7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuLm5vdGljZS5ub3RpY2VJbmZvIGEge1xcbiAgY29sb3I6ICMwMGY7XFxufVxcblxcbi5ub3RpY2Uubm90aWNlU3VjY2VzcyBhIHtcXG4gIGNvbG9yOiAjMGYwO1xcbn1cXG5cXG4ubm90aWNlLm5vdGljZVdhcm5pbmcgYSB7XFxuICBjb2xvcjogI2ZmMDtcXG59XFxuXFxuLm5vdGljZS5ub3RpY2VFcnJvciBhIHtcXG4gIGNvbG9yOiAjZjAwO1xcbn1cXG5cXG4ubm90aWNlQnV0dG9uIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgbGluZS1oZWlnaHQ6IC41O1xcbiAgcGFkZGluZzogLjVyZW07XFxufVxcblxcbi5ub3RpY2VCdXR0b246aG92ZXIge1xcbiAgY29sb3I6ICMwMDM7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcIm5vdGljZVwiOiBcInN0eWxlX25vdGljZV9fQVdEa2NcIixcblx0XCJvcGVuXCI6IFwic3R5bGVfb3Blbl9fM190aU9cIixcblx0XCJub3RpY2VJbmZvXCI6IFwic3R5bGVfbm90aWNlSW5mb19fMlFQWTZcIixcblx0XCJub3RpY2VTdWNjZXNzXCI6IFwic3R5bGVfbm90aWNlU3VjY2Vzc19fMWN2NXdcIixcblx0XCJub3RpY2VXYXJuaW5nXCI6IFwic3R5bGVfbm90aWNlV2FybmluZ19fMThQNHdcIixcblx0XCJub3RpY2VFcnJvclwiOiBcInN0eWxlX25vdGljZUVycm9yX18yYVB6aFwiLFxuXHRcIm5vdGljZUJ1dHRvblwiOiBcInN0eWxlX25vdGljZUJ1dHRvbl9fMmlDSHBcIlxufTtcbm1vZHVsZS5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./src/components/Notice/style.module.css\n");

/***/ })

})