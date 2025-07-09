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
              <span>Пакет сессий&nbsp;&nbsp;&nbsp;</span>
                        <span>Пакет сессий&nbsp;&nbsp;&nbsp;</span>
                        <span>Пакет сессий&nbsp;&nbsp;&nbsp;</span>
                        <span>Пакет сессий&nbsp;&nbsp;&nbsp;</span>
                        <span>Пакет сессий&nbsp;&nbsp;&nbsp;</span>
                        <span>Пакет сессий&nbsp;&nbsp;&nbsp;</span>
                        <span>Пакет сессий&nbsp;&nbsp;&nbsp;</span>
                        <span>Пакет сессий&nbsp;&nbsp;&nbsp;</span>
              </div>
            </div>
            <Image className={styles.imggg} alt='individual' src="/assets/images/individual.jpg" height={482} width={482}/>
          </div>
          <div className={styles.text}>
            <h2>Пакет из 5 сессий по сниженной стоимости</h2>
            <p>Пакет из 5 сессий по сниженной стоимости - 25 000 руб<br/><br/>
Запросы: <br/>
• Про отношения.<br/>
• Про самореализацию.<br/>
• Разочарование/кризис.<br/><br/>
            </p>
            <div className={styles.payment}>
            <p style={{paddingBottom: "10px"}}>
Пакет из 5 сессий (25 000 руб)
            </p>
          <RobokassaPay src="https://auth.robokassa.ru/Merchant/PaymentForm/FormSS.if?EncodedInvoiceId=BkkhTo1Rakqhme2JzOf49Q\"  />
        </div>
          </div>
        </div>
      </div>
    </div>
  );
}