import React, { useState } from "react";
import "./Editor.css";
import { Button, Dropdown, EditorCanvas, PropertiesPanel, SearchBar, Settings, Table, TextInput } from "./components";
import { useCanvas } from "./context/canvas-context";
import { ActionType } from "./reducers/constants";

const buttonTypes = ['button', 'input', 'dropdown', 'table'];
const EditorPicker = (props) => {
  const { state ,dispatch, updateElement } = useCanvas();

  console.log('selected element', state.selectedElement);
  return (
    <div className="editor-picker flex flex-col gap-4 ">
      <div className="flex items-end justify-end w-full">
        <Settings />
      </div>
      <div className="flex flex-col items-start mt-10 gap-4">
        <div className="flex w-full border border-[#D9E0E6] rounded-md">
          <SearchBar />
        </div>
        <div className="flex gap-6">
          <button className="text-[#707880] font-normal transition-all duration-75 ease-in-out hover:text-[#55606b] hover:font-medium"
          onClick={() => dispatch({ type: ActionType.SET_EDITOR_PICKER, payload: 'components' })}
          >Components</button>
          <button className="text-[#707880] font-normal transition-all duration-75 ease-in-out hover:text-[#55606b] hover:font-medium"
          onClick={() => dispatch({ type: ActionType.SET_EDITOR_PICKER, payload: 'properties' })}
          >Properties</button>

        </div>
        {
          state.editorPicker === 'components' ?
          (
            <>
              <TextInput />
              <Button />
              <Dropdown />
              <Table />
            </>
          ) : (
            <PropertiesPanel
            selectedElement={state.selectedElement}
            updateElement={updateElement}
            />
          )
        }

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
