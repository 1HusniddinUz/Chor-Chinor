import React from 'react'
import "./Footer.css"
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
                  <a href="https://t.me/Dveri_Okna_Mebel_Na_Zakaz" target="_blank" rel="noopener norefeffer"><i className="fa-brands fa-telegram"></i></a>
                  <a href="https://www.instagram.com/chor_chinor_mebel" target="_blank" rel="noopener norefeffer"><i className="fa-brands fa-instagram"></i></a>
              </div>
          </div>

            <div id="Footer-sCard">
                <h2>Joylashuvimiz :</h2>
                <iframe
                    title="map"
                    src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d6130.2524806567835!2d64.518187!3d39.80416!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMznCsDQ4JzE1LjAiTiA2NMKwMzEnMDUuNSJF!5e0!3m2!1sru!2s!4v1755185905231!5m2!1sru!2s"
                    width="100%"
                    height="280"
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
            <h3>2025 © Barcha huquqlar himoyalangan.</h3>
            <h3><a href="https://t.me/buxoro_tadbirkorlar_klubi"  target="_blank" rel="noopener norefeffer">Directed by : BUXORO TADBIRKORLAR KLUBI</a></h3>

        </div>

    </div>
  )
}

export default Footer
