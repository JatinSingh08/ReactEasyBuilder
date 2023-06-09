import React from "react";

const DropdownComponent = ({ element }) => {
  return (
    <div className="w-full h-full flex items-center justify-center bg-red-400 p-2 rounded-lg hover:cursor-pointer">
      <select className="h-full z-50 w-full border-none bg-transparent focus:outline-none">
        <option
          className="flex items-center justify-center bg-slate-50 m-auto w-full h-full"
          disabled
          selected
        >
          <div className="flex items-center justify-center bg-slate-50 m-auto w-full h-full">
            <span className="label-text">{element?.label}</span>
          </div>
        </option>
        <option className="flex items-center justify-center bg-slate-50 m-auto w-full h-full">
          <div className="flex items-center justify-center bg-slate-50 m-auto w-full h-full">
            <span className="label-text flex items-center justify-center text-center">
              {element?.option_1}
            </span>
          </div>
        </option>
        <option>
          <div className="flex items-center justify-center bg-slate-50">
            <span className="label-text">{element?.option_2}</span>
          </div>
        </option>
        <option>
          <div className="flex items-center justify-center bg-slate-50">
            <span className="label-text">{element?.option_3}</span>
          </div>
        </option>
      </select>
    </div>
  );
};

export default DropdownComponent;
