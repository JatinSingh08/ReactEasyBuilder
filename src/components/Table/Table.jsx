import React from "react";
import { AiOutlineTable } from 'react-icons/ai'
import { useCanvas } from "../../context/canvas-context";

const Table = ({ type }) => {
  const { addElement } = useCanvas();
  return (
    <div className="flex gap-4 border-b border-b-[#A0B8C789] py-4 cursor-pointer btn-theme"
    onClick={() => addElement({ type: 'table' })}
    >
      <div className="min-w-[64px] w-16 h-16 bg-[#FFFFFF] drop-shadow-lg shadow-[#A0B8C789] rounded flex items-center justify-center font-medium">
        <div className="rounded flex items-center justify-center text-[#8A9097]">
          <AiOutlineTable className="w-6 h-6"/>
        </div>
      </div>
      <div className="text-start">
        <p className="text-[#1A1A1A] font-semibold">Table</p>
        <p className="text-[#707880]">Display tabular data with pagination.</p>
      </div>
    </div>
  );
};

export default Table;
