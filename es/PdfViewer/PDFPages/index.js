function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import React from "react";
import { PDFJS } from "pdfjs-dist/web/pdf_viewer";
import "./index.css";
PDFJS.workerSrc = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.0.338/pdf.worker.js";
var SCROLL_TOP_PADDING = 200;
export var PdfPages = /*#__PURE__*/function (_React$Component) {
  function PdfPages() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _defineProperty(_this, "setupViewer", function () {
      PDFJS.disableTextLayer = false;
      PDFJS.externalLinkTarget = PDFJS.LinkTarget.PARENT;

      // PDF Link Service
      _this._pdfLinkService = new PDFJS.PDFLinkService({
        eventBus: _this._eventBus
      });

      // PDF Viewer
      _this._pdfViewer = new PDFJS.PDFViewer({
        container: document.getElementById("pdf-pages"),
        removePageBorders: true,
        linkService: _this._pdfLinkService
      });
      _this._pdfLinkService.setViewer(_this._pdfViewer);

      // PDF Find Controller
      _this._pdfFindController = new PDFJS.PDFFindController({
        pdfViewer: _this._pdfViewer
      });
      _this._pdfViewer.setFindController(_this._pdfFindController);

      // Set external Refs
      _this.props.setPdfViewer(_this._pdfViewer);
      _this.props.setFindController(_this._pdfFindController);
    });
    _defineProperty(_this, "onScrollCheck", function () {
      if (_this._pdfViewer) {
        var _this$docViewer = _this.docViewer,
          scrollTop = _this$docViewer.scrollTop,
          scrollHeight = _this$docViewer.scrollHeight;
        var currentPage = Math.ceil((scrollTop + SCROLL_TOP_PADDING) / (scrollHeight / _this._pdf.numPages));
        _this.props.setCurrentPage(currentPage);
      }
    });
    _defineProperty(_this, "stream", function (props) {
      var url = props.url;
      if (url) {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", url);
        xhr.responseType = "arraybuffer";
        xhr.onprogress = function (e) {
          if (e.lengthComputable) {
            var percent = Math.round(e.loaded / e.total * 100);
            _this.props.updateProgressBar(percent);
          }
        };
        xhr.onload = function () {
          if (xhr.status === 200) {
            var _ab = xhr.response;
            _this.pdf = _ab;
            _this.loadPDF(_ab);
          } else {
            console.error("Error while requesting", url);
          }
        };
        xhr.onerror = function () {
          console.error("Error while requesting", url);
        };
        xhr.send();
      }
    });
    _defineProperty(_this, "loadPDF", function () {
      var src = _this.pdf;
      if (!src) {
        return;
      }
      PDFJS.getDocument(src).then(function (pdf) {
        _this._pdf = pdf;
        _this.props.setPdf(_this._pdf);
        _this.update();
      }, function (err) {
        var error = err.name || err.toString();
        _this.pdfLoadError.emit(error);
      });
    });
    _defineProperty(_this, "zoom", function (scale) {
      _this._zoom = scale;
      _this._pdfViewer.currentScale = _this._zoom;
    });
    return _this;
  }
  _inheritsLoose(PdfPages, _React$Component);
  var _proto = PdfPages.prototype;
  _proto.componentDidMount = function componentDidMount() {
    this.setupViewer();
    this.stream(this.props);
    this.docViewer = document.getElementById("viewer-container");
    this.docViewer.addEventListener("scroll", this.onScrollCheck);
  };
  _proto.componentWillReceiveProps = function componentWillReceiveProps(newProps) {
    if (newProps.scale && newProps.scale !== this.props.scale) {
      this.zoom(newProps.scale);
    }
  };
  _proto.componentWillUnmount = function componentWillUnmount() {
    this.docViewer.removeEventListener("scroll", this.onScrollCheck);
  };
  _proto.update = function update() {
    if (this._pdfViewer) {
      this._pdfViewer.setDocument(this._pdf);
    }
    if (this._pdfLinkService) {
      this._pdfLinkService.setDocument(this._pdf, null);
    }
    this.render();
  };
  _proto.render = function render() {
    return /*#__PURE__*/React.createElement("div", null);
  };
  return PdfPages;
}(React.Component);
export default PdfPages;