import React, { createContext, useContext, useReducer } from 'react'
import { CanvasReducer, initialState } from '../reducers/CanvasReducer/CanvasReducer';
import { ActionType } from '../reducers/constants';
import ButtonComponent from '../components/CanvasComponents/ButtonComponent';
import InputComponent from '../components/CanvasComponents/InputComponent';
import DropdownComponent from '../components/CanvasComponents/DropdownComponent';
import TableComponent from '../components/CanvasComponents/TableComponent';

const CanvasContext = createContext();
const CanvasProvider = ({children}) => {
  const [state, dispatch] = useReducer(CanvasReducer, initialState);


  const addElement = ({type}) => {
    let newComponent = null;
    switch (type) {
      case 'button':
        newComponent = <ButtonComponent />
        break;
      case 'textInput':
        newComponent = <InputComponent />
        break;
      case 'dropdown': 
        newComponent = <DropdownComponent />
        break;
      case 'table':
        newComponent = <TableComponent />
        break;
      default:
        break;
    }
    const newElement = {
      i: `element-${state.elements.length + 1}`,
      x: 0,
      y: 0,
      w: 2,
      h: type === 'textInput' ? 4 : 'table' ? 4 : 1,
      component: newComponent
    }
    dispatch({ type: ActionType.SET_COMPONENT_TYPE, payload: type})
    dispatch({ type: ActionType.ADD_ELEMENT, payload: newElement});
  }

  return (
    <CanvasContext.Provider
    value={{
      state,
      dispatch,
      addElement
    }}
    >
      {children}
    </CanvasContext.Provider>
  )
  }

const useCanvas = () => useContext(CanvasContext);
export { CanvasProvider, useCanvas };
