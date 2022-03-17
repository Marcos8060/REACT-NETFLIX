import React, { useEffect,useState } from 'react'
import './NavBar.css'
import logo from './Images/netlogo.png'
import netflix from './Images/netflix.png'

function NavBar() {
    const [show,handleShow] = useState(false)
    
    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            if(window.scrollY > 100){
                handleShow(true)
            }else{
                handleShow(false)
            }
        });
        return () =>{
            window.removeEventListener('scroll');
        };
    },[])
  return (
    <div className={`nav ${show && "nav__black"}`}>
        <img 
        src={netflix}
        alt="Netflix logo"
        className='nav__logo'
        />
        <img 
        src={logo} 
        alt='Netflix logo'
        className='nav__avatar'
        />
    </div>
  )
}

export default NavBar