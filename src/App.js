import React, { useState } from "react";
import "./App.css";
import Header from "./Header";
import Nav from "./Nav";
import Results from "./Results";
import requests from "./requests";
import Credit from "./Credit";

function App() {
    const [selectedOption, setSelectedOption] = useState(
        requests.fetchTrending
    );
    return (
        <div className="app">
            <Header />
            <Nav setSelectedOption={setSelectedOption} />
            <Results selectedOption={selectedOption} />
            <Credit />
        </div>
    );
}

export default App;
