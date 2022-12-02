import React from 'react'
import './Modal.scss'

const Modal = ({ setOpen, children }) => (
  <>
    <div className="backdrop" onClick={() => setOpen(true)} />
    <div className="modal">
      <div className="modal__inner">
        <div className="modal__content">{children}</div>
      </div>
    </div>
  </>
)

export default Modal
