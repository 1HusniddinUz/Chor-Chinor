import React from 'react'
import "../Header/Header.css"
import videoBg from "../Header/videoBg.mp4"
import "./responsive/HomeHeaderMedia.css"
const Header = () => {
  return (
    <div id='Home-Header'>
        {/* ? HOME HEADER TOP PART START */}
        <div id="Home-Header-top">
            <div id="Home-Header-top-overlay"></div>
          {/*<video src={videoBg} id="background-video" autoPlay loop muted></video>*/}
        </div>
    </div>
  )
}

export default Header
