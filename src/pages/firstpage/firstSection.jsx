import React from 'react'
import { Navbar } from '../../Components/navbar'
import ContentBody from './ContentBody'

export default function FirstSection() {
  return (
    <>
    <div className="firstSectionContainer bg-[#dd91f633] min-h-screen">
      {/* internal style */}
    <style>
          {`
          .gradient-text {
            background: linear-gradient(to right, #8c5cf4, #f1e7fb);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
        `}
        </style>
        
        <Navbar/>
        <ContentBody />
    </div>
    </>
  )
}
