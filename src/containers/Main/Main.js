import React from 'react';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Rates from "../../components/Rates/Rates";
import './Main.scss';

const Main = () => {
    return (
        <div className={'main'}>
            <Header/>
            <Rates/>
            <Footer/>
        </div>
    );
};

export default Main;