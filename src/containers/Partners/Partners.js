import React from 'react'
import './Partners.scss'
import PartnerCard from "../../components/PartnerCard/PartnerCard";
import partnersData from "./partnersData";

const Partners = () => (
  <section className="partners-section">
    <div className="container partners-section__container">
      <h2 className="partners-section__title">Сотрудничаем <br /> с ведущими компаниями</h2>
        <p className='partners-section__description'>Собираем лучшие вакансии в отрасли, <br /> готовим к интервью и рекомендуем вас компаниям-партнёрам.</p>
      <div className="partners-section__cards">
          {partnersData.map(item => (
              <PartnerCard
                  key={item.image}
                  image={item}
              />
          ))}
      </div>
    </div>
  </section>
);

export default Partners
