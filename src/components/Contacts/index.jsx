import React from 'react';
import c from './Contacts.module.scss'
import Title from "../Title";
import {FaPhoneAlt} from "react-icons/fa";
import {ImWhatsapp} from "react-icons/im";

function Contacts() {
  return (
    <div className={c.contacts}>
      <Title title={'КОНТАКТНАЯ ИНФОРМАЦИЯ'}/>
      <div className={c.container}>
        <div className={c.phone}>
          <div className={c.title}>
            <FaPhoneAlt/>
            <p>
              ТЕЛЕФОНЫ
            </p>
          </div>
          <div className={c.numbers}>
            <p>8 (985) 501-84-80</p>
            <p>8 (985) 501-84-80</p>
          </div>
        </div>
        <div className={c.whatsapp}>
          <div className={c.title}>
            <ImWhatsapp/>
            <p>
              WHATSAPP
            </p>
          </div>
          <div className={c.numbers}>
            <p>8 (985) 501-84-80</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacts;