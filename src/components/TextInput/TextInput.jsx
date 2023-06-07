import React from 'react'

const TextInput = ({type}) => {
  return (
    <div className='flex gap-4 border-b border-b-[#A0B8C789] py-4 cursor-pointer'>
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
