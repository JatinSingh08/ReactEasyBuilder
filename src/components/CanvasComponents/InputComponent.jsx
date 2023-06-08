import React from 'react'

const InputComponent = () => {
  return (
    <div className='flex gap-4 w-full h-full bg-transparent items-center justify-center'>
      <label htmlFor='input'>Label</label>
      <input type="text" placeholder='Enter Value' className='w-full h-full bg-slate-100 rounded-lg p-4'/>

    </div>
  )
}

export default InputComponent
