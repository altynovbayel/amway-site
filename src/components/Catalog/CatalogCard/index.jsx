import React from 'react';
import c from './CatalogCard.module.scss'
import { BiChevronRight } from 'react-icons/bi';

function CatalogCard({title, img}) {
  return (
    <div className={c.card}>
      <img src={img} alt="" />
      <p>
        {title} <BiChevronRight />
      </p>
    </div>
  );
}

export default CatalogCard;