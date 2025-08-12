import React from 'react'
import "./Header.css"
import "./responsive/HeaderMedia.css"

const Header = () => {
  return (
    <div id='Header'>
      <div className="container">
        <div id="Header-logo">
            <h1><a href="#Home-Header">CHOR-CHINOR</a></h1>
        </div>
        <ul>
            <button><a href="#Home-Header" >Bosh Sahifa</a></button>


            <button> <a href="#HeaderShop">Katalog</a></button>


            <button> <a href="#Furniro" >Biz haqimizda </a></button>

            <button><a href="#Contact">Call Center </a></button>
        </ul>
          {/* <i onClick={()=>{
            let Burger = document.querySelector(".fa-burger")
            let HeaderNavigation = document.querySelector("#Header-navigation"); 
            HeaderNavigation.style="display:block ; "
            Burger.style="display:none"
           }} className='fa-solid fa-burger'></i> */}
        <div id="Header-navigation"></div>
      </div>
    </div>
  )
}

export default Header
