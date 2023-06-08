import React, { useState, useRef } from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import '../../Editor.css'
import { useCanvas } from "../../context/canvas-context";
import ButtonComponent from "../CanvasComponents/ButtonComponent";
import InputComponent from "../CanvasComponents/InputComponent";
import DropdownComponent from "../CanvasComponents/DropdownComponent";
import TableComponent from "../CanvasComponents/TableComponent";
const ResponsiveGridLayout = WidthProvider(Responsive);

const EditorCanvas = () => {
  const { state: {elements, componentType}, dispatch, updateElementsPosition } = useCanvas();
  const previousSizeRef = useRef({});

  const gridItemWidth = 25; 
  const gridItemHeight = 25; 
  const gridCols = 12; 

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
  
  // const handleDrag = (layout) => {
  //   const updatedElements = elements.map((element) => {
  //     const matchingLayout = layout.find((item) => item.i === element.i);
  //     if (matchingLayout) {
  //       const { w, h } = matchingLayout;
  //       const previousSize = previousSizeRef.current[element.i] || {};
  //       const updatedElement = {
  //         ...element,
  //         x: matchingLayout.x,
  //         y: matchingLayout.y,
  //         w,
  //         h,
  //         prevW: previousSize.w || w, // Store previous width
  //         prevH: previousSize.h || h, // Store previous height
  //       };
  //       previousSizeRef.current[element.i] = { w, h };
  //       return updatedElement;
  //     }
  //     return element;
  //   });
  //   updateElementsPosition(updatedElements);
  // };
  
  const handleResizeStop = (layout, oldItem, newItem) => {
    const updatedElements = elements.map((element) => {
      if (element.i === newItem.i) {
        const { w, h } = newItem;
        const previousSize = previousSizeRef.current[element.i] || {};
        const updatedElement = {
          ...element,
          w,
          h,
          prevW: previousSize.w || w, // Store previous width
          prevH: previousSize.h || h, // Store previous height
        };
        previousSizeRef.current[element.i] = { w, h };
        return updatedElement;
      }
      return element;
    });
    updateElementsPosition(updatedElements);
  };
  

  return (
    <div className="editor-canvas scrollbar-theme">
      {
        elements.length === 0 && (
            <h1 className=" absolute top-[55%] left-[30%] text-center text-[#c2cdd1] text-2xl font-bold">Drag & drop components here.</h1>
        )
      }
      <ResponsiveGridLayout
        className="layout"
        layouts={{ xxs: elements }}
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        // cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
        cols={{ lg: gridCols, md: gridCols, sm: gridCols, xs: gridCols, xxs: gridCols }}
        isResizable={{
          x: true,
          y: componentType === 'textInput' ? false : true
        }}
        preventCollision={false}
        rowHeight={gridItemHeight}
        compactType='none'
        margin={[0, 0]} 
        containerPadding={[0, 0]} 
        onDrag={handleDrag}
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
          >
            {item.component === 'button' && <ButtonComponent />}
            {item.component === 'textInput' && <InputComponent />}
            {item.component === 'dropdown' && <DropdownComponent />}
            {item.component === 'table' && <TableComponent />}
          </div>
        ))}
      </ResponsiveGridLayout>
    </div>
  );
};

export default EditorCanvas;
