import React from 'react'
import { Navbar } from '../../Components/navbar'
import ContentBody from './ContentBody'

export default function FirstSection() {
  return (
    <>
    <div className="firstSectionContainer bg-[#dd91f633] min-h-screen">
        <Navbar/>
        <ContentBody />
    </div>
    </>
  )
}
