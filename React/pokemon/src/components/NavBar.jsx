import React from 'react'
import image from '../assets/img/pokemon-logo.png'

const NavBar = () => {
  return (
    <>
    <nav class="navbar blue">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
      <img src={image} alt="Logo" width="60%" height="70px" class="d-inline-block align-text-top"/>
      
    </a>
  </div>
</nav>
    </>
  )
}

export default NavBar