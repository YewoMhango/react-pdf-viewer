"use strict";

exports.__esModule = true;
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _PDFPages = _interopRequireDefault(require("./PDFPages"));
var _PDFToolbox = _interopRequireDefault(require("./PDFToolbox"));
var _PDFThumbBar = _interopRequireDefault(require("./PDFThumbBar"));
var _PDFSearchBar = _interopRequireDefault(require("./PDFSearchBar"));
var _PDFProgressBar = _interopRequireDefault(require("./PDFProgressBar"));
require("./index.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var ZOOM_STEP = 0.2;
var PdfViewer = /*#__PURE__*/function (_PureComponent) {
  function PdfViewer() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _PureComponent.call.apply(_PureComponent, [this].concat(args)) || this;
    _defineProperty(_this, "containerRef", (0, _react.createRef)());
    _defineProperty(_this, "state", {
      pdf: null,
      scale: 1.2,
      progress: 0,
      currentPage: 1,
      showSearchBar: false,
      isFullScreen: false,
      showThumbSidebar: _this.props.showThumbnailSidebar
    });
    _defineProperty(_this, "setCurrentPage", function (currentPage) {
      if (currentPage !== _this.state.currentPage) {
        _this.setState({
          currentPage: currentPage
        });
        var onChangePage = _this.props.onChangePage;
        onChangePage && onChangePage(currentPage);
      }
    });
    _defineProperty(_this, "setPdf", function (pdf) {
      _this.setState({
        pdf: pdf
      });
    });
    _defineProperty(_this, "setPdfViewer", function (pdfViewer) {
      _this.setState({
        pdfViewer: pdfViewer
      });
    });
    _defineProperty(_this, "setFindController", function (findController) {
      _this._pdfFindController = findController;
    });
    _defineProperty(_this, "onZoomIn", function () {
      _this.setState({
        scale: _this.state.scale + ZOOM_STEP
      });
      var onZoomIn = _this.props.onZoomIn;
      onZoomIn && onZoomIn();
    });
    _defineProperty(_this, "onZoomOut", function () {
      _this.setState({
        scale: _this.state.scale - ZOOM_STEP
      });
      var onZoomOut = _this.props.onZoomOut;
      onZoomOut && onZoomOut();
    });
    _defineProperty(_this, "onFullScreen", function () {
      if (!_this.state.isFullScreen) {
        var _this$containerRef$cu;
        (_this$containerRef$cu = _this.containerRef.current) === null || _this$containerRef$cu === void 0 ? void 0 : _this$containerRef$cu.requestFullscreen();
        _this.setState({
          isFullScreen: true
        });
      } else {
        document.exitFullscreen();
        _this.setState({
          isFullScreen: false
        });
      }
    });
    _defineProperty(_this, "updateProgressBar", function (progress) {
      _this.setState({
        progress: progress
      });
      var onProgress = _this.props.onProgress;
      onProgress && onProgress();
    });
    _defineProperty(_this, "onChangePage", function (e) {
      var newPageNum = Number(e.target.value);
      _this.scrollTo(newPageNum);
    });
    _defineProperty(_this, "scrollTo", function (page) {
      _this.setCurrentPage(page);
      _this.goToPage(page);
    });
    _defineProperty(_this, "goToPage", function (pageNumber) {
      var pdfViewer = _this.state.pdfViewer;
      pdfViewer.currentPageNumber = pageNumber;
      document.querySelector(".page[data-page-number=\"" + pageNumber + "\"]").scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    });
    _defineProperty(_this, "toggleThumbnail", function () {
      _this.setState({
        showThumbSidebar: !_this.state.showThumbSidebar
      });
      var onToggleThumbnail = _this.props.onToggleThumbnail;
      onToggleThumbnail && onToggleThumbnail(!_this.state.showThumbSidebar);
    });
    _defineProperty(_this, "showSearchBar", function () {
      _this.setState({
        showSearchBar: true
      });
    });
    _defineProperty(_this, "hideSearchBar", function () {
      _this.setState({
        showSearchBar: false
      });
    });
    return _this;
  }
  _inheritsLoose(PdfViewer, _PureComponent);
  var _proto = PdfViewer.prototype;
  _proto.render = function render() {
    var _this$state = this.state,
      pdf = _this$state.pdf,
      progress = _this$state.progress,
      scale = _this$state.scale,
      currentPage = _this$state.currentPage,
      showSearchBar = _this$state.showSearchBar,
      showThumbSidebar = _this$state.showThumbSidebar;
    var _this$props = this.props,
      url = _this$props.url,
      showProgressBar = _this$props.showProgressBar,
      showToolbox = _this$props.showToolbox;
    return /*#__PURE__*/_react["default"].createElement("div", {
      id: "viewer-container",
      ref: this.containerRef
    }, showProgressBar && /*#__PURE__*/_react["default"].createElement(_PDFProgressBar["default"], {
      progress: progress
    }), /*#__PURE__*/_react["default"].createElement("div", {
      id: "viewer"
    }, showSearchBar && /*#__PURE__*/_react["default"].createElement(_PDFSearchBar["default"], {
      pdfFindController: this._pdfFindController,
      hideSearchBar: this.hideSearchBar
    }), /*#__PURE__*/_react["default"].createElement(_PDFThumbBar["default"], {
      pdf: pdf,
      currentPage: currentPage,
      setCurrentPage: this.scrollTo,
      showThumbSidebar: showThumbSidebar
    }), /*#__PURE__*/_react["default"].createElement("div", {
      className: "pdfViewer " + (!showThumbSidebar ? "full" : "")
    }, showToolbox && /*#__PURE__*/_react["default"].createElement(_PDFToolbox["default"], {
      pdf: pdf,
      currentPage: currentPage,
      setCurrentPage: this.setCurrentPage,
      goToPage: this.goToPage,
      showThumbSidebar: showThumbSidebar,
      toggleThumbnail: this.toggleThumbnail,
      onZoomIn: this.onZoomIn,
      onZoomOut: this.onZoomOut,
      showSearchBar: this.showSearchBar,
      onChangePage: this.onChangePage,
      onFullScreen: this.onFullScreen
    }), /*#__PURE__*/_react["default"].createElement("div", {
      id: "pdf-pages"
    }, url && /*#__PURE__*/_react["default"].createElement(_PDFPages["default"], {
      url: url,
      scale: scale,
      setPdf: this.setPdf,
      setPdfViewer: this.setPdfViewer,
      setFindController: this.setFindController,
      setCurrentPage: this.setCurrentPage,
      updateProgressBar: this.updateProgressBar
    })))));
  };
  return PdfViewer;
}(_react.PureComponent);
var _default = exports["default"] = PdfViewer;
module.exports = exports.default;