import React from 'react';
import c from './CatalogCard.module.scss'
import { BiChevronRight } from 'react-icons/bi';
import {useNavigate} from "react-router-dom";

function CatalogCard({title, img, id}) {
  const navigate = useNavigate()
  const toCategory = () => navigate(`/products/category/${id}`)
  return (
    <div className={c.card} onClick={toCategory} >
      <img src={img} alt="" />
      <p>
        {title} <BiChevronRight />
      </p>
    </div>
  );
}

export default CatalogCard;