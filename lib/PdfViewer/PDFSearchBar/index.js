"use strict";

exports.__esModule = true;
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _lodash = require("lodash");
var _assets = require("../../assets");
require("./index.css");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) { if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } } return n["default"] = e, t && t.set(e, n), n; }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var FIND_STATUS_TIMEOUT = 500;
var SearchBar = /*#__PURE__*/function (_Component) {
  _inheritsLoose(SearchBar, _Component);
  function SearchBar(props) {
    var _this;
    _this = _Component.call(this, props) || this;
    _defineProperty(_assertThisInitialized(_this), "searchInput", _react["default"].createRef());
    _defineProperty(_assertThisInitialized(_this), "onSearch", function () {
      var searchTerm = _this.searchInput.current.value;
      _this.setState({
        searchTerm: searchTerm,
        searchCompleted: false
      });
      _this.props.pdfFindController.executeCommand("find", {
        caseSensitive: false,
        findPrevious: undefined,
        highlightAll: true,
        phraseSearch: true,
        query: searchTerm
      });
      setTimeout(function () {
        var _this$props$pdfFindCo = _this.props.pdfFindController,
          matchCount = _this$props$pdfFindCo.matchCount,
          pageMatches = _this$props$pdfFindCo.pageMatches,
          pageIdx = _this$props$pdfFindCo.selected.pageIdx;
        var currentMatchIndex = pageIdx === 0 ? 1 : _this.getCurrentMatchIndex(pageMatches, pageIdx);
        _this.setState({
          searchCompleted: true,
          currentMatchIndex: currentMatchIndex,
          matchCount: matchCount
        });
      }, FIND_STATUS_TIMEOUT);
    });
    _defineProperty(_assertThisInitialized(_this), "findAgain", function (_ref) {
      var findPrevious = _ref.findPrevious;
      _this.props.pdfFindController.executeCommand("findagain", {
        caseSensitive: false,
        findPrevious: findPrevious,
        highlightAll: true,
        phraseSearch: true,
        query: _this.state.searchTerm
      });
    });
    _defineProperty(_assertThisInitialized(_this), "onSearchNext", function (e) {
      if (e.keyCode === 13 && e.target.value === _this.state.searchTerm) {
        _this.nextMatch({
          onSearch: true
        });
      }
    });
    _defineProperty(_assertThisInitialized(_this), "previousMatch", function () {
      var currentMatchIndex = _this.state.currentMatchIndex;
      if (currentMatchIndex === 1) return;
      _this.setState({
        currentMatchIndex: currentMatchIndex - 1
      });
      _this.findAgain({
        findPrevious: true
      });
    });
    _defineProperty(_assertThisInitialized(_this), "nextMatch", function (_ref2) {
      var onSearch = _ref2.onSearch;
      var _this$state = _this.state,
        currentMatchIndex = _this$state.currentMatchIndex,
        matchCount = _this$state.matchCount;
      var nextMatchIndex = 0;
      if (currentMatchIndex === matchCount) {
        if (!onSearch) return;
        nextMatchIndex = 1;
      } else {
        nextMatchIndex = currentMatchIndex + 1;
      }
      _this.setState({
        currentMatchIndex: nextMatchIndex
      });
      _this.findAgain({
        findPrevious: false
      });
    });
    _defineProperty(_assertThisInitialized(_this), "getCurrentMatchIndex", function (pageMatches, pageIdx) {
      var currentMatchIndex = 1;
      for (var i = 0; i < pageIdx; i++) {
        currentMatchIndex += pageMatches[i].length;
      }
      return currentMatchIndex;
    });
    _defineProperty(_assertThisInitialized(_this), "closeSearchBar", function () {
      _this.props.pdfFindController.executeCommand("find", {
        caseSensitive: false,
        findPrevious: undefined,
        highlightAll: true,
        phraseSearch: true,
        query: ""
      });
      _this.setState({
        searchCompleted: false,
        matchCount: undefined
      });
      _this.props.hideSearchBar();
    });
    _this.state = {
      searchTerm: "",
      currentMatchIndex: 1,
      matchCount: undefined,
      searchCompleted: false
    };
    _this.onSearchTerm = (0, _lodash.debounce)(_this.onSearch.bind(_assertThisInitialized(_this)), 500);
    return _this;
  }
  var _proto = SearchBar.prototype;
  _proto.render = function render() {
    var _this$state2 = this.state,
      searchTerm = _this$state2.searchTerm,
      currentMatchIndex = _this$state2.currentMatchIndex,
      matchCount = _this$state2.matchCount,
      searchCompleted = _this$state2.searchCompleted;
    return /*#__PURE__*/_react["default"].createElement("div", {
      id: "pdfSearchbar"
    }, /*#__PURE__*/_react["default"].createElement("input", {
      ref: this.searchInput,
      autoFocus: true,
      placeholder: "Search in document",
      onChange: this.onSearchTerm,
      onKeyDown: this.onSearchNext
    }), /*#__PURE__*/_react["default"].createElement("div", {
      className: "search-info"
    }, searchTerm && /*#__PURE__*/_react["default"].createElement("span", {
      className: "search-status"
    }, searchCompleted && /*#__PURE__*/_react["default"].createElement("span", null, matchCount ? /*#__PURE__*/_react["default"].createElement("span", null, currentMatchIndex, "/", matchCount) : /*#__PURE__*/_react["default"].createElement("span", null, "0/0")), matchCount > 0 && /*#__PURE__*/_react["default"].createElement(_assets.PrevIcon, {
      className: "search-bar-ico " + (currentMatchIndex === 1 ? "disabled" : ""),
      onClick: this.previousMatch
    }), matchCount > 0 && /*#__PURE__*/_react["default"].createElement(_assets.NextIcon, {
      className: "next-icon search-bar-ico " + (currentMatchIndex === matchCount ? "disabled" : ""),
      onClick: this.nextMatch
    })), /*#__PURE__*/_react["default"].createElement(_assets.CloseIcon, {
      id: "close-icon",
      className: "search-bar-ico",
      onClick: this.closeSearchBar
    })));
  };
  return SearchBar;
}(_react.Component);
var _default = exports["default"] = SearchBar;
module.exports = exports.default;