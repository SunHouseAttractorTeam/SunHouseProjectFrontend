import React from 'react';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import './Main.scss';
import CoursesCatalog from "../CoursesCatalog/CoursesCatalog";

const Main = () => {
    return (
        <div className={'main'}>
            <Header/>
            <CoursesCatalog/>
            <Footer/>
        </div>
    );
};

export default Main;