import React from 'react'
import Backdrop from '../Drop/Backdrop'
import './Modal.scss'
import Card from '../../Cards/Card/Card'

const Modal = props => (
  <>
    <Backdrop show={props.show} clicked={props.clicked} />

    {props.show ? (
      <>
        <Card className="Card WhiteCard">
          <div className="modal modal--show">
            <h3 className="modal__title">{props.title}</h3>
            {props.children}
          </div>
        </Card>
      </>
    ) : (
      <>
        <div className="modal modal--not-show">{props.children}</div>
      </>
    )}
  </>
)

export default Modal
