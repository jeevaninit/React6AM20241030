import React from 'react'
import './header.css';

const Bodycontainer = () => {
    return (
      <div>Bodycontainer here goes body content..</div>
    )
  }
  
  const Navbar = () => {
    return (
      <div>
          <h2>Navigation Bar here...</h2>
      </div>
    )
  }

  const Footer = () => {
    return (
      <div>
          copyright@2024 www.jeevanit.com
      </div>
    )
  }
  
const Header = () => {
  return (
    <div>
        <h1>Welcome to Header Content ...</h1>
        <Navbar />
        <Bodycontainer />
        <Footer />
    </div>
  )
}

export default Header