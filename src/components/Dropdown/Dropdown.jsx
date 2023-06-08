import React from 'react'
import { BiChevronDown } from 'react-icons/bi'
import { useCanvas } from '../../context/canvas-context'
const Dropdown = ({type}) => {
  const { addElement } = useCanvas();
  return (
    <div className='flex gap-4 border-b border-b-[#A0B8C789] py-4 cursor-pointer btn-theme'
    onClick={() => addElement({type: 'dropdown'})}
    >
      <div className='min-w-[64px] w-16 h-16 bg-[#FFFFFF] drop-shadow-lg shadow-[#A0B8C789] rounded flex items-center justify-center font-medium'>
        <div className='w-4 h-4 bg-slate-900 text-slate-100 rounded flex items-center justify-center'>
          <BiChevronDown/>
        </div>
      </div>
      <div className='text-start'>
        <p className='text-[#1A1A1A] font-semibold'>Dropdown</p>
        <p className='text-[#707880]'>Select from a set of options, with a dropdown.</p>
      </div>

    </div>
  )
}

export default Dropdown
