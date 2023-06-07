import React, { useState } from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import '../../Editor.css'
const ResponsiveGridLayout = WidthProvider(Responsive);

const EditorCanvas = () => {
  const [layout, setLayout] = useState([
    { i: "a", x: 0, y: 0, w: 1, h: 2 },
    { i: "b", x: 1, y: 0, w: 3, h: 2 },
    { i: "c", x: 4, y: 0, w: 1, h: 2 },
  ])
  // const layout = [
  //   { i: "a", x: 0, y: 0, w: 1, h: 2 },
  //   { i: "b", x: 1, y: 0, w: 3, h: 2 },
  //   { i: "c", x: 4, y: 0, w: 1, h: 2 },
  // ];

  const gridItemWidth = 25; // Width of each grid item in pixels
  const gridItemHeight = 25; // Height of each grid item in pixels

  const onLayoutChange = (newLayout) => {
    setLayout(newLayout);
  }
  const gridCols = 12; // Number of columns in the grid


  return (
    <div className="editor-canvas">

      {
        layout.length === 0 && (
            <h1 className="empty-layout-text">Drag & drop components here.</h1>
        )
      }
      <ResponsiveGridLayout
        className="layout"
        layouts={{ xxs: layout }}
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        // cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
        cols={{ lg: gridCols, md: gridCols, sm: gridCols, xs: gridCols, xxs: gridCols }}
        isResizable={true}
        preventCollision={false}
        rowHeight={gridItemHeight}
        compactType='none'
        margin={[0, 0]} // Set margin to zero to eliminate gaps between grid items
        containerPadding={[0, 0]} // Set container padding to zero
        onLayoutChange={onLayoutChange}
      >
        {layout.map((item) => (
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
            {item.i}
          </div>
        ))}
      </ResponsiveGridLayout>
    </div>
  );
};

export default EditorCanvas;
