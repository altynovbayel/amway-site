import React from 'react';
import c from './Review.module.scss'

function ReviewCard({username, comment, date}) {
  return (
    <div className={c.review}>
      <div className={c.profile_photo}>
        <img src="https://www.pinclipart.com/picdir/big/165-1653686_female-user-icon-png-download-user-colorful-icon.png" alt="" />
      </div>
      <div>
        <div className={c.review_info}>
          <p className={c.name}>{username}</p>
          <span className={c.date}>{date}</span>
        </div>
        <div className={c.review_text}>
          <p>
            {comment}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ReviewCard;