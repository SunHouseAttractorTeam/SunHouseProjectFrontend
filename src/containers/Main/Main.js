import React from 'react';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import './Main.scss';

const Main = () => {
    return (
        <div className={'main'}>
            <Header/>
            <Footer/>
        </div>
    );
};

export default Main;