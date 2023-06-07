import React from "react";
import "./Editor.css";
import { Button, Dropdown, EditorCanvas, SearchBar, Settings, Table, TextInput } from "./components";

// const EditorCanvas = (props) => {
//   return (
//     <div className="editor-canvas">
//       <h4> Put the drag and drop interface over here! </h4>
//     </div>
//   );
// };

const buttonTypes = ['button', 'input', 'dropdown', 'table'];
const EditorPicker = (props) => {
  return (
    <div className="editor-picker flex flex-col gap-4 ">
      <div className="flex items-end justify-end w-full">
        <Settings />
      </div>
      <div className="flex flex-col items-start mt-4 gap-4">
        <div className="flex w-full">
          <SearchBar />
        </div>
          
        <h2 className="text-[#707880]">Components</h2>
        <TextInput />
        <Button />
        <Dropdown />
        <Table />

      </div>
    </div>
  );
};

const Editor = (props) => {
  return (
    <div className="editor">
      <EditorCanvas />
      <EditorPicker />
    </div>
  );
};

export default Editor;
