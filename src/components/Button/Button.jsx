import React from 'react'
import { useCanvas } from '../../context/canvas-context'

const Button = ({type}) => {
  const { addElement } = useCanvas();
  return (
    <div className='flex gap-4 border-b border-b-[#A0B8C789] py-4 cursor-pointer'
    onClick={() => addElement({type: 'button'})}
    >
      <div className='min-w-[64px] w-16 h-16 bg-[#FFFFFF] drop-shadow-lg shadow-[#A0B8C789] rounded flex items-center justify-center font-medium'>
        <p className=' bg-blue-500 text-[10px] text-slate-100 px-2 py-0.5 rounded m-auto flex items-center justify-center'>Action</p>
        
      </div>
      <div className='text-start'>
          <p className='text-[#1A1A1A] font-semibold'>Button</p>
          <p className='text-[#707880]'>Trigger actions like run queries, export data etc.</p>
      </div>
    </div>
  )
}

export default Button