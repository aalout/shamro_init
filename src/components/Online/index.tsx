'use client';

import Link from 'next/link';
import Image from 'next/image';
import styles from "./Online.module.scss";
import RobokassaPay from '../RobokassaPay';

export default function Online() {
    return (
        <div>
            <div className={styles.main_con}>
                <div className={styles.flex}>
                    <div className={styles.image}><Image className={styles.imggg} alt='individual' src="/assets/images/new/online.png" height={482} width={482}/></div>
                    <div className={styles.text}>
                    <h2>Групповая супервизия</h2>
                        <p>Приветствую, коллеги!<br /><br />
Я веду супервизорские группы с 2021 года. За это время четко сформировалось мое понимание: главный вызов в нашей профессии – не просто освоить техники, а обрести  адекватную профессиональную идентичность (ПИ),<br />
Я уверен, что именно ГРУППОВАЯ Супервизия лучше всего формирует ПИ психолога.<br /><br />

Группа В ТЕМЕ – это лаборатория идей и решений. Эксперты и ведущие групп (7+ лет практики)<br /><br />

Стоимость 2000 руб за встречу (2 часа).

</p>
<div className={styles.payment}>
          <RobokassaPay src="https://auth.robokassa.ru/Merchant/PaymentForm/FormSS.if?EncodedInvoiceId=sZOfnwj2_UqZculc2qwYqg\"  />
        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}