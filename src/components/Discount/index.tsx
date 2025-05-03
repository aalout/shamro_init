'use client';

import Image from 'next/image';
import styles from './discount.module.scss';
import RobokassaPay from '../RobokassaPay';
import cardsStyles from '../Cards/Cards.module.scss';

export default function Discount() {
  return (
    <div>
      <div className={styles.main_con}>
        <div className={styles.flex}>
          <div className={styles.image} style={{position: 'relative', overflow: 'hidden', height: 'fit-content'}}>
            <div className={cardsStyles.special_offer_marquee}>
              <div className={cardsStyles.marquee_inner}>
                <span>Специальное предложение мая 2025г&nbsp;&nbsp;&nbsp;</span>
                <span>Специальное предложение мая 2025г&nbsp;&nbsp;&nbsp;</span>
                <span>Специальное предложение мая 2025г&nbsp;&nbsp;&nbsp;</span>
              </div>
            </div>
            <Image className={styles.imggg} alt='individual' src="/assets/images/individual.jpg" height={482} width={482}/>
          </div>
          <div className={styles.text}>
            <h2>Специальное предложение на индивидуальные консультации Май 2025г</h2>
            <p>Пакет из 5 сессий со скидкой 30%
Пакет из 10 сессий со скидкой 40%<br/><br/>
Запросы: <br/>
• Про отношения.<br/>
• Про самореализацию.<br/>
• Разочарование/кризис.<br/><br/>
Количество мест ограничено!
            </p>
            <div className={styles.payment}>
            <p style={{paddingBottom: "10px"}}>
Пакет из 5 сессий (20 000 руб)
            </p>
          <RobokassaPay src="https://auth.robokassa.ru/Merchant/PaymentForm/FormSS.if?EncodedInvoiceId=BkkhTo1Rakqhme2JzOf49Q\"  />
          <p style={{paddingBottom: "10px"}}>
Пакет из 10 сессий (35 000 руб)
            </p>
          <RobokassaPay src="https://auth.robokassa.ru/Merchant/PaymentForm/FormSS.if?EncodedInvoiceId=BWBMtQ6DwkmFIDN0A5u3Yw\"  />
        </div>
          </div>
        </div>
      </div>
    </div>
  );
}