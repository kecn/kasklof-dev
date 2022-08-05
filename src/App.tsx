import React from "react";
import portrait from "./portrait.png";
import "./App.css";
import BlinkingContent from "./components/BlinkingContent.view";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={portrait} className="App-logo" alt="portrait of developer" />
        <BlinkingContent text={"BE-developer gives it a try"} />
      </header>
    </div>
  );
}

export default App;
