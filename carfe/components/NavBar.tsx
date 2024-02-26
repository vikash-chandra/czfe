import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import CustomButton from './CustomButton'

const NavBar = () => {
  return (
    <nav className="bg-white h-20 py-2 px-3 flex justify-around items-center">
      <div className="px-10">
        <Link href="/">
          <Image src="/logo.svg" height={100} width={100} alt="logo" />
        </Link>
      </div>
      <div className="flex">
        <ul>
          <li className='text-gray-400 mx-10'>
            <a href="#!">SERVICES</a>
          </li>
        </ul>
        <ul>
          <li className='text-gray-400 mx-5'>
            <a href="#!">DOCUMENTATION</a>
          </li>
        </ul>
        <ul>
          <li className='text-gray-400 mx-5'>
            <a href="#!">BLOG</a>
          </li>
        </ul>
        <ul>
          <li className='text-gray-400 mx-5'>
            <a href="#!">SUPPORT</a>
          </li>
        </ul>
      </div>
      <div className='flex'>
        <CustomButton title='Book Demo' btnType='button' containerStyles='text-white rounded bg-blue-400 min-w-[130px] mx-3' />
        <CustomButton title='Login' btnType='button' containerStyles='text-blue-400 rounded bg-white min-w-[130px] border border-blue-400 mx-3' />
      </div>
    </nav>
  )
}

export default NavBar