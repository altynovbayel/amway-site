import React from 'react';
import c from './HeaderSlide.module.scss'
import {useNavigate} from "react-router-dom";

function HeaderSlide({img, text, title, backgroundColor, color}) {
  const navigate = useNavigate()
  const toCatalog = () => navigate('/catalog/')
  return (
    <div
      className={c.slide}
      style={{backgroundColor: backgroundColor, color: color }}
    >
      <div className={c.slide_text}>
        <h2>{title}</h2>
        <p>{text}</p>
        <button style={{backgroundColor: color}} onClick={toCatalog}>
          Узнайте о наших продуктах
        </button>
      </div>
      <div className={c.slider_img}>
        <img src={img} alt="" />
      </div>
    </div>
  );
}

export default HeaderSlide;