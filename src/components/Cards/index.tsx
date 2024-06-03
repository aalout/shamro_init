'use client';

import Link from 'next/link';
import Image from 'next/image';

import styles from "./Cards.module.scss"

export default function Cards() {
  return (
    <div className={styles.cards}>
        <h2>Услуги</h2>
        <div id='cards' className={styles.cards_flex}>
            <Link href="/individual"><div className={styles.card_item1}>
                <div className={styles.cards_img1}>
                    <Image className={styles.img1} alt='card' src="/assets/images/individual.jpg" width={482} height={482}/>
                </div>
                <div className={styles.cards_content1}>
                    <p>Конечная цель процесса для Вас – научиться самостоятельно адаптироваться к новым обстоятельствам, даже если они критические (утрата, развод, различные кризисы).</p>
                </div>
            </div></Link>
            <Link href="/strat_session"><div className={styles.card_item2}>
                <div className={styles.cards_img2}>
                    <Image className={styles.img2} alt='card' src="/assets/images/forps.jpg" width={482} height={482}/>
                </div>
                <div className={styles.cards_content2}>
                    <p>Поставить и финансовые и профессиональные цели. Составить удобное для Вас расписание с учётом всех нюансов.</p>
                </div>
            </div></Link>
       </div>
       <Link href="https://среда.space/schedule" target='_blank'><div className={styles.card_itemm}>
            <div className={styles.cards_img3}>
                <Image className={styles.img3} alt='card' src="/assets/images/forps.jpg" width={482} height={482}/>
            </div>
            <div className={styles.cards_content3}>
                <p>больше</p>
            </div>
            </div></Link>
    </div>
  );
}