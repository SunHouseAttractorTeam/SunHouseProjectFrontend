import React from 'react';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import './Main.scss';
import TeachersBlock from "../../components/TeachersBlock/TeachersBlock";

const Main = () => {
    return (
        <div className={'main'}>
            <Header/>
            <TeachersBlock/>
            <Footer/>
        </div>
    );
};

export default Main;