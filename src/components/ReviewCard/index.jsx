import React from 'react';
import c from './Review.module.scss'
import { AiOutlineUser } from 'react-icons/ai';

function ReviewCard({username, comment, date, time}) {
  return (
    <div className={c.review}>
      <div className={c.profile_photo}>
        <AiOutlineUser />        
      </div>
      <div>
        <div className={c.review_info}>
          <p className={c.name}>{username}</p>
          <span className={c.date}>{date}, {time}</span>
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