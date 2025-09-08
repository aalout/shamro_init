'use client';

import Link from 'next/link';
import Image from 'next/image';

import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
        <div className={styles.footer_con}>
            <Link href="/"><h2 className={styles.logotext}>АНДРЕЙ ШАМРО</h2></Link>

          <div className={styles.footer_n}>
          <Link href="https://vk.com/andreyshamro" target='_blank'><p className={styles.footer_nav}>ВКонтакте</p></Link>
          <Link href="https://vk.com/supervizor_andrey" target='_blank'><p className={styles.footer_nav}>ВК для психологов</p></Link>
            <Link href="https://t.me/andrey_shamro" target='_blank'><p className={styles.footer_nav}>Telegram для связи</p></Link>
            <Link href="https://t.me/mudrec_na_kushetke" target='_blank'><p className={styles.footer_nav}>Телеграм канал «Мудрец на кушетке»</p></Link>
            <Link href="https://www.youtube.com/@andreyshamro" target='_blank'><p className={styles.footer_nav}>Youtube</p></Link>
          </div>
        </div>
        <div className={styles.commerce}>
          <p>ИП Шамро Андрей Юрьевич 
          ИНН 231509891349</p>
          <a href="/assets/docs/Политика_конфиденциальности_ИП_Шамро.pdf" target="_blank" rel="noopener noreferrer">
            <p>Политика конфиденциальности</p>
          </a>
          <a href="/assets/docs/Оферта_ИП_Шамро.pdf" target="_blank" rel="noopener noreferrer">
            <p>Договор публичной оферты</p>
          </a>
        </div>
    </footer>
  );
}