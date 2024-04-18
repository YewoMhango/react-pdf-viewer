"use strict";

exports.__esModule = true;
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
require("./index.css");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Thumbnail = /*#__PURE__*/function (_PureComponent) {
  function Thumbnail() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _PureComponent.call.apply(_PureComponent, [this].concat(args)) || this;
    _defineProperty(_this, "onClickThumbnail", function () {
      var _this$props = _this.props,
        setCurrentPage = _this$props.setCurrentPage,
        pageNum = _this$props.data.pageNum;
      setCurrentPage(pageNum);
    });
    return _this;
  }
  _inheritsLoose(Thumbnail, _PureComponent);
  var _proto = Thumbnail.prototype;
  _proto.render = function render() {
    var _this$props2 = this.props,
      _this$props2$data = _this$props2.data,
      thumbnailSrc = _this$props2$data.thumbnailSrc,
      pageNum = _this$props2$data.pageNum,
      currentPage = _this$props2.currentPage;
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "thumbnail",
      id: "thumbnail-" + pageNum
    }, /*#__PURE__*/_react["default"].createElement("img", {
      alt: pageNum,
      src: thumbnailSrc,
      className: "" + (currentPage === pageNum ? "focused" : ""),
      onClick: this.onClickThumbnail
    }), /*#__PURE__*/_react["default"].createElement("div", {
      className: "page-number"
    }, pageNum));
  };
  return Thumbnail;
}(_react.PureComponent);
var _default = exports["default"] = Thumbnail;
module.exports = exports.default;