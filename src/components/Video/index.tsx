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
            videoId="-POgTXAuckU"
            opts={opts}
              />
          </div>
          <div className={styles.textblock}>
            <p>Текст краткого описания
Принимая во внимание показатели успешности, выбранный нами инновационный путь является качественно новой ступенью распределения внутренних резервов и ресурсов! Вот вам яркий пример современных тенденций — перспективное планирование предоставляет широкие возможности для системы массового участия.</p>
          </div>
        </div>
    </div>
  );
}