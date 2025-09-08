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
                    <Image className={styles.img1} alt='card' src="/assets/images/indsup.jpg" width={482} height={482}/>
                </div>
                <div className={styles.cards_content1}>
                    <p>Это процесс формирования профессиональной идентичности. Какой я специалист? Вот главный вопрос.</p>
                </div>
            </div></Link>
            <Link href="/strat_session"><div className={styles.card_item2}>
                <div className={styles.cards_img2}>
                    <Image className={styles.img2} alt='card' src="/assets/images/forps.jpg" width={482} height={482}/>
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
                    <Image className={styles.img1} alt='card' src="/assets/images/sup.jpg" width={482} height={482}/>
                </div>
                <div className={styles.cards_content1}>
                    <p>На группах обсуждаем не только клиентские случаи, но и вопросы продвижения услуг - где и как брать клиентов, как вести статистику, где и чему еще учиться, какой я психолог? И другие актуальные темы.
                    </p>
                </div>
            </div></Link>
            <Link href="/onlinegroup"><div className={styles.card_item2}>
                <div className={styles.cards_img2}>
                    <Image className={styles.img2} alt='card' src="/assets/images/online.png" width={482} height={482}/>
                </div>
                <div className={styles.cards_content2}>
                    <p>Компетенции психотерапевта растут в практике с опорой на теорию. Именно поэтому в курсе есть обе части:<br/><br/>
1. Практическая – работа в малой группе (не более 12-ти участников)<br/>
2. Теоретическая – лекции, таблицы и пр. информационные материалы.

                    </p>
                </div>
            </div></Link>
       </div>
       <div id='cards' className={styles.cards_flex1}>

            <Link href="/longGroup"><div className={styles.card_item4}>
                <div className={styles.cards_img5}>
                    <Image className={styles.img5} alt='card' src="/assets/images/longGroup.png" width={376} height={256}/>
                </div>
                <div className={styles.cards_content5}>
                    <p>Онлайн группа пролонгированная (больше года)
                    </p>
                </div>
            </div></Link>
            </div>
    </div>
  );
}