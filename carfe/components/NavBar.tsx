'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import CustomButton from './CustomButton'
import { Modal } from '@/components'
import { Fragment } from 'react'

const NavBar = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <nav className="flex items-center justify-around h-20 px-3 py-2 bg-white sticky top-0 z-50">
      <div className="flex items-center">
        <Link href="/">
          <Image src="/carzorro_icon.png" height={50} width={50} alt="logo" />
        </Link>
        <h1 className="text-base lg:text-2xl font-bold text-neutral-500">CAR</h1>
        <h1 className="text-base lg:text-2xl font-bold text-purple">ZORRO</h1>
      </div>
      <div className="flex">
        {[
          ['Services', '#!'],
          ['Documentation', '#!'],
          ['Blog', '/blog'],
          ['Support', '#!'],
        ].map(([title, url]) => (
          <a href={url} className="uppercase mx-5 text-gray-400 hidden md:block">{title}</a>
        ))}
      </div>
      <Fragment>
        <div className='flex'>
          <CustomButton title='Book a Demo' btnType='button' containerStyles='font-semibold text-white rounded-lg bg-blue-500 px-2 py-3 min-w-[70px] lg:px-6 lg:py-3 mx-1 ' />
          <CustomButton title='Login' btnType='button' containerStyles='text-blue-500 rounded-lg bg-white min-w-[70px] px-2 py-3 lg:px-6 lg:py-3 border border-blue-500 mx-2' onClick={() => setShowModal(true)} />
          <Modal isVisible={showModal}>
            <div className="flex justify-center items-center">
              <div className="w-96 p-6 bg-white rounded-md">
                <Image src="/pngwing.com.png" width={50} height={50} alt="user" className='my-3 mx-36'/>
                <h1 className='text-3xl block text-center font-semibold'>Login</h1>
                <hr className="mt-3" />
                <div className="mt-3"> 
                   <label htmlFor="username" className="block text-base mb-2">Username</label>
                   <input type="text" id="username" className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600" placeholder="Enter Username..." />
                </div>
                <div className="mt-3"> 
                   <label htmlFor="password" className="block text-base mb-2">Password</label>
                   <input type="password" id="password" className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600" placeholder="Enter Password..." />
                </div>
                <div className="mt-3 flex justify-between items-center">
                  <div>
                    <input type="checkbox" />
                    <label htmlFor="">Remember Me</label>
                  </div>
                  <div>
                    <a href="#!" className="text-blue-500 font-semibold">Forgot Password?</a>
                  </div>
                </div>
                <div className="mt-5">
                <CustomButton title='Login' btnType='button' containerStyles='text-white rounded-lg bg-blue-500 min-w-[70px] px-2 py-3 lg:px-6 lg:py-3 mx-2 w-full' />
                </div>
                <span>Don't have an account already? </span>
                <a href="#!" className="text-blue-500 underline">Sign Up</a>
            </div>
          </div>
          </Modal>
      </div>
    </Fragment>
    </nav >
  )
}

export default NavBar