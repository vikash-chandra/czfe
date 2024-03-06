'use client'
import React from 'react'
import { Footer, NavBar, Card } from '@/components'

const Blog = () => {
  return (
    <div>
        <NavBar />
        <div>
          <div className="flex">
          <Card />
          <Card />
          <Card />
          <Card />
          </div>
        </div>
        <Footer />
    </div>
  )
}

export default Blog