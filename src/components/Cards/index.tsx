'use client';

import Link from 'next/link';
import Image from 'next/image';

import styles from "./Cards.module.scss"

export default function Cards() {
  return (
    <div id='cards' className={styles.cards}>
        <h2>Услуги</h2>
        <p>Любое наше взаимодействие начинается с короткого разговора по телефону. Напишите в Telegram и мы договоримся о времени собеседования. Для удобства предлагаю ознакомиться с правилами работы: 
        </p>
        <div className={styles.download_links}>
            <div className={styles.link}><Image src="/assets/pdf/download.svg" alt='download' width={34} height={33}/><a href="/assets/pdf/online.pdf" download="online.pdf">Инструкция для онлайн групп (PDF)</a></div>
            <div className={styles.link}><Image src="/assets/pdf/download.svg" alt='download' width={34} height={33}/><a href="/assets/pdf/session.pdf" download="session.pdf">Инструкция для индивидуальных сессий (PDF)</a></div>
        </div>
        <div className={styles.cards_flex}>
            <Link href="/individual"><div className={styles.card_item1}>
                <div className={styles.cards_img1}>
                    <Image className={styles.img1} alt='card' src="/assets/images/individual.jpg" width={482} height={482}/>
                </div>
                <div className={styles.cards_content1}>
                    <p>Конечная цель процесса для Вас – научиться самостоятельно адаптироваться к новым обстоятельствам, даже если они критические (утрата, развод, различные кризисы).</p>
                </div>
            </div></Link>
            <Link href="/love_money_anxiety"><div className={styles.card_item2}>
                <div className={styles.cards_img2}>
                    <Image className={styles.img2} alt='card' src="/assets/images/lovemoney.png" width={482} height={482}/>
                </div>
                <div className={styles.cards_content2}>
                    <p>Групповая психологическая работа сфокусирована на решении эмоциональных, поведенческих и межличностных проблем при помощи групповой динамики – доверительного социального общения.
                    </p>
                </div>
            </div></Link>
       </div>
    </div>
  );
}