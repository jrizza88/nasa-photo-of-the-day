import React from "react";
import "./App.css";
import NasaPhoto from "./Components/NasaPhoto";

function App() {
  return (
    <div className="App">
      <NasaPhoto />
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
}

export default App;
