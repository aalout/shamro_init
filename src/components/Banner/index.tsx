'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

import styles from "./Banner.module.scss"

export default function Banner() {
  const [isNameVisible, setIsNameVisible] = useState(false);
  const [isStextVisible, setIsStextVisible] = useState(false);
  const [isSstextVisible, setIsSstextVisible] = useState(false);

  useEffect(() => {
    const timeoutId1 = setTimeout(() => {
      setIsNameVisible(true);
    }, 500);

    const timeoutId2 = setTimeout(() => {
      setIsStextVisible(true);
    }, 600);

    const timeoutId3 = setTimeout(() => {
      setIsSstextVisible(true);
    }, 800);

    return () => {
      clearTimeout(timeoutId1);
      clearTimeout(timeoutId2);
      clearTimeout(timeoutId3);
    };
  }, []);

  return (
    <div className={styles.banner_div}>
        <div className={styles.banner_flex}>
            <div className={`${styles.banner_text} ${isNameVisible ? styles.textVisible : ''}`}> 
                <h2 className={`${styles.name} ${isNameVisible ? styles.nameVisible : ''}`}>Андрей Шамро</h2> 
                <div className={`${styles.banner_stext} ${isStextVisible ? styles.textVisible : ''}`}>
                  <p>психолог</p>
                  <p>·</p>
                  <p>супервизор</p>
                  <p>·</p>
                  <p>онлайн</p>
                  </div>
                  <div className={`${styles.banner_sstext} ${isSstextVisible ? styles.textVisible : ''}`}>
                  <p>личностные <br/> кризисы</p>
                  <p>самореализация <br/> и карьерный рост</p>
                  <p>сложности <br/> и конфликты в отношениях</p>
                  </div>
            </div>
            

            <div>
                <Image className={styles.banner_img} alt='banner' src="/assets/images/bimage.png" width={770} height={950}/>
            </div>
        </div>
    </div>
  );
}