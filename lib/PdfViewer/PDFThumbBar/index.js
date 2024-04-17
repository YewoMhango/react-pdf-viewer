"use strict";

exports.__esModule = true;
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _react = _interopRequireWildcard(require("react"));
var _Thumbnail = _interopRequireDefault(require("./Thumbnail"));
require("./index.css");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) { if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } } return n["default"] = e, t && t.set(e, n), n; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } /* eslint-disable */
var PDFThumbbar = /*#__PURE__*/function (_PureComponent) {
  _inheritsLoose(PDFThumbbar, _PureComponent);
  function PDFThumbbar() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _PureComponent.call.apply(_PureComponent, [this].concat(args)) || this;
    _defineProperty(_assertThisInitialized(_this), "state", {
      thumbnails: []
    });
    _defineProperty(_assertThisInitialized(_this), "loadThumbnailsData", /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee(pdf) {
        var pages, thumbnails;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                pages = [];
                while (pages.length < pdf.numPages) {
                  pages.push(pages.length + 1);
                }
                _context.next = 4;
                return Promise.all(pages.map(function (num) {
                  return pdf.getPage(num).then(_this.makeThumb).then(function (url) {
                    return {
                      thumbnailSrc: url,
                      pageNum: num
                    };
                  });
                }));
              case 4:
                thumbnails = _context.sent;
                _this.setState({
                  thumbnails: thumbnails
                });
              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));
      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
    _defineProperty(_assertThisInitialized(_this), "makeThumb", function (page) {
      var viewport = page.getViewport(1.0);
      var canvas = document.createElement("canvas");
      canvas.height = viewport.height;
      canvas.width = viewport.width;
      return page.render({
        canvasContext: canvas.getContext("2d"),
        viewport: viewport
      }).promise.then(function () {
        var src = canvas.toDataURL();
        canvas.width = 0;
        canvas.height = 0;
        return src;
      });
    });
    return _this;
  }
  var _proto = PDFThumbbar.prototype;
  _proto.componentDidMount = function componentDidMount() {
    if (this.props.pdf) {
      this.loadThumbnailsData(this.props.pdf);
    }
  };
  _proto.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (nextProps.pdf && !this.state.thumbnails.length) {
      this.loadThumbnailsData(nextProps.pdf);
    }
  };
  _proto.render = function render() {
    var thumbnails = this.state.thumbnails;
    var _this$props = this.props,
      currentPage = _this$props.currentPage,
      setCurrentPage = _this$props.setCurrentPage,
      showThumbSidebar = _this$props.showThumbSidebar;
    if (!thumbnails.length) {
      return null;
    }
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "pdf-thumbnail-bar " + (!showThumbSidebar ? "hide" : "")
    }, thumbnails.map(function (thumbnail) {
      return /*#__PURE__*/_react["default"].createElement(_Thumbnail["default"], {
        key: thumbnail.pageNum,
        data: thumbnail,
        currentPage: currentPage,
        setCurrentPage: setCurrentPage
      });
    }));
  };
  return PDFThumbbar;
}(_react.PureComponent);
var _default = exports["default"] = PDFThumbbar;
module.exports = exports.default;