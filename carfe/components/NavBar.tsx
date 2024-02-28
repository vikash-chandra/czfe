import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import CustomButton from './CustomButton'

const NavBar = () => {
  return (
    <nav className="bg-white h-20 py-2 px-3 flex justify-around items-center">
      <div className="px-10 flex items-center">
        <Link href="/">
          <Image src="/carzorro_icon.png" height={50} width={50} alt="logo" />
        </Link>
        <h1 className="font-bold text-2xl text-purple">CARZORRO</h1>
      </div>
      <div className="flex">
        <ul>
          <li className="text-gray-400 mx-5">
            <a href="#!">SERVICES</a>
          </li>
        </ul>
        <ul>
          <li className="text-gray-400 mx-5">
            <a href="#!">DOCUMENTATION</a>
          </li>
        </ul>
        <ul>
          <li className="text-gray-400 mx-5">
            <a href="#!">BLOG</a>
          </li>
        </ul>
        <ul>
          <li className="text-gray-400 mx-5">
            <a href="#!">SUPPORT</a>
          </li>
        </ul>
      </div>
      <div className='flex'>
        <CustomButton title='Book a Demo' btnType='button' containerStyles='font-semibold text-white rounded bg-purple min-w-[130px] mx-3' />
        <CustomButton title='Login' btnType='button' containerStyles='text-purple rounded bg-white min-w-[130px] border border-purple mx-3' />
      </div>
    </nav >
  )
}

export default NavBar