import React, { Component } from "react";
import { render } from "react-dom";
import PDFViewer from "../../src";
import "./index.css";

export default class Demo extends Component {
    render() {
        return (
            <div
                style={{
                    padding: "50px",
                }}
            >
                <h1>PDF Viewer Testing</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eos, ullam delectus! Itaque amet voluptas vel? Repellendus
                    velit est, fuga vel facilis voluptas. Adipisci, odit eum aut
                    nobis iure ea ipsam consequuntur repellat quasi maiores
                    nulla laborum et autem iste deleniti sunt corporis id rem
                    dolor sed provident error quae recusandae!
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eos, ullam delectus! Itaque amet voluptas vel? Repellendus
                    velit est, fuga vel facilis voluptas. Adipisci, odit eum aut
                    nobis iure ea ipsam consequuntur repellat quasi maiores
                    nulla laborum et autem iste deleniti sunt corporis id rem
                    dolor sed provident error quae recusandae!
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eos, ullam delectus! Itaque amet voluptas vel? Repellendus
                    velit est, fuga vel facilis voluptas. Adipisci, odit eum aut
                    nobis iure ea ipsam consequuntur repellat quasi maiores
                    nulla laborum et autem iste deleniti sunt corporis id rem
                    dolor sed provident error quae recusandae!
                </p>
                <br />
                <div style={{ height: "600px" }}>
                    <PDFViewer
                        url="https://mozilla.github.io/pdf.js/web/compressed.tracemonkey-pldi-09.pdf"
                        showProgressBar
                        showToolbox
                    />
                </div>
                <br />
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eos, ullam delectus! Itaque amet voluptas vel? Repellendus
                    velit est, fuga vel facilis voluptas. Adipisci, odit eum aut
                    nobis iure ea ipsam consequuntur repellat quasi maiores
                    nulla laborum et autem iste deleniti sunt corporis id rem
                    dolor sed provident error quae recusandae!
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eos, ullam delectus! Itaque amet voluptas vel? Repellendus
                    velit est, fuga vel facilis voluptas. Adipisci, odit eum aut
                    nobis iure ea ipsam consequuntur repellat quasi maiores
                    nulla laborum et autem iste deleniti sunt corporis id rem
                    dolor sed provident error quae recusandae!
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eos, ullam delectus! Itaque amet voluptas vel? Repellendus
                    velit est, fuga vel facilis voluptas. Adipisci, odit eum aut
                    nobis iure ea ipsam consequuntur repellat quasi maiores
                    nulla laborum et autem iste deleniti sunt corporis id rem
                    dolor sed provident error quae recusandae!
                </p>
            </div>
        );
    }
}

render(<Demo />, document.querySelector("#demo"));
