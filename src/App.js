import React, { useState } from "react";
import Survey from "../src/components/survey/Survey";

import "./App.css";

function App() {
    const [results, setResults] = useState("");
    const logResults = val => {
        setResults(val);
        console.log(results);
    };
    return (
        <div className="App">
            <Survey logResults={values => logResults(values)} />
        </div>
    );
}

export default App;
