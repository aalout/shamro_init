'use client';

import Link from 'next/link';
import Image from 'next/image';
import styles from './GroupSuper.module.scss';
import RobokassaPay from '../RobokassaPay';

export default function GroupSuper() {
    return (
        <div>
            <div className={styles.main_con}>
                <div className={styles.flex}>
                    <div className={styles.image}><Image className={styles.imggg} alt='individual' src="/assets/images/sup.jpg" height={482} width={482}/></div>
                    <div className={styles.text}>
                        <h2>Групповая супервизия</h2>
                        <p>Формат малой группы (не более 12-ти участников). <br/>
Время 2-2.5 ч<br/>
Длительность работы группы 11 месяцев. С сентября по июль включительно.<br/><br/>

На группах обсуждаем не только клиентские случаи, но и вопросы продвижения услуг - где и как брать клиентов, как вести статистику, где и чему еще учиться, какой я психолог? И другие актуальные темы.<br/><br/>

Есть четыре формата. Выбор зависит от уровня подготовленности специалиста:<br/><br/>

• «Практика. Начало» - СВ группа для начинающих психологов – Вы только начали практиковать;<br/>
Старт вторник 3 сентября в 13.00 по мск<br/><br/>

• «Управляемый хаос» - СВ группа для психологов – у Вас уже есть немного практики, хочется порядка и структуры;<br/>
Старт вторник 3 сентября в 10.00 по мск<br/><br/>

• «В теме» - СВ группа для психологов со стажем и активной практикой.<br/>
Старт вторник 4 сентября в 10.00 по мск<br/><br/>

• «Ведущий» - СВ группа для ведущих групп;<br/>
Старт вторник 2 сентября в 10.00 по мск<br/><br/>

Старт сентябрь 2024г. Встречаемся еженедельно<br/>
Стоимость 2500р за встречу (2 часа). 
</p>
<div className={styles.payment}>
          <RobokassaPay src="https://auth.robokassa.ru/Merchant/PaymentForm/FormSS.if?EncodedInvoiceId=kbFyYqrkvketLPdiUu-o1A"  />
        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}