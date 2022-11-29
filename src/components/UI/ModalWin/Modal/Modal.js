import React from 'react'
import Backdrop from '../Drop/Backdrop'
import './Modal.scss'

const Modal = props => (
  <>
    <Backdrop show={props.show} clicked={props.clicked} />

    {props.show ? (
      <>
        <div className="modal modal--show">{props.children}</div>
      </>
    ) : (
      <>
        <div className="modal modal--not-show">{props.children}</div>
      </>
    )}
  </>
)

export default Modal
