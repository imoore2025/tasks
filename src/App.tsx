import React from "react";
import "./App.css";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <h1>This is also a header</h1>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <p>Hello World</p>
            <div>
                <img src="/neuroinformatics.jpg" alt="This is an image" />
            </div>
            <ol>
                <li>First thing</li>
                <li>Another thing</li>
                <li>A third thing</li>
            </ol>
        </div>
    );
}

export default App;
