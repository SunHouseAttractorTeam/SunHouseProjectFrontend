import React from 'react';
import '../TeacherCard/TeacherCard.scss';

const TeacherCard = ({image, name, description}) => {
    return (
        <div className={'teacher_card'}>
            <div className={'teacher_card_content'}>
                <div className={'teacher_card_avatar'}>
                    <img className='teacher_card_avatar_image' src={image} alt={name}/>
                </div>
                <div className='teacher_card_text'>
                    <span className='teacher_card_text_name'>{name}</span>
                    <p className='teacher_card_text_description'>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default TeacherCard;