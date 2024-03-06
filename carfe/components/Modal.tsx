'use client'
import React from 'react'

const Modal = ({ isVisible, children }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 background-blur-sm flex justify-center items-center">
     <div className="w-[450px] flex flex-col">
      <button className="text-white text-xl place-self-end">X</button>
      <div className="bg-white p-2 rounded">
        {children}
      </div>
     </div>
    </div>
  )
}

export default Modal