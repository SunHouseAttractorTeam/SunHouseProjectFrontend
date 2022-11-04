import React from 'react';
import './Footer.scss';
import Logo from "../UI/Logo/Logo";
import FooterIcon from "./FooterIcon/FooterIcon";
import FooterLink from "./FooterLink/FooterLink";

const Footer = () => {
  return (
    <footer className={'footer'}>
      <div className={'container'}>
        <div className={'footer_top'}>
          <div className={'footer_top_col'}>
            <div className={'footer_top_logo'}>
              <Logo className={'footer_logo'}/>
            </div>
            <div className={'footer_top_social_icons'}>
              <FooterIcon href='#' className={'footer_link footer_link_vk'}/>
              <FooterIcon href='#' className={'footer_link footer_link_yt'}/>
              <FooterIcon href='#' className={'footer_link footer_link_tg'}/>
              <FooterIcon href='#' className={'footer_link footer_link_inst'}/>
            </div>
          </div>
          <div className={'footer_top_col'}>
            <h6 className={'footer_top_title'}>Курсы</h6>
            <FooterLink href="#" className={'footer_link'}>Web-дизайнер</FooterLink>
            <FooterLink href="#" className={'footer_link'}>UX-UI дизайнер</FooterLink>
            <FooterLink href="#" className={'footer_link'}>Front-end разработчик</FooterLink>
          </div>
          <div className={'footer_top_col'}>
            <h6 className={'footer_top_title'}>Информация</h6>
            <FooterLink href="#" className={'footer_link'}>Об Eduspace</FooterLink>
            <FooterLink href="#" className={'footer_link'}>Преподователи</FooterLink>
            <FooterLink href="#" className={'footer_link'}>Партнеры</FooterLink>
            <FooterLink href="#" className={'footer_link'}>Тарифы</FooterLink>
            <FooterLink href="#" className={'footer_link'}>Контакты</FooterLink>
          </div>
          <div className={'footer_top_col'}>
            <h6 className={'footer_top_title'}>Контакты</h6>
            <p className={'footer_top_text footer_top_text_email'}>space@eduspace.kg</p>
            <p className={'footer_top_text footer_top_text_phone'}>+996 777 09 07 09</p>
            <p className={'footer_top_text footer_top_text_pin'}>ул. Неизвестно 105</p>
          </div>
        </div>
      </div>
      <div className={'footer_bottom'}>
        <div className={'container'}>
          <div className={'footer_bottom_inner'}>
            <p>«Eduspace» © Все права защищены / 2022</p>
            <FooterLink className={'footer_link'} href="#">Политика конфиденциальности</FooterLink>
            <FooterLink className={'footer_link'} href="#">Публичная оферта</FooterLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;