import React from 'react'

const InputComponent = ({element}) => {
  return (
    <div className='flex gap-4 w-full h-full bg-transparent items-center justify-center'>
      <label htmlFor='input'>{element.label}</label>
      <input type="text" placeholder={element.placeholder} className='w-full h-full bg-slate-50 rounded-lg p-4'/>
    </div>
  )
}

export default InputComponent
