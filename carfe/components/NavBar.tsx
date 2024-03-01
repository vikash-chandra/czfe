import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import CustomButton from './CustomButton'

const NavBar = () => {
  return (
    <nav className="flex items-center justify-around h-20 px-3 py-2 bg-white sticky top-0 z-50">
      <div className="flex items-center">
        <Link href="/">
          <Image src="/carzorro_icon.png" height={50} width={50} alt="logo"/>
        </Link>
        <h1 className="text-lg lg:text-2xl font-bold text-neutral-500">CAR</h1>
        <h1 className="text-lg lg:text-2xl font-bold text-purple">ZORRO</h1>
      </div>
      <div className="flex">
        {[
          ['Services','#!'],
          ['Documentation','#!'],
          ['Blog','#!'],
          ['Support','#!'],
        ].map(([title,url])=>(
          <a href={url} className="uppercase mx-5 text-gray-400 hidden md:block">{title}</a>
        ))}
      </div>
      <div className='flex'>
        <CustomButton title='Book a Demo' btnType='button' containerStyles='font-semibold text-white rounded bg-blue-500 px-1 py-2 min-w-[90px] lg:px-6 lg:py-3 mx-2' />
        <CustomButton title='Login' btnType='button' containerStyles='text-blue-500 rounded bg-white px-1 py-2 min-w-[90px] lg:px-6 lg:py-3 border border-blue-500' />
      </div>
    </nav >
  )
}

export default NavBar