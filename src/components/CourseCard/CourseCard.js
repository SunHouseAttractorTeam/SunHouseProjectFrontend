import React from 'react';

import './CourseCard.scss';

const CourseCard = ({title,date, list, link}) => {
    return (
        <div className={'course-card'}>
            <span className={'course-card__subtitle'}>профессия</span>
            <h3 className={'course-card__title'}>{title}</h3>
            <span className={'course-card__date'}>{date}</span>
            {list && (
                <ul className={'course-card__list'}>
                    {list.map(item => (
                        <li key={item} className={'course-card__list-item'}>
                            {item}
                        </li>
                    ))}
                </ul>
            )}
            {link && (
                <a
                    href={link.linkTo}
                    className={'course-card__link'}
                >
                    {link.label}
                </a>
            )}
        </div>
    );
};

export default CourseCard;