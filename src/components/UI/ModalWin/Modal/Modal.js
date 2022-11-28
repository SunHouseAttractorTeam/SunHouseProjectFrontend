import React from 'react'
import Backdrop from '../Drop/Backdrop'
import './Modal.scss'

const Modal = props => (
  <>
    <Backdrop show={props.show} clicked={props.clicked} />

    {props.show ? (
      <div className="Modal">{props.children}</div>
    ) : (
      <div className="Modal__notShow">{props.children}</div>
    )}
  </>
)

export default Modal
