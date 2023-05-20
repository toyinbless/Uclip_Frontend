import Header from "./Header"
import Navbar from "./Navbar"
import MapCarpet from "./Map"
import React from "react"
import './styles/UclipStyle.css'




export const Uclip = () => {
  return (
    <div className='uclip'>
        <Header/>
        {/* <Navbar/> */}
        
      
        <MapCarpet/>
    

    </div>
  )
}
