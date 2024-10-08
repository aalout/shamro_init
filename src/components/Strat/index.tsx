'use client';

import Link from 'next/link';
import Image from 'next/image';
import styles from './Strat.module.scss';
import RobokassaPay from '../RobokassaPay';

export default function Strat() {
    return (
        <div>
            <div className={styles.main_con}>
                <div className={styles.flex}>
                    <div className={styles.image}><Image className={styles.imggg} alt='individual' src="/assets/images/forps.jpg" height={482} width={482}/></div>
                    <div className={styles.text}>
                        <h2>Стратегическая сессия для психологов</h2>
                        <p>Индивидуальная стратегическая сессия для психолога.
2 часа в онлайн или офлайн, если Вы живёте в Краснодаре. Удобнее это делать в начале года. Однако, ничего не мешает Вам сделать это в любое время и распланировать Ваш год. Поставить и финансовые и профессиональные цели. Составить удобное для Вас расписание с учётом всех нюансов. Плюс данного формата в том, что я учитываю особенности нашей профессии. Это не классическая СС с графиками и цифрами. Это живой диалог и актуальные для ВАС задачи, реалистичные, а значит и достижимые цели.
«Стратегия без тактики — это самый медленный путь к победе. Тактика без стратегии — это просто суета перед поражением».
Стоимость 10000р за встречу (2 часа)</p>
<div className={styles.payment}>
          <RobokassaPay src="https://auth.robokassa.ru/Merchant/PaymentForm/FormSS.if?EncodedInvoiceId=FozGOqfDaUGbC2_iw5LV6Q"  />
        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}