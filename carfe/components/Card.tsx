import React from 'react'
import Image from 'next/image'
import placeHolder from '/Users/aarushisharma/Desktop/carzorro/czfe/carfe/public/card_images/images/1.jpg'

const Card = () => {
  return (
    <>
      <div className="lg:p-4 md:w-full flex justify-center mt-40">
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <Image src={placeHolder} width={400} height={200} alt="pic" />
          <div className="px-6 py-4 lg:h-44">
            <span className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
              Free Course
            </span>
            <div className="title-font text-lg font-medium mb-2">
              <a href="#" className="no-underline text-blue-500 font-semibold">
                Next js Tutorials for Beginners
              </a>
            </div>
            <p className="text-gray-700 text-base">
              This is a card component that will be used to make various blog entries in the blog page of our project. 
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card