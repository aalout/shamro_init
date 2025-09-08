'use client';

import Image from 'next/image';
import styles from './ILMA.module.scss';
import RobokassaPay from '../RobokassaPay';

export default function ILMA() {
  return (
    <div>
      <div className={styles.main_con}>
        <div className={styles.flex}>
          <div className={styles.image}><Image className={styles.imggg} alt='individual' src="/assets/images/lovemoney.png" height={482} width={482}/></div>
          <div className={styles.text}>
            <h2>Онлайн группа «Я, Любовь, деньги и тревога»</h2>
            <p>9-ти месячный проект в формате групповой работы. Все важные запросы собраны в одном пространстве:<br/>
              • Я – процессы и навыки саморегуляции. Стрессоустойчивость, внутренние конфликты и диалоги, отношение к себе, самоценность и самооценка.<br/>
              • Любовь – запросы, касающиеся отношений в паре. Диалоги, конфликты, кризисы в паре. Как я контактирую с другим?<br/>
              • Деньги – запросы касающиеся самореализации и отношения с Миром. Моё место. Мои таланты и способности.<br/>
              • Тревога – то, что одновременно и сдерживает, и побуждает к действию. Мы подвержены тревоге во многих ситуациях. Освободиться от тревоги невозможно. А вот научиться с ней справляться и выдерживать – вполне реалистичная задача.<br/>
              <br/>
              9 месяцев выбраны тоже не случайно. Естественный цикл для появления новой жизни.<br/>
              <br/>
              • Старт 3 сентября 2025г <br/>
              • Группы не более 12 человек.<br/>
              • Встречи в zoom еженедельно<br/>
              • Длительность 2 часа.<br/>
              <br/>
              Стоимость 3000р за встречу (2 часа). <br/><br/>
              ⏰ По средам с 19.00 до 21.00 <br/><br/>
            </p>
            <div className={styles.payment}>
          <RobokassaPay src="https://auth.robokassa.ru/Merchant/PaymentForm/FormSS.if?EncodedInvoiceId=Fhk3uvzxB02eZ65-YvjgzQ\"  />
        </div>
          </div>
        </div>
      </div>
    </div>
  );
}