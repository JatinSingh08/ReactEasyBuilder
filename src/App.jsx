import React from "react";
import "./App.css";

// You can split your components
import Editor from "./Editor";
import { Header } from "./components";

const App = () => {
  return (
    <div className="App">
      {/* Feel free to delete the header */}
      <Header />
      <Editor />
    </div>
  );
};

export default App;
