import React from "react";
import "./Editor.css";
import {
  Button,
  Dropdown,
  PropertiesPanel,
  SearchBar,
  Settings,
  Table,
  TextInput,
} from "./components";
import { useCanvas } from "./context/canvas-context";
import { ActionType } from "./reducers/constants";
import { Toaster } from "react-hot-toast";

const EditorPicker = () => {
  const { state, dispatch, updateElement } = useCanvas();

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
          <button
            className={`text-[#707880] font-normal ${
              state.editorPicker === "components"
                ? "text-blue-500 font-semibold"
                : "hover:text-[#55606b]"
            }`}
            onClick={() =>
              dispatch({
                type: ActionType.SET_EDITOR_PICKER,
                payload: "components",
              })
            }
          >
            Components
          </button>

          <button
            className={`text-[#707880] font-normal ${
              state.editorPicker === "properties"
                ? "text-blue-500 font-semibold"
                : "hover:text-[#55606b]"
            }`}
            onClick={() =>
              dispatch({
                type: ActionType.SET_EDITOR_PICKER,
                payload: "properties",
              })
            }
          >
            Properties
          </button>
        </div>
        {state.editorPicker === "components" ? (
          <>
            {/* component list  */}
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
        )}
      </div>
    </div>
  );
};
export default EditorPicker;
