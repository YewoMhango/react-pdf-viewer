function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import React, { Component } from "react";
import { debounce } from "lodash";
import { CloseIcon, NextIcon, PrevIcon } from "../../assets";
import "./index.css";
var FIND_STATUS_TIMEOUT = 500;
var SearchBar = /*#__PURE__*/function (_Component) {
  function SearchBar(props) {
    var _this;
    _this = _Component.call(this, props) || this;
    _defineProperty(_this, "searchInput", React.createRef());
    _defineProperty(_this, "onSearch", function () {
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
    _defineProperty(_this, "findAgain", function (_ref) {
      var findPrevious = _ref.findPrevious;
      _this.props.pdfFindController.executeCommand("findagain", {
        caseSensitive: false,
        findPrevious: findPrevious,
        highlightAll: true,
        phraseSearch: true,
        query: _this.state.searchTerm
      });
    });
    _defineProperty(_this, "onSearchNext", function (e) {
      if (e.keyCode === 13 && e.target.value === _this.state.searchTerm) {
        _this.nextMatch({
          onSearch: true
        });
      }
    });
    _defineProperty(_this, "previousMatch", function () {
      var currentMatchIndex = _this.state.currentMatchIndex;
      if (currentMatchIndex === 1) return;
      _this.setState({
        currentMatchIndex: currentMatchIndex - 1
      });
      _this.findAgain({
        findPrevious: true
      });
    });
    _defineProperty(_this, "nextMatch", function (_ref2) {
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
    _defineProperty(_this, "getCurrentMatchIndex", function (pageMatches, pageIdx) {
      var currentMatchIndex = 1;
      for (var i = 0; i < pageIdx; i++) {
        currentMatchIndex += pageMatches[i].length;
      }
      return currentMatchIndex;
    });
    _defineProperty(_this, "closeSearchBar", function () {
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
    _this.onSearchTerm = debounce(_this.onSearch.bind(_this), 500);
    return _this;
  }
  _inheritsLoose(SearchBar, _Component);
  var _proto = SearchBar.prototype;
  _proto.render = function render() {
    var _this$state2 = this.state,
      searchTerm = _this$state2.searchTerm,
      currentMatchIndex = _this$state2.currentMatchIndex,
      matchCount = _this$state2.matchCount,
      searchCompleted = _this$state2.searchCompleted;
    return /*#__PURE__*/React.createElement("div", {
      id: "pdfSearchbar"
    }, /*#__PURE__*/React.createElement("input", {
      ref: this.searchInput,
      autoFocus: true,
      placeholder: "Search in document",
      onChange: this.onSearchTerm,
      onKeyDown: this.onSearchNext
    }), /*#__PURE__*/React.createElement("div", {
      className: "search-info"
    }, searchTerm && /*#__PURE__*/React.createElement("span", {
      className: "search-status"
    }, searchCompleted && /*#__PURE__*/React.createElement("span", null, matchCount ? /*#__PURE__*/React.createElement("span", null, currentMatchIndex, "/", matchCount) : /*#__PURE__*/React.createElement("span", null, "0/0")), matchCount > 0 && /*#__PURE__*/React.createElement(PrevIcon, {
      className: "search-bar-ico " + (currentMatchIndex === 1 ? "disabled" : ""),
      onClick: this.previousMatch
    }), matchCount > 0 && /*#__PURE__*/React.createElement(NextIcon, {
      className: "next-icon search-bar-ico " + (currentMatchIndex === matchCount ? "disabled" : ""),
      onClick: this.nextMatch
    })), /*#__PURE__*/React.createElement(CloseIcon, {
      id: "close-icon",
      className: "search-bar-ico",
      onClick: this.closeSearchBar
    })));
  };
  return SearchBar;
}(Component);
export default SearchBar;