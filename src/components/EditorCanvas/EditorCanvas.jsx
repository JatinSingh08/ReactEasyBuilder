import React, { useState } from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import '../../Editor.css'
import { useCanvas } from "../../context/canvas-context";
const ResponsiveGridLayout = WidthProvider(Responsive);

const EditorCanvas = () => {
  const { state: {elements, componentType}, dispatch } = useCanvas();

  const gridItemWidth = 25; // Width of each grid item in pixels
  const gridItemHeight = 25; // Height of each grid item in pixels

  // const onLayoutChange = (newLayout) => {

  //   setLayout(newLayout);
  // }
  const gridCols = 12; // Number of columns in the grid


  return (
    <div className="editor-canvas">

      {
        elements.length === 0 && (
            <h1 className="empty-layout-text">Drag & drop components here.</h1>
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
        margin={[0, 0]} // Set margin to zero to eliminate gaps between grid items
        containerPadding={[0, 0]} // Set container padding to zero
        // onLayoutChange={onLayoutChange}
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
            {item.component ? item.component : item.i}
          </div>
        ))}
      </ResponsiveGridLayout>
    </div>
  );
};

export default EditorCanvas;
