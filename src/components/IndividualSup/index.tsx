'use client';

import Link from 'next/link';
import Image from 'next/image';
import styles from './IndividualSup.module.scss';

export default function IndividualSup() {
    return (
        <div>
            <div className={styles.main_con}>
                <div className={styles.flex}>
                    <div className={styles.image}><Image className={styles.imggg} alt='individual' src="/assets/images/indsup.jpg" height={482} width={482}/></div>
                    <div className={styles.text}>
                        <h2>Индивидуальная супервизия</h2>
                        <p>Я сам являюсь клиентом у своего супервизора. Для меня это не только обратная связь, расширение/усиление компетенций, и поддержка в сложных кейсах. <br/><br/>

Это процесс формирования профессиональной идентичности. Какой я специалист? Вот главный вопрос. Я на Вашей стороне в этом процессе. <br/><br/>

Длительность 60 минут. Стоимость 5000р 
</p>
                    </div>
                </div>
            </div>
        </div>
    );
}