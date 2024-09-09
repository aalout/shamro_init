'use client';

import Link from 'next/link';
import Image from 'next/image';
import styles from './ForBeginners.module.scss';
import RobokassaPay from '../RobokassaPay';

export default function ForBeginners() {
    return (
        <div>
            <div className={styles.main_con}>
                <div className={styles.flex}>
                    <div className={styles.image}><Image className={styles.imggg} alt='individual' src="/assets/images/forBeginners.jpg" height={256} width={376}/></div>
                    <div className={styles.text}>
                        <h2>Супервизорские онлайн-группы</h2>
                        <p>Супервизорская группа для начинающих психологов <br/> 1.5 т.р за встречу</p>
<div className={styles.payment}>
          <RobokassaPay src="https://auth.robokassa.ru/Merchant/PaymentForm/FormSS.if?EncodedInvoiceId=Gq1TEUrRmUO88PyDrEdosw"  />
        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}