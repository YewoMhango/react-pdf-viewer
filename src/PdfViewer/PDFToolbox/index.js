import React, { Component } from "react";

import {
    PageDown,
    PageUp,
    SearchIcon,
    Thumbnail,
    ZoomIn,
    ZoomOut,
    FullScreenIcon,
} from "../../assets";

import "./index.css";

class Toolbox extends Component {
    currentPage = React.createRef();

    state = {
        pageInputFocus: false,
    };

    onFocusPageInput = () => {
        this.currentPage.current.select();
        this.setState({
            pageInputFocus: true,
        });
    };

    onBlurPageInput = () => {
        this.setState({
            pageInputFocus: false,
        });
    };

    pageUp = () => {
        const { currentPage, setCurrentPage, goToPage } = this.props;

        if (currentPage !== 1) {
            const newPage = Number(currentPage) - 1;
            setCurrentPage(newPage);
            goToPage(newPage);
        }
    };

    pageDown = () => {
        const { currentPage, setCurrentPage, goToPage, pdf } = this.props;

        if (currentPage !== pdf.numPages) {
            const newPage = Number(currentPage) + 1;
            setCurrentPage(newPage);
            goToPage(newPage);
        }
    };

    render() {
        const { pageInputFocus } = this.state;
        const {
            toggleThumbnail,
            currentPage,
            onZoomIn,
            onZoomOut,
            showSearchBar,
            onChangePage,
            onFullScreen,
        } = this.props;

        const numPages = this.props.pdf ? this.props.pdf.numPages : "-";

        return (
            <div className="toolbox-container">
                <div className="toolbox-wrapper">
                    <div className="toolbox">
                        <Thumbnail
                            id="thumbnail-icon"
                            onClick={toggleThumbnail}
                        />

                        <div className="page-navigation">
                            <PageUp
                                id="page-up"
                                onClick={this.pageUp}
                                className={`page-up ${
                                    currentPage === 1 ? "disabled" : ""
                                }`}
                            />

                            <span
                                className={`pageNumber ${
                                    pageInputFocus ? "input-focused" : ""
                                }`}
                                onFocus={this.onFocusPageInput}
                                onClick={this.onFocusPageInput}
                            >
                                <input
                                    ref={this.currentPage}
                                    type="number"
                                    value={currentPage}
                                    min={1}
                                    max={numPages}
                                    onChange={onChangePage}
                                    onBlur={this.onBlurPageInput}
                                />

                                <span>/ {numPages}</span>
                            </span>

                            <PageDown
                                id="page-down"
                                onClick={this.pageDown}
                                className={`page-down ${
                                    currentPage === numPages ? "disabled" : ""
                                }`}
                            />
                        </div>

                        <ZoomIn id="zoom-in" onClick={onZoomIn} />
                        <ZoomOut id="zoom-out" onClick={onZoomOut} />
                        <FullScreenIcon
                            id="fullscreen-icon"
                            onClick={onFullScreen}
                        />
                        <SearchIcon id="search-icon" onClick={showSearchBar} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Toolbox;
