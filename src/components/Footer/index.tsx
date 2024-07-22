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
            <Link href="https://vk.com/andrey_shamro" target='_blank'><p className={styles.footer_nav}>ВКонтакте</p></Link>
            <Link href="https://t.me/andrey_shamro" target='_blank'><p className={styles.footer_nav}>Telegram для связи</p></Link>
            <Link href="https://t.me/sreda_svoim " target='_blank'><p className={styles.footer_nav}>Telegram для своих</p></Link>
            <Link href="https://t.me/andrey_shamro" target='_blank'><p className={styles.footer_nav}>Telegram для психологов</p></Link>
            <Link href="https://www.youtube.com/@andreyshamro" target='_blank'><p className={styles.footer_nav}>Youtube</p></Link>
            <Link href="https://среда.space/" target='_blank'><p className={styles.footer_nav}>проект СРЕДА</p></Link>
          </div>
        </div>
        <div className={styles.commerce}>
          <p>ИП Шамро Андрей Юрьевич 
          ИНН 231509891349</p>
          <Link href="/privacy_policy"><p>Согласие на обработку персональных данных</p></Link>
          <Link href="/public_offer"><p>Договор публичной оферты</p></Link>
        </div>
    </footer>
  );
}