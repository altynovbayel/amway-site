import React from 'react';
import c from './Main.module.scss'
import Title from "../../components/Title";


function Main() {
  return (
    <div className={c.main}>
      <Title title={'КАТАЛОГ ТОВАРОВ'}/>
      
    </div>
  );
}

export default Main;