import React from 'react'
import { ActionType } from '../constants';

const initialState = {
  comopnentType: '',
  elements: [
    // { i: "a", x: 0, y: 0, w: 1, h: 2 },
    // { i: "b", x: 1, y: 0, w: 3, h: 2 },
    // { i: "c", x: 4, y: 0, w: 1, h: 2 },
  ]
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

  }
}

export { CanvasReducer, initialState }
