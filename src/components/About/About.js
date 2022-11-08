import React from 'react';
import './About.scss';
import PlanetImage from '../../assets/images/Planet.H03.png';
import Vector from '../../assets/images/Vector.png';

const About = () => {
  return (
    <div className={'about'}>
      <div className={'container about_con'}>
        <div className={'about_con_left'}>
          <div className={'about_con_left_imgUnderBlock'}>
            <img src={Vector} className={'about_con_left_imgUnderBlock_image'} alt="Eduspace"/>
          </div>
          <div className={'about_con_left_imgUpBlock'}>
            <img src={PlanetImage} className={'about_con_left_imgUpBlock_image'} alt="Eduspace"/>
          </div>
        </div>
        <div className={'about_con_right'}>
          <h3 className={'about_con_right_title'}>О школе</h3>
          <p className={'about_con_right_sub-title'}>
            Миссия Eduspace — дать возможность каждому быть
            актуальным и востребованным специалистом прямо сейчас.
            Вне зависимости от возраста и географии.
          </p>
          <p className={'about_con_right_text'}>
            Значимость этих проблем настолько очевидна, что новая модель организационной
            деятельности играет важную роль в формировании систем массового участия.
            Идейные соображения высшего порядка, а также консультация с широким активом
            способствует подготовки и реализации направлений прогрессивного развития.
            Повседневная практика показывает
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;