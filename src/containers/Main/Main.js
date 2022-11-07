import React from 'react';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import SelectionHelpForm from "../../components/SelectionHelpForm/SelectionHelpForm";
import Rates from "../../components/Rates/Rates";
import './Main.scss';
import Promo from "../../components/Promo/Promo";

const Main = () => {
    return (
        <div className={'main'}>
            <Header/>
            <Promo/>
            <Rates/>
            <SelectionHelpForm/>
            <Footer/>
        </div>
    );
};

export default Main;