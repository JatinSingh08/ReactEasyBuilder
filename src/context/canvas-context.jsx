import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useRef,
} from "react";
import {
  CanvasReducer,
  initialState,
} from "../reducers/CanvasReducer/CanvasReducer";
import { ActionType } from "../reducers/constants";

const CanvasContext = createContext();

const CanvasProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CanvasReducer, initialState);
  const elementsRef = useRef(state.elements);

  const saveElementsToLocalStorage = (elements) => {
    localStorage.setItem("canvasElements", JSON.stringify(elements));
  };

  useEffect(() => {
    saveElementsToLocalStorage(elementsRef.current);
  }, [elementsRef.current]);

  const updateLocalStorage = () => {
    localStorage.setItem("canvasElements", JSON.stringify(state.elements));
  };
  
  useEffect(() => {
    updateLocalStorage();
  }, [state.elements]);

  const getComponentWidth = (type) => {
    switch (type) {
      case "textInput":
        return 3;
        break;
      default:
        return 2;
        break;
    }
  };

  const getComponentHeight = (type) => {
    switch (type) {
      case "textInput":
        return 2;
        break;
      case "table":
        return 4;
        break;
      case "button":
        return 2;
        break;
      default:
        return 1;
        break;
    }
  };

  const addElement = ({ type }) => {
    let newElement = {
      i: `element-${state.elements.length + 1}`,
      x: 0,
      y: 0,
      w: getComponentWidth(type),
      h: getComponentHeight(type),
      component: type,
    };

    switch (type) {
      case "button":
        newElement = {
          ...newElement,
          text: "Button",
          borderRadius: 8,
          bgColor: "blue",
        };
        break;
      case "textInput":
        newElement = {
          ...newElement,
          label: "Label",
          placeholder: "Enter Placeholder",
        };
        break;
      case "dropdown":
        newElement = {
          ...newElement,
          label: "Select Version",
          option_1: "Jatin is King developer",
          option_2: "Learn everyday something new",
          option_3: "Work hard",
        };
        break;
      case "table":
        newElement = {
          ...newElement,
          heading_1: "Name",
          heading_2: "Job",
          heading_3: "Employed",
        };
        break;
      default:
        break;
    }

    dispatch({ type: ActionType.SET_COMPONENT_TYPE, payload: type });
    dispatch({ type: ActionType.ADD_ELEMENT, payload: newElement });
    saveElementsToLocalStorage([...elementsRef.current, newElement]);
  };

  const updateElementsPosition = (updatedElements) => {
    elementsRef.current = updatedElements;
    dispatch({ type: ActionType.SET_ELEMENTS, payload: updatedElements });
  };

  const updateElement = (updatedElement) => {
    const updatedElements = state.elements.map((element) => {
      if (element.i === updatedElement.i) {
        return updatedElement;
      }
      return element;
    });
    dispatch({ type: ActionType.SET_ELEMENTS, payload: updatedElements });
  };

  return (
    <CanvasContext.Provider
      value={{
        state,
        dispatch,
        addElement,
        updateElementsPosition,
        updateElement,
      }}
    >
      {children}
    </CanvasContext.Provider>
  );
};

const useCanvas = () => useContext(CanvasContext);
export { CanvasProvider, useCanvas };
