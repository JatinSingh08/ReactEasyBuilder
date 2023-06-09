import React from 'react'

const ButtonComponent = ({button, element}) => {
  const borderRadius =`${element.borderRadius}px`
  const bgColor = `${element.bgColor}`
  
  return (
    <button className={`bg-[${bgColor}] text-slate-50 font-semibold tracking-wider w-full h-full rounded-[${borderRadius}]`}>
      {element.text}
    </button>
  )
}

export default ButtonComponent
