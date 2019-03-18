import React from "react";
import { hot } from "react-hot-loader";
import { render } from "react-dom";

class App extends React.Component {
    public render () {
        return (
            <div>
                Hello World
            </div>
        );
    }
}

const HotApp = hot(module)(App);

render(<HotApp />, document.getElementById("root"));
