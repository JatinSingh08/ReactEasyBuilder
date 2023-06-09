import React from 'react';
import { Select, Option } from '@material-tailwind/react';

const DropdownComponent = ({element}) => {
  return (
    <div className="w-full h-full flex items-center justify-center bg-slate-50">
      <Select label={element?.label} className="h-full z-50 w-full border-none">
        <Option className='flex items-center justify-center bg-slate-50 m-auto w-full h-full'>
          <div className="flex items-center justify-center bg-slate-50 m-auto w-full h-full">
            <span className="label-text ">{element?.option_1}</span>
          </div>
        </Option>
        <Option>
          <div className="flex items-center justify-center bg-slate-50">
            <span className="label-text">{element?.option_2}</span>
          </div>
        </Option>
        <Option>
          <div className="flex items-center justify-center bg-slate-50">
            <span className="label-text">{element?.option_3}</span>
          </div>
        </Option>
      </Select>
    </div>
  );
};

export default DropdownComponent;
