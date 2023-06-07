import React from "react";
import { AiOutlineTable } from 'react-icons/ai'

const Table = ({ type }) => {
  return (
    <div className="flex gap-4 border-b border-b-[#A0B8C789] py-4 cursor-pointer">
      <div className="min-w-[64px] w-16 h-16 bg-[#FFFFFF] drop-shadow-lg shadow-[#A0B8C789] rounded flex items-center justify-center font-medium">
        <div className="rounded flex items-center justify-center">
          <AiOutlineTable />
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
