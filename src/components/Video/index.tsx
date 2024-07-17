'use client';

import Link from 'next/link';
import Image from 'next/image';
import YouTube from 'react-youtube';

import styles from "./Video.module.scss"

export default function Video() {
    const opts = {
      width: "100%",
      height: "100%",
      playerVars: {
        autoplay: 0,
      },
    };
  return (
    <div className={styles.video_main}>
        <div className={styles.con}>
        <div className={styles.video}>
          <YouTube
          className={styles.youtube}
            videoId="wTD99oV1WqA"
            opts={opts}
              />
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