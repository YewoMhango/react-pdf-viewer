function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from 'react';
var SearchIcon = function SearchIcon(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    fill: "#fff",
    fillRule: "evenodd",
    d: "M10 18a8 8 0 116.32-3.094l5.387 5.387-1.414 1.414-5.387-5.387A7.969 7.969 0 0110 18zm6-8a6 6 0 11-12 0 6 6 0 0112 0z",
    clipRule: "evenodd"
  }));
};
export default SearchIcon;