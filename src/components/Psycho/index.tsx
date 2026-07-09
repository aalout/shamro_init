'use client';

import Link from 'next/link';
import Image from 'next/image';

import styles from "./Psycho.module.scss"

export default function Psycho() {
  return (
    <div className={styles.cards}>
        <h2>Для психологов</h2>
        <div id='cards' className={styles.cards_flex}>
            <Link href="/indsup"><div className={styles.card_item1}>
                <div className={styles.cards_img1}>
                    <Image className={styles.img1} alt='card' src="/assets/images/new/indsup.png" width={482} height={482}/>
                </div>
                <div className={styles.cards_content1}>
                    <p>Это процесс формирования профессиональной идентичности. Какой я специалист? Вот главный вопрос.</p>
                </div>
            </div></Link>
            <Link href="/strat_session"><div className={styles.card_item2}>
                <div className={styles.cards_img2}>
                    <Image className={styles.img2} alt='card' src="/assets/images/new/forps.png" width={482} height={482}/>
                </div>
                <div className={styles.cards_content2}>
                    <p>Поставить и финансовые и профессиональные цели.
Сформировать список необходимых задач.
Составить удобный для Вас календарный план с учётом всех нюансов.
                    </p>
                </div>
            </div></Link>
       </div>
       <div id='cards' className={styles.cards_flex1}>
            <Link href="/groupsup"><div className={styles.card_item1}>
                <div className={styles.cards_img1}>
                    <Image className={styles.img1} alt='card' src="/assets/images/new/sup.png" width={482} height={482}/>
                </div>
                <div className={styles.cards_content1}>
                    <p>
                    Годовая программа в формате групповой онлайн супервизии
                    </p>
                </div>
            </div></Link>
            <Link href="/onlinegroup"><div className={styles.card_item2}>
                <div className={styles.cards_img2}>
                    <Image className={styles.img2} alt='card' src="/assets/images/new/online.png" width={482} height={482}/>
                </div>
                <div className={styles.cards_content2}>
                    <p>Не просто освоить техники, а обрести адекватную профессиональную идентичность
                    </p>
                </div>
            </div></Link>
       </div>
    </div>
  );
}