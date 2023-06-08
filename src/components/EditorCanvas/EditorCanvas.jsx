import React, { useState, useRef, useEffect } from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import "../../Editor.css";
import { useCanvas } from "../../context/canvas-context";
import ButtonComponent from "../CanvasComponents/ButtonComponent";
import InputComponent from "../CanvasComponents/InputComponent";
import DropdownComponent from "../CanvasComponents/DropdownComponent";
import TableComponent from "../CanvasComponents/TableComponent";
import { ActionType } from "../../reducers/constants";
const ResponsiveGridLayout = WidthProvider(Responsive);

const EditorCanvas = () => {
  const { state: { elements, componentType }, dispatch, updateElementsPosition } = useCanvas();
  const previousSizeRef = useRef({});

  const gridItemWidth = 25;
  const gridItemHeight = 25;
  const gridCols = 12;

  const [showGrid, setShowGrid] = useState(false);

  const handleDragStart = () => {
    setShowGrid(true);
  };

  const handleDragStop = (layout, oldItem, newItem) => {
    const updatedElements = elements.map((element) => {
      const matchingLayout = layout.find((item) => item.i === element.i);
      if (matchingLayout) {
        const { x, y, w, h } = matchingLayout;
        // const newX = Math.round(x / gridItemWidth);
        // const newY = Math.round(y / gridItemHeight);
        const previousElement = elements.find((item) => item.i === element.i);

        const newX = Math.max(0, Math.min(matchingLayout.x, gridCols - w));
        const newY = matchingLayout.y;
        return {
          ...element,
          x: previousElement.x,
          y: previousElement.y,
          w: Math.round(w),
          h,
        };
      }
      return element;
    });
    updateElementsPosition(updatedElements);
    setShowGrid(false);
  };

  const handleDrag = (layout) => {
    const updatedElements = elements.map((element) => {
      const matchingLayout = layout.find((item) => item.i === element.i);
      if (matchingLayout) {
        return {
          ...element,
          x: matchingLayout.x,
          y: matchingLayout.y,
        };
      }
      return element;
    });
    updateElementsPosition(updatedElements);
  };

  const handleResizeStart = () => {
    setShowGrid(true);
  };

  const handleResizeStop = (layout, oldItem, newItem) => {
    const updatedElements = elements.map((element) => {
      if (element.i === newItem.i) {
        const { w, h } = newItem;
        const previousSize = previousSizeRef.current[element.i] || {};
        const updatedElement = {
          ...element,
          w,
          h,
          prevW: previousSize.w || w,
          prevH: previousSize.h || h,
        };
        previousSizeRef.current[element.i] = { w, h };
        return updatedElement;
      }
      return element;
    });
    updateElementsPosition(updatedElements);
    setShowGrid(false);
  };

  const elementClickHandler = (id) => {
    setShowGrid(false);
    console.log('id', id);
    console.log('elements', elements);
    const selectedElement = elements.find(element => element.i === id);
    console.log('selected Element', selectedElement);
    dispatch({ type: ActionType.SELECT_ELEMENT, payload: selectedElement});
  }

  return (
    <div className="editor-canvas scrollbar-theme" >
      {elements.length === 0 && (
        <h1 className="absolute top-[45%] left-[40%] text-center text-[#c2cdd1] text-2xl font-bold">
          Drag & drop components here.
        </h1>
      )}
      <ResponsiveGridLayout
        className="layout"
        layouts={{ xxs: elements }}
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        cols={{ lg: gridCols, md: gridCols, sm: gridCols, xs: gridCols, xxs: gridCols }}
        isResizable={{
          x: true,
          y: componentType === "textInput" ? false : true,
        }}
        preventCollision={false}
        rowHeight={gridItemHeight}
        compactType="none"
        margin={[0, 0]}
        containerPadding={[0, 0]}
        onDragStart={handleDragStart}
        onDragStop={handleDragStop}
        onDrag={handleDrag}
        onResizeStart={handleResizeStart}
        onResizeStop={handleResizeStop}
        
      >
        {elements.map((item) => (
          <div
            key={item.i}
            className="grid__item"
            data-grid={{
              x: item.x,
              y: item.y,
              w: item.w,
              h: item.h,
            }}
            style={{
              width: `${item.w * gridItemWidth}px`,
              height: `${item.h * gridItemHeight}px`,
            }}
            onClick={() => elementClickHandler(item.i)}
          >
            {item.component === "button" && <ButtonComponent />}
            {item.component === "textInput" && <InputComponent />}
            {item.component === "dropdown" && <DropdownComponent />}
            {item.component === "table" && <TableComponent />}
          </div>
        ))}
      </ResponsiveGridLayout>
      {showGrid && (
        <div className="grid-overlay">
          <table className="grid-table">
            <tbody>
              {[...Array(50)].map((_, rowIndex) => (
                <tr key={rowIndex}>
                  {[...Array(12)].map((_, colIndex) => (
                    <td key={colIndex} className="grid-cell"></td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default EditorCanvas;
