import React from 'react';
import c from './Contacts.module.scss'
import Title from "../../components/Title";
import {FaPhoneAlt} from "react-icons/fa";
import {ImWhatsapp} from "react-icons/im";
import { Link } from 'react-router-dom';
import {ScrollToTop} from "../../helpers";

function Contacts() {
  React.useEffect(() => {
    ScrollToTop()
  }, [])
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
            <p>
              <Link to="tel:89996920861">
                8 (999) 692-08-61
              </Link>
            </p>
          </div>
        </div>
        <div className={c.whatsapp}>
          <div className={c.title}>
            <ImWhatsapp className={c.whats} />
            <p>
              WHATSAPP
            </p>
          </div>
          <div className={c.numbers}>
            <p>
              <Link to={"https://wa.me/+79996920861"}>  
                +7 (999) 692-08-61
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacts;