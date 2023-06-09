import React from "react";
import "./Editor.css";
import { EditorCanvas } from "./components";
import EditorPicker from "./EditorPicker";

const Editor = () => {
  return (
    <div className="editor">
      <EditorCanvas />
      <EditorPicker />
    </div>
  );
};

export default Editor;
