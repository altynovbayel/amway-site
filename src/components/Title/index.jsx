import React from 'react';
import c from './Title.module.scss'

function Title({title}) {
  return (
    <h2 className={c.title}>
      {title}
    </h2>
  );
}

export default Title;