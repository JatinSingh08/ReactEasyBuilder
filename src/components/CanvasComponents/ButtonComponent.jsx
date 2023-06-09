import React from 'react'

const ButtonComponent = ({button, element}) => {
  const borderRadius =`${element?.borderRadius}px`
  const bgColor = `${element?.bgColor}`
  const buttonStyle = {
    borderRadius: borderRadius,
    backgroundColor: bgColor
  }
  // bg-[${bgColor}]
  // rounded-[${borderRadius}]
  return (
    <button className={` text-slate-50 font-semibold tracking-wider w-full h-full `}
    style={buttonStyle}
    >
      {element.text}
    </button>
  )
}

export default ButtonComponent
