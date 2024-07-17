'use client';

import Link from 'next/link';
import Image from 'next/image';
import styles from "./Online.module.scss";

export default function Online() {
    return (
        <div>
            <div className={styles.main_con}>
                <div className={styles.flex}>
                    <div className={styles.image}><Image className={styles.imggg} alt='individual' src="/assets/images/online.png" height={482} width={482}/></div>
                    <div className={styles.text}>
                        <h2>Ведение онлайн-групп</h2>
                        <p>Компетенции психотерапевта растут в практике с опорой на теорию. Именно поэтому в курсе есть обе части:<br/><br/>
1. Практическая – работа в малой группе (не более 12-ти участников)<br/>
2. Теоретическая – лекции, таблицы и пр. информационные материалы.<br/><br/>

Длительность – 4 месяца.<br/><br/>

Формат – групповые встречи в zoom по 2 часа, раз в неделю (количество участников группы не более 12-ти человек) + Раз в неделю лекции в свободном доступе (слушаете и изучаете в удобное время)<br/>
16 встреч + 16 лекций<br/><br/>

Старт курса сентябрь 2024г.<br/><br/>

Стоимость – 3000р за встречу (2 часа)<br/>
Пропуски тоже оплачиваются, так как будет доступ к записи очередной встречи.
</p>
                    </div>
                </div>
            </div>
        </div>
    );
}