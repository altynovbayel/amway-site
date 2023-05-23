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
              <Link to="tel:8 (985) 501-84-80">
                8 (985) 501-84-80
              </Link>
            </p>
            <p>
              <Link to="tel:8 (985) 501-84-80">
                8 (985) 501-84-80
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
              <Link to={"https://wa.me/89855018480"}>
                8 (985) 501-84-80
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacts;