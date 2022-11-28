import React from 'react'
import Backdrop from '../Drop/Backdrop'
import './Modal.scss'

const Modal = props => (
  <>
    <Backdrop show={props.show} clicked={props.clicked} />
    <div
      className="Modal"
      style={{
        transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
        opacity: props.show ? '1' : '0',
      }}
    >
      {props.children}
    </div>
  </>
)

export default Modal
