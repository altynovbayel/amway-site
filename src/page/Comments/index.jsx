import React from 'react';
import c from './Comments.module.scss'
import Title from "../../components/Title";

function Comments(props) {
  return (
    <div className={c.comments}>
      <Title title={'ОТЗЫВЫ И КОММЕНТАРИИ'}/>
      <div className={c.container}>
        <div className={c.comments_btn}>
          <button>ОСТАВИТЬ ОТЗЫВ</button>
        </div>
        <div className={c.comments_cards}>
        
        </div>
      </div>
    </div>
  );
}

export default Comments;