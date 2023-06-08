import React from 'react';
import { Select, Option } from '@material-tailwind/react';

const DropdownComponent = () => {
  return (
    <div className="w-full h-full flex items-center justify-center bg-slate-50">
      <Select label="Select Version" className="h-full z-50 w-full border-none">
        <Option className='flex items-center justify-center bg-slate-50 m-auto w-full h-full'>
          <div className="flex items-center justify-center bg-slate-50 m-auto w-full h-full">
            <span className="label-text ">Material Tailwind HTML</span>
          </div>
        </Option>
        <Option>
          <div className="flex items-center justify-center bg-slate-50">
            <span className="label-text">Material Tailwind React</span>
          </div>
        </Option>
        <Option>
          <div className="flex items-center justify-center bg-slate-50">
            <span className="label-text">Material Tailwind Vue</span>
          </div>
        </Option>
        <Option>
          <div className="flex items-center justify-center bg-slate-50">
            <span className="label-text">Material Tailwind Angular</span>
          </div>
        </Option>
        <Option>
          <div className="flex items-center justify-center bg-slate-50">
            <span className="label-text">Material Tailwind Svelte</span>
          </div>
        </Option>
      </Select>
    </div>
  );
};

export default DropdownComponent;
