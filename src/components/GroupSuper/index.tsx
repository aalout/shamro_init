'use client';

import Link from 'next/link';
import Image from 'next/image';
import styles from './GroupSuper.module.scss';
import RobokassaPay from '../RobokassaPay';

export default function GroupSuper() {
    return (
        <div>
            <div className={styles.main_con}>
                <div className={styles.flex}>
                    <div className={styles.image}><Image className={styles.imggg} alt='individual' src="/assets/images/new/sup.png" height={482} width={482}/></div>
                    <div className={styles.text}>
<h2>Проект СРЕДА РОСТА</h2>
                        <p>«Среда Роста» — годовая программа в формате групповой онлайн супервизии<br/>
Это не курс с инструкциями «как надо», а пространство диалога, где мы исследуем вашу уникальную профессиональную идентичность. <br/><br/>

Здесь нет гонки за результатом и насилия над собой — только бережное сопровождение. Мы выбираем экологичную трансформацию вместо давления, чтобы Вы могли развиваться в ритме, который подходит именно вам.<br/><br/>

Программа предназначена для тех, кто в начале практики: клиенты есть, а внутреннего методологического стержня пока не хватает. Мы не даём готовых рецептов, а помогаем найти вашу собственную траекторию через разбор реальных случаев. <br/><br/>

В основе — безопасное поле групповой супервизии, где каждый случай становится материалом для роста всех участников. <br/><br/>

Старт следующей группы – сентябрь 2026<br/>
Встречи раз в 2 недели<br/>
Стоимость 5000 руб в месяц

</p>
<div className={styles.payment}>
          <RobokassaPay src="https://auth.robokassa.ru/Merchant/PaymentForm/FormSS.if?EncodedInvoiceId=t9oSUuDjukGX8bmgClfSaw\"  />
        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}