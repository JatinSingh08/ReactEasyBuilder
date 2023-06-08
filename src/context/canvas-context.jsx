import React, { createContext, useContext, useEffect, useReducer, useRef } from 'react'
import { CanvasReducer, initialState } from '../reducers/CanvasReducer/CanvasReducer';
import { ActionType } from '../reducers/constants';
import ButtonComponent from '../components/CanvasComponents/ButtonComponent';
import InputComponent from '../components/CanvasComponents/InputComponent';
import DropdownComponent from '../components/CanvasComponents/DropdownComponent';
import TableComponent from '../components/CanvasComponents/TableComponent';

const CanvasContext = createContext();
const CanvasProvider = ({children}) => {
  const [state, dispatch] = useReducer(CanvasReducer, initialState);
  const elementsRef = useRef(state.elements);


  const saveElementsToLocalStorage = (elements) => {
    localStorage.setItem('canvasElements', JSON.stringify(elements));
  };
  
  useEffect(() => {
    saveElementsToLocalStorage(elementsRef.current);
  }, [elementsRef.current]);

  const getComponentWidth = ( type ) => {
    switch (type) {
      case 'textInput':
       return 3;
        break;
      default: 
        return 2;
        break;
    }
  }

  const getComponentHeight = (type) => {
    switch (type) {
      case 'textInput':
       return 2;
        break;
      case 'table':
        return 4;
        break;
      case 'button':
        return 2;
        break;
      default:
        return 1;
        break;
    }
  }
  const getDefaultText = (type) => {
    switch (type) {
      case 'button':
        return 'Button';
        break;
      case 'textInput':
        return 'Label'
      case 'dropdown':
        return 'Select Version'
      default:
        break;
    }
  }
  const getDefaultBorderRadius = (type) => {
    switch (type) {
      case 'button':
        return 8;
        break;
      case 'textInput':
        return 8;
        break;
      case 'dropdown':
        return 0;
        break;
      case 'table':
        return 0;
        break;
      default:
        break;
    }
  }

  const addElement = ({type}) => {
    const newElement = {
      i: `element-${state.elements.length + 1}`,
      x: 0,
      y: 0,
      w: getComponentWidth(type),
      h: getComponentHeight(type),
      text: getDefaultText(type),
      borderRadius: getDefaultBorderRadius(type),
      component: type
    }
    dispatch({ type: ActionType.SET_COMPONENT_TYPE, payload: type})
    dispatch({ type: ActionType.ADD_ELEMENT, payload: newElement});
    saveElementsToLocalStorage([...elementsRef.current, newElement]);
  }

  const updateElementsPosition = (updatedElements) => {
    elementsRef.current = updatedElements;
    dispatch({ type: ActionType.SET_ELEMENTS, payload: updatedElements });
  };

  // console.log("selectedComponent", state.selectedElement);

  const updateElement = (updatedElement) => {
    const updatedElements = state.elements.map((element) => {
      if(element.i === updatedElement.i) {
        return updatedElement;
      }
      return element;
    })
    dispatch({ type: ActionType.SET_ELEMENTS, payload: updatedElements})
  }

  return (
    <CanvasContext.Provider
    value={{
      state,
      dispatch,
      addElement,
      updateElementsPosition,
      updateElement
    }}
    >
      {children}
    </CanvasContext.Provider>
  )
  }

const useCanvas = () => useContext(CanvasContext);
export { CanvasProvider, useCanvas };
