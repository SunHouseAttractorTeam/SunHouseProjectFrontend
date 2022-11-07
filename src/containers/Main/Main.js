import React from 'react';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import SelectionHelpForm from "../../components/SelectionHelpForm/SelectionHelpForm";
import './Main.scss';

const Main = () => {
    return (
        <div className={'main'}>
            <Header/>
            <SelectionHelpForm/>
            <Footer/>
        </div>
    );
};

export default Main;