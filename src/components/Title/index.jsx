import React from 'react';
import c from './Title.module.scss'

function Title({title}) {
  return (
    <h1 className={c.title}>
      {title?.length > 30 ? `${title?.slice(0, 30)}...` : title}
    </h1>
  );
}

export default Title;