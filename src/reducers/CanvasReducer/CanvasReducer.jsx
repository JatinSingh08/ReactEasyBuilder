import React from "react";
import { ActionType } from "../constants";

const initialState = {
  selectedElement: null,
  elements: JSON.parse(localStorage.getItem("canvasElements")) || [],
  editorPicker: "components",
};

const CanvasReducer = (state, action) => {
  switch (action.type) {
    case ActionType.ADD_ELEMENT:
      return {
        ...state,
        elements: [...state.elements, action.payload],
      };
    case ActionType.SET_ELEMENTS:
      return {
        ...state,
        elements: action.payload,
      };
    case ActionType.SELECT_ELEMENT:
      return {
        ...state,
        selectedElement: action.payload,
      };
    case ActionType.SET_EDITOR_PICKER:
      return {
        ...state,
        editorPicker: action.payload,
      };
    default:
      return state;
  }
};

export { CanvasReducer, initialState };
