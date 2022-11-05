import React from 'react';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import About from "../../components/About/About";
import './Main.scss';

const Main = () => {
    return (
        <div className={'main'}>
            <Header/>
            <About/>
            <Footer/>
        </div>
    );
};

export default Main;