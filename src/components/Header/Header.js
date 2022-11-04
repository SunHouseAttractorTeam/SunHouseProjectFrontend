import React from 'react';
import './Header.scss';
import Nav from "../UI/Nav/Nav";
import MainButton from "../UI/MainButton/MainButton";
import Logo from "../UI/Logo/Logo";

const Header = () => {
    const onHeaderButton = () => {

    };

    return (
        <header className={'container header'}>
            <Logo className={'header_logo'}/>
            <Nav/>
            <MainButton className={'header_MainButton'} onClick={onHeaderButton} text={'Войти'}/>
        </header>
    );
};

export default Header;