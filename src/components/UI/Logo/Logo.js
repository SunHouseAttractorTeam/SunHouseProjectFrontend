import React from 'react'
import Eduspace from '../../../assets/logo/eduspace.svg'
import './Logo.scss'

const Logo = ({ className }) => (
  <a href="#" className={`logo ${className}`}>
    <img src={Eduspace} alt="Eduspace" className="logo_image" />
  </a>
)

export default Logo
