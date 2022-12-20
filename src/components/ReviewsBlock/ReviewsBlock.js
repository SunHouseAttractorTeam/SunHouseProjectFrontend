import React from 'react'
import ReviewCard from './ReviewCard/ReviewCard'
import './ReviewsBlock.scss'
import CustomSlider from '../UI/CustomSlider/CustomSlider'

const sliderSettings = [
  {
    breakpoint: 1170,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: true,
      centerPadding: '150px',
    },
  },
  {
    breakpoint: 870,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: true,
      centerPadding: '50px',
    },
  },
  {
    breakpoint: 700,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
    },
  },
]
const ReviewsBlock = () => (
  <div className="review_block">
    <div className="container">
      <div className="review_block_headline">
        <h5 className="review_block_headline_title">отзывы</h5>
        <CustomSlider response={sliderSettings}>
          <ReviewCard
            name="Alina"
            social="instagram"
            content="Очень мне полюбила дизайн. Нашла в этом себя и научилась
                полностью погружаться в процесс, кайфовать от дизайна.
                Клиенты находят меня сами. Никита отточил мой навык дизайна так,
                что теперь я могу воплотить любую задумку клиента,
                каждый остается доволен) Очень благодарна всей его команде!"
          />
          <ReviewCard
            name="Alina"
            social="instagram"
            content="Очень мне полюбила дизайн. Нашла в этом себя и научилась
                полностью погружаться в процесс, кайфовать от дизайна.
                Клиенты находят меня сами. Никита отточил мой навык дизайна так,
                что теперь я могу воплотить любую задумку клиента,
                каждый остается доволен) Очень благодарна всей его команде!"
          />
          <ReviewCard
            name="Alina"
            social="instagram"
            content="Очень мне полюбила дизайн. Нашла в этом себя и научилась
                полностью погружаться в процесс, кайфовать от дизайна.
                Клиенты находят меня сами. Никита отточил мой навык дизайна так,
                что теперь я могу воплотить любую задумку клиента,
                каждый остается доволен) Очень благодарна всей его команде!"
          />
        </CustomSlider>
      </div>
    </div>
  </div>
)

export default ReviewsBlock
