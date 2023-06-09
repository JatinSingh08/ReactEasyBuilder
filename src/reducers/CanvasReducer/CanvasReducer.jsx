import React from 'react'
import { ActionType } from '../constants';

const initialState = {
  comopnentType: '',
  elements: JSON.parse(localStorage.getItem('canvasElements')) || [],
  selectedElement: null,
  editorPicker: 'components'
}
const CanvasReducer = (state, action) => {
  switch (action.type) {
    case ActionType.ADD_ELEMENT:
      return {
        ...state,
        elements: [...state.elements, action.payload]
      }
    case ActionType.SET_COMPONENT_TYPE: 
      return {
        ...state,
        comopnentType: action.payload
      }
    case ActionType.SET_ELEMENTS: 
      return {
        ...state,
        elements: action.payload
      }
    case ActionType.SELECT_ELEMENT:
      return {
        ...state,
        selectedElement: action.payload
      }
    case ActionType.SET_EDITOR_PICKER: 
      return {
        ...state,
        editorPicker: action.payload
      }
  }
}

export { CanvasReducer, initialState }
