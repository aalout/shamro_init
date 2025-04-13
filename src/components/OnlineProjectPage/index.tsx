'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from "./OnlineProjectPage.module.scss";
import RobokassaPay from '../RobokassaPay';
import ConnectImg from '../OnlineProject/images/connect.png';
import Arrow from './images/arrow.svg';

export default function Connect() {
    const [isActive, setIsActive] = useState(false);

    const handleCardClick = () => {
        setIsActive(!isActive);
    };

    return (
        <div>
            <div className={styles.main_con}>
                <div className={styles.flex}>
                    <div className={styles.image}>
                        <Image className={styles.imggg} alt='individual' src={ConnectImg} height={482} width={482} />
                    </div>
                    <div className={styles.text}>
                        <h2>Онлайн проект &quot;Connect&quot;</h2>
                        <p>Он и Она: практическая психология Пути.<br />
                            Онлайн проект для тех, кто хочет быть счастливыми в отношениях.<br />
                            Ведущие и авторы проекта психологи Андрей Шамро и Марина Шульга.<br /><br />

                            Зачем нужны отношения в современном мире, где выживание уже не является основным мотивом?<br />
                            Ответ на этот вопрос у каждой пары свой, и мы поможем найти именно ваш.<br /><br />

                            Преимущества проекта:<br /><br />

                            - Рекомендации от психологов с большим опытом работы;<br />
                            - Методы преодоления кризисов и выхода на новый уровень гармонии;<br />
                            - Поддержка и мотивация на каждом этапе вашего пути;<br />
                            - Уникальные материалы, которые изменят ваше восприятие отношений;<br />
                            - Интерактивные встречи и живое общение с ведущими.<br /><br />
                        </p>
                        <div className={styles.cards}>
                            <div
                                className={`${styles.card} ${isActive ? styles.active : ''}`}
                                onClick={handleCardClick}
                            >
                                <p>Участие в проекте - 3000р</p>
                                <Image className={styles.arrow} src={Arrow} alt='arrow' width={20} height={20} />
                                {isActive && (
                                    <div className={`${styles.cardDetail} ${isActive ? styles.active : ''}`}>
                                        <RobokassaPay src="https://auth.robokassa.ru/Merchant/PaymentForm/FormSS.if?EncodedInvoiceId=hDuKOMN6b027wrVD8HKKaQ\" />
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}