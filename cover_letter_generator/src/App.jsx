import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SectionContainer from './components/SectionContainer'
import Accordian from './components/prompt_section/Accordian'

export default function App() {
  return (
    <>
        <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    <SectionContainer contents={
      <div className="flex flex-col items-center justify-center h-screen ">
       <Accordian/>
       
      </div>
    }/>
    </>

  )
}

