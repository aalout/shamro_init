'use client';

import Link from 'next/link';
import Image from 'next/image';
import styles from './LongGroup.module.scss';
import RobokassaPay from '../RobokassaPay';

export default function LongGroup() {
    return (
        <div>
            <div className={styles.main_con}>
                <div className={styles.flex}>
                    <div className={styles.image}><Image className={styles.imggg} alt='individual' src="/assets/images/longGroup.png" height={256} width={376}/></div>
                    <div className={styles.text}>
                        <h2>Психологические онлайн-группы</h2>
                        <p>Онлайн группа пролонгированная (больше года) <br/> 2т.р. за встречу</p>
<div className={styles.payment}>
          <RobokassaPay src="https://auth.robokassa.ru/Merchant/PaymentForm/FormSS.if?EncodedInvoiceId=COqGgKnewkqNA5nVdVCUoA"  />
        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}