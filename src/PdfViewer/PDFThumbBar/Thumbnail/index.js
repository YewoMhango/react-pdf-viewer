import React, { PureComponent } from "react";
import "./index.css";

class Thumbnail extends PureComponent {
    onClickThumbnail = () => {
        const {
            setCurrentPage,
            data: { pageNum },
        } = this.props;

        setCurrentPage(pageNum);
    };

    render() {
        const {
            data: { thumbnailSrc, pageNum },
            currentPage,
        } = this.props;

        return (
            <div className="thumbnail" id={"thumbnail-" + pageNum}>
                <img
                    alt={pageNum}
                    src={thumbnailSrc}
                    className={`${currentPage === pageNum ? "focused" : ""}`}
                    onClick={this.onClickThumbnail}
                />
                <div className="page-number">{pageNum}</div>
            </div>
        );
    }
}

export default Thumbnail;
