import React from 'react'
import "./Footer.css"
import logo from "../Images/logo.png"

const Footer = () => {
  return (
    <div id='footer'>
      <hr />
      <div id='foot'>
        <div id='footer-left'>
          <img src={logo} alt="" />
          <div id='social-icons'>
            <img src="https://img.icons8.com/carbon-copy/100/000000/facebook-new.png" alt="" />
            <img src="https://img.icons8.com/dotty/100/000000/instagram-new.png" alt="" />
            <img src="https://img.icons8.com/dotty/100/000000/twitter.png" alt="" />
          </div>
        </div>
        <div id='footer-right'><img src="https://i.pinimg.com/originals/da/56/36/da5636fec9ffb19ccd90b3151658e2a1.gif" alt="" /></div>
      </div>
      <div id='footer-para'><p>This webpage is to buy more attractive products like groceries, mobiles, fashion, electronics, home appliances, and travel. You can loggedin to your account
        whenever open to the webpage. Add products to addtocart to buy the product. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, totam, veniam consectetur quibusdam reprehenderit quam corporis aliquid nemo ullam similique qui blanditiis aliquam eos iure maiores eveniet? Voluptatem, nisi vitae?
      </p></div>
      <div id='copyright'>
        <p>©Copyright May 2022  Designed and Built by <span>MUGILARASAN</span></p>
      </div>
    </div>
  )
}

export default Footer