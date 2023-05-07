import React from 'react';
import c from './Comments.module.scss'
import Title from "../../components/Title";
import ReviewCard from "../../components/ReviewCard";
import CommentsForm from '../../components/CommentsForm';

function Comments(props) {
  return (
    <div className={c.comments}>
      <Title title={'ОТЗЫВЫ И КОММЕНТАРИИ'}/>
      <div className={c.container}>
        <div className={c.comments_btn}>
          <button>ОСТАВИТЬ ОТЗЫВ</button>
        </div>
        <CommentsForm />
        <div className={c.comments_cards}>
          <ReviewCard/>
          <ReviewCard/>
          <ReviewCard/>
          
        </div>
      </div>
    </div>
  );
}

export default Comments;