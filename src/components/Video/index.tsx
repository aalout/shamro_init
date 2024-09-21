'use client';

import Link from 'next/link';
import Image from 'next/image';

import styles from "./Video.module.scss"

export default function Video() {
  return (
    <div className={styles.video_main}>
        <div className={styles.con}>
        <div>
        <iframe className={styles.video} width="720" height="405" src="https://rutube.ru/play/embed/da6e09faa0926c31813ea67d2de70fa3/" allow="clipboard-write; autoplay" allowFullScreen></iframe>
          </div>
          <div className={styles.textblock}>
            <p>Приветствую Вас! 
            <br/>· Атмосфера – вот что чаще всего является залогом успешного взаимодействия. Дружелюбие, уважение, безоценочная позиция и открытость к новизне – я за такую атмосферу! 
            <br/>· Исследование Ваших ресурсов и ограничений даёт Вам возможность самостоятельно справится с актуальными жизненными вызовами и задачами. В этом процессе я на Вашей стороне. 
            <br/>· Рекомендации. «Наставник без наставлений» - так меня часто называют. Всё, чем я делюсь с Вами во время нашего взаимодействия это не «советы без запроса». Вы делаете то, что Вам подходит. </p>
          </div>
        </div>
    </div>
  );
}