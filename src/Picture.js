import React, { Component } from "react";

import SourceImg from "./2000.jpeg";
import Fallback from "./fallback.jpeg";
import "./common.css";

class App extends Component {
    render() {
        return (
            <div>
                <h1>React</h1>
                <picture>
                    <source
                        type="image/jpeg"
                        sizes="500px"
                        srcSet={`${SourceImg} 2000w`}
                    />
                    <img alt="test case" sizes="500px" src={Fallback} />
                </picture>
            </div>
        );
    }
}

export default App;
