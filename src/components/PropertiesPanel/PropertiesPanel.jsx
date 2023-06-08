import React, { useState } from 'react'

const PropertiesPanel = ({selectedElement, updateElement}) => {
  const [borderRadius, setBorderRadius] = useState(selectedElement?.borderRadius || "");
  const [text, setText] = useState(selectedElement?.text || "");

  const handleBorderRadiusChange = (e) => {
    const value = e.target.value;
    setBorderRadius(value);
  }

  const handleTextChange = (e) => {
    const value = e.target.value;
    setText(value);
  }

  const submitHandler = (e) => {
    e.preventDefault();
    updateElement({ ...selectedElement, borderRadius: borderRadius, text: text});
    setBorderRadius("");
    setText("");
  }
  return (

    <form className='flex flex-col gap-4' onSubmit={submitHandler}>
      <div className='grid grid-cols-2 items-center justify-center'>
        <label htmlFor='text' className='text-start'>
          Text
        </label>
        <input type="text" id='text' className='bg-[#e9eef1] rounded-lg py-1 px-2 focus:outline-[#9767FF] placeholder:text-slate-400' placeholder='Enter Text'
        value={text}
        onChange={handleTextChange}
        />

      </div>
      <div className='grid grid-cols-2 items-center justify-center '>
        <label htmlFor='borderRadius' className='text-start'>
          Border radius
        </label>
          <input type="number" id='borderRadius' className='bg-[#e9eef1] rounded-lg py-1 px-2 focus:outline-[#9767FF] placeholder:text-slate-400' placeholder='Enter Radius'
          value={borderRadius}
          onChange={handleBorderRadiusChange}
          />
      </div>
      <div className='grid grid-cols-2 items-center justify-center '>
        <label htmlFor='bgColor' className='text-start'>
          Background color
        </label>
          <input type="text" id='bgColor' className='bg-[#e9eef1] rounded-lg py-1 px-2 focus:outline-[#9767FF] placeholder:text-slate-400' placeholder='Enter BgColor'/>
      </div>

      <button type='submit' className='py-1 mx-10 hover:bg-[#8352eb] transition-all duration-300 text-slate-100 tracking-wide bg-[#9767FF] rounded-md'>
        Apply Changes
      </button>
    </form>
  )
}

export default PropertiesPanel
