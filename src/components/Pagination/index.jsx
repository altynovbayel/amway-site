import React from 'react';
import c from './Pagination.module.scss'
import {IoIosArrowBack, IoIosArrowForward} from "react-icons/io";

function Pagination({current, setCurrent, pageCount}) {
  
  const prev = () => current > 1 && setCurrent(prev => prev - 1)
  const next = () => {
    current < pageCount && setCurrent(prev => prev + 1)
    
    window.scrollTo({
      top: 120
    })
  }
  
  return (
    <div className={c.pg}>
      <button onClick={prev} disabled={current <= 1 && true}>
        <IoIosArrowBack/>
      </button>
      <span>
        Страница {current} из {pageCount}
      </span>
      <button onClick={next} disabled={current >= pageCount && true}>
        <IoIosArrowForward/>
      </button>
    </div>
  );
}

export default Pagination;