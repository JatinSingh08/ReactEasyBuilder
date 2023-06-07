import React from 'react'
import { BiChevronDown } from 'react-icons/bi'
import { AiOutlineCaretRight } from 'react-icons/ai'
const Settings = () => {
  return (
    <div className='flex gap-4 text-end h-10'>
      <div className='flex items-center justify-center'>
        <h1>81.2%</h1>
        <BiChevronDown />
      </div>
      <button className='bg-blue-300 text-blue-500 flex items-center justify-center px-4 py-1 rounded'>
        <AiOutlineCaretRight />
        <p>Preview</p>
      </button>
    </div>
  )
}

export default Settings
