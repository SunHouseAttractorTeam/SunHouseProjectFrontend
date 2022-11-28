import React from 'react'
import Backdrop from '../Drop/Backdrop'
import './Modal.scss'

const Modal = props => (
  <>
    <Backdrop show={props.show} clicked={props.clicked} />

    {props.show ? (
      <div className="modal">{props.children}</div>
    ) : (
      <div className="modal__not-show">{props.children}</div>
    )}
  </>
)

export default Modal
