import React from 'react';
import c from './Review.module.scss'
import { AiOutlineUser } from 'react-icons/ai';
import Loader from '../Loader';

function ReviewCard({comments, username, comment, date, time}) {
  
  if(!comments) return <Loader />
  return (
    <div className={c.review}>
      <div className={c.up}>
        <div className={c.profile_photo}>
          <AiOutlineUser />        
        </div>
        <div className={c.review_info}>
          <p className={c.name}>{username}</p>
          <span className={c.date}>{date}, {time}</span>
        </div>
      </div>
      <div className={c.review_text}>
        <p>
          {comment}
        </p>
      </div>
    </div>
  );
}

export default ReviewCard;