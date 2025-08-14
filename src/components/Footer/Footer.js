import React from 'react'
import "./Footer.css"
import "./responsive/FooterMedia.css"
import logo from "./img/logo.png"
const Footer = () => {
  return (
    <div id='Footer'> 
      <div className="container">
        <div id="Footer-main">
          <div id="Footer-sCard">
            <h1>CHOR CHINOR</h1>
              <img src={logo} alt=""/>
          </div>
          <div id="Footer-sCard">
                <h2>Ijtimoiy tarmoqlarimiz : </h2>
              <div id="footer_social_links">
                  <a href="https://t.me/xusni_axi"><i className="fa-brands fa-telegram"></i></a>
                  <a href="https://www.instagram.com/chor_chinor_mebel"><i className="fa-brands fa-instagram"></i></a>
                  <a href="https://t.me/xusni_axi"><i className="fa-brands fa-youtube"></i></a>
              </div>
          </div>

            <div id="Footer-sCard">
                <h2>Joylashuvimiz :</h2>
                <iframe
                    title="map"
                    src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d6130.114642563849!2d64.253006!3d39.805706!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMznCsDQ4JzIwLjUiTiA2NMKwMTUnMTAuOCJF!5e0!3m2!1sru!2s!4v1747136757081!5m2!1sru!2s"
                    width="100%"
                    height="450"
                    style={{
                        border: "none",
                        borderRadius: "10px",
                        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.4)",
                    }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </div>
      </div>

        <hr/>

        <div id="Footer-copy">
            <h3>© Разработка || 2025 <span/>Hohishingizga qarab <span/></h3>
        </div>

    </div>
  )
}

export default Footer
