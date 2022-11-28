import React from 'react'
import './Backdrop.scss'

const Backdrop = ({ show, clicked }) => (show ? <div className="backdrop" onClick={clicked} /> : null)

export default Backdrop
