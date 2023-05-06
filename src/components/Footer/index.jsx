import React from 'react';
import c from './Footer.module.scss'

function Footer() {
  return (
    <div className={c.footer}>
      <p>
        2020-2023 © Моя компания
        Лучшие товары и услуги в Интернете
      </p>
    </div>
  );
}

export default Footer;