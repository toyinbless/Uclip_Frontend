import Acmad_logo from '../images/Acmad_logo.png'
import React from 'react'
import './styles/HeaderStyle.css'

const Header = () => {
  return (
    <header className='header'>
    <h2 className='title'>Urban Climate Information Platform (UCLIP) </h2>
   
    <img  className='logo' src={Acmad_logo} alt='acmad_logo' />
   
    
    </header>
   
        
  )
  
}

export default Header