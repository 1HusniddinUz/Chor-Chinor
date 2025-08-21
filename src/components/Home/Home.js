import React from 'react'
import "./Home.css"
import Header from "./Header/Header"
import Main from "./Main/Main"
import HomeFooter from './Footer/Footer'
let docTitle = document.title
window.addEventListener("blur", () => {
  document.title = "Come Back 😑"
});
window.addEventListener("focus", () => {
  document.title = docTitle;
})
const Home = () => {
  return (
    <div id='Home'>
      <Header/>
      <Main/>
      <HomeFooter/>
    </div>
  )
}

export default Home
