'use client';

import Link from 'next/link';
import Image from 'next/image';
import styles from './Individual.module.scss';
import RobokassaPay from '../RobokassaPay';

export default function Individual() {
    return (
        <div>
            <div className={styles.main_con}>
                <div className={styles.flex}>
                    <div className={styles.image}><Image className={styles.imggg} alt='individual' src="/assets/images/individual.jpg" height={482} width={482}/></div>
                    <div className={styles.text}>
                        <h2>Индивидуальная консультация</h2>
                        <p>Задача индивидуального консультирования – помочь в осознании своих потребностей, научить прислушиваться к себе, разобраться, что именно происходит в вашей жизни и как в этом процессе участвуете лично вы.

Есть препятствия, которые мешают Вашей удовлетворенности жизнью (непрожитая обида и не выраженная злость все еще могут оставаться как бы внутри и мешают комфортно жить и быть счастливым).

Чаще всего, в прошлом они сформированы как защитные механизмы. Моя помощь в том, чтобы обнаружить эти ситуации из прошлого. Прояснить/выявить истинную потребность (желание) и найти адаптивные способы достижения.

К каждому человеку у меня индивидуальный подход. Я не даю готовый план действий или исключительный совет. Однако, на консультации вполне уместны рекомендации.
Конечная цель психотерапевтического процесса для Вас – научиться самостоятельно адаптироваться к новым обстоятельствам, даже если они критические (утрата, развод, различные кризисы).

«Спасибо, дальше я сам/сама» - лучшее завершение нашей с Вами работы.<br/>
Стоимость 6000р за встречу (60 минут).</p>
<div className={styles.payment}>
          <RobokassaPay src="https://auth.robokassa.ru/Merchant/PaymentForm/FormSS.if?EncodedInvoiceId=kQyJwUfGqkqmAHFNTd90qQ"  />
        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}