function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from 'react';
var Thumbnail = function Thumbnail(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    fill: "#fff",
    fillRule: "evenodd",
    d: "M19 5h-8v15h8V5zM4 5h5v15H4V5zm0-2a2 2 0 00-2 2v15a2 2 0 002 2h15a2 2 0 002-2V5a2 2 0 00-2-2H4zm2 3a1 1 0 00-1 1v1a1 1 0 001 1h1a1 1 0 001-1V7a1 1 0 00-1-1H6zm0 5a1 1 0 00-1 1v1a1 1 0 001 1h1a1 1 0 001-1v-1a1 1 0 00-1-1H6zm-1 6a1 1 0 011-1h1a1 1 0 011 1v1a1 1 0 01-1 1H6a1 1 0 01-1-1v-1z",
    clipRule: "evenodd"
  }));
};
export default Thumbnail;