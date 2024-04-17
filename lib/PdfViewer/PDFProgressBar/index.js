"use strict";

exports.__esModule = true;
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
require("./index.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var PDFProgressBar = function PDFProgressBar(_ref) {
  var progress = _ref.progress;
  if (progress === 0 || progress === 100) return null;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "progress-bar"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "progress"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "progress-percent",
    style: {
      width: progress + "%"
    }
  })));
};
var _default = exports["default"] = PDFProgressBar;
module.exports = exports.default;