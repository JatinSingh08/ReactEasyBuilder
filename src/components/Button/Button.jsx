import React from 'react'
import { useCanvas } from '../../context/canvas-context'

const Button = ({type}) => {
  const { addElement } = useCanvas();
  return (
    <div className='flex gap-4 border-b border-b-[#A0B8C789] py-4 cursor-pointer btn-theme'
    onClick={() => addElement({type: 'button'})}
    >
      <div className='min-w-[64px] w-16 h-16 bg-[#FFFFFF] drop-shadow-lg shadow-[#A0B8C789] rounded flex items-center justify-center'>
        <p className=' bg-blue-500  text-slate-100 px-1.5 py-0.5 rounded m-auto flex items-center justify-center text-[9px] font-medium'>ACTION</p>
        
      </div>
      <div className='text-start'>
          <p className='text-[#1A1A1A] font-semibold'>Button</p>
          <p className='text-[#707880]'>Trigger actions like run queries, export data etc.</p>
      </div>
    </div>
  )
}

export default Button
