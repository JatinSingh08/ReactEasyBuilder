import React from 'react'
import { useCanvas } from '../../context/canvas-context'

const TextInput = ({type}) => {
  const { addElement } = useCanvas();
  
  return (
    <div className='flex gap-4 border-b border-b-[#A0B8C789] py-4 cursor-pointer'
    onClick={() => addElement({type: 'textInput'})}
    >
      <div className='min-w-[64px] w-16 h-16 bg-[#FFFFFF] drop-shadow-lg shadow-[#A0B8C789] rounded flex items-center justify-center font-medium'>
        Aa
      </div>
      <div className='text-start'>
        <p className='text-[#1A1A1A] font-semibold'>Text Input</p>
        <p className='text-[#707880]'>Supports Markdown or HTML.</p>
      </div>

    </div>
  )
}

export default TextInput
