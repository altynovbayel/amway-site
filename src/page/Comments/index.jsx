import React from 'react';
import c from './Comments.module.scss'
import Title from "../../components/Title";
import ReviewCard from "../../components/ReviewCard";
import CommentsForm from '../../components/CommentsForm';
import { GetComments } from '../../helpers';

function Comments(props) {
  const [ active, setActive ] = React.useState(false)
  const { comments } = GetComments() 

  return (
    <div className={c.comments}>
      <Title title={'ОТЗЫВЫ И КОММЕНТАРИИ'}/>
      <div className={c.container}>
        <div className={c.comments_btn}>
          <button onClick={() => setActive(true)}>ОСТАВИТЬ ОТЗЫВ</button>
        </div>
        {active ? <CommentsForm active={active} setActive={setActive}/> : null}
        <div className={c.comments_cards}>
          {
            comments?.length === 0 ?
            <h1>Ничего нет</h1>
            :
            comments?.reverse().map((item, id) => (
              <ReviewCard
                key={id}
                username={item.name}
                comment={item.comment}
                date={item.created_at.slice(0, 10)}
                time={item.created_at.slice(11, 16)}
              />
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default Comments;