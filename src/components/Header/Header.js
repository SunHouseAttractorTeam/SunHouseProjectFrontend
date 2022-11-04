import React from 'react';
import './Header.scss';
import Nav from "../UI/Nav/Nav";
import MainButton from "../UI/MainButton/MainButton";
import Logo from "../UI/Logo/Logo";

const Header = () => {
    const onHeaderButton = () => {

    };

    return (
        <header className={' header'}>
           <div className={'container header__container'}>
               <Logo className={'header_logo'}/>
               <Nav/>
               <MainButton className={'header_MainButton'} onClick={onHeaderButton} text={'Войти'}/>
           </div>
        </header>
    );
};

export default Header;