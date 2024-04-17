function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import React, { Component } from "react";
import { PageDown, PageUp, SearchIcon, Thumbnail, ZoomIn, ZoomOut } from "../../assets";
import "./index.css";
var Toolbox = /*#__PURE__*/function (_Component) {
  _inheritsLoose(Toolbox, _Component);
  function Toolbox() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _defineProperty(_assertThisInitialized(_this), "currentPage", React.createRef());
    _defineProperty(_assertThisInitialized(_this), "state", {
      pageInputFocus: false
    });
    _defineProperty(_assertThisInitialized(_this), "onFocusPageInput", function () {
      _this.currentPage.current.select();
      _this.setState({
        pageInputFocus: true
      });
    });
    _defineProperty(_assertThisInitialized(_this), "onBlurPageInput", function () {
      _this.setState({
        pageInputFocus: false
      });
    });
    _defineProperty(_assertThisInitialized(_this), "pageUp", function () {
      var _this$props = _this.props,
        currentPage = _this$props.currentPage,
        setCurrentPage = _this$props.setCurrentPage,
        goToPage = _this$props.goToPage;
      if (currentPage !== 1) {
        var newPage = Number(currentPage) - 1;
        setCurrentPage(newPage);
        goToPage(newPage);
      }
    });
    _defineProperty(_assertThisInitialized(_this), "pageDown", function () {
      var _this$props2 = _this.props,
        currentPage = _this$props2.currentPage,
        setCurrentPage = _this$props2.setCurrentPage,
        goToPage = _this$props2.goToPage,
        pdf = _this$props2.pdf;
      if (currentPage !== pdf.numPages) {
        var newPage = Number(currentPage) + 1;
        setCurrentPage(newPage);
        goToPage(newPage);
      }
    });
    return _this;
  }
  var _proto = Toolbox.prototype;
  _proto.render = function render() {
    var pageInputFocus = this.state.pageInputFocus;
    var _this$props3 = this.props,
      toggleThumbnail = _this$props3.toggleThumbnail,
      currentPage = _this$props3.currentPage,
      onZoomIn = _this$props3.onZoomIn,
      onZoomOut = _this$props3.onZoomOut,
      showSearchBar = _this$props3.showSearchBar,
      onChangePage = _this$props3.onChangePage;
    var numPages = this.props.pdf ? this.props.pdf.numPages : "-";
    return /*#__PURE__*/React.createElement("div", {
      className: "toolbox-container"
    }, /*#__PURE__*/React.createElement("div", {
      className: "toolbox-wrapper"
    }, /*#__PURE__*/React.createElement("div", {
      className: "toolbox"
    }, /*#__PURE__*/React.createElement(Thumbnail, {
      id: "thumbnail-icon",
      onClick: toggleThumbnail
    }), /*#__PURE__*/React.createElement("div", {
      className: "page-navigation"
    }, /*#__PURE__*/React.createElement(PageUp, {
      id: "page-up",
      onClick: this.pageUp,
      className: "page-up " + (currentPage === 1 ? "disabled" : "")
    }), /*#__PURE__*/React.createElement("span", {
      className: "pageNumber " + (pageInputFocus ? "input-focused" : ""),
      onFocus: this.onFocusPageInput,
      onClick: this.onFocusPageInput
    }, /*#__PURE__*/React.createElement("input", {
      ref: this.currentPage,
      type: "number",
      value: currentPage,
      min: 1,
      max: numPages,
      onChange: onChangePage,
      onBlur: this.onBlurPageInput
    }), /*#__PURE__*/React.createElement("span", null, "/ ", numPages)), /*#__PURE__*/React.createElement(PageDown, {
      id: "page-down",
      onClick: this.pageDown,
      className: "page-down " + (currentPage === numPages ? "disabled" : "")
    })), /*#__PURE__*/React.createElement(ZoomIn, {
      id: "zoom-in",
      onClick: onZoomIn
    }), /*#__PURE__*/React.createElement(ZoomOut, {
      id: "zoom-out",
      onClick: onZoomOut
    }), /*#__PURE__*/React.createElement(SearchIcon, {
      id: "search-icon",
      onClick: showSearchBar
    }))));
  };
  return Toolbox;
}(Component);
export default Toolbox;