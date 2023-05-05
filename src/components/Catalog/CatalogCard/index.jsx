import React from 'react';
import c from './CatalogCard.module.scss'

function CatalogCard({title, img}) {
  return (
    <div className={c.card}>
      <img src={img} alt="" />
      <p>
        {title}
      </p>
    </div>
  );
}

export default CatalogCard;