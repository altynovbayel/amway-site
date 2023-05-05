import React from 'react';
import c from './Title.module.scss'

function Title({title}) {
  return (
    <h1 className={c.title}>
      {title}
    </h1>
  );
}

export default Title;