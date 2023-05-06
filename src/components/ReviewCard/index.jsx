import React from 'react';
import c from './Review.module.scss'

function ReviewCard() {
  return (
    <div className={c.review}>
      <div className={c.profile_photo}>
        <img src="/images/user-photo.png" alt="" />
      </div>
      <div>
        <div className={c.review_info}>
          <p className={c.name}>АЛЕКСАНДР</p>
          <span className={c.date}>13 АПРЕЛЯ 2023, 11:26</span>
        </div>
        <div className={c.review_text}>
          <p>
            Молодцы. Супер. Очень оперативно и дешевле, чем через Казахстанский официальный сайт.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ReviewCard;