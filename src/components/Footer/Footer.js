import React from 'react'
import "./Footer.css"
import "./responsive/FooterMedia.css"
const Footer = () => {
  return (
    <div id='Footer'> 
      <div className="container">
        <div id="Footer-main">
          <div id="Footer-sCard">
            <h1>Korxona nomi </h1>
            <p>
            Korxona haqida qisqacha ma'lumot <br /> <br />
            {"Joylashuvi misol uchun"}
            </p>
          </div>
          <div id="Footer-sCard">
            <h3>Link</h3>
            <ul>
              {/*<li><a href="#">Bosh Sahifa</a></li>*/}
              {/*<li><a href="#">Xarid</a></li>*/}
              {/*<li><a href="#">Biz Haqimizda</a></li>*/}
              {/*<li><a href="#">Call Center</a></li>*/}
            </ul>
          </div>
          <div id="Footer-sCard">
            <h3>Tamoyillar</h3>
            <ul>
              {/*<li><a href="#">Toʻlov imkoniyatlari</a></li>*/}
              {/*<li><a href="#">Qaytarilganlar </a></li>*/}
            </ul>
          </div>
          <div id="Footer-sCard">
            <h3>Axborot byulleteni</h3>
            <div id="Footer-sCard-sub">
              <input type="email" placeholder='Email addresingizni yozing ' />
              <button>Jo'natish</button>
            </div>
          </div>
        </div>
      </div>

      <hr/>

      <div id="Footer-copy">
          <h3>© Разработка || 2025 <span/>Hohishingizga qarab <span/> </h3>
        </div>

    </div>
  )
}

export default Footer
