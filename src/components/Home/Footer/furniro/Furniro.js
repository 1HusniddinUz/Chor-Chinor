import React from 'react'
import "./Furniro.css"
import "./responsive/FurniroMedia.css"
import img1 from "../img/chor chinor furtiture/1.jpg"
import img2 from "../img/chor chinor furtiture/2.jpg"
import img3 from "../img/chor chinor furtiture/3.jpg"
import img4 from "../img/chor chinor furtiture/4.jpg"
import img5 from "../img/chor chinor furtiture/5.jpg"
import img6 from "../img/chor chinor furtiture/6.jpg"
import img7 from "../img/chor chinor furtiture/7.jpg"
import img8 from "../img/chor chinor furtiture/8.jpg"
// import img9 from "./img/chor chinor furtiture/9.jpg"
// import img10 from "./img/chor chinor furtiture/10.jpg"
// import img11 from "./img/chor chinor furtiture/11.jpg"
// import img12 from "./img/chor chinor furtiture/12.jpg"
// import img13 from "./img/chor chinor furtiture/13.jpg"
// import img14 from "./img/chor chinor furtiture/14.jpg"
// import img15 from "./img/chor chinor furtiture/15.jpg"
// import img16 from "./img/chor chinor furtiture/16.jpg"
// import img17 from "./img/chor chinor furtiture/17.jpg"
// import img18 from "./img/chor chinor furtiture/18.jpg"
// import img19 from "./img/chor chinor furtiture/19.jpg"
// import img20 from "./img/chor chinor furtiture/20.jpg"
// import img21 from "./img/chor chinor furtiture/21.jpg"
// import img22 from "./img/chor chinor furtiture/22.jpg"
// import img23 from "./img/chor chinor furtiture/23.jpg"
const Furniro = () => {
  return (
    <div id='Furniro'>
      <div id="Furniro-Title">
          <h3>
          Siz bilan baham ko'rdik
          </h3>
          <h2>
          Zamonaviy hashamamatli mebellar
          </h2>
      </div>
      <section id="photos">
        <img alt='img' src={img1}/>
        <img alt='img' src={img2}/>
        <img alt='img' src={img3}/>
        <img alt='img' src={img4}/>
        <img alt='img' src={img5}/>
        <img alt='img' src={img6}/>
        <img alt='img' src={img7}/>
        <img alt='img' src={img8}/>
      </section>
    </div>
  )
}

export default Furniro
