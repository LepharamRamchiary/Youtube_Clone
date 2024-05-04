import React from 'react'

const LeftNavMenuItems = ({text, icon, className, action}) => {
  return (
    <div className={"text-white text-sm cursor-pointer h-10 flex items-center px-3 mb-[1px] rounded-lg hover:bg-white/[0.15] " +
    className}>
      <spam className="text-xl mr-5">{icon}</spam>
      {text}
    </div>
  )
}

export default LeftNavMenuItems