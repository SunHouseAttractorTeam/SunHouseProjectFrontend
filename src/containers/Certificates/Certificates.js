import React from 'react'
import Title from '../../components/UI/Title/Title'
import Certificate from '../../components/Certificate/Certificate'
import './Certificates.scss'

const CERTIFICATES = [
    {
        course: 'Программист', username: 'Анатолий Витальевич', description: 'В рамках проекта "Зеленая экономика ' +
            'и устойчивое развитие частного сектора в КР". ' +
            'Обучающие материалы были разработаны при поддержке ' +
            'Кыргызско-германской-швейцарской программы "Зеленая экономика и учтойчивое развитие частного сектора в КР".'
    },
    {
        course: 'UI-UX', username: 'Виталий Анатольевич', description: 'В рамках проекта "Зеленая экономика ' +
            'и устойчивое развитие частного сектора в КР". ' +
            'Обучающие материалы были разработаны при поддержке ' +
            'Кыргызско-германской-швейцарской программы "Зеленая экономика и учтойчивое развитие частного сектора в КР".'
    },
]

const Certificates = () => (
    <div className="certificates">
        <Title>Мои сертификаты</Title>
        <div className="certificates__block">

            {CERTIFICATES.map((certificate, i) => (
                // eslint-disable-next-line react/no-array-index-key
                <div className={"certificates__block__certificate"}>
                    <Certificate key={certificate.course + i} course={certificate.course}
                                 fullName={certificate.username}
                                 description={certificate.description}/>
                </div>
            ))}

        </div>
    </div>
)

export default Certificates
