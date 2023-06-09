import React from "react";
import "./App.css";
import Editor from "./Editor";
import { Header } from "./components";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Editor />
      <Toaster />
    </div>
  );
};

export default App;
