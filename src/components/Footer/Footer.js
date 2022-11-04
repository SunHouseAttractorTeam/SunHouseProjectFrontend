import React from 'react';
import './Footer.scss';
import Logo from "../UI/Logo/Logo";

const Footer = () => {
  return (
    <footer className={'footer'}>
      <div className={'container'}>
        <div className={'footer_top'}>
          <div className={'footer_top_col'}>
            <div className={'footer_logo'}>
              <Logo/>
            </div>
            <div className={'footer_top_social_icons'}>
              <a href="#" className={'footer_link'}>1</a>
              <a href="#" className={'footer_link'}>2</a>
              <a href="#" className={'footer_link'}>3</a>
              <a href="#" className={'footer_link'}>4</a>
            </div>
          </div>
          <div className={'footer_top_col'}>
            <h6 className={'footer_top_title'}>Курсы</h6>
            <a href="#" className={'footer_link'}>Web-дизайнер</a>
            <a href="#" className={'footer_link'}>UX-UI дизайнер</a>
            <a href="#" className={'footer_link'}>Front-end разработчик</a>
          </div>
          <div className={'footer_top_col'}>
            <h6 className={'footer_top_title'}>Информация</h6>
            <a href="#" className={'footer_link'}>Об Eduspace</a>
            <a href="#" className={'footer_link'}>Преподователи</a>
            <a href="#" className={'footer_link'}>Партнеры</a>
            <a href="#" className={'footer_link'}>Тарифы</a>
            <a href="#" className={'footer_link'}>Контакты</a>
          </div>
          <div className={'footer_top_col'}>
            <h6 className={'footer_top_title'}>Контакты</h6>
            <p className={'footer_top_text'}>space@eduspace.kg</p>
            <p className={'footer_top_text'}>+996 777 09 07 09</p>
            <p className={'footer_top_text'}>ул. Неизвестно 105</p>
          </div>
        </div>
      </div>
      <div className={'footer_bottom'}>
        <div className={'container'}>
          <div className={'footer_bottom_inner'}>
            <p>«Eduspace» © Все права защищены / 2022</p>
            <a className={'footer_link'} href="#">Политика конфиденциальности</a>
            <a className={'footer_link'} href="#">Публичная оферта</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;