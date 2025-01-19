'use client';

import Link from 'next/link';
import Image from 'next/image';
import styles from "./OnlineProjectPage.module.scss";
import RobokassaPay from '../RobokassaPay';
import ConnectImg from '../OnlineProject/images/connect.png'

export default function Connect() {
    return (
        <div>
            <div className={styles.main_con}>
                <div className={styles.flex}>
                    <div className={styles.image}><Image className={styles.imggg} alt='individual' src={ConnectImg} height={482} width={482}/></div>
                    <div className={styles.text}>
                        <h2>Онлайн проект &quot;Connect&quot;</h2>
                        <p>Он и Она: практическая психология Пути. <br/><br/>
Онлайн проект для тех, кто хотят быть счастливыми в отношениях. <br/><br/>
Ведущие и авторы проекта психологи Андрей Шамро и Марина Шульга.<br/><br/>

Новогоднее спецпредложение: 2 месяца участия за 1500р
</p>
<div className={styles.payment}>
          <RobokassaPay src="https://auth.robokassa.ru/Merchant/PaymentForm/FormSS.if?EncodedInvoiceId=_hfNqwZqNEOj_fg-R2PH7Q\"  />
        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}