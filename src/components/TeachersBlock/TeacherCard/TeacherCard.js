import React from 'react';
import '../TeacherCard/TeacherCard.scss';

const TeacherCard = ({image, name, description}) => {
    return (
        <div className={'teacherCard'}>
            <div className={'teacherCard_content'}>
                <div className={'teacherCard_avatar'}>
                    <img className='teacherCard_avatar_image' src={image} alt={name}/>
                </div>
                <div className='teacherCard_text'>
                    <span className='teacherCard_text_name'>{name}</span>
                    <p className='teacherCard_text_description'>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default TeacherCard;