# react-pdf

**React PDF is a simple and fancy PDF Viewer based on pdf.js**

[![Gitpod Ready-to-Code](https://img.shields.io/badge/Gitpod-ready--to--code-blue?logo=gitpod)](https://github.com/intelllex/react-pdf) 
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/intelllex/react-pdf/graphs/commit-activity)
[![Downloads Total](https://img.shields.io/npm/dt/@intelllex/react-pdf.svg)](https://www.npmjs.com/package/@intelllex/react-pdf)
[![Downloads Month](https://img.shields.io/npm/dm/@intelllex/react-pdf.svg)](https://www.npmjs.com/package/@intelllex/react-pdf)

[Demo](https://intelllex.github.io/react-pdf/)

- Progress Bar
- Thumbnail sidebar
- Toolbox (zoom in, zoom out, page jump, page up, page down)
- Search within page

![image info](https://i.imgur.com/rqECUDN.png)

# How to install

```
npm install @intelllex/react-pdf
```

or

```
yarn add @intelllex/react-pdf
```

# How to use

```js
import React from 'react';
import ReactPDF from '@intelllex/react-pdf';

const ExampleReactPDF = () => {
    return (
        <ReactPDF
            url="<PDF_url>"
            showProgressBar
            showToolbox
        />
    )
};
 
export default ExampleReactPDF;
```

# Documentation
React component prop. types:

-   `url`

    -   Type: _String_
    -   Required: **true**
    -   Description: The URL of PDF Document you want to display.

-   `showProgressBar`

    -   Type: _Boolean_
    -   Required: **false**
    -   Description: Show progress bar on top when loading PDF Document

-   `showToolbox`

    -   Type: _Boolean_
    -   Required: **false**
    -   Description: Show the useful toolbox on PDF Pages

-   `onChangePage`
    -   Type: _Function_
    -   Required: **false**
    -   Description: Callback with `page` param when changing Page Number

-   `onZoomIn`
    -   Type: _Function_
    -   Required: **false**
    -   Description: Callback when clicking on Zoom In button

-   `onZoomOut`
    -   Type: _Function_
    -   Required: **false**
    -   Description: Callback when clicking on Zoom Out button

-   `onProgress`
    -   Type: _Function_
    -   Required: **false**
    -   Description: Callback with `progress` param when loading PDF

-   `onToggleThumbnail`
    -   Type: _Function_
    -   Required: **false**
    -   Description: Callback with `isShowThumbSidebar` param when toggling Thumbnail sidebar

# Contributors
- Design by [Cellyn Tan](https://cellyntan.com), Digital Product Designer at [INTELLLEX](https://intelllex.com).

- Maintain by [Trinh Ngoc Dieu](https://trinhngocdieu.com), Software Engineer at [INTELLLEX](https://intelllex.com).

# License
Copyright © 2020 [INTELLLEX HOLDINGS PRIVATE LIMITED](https://intelllex.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
Except as contained in this notice, the name of the INTELLLEX HOLDINGS PRIVATE LIMITED shall not be used in advertising or otherwise to promote the sale, use or other dealings in this Software without prior written authorization from INTELLLEX HOLDINGS PRIVATE LIMITED.

