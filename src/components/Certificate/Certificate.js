import React from 'react'
import './Certificate.scss'
import Logo from '../../assets/logo/eduspace.svg'

const Certificate = ({course, fullName, description}) => (
    <div className="certificate">
        <div className={"certificate__logo"}>
            <img src={Logo} className={"certificate__logo__image"}/>
        </div>
        <div className="certificate__content-block">
            <h3 className={"certificate__content-block__title"}>Сертификат</h3>
            <p className={"certificate__content-block__fullName"}>{fullName}</p>
            <p className={"certificate__content-block__course"}>Успешно прошел курс "{course}"</p>
            <p className="certificate__content-block__description">{description}</p>
        </div>
    </div>
)

export default Certificate
